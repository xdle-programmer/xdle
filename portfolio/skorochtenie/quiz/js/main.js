var $body;
var viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
var viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
var scroll_top;
var scroll_down;
var scroll_counter;
var mobile_width;
var content_top;
var banner_top;
var modals;
var modal_state;
var quiz_answer = new Map();


$(document).ready(function () {

    $body = $('html, body');
    viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 1280;

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });


    function handlerQuiz() {
        let $start_button = $('.start-quiz');
        let $final_button = $('.quiz__footer-button-final');
        let $next_step_button = $('.quiz__footer-button-next');
        let $prev_step_button = $('.quiz__footer-button-prev');
        let $items = $('.quiz__item');
        let count = $items.length;
        let $item_active = $('.quiz__item.active');
        let $current_button = $next_step_button;
        let $quiz = $('.quiz');
        let $final_page = $('.final-page');
        let $start_page = $('.start-page');

        $start_button.on('click', function () {
            $start_page.addClass('hide');
            $quiz.addClass('active');
        });

        $final_button.on('click', function () {
            let $button = $(this);

            if ($button.hasClass('disabled') === false) {
                closeQuiz();
            }


        });

        function closeQuiz() {
            setArray(3);
            $final_page.addClass('active');
            $quiz.removeClass('active');
            $quiz.addClass('hide');
        }

        $next_step_button.on('click', function () {
            let $button = $(this);

            if ($button.hasClass('disabled') === false) {
                nextStep($item_active.index());
            }
        });

        $prev_step_button.on('click', function () {
            let $button = $(this);

            if ($button.hasClass('disabled') === false) {
                prevStep($item_active.index());
            }
        });

        function setArray(index) {
            let answer_title = $items.eq(index).find('.quiz__item-title').text().trim();
            let answer_val = '';

            if ($items.eq(index).find('input[type="radio"]').length === 0) {
                answer_val = $items.eq(index).find('input').val();
            } else {
                if ($item_active.find('input[type="radio"]:checked').length === 1) {
                    console.log(1)

                    if ($items.eq(index).find('input[type="text"]').length > 0) {
                        answer_val = $items.eq(index).find('input[type="radio"]:checked').val() + '. ' + $items.eq(index).find('input[type="text"]').val();
                    } else {
                        answer_val = $items.eq(index).find('input[type="radio"]:checked').val();
                    }


                } else {
                    answer_val = $items.eq(index).find('input[type="text"]').val();
                }

            }


            quiz_answer.set('step_' + index, answer_title + ': ' + answer_val);

        }


        function nextStep(index) {
            setArray(index);


            $items.eq(index).removeClass('active');
            $items.eq(index).addClass('done');
            $items.eq(index + 1).removeClass('hide');
            $items.eq(index + 1).addClass('active');
            $item_active = $items.eq(index + 1);

            $prev_step_button.removeClass('disabled');

            if (index === count - 2) {
                $next_step_button.addClass('hide');
                $final_button.removeClass('hide');
                $current_button = $final_button;
            }

            if ($item_active.hasClass('ready') === false) {
                $current_button.addClass('disabled');
            }

            calcLine();


        }

        function prevStep(index) {
            $items.eq(index).removeClass('active');
            $items.eq(index).removeClass('done');
            $items.eq(index).addClass('hide');
            $items.eq(index - 1).removeClass('hide');
            $items.eq(index - 1).addClass('active');
            $item_active = $items.eq(index - 1);

            $final_button.addClass('hide');
            $next_step_button.removeClass('hide');
            $current_button = $next_step_button;

            if (index === 1) {
                $prev_step_button.addClass('disabled');
            }

            calcLine();
        }

        function calcLine() {
            let step_percent = 100 / count;
            let $fill = $('.quiz__footer-field-line-fill');
            let $val = $('.quiz__footer-field-label-val');
            let percent = $item_active.index() * step_percent;
            $fill.width(percent + '%');
            $val.text(percent + '%');
        }

        $items.find('.radio input').on('change', function () {
            $item_active.find('.quiz__item-radio-item').removeClass('selected');
            $(this).closest('.quiz__item-radio-item').addClass('selected');

            $item_active.addClass('ready');
            $current_button.removeClass('disabled');

            if ($item_active.index() === count - 1) {
                closeQuiz();
            } else {
                nextStep($item_active.index());
            }
        });

        $items.find('.quiz__item-input').on('input', function () {
            let $input = $($(this));
            let state = false;

            if ($input.val().length > 1) {
                state = true;
            } else {
                if ($item_active.find('input[type="radio"]').length === 0) {
                    state = false;
                } else {
                    if ($item_active.find('input[type="radio"]:checked').length === 1) {
                        state = true;
                    } else {
                        state = false;
                    }

                }
            }

            if (state) {
                $item_active.addClass('ready');
                $current_button.removeClass('disabled');
            } else {
                $item_active.removeClass('ready');
                $current_button.addClass('disabled');
            }
        });
    }


    handlerQuiz();

    // $('input[name="phone"]').mask('+38 (999) 999-9999', {placeholder: "+38 (___) ___-____"});

    $('input[name="phone"]').on('change, input', function () {
        if ($(this).val().length < 10) {
            $('.final-page__button').addClass('disabled');
        } else {
            if ($('#checkbox_1').is(':checked') === true) {
                $('.final-page__button').removeClass('disabled');
            } else {
                $('.final-page__button').addClass('disabled');
            }
        }
    });

    $('#checkbox_1').on('change', function () {
        if ($('#checkbox_1').is(':checked') === true) {
            $('.final-page__button').removeClass('disabled');
        } else {
            $('.final-page__button').addClass('disabled');
        }
    });


    $(".submit").on('click', function () {
        var $form = $(this).closest('.final-page__form');
        var answers = '';

        if ($(this).hasClass('disabled') !== true) {

            // if ($form.find('input[name="phone"]').val().length > 0) {
            //     answers = answers + '<br> Телeфон: ' + $form.find('input[name="phone"]').val() + ' <br>';
            //     $form.find('input[name="phone"]').val('');
            // }

            answers = answers + '<br> Телeфон: ' + $form.find('input[name="phone"]').val() + ' <br>';
            $form.find('input[name="phone"]').val('');

            if ($form.find('input[name="name"]').val().length > 0) {
                answers = answers + '<br> Имя: ' + $form.find('input[name="name"]').val() + ' <br>';
                $form.find('input[name="name"]').val('');
            }

            for (var i = 0; i < 4; i++) {
                answers = answers + '<br>' + quiz_answer.get('step_' + i) + ' <br>';
            }


            if ($form.find('input[name="DATA[utm_source]"]').val().length > 0) {
                answers = answers + '<br><br><br> utm_source: ' + $form.find('input[name="DATA[utm_source]"]').val() + ' <br>';
                $form.find('input[name="DATA[utm_source]"]').val('');
            }

            if ($form.find('input[name="DATA[utm_medium]"]').val().length > 0) {
                answers = answers + '<br> utm_medium: ' + $form.find('input[name="DATA[utm_medium]"]').val() + ' <br>';
                $form.find('input[name="DATA[utm_medium]"]').val('');
            }
            if ($form.find('input[name="DATA[utm_campaign]"]').val().length > 0) {
                answers = answers + '<br> utm_campaign: ' + $form.find('input[name="DATA[utm_campaign]"]').val() + ' <br>';
                $form.find('input[name="DATA[utm_campaign]"]').val('');
            }
            if ($form.find('input[name="DATA[utm_content]"]').val().length > 0) {
                answers = answers + '<br> utm_content: ' + $form.find('input[name="DATA[utm_content]"]').val() + ' <br>';
                $form.find('input[name="DATA[utm_content]"]').val('');
            }
            if ($form.find('input[name="DATA[utm_term]"]').val().length > 0) {
                answers = answers + '<br> utm_term: ' + $form.find('input[name="DATA[utm_term]"]').val() + ' <br>';
                $form.find('input[name="DATA[utm_term]"]').val('');
            }

            $form.find('input[name="answers"]').val(answers);


            $.post("send.php", $form.serialize(), function (data) {

            });

            document.location.href = 'https://skorochtenie.od.ua/quiz/thank/'
        }

    });
});
