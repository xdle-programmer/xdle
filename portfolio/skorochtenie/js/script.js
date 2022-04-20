$(document).ready(function(){
    $('.slider').bxSlider({
        pager:false
    });
    try {
        ymaps.ready(init);
    } catch(e) {

    }
    function getCityes() {
        var utm = $('#utmMap').html();
        utm=utm.split(';');
        utm.splice(-1,1);
        for (var i=0;i<utm.length;i++){
            utm[i] = utm[i].split('+');
        }
        for (var i=0;i<utm.length;i++){
            utm[i].splice(0,1)
        }
        return utm;
    }
    function init() {
        var city,current;
        var pageMap = document.getElementById('pageMap');
        myMap = new ymaps.Map("map", {
            center: ['64.581470', '103.886719'],
            zoom: 3
        });
        myMap.controls.add(
            new ymaps.control.ZoomControl()
        );
        city = getCityes();
        for (var i=0;i<city.length;i++){
            $('.cityes').find('.contS').append('<a href="' + city[i][2] + '"><div class="elem"><p>' + city[i][3] + '</p><p>' + city[i][4] + '</p><div class="cords"><p>'+ city[i][0] +'</p><p>'+ city[i][1] +'</p></div></div></a>');

            current = new ymaps.Placemark([city[i][0], city[i][1]], {
                hintContent: city[i][3] + "<br/>" + city[i][4],
                balloonContent: "<div class='balCont'><p>" + city[i][3] + "</p></div><div class='balCont2'><p>" + city[i][4]+"</p></div>"
            },{
                iconImageHref: 'img/baloon.png',
                iconImageSize: [40, 56],
                iconImageOffset: [-20, -56]
            });
            myMap.geoObjects.add(current);
        }
        $('.elem').click(function () {
            console.log('as');
            var cord1 = $(this).find('.cords p:first-child').html();
            var cord2 = $(this).find('.cords p:last-child').html();
            myMap.setCenter([cord1, cord2]);
        });
    }
    $('.choose').click(function () {
        $('.cityes').slideDown('fast');
    });
    $('.closeX').click(function () {
        $('.cityes').slideUp('fast');
    });
    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
		width  : 640,
		height : 360,
		autoSize : false,
        helpers : {
            media : {}
        }
    });

    $('.fancybox').fancybox();

});