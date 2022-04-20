let handler_sms;

$(document).ready(function () {
    handler_sms = new handlerSms();
});


function handlerSms() {
    let $wrapper = $('.sms-input__wrapper');
    let $confirm_button = $('.sms-input__submit--confirm');
    let $login_button = $('.sms-input__submit--login');
    let $input_result = $('.sms-input__input-result');
    let $pseudo_inputs = $('.sms-input__input-code');
    let focus_class = 'focus';
    let $resend_button = $('.sms-input__counter-button');
    let $resend_counter = $('.sms-input__counter-item');
    let wait_text = 'Повторно отправить sms через';
    let active_text = 'Повторно отправить sms';
    let active_class = 'active';
    let hide_class = 'hide';
    let counter_active = false;

    $login_button.on('click', function () {
        setCounter(60);
        $login_button.addClass(hide_class);
        $confirm_button.removeClass(hide_class);
        $wrapper.removeClass(hide_class);
    });


    function setCounter(limit) {
        let current_second = limit;

        function setButtonState(current_second) {
            setTimeout(function () {
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
                    setButtonState(current_second);
                }
            }, 1000);
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

        if (val.length >= 6) {
            var res = val.slice(0, 6);
            $input.val(res);
            // submit!
        }
    }
}