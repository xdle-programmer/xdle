$(document).ready(function () {

    // Общие переменные
    var viewport_width = $(document).width();
    var viewport_height = $(document).height();
    var scroll_pos = 0;
    var scroll_timeout = false;
    var scroll_down = false;

    // Счетчик для фильтрации
    var tickLast = 0;
    var tick = 0;
    setInterval(function () {
        tick++;
    }, 1);

    // Функция звездного неба для десктопов
    function star_sky() {
        var $star_layer_1 = $('.stars__background-content-1');
        var $star_layer_2 = $('.stars__background-content-2');
        var $star_layer_3 = $('.stars__background-content-3');
        var $star_layer_4 = $('.stars__background-content-4');
        var star_layer_1_shift_x = 25;
        var star_layer_1_shift_y = 10;
        var star_layer_3_shift_x = 70;
        var star_layer_3_shift_y = 35;
        var star_layer_4_shift_x = 120;
        var star_layer_4_shift_y = 50;

        if (touch === true && viewport_width < 768) {
            star_layer_3_shift_x = 30;
            star_layer_3_shift_y = 15;
            star_layer_4_shift_x = 70;
            star_layer_4_shift_y = 40;
        }


        if (touch === true && viewport_width < 768) {
            var args = {
                frequency: 100,                   // ( How often the object sends the values - milliseconds )
                gravityNormalized: true,         // ( If the garvity related values to be normalized )
                // orientationBase: GyroNorm.GAME,      // ( Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world. )
                orientationBase: GyroNorm.WORLD,      // ( Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world. )
                decimalCount: 2,                 // ( How many digits after the decimal point will there be in the return values )
                logger: null,                    // ( Function to be called to log messages from gyronorm.js )
                screenAdjusted: false            // ( If set to true it will return screen adjusted values. )
            };

            var gn = new GyroNorm();

            gn.init(args).then(function () {
                gn.start(function (data) {
                    var giro_shift_x = ((data.dm.gx) * 10);
                    var giro_shift_y = ((data.dm.gy) * 10);

                    // if (tick - tickLast > 50) {
                    tickLast = tick;
                    // $star_layer_1.css('transform', 'translate(' + parseFloat(star_layer_1_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_1_shift_y / -100 * giro_shift_y) + 'px)');
                    // $star_layer_2.css('transform', 'translate(' + parseFloat(star_layer_1_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_1_shift_y / -100 * giro_shift_y) + 'px)');
                    $star_layer_3.css('transform', 'translate(' + parseFloat(star_layer_3_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_3_shift_y / -100 * giro_shift_y) + 'px)');
                    $star_layer_4.css('transform', 'translate(' + parseFloat(star_layer_4_shift_x / -100 * giro_shift_x) + 'px, ' + parseFloat(star_layer_4_shift_y / -100 * giro_shift_y) + 'px)');
                    // }


                });
            }).catch(function (e) {
                // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device

            });

        } else {
            $(document).mousemove(function (e) {
                if (tick - tickLast > 10) {
                    tickLast = tick;
                    var mouse_shift_x = e.pageX / (viewport_width / 100);
                    var mouse_shift_y = e.pageY / (viewport_height / 100);
                    $star_layer_1.css('transform', 'translate(' + parseInt(star_layer_1_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_1_shift_y / -100 * mouse_shift_y) + 'px)');
                    $star_layer_2.css('transform', 'translate(' + parseInt(star_layer_1_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_1_shift_y / -100 * mouse_shift_y) + 'px)');
                    $star_layer_3.css('transform', 'translate(' + parseInt(star_layer_3_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_3_shift_y / -100 * mouse_shift_y) + 'px)');
                    $star_layer_4.css('transform', 'translate(' + parseInt(star_layer_4_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_4_shift_y / -100 * mouse_shift_y) + 'px)');
                }
            });
        }


    }

    star_sky();


    // Переменные для функции линий
    var lines_screen_height = $('.lines-screen').height();
    var lines_screen_vis = $('.lines-screen').offset().top - viewport_height;
    var lines_limit = 1800;
    var $line1 = $('.lines-screen__line-1');
    var $line2 = $('.lines-screen__line-2');
    var $line3 = $('.lines-screen__line-3');
    var $line4 = $('.lines-screen__line-4');
    var $line5 = $('.lines-screen__line-5');
    var $word_left = $('.lines-screen__item-link-left');
    var $word_right = $('.lines-screen__item-link-right');
    var line1_start = 380;
    var line2_start = 600;
    var line3_start = 770;
    var line4_start = 880;
    var line5_start = 1130;
    var word_left_start = 800;
    var word_right_start = 800;
    var line1_shift;
    var line1_translate;
    var line2_shift;
    var line2_translate;
    var line3_shift;
    var line3_translate;
    var line4_shift;
    var line4_translate;
    var line5_shift;
    var line5_translate;
    var word_left_shift;
    var word_left_translate;
    var word_right_shift;
    var word_right_translate;
    var $line_step = 1.3;

    // Функция линий на третьем экране
    function lines() {
        if (lines_screen_vis > line1_start) {
            line1_shift = (lines_screen_vis - line1_start) / $line_step;
            line1_shift = line1_shift * -1;
            line1_translate = 'translate(' + line1_shift + '%, ' + (lines_screen_vis - line1_start) + 'px)';
            $line1.css('transform', line1_translate);
        } else {
            line1_translate = 'translate(0%, 0px)';
            $line1.css('transform', line1_translate);
        }

        if (lines_screen_vis > line2_start) {
            line2_shift = (lines_screen_vis - line2_start) / $line_step;
            line2_shift = line2_shift * -1;
            line2_translate = 'translate(' + line2_shift + '%, ' + (lines_screen_vis - line2_start) + 'px)';
            $line2.css('transform', line2_translate);
        } else {
            line2_translate = 'translate(0%, 0px)';
            $line2.css('transform', line2_translate);
        }

        if (lines_screen_vis > line3_start) {
            line3_shift = (lines_screen_vis - line3_start) / $line_step;
            line3_shift = line3_shift * -1;
            line3_translate = 'translate(' + line3_shift + '%, ' + (lines_screen_vis - line3_start) + 'px)';
            $line3.css('transform', line3_translate);
        } else {
            line3_translate = 'translate(0%, 0px)';
            $line3.css('transform', line3_translate);
        }

        if (lines_screen_vis > line4_start) {
            line4_shift = (lines_screen_vis - line4_start) / $line_step;
            line4_shift = line4_shift * -1;
            line4_translate = 'translate(' + line4_shift + '%, ' + (lines_screen_vis - line4_start) + 'px)';
            $line4.css('transform', line4_translate);
        } else {
            line4_translate = 'translate(0%, 0px)';
            $line4.css('transform', line4_translate);
        }

        if (lines_screen_vis > line5_start) {
            line5_shift = (lines_screen_vis - line5_start) / $line_step;
            line5_shift = line5_shift * -1;
            line5_translate = 'translate(' + line5_shift + '%, ' + (lines_screen_vis - line5_start) + 'px)';
            $line5.css('transform', line5_translate);
        } else {
            line5_translate = 'translate(0%, 0px)';
            $line5.css('transform', line5_translate);
        }

        if (lines_screen_vis > word_left_start) {
            word_left_shift = (($($word_left).offset().top) - 500) / -(.8);

            if (word_left_shift > 0) {
                word_left_shift = 0
            }

            word_left_translate = 'translateX(' + word_left_shift + '%)';
            $word_left.css('transform', word_left_translate);
        }

        if (lines_screen_vis > word_right_start) {
            word_right_shift = (($($word_left).offset().top) - 500) / .8;

            if (word_right_shift < 0) {
                word_right_shift = 0
            }

            word_right_translate = 'translateX(' + word_right_shift + '%)';
            $word_right.css('transform', word_right_translate);
        }

    }

    // Переопределение переменных при скроле
    $('.wrapper').scroll(function () {
        if (scroll_pos < $('.wrapper').scrollTop()) {
            scroll_down = true;
        } else {
            scroll_down = false;
        }

        scroll_pos = $('.wrapper').scrollTop();
        lines_screen_vis = $('.lines-screen').offset().top - viewport_height;
        lines_screen_vis = parseInt(lines_screen_vis) * (-1);
        lines();


        if (scroll_timeout !== false) {
            clearTimeout(scroll_timeout);
        }

        scroll_timeout = setTimeout(function () {
            if (scroll_down === true) {


                if (viewport_width > 768) {
                    // scroll_region();
                }
            }
        }, 1000);


    });

    // Переопределение переменных при ресайзе
    $(window).resize(function () {
        viewport_width = $(document).width();
        viewport_height = $(document).height();
        lines_screen_height = $('.lines-screen').height();
        scroll_pos = $('.wrapper').scrollTop();
        mockup_resize();
    });

    // Подключение слайдера
    $(".work__slider").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 320,
        margin: 1
    });


    var $mockup_laptop = $('.work__slider-mockup--laptop');
    var $slider_laptop = $('.work__slider-wrapper--laptop');
    var $dots_laptop = $('.work__slider-wrapper--laptop .owl-dots');
    var $mockup_tablet = $('.work__slider-mockup--tablet');
    var $slider_tablet = $('.work__slider-wrapper--tablet');
    var $dots_tablet = $('.work__slider-wrapper--tablet .owl-dots');
    var $mockup_art = $('.work__slider-mockup--art');
    var $slider_art = $('.work__slider-wrapper--art');
    var $dots_art = $('.work__slider-wrapper--art .owl-dots');

    var breakpoint = 767;

    var laptop_inner_width;
    var laptop_inner_height;
    var laptop_inner_width_percent = 73.3;
    var laptop_inner_height_percent = 79;
    var mockup_laptop_width;
    var mockup_laptop_height;
    var mockup_laptop_top_shift_percent = 7.03;
    var mockup_laptop_top_shift;
    var mockup_laptop_dot_shift_percent = 15;
    var mockup_laptop_dot_shift;

    var tablet_inner_width;
    var tablet_inner_height;
    var tablet_inner_width_percent = 87.47;
    var tablet_inner_height_percent = 83.19;
    var mockup_tablet_width;
    var mockup_tablet_height;
    var mockup_tablet_top_shift_percent = 8.40;
    var mockup_tablet_top_shift;
    var mockup_tablet_dot_shift_percent = 13;
    var mockup_tablet_dot_shift;

    var art_inner_width;
    var art_inner_height;
    var art_inner_width_percent = 78.33;
    var art_inner_height_percent = 68.03;
    var mockup_art_width;
    var mockup_art_height;
    var mockup_art_top_shift_percent = 15.98;
    var mockup_art_top_shift;
    var mockup_art_dot_shift_percent = 20;
    var mockup_art_dot_shift;


    var mobile_inner_width_percent = 87.47;
    var mobile_inner_height_percent = 75.80;
    var mockup_mobile_top_shift_percent = 13.96;
    var mockup_mobile_dot_shift_percent = 2;


    function mockup_resize() {

        if (viewport_width > breakpoint) {
            laptop_inner_width = $slider_laptop.width();
            laptop_inner_height = $slider_laptop.height();
            mockup_laptop_width = laptop_inner_width / laptop_inner_width_percent * 100;
            mockup_laptop_height = laptop_inner_height / laptop_inner_height_percent * 100;
            mockup_laptop_top_shift = mockup_laptop_height / 100 * mockup_laptop_top_shift_percent * (-1);
            mockup_laptop_dot_shift = mockup_laptop_height / 100 * mockup_laptop_dot_shift_percent;

            tablet_inner_width = $slider_tablet.width();
            tablet_inner_height = $slider_tablet.height();
            mockup_tablet_width = tablet_inner_width / tablet_inner_width_percent * 100;
            mockup_tablet_height = tablet_inner_height / tablet_inner_height_percent * 100;
            mockup_tablet_top_shift = mockup_tablet_height / 100 * mockup_tablet_top_shift_percent * (-1);
            mockup_tablet_dot_shift = mockup_tablet_height / 100 * mockup_tablet_dot_shift_percent;
        } else {
            laptop_inner_width = $slider_laptop.width();
            laptop_inner_height = $slider_laptop.height();
            mockup_laptop_width = laptop_inner_width / mobile_inner_width_percent * 100;
            mockup_laptop_height = laptop_inner_height / mobile_inner_height_percent * 100;
            mockup_laptop_top_shift = mockup_laptop_height / 100 * mockup_mobile_top_shift_percent * (-1);
            mockup_laptop_dot_shift = mockup_laptop_height / 100 * mockup_mobile_dot_shift_percent;

            tablet_inner_width = $slider_tablet.width();
            tablet_inner_height = $slider_tablet.height();
            mockup_tablet_width = tablet_inner_width / mobile_inner_width_percent * 100;
            mockup_tablet_height = tablet_inner_height / mobile_inner_height_percent * 100;
            mockup_tablet_top_shift = mockup_tablet_height / 100 * mockup_mobile_top_shift_percent * (-1);
            mockup_tablet_dot_shift = mockup_tablet_height / 100 * mockup_mobile_dot_shift_percent;
        }

        art_inner_width = $slider_art.width();
        art_inner_height = $slider_art.height();
        mockup_art_width = art_inner_width / art_inner_width_percent * 100;
        mockup_art_height = art_inner_height / art_inner_height_percent * 100;
        mockup_art_top_shift = mockup_art_height / 100 * mockup_art_top_shift_percent * (-1);
        mockup_art_dot_shift = mockup_art_height / 100 * mockup_art_dot_shift_percent;


        $mockup_laptop.css({
            'width': mockup_laptop_width + 'px',
            'height': mockup_laptop_height + 'px',
            'left': 'calc(50% - ' + (mockup_laptop_width / 2) + 'px)',
            'top': mockup_laptop_top_shift + 'px'
        });
        $dots_laptop.css('top', mockup_laptop_dot_shift + 'px');

        $mockup_tablet.css({
            'width': mockup_tablet_width + 'px',
            'height': mockup_tablet_height + 'px',
            'left': 'calc(50% - ' + (mockup_tablet_width / 2) + 'px)',
            'top': mockup_tablet_top_shift + 'px'
        });
        $dots_tablet.css('top', mockup_tablet_dot_shift + 'px');

        $mockup_art.css({
            'width': mockup_art_width + 'px',
            'height': mockup_art_height + 'px',
            'left': 'calc(50% - ' + (mockup_art_width / 2) + 'px)',
            'top': mockup_art_top_shift + 'px'
        });
        $dots_art.css('top', mockup_art_dot_shift + 'px');
    }

    // Функция скролла к элементу
    var $scroll_line = $('.scroll-line');
    var scroll_line_shift = (viewport_height / 2) - ($scroll_line.height() / 2);

    function scroll_to_elem(goal) {
        if (goal === 'main') {
            $('.wrapper').animate({scrollTop: 0}, 500, 'swing');
        } else {
            var offset = $('[data-scroll-item~=' + goal + ']').offset().top;
            var destination = scroll_pos + offset - scroll_line_shift;
            $('.wrapper').animate({scrollTop: destination}, 500, 'swing');
        }

    }

    // Функция доскролла до экрана
    function scroll_region() {

        if (scroll_down === true) {
            var min_down = 100000;
            for (var i = 1; i < $scroll_line.length; ++i) {
                if ($scroll_line.eq(i).offset().top - scroll_line_shift < min_down && $scroll_line.eq(i).offset().top - scroll_line_shift > 0) {
                    min_down = $scroll_line.eq(i).offset().top - scroll_line_shift;
                    scroll_to_elem($scroll_line.eq(i).data('scroll-item'));
                }
            }
        } else {
            var max_up = -100000;
            for (var i = 1; i < $scroll_line.length; ++i) {
                if ($scroll_line.eq(i).offset().top - shift > max_up && $scroll_line.eq(i).offset().top - shift < 0) {
                    max_up = $scroll_line.eq(i).offset().top - shift;
                    scroll_to_elem($scroll_line.eq(i).data('scroll-item'));
                }
            }
        }
    }

    mockup_resize();

    $('.scroll-to').click(function () {
        scroll_to_elem($(this).data('scroll-goal'));
    });

    var $menu = $('.menu');
    var $menu_button = $('.menu__open');
    $('.menu__open').click(function () {
        $menu.addClass('active');
        $menu_button.hide(0);
    });
    $('.menu__close, .menu__item, .menu__background').click(function () {
        $menu.animate({opacity: .0}, 200, function () {
                $menu.removeClass('active');
                $menu.css('opacity', '1');
                $menu_button.show(0);
            }
        );
    });

});