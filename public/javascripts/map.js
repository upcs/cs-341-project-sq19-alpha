
/* This example adds a search box to a map, using the Google Place Autocomplete
feature. People can enter geographical searches. The search box will return a
pick list containing a mix of places and predicted search terms.
This example requires the Places library. Include the libraries=places
parameter when you first load the API. For example:
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">*/
//Global
var input;
var destination;
var start;
var directionsService;
var directionsDisplay;

var heatmapData = [];
var map, heatmap;


//under everything else

function callingAddress() {

  input = document.getElementById('pac-input');
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  initializeAddresses(map);
  initAutocomplete(map);

}


function initializeAddresses(map) {
  $.post("/orders", null,
    function (data, status) {

      for (var i = 1; i < data.length; i++) {
        //alert("in maps loop");
        var myLatLng = new google.maps.LatLng(data[i].y_coord, data[i].x_coord);
        //alert( "LatLng: "+myLatLng);
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          label: 'T',
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



function toggleHeatMap(){
  heatmap.setMap(heatmap.getMap() ? null : map);
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


  var scale = 5;
  /* Data points defined as an array of LatLng objects */
  heatmapData = [
    { location: new google.maps.LatLng(45.520414, -122.688800), weight: 6212 * scale }, //1
    { location: new google.maps.LatLng(45.544232, -122.643617), weight: 23187 * scale }, //2
    { location: new google.maps.LatLng(45.529896, -122.684777), weight: 8107 * scale }, //3
    { location: new google.maps.LatLng(45.513962, -122.644031), weight: 22726 * scale }, //4
    { location: new google.maps.LatLng(45.539290, -122.594209), weight: 29085 * scale }, //5
    { location: new google.maps.LatLng(45.515050, -122.597392), weight: 16707 * scale }, //6
    { location: new google.maps.LatLng(45.514321, -122.496997), weight: 35565 * scale }, //7
    { location: new google.maps.LatLng(45.481159, -122.598300), weight: 45132 * scale }, //8
    { location: new google.maps.LatLng(45.529610, -122.643921), weight: 10618 * scale }, //9
    { location: new google.maps.LatLng(45.518775, -122.675276), weight: 1319 * scale }, //10
    { location: new google.maps.LatLng(45.479389, -122.641179), weight: 37411 * scale }, //11
    { location: new google.maps.LatLng(45.513930, -122.558810), weight: 13142 * scale }, //12
    { location: new google.maps.LatLng(45.440273, -122.615888), weight: 34848 * scale }, //13
    { location: new google.maps.LatLng(45.576781, -122.639907), weight: 31021 * scale }, //14

    { location: new google.maps.LatLng(45.408427, -122.612867), weight: 29051 * scale }, //15
    { location: new google.maps.LatLng(45.472611, -122.557503), weight: 38069 * scale }, //16
    { location: new google.maps.LatLng(45.500236, -122.693325), weight: 24960 * scale }, //17
    { location: new google.maps.LatLng(45.439710, -122.780767), weight: 44306 * scale }, //18
    { location: new google.maps.LatLng(45.598977, -122.748018), weight: 27689 * scale }, //19
    { location: new google.maps.LatLng(45.455096, -122.700631), weight: 36741 * scale }, //20
    { location: new google.maps.LatLng(45.542903, -122.501034), weight: 35358 * scale }, //21
    { location: new google.maps.LatLng(45.502074, -122.770530), weight: 21500 * scale }, //22
    { location: new google.maps.LatLng(45.496540, -122.728969), weight: 11613 * scale }, //23
    { location: new google.maps.LatLng(445.404971, -122.794448), weight: 25049 * scale }, //24
    { location: new google.maps.LatLng(45.538229, -122.679346), weight: 3519 * scale }, //25
    { location: new google.maps.LatLng(45.558978, -122.542556), weight: 27409 * scale }, //26
    { location: new google.maps.LatLng(45.467602, -122.503512), weight: 32910 * scale }, //27
    { location: new google.maps.LatLng(45.576291, -122.600896), weight: 14171 * scale }, //28

    { location: new google.maps.LatLng(45.550653, -122.800197), weight: 43747 * scale }, //29
    { location: new google.maps.LatLng(45.604409, -122.704613), weight: 29920 * scale }, //30
    { location: new google.maps.LatLng(45.544186, -122.726656), weight: 10219 * scale }, //31
    { location: new google.maps.LatLng(45.674300, -122.839313), weight: 4252 * scale } //32
  ];

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 60);
  heatmap.set('opacity', heatmap.get('opacity') ? null : .6);

}

//google.maps.event.addDomListener(window, 'load', initialize);


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
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}



function main() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.5122, lng: -122.6587 },
    zoom: 11,
    mapTypeId: 'roadmap'
  });

  var flightPlanCoordinates = [
    { lat: 45.605571, lng: -122.683103 },
    { lat: 45.598737, lng: -122.603366 },
    { lat: 45.571205, lng: -122.542291 },
    { lat: 45.558047, lng: -122.473612 },
    { lat: 45.548422, lng: -122.472293 },
    { lat: 45.548956, lng: -122.491536 },
    { lat: 45.518183, lng: -122.497197 },
    { lat: 45.517663, lng: -122.482773 },
    { lat: 45.459490, lng: -122.496808 },
    { lat: 45.457414, lng: -122.661450 },
    { lat: 45.432369, lng: -122.667632 },
    { lat: 45.433396, lng: -122.742370 },
    { lat: 45.494021, lng: -122.742312 },
    { lat: 45.526743, lng: -122.759448 },
    { lat: 45.533966, lng: -122.784168 },
    { lat: 45.567645, lng: -122.791032 },
    { lat: 45.585447, lng: -122.804091 },
    { lat: 45.591697, lng: -122.835719 },
    { lat: 45.608538, lng: -122.835731 },
    { lat: 45.602768, lng: -122.815096 },
    { lat: 45.619129, lng: -122.791024 },
    { lat: 45.651794, lng: -122.763509 },
    { lat: 45.605571, lng: -122.683103 }
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  flightPath.setMap(map);

  callingAddress();
}



module.exports = { heatAddresses: heatAddresses };

function resetMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.5122, lng: -122.6587 },
    zoom: 11,
    mapTypeId: 'roadmap'
  });

  //trigger main features
  callingAddress();
}


module.exports = { addMarkers: addMarkers, sum: sum };

