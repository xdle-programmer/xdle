$(document).ready(function () {

    var $body = $('html, body');


    if ($(window).width() > 767) {
        var $video_section = $('.video-section');
        var video_url = $video_section.data('video');
        $('div.video-section__background-video').remove();
        $('<video class="video-section__background-video" muted loop><source src="' + video_url + '" type="video/mp4"></video>').prependTo($video_section);
        $('.video-section__background-video')[0].play();
    }


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
                page_scroll()
            }, 250);

            function page_scroll() {
                var header_height = $('.header').height();
                $body.animate({
                    scrollTop: ($(goal).offset().top) - header_height
                }, 500);
            }

        }
    });

    var viewport_height = $(window).height();

    var scroll_top = $(window).scrollTop();

    if ($(window).height() > $(window).width()) {
        $('body').addClass('vertical');
    }

    header_scroll();

    function header_scroll() {
        if ($(window).scrollTop() > 0) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--scroll');
            }
        } else {
            $('.header').removeClass('header--scroll');
        }
    }

    $('.header__mobile-button').on('click', function () {
        $('.header').toggleClass('header--open');
    });


    $(window).scroll(function () {
        header_scroll();
        scroll_top = $(window).scrollTop();
        $('.header').removeClass('header--open');

        if ($('.modal__background').hasClass('active') === false) {
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
    });

    $('.step__item').on('mouseover', function () {
        var $wrapper = $('.step');
        var modificator = 'step--' + $(this).attr('class').split("--")[1];

        if ($wrapper.hasClass(modificator) === false) {
            $wrapper.removeClass('step--analytics');
            $wrapper.removeClass('step--design');
            $wrapper.removeClass('step--coding');
            $wrapper.removeClass('step--programming');
            $wrapper.removeClass('step--advertising');
            $wrapper.removeClass('step--a-b-testing');
            $wrapper.addClass(modificator);
        }
    });

    var $wwd_slider = $('.what-we-do__slider');

    var $wwd_button_prev = $('.what-we-do__slider-nav-button--prev');

    var $wwd_button_next = $('.what-we-do__slider-nav-button--next');

    $wwd_slider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1,
        mouseDrag: false
    });

    $wwd_button_next.on('click', function () {
        function next_slide() {
            $wwd_slider.trigger('next.owl.carousel', [0]);
            $('.what-we-do__slider-item-block').removeClass('animation-exit');
        }

        $('.owl-item.active .what-we-do__slider-item-block').addClass('animation-exit');
        setTimeout(next_slide, 1000);
    });

    $wwd_button_prev.on('click', function () {
        function prev_slide() {
            $wwd_slider.trigger('prev.owl.carousel', [0]);
            $('.what-we-do__slider-item-block').removeClass('animation-exit');
        }

        $('.owl-item.active .what-we-do__slider-item-block').addClass('animation-exit');
        setTimeout(prev_slide, 1000);
    });


    var $reviews_slider = $('.reviews__slider');

    $reviews_slider.owlCarousel({
        loop: true,
        dots: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                startPosition: 1
            },
            768: {
                items: 1,
                nav: true,
                startPosition: 1
            },
            1024: {
                items: 3,
                nav: true,
                startPosition: 0
            }
        }

    });

    // $('.owl-carousel').owlCarousel({
    //     onDragged: callback
    // });
    // function callback(event) {
    // }
    //



    $reviews_slider.on('changed.owl.carousel', function (event) {
        if ($(window).width() > 1023) {
            var currentItem = event.item.index;
            $('.reviews__slider-item').removeClass('active');
            $('.reviews__slider-item').removeClass('first-slide');
            $('.reviews__slider-item').removeClass('last-slide');
            $('.reviews__slider').find('.owl-item').eq(currentItem).find('.reviews__slider-item').addClass('first-slide');
            $('.reviews__slider').find('.owl-item').eq(currentItem + 1).find('.reviews__slider-item').addClass('active');
            var desc_goal = $('.reviews__slider').find('.owl-item').eq(currentItem + 1).find('.reviews__slider-item').data('goal-desc');
            $('.reviews__desc').removeClass('active');
            $(desc_goal).addClass('active');
            $('.reviews__slider').find('.owl-item').eq(currentItem + 2).find('.reviews__slider-item').addClass('last-slide');
            $('.reviews__elem').each(function () {
                var matrix = $(this).css('transform');
                if (matrix !== 'none') {
                    var values = matrix.split('(')[1].split(')')[0].split(',');
                    var a = values[0];
                    var b = values[1];
                    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                } else {
                    var angle = 0;
                }

                // $(this).css('transform', 'rotate(' + (angle - 15) + 'deg)');
            });
        } else {
            var currentItem = event.item.index;
            $('.reviews__slider-item').removeClass('active');
            $('.reviews__slider-item').removeClass('first-slide');
            $('.reviews__slider-item').removeClass('last-slide');
            $('.reviews__slider').find('.owl-item').eq(currentItem + 0).find('.reviews__slider-item').addClass('active');
            var desc_goal = $('.reviews__slider').find('.owl-item').eq(currentItem + 0).find('.reviews__slider-item').data('goal-desc');
            $('.reviews__desc').removeClass('active');
            $(desc_goal).addClass('active');
            $('.reviews__elem').each(function () {
                var matrix = $(this).css('transform');
                if (matrix !== 'none') {
                    var values = matrix.split('(')[1].split(')')[0].split(',');
                    var a = values[0];
                    var b = values[1];
                    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                } else {
                    var angle = 0;
                }

                // $(this).css('transform', 'rotate(' + (angle - 15) + 'deg)');
            });
        }
    });

    $('.faq__item-name').on('click', function () {

        if ($(this).hasClass('active') === true) {
            $(this).removeClass('active');
            $(this).parent().find('.faq__item-text').removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).parent().find('.faq__item-text').addClass('active');
        }
    });


    function quiz(this_quiz) {
        var pos = 0;
        var step = 1000;
        var $this_quiz = $(this_quiz).parents('.quiz');
        var $questions_block = $this_quiz.find('.quiz__question-block');
        var $questions = $this_quiz.find('.quiz__step.question');
        var $step_number = $this_quiz.find('.quiz__question-header-steps span');
        var $sale_number = $this_quiz.find('.quiz__question-header-sale span');
        var $line = $this_quiz.find('.quiz__question-header-line-progress');
        var $next = $this_quiz.find('.quiz__button-next');
        var $prev = $this_quiz.find('.quiz__button-prev');
        var $send = $this_quiz.find('.quiz__button-finish');
        var answers = '';

        $this_quiz.find('.quiz__question-buttons, .quiz__question-header').addClass('active');
        $this_quiz.find('.quiz__step').removeClass('active');
        $questions.eq(pos).addClass('active');
        $questions_block.addClass('active');
        pos = pos + 1;
        $sale_number.spincrement({
            from: 0,
            to: step,
            thousandSeparator: "",
            duration: 300,
            easing: 'spincrementEasing'
        });

        $next.click(function () {
            next_question();
        });


        function next_question() {
            if (pos === ($questions.length - 1)) {
                $next.removeClass('active');
                $send.addClass('active');
                $questions.each(function () {
                    var img_answer = $(this).find('.quiz__step-image-select-item.active .quiz__step-image-select-item-name').text();
                    var select_answer = $(this).find('.quiz__radio-button-input:checked + .quiz__radio-button-label').text();
                    var input_answer = $(this).find('.quiz__step-input[type=text]').val();

                    if (img_answer !== '' && jQuery.type(img_answer) !== 'undefined') {
                        answers = answers + '<br>' + $(this).find('.quiz__step-name').text() + ' ' + img_answer + ' <br>';
                    }

                    if (select_answer !== '' && jQuery.type(select_answer) !== 'undefined') {
                        answers = answers + '<br>' + $(this).find('.quiz__step-name').text() + ' ' + select_answer + ' <br>';
                    }

                    if (input_answer !== '' && jQuery.type(input_answer) !== 'undefined') {
                        answers = answers + '<br>' + $(this).find('.quiz__step-name').text() + ' ' + input_answer + ' <br>';
                    }
                });
                $('.quiz__step-input-answers').val(answers);
            }

            if (pos === $questions.length) {

            }
            else {
                $questions.removeClass('active');
                $questions.eq(pos).addClass('active');
                pos = pos + 1;
                $step_number.text(pos);
                $sale_number.spincrement({
                    from: parseInt((pos - 1) * step),
                    to: parseInt((pos) * step),
                    thousandSeparator: "",
                    duration: 300,
                    easing: 'spincrementEasing'
                });
                $line.css('width', ((100 / $questions.length) * pos) + '%')
            }
        }

        $prev.click(function () {
            if (pos === 1) {
                $this_quiz.find('.quiz__question-buttons, .quiz__question-header').removeClass('active');
                $questions.removeClass('active');
                $this_quiz.find('.quiz__step--start').addClass('active');
                $questions_block.removeClass('active');
                return;
            }
            else {
                $questions.removeClass('active');
                $questions.eq(pos - 2).addClass('active');
                pos = pos - 1;
                $step_number.text(pos);
                $sale_number.spincrement({
                    from: parseInt((pos + 1) * step),
                    to: parseInt((pos) * step),
                    thousandSeparator: "",
                    duration: 300,
                    easing: 'spincrementEasing'
                });
                $line.css('width', ((100 / $questions.length) * pos) + '%')
            }

            if (pos === $questions.length - 1) {
                $next.addClass('active');
                $send.removeClass('active');
            }
        });

        $('.quiz__step-image-select-item').click(function () {
            $(this).parents('.quiz__step.question').find('.quiz__step-image-select-item').removeClass('active');
            $(this).addClass('active');
            next_question();
        });

        $('.quiz__radio-button-label').click(function () {
            next_question();
        });
    }


    $('.quiz__start-button').click(function () {
        quiz(this);
    });

    $('body').click(function () {
        $('.quiz__popup').removeClass('active');
    });

    $('input[type=tel]').inputmask('+7 (999) 999-99-99');

    // Открытие модального окна
    $('.open-modal').on('click', function () {
        $('.modal__background').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
        $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    // Закрытие модального окна
    $('.modal__close, .modal__background').on('click', function () {
        $('.modal__background').removeClass('active');
        $('.modal__block').removeClass('active');
        $('.modal__block').css('top', 'auto');
        $('.modal__content--youtube iframe').attr('src', '');
    });


    // Подгрузка ролика ютуба
    $('.youtube-modal').on('click', function () {
        var modal_youtube = $(this).data('youtube');
        $('.modal__content--youtube iframe').attr('src', modal_youtube);
    });
    // Подгрузка отзыва
    $('.review-modal').on('click', function () {
        var modal_review = $(this).data('review-doc');
        $('.modal__review-item').css('background', 'url(' + modal_review + ')');
    });

    $('.rates__item-button').on('click', function () {
        var title = $(this).data('title');
        $('#modal-rates').find('.modal__title').text(title);
        $('input[name="rates"]').val(title);
    });

    $('.what-we-do__slider-button').on('click', function () {
        var title = $(this).closest('.what-we-do__slider-desc').find('.what-we-do__slider-title').text();
        $('input[name="what-we-do"]').val(title);
    });


    $(".modal__form-lead--main-modal").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        var $requared_inputs = $form.find('.required-input');
        var $requared_phones = $form.find('.required-phone');
        var $requared_checkboxes = $form.find('.required-checkbox');
        var ready = true;

        $requared_phones.each(function () {
            $(this).removeClass('error');

            if ($(this).val().match(/[0-9]/g) === null) {
                $(this).addClass('error');
                ready = false;
            } else if ($(this).val().match(/[0-9]/g).length !== 11) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_inputs.each(function () {
            $(this).removeClass('error');
            if ($(this).val().length < 1) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_checkboxes.each(function () {
            $(this).removeClass('error');
            if ($(this).is(':checked') === false) {
                $(this).addClass('error');
                ready = false;
            }
        });

        if (ready === true) {
            $.post("send.php", $form.serialize(), function (data) {
                $form.closest('.modal__block').removeClass('active');
                $('#modal-thank-you').addClass('active');
            });
        }


    });

    $(".modal__form-lead--rates-form").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        var $requared_inputs = $form.find('.required-input');
        var $requared_phones = $form.find('.required-phone');
        var $requared_checkboxes = $form.find('.required-checkbox');
        var ready = true;

        $requared_phones.each(function () {
            $(this).removeClass('error');

            if ($(this).val().match(/[0-9]/g) === null) {
                $(this).addClass('error');
                ready = false;
            } else if ($(this).val().match(/[0-9]/g).length !== 11) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_inputs.each(function () {
            $(this).removeClass('error');
            if ($(this).val().length < 1) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_checkboxes.each(function () {
            $(this).removeClass('error');
            if ($(this).is(':checked') === false) {
                $(this).addClass('error');
                ready = false;
            }
        });

        if (ready === true) {
            $.post("send_rates.php", $form.serialize(), function (data) {
                $form.closest('.modal__block').removeClass('active');
                $('#modal-thank-you').addClass('active');
            });
        }


    });

    $(".modal__form-lead--what-we-do").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        var $requared_inputs = $form.find('.required-input');
        var $requared_phones = $form.find('.required-phone');
        var $requared_checkboxes = $form.find('.required-checkbox');
        var ready = true;

        $requared_phones.each(function () {
            $(this).removeClass('error');

            if ($(this).val().match(/[0-9]/g) === null) {
                $(this).addClass('error');
                ready = false;
            } else if ($(this).val().match(/[0-9]/g).length !== 11) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_inputs.each(function () {
            $(this).removeClass('error');
            if ($(this).val().length < 1) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_checkboxes.each(function () {
            $(this).removeClass('error');
            if ($(this).is(':checked') === false) {
                $(this).addClass('error');
                ready = false;
            }
        });

        if (ready === true) {
            $.post("send_what-we-do.php", $form.serialize(), function (data) {
                $form.closest('.modal__block').removeClass('active');
                $('#modal-thank-you').addClass('active');
            });
        }


    });

    $(".quiz__question-block").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        var $form_block = $(".quiz__question-block");

        if ($('.quiz__question-block .quiz__step-input--phone').val().length < 10) {
            $('.quiz__question-block .quiz__step-input--phone').addClass('error');
        } else {
            $.post("send_quiz.php", $form.serialize(), function (data) {
                $form_block.parents('.quiz').find('.quiz__popup').addClass('active');
                $form_block.find('.quiz__question-buttons, .quiz__question-header').removeClass('active');
                $form_block.find('.quiz__step.question').removeClass('active');
                $form_block.parents('.quiz').find('.quiz__step--start').addClass('active');
                $form_block.find('.quiz__button-next').addClass('active');
                $form_block.find('.quiz__button-finish').removeClass('active');
                $form_block.find('.quiz__question-block').removeClass('active');
            });
        }


    });

    $(".modal__form-lead--faq").submit(function (e) {
        captcha = grecaptcha.getResponse();
        e.preventDefault();
        var $form = $(this);
        var $requared_inputs = $form.find('.required-input');
        var $requared_phones = $form.find('.required-phone');
        var $requared_checkboxes = $form.find('.required-checkbox');
        var $captcha_error = $('#recaptchaError');
        $captcha_error.text('');
        var ready = true;


        $requared_phones.each(function () {
            $(this).removeClass('error');

            if ($(this).val().match(/[0-9]/g) === null) {
                $(this).addClass('error');
                ready = false;
            } else if ($(this).val().match(/[0-9]/g).length !== 11) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_inputs.each(function () {
            $(this).removeClass('error');
            if ($(this).val().length < 1) {
                $(this).addClass('error');
                ready = false;
            }
        });

        $requared_checkboxes.each(function () {
            $(this).removeClass('error');
            if ($(this).is(':checked') === false) {
                $(this).addClass('error');
                ready = false;
            }
        });

        if (!captcha.length) {
            $captcha_error.text('* Вы не прошли проверку "Я не робот"');
            ready = false;
        }

        if (ready === true) {
            $.post("send_faq.php", $form.serialize(), function (data) {
                $form.closest('.modal__block').removeClass('active');
                $('#modal-thank-you').addClass('active');

                grecaptcha.reset();
                if (!data.success) {
                    $('#recaptchaError').text(data.errorMessage);
                } else {

                }
            });
        }


        // else {
        //     $('#recaptchaError').text('');
        //
        //     $.post("send_faq.php", $form.serialize(), function (data) {
        //         grecaptcha.reset();
        //         if (!data.success) {
        //             $('#recaptchaError').text(data.errorMessage);
        //         } else {
        //
        //         }
        //     });
        // }


    });
});


