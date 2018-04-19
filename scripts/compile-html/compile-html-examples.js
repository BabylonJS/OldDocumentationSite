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

var EXAMPLES_PATH = path.join(appRoot, 'examples/list.json'); 

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
    let pugContent = `
include includes/header.pug
include includes/banner.pug
#wrapper
    .whats-new-banner
        h1 Examples
    .horizontal-separator
    .examples-content
        div(style="width:200px; display:inline-block")
            .examplesContent
                input(type='text', name='filter', placeholder='Filter examples...')
                button
                    i.fa.fa-search
`;
    
    fs.readFile(EXAMPLES_PATH, function (err, listJson) { 
        var list = JSON.parse(listJson);
        list.examples.forEach(category => {
            pugContent += `                ul ` + category.title + "\n";
            category.samples.forEach(sample => {
                pugContent += 
`                 li
                    a(href='javascript:load("` + sample.PGID + `")') ` + sample.title + "\n";
            });
        });

        pugContent += 
`        div(style="width:calc(100% - 200px);float:right; display:inline-block")
             iframe(id='iframe', width='100%', scrolling='no', frameborder='no', height='100%')
include includes/footer.pug
script(src='/js/examples.js')
`;

        var htmlRender = pug.render(pugContent, { filename:"views/examples.pug", pretty: false, currentUrl: '/' });
        fs.writeFileSync('public/html/examples.html', htmlRender);
        logger.info("> examples.html compiled.");
        if (done) {
            done();
        }
    });
}
