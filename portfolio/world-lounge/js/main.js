var device;
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

if (device === 'iphone' || device === 'ipad') {
    document.getElementsByTagName("body")[0].setAttribute("class", "apple-device touch-device");
    touch = true;
    apple = true;
} else if (device === 'android') {
    document.getElementsByTagName("body")[0].setAttribute("class", "touch-device");
    touch = true;
} else if (device === 'macintosh') {
    apple = true;
    document.getElementsByTagName("body")[0].setAttribute("class", "apple-device");
}


var $body;
var viewport_height;
var viewport_width;
var scroll_top;
var scroll_down;
var scroll_counter;
var mobile_width;


$(document).ready(function () {

    $body = $('html, body');
    viewport_height = $(window).height();
    viewport_width = $(window).width();
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 1024;

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
        // header_scroll();
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
        viewport_width = $(window).width();
    });

    // header_scroll();

    function header_scroll() {

        if (scroll_top >= ($('.third').offset().top - $('.third').height())) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--hide');
                $('.header__empty').addClass('active');
                $('.scroll-top').addClass('active');

                setTimeout(function () {
                    $('.header').addClass('header--scroll');
                    $('.header').removeClass('header--hide');
                }, 5);
            }
        } else {
            $('.header').removeClass('header--scroll');
            $('.header__empty').removeClass('active');
            $('.scroll-top').removeClass('active');
        }
    }


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


    // Функция фильтрации
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


    // Функция модальных окон
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

        function openModal(modal_name) {
            state = true;
            var $modal = $('div[data-modal-name="' + modal_name + '"]');
            $background.addClass(active_class);
            $modals.removeClass(active_class);
            $modal.addClass(active_class);
        }

        function closeModal() {
            state = false;
            $background.removeClass(active_class);
            $modals.removeClass(active_class);
        }

        $open_buttons.on('click', function () {
            openModal($(this).data('modal'));
        });

        $close_buttons.on('click', function () {
            closeModal();
        });

        $(window).scroll(function () {
            if (state === false) {
                $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');
            }
        });

    }

    if ($('.modal__background').length > 0 && $('.modal__block').length > 0) {
        var modals = new modalToggle();
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


    // Функция стилизованного селекта
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


        });
    }


    // Функция проверки форм

    var required_message = 'Обязательное поле';
    var warning_class = 'warning';
    var warning_block = '<div class="' + warning_class + '"></div>';

    // Создание ассоциативного массива форм
    var validate_forms = new Map();

    if ($('.form-check').length > 0) {

        for (var i = 0; i < $('.form-check').length; i++) {
            var $form = $($('.form-check')[i]);
            var func = new formValidate($form);
            var name;

            if ($form.attr('id')) {
                name = $form.attr('id');
            } else {
                name = 'form_' + i;
            }

            validate_forms.set(name, func);
        }
    }

    // Функции валидации формы
    function formValidate($form, listening_changes) {
        if (!listening_changes) {
            listening_changes = true;
        }

        var $form_fields = $form.find('.form-check__field');

        this.validate_with_error = function () {
            handlerFields(true);
        };

        this.validate_without_error = function () {
            handlerFields(false);
        };

        this.refresh = function () {
            createFieldsArray();
            runChangeInputListening();
        };

        this.handler_false = function () {
            formValidateHandler($form, false);
        };

        this.handler_true = function () {
            formValidateHandler($form, true);
        };

        var fields = [];

        function createFieldsArray() {
            $form_fields = $form.find('.form-check__field');
            fields = [];

            for (var i = 0; i < $form_fields.length; i++) {
                var $field = $($form_fields[i]);
                var input_type = $field.data('check-type');
                var $input = $field.find(input_type);
                var checks = $field.data('check').split(', ');
                fields.push([checks, $input, $field]);
            }
        }

        createFieldsArray();

        for (var k = 0; k < fields.length; k++) {
            if (fields[k][2].find('.' + warning_class).length === 0) {
                $(warning_block).appendTo(fields[k][2]);
            }

            createWarningBlocks(fields[k][2]);
        }

        function handlerFields(show_error) {
            var validates = [];
            var validate = true;

            for (var k = 0; k < fields.length; k++) {
                validates.push(validateField(fields[k][0], fields[k][1], fields[k][2], show_error));
            }

            for (var l = 0; l < validates.length; l++) {
                if (validates[l] === false) {
                    validate = false;
                }
            }

            formValidateHandler($form, validate);
        }

        function runChangeInputListening() {
            if (listening_changes) {
                for (var i = 0; i < fields.length; i++) {
                    changeInputListening(fields[i][0], fields[i][1], fields[i][2]);
                }
            }
        }

        runChangeInputListening();

        function changeInputListening(checks, $input, $wrapper) {
            $input.change(function () {
                validateField(checks, $input, $wrapper, true);
                handlerFields(false);
            });
        }

        formValidateHandler($form, handlerFields(false));
    }

    function formValidateHandler($form, validate) {
        var $button = $form.find('.form-check__button');

        if (validate === true) {
            $button.removeClass('disabled');
        } else {
            $button.addClass('disabled');
        }
    }

    // Функции валидации поля
    function validateField(checks, $input, $wrapper, show_error) {
        var validates_result = [];
        var messages = [];

        var validate = true;

        for (var k = 0; k < checks.length; k++) {
            var check = checks[k];

            if (check === 'select-required') {
                validates_result.push(validateRequiredSelect($input));
            } else if (check === 'input-required') {
                validates_result.push(validateRequiredInput($input));
            } else if (check === 'checkbox-required') {
                validates_result.push(validateRequiredCheckbox($input));
            } else if (check === 'radio-required') {
                validates_result.push(validateRequiredRadio($input));
            }
        }

        for (var i = 0; i < validates_result.length; i++) {

            if (validates_result[i][0] === false) {
                validate = false;
            }

            if (validates_result[i][1]) {
                messages.push([validates_result[i][1], validates_result[i][2]]);
            }
        }

        if (show_error === true && messages.length > 0) {

            var priority = 0;
            var message;

            for (var n = 0; n < messages.length; n++) {

                if (validates_result[n][2] > priority) {
                    priority = validates_result[n][2];
                    message = validates_result[n][1];
                }
            }

            showWarning(message, $wrapper);
        }

        if (validate === true) {
            hideWarning($wrapper);
        }


        return validate;

    }

    // Проверка обязательного селекта
    function validateRequiredSelect($input) {
        var val = $input.val();
        var validate = true;
        var message;
        var priority = 100;

        if (val === 'option-placeholder') {
            validate = false;
            message = required_message;
        } else {
            validate = true;
            message = undefined;
        }

        return [validate, message, priority];
    }

    // Проверка обязательного инпута
    function validateRequiredInput($input) {
        var val = $input.val();
        var validate = true;
        var message;
        var priority = 100;

        if (val === '') {
            validate = false;
            message = required_message;
        } else {
            validate = true;
            message = undefined;
        }

        return [validate, message, priority];
    }

    // Проверка обязательного чекбокса
    function validateRequiredCheckbox($input) {
        var val = $input.prop('checked');
        var validate = true;
        var message;
        var priority = 100;

        if (val === false) {
            validate = false;
            message = 'Поставьте галочку';
        } else {
            validate = true;
            message = undefined;
        }

        return [validate, message, priority];
    }

    // Проверка обязательного радиобаттона
    function validateRequiredRadio($input) {
        var validate = false;
        var message;
        var priority = 100;

        for (var i = 0; i < $input.length; i++) {
            if ($input.eq(i).prop('checked') === true) {
                validate = true;
            }
        }

        if (validate === false) {
            message = 'Выберите значение';
        } else {
            message = undefined;
        }

        return [validate, message, priority];
    }

    // Функция показа предупреждения
    function showWarning(message, $wrapper) {
        if (!message) {
            message = required_message;
        }

        createWarningBlocks($wrapper);
        $wrapper.find('.' + warning_class).text(message);
        $wrapper.find('.' + warning_class).addClass('active');
    }

    // Функция подстановки фокуса
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

    // Функция скрытия предупреждения
    function hideWarning($wrapper) {
        if ($wrapper.find('.' + warning_class).length > 0) {
            $wrapper.find('.' + warning_class).removeClass('active');
        }
    };

    // Функция создания оберток предупреждения
    function createWarningBlocks($wrapper) {
        if ($wrapper.find('.' + warning_class).length === 0) {
            $(warning_block).appendTo($wrapper);
        }
    };

    // Функция создания оберток внешних плэйсхолдеров
    $('[data-placeholder]').each(function () {
        var text = $(this).data('placeholder');
        var placeholder_block = '<div class="placeholder__block">' + text + '</div>';
        $(this).addClass('placeholder');
        $(placeholder_block).appendTo($(this));
    });


    $('input[name="phone"]').mask('+7 (000) 000-0000');

    $(document).on('click', function (e) {
        var $elem = $(e.target);
        var $form = $('.modal__content--lead');

        if ($elem.hasClass('third__table-cell-button')) {
            var type_cover = $elem.closest('.third__table-col').find('.third__table-cell').eq(0).text();
            var form_name = $elem.data('form-name');
            $form.find('input[name="modal_form_name"]').val(form_name);
            $form.find('input[name="modal_type_cover"]').val(type_cover);
            $form.find('input[name="modal_form_name"]').val('3 варианта авточехлов под разные бюджеты');
            modals.open('modal_lead');
        } else if ($elem.hasClass('modal-form-name-button')) {
            var form_name = $elem.data('form-name');
            $form.find('input[name="modal_form_name"]').val(form_name);
            modals.open('modal_lead');
        }
    });


    $(".modal__form-button").on('click', function () {
        var $form = $('.modal__content--lead');
        var answers = '';

        if ($(this).hasClass('disabled') !== true) {

            if ($form.find('input[name="phone"]').val().length > 0) {
                answers = answers + '<br> Телефон' + $form.find('input[name="phone"]').val() + ' <br>';
            }

            if ($form.find('input[name="modal_form_name"]').val().length > 0) {
                answers = answers + '<br>Название формы: ' + $form.find('input[name="modal_form_name"]').val() + ' <br>';
            }

            if ($form.find('input[name="modal_calc_price"]').val().length > 0) {
                answers = answers + '<br>Цена в калькуляторе: ' + $form.find('input[name="modal_calc_price"]').val() + ' <br>';
            }

            if ($form.find('input[name="modal_calc_desc"]').val().length > 0) {
                answers = answers + '<br>Данные в калькуляторе: ' + $form.find('input[name="modal_calc_desc"]').val() + ' <br>';
            }

            if ($form.find('input[name="modal_type_cover"]').val().length > 0) {
                answers = answers + '<br>Вариант авточехла: ' + $form.find('input[name="modal_type_cover"]').val() + ' <br>';
            }

            $form.find('input[name="answers"]').val(answers);

            // e.preventDefault();

            $.post("send.php", $form.serialize(), function (data) {

            });
            modals.open('modal_thank');
        }

    });


    $(".first__form-button").on('click', function () {
        var $form = $('.first__form');
        var answers = '';

        if ($(this).hasClass('disabled') !== true) {

            if ($form.find('input[name="phone"]').val().length > 0) {
                answers = answers + '<br> Телефон' + $form.find('input[name="phone"]').val() + ' <br>';
            }

            if ($form.find('input[name="modal_form_name"]').val().length > 0) {
                answers = answers + '<br>Название формы: ' + $form.find('input[name="modal_form_name"]').val() + ' <br>';
            }

            if ($form.find('input[name="auto"]').val().length > 0) {
                answers = answers + '<br>Автомобиль: ' + $form.find('input[name="auto"]').val() + ' <br>';
            }

            $form.find('input[name="answers"]').val(answers);

            $.post("send.php", $form.serialize(), function (data) {

            });
            modals.open('modal_thank');
        }

    });


    $('.animation-scroll').click(function (e) {
        if ($(window).width() < 1280) {
            e.preventDefault();
            menu.close();

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
        }
    });


    if ($('#wrapper').length > 0 && $(window).width() > 1279) {
        console.log($(window).width());
        var scrolling_speed = 1000;
        var scrolling = true;

        if ($(window).width() < 1280) {
            scrolling = false;
        }

        $('#wrapper').fullpage({
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            anchors: ['welcome', 'about', 'menu', 'place', 'contacts'],
            menu: '#header',
            scrollingSpeed: scrolling_speed,
            autoScrolling: scrolling,

            onLeave: function () {
                setTimeout(function () {
                    if ($('.section.active').data('anchor') === 'welcome') {
                        $('.video-section__background-video')[0].play();
                    }
                }, scrolling_speed);
            }
        });

    }


    if ($(window).width() > 1279) {
        var $video_section = $('.video-section');
        var video_url = $video_section.data('video');
        $('<video class="video-section__background-video" muted loop><source src="' + video_url + '" type="video/mp4"></video>').prependTo($video_section);

        $('.video-section__background-video')[0].onloadeddata = function () {
            $('.video-section__background-video')[0].play();
        };
    }


    var $slider = $('.place-slider__items');

    $slider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        speed: 400,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1280: {
                items: 3
            }
        }


    });

    $slider.on('changed.owl.carousel', function (event) {
        if ($(window).width() > 1279) {
            var currentItem = event.item.index;
            $('.place-slider__item').removeClass('active');
            $('.place-slider__item').removeClass('side-slide');
            $('.place-slider').find('.owl-item').eq(currentItem).find('.place-slider__item').addClass('side-slide');
            $('.place-slider').find('.owl-item').eq(currentItem + 1).find('.place-slider__item').addClass('active');
            $('.place-slider').find('.owl-item').eq(currentItem + 2).find('.place-slider__item').addClass('side-slide');
        }
    });

    $('input[name="phone"]').mask('+7 (999) 999-9999');



    $('input[name="date"]').each(function () {
        $(this).datepicker();
    })


    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);


    $(".form-check__button").on('click', function (e) {
        e.preventDefault();

        var $form = $(this).closest('.form-check');
        var form_id = $form.attr('id');
        var answers = '';

        if ($(this).hasClass('disabled') !== true) {

            if ($form.find('input[name="name"]').val().length > 0) {
                answers = answers + '<br>Имя: ' + $form.find('input[name="name"]').val() + ' <br>';
            }

            if ($form.find('input[name="phone"]').val().length > 0) {
                answers = answers + '<br> Телефон' + $form.find('input[name="phone"]').val() + ' <br>';
            }

            if ($form.find('input[name="date"]').val().length > 0) {
                answers = answers + '<br>Дата: ' + $form.find('input[name="date"]').val() + ' <br>';
            }

            if ($form.find('input[name="count"]').val().length > 0) {
                answers = answers + '<br>Количество человек: ' + $form.find('input[name="count"]').val() + ' <br>';
            }

            if ($form.find('input[name="email"]').val().length > 0) {
                answers = answers + '<br>Email: ' + $form.find('input[name="email"]').val() + ' <br>';
            }

            $form.find('input[name="answers"]').val(answers);

            console.log(answers);
            console.log($form.find('input[name="answers"]').val());

            $.post("send.php", $form.serialize(), function (data) {

            });

            modals.open('modal_thank');
        } else {
            validate_forms.get(form_id).validate_with_error();
        }

    });
});
