/*global $*/
/*global console */
$(document).ready(function () {
    "use strict";

//Button Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("#scroll-top").show();
        } else {
            $("#scroll-top").hide();
        }
    });
    $("#scroll-top").click(function () {
        $('html,body').animate({scrollTop : 0}, 1000);
    });
    
//Scroll To Section
    $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
});