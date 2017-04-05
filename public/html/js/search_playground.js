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
        if (!query && !tagsQuery && !codeQuery) {
            //$('.searchplayground-content').append('<div class="searchHeader"><h2>No Query Found.</h2></div>');
            return;
        }

        $('.searchplayground-content').append('<div class="searchHeader"><h2>Loading results for ' + strQuery + ' ...</h2></div>');

        var postData = JSON.stringify({
            search: query,
            page: page,
            pageSize: max,
            includePayload: false
        });

        $.ajax({
            url: 'http://babylonjs-api2.azurewebsites.net/snippets/',
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
            data.snippets.forEach(function (s) {
                //Code research
                if (codeQuery) {
                    if ((s.Code) && (s.Code.includes(strCode))) {
                        // Create html div with Code research

                        html += createHTMLResultDiv(s, id, s.Code, strCode);
                    }
                }

                //Tags research
                if (tagsQuery) {
                    if ((s.Tag) && (s.Tag.toUpperCase().includes(strTags.toUpperCase()))) {
                        // Create html div with Tags research

                        html += createHTMLResultDiv(s, id, s.Tag, strTags);
                    }
                }

                //Title or description research
                if (query) {
                    if ((s.Title) && (s.Title.includes(strQuery))) {
                        // Create html div with Title research
                        html += createHTMLResultDiv(s, id, s.Title, strQuery);
                    }
                    else if ((s.Desc) && (s.Desc.includes(strQuery))) {
                        // Create html div with Description research
                        html += createHTMLResultDiv(s, id, s.Desc, strQuery);
                    }
                }

                id++;

            });
            html += pageChange;

            $('.searchHeader').remove();
            $('.searchplayground-content').append(html);

            // Add listerners on results
            for (var indexResultat = 0; indexResultat < data.totalCount; indexResultat++) {
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
            hljs.initHighlightingOnLoad();

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

    var findQuery = function (TypeQuery, strTypeResultat, data, page, pageChange, linkType) {
        var htmlFindQuery = '<div class="searchHeader"><h2>' + data.totalCount + ' Results for <a href="/playground?' + linkType + '=' + TypeQuery + '">' + strTypeResultat + '</a></h2></div>';
        var pages = data.pageCount;
        pageChange = '<div class="pageChangeWrapper" style="margin: 20px;">';
        if (page > 0) {
            pageChange += '<a class="pageChangeLink previousResults" href="/playground?' + linkType + '=' + TypeQuery + '&page=' + (page - 1) + '">Previous Page</a>';
        }

        if (page + 1 < pages) {
            pageChange += '<a class="pageChangeLink nextResults" href="/playground?' + linkType + '=' + TypeQuery + '&page=' + (page + 1) + '">Next Page</a>';
        }
        return [htmlFindQuery, pageChange];
    }

    var createHTMLResultDiv = function (s, id, TypeResearch, strTypeResultat) {
        var htmlResultDiv = '<div class="result">';
        htmlResultDiv += '<div class="resultCore">';

        //Code included in the research with research highlighted.
        htmlResultDiv += '<div id="resultTitleCore' + id + '">';

        if (!s.Code) {
            s.Code = "No code";
        }

        if (TypeResearch && TypeResearch.toUpperCase().includes(strTypeResultat.toUpperCase())) {
            var codeReplace = replaceAll(s.Code, strTypeResultat, '<span class="resultQuery">' + strTypeResultat + '</span>');
            if (!s.Title){
                s.Title = 'No title';
            }
            htmlResultDiv += '<div class="resultTitle">' + s.Title + ' : (' + s.Id + ')</div> <div class="version">Version ' + s.Version + '<i class="arrowSlide fa fa-caret-down" id="showHide' + id + '" aria-hidden="true"></i></div>';
            //Tags
            if (s.Tag) {
                htmlResultDiv += '<div class="resultTags">'
                TagTable = s.Tag.split(" ");
                TagTable.forEach(function (element) {
                    htmlResultDiv += '<div class="resultTag"> <a href="http://doc.babylonjs.com/playground?q=' + element + '"target="_blank"> ' + element + '</a></div>';
                }, this);
                htmlResultDiv += '</div>'
            }

            htmlResultDiv += '</div>'
            htmlResultDiv += '<div class="resultHidden" id="resultExtra' + id + '">'

            //Description
            if (s.Desc) {
                htmlResultDiv += '<div class="resultDesc">' + s.Desc + '</div>';
            }
            else {
                htmlResultDiv += '<div class="resultDesc"> No description </div>';
            }

            htmlResultDiv += '<div class="resultCode"><pre><code class="lang-javascript">' + codeReplace + '</code></pre></div>';

            var htmlResultExtraDiv = createHTMLResultExtraDiv(s, id);
            htmlResultDiv += htmlResultExtraDiv;
        }

        return htmlResultDiv;
    }


    var createHTMLResultExtraDiv = function (s, id) {

        //Links
        var htmlResultExtraDiv = '<div class="resultLink">'
        htmlResultExtraDiv += '<a href="http://www.babylonjs-playground.com/#' + s.Id + '#' + s.Version + '" target="_blank">';
        htmlResultExtraDiv += '<span class="colorLink"> Playground <i class="fa fa-external-link-square" aria-hidden="true"></i></span>'
        htmlResultExtraDiv += '</a>';
        htmlResultExtraDiv += '</div>';
        htmlResultExtraDiv += '</div>';
        htmlResultExtraDiv += '</div>';
        htmlResultExtraDiv += '</div>';

        return htmlResultExtraDiv;
    }

    var replaceAll = function (str, search, replacement) {
        if (str) {
            return str.replace(new RegExp(search, 'g'), replacement);
        }
    };

})();
