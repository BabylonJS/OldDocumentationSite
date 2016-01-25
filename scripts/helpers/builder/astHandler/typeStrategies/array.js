var TypeScript = require('typescript-services');

//FIXME Undefined here :(
//var typeManager = require('../typeManager');


module.exports = {
    getParameterString: function(astType){
        var TypeManager = require('../typeManager');
        astType = TypeManager.getParameterString(astType.type, true);
        astType += '[]';

        return astType;
    },
    getReturnString: function(astType){
        var TypeManager = require('../typeManager');
        astType = TypeManager.getReturnString(astType.type, true);
        astType += '[]';

        return astType;
    },
    getDescriptionString: function(astType){
        var TypeManager = require('../typeManager');
        astType = TypeManager.getReturnString(astType.type, true);
        astType += '[]';

        return astType;
    }
};