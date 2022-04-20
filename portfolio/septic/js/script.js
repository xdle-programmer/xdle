$(document).ready(function () {

    var breakpoint = 768;

    $('.table-expand__item-button').on('click', function () {
        $('.table-expand').addClass('table-expand--active');
    });

    $('.tabs__header-button').on('click', function () {
        $('.tabs__header-button').removeClass('active');
        $('.tabs__item').removeClass('active');
        $(this).addClass('active');
        var tabs_goal = $(this).data('tabs');
        console.log(tabs_goal);
        $(tabs_goal).addClass('active');
    });

    $(".goods__header-select").selectmenu({
        classes: {
            "ui-selectmenu-button-open": "goods__header-select-button",
            "ui-selectmenu-button-closed": "goods__header-select-button",
            "ui-selectmenu-icon": "goods__header-select-icon",
            "ui-selectmenu-menu": "goods__header-select-items"
        }
    });

    $('.goods__header-view-grid').on('click', function () {
            if ($('.goods').hasClass('goods--list') === true) {
                $('.goods').removeClass('goods--list');
            }
    });

    $('.goods__header-view-list').on('click', function () {

        if ($('.goods').hasClass('goods--list') === false) {
            $('.goods').addClass('goods--list');
        }
    });

    $(function () {
        var $spinner = $('.counter__input');

        $spinner.spinner({
            classes: {
                "ui-spinner": "counter__widget-block",
                "ui-spinner-down": "counter__widget-down counter__widget-up--gray",
                "ui-spinner-up": "counter__widget-up counter__widget-up--gray"
            }
        });

    });

    $('.product__info-preview-item-img-block').on('click', function () {
        var scroll_pos = $(window).scrollTop();
        var img = $(this).find('.product__info-preview-item-img').data('src');
        $('.product__img').attr('src', img);
        $(window).scrollTop(scroll_pos);
    });

    $('.product__info-preview-item-slider').owlCarousel({
        mouseDrag: true,
        nav: true,
        items: 3,
        margin: 10,
        dots: false
    });

    $(".header__menu-catalog-button").on('click', function (event) {
        var $elem = $(".header__menu-catalog");
        var $elem_items = $(".header__menu-catalog-inner-bottom-item");
        var name_active_class = 'active'
        $(document).off('click.closeout');
        if ($elem.hasClass(name_active_class)) {
            $elem.removeClass(name_active_class);
            $elem_items.removeClass(name_active_class);
        } else {
            $elem.addClass(name_active_class);
            setTimeout(function () {
                $(document).on('click.closeout', function (e) {
                    if (e.target !== $elem[0] && !$elem.has(e.target).length && event.target !== e.target) {
                        $elem.removeClass(name_active_class);
                        $elem_items.removeClass(name_active_class);
                        $(document).off('click.closeout');
                    }
                });
            }, 0);
        }
    });

    $('.header__menu-catalog-inner-bottom-item-name').on('click', function () {

        if (isTouchDevice() === true) {
            $('.header__menu-catalog-inner-bottom-item').removeClass('active');
            $(this).parent().addClass('active');
        }


    });

    $('.header__menu-item-search-button').on('click', function (event) {
        var $elem = $('.header__menu-item-search');
        var name_active_class = 'active';
        $(document).off('click.closeout');
        if ($elem.hasClass(name_active_class)) {
            $elem.removeClass(name_active_class);
        } else {
            $elem.addClass(name_active_class);
            setTimeout(function () {
                $(document).on('click.closeout', function (e) {
                    if (e.target !== $elem[0] && !$elem.has(e.target).length && event.target !== e.target) {
                        $elem.removeClass(name_active_class);
                        $(document).off('click.closeout');
                    } else if ($(e.target).hasClass('header__menu-item-search-inner-close') === true) {
                        $elem.removeClass(name_active_class);
                        $(document).off('click.closeout');
                    }
                });
            }, 0);
        }
    });

    $('.header__menu-button').on('click', function () {
        $('.header__menu').toggleClass('active');
    });

    // Слайдеры на мобильной версии
    if ($('div').is('.table-expand') && $(window).width() < breakpoint) {
        setTimeout(function () {
            $('.table-expand').addClass('owl-carousel active');
            setTimeout(function () {
                $('.table-expand').owlCarousel({
                    loop: true,
                    mouseDrag: true,
                    nav: true,
                    items: 1,
                    margin: 10,
                    dots: false
                });
            }, 1);
        }, 0);
    }
    if ($('div').is('.goods') && $(window).width() < breakpoint) {

            setTimeout(function () {
                $('.goods:not(.goods--non-slider)').addClass('owl-carousel active');
                setTimeout(function () {
                    $('.goods:not(.goods--non-slider)').owlCarousel({
                        loop: true,
                        mouseDrag: true,
                        nav: true,
                        items: 1,
                        margin: 10,
                        dots: false
                    });
                }, 1);
            }, 0);

    }
    if ($('div').is('.news') && $(window).width() < breakpoint) {
        setTimeout(function () {
            $('.news:not(.news--non-slider)').addClass('owl-carousel active');
            setTimeout(function () {
                $('.news:not(.news--non-slider)').owlCarousel({
                    loop: true,
                    mouseDrag: true,
                    nav: true,
                    items: 1,
                    margin: 10,
                    dots: false
                });
            }, 1);
        }, 0);
    }
    if ($('div').is('.recommend-product') && $(window).width() < breakpoint) {
        setTimeout(function () {
            $('.recommend-product').addClass('owl-carousel active');
            setTimeout(function () {
                $('.recommend-product').owlCarousel({
                    loop: true,
                    mouseDrag: true,
                    nav: true,
                    items: 1,
                    margin: 10,
                    dots: false
                });
            }, 1);
        }, 0);
    }
    if ($('div').is('.projects') && $(window).width() < breakpoint) {
        setTimeout(function () {
            $('.projects').addClass('owl-carousel active');
            setTimeout(function () {
                $('.projects').owlCarousel({
                    loop: true,
                    mouseDrag: true,
                    nav: true,
                    items: 1,
                    margin: 10,
                    dots: false
                });
            }, 1);
        }, 0);
    }

    // Открытие модального окна
    $('.open-modal').on('click', function () {
        $('.modal__wrapper').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
    });

    // Закрытие модального окна
    $('.modal__wrapper').on('click', function (e) {
        if (e.target === this || $(e.target).hasClass('modal-close') === true) {
            $('.modal__wrapper').removeClass('active');
            $('.modal__block').removeClass('active');
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

});
