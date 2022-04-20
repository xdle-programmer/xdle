ymaps.ready(init);

var myMap;


function init() {
    myMap = new ymaps.Map("map", {
        center: [59.92, 30.30],
        zoom: 12
    });


    var myPlacemark;

    function changePlacemark(address) {
        var myGeocoder = ymaps.geocode(address);
        res = myGeocoder.then(
            function (result) {
                var coordinates = result.geoObjects.get(0).geometry.getCoordinates();
                newPlacemark(coordinates);
            },
            function (err) {
                console.log('error');
            }
        );

        function newPlacemark(coordinates) {
            myMap.geoObjects.remove(myPlacemark);
            myPlacemark = new ymaps.Placemark([coordinates][0], {});
            myMap.geoObjects.add(myPlacemark);
            myMap.panTo([coordinates]);
        }
    }


    $(document).ready(function () {

        $('.deal__desc-links-map').on('click', function () {
            var address = $(this).closest('.deal__desc').find('.deal__desc-address').text();
            changePlacemark(address);
        });

        $('.open-modal').on('click', function () {
            $('.modal__background').addClass('active');
            $('.modal__block').removeClass('active');
            var modal_goal = $(this).data('modal');
            $(modal_goal).addClass('active');
            $('.modal__block').css('top', (scroll_top + (viewport_height / 2)) + 'px');
        });

        $('.modal__close, .modal__background').on('click', function () {
            $('.modal__background').removeClass('active');
            $('.modal__block').removeClass('active');
            $('.modal__block').css('top', 'auto');
        });


    });


}