$(document).ready(function () {
    var $body = $('html, body');
    var viewport_height = $(window).height();
    var scroll_top = $(window).scrollTop();
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
        contents();
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

    if ($('div').is('.slider__wrapper')) {
        $('.slider__wrapper').each(function () {
            var slide_count = $(this).data('slide-count');
            $(this).owlCarousel({
                loop: false,
                items: slide_count,
                margin: 25,
                nav: true,
                navText: ['<div class="slider__nav-button"><div class="slider__nav-button-shadow"></div><div class="slider__nav-button-arrow"></div></div>', '<div class="slider__nav-button"><div class="slider__nav-button-shadow"></div><div class="slider__nav-button-arrow"></div></div>'],
                dots: false,
                responsive: {0: {items: 1, margin: 0}, 1024: {items: slide_count}}
            });
        });
    }
    $('.header__menu-button-inner--menu').on('click', function () {
        console.log(1);
        var $menu = $('.header__menu-inner');
        var $button = $('.header__menu-button-inner--menu');
        var open = false;
        $menu.addClass('active');
        $button.addClass('active');
        $('.header__search-form').removeClass('active');
        $('.header__search-button').removeClass('active');
        $(document).on('click.closeout', function (e) {
            if ($(e.target).closest('.header__menu-inner').length === 1 || $(e.target).hasClass('header__menu-inner') === true) {
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
    $('.header__search-button, .header__search-icon').on('click', function () {
        var $menu = $('.header__search-block');
        var open = false;
        $menu.addClass('active');
        setTimeout(function () {
            $('.header__search-form-input').focus()
        }, 500);

        $(document).on('click.closeout', function (e) {
            if ($(e.target).hasClass('header__search-form-input') === false) {
                if (open === true) {
                    $menu.removeClass('active');
                    open = false;
                    $(document).off('click.closeout');
                } else {
                    open = true;
                }
            }
        });
    });
    $('.header__menu-mobile-button').on('click', function () {
        var $menu = $('.header__menu');
        var $button = $('.header__menu-mobile-button');
        var open = false;
        $menu.addClass('active');
        $button.addClass('active');
        $(document).on('click.closeout', function (e) {
            if ($(e.target).closest('.header__menu').length === 1 || $(e.target).hasClass('header__menu') === true) {
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

    function contents() {
        if ($('div').is('.contents')) {
            var $list = $('.contents__list');
            var $title = $('.contents__title');
            var height = $list.height();
            $list.css('height', height + 'px');
            $('.contents__title').on('click', function () {
                if ($list.hasClass('hide') === false) {
                    $list.addClass('hide');
                    $title.addClass('hide');
                    $list.css('height', 0);
                } else {
                    $list.removeClass('hide');
                    $title.removeClass('hide');
                    $list.css('height', height + 'px');
                }
            });
        }
    }

    contents();

    $('.open-modal').on('click', function () {
        $('.modal__background').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
        $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    $('.modal__close, .modal__background').on('click', function () {
        $('.modal__background').removeClass('active');
        $('.modal__block').removeClass('active');
        $('.modal__block').css('top', 'auto');
        $('.modal__content--youtube iframe').attr('src', '');
    });


});