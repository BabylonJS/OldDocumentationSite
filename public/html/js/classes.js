(function() {
    window.addEventListener("DOMContentLoaded", function() {

        // Wrapp / Unwrapp the list of a category classes
        $('.categoryTitle').click(function() {
            $(this).next().toggle(150);
        });

        var listClassesAlpha        = $("#classes_classesListByAlpha");
        var listClassesTags         = $("#classes_classesListByTag");

        var alphaFilterWrapper      = document.getElementById("alphaFilter");
        var alphaFilter             = alphaFilterWrapper.firstChild;
        var tagFilterWrapper        = document.getElementById("tagFilter");
        var tagFilter               = tagFilterWrapper.firstChild;

        var orderByTagButton        = $("#orderByTags");
        var orderByAlphaButton      = $("#orderByAlpha");

        /**
         * Change all links in case we are debugging the documentation as localhost
         */
        if(location.hostname === "localhost"){
            $('.checkLocal').each(function() {
                var linkStr = $(this).attr('href');
                $(this).attr('href', '.' + linkStr.substr(linkStr.lastIndexOf('/'), linkStr.length));
            });
        }

        /**
         * Display the list of classes, ordered by name
         */
        function showClassesByAlpha(evt) {
            if (listClassesAlpha.hasClass('hidden')) {
                alphaFilterWrapper.className = '';
                tagFilterWrapper.className = 'hidden';

                listClassesAlpha.removeClass('hidden');
                listClassesTags.addClass('hidden');

                orderByTagButton.removeClass('selectedOrder');
                orderByAlphaButton.addClass('selectedOrder');

                localStorage.orderClassesby = 'alpha';
            }

            // if a class has been selected, open the correct list
            if(localStorage.getItem('selectedClass')){
                $.each($('.class'), function(i, classTitle){
                    if($(classTitle).text == localStorage.getItem('selectedClass')){
                    //    if($(categoryTitle).next().is(':hidden')){
                    //        $(categoryTitle).next().toggle(150);

                            // jump to this class title
                            window.scrollTo(0, $(classTitle).offset().top - 50);
                            //$('.classContent').scrollTop($selectedElement.offset().top - 50);
                    //    }
                    }
                });
            }
        }
        function showClassesByTags(evt) {
            if (listClassesTags.hasClass('hidden')) {
                alphaFilterWrapper.className = 'hidden';
                tagFilterWrapper.className = '';

                listClassesAlpha.addClass('hidden');
                listClassesTags.removeClass('hidden');

                orderByTagButton.addClass('selectedOrder');
                orderByAlphaButton.removeClass('selectedOrder');

                localStorage.orderClassesby = 'tags';
            }

            // if a tag has been selected, open the correct list
            if(window.localStorage.selectedTag){
                $.each($('.categoryTitle'), function(i, categoryTitle){
                    if($(categoryTitle).parent('.category').attr('id') == window.localStorage.selectedTag){
                        if($(categoryTitle).next().is(':hidden')){
                            $(categoryTitle).next().toggle(150);

                            // jump to this category title
                            window.scrollTo(0, $(categoryTitle).offset().top - 50);
                            //$('.classContent').scrollTop($selectedElement.offset().top - 50);
                        }
                    }
                });
            }
        }

        // launched when user types something in the filter input area above the class list
        function filterAlphaList(search){
            var reg = new RegExp(search, 'gi');
            $('.classLink').each(function(i, link){
                if ((link.attributes['data-name'].nodeValue).search(reg) == -1) {
                    link.className = 'classLink hidden';
                } else {
                    link.className = 'classLink';
                }
            });
        }
        // launched when user types something in the filter input area above the tag list
        function filterTagList(search){
            var reg = new RegExp(search, 'gi');
            $('.category').each(function(i, category){
                if (!reg.exec(category.attributes['data-name'].nodeValue)) {
                    category.className = 'category hidden';
                } else {
                    category.className = 'category';
                }
            });
        }

        // event on key up in the alpha filter
        alphaFilter.addEventListener('keyup', function(){
            if(alphaFilter.value.length > 0){
                filterAlphaList(alphaFilter.value);
            } else {
                $('.classLink').each(function(i, link){
                    link.className = 'classLink';
                });
            }
        });
        // event on key up in the tag filter
        tagFilter.addEventListener('keyup', function(){
            if(tagFilter.value.length > 0){
                filterTagList(tagFilter.value);
            } else {
                $('.category').each(function(i, category){
                    category.className = 'category';
                });
            }
        });

        orderByAlphaButton.click(showClassesByAlpha);
        orderByTagButton.click(showClassesByTags);

        /**
        * Get the older selected order, and apply it
        */
        if(localStorage.orderClassesby) {
            if(window.localStorage.orderClassesby == 'tags') {
                showClassesByTags();
            }
            else if(window.localStorage.orderClassesby == 'alpha') {
                showClassesByAlpha();
            }
        }  else {
            // first time on this page for the user - set default list to alpha list
            showClassesByAlpha();
        }
    });
})();