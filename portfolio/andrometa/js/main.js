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
let resolutions = new Map();
resolutions.set('desktop', {from: 1650, to: 10000, gap: 30});
resolutions.set('small-desktop', {from: 0, to: 1649, gap: 30});
// resolutions.set('desktop', {from: 10000, to: 20000, gap: 30});
// resolutions.set('small-desktop', {from: 0, to: 10000, gap: 30});
let current_resolution;

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

    stickyPanels();

    function stickyPanels() {
        let top_shift_height = $('.header__top').innerHeight() + $('.header__bottom').innerHeight();
        let $header = $('.header__sticky');
        let $side_panel = $('.side-menu');
        let side_class = 'side-menu--full-hide';
        let sticky_class = 'header__sticky--fixed';

        checkScroll();

        function checkScroll() {
            if (scroll_top > top_shift_height) {
                $header.addClass(sticky_class);
                $side_panel.removeClass(side_class);
            } else {
                $header.removeClass(sticky_class);
                $side_panel.addClass(side_class);
            }

            requestAnimationFrame(checkScroll);
        }
    }

    // Переключение боковой панели
    toggleSideMenu();

    function toggleSideMenu() {
        let $side_menu = $('.side-menu');
        let hide_class = 'side-menu--hide';

        if (viewport_width < mobile_width) {

        } else {
            $side_menu.on('mouseenter', function () {
                $side_menu.removeClass(hide_class);
            });
            $side_menu.on('mouseleave', function () {
                $side_menu.addClass(hide_class);
            });
        }
    }

    // Переключение внутреннего меню в боковой панели
    toggleSideSubMenu();

    function toggleSideSubMenu() {
        let $items = $('.side-menu__menu-item');
        let $opens = $('.side-menu__menu-item-open');
        let item_class = 'side-menu__menu-item';
        let submenu_class = 'side-menu__menu-item-submenu';
        let active_class = 'side-menu__menu-item--active';

        $opens.on('click', function () {
            let $current_item = $(this).closest('.' + item_class);
            if ($current_item.hasClass(active_class)) {
                $items.removeClass(active_class);
                $items.find('.' + submenu_class).slideUp(200, 'linear');
            } else {
                $items.removeClass(active_class);
                $items.find('.' + submenu_class).slideUp(200, 'linear');
                $current_item.addClass(active_class);
                $current_item.find('.' + submenu_class).slideDown(200, 'linear');
            }


        });
    }

    // Раскрытие карточки превью статьи
    toggleArticlesPreview();

    function toggleArticlesPreview() {
        let $items = $('.article-preview');
        let $buttons = $('.article-preview__desc-button, .article-preview__desc-title');
        let block_class = 'article-preview__desc-block';
        let main_desc_class = 'article-preview__desc-main';
        let natural_desc_class = 'article-preview__desc-natural';
        let active_class = 'open';

        $buttons.on('click', function () {
            let $current_block = $(this).closest($items).find('.' + block_class);
            let $current_item = $(this).closest($items);
            let $main = $current_block.find('.' + main_desc_class);
            let $natural = $current_block.find('.' + natural_desc_class);

            if ($current_item.hasClass(active_class)) {
                $current_block.height($main.innerHeight() + $natural.innerHeight());
                $current_block.animate({
                    height: ($main.innerHeight())
                }, 300, function () {
                    $current_item.removeClass(active_class);
                    $natural.css('top', $main.innerHeight());
                });
            } else {
                $natural.css('top', $main.innerHeight());
                $current_block.height($main.innerHeight());
                $current_block.animate({
                    height: ($main.innerHeight() + $natural.innerHeight())
                }, 300, function () {
                    $current_item.addClass(active_class);
                    $current_block.css('height', 'auto');
                });
            }
        });
    }


    // Переключение слайдера на главной странице
    if ($('.main-banner__slider-items').length > 0) {
        $('.main-banner__slider-items').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            items: 1
        });
    }

    // Переключение слайдера "О заводе" на главной странице
    if ($('.about-slider__items').length > 0) {
        $('.about-slider__items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            items: 1
        });
    }




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
});
