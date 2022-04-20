$(document).ready(function () {


    // setTimeout(function () {
    //     $('.main-first__img-fan').css('animation', 'fan_rotate .5s infinite linear')
    // }, 5000);

    // !!! Скрипт для тестов, переключение классов на страние цен
    $('.coin-selection__item').on('click', function () {
        if ($(this).hasClass('coin-selection__item--active') === false) {
            $('.coin-selection__item').removeClass('coin-selection__item--active');
            $(this).addClass('coin-selection__item--active');
        }
    });

    // !!! Скрипт для тестов, переключение классов на страние калькулятора
    $('.calculator__select-content-item').on('click', function () {
        if ($(this).hasClass('calculator__select-content-item--active') === false) {
            $('.calculator__select-content-item').removeClass('calculator__select-content-item--active');
            $(this).addClass('calculator__select-content-item--active');
        }
    });

    // Сохранение скролла
    var currentScrollPosition = 0;
    $(document).scroll(function () {
        currentScrollPosition = $(this).scrollTop();
    });


    // Скролл до ответов на FAQ
    $('.faq__list-item-question-link').on('click', function () {
        console.log(1);
        var destination = $('.faq__content').offset().top;
        console.log(destination);
        $("html, body").animate({scrollTop: destination - 50}, 1000);
        return false;
    });


    // Расчет размера тултипов
    function tooltipPosition(tooltip) {

        $(tooltip).each(function () {
            var left_edge = $('.layout-main').offset().left;
            var right_edge = left_edge + $('.layout-main').width();
            var left_position = $(this).offset().left - left_edge;
            var right_position = right_edge - left_position - left_edge;
            var arrow_margin_right = 90;
            var arrow_margin_left = 180;

            if (left_position < arrow_margin_left) {
                $(this).find('.tooltip__block').css('left', (-left_position + 5) + 'px')
            } else if (right_position < arrow_margin_right) {
                $(this).find('.tooltip__block').css('left', (-arrow_margin_left - arrow_margin_right + right_position - 5) + 'px')
            }
        });


    }

    if ($('div').is('.tooltip__button')) {
        tooltipPosition('.tooltip__button');
    }

    // Запрет скрола при фокусе инпутов
    $('input').focus(function () {
        $(document).scrollTop(currentScrollPosition);
    });

    // Открытие блока выбора языка
    $('.footer__info-language-button--menu').on('click', function () {
        $('.footer__info-language-block').toggleClass('footer__info-language-block--active');
    });

    // Открытие блоков в ЦОД
    $('.cod-info__label').on('click', function () {
        $(this).toggleClass('cod-info__label--active');
    });

    // Открытие меню выбора активов в калькуляторе
    $('.calculator__select-header-mobile').on('click', function () {
        $('.calculator__select-header-mobile').toggleClass('calculator__select-header-mobile--active');
    });

    // Закрытие меню выбора активов в калькуляторе
    $('.calculator__select-content').on('click', function () {
        if ($('.calculator__select-header-mobile').hasClass('calculator__select-header-mobile--active') === true) {
            $('.calculator__select-header-mobile').removeClass('calculator__select-header-mobile--active');
        }
    });

    // Подключение плагина кастомного селекта к селекту
    $(".input--select").selectmenu({
        classes: {
            "ui-selectmenu-button-open": "input--select-button",
            "ui-selectmenu-button-closed": "input--select-button",
            "ui-selectmenu-icon": "input--select-icon",
            "ui-selectmenu-menu": "input--select-items"
        }
    });

    // Открытие блока улучшения вопроса
    $('.faq__question-improve-active-toggle').on('click', function () {
        $('.faq__question-improve').toggleClass('faq__question-improve--active');
    });

    // Открытие меню
    $('.header__toggle-button').on('click', function () {
        $('.header').toggleClass('header--open');
        $('.footer__info-language-block').removeClass('footer__info-language-block--active');
        $('body').toggleClass('body-open-modal');
    });


    // Закрытие анонса
    $('.header__news-preview-close').on('click', function () {
        $('.header__news-preview').removeClass('header__news-preview--active');
    });


    // Открытие попапа
    $('.open-popup').on('click', function () {
        $('.header').removeClass('header--open');
        $('.footer__info-language-block').removeClass('footer__info-language-block--active');
        $('body').removeClass('body-open-modal');
        $('body').addClass('body-open-popup');
        $('.modal__wrapper').removeClass('modal__wrapper--active');
        $('.modal__wrapper').addClass('modal__wrapper--active-popup');
        $('.wrapper-full').addClass('wrapper-full--open-popup');
        $('.modal__block').removeClass('modal__block--active');
        var popup_goal = $(this).data('popup');
        $(popup_goal).css('left', 'calc(50% - ' + (parseInt($(popup_goal).css('width')) / 2) + 'px)');
        $(popup_goal).css('top', 'calc(' + currentScrollPosition + 'px + 20vh)');
        $(popup_goal).addClass('popup__block--active');
    });

    // Закрытие попапа
    $('.modal__wrapper').on('click', function (e) {
        console.log(e.target);
        if (e.target === this || $(e.target).hasClass('popup-close') === true) {
            $('body').removeClass('body-open-popup');
            $('.modal__wrapper').removeClass('modal__wrapper--active-popup');
            $('.wrapper-full').removeClass('wrapper-full--open-popup');
            $('.popup__block').removeClass('popup__block--active');
        }
    });


    // Открытие модального окна
    $('.open-modal').on('click', function () {
        $('.header').removeClass('header--open');
        $('body').addClass('body-open-modal');
        $('.modal__wrapper').addClass('modal__wrapper--active');
        $('.modal__block').removeClass('modal__block--active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('modal__block--active');
    });

    // Закрытие модального окна
    $('.modal__close').on('click', function () {
        $('body').removeClass('body-open-modal');
        $('.modal__wrapper').removeClass('modal__wrapper--active');
        $('.modal__block').removeClass('modal__block--active');
        $('.modal__rules-mobile-content').removeClass('modal__rules-mobile-content--active');
    });

    // Открытие правил
    $('.modal__rules-mobile-open').on('click', function () {
        $('.modal__rules-mobile-content').addClass('modal__rules-mobile-content--active');
    });

    // Закрытие правил
    $('.modal__rules-mobile-content-button').on('click', function () {
        $('.modal__rules-mobile-content').removeClass('modal__rules-mobile-content--active');
    });

    // Открытие корневого раздела в меню
    $('.faq__list-item-name').on('click', function () {
        $(this).parent('.faq__list-item').toggleClass('faq__list-item--active');
    });

    // Открытие подраздела в меню
    $('.faq__list-item-question-name').on('click', function () {
        $(this).parent('.faq__list-item-question').toggleClass('faq__list-item-question--active');
    });

    // Функция воспроизведения и остановки видео при скроле
    function videoControl($video) {

        var controls = {
            video_item: $video,
            video: $video.find('.video__item-movie'),
            preview: $video.find('.video__preview'),

            togglePlayback: function () {
                if (video.paused) {
                    video.play();
                    $('.video__item').addClass('video__item--active');

                } else {
                    video.pause();
                }
            }
        };

        var video = controls.video[0];
        controls.video.click(function () {
            controls.togglePlayback();
        });
        controls.preview.click(function () {
            controls.togglePlayback();
        });

        $(window).scroll(function () {
            if ($('.video__item').hasClass('video__item--active') === true) {

                if (($($video).offset().top + 200) < $(window).scrollTop()) {
                    video.pause();
                }
            }
        });
    }

    if ($('div').is('#cloud-video')) {
        videoControl($('#cloud-video'));
    }

    // Подключение карусели для мобилок для выбора монет
    $('.coin-selection-slider').owlCarousel({
        loop: true,
        mouseDrag: true,
        smartSpeed: 250,
        nav: true,
        dots: true,
        items: 1,
        margin: 10,
    });


    // Слайдер
    function teamCarousel() {

        // Получаем блок слайдов
        var $listSlider = $('.team-carousel__block');
        var $slide_items = $listSlider.children();
        var countSlide;
        var sideSlide;
        var sideActiveSlide;
        var marginSlide;
        var speed;

        // Получаем количество слайдов
        if ($(window).width() > 767) {
            countSlide = 5;
            sideSlide = 85;
            sideActiveSlide = 120;
            marginSlide = 20;
            speed = 200;
        } else {
            countSlide = 3;
            sideSlide = 60;
            sideActiveSlide = 60;
            marginSlide = 10;
            speed = 300;
        }

        // Перемещаем крайний слайд
        var $lastSlide = $slide_items.eq(-1).detach();
        $lastSlide.prependTo($listSlider);
        $listSlider = $('.team-carousel__block');
        $slide_items = $listSlider.children();

        if ($(window).width() > 767) {
            // Увеличиваем центральные слайды
            $slide_items.css({'height': sideSlide + 'px', 'width': sideSlide + 'px'});
            for (var i = countSlide - 2; i > 0; i--) {
                $slide_items.eq(i + 1).css({'height': sideActiveSlide + 'px', 'width': sideActiveSlide + 'px'});
            }
        } else {
            $slide_items.css({'height': sideActiveSlide + 'px', 'width': sideActiveSlide + 'px'});

        }


        function nextSlider() {
            $listSlider.animate({'margin-left': '-=' + sideActiveSlide + 'px'}, speed);
            $slide_items.eq(2).animate({
                width: sideSlide,
                height: sideSlide
            }, speed);

            $slide_items.eq(countSlide).animate({
                width: sideActiveSlide,
                height: sideActiveSlide
            }, speed, function () {
                var $firstSlide = $slide_items.eq(0).detach();
                $firstSlide.appendTo($listSlider);
                $listSlider.css('margin-left', (-sideSlide - (marginSlide * 2)) + 'px');
                $listSlider = $('.team-carousel__block');
                $slide_items = $listSlider.children();
                $('.team-carousel__button--next').css('display', 'block');
            });
        }

        function nextSliderMobile() {
            $listSlider.animate({'margin-left': '-=' + (sideActiveSlide + (marginSlide * 2)) + 'px'}, speed, function () {
                var $firstSlide = $slide_items.eq(0).detach();
                $firstSlide.appendTo($listSlider);
                $listSlider.css('margin-left', (-sideSlide - (marginSlide * 2)) + 'px');
                $listSlider = $('.team-carousel__block');
                $slide_items = $listSlider.children();
                $('.team-carousel__button--next').css('display', 'block');
            });
        }

        function prevSlider() {
            $listSlider.animate({'margin-left': '+=' + sideActiveSlide + 'px'}, speed);
            $slide_items.eq(countSlide - 1).animate({
                width: sideSlide,
                height: sideSlide
            }, speed);

            $slide_items.eq(1).animate({
                width: sideActiveSlide,
                height: sideActiveSlide
            }, speed, function () {
                var $lastSlide = $slide_items.eq(-1).detach();
                $lastSlide.prependTo($listSlider);
                $listSlider.css('margin-left', (-sideSlide - (marginSlide * 2)) + 'px');
                $listSlider = $('.team-carousel__block');
                $slide_items = $listSlider.children();
                $('.team-carousel__button--prev').css('display', 'block');
            });
        }

        function prevSliderMobile() {
            $listSlider.animate({'margin-left': '+=' + (sideSlide + (marginSlide * 2)) + 'px'}, speed, function () {
                var $lastSlide = $slide_items.eq(-1).detach();
                $lastSlide.prependTo($listSlider);
                $listSlider.css('margin-left', (-sideSlide - (marginSlide * 2)) + 'px');
                $listSlider = $('.team-carousel__block');
                $slide_items = $listSlider.children();
                $('.team-carousel__button--prev').css('display', 'block');
            });
        }

        $('.team-carousel__button--next').on('click', function () {
            $('.team-carousel__button--next').css('display', 'none');

            if ($(window).width() > 767) {
                nextSlider();
            } else {
                nextSliderMobile();
            }


        });

        $('.team-carousel__button--prev').on('click', function () {
            $('.team-carousel__button--prev').css('display', 'none');

            if ($(window).width() > 767) {
                prevSlider();
            } else {
                prevSliderMobile();
            }
        });


    }

    //
    if ($('div').is('.team-carousel__block')) {
        teamCarousel();

    }

});
