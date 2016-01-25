(function ($) {
    $('.tocToggle').click(function(){
        $('.tocContent').toggle(600);

        $('.tocToggle i').attr('class',
             $('.tocToggle i').attr('class') === 'fa fa-arrow-up' ? 'fa fa-arrow-down' : 'fa fa-arrow-up'
        );
    });

    $('.tocContent a').click(function(evt){
        evt.preventDefault();

        // get the necessary values
        var hrefString = $(this).attr('href');

        //var titleId = hrefString.split('\#')[1];
        var $selectedElement = $('a.anchor[href="' + hrefString + '"]');

        // change client url
        var currentPage = window.location.toString().split('#', [0]);
        window.history.pushState({id: hrefString}, '', currentPage + hrefString);

        // highlight selected title
        $('.highlighted').removeClass('highlighted');
        $selectedElement.parent().addClass('highlighted');

        // jump to the title, with a little vertical offset
        window.scrollTo(0, $selectedElement.offset().top - 50);
    });
})(jQuery);
