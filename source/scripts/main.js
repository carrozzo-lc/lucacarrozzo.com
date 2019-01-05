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

        if (elem == "Read more") {
            //Stuff to do when btn is in the read more state
            $(".btn-read").text("Read Less");
            $(".about__rev-txt").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $(".btn-read").text("Read more");
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


    // Slider parameters
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

    // Truncate text with clamp.js
    //---------------------------------------------
    $(window).resize(function(){
        if ($(window).width() <= 767) {
            // var module = document.getElementById("clampjs");
            // $clamp(module, {clamp: 3});
            $('.clampjs').each(function(index, element) {
                $clamp(element, { clamp: 3 });
            });
        }
    });

    //
    //---------------------------------------------
    var header = $(".site-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('header-up').addClass("header-down");
        } else {
            header.removeClass("header-down").addClass('header-up');
        }
    });


    // script per scroll to element
    //-s--------------------------------------------
    $(".scroll-down").click(function(e) {
		// Prevent a page reload when a link is pressed
		e.preventDefault();
		// Call the scroll function
		$('html,body').animate({
			scrollTop: $("#about").offset().top - 120
		},'slow');
	});


    // site preloader
    //---------------------------------------------
    window.onload=new function() {
        $('#preloader').fadeOut('slow',function(){
            $(this).remove();
        });
    };


    // Scroll to Top
    //---------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    // Ie detector
    //---------------------------------------------
    function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

        // other browser
        return false;
    }
    //alert('IE ' + detectIE());

    if( detectIE() && detectIE() === 9 ) {
        $("html").addClass("ie9");
    }
    if( detectIE() && detectIE() === 10 ) {
        $("html").addClass("ie10");
    }
    if( detectIE() && detectIE() > 10 ) {
        $("html").addClass("ie");
    }

}); // End document.ready
