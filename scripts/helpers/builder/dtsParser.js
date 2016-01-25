/**
 * Holds the typescript definition parser
 * @type {TypeScript|exports|module.exports}
 */

var TypeScript = require('typescript-services'),
    async = require('async');

var FileWriter = require('./astHandler/FileWriter'),
    ClassWriter = require('./astHandler/fileWriterStrategies/class'),
    EnumWriter = require('./astHandler/fileWriterStrategies/enum');

/**
 * Parses .d.ts string
 * Outputs an  Abstract Syntax Tree
 * @param text input
 * @param cb
 */
var buildTree = function (msg, cb) {
    console.log('I am the tree builder !');

    //A plain array of JSON elements, including classes, enums, interfaces
    //TODO get rid of that
    //var elements = [];

    var syntaxTree = TypeScript.Parser.parse(msg.file.name,
        TypeScript.SimpleText.fromString(msg.sourceFileData),
        true /* is .d.ts? */,
        new TypeScript.ParseOptions(TypeScript.LanguageVersion.EcmaScript5, true /* allow ASI? */));

    var cs = new TypeScript.CompilationSettings();
    cs.codeGenTarget = TypeScript.LanguageVersion.EcmaScript5;
    var ics = TypeScript.ImmutableCompilationSettings.fromCompilationSettings(cs);

    var sourceUnit = TypeScript.SyntaxTreeToAstVisitor.visit(syntaxTree, msg.file.name, cs, false);

    cb(null, msg, sourceUnit.moduleElements);
};

/**
 * Recursive function exploring the tree
 * Recursivity is used to handle the module nesting
 * @param file
 * @param treeInput
 * @param elements
 * @param cb callback which passes the result to the next function of the waterfall
 */
var visitTree = function (msg, cb) {
    console.log('let\'s visit this');

    async.eachSeries(
        msg.flash.ast.members,
        function (item, endIteration) {
            var me = item;
            //console.log(TypeScript.SyntaxKind[me.kind()] + " : " + me.kind());

            if (me.kind() == TypeScript.SyntaxKind.ModuleDeclaration) {
                var md = me;
                /**
                 * We are not interested into modules, let's just dig deeper into the tree
                 */
                msg.flash.ast = md.moduleElements;
                visitTree(msg, endIteration);

            } else if (me.kind() == TypeScript.SyntaxKind.ClassDeclaration) {
                var cd = me;

                if (cd.modifiers.indexOf(TypeScript.PullElementFlags.Private) > -1
                    || cd.identifier.text().charAt(0) == '_'){
                    endIteration();
                } else{
                    /**
                     * When we reach a class, create it and fill it up
                     */
                    msg.flash.ast = cd;
                    var classWriter = new FileWriter();
                    classWriter.setWriter(ClassWriter).write(msg, endIteration);
                }

            } else if (me.kind() == TypeScript.SyntaxKind.EnumDeclaration) {
                var ed = me;
                /**
                 * Enumerations are handled the same way as classes
                 */
                msg.flash.ast = ed;
                var enumWriter = new FileWriter();
                enumWriter.setWriter(EnumWriter).write(msg, endIteration);
            } else {
                endIteration();
            }
            //console.log('looped : ', TypeScript.SyntaxKind[me.kind()] + " : " + me.kind());
        },
        function (err) {
            cb(err, msg);
        }
    );
};

module.exports.buildTree = buildTree;

module.exports.visitTree = visitTree;