var fs          = require('fs');
var r           = require('request');
var path        = require('path');
var marked      = require('meta-marked');
var mdBuilder   = require('./helpers/builder/mdBuilder');
var appRoot     = require('app-root-path').path;
var logger      = require(path.join(appRoot, 'config/logger'));
var url         = 'http://babylondoc.azurewebsites.net/private/export-md-pages.php';
var __DIRNAME__ = 'content/classes/';

/**
 * Gets all the md pages from the Azure DB of the previous documentation site,
 * and transform them to .md files.
 */
r(url, function (error, response, body) {

    // body = JSON String --- json = JSON Object
    var pages = JSON.parse(body);
    var formattedData = [];

    //exclude private items
    var regexp = new RegExp('/^_/');

    //custom excluding array with id pages to exclude
    var exclude = [
        24451, 24450, 24864, 25112,
        24604, 24606, 24608, 24610, 24605, 24609, 24607, 24611,
        25078, 25080, 25082, 25084, 25079, 25083, 25081, 25085,
        25354, 25356, 25358, 25360, 25353, 25355, 25359, 25357, 25361
    ];

    pages.map(function(page){
        if(!page['PG_TITLE'].match(regexp) && exclude.indexOf(page['ID_PAGE']-0) == -1){

            this.push({
                id     : page['ID_PAGE'],
                title  : page['PG_TITLE'],
                version: page['PG_VERSION'],
                content: page['PG_CONTENT']
                    // transforms [BABYLON](page.php?p=5696).AbstractMesh.BILLBOARDMODE_NONE to [AbstractMesh](/classes/AbstractMesh).BILLBOARDMODE_NONE
                    .replace(/\[BABYLON\]\(page\.php\?p=\d+\)\.(\w*)/gi, '[$1](/classes/$1)')
                    // transforms '[Node](page.php?p=5701)' to [Node](/classes/Node)
                    .replace(/\[([^\]]*)\](\(page\.php\?p=\d+\))/g, '[$1](/classes/$1)')
            });
        }
    }, formattedData);

    cleanMDDir(formattedData, mdBuilder.buildMDDir);
});


/**
 * This function erases everything it will find in the /content/classes/ directory.
 * Then, it will launch the building of the MD pages with the callback function.
 * @param {JSON.OBJECT} data
 * @param callback
 * @return none
 */
var cleanMDDir = function (data, callback) {
    var directories = fs.readdirSync(__DIRNAME__);

    // read directories content
    directories.forEach(function (directory) {
        cleanDirectory(path.join(__DIRNAME__, directory));

        fs.rmdir(path.join(__DIRNAME__, directory), function (err) {
            if (err) {
                logger.info(err);
            }
            logger.info("Directory " + path.join(__DIRNAME__, directory) + " removed.");
        });
    });

    callback(data);
};

/**
 * Helper function to clean a directory (ESCAPE CALLBACK HELL!!!)
 * @param {string} directory_path
 * @return none
 */
var cleanDirectory = function (directory_path) {
    var files = fs.readdirSync(directory_path);

    logger.info("Cleaning the directory: " + directory_path + "...");

    // remove every files found in the directory
    files.forEach(function (file) {
        fs.unlinkSync(path.join(directory_path, file));
    });

    //callback(directory_path);
};