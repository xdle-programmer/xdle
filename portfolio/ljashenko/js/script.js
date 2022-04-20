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


    $(document).scroll(function () {

        scroll_top = $(window).scrollTop();

        if ($('.modal__background').hasClass('active') === false) {
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }

        header_scroll();

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

    if ($('.youtube')) {
        $('.youtube').each(function () {
            youtubeDownload($(this))
        });
    }

    function youtubeDownload($player) {
        var embed = $player.data('youtube');
        var $button = $player.find('.youtube__button');
        $player.css('background', 'url(//img.youtube.com/vi/' + embed + '/maxresdefault.jpg)');
        $button.on('click', function () {
            $button.remove();
            $player.css('background', 'black');
            $player.append('<div class="youtube__load"></div>');
            $player.append('<div id="' + embed + '"></div>');
            var player;

            function onYouTubeIframeAPIReady() {
                player = new YT.Player(embed, {
                    videoId: embed,
                    events: {
                        'onReady': onPlayerReady
                    }
                });

                function onPlayerReady(event) {
                    event.target.playVideo();
                }
            }

            onYouTubeIframeAPIReady();
        });
    }

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

    var headerMenu = new Menu('.header__menu-button', '.header__menu');

    $('.animation-scroll').click(function () {

        if ($(this).hasClass('scroll-top') === true) {
            $('.header-new').removeClass('header--scroll');

            $body.animate({
                scrollTop: 0
            }, 500);

        } else {
            var goal = $(this).data('scroll-goal');
            $('.header-new').removeClass('active');
            $('.header-new').addClass('header-new--scroll');

            setTimeout(function () {
                page_scroll()
            }, 250);

            function page_scroll() {
                var header_height = $('.header-new').height();
                $body.animate({
                    scrollTop: ($(goal).offset().top) - header_height
                }, 500);
            }

        }
    });


    header_scroll();

    function header_scroll() {
        if ($(window).scrollTop() > 100) {
            if ($('.header').hasClass('header--scroll') === false) {
                $('.header').addClass('header--scroll');
            }
        } else {
            $('.header').removeClass('header--scroll');
        }
    }


    $('.content__item').click(function () {
        $(this).toggleClass('active');
    });

    $('.faq__item-title').click(function () {
        $(this).toggleClass('active');
    });
});
