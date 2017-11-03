(function () {

    $(document).ready(function () {

        /*updateLinks();

        $('.basicFilter').each(function(i, f){
            $(this).on('click', function(evt){
                if($(this).hasClass('enabled')){
                    if($(this).attr('id') === 'all'){
                        $('#all').removeClass('disabled').addClass('enabled');
                    }
                    $(this).removeClass('enabled').addClass('disabled');
                    reloadPage();
                } else {
                    if($(this).attr('id') != 'all'){
                        $('#all').removeClass('enabled').addClass('disabled');
                    }
                    $(this).removeClass('disabled').addClass('enabled');
                    reloadPage();
                }
            });
        });*/

        // make the request
        runQuery();
    });

    function runQuery() {
        var query = getQueryVariable('q');
        var strQuery = decodeURIComponent(query).split('+').join(' ');

        if (!query) {
            // generate the html. can be nicer but...
            var html = '<div class="searchHeader"><h2>No Results Found.</h2></div>';
            $('.search-content').html(html);
            return;
        }

        if(!navigator.onLine){
            var html = '<div class="searchHeader"><h2>Search doesn\'t work in offline mode.</h2></div>';
            $('.search-content').html(html);
            return;
        }

        $.getJSON('https://babylonjs-doc.search.windows.net/indexes/documents/docs?api-version=2016-09-01&api-key=DF333E13A6C71B67290E46668C86DD7E&search=' + query).success(function (data) {
            var files = [];
            var categories = [];

            data.value.forEach(function (val) {
                var version = val.category.indexOf('classes') !== -1 ? val.category.substring(val.category.indexOf("/") + 1) : val.category;
                files.push({
                    src: val.url,
                    version: version,
                    name: val.title
                });
                if (categories.indexOf(version) === -1) {
                    categories.push(version);
                }
            });

            // generate the html. can be nicer but...
            var html = '<div class="searchHeader"><h2>Results for <a href="/search?q=' + query + '">' + strQuery + '</a></h2></div>';

            html += '<div class="filters">';
            // add filters:

            // first add "all":
            html += '<div class="basicFilter enabled" data-version="all"><span>all</span><span>(' + files.length + ')</span></div>';
            // and now the rest
            categories.forEach(function (cat) {
                var numOfFiles = files.filter(function (f) { return f.version === cat }).length;
                html += '<div class="basicFilter disabled"  data-version="' + cat + '"><span>' + cat.replace(/_/, " ") + '</span><span>(' + numOfFiles + ')</span></div>';
            });

            html += '</div>';

            // now the results...
            files.forEach(function (f) {
                html += '<div class="result" data-version="' + f.version + '">';
                html += '<div class="resultTitle">';

                html += '<a href="' + f.src + '">' + f.version.replace(/_/, " ") + ' : ' + f.name + '</a>';

                html += '</div>';
                html += '</div>';
            })


            $('.search-content').html(html);

            $('.search-content').on('click', '.basicFilter', function (filter) {
                var version = $(this).data('version');
                $('.basicFilter').removeClass('enabled').addClass('disabled');
                $('.basicFilter[data-version="' + version + '"]').removeClass('disabled').addClass('enabled');

                if (version === 'all') {
                    $('.result').show();
                } else {
                    $('.result').hide();
                    $('.result[data-version="' + version + '"]').show();
                }
            });
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
        var nextResultHref = '/search?q=' + searchTerm + '&page=' + nextPage + '&max=' + max + '&bf=' + bf;
        var previousResultHref = '/search?q=' + searchTerm + '&page=' + previousPage + '&max=' + max + '&bf=' + bf;

        $('.nextResults').attr('href', nextResultHref);
        $('.previousResults').attr('href', previousResultHref);
    };

    var reloadPage = function () {
        var enabledFilters = recoltFilters();

        var bf = (enabledFilters && enabledFilters.length > 0) ? '&bf=' + enabledFilters.join('+') : '&bf=all';

        var searchTerm = getQueryVariable('q');
        var page = getQueryVariable('page') || '1';
        var max = getQueryVariable('max') || 25;

        var url = '/search?q=' + searchTerm + '&page=1' + '&max=' + max + bf;

        window.location = url;
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

    var recoltFilters = function () {
        var enabledFilters = [];

        $('.basicFilter.enabled span:first-of-type').each(function (i, filter) {
            if ($(filter).text() != 'all') {
                enabledFilters.push($(filter).text());
            } else {
                return false;
            }
        });

        return enabledFilters;
    };
})();