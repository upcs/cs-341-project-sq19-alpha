//Global
var geocoder;
var address = "Portland";
var facilityAddrs = [];
var tempCount = 0;
var input;
var destination;
var start;
var directionsService;
var directionsDisplay;
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
    input = document.getElementById('pac-input');
    directionsService = new google.maps.DirectionsService();
     directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
     initializeAddresses(geocoder, map);
    initAutocomplete(map);
 
}


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
	    label:'T',
          title: data[i].address
        });
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<p>Location:' + this.title + '</p>');
            infowindow.open(map, this);
	    destination = this.title;
	    //alert(destination);
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
        size: new google.maps.Size(100, 100),
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


// ACTUALLY CALCULATING THE ROUTE
function calcRoute() {
  //WE WANT THE START VARIABLE TO BE THE INPUT OF THE USER IN THE SEARCH BAR
    start = input.value;
  //WE WANT THE END VARIABLE TO BE THE ADDRESS OF THE MARKER CLICKED
    var end = destination;
    //alert(end);
  //THIS WILL CHANGE BASED OFF OF THE STUFF ON TOP
  var request = {
    origin: start,
    destination: end,
    travelMode: 'WALKING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}



function main() {
  callingAddress();
}

module.exports = { addMarkers: addMarkers };
