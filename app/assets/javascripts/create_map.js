var map;
var cincy = new google.maps.LatLng(39.12970142, -84.50935856);
var marker;
var mapOptions = {
          center: cincy,
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
tweets.push({"geo": {"coordinates": [39.12970142, -84.50935856]}});

function initialize() {
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        $.each(tweets, function(k,v) {
          mark = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(v.geo.coordinates[0], v.geo.coordinates[1]),
            animation: google.maps.Animation.DROP
          });
        });

      };

