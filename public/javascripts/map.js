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
  geocoder = new google.maps.Geocoder();
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.5122, lng: -122.6587 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });
  initializeAddresses(geocoder, map);
  //alert("facility address 1= "+facilityAddrs[0]);
}

//var markers = [];
function initializeAddresses(geocoder, map) {
  $.post("/orders", null,
    function (data, status) {

      for( var i=1; i<data.length; i++){
<<<<<<< HEAD
        var myLatLng = new google.maps.LatLng(data[i].y_coord, data[i].x_coord);
=======
        //alert("in maps loop");
        var myLatLng = new google.maps.LatLng(data[i].y_coord, data[i].x_coord);
        //alert( "LatLng: "+myLatLng);
>>>>>>> master

            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map
            });
            marker.setMap(map);
      }
<<<<<<< HEAD

=======
>>>>>>> master
    }, "json");
}


function main() {
  callingAddress();
}

module.exports = { addMarkers: addMarkers };
