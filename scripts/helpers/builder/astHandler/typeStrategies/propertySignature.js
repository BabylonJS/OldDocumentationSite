var TypeScript = require('typescript-services');

//FIXME Undefined here :(
//var typeManager = require('../typeManager');

module.exports = {
    getParameterString  : function (astType) {
        return propertyToString(astType);
    },
    getReturnString     : function (astType) {
        return propertyToString(astType);
    },
    getDescriptionString: function (astType) {
        return propertyToString(astType);
    }
};

function propertyToString(property){
    var TypeManager = require('../typeManager');
    return TypeManager.getParameterString(property.propertyName, true);
}
