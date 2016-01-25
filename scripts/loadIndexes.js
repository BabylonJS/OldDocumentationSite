/**
 * loads and exposes the search indexes
 * Everything is sync because it is executed only once at the server's start
 * @type {*}
 */

var fs = require('fs'),
    path = require('path'),
    fileSplitter = require('./helpers/fileSplitter');


//We have to load all the indexes at the server start
var fulltextsearch = require('full-text-search');


module.exports = function(searchDir){

    var dir = fs.readdirSync(searchDir);
    var uniqNames = [];
    var searchIndexes = [];

    dir.map(function(file){
        var newName = file.substr(0, file.indexOf('.json'));

        if(uniqNames.indexOf(newName) == -1){
            uniqNames.push(newName);
        }
    });

    for (var i = 0; i < uniqNames.length; i++) {
        //var file =
        var indexObject = JSON.parse(fileSplitter.readSync(path.join(searchDir, uniqNames[i] +'.json')));

        var index = new fulltextsearch(indexObject.config);

        index.indexes = indexObject.indexes;
        index.data = indexObject.data;
        index.data_ptr = indexObject.data_ptr;
        index.free_slots = indexObject.free_slots;
        index.single_data_counter = indexObject.single_data_counter;

        searchIndexes.push(index);
    }

    return searchIndexes;
};