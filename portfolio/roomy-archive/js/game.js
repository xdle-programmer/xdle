let $body;
let viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
let viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
let scroll_top;
let scroll_down_direction;
let scroll_counter;
let scroll_width;
let mobile_width;
let content_top;
let banner_top;
let modals;
let modal_state = false;


// Проверка пустых полей. Переменная для функции создания.
var empty_input_create = null;

// Проверка пустых полей. Переменная для массива функций.
var empty_input = null;

// вычисление ширины скролла
function getScrollWidth() {
// создадим элемент с прокруткой
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    scroll_width = div.offsetWidth - div.clientWidth;
    div.remove();
}

getScrollWidth();

$(document).ready(function () {
    $body = $('body');
    $body.addClass('ready');
    viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 1280;

    $(window).resize(function () {
        viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });

    // Переключение хэдера
    toggleHeader();

    function toggleHeader() {
        let $header = $('.header');
        let scroll_class = 'scroll';
        let hidden_class = 'hidden';

        checkHeaderScroll();

        $(window).scroll(function () {


            if ($(window).scrollTop() > scroll_top) {
                scroll_top = $(window).scrollTop();
                scroll_down_direction = true;
            } else {
                scroll_top = $(window).scrollTop();
                scroll_down_direction = false;
            }


            setTimeout(function () {
                if (!$('body').hasClass('open-portfolio-modal')) {
                    checkHeaderScroll();
                }
            }, 0);
        });


        function checkHeaderScroll() {
            if (viewport_width > mobile_width) {
                if ($(window).scrollTop() > 10 && scroll_down_direction) {
                    $header.addClass(hidden_class);
                    $header.removeClass(scroll_class);
                } else if ($(window).scrollTop() > 10 && !scroll_down_direction) {
                    $header.removeClass(hidden_class);
                    $header.addClass(scroll_class);
                } else {
                    $header.removeClass(hidden_class);
                    $header.removeClass(scroll_class);
                }
            } else {
                if ($(window).scrollTop() > 10 && scroll_down_direction) {
                    $header.addClass(hidden_class);
                    $header.removeClass(scroll_class);
                } else if ($(window).scrollTop() > 10 && !scroll_down_direction) {
                    $header.removeClass(hidden_class);
                    $header.addClass(scroll_class);
                } else {
                    $header.removeClass(hidden_class);
                    $header.removeClass(scroll_class);
                }
            }
        }
    }

    // Меню в хэдере
    var header_menu = new Menu('.header__toggle-button', '.first-screen__content-menu');

    var header_account = new Menu('.header__profile-menu-button', '.header__profile-menu');

    // var filter_add = new Menu('.catalog-filter__button-add', '.catalog-filter__additional');

    // Функция меню
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

            $(document).trigger('change_menu');
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

            $(document).trigger('change_menu');
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

    $('.animation-scroll').on('click', function () {
        var goal = $(this).data('scroll-goal');
        page_scroll();

        function page_scroll() {
            var header_height = $('.header').height();

            $('html, body').animate({
                scrollTop: ($(goal).offset().top) - header_height
            }, 500);
        }
    });

    // Модальные окна. Функция создания объектов для модальных окон
    modals = new modalToggle();

    // Модальные окна. Функция открытия/закрытия
    function modalToggle() {
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
            return modal_state;
        };

        $('*').off('click.modals_buttons');

        $open_buttons.on('click.modals_buttons', function () {
            openModal($(this).data('modal'), $(this));
        });

        function openModal(modal_name, button) {

            $body.addClass('opened-modal');

            modal_state = true;
            var $modal = $(modal_name);
            $close_buttons.off('click.modals_buttons');

            $close_buttons.on('click.modals_buttons', function (e) {
                closeModal();
            });

            $background.addClass(active_class);
            $modals.removeClass(active_class);
            $modal.addClass(active_class);
        }

        function closeModal() {

            $body.removeClass('opened-modal');

            $(document).trigger('stop_youtube');
            modal_state = false;
            $background.removeClass(active_class);
            $background.addClass('close-modal');
            $close_buttons = $('.close-modal');
            $modals.removeClass(active_class);
            $close_buttons.off('click.modals_buttons');

            $close_buttons.on('click.modals_buttons', function (e) {
                closeModal();
            });

        }
    }

    // Функция стилизованного селекта
    if ($('.select').length > 0) {
        $('.select').each(function () {
            var $select = $(this);
            var class_name = 'select';
            let ui_selectmenu_button_open = class_name + "__button " + class_name + "__button--open";
            let ui_selectmenu_button_closed = class_name + "__button";
            let ui_selectmenu_icon = class_name + "__icon";
            let ui_selectmenu_text = class_name + "__text";
            let ui_selectmenu_menu = class_name + "__menu";

            if ($select.data('class-modify')) {
                let class_modify = $select.data('class-modify');
                ui_selectmenu_menu = class_name + "__menu " + class_name + "__menu" + class_modify;
            }

            checkDefault($select);

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
                    "ui-selectmenu-button-open": ui_selectmenu_button_open,
                    "ui-selectmenu-button-closed": ui_selectmenu_button_closed,
                    "ui-selectmenu-icon": ui_selectmenu_icon,
                    "ui-selectmenu-text": ui_selectmenu_text,
                    "ui-selectmenu-menu": ui_selectmenu_menu
                },
                create: function (event, ui) {
                    inputListening($(event.target));
                    placeholderCheck($(event.target).selectmenu("widget"), $(event.target).val());
                },
                focus: function (event, ui) {
                },
                open: function (event, ui) {

                },
                close: function (event, ui) {

                },
                change: function (event, ui) {
                    placeholderCheck($(event.target).selectmenu("widget"), $(event.target).val());
                    $(event.target).trigger('change');
                    checkDefault($select);
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


        });
    }


    // Функция кастомного мультиселекта
    if ($('.multi-select').length > 0) {
        $('.multi-select').each(function () {
            createMultiSelect($(this));
        });
    }


    $('.object-prop__item').on('click', function () {
        $(this).toggleClass('active');
    });

    let slider = $(".about-mobile-app__slider-block");
    let scrollCount = null;
    let scroll = null;

    slider.slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        arrows: false,
        vertical: true
    });

    $('.about-mobile-app__slider').on('mousewheel', (function (e) {
        e.preventDefault();

        clearTimeout(scroll);
        scroll = setTimeout(function () {
            scrollCount = 0;
        }, 200);
        if (scrollCount) return 0;
        scrollCount = 1;

        if (e.originalEvent.deltaY < 0) {
            slider.slick('slickPrev');
        } else {
            slider.slick('slickNext');
        }
    }));

    // Проверка пустых полей. Переменная объекта функции создания.
    empty_input_create = new checkEmptyInputCreate();

    $('.dropdown-circle__button').on('click', function () {
        let $dropdown = $(this).closest('.dropdown-circle');
        // $dropdown.removeClass('active');
        // $dropdown.toggleClass('active');

        if ($dropdown.hasClass('active')) {
            $('.dropdown-circle').removeClass('active');
        } else {
            $('.dropdown-circle').removeClass('active');
            $dropdown.addClass('active');
        }


        $(document).on('click', function (e) {
            if ($(e.target).hasClass('dropdown-circle') || $(e.target).closest('.dropdown-circle').length > 0) {
            } else {
                $dropdown.removeClass('active');
            }
        });

        $(document).on('scroll', function (e) {
            $('.dropdown-circle').removeClass('active');
        });
    });

    // Переключалки пароля.

    togglePassword();

    function togglePassword() {
        var $toggle_button = $('.password-toggle__button');

        $('*').off('click.toggle_password');

        $toggle_button.on('click.toggle_password', function () {
            var $button = $(this);
            var $wrapper = $button.closest('.password-toggle');
            var $input = $wrapper.find('.password-toggle__input');
            var type = $input.prop('type');

            if (type === 'password') {
                showPassword($wrapper);
            } else {
                hidePassword($wrapper);
            }
        });
    }


    $('.switch-tab__button').on('click', function () {
        if ($(this).hasClass('active') === false) {
            let $target = $('[data-switch-tab-name="' + $(this).data('switch-tab-target') + '"]');
            $('.switch-tab__item').removeClass('active');
            $('.switch-tab__button').removeClass('active');
            $(this).addClass('active');
            $target.addClass('active');
        }


    });

    $('.switch-layout__button').on('click', function () {
        if ($(this).hasClass('disabled') === false) {
            let $target = $('[data-switch-layout-name="' + $(this).data('switch-layout-target') + '"]');
            $('.switch-layout__item').removeClass('active');
            $target.addClass('active');
        }
    });


    $('.sms-start').on('click', function () {
        let $target = $('[data-switch-sms-name="' + $(this).data('sms-start-target') + '"]');
        handlerSms($target);
    });


    $('.modal__type-switch-button').on('click', function () {
        if ($(this).hasClass('active') === false) {
            $(this).closest('.modal__type-switch').find('.modal__type-switch-button').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.success-signup-button').on('click', function () {
        modals.open('#modal_login_success');

        setTimeout(function () {
            modals.close();
        }, 3500);


    });

    $('.role-switch__item').on('click', function () {
        $('.role-switch__item').removeClass('active');
        $(this).addClass('active');
    });

    $('#test').on('click', function () {
        $('.side-menu').toggleClass('side-menu--hide');
    });

    $('#test').on('click', function () {
        $('.side-menu').toggleClass('side-menu--hide');
    });

    // Переключение боковой панели
    toggleSideMenu();

    function toggleSideMenu() {
        let $side_menu = $('.side-menu');
        let hide_class = 'side-menu--hide';

        if (viewport_width < mobile_width) {

        } else {
            $side_menu.on('mouseenter', function () {
                $side_menu.removeClass(hide_class);
            });
            $side_menu.on('mouseleave', function () {
                $side_menu.addClass(hide_class);
            });
        }
    }

    // Функция селекта с автокомплитом
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
        }
    });

    if ($('.select-autocomplete').length > 0) {
        $('.select-autocomplete').each(function () {
            $(this).find('select').combobox();
        });
    }

    // Функция инпута с автокомплитом
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

    $('.input-autocomplete__button-clear').on('click', function () {
        let $wrapper = $(this).closest('.input-autocomplete');
        let $input = $wrapper.find('input');
        $input.val('');
        $input.trigger('change');
    });


    $('.catalog-filter__additional-item-input--two select').on('change', function () {
        let $wrapper = $(this).closest('.catalog-filter__additional-item-input');
        let $selects = $wrapper.find('.select');
        let empty = true;

        setTimeout(function () {
            $selects.each(function () {
                if ($(this).hasClass('not-empty')) {
                    empty = false;
                }
            });

            if (empty) {
                $wrapper.removeClass('not-empty');
            } else {
                $wrapper.addClass('not-empty');
            }
        });
    });

    $('.catalog-filter__additional-item-input-clear').on('click', function () {
        let $wrapper = $(this).closest('.catalog-filter__additional-item-input');
        let $selects = $wrapper.find('select');

        $selects.each(function () {
            $(this).val('option-placeholder');
            $(this).selectmenu('refresh');
            checkDefault($(this).closest('.select'));
            $wrapper.removeClass('not-empty');
        });
    });


});

