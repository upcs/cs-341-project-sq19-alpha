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
  initAutocomplete(map);
  //alert("facility address 1= "+facilityAddrs[0]);
}


//var markers = [];
function initializeAddresses(geocoder, map) {
  $.post("/orders", null,
    function (data, status) {

      for (var i = 1; i < data.length; i++) {
        //alert("in maps loop");
        var myLatLng = new google.maps.LatLng(data[i].y_coord, data[i].x_coord);
        //alert( "LatLng: "+myLatLng);
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: data[i].address
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<p>Marker Location:' + this.title + '</p>');
          infowindow.open(map, this);
      });
        marker.setMap(map);
      }
    }, "json");
}


function initAutocomplete(map) {

  var markers;
  //alert("search box stuff");

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });
  //var markers = [];
  markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      //alert(place.geometry.location);
      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);


function main() {
  callingAddress();
}

module.exports = { addMarkers: addMarkers };
