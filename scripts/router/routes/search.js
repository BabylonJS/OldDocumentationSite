var express = require('express'),
    app     = express(),
    router  = express.Router(),
    fs      = require('fs'),
    path    = require('path'),
    async   = require('async'),
    _       = require('lodash');

/***************
 * SEARCH PAGE *
 ***************/

router.get('/', function (req, res) {
    // request's params:
    var searchTerm = req.query.q + '',
        basicFilters = (req.query.bf + '' || 'all'),
        page = (req.query.page || 1 ) - 1,
        resultMax = (req.query.max || 25),
        keywords = [];

    resultMax = parseInt(resultMax);
    page      = parseInt(page);

    var offset = page * resultMax;

    if(searchTerm.trim().indexOf(' ') != -1){
        // store every word of the search string that is strictly longer than 1 character
        // into an array of keywords; the first keyword to register is the search string
        // itself, before splitting it
        keywords.push(searchTerm);

        // split the search string
        var splitSearchTerm = searchTerm.split(' ');

        splitSearchTerm.forEach(function(keyword){
            if(keyword.length >= 2){
                keywords.push(keyword);
            }
        });

    } else if (searchTerm.trim().length >= 2){
        // if there's only one word, just add it to the 'keywords' array
        // (if it's longer than 1 character)
        keywords.push(searchTerm);
    }

    // if any keywords in 'keywords', launch search on each element of this array; else
    // render default search page with a message
    if(keywords.length != 0){

        var searchResult = []; // the set of result to be rendered on the page
        var resultByCat = []; // an array that will contain the number of result per category

        async.each(keywords, function(keyword, cb1){

            async.eachSeries(req.app.locals.indexes, function(index, cb2){

                var results = index.search(keyword);

                var uniqueResults = [];

                async.eachSeries(results, function(result, cb3){
                    result = processSearchResult(result);

                    var reg = new RegExp(_.escapeRegExp(keyword), 'i');

                    if (reg.test(result.text)){
                        if (!_.some(uniqueResults, {src: result.src})){
                            // first occurrence
                            uniqueResults.push({
                                src: result.src,
                                name: result.name,
                                version: result.version,
                                occurrences: 1
                            });

                        } else {
                            // result.src already been added; increment result's counter
                            var i = _.findIndex(uniqueResults, function(r){
                                return r.src === result.src;
                            });

                            uniqueResults[i].occurrences += 1;

                        }
                    }

                    cb3();

                }, function(){
                    if(uniqueResults.length > 0){
                        searchResult = searchResult.concat(uniqueResults);
                    }
                    cb2();
                });

            }, function(){
                cb1();
            });

        }, function(){

            searchResult = uniquify(searchResult);

            var totalCount = searchResult.length;

            resultByCat = buildCatArray(searchResult);

            if (!(basicFilters === 'all')){
                // determine if basic filters are valid (meaning: do these are in the 'resultByCat' array? if not,
                // it means no result has been found in that category of file)
                basicFilters = basicFilters.split(' ');
                var validFiltersCount = 0;
                var validFilters = [];

                basicFilters.forEach(function(filter){
                    // exception for what's new (again)
                    filter = (filter.trim() === 'whats-new') ? '- ' : filter;

                    var i = _.findIndex(resultByCat, function(cat){
                        return cat.category === filter;
                    });

                    if(_.some(resultByCat, {category: filter})) {
                        validFiltersCount++;
                        validFilters.push(filter);
                        resultByCat[i].enabled = true;
                    }
                });

                if(validFiltersCount > 0){
                    searchResult = applyBasicFilter(searchResult, validFilters);
                }
            }

            var begin = offset;

            var filteredCount = searchResult.length;

            var end = (offset + resultMax > filteredCount) ? filteredCount : offset + resultMax;

            searchResult = searchResult.slice(begin, end);

            res.render('search', {
                searchTerm  : searchTerm,
                resultsCount: totalCount,
                filteredCount: filteredCount,
                resultMax   : resultMax,
                results     : searchResult,
                page        : req.query.page || 1,
                availableFilters: resultByCat
            });
        });

    } else {
        //default search page
        res.render('search', {
            message: "Please try to run a search with at least one word longer than one character",
            searchTerm: searchTerm,
            resultsCount: 0
        });
    }
});

module.exports = router;

/**
 * Reformat the search result
 * @param r
 * @returns {*}
 */
var processSearchResult = function(r){
    var version = r.src.substr(0, r.src.lastIndexOf('/'));

    if(r.name == 'whats-new' ) {
        version = '- ';
        r.src = 'whats-new'
    } //Remove the classes/ but keep the 1.14 and exporters !
    else if (version.indexOf('/') != -1) version = version.substr(version.indexOf('/') + 1);

    r.version = version;

    return r;
};

/**
 * Ensure that each result is unique; if multiple occurrences of the same are detected (meaning
 * several results with the same 'version' property), this number of occurrence is saved - otherwise
 * this number of occurrence is set to 1 by default. This number of occurrences might be used afterwards
 * in a pertinence system for the search system ;-)
 * @param searchResult
 * @returns {Array}
 */
var uniquify = function(searchResult){

    var processedSearchResult = [];

    searchResult.forEach(function(result, index){
        if (!_.some(processedSearchResult, {src: result.src})){
            // first occurrence
            processedSearchResult.push(result);

        } else {
            // result.src already been added; increment result's counter
            var i = _.findIndex(searchResult, function(r){
                return r.src === result.src;
            });

            var j = _.findIndex(processedSearchResult, function(r){
                return r.src === result.src;
            });

            processedSearchResult[j].occurrences += searchResult[i].occurrences;
        }
    });

    return processedSearchResult;
};

/**
 *
 * @param searchResult
 * @returns {Array}
 * Returns array with this kind of structure (example with search = collisions):
 [
 { category: 'tutorials', occurrences: 10 },
 { category: '1.14', occurrences: 6 },
 { category: '2.0', occurrences: 6 },
 { category: '2.1', occurrences: 6 },
 { category: '2.2-alpha', occurrences: 6 },
 { category: 'exporters', occurrences: 3 },
 { category: 'generals', occurrences: 3 },
 { category: 'what\'s new', occurrences: 1 }
 ]
 */
var buildCatArray = function(searchResult){
    var resultByCat = [];

    searchResult.forEach(function(result, index){
        if (!_.some(resultByCat, {category: result.version})){
            // first occurrence
            resultByCat.push({
                category: result.version,
                occurrences: 1,
                enabled: false
            });

        } else {
            // result.src already been added; increment result's counter
            var j = _.findIndex(resultByCat, function(r){
                return r.category === result.version;
            });

            resultByCat[j].occurrences += 1;
        }
    });

    return resultByCat;
};

/**
 * Filters a search result by document category. Returns a filtered search result.
 * @param searchResult
 * @param basicFilters
 */
var applyBasicFilter = function(searchResult, basicFilters){
    var filteredSearchResult = [];

    searchResult.forEach(function(result, index){
        if(basicFilters.indexOf(result.version) != -1){
            filteredSearchResult.push(result);
        }
    });

    return filteredSearchResult;
};