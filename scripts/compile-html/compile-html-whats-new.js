/**
 * The following script creates the HTML static version for the "What's New"
 * page.
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var pug     = require('pug'),
    fs      = require('fs'),
    marked  = require('meta-marked'),
    path    = require('path'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger'));

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

module.exports = function(done) {
    var md = fs.readFileSync('content/whats-new/whats-new.md', {encoding: 'utf-8', flag: 'r'});

    var html_content = marked(md).html;

    var options = {
        pretty: false,
        currentUrl: '/whats-new',
        content: html_content
    };

    var htmlRender = pug.renderFile('views/whats-new.pug', options);
    fs.writeFileSync('public/html/whats-new.html', htmlRender);
    logger.info("> Whats-new.html compiled.")
};
