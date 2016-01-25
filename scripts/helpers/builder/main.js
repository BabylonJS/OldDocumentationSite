/**
 * The purpose of this file is to generate the new doc by also migrating the existing comments
 *
 * @type {exports}
 */

var path = require('path'),
    async = require('async'),
    fsHandler = require('../fsHandler'),
    dtsParser = require('./dtsParser'),
    mdLinksPostProcessor = require('../mdLinksPostProcessor');

var fs = require('fs');

var file = require('./config').file;

var msg = {
    file: file,
    //flash is a temporary cache memory
    flash: {}
};

//TODO delete dir when error is raised
async.waterfall([
    async.constant(msg),
    function setNewDirpath(msg, cb){
        var newDirPath = path.join(msg.file.classesLocation, msg.file.version);
        msg.flash = {
            path: newDirPath
        };
        cb(null, msg);
    },
    fsHandler.exists,
    //fsHandler.deleteDir,
    fsHandler.createDir,
    function setSourceFilePath(msg, cb){
        var newFilePath = path.join(msg.file.location, msg.file.name);
        msg.flash = {
            path: newFilePath
        };
        cb(null, msg);
    },
    fsHandler.readFile,
    function setSourceFileData(msg, cb){
        msg.sourceFileData = msg.flash.readData;
        cb(null, msg);
    },
    dtsParser.buildTree,
    function setSourceTree(msg, tree, cb){
        msg.flash = {
            ast: tree
        };
        cb(null, msg);
    },
    dtsParser.visitTree,
    resetFlash,
    function setnewClassesDirpath(msg, cb){
        var newDirPath = path.join(msg.file.classesLocation, msg.file.version);
        msg.flash = {
            path: newDirPath
        };
        cb(null, msg);
    },
    mdLinksPostProcessor.getNewFilesName,
    mdLinksPostProcessor.addLinks
], outputConsole);

//Function executed once the waterfall has finished
function outputConsole (err, data){
    if(err) console.log ('Unexpected problem : ', err);
    else console.log('Everything was fine ');
}

function resetFlash (msg, cb){
    msg.flash = {};
    cb(null, msg);
}