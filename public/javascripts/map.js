//Global
var geocoder;
var address = "Portland";
var facilityAddrs = [];
var tempCount = 0;


//under everything else
function callingAddress() {
  //geocoder = new google.maps.Geocoder();
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.5122, lng: -122.6587 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });
  initializeAddresses(geocoder, map);
  
  //alert("facility address 1= "+facilityAddrs[0]);
  //codeAddress(geocoder, map, facilityAddrs);
}

function initializeAddresses(geocoder, map) {
  $.post("/orders", null,
    function (data, status) {
      /*
        Go through the data, convert each address into coordinates, then place a marker on the 
        map and reset the map (with the new marker)
      */
      for (var i = 1; i < data.length; i++) {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': data[i].address }, function (results, status) {
          var latLng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
          alert("Coordinates are: ("+latLng.lat+","+latLng.lng+")");
          if (status == 'OK') {
            var myLatLng = new google.maps.LatLng(latLng.lat, latLng.lng);
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map
            });
            marker.setMap(map);
          } 
          else {
            window.console.error("geocode request failed with: " + status);
          }
        });
      }

    }, "json");

}


function codeAddress(geocoder, map, facilityAddrs) {

  for (var i = 0; i < facilityAddrs.length; i++) {
    alert("facility address 1= "+facilityAddrs[i]);
    geocoder.geocode({ 'address': facilityAddrs[i] }, function (results, status) {
      var latLng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
      alert("lat= "+latLng.lat);
      alert("lng= "+latLng.lng);
      if (status == 'OK') {
        alert("STATUS PASSED!");
        var myLatLng = new google.maps.LatLng(latLng.lat, latLng.lng);
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
        });
        marker.setMap(map);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
}




function main() {
  callingAddress();
}
