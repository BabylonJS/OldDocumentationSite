var TypeScript = require('typescript-services');

module.exports = {
    getParameterString  : function (astType) {
        return astType._text;
    },
    getReturnString     : function (astType) {
        return astType._text;
    },
    getDescriptionString: function (astType) {
        return astType._text;
    }
};