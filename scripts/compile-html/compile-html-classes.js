/**
 * The following script creates all the HTML pages we serve when the user
 * ask for /classes/<bjsVersion>
 * There are currently 3 HTML pages in public/html :
 * - classes_1.14.html
 * - classes_2.0.html
 * - classes_2.1.html
 * Also, this script creates all the HTML pages we serve when the user
 * ask for /classes/<bjsVersion>/<bjsClass>.
 * The created files are stored in public/html, and each file in a folder
 * corresponding to the BJS version it belongs to.
 * The HTML files are built with the json files created respectively
 * by create-json-classes.js (file located in data/classes.json) and
 * create-tags.js (file located in data/classes-tags.json).
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var fs       = require('fs'),
    path     = require('path'),
    async    = require('async'),
    jade     = require('jade'),
    appRoot  = require('app-root-path').path,
    logger   = require(path.join(appRoot, 'config/logger')),
    marked   = require('meta-marked'),
    renderer = new marked.Renderer(),
    toc      = require('marked-toc'),
    tocRenderer = new marked.Renderer(),
    rimraf   = require('rimraf'),
    util     = require('util');

// custom renderer that modifies heading and insert a permalink icon before each title
renderer.heading = function(text, level, raw){
    raw_escaped = raw.toLowerCase().replace(/[^\w]+/g, '-');

    // if <h2> or <h3>, add permalink icon
    if(level >= 2 && level <= 3){
        var link = '<a href="#'+ this.options.headerPrefix + raw_escaped + '" class="invisible permalink">' +
            '<i class="fa fa-link"></i>' +
            '</a>';
        return '<h' + level + ' id="' + this.options.headerPrefix + raw_escaped + '">'
            + link
            + text
            + '</h' + level + '>\n';
    // else return default heading rendered by marked
    } else {
        return '<h' + level + ' id="' + this.options.headerPrefix + raw_escaped + '">'
            + raw
            + '</h' + level + '>\n';
    }
};

tocRenderer.link = function(href, title, text){
    return '<option value="' + href.split('#')[1] + '">' + text + '</option>\n';
};

// don't forget to set the render of marked
marked.setOptions({
    gfm: true,
    breaks: false,
    tables: true,
    renderer: renderer
});


/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/

var __CLASSES_LIST__ = path.join(appRoot, 'data/classes.json'),
    __CLASSES_TAGS__ = path.join(appRoot, 'data/classes-tags.json'),
    __HTML_FILES_DESTDIR__  = path.join(appRoot, 'public/html'),
    __JADE_FILES_ROOTDIR__  = path.join(appRoot, 'views/class'),
    __MD_FILES_ROOTDIR__    = path.join(appRoot, 'content/classes');


/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

module.exports = function (done) {

    // fetch the information we need: the lists of classes sorted by version,
    // and lists of tags sorted by classes then by version
    async.parallel({
        classesLists: getClassesLists,
        tagsLists: getTagsLists
    }, function(err, lists){
        if(err) {
            logger.error(util.inspect(err, {showHidden: false, colors: true}));
        }

        // lists = {
        //      classesLists,
        //      tagsLists
        // }

        var versions = [];

        async.forEachOf(lists.classesLists, function(classes, version, cbVersions){

            // FLUSH DIRECTORY /public/html/class_<version>/
            var dirPath = path.join(__HTML_FILES_DESTDIR__, 'class_' + version);
            logger.info(dirPath);

            logger.info('Directory html/class_' + version + ' is about to be cleaned...');

            rimraf(dirPath, function(rimrafErr){
                if(rimrafErr) throw rimrafErr;

                logger.info('Directory html/class_' + version + ' is now empty.');

                // as rimraf flush the directory THEN delete it, we need to recreate it
                fs.mkdir(dirPath, function(mkdirErr){
                    if(mkdirErr){
                        logger.info('mkdirError!' + mkdirErr);
                        throw mkdirErr;
                    }

                    // add the version to the versions list
                    versions.push(version);

                    // continue process to the next step (compilation)
                    cbVersions();
                });
            });

        },function(){
            logger.info('About to launch parallel compilation...');
            async.each(versions, function(version, cbCompile){

                // parallel compilation :-)
                async.parallel([
                    // versions = list of versions of BJS
                    // lists.classesLists[version] = complete list of classes for the specified version of BJS
                    // lists.tagsLists[version] = list of tags sorted by class, for the specified version of BJS
                    async.apply(compileClassesPages, versions, version, lists.classesLists[version], lists.tagsLists[version]),
                    async.apply(compileClassPages, versions, version, lists.classesLists[version], lists.tagsLists[version])
                ], function(err){
                    if (err) {
                        logger.error(util.inspect(err, {showHidden: false, colors: true}));
                        throw err;
                    } else {
                        cbCompile();
                    }
                });
                // end parallel compilation :-(

            }, function(){
                // final callback
                logger.info('> ALL CLASSES PAGES COMPILED.');
                done();
            });
        });
    });
};


/*************************************************************************
 *                               FUNCTIONS                               *
 ************************************************************************/

/**
 * Gets the list of classes sorted by BJS version.
 * @param callback(JSON OBJECT)
 * The JSON Object in the callback possess the following structure:
 * {
 *      <firstBJSVersion>: [ <class1>, <class2>, ..., <classN> ],
 *      <secondBJSVersion>: [ <class1>, <class2>, ..., <classN> ],
 *      ...,
 *      <nthBJSVersion>: [ <class1>, <class2>, ..., <classN> ]
 * }
 */
