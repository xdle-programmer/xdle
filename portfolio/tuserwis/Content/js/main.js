﻿var device;
var touch;
var apple;
if (navigator.userAgent.toUpperCase().indexOf('android'.toUpperCase()) + 1) {
    device = 'android';
} else if (navigator.userAgent.toUpperCase().indexOf('iphone'.toUpperCase()) + 1) {
    device = 'iphone';
} else if (navigator.userAgent.toUpperCase().indexOf('ipad'.toUpperCase()) + 1) {
    device = 'ipad';
} else if (navigator.userAgent.toUpperCase().indexOf('macintosh'.toUpperCase()) + 1) {
    device = 'macintosh';
} else if (navigator.userAgent.toUpperCase().indexOf('windows'.toUpperCase()) + 1) {
    device = 'windows';
} else {
    device = 'windows';
}
//
// if (device === 'iphone' || device === 'ipad') {
//     document.getElementsByTagName("body")[0].setAttribute("class", "apple-device touch-device");
//     touch = true;
//     apple = true;
// } else if (device === 'android') {
//     document.getElementsByTagName("body")[0].setAttribute("class", "touch-device");
//     touch = true;
// } else if (device === 'macintosh') {
//     apple = true;
//     document.getElementsByTagName("body")[0].setAttribute("class", "apple-device");
// }


var $body;
var viewport_height;
var viewport_width;
var scroll_top;
var scroll_down;
var scroll_counter;
var mobile_width;
var modals;


