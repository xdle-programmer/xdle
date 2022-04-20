// Проверка формы на лету. Переменная для функции создания.
var formCheckHandlerCreateObj = null;

// Проверка формы на лету. Переменная для массива функций.
var formCheckHandlerObj = null;

var required_message = 'Обязательное поле';

var warning_class = 'warning';
var warning_block = '<div class="' + warning_class + '"></div>';


$(document).ready(function () {
    // Проверка формы на лету. Переменная для функции создания.
    formCheckHandlerCreateObj = new formCheckHandlerCreate();
});


// Проверка формы на лету. Функция открытия/закрытия
function formCheckHandlerCreate() {

    // Создание ассоциативного массива форм
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


// Функции валидации формы
function formValidate($form, listening_changes) {
    if (!listening_changes) {
        listening_changes = true;
    }

    var $form_fields = $form.find('.form-check__field');

    this.validate_with_error = function () {
        handlerFields(true);

        // formValidateHandler($form, handlerFields(true));
    };

    this.validate_without_error = function () {

        handlerFields(false);

        // formValidateHandler($form, handlerFields(false));
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

    // Создание оберток предупреждений

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

// Функции валидации поля
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
        } else if (check === 'email-check') {
            validates_result.push(validateFormEmail($input));
        } else if (check === 'sms-code') {
            validates_result.push(validateCorrectSmsCode($input));
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
        message = 'Обязательное поле';
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
        message = 'Обязательное поле';
    } else {
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
    var priority = 1000;

    if (val_compare !== val) {
        validate = false;
        message = translateH[66];
    } else {
        validate = true;
        message = undefined;
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

// Проверка длины телефона
function validatePhoneLenght($input) {
    var val = $input.val();
    var validate = true;
    var message;
    var priority = 1000;


    console.log($input);
    console.log(val.length);

    if (val.length !== 15) {
        validate = false;
        message = 'Niepoprawny numer';
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
    var message = 'Минимум символов: ' + count_symbols;
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
    var message = 'Ссылка не ведет на Youtube';
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

// Проверка емейла
function validateFormEmail($input) {
    var val = $input.val();
    var validate = true;
    var priority = 100;
    var message = 'Введите корректный e-mail';
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