var viewport_height;
var scroll_top;

$(document).ready(function () {

    var $body = $('html, body');
    viewport_height = $(window).height();
    scroll_top = $(window).scrollTop();
    var scroll_down;

    $(window).scroll(function () {

        scroll_top = $(window).scrollTop();
        header_scroll();

        if ($('.modal__background').hasClass('active') === false) {
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }

    });

    $(window).resize(function () {
        viewport_height = $(window).height();

        if ($('div').is('.slider__inner')) {
            slider_height();
        }
    });

    function header_scroll() {
        if (scroll_top > 0) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--scroll');
            }
        } else {
            $('.header').removeClass('header--scroll');
        }
    }

    if ($('div').is('.slider__inner')) {

        $('.slider__inner').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            nav: true,
            navText: ['<div class="slider__nav-button"><i class="i-arrow_right"></i></div>', '<div class="slider__nav-button"><i class="i-arrow_right"></i></div>'],
            dots: false
        });

        slider_height();
    }

    function slider_height() {
        var $slides = $('.owl-item');
        var min = $('.owl-item').eq(0).height();
        var max = min;
        var i;

        for (i = 0; i < $slides.length; ++i) {
            $slides.eq(i).find('.banner__wrapper').css('height', 'auto');
            $slides.eq(i).find('.banner__item-img').css({'height': 'auto', 'width': 'auto'});
        }

        for (i = 0; i < $slides.length; ++i) {
            if ($slides.eq(i).height() > max) {
                max = $slides.eq(i).height();
            }
        }

        for (i = 0; i < $slides.length; ++i) {
            $slides.eq(i).find('.banner__wrapper').css('height', max + 'px');
            $slides.eq(i).find('.banner__item-img').css({'height': max + 'px', 'width': 'auto'});
        }
    }


    $('.header__bottom-search-button').on('click', function () {
        var $menu = $('.header__search-form');
        var $button = $('.header__bottom-search-button');
        var open = false;
        $menu.addClass('active');
        $button.addClass('active');
        $('.header__menu-inner').removeClass('active');
        $('.header__menu-button-inner--menu').removeClass('active');

        $(document).on('click.closeout', function (e) {
            if ($(e.target).closest('.header__search-form').length === 1 || $(e.target).hasClass('header__search-form') === true) {

            } else {
                if (open === true) {
                    $menu.removeClass('active');
                    $button.removeClass('active');
                    open = false;
                    $(document).off('click.closeout');
                } else {
                    open = true;
                }
            }
        });
    });

    $('.header__mobile-button').on('click', function () {
        var $menu = $('.header');
        $menu.toggleClass('active');
    });

    if ($('input').is('input[type=tel]')) {
        $('input[type=tel]').inputmask('+7 (999) 999-99-99');
    }

    $(".faq-form__download-input").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").val(filename);
    });


    $('.faq-answer__footer-button').on('click', function () {
        $(this).closest('.faq-answer').find('.faq-answer__inner').toggle();
    });
});
