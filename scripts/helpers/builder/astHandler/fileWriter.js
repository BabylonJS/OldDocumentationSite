/**
 * Imports older version of classes and writes the final data
 * @type {async|exports|module.exports}
 */

var async = require('async'),
    path = require('path'),
    fsHandler = require('../../fsHandler');

var FileWriter = function () {
    this.writer = ''
};

FileWriter.prototype.setWriter = function (writer) {
    this.writer = writer;
    return this;
};

FileWriter.prototype.write = function (msg, mainCallback) {
    return async.waterfall([
        async.constant(msg),
        this.writer.init,
        this.checkOldVersion,
        this.getOldVersion,
        function (msg, cb) {
            msg.oldFileData = msg.flash.readData;
            cb(null, msg);
        },
        this.writer.write,
        function (msg, dataToWrite, cb) {
            msg.flash = {
                dataToWrite: dataToWrite,
                filePath   : path.join(msg.file.classesLocation, msg.file.version, msg.astName) + '.md'
            };
            cb(null, msg);
        },
        this.createMd
    ], function (err, msg) {
        if (err) console.log('Error : ', err);
        else {
            console.log('Done with ', path.basename(msg.astName));
        }

        mainCallback(err);
    });
};
/**
 * builds the path and call the writeFile function
 * @param file the file information object which was built in main.js
 * @param elementName The name of the element which is the name of the new file
 * @param dataToWrite The data to add into the file
 * @param temp boolean at true tells that the file has the double extension .tmp.md
 * @param cb
 */
FileWriter.prototype.createMd = function (msg, cb) {
    //TODO : Instead of making a double extension .tmp.md, create a new dir .tmp
    //var filePath = path.join(file.classesLocation, file.version, elementName) + (temp ? '.tmp' : '') + '.md';

    fsHandler.writeFile(msg, cb);
};

FileWriter.prototype.appendImplementation = function (filePath, implementation, cb) {
    if (implementation) {
        fsHandler.appendToFile(filePath, implementation, cb);
    }

    cb(null, implementation);
};

FileWriter.prototype.checkOldVersion = function (msg, cb) {
    msg.flash = {
        path: path.join(msg.file.classesLocation, msg.file.previousVersion, msg.astName + '.md')
    };
    console.log('check old version of ', msg.astName);

    fsHandler.exists(msg, cb);
};

FileWriter.prototype.getOldVersion = function (msg, cb) {
    if (msg.flash.exists) {
        console.log('I found the old one !');
        fsHandler.readFile(msg, cb);
    } else {
        console.log('There is no old here ...');
        msg.oldFileData = '';
        cb(null, msg);
    }

};

module.exports = FileWriter;