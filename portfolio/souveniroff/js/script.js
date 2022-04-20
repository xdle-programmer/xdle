$(document).ready(function () {

    $('.column-slider').owlCarousel({
        loop: true,
        mouseDrag: false,
        nav: true,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 6
            }
        }
    });

    $('.recommend-slider__block').owlCarousel({
        loop: true,
        mouseDrag: false,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    $('.news--slider .news__block').owlCarousel({
        loop: true,
        mouseDrag: false,
        nav: true,
        dots: false,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 2
            },
            1024: {
                items: 4
            }
        }
    });

    $('.goods__slider').owlCarousel({
        loop: true,
        mouseDrag: false,
        nav: true,
        dots: false,
        margin: 20,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 3
                },
                1366: {
                    items: 4
                }
            }
    });


    $('.product-cart__preview-slider').owlCarousel({
        items: 3,
        nav: true,
        dots:false,
        margin: 20
    });

    $('.product-cart__preview-slide').on('click', function () {
        // var scroll_pos = $(window).scrollTop();
        var img = $(this).find('.product-cart__preview-slide-img').data('src');
        $('.product-cart__preview-big-img').css('background', 'url(' + img + ') no-repeat center center');
        // $(window).scrollTop(scroll_pos);
    });

    $('.header__menu-open').on('click', function () {
        $('.header').toggleClass('active');
        $('body').toggleClass('open-menu');
    });

    $('.header__menu-close, .header__mobile-background').on('click', function () {
        $('.header').removeClass('active');
        $('body').removeClass('open-menu');
    });


    $('.catalog-menu-button').on('click', function () {
        $('.catalog-menu-button').toggleClass('active');
        $('.catalog-menu').toggleClass('active');
    });

    $('.menu-natural__item--has-inner .menu-natural__header').on('click', function () {
        $(this).toggleClass('active');
    });

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

    range_slider(1000, 95000, 1000, 95000);


    $(".filter-row__select").selectmenu({
        classes: {
            "ui-selectmenu-button-open": "filter-row__select-button",
            "ui-selectmenu-button-closed": "filter-row__select-button",
            "ui-selectmenu-icon": "filter-row__select-icon",
            "ui-selectmenu-menu": "filter-row__select-items"
        }
    });


    $('.open-filter').on('click', function () {
        $('.goods-filter').addClass('active');
        $('.wrapper').css({
            'height': $('.goods-filter').height() + 'px',
            'overflow': 'hidden'
        });
    });


    $('.close-filter').on('click', function () {
        $('.goods-filter').removeClass('active');
        $('.wrapper').css({
            'height': '',
            'overflow': ''
        });
    });


    $('.product-cart__tabs-name').on('click', function () {
        if ($(this).hasClass('active') === false) {
            $('.product-cart__tabs-name').removeClass('active');
            $(this).addClass('active');
            var tab_goal = $(this).data('tab-goal');
            $('.product-cart__tabs-item').removeClass('active');
            $(tab_goal).addClass('active');
        }
    });


});
