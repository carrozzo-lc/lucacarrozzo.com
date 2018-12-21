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


    // Skills circles
    //---------------------------------------------

    // Skill 01
    var skill_01 = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;

                var bar = new ProgressBar.Circle('.skill01', {
                    // This has to be the same size as the maximum width to
                    // prevent clipping
                    strokeWidth: 2,
                    //trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    text: {
                        autoStyleContainer: false,
                        className: 'skill__label',
                    },
                    from: {
                        color: '#18EFCD',
                        width: 2
                    },
                    to: {
                        color: '#18EFCD',
                        width: 2
                    },
                    // Set default step function for all animate calls
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);

                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                            circle.setText('');
                        } else {
                            circle.setText(value + '%');
                        }
                    }
                });

                bar.animate(0.99);  // Number from 0.0 to 1.0

            }
        };
    })();

    // Skill 02
    var skill_02 = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;

                var bar = new ProgressBar.Circle('.skill02', {
                    // This has to be the same size as the maximum width to
                    // prevent clipping
                    strokeWidth: 2,
                    //trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    text: {
                        autoStyleContainer: false,
                        className: 'skill__label',
                    },
                    from: {
                        color: '#18EFCD',
                        width: 2
                    },
                    to: {
                        color: '#18EFCD',
                        width: 2
                    },
                    // Set default step function for all animate calls
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);

                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                            circle.setText('');
                        } else {
                            circle.setText(value + '%');
                        }
                    }
                });

                bar.animate(0.99);  // Number from 0.0 to 1.0

            }
        };
    })();

    // Skill 03
    var skill_03 = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;

                var bar = new ProgressBar.Circle('.skill03', {
                    // This has to be the same size as the maximum width to
                    // prevent clipping
                    strokeWidth: 2,
                    //trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    text: {
                        autoStyleContainer: false,
                        className: 'skill__label',
                    },
                    from: {
                        color: '#18EFCD',
                        width: 2
                    },
                    to: {
                        color: '#18EFCD',
                        width: 2
                    },
                    // Set default step function for all animate calls
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);

                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                            circle.setText('');
                        } else {
                            circle.setText(value + '%');
                        }
                    }
                });

                bar.animate(0.80);  // Number from 0.0 to 1.0

            }
        };
    })();

    // Skill 04
    var skill_04 = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;

                var bar = new ProgressBar.Circle('.skill04', {
                    // This has to be the same size as the maximum width to
                    // prevent clipping
                    strokeWidth: 2,
                    //trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    text: {
                        autoStyleContainer: false,
                        className: 'skill__label',
                    },
                    from: {
                        color: '#18EFCD',
                        width: 2
                    },
                    to: {
                        color: '#18EFCD',
                        width: 2
                    },
                    // Set default step function for all animate calls
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);

                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                            circle.setText('');
                        } else {
                            circle.setText(value + '%');
                        }
                    }
                });

                bar.animate(0.90);  // Number from 0.0 to 1.0

            }
        };
    })();

    // Skill 05
    var skill_05 = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;

                var bar = new ProgressBar.Circle('.skill05', {
                    // This has to be the same size as the maximum width to
                    // prevent clipping
                    strokeWidth: 2,
                    //trailWidth: 1,
                    easing: 'easeInOut',
                    duration: 1400,
                    text: {
                        autoStyleContainer: false,
                        className: 'skill__label',
                    },
                    from: {
                        color: '#18EFCD',
                        width: 2
                    },
                    to: {
                        color: '#18EFCD',
                        width: 2
                    },
                    // Set default step function for all animate calls
                    step: function(state, circle) {
                        circle.path.setAttribute('stroke', state.color);
                        circle.path.setAttribute('stroke-width', state.width);

                        var value = Math.round(circle.value() * 100);
                        if (value === 0) {
                            circle.setText('');
                        } else {
                            circle.setText(value + '%');
                        }
                    }
                });

                bar.animate(0.80);  // Number from 0.0 to 1.0

            }
        };
    })();


    // Run scripts when are visible on screen
    //---------------------------------------------
    function isScrolledIntoView(elem){
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    $(window).scroll(function(){
        if(isScrolledIntoView($('.skill01, skill02, skill03, skill04, skill05'))){
            skill_01();
            skill_02();
            skill_03();
            skill_04();
            skill_05();
        }
        else{}
    });


    //
    //---------------------------------------------
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      //direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    //
    //---------------------------------------------


}); // End document.ready
