function setPreloader(percent) {
    var $line_wrapper = $('.preloader__circle-line');
    var $line = $('.preloader__circle-line-sector');
    var $handler = $('.preloader__circle-handler');
    var $percent_title = $('.preloader__circle-info-percent');
    // percent = Math.round((parseFloat(percent) * 10)) / 10;
    percent = Math.round((parseFloat(percent)));

    if (percent > 100) {
        percent = 100;
    }

    var handler_shift = (percent * 3.6) - 90;
    var line_radius = $line.attr('r');
    var line_width = 2 * Math.PI * line_radius;
    var line_result = line_width / 100 * (100 - percent);

    $line.css('stroke-dasharray', line_result + ',' + line_width);
    $line_wrapper.css('opacity', 1);
    $handler.css('transform', 'rotate(' + handler_shift + 'deg)');
    $handler.css('opacity', 1);
    $percent_title.text(percent + '%');
}


// temp code
$('#start_preloader').on('click', function () {
    var val = 0;
    var testPreloader = setInterval(function () {
        val = val + .5;
        setPreloader(val);

        if (val >= 100) {
            clearInterval(testPreloader);
        }
    }, 20);


    $('.modal__background').on('click', function () {
        setPreloader(0);
        clearInterval(testPreloader);

    });
});

