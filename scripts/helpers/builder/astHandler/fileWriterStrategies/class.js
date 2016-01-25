var TypeScript = require('typescript-services'),
    async = require('async'),

    Describer = require('../describer'),
    classDescriber = require('../describerStrategies/class'),
    functionDescriber = require('../describerStrategies/function'),
    variableDescriber = require('../describerStrategies/variable');

module.exports = {
    init : function (msg, cb) {
        msg.astName = msg.flash.ast.identifier.text();
        msg.ast = msg.flash.ast;
        console.log('whoo so class !', msg.astName);
        cb(null, msg);
    },
    write: function (msg, cb) {
        var className = msg.astName;

        //FIXME this should be in the init function but id on't know if the scope keeps the Describer
        Describer.setFileName(className);
        Describer.setOldDescription(msg.oldFileData);

        var classContent,
            constructorDescription = '',
            variablesDescription = '',
            functionsDescription = '';

        async.eachSeries(
            msg.ast.classElements.members,
            function (item, endIteration) {
                var me = item;
                //console.log('classWriter', TypeScript.SyntaxKind[me.kind()] + " : " + me.kind());

                switch (me.kind()) {
                    case TypeScript.SyntaxKind.ConstructorDeclaration:
                        var consd = me;
                        constructorDescription += Describer.setDescriber(functionDescriber).describe(consd, true);

                        break;
                    case TypeScript.SyntaxKind.MemberVariableDeclaration:
                        var vd = me;

                        //Ignore if child is private
                        //Members beginning by underscore are also considered as private
                        if (vd.modifiers.indexOf(TypeScript.PullElementFlags.Private) > -1
                            || vd.variableDeclarator.propertyName.text().charAt(0) == '_') break;

                        variablesDescription += Describer.setDescriber(variableDescriber).describe(vd);
                        break;
                    case TypeScript.SyntaxKind.MemberFunctionDeclaration:
                        var fd = me;

                        //Ignore if child is private
                        //Members beginning by underscore are also considered as private
                        if (fd.modifiers.indexOf(TypeScript.PullElementFlags.Private) > -1
                            || fd.propertyName.text().charAt(0) == '_') break;

                        functionsDescription += Describer.setDescriber(functionDescriber).describe(fd, true);

                        break;
                    default:
                        break;
                }
                endIteration();
            },
            function (err) {
                //Create those categories only if there is something to put inside
                if (constructorDescription != '') constructorDescription = '##Constructor\n\n' + constructorDescription;
                if (variablesDescription != '') variablesDescription = '##Members\n\n' + variablesDescription;
                if (functionsDescription != '') functionsDescription = '##Methods\n\n' + functionsDescription;


                classContent =
                    Describer.setDescriber(classDescriber).getMetas() +
                    Describer.describe(msg.ast) +
                    constructorDescription + variablesDescription + functionsDescription;

                cb(err, msg, classContent);
            }
        );
    }
};