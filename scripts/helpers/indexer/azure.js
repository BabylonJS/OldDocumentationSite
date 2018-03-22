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

module.exports = function index(done) {

    if(!process.env.AZURE_API_KEY) {
        console.log('Skipping azure indexing');       
        return done();
    }

    var promises = Object.keys(statics).map(indexCategory);

    readdirp(
        {
            root: path.join(appRoot, 'public/html/classes/classes'),
            depth: 0
        },
        function (err, allFiles) {
            if (err) {
                console.log(err);
                return;
            }
            var values = allFiles.files.map(indexClassVersion);
            // Send data 10 by 10
            for (var index = 0; index < values.length; index += 10) {
                var packet = [];

                for (var packetIndex = index; packetIndex < index + 10 && packetIndex < values.length; packetIndex++) {
                    packet.push(values[packetIndex]);
                }
                promises.push(sendRequestToAzure(packet, true));            
            }
            Promise.all(promises).then(function (data) {
                done();
            });
        }
    );    
};

function indexClassVersion(file) {
    var filePath = file.fullPath;
    var fileContent = fs.readFileSync(filePath).toString();
    var name = file.name.replace("babylon.", "").replace(".html", "");
    var correctName = fileContent.match(/<h1>.*?<\/h1>/g).toString().replace("<h1>", "").replace("</h1>", "");
    console.log(correctName);
    return {
        "@search.action": "mergeOrUpload",
        title: correctName,
        url: '/api.html?' + name,
        content: htmlToText.fromString(fileContent),
        id: Buffer.from('/api.html?' + name).toString('base64'),
        category: 'classes'
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

    return sendRequestToAzure(values);
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
            console.log('success, indexed ' + values.length + (isForClasses ? ' classes' : ' documents'));
        })
        .catch(function (err) {
            // catch errors here, so the entire process wouldn't fail.
            console.log(err.error, err.response.body);
        });
}