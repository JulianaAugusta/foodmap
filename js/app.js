$(document).ready(function() {
  $('.box-2').delay('3000').fadeIn('slow')
});

$(document).ready(function () {
  initMap();
  restaurantes.forEach((restaurant, index) => {
    $('#container-img').append('<img data-toggle="modal" data-target="#only-modal" data-whatever=' + restaurant.name + ' src=' + restaurant.image + ' id="pic-container' + index + '" class=' + restaurant.type + '>');
    $('#pic-container' + index).on('click', function () {
    $('#modal-restname').html('<h3 class="text-center">' + restaurant.name + '</h3>');
    $('#modal-body').html('<img class="align-self-center" src=' + restaurant.image + ' height="110"><h5 class="mx-4">' + restaurant.description + '<h5>');
    });
  });
});

$(document).ready(function() {
  $(".form-control").focusout(function(){
    var busca = $(this).val();
    var count = 0;
  restaurantes.map(function(r, index){
    if (busca !== r.name && busca !== r.type) {
      $('#pic-container' + index).delay(1000).hide('slow');
      }else {
        $('#pic-container' + index).delay(1000).show('slow');
          count += 1;
      }
    })
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
