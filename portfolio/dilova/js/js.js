/**
 * Created by roman_000 on 11.03.2016.
 */
/**
 * Created by roman_000 on 03.03.2016.
 */
jQuery(document).ready(function () {
    //$('.total').click(function () {
    //    $('.items').stop(true, true).slideToggle(200);
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

    if ($(window).width() < 1000) {
        $('.withMenu').click(function () {
            $('.fall-out-menu-mob').slideToggle();
        });
    }

    $('.fancybox-modal').fancybox({padding: 0});

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

    //$('#slider1').sliderRM({
    //    bar: true,
    //    nav: true,
    //    margin: 30,
    //    duration: 300,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        480: {
    //            items: 2
    //        },
    //        768: {
    //            items: 3
    //        },
    //        980: {
    //            items: 4
    //        },
    //        1366: {
    //            items: 6
    //        }
    //    }
    //});
    //
    //var sl2 = $('#slider2').sliderRM({
    //    bar: true,
    //    nav: true,
    //    margin: 30,
    //    duration: 300,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        480: {
    //            items: 2
    //        },
    //        768: {
    //            items: 3
    //        },
    //        980: {
    //            items: 4
    //        },
    //        1366: {
    //            items: 6
    //        }
    //    }
    //});

    $('.up').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
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
        }
        else {
            $(this).find('.check').css({height: height});
            $(this).find('.check').css({width: width});
        }
    });
    //$("input[name=tel]").mask("+7 (999) - 999 - 9999");

    $('.menuShow').click(function () {
        //$('.headMenu').slideToggle();
        $('.headerMenu').slideToggle();
    });
    $('.filter').click(function(){
        $('.katalogMenu').slideToggle();
    });
});