$(document).ready(function () {

// //заглушка для кнопки формы отправки
// $('.form_submit').click(function() {
//     return false;
// });
//
//
// // Маска телефона
//
// jQuery(document).ready(function() {
//   jQuery('.phone, .phone2').inputmask("mask", {"mask": "+7 (999) 999-9999"}); //specifying fn & options
// });
//
// // Отправка письма
//
// function send(data) {
//   jQuery.ajax({
//     type: "POST",
//     url: "formdata.php",
//     data: "data="+data,
//     success: function(html) {
//       //jQuery('.succes').animate({opacity: 'show'}, 300);
// 	  setTimeout(function(){
//     document.location.href = '../thanks.html ';
// },10);
//     }, error: function() {
//       alert('При отправке возникла ошибка.\nОбновите страницу и попробуйте еще раз.');
//     }
//   });
// }
//
// jQuery('#form_submit').click(function() {
//   jQuery('input').attr('style', '');
//   if (jQuery('.name').val().length < 3) {
//     jQuery('.name').css({boxShadow: 'inset 0px 0px 10px red'});
//     return;
//   } else if (jQuery('.phone').val().indexOf('_') + 1 || jQuery('.phone').val().length == 0) {
//     jQuery('.phone').css({boxShadow: 'inset 0px 0px 10px red'});
//     return;
//   }
//   var data = 'Имя: ' + jQuery('.name').val() + '\nТелефон: ' + jQuery('.phone').val() + '\nСайт: ' + jQuery('.source').val() + '\nUTM: ' + jQuery('.utm').val();
//   send(data);
// });
//
// jQuery('#form_submit2').click(function() {
//   jQuery('input').attr('style', '');
//   if (jQuery('.name2').val().length < 3) {
//     jQuery('.name2').css({boxShadow: 'inset 0px 0px 10px red'});
//     return;
//   } else if (jQuery('.phone2').val().indexOf('_') + 1 || jQuery('.phone2').val().length == 0) {
//     jQuery('.phone2').css({boxShadow: 'inset 0px 0px 10px red'});
//     return;
//   }
//   var data = 'Имя: ' + jQuery('.name2').val() + '\nТелефон: ' + jQuery('.phone2').val() + '\nСайт: ' + jQuery('.source').val() + '\nUTM: ' + jQuery('.utm').val();
//   send(data);
// });
//
// jQuery('input').hover(function() {
//   jQuery(this).attr('style', '');
// });

//fancybox
    $(".fancybox").fancybox({
        padding: [15, 15, 15, 15],
        margin: [20, 20, 20, 20],
        width: parseInt(800),
        height: parseInt(600),
        minWidth: parseInt(100),
        minHeight: parseInt(100),
        maxWidth: parseInt(9999),
        maxHeight: parseInt(9999),
        autoSize: ("Y" == "Y") ? true : false,
        autoResize: ("Y" == "Y") ? true : false,
        fitToView: ("Y" == "Y") ? true : false,
        aspectRatio: ("N" == "Y") ? true : false,
        leftRatio: 0.5,
        topRatio: 0.5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: ("Y" == "Y") ? true : false,
        closeBtn: ("Y" == "Y") ? true : false,
        closeClick: ("N" == "Y") ? true : false,
        nextClick: ("N" == "Y") ? true : false,
        mouseWheel: ("Y" == "Y") ? true : false,
        autoPlay: ("N" == "Y") ? true : false,
        playSpeed: parseInt(3000),
        preload: parseInt(3),
        modal: ("N" == "Y") ? true : false,
        loop: ("Y" == "Y") ? true : false,
        scrollOutside: ("Y" == "Y") ? true : false,

        openEffect: "fade",
        openSpeed: parseInt(250),
        openEasing: "",
        openOpacity: ("Y" == "Y") ? true : false,
        openMethod: "zoomIn",

        closeEffect: "fade",
        closeSpeed: parseInt(250),
        closeEasing: "",
        closeOpacity: ("Y" == "Y") ? true : false,
        closeMethod: "zoomOut",

        nextEffect: "elastic",
        nextSpeed: parseInt(250),
        nextEasing: "",
        nextMethod: "changeIn",

        prevEffect: "elastic",
        prevSpeed: parseInt(250),
        prevEasing: "",
        prevMethod: "changeOut",
        helpers: {
            thumbs: ("Y" == "Y") ? {
                width: parseInt(50),
                height: parseInt(50),
            } : null,
            title: {
                type: "float",
            },
            buttons: ("N" == "Y") ? {} : null,
            media: ("N" == "Y") ? {} : null,
        }
    });

// update form_submit
    function checkWinWidth(hq) {
        if (hq.matches) {
            $(window).scroll(function () {
                $(".form_submit").val("Записаться");
            }).scroll();

        } else {
            $(window).scroll(function () {
                $(".form_submit").val("Записаться на собеседование");
            }).scroll();
        }
    }

    var hq = window.matchMedia("(max-width: 500px)");
    hq.addListener(checkWinWidth);
    checkWinWidth(hq);


//modal
    $('a[data-modal=modal]').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-pop');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('.mask').css({'width': maskWidth, 'height': maskHeight});
        $('.mask').fadeIn(0);
        var winH = $(window).height();
        var winW = $(window).width();
        $(id).css('top', winH / 2 - $(id).height() / 2);
        $(id).css('left', winW / 2 - $(id).width() / 2);
        $(id).fadeIn(200);
    });
    $('.window .close').click(function (e) {
        e.preventDefault();
        $('.mask, .window').hide();
    });
    $('.mask').click(function () {
        $('.mask').hide();
        $('.window').hide();
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

    $("#contact_form3").validate({
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

    $("#contact_form3").submit(function () {
        return $(this).valid() ? ($("#contact_submit3").button("loading"), send($(this))) : $("#contact_submit3").button("reset"), !1
    });

    $("#contact_form4").validate({
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

    $("#contact_form4").submit(function () {
        return $(this).valid() ? ($("#contact_submit4").button("loading"), send($(this))) : $("#contact_submit4").button("reset"), !1
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

});