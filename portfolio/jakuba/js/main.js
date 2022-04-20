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
let step_duration = 300;
let direction = true;


$(document).ready(function () {

    $body = $('html, body');
    viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 1280;
    let inverseScroll = true;


    if (viewport_width < mobile_width) {
        inverseScroll = false;
    }

    $(window).scroll(function () {

        scroll_top = $(window).scrollTop();

        if (inverseScroll) {
            let last_scroll = scroll_top;

            if (last_scroll < scroll_top) {
                direction = true;
            } else {
                direction = false;
            }
        }

    });

    $(window).resize(function () {
        viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });

    function invertScroll() {
        let full_width = 0;
        let full_height = 0;
        let $screen = $('.screen');
        let $screen_block = $('.wrapper__inner');
        let $scroll_block = $('.screen__hidden');

        $screen.each(function () {
            full_width += $(this).innerWidth();
        });

        full_height = full_width - (viewport_width - viewport_height);
        $scroll_block.height(full_height);
        $screen_block.width(full_width);

        $(window).scroll(function () {
            $screen_block.css('transform', 'translateX(-' + scroll_top + 'px)');
        });
    }

    function handlerAnimation() {
        let $animation_items = $('.animation');
        let percent = parseInt(viewport_width / 100);

        $animation_items.each(function () {
            let $animation_item = $(this);
            let animations = $animation_item.data('type-animation').split(', ');
            let animation_duration = $animation_item.data('duration-animation');
            let shift = animation_duration * percent;
            let start_check_position = $animation_item.offset().left - viewport_width;
            let final_check_position = $animation_item.offset().left - viewport_width + shift * 2;
            let delta = final_check_position - start_check_position;
            let animation_opacity = false;
            let animation_to_right = false;
            let animation_scale = false;
            let animation_opacity_inversion = false;

            for (let i = 0; i < animations.length; i++) {
                if (animations[i] === 'to_right') {
                    animation_to_right = true;
                } else if (animations[i] === 'opacity') {
                    animation_opacity = true;
                } else if (animations[i] === 'scale') {
                    animation_scale = true;
                } else if (animations[i] === 'opacity-inversion') {
                    animation_opacity_inversion = true;
                }
            }

            let readiness = 0;
            let animation_shift = shift;

            function animationHandler(readiness) {
                if (animation_to_right) {
                    animationToRight(readiness);
                }

                if (animation_opacity) {
                    animationOpacity(readiness);
                }

                if (animation_scale) {
                    animationScale(readiness);
                }

                if (animation_opacity_inversion) {
                    animationOpacityInversion(readiness);
                }
            }

            animationHandler(readiness);

            function animationToRight(readiness) {
                animation_shift = parseInt(shift - (shift / 100 * readiness));
                $animation_item.css('transform', 'translateX(' + animation_shift + 'px)');
            }

            function animationOpacity(readiness) {
                $animation_item.css('opacity', (readiness / 100) * 1.5);
            }

            function animationOpacityInversion(readiness) {
                $animation_item.css('opacity', 1 - (readiness / 100) * 1.5);
            }

            function animationScale(readiness) {
                let scale_val = (50 - (readiness / 2));

                if (scale_val < 10) {
                    scale_val = '0' + scale_val;
                }

                $animation_item.css('transform', 'scale(1.' + scale_val + ')');
            }


            animationScroll();

            function animationScroll() {

                if (scroll_top > start_check_position && scroll_top < final_check_position) {
                    readiness = parseInt((scroll_top - start_check_position) / (delta / 100));
                    animationHandler(readiness);
                } else if (scroll_top < start_check_position) {
                    animationHandler(0);
                } else {
                    animationHandler(100);
                }

                requestAnimationFrame(animationScroll);
            }


        });

    }

    if (inverseScroll) {
        invertScroll();
        handlerAnimation();
        rotateChart();

        // Функция вертикального авто скролла
        $('.vertical-animation').each(function () {
            let $wrapper = $(this);
            let $sample_item = $wrapper.find('.vertical-animation__item');
            let height = $sample_item.innerHeight();
            let buffer_height = (height - viewport_height) / 2;
            let buffer_height_percent = buffer_height / 100;
            $wrapper.height(viewport_height + buffer_height);
            let count_step = 330;
            let step = height / count_step * 3;
            let top_limit = ((viewport_height / 2) - (height / 2)) - height * 2;
            let bottom_limit = ((viewport_height / 2) - (height / 2)) + height * 2;
            let motion = false;

            createDouble(true, 0);
            createDouble(true, 1);
            createDouble(true, 2);

            setTimeout(function () {
                $wrapper.addClass('active');
            }, 300);

            function createDouble(first_start, first_position) {
                let direction_coefficient;
                let top = 0;
                if (!direction) {
                    top = ((viewport_height / 2) - (height / 2)) - height;
                } else {
                    top = ((viewport_height / 2) - (height / 2)) + height;
                }

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
                        if (!direction) {
                            direction_coefficient = -1;
                        } else {
                            direction_coefficient = 1;
                        }

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

    $('.section-12__slider').owlCarousel({
        loop: false,
        dots: false,
        items: 1,
        nav: true,
        margin: 0
    });

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

    // Функция поворота чарта
    function rotateChart() {
        let $chart = $('.section-8');
        let $items = $('.section-8__chart-item');
        let start_position = 100000;
        let final_position = 0;
        let readiness = 0;
        let delta = 0;
        let index = 4;
        let correct_view = 900;
        let order_array = {
            0: 4,
            1: 2,
            2: 0,
            3: 1,
            4: 3,
            5: 5,
        };

        for (var i = 0; i < $items.length; i++) {
            let $item = $items.eq(i);

            let start_offset = $item.offset().left + scroll_top - viewport_width;
            let final_offset = $item.offset().left + scroll_top + $item.innerWidth();

            if (start_offset < start_position) {
                start_position = start_offset;
            }
            if (final_offset > final_position) {
                final_position = final_offset;
            }

            if (i === $items.length - 1) {
                start_position += correct_view;
                final_position -= correct_view;
                delta = final_position - start_position;
                setItemClass(index);
                animationScroll();
            }
        }


        function animationScroll() {
            if (scroll_top + 100 > start_position && scroll_top + 100 < final_position) {
                readiness = parseInt((scroll_top + 100 - start_position) / (delta / 100));
                animationHandler(readiness);
            } else if (scroll_top < start_position) {
                animationHandler(0);
            } else {
                animationHandler(100);
            }

            setTimeout(function () {
                requestAnimationFrame(animationScroll);
            }, 100);

        }

        function animationHandler(readiness) {

            let order = parseInt(readiness / (100 / 6));
            let current_index = order_array[order];
            if (current_index !== index) {
                index = current_index;
                setItemClass(index);
            }
        }

        function setItemClass(index) {
            let $items = $('.section-8__chart-item');
            let $item = $items.eq(index);
            let $circle = $('.section-8__chart-circe');
            let circle_class = 'section-8__chart-circe--';


            if ($item.hasClass('active') === false) {
                $items.removeClass('active');
                $item.addClass('active');

                $circle.removeClass(circle_class + '0');
                $circle.removeClass(circle_class + '1');
                $circle.removeClass(circle_class + '2');
                $circle.removeClass(circle_class + '3');
                $circle.removeClass(circle_class + '4');
                $circle.removeClass(circle_class + '5');

                $circle.addClass(circle_class + index);
            }
        }

    }

    // $('.section-8__chart-item').on('mouseover', function () {
    //     let $items = $('.section-8__chart-item');
    //     let $item = $(this);
    //     let $circle = $('.section-8__chart-circe');
    //     let circle_class = 'section-8__chart-circe--';
    //
    //     let index = $items.index($item);
    //
    //     if ($item.hasClass('active') === false) {
    //         $items.removeClass('active');
    //         $item.addClass('active');
    //
    //         $circle.removeClass(circle_class + '0');
    //         $circle.removeClass(circle_class + '1');
    //         $circle.removeClass(circle_class + '2');
    //         $circle.removeClass(circle_class + '3');
    //         $circle.removeClass(circle_class + '4');
    //         $circle.removeClass(circle_class + '5');
    //
    //         $circle.addClass(circle_class + index);
    //     }
    //
    // });

    // Функция открытия вопросов-ответов
    $('.faq__item-header').on('click', function () {
        let $item = $(this).closest('.faq__item').find('.faq__item-inner');
        $item.addClass('active');

        $item.on('click', function () {
            $item.removeClass('active');
        });
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

    var header_catalog = new Menu('.menu__button', '.menu');

    $('.animation-scroll').click(function () {
        var $goal = $($(this).data('scroll-goal'));
        console.log($goal);

        if (inverseScroll) {
            $body.animate({
                scrollTop: ($goal.offset().left + scroll_top - 90)
            }, 500);
        } else {
            $body.animate({
                scrollTop: ($goal.offset().top - 78)
            }, 500);
        }


    });

    function convertCircleChatToSlider() {
        let $wrapper = $('.section-8__chart');
        let $slider = $('<div class="section-8__slider"></div>').appendTo($wrapper);
        let $items = $('.section-8__chart-item');
        let $img = $('.section-8__img');
        $items.detach().appendTo($slider);
        $img.detach().appendTo($wrapper);
        $slider.addClass('owl-carousel');
        setTimeout(function () {
            $slider.owlCarousel({
                loop: true,
                dots: true,
                items: 1,
                nav: true,
                margin: 0
            });
        }, 100);

    }

    function sliderBooks() {
        let $slider = $('.section-11__books-inner');
        $slider.addClass('owl-carousel');
        setTimeout(function () {
            $slider.owlCarousel({
                loop: true,
                dots: true,
                items: 1,
                nav: false,
                margin: 0
            });
        }, 100);

    }

    function sliderProgramm() {
        let $slider = $('.section-15__items');
        $slider.addClass('owl-carousel');
        setTimeout(function () {
            $slider.owlCarousel({
                loop: true,
                dots: true,
                items: 1,
                nav: false,
                margin: 0
            });
        }, 100);

    }

    function convertResultSlider() {
        let $wrapper = $('.section-16__desc');
        let $slider = $('<div class="section-16__desc-slider"></div>').appendTo($wrapper);
        let $slider_item_1 = $('<div class="section-16__desc-slider-item"></div>').appendTo($slider);
        let $slider_item_2 = $('<div class="section-16__desc-slider-item"></div>').appendTo($slider);
        let $items = $('.section-16__desc-item');
        $items.eq(0).detach().appendTo($slider_item_1);
        $items.eq(1).detach().appendTo($slider_item_1);
        $items.eq(2).detach().appendTo($slider_item_1);
        $items.eq(3).detach().appendTo($slider_item_2);
        $items.eq(4).detach().appendTo($slider_item_2);
        $items.eq(5).detach().appendTo($slider_item_2);
        $slider.addClass('owl-carousel');
        setTimeout(function () {
            $slider.owlCarousel({
                loop: true,
                dots: true,
                items: 1,
                nav: false,
                margin: 0
            });
        }, 100);

    }

    function sliderPrice() {
        let $slider = $('.section-18__items');
        $slider.addClass('owl-carousel');
        setTimeout(function () {
            $slider.owlCarousel({
                loop: true,
                dots: true,
                items: 1,
                nav: true,
                margin: 0
            });
        }, 100);

    }

    function sliderInsta() {
        let $slider = $('.section-22__insta-vertical-items');
        $slider.addClass('owl-carousel');
        setTimeout(function () {
            $slider.owlCarousel({
                loop: true,
                dots: false,
                items: 3,
                nav: false,
                autoplay: true,
                margin: 0
            });
        }, 100);

    }

    function sliderModal() {
        let $slider = $('.modal__gallery');
        $slider.addClass('owl-carousel');
        setTimeout(function () {
            $slider.owlCarousel({
                loop: true,
                dots: false,
                items: 1,
                nav: true,
                margin: 0
            });
        }, 100);

    }

    sliderModal();

    if (!inverseScroll) {
        convertCircleChatToSlider();
        sliderBooks();
        sliderProgramm();
        convertResultSlider();
        sliderPrice();
        sliderInsta();
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

        // $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');

        $(window).scroll(function () {
            // if (state === false) {
            //     console.log(scroll_top);
            //     console.log(viewport_height);
            //     $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');
            // }
        });

    }

    if ($('.modal__background').length > 0 && $('.modal__block').length > 0) {
        modals = new modalToggle();
    }

});


