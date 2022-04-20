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
    mobile_width = 767;

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });

    // Подключение слайдера
    createSlider();

    function createSlider() {
        let $wrapper = $('.wrapper');
        let $slider = $('.slider__items');
        let $slider_wrapper = $('.slider__wrapper');
        let owl_item_class = '.owl-item';
        let item_class = '.slider__item';
        let dots_class = '.owl-dots';
        let first_start = true;

        $slider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            onInitialized: setCurrentSlide,
            items: 1
        });

        $slider.on('changed.owl.carousel', function (event) {
            setCurrentSlide(event);
        });

        function setCurrentSlide(event) {
            let current_index;
            let $dots = $slider_wrapper.find(dots_class);

            if (first_start) {
                current_index = $(owl_item_class).index($(owl_item_class + '.active'));
                $dots.addClass('active');
                first_start = false;
            } else {
                current_index = event.item.index;
            }

            let $current_item = $slider_wrapper.find(owl_item_class).eq(current_index).find(item_class);
            let background = $current_item.data('background');
            let current_height = $current_item.innerHeight();

            $wrapper.css('background', 'url(' + background + ')');
            $slider_wrapper.css('height', current_height + 50 + 'px');

            if (viewport_width > mobile_width) {
                $dots.css('top', current_height + 'px');
            }

        }

        $('.slider__input').on('focusin', function () {
            $slider.trigger('stop.owl.autoplay');
            $('.slider__input-wrapper').addClass('focus');
        });
        $('.slider__input').on('focusout', function () {
            $slider.trigger('play.owl.autoplay');
            $('.slider__input-wrapper').removeClass('focus');
        });


        $(document).on('click', function (e) {
            let name = e.target.tagName.toLowerCase();

            if (name !== 'a' && name !== 'input') {
                if (e.pageX > viewport_width / 2) {
                    $slider.trigger('next.owl.carousel');
                } else {
                    $slider.trigger('prev.owl.carousel');
                }
            }
        });
    }


});
