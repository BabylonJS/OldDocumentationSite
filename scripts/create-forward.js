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
    helper  = require('./helpers/forwarder'),
    sanitize = require('sanitize-filename'),
    readdirp = require('readdirp'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger'));

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/

// FIXME
var config      = {
        links      : [
            {type: 'classes', link: 'load_pages.php?index=3'},
            {type: 'tutorials', link: 'load_pages.php?index=1'},
            {type: 'exporters', link: 'load_pages.php?index=0'},
            {type: 'extensions', link: 'load_pages.php?index=4'}
        ]
    },
    __DIRNAME__ = './content/';

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

var metaList = {};

module.exports = function(done) {
    async.each(config.links, function (link, cb) {

        logger.info('beginning ' + link.type);

        var pathToFolder = path.join(__DIRNAME__, link.type);
        var options = {root: pathToFolder, fileFilter: '*.md'};

        readdirp(options, function (err, data) {
            if (err) logger.info(err);

            async.each(data.files, function (file, callback) {
                var pathToFile = path.join(pathToFolder, file.path);
                helper.extractMeta(pathToFile, function (meta) {
                    if (link.type == "classes") {
                        // type: class
                        if(meta.ID_PAGE){
                            metaList[meta.ID_PAGE.toString()] = {
                                "type": link.type,
                                "name": meta.PG_TITLE,
                                "version": meta.PG_VERSION + ''
                            };
                            // need to suffix version number with ".0" if it is a round number
                            if (metaList[meta.ID_PAGE.toString()].version.lastIndexOf('.') == -1) {
                                metaList[meta.ID_PAGE.toString()].version += '.0';
                            }
                        }

                    } else {
                        if(meta && meta.ID_PAGE){
                            // type: exporters || extensions || tutorials
                            metaList[meta.ID_PAGE.toString()] = {
                                "type": link.type,
                                "name": sanitize(meta.PG_TITLE).trim().replace(/\s/g, '_')
                            };
                        }

                    }
                    callback();
                });
            }, function () {
                cb();
                logger.info('ending ' + link.type);
            });
        });
    }, function (err) {
        if (err) throw err;
        helper.createForward(err, metaList, done);
    });
};