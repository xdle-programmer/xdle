var $body;
var viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
var viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
var scroll_top;
var scroll_down;
var scroll_counter;
var mobile_width;
var content_top;
var banner_top;
var modals;
var modal_state;


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

    lightbox.option({
        'resizeDuration': 100,
        'fadeDuration': 100,
        'positionFromTop': 50
    });

    $('.main-slider__items').owlCarousel({
        loop: true,
        mouseDrag: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1
    });

    $('.photo-slider__items').owlCarousel({
        loop: true,
        mouseDrag: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
                margin: 15,
                dots: false
            },
            1280: {
                items: 4,
                margin: 25,
                dots: true
            }
        }
    });

    function createPhotoFilter() {

        var mobile = false;
        var $filter = $('.filter__items');
        var index_photos;

        if (viewport_width < mobile_width) {
            mobile = true;
        }

        function createSlider() {
            if (mobile === false) {
                $filter.owlCarousel({
                    loop: true,
                    mouseDrag: true,
                    margin: 25,
                    nav: false,
                    dots: true,
                    items: 1
                });
            } else {
                $filter.owlCarousel({
                    loop: true,
                    mouseDrag: true,
                    margin: 15,
                    nav: false,
                    dots: false,
                    items: 2
                });
            }
        }

        function createIndex($item) {
            index_photos = [];
            var prev_val;
            var number = 0;

            $item.each(function () {
                var current_val = $(this).data('category');
                var index_item;

                if (index_photos.length === 0) {
                    index_item = [current_val, number];
                    index_photos.push(index_item);
                } else {
                    if (current_val !== prev_val) {
                        index_item = [current_val, number];
                        index_photos.push(index_item);
                    }
                }

                prev_val = current_val;
                number = number + 1;
            });
        }

        if (mobile === false) {

            createIndex($('.filter__item'));

            setTimeout(function () {
                createSlider();
            }, 50);

        } else {

            var $photos = $('.filter__item-wrapper').children();
            $photos.detach().appendTo($('.filter__items'));
            $('.filter__item').remove();

            createIndex($('.filter__item-img'));

            setTimeout(function () {
                createSlider();
            }, 50);

        }

        $filter.on('changed.owl.carousel', function (event) {
            setTimeout(function () {
                var category = $filter.find('.owl-item.active').children().data('category');
                var $buttons = $('.filter__header-item');
                var $goal = $('[data-category-name="' + category + '"]');

                if ($goal.hasClass('active') === false) {
                    $buttons.removeClass('active');
                    $goal.addClass('active');
                }

            }, 100);

        });


        $('.filter__header-item').on('click', function () {
            if ($(this).hasClass('active') === false) {
                var category_name = $(this).data('category-name');
                var goal_index;

                for (var i = 0; i < index_photos.length; i++) {
                    if (index_photos[i][0] === category_name) {
                        goal_index = index_photos[i][1];
                    }

                    if (i === index_photos.length - 1) {
                        $filter.trigger('to.owl.carousel', [goal_index, 300]);
                    }
                }


            }
        });
    }

    createPhotoFilter();

    if (viewport_width < mobile_width) {
        $('.articles__items').addClass('owl-carousel');


        setTimeout(function () {
            $('.articles__items').owlCarousel({
                loop: true,
                mouseDrag: true,
                nav: false,
                items: 2,
                margin: 15,
                dots: false
            });
        }, 100);

    }

    $('.modal__collapse').on('click', function () {
        $(this).addClass('active');
    });

    modalToggleCreate()
});


// Модальные окна. Функция создания объектов для модальных окон
function modalToggleCreate() {
    modals = null;

    if ($('.modal__background').length > 0 && $('.modal__block').length > 0) {
        modals = new modalToggle();
    }
}

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

    this.set_scroll = function () {
        setModalScroll();
    };

    $('*').off('click.modals_buttons');

    setModalLeftShift();

    $open_buttons.on('click.modals_buttons', function () {
        openModal($(this).data('modal'), $(this));
    });

    function openModal(modal_name, button) {

        $body.addClass('opened-modal');

        setModalScroll();

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

    if (modal_state === false) {
        setModalScroll();
    }

    $(window).off('scroll.modals_scroll');

    function setModalScroll() {
        for (i = 0; i < $modals.length; i++) {

            var height_half = $modals.eq(i).innerHeight() / 2;
            var modal_scroll = scroll_top + (viewport_height / 2) - height_half;

            if (modal_scroll < (scroll_top + 40)) {
                modal_scroll = scroll_top + 40;
            }

            $modals.eq(i).css('top', modal_scroll + 'px');
        }
    }

    function setModalLeftShift() {

    }

    $(".submit").on('click', function () {
        var $form = $(this).closest('.form-check');
        var answers = '';

        if ($(this).hasClass('disabled') !== true) {

            // console.log($form)
            // console.log($form.find('input[name="Phone"]'))

            if ($form.find('input[name="Phone"]').val().length > 0) {
                answers = answers + '<br> Phone: ' + $form.find('input[name="Phone"]').val() + ' <br>';
                $form.find('input[name="Phone"]').val('');
            }

            if ($form.find('input[name="Email"]').val().length > 0) {
                answers = answers + '<br> Email: ' + $form.find('input[name="Email"]').val() + ' <br>';
                $form.find('input[name="Email"]').val('')
            }

            if ($form.find('input[name="Name"]').val().length > 0) {
                answers = answers + '<br> Name: ' + $form.find('input[name="Name"]').val() + ' <br>';
                $form.find('input[name="Name"]').val('')
            }



            $form.find('input[name="answers"]').val(answers);

            // e.preventDefault();

            $.post("send.php", $form.serialize(), function (data) {

            });
            modals.open('#modal_thank');
        }

    });

}
