"use strict";

function equal() {
    $(".why_we .col-md-6:last-child").height() > $(".why_we .col-md-6:first-child").height() ? $(".why_we .col-md-6:first-child").css("height", $(".why_we .col-md-6:last-child").height() + 6) : $(".why_we .col-md-6:last-child").css("height", $(".why_we .col-md-6:first-child").height() + 6)
}

function send(t) {
    $.ajax({
        url: "../send.php", type: "POST", dataType: "json", data: t.serialize(), success: function (t) {
            $(location).attr("href", "../thanks.html?utm_source=memory")
        }
    })
}

$(document).ready(function () {
    $(".timer").counterUp({delay: 20, time: 1500}), $(".fancybox").fancybox()
}),
$(window).width() > 991 && equal(), $("#contact_form").validate({
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
}),
    $("#contact_form").submit(function () {
        return $(this).valid() ? ($("#contact_submit").button("loading"), send($(this))) : $("#contact_submit").button("reset"), !1
    }),

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
    }), $("#contact_form2").submit(function () {
    return $(this).valid() ? ($("#contact_submit2").button("loading"), send($(this))) : $("#contact_submit2").button("reset"), !1
}), $("#contact_form3").validate({
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
}), $("#contact_form3").submit(function () {
    return $(this).valid() ? ($("#contact_submit3").button("loading"), send($(this))) : $("#contact_submit3").button("reset"), !1
});

function change() {
    var id = 0;
    block_id = 'block_' + id;
    s = document.getElementById('edit-vote-3');
    d = s.options[s.selectedIndex].text;
    ;
    next = 'block_' + d;
    a = document.getElementById(next).innerHTML;
//b=document.getElementById(block_id).innerHTML;
    document.getElementById(block_id).innerHTML = '<div id="' + block_id + '">' + a + '</div>';
//document.getElementById(next).innerHTML='<div id="'+next+'">'+b+'</div>';
}
