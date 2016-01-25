/**
 * formats json
 * @type {*}
 */

var path = require('path');
var async = require('async');
var _ = require('lodash');

var config = require('./config');
var callApi = require('./callApi');

module.exports = function (array, cb) {
    var flatArray = [];
    flatArray = flattenArray(array, flatArray);

    flatArray = _.remove(flatArray, function (element) {
        return config.excluded.indexOf(element.id * 1) == -1;
    });

    async.each(
        flatArray,
        function (element, endIteration) {
            delete element.children;
            delete element.id_parent;

            var pageUrl = config.loadPageUrl + element.id;
            callApi(pageUrl, function (err, data) {
                element.content = data[0].content;
                endIteration(err);
            });
            console.log('waiting for ', element.text, ' ...');
        },
        function (err) {
            cb(err, flatArray);
        }
    );
};

function flattenArray(array, flatArray) {
    _.each(array, function (model) {
        flatArray.push(model);

        if (model.children && model.children.length > 0) flattenArray(model.children, flatArray);
    });

    return flatArray;
}