var getClassesLists = function(callback){
    fs.readFile(__CLASSES_LIST__, {encoding: 'utf-8', flag: 'r'}, function(err, data){
        if (err){
            logger.error('Error while reading ' + __CLASSES_LIST__ + ': ' + err);
            throw err;
        } else {
            callback(null, JSON.parse(data));
        }
    });
};

/**
 * Gets the list of tags attached to BJS classes, sorted by BJS version.
 * @param callback(JSON OBJECT)
 * The JSON Object in the callback possess the following structure:
 * {
 *      <firstBJSVersion>: {
 *          <firstTag>: [ <class1>, , <class2>, ..., <classN> ],
 *          <secondTag>: [ <class1>, , <class2>, ..., <classN> ],
 *          ...,
 *          <nthTag>: [ <class1>, , <class2>, ..., <classN> ]
*       },
 *      ...,
 *      <nthBJSVersion>: {
 *          <firstTag>: [ <class1>, , <class2>, ..., <classN> ],
 *          <secondTag>: [ <class1>, , <class2>, ..., <classN> ],
 *          ...,
 *          <nthTag>: [ <class1>, , <class2>, ..., <classN> ]
 *      }
 * }
 */
var getTagsLists = function(callback){
    fs.readFile(__CLASSES_TAGS__, {encoding: 'utf-8', flag: 'r'}, function(err, data){
        if (err){
            logger.error('Error while reading ' + __CLASSES_TAGS__ + ': ' + err);
            throw err;
        } else {
            callback(null, JSON.parse(data));
        }
    });
};

/**
 * Compiles all the "public/html/classes_<bjsVersion>.html" pages.
 * @param version
 * @param classesList
 * @param tagsList
 * @param callback
 */
var compileClassesPages = function(versions, version, classesList, tagsList, callback){
    // path of the future rendered 'classes_<bjsVersion>.html' page
    var htmlClassesFilePath = path.join(__HTML_FILES_DESTDIR__, 'classes_' + version + '.html'),
        jadeViewForClasses = path.join(__JADE_FILES_ROOTDIR__, 'classes.jade');

    // options for the Jade compiler
    var optionsClasses = {
        pretty        : false,
        currentUrl    : '/classes',
        currentVersion: version,
        versions      : versions,
        classesByAlpha: classesList,
        classesByTags : tagsList
    };

    fs.writeFile(htmlClassesFilePath, jade.renderFile(jadeViewForClasses, optionsClasses), function(err){
        if (err) {
            throw err;
        } else {
            logger.info("> HTML page for classes_" + version + " compiled." );
            callback(null);
        }
    });
};


/**
 * Compiles all the "public/html/class_<bjsVersion>/<className>.html" pages.
 * @param version
 * @param classesList
 * @param tagsList
 * @param callback
 */
var compileClassPages = function(versions, version, classesList, tagsList, callback){
    async.each(classesList, function(className, cbEachClassName){
        var mdFilePath          = path.join(__MD_FILES_ROOTDIR__, version, className + '.md'),
            htmlClassFilePath   = path.join(__HTML_FILES_DESTDIR__, 'class_' + version, className + '.html'),
            jadeViewForClass    = path.join(__JADE_FILES_ROOTDIR__, 'class.jade');

        fs.readFile(mdFilePath, {encoding: 'utf-8', flag: 'r'}, function(readMDErr, data){
            if(readMDErr){
                logger.error(readMDErr);
                throw readMDErr;
            } else {
                var markedContent = marked(data);
                //var documentToc = toc(data, {
                //    omit:['PG_TITLE', 'PG_VERSION', 'TAGS', 'Extends'],
                //    bullet: ['-', '*'],
                //    maxDepth: 2
                //});

                //var processedToc = [];
                //
                //documentToc = documentToc.replace(/&rarr;/, '->').split('\n');
                //
                //documentToc.forEach(function(str, i){
                //    var modifiedStr = marked(str.trim(), { renderer: tocRenderer }).html;
                //    modifiedStr = processTocString(modifiedStr);
                //    if(modifiedStr) {
                //        processedToc.push(modifiedStr);
                //    }
                //});

                var optionsClass = {
                    pretty          : false,
                    currentUrl      : '/classes/class',
                    currentVersion  : version,
                    classListByAlpha: classesList,
                    classListByTag  : tagsList,
                    className       : className,
                    classTags       : markedContent.meta['TAGS'],
                    content         : markedContent.html
                    //toc             : processedToc
                };

                //logger.info('public/html/class_' + version + '/' + className + '.html is about to be compiled...');
                fs.writeFile(htmlClassFilePath, jade.renderFile(jadeViewForClass, optionsClass), function(err){
                    if (err) {
                        throw err;
                    } else {

                        cbEachClassName();
                    }
                });
            }
        });

    }, function(){
        // final callback
        logger.info('> All "class" for BJSv' + version + ' pages compiled.');
        callback(null);
    });
};

var processTocString = function(tocString){
    if(tocString.match(/^<p>-/)){
        // Members/Methods/constructor
        if(tocString.match(/>Members</)){
            return '<option value="members" class="cat">Members</option>';
        } else if(tocString.match(/>Methods</)){
            return '<option value="methods" class="cat">Methods</option>';
        } else if(tocString.match(/>Functions</)){
            return '<option value="functions" class="cat">Functions</option>';
        } else {
            return false;
        }
    } else if(tocString.match(/^<p>\*/)){
        return tocString.slice(4, -6);
    }
};