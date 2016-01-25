/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/

var express = require('express'),
    router  = express.Router(),
    fs      = require('fs'),
    path    = require('path'),
    appRoot = require('app-root-path').path,
    logger  = require(path.join(appRoot, 'config/logger')),
    marked_github = require('meta-marked');

marked_github.setOptions({
    renderer: new marked_github.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false
});

/************************************************************************
 *                                ROUTES                                *
 ************************************************************************/

/*****************
 * DEFAULT ROUTE
 * Show the Classes list. No version specified so get the last version and redirect to it
 ****************/
router.get('/', function(req, res) {
    getLastBJSVersion(function(lastVersion) {
        res.writeHead(303, {
            'Cache-Control': 0,
            Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + lastVersion
        });
        res.end();
    });
});

/*****************
 * CLASSES ROUTE *
 *****************
 * Show the Classes list. Also, if the user types a valid class name into the url,
 * this route will try to resolve this name and send the most recent version of it
 * (meaning: the class page corresponding to the last BJS version of the class).
 *
 * @param req
 *      version - The version of babylon
 */
router.get('/:version', function(req, res) {
    var version = req.params.version;

    fs.exists('public/html/classes_' + version + '.html', function(exists){
        if(exists){
            var options = {
                root: path.join(appRoot, 'public/')
            };

            res.status(200);
            res.set({
                'Cache-Control': 'no-cache',
                'Content-type':'text/html'
            });
            res.sendFile('./html/classes_' + version + '.html', options);
        } else {
            /**
             * Maybe the user written a class without specifying a BJS version; in
             * that case, redirect the user to the last BJS version of the class.
             * Otherwise, classic 404 error - class not found
             */
            fs.readFile('data/classes.json', function(err, data){
                if (err) throw err;

                // for clarification purpose
                var className = version;

                var lastVersion,
                    jsonData = JSON.parse(data);

                for(var versionName in jsonData) {
                    if (jsonData[versionName].lastIndexOf(className) != -1) {
                        lastVersion = versionName;
                    }
                }

                if(lastVersion){
                    // redirect
                    res.writeHead(303, {
                        'Cache-Control': 'no-cache',
                        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + lastVersion + '/' + className
                    });
                    res.end();
                } else {
                    // render 404 - Page not found
                    logger.error('404 error - Class not found: ' + className);
                    res.render('errorpages/404_class_not_found.jade', {classname:className});
                }
            });
        }
    });
});

/***************
 * CLASS ROUTE *
 ***************
 * Show the specified Class.
 * @param req
 *      name - Name of the Class
 *      version - The version of BabylonJS
 */
router.get('/:version/:className', function(req, res) {
    var version         = req.params.version;
    var className       = req.params.className;
    className = className
        .replace('<', '_').replace('>', '_')
        .replace('%3CT%3E', '_T_')
        .replace('&lt;T$gt;', '_T_');

    // for internal forwarding (click on a link)
    if(className == 'page.php'){

        var pageID = req.query.p;

        res.writeHead(303, {
            'Cache-Control': 'no-cache',
            Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/page.php?p=' + pageID
        });

        res.end();


    } else {
        var fileName = path.join('./public/html/class_' + version, className) + '.html';
        fs.exists(fileName, function(exists){
            if(!exists){
                // 404 class not found
                // render 404 - Class not found
                logger.error('404 error - File not found: '  + fileName);
                res.render('errorpages/404_class_not_found.jade', {classname:className});
            } else {
                fileName = path.join('./html/class_' + version, className) + '.html';

                var options = {
                    root: path.join(appRoot, 'public/')
                };

                res.status(200);
                res.set({
                    'Cache-Control': 'no-cache',
                    'Content-type':'text/html'
                });
                res.sendFile(fileName, options);
            }
        });
    }
});


module.exports = router;


/*************************************************************************
 *                               FUNCTIONS                               *
 ************************************************************************/

/**
 * Get all the versions
 * @returns {Array} - 'X.X'
 */
var getLastBJSVersion = function(callback) {
    fs.readdir('./content/classes', function(error, data) {
        callback(data[data.length - 1]);
    });
};