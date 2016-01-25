/**
 * add markdown links into data pointing to classes
 * @type {exports|module.exports}
 */

var fsHandler = require('./fsHandler');
var async = require('async');
var path = require('path');

module.exports.getNewFilesName = function (msg, cb) {
    fsHandler.readdir(msg, cb);
};

module.exports.addLinks = function (msg, cb) {
    var classeNames = msg.files;
    var dirPath = path.join(msg.file.classesLocation, msg.file.version);

    async.eachSeries(
        classeNames,
        function (className, endIteration) {
            async.waterfall([
                    async.constant(msg),
                    function (msg, cb) {
                        msg.flash = {
                            path: path.join(dirPath, className)
                        };
                        cb(null, msg);
                    },
                    fsHandler.readFile,
                    applyRegexp,
                    function (msg, cb) {
                        msg.flash = {
                            dataToWrite: msg.newData,
                            filePath   : path.join(dirPath, className)
                        };
                        cb(null, msg);
                    },
                    fsHandler.writeFile
                ],
                function (err, msg) {
                    if (err) console.log('Adding links failed for : ', className, '\nWith error :', err);
                    else console.log('Adding links succeed for :', className);

                    endIteration();
                });
        }, function (err) {
            cb(err, msg);
        }
    );
};

function applyRegexp(msg, cb) {
    var classeNames = msg.files;
    var newData = msg.flash.readData;

    //save metas
    var beginMetasToken = '---';
    var endMetasToken = '\n---';
    var endOfMetasIndex = newData.indexOf(endMetasToken, newData.indexOf(beginMetasToken)) + endMetasToken.length;
    var oldMetas = newData.substring(0, endOfMetasIndex);
    var defaultMetas = '---\nTAGS:\n---\n';
    if(!oldMetas) oldMetas = defaultMetas;

    //delete metas from data before adding links
    newData = newData.substring(endOfMetasIndex);

    async.each(
        classeNames,
        function (className, endIteration) {
            var surroundbyLink = new RegExp('\\b' + path.basename(className, '.md') + '\\b', 'gm');
            newData = newData.replace(surroundbyLink, '[$&](/classes/' + msg.file.version + '/$&)');
            endIteration();
        }, function (err) {
            msg.newData = oldMetas + newData;
            cb(err, msg);
        }
    )
}
