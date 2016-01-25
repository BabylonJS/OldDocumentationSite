var TypeScript = require('typescript-services');
var TypeManager = require('../typeManager');

module.exports = {
    describe: function (variable) {
        var description = '###';

        //The MemberVariableDeclaration object encapsulates the variable declaration
        if (variable.kind() == TypeScript.SyntaxKind.MemberVariableDeclaration) {
            //add static keyword if needed
            if (variable.modifiers.indexOf(TypeScript.PullElementFlags.Static) > -1) {
                description += 'static ';
            }

            variable = variable.variableDeclarator;
        }

        var varName = variable.propertyName.text();

        //Extract the variable type
        var varType = TypeManager.getReturnString(variable);
        //var varType = variable.typeAnnotation.type;

        description += varName + ' : ' + varType + '\n\n';

        return description;
    }
};