/**
 * File system helper
 * @type {*}
 */

var fs = require('fs'),
    path = require('path');

/**
 * Reads the sourcefile
 * @param cb
 * @return file string
 */
module.exports.readFile = function (msg, cb) {
    fs.readFile(msg.flash.path, {encoding: 'utf8'}, function (err, text) {
        console.log('I am reading ..' + msg.flash.path);

        msg.flash = {
            readData: text
        };
        cb(err, msg);
    });
};

module.exports.exists = function (msg, cb) {
    fs.exists(msg.flash.path, function (exists) {
        msg.flash.exists = exists;
        cb(null, msg);
    });
};

module.exports.createDir = function (msg, cb) {

    fs.mkdir(msg.flash.path, function (err) {
        if (!err) console.log('new Directory created : ', msg.flash);
        cb(err, msg);
    });
};

module.exports.readdir = function (msg, cb) {
    fs.readdir(msg.flash.path, function (err, files) {
        msg.files = files;
        cb(err, msg);
    });
};

module.exports.writeFile = function (msg, cb) {
    fs.writeFile(msg.flash.filePath, msg.flash.dataToWrite, function (err) {
        var basename = path.basename(msg.flash.filePath, '.md');
        if (!err) console.log('file created : ', basename);

        cb(err, msg);
    });
};