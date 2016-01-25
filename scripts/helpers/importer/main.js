/**
 * Imports tutorials exporters and extension files from old site
 * @type {async|exports|module.exports}
 */

var async = require('async');
var path = require('path');
var rimraf = require('rimraf');
var fs = require('fs');

var callApi = require('./callApi');
var formatJson = require('./formatJson');
var writeMds = require('./writeMds');
var fsHandler = require('../fsHandler');
var config = require('./config');

async.each(
    config.links,
    function (link, endIteration) {
        async.waterfall([
            async.constant(path.join('content/', link.type)),
            //clean directory
            rimraf,
            //load json
            function (cb) {
                cb(null, link.link);
            },
            callApi,
            //flatten array
            formatJson,
            function (pages, cb) {
                var msg = {
                    pages: pages,
                    link: link,
                    flash: {
                        path: path.join('content/', link.type)
                    }
                };
                cb(null, msg);
            },
            fsHandler.createDir,
            writeMds
            //parse md to html input : all files to parse
        ], function (err, data) {
            if (err) console.log(err);
            else console.log('Everything was fine for ', link.type);
            endIteration(err);
        });
    }, function (err) {
        if (err) console.log('Ended with error : ', err);
        else console.log('Work terminated');
    }
);

