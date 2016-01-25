/*************************************************************************
 *                             REQUIREMENTS                              *
 ************************************************************************/
var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path'),
    logger = require('../../../config/logger');

/*************************************************************************
 *                              VARIABLES                                *
 ************************************************************************/

var __FORWARD_FILE__ = 'data/forward.json';

/*************************************************************************
 *                               ROUTES                                  *
 ************************************************************************/

// TEST : localhost:3000/forward/page.php?p=3269
// -> AbstractMesh, v1.14

router.get('/', function (req, res) {
    var pageID = req.query.p;

    fs.readFile(__FORWARD_FILE__, function (err, data) {
        if (err) throw err;
        var parsedData = JSON.parse(data);

        // JSON object
        var forwardData = parsedData[pageID];

        if (forwardData && forwardData.type) {
            switch (forwardData.type) {
                case 'tutorials':
                    res.writeHead(301, {
                        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/tutorials/' + forwardData.name
                    });
                    res.end();
                    break;

                case 'exporters':
                    res.writeHead(301, {
                        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/exporters/' + forwardData.name
                    });
                    res.end();
                    break;

                case 'extensions':
                    res.writeHead(301, {
                        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/extensions/' + forwardData.name
                    });
                    res.end();
                    break;

                case 'classes':
                    res.writeHead(301, {
                        Location: (req.socket.encrypted ? 'https://' : 'http://') + req.headers.host + '/classes/' + forwardData.version + '/' + forwardData.name
                    });
                    res.end();
                    break;

                default:
                    // ERROR
                    logger.error('Forward failed. Requested page ID: ' + pageID);
                    break;

            }
        }
        else {
            res.status(404).render('errorpages/404');
        }

    });
});

module.exports = router;