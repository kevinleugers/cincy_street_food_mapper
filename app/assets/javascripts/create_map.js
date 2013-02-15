var map;
var mapOptions = {
          center: new google.maps.LatLng(39.11, -84.51),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

function initialize() {
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
      }

google.maps.event.addDomListener(window, 'load', initialize);