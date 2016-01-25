var fs = require('fs'),
    path    = require('path'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger')),
    marked = require('meta-marked'),
    __FILENAME__= 'data/forward.json';

module.exports.extractMeta = function(filePath, cb){
    fs.readFile(filePath, {encoding: 'utf-8'},function(err, data){
        if(err) throw err;
        var meta = marked(data).meta;
        cb(meta);
    });
};

module.exports.createForward = function(err, metaList, cb){
    if (err) throw err;
    fs.writeFile(__FILENAME__, JSON.stringify(metaList), function(error){
        if (error) throw error;
        logger.info('> data/forward.json has been successfully compiled.');
        cb();
    });
};