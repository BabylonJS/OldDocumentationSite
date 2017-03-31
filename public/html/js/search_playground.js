(function () {

    $(document).ready(function () {

        runQuery();
    });

    function runQuery() {
        var query = getQueryVariable('q');
        var strQuery = decodeURIComponent(query).split('+').join(' ');
        var page = +(getQueryVariable('page')) || 0;
        var max = +(getQueryVariable('max')) || 24; // Weird bug with 25.

        if (!query) {
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
            url: 'https://babylonjs-api.azurewebsites.net/api/search',
            type: "POST",
            data: postData,
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).success(function (data) {

            var html = '<div class="searchHeader"><h2>' + data.totalCount + ' Results for <a href="/playground?q=' + query + '">' + strQuery + '</a></h2></div>';

            var pages = data.pageCount;
            var pageChange = '<div class="pageChangeWrapper" style="margin: 20px;">';

            if (page > 0) {
                pageChange += '<a class="pageChangeLink previousResults" href="/playground?q=' + query + '&page=' + (page - 1) + '">Previous Page</a>';
            }

            if (page + 1 < pages) {
                pageChange += '<a class="pageChangeLink nextResults" href="/playground?q=' + query + '&page=' + (page + 1) + '">Next Page</a>';
            }

            pageChange += '</div>';

            html += pageChange;

            // now the results...
            data.snippets.forEach(function (s) {

                html += '<a href="http://www.babylonjs-playground.com/#' + s.Id + '#' + s.Version + '" target="_blank">';

                html += '<div class="result">';
                html += '<div class="resultTitle">';

                html += s.Id + '<div class="version">Version ' + s.Version + '</div>';

                html += '</div>';
                html += '</div>';
                html += '</a>';
            });

            html += pageChange;

            $('.searchHeader').remove();
            $('.searchplayground-content').append(html);
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
})();