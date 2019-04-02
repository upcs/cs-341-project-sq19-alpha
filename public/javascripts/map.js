//Global
var input;
var start;
var destination;
var directionsService;
var directionsDisplay;
var heatmapData = [];

//under everything else

function callingAddress() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.5122, lng: -122.6587 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });
  input = document.getElementById('pac-input');
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  initAutocomplete(map);
  initializeAddresses(map);
}


function initializeAddresses(map) {
  $.post("/orders", null,
    function (data, status) {
      for (var i = 1; i < data.length; i++) {
        //alert("in maps loop");
        var myLatLng = new google.maps.LatLng(data[i].y_coord, data[i].x_coord);
        //heatmapData.push(myLatLng);
        
        //alert( "LatLng: "+myLatLng);
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: data[i].address
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<p>Location:' + this.title + '</p>');
          infowindow.open(map, this);
          start = input.value;
          destination = this.title;

          alert("destination: "+destination);
          alert("input.value: "+start);
          
          calcRoute();
        });
        marker.setMap(map);
      }
    }, "json");
}




function initAutocomplete(map) {

  var markers;
  //alert("search box stuff");

  // Create the search box and link it to the UI element.
  
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
      //alert(input.value);
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

function calcRoute() {
  alert("hello you're in calcRoute");
  //WE WANT THE START VARIABLE TO BE THE INPUT OF THE USER IN THE SEARCH BAR
  start = input.value;
  alert("input.value: "+input.value);
  //alert(start);
  //WE WANT THE END VARIABLE TO BE THE ADDRESS OF THE MARKER CLICKED
  var end = destination;
  //alert(end);
  //THIS WILL CHANGE BASED OFF OF THE STUFF ON TOP
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}


function main() {
  callingAddress();
}

module.exports = { addMarkers: addMarkers };
