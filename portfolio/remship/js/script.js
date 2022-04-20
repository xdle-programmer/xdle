$(document).ready(function () {

    var $body = $('html, body');
    var viewport_height = $(window).height();
    var scroll_top = $(window).scrollTop();

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();

        if ($('.modal__background').hasClass('active') === false) {
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
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
    $('.modal__header-close, .modal__background').on('click', function () {
        $('.modal__background').removeClass('active');
        $('.modal__block').removeClass('active');
        $('.modal__block').css('top', 'auto');
    });

    // Открытие и закрытие строки поиска в хэдере
    $('.header__search').on('click', function () {
        var $search_block = $('.header__search-input-block');
        var state = false;
        $search_block.addClass('active');

        $('body').on('click', function (e) {
            if ($(e.target).hasClass('header__search-input') === false && state === true) {
                $search_block.removeClass('active');
                state = false;
            } else {
                state = true;
            }
        });

    });

    // Открытие и закрытие меню в хэдере
    $('.header__menu-button').on('click', function () {
        $('.header__menu-button').toggleClass('active');
        $('.header__menu-items').toggleClass('active');
    });

    // Открытие и закрытие меню каталога в левом меню
    $('.left-menu__item--catalog .left-menu__title').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.left-menu__order-header').on('click', function () {
        var $this_order = $(this).closest('.left-menu__order');

        if ($this_order.hasClass('active') === true) {
            $this_order.removeClass('active');
        } else {
            $('.left-menu__order').removeClass('active');
            $this_order.addClass('active');
        }
    });

    // Слайдер на главной
    if ($('div').is('.main-slider__block')) {
        $('.main-slider__block').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1
        });
    }

    // Счетчик количество товаров
    $(".counter__input").spinner({
        classes: {
            "ui-spinner": "counter__widget-block",
            "ui-spinner-down": "counter__widget-down counter__widget-up--gray",
            "ui-spinner-up": "counter__widget-up counter__widget-up--gray"
        }
    });

    // Вывод большой картинки по клику на превью
    $('.goods-cart__preview-slider-item').on('click', function () {
        var img = $(this).data('src');
        var $preview = $('.goods-cart__preview-big');
        $preview.css('background', 'url(' + img + ')');
    });

    // Слайдер превьюшек в карточке товара
    if ($('div').is('.goods-cart__preview-slider-block')) {
        $('.goods-cart__preview-slider-block').owlCarousel({
            mouseDrag: true,
            nav: false,
            dots: false,
            items: 3
        });
    }

    // Слайдер сертификатов в модальном окне
    if ($('div').is('.modal__sert')) {
        $('.modal__sert').owlCarousel({
            mouseDrag: true,
            nav: true,
            loop: true,
            dots: false,
            items: 1
        });
    }

    // Переключение табов на карточке товара
    $('.goods-cart__tabs-name').on('click', function () {
        $('.goods-cart__tabs-name').removeClass('active');
        $(this).addClass('active');
        var goal = $(this).data('tab');
        $('.goods-cart__tabs-item').removeClass('active');
        $(goal).addClass('active');
    });

    // Сворачивание и разворачивание секций на странице заказа
    $('.order__section-header').on('click', function () {
        $(this).closest('.order__section').toggleClass('active');
    });

    // Вывод подсказок города
    $("#order__city-autocomplete").autocomplete({
        delay: 0,
        minLength: 0,
        source: [
            'Москва',
            'Санкт-Петербург',
            'Новосибирск',
            'Екатеринбург',
            'Нижний Новгород',
            'Казань',
            'Челябинск',
            'Омск',
            'Самара',
            'Ростов-на-Дону',
            'Уфа',
            'Красноярск',
            'Пермь',
            'Воронеж',
            'Волгоград',
            'Краснодар',
            'Саратов',
            'Тюмень',
            'Тольятти',
            'Ижевск',
            'Барнаул',
            'Ульяновск',
            'Иркутск',
            'Хабаровск',
            'Ярославль'
        ]
    });

    // Селект на форме заказа
    $(".order__input-select").selectmenu({
        classes: {
            "ui-selectmenu-button-open": "order__input-select-button",
            "ui-selectmenu-button-closed": "order__input-select-button",
            "ui-selectmenu-icon": "order__input-select-icon",
            "ui-selectmenu-menu": "order__input-select-items"
        },
    });


    $('.order-button-next').on('click', function () {
        var $this_section = $(this).closest('.order__section');
        var this_section_index = $('.order__section').index($this_section);
        $this_section.removeClass('active');
        $('.order__section').eq(this_section_index + 1).addClass('active');
    });

    $('.order-button-prev').on('click', function () {
        var $this_section = $(this).closest('.order__section');
        var this_section_index = $('.order__section').index($this_section);
        $this_section.removeClass('active');
        $('.order__section').eq(this_section_index - 1).addClass('active');
    });

    $('.faq__item-question').on('click', function () {
        $(this).closest('.faq__item').toggleClass('active');
    });

    $('.faq__full-button').on('click', function () {
        $(this).closest('.faq__block').find('.faq__items').toggleClass('full');
    });


    $('.map__button').on('click', function () {
        $('.map').toggleClass('full');
        var scroll_goal = $('.map').offset().top;

        $body.animate({
            scrollTop: scroll_goal
        }, 500);
    });

});
