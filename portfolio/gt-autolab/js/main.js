var $body;
var viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
var viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
var mobile_width;
var scroll_top;
var formCheckHandlerCreateObj = null;
var formCheckHandlerObj = null;
var required_message = 'Please complete this field';
var warning_class = 'warning';
var warning_block = '<div class="' + warning_class + '"></div>';
var modals;
var modal_state = false;
var result = {
    personal_information: [],
    employment: [],
    co_app_info: [],
    co_employment: [],
    review: [],
    submit: []
};


$(document).ready(function () {

    $body = $('html, body');
    viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    scroll_top = $(window).scrollTop();
    mobile_width = 1280;

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();

        scrollHeader();
    });

    // Correct scroll header
    function scrollHeader() {
        var toggle_position = 170;
        var scroll_class = 'scroll';
        var $header = $('.tabs__header');

        if (scroll_top < toggle_position) {
            $header.removeClass(scroll_class);
        } else {
            $header.addClass(scroll_class);
        }
    }

    scrollHeader();

    // Plugin select
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
                },
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

    // Plugin form-check function
    formCheckHandlerCreateObj = new formCheckHandlerCreate();

    // Correct birthday limits
    function pluginDatepicker() {
        $('.datepicker-input').each(function () {
            var start_year_def = new Date().getFullYear() - 16;
            var start_month_def = new Date().getMonth();
            var start_day_def = new Date().getDate();
            var start_date_def = new Date(start_year_def, start_month_def, start_day_def);

            if ($(this).hasClass('datepicker-input--birthday') !== true) {
                $(this).datepicker({
                    language: 'en',
                    dateFormat: 'mm/dd/yyyy'
                });
            } else {
                $(this).datepicker({
                    language: 'en',
                    startDate: start_date_def,
                    maxDate: start_date_def,
                    dateFormat: 'mm/dd/yyyy'
                });
            }

            if ($(this).hasClass('datepicker-input--sign-date') === true) {
                var current_date = new Date();
                var current_month = (current_date.getMonth() + 1);

                if (current_month < 10) {
                    current_month = '0' + current_month;
                }

                var current_day = current_date.getDate();

                if (current_day < 10) {
                    current_day = '0' + current_day;
                }

                var current_year = current_date.getFullYear();

                current_date = current_month + '/' + current_day + '/' + current_year;

                $(this).val(current_date);
            }

        });
    }

    pluginDatepicker();

    // Masks
    $('.mask--ssn').mask('000-00-0000');
    $('.datepicker-input').mask('00/00/0000');
    $('.mask--phone-number').mask('(000)-000-0000');
    $('.income').each(function (i, el) {
        new AutoNumeric(el, {
            dotDecimalCharCommaSeparator: ',',
            integerPos: 7,
            integerNeg: 1,
            currencySymbol: '$',
            negativePositiveSignPlacement: 's'
        });
    });


    // Toggle natural block
    $('.check-natural-block').on('change', function () {
        var val_date = new Date($(this).val());
        var start_year_def = new Date().getFullYear() - 3;
        var start_month_def = new Date().getMonth();
        var start_day_def = new Date().getDate();
        var start_date_def = new Date(start_year_def, start_month_def, start_day_def);
        var $natural_block = $(this).closest('.form').find('.form__natural');
        var hide_class = 'hide';
        var field_check_class = 'form-check__field';
        var $natural_fields = $natural_block.find('.form-check__field-point');
        var form_id = $(this).closest('.form-check').prop('id');


        if (val_date >= start_date_def) {
            $natural_block.removeClass(hide_class);
            $natural_fields.addClass(field_check_class);
            formCheckHandlerObj.get(form_id).refresh();
        } else {
            $natural_block.addClass(hide_class);
            $natural_fields.removeClass(field_check_class);
            formCheckHandlerObj.get(form_id).refresh();
        }

        var $tab = $(this).closest('.tabs__item');
        var $form_block = $tab.find('.tabs__item-inner-block');
        var $form_inner = $form_block.find('.tabs__item-inner');
        var height = $form_inner.innerHeight();
        $form_block.height(height);

    });

    // Toggle co-app tabs
    $('#if_co_app_checkbox').on('change', function () {
        var if_co_app = $(this).prop('checked');
        var disabled_class = 'disabled';
        var field_check_class = 'form-check__field';
        var $header_tabs = $('[data-tabs-header-name="co_app_info"], [data-tabs-header-name="co_employment"]');
        var $tabs = $('[data-tabs-name="co_app_info"], [data-tabs-name="co_employment"]');
        var $review_tabs = $('[data-col-source="co_app_info"], [data-col-source="co_employment"]');
        var $sign_tab = $('[data-cign-info="co-app"]');
        var $sign_fields = $sign_tab.find('.form-check__field-point');
        var sign_id = $sign_tab.closest('.form-check').prop('id');
        var $review_wrapper = $('.review__item');
        var review_two_col_class = 'two-col';
        var $relationship_wrapper = $('[data-name="employer_co_app_relationship"]').closest('.select');
        var employ_form_id = $(this).closest('.form-check').prop('id');


        var $button = $('#co_app_button');

        if (if_co_app === true) {
            $header_tabs.removeClass(disabled_class);
            $tabs.removeClass(disabled_class);
            $review_tabs.removeClass(disabled_class);
            $sign_tab.removeClass(disabled_class);
            $review_wrapper.removeClass(review_two_col_class);
            $button.attr('data-tabs-goal', 'co_app_info');
            $sign_fields.addClass(field_check_class);
            formCheckHandlerObj.get(sign_id).refresh();
            $relationship_wrapper.addClass(field_check_class);
            formCheckHandlerObj.get(employ_form_id).refresh();
        } else {
            $header_tabs.addClass(disabled_class);
            $tabs.addClass(disabled_class);
            $review_tabs.addClass(disabled_class);
            $sign_tab.addClass(disabled_class);
            $review_wrapper.addClass(review_two_col_class);
            $button.attr('data-tabs-goal', 'review');
            $sign_fields.removeClass(field_check_class);
            formCheckHandlerObj.get(sign_id).refresh();
            $relationship_wrapper.removeClass(field_check_class);
            hideWarning($relationship_wrapper);
            formCheckHandlerObj.get(employ_form_id).refresh();
        }
    });

    // Tabs navigate
    $('.tabs__switch').on('click', function () {
        if ($(this).hasClass('disabled') === false) {
            var goal = $(this).data('tabs-goal');
            navigateTabs(goal);
        }
    });

    $('.tabs__item-header').on('click', function () {
        var $tab = $(this).closest('.tabs__item');

        if ($tab.hasClass('active') === false && $tab.hasClass('not-ready') === false) {
            var goal = $tab.data('tabs-name');
            navigateTabs(goal);
        }
    });

    $('.tabs__header-item-name').on('click', function () {
        var $tab = $(this).closest('.tabs__header-item');
        var active_tab = $('.tabs__item.active').data('tabs-name');
        var goal = $tab.data('tabs-header-name');

        if (goal !== active_tab && $tab.hasClass('not-ready') === false) {
            navigateTabs(goal);
        }
    });

    function navigateTabs(goal) {
        var $tabs = $('.tabs__item');
        var $header_tabs = $('.tabs__header-item');
        var active_class = 'active';
        var not_ready_class = 'not-ready';
        var progress = true;

        $tabs.each(function () {
            var $tab = $(this);
            var name = $tab.data('tabs-name');

            if (name === goal) {
                openTab(name);
            } else {
                closeTab(name);
            }


        });

        $header_tabs.each(function () {
            var $header_tab = $(this);
            var name = $header_tab.data('tabs-header-name');
            var done_class = 'done';
            var not_ready_class = 'not-ready';

            if (progress === true) {
                $header_tab.addClass(done_class);
                $header_tab.removeClass(not_ready_class);
            } else {
                $header_tab.removeClass(done_class);
            }

            if (name === goal) {
                progress = false;
            }
        });
    }

    function openTab(goal) {
        var active_class = 'active';
        var not_ready_class = 'not-ready';
        var hide_class = 'hide';
        var $tab = $('.tabs__item[data-tabs-name="' + goal + '"]');
        var $form_block = $tab.find('.tabs__item-inner-block');
        var $form_inner = $form_block.find('.tabs__item-inner');
        var height = $form_inner.innerHeight();
        $form_block.height(height);
        $tab.addClass(active_class);
        $tab.removeClass(not_ready_class);
        $tab.removeClass(hide_class);
    }

    function closeTab(goal) {
        var active_class = 'active';
        var hide_class = 'hide';
        var $tab = $('.tabs__item[data-tabs-name="' + goal + '"]');
        var $form_block = $tab.find('.tabs__item-inner-block');
        $form_block.height(0);
        $tab.removeClass(active_class);
        $tab.addClass(hide_class);

    }

    // set result function
    $('.set-result').on('click', function () {
        if ($(this).hasClass('disabled') === false) {
            var current = $(this).closest('.tabs__item').data('tabs-name');
            setResult(current);
        }
    });

    function setResult(current) {

        var $inputs = $('.tabs__item[data-tabs-name="' + current + '"]').find('*[data-name]');

        var current_result = [];

        $inputs.each(function () {
            var $input = $(this);

            if ($input.val().length > 0 && $input.val() !== 'option-placeholder' && $input.closest('.form__item').find('.form__item-title').length > 0) {
                var name = $input.closest('.form__item').find('.form__item-title').text().trim();
                var val = $input.val();
                var current_result_item = {
                    name: name,
                    val: val
                };

                current_result.push(current_result_item);
            }
        });

        result[current] = current_result;

        var $review_col = $('.review__col[data-col-source="' + current + '"]').find('.review__col-values');

        $review_col.empty();

        for (var i = 0; i < current_result.length; i++) {
            var template = '<div class="review__col-value">' + current_result[i].name + ': ' + current_result[i].val + '</div>';
            $review_col.append(template);
        }


    }

    $('[data-name="type_of_residence"], [data-name="co_app_type_of_residence"]').on('change', function () {
        var $goal_input_wrapper = $('[data-name="' + $(this).data('monthly-payment') + '"]').closest('.input');
        var val = $(this).val();
        var no_monthly_payment_val_1 = 'Own Outright';
        var no_monthly_payment_val_2 = 'Live with relative';
        var form_id = $(this).closest('.form-check').prop('id');
        var form_check_class = 'form-check__field';

        if (val === no_monthly_payment_val_1 || val === no_monthly_payment_val_2) {
            $goal_input_wrapper.removeClass(form_check_class);
            hideWarning($goal_input_wrapper);
        } else {
            $goal_input_wrapper.addClass(form_check_class);
        }

        formCheckHandlerObj.get(form_id).refresh();
    });

    $('.copy-val').on('change', function () {
        var val = $(this).val();
        var $goal_input = $('[data-name="' + $(this).data('copy-val-goal') + '"]');
        $goal_input.val(val);
    });

    $('.other-income').on('change', function () {
        var val = $(this).val();
        var $goal_input_wrapper = $('[data-name="' + $(this).data('source-income-goal') + '"]').closest('.input');
        var form_id = $(this).closest('.form-check').prop('id');
        var form_check_class = 'form-check__field';

        if (val.length === 0) {
            $goal_input_wrapper.removeClass(form_check_class);
            hideWarning($goal_input_wrapper);
        } else {
            $goal_input_wrapper.addClass(form_check_class);
        }

        formCheckHandlerObj.get(form_id).refresh();
    });


    modals = new modalToggle();

    // Submit handler
    $('.form-submit').on('click', function () {
        if ($(this).hasClass('disabled') === false) {

            // here submit ajax, data in global var result

            // success:
            $('.wrapper').addClass('hide');
            modals.open('#modal_success');
        }
    });

    $('.file-upload__input').each(function () {
        var $input = $(this);
        var $label = $input.closest('.file-upload');
        var $label_hint = $label.find('.file-upload__label');
        var $names_block = $label.find('.file-upload__name-block');

        $input.on('change', function (element) {
            $names_block.empty();

            var names = [];
            for (var i = 0; i < $(this).get(0).files.length; ++i) {
                names.push($(this).get(0).files[i].name);
                var name_template = '<div class="file-upload__name">' + $(this).get(0).files[i].name + '</div>';
                $(name_template).appendTo($names_block);
            }
        });
    });
});