$(document).ready(function () {
    $body = $('html, body');
    viewport_height = $(window).height();
    viewport_width = $(window).width();
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 768;

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
        header_scroll();
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
        viewport_width = $(window).width();
    });

    function header_scroll() {

        if (scroll_top > 0) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--scroll');
            }
            if ($('.scroll-top').hasClass('active') === false) {
                $('.scroll-top').addClass('active');
            }
        } else {
            $('.header').removeClass('header--scroll');
            $('.scroll-top').removeClass('active');
        }
    }

    header_scroll();


    // Menu
    function Menu(button, menu, background, active_class) {
        var state = false;
        var buttons = button.split(', ');
        var menu_blocks = menu.split(', ');

        if (background) {
            var backgrounds = background.split(', ');
        }

        if (!active_class) {
            active_class = 'active';
        }

        this.open = function () {
            openMenu();
        };

        this.close = function () {
            closeMenu();
        };

        this.state = function () {
            return state;
        };

        function openMenu() {
            state = true;

            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).addClass(active_class);
            }

            for (var i = 0; i < menu_blocks.length; i++) {
                $(menu_blocks[i]).addClass(active_class);
            }

            if (background) {
                for (var i = 0; i < backgrounds.length; i++) {
                    $(backgrounds[i]).addClass(active_class);
                }
            }
        }

        function closeMenu() {
            state = false;

            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).removeClass(active_class);
            }

            for (var i = 0; i < menu_blocks.length; i++) {
                $(menu_blocks[i]).removeClass(active_class);
            }

            if (background) {
                for (var i = 0; i < backgrounds.length; i++) {
                    $(backgrounds[i]).removeClass(active_class);
                }
            }
        }

        $(document).on('click', function (e) {
            var button_click = false;
            var menu_click = false;

            for (var i = 0; i < buttons.length; i++) {
                if ($(e.target).closest(buttons[i]).length === 1) {
                    button_click = true;
                }
            }

            for (var i = 0; i < menu_blocks.length; i++) {
                if ($(e.target).closest(menu_blocks[i]).length === 1) {
                    menu_click = true;
                }
            }

            if (state === false) {
                if (button_click === true) {
                    openMenu();
                }
            } else {
                if (menu_click === false || button_click === true) {
                    closeMenu();
                }
            }

        });
    }

    if ($('.header__menu-button').length > 0 && $('.header__menu').length > 0) {
        var menu = new Menu('.header__menu-button', '.header__menu');
    }

    if ($('.ticket__menu-button--ticket').length > 0 && $('.ticket__menu-items--ticket').length > 0) {
        var tickets_menu_ticket = new Menu('.ticket__menu-button--ticket', '.ticket__menu-items--ticket');
    }

    if ($('.ticket__menu-button--oferty').length > 0 && $('.ticket__menu-items--oferty').length > 0) {
        var tickets_menu_oferty = new Menu('.ticket__menu-button--oferty', '.ticket__menu-items--oferty');
    }

    if ($('.ticket__menu-button--cars').length > 0 && $('.ticket__menu-items--cars').length > 0) {
        var tickets_menu_cars = new Menu('.ticket__menu-button--cars', '.ticket__menu-items--cars');
    }

    if ($('.car-info__item-header-menu-button').length > 0 && $('.car-info__item-header-menu-items').length > 0) {
        var tickets_menu_car = new Menu('.car-info__item-header-menu-button', '.car-info__item-header-menu-items');
    }

    if ($('.header__profile-button').length > 0 && $('.header__profile').length > 0) {
        var profile_menu = new Menu('.header__profile-button, .header__profile-close', '.header__profile, .header__profile-menu');
    }

    if ($('.car-info__mobile-button').length > 0 && $('.car-info__item').length > 0) {
        var car_info_menu = new Menu('.car-info__mobile-button', '.car-info__item');
    }

    // Filters
    function blockSwitch($filter_block, button_class, elem_class) {

        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
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
            blockSwitchActive();
        });

        $(window).resize(function () {
            blockSwitchActive();
        });
    }

    if ($('.switch__buttons').length > 0) {
        $('.switch__buttons').each(function () {
            blockSwitch($(this), '.switch__button', '.switch__elem');
        });
    }

    if ($('.modal__background').length > 0 && $('.modal__block').length > 0) {
        modals = new modalToggle();
    }


    // Autocomlete select
    $.widget("custom.combobox", {

        _create: function () {
            var class_name = this.element.data('class-wrapper');

            if (!this.element.data('class-wrapper')) {
                class_name = 'select-autocomplete';
            } else {
                class_name = this.element.data('class-wrapper');
            }

            this.wrapper = $('<div>')
                .addClass(class_name + '__button')
                .insertAfter(this.element);

            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },

        _createAutocomplete: function () {
            var selected = this.element.children(":selected");
            var selected_text = $(selected[0]).text();

            if ($(selected[0]).val() === 'option-placeholder') {
                selected_text = '';
            }

            var class_name = this.element.data('class-wrapper');

            if (!this.element.data('class-wrapper')) {
                class_name = 'select-autocomplete';
            } else {
                class_name = this.element.data('class-wrapper');
            }


            this.input = $("<input>")
                .appendTo(this.wrapper)
                .attr("placeholder", $(this.element).closest('.' + class_name).data('placeholder'))
                .addClass(class_name + "__text")
                .val(selected_text)
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: $.proxy(this, "_source"),
                    classes: {
                        "ui-autocomplete": class_name + "__menu"
                    },
                    open: function (event, ui) {
                        $(event.target).closest('.' + class_name).find('.' + class_name + '__button').addClass(class_name + '__button--open');
                    },
                    close: function (event, ui) {
                        $(event.target).closest('.' + class_name).find('.' + class_name + '__button').removeClass(class_name + '__button--open');
                    },
                    change: function (event, ui) {
                        $(event.target).closest('.' + class_name).find('select').trigger('change');
                    },
                    select: function (event, ui) {
                        $(event.target).closest('.' + class_name).find('select').trigger('change');
                    }
                });


            var wasOpen;

            this.input.on('click', function () {
                var input = $(this);
                wasOpen = input.autocomplete("widget").is(":visible");
                input.trigger("focus");
                if (wasOpen) {
                    input.autocomplete("close");
                } else {
                    input.autocomplete("search", input.val());
                }

            });

            this._on(this.input, {
                autocompleteselect: function (event, ui) {
                    ui.item.option.selected = true;
                    this._trigger("select", event, {
                        item: ui.item.option
                    });
                },
                autocompletechange: "_removeIfInvalid",
                focus: function (event, ui) {

                }
            });
        },

        _source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            response(this.element.children("option").map(function () {
                var text = $(this).text();

                if (this.value && this.value !== 'option-placeholder' && (!request.term || matcher.test(text)))
                    return {
                        label: text,
                        value: text,
                        option: this
                    };


            }));
        },

        _removeIfInvalid: function (event, ui) {

            // Selected an item, nothing to do
            if (ui.item) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
            this.element.children("option").each(function () {
                if ($(this).text().toLowerCase() === valueLowerCase) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if (valid) {
                return;
            }

            // Remove invalid value
            this.input
                .val("");
            this.element.val("");
            this.input.autocomplete("instance").term = "";
        },

        _destroy: function () {
            this.wrapper.remove();
            this.element.show();
        },

        _createShowAllButton: function () {
            var input = this.input,
                wasOpen = false;

            var class_name = this.element.data('class-wrapper');

            if (!this.element.data('class-wrapper')) {
                class_name = 'select-autocomplete';
            } else {
                class_name = this.element.data('class-wrapper');
            }

            $("<span>")
                .appendTo(this.wrapper)
                .removeClass("ui-corner-all")
                .addClass(class_name + "__icon")
                .on("mousedown", function () {
                    wasOpen = input.autocomplete("widget").is(":visible");
                })
                .on('click', function () {
                    input.trigger("focus");

                    if (wasOpen) {
                        return;
                    }

                    input.autocomplete("search", "");
                });
        },


    });


    if ($('.select-autocomplete').length > 0) {
        $('.select-autocomplete').each(function () {
            var $default_select = $(this).find('select');

            $default_select.combobox();

            $default_select.on('change', function () {
                if (viewport_width < mobile_width) {
                    var $default_input = $default_select.closest('.select-autocomplete').find('input');
                    var val = $default_select.find('option:selected').text();
                    $default_input.val(val);
                }
            });

        });

    }

    // autocomplete input
    if ($('.input-autocomplete').length > 0) {
        $('.input-autocomplete').each(function () {
            var $input = $(this);
            var options = [];

            $input.find('datalist option').each(function () {
                options.push(this.innerText);
            });

            $input.find('input').autocomplete({
                source: options,
                classes: {
                    "ui-autocomplete": "input-autocomplete__menu"
                },
                close: function (event, ui) {
                    $input.removeClass('input-autocomplete--open');
                },
                open: function (event, ui) {
                    $input.addClass('input-autocomplete--open');
                },
                change: function (event, ui) {
                    $(event.target).trigger('change');
                },
                focus: function (event, ui) {
                }
            });
        });
    }

    // Selector
    if ($('.select').length > 0) {
        $('.select').each(function () {
            var $select = $(this);
            var class_name = $select.data('class-wrapper');

            if (!$select.data('class-wrapper')) {
                class_name = 'select';
            } else {
                class_name = $select.data('class-wrapper');
            }


            var options = [];
            var placeholder_val;

            for (var i = 0; i < $(this).find('select option').length; i++) {
                var $option = $(this).find('select option').eq(i);

                if ($option.val() === ('option-placeholder')) {
                    placeholder_val = $option.val();
                }

                var val = $option.val();
                var name = $option.text().charAt(0).toLowerCase();
                options[i] = {val: val, name: name};
            }

            function placeholderCheck($button, val) {
                if (val === placeholder_val) {
                    $button.addClass(class_name + '__button--placeholder');
                } else {
                    $button.removeClass(class_name + '__button--placeholder');
                }
            }

            function search(source, name) {
                var results;
                name = name.toString().toLowerCase();
                results = $.map(source, function (entry) {
                    var match = entry.name.toLowerCase().indexOf(name) !== -1;
                    return match ? entry : null;
                });
                return results;
            }

            $select.find('select').selectmenu({
                classes: {
                    "ui-selectmenu-button-open": class_name + "__button " + class_name + "__button--open",
                    "ui-selectmenu-button-closed": class_name + "__button",
                    "ui-selectmenu-icon": class_name + "__icon",
                    "ui-selectmenu-text": class_name + "__text",
                    "ui-selectmenu-menu": class_name + "__menu"
                },
                create: function (event, ui) {
                    inputListening($(event.target));
                    placeholderCheck($(event.target).selectmenu("widget"), $(event.target).val());
                },
                focus: function (event, ui) {

                },
                change: function (event, ui) {
                    placeholderCheck($(event.target).selectmenu("widget"), $(event.target).val());
                    $(event.target).trigger('change');
                }
            });

            function inputListening($select_widget) {

                var last_symbol = '';
                var last_try = 0;

                $select.keydown(function (eventObject) {
                    var wasOpen = $($select_widget.selectmenu("menuWidget")).is(":visible");

                    if (eventObject.which === 40 && !wasOpen) {
                        $select_widget.selectmenu("open");
                    }

                    if (eventObject.originalEvent.key.length === 1) {
                        var symbol = eventObject.originalEvent.key;
                        var count_result = search(options, symbol).length;

                        if (count_result > 0) {
                            if (symbol === last_symbol) {
                                last_try = last_try + 1;

                                if (last_try === count_result) {
                                    last_try = 0;
                                }

                                $select.find('select').val(search(options, symbol)[last_try].val);
                                $select_widget.selectmenu("refresh");
                            } else {
                                last_symbol = symbol;
                                last_try = 0;
                                $select.find('select').val(search(options, symbol)[last_try].val);
                                $select_widget.selectmenu("refresh");
                            }

                        }


                    }
                });
            }

            if (viewport_width < mobile_width) {
                $select.find('select').on('change', function () {

                    $select.find('select').selectmenu("refresh");

                    var $select_wrapper = $select.find('.select__button');
                    var val = $select.find('select').val();
                    var select_wrapper_placeholder_class = 'select__button--placeholder';

                    if (val === 'option-placeholder') {
                        $select_wrapper.addClass(select_wrapper_placeholder_class);
                    } else {
                        $select_wrapper.removeClass(select_wrapper_placeholder_class);
                    }
                });
            }
        });
    }

    // Focus
    function toggleFocusClass($trigger, $wrapper) {
        var class_name = 'focus';
        $trigger.on('focus', function () {
            $wrapper.addClass(class_name);
        });
        $trigger.on('focusout', function () {
            $wrapper.removeClass(class_name);
        });
    }

    $('.input').find('input, textarea').each(function () {
        toggleFocusClass($(this), $(this).closest('.input'));
    });

    $('.select-autocomplete').find('input').each(function () {
        toggleFocusClass($(this), $(this).closest('.select-autocomplete'));
    });

    $('.select').find('.select__button').each(function () {
        toggleFocusClass($(this), $(this).closest('.select'));
    });

    $('.radio').find('input').each(function () {
        toggleFocusClass($(this), $(this).closest('.radio'));
    });

    $('.checkbox').find('input').each(function () {
        toggleFocusClass($(this), $(this).closest('.checkbox'));
    });

    $('.input-autocomplete').find('input').each(function () {
        toggleFocusClass($(this), $(this).closest('.input-autocomplete'));
    });

    // Placeholders
    $('[data-placeholder]').each(function () {
        var text = $(this).data('placeholder');
        var placeholder_block = '<div class="placeholder__block">' + text + '</div>';
        $(this).addClass('placeholder');
        $(placeholder_block).appendTo($(this));
    });

    $('.animation-scroll').click(function () {

        if ($(this).hasClass('scroll-top') === true) {
            $('.header').removeClass('header--scroll');

            $body.animate({
                scrollTop: 0
            }, 500);
        } else {
            var goal = $(this).data('scroll-goal');
            $('.header').removeClass('header--open');
            $('.header').addClass('header--scroll');

            setTimeout(function () {
                page_scroll();
            }, 250);

            function page_scroll() {
                var header_height = $('.header').height();
                $body.animate({
                    scrollTop: ($(goal).offset().top) - header_height
                }, 500);
            }

        }
    });


    function createHowItSlider() {
        var $slider = $('.how-it-work__items');
        var owl_class = 'owl-carousel';

        if (viewport_width < mobile_width) {
            $slider.addClass(owl_class);

            $slider.owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: false,
                items: 1
            });
        } else {
            $slider.removeClass(owl_class);
            $slider.owlCarousel('destroy');
        }


    }

    if ($('.how-it-work__items').length > 0) {
        createHowItSlider();

        $(window).resize(function () {
            createHowItSlider();
        });
    }


    function createReviewsSlider() {
        var $slider = $('.reviews__items-slider');
        var owl_class = 'owl-carousel';

        if (viewport_width < mobile_width) {
            $slider.addClass(owl_class);

            $slider.owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                items: 1
            });
        } else {
            $slider.removeClass(owl_class);
            $slider.owlCarousel('destroy');
        }


    }

    if ($('.reviews__items-slider').length > 0) {
        createReviewsSlider();

        $(window).resize(function () {
            createReviewsSlider();
        });
    }

    if ($('.ticket__img-slider').length > 0) {
        var $slider = $('.ticket__img-slider');
        $slider.owlCarousel({
            loop: false,
            margin: 10,
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                    items: 3
                },
                1024: {
                    nav: true,
                    dots: false,
                    items: 9
                }
            }
        });
    }

    if ($('.workshop-profile__img-slider').length > 0) {
        var $slider = $('.workshop-profile__img-slider');
        $slider.owlCarousel({
            loop: false,
            margin: 10,
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                    items: 2
                },
                1024: {
                    nav: true,
                    dots: false,
                    items: 4
                }
            }
        });
    }

    $('.ticket__open').on('click', function () {
        var $button = $(this);
        var $item = $(this).closest('.ticket__item');
        $item.toggleClass('open');
    });


    createDatepicker();

    createTimePicker();

    $('.offers__list-item-header').on('click', function (e) {
        var list_goal = $(this).closest('.offers__list').data('offers-list');
        var open_item = true;

        if ($(e.target).hasClass('offers__list-item-header-name-other-car')) {
            open_item = false;
        }

        if ($(e.target).hasClass('offers__list-item-header-distance-inner')) {
            open_item = false;
        }

        if ($(e.target).closest('.offers__list-item-header-distance-inner').length > 0) {
            open_item = false;
        }

        if (open_item) {
            toggleOffersItem($(this).closest('.offers__list-item'));
            countUnreadOffers(list_goal);
        }
    });

    function toggleOffersItem($item) {
        var $items = $item.closest('.offers__list').find('.offers__list-item');
        var $header = $item.find('.offers__list-item-header');
        var $desc = $item.find('.offers__list-item-desc');
        var open_class = 'open';
        var unread_class = 'unread';
        var state = $item.hasClass('open');
        // var header_height = $header.outerHeight();
        // var desc_height = $desc.outerHeight();

        $item.removeClass(unread_class);

        hideOffersItem($items);

        if (state === false) {
            // $item.height(header_height + desc_height);
            $item.addClass(open_class);
        }
    }

    function hideOffersItem($items) {
        var open_class = 'open';

        $items.each(function () {
            //var $item_header = $(this).find('.offers__list-item-header');
            //var $item_desc = $(this).find('.offers__list-item-desc');
            //var item_header_height = $item_header.outerHeight();
            //$(this).height(item_header_height);
            $(this).removeClass(open_class);
        });
    }

    function countUnreadOffers(list_goal) {
        var wrapper_class = 'offers__car-select-item';
        var $count_block = $('.' + wrapper_class + '[data-offers-list-goal="' + list_goal + '"]').find('.offers__car-select-item-count-new');
        var $items = $('.offers__list[data-offers-list="' + list_goal + '"]').find('.offers__list-item.unread');
        if ($items.length === 0) {
            $count_block.addClass('hide');
        }

        $count_block.text('+' + $items.length);
    }

    function countOffers(list_goal) {
        var wrapper_class = 'offers__car-select-item';
        var $count_block = $('.' + wrapper_class + '[data-offers-list-goal="' + list_goal + '"]').find('.offers__car-select-item-count');
        var $items = $('.offers__list[data-offers-list="' + list_goal + '"]').find('.offers__list-item');
        $count_block.text($items.length);
    }

    if ($('.offers__car-select-item').length > 0) {
        $('.offers__car-select-item').each(function () {
            var list_goal = $(this).data('offers-list-goal');
            countOffers(list_goal);
            countUnreadOffers(list_goal);
        });
    }


    $('.offers__car-select-item').on('click', function () {

        if ($(this).hasClass('active') === false) {
            changeOffersList($(this).data('offers-list-goal'));
        }

    });

    function changeOffersList(goal) {
        var $lists = $('.offers__list');
        var $goal_list = $('.offers__list[data-offers-list="' + goal + '"]');
        var $buttons = $('.offers__car-select-item');
        var $goal_button = $('.offers__car-select-item[data-offers-list-goal="' + goal + '"]');
        var active_class = 'active';
        var $items = $('.offers__list.active').find('.offers__list-item');

        hideOffersItem($items);

        $lists.removeClass(active_class);
        $buttons.removeClass(active_class);
        $goal_list.addClass(active_class);
        $goal_button.addClass(active_class);
    }

    $('.offers__list-item-header-name-other-car').on('click', function () {
        var goal_list = $(this).data('offers-list-goal');
        var $goal_list = $('.offers__list[data-offers-list="' + goal_list + '"]');
        var goal_item = $(this).data('offer-id-goal');
        var $goal_item = $('.offers__list-item[data-offer-id="' + goal_item + '"]');

        changeOffersList(goal_list);

        toggleOffersItem($goal_item);
    });


    $('.offers__list-header-distance .offers__list-header-sort-button--up').on('click', function () {
        var $items = $('.offers__list.active').find('.offers__list-item');
        hideOffersItem($items);
        sortItems($items, 'data-distance', true);
    });

    $('.offers__list-header-distance .offers__list-header-sort-button--down').on('click', function () {
        var $items = $('.offers__list.active').find('.offers__list-item');
        hideOffersItem($items);
        sortItems($('.offers__list.active').find('.offers__list-item'), 'data-distance', false);
    });

    $('.offers__list-header-price .offers__list-header-sort-button--up').on('click', function () {
        var $items = $('.offers__list.active').find('.offers__list-item');
        hideOffersItem($items);
        sortItems($('.offers__list.active').find('.offers__list-item'), 'data-price', true);
    });


    $('.offers__list-header-price .offers__list-header-sort-button--down').on('click', function () {
        var $items = $('.offers__list.active').find('.offers__list-item');
        hideOffersItem($items);
        sortItems($('.offers__list.active').find('.offers__list-item'), 'data-price', false);
    });

    function sortItems($items, data_attr, up) {

        var array = $items.toArray();

        array.sort(function (a, b) {
            var aVal = parseInt(a.getAttribute(data_attr));
            var bVal = parseInt(b.getAttribute(data_attr));
            return aVal - bVal;
        });

        if (!up) {
            array.reverse();
        }

        for (var i = 0; i < array.length; i++) {
            $(array[i]).css('order', i);
        }
    }

    $('.offers__list-item-header-distance-inner').on('click', function () {
        var address_end = $(this).closest('.offers__list-item').data('address');
        var offer_id = $(this).closest('.offers__list-item').attr('id');
        var address_start = "";
        $.getJSON('/User/GetTicketAddress', {offerId: offer_id}, function (res) {
            deleteMarkers();
            calcRoute(address_end, res);
            modals.open('modal_map');
        });
        deleteMarkers();
        //addMarker(getCoordinates(address_end));
        //map.setCenter(getCoordinates(address_end));
        //calcRoute(address_end, address_start);
        // modals.open('modal_map');
    });

    $('.open-modal-map').on('click', function () {
        var address = $(this).data('address');
        openModalMap(address);
    });

    function openModalMap(address) {
        deleteMarkers();
        addMarker(getCoordinates(address));
        map.setCenter(getCoordinates(address));
        modals.open('modal_map');
    }

    $('.form__address #user_city').on('change', function () {
        var city = $(this).val();
        var $input_address = $(this).closest('.form__address').find('#address');
        var $field_address = $input_address.closest('.form__field');
        if (city !== 'option-placeholder') {
            $field_address.removeClass('hide');
            $input_address.val('');

        } else {
            $field_address.addClass('hide');
        }
    });


    $('.form__address #address').on('input', function () {
        var $input_address = $(this);
        var input_address_val = $input_address.val();
        var address_prefix = '';

        if ($input_address.closest('.form__address').find('#user_city').length > 0) {
            var city = $input_address.closest('.form__address').find('#user_city').find(":selected").val();

            if (city !== 'option-placeholder') {
                address_prefix = city + ', ';
            } else {
                address_prefix = '';
            }

            if (input_address_val.indexOf(address_prefix) === 0) {

            } else {
                if (address_prefix.indexOf(input_address_val) >= 0) {
                    $input_address.val(address_prefix);
                } else {
                    $input_address.val(address_prefix + input_address_val);
                }
            }
        }
    });


    $('.tabs__header-button').on('click', function () {
        var $wrapper = $(this).closest('.tabs');
        var $buttons = $wrapper.find('.tabs__header-button');
        var $items = $wrapper.find('.tabs__item');
        var active_class = 'active';
        var goal = $(this).data('tabs-goal');

        if ($(this).hasClass(active_class) === false) {
            $items.removeClass(active_class);
            $buttons.removeClass(active_class);
            $(this).addClass(active_class);
            $wrapper.find('.tabs__item[data-tabs="' + goal + '"]').addClass(active_class);
        }
    });

    $('.worktime-select__item-switch').on('click', function () {
        $(this).closest('.worktime-select__item').toggleClass('active');
    });

    $(document).on('click', function (e) {
        var $click = $(e.target);

        if ($click.hasClass('ticket__name-contact-holder') === true) {
            $click.closest('.ticket__name-contact-block').removeClass('hide');
        }

        if ($click.hasClass('rating-input__input') === true || $click.closest('.rating-input__input').length > 0) {
            var percent_width = parseInt(e.offsetX) / (parseInt($('.rating-input__input').width()) / 100);
            var $val = $click.closest('.rating-input').find('.rating-input__input-val');
            var $input = $click.closest('.rating-input').find('.rating-input__item');

            if (percent_width < 20) {
                $val.css('width', '20%');
                $input.val(1);
            } else if (percent_width < 40) {
                $val.css('width', '40%');
                $input.val(2);
            } else if (percent_width < 60) {
                $val.css('width', '60%');
                $input.val(3);
            } else if (percent_width < 80) {
                $val.css('width', '80%');
                $input.val(4);
            } else {
                $val.css('width', '100%');
                $input.val(5);
            }
        }
    });

    $('.ticket__item-messages-title').on('click', function () {
        var $messages = $(this).closest('.ticket__item-messages');
        var $messages_block = $messages.find('.ticket__item-messages-block');
        var $new_messages_counter = $messages.find('.ticket__item-messages-new');

        if ($messages_block.hasClass('hide')) {
            $messages_block.show();
            $messages_block.removeClass('hide');
            $new_messages_counter.addClass('hide');
        } else {
            $messages_block.hide();
            $messages_block.addClass('hide');
        }
    });

    $('#code-show-with-pass').on('click', function () {
        $('#code').removeClass('hide');
        $('#change_pass').removeClass('hide');
        $(this).addClass('hide');
    });

    $('#change_pass').on('click', function () {
        $('#phone').addClass('hide');
        $('#code').addClass('hide');
        $('#pass').removeClass('hide');
        $('#pass2').removeClass('hide');
    });

    $('input[name="ver_code"]').on('keypress', function (e) {
        e = e || event;

        var len = $(this).val().length;

        if (e.ctrlKey || e.altKey || e.metaKey) return;

        var chr = e.charCode;

        if (chr == null) return;

        if (chr < '48' || chr > '57' || len > 3) {
            return false;
        }
    });

    $('.close-notification').on('click', function () {
        $(this).closest('.notification').addClass('hide');
    });

    if ($('.about__text').length > 0) {

        $('.about__text').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: true,
            dots: false,
            margin: 0,
            items: 1
        });


        if (viewport_width > mobile_width) {
            $('.about__text').removeClass('owl-carousel');

            $('.about__text').trigger('destroy.owl.carousel');
        }
    }

    $.fn.setCursorPosition = function (pos) {
        this.each(function (index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };

    $('.input--phone input').on('focus click', function () {
        if (!$(this).val() || $(this).val().replace(/\s/g, '') == "+48") {
            $(this).setCursorPosition(4);
        }
    });

    $('.input--phone input').mask('+48 999 999 999', {placeholder: "+48            "});

    $('.payment-input').mask('99999', {autoclear: false});

    $('.subscription__subscribe-button').on('click', function () {
        $('.subscription__subscribe-button').hide();
        $('.subscription__subscribe-form').show();
    });

    $('.sort__button').on('click', function () {
        var height = $('.sort__items').outerHeight();

        if ($('.sort__items').hasClass('active') === false) {
            $('.sort__items').css('height', '0');

            setTimeout(function () {
                $('.sort__items').css('opacity', '1');
                $('.sort__items').addClass('active');
                $('.sort__items').css('height', height + 'px');
            }, 200);
        } else {
            $('.sort__items').css('height', '0');
            $('.sort__items').css('opacity', '0');

            setTimeout(function () {
                $('.sort__items').removeClass('active');
                $('.sort__items').css('height', height + 'px');
            }, 200);
        }
    });

    $('.close-fix').on('click', function () {
        $('.modal__close-fix-questions').hide();
        $('.modal__close-fix-details').show();
    });

    $('.faq__title').on('click', function () {
        var $faqs = $('.faq');
        var $faq = $(this).closest('.faq');
        var $answers = $('.faq__item');
        var $answer = $faq.find('.faq__item');

        if ($faq.hasClass('active') === true) {
            $faq.removeClass('active');
            $answer.hide(300);
        } else {
            $faqs.removeClass('active');
            $answers.hide(300);
            $faq.addClass('active');
            $answer.slideDown();
        }
    });

    $('.one-row-form__input').keydown(function (e) {
        var $button = $(this).closest('.one-row-form').find('.one-row-form__button');

        if (e.which == 13) {
            $button.click();
            return false;
        }
    });

    $('.form-check').keydown(function (e) {
        var $button = $(this).find('.form-check__button');

        if (e.which == 13) {
            $button.click();
            return false;
        }
    });

    $('.workshop-profile__worktime-item-day-toggle').on('click', function () {
        $(this).closest('.workshop-profile__worktime-item').toggleClass('not-work');
    });

    $('.ticket__item-toggle-hide').on('click', function () {
        var $block = $(this).closest('.ticket__item');
        var $items = $('.ticket__item-hide');
        var $item = $block.find('.ticket__item-hide');

        if ($item.hasClass('active') === true) {
            $items.removeClass('active');
        } else {
            $items.removeClass('active');
            $item.addClass('active');
        }

    });


    // Ticket sort menu
    if ($('.sort-select').length > 0 && viewport_width > 1024) {
        $('.sort-select').each(function () {
            var $select = $(this);
            var class_name = 'sort-select';

            $select.find('select').selectmenu({
                classes: {
                    "ui-selectmenu-button-open": class_name + "__button " + class_name + "__button--open",
                    "ui-selectmenu-button-closed": class_name + "__button",
                    "ui-selectmenu-icon": class_name + "__icon",
                    "ui-selectmenu-text": class_name + "__text",
                    "ui-selectmenu-menu": class_name + "__menu"
                },
                create: function (event, ui) {

                },
                focus: function (event, ui) {

                },
                change: function (event, ui) {

                }
            });
        });
    }

    $('.modern-form__input-pass-toggle').on('click', function () {
        var $switch = $(this);
        var show_class = 'active';
        var $input = $switch.closest('.modern-form__input-block').find('input');
        var type = $input.prop('type');

        if (type === 'password') {
            $input.prop('type', 'text');
            $switch.addClass(show_class);
        } else {
            $input.prop('type', 'password');
            $switch.removeClass(show_class);
        }
    });

    $('.modern-form__input-result').on('input', function (e) {
        submitAfterSms($(this));
    });

    $('.modern-form__input-result').on('change', function (e) {
        submitAfterSms($(this));
    });

    function submitAfterSms($input) {
        var val = $input.val();

        if (val.length >= 4) {
            var res = val.slice(0, 4);
            $input.val(res);
            // submit!
        }
    }

    //
    // // Example
    $('#btnGenCode').on('click', function () {
        $('.modern-form__input-result').focus();
    });


    $('.show-contact').on('click', function () {


        var $contacts = $(this).closest('.ticket__item').find('.ticket__item-hide-contact');
        $contacts.addClass('active');
    });


    if ($('.main-counter__item-desc-number').length > 0) {
        var show = true;
        var $numbers = $('.main-counter__items');
        var $number = $('.main-counter__item-desc-number');
        $(window).on("scroll load resize", function () {
            if (!show) return false;
            var w_top = $(window).scrollTop();
            var e_top = $numbers.offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height = $numbers.outerHeight();
            if (w_top + w_height - 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $number = $(document).find('.main-counter__item-desc-number');
                $number.css('opacity', '1');
                $number.spincrement({
                    thousandSeparator: "",
                    duration: 1200
                });

                show = false;
            }
        });
    }

    function createMainCounterSlider() {
        var $slider = $('.main-counter__items');
        var owl_class = 'owl-carousel';

        if (viewport_width < 1280) {
            $slider.addClass(owl_class);

            $slider.owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: false,
                items: 1
            });
        } else {
            $slider.removeClass(owl_class);
            $slider.owlCarousel('destroy');
        }
    }

    if ($('.how-it-work__items').length > 0) {
        createMainCounterSlider();

        $(window).resize(function () {
            createMainCounterSlider();
        });
    }


    if ($('#avatar_workshop').length > 0) {
        createAvatarDownload('#avatar_workshop');
    }

    if ($('#workshop_gallery').length > 0) {
        createGalleryDownload('#workshop_gallery');
    }

    function toggleCarsEditMenu() {
        var button_menu_class = 'cars-edit__item-header-menu-button';
        var menu_class = 'cars-edit__item-header-menu-items';
        var wrapper_class = 'cars-edit__item-header-menu';
        var active_class = 'active';
        $(document).on('click', function (e) {
            console.log("tmp2");
            var $click = $(e.target);
            var button_click = $click.hasClass(button_menu_class);
            var menu_click = $click.hasClass(menu_class) || $click.closest('.' + menu_class).length > 0;

            if (button_click === false && menu_click === false) {
                console.log("tmp3");
                $(document).find('.' + menu_class).removeClass(active_class);
            } else if (button_click === true) {
                console.log("tmp4");
                var $menu = $click.closest('.' + wrapper_class).find('.' + menu_class);
                var $button = $click.closest('.' + wrapper_class).find('.' + button_menu_class);

                if ($button.hasClass(active_class) === true) {
                    console.log(1);
                    $(document).find('.' + menu_class).removeClass(active_class);
                    $(document).find('.' + button_menu_class).removeClass(active_class);
                } else {
                    console.log(2);
                    $(document).find('.' + menu_class).removeClass(active_class);
                    $menu.addClass(active_class);
                    $button.addClass(active_class);
                }

            }

        });
    }

    //toggleCarsEditMenu();


    //$(document).on('click', function (e) {
    //    if ($(e.target).hasClass('cars-edit__item--copy') === true) {
    //        var template_class = 'cars-edit__item--template';
    //        var car_class = 'cars-edit__item--car';
    //        var $copy = $(e.target);
    //        var $copy_sample = $copy.clone();
    //        var $wrapper = $('.cars-edit__items');
    //        var id_prexix = 'car_item_';

    //        var id_arr = [];

    //        for (var i = 0; i < $('.' + car_class).length; i++) {
    //            let id = $($('.' + car_class)[i]).prop('id').split(id_prexix)[1];
    //            id_arr.push(id);
    //        }

    //        var sample_id = id_prexix + (parseInt(getMaxValue(id_arr)) + 1);

    //        function getMaxValue(array) {
    //            var max = array[0];
    //            for (var i = 0; i < array.length; i++) {
    //                if (max < array[i]) max = array[i];
    //            }
    //            return max;
    //        }

    //        var $sample = $('.' + template_class)
    //            .clone()
    //            .removeClass(template_class)
    //            .addClass(car_class)
    //            .prop('id', sample_id)
    //            .addClass('form-check');

    //        $sample
    //            .find('.select-autocomplete-sample')
    //            .addClass('select-autocomplete')
    //            .removeClass('select-autocomplete-sample');

    //        $copy.remove();
    //        $sample.appendTo($wrapper);
    //        $copy_sample.appendTo($wrapper);

    //        $(document).find('.select-autocomplete').each(function () {
    //            var $default_select = $(this).find('select');

    //            $default_select.combobox();

    //            $default_select.on('change', function () {
    //                if (viewport_width < mobile_width) {
    //                    var $default_input = $default_select.closest('.select-autocomplete').find('input');
    //                    var val = $default_select.find('option:selected').text();
    //                    $default_input.val(val);
    //                }
    //            });
    //        });

    //        formCheckHandlerCreateObj = null;
    //        formCheckHandlerCreateObj = new formCheckHandlerCreate();
    //    }


    //});

});

