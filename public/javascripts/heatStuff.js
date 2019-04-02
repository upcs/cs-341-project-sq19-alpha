
var heatmapData = [];
function mainHeat() {
  heatAddresses();
  heatMap();
}

function heatAddresses() {
  alert("hi");

  $.post("/addressRouter", null,
    function (data, status) {
      alert("hi2");

      for (var i = 1; i < 50; i++) //i<data.length
      {
        var myLatLng = new google.maps.LatLng(data[i].y_coord, data[i].x_coord);
        alert(myLatLng);
        heatmapData.push(myLatLng);
      }
    }, "json");

}

function heatMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.5122, lng: -122.6587 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.set('radius', heatmap.get('radius') ? null : 40);
  heatmap.setMap(map);
}