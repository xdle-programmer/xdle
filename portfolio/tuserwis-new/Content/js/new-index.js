$(document).ready(function () {
    let mouse_x;

    $(window).on('mousemove', function (e) {
        mouse_x = parseInt(e.pageX);
    });

    if ($('.car-animation').length > 0) {
        animationCar();
    }

    function animationCar() {
        let $build_1 = $('.car-animation__build--1');
        let $build_2 = $('.car-animation__build--2');
        let $build_3 = $('.car-animation__build--3');
        let $build_4 = $('.car-animation__build--4');
        let $build_5 = $('.car-animation__build--5');
        let $car = $('.car-animation__car');
        let $man = $('.car-animation__man');
        let element_count = $('.shift-element').length;
        let check_load_timer = setInterval(function () {
            if (element_count === loaded_state.length) {

                if (viewport_width > 1024) {
                    calcShift();
                }
                $('.car-animation__block').addClass('active');
                $('.mouse-animation').addClass('active');
                clearInterval(check_load_timer);
            }
        }, 50);

        let shift = 0;
        let shift_min = -200;
        let shift_max = 200;

        let last_mouse = 0;
        let first_shift = false;



        function calcShift() {
            if (mouse_x) {
                if (!first_shift) {
                    first_shift = true;
                    last_mouse = mouse_x;
                } else {
                    if (mouse_x < last_mouse) {
                        shift -= last_mouse - mouse_x;

                        if (shift < shift_min) {
                            shift = shift_min;
                        }
                        last_mouse = mouse_x;
                    } else if (mouse_x > last_mouse) {
                        shift += mouse_x - last_mouse;
                        if (shift > shift_max) {
                            shift = shift_max;
                        }
                        last_mouse = mouse_x;
                    }


                    $build_1.css('transform', 'translateX(' + shift / 10 + 'px)');
                    $build_2.css('transform', 'translateX(' + shift / 11 + 'px)');
                    $build_3.css('transform', 'translateX(' + shift / 12 + 'px)');
                    $build_4.css('transform', 'translateX(' + shift / 11 + 'px)');
                    $build_5.css('transform', 'translateX(' + shift / 10 + 'px)');
                    $car.css('transform', 'translateX(' + shift / 14 + 'px)');
                    $man.css('transform', 'translateX(' + shift / 20 + 'px)');

                }
            }

            // setTimeout(function () {
            requestAnimationFrame(calcShift);
            // },50)

        }


    }

    if ($('.new-process__items').length > 0) {
        startProcessAnimation();
    }

    function startProcessAnimation() {
        let limit = $('.new-process__items').offset().top - viewport_height + 200;

        if (scroll_top >= limit) {
            $('.new-process').addClass('active');
            $('.mouse-animation').addClass('stop');
        }

        $(window).on('scroll', function () {
            if (scroll_top >= limit) {
                $('.new-process').addClass('active');
                $('.mouse-animation').addClass('stop');
            }
        });
    }

    if ($('.new-main-counter__item-number-inner').length > 0) {
        countup('new-main-counter__item-number-inner');
    }

    function countup(className) {
        var countBlockTop = $("." + className).offset().top;
        var windowHeight = window.innerHeight;
        var show = true;

        $(window).scroll(function () {
            if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
                show = false;

                $('.' + className).spincrement({
                    from: 1,
                    duration: 3000,
                });
            }
        });
    }

    if ($('.new-main-review__items-slider').length > 0) {
        $('.new-main-review__items-slider').owlCarousel({
            loop: true,
            responsive: {
                0: {
                    nav: true,
                    dots: false,
                    margin: 20,
                    items: 1
                },
                1024: {
                    nav: true,
                    dots: false,
                    margin: 10,
                    items: 3
                }
            }
        });
    }

    if ($('.new-main-ticket__items').length > 0 && viewport_width < 768) {
        $('.new-main-ticket__items').addClass('owl-carousel');

        setTimeout(function () {
            $('.new-main-ticket__items').owlCarousel({
                loop: true,
                responsive: {
                    0: {
                        nav: true,
                        dots: false,
                        margin: 20,
                        items: 1
                    },
                    1024: {
                        nav: true,
                        dots: false,
                        margin: 10,
                        items: 3
                    }
                }
            });
        },300)
    }

});