// Проверка пустых полей. Функция создания
function checkEmptyInputCreate() {
    empty_input = null;
    empty_input = new Map();

    for (var i = 0; i < $('input, textarea, select[multiple]').length; i++) {
        var $input = $($('input, textarea, select[multiple]')[i]);
        var func = new checkEmptyInput($input);
        var name;

        if ($input.attr('id')) {
            name = $input.attr('id');
        } else {
            name = 'input_' + i;
        }

        empty_input.set(name, func);
    }
}

// Проверка пустых полей. Функция добавления класса
function checkEmptyInput($input) {
    var not_empty_class = 'not-empty';
    var empty_class = 'empty';
    var $placeholder;
    var $placeholder_item;

    function checkVal($input) {

        $placeholder = $input.closest('.placeholder');
        $placeholder_item = $placeholder.find('.placeholder__item');
        let multi = false;

        if ($placeholder.hasClass('multi-select')) {
            multi = true;
        }

        if (multi) {
            let $inputs = $placeholder.find('input');

            let is_empty = true;

            for (let i = 0; i < $inputs.length; i++) {
                if ($inputs.eq(i).prop('checked') === true) {
                    is_empty = false;
                }
            }

            if (is_empty) {
                $placeholder.removeClass(not_empty_class);
                $placeholder.addClass(empty_class);
            } else {
                $placeholder.addClass(not_empty_class);
                $placeholder.removeClass(empty_class);
            }

        } else {
            if ($input.val().length > 0) {
                $placeholder.addClass(not_empty_class);
                $placeholder.removeClass(empty_class);
            } else {
                $placeholder.removeClass(not_empty_class);
                $placeholder.addClass(empty_class);
            }
        }


    }

    checkVal($input);

    this.check_empty = function ($input) {
        checkVal($input);
    };


    $input.off('input.check_empty');

    $input.on('input.check_empty', function () {
        checkVal($input);
    });

    $input.off('change.check_empty');

    $input.on('change.check_empty', function () {
        checkVal($input);
    });
}

