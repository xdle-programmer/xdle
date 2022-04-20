$(document).ready(function () {

    var viewport_height;
    var viewport_width;
    var scroll_top;

    var $body = $('html, body');
    viewport_height = $(window).height();
    viewport_width = $(window).width();
    scroll_top = $(document).scrollTop();
    var mobile_width = 768;
    var scroll_down;

    var $natural = $('.goods-natural');
    var natural_height = parseInt($natural.css('height'));
    var natural_width = parseInt($natural.css('width'));

    $(document).scroll(function () {

        scroll_top = $(window).scrollTop();

        if ($('.modal__background').hasClass('active') === false) {
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }

        $natural.removeClass('active');
    });

    $('.goods__wrapper').scroll(function () {
        $natural.removeClass('active');
    });

    $('.goods__item').on('mouseenter', function () {

        var item_position = $(this).position().top;

        if (item_position > -20) {
            var item_width = parseInt($(this).css('width'));
            var item_height = parseInt($(this).css('height'));

            var to_top = $(this).offset().top - scroll_top;
            var to_bottom = viewport_height - to_top - item_height;
            var to_left = $(this).offset().left;
            var to_right = viewport_width - to_left - item_width;

            if (to_top > natural_height) {
                $natural.css({
                    'top': to_top - natural_height + 'px',
                    'bottom': 'auto'
                });
                $natural.addClass('top');
                $natural.removeClass('bottom');
            } else {
                $natural.css({
                    'top': 'auto',
                    'bottom': to_bottom - natural_height + 'px'
                });
                $natural.addClass('bottom');
                $natural.removeClass('top');
            }

            if (to_right > natural_width) {
                $natural.css({
                    'left': to_left + 'px',
                    'right': 'auto'
                });
                $natural.addClass('left');
                $natural.removeClass('right');
            } else {
                $natural.css({
                    'left': 'auto',
                    'right': to_right + 'px'
                });
                $natural.addClass('right');
                $natural.removeClass('left');
            }


            // $natural.addClass('active');
            setTimeout(function () {
                $natural.addClass('active');
            }, 10);
        }

        var mouse_to_natural = false;

        $(this).on('mouseleave', function () {
            $('.goods-natural.active').on('mouseenter', function () {
                mouse_to_natural = true;
            });

            setTimeout(function () {
                if (mouse_to_natural === false) {
                    $natural.removeClass('active');
                }
            }, 10);
        });

        $('.goods-natural.active').on('mouseleave', function () {
            $natural.removeClass('active');
        });

    });

    $(window).resize(function () {
        viewport_height = $(window).height();
    });

    $('.open-modal').on('click', function () {
        $('.modal__background').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
        $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    $('.modal__close, .modal__background').on('click', function () {
        $('.modal__background').removeClass('active');
        $('.modal__block').removeClass('active');
        $('.modal__block').css('top', 'auto');
    });

    $('.lang-selector').on('click', function () {
        $('.lang-selector').removeClass('active');
        var $menu = $(this);
        var open = false;
        $menu.addClass('active');
        $(document).on('click.closeout', function () {
            if (open === true) {
                $menu.removeClass('active');
                open = false;
                $(document).off('click.closeout');
            } else {
                open = true;
            }
        });
    });

    $('.lang-selector__item').on('click', function () {
        var $item = $(this);
        var $button = $(this).closest('.lang-selector').find('.lang-selector__button');
        $button.empty();
        var $new_item = $item.clone();
        $button.append($new_item);
    });

    $('.goods__item').on('click', function () {
        $(this).toggleClass('active');
    });


    $('.goods-header__title-mobile').on('click', function () {
        var $wrapper = $(this).closest('.content__block');
        var index = $wrapper.find('.goods-header__title-mobile').index(this);
        var $goods = $wrapper.find('.content__item');
        $goods.addClass('hide');
        $goods.eq(index - 1).removeClass('hide');
    });

    if ($('select').is('.select')) {


        $(".select").each(function () {

            var button_open_class = "select__button select__button--open";
            var button_closed_class = "select__button";
            var button_icon_class = "select__icon";
            var button_text_class = "select__text";
            var button_menu_class = "select__menu";

            if ($(this).hasClass('select--blue') === true) {
                button_open_class += ' select__button--blue';
                button_closed_class += ' select__button--blue';
                button_text_class += ' select__text--blue';
                button_menu_class += ' select__menu--blue';
            }

            if ($(this).hasClass('select--small') === true) {
                button_open_class += ' select__button--small';
                button_closed_class += ' select__button--small';
                button_text_class += ' select__text--small';
                button_menu_class += ' select__menu--small';
            }

            var classes = {
                "ui-selectmenu-button-open": button_open_class,
                "ui-selectmenu-button-closed": button_closed_class,
                "ui-selectmenu-icon": button_icon_class,
                "ui-selectmenu-text": button_text_class,
                "ui-selectmenu-menu": button_menu_class
            };

            $(this).selectmenu({
                classes: classes
            });
        });


    }

    $('.content__switch-item').on('click', function () {
        $('.content__item--switch').removeClass('active');
        $('.content__switch-item').removeClass('active');
        var index = $('.content__switch-item').index($(this));
        $('.content__item--switch').eq(index).addClass('active');
        $(this).addClass('active');
    });

    $('.modal__faq-item-title').on('click', function () {
        $(this).closest('.modal__faq-item').find('.modal__faq-item-text').toggle(300);
    });


    function Menu(button, menu, background, active_class) {
        var state = false;
        var buttons = button.split(', ');
        var menu_bloks = menu.split(', ');

        if (background) {
            var backgrounds = background.split(', ');
        }

        if (!active_class) {
            active_class = 'active';
        }

        this.open = function () {
            openMenu()
        };

        this.close = function () {
            closeMenu()
        };

        this.state = function () {
            return state;
        };

        function openMenu() {
            state = true;

            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).addClass(active_class);
            }

            for (var i = 0; i < menu_bloks.length; i++) {
                $(menu_bloks[i]).addClass(active_class);
            }

            if (background) {
                for (var i = 0; i < backgrounds.length; i++) {
                    $(backgrounds[i]).addClass(active_class);
                }
            }
        }

        function closeMenu() {
            state = false;

            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).removeClass(active_class);
            }

            for (var i = 0; i < menu_bloks.length; i++) {
                $(menu_bloks[i]).removeClass(active_class);
            }

            if (background) {
                for (var i = 0; i < backgrounds.length; i++) {
                    $(backgrounds[i]).removeClass(active_class);
                }
            }
        }

        $(document).on('click', function (e) {
            var button_click = false;
            var menu_click = false;

            for (var i = 0; i < buttons.length; i++) {
                if ($(e.target).closest(buttons[i]).length === 1) {
                    button_click = true;
                }
            }

            for (var i = 0; i < menu_bloks.length; i++) {
                if ($(e.target).closest(menu_bloks[i]).length === 1) {
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

    var filterMenu = new Menu('.content__menu-button', '.content__menu', '.mobile-shadow');
    var accountMenu = new Menu('.header__login, .header__mobile-menu', '.header__login-menu', '.mobile-shadow');
    var chat = new Menu('.chat__switch', '.chat, .chat__send');

    var swipe_area = 45;
    var swipe_start;

    $('.wrapper').swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount, fingerData) {
            leftSwipe(fingerData[0].start.x)
        },

        swipeRight: function (event, direction, distance, duration, fingerCount, fingerData) {
            rightSwipe(fingerData[0].start.x)
        },
        threshold: 30,
        excludedElements: "button, input, select, textarea, .noSwipe"
    });


    function leftSwipe(start) {
        swipe_start = start;

        if (accountMenu.state() === true) {
            accountMenu.close();
        } else {
            if (viewport_width - swipe_start < swipe_area) {
                filterMenu.open();
            }
        }
    }

    function rightSwipe(start) {
        swipe_start = start;

        if (filterMenu.state() === true) {
            filterMenu.close();
        } else {
            if (swipe_start < swipe_area) {
                accountMenu.open();
            }
        }
    }


    if ($('.chat__buttons')) {
        $('.chat__buttons').each(function () {
        blockSwitch($(this), '.chat__button', '.chat__item');
        });
    }

    function blockSwitch($filter_block, button_class, elem_class) {

        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
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
            blockSwitchActive()
        });

        $(window).resize(function () {
            blockSwitchActive();
        });
    }



});


