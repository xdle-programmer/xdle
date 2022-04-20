/**
 * Created by Serg
 */
$(function () {
    $("input, textarea").placeholder();
    $(".fancybox").fancybox();
    $(".bxslider").bxSlider({
        pager: false,
        slideWidth: 190,
        maxSlides: 5,
        moveSlides: 1,
        minSlides: 1
    });

    function scrollToDiv(element) {
        element = $(element);
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - 90;
        $('html,body').animate({
            scrollTop: totalScroll
        }, 1000);
    }

    $('.goto').click(function () {
        var elWrapped = $(this).attr('href');
        scrollToDiv(elWrapped);
        return false;
    });


    $("#contact_form").validate({
        onfocusout: !1,
        onkeyup: !1,
        rules: {name: "required", phone: {number: !0, required: !0}},
        errorPlacement: function (t, e) {
            e.attr("placeholder", t[0].innerText)
        },
        messages: {name: "Напишите ваше имя", phone: "Введите ваш телефон"},
        highlight: function (t) {
            $(t).text("").addClass("error")
        },
        success: function (t) {
            t.text("").addClass("valid")
        }
    });

    $("#contact_form").submit(function () {
        return $(this).valid() ? ($("#contact_submit").button("loading"), send($(this))) : $("#contact_submit").button("reset"), !1
    });


    $("#contact_form2").validate({
        onfocusout: !1,
        onkeyup: !1,
        rules: {name: "required", phone: {number: !0, required: !0}},
        errorPlacement: function (t, e) {
            e.attr("placeholder", t[0].innerText)
        },
        messages: {name: "Напишите ваше имя", phone: "Введите ваш телефон"},
        highlight: function (t) {
            $(t).text("").addClass("error")
        },
        success: function (t) {
            t.text("").addClass("valid")
        }
    });

    $("#contact_form2").submit(function () {
        return $(this).valid() ? ($("#contact_submit2").button("loading"), send($(this))) : $("#contact_submit2").button("reset"), !1
    });




    jQuery(function($){
        $("#phone01").mask("+38(999) 999-9999");
        $("#phone02").mask("+38(999) 999-9999");
        $("#phone03").mask("+38(999) 999-9999");
        $("#phone04").mask("+38(999) 999-9999");
        $("#phone05").mask("+38(999) 999-9999");
        $("#phone06").mask("+38(999) 999-9999");


    });



    $("form").submit(function(e) {

        var ref = $(this).find("[required]");

        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Укажите номер телефона");

                $(this).focus();

                e.preventDefault();
                return false;
            }
        });  return true;
    });


    $(".policy-popup").on('click', function () {
        $(".policy-popup-text").toggle();
    });


});
