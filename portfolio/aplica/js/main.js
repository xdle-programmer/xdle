// Global parameters
window.params = {
    widthFull: 750,
    maxRowHeight: 0,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

/*
#############################
#	 Main JS for Aplica     #
#############################
*/

jQuery(document).ready(function ($) {
    /*Contacts page map*/
    var map;

    function googleMap_initialize() {
        var lat = $('#map').data('lat');
        var long = $('#map').data('long');
        var mapCenterCoord = new google.maps.LatLng(lat, long);
        var mapMarkerCoord = new google.maps.LatLng(lat, long);

        var mapOptions = {
            center: mapCenterCoord,
            zoom: 15,
            //draggable: false,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var markerImage = new google.maps.MarkerImage('images/location.svg');
        var marker = new google.maps.Marker({
            icon: markerImage,
            position: mapMarkerCoord,
            map: map,
            title: "Aplica"
        });

        $(window).resize(function () {
            map.setCenter(mapCenterCoord);
        });
    }

    if ($('#map').length > 0) {
        googleMap_initialize();
    }


    /*Contacts page form*/
    $(function () {
        if ($('input[type=file]').val()) {
            $('input[type=file]').siblings('span.fileName').html($('input[type=file]').val());
        }

        $('input[type=file]').on('change', function (event) {
            var val = $(this).val();
            $(this).siblings('span.fileName').html(val);
        });
    });

    function validate($form) {
        var result = true;
        inputs = $form.find('input, textarea');
        for (var i = 0; i < inputs.length; i++) {
            $(inputs[i]).parent().removeClass('error ok');
            if (!$(inputs[i]).val()) {
                $(inputs[i]).parent().addClass('error');
                result = false;
            } else {
                $(inputs[i]).parent().addClass('ok');
            }
        }
        return result;
    }

    $('.contact-form').find('input, textarea').each(function (index, el) {
        $(el).parent().removeClass('error ok');
        if ($(el).val()) {
            $(this).parent().addClass('ok');
        }

        $(el).on('change', function (event) {
            if ($(this).val()) {
                event.preventDefault();
                $(this).parent().addClass('ok');
            } else {
                $(this).parent().addClass('error').removeClass('ok');
            }

        });
    });

    $('.contact-form').on('submit', function (event) {
        event.preventDefault();
        if (validate($(this))) {

            /* here form submiting code */
            var data = $(this).serialize();
            alert(data);


            $(this)[0].reset();
            $(this).find('.field').removeClass('error ok');
            $('input[type=file]').siblings('span.fileName').html('Прикрепить документ');
        }
    });


    $('.menu-button').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().parent('header').toggleClass('active');
        if ($('header').hasClass('active')) {
            $('body, html').css('overflow', 'hidden');
        } else {
            $('body, html').css('overflow', 'visible');
        }
    });


    $(function () { // add class on scroll
        var $document = $(document),
            $element = $('.menu-button'),
            $element2 = $('header, body'),
            className = 'hasScrolled';

        $document.scroll(function () {
            $element.toggleClass(className, $document.scrollTop() >= 20);
            $element2.toggleClass(className, $document.scrollTop() >= 1);
        });
    });


    $('.magnific').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',
        modal: false,

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.offerSlider').slick({
        dots: true,
        fade: true,
        speed: 600
    });

    $('.runSlider').click(function (event) {
        event.preventDefault();
        $('.offerSlider').slick('slickNext').slick('slickPlay');
    });

    $('.offerSlider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var slideIn = $(slick.$slides.get(currentSlide)).attr('data-slick-index');
        if (slideIn == 0) {
            $('.offerSlider').slick('slickPause');
        }
    });


    $('.steps').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.filterButtons').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        // centerMode: true,
        dots: true,
        infinite: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    });


    //
    // /*Slider on APPS PAGE*/
    // urlHash = function()
    // {
    // 	return window.location.hash.replace('#','');
    // };
    // setSlide = function (slider, index) {
    // 	slider.slick('slickGoTo', index);
    // };
    // // On before slide change
    // var slide, slideIndex;
    // $('.apps_slider').on('init', function(event, slick){
    // 	if (urlHash()) {
    // 		slide = $(this).find('.slide[data-app='+urlHash()+']');
    // 		slideIndex = slide.data('slick-index');
    // 	} else {
    // 		slide = $(this).find('.slide[data-slick-index=0]');
    // 		slideIndex = 0;
    // 	}
    // });
    //
    // $('.apps_slider').slick({
    // 	dots: false,
    // 	arrows: true,
    // 	infinite: false
    // });
    // $('.apps_slider-mini').slick({
    // 	dots: false,
    // 	arrows: true,
    // 	infinite: false,
    // 	fade: true
    // });
    // setSlide($('.apps_slider'), slideIndex);
    // setSlide($('.apps_slider-mini'), slideIndex);
    //
    // $('.apps_slider-mini').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // 	setSlide($('.apps_slider'), nextSlide);
    // });
    //
    // $('.apps_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // 	setSlide($('.apps_slider-mini'), nextSlide);
    // });
    //
    // $('.apps_slider').on('afterChange', function(event, slick, currentSlide){
    // 	var slide = $(this).find('.slide[data-slick-index='+currentSlide+']');
    // 	var appText = $('.app_text[data-app-group='+slide.data('app')+']');
    // 	$('.app_text').css('display', 'none');
    // 	appText.css('display', 'block');
    // 	setSlide($('.apps_slider-mini'), currentSlide);
    // });

    // $('.app_text_slider_content').owlCarousel({
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     navText: ['', ''],
    //     items: 1
    // });

    //
    //
    if ($('div').is('.app_text_slider_content')) {
        $('.app_text_slider_content').owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            navText: ['', ''],
            items: 1
        });
    }


    if (window.matchMedia('(max-width: 801px)').matches) {
        $('.ourOffers_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true
        });
    }


});

var filtering = (function ($) {
    'use strict';

    var $grid = $('.shuffle_container'),
        $filterOptions = $('.filterButton__button'),

        init = function () {


            // None of these need to be executed synchronously
            setTimeout(function () {
                setupFilters();
            }, 100);

            // instantiate the plugin
            $grid.shuffle({
                itemSelector: '.work'
            });
        },

        // Set up button clicks
        setupFilters = function () {
            var filtered_lenght = $('.work.filtered').length;
            for (var i = filtered_lenght; i > 0; i--) {
                if (i & 1) {
                    $('.work.filtered').eq(i - 1).addClass('work--gray');
                }
            }



            var $btns = $filterOptions;
            $btns.on('click', function () {
                $('.work').removeClass('work--gray');
                var $this = $(this),
                    isActive = $this.hasClass('active'),
                    group = isActive ? 'all' : $this.data('group');


                // Hide current label, show current label in title
                if (!isActive) {
                    $('.filterButton__button.active').removeClass('active');
                }

                $this.toggleClass('active');
                $('html, body').stop().animate({scrollTop: $('.shuffle_container').offset().top}, '500', 'swing');

                // Filter elements

                $grid.shuffle('shuffle', group);
                setTimeout(function () {


                    filtered_lenght = $('.work.filtered').length;
                    for (var i = filtered_lenght; i > 0; i--) {
                        if (i & 1) {
                            $('.work.filtered').eq(i - 1).addClass('work--gray');
                        }
                    }


                }, 100);


            });

            $btns = null;
        };

    return {
        init: init
    };
}(jQuery));
$(document).ready(function () {
    filtering.init();
});


