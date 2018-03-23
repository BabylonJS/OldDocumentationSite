/**
 * The following script creates the HTML static version of the index page.
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var pug = require('pug'),
    fs = require('fs'),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

function checkDirectorySync(directory) {
    try {
        fs.statSync(directory);
    } catch (e) {
        fs.mkdirSync(directory);
    }
}

module.exports = function (done) {
    checkDirectorySync("public/html/");
    var htmlRender = pug.renderFile('views/index.pug', { pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/index.html', htmlRender);
    logger.info("> Index.html compiled.");

    checkDirectorySync("public/html/playground/");
    htmlRender = pug.renderFile('views/playground.pug', { pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/playground/index.html', htmlRender);
    logger.info("> Playground.html compiled.");

    checkDirectorySync("public/html/search/");
    htmlRender = pug.renderFile('views/search.pug', { pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/search/index.html', htmlRender);
    logger.info("> search.html compiled.");

    checkDirectorySync("public/html/classes/");
    htmlRender = pug.renderFile('views/classes.pug', { pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/classes/index.html', htmlRender);
    logger.info("> classes.html compiled.");
};
