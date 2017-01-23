(function () {

    //FIXME: the so-called "perfect scrollbar" was preventing the user to scroll the document vertically
    // it is disabled for the moment. DO NOT UNCOMMENT LINES RELATED TO THIS.

    // For mobile style
    var onResize = function () {
        var windowWidth = $(window).width();
        if (windowWidth <= 960) {
            $(".classContent").appendTo($("#wrapper"));
        } else {
            $(".classContent").appendTo($("body"));
        }
    };
    $(window).resize(onResize);

    // The side bar min size
    var MIN = 300;

    // The side bar max size
    var MAX = 900;

    // Stop the event propagation
    var pauseEvent = function (e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        return false;
    };

    $(document).ready(function () {
        // For mobile style
        onResize();

        // Create scrollbars
        //$('.classBar').perfectScrollbar();
        //$('.classContent').perfectScrollbar();

        // get DOM
        var rs = $("#resizeBar").get(0);
        var cb = $(".classBar").get(0);
        var cc = $(".classContent").get(0);

        // Enable drag event
        var isDragging = false;
        //$("#resizeBar").mousedown(function(evt) {
        //    isDragging = true;
        //    // pause event to avoid text selection everywhere
        //    pauseEvent(evt);
        //    $(document).css('cursor', 'col-resize', 'important');
        //});
        //
        //var resize = function(px) {
        //    rs.style.left = px+"px";
        //    cb.style.width = px+"px";
        //    cc.style.marginLeft = px + "px";
        //    cc.style.width = 'calc(100% - '+(px+"px")+')';
        //};
        //
        //$(document).mousemove(function(evt) {
        //    if (isDragging) {
        //        // pause event to avoid text selection everywhere
        //        pauseEvent(evt);
        //        if (evt.clientX <= MIN) {
        //            // resize minimum size
        //            resize(MIN);
        //        }
        //        else if (evt.clientX >= MAX) {
        //            // resize maximum size
        //            resize(MAX);
        //        }
        //        else {
        //            // resize
        //            resize(evt.clientX);
        //        }
        //    }
        //});
        //$(document).mouseup(function(evt) {
        //    isDragging = false;
        //});

        // handles the permalinks
        $.each($("#classMd h3, #classMd h2"), function (i, title) {
            if (title) {
                handlePermalink(title);
            }
        });

        // check if an anchor is specified in the page url, goes to
        // specified anchor if true
        if (window.location.toString().lastIndexOf('#') != -1) {
            // gets the anchor name
            var anchorName = window.location.toString().split('#');
            anchorName = anchorName[1];

            // if anchor exists, jumps to it
            if ($('#' + anchorName)) {
                var $title = $("#" + anchorName);
                var title = document.getElementById(anchorName);
                $title.addClass('highlighted');
                title.scrollIntoView(true);
            }
        }

        var selectedClass = $('#classes_classesListByAlpha').find('> a.classLink[data-name=' + $('#classTitle > h1').text() + ']');

        selectedClass.addClass('selected');
        $('.classBar').scrollTop(selectedClass.offset().top - 100);


        /* when user clicks on a class name in the class list by tag, redirect
         * to the "classes" page, with the correct class list by tag open */
        $.each($('.categoryList'), function (i, classList) {
            $(classList).children().on('click', function (evt) {
                // to do this, save the selected tag in window.localStorage
                window.localStorage.selectedTag = $(classList).parent('div.category').attr('id');
            });
        });

        /* when user clicks on the name of a tag, redirect to the "classes" page
         * with the correct class list by tag open */
        $.each($('.classTag'), function (i, tag) {
            $(tag).on('click', function (evt) {
                window.localStorage.orderClassesby = 'tags';
                window.localStorage.selectedTag = $(tag).attr('id');
            });
        });

        /** Populates the select list with two "options groups":
          * - members
          * - methods/functions.
          * The options groups are sorted. Note that not <optgroup> element
          * is inserted, only <option>.
          **/
        $.each($('.classContent h2'), function(i, h2Title){
            if($(h2Title).text() === 'Methods' || $(h2Title).text() === 'Members' || $(h2Title).text() === 'Functions'){
                // collect all h3 concerned by the h2 title
                var h3Elements = $(h2Title).nextUntil("h2", "h3");

                $('#methodsList').append($('<option>', {
                    class: 'cat',
                    value: $(h2Title).attr('id'),
                    html: $(h2Title).text()
                }));

                // sort the h3 titles (alpha)
                var h3IDs = [];

                $.each(h3Elements, function(i, h3title){
                    h3IDs.push($(h3title).attr('id'));
                });

                h3IDs = h3IDs.sort();

                $.each(h3IDs, function(i, titleId){
                    $('#methodsList').append($('<option>', {
                        value: titleId,
                        html: $('#'+titleId).text()
                    }));
                });
            }
        });

        // select#methodsList -> action on change of selected value
        $('#methodsList').on('change', function () {
            var id = $(this).val(),
                $selectedElement = $('#' + id);

            console.log($selectedElement);

            $('.highlighted').removeClass('highlighted');
            $selectedElement.addClass('highlighted');

            var currentPage = window.location.toString().split('#', [0]);
            window.history.pushState({id: id}, '', currentPage + '#' + id);

            window.scrollTo(0, $selectedElement.offset().top - 50);
            $('.classContent').scrollTop($selectedElement.offset().top - 50);
        });

    });

    /**
     * Changes the current page url when clicked (give the possibility to the user to
     * copy-paste links directly to a method or attribute of a class, for example).
     * Just like in Github ;-)
     * @param title
     */
    var handlePermalink = function (title) {
        // show the anchors only when you pass the mouse over the name of the linked method/attribute
        $(title).on('mouseover', function (evt) {
            if ($(title).children("a:first").hasClass('permalink')) {
                $(title).children("a:first").removeClass('invisible');
            }
        }).on('mouseout', function (evt) {
            if ($(title).children("a:first").hasClass('permalink')) {
                $(title).children("a:first").addClass('invisible');
            }
        });

        $(title).children("a:first").on('click', function (evt) {
            evt.preventDefault();
            $('.highlighted').removeClass('highlighted');
            $(title).addClass('highlighted');

            var id = $(title).attr('id');
            var currentPage = window.location.toString().split('#', [0]);
            window.history.pushState({id: id}, '', currentPage + '#' + id);
        });
    };
})();

