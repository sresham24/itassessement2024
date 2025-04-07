
$(document).ready(function () {

    // Sticky header
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".site-header").addClass("sticky");
        } else {
            $(".site-header").removeClass("sticky");
        }
    });
    
    //banner slider
    $(".bannerSlider").slick({
        dots: false
        , autoplay: true
        , infinite: true
        , dots: false
        , slidesToShow: 1
        , slideswToScroll: 1
        , arrows: false
    });
});