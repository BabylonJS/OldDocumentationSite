var express = require('express'),
    app     = express(),
    http = require('http'),
    router  = express.Router(),
    fs      = require('fs'),
    path    = require('path'),
    async   = require('async'),
    _       = require('lodash');

/***************
 * PLAYGROUND  *
 ***************/

router.get('/', function (req, res) {
    // request's params:
    var searchTerm = req.query.q + '' || '',
        page = (req.query.page || 1 ) - 1,
        resultMax = (req.query.max || 25),

    resultMax = parseInt(resultMax);
    page      = parseInt(page);

    // if any keywords in 'keywords', launch search on each element of this array; else
    // render default search page with a message
    if(searchTerm != '' && searchTerm != 'undefined'){

        var searchResult = []; // the set of result to be rendered on the page

        var postData = JSON.stringify({
            search: searchTerm,
            page: 0,
            pageSize: 1000,
            includePayload: false
        });

        var options = {
            host: 'babylonjs-api.azurewebsites.net',
            port: 80,
            path: '/api/search',
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        };

        var request = http.request(options,function(response) {

            var searchResult = "";

            response.setEncoding('utf-8');
            response.on('data', function (result) {
                searchResult += result;
            });
            response.on('end', function () {

                searchResult = JSON.parse(searchResult);

                if (searchResult.totalCount <= 0) {
                    res.render('playground', {
                        searchTerm: searchTerm,
                        resultsCount: 0,
                        resultMax: 25,
                        results: [],
                        page: 1
                    });

                    return;
                }

                searchResult = searchResult.snippets;

                res.render('playground', {
                    searchTerm: searchTerm,
                    resultsCount: searchResult.length,
                    resultMax: resultMax,
                    results: searchResult.slice(
                        page * resultMax,
                        (page + 1) * resultMax
                    ),
                    page: req.query.page || 1
                });

                return;
            });
        });

        request.on('error', function() {
            res.render('playground', {
                searchTerm  : searchTerm,
                resultsCount: 0,
                resultMax   : 25,
                results     : [],
                page        : 1
            });

            return;
        });

        request.write(postData);
        request.end();

    } else {
        //default search page
        res.render('playground', {
            resultsCount: 0,
            searchTerm : 0
        });

        return;
    }
});

module.exports = router;
