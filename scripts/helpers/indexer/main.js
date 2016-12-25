/**
 * Load and write search index
 * @type {*}
 */

var fs = require('fs');
var path = require('path');
var async = require('async');
var readdirp = require('readdirp');
var mkpath = require('mkpath');

var lbl = require('line-by-line');

var _ = require('lodash');

var appRoot = require('app-root-path').path;
var fulltextsearch = require('full-text-search');

var fileSplitter = require('../fileSplitter');

// Folder to exclude from the search
var toExcludeFromSearch = ['classes', '2.2', '2.3'];

module.exports = function index(done) {

    // create data/search directory if non-existent
    fs.stat(path.join(appRoot, 'data/search'), function(err, statsObj){
        if(err){
            fs.mkdirSync(path.join(appRoot, 'data/search'));
        }
    });

    readdirp(
        {
            root      : path.join(appRoot, 'content/'),
            depth     : 10,
            //entryType : 'files',
            fileFilter: '*.md'
        },
        function (err, allFiles) {
            if (err) {
                console.log(err);
                return;
            }
            
            var tempDirectory = '.tmp/search/';
            createDir(tempDirectory, function() {
                var i = -1;
                var next = function() {
                    if (++i === allFiles.directories.length) {
                        console.log('markdown totally indexed !');
                        if (done) done();
                        return;
                    }
                    
                    var directoryName = allFiles.directories[i].name;

                    //Ignore directory classes
                    if (toExcludeFromSearch.indexOf(directoryName) != -1) {
                        console.log(directoryName, 'excluded');
                        next();
                    }
                    else {
                        indexDirectory(allFiles.files, directoryName, tempDirectory, next);
                    }
                };
                next();
            });
        }
    );
};

function createDir(dir, cb){
    mkpath(dir, cb);
}

function indexDirectory(files, currentDirectory, newDir, cb) {
    var search = new fulltextsearch({index_amount:8, minimum_chars: 2});
    async.each(files,
        function (fileInfo, endIteration) {
            if (fileInfo.stat) {
                delete fileInfo.stat;
            }
            
            // Only take in account files from the directory.
            if (fileInfo.parentDir.substring(fileInfo.parentDir.lastIndexOf(path.sep) + 1) !== currentDirectory) {
                endIteration();
                return;
            }
            
            var lr = new lbl(fileInfo.fullPath);
            lr  .on('error', function (err) {
                    console.log('err', err, fileInfo);
                    endIteration(err);
                })
                .on('line', function (line) {
                    if (line) {
                        lr.pause();
                        var changeSlashes = new RegExp(_.escapeRegExp(path.sep), 'g');

                        //FIXME this is a hotfix to keep links working for statics
                        if(fileInfo.parentDir.indexOf('classes'+path.sep) != -1){
                            var src = path.join(fileInfo.parentDir, path.basename(fileInfo.name, '.md')).replace(changeSlashes, '/');
                        } else {

                            //remove the folder name between tutorials ane the tuto name, for example
                            var src = path.join(fileInfo.parentDir.substr(0, fileInfo.parentDir.indexOf(path.sep)), path.basename(fileInfo.name, '.md')).replace(changeSlashes, '/');
                        }
                        search.add({
                            //src is the link in the website
                            src: src,
                            name: path.basename(fileInfo.name, '.md').replace(/_/g, ' '),
                            text: line
                        });
                        lr.resume();
                    }
                })
                .on('end', function () {
                    console.log(fileInfo.name, ' indexed');
                    endIteration();
                });
        },
        function (err) {
            if (err) console.log('each error : ', err);
            console.log('all indexes loaded for ' + currentDirectory);
            
            var newFile = path.join(newDir, currentDirectory + '.json');
            console.log('wait during index building : ', newFile);

            //Save index
            fs.writeFile(newFile, JSON.stringify(search), function(err2){
                if(err2) console.log(err2);

                fileSplitter.split(newFile, {target: 'data/search'}, function() {
                    cb();
                });
            });
        }
    );
}
