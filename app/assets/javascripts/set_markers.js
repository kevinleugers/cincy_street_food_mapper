function addMarker() {
  for(i=0, i<tweets.length, i++){
    marker = new google.maps.Marker({
      map: map,
      title: tweets[i].screen_name,
      position: new google.maps.LatLng(34.12970142, -84.50935856)
    });
  };
};
