/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/
var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    marked_github = require('meta-marked'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));


marked_github.setOptions({
    renderer: new marked_github.Renderer(),
    gfm     : true,
    tables  : true,
    breaks  : true,
    sanitize: false
});

/*************************************************************************
 *                               VARIABLES                               *
 ************************************************************************/

var __publicRootPath = '../../../public';

/************************************************************************
 *                                ROUTES                                *
 ************************************************************************/

/**************
 * WHAT'S NEW *
 **************/
router.get('/whats-new', function (req, res) {
    fs.exists('public/html/whats-new.html', function (exists) {
        if (exists) {
            var options = {
                root: path.join(__dirname, __publicRootPath)
            };
            res.status(200);
            res.set({'Content-type': 'text/html'});
            res.sendFile('./html/whats-new.html', options);
        } else {
            // render 404 - Page not found
            logger.error('404 error - Page not found: public/html/whats-new.html');
            res.render('errorpages/404.jade', {});
        }
    });
});

// PAGE EXTENSIONS
router.get('/extensions', function (req, res) {
    // render the page
    res.render('extensions/extensions');
});

// PAGE EXTENSIONS
router.get('/exporters', function (req, res) {
    // render the page
    res.render('exporters/exporters');
});

/**************
 * INDEX PAGE *
 **************/
router.get('/', function (req, res) {
    fs.exists('public/html/index.html', function (exists) {
        if (exists) {
            var options = {
                root: path.join(__dirname, __publicRootPath)
            };
            res.status(200);
            res.set({'Content-type': 'text/html'});
            res.sendFile('./html/index.html', options);
        } else {
            // render 404 - Page not found
            logger.error('404 error - Page not found: public/html/index.html');
            res.render('errorpages/404.jade', {});
        }
    });
});

module.exports = router;