function initMap() {
  var location = { lat: 53.56072645866264, lng: 8.573987175677178 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Eman Hussein Shahrour'
  });
}
