/**
 * Created by roman_000 on 10.03.2016.
 */
$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] + " руб.");
        }
    });
    $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) +
        " - до " + $( "#slider-range" ).slider( "values", 1 ) + " руб.");
});
/**
 * Created by roman_000 on 03.03.2016.
 */
jQuery(document).ready(function () {
    $('.total').click(function () {
        $('.items').stop(true, true).slideToggle(200);
    });
    $('.close').click(function () {
        $(this).parent().slideUp();
    });
    if ($(window).width() > 1000) {
        $('.withMenu').on('mouseenter mouseleave', function () {
            $('.fall-out-menu').stop(true, true).slideToggle(200);
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

//    jQuery("#slider").slider({
//        min: 0,
//        max: 1000,
//        values: [0,1000],
//        range: true,
//        stop: function(event, ui) {
//            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
//            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
//
//        },
//        slide: function(event, ui){
//            jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
//            jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
//        }
//    });
//
//    jQuery("input#minCost").change(function(){
//
//        var value1=jQuery("input#minCost").val();
//        var value2=jQuery("input#maxCost").val();
//
//        if(parseInt(value1) > parseInt(value2)){
//            value1 = value2;
//            jQuery("input#minCost").val(value1);
//        }
//        jQuery("#slider").slider("values",0,value1);
//    });
//
//
//    jQuery("input#maxCost").change(function(){
//
//        var value1=jQuery("input#minCost").val();
//        var value2=jQuery("input#maxCost").val();
//
//        if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}
//
//        if(parseInt(value1) > parseInt(value2)){
//            value2 = value1;
//            jQuery("input#maxCost").val(value2);
//        }
//        jQuery("#slider").slider("values",1,value2);
//    });
//
//
//
//// фильтрация ввода в поля
//    jQuery('input').keypress(function(event){
//        var key, keyChar;
//        if(!event) var event = window.event;
//
//        if (event.keyCode) key = event.keyCode;
//        else if(event.which) key = event.which;
//
//        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
//        keyChar=String.fromCharCode(key);
//
//        if(!/\d/.test(keyChar))	return false;
//
//    });

    setTimeout(function(){
        var h = $('.ringItem').height() + 58;
        $('.itemsRow').css({maxHeight: h});
    },200);
    $('.example .thumbs ul li').on('click',function(){
        var index = $(this).index()+1;
        $(this).addClass('thumbsActive');
        $(this).siblings().removeClass('thumbsActive');
        $('.example .slide ul li:nth-child('+index+')').addClass('active');
        $('.example .slide ul li:nth-child('+index+')').siblings().removeClass('active');
    });

    $('.remove').click(function(){
        var itemVal = parseInt($(this).siblings('.value').val());
        if(itemVal>1){
            itemVal -= 1;
            $(this).siblings('.value').val(itemVal);
        }
    });
    $('.add').click(function(){
        var itemVal = parseInt($(this).siblings('.value').val());
        if(itemVal>=1){
            itemVal += 1;
            $(this).siblings('.value').val(itemVal);
        }
    });
    $('.ringItem').click(function(){
        var height = $('.ringItem').height() + 68;
        var width = $('.ringItem').width();
        $(this).find('.check').css({height: height});
        $(this).find('.check').css({width: width});
        $(this).siblings().find('.check').css({height: 0});
        $(this).siblings().find('.check').css({width: 0});
    });
    $("input[name=tel]").mask("+7 (999) - 999 - 9999");
    /*$('#form1').ajaxForm(options);
     $("#form1").validate({
     rules:{
     name:{required: true, maxlength: 100},
     soname:{required: true, maxlength: 100},
     tel:{required: true, minlength: 3, maxlength: 25},
     mail:{required: true, minlength: 10},
     city:{required: true, minlength: 3},
     street:{required: true, minlength: 3},
     home:{required: true, minlength: 3},
     cell:{required: true, minlength: 3},
     index:{required: true, minlength:5}
     },
     messages:{
     name:{required: "", maxlength: ""},
     tel:{required: "", minlength: "", maxlength: ""}
     }
     });
     var options = {
     delegation: true,
     clearForm: true,
     resetForm: true,
     type: 'post',
     beforeSubmit: function() {
     $.fancybox.close();
     },
     success: function() {
     location.href = ('thanks.html');
     },
     error: function() {
     $.fancybox({href: "#popupError", type: 'inline'});
     }
     }*/
    $('input, select').styler();
    $('.fancybox-modal').fancybox({padding: 0});
});