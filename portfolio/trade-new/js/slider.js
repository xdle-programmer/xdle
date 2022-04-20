//-----JS for Price Range slider-----

$(function () {
    var val_current_1;
    var val_current_2;
    var $price_slider = $("#slider-range");
    var $price_min = $("#price-amount-min");
    var $price_max = $("#price-amount-max");
    var min_value = 1;
    var max_value = 1000000;

    $price_slider.slider({
        range: true,
        min: min_value,
        max: max_value,
        values: [min_value, max_value],
        classes: {
            "ui-slider": "input-range__track",
            "ui-slider-handle": "input-range__handle"
        },
        slide: function (event, ui) {

            val_current_1 = ui.values[0] / 100;
            val_current_2 = ui.values[1] / 100;
            $price_min.val(val_current_1);
            $price_max.val(val_current_2);
        }
    });

    $price_min.val(min_value / 100);
    $price_max.val(max_value / 100);


    $price_min.change(function () {
        val_current_1 = $price_min.val();
        $price_slider.slider("values", [val_current_1 * 100, val_current_2 * 100]);
    });

    $price_max.change(function () {
        val_current_2 = $price_max.val();
        $price_slider.slider("values", [val_current_1 * 100, val_current_2 * 100]);
    });


    // let handle = $("#custom-handle");
    // let days_ = $("#days-amount");
    // $("#slider-days").slider({
    //     min: 1,
    //     max: 5,
    //     values: [1],
    //     classes: {
    //         "ui-slider": "input-range__track",
    //         "ui-slider-handle": "input-range__handle"
    //     },
    //     create: function () {
    //         handle.text($(this).slider("value"));
    //     },
    //     slide: function (event, ui) {
    //         handle.text(ui.value);
    //         days_.val(ui.values[0] + " день - 5 день");
    //     }
    // });
    // days_.val($("#slider-days").slider("values", 0) +
    //     " день - 5 день");
});
