/**
 *adds default metad before md and writes it down
 * @type {async|exports|module.exports}
 */

var async = require('async');
var path = require('path');
var sanitize = require('sanitize-filename');

var fsHandler = require('../fsHandler');

module.exports = function (msgIn, cb) {
    async.each(
        msgIn.pages,
        function (page, endIteration) {
            page.content = createMetas(page) + page.content;

            var msgOut = {
                flash: {
                    filePath   : path.join('content/', msgIn.link.type, sanitize(page.text).trim().replace(/\s/g, '_') + '.md'),
                    dataToWrite: page.content
                }
            };
            //createdir if version exists and dir doesn't
            fsHandler.writeFile(msgOut, endIteration);
        },
        function (err) {
            cb(err);
        }
    );
};

function createMetas(element){
    var data =
        '---\n' +
        'ID_PAGE: ' + element.id + '\n' +
        'PG_TITLE: ' + sanitize(element.text) + '\n'+
        '---\n';

    return data;
}