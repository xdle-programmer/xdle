var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|Android)/i) != null;
var map = document.getElementById('map');
var areas = new Array();
var fields = new Array();
var polygon;
if (isMobile) {
    eventpress = 'touchstart';
    eventunpress = 'touchend'
    eventmove = 'touchmove'
} else {
    eventpress = 'mousedown';
    eventunpress = 'mouseup'
    eventmove = 'mousemove'
}


$(function () {

    var user_action = false;
    var bet = 100;
    var click_price;
    var reward;
    var cursor_interval = 1000;

    var $cursor = $('.cursor-pointer');
    var cursor_start_left = $('.money').eq(12).offset().left + 30;
    var cursor_start_top = $('.money').eq(12).offset().top;
    var button_left = $('.bet-button').offset().left + 30;
    var button_top = $('.bet-button').offset().top;
    var cursor_final_left;
    var cursor_final_top;

    setTimeout(function () {
        cursorShow();
    }, cursor_interval * 6);

    setTimeout(function () {
        cursorShow();
    }, cursor_interval * 20);

    setTimeout(function () {
        cursorShow();
    }, cursor_interval * 34);


    function cursorShow() {
        var cursor_cell_eq = Math.floor(Math.random() * 24);
        var $cursor_cell = $('.money:not(.bomb)').eq(cursor_cell_eq);
        if (user_action == false) {
            $cursor_cell.addClass('cursor');
            $cursor.css('left', cursor_start_left + 'px');
            $cursor.css('top', cursor_start_top + 'px');
        }

        $cursor.css({
            'opacity': '1',
            'transition': 'transform ' + (cursor_interval / 1000) + 's ease-in-out',
            'transform': 'translate(' + ((cursor_start_left - button_left) * (-1)) + 'px,' + ((cursor_start_top - button_top) * (-1)) + 'px)'
        });

        setTimeout(function () {
            $cursor.addClass('active');
        }, cursor_interval);

        setTimeout(function () {
            if (user_action == false) {
                $('.bet-form').hide(0);
                cursor_final_left = $cursor_cell.offset().left + 30;
                cursor_final_top = $cursor_cell.offset().top;
                $cursor.removeClass('active');
                $cursor.css({
                    'transform': 'translate(' + ((cursor_start_left - cursor_final_left) * (-1)) + 'px,' + ((cursor_start_top - cursor_final_top) * (-1)) + 'px)'
                });
            }
        }, cursor_interval * 3);

        setTimeout(function () {
            $cursor.addClass('active');
        }, cursor_interval * 4);

        setTimeout(function () {
            $cursor.removeClass('active');
            $cursor.css({
                'opacity': '0'
            });
            if (user_action == false) {
                $cursor_cell.addClass('active');
                click_price = (bet / 100 * 4).toFixed(1);
                reward = (($(".money.active").length * click_price) + bet).toFixed(1);
                $("#take-money span").text(reward);
                $(".field-block").addClass("active");

                setTimeout(function () {
                    if (user_action == false) {
                        $(".money").removeClass('active');
                        $(".field-block").removeClass("active");
                        $('.bet-form').show(0);
                    }
                }, cursor_interval * 4);
            }
        }, cursor_interval * 5);

    }


    // Подстройка высоты и подстановка класса бомбы
    $(window).resize(function () {
        $(".main-block").css("min-height", $("#content-size").height());
    });
    $(window).resize();
    $('.money').removeClass('bomb');
    $('.money').eq(Math.floor(Math.random() * ($('.money').length - 0.4))).addClass('bomb');


    // Проверка ставки при клике
    $(".grid-cap").on("click", function () {
        $(".bet-notification").text('Сначала сделайте ставку');
        $(".bet-form").addClass('error');
    });


    $("body").on("click", function (e) {
        if (user_action == false) {
            $(".money").removeClass('active');
            user_action = true;
            $(".field-block").removeClass("active");

            console.log(e.target);


            if ($(e.target).hasClass('bet-button') === false) {
                $('.bet-form').show(0);
            } else {
                $('.bet-form').hide(0);
            }


            $(".cursor-pointer").hide(0);
            $(".money").removeClass('cursor');
        }

    });

    // Расчет ставки
    $(".bet-button").on("click", function () {
        bet = parseInt($('.bet-input').val());

        if (bet > 99) {
            $(".bet-notification").text('Кликните на любую ячейку');
            $(".grid-cap").hide(0);
            $(".bet-form").hide(0);
            $(".logo-block-price").text((bet / 100 * 4).toFixed(1));
            $(".money-front span").text((bet / 100 * 4).toFixed(1));
            $(".bet-form").removeClass('error');

        } else {
            $(".bet-notification").text('Минимальная ставка 100 рублей');
            $(".bet-form").addClass('error');
        }

    });


    $(".money").on("click", function () {
        $(".bet-notification").text('');
        if (!$(this).hasClass("active")) {
            if ($(".money.active").length == 0) {
                $("#take-money span").html(0);
            }
            $(this).addClass("active");
            yaCounter48891506.reachGoal('cell');
            if (!$(this).hasClass("bomb")) {
                if (!$(".field-block").hasClass("active")) {
                    $(".field-block").addClass("active");
                }

                reward = (parseInt($(".money.active").length * (bet * 4)) / 100 + bet).toFixed(1);
                console.log(reward);
                $("#take-money span").text(reward);
            } else {
                reward = 0;
                $(".balance span").text(reward);
                $(".modal").hide();
                $(".modal.bomb").show();
                $("#modal").addClass("active");
                $(".field-block").removeClass('active');
                $("#take-money span").html(0);
            }
        }
    });

    $("#take-money").on("click", function () {
        $(".balance").slideDown(300);
        $(".balance span").html($(".balance span").html() * 1 + $("#take-money span").html() * 1);
        $(".money").removeClass('active');
        $(".field-block").removeClass('active');
        yaCounter48891506.reachGoal('zabrat');
    });
    $(".add-btn").on("click", function () {
        $(".modal").hide();
        $(".modal.add-sum").show();
        $("#modal").addClass("active");
        yaCounter48891506.reachGoal('popolnit1');
        return false;
    });
    $(".take-btn").on("click", function () {
        $(".modal").hide();
        $(".modal.in-demo").show();
        $("#modal").addClass("active");
        yaCounter48891506.reachGoal('vivesti1');
        return false;
    });
    $(".modal.add-sum form").on("submit", function (e) {
        e.preventDefault();

        if ($(this).find("input[name='sum']").val !== "") {
            yaCounter48891506.reachGoal('popollnitmoney');
            $(".modal").hide();
            $(".modal.payment-method").show();
            $("#modal").addClass("active");
        }
    });
    $(".modal.payment-method .modal-btn").on("click", function (e) {
        e.preventDefault();

        var $this = $(this);
        $.ajax({
            url: "mail/mail.php",
            method: "POST",
            data: {
                'sum': $(".add-sum form input[name='sum']").val(),
                'method': $this.text(),
                'form-name': 'form-add-sum'
            },
            dataType: "json",
            success: function (response) {

            }
        });
    });

    $(".modal-btn").on("click", function () {
        if ($(this).hasClass("to-why")) {
            $(".modal").hide();
            $(".modal.why").show();
        } else if ($(this).hasClass("to-add")) {
            $(".modal").hide();
            $(".modal.add-sum").show();
        } else if ($(this).closest(".modal.add-sum").length) {

        } else {
            $(".close-modal").click();
        }
    });

    $(".close-modal").on("click", function () {
        $("#modal").removeClass("active");
        $("#take-money span").html(0);
        $(".money").removeClass('active');
        $('.money').removeClass('bomb');
        $('.money').eq(Math.floor(Math.random() * ($('.money').length - 0.4))).addClass('bomb');
        $(".field-block").removeClass('active');
        $(".grid-cap").show(0);
        $(".bet-form").show(0);
        bet = 100;
        $('.bet-input').val(bet);
        click_price = 4;
        $(".logo-block-price").text(click_price.toFixed(1));
        $(".money-front span").text(click_price.toFixed(1));


    });

    var rnd_index = 0;
    setInterval(function () {
        $(".left-block-lines").hide();
        rnd_index++;
        if (rnd_index == $(".left-block-lines").length) {
            rnd_index = 0;
        }
        rnd_sum = Math.ceil(Math.random() * 10000);
        var sum1 = $(".left-block-header-title").eq(0).find('span').html();
        var sum2 = $(".left-block-header-title").eq(1).find('span').html();
        sum1 = sum1.split(' ').join('') * 1 + rnd_sum;
        sum2 = sum2.split(' ').join('') * 1 + rnd_sum;
        sum1 = addSpaces(sum1);
        sum2 = addSpaces(sum2);
        $(".left-block-header-title").eq(0).find('span').html(sum1);
        $(".left-block-header-title").eq(1).find('span').html(sum2);
        $(".left-block-lines").eq(rnd_index).show();
    }, 1000);

})

function addSpaces(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}