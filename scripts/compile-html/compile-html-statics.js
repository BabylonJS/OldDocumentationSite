/**
 * This file compile HTML files for the resources, the extensions, and the How_To.
 */

var fs = require('fs'),
    path = require('path'),
    async = require('async'),
    _ = require('lodash'),
    pug = require('pug'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger')),
    marked = require('meta-marked'),
    renderer = new marked.Renderer(),
    slugify = require('uslug'),
    //rimraf = require('rimraf'),
    toc = require('marked-toc');


renderer.heading = function(text, level, raw) {
    var escapedText = slugify(text, {
        allowedChars: '-'
    });
    var escapedRaw = slugify(raw, {
        allowedChars: '-'
    });

    return '<h' + level + '><a name="' + escapedText + '" class="anchor" href="#' + escapedRaw + '"></a>' + text + '</h' + level + '>';
};

marked.setOptions({
    gfm: true,
    breaks: false,
    tables: true,
    renderer: renderer
});

var __STATICS_LIST__ = path.join(appRoot, 'data/statics.json'),
    __PUG_STATICS__ = path.join(appRoot, 'views/statics/statics.pug'),
    __PUG_STATIC__ = path.join(appRoot, 'views/statics/static.pug'),
    __FILES_SOURCE__ = path.join(appRoot, 'content/'),
    __FILES_DEST__ = path.join(appRoot, 'public/html/');


module.exports = function(done) {
    var staticCategories = [
        "babylon101",
        "resources",
        "extensions",
        "How_To",
        "snippets",
        "features"
    ];

    var globalObj = {};

    fs.readFile(__STATICS_LIST__, function(err, staticsList) {
        if (err) logger.log('error', err);

        globalObj = JSON.parse(staticsList);

        // we have all the data we need in globObj; now we can process these data
        async.each(staticCategories, function(category, finalCallback) {

            var dataObject = {
                "category": category,
                "folders": globalObj[category]
            };
            dataObject.files = _.flatten(_.map(globalObj[category], 'files').filter(Boolean));

            //need to get parent folder name in order to build the file path
            dataObject.folders.map(function(folder) {
                _.each(folder.files, function(file) {
                    file.folder = folder.name;
                });
            });

            let tasks = [async.constant(dataObject, category)];
            //if (category !== "classes") {
            tasks.push(createStaticsPage,
                getStaticPagesContent,
                createStaticPages);
            //} else {
            //    tasks.push(addApiDocuments, createStaticPages);
            //}

            async.waterfall(tasks, function(error) {
                if (error) {
                    throw error;
                } else {
                    logger.info('> All pages for ' + category + ' have been compiled.');
                    finalCallback();
                }
            });
        }, function() {
            // final callback
            logger.info('> ALL EXPORTERS/EXTENSIONS/TUTORIALS PAGES COMPILED.');
            if (done) done();
        });

    });
};

var createStaticsPage = function(dataObj, category, cb) {
    var statics_page = pug.renderFile(__PUG_STATICS__, {
        dataObj: dataObj,
        currentUrl: '/'
    });

    checkDirectorySync(path.join(__FILES_DEST__, category));

    fs.writeFile(path.join(__FILES_DEST__, category + '/index.html'), statics_page, function(writeErr) {
        if (writeErr) throw writeErr;
        cb(null, dataObj, category);
    });
};

var getStaticPagesContent = function(dataObj, category, cb) {
    var staticsContents = [];

    async.each(dataObj.files, function(file, callback) {
        var filename = path.join(__FILES_SOURCE__, category, file.folder + '', file.filename + '.md');

        fs.stat(filename, function(err, stats) {
            if (err) {
                logger.warn('File ' + filename + ' doesn\'t exist.')
            } else {
                //check if the file needs to be generated:
                var htmlFilename = path.join(__FILES_DEST__, category, file.filename + '.html');
                let creationDate = new Date(0);
                try {
                    creationDate = (fs.statSync(htmlFilename).mtime);
                } catch (e) {

                }
                if (creationDate.getTime() < stats.mtime.getTime()) {
                    fs.readFile(filename, {
                        encoding: 'utf-8',
                        flag: 'r'
                    }, function(readErr, content) {
                        if (readErr) {
                            logger.info(readErr);
                        } else {
                            var markedContent = marked(content),
                                tableOfContent = marked(toc(content, {
                                    omit: ['PG_TITLE'],
                                    clean: ['a', 'href']
                                })).html;

                            // Regexp catching all link to the playground
                            var getPlaygroundLinks = /<a\s+(?:[^>]*?\s+)?href="(https?:\/\/(www.)?(?:babylonjs-playground|playground\.babylonjs)\.com\/\#([a-zA-Z0-9#]+))(&w=([0-9]+))*(&h=([0-9]+))*">(.+?)<\/a>/g;
                            // Replace all links to the playground with a custom iframe
                            var iframeWithLink = '<a href="$1">$8</a> - <i class="fa fa-eye" onclick="createIframe(\'$3\', this)"></i>' +
                                '<div class="iframeContainer"></div>';

                            markedContent.html = markedContent.html.replace(getPlaygroundLinks, iframeWithLink);

                            staticsContents.push({
                                "staticName": file.title,
                                "staticFileName": file.filename,
                                "staticContent": markedContent.html,
                                "toc": tableOfContent
                            });
                            callback();
                        }
                    });
                } else {
                    callback();
                }


            }
        });
    }, function() {
        cb(null, staticsContents, category);
    });
};

function checkDirectorySync(directory) {
    try {
        fs.statSync(directory);
    } catch (e) {
        fs.mkdirSync(directory);
    }
}

var createStaticPages = function(staticsContents, category, cb) {
    async.each(staticsContents, function(staticContent, callback) {
        var filename = path.join(__FILES_DEST__, category, staticContent.staticFileName + '.html');
        staticContent['category'] = category;
        //let creationDateOfContent = fs.statSync(filename)
        var staticPage = pug.renderFile(path.join(__PUG_STATIC__), {
            staticContent: staticContent,
            currentUrl: '/' + category
        });
        staticPage = staticPage.replace("<title>Babylon.js Documentation</title>", "<title>" + staticContent.staticName + " - Babylon.js Documentation</title>");

        fs.writeFile(filename, staticPage, function(writeErr) {
            if (writeErr) throw writeErr;
            callback();
        });
    }, function() {
        cb(null);
    });
};