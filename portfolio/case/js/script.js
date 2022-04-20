$(document).ready(function () {

        var $body = $('html, body');
        var viewport_height = $(window).height();
        var viewport_width = window.innerWidth;
        var scroll_top = $(window).scrollTop();
        var scroll_down;
        var scroll_counter = 0;
        var mobile_width = 768;

        $(window).resize(function () {
            viewport_height = $(window).height();
            viewport_width = window.innerWidth;

            if ($('div').is('.top-cases__items')) {
                top_cases()
            }

            if ($("div").is(".goods__wrapper.custom-scroll")) {
                goodsScrollHeight()
            }
        });

        if ($('div').is('.roulette')) {
            roulette('roulette');
        }

        if ($('div').is('.top-cases__items')) {
            top_cases()
        }

        function top_cases() {
            var slider = $('.top-cases__items');
            // if (viewport_width < 1280) {
            //     slider.trigger('destroy.owl.carousel');
            //     slider.removeClass('owl-carousel');
            // } else {
            slider.addClass('owl-carousel');
            setTimeout(function () {
                slider.owlCarousel({
                    loop: true,
                    nav: false,
                    dots: false,
                    margin: 3,
                    items: 10
                });
            }, 100);
            //
            // }
        }

        $('.custom-select').on('click', function () {
            $('.custom-select').removeClass('active');
            var $menu = $(this);
            var open = false;
            $menu.addClass('active');
            $(document).on('click.closeout', function () {
                if (open === true) {
                    $menu.removeClass('active');
                    open = false;
                    $(document).off('click.closeout');
                } else {
                    open = true;
                }
            });
        });

        $('.custom-select__item').on('click', function () {
            var $item = $(this);
            var $button = $(this).closest('.custom-select').find('.custom-select__button');
            $button.empty();
            var $new_item = $item.clone();
            $button.append($new_item);
        });

        $('.change-pattern').on('click', function () {
            var pattern = $(this).data('pattern-goal');
            $('body').removeClass('pattern--1');
            $('body').removeClass('pattern--2');
            $('body').removeClass('pattern--3');
            $('body').addClass(pattern);
        });

        $('.top-cases__mobile-button').on('click', function () {
            $('.top-cases').toggleClass('active');
        });

        $('.menu__mobile-button').on('click', function () {
            $(this).toggleClass('active');
            $('.menu__shadow').toggleClass('active');
            $('.menu').toggleClass('active');
        });

        if ($('div').is('.case__slider')) {
            var slider = $('.case__slider');
            slider.owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        margin: 0,
                        items: 1
                    },
                    375: {
                        margin: 16,
                        items: 2
                    },
                    768: {
                        margin: 40,
                        items: 3
                    },
                    1024: {
                        margin: 40,
                        items: 4
                    },
                    1600: {
                        margin: 40,
                        items: 5
                    },
                    1920: {
                        margin: 60,
                        items: 6
                    }
                }

            });
        }

        if ($('div').is('.case-create-slider__items')) {
            var slider = $('.case-create-slider__items');
            slider.owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        margin: 5,
                        items: 3
                    },
                    375: {
                        margin: 5,
                        items: 3
                    },
                    768: {
                        margin: 5,
                        items: 4
                    },
                    1024: {
                        margin: 5,
                        items: 5
                    },

                    1440: {
                        margin: 5,
                        items: 7
                    },

                    1600: {
                        margin: 5,
                        items: 9
                    },
                    1920: {
                        margin: 5,
                        items: 11
                    }
                }

            });
        }

        if ($('div').is('.account-cases__items')) {
            var $cases = $('.account-cases__items');
            $cases.owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                margin: 3,
                responsive: {
                    0: {
                        items: 3
                    },

                    768: {
                        items: 10
                    }
                }
            });

            $('.account-cases__button--prev').click(function () {
                $cases.trigger('prev.owl.carousel');
            });

            $('.account-cases__button--next').click(function () {
                $cases.trigger('next.owl.carousel');
            });


        }

        $('.how-it-work__button').on('click', function () {
            $('.how-it-work__item').toggleClass('active');
        });

        $('.how-it-work__item-close').on('click', function () {
            $('.how-it-work__item').removeClass('active');
        });


        $('.show-button').on('click', function () {
            var goal = $(this).data('goal');
            $($(this)).toggleClass('active');
            $(goal).toggleClass('active');
        });


        $('.banner__close').on('click', function () {
            $('.banner').addClass('hide');
        });

        $(".goods__header-select").selectmenu({
            classes: {
                "ui-selectmenu-button-open": "goods__header-select-button",
                "ui-selectmenu-button-closed": "goods__header-select-button",
                "ui-selectmenu-icon": "goods__header-select-icon",
                "ui-selectmenu-menu": "goods__header-select-items"
            }
        });

        if ($('select').is('.select')) {
            $(".select").selectmenu({
                classes: {
                    "ui-selectmenu-button-open": "select__button select__button--open",
                    "ui-selectmenu-button-closed": "select__button",
                    "ui-selectmenu-icon": "select__icon",
                    "ui-selectmenu-text": "select__text",
                    "ui-selectmenu-menu": "select__menu"
                }
            });
        }

        if ($('select').is('.case__slider')) {
            $(".goods__header-select").selectmenu({
                classes: {
                    "ui-selectmenu-button-open": "goods__header-select-button",
                    "ui-selectmenu-button-closed": "goods__header-select-button",
                    "ui-selectmenu-icon": "goods__header-select-icon",
                    "ui-selectmenu-menu": "goods__header-select-items"
                }
            });
        }

        if ($("div").is(".input-range")) {

            if ($(".input-range").closest(".case-create__header-range-item").length > 0) {
                var min = 0;
                var max = 10000;

                $(".input-range").slider({
                    min: min,
                    max: max,
                    classes: {
                        "ui-slider": "input-range__track",
                        "ui-slider-handle": "input-range__handle"
                    }
                });

                $(".input-range").on("slide", function (event, ui) {
                    var value = (ui.value / 100) + '%';
                    $('.case-create__header-range-value').text(value);
                });

            } else if ($(".input-range").closest(".upgrade__bet-slider").length > 0) {

                var min = 5000;
                var max = 9999;

                $(".input-range").slider({
                    min: min,
                    max: max,
                    classes: {
                        "ui-slider": "input-range__track",
                        "ui-slider-handle": "input-range__handle"
                    }
                });

                $(".input-range").on("slide", function (event, ui) {
                    var value = (ui.value / 100) + '%';
                    var value_factor = parseInt((ui.value / 100));
                    $('.upgrade__bet-improve-item-text--factor').text("1." + value_factor + "x(2x)");
                    $('.upgrade__bet-improve-item-text--chance').text(value);

                });

            } else {
                $(".input-range").slider({
                    classes: {
                        "ui-slider": "input-range__track",
                        "ui-slider-handle": "input-range__handle"
                    }
                });

            }

        }


        $('.hide-block__button').on('click', function () {
            $(this).toggleClass('active');
            $(this).closest('.hide-block').find('.hide-block__item').toggle(300);
        });


        // Рулетка
        function roulette(main_class) {
            var $roulette = $('.' + main_class);
            var $wrapper = $('.' + main_class + '__wrapper');
            var $items = $('.' + main_class + '__items');
            var $item = $('.' + main_class + '__item');
            var items_length = $('.' + main_class + '__item').length;
            var $button = $('.' + main_class + '__button');
            var main_width = $roulette.width();
            var count = 13;

            function count_check() {
                if (viewport_width > 1900) {
                    count = 13;
                } else if (viewport_width > 1599) {
                    count = 9;
                } else if (viewport_width > 1365) {
                    count = 7
                } else if (viewport_width > 1279) {
                    count = 7
                } else if (viewport_width > 1023) {
                    count = 7
                } else if (viewport_width > 767) {
                    count = 5
                } else {
                    // if (viewport_width > 374)
                    count = 3
                }
            }

            count_check();

            var item_width = main_width / count;


            var animation_class = main_class + '__items--animation';
            var duration = 3000;
            var goal;
            $items.css('animation-duration', duration + 'ms');

            // Клонируем итемы для бесшовной анимации
            $items.clone().appendTo($wrapper);
            $items.clone().appendTo($wrapper);
            $items.clone().appendTo($wrapper);
            $items = $('.' + main_class + '__items');
            $item = $('.' + main_class + '__item');

            // Задаем ширину итему
            $item.css('width', item_width + 'px');

            $(window).resize(function () {
                main_width = $roulette.width();
                var item_width = main_width / count;
                $item.css('width', item_width + 'px');
                count_check();
                $wrapper.css('transform', 'translateX(0)');
                $item.removeClass('active');
                roulette_active((count - 1) / 2);
            });


            // Задаем центральному итему эктив
            function roulette_active(number) {
                $('.' + main_class + '__items').each(function () {
                    $(this).find('.' + main_class + '__item').eq(number).addClass('active');
                });
            }

            roulette_active((count - 1) / 2);


            $button.on('click', function () {
                goal = random_integer(0, items_length - 1);
                $items.addClass(animation_class);
                $item.removeClass('active');
                setTimeout(function () {
                    $items.removeClass(animation_class);
                    setTimeout(function () {
                        roulette_active(goal);
                    }, 50);
                }, duration + 100);

                var shift;

                if (goal - (count - 1) / 2 > 0) {
                    shift = goal - (count - 1) / 2;
                } else if (goal - (count - 1) / 2 < 0) {
                    shift = goal - (count - 1) / 2 + items_length;
                } else {
                    shift = 0;
                }

                $wrapper.css('transition', 'all ' + duration + 'ms ease-in-out');
                $wrapper.css('transform', 'translateX(-' + item_width * shift + 'px)');
            });

            function random_integer(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
            }


        }


        $('.top__result-button').click(function () {
            var $items = $(this).closest('.top__result').find('.top__result-button');
            var $tabs = $(this).closest('.top__result').find('.top__result-tab');
            var goal = $items.index(this);
            $tabs.removeClass('active');
            $tabs.eq(goal).addClass('active');
            $items.removeClass('active');
            $items.eq(goal).addClass('active');
        });


        $(window).scroll(function () {

            scroll_top = $(window).scrollTop();

            if ($('.modal__background').hasClass('active') === false) {
                $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
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

        $('.modal__faq-item-title').on('click', function () {
            $(this).closest('.modal__faq-item').find('.modal__faq-item-text').toggle(300);
        });

        function goodsScrollHeight() {
            var item_height = $('.goods__item').height();
            var item_margin = parseInt($('.goods__item').css('margin-bottom'));
            var wrapper_padding = parseInt($('.goods__wrapper.custom-scroll').css('padding-bottom')) + parseInt($('.goods__wrapper.custom-scroll').css('padding-top'));
            var row_coiunt = 3;
            var wrapper_height = (item_height * row_coiunt) + (item_margin * (row_coiunt - 1)) + wrapper_padding;

            $(".goods__wrapper.custom-scroll").each(function () {
                if (viewport_width > 767) {
                    $(this).css("height", wrapper_height + "px");
                } else {
                    $(this).css("height", "auto");
                }
            });
        }

        if ($("div").is(".goods__wrapper.custom-scroll")) {
            goodsScrollHeight()
        }


        $('.custom-scroll').scroll(function (e) {
            var scroll_pos = e.target.scrollTop;


            if (scroll_pos > 0) {
                $('.custom-scroll').addClass('scroll-active');
            } else {
                $('.custom-scroll').removeClass('scroll-active');
            }

        });


        if ($('.mobile-switch')) {
            $('.mobile-switch').each(function () {
                blockSwitch($(this), '.mobile-switch__button', '.mobile-switch__item');
            });
        }

        function blockSwitch($filter_block, button_class, elem_class) {

            function randomInteger(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1)
                rand = Math.round(rand);
                return rand;
            }

            var filter_block_id = randomInteger(0, 10000);
            $filter_block.attr('id', filter_block_id);
            var filter_option_mobile = 'switch-mobile';
            var filter_option_desktop = 'switch-desktop';
            var goal_option = 'switch-goal';

            var active_class = 'active';
            var hide_class = 'hide';

            var names = [];
            var $mobile_blocks = [];
            var $desktop_blocks = [];
            var $all_mobile_blocks = [];
            var $all_desktop_blocks = [];
            var $buttons = [];

            $filter_block.find(button_class).each(function () {
                names.push($(this).data(goal_option));
                $buttons.push($(this));
            });

            for (var i = 0; i < names.length; i++) {
                $mobile_blocks.push([]);
                $desktop_blocks.push([]);
            }

            $(elem_class).each(function () {
                if ($(this).data(filter_option_mobile)) {
                    $all_mobile_blocks.push($(this));

                    var filters_options = $(this).data(filter_option_mobile).split(', ');

                    for (var i = 0; i < names.length; i++) {
                        for (var k = 0; k < filters_options.length; k++) {
                            if (filters_options[k] === names[i]) {
                                $mobile_blocks[i].push($(this));
                            }
                        }
                    }
                }

                if ($(this).data(filter_option_desktop)) {
                    $all_desktop_blocks.push($(this));

                    var filters_options = $(this).data(filter_option_desktop).split(', ');

                    for (var i = 0; i < names.length; i++) {
                        for (var k = 0; k < filters_options.length; k++) {
                            if (filters_options[k] === names[i]) {
                                $desktop_blocks[i].push($(this));
                            }
                        }
                    }
                }
            });


            function blockSwitchActive() {
                var active_goal = names.indexOf($filter_block.find(button_class + '.' + active_class).data(goal_option));

                $($all_mobile_blocks).each(function () {
                    $(this).addClass(hide_class);
                });

                $($all_desktop_blocks).each(function () {
                    $(this).addClass(hide_class);
                });

                if (viewport_width < mobile_width) {

                    for (var i = 0; i < $mobile_blocks[active_goal].length; i++) {
                        $mobile_blocks[active_goal][i].removeClass(hide_class);
                    }


                } else {

                    for (var i = 0; i < $desktop_blocks[active_goal].length; i++) {
                        $desktop_blocks[active_goal][i].removeClass(hide_class);
                    }


                }
            }

            blockSwitchActive();

            $('#' + filter_block_id + ' ' + button_class).on('click', function () {
                $filter_block.find(button_class).removeClass(active_class);
                $(this).addClass(active_class);
                blockSwitchActive()
            });

            $(window).resize(function () {
                blockSwitchActive();
            });
        }


        // Временный код для тестов
        var win;
        $('.games__item--empty').on('click', function () {
            $('.games-result').removeClass('active');

            setTimeout(function () {
                $('.animation-counter').addClass('active');
                setTimeout(function () {
                    $('.animation-counter').removeClass('active');
                    if (win === false) {
                        $('.games-result').addClass('active');
                        win = true;
                    } else {
                        $('#modal_win').css('top', (scroll_top + (viewport_height / 2)) + 'px');
                        $('#modal_win').addClass('active');
                        $('.modal__background').addClass('active');
                        win = false;
                    }


                }, 3000);
            }, 1);
        });
    }
);
