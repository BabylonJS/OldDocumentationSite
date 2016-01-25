var TypeScript = require('typescript-services');

//FIXME Undefined here :(
//var typeManager = require('../typeManager');


module.exports = {
    getParameterString  : function (astType) {
        return functionToString(astType);
    },
    getReturnString     : function (astType) {
        return functionToString(astType);
    },
    getDescriptionString: function (astType) {
        return functionToString(astType);
    }
};

function functionToString(functioN) {
    var TypeManager = require('../typeManager');
    var parameters = functioN.parameterList.parameters.members;
    var returnType = TypeManager.getReturnString(functioN.parameterList.parameters.parent.parent.type, true);

    functioN = '(';
    for (var index in parameters) {
        functioN += parameters[index].typeAnnotation.parent.identifier._text;
        functioN += ': ';
        functioN += TypeManager.getParameterString(parameters[index]);
        if (index < parameters.length - 1) {
            functioN += ', ';
        }
    }
    functioN += ') =&gt; ';
    functioN += returnType;

    return functioN;
}