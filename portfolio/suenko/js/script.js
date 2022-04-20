$(document).ready(function () {

    $(window).on("load", function () {
        var scroll_height;
        var page_height = $('.content--scroll').height();
        var edge_height = 50;
        var $top_soft_edge = $('.content__top-soft-edge');
        var $bottom_soft_edge = $('.content__bottom-soft-edge');

        $(".content--scroll").mCustomScrollbar({
            callbacks: {
                onInit: function () {
                    scroll_height = this.mcs.content.height();
                    if (scroll_height - page_height > edge_height) {
                        $bottom_soft_edge.height(edge_height);
                    } else {
                        $bottom_soft_edge.height(scroll_height - page_height);
                    }
                },

                whileScrolling: function () {
                    if (this.mcs.top > -edge_height) {
                        $top_soft_edge.height(this.mcs.top * (-1));
                    } else {
                        $top_soft_edge.height(edge_height);
                    }

                    if (scroll_height + this.mcs.top - page_height < edge_height) {
                        $bottom_soft_edge.height(scroll_height + this.mcs.top - page_height);
                    } else {
                        $bottom_soft_edge.height(edge_height);
                    }
                }

            }
        });
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        mouseDrag: true,
        smartSpeed: 250,
        nav: false,
        items: 1,
        margin: 0
    });

    $('.slider__nav-button--next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.slider__nav-button--prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    owl.on('initialized.owl.carousel', function (event) {
        var items = event.item.count;
        $('.slider__nav-items').text(items);
    });

    owl.on('changed.owl.carousel', function (event) {
        var page = event.page.index;
        $('.slider__nav-current').text(page + 1);
    })

    $('.open-modal').on('click', function () {
        $('.modal__wrapper').addClass('active');
        $('.modal__block').removeClass('active');
        var modal_goal = $(this).data('modal');
        $(modal_goal).addClass('active');
    });

    // Закрытие модального окна
    $('.modal__close').on('click', function () {
        $('.modal__wrapper').removeClass('active');
        $('.modal__block').removeClass('active');
    });



});
