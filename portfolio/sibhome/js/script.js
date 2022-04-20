$(document).ready(function () {

    var $body = $('html, body');
    var viewport_height = $(window).height();
    var scroll_top = $(window).scrollTop();
    var scroll_down;
    var scroll_counter = 0;

    $(window).scroll(function () {

        if ($(window).scrollTop() > scroll_top) {
            if ($('.wrapper').hasClass('scroll-down') === false && $(window).scrollTop() > 199) {
                $('.wrapper').addClass('scroll-down');
                $('.wrapper').removeClass('scroll-up');
            }
        } else {


            if ($('.wrapper').hasClass('scroll-up') === false && scroll_counter > 25) {
                $('.wrapper').addClass('scroll-up');
                $('.wrapper').removeClass('scroll-down');
                scroll_counter = 0;
            } else {
                scroll_counter = scroll_counter + 1;
            }
        }


        scroll_top = $(window).scrollTop();
        header_scroll();

        if ($('.modal__background').hasClass('active') === false) {
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }


    });

    $(window).resize(function () {
        viewport_height = $(window).height();
    });

    function header_scroll() {
        $('.header').css('max-height', viewport_height + 'px');
        if (scroll_top > 99) {
            if ($('.header').hasClass('header--small') === false) {
                $('.header').addClass('header--small');
            }
        } else if (scroll_top < 1) {
            $('.header').removeClass('header--small');
        }
    }

    if ($('div').is('.slider__items')) {

        var count = $('.slider__items').length;
        var owl_select_slider = [];
        var i = count - 1;
        for (i; i > -1; i--) {

            owl_select_slider[i] = $('.slider').eq(i).find('.slider__items').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                items: 1
            });

            owl_select_slider[i].owlCarousel();
        }

        $('.slider__preview-item').click(function () {
            var $slider = $(this).closest('.slider');
            var goal_slider = $slider.index('.slider');
            var small_items = $slider.find('.slider__preview-item');
            var goal = (small_items).index(this);
            owl_select_slider[goal_slider].trigger('to.owl.carousel', [goal, 300]);
        });

    }

    if ($('div').is('.experts-list__item-slider')) {
        $('.experts-list__item-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1
        });
    }

    if ($('div').is('.magazine__slider-wrapper')) {
        $('.magazine__slider-wrapper').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1
        });
    }

    var eventData = [
        {
            "date": "2018-09-26",
            "badge": true,
            "classname": "purple-event"
        },

        {
            "date": "2018-09-06",
            "badge": true,
            "classname": "purple-event"
        },

        {
            "date": "2018-09-27",
            "badge": true,
            "classname": "purple-event"
        }
    ];

    function calendar_create() {

        $("#calendar").zabuto_calendar({
            language: "ru",
            data: eventData,
            action: function () {
                custom_event(this.id);
            }
        });

    }

    calendar_create();

    function custom_event(id) {
        var date = $("#" + id).data("date");
        var hasEvent = $("#" + id).data("hasEvent");
        console.log(date);
        console.log(hasEvent);
    }

    $('.header__submenu-item.hassubmenu').on('click', function () {
        var $menu = $(this);
        var condition = false;
        $menu.addClass('active');

        $(document).on('click.closeout', function (e) {
            if (e.target !== $menu[0]) {
                if (condition === true) {
                    $menu.removeClass('active');
                    condition = false;
                    $(document).off('click.closeout');
                } else {
                    condition = true;
                }
            }
        });
    });

    $('.header__mobile-button').on('click', function () {
        var $header = $('.header');
        var $button = $('.header__mobile-button');
        var open = false;
        $header.addClass('active');

        $(document).on('click.closeout', function (e) {

            if (e.target === $button[0] || $(e.target).closest('header').length !== 1) {
                if (open === true) {
                    $header.removeClass('active');
                    open = false;
                    $(document).off('click.closeout');
                } else {
                    open = true;
                }
            }
        });


    });

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

});
