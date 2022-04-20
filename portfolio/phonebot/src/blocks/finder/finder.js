$(document).ready(function () {

    let activeProfile;

    if (viewportWidth < mobileWidth) {
        initFinder();
    } else {
        loadVideo();
    }

    function loadVideo() {

        let checkArray = [];

        $('.finder__load-video-test-item').each(function () {
            let video = $(this)[0];
            video.play();
            let checkTimer = setInterval(function () {

                if (video.buffered.length > 0) {
                    let duration = video.duration;
                    let buffered = video.buffered.end(0);
                    if (duration === buffered) {
                        clearInterval(checkTimer);
                        checkArray.push(true);
                    }
                }
            }, 50);
        });

        let globalCheckTimer = setInterval(function () {
            if (checkArray.length === $('.finder__load-video-test-item').length) {
                initFinder();
                clearInterval(globalCheckTimer);
            }
        }, 50);
    }

    function initFinder() {

        $('.finder__loader').addClass('finder__loader--hide');
        $('.finder__wrapper').removeClass('finder__wrapper--hide');

        let videoHideClass = 'finder__item-video--hide';
        let elementShowFromTopClass = 'finder__item-animation-elem--show-from-top';
        let elementHideToBottomClass = 'finder__item-animation-elem--hide-to-bottom';
        let elementShowFromOpacity = 'finder__item-animation-elem--opacity-show';
        let elementHideToOpacity = 'finder__item-animation-elem--opacity-hide';
        let contentHideClass = 'finder__item--hide-content';
        let slideShowClass = 'finder__item--show-slider';

        let currentSlide = 0;

        showSlide0();

        function showSlide0() {
            let $footer = $('.finder__footer');
            $footer.removeClass('finder__footer--show');
            let $slide = $('.finder__item[data-slide="0"]');
            $slide.addClass(slideShowClass);
            $('body, html').scrollTop(0);
            let $elem1 = $slide.find('.finder__item-content-elem');
            let $elem2 = $slide.find('.finder__item-content-subtitle');
            let $elem3 = $slide.find('.finder__item-content-title');
            let $elem4 = $slide.find('.finder__item-content-desc');
            let $elem5 = $slide.find('.finder__item-content-button');
            let $elem6 = $slide.find('.finder__item-content-mobile-elem');


            let $videoIn = $slide.find('.finder__item-video--in');
            let videoInDuration = 0;

            $videoIn.removeClass(videoHideClass);

            if (viewportWidth < mobileWidth) {

            } else {
                videoInDuration = (parseInt($videoIn[0].duration - 4)) * 1000;
                $videoIn[0].play();
            }


            if (viewportWidth < mobileWidth) {
                setTimeout(function () {
                    $elem1.addClass(elementShowFromTopClass);
                }, 100);

                setTimeout(function () {
                    $elem2.addClass(elementShowFromTopClass);
                }, 200);

                setTimeout(function () {
                    $elem6.addClass(elementShowFromTopClass);
                }, 300);

                setTimeout(function () {
                    $elem3.addClass(elementShowFromTopClass);
                }, 400);

                setTimeout(function () {
                    $elem4.addClass(elementShowFromTopClass);
                }, 500);

                setTimeout(function () {
                    $elem5.addClass(elementShowFromTopClass);
                }, 600);
            } else {
                setTimeout(function () {

                    setTimeout(function () {
                        $elem1.addClass(elementShowFromTopClass);
                    }, 100);

                    setTimeout(function () {
                        $elem2.addClass(elementShowFromTopClass);
                    }, 200);

                    setTimeout(function () {
                        $elem3.addClass(elementShowFromTopClass);
                    }, 300);

                    setTimeout(function () {
                        $elem4.addClass(elementShowFromTopClass);
                    }, 400);

                    setTimeout(function () {
                        $elem5.addClass(elementShowFromTopClass);
                    }, 500);

                }, videoInDuration);
            }
        }

        function hideSlide0() {
            let $slide = $('.finder__item[data-slide="0"]');

            let $elem1 = $slide.find('.finder__item-content-elem');
            let $elem2 = $slide.find('.finder__item-content-subtitle');
            let $elem3 = $slide.find('.finder__item-content-title');
            let $elem4 = $slide.find('.finder__item-content-desc');
            let $elem5 = $slide.find('.finder__item-content-button');
            let $elem6 = $slide.find('.finder__item-content-mobile-elem');

            let $videoIn = $slide.find('.finder__item-video--in');
            let $videoOut = $slide.find('.finder__item-video--out');
            let videoOutDuration = 0;

            $videoIn.addClass(videoHideClass);
            $videoOut.removeClass(videoHideClass);

            function backStartState() {
                $elem1.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem2.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem3.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem4.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem5.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem6.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $videoIn.removeClass(videoHideClass);
                $videoOut.addClass(videoHideClass);
                $slide.removeClass(slideShowClass);
            }

            if (viewportWidth < mobileWidth) {
                videoOutDuration = 1000;
            } else {
                videoOutDuration = ($videoOut[0].duration) * 1000;
                $videoOut[0].play();
            }

            if (viewportWidth < mobileWidth) {
                setTimeout(function () {
                    $elem1.addClass(elementHideToBottomClass);
                }, 100);

                setTimeout(function () {
                    $elem2.addClass(elementHideToBottomClass);
                }, 200);

                setTimeout(function () {
                    $elem6.addClass(elementHideToBottomClass);
                }, 300);

                setTimeout(function () {
                    $elem3.addClass(elementHideToBottomClass);
                }, 400);

                setTimeout(function () {
                    $elem4.addClass(elementHideToBottomClass);
                }, 500);

                setTimeout(function () {
                    $elem5.addClass(elementHideToBottomClass);
                    $slide.removeClass(slideShowClass);
                }, 600);

                setTimeout(function () {
                    backStartState();
                }, 700);
            } else {
                setTimeout(function () {

                    setTimeout(function () {
                        $elem1.addClass(elementHideToBottomClass);
                    }, 100);

                    setTimeout(function () {
                        $elem2.addClass(elementHideToBottomClass);
                    }, 200);

                    setTimeout(function () {
                        $elem3.addClass(elementHideToBottomClass);
                    }, 300);

                    setTimeout(function () {
                        $elem4.addClass(elementHideToBottomClass);
                    }, 400);

                    setTimeout(function () {
                        $elem5.addClass(elementHideToBottomClass);
                    }, 500);

                    setTimeout(function () {
                        $slide.removeClass(slideShowClass);
                    }, 600);

                    setTimeout(function () {
                        backStartState();
                    }, 700);
                }, videoOutDuration);
            }
        }

        function showSlide1() {
            currentSlide = 1;
            setActiveDot(currentSlide);
            let $footer = $('.finder__footer');
            $footer.addClass('finder__footer--show');

            let $slide = $('.finder__item[data-slide="1"]');
            $slide.addClass(slideShowClass);

            checkReadyToNext($slide);

            let $elem1 = $slide.find('.finder__item-content-subtitle');
            let $elem2 = $slide.find('.finder__item-content-title');
            let $elem3 = $slide.find('.finder__price-selection-item').eq(0);
            let $elem4 = $slide.find('.finder__price-selection-item').eq(1);
            let $elem5 = $slide.find('.finder__price-selection-item').eq(2);
            let $elem6 = $slide.find('.finder__price-selection-item').eq(3);
            let $elem7 = $slide.find('.finder__item-price-to-img');
            let $elem8 = $slide.find('.range-slider');

            let $videoIn = $slide.find('.finder__item-video--in');
            let videoInDuration = 0;

            $videoIn.removeClass(videoHideClass);

            if (viewportWidth < mobileWidth) {

            } else {
                videoInDuration = ($videoIn[0].duration) * 1000;
                $videoIn[0].play();
            }

            if (viewportWidth < mobileWidth) {

                setTimeout(function () {
                    $elem1.addClass(elementShowFromTopClass);
                }, 100);

                setTimeout(function () {
                    $elem2.addClass(elementShowFromTopClass);
                }, 200);

                setTimeout(function () {
                    $elem3.addClass(elementShowFromTopClass);
                }, 300);

                setTimeout(function () {
                    $elem4.addClass(elementShowFromTopClass);
                }, 400);

                setTimeout(function () {
                    $elem5.addClass(elementShowFromTopClass);
                }, 500);

                setTimeout(function () {
                    $elem6.addClass(elementShowFromTopClass);
                }, 600);

                setTimeout(function () {
                    $elem8.addClass(elementShowFromOpacity);
                }, 700);
            } else {
                setTimeout(function () {

                    setTimeout(function () {
                        $elem1.addClass(elementShowFromTopClass);
                    }, 100);

                    setTimeout(function () {
                        $elem2.addClass(elementShowFromTopClass);
                    }, 200);

                    setTimeout(function () {
                        $elem3.addClass(elementShowFromTopClass);
                    }, 300);

                    setTimeout(function () {
                        $elem4.addClass(elementShowFromTopClass);
                    }, 400);

                    setTimeout(function () {
                        $elem5.addClass(elementShowFromTopClass);
                    }, 500);

                    setTimeout(function () {
                        $elem6.addClass(elementShowFromTopClass);
                    }, 600);

                    setTimeout(function () {
                        $elem7.addClass(elementShowFromTopClass);
                    }, 1000);


                    setTimeout(function () {
                        $elem8.addClass(elementShowFromOpacity);
                    }, 1000);

                }, videoInDuration);
            }


        }

        function hideSlide1() {
            let $slide = $('.finder__item[data-slide="1"]');

            let $elem1 = $slide.find('.finder__item-content-subtitle');
            let $elem2 = $slide.find('.finder__item-content-title');
            let $elem3 = $slide.find('.finder__price-selection-item').eq(0);
            let $elem4 = $slide.find('.finder__price-selection-item').eq(1);
            let $elem5 = $slide.find('.finder__price-selection-item').eq(2);
            let $elem6 = $slide.find('.finder__price-selection-item').eq(3);
            let $elem7 = $slide.find('.finder__item-price-to-img');
            let $elem8 = $slide.find('.range-slider');

            let $videoIn = $slide.find('.finder__item-video--in');
            let $videoOut = $slide.find('.finder__item-video--out');
            let videoOutDuration = 0;

            $videoIn.addClass(videoHideClass);
            $videoOut.removeClass(videoHideClass);

            function backStartState() {
                $elem1.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem2.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem3.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem4.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem5.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem6.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem7.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem8.removeClass(elementHideToBottomClass).removeClass(elementShowFromOpacity);
                $videoIn.removeClass(videoHideClass);
                $videoOut.addClass(videoHideClass);
            }

            if (viewportWidth < mobileWidth) {
                videoOutDuration = 1000;
            } else {
                videoOutDuration = ($videoOut[0].duration) * 1000;
                $videoOut[0].play();
            }

            if (viewportWidth < mobileWidth) {
                setTimeout(function () {
                    $elem1.addClass(elementHideToBottomClass);
                }, 100);

                setTimeout(function () {
                    $elem2.addClass(elementHideToBottomClass);
                }, 200);

                setTimeout(function () {
                    $elem6.addClass(elementHideToBottomClass);
                }, 300);

                setTimeout(function () {
                    $elem3.addClass(elementHideToBottomClass);
                }, 400);

                setTimeout(function () {
                    $elem4.addClass(elementHideToBottomClass);
                }, 500);

                setTimeout(function () {
                    $elem5.addClass(elementHideToBottomClass);
                }, 600);

                setTimeout(function () {
                    $elem6.addClass(elementHideToBottomClass);
                    $slide.removeClass(slideShowClass);
                }, 700);

                setTimeout(function () {
                    $elem8.addClass(elementHideToBottomClass);
                }, 800);

                setTimeout(function () {
                    backStartState();
                }, 1000);
            } else {
                setTimeout(function () {
                    $elem7.addClass(elementHideToBottomClass);
                }, 0);

                setTimeout(function () {
                    setTimeout(function () {
                        $elem1.addClass(elementHideToBottomClass);
                    }, 100);

                    setTimeout(function () {
                        $elem2.addClass(elementHideToBottomClass);
                    }, 200);

                    setTimeout(function () {
                        $elem3.addClass(elementHideToBottomClass);
                    }, 300);

                    setTimeout(function () {
                        $elem4.addClass(elementHideToBottomClass);
                    }, 400);

                    setTimeout(function () {
                        $elem5.addClass(elementHideToBottomClass);
                    }, 500);

                    setTimeout(function () {
                        $elem6.addClass(elementHideToBottomClass);
                    }, 600);

                    setTimeout(function () {
                        $slide.removeClass(slideShowClass);
                    }, 600);

                    setTimeout(function () {
                        backStartState();
                    }, 700);
                }, videoOutDuration);

            }
        }

        function showSlide2() {

            currentSlide = 2;
            setActiveDot(currentSlide);
            let $slide = $('.finder__item[data-slide="2"]');

            checkReadyToNext($slide);

            $slide.addClass(slideShowClass);

            $('.finder__default-back').removeClass('finder__default-back--hide');

            let $elem1 = $slide.find('.finder__item-animation-elem--opacity');

            setTimeout(function () {
                $elem1.addClass(elementShowFromOpacity);
            }, 100);

        }

        function hideSlide2() {

            let $slide = $('.finder__item[data-slide="2"]');

            let $elem1 = $slide.find('.finder__item-animation-elem--opacity');

            setTimeout(function () {
                $elem1.removeClass(elementShowFromOpacity);
            }, 100);

            setTimeout(function () {
                $slide.removeClass(slideShowClass);
            }, 1000);

        }

        function showSlide3() {
            currentSlide = 3;
            setActiveDot(currentSlide);

            let $slide = $('.finder__item[data-slide="3"]');
            checkReadyToNext($slide);
            $slide.addClass(slideShowClass);

            let $elem1 = $slide.find('.finder__item-content-subtitle');
            let $elem2 = $slide.find('.finder__item-content-title');
            let $elem3 = $slide.find('.finder__item-os-selection-item--apple');
            let $elem4 = $slide.find('.finder__item-os-selection-item--android');
            let $elem5 = $slide.find('.finder__item-os-selection-img-inner-back');
            let $elem6 = $slide.find('.finder__item-os-selection-img-inner-phone');
            let $elem7 = $slide.find('.finder__item-os-selection-img-inner-cable');


            if (viewportWidth < mobileWidth) {

                setTimeout(function () {
                    $elem1.addClass(elementShowFromTopClass);
                }, 100);

                setTimeout(function () {
                    $elem2.addClass(elementShowFromTopClass);
                }, 200);

                setTimeout(function () {
                    $elem3.addClass(elementShowFromTopClass);
                }, 300);

                setTimeout(function () {
                    $elem4.addClass(elementShowFromTopClass);
                }, 400);

                setTimeout(function () {
                    $elem5.addClass(elementShowFromTopClass);
                }, 500);

                setTimeout(function () {
                    $elem6.addClass(elementShowFromTopClass);
                }, 600);
            } else {
                setTimeout(function () {
                    $elem1.addClass(elementShowFromTopClass);
                }, 100);

                setTimeout(function () {
                    $elem2.addClass(elementShowFromTopClass);
                }, 200);

                setTimeout(function () {
                    $elem3.addClass(elementShowFromTopClass);
                }, 300);

                setTimeout(function () {
                    $elem4.addClass(elementShowFromTopClass);
                }, 400);

                setTimeout(function () {
                    $elem5.addClass(elementShowFromTopClass);
                    $elem6.addClass(elementShowFromTopClass);
                }, 500);

                setTimeout(function () {
                    $elem7.addClass(elementShowFromTopClass);
                }, 1000);
            }


        }

        function hideSlide3() {

            let $slide = $('.finder__item[data-slide="3"]');

            let $elem1 = $slide.find('.finder__item-content-subtitle');
            let $elem2 = $slide.find('.finder__item-content-title');
            let $elem3 = $slide.find('.finder__item-os-selection-item--apple');
            let $elem4 = $slide.find('.finder__item-os-selection-item--android');
            let $elem5 = $slide.find('.finder__item-os-selection-img-inner-back');
            let $elem6 = $slide.find('.finder__item-os-selection-img-inner-phone');
            let $elem7 = $slide.find('.finder__item-os-selection-img-inner-cable');


            setTimeout(function () {
                $elem1.addClass(elementHideToBottomClass);
            }, 100);
            setTimeout(function () {
                $elem2.addClass(elementHideToBottomClass);
            }, 200);
            setTimeout(function () {
                $elem3.addClass(elementHideToBottomClass);
            }, 300);
            setTimeout(function () {
                $elem4.addClass(elementHideToBottomClass);
            }, 400);
            setTimeout(function () {
                $elem7.addClass(elementHideToBottomClass);
            }, 500);
            setTimeout(function () {
                $elem5.addClass(elementHideToBottomClass);
                $elem6.addClass(elementHideToBottomClass);
            }, 600);

            setTimeout(function () {
                $slide.removeClass(slideShowClass);
                $elem1.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem2.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem3.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem4.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem5.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem6.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem7.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
            }, 700);


        }

        function showSlide4() {
            currentSlide = 4;
            setActiveDot(currentSlide);

            let $slide = $('.finder__item[data-slide="4"]');
            $slide.addClass(slideShowClass);
            checkReadyToNext($slide);

            let $elem1 = $slide.find('.finder__item-animation-elem').eq(0);
            let $elem2 = $slide.find('.finder__item-animation-elem').eq(1);
            let $elem3 = $slide.find('.finder__item-animation-elem').eq(2);
            let $elem4 = $slide.find('.finder__item-animation-elem').eq(3);
            let $elem5 = $slide.find('.finder__item-animation-elem').eq(4);
            let $elem6 = $slide.find('.finder__item-animation-elem').eq(5);


            setTimeout(function () {
                $elem1.addClass(elementShowFromTopClass);
            }, 100);

            setTimeout(function () {
                $elem2.addClass(elementShowFromTopClass);
            }, 200);

            setTimeout(function () {
                $elem3.addClass(elementShowFromTopClass);
            }, 300);

            setTimeout(function () {
                $elem4.addClass(elementShowFromTopClass);
            }, 400);

            setTimeout(function () {
                $elem5.addClass(elementShowFromTopClass);
            }, 500);

            setTimeout(function () {
                $elem6.addClass(elementShowFromTopClass);
            }, 600);
        }

        function hideSlide4() {
            let $slide = $('.finder__item[data-slide="4"]');

            let $elem1 = $slide.find('.finder__item-animation-elem').eq(0);
            let $elem2 = $slide.find('.finder__item-animation-elem').eq(1);
            let $elem3 = $slide.find('.finder__item-animation-elem').eq(2);
            let $elem4 = $slide.find('.finder__item-animation-elem').eq(3);
            let $elem5 = $slide.find('.finder__item-animation-elem').eq(4);
            let $elem6 = $slide.find('.finder__item-animation-elem').eq(5);


            setTimeout(function () {
                $elem1.addClass(elementHideToBottomClass);
            }, 100);
            setTimeout(function () {
                $elem2.addClass(elementHideToBottomClass);
            }, 200);
            setTimeout(function () {
                $elem3.addClass(elementHideToBottomClass);
            }, 300);
            setTimeout(function () {
                $elem4.addClass(elementHideToBottomClass);
            }, 400);
            setTimeout(function () {
                $elem5.addClass(elementHideToBottomClass);
            }, 500);
            setTimeout(function () {
                $elem6.addClass(elementHideToBottomClass);
            }, 600);
            setTimeout(function () {
                $slide.removeClass(slideShowClass);
                $elem1.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem2.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem3.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem4.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem5.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
                $elem6.removeClass(elementShowFromTopClass).removeClass(elementHideToBottomClass);
            }, 700);

        }

        function showSlide5() {
            currentSlide = 5;
            setActiveDot(currentSlide);

            let $slide = $('.finder__item[data-slide="5"]');
            $slide.addClass(slideShowClass);

            $('.finder__default-back').addClass('finder__default-back--hide');


            let $elem1 = $slide.find('.finder__item-animation-elem').eq(0);
            let $elem2 = $slide.find('.finder__item-animation-elem').eq(1);
            let $elem3 = $slide.find('.finder__item-animation-elem').eq(2);


            let $videoIn = $slide.find('.finder__item-video--in');

            $videoIn.removeClass(videoHideClass);

            let videoInDuration = parseInt(videoProfileDuration[activeProfile]);

            $videoIn[0].play();

            setTimeout(function () {

                setTimeout(function () {
                    $videoIn.addClass(videoHideClass);
                }, 100);

                setTimeout(function () {
                    $elem1.addClass(elementShowFromTopClass);
                }, 200);

                setTimeout(function () {
                    $elem2.addClass(elementShowFromTopClass);
                }, 300);

                setTimeout(function () {
                    $elem3.addClass(elementShowFromTopClass);
                }, 400);
            }, videoInDuration);


        }

        function hideSlide5() {
            currentSlide = 5;
            setActiveDot(currentSlide);

            let $slide = $('.finder__item[data-slide="5"]');

            let $elem1 = $slide.find('.finder__item-animation-elem').eq(0);
            let $elem2 = $slide.find('.finder__item-animation-elem').eq(1);
            let $elem3 = $slide.find('.finder__item-animation-elem').eq(2);

            let $videoIn = $slide.find('.finder__item-video--in');
            let videoOutDuration = 0;

            $videoIn.addClass(videoHideClass);

            function backStartState() {
                $elem1.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem2.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $elem3.removeClass(elementHideToBottomClass).removeClass(elementShowFromTopClass);
                $videoIn.removeClass(videoHideClass);
                $slide.removeClass(slideShowClass);
            }

            if (viewportWidth < mobileWidth) {
                setTimeout(function () {
                    $elem1.addClass(elementHideToBottomClass);
                }, 100);

                setTimeout(function () {
                    $elem2.addClass(elementHideToBottomClass);
                }, 200);

                setTimeout(function () {
                    $elem3.addClass(elementHideToBottomClass);
                }, 400);

                setTimeout(function () {
                    backStartState();
                }, 400);
            } else {
                setTimeout(function () {
                    setTimeout(function () {
                        $elem1.addClass(elementHideToBottomClass);
                    }, 100);

                    setTimeout(function () {
                        $elem2.addClass(elementHideToBottomClass);
                    }, 200);

                    setTimeout(function () {
                        $elem3.addClass(elementHideToBottomClass);
                    }, 300);

                    setTimeout(function () {
                        backStartState();
                    }, 400);
                }, videoOutDuration);

            }
        }

        $('.finder__item-content-button--first-slide').on('click', function () {
            $('body, html').scrollTop(0);

            hideSlide0();

            if (viewportWidth < mobileWidth) {
                setTimeout(function () {
                    showSlide1();
                }, 600);
            } else {
                setTimeout(function () {
                    showSlide1();
                }, 1000);
            }
        });

        $('.finder__item-content-header-button').on('click', function () {
            $('body, html').scrollTop(0);

            hideSlide4();

            setTimeout(function () {
                showSlide5();
            }, 700);
        });


        $('.finder__footer-next').on('click', function () {

            if ($(this).hasClass('finder__footer-next--ready')) {
                $('html, body').animate({scrollTop: 0}, 200);

                if (currentSlide === 1) {
                    hideSlide1();

                    if (viewportWidth < mobileWidth) {
                        setTimeout(function () {
                            showSlide2();
                        }, 600);
                    } else {
                        setTimeout(function () {
                            showSlide2();
                        }, 1500);
                    }
                }

                if (currentSlide === 2) {
                    hideSlide2();

                    if (viewportWidth < mobileWidth) {
                        setTimeout(function () {
                            showSlide3();
                        }, 600);
                    } else {
                        setTimeout(function () {
                            showSlide3();
                        }, 1500);
                    }
                }

                if (currentSlide === 3) {
                    hideSlide3();

                    setTimeout(function () {
                        showSlide4();
                    }, 600);
                }

                if (currentSlide === 4) {
                    $('.finder__footer-next').addClass('finder__footer-next--hide');

                    hideSlide4();

                    setTimeout(function () {
                        showSlide5();
                    }, 700);
                }
            }
        });

        $('.finder__footer-back').on('click', function () {
            backSlide();
        });

        $('.finder__footer-dot').on('click', function () {
            let $dot = $(this);
            let target = $dot.index('.finder__footer-dot') + 1;

            if (!$dot.hasClass('finder__footer-dot--not-avaliable') && !$dot.hasClass('finder__footer-dot--active')) {
                if (currentSlide === 1) {
                    hideSlide1();

                    if (viewportWidth < mobileWidth) {
                        setTimeout(function () {
                            showFreeSlide(target);
                        }, 600);
                    } else {
                        setTimeout(function () {
                            showFreeSlide(target);
                        }, 1500);
                    }
                }

                if (currentSlide === 2) {
                    hideSlide2();

                    if (viewportWidth < mobileWidth) {
                        setTimeout(function () {
                            showFreeSlide(target);
                        }, 600);
                    } else {
                        setTimeout(function () {
                            showFreeSlide(target);
                        }, 1500);
                    }
                }

                if (currentSlide === 3) {
                    hideSlide3();

                    setTimeout(function () {
                        showFreeSlide(target);
                    }, 600);
                }

                if (currentSlide === 4) {
                    $('.finder__footer-next').addClass('finder__footer-next--hide');

                    hideSlide4();

                    setTimeout(function () {
                        showFreeSlide(target);
                    }, 700);
                }

                if (currentSlide === 5) {

                    hideSlide5();

                    setTimeout(function () {
                        showFreeSlide(target);
                    }, 300);
                }

                function showFreeSlide(target) {
                    if (target === 1) {
                        showSlide1();
                    } else if (target === 2) {
                        showSlide2();
                    } else if (target === 3) {
                        showSlide3();
                    } else if (target === 4) {
                        showSlide4();
                    } else if (target === 5) {
                        showSlide5();
                    }
                }

                // backSlide();
            }
        });


        function backSlide() {
            $('html, body').animate({scrollTop: 0}, 200);

            if (currentSlide === 1) {
                hideSlide1();

                if (viewportWidth < mobileWidth) {
                    setTimeout(function () {
                        showSlide0();
                    }, 600);
                } else {
                    setTimeout(function () {
                        showSlide0();
                    }, 1500);
                }
            }

            if (currentSlide === 2) {
                hideSlide2();

                if (viewportWidth < mobileWidth) {
                    setTimeout(function () {
                        showSlide1();
                    }, 600);
                } else {
                    setTimeout(function () {
                        showSlide1();
                    }, 1500);
                }
            }

            if (currentSlide === 3) {
                hideSlide3();

                setTimeout(function () {
                    showSlide2();
                }, 600);
            }

            if (currentSlide === 4) {

                hideSlide4();

                setTimeout(function () {
                    showSlide3();
                }, 700);
            }

            if (currentSlide === 5) {

                hideSlide5();

                setTimeout(function () {
                    showSlide4();
                }, 700);
            }
        }

        $('.finder__selection-item').on('click', function () {
            let $item = $(this);
            let $wrapper = $item.closest('.finder__selection');
            let wrapperActiveClass = 'finder__selection--active';
            let $items = $wrapper.find('.finder__selection-item');
            let activeClass = 'finder__selection-item--active';
            let multiselect = false;

            if ($wrapper.hasClass('finder__selection--multiselect')) {
                multiselect = true;
            }

            let $slide = $(this).closest('.finder__item');

            if (!multiselect) {
                if (!$item.hasClass(activeClass)) {
                    $items.removeClass(activeClass);
                    $item.addClass(activeClass);
                    $wrapper.addClass(wrapperActiveClass);
                }
            } else {
                if (!$item.hasClass(activeClass)) {
                    $item.addClass(activeClass);
                    $wrapper.addClass(wrapperActiveClass);
                } else {
                    $item.removeClass(activeClass);

                    // console.log($wrapper.find(activeClass).length)

                    if ($wrapper.find('.' + activeClass).length > 0) {
                        $wrapper.addClass(wrapperActiveClass);
                    } else {
                        $wrapper.removeClass(wrapperActiveClass);
                    }
                }
            }

            if (currentSlide !== 4) {
                $slide.addClass('ready');
            } else {
                let count = $item.closest('.finder__item').find('.finder__selection').length;
                let countActive = $item.closest('.finder__item').find('.finder__selection--active').length;

                if (count === countActive) {
                    $slide.addClass('ready');
                } else {
                    $slide.removeClass('ready');
                }
            }

            checkReadyToNext($slide);
        });
    }

    function checkReadyToNext($slide) {
        let index = $('.finder__item').index($slide);

        if ($slide.hasClass('ready')) {
            $('.finder__footer-next').addClass('finder__footer-next--ready');
            $('.finder__footer-dot').eq(index).removeClass('finder__footer-dot--not-avaliable');
        } else {
            $('.finder__footer-next').removeClass('finder__footer-next--ready');

        }
    }

    function setActiveDot(currentSlide) {
        $('.finder__footer-dot').removeClass('finder__footer-dot--active');
        $('.finder__footer-dot').eq(currentSlide - 1).addClass('finder__footer-dot--active');
        $('.finder__footer-dot').eq(currentSlide - 1).removeClass('finder__footer-dot--not-avaliable');

        if (currentSlide === 5) {
            $('.finder__footer-next').addClass('finder__footer-next--hide');
        } else if (currentSlide === 1) {
            // $('.finder__footer-back').addClass('finder__footer-back--hide');
        } else {
            $('.finder__footer-back').removeClass('finder__footer-back--hide');
            $('.finder__footer-next').removeClass('finder__footer-next--hide');
        }
    }

    let conditionGalleryWidth;
    let conditionGalleryHeight;

    if (viewportWidth < mobileWidth) {
        conditionGalleryWidth = viewportWidth;
        conditionGalleryHeight = viewportWidth;
    } else {
        conditionGalleryWidth = 570;
        conditionGalleryHeight = 570;
    }

    function createThreeSixty(name) {

        $('#threesixty').detach();

        $('<div id="threesixty"></div>').prependTo('.finder__item-condition-gallery-wrapper');

        $('.finder__item-condition-gallery-wrapper').width(conditionGalleryWidth);
        $('.finder__item-condition-gallery-wrapper').height(conditionGalleryWidth);

        var threesixty = new ThreeSixty(document.getElementById('threesixty'), {
            image: 'images/condition-gallery/' + name + '.jpg',
            width: conditionGalleryWidth,
            height: conditionGalleryHeight,
            count: 24,
            perRow: 1,
            speed: 1000,
            prev: document.getElementById('threesixty-prev'),
            next: document.getElementById('threesixty-next')
        });

        threesixty.play();
        zoomGallery();
    }

    createThreeSixty(1);

    function zoomGallery() {
        // let $gallery = $('.finder__item-condition-gallery-wrapper');
        let $gallery = $('#threesixty');
        let $in = $('.finder__item-condition-gallery-button--zoom-in');
        let $out = $('.finder__item-condition-gallery-button--zoom-out');
        let zoomState = 1;

        $gallery.css('transform', 'scale(1)');

        $in.off('click.zoom');
        $out.off('click.zoom');

        $in.on('click.zoom', function () {
            zoomState += .1;

            if (zoomState > 2) {
                zoomState = 2;
            }

            $gallery.css('transform', 'scale(' + zoomState + ')');

        });

        $out.on('click.zoom', function () {
            zoomState -= .1;

            if (zoomState < 1) {
                zoomState = 1;
            }

            $gallery.css('transform', 'scale(' + zoomState + ')');

        });
    }

    $('.finder__condition-selection-item').on('click', function () {
        let index = $('.finder__condition-selection-item').index($(this)) + 1;
        createThreeSixty(index);
    });

    $('.finder__item-os-selection-item--apple, .finder__item-os-selection-img-inner-phone-apple').on('click', function () {
        $('.finder__item-os-selection-img-inner-phone').removeClass('finder__item-os-selection-img-inner-phone--android');
        $('.finder__item-os-selection-img-inner-phone').addClass('finder__item-os-selection-img-inner-phone--apple');
        $(this).closest('.finder__item').addClass('ready');
        checkReadyToNext($(this).closest('.finder__item'));
    });

    $('.finder__item-os-selection-item--android, .finder__item-os-selection-img-inner-phone-android').on('click', function () {
        $('.finder__item-os-selection-img-inner-phone').removeClass('finder__item-os-selection-img-inner-phone--apple');
        $('.finder__item-os-selection-img-inner-phone').addClass('finder__item-os-selection-img-inner-phone--android');
        $(this).closest('.finder__item').addClass('ready');
        checkReadyToNext($(this).closest('.finder__item'));
    });

    function selectProfile() {
        let name = '';
        let videoName = '';
        let videoUrl = '';

        let sex = 'woman';
        let age = '30';
        let lifestyle = 'student';
        let usage = 'photography';

        function changeName() {
            name = 'images/profile-icons/' + sex + age + '.svg';
            videoName = sex + age;
            activeProfile = videoName;

            if (viewportWidth < mobileWidth) {
                videoUrl = 'images/profile-icons/' + sex + age + 'm.mp4';
            } else {
                videoUrl = 'images/profile-icons/' + sex + age + '.mp4';
            }

            $('.finder__item-content-usage-profile-avatar-icon').css('background', 'url(' + name + ')');
            $('.finder__item[data-slide="5"]').find('.finder__item-video--in').attr('src', videoUrl);
            // $('.finder__item[data-slide="5"]').find('.finder__item-video--in source').attr('src', videoUrl);
        }

        $('.finder__sex-selection-item').on('click', function () {
            sex = $(this).data('profile');
            changeName();
        });

        $('.finder__age-selection-item').on('click', function () {
            age = $(this).data('profile');
            changeName();
        });

        // $('.finder__lifestyle-selection-item').on('click', function () {
        //     lifestyle = $(this).data('profile')
        //     changeName()
        // });
        // $('.finder__usage-selection-item').on('click', function () {
        //     usage = $(this).data('profile')
        //     changeName()
        // });


    }

    selectProfile();

    function range_slider($slider, val_min, val_max, val_start_1, val_start_2) {
        let val_current_1 = val_start_1;
        let val_current_2 = val_start_2;
        let $slider_item = $slider.find('.range-slider__item');
        let $handle_min;
        let $handle_max;

        $slider_item.slider({
            min: val_min,
            max: val_max,
            create: function (event, ui) {
                $handle_min = $('<div class="range-slider__item-handle-item"></div>').appendTo($slider.find('.range-slider__item-handle').eq(0));
                $handle_max = $('<div class="range-slider__item-handle-item"></div>').appendTo($slider.find('.range-slider__item-handle').eq(1));
                $handle_min.text('$ ' + val_current_1);
                $handle_max.text('$ ' + val_current_2);

                $('<div class="range-slider__item-line-dot range-slider__item-line-dot--1"></div>').appendTo($slider.find('.range-slider__item-line'));
                $('<div class="range-slider__item-line-dot range-slider__item-line-dot--2"></div>').appendTo($slider.find('.range-slider__item-line'));
                $('<div class="range-slider__item-line-dot range-slider__item-line-dot--3"></div>').appendTo($slider.find('.range-slider__item-line'));
                $('<div class="range-slider__item-line-dot range-slider__item-line-dot--4"></div>').appendTo($slider.find('.range-slider__item-line'));
                $('<div class="range-slider__item-line-dot range-slider__item-line-dot--5"></div>').appendTo($slider.find('.range-slider__item-line'));


            },
            slide: function (event, ui) {
                val_current_1 = ui.values[0];
                val_current_2 = ui.values[1];
                $handle_min.text('$ ' + val_current_1);
                $handle_max.text('$ ' + val_current_2);
                $('.finder__selection-item--active').removeClass('finder__selection-item--active');
                $('.finder__item-price-to-img-value').text(val_current_1 + ' - ' + val_current_2);
            },
            change: function (event, ui) {
                val_current_1 = ui.values[0];
                val_current_2 = ui.values[1];
                $handle_min.text('$ ' + val_current_1);
                $handle_max.text('$ ' + val_current_2);
                $(this).closest('.finder__item').addClass('ready');
                checkReadyToNext($(this).closest('.finder__item'));
            },
            values: [val_current_1, val_current_2],
            range: true,
            classes: {
                "ui-slider": "ui-corner-all range-slider__item-line",
                "ui-slider-handle": "ui-corner-all range-slider__item-handle",
                "ui-slider-range": "ui-corner-all ui-widget-header range-slider__item-progress"
            }
        });


        $('.finder__price-selection-item').on('click', function () {
            val_current_1 = $(this).data('price-min');
            val_current_2 = $(this).data('price-max');
            $slider_item.slider("values", [val_current_1, val_current_2]);

            $('.finder__item-price-to-img-value').text(val_current_1 + ' - ' + val_current_2);
        });
        // $input_min.change(function () {

        // });
    }

    range_slider($('#price-range'), 80, 1000, 250, 500);
});