$(document).ready(function () {

    var $body = $('html, body');
    var viewport_height = $(window).height();
    var viewport_width = window.innerWidth;
    var scroll_top = $(window).scrollTop();
    var scroll_down;
    var scroll_counter = 0;


    function time_count(year, month, day) {
        var start_date = new Date(year, month, day);
        var now = new Date();
        var count = parseInt((start_date - now) / 86400000).toString();
        var text;

        if (count.substr(-1) === '1') {
            text = ' день'
        } else if (count.substr(-1) === '2' || count.substr(-1) === '2' || count.substr(-1) === '4') {
            text = ' дня'
        } else {
            text = ' дней'
        }

        return count + text;
    }

    $('.header__time-count').text(time_count(2019, 00, 08));

    $(window).resize(function () {
        viewport_height = $(window).height();
        viewport_width = window.innerWidth;

    });


    if ($('div').is('.slider__wrapper')) {
        var slider = $('.slider__wrapper');
        slider.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 5,
            items: 1
        });
    }


    $(window).scroll(function () {


        if ($('.modal__background').hasClass('active') === false) {
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }


    });


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
});
