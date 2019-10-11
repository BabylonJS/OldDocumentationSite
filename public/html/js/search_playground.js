(function() {

    $(document).ready(function() {

        if (localStorage.getItem('docBabylon_lastSearch') != false
            && localStorage.getItem('docBabylon_lastSearch') != null
            && localStorage.getItem('docBabylon_lastSearch_type') != false
            && localStorage.getItem('docBabylon_lastSearch_type') != null) {
            document.getElementById('lastSearch').innerHTML = 'Your last search : <a href="http://doc.babylonjs.com/playground?'
                + localStorage.getItem('docBabylon_lastSearch_type') + '='
                + localStorage.getItem('docBabylon_lastSearch') + '">' + localStorage.getItem('docBabylon_lastSearch') + '</a>';
        }

        runQuery();
    });

    function runQuery() {
        var query = getQueryVariable('bjsq');
        var tagsQuery = getQueryVariable('tag');
        var codeQuery = getQueryVariable('code');
        var strQuery = query.split('+').join(' ');
        var strTags = tagsQuery.split('+').join(' ');
        var strCode = codeQuery.split('+').join(' ');
        var page = +(getQueryVariable('page')) || 0;
        var max = +(getQueryVariable('max')) || 25;
        var numberResults = 0;
        var finalQuery = '';
        var queryType = '';
        if (strQuery != '') {
            queryType = 'name/';
            finalQuery = strQuery;
            localStorage.setItem("docBabylon_lastSearch_type", "name");
            localStorage.setItem("docBabylon_lastSearch", strQuery);
            try { document.getElementsByName('bjsq')[1].value = strQuery; } catch (e) { }

        }
        else if (strTags != '') {
            queryType = 'tags/';
            finalQuery = strTags;
            localStorage.setItem("docBabylon_lastSearch_type", "tags");
            localStorage.setItem("docBabylon_lastSearch", strTags);
            try { document.getElementsByName('tag')[0].value = strTags; } catch (e) { }
        }
        else if (strCode != '') {
            queryType = 'code/';
            localStorage.setItem("docBabylon_lastSearch_type", "code");
            localStorage.setItem("docBabylon_lastSearch", strCode);
            document.getElementsByName('code')[0].value = strCode;
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
            url: 'https://snippet.babylonjs.com/search/' + queryType,
            type: "POST",
            data: postData,
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).error(function(error) {
            console.log(error);
        }).success(function(data) {
            var html = '';

            //If we collect data, show our number of results and buttons to change pages
            var pageChange = '';
            if (query) {
                html = findQuery(query, strQuery, data, page, pageChange, 'bjsq')[0];
                pageChange = findQuery(query, strQuery, data, page, pageChange, 'bjsq')[1];
            }
            else if (tagsQuery) {
                html = findQuery(tagsQuery, strTags, data, page, pageChange, 'tag')[0];
                pageChange = findQuery(tagsQuery, strTags, data, page, pageChange, 'tag')[1];
            }
            else if (codeQuery) {
                html = findQuery(codeQuery, strCode, data, page, pageChange, 'code')[0];
                pageChange = findQuery(codeQuery, strCode, data, page, pageChange, 'code')[1];
            }
            pageChange += '</div>';

            html += pageChange;

            // now the results...

            var id = 0;

            if (data) {
                data = data.filter(d => d.nodeMaterial === undefined); // Remove node materials for now

                data.forEach(function(s) {
                    //Code research
                    if (codeQuery) {

                        try {
                            // Create html div with Code research
                            var codeToDisplay = JSON.parse(s.jsonPayload);
                            var type = '';
                            
                            if (codeToDisplay.code) {
                                type = '';
                                codeToDisplay = codeToDisplay.code;
                            } else {
                                // CYOS
                                type = 'cyos';
                                codeToDisplay = codeToDisplay.vertexShader + "\n" + codeToDisplay.pixelShader;
                            }

                            html += createHTMLResultDiv(s, id, codeToDisplay, strCode, type);
                        }
                        catch (ex) {
                            console.log("A parsing error occured. Please, report this issue on the BabylonJS documentation github with the searched term. Thanks a lot!");
                        }

                    }

                    //Tags research
                    if (tagsQuery) {
                        if ((s.tags) && (s.tags.toUpperCase().search(strTags.toUpperCase()) != -1)) {
                            // Create html div with Tags research

                            html += createHTMLResultDiv(s, id, s.tags, strTags);
                        }
                    }

                    //Title or description research
                    if (query) {
                        if ((s.name) && (s.name.toUpperCase().search(strQuery.toUpperCase()) != -1)) {
                            // Create html div with Title research
                            html += createHTMLResultDiv(s, id, s.name, strQuery);
                        }
                        else if ((s.description) && (s.description.toUpperCase().search(strQuery.toUpperCase()) != -1)) {
                            // Create html div with Description research
                            html += createHTMLResultDiv(s, id, s.description, strQuery);
                        }
                    }

                    id++;

                });
            }
            html += pageChange;
            $.ajax({
                url: 'https://snippet.babylonjs.com/count/' + queryType,
                type: "POST",
                data: numberData,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).error(function(error) {
                console.log(error);
            }).success(function(data) {
                if (data) {
                    displayPagesInfos(data, max, page);
                }
                else {
                    document.getElementById('resultCount').innerText = '0';
                }
            });


            $('.searchHeader').remove();
            $('.searchplayground-content').append(html);

            // Add listerners on results
            var selectedVersion = [];
            for (var indexResultat = 0; indexResultat < max; indexResultat++) {

                if (indexResultat) {
                    selectedVersion[indexResultat] = document.getElementById("buttonDropdown" + indexResultat);
                    selectedVersion.forEach(function(version) {
                        if (version) {
                            var versionLink = version.options[version.selectedIndex].value;
                            version.addEventListener("change", function() {
                                versionLink = version.options[version.selectedIndex].value;
                                for (var i = 0; i < max; i++) {
                                    if (document.getElementById("linkplayground" + i)) {
                                        var linkPlayground = document.getElementById("linkplayground" + i).href;
                                        linkPlayground = linkPlayground.slice(0, linkPlayground.lastIndexOf('#')) + "#" + versionLink;
                                        document.getElementById("linkplayground" + i).href = linkPlayground;
                                    }
                                }
                            });

                        }
                    });

                }
                var resultCoreDiv = document.getElementById("resultTitleCore" + indexResultat);
                if (resultCoreDiv) {

                    resultCoreDiv.onclick = function() {
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
    var updateLinks = function() {

        // retrieve current page number
        var searchTerm = getQueryVariable('bjsq');
        var page = getQueryVariable('page') || '1';
        var max = getQueryVariable('max') || '25';
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

    var getQueryVariable = function(element) {
        var query = decodeURIComponent(window.location.search.substring(1));
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
	    vars[i] = vars[i].replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&#34;");
            var pair = vars[i].split("=");
            if (pair[0] == element) { return pair[1]; }
        }
        return "";
    };

    var displayPagesInfos = function(totalCount, maxResultPerPage, actualPage) {
        document.getElementById('resultCount').innerText = totalCount;

        var pagesNum = Math.ceil(totalCount / maxResultPerPage);

        if (actualPage > 0) {
            document.getElementById('previousPageButton').style.display = "block";
        }
        if (actualPage + 1 < pagesNum) {
            document.getElementById('nextPageButton').style.display = "block";
        }
    };
    var findQuery = function(TypeQuery, strTypeResultat, data, page, pageChange, linkType) {
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
    };

    var createHTMLResultDiv = function(s, id, codeToDisplay, strTypeResultat, type) {
        var htmlResultDiv = '<div class="result ' + type + '">';
        htmlResultDiv += '<div class="resultCore">';

        //Code included in the research with research highlighted.
        htmlResultDiv += '<div id="resultTitleCore' + id + '">';

        // Title playground
        if (!s.name) {
            htmlResultDiv += '<div class="resultTitle">' + s.id;
        }
        else {
            htmlResultDiv += '<div class="resultTitle">' + s.name + ' : (' + s.id + ')';
        }

        htmlResultDiv += '</div>';
        //Tags 
        if (s.tags) {
            htmlResultDiv += '<div class="resultTags">'
            var TagTable = s.tags.split(",");
            TagTable.forEach(function(element) {
                element = element.trim();
                htmlResultDiv += '<div class="resultTag"> <a href="https://doc.babylonjs.com/playground?tag=' + element + '"target="_blank"> ' + element + '</a></div>';
            }, this);
            htmlResultDiv += '</div>';
        }

        htmlResultDiv += '<div class="version">Version ' + s.version + '<i class="arrowSlide fa fa-caret-down" id="showHide' + id + '" aria-hidden="true"></i>';

        // End 
        htmlResultDiv += '</div>';
        // End resultTitleCore
        htmlResultDiv += '</div>';

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

        searchedWords.forEach(word => {
            if (codeToDisplay.toLowerCase().includes(word.toLowerCase())) {
                var nbWordsBeforeAfter = searchedWords.length == 1 ? 20 : 10;
                for (var w of searchedWords) {
                    var parsedCode = codeToDisplay
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        .replace(/"/g, "&quot;")
                        .replace(/'/g, "&#039;");
                    var codeReplace = replaceAll(w, parsedCode, nbWordsBeforeAfter);
                    htmlResultDiv += '<pre><code class="lang-javascript"> <span id=textToReplace' + id + '>' + codeReplace + '</span></code></pre>';
                }
            }
        });



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
    };

    var createLinkToPlayground = function(s, id) {
        var htmlResultExtraDiv = '<div class="resultLink">'
        htmlResultExtraDiv += '<select id="buttonDropdown' + id + '" class="dropbtn">'
        var selected = "";
        for (var i = 0; i <= s.version; i++) {
            if (i == s.version) {
                selected = " selected";
            }
            htmlResultExtraDiv += '<option ' + selected + ' value = ' + i + '>Version ' + i + '</option>';
        }
        htmlResultExtraDiv += '</select>';


        let obj = JSON.parse(s.jsonPayload);

        if (obj.pixelShader) {
            // This is a link to CYOS
            //Links

            //for (var id=0; id < s.)
            htmlResultExtraDiv += '<a href="https://www.babylonjs.com/cyos/#' + s.id + '#' + s.version + '" id="linkplayground' + id + '" target="_blank">';
            htmlResultExtraDiv += '<span class="colorLink"> CYOS <i class="fa fa-external-link-square" aria-hidden="true"></i></span>';
            htmlResultExtraDiv += '</a>';
        } else {
            //Links

            htmlResultExtraDiv += '<a href="https://www.babylonjs-playground.com/#' + s.id + '#' + s.version + '" id="linkplayground' + id + '" target="_blank">';
            htmlResultExtraDiv += '<span class="colorLink"> Playground <i class="fa fa-external-link-square" aria-hidden="true"></i></span>'
            htmlResultExtraDiv += '</a>';
        }

        // End of resultLink
        htmlResultExtraDiv += '</div>';
        return htmlResultExtraDiv;

    };

    var replaceCode = function(str, search, replacement) {
        if (str) {
            return str.replace(new RegExp(search, 'g'), replacement);
        }
    };

    var replaceAll = function(search, originalText, precision) {
        finalText = "";
        if (originalText) {
            var text = originalText.toLowerCase();
            search = search.toLowerCase();

            var index = 0;
            var count = 0;
            var srchl = search.length;
            var result = null;
            var spanBefore = '<span class="resultQuery">',
                spanAfter = '</span>';

            let regExp = new RegExp(search, 'gi');
            originalText = originalText.replace(regExp, spanBefore + search + spanAfter);

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
            originalText = '<br>' + result.join(' '); // join back

            if (originalText.length < 500)
                return originalText;
            else {
                // String before the word
                var wordsString = "";
                wordsString = wordsString.concat(words.slice(startIndex, index));

                // start index
                var begIndex = wordsString.length - 250;
                if (begIndex < 0) {
                    begIndex = 0;
                }

                // Size of the substring to extract
                var size = 500;
                var lastSpanIndex = originalText.lastIndexOf("</span>"); // Avoid to cut a span and end with weird html things.
                if (lastSpanIndex > 500)
                    size = lastSpanIndex + 8;
                if (size + begIndex > originalText.length) {
                    size = originalText.length - begIndex;
                }

                // if more than 500 characters, only return the substring around the word 
                return originalText.substr(begIndex, size);
            }
        }
        else return "";
    };

    // Finds the first occurance of our research
    Array.prototype.firstOccurance = function(term) {
        for (var i = 0; i < this.length; i++) {
            if (this[i].indexOf(term) != -1) {
                return parseInt(i, 10);
            }
        }
    }

})();
