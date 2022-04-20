// Location

google.maps.event.addDomListener(window, 'load', function() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(46.52774341, 30.73018139),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infoWindow = new google.maps.InfoWindow;

    var onMarkerClick = function() {
        var marker = this;

        var latLng = marker.getPosition();
        infoWindow.setContent(marker.content);

        infoWindow.open(map, marker);
    };
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


    var marker1 = new google.maps.Marker({
        map: map,
        icon: 'img/placeholder.png',
        content: '<strong>Таирова</strong><br />' +
        'г. Одесса, Люстдорфская дорога 140А<br />' +
        'Тел.: (094) 94-12-518<br />(048) 78-38-518',
        position: new google.maps.LatLng(46.412679, 30.724835)
    });

    var marker2 = new google.maps.Marker({
        map: map,
         icon: 'img/placeholder.png',
        content: '<strong>Центр</strong><br />' +
        'г. Одесса, ул. Польская 18<br />' +
        'Тел.: (094) 94-12-518<br />(048) 78-38-518',
        position: new google.maps.LatLng(46.47962256, 30.74363261)
    });

    
    google.maps.event.addListener(marker1, 'click', onMarkerClick);
    google.maps.event.addListener(marker2, 'click', onMarkerClick);
 


});