// Form check create
function formCheckHandlerCreate() {
    formCheckHandlerObj = null;
    formCheckHandlerObj = new Map();

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

            formCheckHandlerObj.set(name, func);
        }
    }
}

// Form check
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

    this.hide_error = function () {
        for (var i = 0; i < $form_fields.length; i++) {
            hideWarning($($form_fields[i]));
        }
    };

    this.refresh = function () {
        createFieldsArray();
        runChangeInputListening();
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

            var field = {
                checks: checks,
                input: $input,
                field: $field,
            };

            fields.push(field);
        }
    }

    createFieldsArray();

    // Create warning wrapper

    for (var k = 0; k < fields.length; k++) {
        if (fields[k].field.find('.' + warning_class).length === 0) {
            $(warning_block).appendTo(fields[k].field);
        }

        createWarningBlocks(fields[k].field);
    }


    function handlerFields(show_error) {
        var validates = [];
        var validate = true;

        for (var k = 0; k < fields.length; k++) {
            validates.push(validateField(fields[k].checks, fields[k].input, fields[k].field, show_error));
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
                changeInputListening(fields[i].checks, fields[i].input, fields[i].field);
            }
        }
    }

    runChangeInputListening();

    function changeInputListening(checks, $input, $wrapper) {
        $input.off('change.form-check');

        $input.off('input.form-check');

        $input.on('change.form-check', function () {
            validateField(checks, $input, $wrapper, true);
            handlerFields(false);
        });

        $input.on('input.form-check', function () {
            validateField(checks, $input, $wrapper, false);
            handlerFields(false);
        });
    }

    formValidateHandler($form, handlerFields(false));

    var $button = $form.find('.form-check__button');

    $button.off('click.form-check-button');

    $button.on('click.form-check-button', function (e) {


        var $click_button = $(this);
        var $form = $click_button.closest('.form-check');

        if ($form.find('.password-toggle').length > 0) {
            $form.find('.password-toggle').each(function () {
                hidePassword($(this));
            });
        }

        var form_id = $form.prop('id');

        // formCheckHandlerObj.get(form_id).validate_with_error();

        if ($(this).hasClass('code-show') === true) {

            let $phone = $form.find('[name="phone"]');

            if (validatePhoneLenght($phone)[0] === true) {
                if ($form.find('.code').hasClass('hide') === true) {
                    for (var i = 0; i < $form_fields.length; i++) {
                        hideWarning($($form_fields[i]));
                    }
                    $form.find('.code').removeClass('hide');
                } else {
                    formCheckHandlerObj.get(form_id).validate_with_error(form_id);
                }
            } else {
                formCheckHandlerObj.get(form_id).validate_with_error(form_id);
            }
        } else {
            formCheckHandlerObj.get(form_id).validate_with_error();
        }


        if ($click_button.hasClass('disabled')) {

        } else {

        }
    });
}

