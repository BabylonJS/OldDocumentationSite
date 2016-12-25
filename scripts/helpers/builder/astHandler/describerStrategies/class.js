var TypeScript = require('typescript-services');

module.exports = {
    describe: function(clasS){
        var description = '## Description\n\n',
            name = clasS.identifier.text(),
            heritageClauses = clasS.heritageClauses.members,
            classExtends = '';

        for (var index in heritageClauses) {
            var clause = heritageClauses[index];

            if (clause.kind() === TypeScript.SyntaxKind.ExtendsHeritageClause) {
                if (clause.typeNames.members[0].text) {
                    classExtends = clause.typeNames.members[0].text();
                }else if (clause.typeNames.members[0].name) {
                    classExtends = clause.typeNames.members[0].name._text;
                }else {
                    classExtends = clause.typeNames.members[0].left._text +"."+clause.typeNames.members[0].right._text;
                }
            }
            //else if (clause.kind() === TypeScript.SyntaxKind.ImplementsHeritageClause) {
            //    classImplements = clause.typeNames.members[0].text();
            //}
        }
        description += 'class ' + name +
            (classExtends ? ' extends ' + classExtends : '') + '\n\n';

        //classImplements ? description = '##Implements:' +  classImplements +'\n'+ description : null;

        return description;
    }
};
