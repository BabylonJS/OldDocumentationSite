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
#wrapper.example
    div#examplePage
        h1 Examples
        .horizontal-separator
        div.filterDiv
            input(id='filterBar',type='text', name='filter', placeholder='Filter examples...')
            button()
                i.fa.fa-search
`;
    
    fs.readFile(EXAMPLES_PATH_JSON, function (err, listJson) { 
        var list = JSON.parse(listJson);
        var elemCountID = 0;
        list.examples.forEach(category => {
            pugContent += 
`
        p(style="margin-left:5px;font-size:20px; font-weight:200") ` + category.title + "\n";
            var samples = category.samples;
            samples.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
            samples.forEach(sample => {
                pugContent += 
`
            div( id='`+ elemCountID +`', class="itemLine `+sample.title+` contentBlock", onclick="load('`+sample.PGID+`','`+ elemCountID +`')")
                img(src="`+ sample.icon +`")
                div(class = "contentDiv`+ elemCountID +` itemContent" )
                    h3(class="itemLineChild") `+ sample.title +`
                    p(class="itemLineChild") `+ sample.description +`
                    a(href="`+ sample.doc +`", class="itemLineChildLink childLink", target="_blank") Documentation `;
                    
                    elemCountID++;
            });
        });

        pugContent += 
`    
    div#parentIframe
        div(class='Centerer')
            p(style="font-size: 20px") Please, choose an example in the list
            img(src='../img/logos/logo-babylonjs.png')

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