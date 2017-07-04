(function ($) {

    $('.tag').click(function () {
        var tagName = this.getAttribute('data-name');

        $('.tag').removeClass('active');
        $(this).addClass('active');

        $('.fileTitle:not(.' + tagName + ')').fadeOut(toggleEmptyDiv);
        $('.fileTitle.' + tagName).fadeIn(toggleEmptyDiv);

        scrollToList();
    });

    if(location.hostname === "localhost"){
        $('.checkLocal').each(function() {
            var linkStr = $(this).attr('href');
            $(this).attr('href', '.' + linkStr.substr(linkStr.lastIndexOf('/'), linkStr.length));
        });
    }

    function toggleEmptyDiv(){
        if ($('.fileTitle:visible').length == 0) $('.emptyList').fadeIn();
        else $('.emptyList').fadeOut();
        return false;
    }

    function scrollToList(){
        $('html,body').animate({scrollTop: $('.fileList').offset().top - 150}, function(e){
            console.log('scrolled');
        });
        return false;
    }
})(jQuery);
