let sliderOptions = {
    0: {
        count: 1,
        countByScreen: 3,
        startBy: -1,
        bigSlides: []
    },
    1023: {
        count: 4,
        countByScreen: 1,
        startBy: 0,
        bigSlides: [0, 2]
    },
    1279: {
        count: 6,
        countByScreen: 1,
        startBy: 0,
        bigSlides: [0, 3]
    }
};

let $slider = $('.news__slider');
let $sliderWrapper = $('.news__slider-wrapper');
let $buttonNext = $('.news__slider-button--next');
let $buttonPrev = $('.news__slider-button--prev');


function createSlides(options) {
    let $items = $(document).find('.news__item');
    let $activeItems = $(document).find('.news__item--active');
    let slideClass = 'news__slide';
    let itemsClass = 'news__items';
    let bigItemClass = 'news__item--big';

    $items.removeClass(bigItemClass).detach().appendTo($sliderWrapper);

    $(document).find('.' + slideClass).remove();
    $(document).find('.' + itemsClass).remove();

    let countSlides = Math.ceil($activeItems.length / options.count);

    for (let i = 0; i < countSlides; i++) {
        let template = `
            <div class="${slideClass}">
                <div class="${itemsClass}">
                
                </div>
            </div>
        `;

        $(template).appendTo($slider);

        for (let k = 0; k < options.count; k++) {
            let $item = $activeItems.eq(k + (i * options.count));
            let $slide = $(document).find('.' + slideClass).eq(i).find('.' + itemsClass);
            $item.detach().appendTo($slide);

            for (let l = 0; l < options.bigSlides.length; l++) {
                if (k === options.bigSlides[l]) {
                    $item.addClass(bigItemClass);
                }
            }

            if (i === countSlides - 1 && k === options.count - 1) {
                initOwl();
            }
        }
    }

    function initOwl() {
        $slider.owlCarousel({
            dots: false,
            nav: false,
            loop: true,
            margin: 15,
            items: options.countByScreen,
            fluidSpeed: 0,
            startPosition:options.startBy,
        });
    }
}

function initSlider() {
    if (viewportWidth > 1279) {
        createSlides(sliderOptions['1279']);
    } else if (viewportWidth > 1023) {
        createSlides(sliderOptions['1023']);
    } else {
        createSlides(sliderOptions['0']);
    }
}

initSlider();

$(window).on('resize', function () {
    window.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    $slider.trigger('destroy.owl.carousel');
    initSlider();
});

function toggleFilter() {
    let $button = $('.news__header-filter-button');
    let activeClass = 'news__header-filter-button--active';

    $button.on('click', function () {
        let $currentButton = $(this);
        let filterTarget = $currentButton.data('tag-target');

        if (!$currentButton.hasClass(activeClass)) {
            $button.removeClass(activeClass);
            $currentButton.addClass(activeClass);
            $slider.trigger('destroy.owl.carousel');

            let itemClass = 'news__item';
            let activeItemClass = 'news__item--active';

            $('.' + itemClass).removeClass(activeItemClass);
            $('.' + itemClass + '[data-tag="' + filterTarget + '"]').addClass(activeItemClass);
            initSlider();
        }
    });
}

toggleFilter();

$buttonNext.on('click', function () {
    $slider.trigger('next.owl.carousel');
});

$buttonPrev.on('click', function () {
    $slider.trigger('prev.owl.carousel');
});