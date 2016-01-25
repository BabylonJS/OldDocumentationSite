/**
 * The following script creates a JSON file that will contain all the classes'
 * name of BabylonJS.
 * JSON file format:
 * {
 *      "1.14": ["className1", "className2", ..., "classNameN"],
 *      "2.0" : ["className1", "className2", ..., "classNameN"],
 *      ...
 *      "last_BJS_version_number": ["className1", "className2", ..., "classNameN"]
 * }
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var marked = require('meta-marked'),
    fs = require('fs'),
    path = require('path'),
    async = require('async'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger'));

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/

    // the folder where we can find every classes MD files
var __DOC_ROOT__ = 'content/classes',
    // the name of the JSON file we'll create
    __FILENAME__ = 'data/classes.json';


/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/


module.exports = function(done) {
    async.waterfall([
        async.constant(__DOC_ROOT__),
        getMdClassesFiles,
        createClassesJSON
    ], function (error) {
        if (error){
            done(false);
            throw error;
        }
        logger.info("> "+__FILENAME__+" compiled.");
        done();
    });
};

/*************************************************************************
 *                               FUNCTIONS                               *
 ************************************************************************/

/**
 * Gets the list of the MD files
 * @param docRootPath
 * @param callback
 */
var getMdClassesFiles = function(docRootPath, callback){
    var versions        = fs.readdirSync(docRootPath),
        classesLists    = [];

    versions.map(function(version){
        this.push(fs.readdirSync(path.join(docRootPath, version)).filter(function(f){
            // returns only md files
            return f.match(/\.md$/);
        }));
    }, classesLists);

    callback(null, docRootPath, versions, classesLists);
};

var createClassesJSON = function(filePath, versions, classesLists, callback){
    // flush the content, if any
    fs.writeFileSync(__FILENAME__, '');

    // beginning of the JSON file
    fs.appendFileSync(__FILENAME__, '{\n');

    for(var i = 0; i < versions.length; i++){
        fs.appendFileSync(__FILENAME__,
            '\"' + versions[i] + '\":['
        );

        for(var j = 0; j < classesLists[i].length; j++){
            var filename = classesLists[i][j].replace('.md', '');

            fs.appendFileSync(__FILENAME__,
                '\"' + filename + '\"'
            );

            if(j < (classesLists[i].length - 1)){
                fs.appendFileSync(__FILENAME__, ',\n');
            } else {
                fs.appendFileSync(__FILENAME__, '\n');
            }
        }

        if(i < (classesLists.length - 1)){
            fs.appendFileSync(__FILENAME__, '],\n');
        } else {
            fs.appendFileSync(__FILENAME__, ']\n');
        }
    }

    // end of the JSON file
    fs.appendFileSync(__FILENAME__, '\n}');

    callback(null);
};