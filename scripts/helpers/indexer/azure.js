/**
 * Will run a query per category, storing search documents in azure search directory.
 * When we have a new release, all old classes SHOULD be removed. 
 * This script (currently) doesn't handle this.
 */

var fs = require('fs');
var path = require('path');
var async = require('async');
var readdirp = require('readdirp');

var appRoot = require('app-root-path').path;

var fileSplitter = require('../fileSplitter');

// Folder to exclude from the search
var removeMd = require('remove-markdown');
var rp = require('request-promise');

var statics = require('../../../data/statics.json');
var classes = require('../../../data/classes.json');

var __FILES_SOURCE__ = path.join(appRoot, 'content/');

module.exports = function index(done) {

    /*readdirp(
        {
            root: path.join(appRoot, 'content/'),
            depth: 0
        },
        function (err, allFiles) {
            if (err) {
                console.log(err);
                return;
            }
            var promises = allFiles.directories.map(indexDirectory);

            
        }
    );*/

    /*
    var staticCategories = [
        "exporters",
        "extensions",
        "generals",
        "tutorials",
        "overviews"
    ];
    */

    if(!process.env.AZURE_API_KEY) {
        console.log('Skipping azure indexing');
        return done();
    }

    var promises = Object.keys(statics).map(indexCategory);

    // now the classes should be indexed:
    Object.keys(classes).forEach(function (c) {
        promises.push(indexClassVersion(c));
    });

    Promise.all(promises).then(function (data) {
        done();
    });
};

function indexClassVersion(version) {
    console.log('indexing', version);
    var values = classes[version].map(function (name) {
        var filePath = path.join(__FILES_SOURCE__, 'classes', version, name + '.md');
        var value = getFileIndexingObject(name, name, filePath, 'classes/' + version)
        return value;
    });

    return sendRequestToAzure(values);
}

function indexCategory(category) {
    var values = [];

    if (statics[category].files) {
        statics[category].files.forEach(function (file) {
            var filePath = path.join(__FILES_SOURCE__, category, file.filename + '.md');
            var value = getFileIndexingObject(file.title, file.filename, filePath, category)
            values.push(value);
        });
    }

    statics[category].forEach(function (subCat) {
        if (subCat.files) {
            subCat.files.forEach(function (file) {
                var filePath = path.join(__FILES_SOURCE__, category, subCat.name, file.filename + '.md');
                var value = getFileIndexingObject(file.title, file.filename, filePath, category)
                values.push(value);
            });
        }
    });

    return sendRequestToAzure(values);

    /*return new Promise(function (resolve, reject) {
        readdirp(
            {
                root: directoryObject.fullPath,
                depth: 10,
                fileFilter: '*.md'
            },
            function (err, allFiles) {
                if (err) {
                    return reject(err);
                }

                var values = allFiles.files.map(function (fileObject) {
                    return indexFile(fileObject, directoryObject.name);
                });

                var options = {
                    method: 'POST',
                    uri: 'https://babylonjs-doc.search.windows.net/indexes/documents/docs/index?api-version=2016-09-01',
                    body: {
                        value: values
                    },
                    headers: {
                        'api-key': '85AAF9CB1904C8E0006D729C78F2CD8A',
                        'Content-Type': 'application/json'
                    },
                    json: true
                };

                return rp(options)
                    .catch(function (err) {
                        // catch errors here, so the entire process wouldn't fail.
                        console.err(err);
                    }).then(resolve);
            }
        );
    });*/
}

function getFileIndexingObject(title, filename, filePath, category) {
    var fileContent = fs.readFileSync(filePath).toString();
    return {
        "@search.action": "mergeOrUpload",
        title: title,
        url: category + '/' + filename,
        content: removeMd(fileContent),
        id: Buffer.from(category + '/' + filename).toString('base64'),
        category: category
    };
}

function sendRequestToAzure(values) {
    var options = {
        method: 'POST',
        uri: 'https://babylonjs-doc.search.windows.net/indexes/documents/docs/index?api-version=2016-09-01',
        body: {
            value: values
        },
        headers: {
            'api-key': process.env.AZURE_API_KEY,
            'Content-Type': 'application/json'
        },
        json: true
    };

    return rp(options)
        .catch(function (err) {
            // catch errors here, so the entire process wouldn't fail.
            console.log(err.error, err.response.body);
        }).then(function (d) {
            console.log('success, indexed ' + values.length + ' documents');
        });
}