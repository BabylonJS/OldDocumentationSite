(function () {

    $(document).ready(function (){

        updateLinks();

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
        });
    });

    /**
     * Update the href of the "Next results" & "Previous results" of the search page
     */
    var updateLinks = function(){

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

    var reloadPage = function(){
        var enabledFilters = recoltFilters();

        var bf = (enabledFilters && enabledFilters.length > 0) ? '&bf=' + enabledFilters.join('+') : '&bf=all';

        var searchTerm = getQueryVariable('q');
        var page = getQueryVariable('page') || '1';
        var max = getQueryVariable('max') || 25;

        var url = '/search?q=' + searchTerm + '&page=1' + '&max=' + max +  bf;

        window.location = url;
    };

    var getQueryVariable = function(element) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == element){return pair[1];}
        }
        return(false);
    };

    var recoltFilters = function(){
        var enabledFilters = [];

        $('.basicFilter.enabled span:first-of-type').each(function(i, filter){
            if($(filter).text() != 'all') {
                enabledFilters.push($(filter).text());
            } else {
                return false;
            }
        });

        return enabledFilters;
    };
})();