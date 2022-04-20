var $body;
var viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
var viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
var scroll_top;
var scroll_down;
var scroll_counter;
var mobile_width;
var content_top;
var banner_top;


$(document).ready(function () {

    $body = $('html, body');
    viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 1280;

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();

        calcContentTop();

        resizeMap();
    });

    $(window).resize(function () {
        viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });


    // Рассчет скролла и событие проскрола верхнего баннера
    function calcContentTop() {
        var $header = $('.header');
        var header_height = $header.outerHeight();
        var banner = '.banner--main';
        var banner_height = 0;
        var $banner;
        var content_scroll = true;
        var $elems = $('.scroll-holder');

        // Проверка наличия баннера
        if ($(banner).length > 0) {
            $banner = $(banner);
            banner_height = $banner.outerHeight();
        }

        // Определение значений скроллов
        if (scroll_top <= banner_height) {
            content_top = (banner_height - scroll_top) + header_height;
            banner_top = (banner_height - scroll_top);
            content_scroll = false;
        } else {
            content_top = header_height;
            banner_top = 0;
            content_scroll = true;
        }

        // Сдвиг элементов
        if (!content_scroll) {
            $elems.css('transform', 'translateY(' + (banner_top) + 'px)');
        } else {
            $elems.css('transform', 'translateY(0)');
        }

        $(document).trigger('custom-scroll', [content_scroll, content_top, banner_top]);
    }

    calcContentTop();

    // Подстройка карты под экран с учетом скролла баннера
    function resizeMap() {
        var map_class = 'wrapper__map';

        if ($('.' + map_class).length > 0) {
            $('.' + map_class).css('top', content_top + 'px');
        }
    }

    resizeMap();

    // Переключение карты
    function toggleMap() {
        var $switch_button = $('.wrapper__switch-button');
        var active_button_class = 'active';
        var map_button_class = 'wrapper__switch-button--map';
        var list_button_class = 'wrapper__switch-button--list';
        var $map = $('.wrapper__map');
        var $hidden_elems = $('.wrapper__map-toggle');
        var hidden_elems_class = 'wrapper__map-toggle--hidden';

        $switch_button.on('click', function () {
            var $button = $(this);

            if ($button.hasClass(active_button_class) === false) {
                if ($button.hasClass(map_button_class) === true) {
                    $map.removeClass(hidden_elems_class);
                    $hidden_elems.addClass(hidden_elems_class);
                } else {
                    $map.addClass(hidden_elems_class);
                    $hidden_elems.removeClass(hidden_elems_class);
                }

                $switch_button.removeClass(active_button_class);
                $button.addClass(active_button_class);
            }
        });
    }

    toggleMap();

    // Обработка фильтра районов
    function handlerDistrict() {
        var list_item_class = 'district-filter__list-item';
        var list_item_class_all = 'district-filter__list-item--all';
        var list_item_selected_class = 'district-filter__list-item--selected';
        var del_item_class = 'district-filter__result-item-del';
        var del_item_wrapper_class = 'district-filter__result-item';
        var $result = $('.district-filter__result');

        $(document).on('click', function (e) {
            var $click = $(e.target);
            var district;
            var data_district;

            if ($click.hasClass(list_item_class) === true) {
                if ($click.hasClass(list_item_class_all) === true) {
                    $result.empty();
                    $('.' + list_item_class).removeClass(list_item_selected_class);
                } else {
                    district = $click.text().trim();
                    data_district = $click.data('district');

                    var result_item_template = '' +
                        '<div class="district-filter__result-item" data-district-selected="' + data_district + '">' +
                        '   <div class="district-filter__result-item-name">' + district + '</div>' +
                        '   <div class="district-filter__result-item-del"></div>' +
                        '</div>';

                    $result.append(result_item_template);

                    $click.addClass(list_item_selected_class);
                }
            } else if ($click.hasClass(del_item_class) === true) {
                var $item = $click.closest('.' + del_item_wrapper_class);
                data_district = $item.data('district-selected');
                var $selected_item = $('.' + list_item_class + '[data-district="' + data_district + '"]');
                $selected_item.removeClass(list_item_selected_class);
                $item.remove();
            }
        });
    }

    handlerDistrict();

    // Функция меню
    function Menu(button, menu, background, active_class) {
        var state = false;
        var buttons = button.split(', ');
        var menu_blocks = menu.split(', ');

        if (background) {
            var backgrounds = background.split(', ');
        }

        if (!active_class) {
            active_class = 'active';
        }

        this.open = function () {
            openMenu();
        };

        this.close = function () {
            closeMenu();
        };

        this.state = function () {
            return state;
        };

        function openMenu() {
            state = true;

            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).addClass(active_class);
            }

            for (var i = 0; i < menu_blocks.length; i++) {
                $(menu_blocks[i]).addClass(active_class);
            }

            if (background) {
                for (var i = 0; i < backgrounds.length; i++) {
                    $(backgrounds[i]).addClass(active_class);
                }
            }

            $(document).trigger('change_menu');
        }

        function closeMenu() {
            state = false;

            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).removeClass(active_class);
            }

            for (var i = 0; i < menu_blocks.length; i++) {
                $(menu_blocks[i]).removeClass(active_class);
            }

            if (background) {
                for (var i = 0; i < backgrounds.length; i++) {
                    $(backgrounds[i]).removeClass(active_class);
                }
            }

            $(document).trigger('change_menu');
        }

        $(document).on('click', function (e) {
            var button_click = false;
            var menu_click = false;

            for (var i = 0; i < buttons.length; i++) {
                if ($(e.target).closest(buttons[i]).length === 1) {
                    button_click = true;
                }
            }

            for (var i = 0; i < menu_blocks.length; i++) {
                if ($(e.target).closest(menu_blocks[i]).length === 1) {
                    menu_click = true;
                }
            }

            if (state === false) {
                if (button_click === true) {
                    openMenu();
                }
            } else {
                if (menu_click === false || button_click === true) {
                    closeMenu();
                }
            }

        });
    }

    var search_menu = new Menu('.header__search-close, .header__search-toggle-button', '.header__search-wrapper');

    var header_menu = new Menu('.header__mobile-button', '.header, .menu');

    var filter_menu = new Menu('.wrapper__filter-button, .filter__close', '.wrapper__right-col');

    // Функция сдвига меню для мобильного
    function shiftMenu() {
        var header_height = $('.header').innerHeight();
        var dinamic_header_height = $('.header').innerHeight();


        console.log(header_height);


        $(document).on('change_menu', function () {
            dinamic_header_height = $('.header').innerHeight();
            console.log(dinamic_header_height);
        });
    }

    shiftMenu();

    if (viewport_width < 1280) {
        $('.header').append($('.menu'));
    }


    $('.counter__button').on('click', function () {
        var $button = $(this);
        var minus_class = 'counter__button--minus';
        var plus_class = 'counter__button--plus';
        var $number = $button.closest('.counter').find('.counter__number');
        var count = parseInt($number.text());

        if ($button.hasClass(minus_class)) {
            if (count > 1) {
                count -= 1;
                $number.text(count);
            }
        } else {
            count += 1;
            $number.text(count);
        }
    });

    $('.basket__contact-address-change').on('click', function () {
        var $button = $(this);
        var $block = $button.closest('.basket__contact-address-item');
        var $radio = $block.find('.basket__contact-item-radio-label');
        var $button_edit = $block.find('.basket__contact-address-change--edit');
        var $button_save = $block.find('.basket__contact-address-change--save');
        var button_active_class = 'active';
        var current_address = $radio.text().trim();

        current_address = current_address.replace(/ {1,}/g, " ");

        var $input = $block.find('.basket__contact-item-input');
        var hide_class = 'hide';
        var button_change_class = 'basket__contact-address-change--edit';
        var button_save_class = 'basket__contact-address-change--save';

        if ($button.hasClass(button_change_class) === true) {
            $input.val(current_address);
            $radio.addClass(hide_class);
            $input.removeClass(hide_class);
            $button_edit.removeClass(button_active_class);
            $button_save.addClass(button_active_class);
        } else {
            current_address = $input.val().trim();
            current_address = current_address.replace(/ {1,}/g, " ");
            $radio.text(current_address);
            $radio.removeClass(hide_class);
            $input.addClass(hide_class);
            $button_edit.addClass(button_active_class);
            $button_save.removeClass(button_active_class);
        }

    });


    $('.basket__contact-item-radio-input').on('change', function () {
        var $this = $(this);
        var val = $this.val();
        var new_address_val = 'new_address';

        var $block = $this.closest('.basket__contact-address-item');
        var $radio = $block.find('.basket__contact-item-radio-label');
        var $input = $block.find('.basket__contact-item-input');
        var hide_class = 'hide';

        if (val === new_address_val) {
            $radio.addClass(hide_class);
            $input.removeClass(hide_class);
        }
    });


    $('.basket__custom-radio-header-val').on('click', function () {
        var $this = $(this);
        var $block = $this.closest('.basket__custom-radio-block');
        var $items = $block.find('.basket__custom-radio');
        var $item = $this.closest('.basket__custom-radio');
        var active_class = 'active';

        $items.removeClass(active_class);
        $item.addClass(active_class);
    });

    // ----------------------------------
    // ----------------------------------
    // ----------------------------------
    // ----------------------------------
    // ----------------------------------
    // ----------------------------------


    if ($('.catalog__slider').length > 0) {

        $('.catalog__slider').owlCarousel({
            loop: true,
            mouseDrag: true,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 2,
                    nav: false,
                    dots: true
                },
                1280: {
                    items: 3,
                    nav: true,
                    dots: false
                }
            }
        });
    }


    // ------------------------
    // ------------------------
    // ------------------------
    // ------------------------
    // ------------------------
    // ------------------------
    // ------------------------


    var header_search = new Menu('.header__search-toggle', '.header__search');

    var filter_catalog = new Menu('.filter__title', '.filter__wrapper');

    var tooltip_delivery = new Menu('.cart__desc-link--delivery', '.cart__desc-link-tooltip--delivery');

    var tooltip_return = new Menu('.cart__desc-link--return', '.cart__desc-link-tooltip--return');

    // $(document).on('change_menu', function () {
    //     var $header = $('.header');
    //     var $header_bottom = $('.header__bottom');
    //     var menu_height = 0;
    //
    //     if ($header.hasClass('active') === true) {
    //         menu_height = $header.outerHeight() + $header_bottom.outerHeight();
    //
    //         if (menu_height > viewport_height) {
    //             $('body').height(menu_height);
    //         } else {
    //             $('body').height(viewport_height);
    //         }
    //
    //         $('body').addClass('open-menu');
    //
    //
    //     } else {
    //         $('body').height('auto');
    //         $('body').removeClass('open-menu');
    //     }
    //
    // });

    var swiper = new Swiper('.news-previews__wrapper, .cart-previews__wrapper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            clickable: true
        },
    });

    if (viewport_width >= mobile_width) {

        // Проверка наличия пагинации в свайп блоках
        for (var i = 0; i < $('.custom-swiper').length; i++) {
            var $wrapper = $('.custom-swiper').eq(i);
            var count_slide = $wrapper.find('.custom-swiper__slide').length;

            if (count_slide > 4) {
                $wrapper.addClass('has-pagination');
            }
        }


    }

    // Перенос телефона во внутренне меню
    if (viewport_width < mobile_width) {
        $('.phone__link').on('click', function (e) {
            e.preventDefault();
        });

        var phone_list = new Menu('.phone__button--header', '.phone__submenu--header');

        for (var k = 0; k < $('.phone').length; k++) {
            var $wrapper = $('.phone').eq(k);
            var $natural_number = $wrapper.find('.phone__link');
            var $submenu = $wrapper.find('.phone__submenu-block');
            var natural_number = $natural_number.text();
            var natural_link = $natural_number.prop('href');
            var natural_number_template = '' +
                '<a href="' + natural_link + '" class="phone__submenu-link">' +
                '<div class="phone__submenu-link-item">' + natural_number + '</div>' +
                '</a>';

            $submenu.prepend(natural_number_template);
        }
    }

    $('.categories-menu__item-button').on('click', function () {
        var $button = $(this);
        var $buttons = $('.categories-menu__item-button');
        var $submenu_all = $('.categories-menu__item-submenu');
        var $submenu = $(this).closest('.categories-menu__item').find('.categories-menu__item-submenu');

        if ($button.hasClass('active') === false) {
            $buttons.removeClass('active');
            $button.addClass('active');
            $submenu_all.hide(300);
            $submenu.slideDown(300);
        } else {
            $buttons.removeClass('active');
            $submenu_all.hide(300);
            console.log($button);
        }
    });

    if ($('.cart__preview-slider').length > 0) {

        $('.cart__preview-slider').owlCarousel({
            loop: false,
            responsive: {
                // breakpoint from 0 up
                0: {
                    mouseDrag: true,
                    nav: false,
                    dots: true,
                    margin: 0,
                    items: 1
                },
                768: {
                    mouseDrag: false,
                    nav: true,
                    dots: false,
                    margin: 10,
                    items: 3
                }
            }

        });
    }

    $('.cart__preview-slider-item').on('click', function () {
        var src = $(this).find('.cart__preview-slider-item-img').prop('src');
        var $big_preview = $('.cart__preview-img');
        var $big_preview_wrapper = $('.cart__preview-img-block');
        $big_preview.prop('src', src);
        $big_preview_wrapper.prop('href', src);
    });

    $('.cart__desc-properties-button').on('click', function () {
        var $block = $(this).closest('.cart__desc-properties').find('.cart__desc-properties-items');
        $block.toggleClass('active');
    });

    $('.tabs__header-item').on('click', function () {
        var $items = $(this).closest('.tabs').find('.tabs__item');
        var $buttons = $(this).closest('.tabs').find('.tabs__header-item');
        var goal = $(this).data('tabs-goal');
        $buttons.removeClass('active');
        $items.removeClass('active');
        $(this).addClass('active');
        $(this).closest('.tabs').find('.tabs__item[data-tabs="' + goal + '"]').addClass('active');
    });

    var active__filter_class = 'active';

    $(document).on('click', function (e) {
        var $goal = $(e.target);
        var filter_button_class = 'filter__control-header';
        var filter_wrapper_class = 'filter__control';
        var active_class = active__filter_class;
        var $active_filters = $('.' + filter_wrapper_class + '.' + active_class);

        if ($goal.hasClass(filter_button_class) === true || $goal.closest('.' + filter_button_class).length > 0) {
            var $wrapper = $goal.closest('.' + filter_wrapper_class);
            if ($wrapper.hasClass(active_class) === false) {
                for (var i = 0; i < $active_filters.length; i++) {
                    closeFilter($active_filters.eq(i), $active_filters.eq(i).data('type-filter'));
                }

                $wrapper.addClass(active_class);
            } else {
                closeFilter($wrapper, $wrapper.data('type-filter'));
            }
        } else {
            var filter_click = $goal.hasClass(filter_wrapper_class + '.' + active_class);
            var filter_click_inside = $goal.closest('.' + filter_wrapper_class + '.' + active_class).length > 0;
            var active_filters = $('.' + filter_wrapper_class + '.' + active_class).length > 0;

            if (active_filters && !filter_click && !filter_click_inside) {
                for (var i = 0; i < $active_filters.length; i++) {
                    closeFilter($active_filters.eq(i), $active_filters.eq(i).data('type-filter'));
                }
            }
        }
    });

    function closeFilter($filter, type) {
        var active_class = active__filter_class;
        $filter.removeClass(active_class);
        translateFilterValue($filter, type);
    }

    function translateFilterValue($filter, type, default_value) {
        var $val_block = $filter.find('.filter__control-value');
        var active_class = active__filter_class;
        var result_val = '';

        if (type === 'range') {
            var min = parseInt($filter.data('val-min'));
            var max = parseInt($filter.data('val-max'));


            if (!default_value) {
                var val_min = parseInt($filter.find('.range-slider__input--min').val());
                var val_max = parseInt($filter.find('.range-slider__input--max').val());

                if (val_min !== min || val_max !== max) {
                    result_val = val_min + ' – ' + val_max;
                    $val_block.text(result_val);
                } else {
                    $val_block.text('');
                }
            } else {
                $filter.find('.range-slider__item').slider("values", [min, max]);
                $filter.find('.range-slider__input--min').val(min);
                $filter.find('.range-slider__input--max').val(max);
                $val_block.text('');
            }
        } else if (type === 'checkbox') {
            if (!default_value) {
                var checkbox_values = [];

                $filter.find('.checkbox__input').each(function () {
                    if ($(this).prop('checked') === true) {
                        checkbox_values.push($(this).closest('.checkbox').find('.checkbox__label').text().trim());
                    }
                });

                for (var i = 0; i < checkbox_values.length; i++) {
                    if (i === (checkbox_values.length - 1)) {
                        result_val += checkbox_values[i];
                    } else {
                        result_val += checkbox_values[i] + ', ';
                    }
                }

                $val_block.text(result_val);
            } else {
                $filter.find('.checkbox__input').each(function () {
                    $(this).prop('checked', false);
                });
                $val_block.text('');
            }
        }


    }

    $('.filter__footer-button--clear').on('click', function () {
        $('.filter__control').each(function () {
            translateFilterValue($(this), $(this).data('type-filter'), true);
        });
    });

    $('.filter__footer-collapse').on('click', function () {
        $(this).closest('.filter__wrapper').find('.filter__controls').toggleClass('collapse');
    });

    var empty_filter_count = 3 - $('.filter__control-wrapper').length % 3;

    for (var i = 0; i < empty_filter_count; i++) {
        $('.filter__controls').append('<div class="filter__control-wrapper filter__control-wrapper--empty"></div>');
    }

    function range_slider($slider, val_min, val_max) {
        var val_current_1 = val_min;
        var val_current_2 = val_max;
        var $slider_item = $slider.find('.range-slider__item');
        var $input_min = $slider.find('.range-slider__input--min');
        var $input_max = $slider.find('.range-slider__input--max');
        var $value_min = $slider.find('.range-slider__value--min .range-slider__value-item');
        var $value_max = $slider.find('.range-slider__value--max .range-slider__value-item');

        $input_min.val(val_current_1);
        $input_max.val(val_current_2);
        $value_min.text(val_min);
        $value_max.text(val_max);

        $slider_item.slider({
            min: val_min,
            max: val_max,
            slide: function (event, ui) {
                val_current_1 = ui.values[0];
                val_current_2 = ui.values[1];
                $input_min.val(val_current_1);
                $input_max.val(val_current_2);
            },
            change: function (event, ui) {
            },
            values: [val_current_1, val_current_2],
            range: true,
            classes: {
                "ui-slider": "ui-corner-all range-slider__item-line",
                "ui-slider-handle": "ui-corner-all range-slider__item-handle",
                "ui-slider-range": "ui-corner-all ui-widget-header range-slider__item-progress"
            }
        });

        $input_min.change(function () {
            val_current_1 = $input_min.val();
            $slider_item.slider("values", [val_current_1, val_current_2]);
        });

        $input_max.change(function () {
            val_current_2 = $input_max.val();
            $slider_item.slider("values", [val_current_1, val_current_2]);
        });

    }

    $('.filter__control[data-type-filter="range"]').each(function () {
        var min = parseInt($(this).data('val-min'));
        var max = parseInt($(this).data('val-max'));
        range_slider($(this), min, max);
    });

    $('.products__header-select-view').on('click', function () {
        var $button = $(this);
        var $buttons = $('.products__header-select-view');
        var $wrapper = $('.products');
        var $items = $('.products__items');

        if ($button.hasClass('active') === false) {
            $buttons.removeClass('active');
            $button.addClass('active');

            if ($button.hasClass('products__header-select-view--grid') === true) {
                toggleView('grid');
            } else if ($button.hasClass('products__header-select-view--list') === true) {
                toggleView('list');
            }
        }

        function toggleView(view) {
            var grid_class = 'grid';
            var list_class = 'list';
            var delay = 500;
            $items.css('opacity', 0);
            $wrapper.addClass('loading');

            setTimeout(function () {
                $items.removeClass(grid_class);
                $items.removeClass(list_class);
            }, delay);

            setTimeout(function () {
                $wrapper.removeClass('loading');

                if (view === 'grid') {
                    $items.addClass(grid_class);
                } else {
                    $items.addClass(list_class);
                }

                $items.css('opacity', 1);
            }, delay * 2);
        }
    });

    var carousel;

    if (viewport_width < mobile_width) {
        carousel = new Swiper('.carousel__block', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
                clickable: true
            }
        });
    } else {
        carousel = new Swiper('.carousel__block', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    $('.basket__product-counter-button').on('click', function () {
        var $button = $(this);
        var minus_class = 'basket__product-counter-button--minus';
        var plus_class = 'basket__product-counter-button--plus';
        var $number = $button.closest('.basket__product-counter').find('.basket__product-counter-number');
        var count = parseInt($number.text());

        if ($button.hasClass(minus_class)) {
            if (count > 1) {
                count -= 1;
                $number.text(count);
            }
        } else {
            count += 1;
            $number.text(count);
        }

    });

    if (viewport_width < mobile_width) {
        if ($('.breadcrumbs__wrapper').length > 0) {
            $('.breadcrumbs__wrapper').scrollLeft(99999);
        }
    }

    if (viewport_width < 768) {
        $('.cart__preview-slider-item').each(function () {
            var $wrapper = $(this);
            var src = $wrapper.find('.cart__preview-slider-item-img').prop('src');
            var img_template = '' +
                '<a href="' + src + '" data-fancybox="gallery" class="cart__preview-slider-item-link">' +
                '<img class="cart__preview-slider-item-img" src="' + src + '">' +
                '</a>';
            $wrapper.empty();
            $wrapper.append(img_template);
        });
    }


    $('input[name="phone"]').mask('+7 (999) 999-9999', {placeholder: "+7 (___) ___-____"});

    // Функция стилизованного селекта
    if ($('.select').length > 0) {
        $('.select').each(function () {
            var $select = $(this);
            var class_name = $select.data('class-wrapper');

            if (!$select.data('class-wrapper')) {
                class_name = 'select';
            } else {
                class_name = $select.data('class-wrapper');
            }


            var options = [];
            var placeholder_val;

            for (var i = 0; i < $(this).find('select option').length; i++) {
                var $option = $(this).find('select option').eq(i);

                if ($option.val() === ('option-placeholder')) {
                    placeholder_val = $option.val();
                }

                var val = $option.val();
                var name = $option.text().charAt(0).toLowerCase();
                options[i] = {val: val, name: name};
            }

            function placeholderCheck($button, val) {
                if (val === placeholder_val) {
                    $button.addClass(class_name + '__button--placeholder');
                } else {
                    $button.removeClass(class_name + '__button--placeholder');
                }
            }

            function search(source, name) {
                var results;
                name = name.toString().toLowerCase();
                results = $.map(source, function (entry) {
                    var match = entry.name.toLowerCase().indexOf(name) !== -1;
                    return match ? entry : null;
                });
                return results;
            }

            $select.find('select').selectmenu({
                classes: {
                    "ui-selectmenu-button-open": class_name + "__button " + class_name + "__button--open",
                    "ui-selectmenu-button-closed": class_name + "__button",
                    "ui-selectmenu-icon": class_name + "__icon",
                    "ui-selectmenu-text": class_name + "__text",
                    "ui-selectmenu-menu": class_name + "__menu"
                },
                create: function (event, ui) {
                    inputListening($(event.target));
                    placeholderCheck($(event.target).selectmenu("widget"), $(event.target).val());
                },
                focus: function (event, ui) {

                },
                change: function (event, ui) {
                    placeholderCheck($(event.target).selectmenu("widget"), $(event.target).val());
                    $(event.target).trigger('change');
                }
            });

            function inputListening($select_widget) {

                var last_symbol = '';
                var last_try = 0;

                $select.keydown(function (eventObject) {
                    var wasOpen = $($select_widget.selectmenu("menuWidget")).is(":visible");

                    if (eventObject.which === 40 && !wasOpen) {
                        $select_widget.selectmenu("open");
                    }

                    if (eventObject.originalEvent.key.length === 1) {
                        var symbol = eventObject.originalEvent.key;
                        var count_result = search(options, symbol).length;

                        if (count_result > 0) {
                            if (symbol === last_symbol) {
                                last_try = last_try + 1;

                                if (last_try === count_result) {
                                    last_try = 0;
                                }

                                $select.find('select').val(search(options, symbol)[last_try].val);
                                $select_widget.selectmenu("refresh");
                            } else {
                                last_symbol = symbol;
                                last_try = 0;
                                $select.find('select').val(search(options, symbol)[last_try].val);
                                $select_widget.selectmenu("refresh");
                            }

                        }


                    }
                });
            }


        });
    }

    // Функция модальных окон
    function modalToggle() {
        var state = false;
        var $open_buttons = $('.open-modal');
        var $close_buttons = $('.close-modal');
        var $background = $('.modal__background');
        var $modals = $('.modal__block');
        var active_class = 'active';

        this.open = function (modal_name) {
            openModal(modal_name);
        };

        this.close = function () {
            closeModal();
        };

        this.state = function () {
            return state;
        };

        function openModal(modal_name) {
            state = true;
            var $modal = $('div[data-modal-name="' + modal_name + '"]');
            $background.addClass(active_class);
            $modals.removeClass(active_class);
            $modal.addClass(active_class);
        }

        function closeModal() {
            state = false;
            $background.removeClass(active_class);
            $modals.removeClass(active_class);
        }

        $open_buttons.on('click', function () {
            openModal($(this).data('modal'));
        });

        $close_buttons.on('click', function () {
            closeModal();
        });

        console.log(scroll_top);
        console.log(viewport_height);
        console.log($modals);
        $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');

        $(window).scroll(function () {
            if (state === false) {
                console.log(scroll_top);
                console.log(viewport_height);
                $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');
            }
        });

    }

    if ($('.modal__background').length > 0 && $('.modal__block').length > 0) {
        var modals = new modalToggle();
    }

    $('.cart__desc-properties-color').on('click', function () {
        var $button = $(this);
        var $buttons = $(this).closest('.cart__desc-properties-colors').find('.cart__desc-properties-color');
        $buttons.removeClass('active');
        $button.addClass('active');
    });

    $('.products__item-desc-color').on('click', function () {
        var $button = $(this);
        var $buttons = $(this).closest('.products__item-desc-colors').find('.products__item-desc-color');
        $buttons.removeClass('active');
        $button.addClass('active');
    });


    if ($('.main-slider__block-item-inner').length > 0) {

        $('.main-slider__block-item-inner').owlCarousel({
            loop: true,
            mouseDrag: true,
            nav: true,
            dots: true,
            items: 1
        });
    }

    function Temp() {


        $('.notification__button').on('click', function () {
            $(this).closest('.notification').addClass('hide');
        });

        if ($('.bottom-menu__button--chat').length > 0 && $('.lead-form').length > 0) {
            var menu = new Menu('.bottom-menu__button--chat, .lead-form__close', '.lead-form');
        }

        // Функция смены текста
        setInterval(function () {
            $('.first__text-inner-block').toggleClass('natural');
        }, 5000);

        // Функция паралакса
        function paralaxMain() {
            var $elem_1 = $('.first__text-inner');
            var $elem_2 = $('.first__front');

            $(window).scroll(function () {
                $elem_1.css('transform', 'translateY(' + (scroll_top * .6) + 'px)');
                $elem_2.css('transform', 'translateY(' + (scroll_top * .4) + 'px)');
            });
        }

        if ($('.first__text-inner').length > 0) {
            paralaxMain();
        }

        // Функция фильтрации
        function blockSwitch($filter_block, button_class, elem_class) {

            function randomInteger(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
            }

            var filter_block_id = randomInteger(0, 10000);
            $filter_block.attr('id', filter_block_id);
            var filter_option_mobile = 'switch-mobile';
            var filter_option_desktop = 'switch-desktop';
            var goal_option = 'switch-goal';

            var active_class = 'active';
            var hide_class = 'hide';

            var names = [];
            var $mobile_blocks = [];
            var $desktop_blocks = [];
            var $all_mobile_blocks = [];
            var $all_desktop_blocks = [];
            var $buttons = [];

            $filter_block.find(button_class).each(function () {
                names.push($(this).data(goal_option));
                $buttons.push($(this));
            });

            for (var i = 0; i < names.length; i++) {
                $mobile_blocks.push([]);
                $desktop_blocks.push([]);
            }

            $(elem_class).each(function () {
                if ($(this).data(filter_option_mobile)) {
                    $all_mobile_blocks.push($(this));

                    var filters_options = $(this).data(filter_option_mobile).split(', ');

                    for (var i = 0; i < names.length; i++) {
                        for (var k = 0; k < filters_options.length; k++) {
                            if (filters_options[k] === names[i]) {
                                $mobile_blocks[i].push($(this));
                            }
                        }
                    }
                }

                if ($(this).data(filter_option_desktop)) {
                    $all_desktop_blocks.push($(this));

                    var filters_options = $(this).data(filter_option_desktop).split(', ');

                    for (var i = 0; i < names.length; i++) {
                        for (var k = 0; k < filters_options.length; k++) {
                            if (filters_options[k] === names[i]) {
                                $desktop_blocks[i].push($(this));
                            }
                        }
                    }
                }
            });


            function blockSwitchActive() {
                var active_goal = names.indexOf($filter_block.find(button_class + '.' + active_class).data(goal_option));

                $($all_mobile_blocks).each(function () {
                    $(this).addClass(hide_class);
                });

                $($all_desktop_blocks).each(function () {
                    $(this).addClass(hide_class);
                });

                if (viewport_width < mobile_width) {

                    for (var i = 0; i < $mobile_blocks[active_goal].length; i++) {
                        $mobile_blocks[active_goal][i].removeClass(hide_class);
                    }


                } else {

                    for (var i = 0; i < $desktop_blocks[active_goal].length; i++) {
                        $desktop_blocks[active_goal][i].removeClass(hide_class);
                    }


                }
            }

            blockSwitchActive();

            $('#' + filter_block_id + ' ' + button_class).on('click', function () {
                $filter_block.find(button_class).removeClass(active_class);
                $(this).addClass(active_class);
                blockSwitchActive();
            });

            $(window).resize(function () {
                blockSwitchActive();
            });
        }

        if ($('.switch__buttons').length > 0) {
            $('.switch__buttons').each(function () {
                blockSwitch($(this), '.switch__button', '.switch__elem');
            });
        }


        // Функция селекта с автокомплитом
        $.widget("custom.combobox", {
            _create: function () {
                var class_name = this.element.data('class-wrapper');

                if (!this.element.data('class-wrapper')) {
                    class_name = 'select-autocomplete';
                } else {
                    class_name = this.element.data('class-wrapper');
                }

                this.wrapper = $('<div>')
                    .addClass(class_name + '__button')
                    .insertAfter(this.element);

                this.element.hide();
                this._createAutocomplete();
                this._createShowAllButton();
            },

            _createAutocomplete: function () {
                var selected = this.element.children(":selected");
                var class_name = this.element.data('class-wrapper');

                if (!this.element.data('class-wrapper')) {
                    class_name = 'select-autocomplete';
                } else {
                    class_name = this.element.data('class-wrapper');
                }


                this.input = $("<input>")
                    .appendTo(this.wrapper)
                    .attr("placeholder", $(this.element).closest('.' + class_name).data('placeholder'))
                    .addClass(class_name + "__text")
                    .autocomplete({
                        delay: 0,
                        minLength: 0,
                        source: $.proxy(this, "_source"),
                        classes: {
                            "ui-autocomplete": class_name + "__menu"
                        },
                        open: function (event, ui) {
                            $(event.target).closest('.' + class_name).find('.' + class_name + '__button').addClass(class_name + '__button--open');
                        },
                        close: function (event, ui) {
                            $(event.target).closest('.' + class_name).find('.' + class_name + '__button').removeClass(class_name + '__button--open');
                        },
                        change: function (event, ui) {
                            $(event.target).closest('.' + class_name).find('select').trigger('change');
                        }
                    });


                var wasOpen;

                this.input.on('click', function () {
                    var input = $(this);
                    wasOpen = input.autocomplete("widget").is(":visible");
                    input.trigger("focus");
                    if (wasOpen) {
                        input.autocomplete("close");
                    } else {
                        input.autocomplete("search", input.val());
                    }

                });

                this._on(this.input, {
                    autocompleteselect: function (event, ui) {
                        ui.item.option.selected = true;
                        this._trigger("select", event, {
                            item: ui.item.option
                        });
                    },
                    autocompletechange: "_removeIfInvalid",
                    focus: function (event, ui) {

                    }
                });
            },

            _source: function (request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                response(this.element.children("option").map(function () {
                    var text = $(this).text();

                    if (this.value && this.value !== 'option-placeholder' && (!request.term || matcher.test(text)))
                        return {
                            label: text,
                            value: text,
                            option: this
                        };


                }));
            },

            _removeIfInvalid: function (event, ui) {

                // Selected an item, nothing to do
                if (ui.item) {
                    return;
                }

                // Search for a match (case-insensitive)
                var value = this.input.val(),
                    valueLowerCase = value.toLowerCase(),
                    valid = false;
                this.element.children("option").each(function () {
                    if ($(this).text().toLowerCase() === valueLowerCase) {
                        this.selected = valid = true;
                        return false;
                    }
                });

                // Found a match, nothing to do
                if (valid) {
                    return;
                }

                // Remove invalid value
                this.input
                    .val("");
                this.element.val("");
                this.input.autocomplete("instance").term = "";
            },

            _destroy: function () {
                this.wrapper.remove();
                this.element.show();
            },

            _createShowAllButton: function () {
                var input = this.input,
                    wasOpen = false;

                var class_name = this.element.data('class-wrapper');

                if (!this.element.data('class-wrapper')) {
                    class_name = 'select-autocomplete';
                } else {
                    class_name = this.element.data('class-wrapper');
                }

                $("<span>")
                    .appendTo(this.wrapper)
                    .removeClass("ui-corner-all")
                    .addClass(class_name + "__icon")
                    .on("mousedown", function () {
                        wasOpen = input.autocomplete("widget").is(":visible");
                    })
                    .on('click', function () {
                        input.trigger("focus");

                        if (wasOpen) {
                            return;
                        }

                        input.autocomplete("search", "");
                    });
            }
        });

        if ($('.select-autocomplete').length > 0) {
            $('.select-autocomplete').each(function () {
                $(this).find('select').combobox();
            });
        }


        // Функция инпута с автокомплитом
        if ($('.input-autocomplete').length > 0) {
            $('.input-autocomplete').each(function () {
                var $input = $(this);
                var options = [];

                $input.find('datalist option').each(function () {
                    options.push(this.innerText);
                });

                $input.find('input').autocomplete({
                    source: options,
                    classes: {
                        "ui-autocomplete": "input-autocomplete__menu"
                    },
                    close: function (event, ui) {
                        $input.removeClass('input-autocomplete--open');
                    },
                    open: function (event, ui) {
                        $input.addClass('input-autocomplete--open');
                    },
                    change: function (event, ui) {
                        $(event.target).trigger('change');
                    },
                    focus: function (event, ui) {
                    }
                });
            });
        }


        // Функция проверки форм

        var required_message = 'Обязательное поле';
        var warning_class = 'warning';
        var warning_block = '<div class="' + warning_class + '"></div>';

        // Создание ассоциативного массива форм
        var validate_forms = new Map();

        if ($('.form-check').length > 0) {

            for (var i = 0; i < $('.form-check').length; i++) {
                var $form = $($('.form-check')[i]);
                var func = new formValidate($form);
                var name;

                if ($form.attr('id')) {
                    name = $form.attr('id');
                } else {
                    name = 'form_' + i;
                }

                validate_forms.set(name, func);
            }
        }

        // Функции валидации формы
        function formValidate($form, listening_changes) {
            if (!listening_changes) {
                listening_changes = true;
            }

            var $form_fields = $form.find('.form-check__field');

            this.validate_with_error = function () {
                handlerFields(true);
            };

            this.validate_without_error = function () {
                handlerFields(false);
            };

            this.refresh = function () {
                createFieldsArray();
                runChangeInputListening();
            };

            this.handler_false = function () {
                formValidateHandler($form, false);
            };

            this.handler_true = function () {
                formValidateHandler($form, true);
            };

            var fields = [];

            function createFieldsArray() {
                $form_fields = $form.find('.form-check__field');
                fields = [];

                for (var i = 0; i < $form_fields.length; i++) {
                    var $field = $($form_fields[i]);
                    var input_type = $field.data('check-type');
                    var $input = $field.find(input_type);
                    var checks = $field.data('check').split(', ');
                    fields.push([checks, $input, $field]);
                }
            }

            createFieldsArray();

            for (var k = 0; k < fields.length; k++) {
                if (fields[k][2].find('.' + warning_class).length === 0) {
                    $(warning_block).appendTo(fields[k][2]);
                }

                createWarningBlocks(fields[k][2]);
            }

            function handlerFields(show_error) {
                var validates = [];
                var validate = true;

                for (var k = 0; k < fields.length; k++) {
                    validates.push(validateField(fields[k][0], fields[k][1], fields[k][2], show_error));
                }

                for (var l = 0; l < validates.length; l++) {
                    if (validates[l] === false) {
                        validate = false;
                    }
                }

                formValidateHandler($form, validate);
            }

            function runChangeInputListening() {
                if (listening_changes) {
                    for (var i = 0; i < fields.length; i++) {
                        changeInputListening(fields[i][0], fields[i][1], fields[i][2]);
                    }
                }
            }

            runChangeInputListening();

            function changeInputListening(checks, $input, $wrapper) {
                $input.change(function () {
                    validateField(checks, $input, $wrapper, true);
                    handlerFields(false);
                });
            }

            formValidateHandler($form, handlerFields(false));
        }

        function formValidateHandler($form, validate) {
            var $button = $form.find('.form-check__button');

            if (validate === true) {
                $button.removeClass('disabled');
            } else {
                $button.addClass('disabled');
            }
        }

        // Функции валидации поля
        function validateField(checks, $input, $wrapper, show_error) {
            var validates_result = [];
            var messages = [];

            var validate = true;

            for (var k = 0; k < checks.length; k++) {
                var check = checks[k];

                if (check === 'select-required') {
                    validates_result.push(validateRequiredSelect($input));
                } else if (check === 'input-required') {
                    validates_result.push(validateRequiredInput($input));
                } else if (check === 'checkbox-required') {
                    validates_result.push(validateRequiredCheckbox($input));
                } else if (check === 'radio-required') {
                    validates_result.push(validateRequiredRadio($input));
                } else if (check === 'phone-lenght') {
                    validates_result.push(validatePhoneLenght($input));
                }
            }

            for (var i = 0; i < validates_result.length; i++) {


                if (validates_result[i][0] === false) {
                    validate = false;
                }

                messages.push([validates_result[i][1], validates_result[i][2]]);
            }


            if (show_error === true && messages.length > 0) {

                var priority = 0;
                var message;

                for (var n = 0; n < messages.length; n++) {

                    if (validates_result[n][2] > priority) {
                        priority = validates_result[n][2];
                        message = validates_result[n][1];
                    }
                }

                showWarning(message, $wrapper);
            }

            if (validate === true) {
                hideWarning($wrapper);
            }


            return validate;

        }

        // Проверка обязательного селекта
        function validateRequiredSelect($input) {
            var val = $input.val();
            var validate = true;
            var message;
            var priority = 100;

            if (val === 'option-placeholder') {
                validate = false;
                message = required_message;
            } else {
                validate = true;
                message = undefined;
            }

            return [validate, message, priority];
        }

        // Проверка обязательного инпута
        function validateRequiredInput($input) {
            var val = $input.val();
            var validate = true;
            var message;
            var priority = 100;

            if (val === '') {
                validate = false;
                message = required_message;
            } else {
                validate = true;
                message = undefined;
            }

            return [validate, message, priority];
        }

        // Проверка обязательного чекбокса
        function validateRequiredCheckbox($input) {
            var val = $input.prop('checked');
            var validate = true;
            var message;
            var priority = 100;

            if (val === false) {
                validate = false;
                message = 'Поставьте галочку';
            } else {
                validate = true;
                message = undefined;
            }

            return [validate, message, priority];
        }

        // Проверка обязательного радиобаттона
        function validateRequiredRadio($input) {
            var validate = false;
            var message;
            var priority = 100;

            for (var i = 0; i < $input.length; i++) {
                if ($input.eq(i).prop('checked') === true) {
                    validate = true;
                }
            }

            if (validate === false) {
                message = 'Выберите значение';
            } else {
                message = undefined;
            }

            return [validate, message, priority];
        }

        // Проверка длины телефона
        function validatePhoneLenght($input) {
            var val = $input.val();
            var validate = true;
            var message;
            var priority = 1000;

            if (val.length !== 17) {
                validate = false;
                message = 'Укажите коректный номер';
            } else {
                validate = true;
                message = undefined;
            }

            return [validate, message, priority];
        }

        // Функция показа предупреждения
        function showWarning(message, $wrapper) {
            if (!message) {
                message = required_message;
            }

            createWarningBlocks($wrapper);
            $wrapper.find('.' + warning_class).text(message);
            $wrapper.find('.' + warning_class).addClass('active');
        }

        // Функция подстановки фокуса
        function toggleFocusClass($trigger, $wrapper) {
            var class_name = 'focus';
            $trigger.on('focus', function () {
                $wrapper.addClass(class_name);
            });
            $trigger.on('focusout', function () {
                $wrapper.removeClass(class_name);
            });
        }

        $('.input').find('input, textarea').each(function () {
            toggleFocusClass($(this), $(this).closest('.input'));
        });

        $('.select-autocomplete').find('input').each(function () {
            toggleFocusClass($(this), $(this).closest('.select-autocomplete'));
        });

        $('.select').find('.select__button').each(function () {
            toggleFocusClass($(this), $(this).closest('.select'));
        });

        $('.radio').find('input').each(function () {
            toggleFocusClass($(this), $(this).closest('.radio'));
        });

        $('.checkbox').find('input').each(function () {
            toggleFocusClass($(this), $(this).closest('.checkbox'));
        });

        $('.input-autocomplete').find('input').each(function () {
            toggleFocusClass($(this), $(this).closest('.input-autocomplete'));
        });

        // Функция скрытия предупреждения
        function hideWarning($wrapper) {
            if ($wrapper.find('.' + warning_class).length > 0) {
                $wrapper.find('.' + warning_class).removeClass('active');
            }
        };

        // Функция создания оберток предупреждения
        function createWarningBlocks($wrapper) {
            if ($wrapper.find('.' + warning_class).length === 0) {
                $(warning_block).appendTo($wrapper);
            }
        };

        // Функция создания оберток внешних плэйсхолдеров
        $('[data-placeholder]').each(function () {
            var text = $(this).data('placeholder');
            var placeholder_block = '<div class="placeholder__block">' + text + '</div>';
            $(this).addClass('placeholder');
            $(placeholder_block).appendTo($(this));
        });

        $('.first__form-button').on('click', function () {
            validate_forms.get('first__form').validate_with_error();
        });

        $('.form-check__button').click(function (e) {
            var form_id = $(this).closest('.form-check').attr('id');
            validate_forms.get(form_id).validate_with_error();

            if ($(this).hasClass('disabled')) {
                e.preventDefault();
            }
        });


        $('.animation-scroll').click(function () {

            if ($(this).hasClass('scroll-top') === true) {
                $body.animate({
                    scrollTop: 0
                }, 500);
            } else {
                var goal = $(this).data('scroll-goal');

                setTimeout(function () {
                    page_scroll();
                }, 250);

                function page_scroll() {
                    var header_height = $('.header').height();
                    $body.animate({
                        scrollTop: ($(goal).offset().top) - header_height
                    }, 500);
                }

            }
        });


        $('.lead-form__autocomplite-item').on('click', function () {
            if ($(this).hasClass('use') === false) {
                $(this).addClass('use');
                var $goal = $(this).closest('.lead-form__autocomplite-wrapper').find('.lead-form__autocomplite-goal');
                var goal_val = $goal.val() + ' ' + $(this).text();
                $goal.val(goal_val);
            }
        });


        if ($('.partners__block').length > 0) {

            $('.partners__block').owlCarousel({
                loop: false,
                mouseDrag: true,
                nav: true,
                dots: false,
                margin: 0,
                items: 1
            });


            if (viewport_width > mobile_width) {
                $('.partners__block').removeClass('owl-carousel');

                $('.partners__block').trigger('destroy.owl.carousel');
            }
        }


        if (viewport_width < mobile_width) {
            $('.about-desc__faq').eq(0).find('.about-desc__faq-item').each(function () {
                if ($(this).hasClass('active')) {
                    var $text = $(this).find('.about-desc__faq-item-text');
                    $(this).css('padding-bottom', $text.height() + 'px');
                    $(this).addClass('active');
                }
            });
        } else {
            $('.about-desc__faq-item').each(function () {
                if ($(this).hasClass('active')) {
                    var $text = $(this).find('.about-desc__faq-item-text');
                    $(this).css('padding-bottom', $text.height() + 'px');
                    $(this).addClass('active');
                }
            });
        }


        function toggleFaq($item) {
            var $wrapper = $item.closest('.about-desc__faq-item');
            var $all_items = $item.closest('.about-desc__faq').find('.about-desc__faq-item-text');
            var $all_wrappers = $item.closest('.about-desc__faq').find('.about-desc__faq-item');
            var $text = $wrapper.find('.about-desc__faq-item-text');
            var state = false;

            if ($wrapper.hasClass('active')) {
                state = true;
            }

            $all_wrappers.removeClass('active');
            $all_wrappers.css('padding-bottom', '0px');

            if (state === false) {
                $wrapper.css('padding-bottom', $text.height() + 'px');
                $wrapper.addClass('active');
            }
        }

        $('.about-desc__faq-item-title').on('click', function () {
            toggleFaq($(this));
        });

        function portfolio_filter() {

            // Общие переменные фильтра
            var $wrapper = $('.portfolio__filter-items-wrapper');
            var block_class = 'portfolio__filter-items-block';
            var $block = $('.' + block_class);
            var button_class = 'portfolio__filter-item';
            var $button = $('.' + button_class);
            var buttons_array = [];
            var line_class = 'portfolio__filter-line';
            var $line = $('.' + line_class);
            var width_items = 0;
            var start_mouse_pos;
            var start_block_scroll = $block.scrollLeft();
            var scroll_timeout = false;
            var edge_width = $('.portfolio__filter-items-wrapper-edge').width();


            // Расстановка ширины итемам фильтра
            function filter_width() {
                var n = 0;

                $button.each(function () {
                    var width_button = $(this).width();
                    var outer_width_button = $(this).outerWidth(true);
                    $(this).css('width', width_button + 'px');
                    buttons_array.push(n);
                    buttons_array[n] = {left_edge: width_items, right_edge: width_items + width_button};
                    width_items = width_items + outer_width_button;

                    n++;
                });

                width_items = parseInt(width_items);
            }

            // Расстановка мягких краев
            function soft_edge() {
                if (width_items > parseInt($block.width())) {
                    if ($block.scrollLeft() > 0) {
                        if ($wrapper.hasClass('left-edge') === false) {
                            $wrapper.addClass('left-edge');
                        }
                    } else {
                        $wrapper.removeClass('left-edge');
                    }
                    if ($block.scrollLeft() < (width_items - parseInt($block.width()))) {
                        if ($wrapper.hasClass('right-edge') === false) {
                            $wrapper.addClass('right-edge');
                        }
                    } else {
                        $wrapper.removeClass('right-edge');
                    }

                }
            }

            // Позиция линии под фильтрами
            function filter_line() {
                var $active_button = $('.' + button_class + '.active');
                var $line = $('.' + line_class);
                var shift = $active_button.position().left;
                var width = $active_button.width();
                $line.css({
                    'transform': 'translateX(' + shift + 'px)',
                    'width': width + 'px'
                });
            }

            // Функция доводчика
            function end_move(right_move) {

                var button_index;
                var shift;

                if (right_move === false) {
                    $.each(buttons_array, function (index, value) {
                        if (value["left_edge"] < $block.scrollLeft() && value["right_edge"] > $block.scrollLeft()) {
                            shift = value["left_edge"] - edge_width;
                        }
                    });
                    $block.animate({
                        scrollLeft: shift
                    }, 500);

                } else {
                    $.each(buttons_array, function (index, value) {
                        if (value["left_edge"] < ($block.scrollLeft() + $block.width()) && value["right_edge"] > ($block.scrollLeft() + $block.width())) {
                            shift = value["right_edge"] - $block.width() + edge_width;
                        }
                    });
                    $block.animate({
                        scrollLeft: shift
                    }, 500);
                }


            }

            // Переключение активных кнопок
            $button.on('click', function () {
                if ($(this).hasClass('active') === false) {
                    $button.removeClass('active');
                    $(this).addClass('active');
                    filter_line();
                }
            });

            // Эмуляция скрола для нетачевых устройств
            $(document).mousedown(function (e) {
                if ($(e.target).hasClass(block_class) === true || $(e.target).parent().hasClass(block_class)) {
                    start_mouse_pos = e.pageX;
                    start_block_scroll = parseInt($block.scrollLeft());

                    $(document).on('mousemove.shift', function (e) {
                        $block.scrollLeft(start_block_scroll - (e.pageX - start_mouse_pos));
                    });
                }
            }).mouseup(function () {
                $(document).off('mousemove.shift');
                var block_shift = start_block_scroll - parseInt($block.scrollLeft());
                if (block_shift > 20 || block_shift < -20) {
                    if (start_block_scroll > parseInt($block.scrollLeft())) {
                        end_move(false);
                    } else {
                        end_move(true);
                    }
                }
            });

            // Запуск доводчика для тачевых устройств
            $(document).on('touchstart', function (e) {
                if ($(e.target).hasClass(block_class) === true || $(e.target).parent().hasClass(block_class)) {
                    start_block_scroll = parseInt($block.scrollLeft());
                }
            }).on('touchend', function () {
                $(document).off('touchmove.shift');
                var block_shift = start_block_scroll - parseInt($block.scrollLeft());
                if (block_shift > 20 || block_shift < -20) {
                    if (start_block_scroll > parseInt($block.scrollLeft())) {
                        end_move(false);
                    } else {
                        end_move(true);
                    }
                }
            });

            // События при скроле
            $block.scroll(function () {

                $line.css('transition', 'none');
                filter_line();

                if (scroll_timeout !== false) {
                    clearTimeout(scroll_timeout);
                }

                scroll_timeout = setTimeout(function () {
                    $line.css('transition', 'all .2s ease-in');
                }, 1);

                soft_edge();
            });

            filter_line();

            filter_width();

            soft_edge();
        }

        if ($('.portfolio__filter').length > 0) {
            portfolio_filter();
        }

    };

});
