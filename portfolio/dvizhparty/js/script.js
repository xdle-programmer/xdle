$(document).ready(function () {

    var viewport_height = $(window).height();

    var scroll_top = $(window).scrollTop();

    if ($(window).height() > $(window).width()) {
        $('body').addClass('vertical');
    }

    header_scroll();

    function header_scroll() {
        if ($(window).scrollTop() > 0 && $(window).width() > 1023) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--scroll');
            }
        } else {
            $('.header').removeClass('header--scroll');
        }
    }

    $(window).scroll(function () {
        header_scroll();
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
    });

    if ($('div').is('.main-slider__block')) {
        $('.main-slider__block').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: true,
            dots: false,
            items: 1
        });
    }

    $('.faq__item-name').on('click', function () {

        if ($(this).hasClass('active') === true) {
            $('.faq__item-name').removeClass('active');
            $('.faq__item-text').hide(200);
        } else {
            $('.faq__item-name').removeClass('active');
            $('.faq__item-text').hide(200);
            $(this).addClass('active');
            $(this).parent().find('.faq__item-text').show(200);
        }
    });


    $('.partners__items').owlCarousel({
        loop: true,
        mouseDrag: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 50,
        responsive: {
            0: {
                items: 3,
                margin: 0
            },
            768: {
                items: 5
            },
            1366: {
                items: 5
            }
        }
    });


    $(".feedback__form").submit(function (e) {
        e.preventDefault();

        $.post("send.php", $(this).serialize(), function (data) {
            alert('Сообщение успешно отправлено');
        });

    });

    $('.header__mobile-button').on('click', function () {
        $('.header__block').toggleClass('active');
    });

});
