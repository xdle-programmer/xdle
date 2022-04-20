var map, circle, circleOptions, setCenter, marker;
var markers = [];
var autocomplete;
var select_location = true;
var api_key = 'AIzaSyAwl91tizjVH8SJLr3XnJWckLCog_TTHgQ';
var km_in_deg = 0.008998077;
var radius_search = 5;
var client_address = '';
var client_coordinates;

function initMap() {
    var warsaw = {lat: 52.2296756, lng: 21.0122287};
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    if (document.getElementById('map') !== null) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: warsaw,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        });
        directionsDisplay.setMap(map);

        if (select_location) {
            google.maps.event.addListener(map, 'click', function (event) {
                setRadiusMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
                client_coordinates = {lat: event.latLng.lat(), lng: event.latLng.lng()};
                client_address = getAddress({lat: event.latLng.lat(), lng: event.latLng.lng()});
                setAddressToInput();
            });
        }
    }
}

if (select_location) {
    setRadius();
}

function setRadius() {
    setCenter = true;
    circleOptions = {
        fillColor: "#00AAFF",
        fillOpacity: 0.5,
        strokeColor: "#00AAFF",
        strokeOpacity: 0.8,
        strokeWeight: 1,
        clickable: false
    };
    rad = function (x) {
        return x * Math.PI / 180;
    };

    distHaversine = function (p1, p2) {
        var R = 6371; // earth's mean radius in km
        var dLat = rad(p2[0] - p1['lat']);
        var dLong = rad(p2[1] - p1['lng']);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(p1['lat'])) * Math.cos(rad(p2[0])) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

        return d.toFixed(3);
    };
}

function setRadiusMarker(coordinates, set_center) {
    if (marker != undefined) {
        marker.setMap(null);
    }
    marker = new google.maps.Marker({
        position: coordinates,
        clickable: false
    });

    marker.setMap(map);
    circleOptions.center = coordinates;
    drowCircle(set_center);
}

function drowCircle(set_center) {
    var circle_side = [circleOptions.center['lat'] + km_in_deg * radius_search, circleOptions.center['lng']];
    var radius = distHaversine(circleOptions.center, circle_side);
    circleOptions.radius = radius * 1000;
    if (circle != undefined) {
        circle.setMap(null);
    }


    circle = new google.maps.Circle(circleOptions);
    circle.setMap(map);
    setCenter = true;

    if (set_center) {
        map.panTo(new google.maps.LatLng(circleOptions.center['lat'], circleOptions.center['lng']));
    }
}

function setAddressToInput() {
    let $address = $('#address');
    $address.val(client_address);
}

$(document).ready(function () {

    $('#user_city').on('change', function () {
        client_coordinates = getCoordinates($(this).val());
        setRadiusMarker(client_coordinates, true);
    });

    $('#address').on('change', function () {
        let $input = $(this);
        setTimeout(function () {
            client_coordinates = getCoordinates($input.val());
            setRadiusMarker(client_coordinates, true);
        }, 50);
    });

    $('.select-location__radius-item').on('click', function () {

        $('.select-location__radius-item').removeClass('active');
        $(this).addClass('active');
        radius_search = $(this).data('radius');

        if (radius_search === 5) {
            map.setZoom(11);
        } else if (radius_search === 10) {
            map.setZoom(10);
        } else if (radius_search === 20) {
            map.setZoom(9);
        } else if (radius_search === 50) {
            map.setZoom(8);
        } else if (radius_search === 100) {
            map.setZoom(7);
        }


        if (client_coordinates) {
            setRadiusMarker(client_coordinates, true);
        }
    });

    $('.select-location__header-button-position').on('click', function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            setRadiusMarker({lat: lat, lng: lng}, true);
            client_address = getAddress({lat: lat, lng: lng});
            client_coordinates = {lat: lat, lng: lng};
            setAddressToInput();
        });

    });
});

function addAutocomplere() {
    if (document.getElementById('address') !== null) {
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('address'), {
                componentRestrictions: {
                    country: 'PL'
                }
            });
    }
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
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

function getAddress(coordinates) {
    let result;
    $.ajax({
        async: false,
        dataType: "json",
        // url: 'https://maps.google.com/maps/api/geocode/json?address=' + coordinates + '&key=' + api_key,
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + coordinates['lat'] + ',' + coordinates['lng'] + ' + &key=' + api_key,

        success: function (data) {
            result = data.results[0]['formatted_address'];
        }
    });

    return result;
}

function calcRoute(address_start, address_end) {
    var start = getCoordinates(address_start);
    var end = getCoordinates(address_end);
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        }
    });
}
