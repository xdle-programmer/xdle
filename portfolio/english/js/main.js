$(document).ready(function () {
    $(".slider-first").owlCarousel({
        loop: true,
        items: 1,
        dots: true
    });

    $(".slider-second").owlCarousel({
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            1280: {
                items: 4,
                margin: 30,
            }
        }
    });

    $(".slider-third").owlCarousel({
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            1280: {
                items: 3,
                margin: 30,
            }
        }
    });


    $('.call-success-modal').on('click', function () {
        setTimeout(function () {
            $.fancybox.open({
                src  : '#cover-2',
                type : 'inline',
            });
        },300)

    })

});