function formValidateHandler($form, validate) {

    var $button = $form.find('.form-check__button');

    if (validate === true) {
        $button.removeClass('disabled');
    } else {
        $button.addClass('disabled');
    }
}

// Field validate
function validateField(checks, $input, $wrapper, show_error) {
    var validates_result = [];
    var messages = [];

    var validate = true;

    for (var k = 0; k < checks.length; k++) {
        let check = checks[k];

        if (check === 'select-required') {
            validates_result.push(validateRequiredSelect($input));
        } else if (check === 'input-required') {
            validates_result.push(validateRequiredInput($input));
        } else if (check === 'checkbox-required') {
            validates_result.push(validateRequiredCheckbox($input));
        } else if (check === 'email-check') {
            validates_result.push(validateFormEmail($input));
        } else if (check === 'birthday-check') {
            validates_result.push(validateBirthday($input));
        }

    }

    for (var i = 0; i < validates_result.length; i++) {


        if (validates_result[i][0] === false) {
            validate = false;
            messages.push([validates_result[i][1], validates_result[i][2]]);
        }
    }

    if (show_error === true && messages.length > 0) {

        var priority = 0;
        var message;

        for (var n = 0; n < messages.length; n++) {

            if (messages[n][1] > priority) {
                priority = messages[n][1];
                message = messages[n][0];
            }
        }

        showWarning(message, $wrapper);
    }

    if (validate === true) {
        hideWarning($wrapper);
    }

    return validate;
}

