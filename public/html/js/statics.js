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

    var filterBar = document.querySelector("#filterBar");
    var filter = function() {
        let value = filterBar.value.toLowerCase();
        var lines = document.getElementsByClassName("checkLocal");

        for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            var line = lines[lineIndex];
            if ((line.innerText.toLowerCase()+line.children[0].children[0].innerText.toLowerCase()).indexOf(value) > -1) {
                line.parentElement.style.display = "";
            } else {
                line.parentElement.style.display = "none";
            }
        }

        var categories = document.getElementsByClassName("categoryContainer");
        var displayCount = categories.length;

        for(var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
            var category = categories[categoryIndex];
            category.style.display = "block";
            if(category.clientHeight < 25) {
                category.style.display = "none";
                displayCount --;
            }
        }

        if(displayCount == 0) document.getElementById("noResultsContainer").style.display = "block";
        else  document.getElementById("noResultsContainer").style.display = "none";
    }
    filterBar.addEventListener('input', filter);
})(jQuery);
