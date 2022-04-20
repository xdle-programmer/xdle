$(document).ready(function () {

    var viewport_height = $(window).height();
    var scroll_top = $(window).scrollTop();

    if ($(window).height() > $(window).width()) {
        $('body').addClass('vertical');
    }

    $(window).resize(function () {
        viewport_height = $(window).height();
    });

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
        masters();
        team();
        inputs();
        header_move();
        top_button();
    });

    function masters() {

        if ($('div').is('.masters')) {
            var $masters = $('.masters');
            var $masters__paralax = $('.masters__background-parallax');

            var height = $masters.height();
            var offset = $masters.offset().top;
            var shift;
            var masters_shift = 400;

            if (scroll_top < (height + offset)) {
                shift = scroll_top / ((height + offset) / 100);
                $masters__paralax.css('transform', 'translateY(-' + (masters_shift / 100 * shift) + 'px)')
            }
        }

    }

    function team() {
        if ($('div').is('.team')) {
            var $team = $('.team');
            var $team__pattern = $('.team__pattern');
            var offset = $team.offset().top;
            var team_shift = 700;


            if ((viewport_height + scroll_top) > (team_shift + offset)) {
                if ($team__pattern.hasClass('ready') === false) {
                    $team__pattern.addClass('ready');
                }

            }
        }
    }

    function inputs() {
        if ($('div').is('.feedback__inputs')) {
            var $inputs = $('.feedback__inputs');
            var offset = $inputs.offset().top;
            var team_shift = 100;

            if ((viewport_height + scroll_top) > (team_shift + offset)) {

                if ($inputs.hasClass('ready') === false) {
                    $inputs.addClass('ready');
                }

            }
        }
    }

    function header_move() {
        if ($('div').is('.header')) {
            var shift = 0;

            if ($('div').is('#first-block') && $(window).width() > 767) {
                shift = $('#first-block').height();
            }

            var active_class = 'small';
            var $header = $('.header');

            if (scroll_top > shift) {
                if ($header.hasClass(active_class) === false) {
                    $header.addClass(active_class);
                }
            } else {
                $header.removeClass(active_class);
            }
        }
    }

    function top_button() {
        if ($('div').is('.button-top')) {
            var $button = $('.button-top');
            var active_class = 'active';

            if (scroll_top > 0) {
                if ($button.hasClass(active_class) === false) {
                    $button.addClass(active_class);
                }
            } else {
                $button.removeClass(active_class);
            }
        }
    }

    masters();

    team();

    inputs();

    header_move();

    top_button();

    $('.button-top').on('click', function () {
        var $body = $('html, body');
        if (scroll_top != 0) {
            $body.animate({scrollTop: 0}, 700, 'swing');
        }
    });


    $('.header__mobile-button').on('click', function () {
        var $menu = $('.header__menu-items');
        var $button = $('.header__mobile-button');
        var condition = false;
        $menu.addClass('active');
        $button.addClass('active');

        $(document).on('click.closeout', function (e) {
            // if (e.target !== $menu && $(e.target)[0] !== $button[0]) {
            if (e.target !== $menu[0]) {
                if (condition === true) {
                    $menu.removeClass('active');
                    $button.removeClass('active');
                    condition = false;
                    $(document).off('click.closeout');
                } else {
                    condition = true;
                }


            }
        });

    });


    $('.city-choice__current').on('click', function () {
        var $menu = $(this);
        var condition = false;
        $menu.addClass('active');

        $(document).on('click.closeout', function (e) {
            if (condition === true) {
                $menu.removeClass('active');
                $(document).off('click.closeout');
                condition = false;
            } else {
                condition = true;
            }
        });

    });


    $('.list-menu__item-title').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.open-modal').on('click', function () {
        $('.modal__background').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
        $(modal_goal).css('top', (scroll_top + (viewport_height / 2)) + 'px');
    });

    $('.modal__close, .modal__background').on('click', function () {
        $('.modal__background').removeClass('active');
        $('.modal__block').removeClass('active');
        $('.modal__block').css('top', 'auto');
    });

});