// Validate select
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

// Validate input
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

// Validate email
function validateFormEmail($input) {
    var val = $input.val();
    var validate = true;
    var priority = 100;
    var message = 'Incorrect email';
    var regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (val.length > 0) {
        var match = val.toString().match(regExp);
    }

    if (match || val.length === 0) {
        validate = true;
        message = undefined;
    } else {
        validate = false;
    }

    return [validate, message, priority];
}

// Validate checkbox
function validateRequiredCheckbox($input) {
    var val = $input.prop('checked');
    var validate = true;
    var message;
    var priority = 100;

    if (val === false) {
        validate = false;
        message = 'Please check';
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];
}

// Validate birthday
function validateBirthday($input) {
    var val_date = new Date($input.val());
    var validate = true;
    var message;
    var priority = 1000;
    var start_year_def = new Date().getFullYear() - 16;
    var start_month_def = new Date().getMonth();
    var start_day_def = new Date().getDate();
    var start_date_def = new Date(start_year_def, start_month_def, start_day_def);

    if (val_date > start_date_def) {
        validate = false;
        message = 'Minimum age required to apply is 16 years old';
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];
}

// Create warning wrapper
function createWarningBlocks($wrapper) {
    if ($wrapper.find('.' + warning_class).length === 0) {
        $(warning_block).appendTo($wrapper);
    }
};

