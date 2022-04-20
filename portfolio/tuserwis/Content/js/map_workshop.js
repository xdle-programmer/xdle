var map;
var workshop_map;
var workshop_markers = [];
var autocomplete;
var markersBounds;
var api_key = 'AIzaSyAwl91tizjVH8SJLr3XnJWckLCog_TTHgQ';

function initWorkshopMap() {
    var warsaw = {lat: 52.2296756, lng: 21.0122287};
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();

    workshop_map = new google.maps.Map(document.getElementById('workshop-list-map'), {
        zoom: 16,
        center: warsaw,
        mapTypeId: 'terrain'
    });
    directionsDisplay.setMap(workshop_map);

    // Область показа маркеров
    markersBounds = new google.maps.LatLngBounds();

    for (var i = 0; i < workshop_markers.length; i++) {
        var markerPosition = new google.maps.LatLng(workshop_markers[i].lat,workshop_markers[i].lng);

        // Добавляем координаты маркера в область
        markersBounds.extend(markerPosition);

        var number = i;

        // Создаём маркер
        let marker = new google.maps.Marker({
            position: markerPosition,
            map: workshop_map,
            title: workshop_markers[i].name,
            icon: '../..../../../img/map-pointer-blue.svg'
        });

        let infowindow = new google.maps.InfoWindow({
            content: '' +
                '<div class="tooltip">' +
                '<div class="tooltip__name">' + workshop_markers[i].name + '</div>' +
                '<div class="tooltip__rating">' + workshop_markers[i].rating + '</div>' +
                '</div>'
        });

        marker.addListener('click', function () {
            infowindow.open(workshop_map, marker);
        });
    }

    // Центрируем и масштабируем карту
    workshop_map.setCenter(markersBounds.getCenter(), workshop_map.fitBounds(markersBounds));


    $('.workshop-list__preloader').removeClass('active');
}

function getCoordinates(address) {
    var resultlat = '';
    var resultlng = '';
    $.ajax({
        async: false,
        dataType: "json",
        url: 'https://maps.google.com/maps/api/geocode/json?address=' + address + '&key=' + api_key,
        success: function (data) {
            for (var key in data.results) {
                resultlat = data.results[key].geometry.location.lat;
                resultlng = data.results[key].geometry.location.lng;
            }
        }
    });

    return {lat: resultlat, lng: resultlng};


}

function createWorkshopMapMarkers() {
    var $items = $('.workshop-list__list-item');
    workshop_markers = [];

    for (var i = 0; i < $items.length; i++) {
        var name = $($items[i]).data('name');
        var lat = $($items[i]).data('lat');
        var lng = $($items[i]).data('lng');
        var rating = $($items[i]).data('rating');

        var array = {
            name: name,
            lat: lat,
            lng: lng,
            rating: rating
        };

        workshop_markers.push(array);
    }

    initWorkshopMap();


}