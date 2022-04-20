let $slider = $('.reviews__slider');

$slider.owlCarousel({
    dots: true,
    nav: true,
    loop: true,
    fluidSpeed: 0,
    center: true,
    responsive : {
        0 : {
            items: 1,
            margin: 0
        },
        768 : {
            items: 3,
            margin: 25
        }
    }

});