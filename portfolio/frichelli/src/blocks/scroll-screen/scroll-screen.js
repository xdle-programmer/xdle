$(document).ready(function () {

    mobileWidth = 1280;
    let initScrollPosition = 0;

    if (viewportWidth >= mobileWidth) {
        initScrollPosition = 500000;
        scrollTop = 500000;
        // initScrollPosition = 0;
    }

    setTimeout(function () {
        $('body, html').scrollTop(initScrollPosition);

        setTimeout(function () {
            initScroll();
        }, 100);
    }, 200);


    function initScroll() {
        let $body = $('body, html');
        let $screenWrapper = $('.scroll-screen');
        let $scrollButton = $('.scroll-screen__target');


        checkSystemScroll();

        let scrollState = false;
        let scrollSystemState = false;
        let countScreen = $('.scroll-screen__item').length;
        let scrollDirectionDown = true;
        let scrollPosition = 0;
        let currentScreen = 0;
        let animationDuration = 500;

        if (viewportWidth < mobileWidth) {
            getTouchEvents();
        } else {
            getScrollEvents();
        }

        function getScrollEvents() {
            $(document).on('scroll', function () {
                checkScrollDirection();

                if (!scrollState && !scrollSystemState) {
                    if (!scrollDirectionDown && currentScreen > 0) {
                        changeScreen(currentScreen - 1);
                    } else if (scrollDirectionDown && currentScreen < countScreen - 1) {
                        changeScreen(currentScreen + 1);
                    }
                }
            });
        }

        function getTouchEvents() {
            let lastTouchY;

            $(document).on('touchstart', function (event) {
                lastTouchY = event.originalEvent.touches[0].clientY;
            });

            $(document).on('touchmove', function (event) {
                let currentTouchY = event.originalEvent.changedTouches[0].clientY;
                let touchDirectionDown;

                if (lastTouchY > currentTouchY) {
                    touchDirectionDown = true;
                } else {
                    touchDirectionDown = false;
                }

                if (!scrollState && !scrollSystemState) {
                    if (!touchDirectionDown && currentScreen > 0) {
                        changeScreen(currentScreen - 1);
                    } else if (touchDirectionDown && currentScreen < countScreen - 1) {
                        changeScreen(currentScreen + 1);
                    }
                }

            });
        }

        function checkScrollDirection() {
            let currentScroll = $body.scrollTop();

            if (currentScroll > scrollTop) {
                scrollDirectionDown = true;
            } else {
                scrollDirectionDown = false;
            }

            scrollTop = currentScroll;
        }

        function checkSystemScroll() {

            setInterval(function () {
                let currentScroll = $body.scrollTop();

                setTimeout(function () {
                    if (currentScroll !== $body.scrollTop()) {
                        scrollSystemState = true;
                    } else {
                        scrollSystemState = false;
                    }
                }, 30);

            }, 40);
        }

        $scrollButton.on('click', function () {
            let target = parseInt($(this).data('target'));
            changeScreen(target);
        });

        function changeScreen(target) {
            scrollState = true;
            setWrapperNumber(target);
            setNavigationDot(target)
            setTimeout(function () {
                scrollState = false;
                $('.scroll-screen__item').removeClass('scroll-screen__item--active');
                $('.scroll-screen__item').eq(target).addClass('scroll-screen__item--active');
            }, animationDuration);
            currentScreen = target;
            let shift = 100 / countScreen * target;
            $screenWrapper.css('transform', 'translateY(-' + shift + '%)');
        }

        function setNavigationDot(target) {
            let $items = $('.navigation__item')
            let $item = $items.eq(target)
            let activeClass = 'navigation__item--active';

            $items.removeClass(activeClass)
            $item.addClass(activeClass)
        }

        function setWrapperNumber(target) {
            let $wrapper = $('.wrapper');
            let wrapperClasses = new Map([
                ['default', 'wrapper--default'],
                [0, 'wrapper--0'],
                [1, 'wrapper--1'],
                [2, 'wrapper--2'],
                [3, 'wrapper--3'],
            ]);

            if (wrapperClasses.has(target)) {
                for (let wrapperClass of wrapperClasses.values()) {
                    $wrapper.removeClass(wrapperClass);
                }

                $wrapper.addClass(wrapperClasses.get(target));
            } else {
                for (let wrapperClass of wrapperClasses.values()) {
                    $wrapper.removeClass(wrapperClass);
                }
                $wrapper.addClass(wrapperClasses.get('default'));
            }
        }

    }
});