// Функция обработки плэйсхолдера селекта
function checkDefault($select) {

    let val = $select.find('select').val();

    if (val === 'option-placeholder') {
        $select.removeClass('not-default');
        $select.addClass('default');
        $select.closest('.placeholder').removeClass('not-empty');
        $select.closest('.placeholder').addClass('empty');
    } else {
        $select.closest('.placeholder').addClass('not-empty');
        $select.closest('.placeholder').removeClass('empty');
        $select.addClass('not-default');
        $select.removeClass('default');
    }
}

function showPassword($wrapper) {
    var $input = $wrapper.find('.password-toggle__input');
    var $button = $wrapper.find('.password-toggle__button');
    var show_class = 'active';
    $input.prop('type', 'text');
    $button.addClass(show_class);
}

function hidePassword($wrapper) {
    var $input = $wrapper.find('.password-toggle__input');
    var $button = $wrapper.find('.password-toggle__button');
    var show_class = 'active';
    $input.prop('type', 'password');
    $button.removeClass(show_class);
}

function handlerSms($block) {
    let $wrapper = $block.find('.sms-input__wrapper');
    let $confirm_button = $block.find('.sms-input__submit--confirm');
    let $login_button = $block.find('.sms-input__submit--login');
    let $counter_button = $block.find('.sms-input__counter');
    let $input_result = $block.find('.sms-input__input-result');
    let $pseudo_inputs = $block.find('.sms-input__input-code');
    let focus_class = 'focus';
    let $resend_button = $block.find('.sms-input__counter-button');
    let $resend_counter = $block.find('.sms-input__counter-item');
    let wait_text = 'Повторно отправить sms через';
    let active_text = 'Повторно отправить sms';
    let active_class = 'active';
    let hide_class = 'hide';
    let counter_active = false;


    $counter_button.on('click', function () {
        if ($(this).find('.sms-input__counter-button').hasClass('active') === true) {
            setCounter(10);
            $login_button.addClass(hide_class);
            $confirm_button.removeClass(hide_class);
            $wrapper.removeClass(hide_class);
        }
    });

    setCounter(10);

    function setCounter(limit) {
        let current_second = limit;


        function setButtonState(current_second) {
            if (current_second === 0) {
                $resend_counter.text('');
                $resend_button.text(active_text);
                $resend_button.addClass(active_class);
                counter_active = false;
            } else {
                $resend_counter.text(current_second + ' секунд');
                $resend_button.text(wait_text);
                $resend_button.removeClass(active_class);
                current_second -= 1;
                counter_active = true;
                setTimeout(function () {
                    setButtonState(current_second);
                }, 1000);
            }
        }

        setButtonState(current_second);

    }

    this.set_counter = function (limit) {
        if (!counter_active) {
            setCounter(limit);
        }

    };

    $input_result.on('input', function (e) {
        submitAfterSms($(this));
    });

    $input_result.on('change', function (e) {
        submitAfterSms($(this));
    });

    $input_result.on('focusin', function () {
        submitAfterSms($(this));
    });

    $input_result.on('focusout', function () {
        $pseudo_inputs.removeClass(focus_class);
    });

    function setFocus(count) {
        $pseudo_inputs.eq(0).addClass(focus_class);

        for (let i = 0; i < count; i++) {
            $pseudo_inputs.eq(i).addClass(focus_class);
        }

    }

    function submitAfterSms($input) {
        var val = $input.val();
        setFocus(val.length);


        if (val.length >= 5) {
            let res = val.slice(0, 5);
            $input.val(res);
            // submit!
        }
    }


}

