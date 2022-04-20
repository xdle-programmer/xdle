var viewport_height;
var scroll_top;

$(document).ready(function () {
    viewport_height = $(window).height();
    scroll_top = $(window).scrollTop();

    $(window).scroll(function () {
        scroll_top = $(window).scrollTop();
    });

    $(window).resize(function () {
        viewport_height = $(window).height();
        viewport_width = $(window).width();
    });

    if ($('.modal__background').length > 0 && $('.modal__block').length > 0) {
        var modals = new modalToggle();
    }

    // Модальные окна. Функция открытия/закрытия
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

        $('*').off('click.modals_buttons');

        $open_buttons.on('click.modals_buttons', function () {
            openModal($(this).data('modal'), $(this));
        });

        // $close_buttons.on('click.modals_buttons', function (e) {
        //     closeModal();
        // });

        function openModal(modal_name, button) {
            state = true;
            var $modal = $(modal_name);

            $close_buttons.off('click.modals_buttons');

            if ($modal.hasClass('no-close')) {
                $background.removeClass('close-modal');
                $close_buttons = $('.close-modal');
            }

            $close_buttons.on('click.modals_buttons', function (e) {
                closeModal();
            });

            $background.addClass(active_class);
            $modals.removeClass(active_class);
            $modal.addClass(active_class);
        }

        function closeModal() {
            state = false;
            $background.removeClass(active_class);
            $background.addClass('close-modal');
            $close_buttons = $('.close-modal');
            $modals.removeClass(active_class);

            $close_buttons.off('click.modals_buttons');

            $close_buttons.on('click.modals_buttons', function (e) {
                closeModal();
            });
        }

        if (state === false) {
            $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');
        }

        $(window).off('scroll.modals_scroll');

        $(window).on('scroll.modals_scroll', function () {

            if (state === false) {
                console.log((scroll_top + (viewport_height / 2)));

                $modals.css('top', (scroll_top + (viewport_height / 2)) + 'px');
            }
        });
    }
});




