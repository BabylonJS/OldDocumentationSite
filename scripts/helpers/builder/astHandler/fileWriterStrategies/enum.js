var TypeScript = require('typescript-services'),

    Describer = require('../describer'),
    enumDescriber = require('../describerStrategies/enum');

module.exports = {
    init : function (msg, cb) {
        msg.astName = msg.flash.ast.identifier.text();
        msg.ast = msg.flash.ast;
        //console.log('I enumerate !', msg.ast.identifier.text());
        cb(null, msg);
    },
    write: function (msg, cb) {
        var enumName = msg.ast.identifier.text();

        Describer.setFileName(enumName);

        var enumContent = '',
            enumMetas = Describer.setDescriber(enumDescriber).getMetas(),
            enumHeader = '##' + enumName + ' enumeration\n\n',
            enumDescription = Describer.describe(msg.ast);


        enumContent += enumMetas + enumHeader + enumDescription;

        cb(null, msg, enumContent);
    }
};
