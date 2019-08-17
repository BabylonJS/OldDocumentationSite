/**
 * Will run a query per category, storing search documents in azure search directory.
 * When we have a new release, all old classes SHOULD be removed. 
 * This script (currently) doesn't handle this.
 */

var fs = require('fs');
var path = require('path');
var async = require('async');
var readdirp = require('readdirp');
var htmlToText = require('html-to-text');
var appRoot = require('app-root-path').path;

var fileSplitter = require('../fileSplitter');

// Folder to exclude from the search
var removeMd = require('remove-markdown');
var rp = require('request-promise');

var statics = require('../../../data/statics.json');

var __FILES_SOURCE__ = path.join(appRoot, 'content/');

/**
 * General process:
 * 
 * 1) Get all documents from azure
 * 2) Get local documents available
 * 3) compare the two - Delta 1/2 should be removed, Delta 2/1 should be added, The rest should be updated.
 * 
 * Note - action mergeOrUpload updates or adds, so can be used to Delta 2/1 and the rest.
 */

module.exports = function index(done) {

    //only index when running the production update
    if (process.env.CONTEXT && process.env.CONTEXT !== 'production') {
        console.log('Skipping azure indexing');
        return done();
    }

    //only index if the key is there
    if (!process.env.AZURE_API_KEY) {
        console.log('Skipping azure indexing');
        return done();
    }

    // step 1 - get azure's index
    getAzureIndex().then((searchIndex) => {
        //results is now a list of documents indexed by azure search index
        // for example - {"@search.score":1.0,"id":"Y2xhc3Nlcy8zLjEvSERSQ3ViZVRleHR1cmU=","url":"classes/3.1/HDRCubeTexture","category":"classes/3.1","title":"HDRCubeTexture"}

        //step 2 - get local data to be indexed:
        var promises = Object.keys(statics).map(indexCategory);
        promises.push(indexApi());

        Promise.all(promises).then(results => {
            let toUpdate = [];
            results.forEach(res => {
                res.forEach(data => {
                    //instead of reduce.
                    toUpdate.push(data);
                });
            });

            //search the search index for files NOT in the files to be indexed:
            searchIndex.forEach(file => {
                if (!toUpdate.find(f => f.url === file.url)) {
                    // push it for deletion!
                    toUpdate.push({
                        "@search.action": "delete",
                        id: file.id
                    });
                }
            });
            //Now send it to azure 100 files at a time:
            let sendPromises = [];
            for (let i = 0; i < toUpdate.length + 99; i = i + 100) {
                let slicedUpdate = toUpdate.slice(i, i + 100);
                if (slicedUpdate.length) {
                    sendPromises.push(sendRequestToAzure(slicedUpdate));
                }
            }
            return Promise.all(sendPromises).then(() => {
                console.log("Search index updated successfully");
                done();
            }, (err) => {
                console.log("Error while processing requests", err);
                done();
            });
        });
    });
};

function getAzureIndex() {
    console.log("getting search index");
    let resultsArray = []

    // The provided key is the public key and is safe to be in a public repository!
    return getAzureIndexResults("https://babylonjs-doc.search.windows.net/indexes/documents/docs?api-version=2016-09-01&api-key=DF333E13A6C71B67290E46668C86DD7E", resultsArray);
}

function getAzureIndexResults(link, resultsArray) {
    var options = {
        method: 'GET',
        uri: link,
        json: true
    };

    return rp(options).then(result => {
        if (result.value) {
            result.value.forEach(val => {
                resultsArray.push(val);
            });
        }
        if (result["@odata.nextLink"]) {
            return getAzureIndexResults(result["@odata.nextLink"], resultsArray);
        } else {
            return resultsArray;
        }
    });
}

function indexClassVersion(file) {
    var filePath = file.fullPath;
    var fileContent = fs.readFileSync(filePath).toString();
    var name = '/api/' + file.parentDir + '/' + file.name.replace(".html", "");
    var correctName = fileContent.match(/<h1>.*?<\/h1>/g).toString().replace("<h1>", "").replace("</h1>", "");
    return {
        "@search.action": "mergeOrUpload",
        title: correctName,
        url: name,
        content: htmlToText.fromString(fileContent),
        id: Buffer.from(name).toString('base64'),
        category: 'api'
    };
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

    return values;
}

function indexApi() {
    return new Promise((resolve, reject) => {
        readdirp(
            {
                root: path.join(appRoot, 'public/html/api'),
                fileFilter: '*.html'
            },
            function (err, allFiles) {
                if (err) {
                    console.log(err);
                    return reject(error);
                }
                var values = allFiles.files.map(indexClassVersion);
                return resolve(values);
            }
        );
    });
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

function sendRequestToAzure(values, isForClasses) {
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
        .then(function (d) {
            console.log('success, updated ' + values.length + (isForClasses ? ' classes' : ' documents'));
        }).catch(function (err) {
            // catch errors here, so the entire process wouldn't fail.
            console.log("err", err.error, err.response.body);
        });
}