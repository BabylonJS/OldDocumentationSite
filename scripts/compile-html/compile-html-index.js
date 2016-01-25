/**
 * The following script creates the HTML static version of the index page.
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var jade    = require('jade'),
    fs      = require('fs'),
    path    = require('path'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger'));

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

function checkDirectorySync(directory) {  
  try {
    fs.statSync(directory);
  } catch(e) {
    fs.mkdirSync(directory);
  }
}
 
module.exports = function(done) {
	checkDirectorySync("public/html/");
    var htmlRender = jade.renderFile('views/index.jade', { pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/index.html', htmlRender);
    logger.info("> Index.html compiled.");

    htmlRender = jade.renderFile('views/playground.jade', { pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/playground.html', htmlRender);
    logger.info("> Playground.html compiled.");
};