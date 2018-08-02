$(document).ready(function(){
  $.each(restaurantes, function (index, restaurante){
    $("<img>").attr("src", restaurante.image).appendTo(".img-area");
  });
});

// $(document).ready(function() {
//
//   $.each(restaurantes, function (index, restaurante) {
//     $("<img>").attr("src", restaurante.image).appendTo(".img-restaurant");
// })
// });


var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: new google.maps.LatLng(-23.5576413, -46.6644888),
      mapTypeId: 'roadmap'
    });


  var features = restaurantes.map(function(r){
    return {
      position: new google.maps.LatLng(r.latitude, r.longitude),
        type: 'info'
      }
    });

        // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
        map: map
      });
    });
  }
