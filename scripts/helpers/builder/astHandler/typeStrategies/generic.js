var TypeScript = require('typescript-services');

//FIXME Undefined here :(
//var typeManager = require('../typeManager');

module.exports = {
    getParameterString  : function (astType) {
        return genericToString(astType);
    },
    getReturnString     : function (astType) {
        return genericToString(astType);
    },
    getDescriptionString: function (astType) {
        return genericToString(astType);
    }
};

function genericToString(generic) {
    var TypeManager = require('../typeManager');
    var argumentList = generic.typeArgumentList.typeArguments.members;

    generic = TypeManager.getReturnString(generic.name, true);

    generic += '&lt;';
    for (var index in argumentList) {
        generic += TypeManager.getParameterString(argumentList[index], true);
        if (index < argumentList.length - 1) {
            generic += ', ';
        }
    }
    generic += '&gt;';

    return generic;
}

