var device;
var touch;
var apple;
if (navigator.userAgent.toUpperCase().indexOf('android'.toUpperCase()) + 1) {
    device = 'android'
} else if (navigator.userAgent.toUpperCase().indexOf('iphone'.toUpperCase()) + 1) {
    device = 'iphone';
} else if (navigator.userAgent.toUpperCase().indexOf('ipad'.toUpperCase()) + 1) {
    device = 'ipad';
} else if (navigator.userAgent.toUpperCase().indexOf('macintosh'.toUpperCase()) + 1) {
    device = 'macintosh';
} else if (navigator.userAgent.toUpperCase().indexOf('windows'.toUpperCase()) + 1) {
    device = 'windows';
} else {
    device = 'windows';
}

if (device === 'iphone' || device === 'ipad') {
    document.getElementsByTagName("body")[0].setAttribute("class", "body apple-device touch-device");
    touch = true;
    apple = true;
} else if (device === 'android') {
    document.getElementsByTagName("body")[0].setAttribute("class", "body touch-device");
    touch = true;
} else if (device === 'macintosh') {
    apple = true;
    document.getElementsByTagName("body")[0].setAttribute("class", "body apple-device");
}

$(document).ready(function () {


    // Общие переменные
    var viewport_width = $(document).width();
    var viewport_height = $(document).height();
    var scroll_pos = 0;
    var scroll_top = $(window).scrollTop();
    var scroll_timeout = false;
    var scroll_down = false;
    var $body = $('html, body');

    // Счетчик для фильтрации
    var tickLast = 0;
    var tick = 0;
    setInterval(function () {
        tick++;
    }, 1);

    header_scroll();

    function header_scroll() {
        if ($(window).scrollTop() > 0) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--scroll');
            }
        } else {
            $('.header').removeClass('header--scroll');
        }
    }

    $('.animation-scroll').click(function () {

        if ($(this).hasClass('scroll-top') === true) {
            $('.header').removeClass('header--scroll');

            $body.animate({
                scrollTop: 0
            }, 500);
        } else {
            var goal = $(this).data('scroll-goal');
            $('.header').removeClass('header--open');
            $('.header').addClass('header--scroll');

            setTimeout(function () {
                page_scroll()
            }, 250);

            function page_scroll() {
                var header_height = $('.header').height();
                $body.animate({
                    scrollTop: ($(goal).offset().top) - header_height
                }, 500);
            }

        }
    });

    if ($(window).height() > $(window).width()) {
        $('body').addClass('vertical');
    }

    $(window).scroll(function () {
        header_scroll();
        scroll_top = $(window).scrollTop();
        $('.header').removeClass('header--open');
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
    });


    // Функция звездного неба для десктопов
    function star_sky() {
        var $star_layer_1 = $('.star-sky__astronaut');
        var $star_layer_2 = $('.star-sky__title--yellow');
        var $star_layer_3 = $('.star-sky__title--magenta');
        var $star_layer_4 = $('.star-sky__title--blue');
        var $star_layer_5 = $('.star-sky__stars-big');
        var $star_layer_6 = $('.star-sky__stars-small');
        var star_layer_1_shift_x = 35;
        var star_layer_1_shift_y = 30;
        var star_layer_2_shift_x = 1;
        var star_layer_2_shift_y = 1;
        var star_layer_3_shift_x = 2;
        var star_layer_3_shift_y = 2;
        var star_layer_4_shift_x = 3;
        var star_layer_4_shift_y = 3;
        var star_layer_5_shift_x = 60;
        var star_layer_5_shift_y = 25;
        var star_layer_6_shift_x = 90;
        var star_layer_6_shift_y = 45;

        if (touch === true) {

            var ax;
            var ay;
            var giro_shift_x;
            var giro_shift_y;

            if (window.DeviceMotionEvent != undefined) {
                window.ondevicemotion = function (e) {
                    ax = parseInt(event.accelerationIncludingGravity.x);
                    ay = parseInt(event.accelerationIncludingGravity.y);

                    giro_shift_x = ((ax) * 15);
                    giro_shift_y = ((ay) * 15);


                    if (tick - tickLast > 1) {
                        tickLast = tick;
                        $star_layer_1.css('transform', 'translate(' + parseFloat(star_layer_1_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_1_shift_y / -100 * giro_shift_y) + 'px)');
                        $star_layer_2.css('transform', 'translate(' + parseFloat(star_layer_2_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_2_shift_y / -100 * giro_shift_y) + 'px)');
                        $star_layer_3.css('transform', 'translate(' + parseFloat(star_layer_3_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_3_shift_y / -100 * giro_shift_y) + 'px)');
                        $star_layer_4.css('transform', 'translate(' + parseFloat(star_layer_4_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_4_shift_y / -100 * giro_shift_y) + 'px)');
                        $star_layer_5.css('transform', 'translate(' + parseFloat(star_layer_5_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_5_shift_y / -100 * giro_shift_y) + 'px)');
                        $star_layer_6.css('transform', 'translate(' + parseFloat(star_layer_6_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_6_shift_y / -100 * giro_shift_y) + 'px)');
                    }
                };


            }


        }

        if (viewport_width > 767) {

            $('.star-sky').mousemove(function (e) {
                var mouse_shift_x = (e.pageX - (viewport_width / 2)) / (viewport_width / 200);
                var mouse_shift_y = (e.pageY - (viewport_height / 2)) / (viewport_height / 200);


                $star_layer_1.css('transform', 'translate(' + parseInt(star_layer_1_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_1_shift_y / -100 * mouse_shift_y) + 'px)');
                $star_layer_2.css('transform', 'translate(' + parseInt(star_layer_2_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_2_shift_y / -100 * mouse_shift_y) + 'px)');
                $star_layer_3.css('transform', 'translate(' + parseInt(star_layer_3_shift_x / -100 * mouse_shift_x * 2) + 'px, ' + parseInt(star_layer_3_shift_y / -100 * mouse_shift_y) + 'px)');
                $star_layer_4.css('transform', 'translate(' + parseInt(star_layer_4_shift_x / -100 * mouse_shift_x * 3) + 'px, ' + parseInt(star_layer_4_shift_y / -100 * mouse_shift_y) + 'px)');
                $star_layer_5.css('transform', 'translate(' + parseInt(star_layer_5_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_5_shift_y / -100 * mouse_shift_y) + 'px)');
                $star_layer_6.css('transform', 'translate(' + parseInt(star_layer_6_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_6_shift_y / -100 * mouse_shift_y) + 'px)');
            });
        }

    }

    star_sky();

    function star_sky_intro() {
        var $star_sky = $('.star-sky');
        var active_class = 'active';
        var ready_class = 'ready';
        var elems_background = [];
        var elems_background_ready = [];
        var i;

        for (i = 0; i < $('.star-sky div').length; i++) {
            if ($('.star-sky div').eq(i).css('background-image') !== 'none') {
                elems_background.push($('.star-sky div').eq(i).css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, ""));
            }

            if (i == $('.star-sky div').length - 1) {
                var k;

                for (k = 0; k < elems_background.length; k++) {

                    $('<img/>').attr('src', elems_background[k]).on('load', function () {
                        $(this).remove();
                        elems_background_ready.push(true);
                        if (elems_background_ready.length === elems_background.length) {
                            $star_sky.addClass(active_class);
                        }
                    });
                }
            }
        }

    }

    star_sky_intro();

    function star_sky_stars() {
        var $star_sky = $('.star-sky__wrapper');
        var star_class = 'star-sky__star';

        function random_integer(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }

        function star_sky_stars_create(delay) {
            var new_star_state = false;
            var new_star_first = true;
            var new_star_id = random_integer(1, 10000);
            var new_star = setInterval(function () {
                if (new_star_state === false) {
                    $star_sky.append('<div id="' + new_star_id + '" class="' + star_class + ' ' + star_class + '--' + random_integer(1, 5) + '"></div>');
                    $('#' + new_star_id).css({
                        'left': random_integer(5, 95) + '%',
                        'top': random_integer(5, 95) + '%'
                    });


                    if (new_star_first === true) {
                        $('#' + new_star_id).css({
                            'display': 'none'
                        });
                        new_star_first = false;
                    }

                    new_star_state = true;
                } else {
                    $('#' + new_star_id).remove();
                    new_star_state = false;
                }
            }, delay);
        }

        var i;

        for (i = 0; i < 50; i++) {
            var stars = star_sky_stars_create(random_integer(1000, 1500));
        }
    }

    star_sky_stars();

    var $more_slider = $('.more__items');

    $more_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }

    });

    var $sales_slider = $('.sales__items');

    $sales_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        items: 1
    });

    var $last_works_slider = $('.last-works__items');

    $last_works_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 4,
                margin: 12,
            }
        }
    });


    var $reviews_slider = $('.reviews__items');

    $reviews_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        items: 1
    });

    var $quotes_slider = $('.quotes__items');

    $quotes_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        items: 1
    });

    var $instagram_slider = $('.instagram');

    $instagram_slider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 6
            },
            1024: {
                items: 8
            }
        }
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
            })
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

    if ($('div').is('.portfolio__filter')) {
        portfolio_filter()
    }


    $('.header__mobile-background').on('click', function () {
        $('.wrapper').removeClass('header-open');
    });

    $('.header__mobile-button').on('click', function () {
        $('.wrapper').toggleClass('header-open');
    });


    // Набиваем картинки в массив для свайпера
    var items = [];

    $('.portfolio__item-img').each(function () {
        var img_width = $(this).get(0).naturalWidth;
        var img_height = $(this).get(0).naturalHeight;
        var src = $(this).attr('src');
        var likes = $(this).data('likes');
        var name = $(this).closest('.portfolio__item-wrapper').find('.portfolio__item-title').text();
        var desc = $(this).closest('.portfolio__item-wrapper').find('.portfolio__item-subtitle').text();

        items.push(
            {
                src: src,
                w: img_width,
                h: img_height,
                likes: likes,
                name: name,
                desc: desc
            }
        );
    });

    var openPhotoSwipe = function (start) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        var options = {
            index: start
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();

        function write_desc(likes, name, desc) {
            $('.portfolio__pswp-title').text(name);
            $('.portfolio__pswp-subtitle').text(desc);
            $('.portfolio__pswp-likes-count').text(likes);
        }

        var curent_item = gallery.getCurrentIndex();
        write_desc(items[curent_item].likes, items[curent_item].name, items[curent_item].desc);


        gallery.listen('afterChange', function (index, item) {
            curent_item = gallery.getCurrentIndex();
            write_desc(items[curent_item].likes, items[curent_item].name, items[curent_item].desc);
        });


    };

    $('.portfolio__item-wrapper').on('click', function () {
        var start = $('.portfolio__item-wrapper').index($(this));
        openPhotoSwipe(start);
    });

    $('input[type=tel]').inputmask('+7 (999) 999-99-99');
    $('input[name=poster-master-date]').inputmask('99-99-9999');


    if ($('select').is('.poster-master__details-select')) {
        $(".poster-master__details-select").selectmenu({
            classes: {
                "ui-selectmenu-button-open": "poster-master__details-select-button",
                "ui-selectmenu-button-closed": "poster-master__details-select-button",
                "ui-selectmenu-icon": "poster-master__details-select-icon",
                "ui-selectmenu-menu": "poster-master__details-select-items"
            },

            change: function (event, ui) {

            }
        });
    }


    $("#poster-master-poster-file").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        console.log(filename);
        $("#poster-master__details-file-name-item").text(filename);
    });


    // Запись значения тарифа
    $('.poster-master__rate-item-button').on('click', function () {
        var rates = $(this).closest('.poster-master__rate-item').find('.poster-master__rate-item-name').text();
        $('input[name="poster-master-rates"]').val(rates);
    });

    // Запись выбранных мессенджеров
    $('.poster-master__icons-select-item--messenger').on('click', function () {
        $(this).toggleClass('active');
        var messengers = '';
        $('.poster-master__icons-select-item.active').each(function () {
            messengers = messengers + $(this).data("messenger-name") + ' ';
        });
        $('input[name="poster-master-messenger"]').val(messengers);
    });


    // Запись выбранного размера бумаги
    $('.poster-master__size-select-item, .select-paper-size').on('click', function () {
        var paper_size = $(this).data("paper-size");

        if ($(this).hasClass('active') === true) {
            $('*[data-paper-size="' + paper_size + '"]').removeClass('active');
        } else {
            $('*[data-paper-size="' + paper_size + '"]').addClass('active');
        }

        var paper_size_val = '';
        $('.poster-master__size-select-item.active').each(function () {
            paper_size_val = paper_size_val + ' ' + $(this).data("paper-size");
        });

        $('input[name="poster-master-paper-size"]').val(paper_size_val);
    });

    // Запись выбранных социальных сетей
    $('.poster-master__icons-select-item--social').on('click', function () {
        $(this).toggleClass('active');
        var social = '';
        $('.poster-master__icons-select-item.active').each(function () {
            social = social + $(this).data("social-name") + ' ';
        });
        $('input[name="poster-master-social"]').val(social);
    });


    function page_height() {
        var active_page_height = $('.poster-master').find('.poster-master__page.active').height();
        $('.poster-master').height(active_page_height);
    }

    if ($('div').is('.poster-master')) {
        page_height()
    }

    $('.next-screen').on('click', function () {
        var $page = $('.poster-master__page');
        var next_ready = true;
        var index_page = $('.poster-master__page').index($(this).closest('.poster-master__page'));
        var $req_inputs = $page.eq(index_page).find('input');


        $req_inputs.each(function () {
            $(this).removeClass('error');

            if ($(this).attr('name') === 'poster-master-phone') {
                if ($(this).val().match(/[0-9]/g) === null) {
                    $(this).addClass('error');
                    next_ready = false;
                } else if ($(this).val().match(/[0-9]/g).length !== 11) {
                    $(this).addClass('error');
                    next_ready = false;
                }
            } else {
                if ($(this).attr('required') === 'required' && $(this).val().length < 1) {
                    $(this).addClass('error');
                    next_ready = false;
                }
            }


        });

        if (next_ready === true) {
            $page.eq(index_page).removeClass('active');
            $page.eq(index_page).addClass('prev');
            $page.eq(index_page + 1).removeClass('next');
            $page.eq(index_page + 1).addClass('active');
            page_height();
        }
    });

    $('.prev-screen').on('click', function () {
        var $page = $('.poster-master__page');
        var index_page = $('.poster-master__page').index($(this).closest('.poster-master__page'));
        $page.eq(index_page).removeClass('active');
        $page.eq(index_page).addClass('next');
        $page.eq(index_page - 1).removeClass('prev');
        $page.eq(index_page - 1).addClass('active');
        page_height();
    });


    $('input[name="poster-master-agree"]').on('change', function () {
        if ($(this).is(':checked') === true) {
            $('.poster-master__footer-button-next--submit').prop('disabled', false);
        } else {
            $('.poster-master__footer-button-next--submit').prop('disabled', true);
        }

    });


    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        monthNamesShort: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        changeYear: true,
        changeMonth: true
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('input[name="poster-master-date-test"]').datepicker($.datepicker.regional["ru"]);
    return datepicker.regional['ru'];
});


