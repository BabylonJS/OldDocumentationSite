/**
 * Holds functions parsing imported classes
 */
var fs = require('fs');
var path = require('path');

var __DIRNAME__ = 'content/classes/';

/**
 * Now the real thing is coming: build every MD pages corresponding to the JSON
 * values
 * @param pages
 * @return none
 */
var buildMDDir = function (pages) {
    pages.forEach(function (page) {
        if (dirExists(page.version)) {
            // build the page
            buildMDpage(page)
        } else {
            // build the directory before building the page
            fs.mkdirSync(path.join(__DIRNAME__, page.version));
            buildMDpage(page);
        }
    });
};

/**
 * Returns true or false if the directory already exists.
 * @param dir_path
 * @return boolean
 */
var dirExists = function (dir_name) {
    var directories = fs.readdirSync(__DIRNAME__);

    var res = false;

    directories.forEach(function (directory) {
        res = (directory == dir_name) || res;
    });

    return res;
};

/**
 * Builds the MD page from the
 * @param input page Object
 */
var buildMDpage = function (page) {

    if(page.content === 'default content' || page.title.charAt(0) === '_') return;

    var data =
        '---\n' +
        'ID_PAGE: ' + page.id + '\n' +
        'PG_TITLE: ' + page.title + '\n' +
        'PG_VERSION: ' + page.version + '\n' +
        '---\n' +
        page.content;

    var replaceChar = "";
    var regEx = /\<\w*\>/g;
    //var regEx = new RegExp('[,/\:*?""<>|]', 'g');

    var filename = path.join(__DIRNAME__, page.version, page.title.replace(regEx, replaceChar)) + '.md';

    fs.writeFileSync(filename, data);
};

module.exports.buildMDDir = buildMDDir;

module.exports.exists = dirExists;

module.exports.buildMDpage = buildMDpage;