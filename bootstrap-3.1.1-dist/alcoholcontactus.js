
function initialize() {
  var myLatlng = new google.maps.LatLng(42.691626, 23.323659);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
