$(document).ready(function () {
    var viewport_height = $(window).height();
    var scroll_top = $(window).scrollTop();
    $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');

    if ($(window).height() > $(window).width()) {
        $('body').addClass('vertical');
    }

    header_scroll();

    function header_scroll() {
        if ($(window).scrollTop() > 0) {
            if ($('.header').hasClass('header--shadow') === false) {
                $('.header').addClass('header--shadow');
            }
        } else {
            $('.header').removeClass('header--shadow');
        }
    }

    $(window).scroll(function () {
        header_scroll();
        scroll_top = $(window).scrollTop();
        $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    $(window).resize(function () {
        viewport_height = $(window).height();

        if (typeof main_slider_photo == 'function') {
            main_slider_photo();
        }
    });

    if ($('div').is('.main-slider__wrapper')) {
        $('.main-slider__wrapper').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: false,
            dots: true,
            autoplay: true,
            items: 1
        });
    }

    $('input[type=tel]').inputmask('+38 (999) 999-99-99');
    $('input[name=url]').val(url);


    $('.open-modal').on('click', function () {
        $('.modal__background').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
    });

    $('.modal__close, .modal__background').on('click', function () {
        $('.modal__background').removeClass('active');
        $('.modal__block').removeClass('active');
    });

    // $(".lead").submit(function (e) {
    //     e.preventDefault();
    //     var $form = $(this);
    //
    //     $.post("/send.php", $form.serialize(), function (data) {
    //         $('.modal__background').addClass('active');
    //         $('.modal__block').removeClass('active');
    //         $('#modal-thank-you').addClass('active');
    //         $('input[name=name]').val('');
    //         $('input[name=phone]').val('');
    //     });
    // });

    $(".lead__button").on('click', function (e) {
        e.preventDefault();

        var form_name = $(this).siblings('.lead__input-block').find('[name="name"]').val();
        var phone = $(this).siblings('.lead__input-block').find('[name="phone"]').val();
        var phone_count = phone.length - phone.replace(/\d/gm, '').length;

        // if (isEmpty(form_name) === true || isEmpty(phone) === true || checkPhone(phone) === false  ) {
        if (isEmpty(phone) === true || checkPhone(phone) === false) {
            $(this).parents('.lead').submit();
        } else {
            $(this).parents('.lead').submit();
            $('.modal__background').addClass('active');
            $('.modal__block').removeClass('active');
            $('#modal-thank-you').addClass('active');
            $('input[name=name]').val('');
            $('input[name=phone]').val('');
        }
    });

    function isEmpty(str) {
        if (str.trim() == '') return true;

        return false;
    }

    function checkPhone(phone) {
        var count = phone.length - phone.replace(/\d/gm, '').length;
        if (count == '12') return true;

        return false;
    }

    $('.goods-form-buy').on('click', function () {
        var $form_name = $(this).closest('.goods__item').find('.goods__item-desc-name').text();
        var modal_goal = $(this).data('modal');
        $(modal_goal).find('input[name=form_name]').val($form_name);
        $(modal_goal).find('.title span').text($form_name);
    });


    $('.product-form-buy').on('click', function () {
        var $form_name = $('.product__desc-name').text();
        var modal_goal = $(this).data('modal');
        $(modal_goal).find('input[name=form_name]').val($form_name);
        $(modal_goal).find('.title span').text($form_name);
    });


    $('.filter__item').on('click', function () {
        $('.filter__item').removeClass('active');
        $(this).addClass('active');

        var elements_class = $(this).data('filter-element');
        var filter_goal = $(this).data('filter-goal');

        $('.' + elements_class).each(function () {
            if ($(this).data('filter-item').includes(filter_goal)) {
                $(this).removeClass('hide');
            } else {
                $(this).addClass('hide');
            }
        });
    });

    if ($('div').is('.product__preview-slider')) {
        var owl_product = $('.product__preview-slider').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: true,
            dots: false,
            items: 1,
            responsive: {
                0: {
                    nav: false,
                    dots: true
                },

                768: {
                    nav: true,
                    dots: false
                }
            }
        });
        owl_product.owlCarousel();

        $('.product__preview-small-item').click(function () {
            var small_items = $('.product__preview-small-item');
            var goal = (small_items).index(this);
            owl_product.trigger('to.owl.carousel', [goal, 300]);
        });
    }


// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------


    $('.goods__item-photo-preview-item').on('click', function () {
        var img = $(this).data('src');
        var $preview = $(this).closest('.goods__item').find('.goods__item-photo-preview-block');
        $preview.addClass('active');
        $preview.css('background', 'url(' + img + ')');
    });

    $('.header__mobile-button-menu').on('click', function () {
        $('.header').addClass('open-menu');
        $('.header__menu-close').addClass('active');
        $('.header__menu').addClass('active');
        $('.header__menu').css('top', (viewport_height / 2) + 'px');
        console.log(scroll_top);
        console.log(viewport_height / 2);
        $('.header__mobile-background').addClass('active');
    });

    $('.header__mobile-background, .header__menu-close').on('click', function () {
        $('.header').removeClass('open-menu');
        $('.header__menu').removeClass('active');
        $('.header__menu-close').removeClass('active');
        $('.header__menu').css('top', 'auto');
        $('.header__mobile-background').removeClass('active');
    });

    $('.left-menu__button').on('click', function () {
        $('.left-menu__background').addClass('active');
        $('.left-menu__block').addClass('active');
        $('.left-menu__close').addClass('active');
        $('.left-menu__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    $('.left-menu__background, .left-menu__close').on('click', function () {
        $('.left-menu__background').removeClass('active');
        $('.left-menu__block').removeClass('active');
        $('.left-menu__block').css('top', 'auto');
        $('.left-menu__close').removeClass('active');
    });

    $('.filter--collapse .filter__title').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.filter--collapse .filter__item').on('click', function () {
        $(this).toggleClass('active');
    });

    // $(".goods__header-select").selectmenu({
    //     classes: {
    //         "ui-selectmenu-button-open": "goods__header-select-button",
    //         "ui-selectmenu-button-closed": "goods__header-select-button",
    //         "ui-selectmenu-icon": "goods__header-select-icon",
    //         "ui-selectmenu-menu": "goods__header-select-items"
    //     }
    // });

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


    // Скрипты для главной

    $('.sale-slider__block').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: false
    });


    if ($('div').is('.select-slider__slider-wrapper')) {

        var count = $('.select-slider__slider-wrapper').length;
        var owl_select_slider = [];
        var i = count - 1;
        for (i; i > -1; i--) {

            owl_select_slider[i] = $('.select-slider').eq(i).find('.select-slider__slider-wrapper').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: true,
                dots: true
            });

            owl_select_slider[i].owlCarousel();
        }

        $('.select-slider__select-item').click(function () {
            var $slider = $(this).closest('.select-slider');
            var goal_slider = $slider.index('.select-slider');
            var small_items = $slider.find('.select-slider__select-item');
            var goal = (small_items).index(this);
            owl_select_slider[goal_slider].trigger('to.owl.carousel', [goal, 300]);
        });

    }

    $('a').on('click', function (e) {
        if ($(e.target).hasClass('open-modal') === true) {
            e.preventDefault();
        }
    });
});
