$(document).ready(function () {

    var viewport_height = $(window).height();
    var scroll_top = $(window).scrollTop();

    if ($(window).height() > $(window).width()) {
        $('body').addClass('vertical');
    }

    header_scroll();

    function header_scroll() {
        if ($(window).scrollTop() > 0 && $(window).width() > 1023) {
            if ($('.header').hasClass('header--small') === false) {
                $('.header').addClass('header--small');
            }
        } else {
            $('.header').removeClass('header--small');
        }
    }

    function range_slider(val_min, val_max, val_start_1, val_start_2) {
        var val_current_1 = val_start_1;
        var val_current_2 = val_start_2;
        var $slider_item = $('.range-slider__item');
        var $input_min = $('.range-slider__input--min');
        var $input_max = $('.range-slider__input--max');
        var $value_min = $('.range-slider__value--min .range-slider__value-item');
        var $value_max = $('.range-slider__value--max .range-slider__value-item');

        $input_min.val(val_current_1);
        $input_max.val(val_current_2);
        $value_min.text(val_min);
        $value_max.text(val_max);

        $slider_item.slider({
            min: val_min,
            max: val_max,
            slide: function (event, ui) {
                val_current_1 = ui.values[0];
                val_current_2 = ui.values[1];
                $input_min.val(val_current_1);
                $input_max.val(val_current_2);
            },
            values: [val_current_1, val_current_2],
            range: true,
            classes: {
                "ui-slider": "ui-corner-all range-slider__item-line",
                "ui-slider-handle": "ui-corner-all range-slider__item-handle",
                "ui-slider-range": "ui-corner-all ui-widget-header range-slider__item-progress"
            }
        });

        $input_min.change(function () {
            val_current_1 = $input_min.val();
            $slider_item.slider("values", [val_current_1, val_current_2]);
        });

        $input_max.change(function () {
            val_current_2 = $input_max.val();
            $slider_item.slider("values", [val_current_1, val_current_2]);
        });

    }

    range_slider(230, 20300, 319, 18829);

    $(window).scroll(function () {
        header_scroll();
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
    });

    $('.goods__item-photo-preview-item').on('click', function () {
        var img = $(this).data('src');
        var $preview = $(this).closest('.goods__item').find('.goods__item-photo-preview-block');
        $preview.addClass('active');
        $preview.css('background', 'url(' + img + ')');
    });

    $('.header__mobile-button-menu').on('click', function () {
        $('.header').addClass('open-menu');
        $('.header__menu-close').addClass('active');
        $('.header__menu').addClass('active');
        $('.header__menu').css('top', (viewport_height / 2) + 'px');
        console.log(scroll_top);
        console.log(viewport_height / 2);
        $('.header__mobile-background').addClass('active');
    });

    $('.header__mobile-background, .header__menu-close').on('click', function () {
        $('.header').removeClass('open-menu');
        $('.header__menu').removeClass('active');
        $('.header__menu-close').removeClass('active');
        $('.header__menu').css('top', 'auto');
        $('.header__mobile-background').removeClass('active');
    });

    $('.left-menu__button').on('click', function () {
        $('.left-menu__background').addClass('active');
        $('.left-menu__block').addClass('active');
        $('.left-menu__close').addClass('active');
        $('.left-menu__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    $('.left-menu__background, .left-menu__close').on('click', function () {
        $('.left-menu__background').removeClass('active');
        $('.left-menu__block').removeClass('active');
        $('.left-menu__block').css('top', 'auto');
        $('.left-menu__close').removeClass('active');
    });

    $('.filter--collapse .filter__title').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.filter--collapse .filter__item').on('click', function () {
        $(this).toggleClass('active');
    });

    $(".goods__header-select").selectmenu({
        classes: {
            "ui-selectmenu-button-open": "goods__header-select-button",
            "ui-selectmenu-button-closed": "goods__header-select-button",
            "ui-selectmenu-icon": "goods__header-select-icon",
            "ui-selectmenu-menu": "goods__header-select-items"
        }
    });

    $('.goods__header-view-grid').on('click', function () {
        if ($('.goods').hasClass('goods--list') === true) {
            $('.goods').removeClass('goods--list');
        }
    });

    $('.goods__header-view-list').on('click', function () {

        if ($('.goods').hasClass('goods--list') === false) {
            $('.goods').addClass('goods--list');
        }
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

    $('.goods__slider').owlCarousel({
        loop: false,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                nav: false,
                dots: true
            },
            768: {
                items: 3,
                margin: 10,
                nav: true,
                dots: false
            },
            1024: {
                items: 4,
                margin: 10,
                nav: true,
                dots: false

            },
            1280: {
                items: 5,
                margin: 20,
                nav: true,
                dots: false
            }
        }
    });

    $('.promo--slider').owlCarousel({
        loop: false,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                nav: false,
                dots: true
            },
            768: {
                items: 3,
                margin: 10,
                nav: true,
                dots: false
            },
            1024: {
                items: 4,
                margin: 10,
                nav: true,
                dots: false

            },
            1280: {
                items: 5,
                margin: 20,
                nav: true,
                dots: false
            }
        }
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


    // Скрипты для главной

    $('.sale-slider__block').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: false
    });

    if ($('div').is('.select-slider__slider-wrapper')) {

        var count = $('.select-slider__slider-wrapper').length;
        var owl_select_slider = [];
        var i = count - 1;
        for (i; i > -1; i--) {

            owl_select_slider[i] = $('.select-slider').eq(i).find('.select-slider__slider-wrapper').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: true,
                dots: true
            });

            owl_select_slider[i].owlCarousel();
        }

        $('.select-slider__select-item').click(function () {
            var $slider = $(this).closest('.select-slider');
            var goal_slider = $slider.index('.select-slider');
            var small_items = $slider.find('.select-slider__select-item');
            var goal = (small_items).index(this);
            owl_select_slider[goal_slider].trigger('to.owl.carousel', [goal, 300]);
        });

    }
});
