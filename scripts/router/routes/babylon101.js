
// ************************************************* REQUIRE *************************************************

var express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));


// ************************************************* CLASSES *************************************************


/**
 * Show the babylon101 list
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
    res.sendFile('./babylon101.html', options);
});

router.get('/:babylon101', function(req, res){
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    var babylon101 = req.params.babylon101;

    fs.exists(path.join('public/html/babylon101/', babylon101 +'.html'), function (exists) {
        if (exists) {
            res.status(200);
            res.set({
                'Cache-Control': 'no-cache',
                'Content-type':'text/html'
            });
            res.sendFile('./babylon101/'+ babylon101 +'.html', options);
        } else {
            res.status(404).render('errorpages/404');
        }
    });
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
