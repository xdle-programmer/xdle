let $body;
let viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
let viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
let scroll_top;
let scroll_down;
let scroll_counter;
let mobile_width;
let content_top;
let banner_top;
let modals;
let modal_state;

$(document).ready(function () {
    $body = $('html, body');
    viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 1280;

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });


    // Переключение хэдера
    toggleHeader();

    function toggleHeader() {
        let $header = $('.header');
        let $side_menu = $('.side-menu');
        let scroll_class = 'scroll';

        checkHeaderScroll();

        $(window).scroll(function () {
            setTimeout(function () {
                checkHeaderScroll();
            }, 0);

        });


        function checkHeaderScroll() {
            // if (viewport_width > mobile_width) {
            if ($(window).scrollTop() > 10) {
                $header.addClass(scroll_class);
                $side_menu.addClass(scroll_class);
            } else {
                $header.removeClass(scroll_class);
                $side_menu.removeClass(scroll_class);
            }
            // } else {
            //     $header.removeClass(scroll_class);
            // }
        }
    }

    // Меню в хэдере
    var header_menu = new Menu('.header__toggle-button', '.header');

    var header_search = new Menu('.header__search-toggle, .header__search-close', '.header__search');

    $('.header__catalog-menu-item-open').on('click', function () {
        let $item = $(this).closest('.header__catalog-menu-item');
        let $items = $('.header__catalog-menu-item');

        if (!$item.hasClass('active')) {
            $items.removeClass('active');
            $item.addClass('active');
        } else {
            $items.removeClass('active');
        }
    });

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

            $(document).trigger('change_menu', [menu]);
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

    // Подключение слайдера
    if ($('.main-slider__items').length > 0) {
        $('.main-slider__items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            dots: false,
        });
    }
    // Подключение слайдера
    if ($('.popular__items').length > 0) {
        $('.popular__items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 3,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                1280: {
                    items: 3
                }
            }
        });
    }

    setTimeout(function () {
        createMap();
    },1000)


    function createMap() {
        let $wrapper = $('.contact__map');
        let src = $wrapper.data('src');
        let load = false;
        let template = '<iframe src="' + src + '" width="500" height="400"></iframe>';

        function checkLoadMap() {
            if (scroll_top + viewport_height + 500 - $wrapper.offset().top < 0 && !load) {
                load = true;
                $(template).appendTo($wrapper);
            }
        }

        checkLoadMap();

        $(window).on('scroll', function () {
            checkLoadMap();
        });


    }


});