/**
 * This file compile HTML files for the exporters, the extensions, and the tutorials.
 */

var fs      = require('fs'),
    path    = require('path'),
    async   = require('async'),
    _       = require('lodash'),
    jade    = require('jade'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger')),
    marked  = require('meta-marked'),
    renderer= new marked.Renderer(),
    slugify = require('uslug'),
    rimraf  = require('rimraf'),
    toc     = require('marked-toc');


renderer.heading = function(text, level, raw){
    var escapedText = slugify(text, {allowedChars: '-'});
    var escapedRaw = slugify(raw, {allowedChars: '-'});

    return '<h' + level + '><a name="' + escapedText + '" class="anchor" href="#' + escapedRaw + '"></a>' + text + '</h' + level + '>';
};

marked.setOptions({
    gfm: true,
    breaks: false,
    tables: true,
    renderer:renderer
});

var __STATICS_LIST__    = path.join(appRoot, 'data/statics.json'),
    __JADE_STATICS__    = path.join(appRoot, 'views/statics/statics.jade'),
    __JADE_STATIC__     = path.join(appRoot, 'views/statics/static.jade'),
    __FILES_SOURCE__    = path.join(appRoot, 'content/'),
    __FILES_DEST__      = path.join(appRoot, 'public/html/');


module.exports = function(done){
    var staticCategories = [
        "exporters",
        "extensions",
        "generals",
        "tutorials"
    ];

    var globalObj = {};

    fs.readFile(__STATICS_LIST__, function(err, staticsList){
        if(err) logger.log('error', err);

        globalObj = JSON.parse(staticsList);

        // we have all the data we need in globObj; now we can process these data
        async.each(staticCategories, function(category, finalCallback){

            var dataObject = {
                "category": category,
                "folders": globalObj[category]
            };
            dataObject.files = _.flatten(_.pluck(globalObj[category], 'files').filter(Boolean));

            //need to get parent folder name in order to build the file path
            dataObject.folders.map(function(folder){
                _.each(folder.files, function(file){
                    file.folder = folder.name;
                });
            });

            async.waterfall([
                async.constant(dataObject, category),
                createStaticsPage,
                getStaticPagesContent,
                createStaticPages
            ], function(error){
                if(error){
                    throw error;
                } else {
                    logger.info('> All pages for ' + category + ' have been compiled.');
                    finalCallback();
                }
            });
        }, function(){
            // final callback
            logger.info('> ALL EXPORTERS/EXTENSIONS/TUTORIALS PAGES COMPILED.');
            if(done) done();
        });

    });
};

var createStaticsPage = function(dataObj, category, cb){
    var statics_page = jade.renderFile(__JADE_STATICS__, {dataObj: dataObj, currentUrl: '/' + category});

    fs.writeFile(path.join(__FILES_DEST__, category + '.html'), statics_page, function(writeErr){
        if (writeErr) throw writeErr;
        cb(null, dataObj, category);
    });
};

var getStaticPagesContent = function(dataObj, category, cb){
    var staticsContents = [];

    async.each(dataObj.files, function(file, callback){
        var filename = path.join(__FILES_SOURCE__, category, file.folder+'', file.filename + '.md');

        fs.exists(filename, function(exists){
            if(!exists){
                logger.warn('File ' + filename + ' doesn\'t exist.')
            } else {
                fs.readFile(filename, {encoding: 'utf-8', flag: 'r'}, function(readErr, content){
                    if (readErr) {
                        logger.info(readErr);
                    } else {
                        var markedContent = marked(content),
                            tableOfContent = marked(toc(content, { omit:['PG_TITLE'], clean: ['a', 'href'] })).html;

                        staticsContents.push({
                            "staticName": file.title,
                            "staticFileName": file.filename,
                            "staticContent": markedContent.html,
                            "toc":tableOfContent
                        });
                        callback();
                    }
                });
            }
        });
    }, function(){
        cb(null, staticsContents, category);
    });
};

var createStaticPages = function(staticsContents, category, cb){
    // flush public/html/<category> folder
    rimraf(path.join(__FILES_DEST__, category), function(err){
        if (err) {
            throw err;
        } else {
            fs.mkdirSync(path.join(__FILES_DEST__, category));

            async.each(staticsContents, function(staticContent, callback){
                var filename = path.join(__FILES_DEST__, category, staticContent.staticFileName + '.html');
                staticContent['category'] = category;
                var staticPage = jade.renderFile(path.join(__JADE_STATIC__), {staticContent: staticContent, currentUrl: '/' + category});

                //logger.info('Page ' + category + '/' + staticContent.staticFileName + '.html about to be compiled.');
                fs.writeFile(filename, staticPage, function(writeErr){
                    if (writeErr) throw writeErr;
                    callback();
                });

            },function(){
                cb(null);
            });
        }
    });
};