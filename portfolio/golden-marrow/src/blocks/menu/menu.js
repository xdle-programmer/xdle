$('.menu__theme-switch-button--night').on('click', function () {
    $('body').removeClass('day-theme')
    $('body').addClass('night-theme')
});
$('.menu__theme-switch-button--day').on('click', function () {
    $('body').removeClass('night-theme')
    $('body').addClass('day-theme')
});