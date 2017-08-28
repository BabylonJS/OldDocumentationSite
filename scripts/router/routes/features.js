
// ************************************************* REQUIRE *************************************************

var express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));

// ************************************************* CLASSES *************************************************


/**
 * Show the overviews list
 */
router.get('/', function(req, res) {
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    res.status(200);
    res.set({
        'Cache-Control': 'no-cache',
        'Content-type':'text/html'
    });
    res.sendFile('./overviews.html', options);
});

router.get('/:overview', function(req, res){
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    var overview = req.params.overview;

    fs.exists(path.join('public/html/overviews/', overview +'.html'), function (exists) {
        if (exists) {
            res.status(200);
            res.set({
                'Cache-Control': 'no-cache',
                'Content-type':'text/html'
            });
            res.sendFile('./overviews/'+ overview +'.html', options);
        } else {
            res.status(404).render('errorpages/404');
        }
    });
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
