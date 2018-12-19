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

    // Resize display scritps mixed with media querie script
    //---------------------------------------------
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


    // Social share button animation
    //---------------------------------------------
    $(document).on('click', '#socialShare > .socialBox', function() {

      var self = $(this);
      var element = $('#socialGallery a');
      var c = 0;

      if (self.hasClass('animate')) {
        return;
      }

      if (!self.hasClass('open')) {

        self.addClass('open');
        self.children().addClass('btn--open'); //luca

        TweenMax.staggerTo(element, 0.3, {
            opacity: 1,
            visibility: 'visible'
          },
          0.075);
        TweenMax.staggerTo(element, 0.3, {
            top: -12,
            ease: Cubic.easeOut
          },
          0.075);

        TweenMax.staggerTo(element, 0.2, {
            top: 0,
            delay: 0.1,
            ease: Cubic.easeOut,
            onComplete: function() {
              c++;
              if (c >= element.length) {
                self.removeClass('animate');
              }
            }
          },
          0.075);

        self.addClass('animate');

      } else {

        TweenMax.staggerTo(element, 0.3, {
            opacity: 0,
            onComplete: function() {
              c++;
              if (c >= element.length) {
                self.removeClass('open animate');
                self.children().removeClass('btn--open');//luca
                element.css('visibility', 'hidden');
              };
            }
          },
          0.075);
      }
    });

    // Read more Read less script
    //---------------------------------------------
    $(".btn-read").click(function() {
        var elem = $(".btn-read").text();

        if (elem == "Continue reading") {
            //Stuff to do when btn is in the read more state
            $(".btn-read").text("Read Less");
            $(".about__rev-txt").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $(".btn-read").text("Continue reading");
            $(".about__rev-txt").slideUp();
        }
    });


    //
    //---------------------------------------------

    //
    //---------------------------------------------


}); // End document.ready
