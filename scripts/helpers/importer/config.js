/**
 * config file for the importer
 */
var config = {
    baseUrl    : 'http://babylondoc.azurewebsites.net/private/api/',
    loadPageUrl: 'load_page.php?id=',
    links      : [
        //{type: 'classes', link: 'load_pages.php?index=3'},
        {type: 'tutorials', link: 'load_pages.php?index=1'},
        {type: 'exporters', link: 'load_pages.php?index=0'},
        {type: 'extensions', link: 'load_pages.php?index=4'}
    ],
    //list of the ids of the pages to exclude for this script
    excluded   : [22, 21, 25108],
    init       : function () {
        this.loadPageUrl = this.baseUrl + this.loadPageUrl;

        for (var index in this.links) {
            this.links[index].link = this.baseUrl + this.links[index].link;
        }

        delete this.init;
        return this;
    }
}.init();

module.exports = config;