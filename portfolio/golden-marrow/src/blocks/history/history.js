let $sliderHistory = $('.history__block');

function initHistorySlider() {
    if (viewportWidth > 1279) {
        $sliderHistory.slick({
            dots: true,
            vertical: true,
            infinite:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            verticalSwiping: true,
        });
    }
}

initHistorySlider();