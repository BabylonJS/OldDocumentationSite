/**
 * Sets strategy in order to handle ast object depending of the type of the given object
 * @type {TypeScript|exports|module.exports}
 */

var TypeScript = require('typescript-services');

var plainTypes = require('./typeStrategies/plainTypes');
var functionType = require('./typeStrategies/function');
var objectType = require('./typeStrategies/object');
var arrayType = require('./typeStrategies/array');
var callSignatureType = require('./typeStrategies/callSignature');
var indexSignatureType = require('./typeStrategies/indexSignature');
var propertySignatureType = require('./typeStrategies/propertySignature');
var genericType = require('./typeStrategies/generic');

var typeManager = {
    typeManager: ''
};

typeManager.setTypeManager = function (typeManager) {
    this.typeManager = typeManager;
    return this;
};

/**
 * This is a dispatcher, it recognizes the type of the passed object
 * @param ast
 * @param alreadyType boolean telling if the ast is already a type or an ast object
 */
typeManager.setAstType = function (ast, alreadyType) {
    if(!alreadyType) var astType = ast.typeAnnotation.type;
    else var astType = ast;

    console.log('My kind is', TypeScript.SyntaxKind[astType.kind()]);

    switch (astType.kind()) {
        case TypeScript.SyntaxKind.VoidKeyword:
        case TypeScript.SyntaxKind.AnyKeyword:
        case TypeScript.SyntaxKind.NumberKeyword:
        case TypeScript.SyntaxKind.BooleanKeyword:
        case TypeScript.SyntaxKind.StringKeyword:
        case TypeScript.SyntaxKind.IdentifierName:
        case TypeScript.SyntaxKind.Identifier:
            this.setTypeManager(plainTypes);
            break;
        case TypeScript.SyntaxKind.CallSignature:
            this.setTypeManager(callSignatureType);
            break;
        case TypeScript.SyntaxKind.FunctionType:
            this.setTypeManager(functionType);
            break;
        case TypeScript.SyntaxKind.ObjectType:
            this.setTypeManager(objectType);
            break;
        case TypeScript.SyntaxKind.ArrayType:
            this.setTypeManager(arrayType);
            break;
        case TypeScript.SyntaxKind.GenericType:
            this.setTypeManager(genericType);
            break;
        case TypeScript.SyntaxKind.IndexSignature:
            this.setTypeManager(indexSignatureType);
            break;
        case TypeScript.SyntaxKind.PropertySignature:
            this.setTypeManager(propertySignatureType);
            break;
        default:
            break;
    }
    return this;
};

typeManager.getParameterString = function (ast, alreadyType) {
    this.setAstType(ast, alreadyType);
    return alreadyType ? this.typeManager.getParameterString(ast) : this.typeManager.getParameterString(ast.typeAnnotation.type);
};

typeManager.getReturnString = function (ast, alreadyType) {
    this.setAstType(ast, alreadyType);
    return alreadyType ? this.typeManager.getReturnString(ast) : this.typeManager.getReturnString(ast.typeAnnotation.type);
};

typeManager.getDescriptionString = function (ast, description, alreadyType) {
    this.setAstType(ast, alreadyType);
    return alreadyType ? this.typeManager.getDescriptionString(ast, description) : this.typeManager.getDescriptionString(ast.typeAnnotation.type, description);

};

module.exports = typeManager;