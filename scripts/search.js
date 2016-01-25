/**
 * The following script retrieve all old PHP IDs we used in the previous BDD,
 * and stores the correlation between class names and old IDs. The purpose of
 * the resulting file is to work on the redirection from the old site to the
 * new, shiny one :-)
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var fs      = require('fs'),
    path    = require('path'),
    marked  = require('meta-marked'),
    async   = require('async'),
    LineByLineReader = require('line-by-line'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger'));

var fulltextsearch = require('full-text-search');
var search = new fulltextsearch();

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/


var CLASSES_FOLDER = path.join(appRoot, 'content/classes/2.1/');

//var search = fulltextsearch.loadSync('index.json');
var files = fs.readdirSync(CLASSES_FOLDER);

async.each(files, function(f, cb) {

    var lr = new LineByLineReader(path.join(CLASSES_FOLDER, f));
    lr.on('line', function (line) {
        if (line) {
            search.add({src: f, text: line});
        }
    });
    lr.on('end', function () {
        cb();
    });
}, function() {
    search.saveSync('data/search/index.json');
    logger.info("debut de la recherche");
    //ss('mesh');
    ss('constructor');
    //ss('shader');
    //ss('scene');
});


function ss(term) {

    var results = search.search(term);
    var uniq = [];
    var uniqLine = [];
    results.forEach(function(r) {
        if (uniq.indexOf(r.src) == -1) {
            uniq.push(r.src);
            uniqLine.push(r.text);
        }
    });
    logger.info(uniq);
    logger.info(uniqLine);
}
/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/
