let $body;
let viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
let viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
let scroll_top;
let scroll_down_direction;
let scroll_counter;
let scroll_width;
let mobile_width;
let content_top;
let banner_top;
let modals;
let modal_state = false;


// Проверка пустых полей. Переменная для функции создания.
var empty_input_create = null;

// Проверка пустых полей. Переменная для массива функций.
var empty_input = null;

// вычисление ширины скролла
function getScrollWidth() {
// создадим элемент с прокруткой
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    scroll_width = div.offsetWidth - div.clientWidth;
    div.remove();
}

getScrollWidth();

$(document).ready(function () {
    $body = $('body');
    $body.addClass('ready');
    viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    scroll_top = $(window).scrollTop();
    scroll_counter = 0;
    mobile_width = 1280;

    $(window).resize(function () {
        viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });

    star_sky();

    let checkLoad = setInterval(function () {
        let $items = $('.load-test__item');

        if ($items.length - 1 <= load_test.length) {
            firstStart();
            clearInterval(checkLoad);
        }

    }, 50);

    let checkLoadFull = setInterval(function () {
        let $items = $('.load-test__item');

        if ($items.length === load_test.length) {
            customScroll();
            clearInterval(checkLoadFull);
        }

    }, 50);

    function customScroll() {
        let $wrapper = $('.shift-content__wrapper');
        let $first = $('.first-screen');
        let $second = $('.wide-background__img');
        let $third = $('.fifth-screen');

        let first_scroll = $first.height();
        let second_scroll = $second.width() - viewport_width;
        $third.css('left', $second.width() - viewport_width + 'px')

        $('body').css('height',($first.height() + $second.width() - viewport_width +viewport_height + $third.height()) + 'px')

        setPosition()

        $(window).on('scroll', function () {
            setPosition()
        });

        function setPosition() {
            let scroll = $(window).scrollTop();

            if ($('.fourth-screen__parkomat').offset().left < viewport_width * .7) {
                $('.fourth-screen__parkomat').addClass('show');
            }


            if (scroll <= first_scroll) {
                $wrapper.css('transform', 'translate(0, ' + -scroll + 'px)');
            } else if (scroll <= first_scroll + second_scroll) {
                $wrapper.css('transform', 'translate(' + -(scroll - first_scroll) + 'px, ' + -first_scroll + 'px)');
            } else {
                $wrapper.css('transform', 'translate(' + -(second_scroll) + 'px, ' + -(scroll - second_scroll) + 'px)');
            }
        }
    }

    function firstStart() {
        let delay = 2000;
        let $start_show = $('.first-screen__img-block, .first-screen__desc-title-1, .first-screen__desc-title-2');
        let $first_show = $('.first-screen__img-cloud-final,.first-screen__img-final, .first-screen__desc-title-4');
        let $first_hide = $('.first-screen__img-start,.first-screen__img-cloud-start');
        let $second_show = $('.first-screen__img-sign, .first-screen__desc-title-3,.first-screen__footer-button');
        let $second_hide = $('');

        setTimeout(function () {
            $start_show.css('opacity', 1);
        }, 100);

        setTimeout(function () {
            $first_show.css('opacity', 1);
            $first_hide.css('opacity', 0);
        }, delay);

        setTimeout(function () {
            $second_show.css('opacity', 1);
            $second_hide.css('opacity', 0);
        }, delay * 2);
    }

    function star_sky() {
        var $star_layer_1 = $('.first-screen__img-cloud-start');
        var $star_layer_2 = $('.first-screen__img-cloud-final');
        var star_layer_1_shift_x = 20;
        var star_layer_1_shift_y = 5;
        var star_layer_2_shift_x = 20;
        var star_layer_2_shift_y = 5;

        $('.first-screen').mousemove(function (e) {
            var mouse_shift_x = (e.pageX - (viewport_width / 2)) / (viewport_width / 200);
            var mouse_shift_y = (e.pageY - (viewport_height / 2)) / (viewport_height / 200);


            $star_layer_1.css('transform', 'translate(' + parseInt(star_layer_1_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_1_shift_y / -100 * mouse_shift_y) + 'px)');
            $star_layer_2.css('transform', 'translate(' + parseInt(star_layer_2_shift_x / -100 * mouse_shift_x) + 'px, ' + parseInt(star_layer_2_shift_y / -100 * mouse_shift_y) + 'px)');
        });

    }

});
