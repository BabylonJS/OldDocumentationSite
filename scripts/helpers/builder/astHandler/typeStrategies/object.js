var TypeScript = require('typescript-services');

module.exports = {
    getParameterString  : function (astType) {
        return objectToString(astType);
    },
    getReturnString     : function (astType) {
        return objectToString(astType);
    },
    getDescriptionString: function (astType) {
        return objectToString(astType);
    }
};

function objectToString(object) {
    var TypeManager = require('../typeManager');

    var objectTypeDescription = '{';
    for (var index in object.typeMembers.members) {
        var member = object.typeMembers.members[index];
        objectTypeDescription += ' ' + TypeManager.getParameterString(member, true);
        objectTypeDescription += ': ' + TypeManager.getReturnString(member);
        if (index != object.typeMembers.members.length - 1) objectTypeDescription += ', ';
    }
    objectTypeDescription += ' }';
    object = objectTypeDescription;

    return object;
}