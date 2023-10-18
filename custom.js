/*--------DDsmoothmenu Initialization--------*/
ddsmoothmenu.init({
    mainmenuid: "menu", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    //customtheme: ["#1c5a80", "#18374a"],
    contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});
// JavaScript Document
jQuery(window).load(function () {
    jQuery('#slides').slides({
        autoHeight: true,
        effect: 'slide',
        container: 'slides_container',
        //play:50000,
        play: jQuery("#txt_slidespeed").val(),
        slideSpeed: 600,
        fadeSpeed: 350,
        generateNextPrev: true,
        generatePagination: false,
        crossfade: true
    });
    jQuery('#slides .pagination').wrap('<div id="slider_pag" />');
    jQuery('#slides #slider_pag').wrap('<div id="slider_nav" />');
});
//Fade images
jQuery(document).ready(function ($) {
    jQuery('.woocommerce .content-container ul.products li').addClass('col-md-4 col-sm-4 col-xs-12');
    $(".featured_content img, .post img, .sidebar .recent_post li img").hover(function () {
        $(this).stop().animate({opacity: "0.5"}, '500');
    },
            function () {
                $(this).stop().animate({opacity: "1"}, '500');
            });
});
//Tipsy
jQuery(function () {
    jQuery('.social_logos a').tipsy({gravity: 's'});
});
//Flexslider
//<![CDATA[
jQuery.noConflict();
jQuery("document").ready(function () {
    jQuery('.flexslider').flexslider({
        animation: "fade", //String: Select your animation type, "fade" or "slide"
        slideDirection: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        slideshow: true, //Boolean: Animate slider automatically
        slideshowSpeed: jQuery("#txt_slidespeed").val(), //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationDuration: 600, //Integer: Set the speed of animations, in milliseconds
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        keyboardNav: true, //Boolean: Allow slider navigating via keyboard left/right keys
        mousewheel: false, //Boolean: Allow slider navigating via mousewheel
        prevText: "Previous", //String: Set the text for the "previous" directionNav item
        nextText: "Next", //String: Set the text for the "next" directionNav item
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
        playText: 'Play', //String: Set the text for the "play" pausePlay item
        randomize: false, //Boolean: Randomize slide order
        slideToStart: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true
    });
});
//Page Loading
jQuery(window).load(function () {
    jQuery("#spinner").fadeOut("slow");
})