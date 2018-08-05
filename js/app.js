$(document).ready(function() {
  $('.box-2').delay('2000').fadeIn('slow')
});

$(document).ready(function() {
  $(".form-control").focusout(function(){
       var busca = $(this).val();
       restaurantes.map(function(r){
         if (busca === r.type){

           console.log(r);
         }
       })
   });
});

$(document).ready(function(){
  $.each(restaurantes, function (index, restaurante){
    $("<img>").attr("src", restaurante.image).appendTo(".img-area");
  });
});

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
