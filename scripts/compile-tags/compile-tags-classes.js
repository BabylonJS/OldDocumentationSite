/**
 * Reads all markdown files and create the json file tags.json listing all tags of all classes.
 * A tag is present in metadata of the markdown file
 * ---
 * TAGS:
 *  - Mesh
 *  - Action
 *  - Geometry
 * ---
 * The producted json file is located in data/classes-tags.json.
 * Example :
 * {
 *   "1.14":{
 *   "Action":["Action","ActionManager"],
 *   "Mesh":["AbstractMesh","Mesh"]
 *   },
 *   "2.0":{
 *   "Action":["Action","ActionManager"],
 *   "Mesh":["AbstractMesh","Mesh"]
 *   },
 *   "2.1":{
 *   "Action":["Action","ActionManager"],
 *   "Mesh":["AbstractMesh","Mesh"],
 *   "Geometry":["Geometry"]
 *   }
 * }
 */
var marked = require('meta-marked'),
    fs = require('fs'),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger'));

var CLASSES_FOLDER = path.join(appRoot, 'content/classes/');
var TAG_FILENAME = path.join(appRoot, 'data/classes-tags.json');

var TAGS = {};

module.exports = function () {

    // Create a json file for all classes versions.
    fs.readdirSync(CLASSES_FOLDER).map(function(dir){
        createJson(dir);
        logger.info(dir);
    });

    //The resulting file
    var myTagFile = TAG_FILENAME;
    // Creat dir if not existing
    fs.writeFileSync(myTagFile, JSON.stringify(TAGS));
    logger.info("> data/classes-tags.json compiled.")
};

/**
 * Create a tags.json file for the version given in parameter
 * @param version
 */
function createJson(version) {

    // content/classes/<version>
    var myClassesFolder = CLASSES_FOLDER + version;

    // Content all tags for the given version
    var currentVersion = {};

    // Get all markdown files
    fs.readdirSync(myClassesFolder)
        // Read each file from the class folder
        .map(function (f) {
            return {file: f, md: fs.readFileSync(path.join(myClassesFolder, f)).toString()};
        })
        // Read tags in the markdown
        .map(function (obj) {

            // MD filename
            var filename = path.basename(obj.file);
            filename = filename.replace('.md', '');

            logger.info(version+' '+filename);
            // MD tags
            var tags = marked(obj.md).meta.TAGS;

            if (tags) {
                tags.forEach(function (tag) {
                    if (typeof currentVersion[tag] === 'undefined') {
                        currentVersion[tag] = [filename];
                    } else {
                        currentVersion[tag].push(filename);
                    }
                });
            }
        });

    TAGS[version] = currentVersion;
}
