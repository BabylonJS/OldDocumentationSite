var TypeScript = require('typescript-services');

module.exports = {
    getParameterString  : function (astType) {
        return indexToString(astType);
    },
    getReturnString     : function (astType) {
        return indexToString(astType);
    },
    getDescriptionString: function (astType) {
        return indexToString(astType);
    }
};

function indexToString(index){
    var TypeManager = require('../typeManager');
    var indexString ='[';

    indexString += TypeManager.getParameterString(index.parameter.identifier, true);

    indexString += ': ' + TypeManager.getReturnString(index.parameter);

    indexString += ']';
    console.log('found index sign');
    return indexString;
}