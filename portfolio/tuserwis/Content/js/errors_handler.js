// Проверка формы на лету. Переменная для функции создания.
var formCheckHandlerCreateObj = null;

// Проверка формы на лету. Переменная для массива функций.
var formCheckHandlerObj = null;

var required_message = 'Pole jest wymagane';
var warning_class = 'warning';
var warning_block = '<div class="' + warning_class + '"></div>';


$(document).ready(function () {

    // Проверка формы на лету. Переменная для функции создания.
    formCheckHandlerCreateObj = new formCheckHandlerCreate();

});

function validateForm($butt) {
    var $form = $butt.closest('.form-check');

    if ($form.find('.input--password').length > 0) {
        $form.find('.input--password').each(function () {
            var show_class = 'active';
            var $input_password = $butt.find('input');
            var $button_password = $butt.find('.input__password-switch');
            $input_password.prop('type', 'password');
            $button_password.removeClass(show_class);

        });
    }

    var form_id = $form.attr('id');
    formCheckHandlerObj.get(form_id).validate_with_error(form_id);

    if ($(this).hasClass('disabled')) {
        e.preventDefault();
    }
}

function refreshValidation() {
    formCheckHandlerCreateObj = new formCheckHandlerCreate();
}

// Проверка формы на лету. Функция открытия/закрытия
function formCheckHandlerCreate() {

    // Создание ассоциативного массива форм
    formCheckHandlerObj = null;
    formCheckHandlerObj = new Map();

    if ($('.form-check').length > 0) {

        for (var i = 0; i < $('.form-check').length; i++) {
            var $form = $($('.form-check')[i]);
            var func = new formCheckHandler($form);
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

// Проверка формы на лету. Функция создания объектов для меню
function formCheckHandler($form) {

    this.validate_with_error = function (form_id) {
        form_obj.validate_with_error();
    };

    this.validate_without_error = function (form_id) {
        form_obj.validate_without_error();
    };

    var form_obj = new formValidate($form);

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
    }

    function formValidateHandler($form, validate) {
        var $button = $form.find('.form-check__button');

        if (validate === true) {
            $form.removeClass('failed');
        } else {
            $form.addClass('failed');
        }

        $button.on('click', function () {
            var form_id = $form.attr('id');
            formCheckHandlerObj.get(form_id).validate_with_error(form_id);
        })
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
            } else if (check === 'phone-lenght') {
                validates_result.push(validatePhoneLenght($input));
            } else if (check === 'input-pass') {
                validates_result.push(validatePassCompare($input));
            } else if (check === 'min-count-symbols') {
                validates_result.push(validateMinCountSymbols($input));
            } else if (check === 'multiselect-required') {
                validates_result.push(validateMultiselectRequared($input));
            } else if (check === 'youtube-link') {
                validates_result.push(validateYoutubeLink($input));
            } else if (check === 'email-correct') {
                validates_result.push(validateCorrectEmail($input));
            } else if (check === 'sms-code') {
                validates_result.push(validateCorrectSmsCode($input));
            } else if (check === 'vin-code') {
                validates_result.push(validateVIN($input));
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

    $('.first__form-button').on('click', function () {
        validate_forms.get('first__form').validate_with_error();
    });

    

    $('.input__password-switch').on('click', function () {
        var $switch = $(this);
        var show_class = 'active';
        var $input = $switch.closest('.input').find('input');
        var type = $input.prop('type');

        if (type === 'password') {
            $input.prop('type', 'text');
            $switch.addClass(show_class);
        } else {
            $input.prop('type', 'password');
            $switch.removeClass(show_class);
        }
    });
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
        message = 'Zaznaczenie checkboxa jest wymagane';
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
        message = translate[62];
    } else {
        message = undefined;
    }

    return [validate, message, priority];
}

// Проверка длины телефона
function validatePhoneLenght($input) {
    var val = $input.val();
    var validate = true;
    var message;
    var priority = 1000;

    if (val.length !== 17) {
        validate = false;
        message = 'Niepoprawny numer';
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];
}

// Проверка корректного емейла
function validateCorrectEmail($input) {
    var val = $input.val();
    var validate = true;
    var message;
    var priority = 1000;

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(val) === false) {
        validate = false;
        message = 'Niepoprawny email'
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];
}

function validateVIN($input) {
    var val = $input.val();
    var validate = true;
    var message;
    var priority = 1000;

    var reg = new RegExp("^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$");

    if (val) {
        if (!val.match(reg)) {
            validate = false;
            message = 'Niepoprawny VIN'
        }
    }
    return [validate, message, priority];
}


// Проверка корректного
function validateCorrectSmsCode($input) {
    var val = $input.val();
    var validate = true;
    var message;
    var priority = 1000;

    var reg = /^\d+$/;

    if (reg.test(val) === false || val.length !== 4) {
        validate = false;
        message = 'Niepoprawny kod SMS';
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];
}



// Проверка одинаковых паролей
function validatePassCompare($input) {
    var $inputs = $input.closest('.form-check').find('.compare-password').find('input');
    var val_compare = $inputs.eq(0).val();
    var val = $input.val();
    var validate = true;
    var message;
    var priority = 500;

    if (val_compare !== val) {
        validate = false;
        message = 'Hasło nie pasuje';
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];
}

// Проверка минимального количества символов
function validateMinCountSymbols($input) {
    var count_symbols = parseInt($input.closest('.form-check__field').data('min-count-symbols'));
    var val = $input.val();
    var validate = true;
    var message = 'Minimalna liczba znaków: ' + count_symbols;
    var priority = 1000;

    if (val.length < count_symbols) {
        validate = false;
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];


}

// Проверка ютуб ссылки
function validateYoutubeLink($input) {
    var val = $input.val();
    var validate = true;
    var priority = 100;
    var message = 'Link nie prowadzi do Youtube';
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;

    if (val.length > 0) {
        var match = val.toString().match(regExp);
    }

    if (match && match[2].length == 11 || val.length === 0) {
        validate = true;
        message = undefined;
    } else {
        validate = false;
    }

    return [validate, message, priority];
}

// Проверка обязательного мультиселекта
function validateMultiselectRequared($input) {
    var val = $input.val();
    var validate = true;
    var priority = 100;
    var message = required_message;

    if (val.length < 1) {
        validate = false;
    } else {
        validate = true;
        message = undefined;
    }

    return [validate, message, priority];


}

// Функция создания оберток предупреждения
function createWarningBlocks($wrapper) {
    if ($wrapper.find('.' + warning_class).length === 0) {
        $(warning_block).appendTo($wrapper);
    }
};

// Функция показа предупреждения
function showWarning(message, $wrapper) {
    if (!message) {
        message = required_message;
    }

    createWarningBlocks($wrapper);
    $wrapper.find('.' + warning_class).text(message);
    $wrapper.find('.' + warning_class).addClass('active');
    $wrapper.addClass('error');
}

// Функция скрытия предупреждения
function hideWarning($wrapper) {
    if ($wrapper.find('.' + warning_class).length > 0) {
        $wrapper.find('.' + warning_class).removeClass('active');
    }
    $wrapper.removeClass('error');
};