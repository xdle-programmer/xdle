function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec);
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
            .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}

var color_fill1 = "#2cb387";
var color_fill2 = "#0e976a";
var color_empty = "#ebebeb";
var thumb_width = 22;
var percent;


function calculator(inputValue, val, style_block, input_block, max) {
    var style = document.createElement("style");
    var text = '';
    percent = max / 100;

    if (val === 'calculator-year-val') {
        if (inputValue < 2) {
            text = inputValue + ' год';
        } else if (inputValue > 1 && inputValue < 5) {
            text = inputValue + ' года';
        } else {
            text = inputValue + ' лет';
        }
    } else if (val === 'calculator-amount-val') {
        text = number_format((inputValue * 100000), 0, '', ' ');
    }

    var selector_input = "#" + input_block + " input[type = range]";
    var value = document.getElementById(val);

    document.getElementById(style_block).appendChild(style);
    var gradient_pos = inputValue / percent;
    var gradient = "linear-gradient(to right, " + color_fill1 + " 0%, " + color_fill2 + " " + gradient_pos + "%, " + color_empty + " " + gradient_pos + "%, " + color_empty + " 100%)";
    style.textContent = selector_input + "::-webkit-slider-runnable-track{background:" + gradient + ";} " + selector_input + "::-moz-range-track {background:" + gradient + ";} " + selector_input + "::-ms-track {background:" + gradient + "; } ";
    value.style.left = "calc(" + gradient_pos + "% + " + (thumb_width - (thumb_width * gradient_pos / 50)) + "px)";
    value.textContent = text;
}

calculator(1, 'calculator-amount-val', 'calculator-amount-style', 'calculator-amount', 20);
calculator(1, 'calculator-year-val', 'calculator-year-style', 'calculator-year', 20);
