var map;

var marker;

tweets.push({"geo": {"coordinates": [39.12970142, -84.50935856]}});

function initialize() {
        var cincy = new google.maps.LatLng(39.12970142, -84.50935856);
        var mapOptions = {
          center: cincy,
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        $.each(tweets, function(k,v) {

          mark = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(v.geo.coordinates[0], v.geo.coordinates[1]),
            animation: google.maps.Animation.DROP
          });
        });

      }

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDin_8yEPNrV3c4CQQOBzyW9oZ3GWXr-y4&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;