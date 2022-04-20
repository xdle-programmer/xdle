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
        let scroll_class = 'scroll';

        checkHeaderScroll();

        $(window).scroll(function () {
            setTimeout(function () {
                checkHeaderScroll();
            }, 0);

        });


        function checkHeaderScroll() {
            if (viewport_width > mobile_width) {
                if ($(window).scrollTop() > 10) {
                    $header.addClass(scroll_class);
                } else {
                    $header.removeClass(scroll_class);
                }
            } else {
                $header.removeClass(scroll_class);
            }
        }
    }

    // Меню в хэдере
    var header_menu = new Menu('.header__toggle-button', '.header');

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

    // Функция переключения вкладок

    if ($('.switch__buttons').length > 0) {
        $('.switch__buttons').each(function () {
            blockSwitch($(this), '.switch__button', '.switch__elem');
        });
    }

    if ($('.switch-bottom__buttons').length > 0) {
        $('.switch-bottom__buttons').each(function () {
            blockSwitch($(this), '.switch-bottom__button', '.switch-bottom__elem');
        });
    }

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

    // Подключение слайдера
    if ($('.how-to-work__slider-items').length > 0) {
        $('.how-to-work__slider-items').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            dots: false,
            items: 1
        });

        $('.how-to-work__slider-items').on('changed.owl.carousel', function (event) {
            $('.how-to-work__slider-number-current').text(event.item.index + 1);
        });
    }


    $('.animation-scroll').click(function () {

        var goal = $(this).data('scroll-goal');
        $('.header').removeClass('active');
        $('.header').addClass('scroll');

        page_scroll();

        function page_scroll() {
            var header_height = $('.header').height();
            // $body.scrollTop($(goal).offset().top - header_height)
            // console.log($(goal).offset().top - header_height)

            $body.animate({
                scrollTop: ($(goal).offset().top) - header_height
            }, 500);
        }
    });

    let element_count = $('.pharmacy__plan-animations-item-img').length;
    let check_load_timer = setInterval(function () {
        if (element_count === loaded_state.length) {
            verticalAnimationStart();
            clearInterval(check_load_timer);
        }
    }, 50);

    // Функция вертикальной анимации
    function verticalAnimationStart() {
        $('.vertical-animation').each(function () {
            let $wrapper = $(this);
            let step_duration = $wrapper.data('duration');
            $wrapper.css('transition', 'all linear ' + step_duration + 'ms');
            let $sample_item = $wrapper.find('.vertical-animation__item');
            let height = $sample_item.innerHeight();
            let buffer_height = (height - viewport_height) / 2;
            let buffer_height_percent = buffer_height / 100;
            $wrapper.height(viewport_height + buffer_height);
            let count_step = step_duration + (step_duration / 10);
            let step = height / count_step * 3;
            let top_limit = ((viewport_height / 2) - (height / 2)) - height * 2;
            let bottom_limit = ((viewport_height / 2) - (height / 2)) + height * 2;
            let motion = false;

            createDouble(true, 0);
            createDouble(true, 1);
            createDouble(true, 2);

            setTimeout(function () {
                $wrapper.addClass('active');
            }, 500);

            function createDouble(first_start, first_position) {
                let direction_coefficient;
                let top = 0;
                top = ((viewport_height / 2) - (height / 2)) + height;

                if (first_start) {
                    first_start = false;

                    if (first_position === 0) {
                        top = ((viewport_height / 2) - (height / 2)) - height;
                    } else if (first_position === 1) {
                        top = ((viewport_height / 2) - (height / 2));
                    } else {
                        top = ((viewport_height / 2) - (height / 2)) + height;
                    }
                }

                let $item = $sample_item.clone().appendTo($wrapper).css('top', top + 'px').addClass('active');

                let shift = 0;

                animationVerticalScroll();

                function animationVerticalScroll() {
                    if (motion) {
                        direction_coefficient = 1;

                        shift += step * direction_coefficient * -1;
                        let current_position = shift + top;

                        if (current_position < top_limit) {
                            $item.css('transform', 'translateY(' + shift + 'px)');
                            setTimeout(function () {
                                $item.remove();
                                createDouble(first_start);
                            }, step_duration);
                        } else if (current_position > bottom_limit) {
                            $item.css('transform', 'translateY(' + shift + 'px)');
                            setTimeout(function () {
                                $item.remove();
                                createDouble(first_start);
                            }, step_duration);
                        } else {
                            $item.css('transform', 'translateY(' + shift + 'px)');

                            setTimeout(function () {
                                requestAnimationFrame(animationVerticalScroll);
                            }, step_duration);
                        }
                    } else {
                        setTimeout(function () {
                            requestAnimationFrame(animationVerticalScroll);
                        }, step_duration);
                    }


                }
            }

            animationManualVerticalScroll();

            function animationManualVerticalScroll() {
                setTimeout(function () {
                    let start_position = $wrapper.offset().left - viewport_width;
                    let view_width = $wrapper.innerWidth() + viewport_width;
                    let percent = view_width / 100;
                    let readiness = 0;

                    if (start_position < 0 && start_position > -view_width) {
                        readiness = parseInt(start_position / percent) * -1;
                        motion = true;
                    } else if (start_position > 0) {
                        readiness = 0;
                        motion = false;
                    } else {
                        readiness = 100;
                        motion = false;
                    }

                    let manual_shift = buffer_height_percent * readiness * -1;

                    $wrapper.css('transform', 'translateY(' + manual_shift + 'px)');

                    requestAnimationFrame(animationManualVerticalScroll);
                }, 100);
            }

        });
    }

});
