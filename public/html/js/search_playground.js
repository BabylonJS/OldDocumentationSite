(function () {

    $(document).ready(function () {

        runQuery();
    });

    function runQuery() {
        var query = getQueryVariable('q');
        var tagsQuery = getQueryVariable('tag');
        var codeQuery = getQueryVariable('code')
        var strQuery = decodeURIComponent(query).split('+').join(' ');
        var strTags = decodeURIComponent(tagsQuery).split('+').join(' ');
        var strCode = decodeURIComponent(codeQuery).split('+').join(' ');
        var page = +(getQueryVariable('page')) || 0;
        var max = +(getQueryVariable('max')) || 25;
        var numberResults = 0;
        var finalQuery = '';
        var queryType = '';
        if (strQuery != 'false') {
            queryType = 'name/';
            finalQuery = strQuery;
        }
        else if (strTags != 'false') {
            queryType = 'tags/';
            finalQuery = strTags;
        }
        else if (strCode != 'false') {
            queryType = 'code/';
            finalQuery = strCode.split(' ').join(' AND ');;
        }
        if (!query && !tagsQuery && !codeQuery) {
            //$('.searchplayground-content').append('<div class="searchHeader"><h2>No Query Found.</h2></div>');
            return;
        }
        $('.searchplayground-content').append('<div class="searchHeader"><h2>Loading results for ' + finalQuery + ' ...</h2></div>');

        var postData = JSON.stringify({
            search: finalQuery,
            page: page,
            pageSize: max,
            includePayload: false
        });

        var numberData = JSON.stringify({
            search: finalQuery
        });

        var html = '';

        $.ajax({
            url: 'http://babylonjs-api2.azurewebsites.net/snippets/search/' + queryType,
            type: "POST",
            data: postData,
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).error(function (error) {
            console.log(error);
        }).success(function (data) {
            //If we collect data, show our number of results and buttons to change pages
            var pageChange = '';
            if (query) {
                var html = findQuery(query, strQuery, data, page, pageChange, 'q')[0];
                pageChange = findQuery(query, strQuery, data, page, pageChange, 'q')[1];
            }
            else if (tagsQuery) {
                var html = findQuery(tagsQuery, strTags, data, page, pageChange, 'tag')[0];
                pageChange = findQuery(tagsQuery, strTags, data, page, pageChange, 'tag')[1];
            }
            else if (codeQuery) {
                var html = findQuery(codeQuery, strCode, data, page, pageChange, 'code')[0];
                pageChange = findQuery(codeQuery, strCode, data, page, pageChange, 'code')[1];
            }
            pageChange += '</div>';

            html += pageChange;

            // now the results...

            var id = 0;
            if (data) {
                data.forEach(function (s) {
                    //Code research
                    if (codeQuery) {

                        // Create html div with Code research

                        html += createHTMLResultDiv(s, id, JSON.parse(s.jsonPayload).code, strCode);

                    }

                    //Tags research
                    if (tagsQuery) {
                        if ((s.tags) && (s.tags.toUpperCase().includes(strTags.toUpperCase()))) {
                            // Create html div with Tags research

                            html += createHTMLResultDiv(s, id, s.tags, strTags);
                        }
                    }

                    //Title or description research
                    if (query) {
                        if ((s.name) && (s.name.includes(strQuery))) {
                            // Create html div with Title research
                            html += createHTMLResultDiv(s, id, s.name, strQuery);
                        }
                        else if ((s.description) && (s.description.includes(strQuery))) {
                            // Create html div with Description research
                            html += createHTMLResultDiv(s, id, s.description, strQuery);
                        }
                    }

                    id++;

                });
            }
            html += pageChange;
            $.ajax({
                url: 'http://babylonjs-api2.azurewebsites.net/snippets/count/' + queryType,
                type: "POST",
                data: numberData,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).error(function (error) {
                console.log(error);
            }).success(function (data) {
                if (data) {
                    displayPagesInfos(data.count, max, page);
                }
                else {
                    document.getElementById('resultCount').innerText = '0';
                }
            });


            $('.searchHeader').remove();
            $('.searchplayground-content').append(html);

            // Add listerners on results
            for (var indexResultat = 0; indexResultat < max; indexResultat++) {
                var resultCoreDiv = document.getElementById("resultTitleCore" + indexResultat);
                if (resultCoreDiv) {
                    resultCoreDiv.onclick = function () {
                        // Show/Hide resultTitleExtra
                        var index = this.id.replace("resultTitleCore", "");
                        if ((document.getElementById("resultExtra" + index).className) == ("resultHidden")) {
                            document.getElementById("resultExtra" + index).className = "resultShow";
                            document.getElementById("showHide" + index).className = "arrowSlide fa fa-caret-up";
                        }
                        else {
                            document.getElementById("resultExtra" + index).className = "resultHidden";
                            document.getElementById("showHide" + index).className = "arrowSlide fa fa-caret-down";
                        }
                    }
                }

            }
            hljs.initHighlighting();
        });
    }

    /**
     * Update the href of the "Next results" & "Previous results" of the search page
     */
    var updateLinks = function () {

        // retrieve current page number
        var searchTerm = getQueryVariable('q');
        var page = getQueryVariable('page') || '1';
        var max = getQueryVariable('max') || 25;
        var bf = getQueryVariable('bf') || 'all';

        var previousPage = parseInt(page) - 1,
            nextPage = parseInt(page) + 1;

        // set the href attributes of the buttons
        var nextResultHref = '/playground?q=' + searchTerm + '&page=' + nextPage + '&max=' + max + '&bf=' + bf;
        var previousResultHref = '/playground?q=' + searchTerm + '&page=' + previousPage + '&max=' + max + '&bf=' + bf;

        $('.nextResults').attr('href', nextResultHref);
        $('.previousResults').attr('href', previousResultHref);

        var elems = document.getElementsByClassName("resultTitle");
        var lastitem = "";

        for (var i = 0; i < elems.length; i++) {
            if (elems[i].innerText.substr(0, 6) != lastitem) {
                elems[i].parentElement.style.marginTop = "20px";
                lastitem = elems[i].innerText.substr(0, 6);
            }
        };
    };

    var getQueryVariable = function (element) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == element) { return pair[1]; }
        }
        return (false);
    };

    var displayPagesInfos = function (totalCount, maxResultPerPage, actualPage) {
        document.getElementById('resultCount').innerText = totalCount;

        var pagesNum = Math.ceil(totalCount / maxResultPerPage);

        if (actualPage > 0) {
            document.getElementById('previousPageButton').style.display = "block";
        }
        if (actualPage + 1 < pagesNum) {
            document.getElementById('nextPageButton').style.display = "block";
        }
    };
    var findQuery = function (TypeQuery, strTypeResultat, data, page, pageChange, linkType) {
        var htmlFindQuery = '<div class="searchHeader"><h2> <span id="resultCount">...</span> result(s)  for <a href="/playground?' + linkType + '=' + TypeQuery + '">' + strTypeResultat + '</a></h2></div>';
        var pages = 10;
        pageChange = '<div class="pageChangeWrapper" style="margin: 20px;">';
        if (page > 0) {
            pageChange += '<a id="previousPageButton" style="display:none" class="pageChangeLink previousResults" href="/playground?' + linkType + '=' + TypeQuery + '&page=' + (page - 1) + '">Previous Page</a>';
        }

        if (page + 1 < pages) {
            pageChange += '<a id="nextPageButton" style="display:none" class="pageChangeLink nextResults" href="/playground?' + linkType + '=' + TypeQuery + '&page=' + (page + 1) + '">Next Page</a>';
        }
        return [htmlFindQuery, pageChange];
    }

    var createHTMLResultDiv = function (s, id, TypeResearch, strTypeResultat) {
        var htmlResultDiv = '<div class="result">';
        htmlResultDiv += '<div class="resultCore">';

        //Code included in the research with research highlighted.
        htmlResultDiv += '<div id="resultTitleCore' + id + '">';
        
        // Title playground
        if (!s.name) {
            htmlResultDiv += '<div class="resultTitle">' + s.id + '</div> <div class="version">Version ' + s.version + '<i class="arrowSlide fa fa-caret-down" id="showHide' + id + '" aria-hidden="true"></i></div>';
        }
        else {
            htmlResultDiv += '<div class="resultTitle">' + s.name + ' : (' + s.id + ')</div> <div class="version">Version ' + s.version + '<i class="arrowSlide fa fa-caret-down" id="showHide' + id + '" aria-hidden="true"></i></div>';
        }
        htmlResultDiv += '</div>';
        
        //Tags
        if (s.tags) {
            htmlResultDiv += '<div class="resultTags">'
            var TagTable = s.tags.split(";");
            TagTable.forEach(function (element) {
                htmlResultDiv += '<div class="resultTag"> <a href="http://doc.babylonjs.com/playground?tag=' + element + '"target="_blank"> ' + element + '</a></div>';
            }, this);
            htmlResultDiv += '</div>'
        }
        
        // The hidden div, that is displayed by clicking on it
        htmlResultDiv += '<div class="resultHidden" id="resultExtra' + id + '">'

        //Description
        if (s.description) {
            htmlResultDiv += '<div class="resultDesc">' + s.description + '</div>';
        }
        else {
            htmlResultDiv += '<div class="resultDesc"> No description </div>';
        }

        // Code
        htmlResultDiv += '<div class="resultCode">';

        var searchedWords = strTypeResultat.split(' '); // N searched words
        var nbWordsBeforeAfter = searchedWords.length==1?20:10;
        for (var w of searchedWords) {

            var codeReplace = replaceAll(w, JSON.parse(s.jsonPayload).code, nbWordsBeforeAfter);
            htmlResultDiv += '<pre><code class="lang-javascript"> <span id=textToReplace' + id + '>' + codeReplace + '</span></code></pre>';
        }
        
        // End code
        htmlResultDiv += '</div>';

        // Create link
        htmlResultDiv += createLinkToPlayground(s, id);
        
        // End hidden div
        htmlResultDiv += '</div>';
        
        // End result core
        htmlResultDiv += '</div>';

        // End result
        htmlResultDiv += '</div>';

        return htmlResultDiv;
    }


    var createLinkToPlayground = function (s, id) {

        //Links
        var htmlResultExtraDiv = '<div class="resultLink">'
        htmlResultExtraDiv += '<a href="http://www.babylonjs-playground.com/#' + s.id + '#' + s.version + '" target="_blank">';
        htmlResultExtraDiv += '<span class="colorLink"> Playground <i class="fa fa-external-link-square" aria-hidden="true"></i></span>'
        htmlResultExtraDiv += '</a>';
        htmlResultExtraDiv += '</div>';

        return htmlResultExtraDiv;
    }

    var replaceCode = function (str, search, replacement) {
        if (str) {
            return str.replace(new RegExp(search, 'g'), replacement);
        }
    };

    var replaceAll = function (search, originalText, precision) {
        finalText = "";
        var text = originalText.toLowerCase();
        search = search.toLowerCase();

        var index = 0;
        var count = 0;
        var srchl = search.length;
        var result = null;
        var spanBefore = '<span class="resultQuery">',
            spanAfter = '</span>';

        let regExp = new RegExp(search, 'gi');
        originalText = originalText.replace(regExp, spanBefore+search+spanAfter);

        var originalTextLower = originalText.toLowerCase();

        var wordsLower = originalTextLower.split(" "),
            words = originalText.split(" "),
            index = wordsLower.firstOccurance(search.toLowerCase()),
            result = [],
            startIndex, stopIndex;

        startIndex = index - precision;
        if (startIndex < 0) {
            startIndex = 0;
        }

        stopIndex = index + precision + 1;
        if (stopIndex > wordsLower.length) {
            stopIndex = wordsLower.length;
        }


        result = result.concat(words.slice(startIndex, index));
        result = result.concat(words.slice(index, stopIndex));
        originalText = '<br>'+result.join(' '); // join back

        return originalText;
    }

    // Finds the first occurance of our research
    Array.prototype.firstOccurance = function (term) {
        for (var i = 0; i < this.length; i++) {
            if (this[i].indexOf(term) != -1) {
                return parseInt(i, 10);
            }
        }
    }

})();