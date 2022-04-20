$(document).ready(function () {

    $('.head__slider').owlCarousel({
        loop: true,
        mouseDrag: true,
        nav: false,
        items: 1,
        autoplay: true,
        margin: 0,
        dots: true
    });


    $('.events__slider').owlCarousel({
        nav: true,
        loop: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 3,
                margin: 5
            }
        }

    });


    $('.faq__item-name').on('click', function () {

        if ($(this).hasClass('active') === true) {
            $('.faq__item-name').removeClass('active');
            $('.faq__item-text').hide();
        } else {
            $('.faq__item-name').removeClass('active');
            $('.faq__item-text').hide();
            $(this).addClass('active');
            $(this).parent().find('.faq__item-text').show();
        }
    });


    $('.header__menu-button').on('click', function () {
        $('.header__menu').toggleClass('active');
    });

    $(".select").selectmenu({
        classes: {
            "ui-selectmenu-button-open": "select-button",
            "ui-selectmenu-button-closed": "select-button",
            "ui-selectmenu-icon": "select-icon",
            "ui-selectmenu-menu": "select-items"
        }
    });
});