// Modal
function modalToggle() {
    var state = false;
    var $open_buttons = $('.open-modal');
    var $close_buttons = $('.close-modal');
    var $background = $('.modal__background');
    var $modals = $('.modal__block');
    var active_class = 'active';

    this.open = function (modal_name) {
        openModal(modal_name);
    };

    this.close = function () {
        closeModal();
    };

    this.state = function () {
        return state;
    };

    function openModal(modal_name, button) {
        state = true;

        var $modal = $('div[data-modal-name="' + modal_name + '"]');
        $background.addClass(active_class);
        $modals.removeClass(active_class);
        $modal.addClass(active_class);
        if (modal_name == 'modal_offer') {
            var tckt_id = button.parent().parent().attr('id');
            $("#sbmt_offer").click(function () {
                var offer_details = document.getElementById('offer_details').value;
                var offer_date = document.getElementById('offer_date').value;
                var offer_time = document.getElementById('offer_time').value;
                var offer_price = document.getElementById('offer_price').value;
                var form = document.getElementById('offer_details');
                var token = $('input[name="__RequestVerificationToken"]', form).val();
                var model = {
                    __RequestVerificationToken: token,
                    TicketId: tckt_id,
                    OfferMessage: offer_details,
                    OfferRepairDate: offer_date,
                    OfferRepairTime: offer_time,
                    OfferRepairPrice: offer_price
                };
                var url = "/Workshop/CreateOffer";
                $.post(url, model, function (res) {
                    if (res.success) {
                        document.location.reload();
                    } else {
                        console.log('Error');
                    }
                });
            });
        }
        if (modal_name == 'close') {
            var tckt_id = button.closest('.ticket__item').attr('id');

            $("#closeTicketOverdue").click(function () {
                var form = document.getElementById('closeTicketForm');
                var token = $('input[name="__RequestVerificationToken"]', form).val();
                var model = {
                    __RequestVerificationToken: token,
                    TicketId: tckt_id
                };
                var url = "/Workshop/CloseTicketOverdue";
                $.post(url, model, function (res) {
                    if (res.success) {
                        document.location.reload();
                    } else {
                        console.log('Error');
                    }
                });
            });

            $("#finishRepair").click(function () {
                var repair_desc = document.getElementById('repairDesc').value;
                var form = document.getElementById('closeTicketForm');
                var token = $('input[name="__RequestVerificationToken"]', form).val();
                var model = {
                    __RequestVerificationToken: token,
                    TicketId: tckt_id,
                    RepairDescription: repair_desc
                };
                var url = "/Workshop/FinishRepair";
                $.post(url, model, function (res) {
                    if (res.success) {
                        document.location.reload();
                    } else {
                        console.log('Error');
                    }
                });
            });
        }
    }

    function closeModal() {
        state = false;
        $background.removeClass(active_class);
        $modals.removeClass(active_class);
    }

    $open_buttons.on('click', function () {
        openModal($(this).data('modal'), $(this));
    });

    $('#mainContent').on('click', '.open-modal', function () {
        openModal($(this).data('modal'), $(this));
    });

    $close_buttons.on('click', function () {
        closeModal();
    });

    if (state === false) {
        $modals.each(function () {
            var $modal = $(this);
            var modal_height = $modal.height();

            $modal.css('top', scroll_top + (viewport_height / 2) - (modal_height / 2) + 'px');
        });
    }

    $(window).scroll(function () {
        if (state === false) {
            $modals.each(function () {
                var $modal = $(this);
                var modal_height = $modal.height();

                $modal.css('top', scroll_top + (viewport_height / 2) - (modal_height / 2) + 'px');
            });
        }
    });

}

