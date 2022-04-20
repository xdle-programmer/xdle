$(document).ready(function () {

    var viewport_height = $(window).height();

    var scroll_top = $(window).scrollTop();

    if ($(window).height() > $(window).width()) {
        $('body').addClass('vertical');
    }

    header_scroll();

    function header_scroll() {
        if ($(window).scrollTop() > 0 && $(window).width() > 1023) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--scroll');
            }
        } else {
            $('.header').removeClass('header--scroll');
        }
    }

    $(window).scroll(function () {
        header_scroll();
        scroll_top = $(window).scrollTop();
    });

    $('.menu__open').on('click', function () {
        $('.menu').addClass('active');
    });

    $('.menu__close, .menu__background').on('click', function () {
        $('.menu').removeClass('active');
    });

    if ($('div').is('.main-slider__block')) {
        $('.main-slider__block').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: false,
            dots: true,
            items: 1
        });
    }

    if ($('div').is('.main-works__slider')) {
        $('.main-works__slider').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: true,
            dots: true,
            items: 1
        });
    }


    // ----
    // ----
    // ----
    // ----
    // ----
    // ----
    // ----
    // ----
    // ----
    // ----
    // ----


    $('.header__mobile-button').on('click', function () {
        $('.header__block').toggleClass('active');
    });

    $('.header__mobile-background, .header__menu-close').on('click', function () {
        $('.header').removeClass('open-menu');
        $('.header__menu').removeClass('active');
        $('.header__menu-close').removeClass('active');
        $('.header__menu').css('top', 'auto');
        $('.header__mobile-background').removeClass('active');
    });

    if ($('div').is('.product__preview-slider')) {
        $('.product__preview-slider').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: true,
            dots: false,
            items: 1
        });
        var owl_product = $('.product__preview-slider').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: true,
            dots: false,
            items: 1
        });
        owl_product.owlCarousel();

        $('.product__preview-small-item').click(function () {
            var small_items = $('.product__preview-small-item');
            var goal = (small_items).index(this);
            owl_product.trigger('to.owl.carousel', [goal, 300]);
        });
    }

    $('.open-modal').on('click', function () {
        $('.modal__background').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
        $(modal_goal).css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    $('.modal__close, .modal__background').on('click', function () {
        $('.modal__background').removeClass('active');
        $('.modal__block').removeClass('active');
        $('.modal__block').css('top', 'auto');
    });


    $('.faq__item-name').on('click', function () {

        if ($(this).hasClass('active') === true) {
            $('.faq__item-name').removeClass('active');
            $('.faq__item-text').hide(200);
        } else {
            $('.faq__item-name').removeClass('active');
            $('.faq__item-text').hide(200);
            $(this).addClass('active');
            $(this).parent().find('.faq__item-text').show(200);
        }
    });


    $('.partners__items').owlCarousel({
        loop: true,
        mouseDrag: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 50,
        responsive: {
            0: {
                items: 3,
                margin: 0
            },
            768: {
                items: 5
            },
            1366: {
                items: 5
            }
        }
    });


});
