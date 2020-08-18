(function() {

    $(document).ready(function() {

        updateLinks();
    });

    /**
     * Update the href of the "Next results" & "Previous results" of the search page
     */
    var updateLinks = function() {

        // retrieve current page number
        var searchTerm = getQueryVariable('q');
        var page = getQueryVariable('page') || '1';
        var max = getQueryVariable('max') || 10;

        var previousPage = parseInt(page) - 1,
            nextPage = parseInt(page) + 1;

        // set the href attributes of the buttons
        var nextResultHref = '/playground?q=' + searchTerm + '&page=' + nextPage + '&max=' + max;
        var previousResultHref = '/playground?q=' + searchTerm + '&page=' + previousPage + '&max=' + max;

        $('.nextResults').attr('href', nextResultHref);
        $('.previousResults').attr('href', previousResultHref);
    };

    var reloadPage = function() {
        var searchTerm = getQueryVariable('q');

        var page = getQueryVariable('page') || '1';
        var max = getQueryVariable('max') || 10;

        var url = '/playground?q=' + searchTerm + '&page=1' + '&max=' + max;

        window.location = url;
    };

    var getQueryVariable = function(element) {
        var query = decodeURIComponent(window.location.search.substring(1));
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
	    vars[i] = vars[i].replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&#34;");
            var pair = vars[i].split("=");
            if (pair[0] == element) { return pair[1]; }
        }
        return (false);
    };
})();
