var map;

var mark;

/*tweets.push({"geo": {"coordinates": [39.12970142, -84.50935856]}});
*/
/*function bindInfoWindow(marker, infow) {
  google.maps.event.addListener(marker, 'click', function() {
    infow.open(map, marker)
  });
}*/

function initialize() {
        var cincy = new google.maps.LatLng(39.12970142, -84.50935856);
        var mapOptions = {
          center: cincy,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        $.each(tweets, function(k,v) {
          var text = '<a href="https://twitter.com/"'+v.user.screen_name+'>'+v.user.screen_name+'</a>' + ": " + v.text;
          /*var image = new google.maps.MarkerImage(
            v.user.profile_image_url,
            null,
            null,
            null,
            new google.maps.Size(52.52)
            );*/
          var infow = new google.maps.InfoWindow({
            content: text,
            maxWidth: 250
          });

          var mark = new google.maps.Marker({
            map: map,
            icon: v.user.profile_image_url,
            position: new google.maps.LatLng(v.geo.coordinates[0], v.geo.coordinates[1])
            //animation: google.maps.Animation.DROP
            
          });
          mark.setAnimation(google.maps.Animation.DROP);
          google.maps.event.addListener(mark, 'click', function() {
            infow.open(map, mark);
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