/**
 * Config file for the builder
 */

var file = {
    //Folder target for the new classes
    classesLocation: 'content/classes/',

    //Folder path containing the typescript description file
    location       : './scripts/helpers/builder/sources/',

    /**
     * The version number to import
     * Note that the file must be name this way :
     * babylon.<your-new-version>.d.ts
     */
    version        : '2.5',

    /**
     * The previous version, from which you want to import comments
     * This must match a directory name in the classesLocation
     */
    previousVersion: '2.4',
    init: function(){
        this.name = 'babylon.' + this.version + '.d.ts';
        this.sourceFile = this.classesLocation + this.version + '/' + this.name;
        delete this.init;
        return this;
    }
}.init();

module.exports = {
    file: file
};