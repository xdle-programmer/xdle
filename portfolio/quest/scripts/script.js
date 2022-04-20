$(document).ready(function () {


    // Подключение каруселек

    $(".slider__block").owlCarousel({
        margin: 20,
        nav: false,
        items: 3,
        loop: true,
        dots: true,
        dotsEach: 1
    });


    // листака дней внутри описания квеста
    $(".timetable__day").owlCarousel({
        margin: 12,
        nav: false,
        items: 7,
        loop: true,
        dots: false
    });


    // листалка мест внутри описания квеста
    $(".timetable__place").owlCarousel({
        margin: 0,
        nav: true,
        items: 1,
        loop: true,
        dots: false
    });

    // листалка карточек
    $(".quest-ticket__select-card-slider").owlCarousel({
        margin: 15,
        nav: false,
        items: 2,
        loop: true,
        dots: false
    });


    // листалка тегов фильтра
    function tagsSlider() {
        if ($(window).width() < 768) {

            $(".tags__slider").owlCarousel({
                margin: 10,
                nav: false,
                items: 4,
                loop: true,
                dots: false
                // center: true
            });
        }
    }

    tagsSlider();


    // Вызываем функцию расчета ширины при ресайзе
    $(window).resize(function () {
        tagsSlider();
    });


    // Дропдаун расписания на мобилках

    $('.quest__item-info').on('click', function () {
        $(this).parent('.quest__item').toggleClass('quest__item--active');
    });


    // Дропдаун карточек на мобилках
    $('.quest-ticket__payment-card-mobile').on('click', function () {
        $('.quest-ticket__select-card-block').toggleClass('quest-ticket__select-card-block--active');
    });


    // Механика модальных окон, ее можно будет полностью выпилить

    $('#open-all-quest').on('click', function () {
        $('.wrapper').addClass('wrapper--modal-open');
        $('.header').addClass('header--modal-open');
        $('#all-quest').addClass('modal__wrapper--modal-open');
    });

    $('.modal__wrapper').on('click', function (e) {
        if (e.target === this) {
            $('.wrapper').removeClass('wrapper--modal-open');
            $('.header').removeClass('header--modal-open');
            $('.modal__wrapper').removeClass('modal__wrapper--modal-open');
        }
    });


    $('.quest-ticket__payment-apple').on('click', function () {
        $('#all-quest').removeClass('modal__wrapper--modal-open');
        $('#successful-payment').addClass('modal__wrapper--modal-open');

    });


});