function createMultiSelect($select) {
    let select_class = 'multi-select';
    let $inputs = $select.find('.multi-select__list-item-input');
    let $val = $select.find('.multi-select__button-value');
    let clear_class = 'multi-select__button-clear';
    let $clear_button = $select.find('.' + clear_class);
    let $toggle_button = $select.find('.multi-select__button');
    let active_class = 'active';
    let open_class = 'open';

    $inputs.on('change', function () {
        let values = [];

        for (let i = 0; i < $inputs.length; i++) {
            if ($inputs.eq(i).prop('checked') === true) {
                values.push($inputs.eq(i).val());
            }
        }

        if (values.length > 0) {
            $val.text(values.join(', '));
            $val.addClass(active_class);
            $clear_button.addClass(active_class);
        } else {
            $val.text('');
            $val.removeClass(active_class);
            $clear_button.removeClass(active_class);
        }

    });

    $clear_button.on('click', function () {
        for (let i = 0; i < $inputs.length; i++) {
            $inputs.eq(i).prop('checked', false);
            $inputs.eq(i).trigger('change');
        }

        $val.text('');
        $val.removeClass(active_class);
    });

    $toggle_button.on('click', function (e) {
        if (!$(e.target).hasClass(clear_class)) {
            if ($select.hasClass(open_class)) {
                $('.' + select_class).removeClass(open_class);
            } else {
                $('.' + select_class).removeClass(open_class);
                $select.addClass(open_class);
            }

            $(document).on('click', function (e) {
                if ($(e.target).hasClass(select_class) || $(e.target).closest('.' + select_class).length > 0) {

                } else {
                    $select.removeClass(open_class);
                }
            });

            $(document).on('scroll', function (e) {
                $('.' + select_class).removeClass(open_class);
            });
        }
    });
}