var TypeScript = require('typescript-services');

//FIXME Undefined here :(
//var typeManager = require('../typeManager');


module.exports = {
    getParameterString: function (astType) {
        return functionToString(astType);
    },
    getReturnString: function (astType) {
        return functionToString(astType);
    },
    getDescriptionString: function (astType, description) {
        var TypeManager = require('../typeManager');
        var parametersDescription = '';
        var funParameters = astType.parameterList.parameters.members;
        var paramRegexp = /(?:\*\s\@param\s+)(\w*)(.*)/gm;

        for (var index in funParameters) {
            var parameter = funParameters[index];
            var parameterName = TypeManager.getParameterString(parameter.identifier, true);
            //var parameterName = parameter.identifier.text();
            var parameterType = parameter.typeAnnotation ? parameter.typeAnnotation.type : null;

            /**
             * This section handles the following case
             * constructor(n: number | any)
             */
            if (!parameterType) {
                parametersDescription = [parametersDescription.slice(0, parametersDescription.length - 3), 'or ' + parameterName + ' ', parametersDescription.slice(parametersDescription.length - 3)].join('');
                continue;
            }

            //optional parameter
            parameter.questionToken ? parametersDescription += 'optional | ' : parametersDescription += ' | ';

            //name of the parameter
            parametersDescription += parameterName + ' | ';

            parametersDescription += TypeManager.getDescriptionString(parameter);

            parametersDescription += ' | ';

            //description of the parameter
            var paramLine = paramRegexp.exec(description);
            //We need to find the line that comments our parameter
            while (paramLine != null) {
                if (paramLine[1] == parameterName) {
                    parametersDescription += paramLine[2];
                }
                paramLine = paramRegexp.exec(description);
            }

            //break line to go to the next parameter
            parametersDescription += '\n';

            //add a second line break if it is the last element of the table
            if (index == funParameters.length - 1) parametersDescription += '\n';

        }

        return parametersDescription;


    }
};

function functionToString(functioN) {
    var TypeManager = require('../typeManager');
    var parameters = [];
    var returnType = "";
    if (functioN.parameterList) {
        parameters = functioN.parameterList.parameters.members;
        returnType = TypeManager.getReturnString(functioN.parameterList.parameters.parent.parent.type, true);

        functioN = '(';
        for (var index in parameters) {
            if (!parameters[index].typeAnnotation) {
                functioN += parameters[index].identifier._text; // jch updated here
            } else {
                functioN += parameters[index].typeAnnotation.parent.identifier._text;
            }
            functioN += ': ';
            functioN += TypeManager.getParameterString(parameters[index]);
            if (index < parameters.length - 1) {
                functioN += ', ';
            }
        }
        functioN += ') =&gt; ';
        functioN += returnType;
    } else {
        functioN = '() =&gt; void';
    }

    return functioN;
}