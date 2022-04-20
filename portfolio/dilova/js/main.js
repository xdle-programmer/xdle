/**
 * Created by roman_000 on 03.03.2016.
 */
jQuery(document).ready(function () {
    //$('.total').on("mouseenter mouseleave", function () {
    //    $('.items').stop(true, true).slideToggle(0);
    //});

    $('.close').click(function () {
        $(this).parent().slideUp();
    });

    if ($(window).width() > 1000) {
        $('.withMenu').on('mouseenter mouseleave', function () {
            //$('.fall-out-menu').stop(true, true).slideToggle(200);
            var height = $('.mainWrapper').height();
            var width = $('.mainWrapper').width();
            $('.shadow').css({height: height});
            $('.shadow').css({width: width});
        });
        $('.withMenu').mouseleave(function () {
            $('.shadow').css({height: '0'});
            $('.shadow').css({width: '0'});
        });
    }

    $('.menuShow').click(function () {
        //$('.headMenu').slideToggle();
        $('.headerMenu').slideToggle();
    });

    //if ($(window).width() < 1000) {
    //    $('.withMenu').click(function () {
    //        $('.fall-out-menu-mob').slideToggle();
    //    });
    //}

    $("#owl-demo").owlCarousel({
        margin: 10,
        responsiveClass: true,
        items: 1,
        autoplay: true,
        navigation: true,
        slideSpeed: 100,
        paginationSpeed: 1000,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        nav: true,
        navText: false,
        loop: true,
        itemsScaleUp: false
    });

    $("#owl-demo-lyki").owlCarousel({
        margin: 10,
        responsiveClass: true,
        items: 1,
        autoplay: false,
        navigation: true,
        slideSpeed: 100,
        paginationSpeed: 1000,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        nav: true,
        navText: false,
        loop: true,
        itemsScaleUp: false
    });

    $(".ring-owl").owlCarousel({
        margin: 10,
        responsiveClass: true,
        items: 1,
        autoplay: false,
        navigation: true,
        slideSpeed: 100,
        paginationSpeed: 1000,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        nav: true,
        navText: false,
        loop: true,
        itemsScaleUp: false
    });

    if ($(window).width() < 1000) {
        $('.stels').remove();
    }

    var bol = false;
    $('#slider1').sliderRM({
        bar: true,
        nav: true,
        margin: 30,
        duration: 300,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            980: {
                items: 4
            },
            1366: {
                items: 6
            }
        },
        nexted: function () {
            //$('#slider1').trigger('goto-slider', 0);
            var wait = 0;
            var pos = parseInt($('#slider1 .slider-rm-bar__handler').css('left'));
            if (pos >= 310) {
                console.log(bol);
                bol = true;
                console.log(bol);
            }
            console.log(parseInt($('#slider1 .slider-rm-bar__handler').css('left')));
            if (bol == true) {
//                    $('.slider-rm-ul').animate({left:0},400);
//                    $('.slider-rm-bar__handler').animate({left:0},400);
                $('#slider1').trigger('goto-slider', 0);
                bol = false;
            }

            $('.slider-rm-nav__next').click(function () {


            });
        }
    });
    var bool = false;
    $('#slider2').sliderRM({
        bar: true,
        nav: true,
        margin: 30,
        duration: 300,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            980: {
                items: 4
            },
            1366: {
                items: 6
            }
        },
        nexted: function () {
            //$('#slider1').trigger('goto-slider', 0);
            var wait = 0;
            var pos = parseInt($('#slider2 .slider-rm-bar__handler').css('left'));
            if (pos >= 310) {
                console.log(bool);
                bool = true;
                console.log(bool);
            }
            console.log(parseInt($('#slider2 .slider-rm-bar__handler').css('left')));
            if (bool == true) {
//                    $('.slider-rm-ul').animate({left:0},400);
//                    $('.slider-rm-bar__handler').animate({left:0},400);
                $('#slider2').trigger('goto-slider', 0);
                bool = false;
            }

            $('.slider-rm-nav__next').click(function () {


            });
        }
    });

    //if ($(window).width() > 1000) {
    //    $('#example3').etalage({
    //        thumb_image_width: 350,
    //        thumb_image_height: 350,
    //        source_image_width: 800,
    //        source_image_height: 800,
    //        zoom_area_width: 500,
    //        zoom_area_height: 500,
    //        zoom_area_distance: 5,
    //        small_thumbs: 3,
    //        smallthumb_inactive_opacity: 1,
    //        smallthumbs_position: 'left',
    //        show_icon: false,
    //        autoplay: false,
    //        keyboard: false,
    //        zoom_easing: false
    //    });
    //}

    if($(window).width() > 1000){
        $(window).load( function() {
            $('.sp-wrap').smoothproducts();
        });
    }

    $('.dropdownlist').change(function () {
        etalage_show($(this).find('option:selected').attr('class'));
    });

    $('.up').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });

    var hei = $(window).height();
    var bol = true;

    $(window).scroll(function () {
        if ($(this).scrollTop() > hei && bol == true) {
            $('.up').fadeIn(400);
            bol = false;
        }
        ;
        if ($(this).scrollTop() <= hei && bol == false) {
            $('.up').fadeOut(400);
            bol = true;
        }

    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 110) {
            $('.headerMenu').addClass("fixed");
        }
        else {
            $('.headerMenu').removeClass("fixed");
        }
    });

    $('.openBtn').click(function () {
        if ($(this).hasClass("opened")) {
            $(this).removeClass("opened");
            $(this).siblings('.inside').slideUp();
        }
        else {
            $(this).addClass("opened");
            $(this).siblings('.inside').slideDown();
        }
    });

    setTimeout(function () {
        var h = $('.ringItem').height() + 58;
        $('.itemsRow').css({maxHeight: h});
    }, 200);

    $('.example .thumbs ul li').on('click', function () {
        var index = $(this).index() + 1;
        $(this).addClass('thumbsActive');
        $(this).siblings().removeClass('thumbsActive');
        $('.example .slide ul li:nth-child(' + index + ')').addClass('active');
        $('.example .slide ul li:nth-child(' + index + ')').siblings().removeClass('active');
    });

    //$('.example .thumbs ul li:nth-child(1)').click(function(){
    //    $('.zoomContainer:nth-child(1)').toggleClass("zoom");
    //    //$('.zoomContainer:nth-child(2)').css({width: 0,height: 0});
    //    //$('.zoomContainer:nth-child(3)').css({width: 0,height: 0});
    //});
    //$('.example .thumbs ul li:nth-child(2)').click(function(){
    //    $('.zoomContainer:nth-child(2)').css({height: 460,width: 460});
    //    $('.zoomContainer:nth-child(1)').css({width: 0,height: 0});
    //    $('.zoomContainer:nth-child(3)').css({width: 0,height: 0});
    //});
    //$('.example .thumbs ul li:nth-child(3)').click(function(){
    //    $('.zoomContainer:nth-child(3)').css({height: 460,width: 460});
    //    $('.zoomContainer:nth-child(1)').css({width: 0,height: 0});
    //    $('.zoomContainer:nth-child(2)').css({width: 0,height: 0});
    //});
    $('.remove').click(function () {
        var itemVal = parseInt($(this).siblings('.value').val());
        if (itemVal > 1) {
            itemVal -= 1;
            $(this).siblings('.value').val(itemVal);
        }
    });

    $('.add').click(function () {
        var itemVal = parseInt($(this).siblings('.value').val());
        if (itemVal >= 1) {
            itemVal += 1;
            $(this).siblings('.value').val(itemVal);
        }
    });

    $('.ringItem').click(function () {
        var height = $('.ringItem').height() + 68;
        var width = $('.ringItem').width();
        if ($(this).find('.check').height() != 0) {
            $(this).find('.check').css({height: 0});
            $(this).find('.check').css({width: 0});
            $(this).removeClass("no");
        }
        else {
            $(this).find('.check').css({height: height});
            $(this).find('.check').css({width: width});
            $(this).addClass("no");
        }
    });

    $("input[name=tel]").inputmask({"mask": "+7 (999) - 999 - 9999"});

    $('input, select').styler();

    if ($(window).width() > 800) {
        $('.video iframe').iframeTracker({
            blurCallback: function () {
                if ($('.videoBlock').hasClass("none")) {
                    $('.videoBlock').removeClass('none');
                }
                else {
                    $('.videoBlock').addClass('none');
                }
            }
        })
    }
    //if ($(window).width() > 1000) {
    //    //$(".img_01").elevateZoom();
    //    $(".img_01").elevateZoom({
    //        gallery: 'gallery_01',
    //        cursor: 'pointer',
    //        galleryActiveClass: 'active',
    //        imageCrossfade: true,
    //        loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
    //    }); //pass the images to Fancybox $("#zoom_03").bind("click", function(e) { var ez = $('#zoom_03').data('elevateZoom');	$.fancybox(ez.getGalleryList()); return false; }); - See more at: http://www.elevateweb.co.uk/image-zoom/examples#sthash.YAvjlFFg.dpuf
    //    $(".img_01").bind("click", function (e) {
    //        var ez = $('.img_01').data('elevateZoom');
    //        $.fancybox(ez.getGalleryList());
    //        return false;
    //    });
    //}
});