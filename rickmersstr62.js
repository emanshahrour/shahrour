function initMap() {
  var location = { lat: 53.5607233, lng: 8.5765621 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Rickmersstraße 62, 27568 Bremerhaven'
  });
}
