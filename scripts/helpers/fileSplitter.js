/**
 * This module is designed to split and reassemble files in smaller chunks
 * @type {*}
 */

var fs = require('fs');
var path = require('path');
var async = require('async');

var fileSplitter = {};

function newPartPath(filePath, opts) {
    var file = path.parse(filePath);
    var index = opts.index || 0;
    var targetDir = opts.target || '.tmp/search';

    return path.join(targetDir, file.name + file.ext + '.' + index + '.part');
}

/**
 *
 * @param filePath
 * @param opts properties : size, targetDir
 */
fileSplitter.split = function (filePath, opts, cb) {

    //TODO waterfall this
    fs.stat(filePath, function (err, stats) {
        var size = stats.size;
        //Default is 10 Mo
        var bufferSize = opts && opts.size ? opts.size : 1024 * 1024 * 10;
        var chunkSize = bufferSize;
        var buffer = new Buffer(bufferSize);
        var bytesRead = 0;
        var filesCreated = 0;

        //TODO create dir target if it doesn't exist

        fs.open(filePath, 'r', function (err, fd) {

            //Like a while loop
            async.whilst(
                function () {
                    return bytesRead < size;
                },
                function (endIteration) {
                    if ((bytesRead + chunkSize) > size) {
                        chunkSize = size - bytesRead;
                    }
                    buffer = buffer.slice(0, chunkSize);

                    fs.read(fd, buffer, 0, chunkSize, bytesRead,
                        function readCb(err, read, buffered) {
                            if (err) console.log(err);

                            var fileName = newPartPath(filePath, {
                                index : filesCreated,
                                target: opts && opts.target ? opts.target : null
                            });

                            fs.writeFile(fileName, buffered, function writeCb(err) {
                                if (err) console.log(err);
                                bytesRead += chunkSize;
                                filesCreated++;

                                endIteration();
                            });
                        }
                    );
                },
                function (err) {
                    if (err) console.log(err);
                    fs.close(fd, function(){
                        console.log(filePath, ' splitted in ', filesCreated, ' chunks');
                        if (cb) cb();
                    });
                }
            );
        });
    });
};

function concat(files, destination, cb) {
    async.waterfall([
        async.apply(read, files),
        async.apply(write, destination)
    ], cb)
}

function read(files, cb) {
    async.mapSeries(files, readFile, cb);

    function readFile(file, cb) {
        fs.readFile(file, cb);
    }
}

function write(destination, buffers, cb) {
    fs.writeFile(
        destination,
        Buffer.concat(buffers),
        cb
    );
}

/**
 *
 * @param filePath name of the file to read
 * @param opts properties : target
 */
fileSplitter.read = function (filePath, opts) {
    fs.readdir(path.dirname(filePath), function (err, files) {
        if (err) console.log(err);

        files = files.map(function (current) {
            return path.join(path.dirname(filePath), current);
        });
        console.log(files);

        concat(files, path.join(opts.target, path.basename(filePath)), function (err, result) {
            if (err) console.log(err);

            console.log(result);
        });
    });
};

function concatSync(files) {
    files = files.map(function (file) {
        return fs.readFileSync(file);
    });

    files = Buffer.concat(files);

    return files;
}

fileSplitter.readSync = function (filePath) {
    var files = fs.readdirSync(path.dirname(filePath));

    files = files.map(function (file) {
        if (file.substr(0, file.indexOf('.json')) ==
            path.basename(filePath.substr(0, filePath.indexOf('.json')))) {
            return path.join(path.dirname(filePath), file);
        }
    }).filter(Boolean);

    return concatSync(files);
};

module.exports = fileSplitter;