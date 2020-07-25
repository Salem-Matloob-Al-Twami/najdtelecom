jQuery(document).ready(function() {
    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $("#overlay").toggleClass("open");
        return false;
    });

    // Smoothscroll ///
    var scroll = new SmoothScroll(".navbar li.nav-item a");

    // loader
    setTimeout(function() {
        $(".loader").fadeOut();
    }, 1000);

    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {},
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();

    // scroll-Top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });

    $(".scrolltotop").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $(".kHeading")
        .resize(function() {
            var kHeading = $(this).height();
            $(".kHeading").height(kHeading);
        })
        .resize();
    $(".kBody")
        .resize(function() {
            var kBody = $(this).height();
            $(".kBody").height(kBody);
        })
        .resize();
});