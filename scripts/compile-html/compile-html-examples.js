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
    .searchplayground-content
        div(style="width:20%; display:inline-block")
            .searchplaygroundbar
                form(method='get', action='/playground')
                    input(type='text', name='filter', placeholder='Filter examples...')
                    button(type='submit')
                        i.fa.fa-search
                ul`;
// Load json file and generate links    
    pugContent += `        div(style="width:80%;float:right; display:inline-block")
            iframe(width='100%', height='100%')
include includes/footer.pug
script(src='/js/examples.js')
`;

    var htmlRender = pug.render(pugContent, { filename:"views/examples.pug", pretty: false, currentUrl: '/' });
    fs.writeFileSync('public/html/examples.html', htmlRender);
    logger.info("> examples.html compiled.");
};