function toogleEditableBlock($button) {
    $button.closest('.editable-block').toggleClass('edit');
}

function countDown(resendTimeout, $linkBtn) {
    var resendSeconds = parseInt(resendTimeout);

    var timer;
    document.getElementById('time-count-down').innerHTML = 'Wyślij ponownie kod za ' + resendSeconds + ' sek';

    timer = setInterval(function () {
        resendSeconds--;
        if (resendSeconds < 0) {
            clearInterval(timer);
            $linkBtn.removeClass("hide");
            $("#time-count-down").addClass("hide");
            return;
        }
        document.getElementById('time-count-down').innerHTML = 'Wyślij ponownie kod za ' + resendSeconds + ' sek';
    }, 1000);
}

function createTimePicker() {
    if ($('.timepicker') !== null && $('.timepicker').length > 0) {
        $('.timepicker').timeDropper({
            format: 'H:mm',
            setCurrentTime: false
        });
    }
}

function createDatepicker() {
    if ($('.datepicker input').length > 0) {

        //var current_val_date = new Date();

        //var year = current_val_date.getFullYear();
        //var month;

        //if (current_val_date.getMonth() < 10) {
        //    month = '0' + (parseInt(current_val_date.getMonth()) + 1);
        //} else {
        //    month = parseInt(current_val_date.getMonth()) + 1;
        //}

        //var day = current_val_date.getDate();

        //var current_val_date_text = month + '/' + day + '/' + year;

        $('.datepicker input').each(function () {

            if ($(this).val() === '') {
                //$(this).val(current_val_date_text);
            }

            $(this).datepicker({minDate: 0});
        });
    }
}

function showForm(id) {
    var $forms = $('.modern-form__inner');
    var active_class = 'active';

    $forms.removeClass(active_class);
    $(id).addClass(active_class);
}

function showFormCustom(id, privId, title, message, tryAgain, redirectUrl, buttonTxt) {
    var $forms = $('.modern-form__inner');
    var active_class = 'active';

    $forms.removeClass(active_class);

    var $title = $(id).find(".modern-form__info-title");
    $title.text(title);

    var $message = $(id).find(".modern-form__info-text");
    $message.text(message);

    var $butt = $(id).find(".modern-form__natural-button");
    $butt.text(buttonTxt);

    if (tryAgain) {
        $butt.on("click", function () {
            showForm(privId);
        });
    } else {
        $butt.on("click", function () {
            window.location.href = redirectUrl;
        });
    }

    $(id).addClass(active_class);
}