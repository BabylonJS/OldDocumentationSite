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
<<<<<<< HEAD
            button(onclick="Search()")
=======
            button()
>>>>>>> 5c1575bb5cd59a2389eeb1dc64bd2a4b5d3e8268
                i.fa.fa-search
`;
    
    fs.readFile(EXAMPLES_PATH_JSON, function (err, listJson) { 
        var list = JSON.parse(listJson);
        var elemCountID = 0;
        list.examples.forEach(category => {
            pugContent += 
`
        p(style="margin-left:5px;font-size:20px; font-weight:200") ` + category.title + "\n";
            category.samples.forEach(sample => {
                pugContent += 
`
<<<<<<< HEAD
            
=======
>>>>>>> 5c1575bb5cd59a2389eeb1dc64bd2a4b5d3e8268
            div( id='`+ elemCountID +`', class="itemLine `+sample.title+` contentBlock", onclick="load('`+sample.PGID+`')")
                img(src="`+ sample.icon +`")
                div(class = "contentDiv`+ elemCountID +`" )
                    h3(class="itemLineChild") `+ sample.title +`
                    p(class="itemLineChild") `+ sample.description +`
<<<<<<< HEAD
                    a(href="`+ sample.doc +`", class="itemLineChildLink childLink",) Documentation `;
=======
                    a(href="`+ sample.doc +`", class="itemLineChildLink childLink", target="_blank") Documentation `;
>>>>>>> 5c1575bb5cd59a2389eeb1dc64bd2a4b5d3e8268
                    
                    elemCountID++;
            });
        });

        pugContent += 
`    
    div#parentIframe
<<<<<<< HEAD
        iframe(id='iframeExample', name='iframeExample', src='http://playground.babylonjs.com/frame.html')
=======
>>>>>>> 5c1575bb5cd59a2389eeb1dc64bd2a4b5d3e8268
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