// Show warning function
function showWarning(message, $wrapper) {
    if (!message) {
        message = required_message;
    }

    createWarningBlocks($wrapper);
    $wrapper.find('.' + warning_class).text(message);
    $wrapper.find('.' + warning_class).addClass('active');
    $wrapper.addClass('error');
}

// Hide warning function
function hideWarning($wrapper) {
    if ($wrapper.find('.' + warning_class).length > 0) {
        $wrapper.find('.' + warning_class).removeClass('active');
    }
    $wrapper.removeClass('error');
};

// Modals
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

    this.set_scroll = function () {
        setModalScroll();
    };

    $('*').off('click.modals_buttons');

    $open_buttons.on('click.modals_buttons', function () {
        openModal($(this).data('modal'), $(this));
    });

    function openModal(modal_name, button) {
        setModalScroll();

        modal_state = true;
        var $modal = $(modal_name);
        $close_buttons.off('click.modals_buttons');

        if ($modal.hasClass('no-close')) {
            $background.removeClass('close-modal');
            $close_buttons = $('.close-modal');
        } else {
            $background.addClass('close-modal');
            $close_buttons = $('.close-modal');
        }

        $close_buttons.on('click.modals_buttons', function (e) {
            closeModal();
        });

        $background.addClass(active_class);
        $modals.removeClass(active_class);
        $modal.addClass(active_class);
    }

    function closeModal() {
        modal_state = false;
        $background.removeClass(active_class);
        $background.addClass('close-modal');
        $close_buttons = $('.close-modal');
        $modals.removeClass(active_class);
        setModalScroll();

        $close_buttons.off('click.modals_buttons');

        $close_buttons.on('click.modals_buttons', function (e) {
            closeModal();
        });
    }

    if (modal_state === false) {
        setModalScroll();
    }

    $(window).off('scroll.modals_scroll');

    function setModalScroll() {
        for (i = 0; i < $modals.length; i++) {

            var height_half = $modals.eq(i).innerHeight() / 2;
            var modal_scroll = scroll_top + (viewport_height / 2) - height_half;

            if (modal_scroll < (scroll_top + 40)) {
                modal_scroll = scroll_top + 40;
            }

            $modals.eq(i).css('top', modal_scroll + 'px');
        }
    }

}