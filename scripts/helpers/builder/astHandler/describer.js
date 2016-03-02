/**
 * Extracts description from object, imports old description and formats everything
 * @type {TypeScript|exports|module.exports}
 */

var TypeScript = require('typescript-services');
var TypeManager = require('./typeManager');

var file = require('../config').file;

var Describer = {
    fileName      : '',
    oldDescription: '',
    describer     : ''
};

Describer.setFileName = function (fileName) {
    this.fileName = fileName;
    return this;
};

Describer.setOldDescription = function (data) {
    //Before saving it, we need to get rid of links in md
    this.oldDescription = stripMdLinks(data);
    return this;
};

Describer.setDescriber = function (describer) {
    this.describer = describer;
    return this;
};

Describer.describe = function (astElement, withParams) {
    var astFormatted = Describer.describer.describe(astElement);
    var astComments = this.getComments(astElement, astFormatted, withParams);

    return astFormatted + astComments;
};
/**
 * returns comments of the given element
 * @param astElement AST TypeScript object
 * @param withParams boolean tells if the given object is commented with parameters or not
 * @return string
 */
Describer.getComments = function (astElement, astFormatted, withParams) {

    var serializedComments = '',
        rawComments = astElement.preComments(),
        comments = '';

    var stripNewLines = /^\s+|\s+$/g;
    var typeOfSearch = "";

    //strip new lines before and after the string
    astFormatted = astFormatted.replace(stripNewLines, '');
    //strip spaces around the string
    astFormatted = astFormatted.trim();
    //Espace specials chars, so that this string can be inserted in a regexp
    astFormatted = astFormatted.replace(/([()[{*+.$^\\|?])/g, '\\$1');

    var hasOldData = this.oldDescription ? true : false;
    if (hasOldData) {

        var searchString = astFormatted;

        // If it's the class description
        if (astFormatted.indexOf("## Description") != -1)
        {
            typeOfSearch = "class";
            searchString = "## Description";
        }
        // Else if it's a function
        else if (astFormatted.indexOf("&rarr;") != -1)
        {
            typeOfSearch = "function";
            searchString = astFormatted.substring(0, astFormatted.indexOf("&") + 6);
        }
        // Else if it's a member
        else if (astFormatted.indexOf(":") != -1)
        {
            typeOfSearch = "member";
            searchString = astFormatted.substring(0, astFormatted.indexOf(":"));
        }

        var getOldLine = new RegExp(searchString + "\\s*((.*\\s*)*?)(?=^#|$)", 'gm');
        var getOldLineWithoutSpace = new RegExp(searchString.replace(' ','')+ "\\s*((.*\\s*)*?)(?=^#|$)", 'gm');

        var getOldParams = /(^([^\n\r]*)\|([^\n\r]*)$)/gm;

        var oldLineReged = '';
        var oldLineDescription = '';
    }

    //Serialize the array of comments
    for (var i in rawComments) {
        serializedComments += rawComments[i].fullText() + '\n';
    }

    if (!withParams) {
        var textRegexp = /(?=\*\s)(?!\*\n).*$/gm;
        /*
         line will look like :
         "* Description text"
         */
        var line = textRegexp.exec(serializedComments);

        /*
         Iterate over multilines comment
         */
        while (line != null) {
            /*
             take out the first asterisk and space, now looks like
             "Description text"
             */
            comments += line[0].slice(2) + '\n\n';

            line = textRegexp.exec(serializedComments);

        }

        // TODO : Refactor with the other
        if (!comments && hasOldData) {

            oldLineReged = getOldLine.exec(this.oldDescription);
            if(!oldLineReged) {
                oldLineReged = getOldLineWithoutSpace.exec(this.oldDescription);
            }

            if (oldLineReged) {
                oldLineDescription = oldLineReged[1];

                if(typeOfSearch == "class") {
                    oldLineDescription = oldLineDescription.substring(oldLineDescription.indexOf("\n") + 1);
                    oldLineDescription = oldLineDescription.substring(oldLineDescription.indexOf("\n") + 1);
                    comments += oldLineDescription;
                }
                else if(typeOfSearch == "member") {

                    comments += oldLineDescription.substring(oldLineDescription.indexOf("\n") + 2);
                }
                else {
                    comments += oldLineDescription;
                }

            }
        }

        comments = comments.replace(stripNewLines, '') + '\n\n';

    }
    else {
        var notParamRegexp = /(?:^\s*\*\s)(?!\@param)(.*)/gm;
        var funParameters = astElement.callSignature.parameterList.parameters.members;

        var line = notParamRegexp.exec(serializedComments);

        while (line != null) {

            comments += line[1] + '\n\n';

            line = notParamRegexp.exec(serializedComments);
        }

        // TODO : Refactor with the other
        if (!comments && hasOldData) {

            oldLineReged = getOldLine.exec(this.oldDescription);
            if(!oldLineReged) {
                oldLineReged = getOldLineWithoutSpace.exec(this.oldDescription);
            }

            if (oldLineReged) {
                oldLineDescription = oldLineReged[1];

                if(typeOfSearch == "function") {
                    comments += oldLineDescription.substring(oldLineDescription.indexOf("\n") + 2)
                }
                else {
                    comments += oldLineDescription;
                }
            }
        }
        comments = comments.replace(stripNewLines, '') + '\n';

        if (hasOldData && funParameters.length > 0) {
            var oldLineIndex = getOldLine.lastIndex;
            var oldTemp = this.oldDescription.substr(oldLineIndex);

            //We need to execute it twice, before, in order to get rid of results we don't want
            getOldParams.exec(oldTemp);
            getOldParams.exec(oldTemp);

            /**
             * Get the old comments from the arrays
             * @type {Array}
             */
            var paramOldComments = [];
            var paramOldComment = getOldParams.exec(oldTemp);
            while (paramOldComment != null) {
                var start = paramOldComment[0].indexOf("|")+1;
                var end = paramOldComment[0].substr(paramOldComment[0].indexOf("|")+1).indexOf("|")-1 + start;
                var name = paramOldComment[0].substring(start, end);

                paramOldComments[name] = (paramOldComment[0].substr(paramOldComment[0].lastIndexOf("|")+1));
                paramOldComment = getOldParams.exec(oldTemp);

            }
        }

        var parametersHeader = '#### Parameters\n' +
            ' | Name | Type | Description\n' +
            '---|---|---|---\n';

        var parametersDescription = '';

        parametersDescription += TypeManager.getDescriptionString(astElement.callSignature, serializedComments, true);
        parametersDescription += "\n";

        /**
         * Add the old comments in the new .md
         * In the arrays of ##Params
          */

        var paramDescLine = [];
        var searchBreak = parametersDescription.search(/\n/);

        while (searchBreak != -1) {
            var line = parametersDescription.substring(0, searchBreak);
            var start = line.indexOf("|")+1;
            var end = line.substr(line.indexOf("|")+1).indexOf("|")-1 + start;
            var name = line.substring(start, end);

            paramDescLine[name] = line;
            parametersDescription = parametersDescription.slice(searchBreak+1, parametersDescription.length-1);

            searchBreak = parametersDescription.search(/\n/);
        }

        parametersDescription = "";
        for(var index in paramDescLine) {
            // If there was description
            if(paramOldComments && paramOldComments[index]) {
                // Merge the comments with the new description
                parametersDescription += paramDescLine[index] + paramOldComments[index] + "\n";
            }
            else {
                // Just add the new one
                parametersDescription += paramDescLine[index] + "\n";
            }
        }

        if (funParameters.length > 0) {
            comments += '\n' + parametersHeader + parametersDescription;
        }
    }

    return comments;
};

Describer.getMetas = function () {

    //This retrieve all the metas from first "---" to second "---" (searched with "---" and "##" because don't work with newline character
    var beginMetasToken = '---';
    var endMetasToken = '##';
    var oldMetas = this.oldDescription.substring(0, this.oldDescription.indexOf(endMetasToken, this.oldDescription.indexOf(beginMetasToken)) + endMetasToken.length);
    if(oldMetas) {
        // Delete the '##' found and replace it with a newline
        oldMetas = oldMetas.substring(0, oldMetas.lastIndexOf('---')+3);
        oldMetas += '\n';
    }

    var defaultMetas = '---\nTAGS:\n---\n';

    return (oldMetas ? oldMetas: defaultMetas);
};

function stripMdLinks(mdData) {
    var getMdLinks = /\[(\w+)\]\(.*?\)/g;

    return mdData ? mdData.replace(getMdLinks, '$1') : '';
}

module.exports = Describer;