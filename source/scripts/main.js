/*
* ---------------------------------------------------------
* Scripts
* ---------------------------------------------------------
*/


$(document).ready(function(){

    // js media querie
    //---------------------------------------------
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();
    var pause = 100;

    $(window).resize(function() {
        delay(function() {
            var width = $(window).width();

            if( width >= 1400 ) {

                // resize windows
                $(window).resize(function() {
                    $('.masthead').height($(window).height() - 90 );
                });
                $(window).trigger('resize');

            } else if( width >= 767 && width <= 1400 ) {

                // resize windows
                $(window).resize(function() {
                    $('.masthead').height($(window).height() - 50 );
                });
                $(window).trigger('resize');

            } else if( width >= 576 && width <= 767 ) {

                // resize windows
                $(window).resize(function() {
                    $('.masthead').height($(window).height() - 20 );
                });
                $(window).trigger('resize');

            } else if( width <= 575 ) {

                // code for mobile portrait

            }
        }, pause );
    });
    $(window).resize();

}); // End document.ready
