var TypeScript = require('typescript-services');

module.exports = {
    describe: function(clasS){
        var description = '##Description\n\n',
            name = clasS.identifier.text(),
            heritageClauses = clasS.heritageClauses.members,
            classExtends = '';

        for (var index in heritageClauses) {
            var clause = heritageClauses[index];

            if (clause.kind() === TypeScript.SyntaxKind.ExtendsHeritageClause) {
                classExtends = clause.typeNames.members[0].text();
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
