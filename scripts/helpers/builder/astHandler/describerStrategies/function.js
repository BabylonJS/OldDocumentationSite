var TypeScript = require('typescript-services');
var TypeManager = require('../typeManager');

module.exports = {
    describe: function (functioN) {
        var description = '##',
            funName = '',
            funReturnType = '';

        //If this is a constructor, then there is no name to write
        if (functioN.kind() == TypeScript.SyntaxKind.ConstructorDeclaration) {
            funName += 'new ' + functioN.parent.parent.identifier.text();

        } else {
            description += '#';
            if (functioN.kind() == TypeScript.SyntaxKind.MemberFunctionDeclaration) {
                //add static keyword if needed
                if (functioN.modifiers.indexOf(TypeScript.PullElementFlags.Static) > -1) {
                    description += 'static ';
                }
            }
            funName += functioN.propertyName.text();

            funReturnType = TypeManager.getReturnString(functioN.callSignature);

            funReturnType = ' &rarr; ' + funReturnType;


        }

        var funSignature = TypeManager.getParameterString(functioN.callSignature, true);

        funSignature += funReturnType + '\n\n';

        description += funName + funSignature;

        return description;
    }
};