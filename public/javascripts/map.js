//Global
var geocoder;
var address = "Portland";
var facilityAddrs = [];
var tempCount = 0;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

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

      for( var i=1; i<data.length; i++){
        var myLatLng = new google.maps.LatLng(data[i].x_coord, data[i].y_coord);

            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map
            });
            marker.setMap(map);
      }
      

      /*
      for (var i = 1; i < 10; i++) {
        
        Go through the data, convert each address into coordinates, then place a marker on the 
        map and reset the map (with the new marker)
      
        geocoder = new google.maps.Geocoder();

        //Data is correct as of right HERE
        geocoder.geocode({ 'address': data[i].address }, function (results, status) {
          var latLng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };

          if (status == 'OK') {
            var myLatLng = new google.maps.LatLng(latLng.lat, latLng.lng);

            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map
            });
            marker.setMap(map);
            
            google.maps.event.addListener(marker, "click", function(e){
              alert("Coordinates: "+myLatLng);
              //mapPop(data[i].name, data[i].address, myLatLng);
            })
          }
          else {
            window.console.error("geocode request failed with: " + status);
          }
        });
      }*/

    }, "json");
}


function main() {
  callingAddress();
}

module.exports = { addMarkers: addMarkers };