function mainSlider() {
    let $slides = Array.from(document.getElementsByClassName('header-slider__item'));
    let animationDelay = 300;
    let slideActiveClass = 'header-slider__item--active';
    let slideInActiveClass = 'header-slider__item--inactive';
    let currentSlide = -1;
    let changeEvent;

    this.changeSlide = function (index) {
        changeSlide(index);
    };

    function changeSlide(targetSlide) {
        if (targetSlide === currentSlide) {
            return;
        }

        if (currentSlide !== -1) {
            hideSlide(currentSlide);
        }

        setTimeout(function () {
            showSlide(targetSlide);
        }, animationDelay);
    }

    function showSlide(targetSlide) {
        let $slide = $slides[targetSlide];

        for (let $slide of $slides) {
            $slide.classList.remove(slideActiveClass);
            $slide.classList.remove(slideInActiveClass);
        }

        // $navigationButtons.removeClass(navigationButtonActiveClass);
        // $navigationButtons.eq(targetSlide).addClass(navigationButtonActiveClass);
        $slide.classList.add(slideActiveClass);
        currentSlide = targetSlide;
    }

    function hideSlide(targetSlide) {
        let $slide = $slides[targetSlide];
        $slide.classList.remove(slideActiveClass);
        $slide.classList.add(slideInActiveClass);
    }
};

export {mainSlider};