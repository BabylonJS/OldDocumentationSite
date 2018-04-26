/**
 * The following script creates the HTML static version of the examples page.
 */

/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var pug = require('pug'),
    fs = require('fs'),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));
 
var EXAMPLES_PATH_JSON = path.join(appRoot, 'examples/list.json'); 

/*************************************************************************
 *                                 SCRIPT                                *
 ************************************************************************/

function checkDirectorySync(directory) {
    try {
        fs.statSync(directory);
    } catch (e) {
        fs.mkdirSync(directory);
    }
}

module.exports = function (done) {
    checkDirectorySync("public/html/");
    checkDirectorySync("public/html/examples/");
    var content = "";
    let pugContent = 
`
include includes/header.pug
include includes/banner.pug
#wrapper(style="width:100%;height:90%;margin-top:2px")
    div(id='examplePage',style="width:400px;display:inline-block;float:left;")
        h1(style="text-align: center;") Examples
        .horizontal-separator
        input(id='searchBar',type='text', name='filter', placeholder='Filter examples...',style="margin-left: 15px")
        button(onclick="Search()")
            i.fa.fa-search
`;
    
    fs.readFile(EXAMPLES_PATH_JSON, function (err, listJson) { 
        var list = JSON.parse(listJson);
        var elemCountID = 0;
        list.examples.forEach(category => {
            pugContent += 
`
        p(style="margin-left:5px;font-size:25px") ` + category.title + "\n";
            category.samples.forEach(sample => {
                pugContent += 
`
            
            div( id='`+ elemCountID +`', class="itemLine `+sample.title+` contentBlock", style="background-color: #ebebeb;height:120px;overflow: hidden;clear: both;margin: 5px;margin-bottom: 10px", onclick="load('`+sample.PGID+`')")
                img(src="`+ sample.icon +`",style="max-height:100%;max-width:120px;display: inline-block")
                div(style="display: inline-block;width: calc(100% - 120px);vertical-align: top;padding: 5px;", class = "contentDiv`+ elemCountID +`" )
                    h3(style="margin: 0px;font-size: 18px;margin-bottom: 5px",class="itemLineChild") `+ sample.title +`
                    p(style="margin: 0px;font-size: 15px;margin-bottom: 3px",class="itemLineChild") `+ sample.description +`
                    a(href="`+ sample.doc +`", style="font-size: 15px;text-decoration:underline;text-decoration-color='#000000';color='#000000'",class="itemLineChildLink childLink",) documentation `;
                    
                    elemCountID++;
            });
        });

        pugContent += 
`    
    div(style="width:calc(100% - 400px);height:100%;float:right;display:inline-block", id='parentIframe')
        iframe(id='iframeExample', name='iframeExample', src='http://playground.babylonjs.com/frame.html',style="width:100%;height:100%")
include includes/footer.pug
script(src='/js/examples.js')
`;

        var htmlRender = pug.render(pugContent, { filename:"views/examples.pug", pretty: false, currentUrl: '/' });
        fs.writeFileSync('public/html/examples/index.html', htmlRender);
        logger.info("> examples.html compiled.");
        if (done) {
            done();
        }
    });
}
