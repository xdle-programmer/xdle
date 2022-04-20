let phoneInputs = document.querySelectorAll('[name="phone"]');

for (let i = 0; i < phoneInputs.length; i++) {
    let phoneMask = IMask(
        phoneInputs[i], {
            mask: '+{7}(000)000-00-00'
        });
}


$(document).ready(function () {

    $('.call-success-modal').on('click', function () {
        setTimeout(function () {
            $.fancybox.open({
                src: '#cover-1',
                type: 'inline',
            });
        }, 300);

    });


    // $('[data-region]').on('click', function () {
    //
    // });

    $('.map__img-block').on('click', function (e) {
        if ($('.map__img-block').hasClass('open') === true) {
            $('.map__img-zoom-inner').prop('src', 'img/pixel.png');
            $('.map__img').removeClass('small');
            $('.map__img-block.open').removeClass('open');
        } else {
            // console.log($(e.target))
            // console.log($(e.target))

            if ($(e.target).hasClass('map__img-path-red') === true) {
                let src = $(e.target).data('region');
                $('.map__img-zoom-inner').prop('src', src);
                $('.map__img').addClass('small');
                $('.map__img-block').addClass('open');
            }
        }

    });

});


