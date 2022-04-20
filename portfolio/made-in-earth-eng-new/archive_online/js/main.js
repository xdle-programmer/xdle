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

window.onload = function () {
    loadVideo();
};

// Обработка загрузчика видео
function loadVideo() {
    let $video = $('.first-screen__video');
    let src = $video.data('src');
    let $preview = $('.first-screen__video-preview');
    let video;


    if (viewport_width > 1600) {
        src += '1080.mp4';
        // src += '768.mp4';
    } else if (viewport_width > 1440) {
        src += '900.mp4';
        // src += '768.mp4';
    } else if (viewport_width > 1366) {
        src += '810.mp4';
        // src += '768.mp4';
    } else {
        src += '768.mp4';
    }

    $video.prop('src', src)[0].load();
    video = $video[0];

    let check_timer = setInterval(function () {
        if (video.buffered.length > 0) {
            let duration = video.duration;
            let buffered = video.buffered.end(0);

            if (duration === buffered) {
                clearInterval(check_timer);
                video.pause();
                video.currentTime = 0;
                $preview.addClass('hidden');
                video.play();
                setTimeout(function () {
                    loadImages();
                },200)

            }
        }
    }, 50);

}

// Обработка загрузчика фото в портфолио
function loadImages() {
    $('.portfolio-modal__item-img').each(function () {
        let src = '';

        if (viewport_width > mobile_width) {
            src = $(this).data('href-desktop');
        } else {
            src = $(this).data('href-mobile');
        }

        $(this).prop('src', src);


    });
}

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

    // Переключение хэдера
    toggleHeader();

    function toggleHeader() {
        let $header = $('.header');
        let scroll_class = 'scroll';
        let hidden_class = 'hidden';

        checkHeaderScroll();

        $(window).scroll(function () {


            if ($(window).scrollTop() > scroll_top) {
                scroll_top = $(window).scrollTop();
                scroll_down_direction = true;
            } else {
                scroll_top = $(window).scrollTop();
                scroll_down_direction = false;
            }


            setTimeout(function () {
                if (!$('body').hasClass('open-portfolio-modal')) {
                    checkHeaderScroll();
                }
            }, 0);
        });


        function checkHeaderScroll() {
            if (viewport_width > mobile_width) {
                if ($(window).scrollTop() > 10 && scroll_down_direction) {
                    $header.addClass(hidden_class);
                    $header.removeClass(scroll_class);
                } else if ($(window).scrollTop() > 10 && !scroll_down_direction) {
                    $header.removeClass(hidden_class);
                    $header.addClass(scroll_class);
                } else {
                    $header.removeClass(hidden_class);
                    $header.removeClass(scroll_class);
                }
            } else {
                if ($(window).scrollTop() > 10 && scroll_down_direction) {
                    $header.addClass(hidden_class);
                    $header.removeClass(scroll_class);
                } else if ($(window).scrollTop() > 10 && !scroll_down_direction) {
                    $header.removeClass(hidden_class);
                    $header.addClass(scroll_class);
                } else {
                    $header.removeClass(hidden_class);
                    $header.removeClass(scroll_class);
                }
            }
        }
    }

    // Включение линий на экране компании
    if ($('.services').length > 0) {
        showServices();
    }

    function showServices() {
        let $services = $('.services');
        let active_class = 'active';
        let services_offset = $services.find('.services__items').offset().top;

        checkServicesScroll();

        $(window).on('scroll.services_scroll', function () {
            setTimeout(function () {
                checkServicesScroll();
            }, 0);
        });


        function checkServicesScroll() {
            if (viewport_width > mobile_width) {
                if (scroll_top > services_offset - (viewport_height - (viewport_height / 4))) {
                    $services.addClass(active_class);
                    $(window).off('scroll.services_scroll');
                }
            }
        }
    }

    $('.russian input[name="phone"]').mask('+7 (999) 999-9999', {placeholder: "+7 (___) ___-____"});


    // Меню в хэдере
    var header_menu = new Menu('.header__toggle-button', '.first-screen__content-menu');

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

    // Функция портфолио
    openPortfolio();

    function openPortfolio() {
        let $button = $('.open-portfolio');
        let $close_button = $('.close-portfolio');
        let $portfolio_wrapper = $('.portfolio-modal');
        let $portfolio_item = $('.portfolio-modal__item');
        let $header = $('.header');
        let active_class = 'active';
        let body_active_class = 'open-portfolio-modal';
        let current_scroll;

        $button.on('click', function () {
            let $target = $('[data-name="' + $(this).data('target') + '"]');
            $portfolio_wrapper.addClass(active_class);
            $close_button.addClass(active_class);
            current_scroll = scroll_top;
            $body.addClass(body_active_class);
            $body.scrollTop(current_scroll);
            $body.css('padding-right', scroll_width + 'px');
            $header.css('padding-right', scroll_width + 'px');

            setTimeout(function () {
                $target.addClass(active_class);
            }, 200);
        });

        $close_button.on('click', function () {
            $close_button.removeClass(active_class);
            $body.css('padding-right', 0 + 'px');
            $header.css('padding-right', 0 + 'px');
            $body.removeClass(body_active_class);
            $(window).scrollTop(current_scroll);
            $portfolio_wrapper.removeClass(active_class);
            $portfolio_item.removeClass(active_class);
        });
    }

    $('.animation-scroll').on('click', function () {
        var goal = $(this).data('scroll-goal');
        page_scroll();

        function page_scroll() {
            var header_height = $('.header').height();

            $('html, body').animate({
                scrollTop: ($(goal).offset().top) - header_height
            }, 500);
        }
    });

    // Модальные окна. Функция создания объектов для модальных окон
    modals = new modalToggle();

    // Модальные окна. Функция открытия/закрытия
    function modalToggle() {
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
            return modal_state;
        };

        $('*').off('click.modals_buttons');

        $open_buttons.on('click.modals_buttons', function () {
            openModal($(this).data('modal'), $(this));
        });

        function openModal(modal_name, button) {

            $body.addClass('opened-modal');

            modal_state = true;
            var $modal = $(modal_name);
            $close_buttons.off('click.modals_buttons');

            $close_buttons.on('click.modals_buttons', function (e) {
                closeModal();
            });

            $background.addClass(active_class);
            $modals.removeClass(active_class);
            $modal.addClass(active_class);
        }

        function closeModal() {

            $body.removeClass('opened-modal');

            $(document).trigger('stop_youtube');
            modal_state = false;
            $background.removeClass(active_class);
            $background.addClass('close-modal');
            $close_buttons = $('.close-modal');
            $modals.removeClass(active_class);
            setModalScroll();

            $close_buttons.off('click.modals_buttons');

            $close_buttons.on('click.modals_buttons', function (e) {
                closeModal();
            });
        }
    }

    $('.submit').on('click', function (e) {
        e.preventDefault();
        var $form = $(this).closest('.form-check');
        var answers = $form.data('form-name') + ': <br><br>';

        if ($(this).hasClass('disabled') !== true) {

            if ($form.find('input[name="name"]').length > 0) {
                if ($form.find('input[name="name"]').val().length > 0) {
                    answers = answers + '<br> Имя: ' + $form.find('input[name="name"]').val() + ' <br>';
                    $form.find('input[name="name"]').val('');
                }
            }

            if ($form.find('input[name="email"]').length > 0) {
                if ($form.find('input[name="email"]').val().length > 0) {
                    answers = answers + '<br> E-mail: ' + $form.find('input[name="email"]').val() + ' <br>';
                    $form.find('input[name="email"]').val('');
                }
            }

            if ($form.find('input[name="phone"]').length > 0) {
                if ($form.find('input[name="phone"]').val().length > 0) {
                    answers = answers + '<br> Телефон: ' + $form.find('input[name="phone"]').val() + ' <br>';
                    $form.find('input[name="phone"]').val('');
                }
            }

            if ($form.find('input[name="budget"]').length > 0) {
                if ($form.find('input[name="budget"]').val().length > 0) {
                    answers = answers + '<br> Бюджет: ' + $form.find('input[name="budget"]').val() + ' <br>';
                    $form.find('input[name="budget"]').val('');
                }
            }

            if ($form.find('input[name="service_list"]').length > 0) {
                if ($form.find('input[name="service_list"]').val().length > 0) {
                    answers = answers + '<br> Услуги: ' + $form.find('input[name="service_list"]').val() + ' <br>';
                    $form.find('input[name="service_list"]').val('');
                }
            }

            if ($form.find('textarea[name="task"]').length > 0) {
                if ($form.find('textarea[name="task"]').val().length > 0) {
                    answers = answers + '<br> Задача проекта: ' + $form.find('textarea[name="task"]').val() + ' <br>';
                    $form.find('textarea[name="task"]').val('');
                }
            }

            if ($form.find('input[name="site"]').length > 0) {
                if ($form.find('input[name="site"]').val().length > 0) {
                    answers = answers + '<br> Ссылка на сайт: ' + $form.find('input[name="site"]').val() + ' <br>';
                    $form.find('input[name="site"]').val('');
                }
            }

            $form.find('input[name="answers"]').val(answers);

            $.post("/send.php", $form.serialize(), function (data) {
                modals.open('#modal_success');
            });

        }
    });

    $('input[name="service"]').on('change', function () {
        let result_val = '';

        $('input[name="service"]:checked').each(function () {
            result_val += $(this).val() + ', ';
        });

        $('input[name="service_list"]').val(result_val);
    });

});
