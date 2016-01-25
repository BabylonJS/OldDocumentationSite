var fs = require('fs'),
    path = require('path'),
    marked = require('meta-marked'),

    appRoot = require('app-root-path').path,

    fsHandler = require('./helpers/fsHandler'),
    async = require('async');

module.exports = function (dirs, done) {

    var msg = {};
    async.eachSeries(dirs,
        function loadFiles(dir, endIteration) {
            msg.flash = {
                path: dir.path
            };
            msg[dir.name] = [];
            async.waterfall([
                async.constant(msg),
                fsHandler.readdir,
                function (msg, cb) {
                    msg[dir.name] = [];

                    async.each(msg.files,
                        function readMetas(file, endIteration2) {
                            fsHandler.readFile({flash: {path: path.join(msg.flash.path, file)}},
                                function (err, result) {
                                    var fileMetas = marked(result.flash.readData).meta;
                                    if (fileMetas) {
                                        var fileData = {
                                            name: path.basename(fileMetas.PG_TITLE, '.md')
                                        };
                                        var fileTags = fileMetas.TAGS;
                                        if (fileTags) {
                                            fileData.tags = [];
                                            fileData.tags = fileTags;
                                        }
                                    }
                                    msg[dir.name].push(fileData);

                                    endIteration2(err);
                                });
                        },
                        function (err) {
                            cb(err, msg);
                        });
                }
            ], function (err, msg) {
                /**
                 * Clean the msg objects
                 */

                if (err) {
                    logger.info(err);
                }
                delete msg.flash.path;
                delete msg.files;
                endIteration(err);
            });
        },
        function (err) {

            /**
             * Write de jsons
             */
            delete msg.flash;
            var write1 = {
                flash: {
                    filePath   : path.join(appRoot, 'data/static-list.json'),
                    dataToWrite: JSON.stringify(msg)
                }
            };
            fsHandler.writeFile(write1, done);
        }
    );
};