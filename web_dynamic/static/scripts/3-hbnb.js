$(function () {
    const id_store = {}
    $('input:checkbox').change(function(){
        if($(this).is(":checked")){
            id_store[$(this).data('id')] = $(this).data('name');
        }
        else if($(this).is(":not(:checked)")){
            delete id_store[$(this).data('id')];
        }
        let checkamen = Object.values(id_store).join(', ');
        $('div.amenities h4').text(checkamen);
    });
});


$(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
        if (status === 'success') {
          if (data.status === 'OK') {
            $('#api_status').addClass('available');
          } else {
            $('#api_status').removeClass('available');
          }
        }
    });
});


$(function () {
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(result) {
            for (let place of result){
                let articleTag = '<article>' + '<div class="title">' +
                '<h2>' + place.name + '</h2>' + '<div class="price_by_night">' +
                '$' + place.price_by_night + '</div>' + '</div>' +
                '<div class="information">' + '<div class="max_guest">' +
                '<i class="fa fa-users fa-3x" aria-hidden="true"></i>' +
                '<br />' + place.max_guest + ' Guests' + '</div>' +
                '<div class="number_rooms">' +
                '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>' +
                '<br />' + place.number_rooms + ' Bedrooms' + '</div>' +
                '<div class="number_bathrooms">' +
                '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>' +
                '<br />' + place.number_bathrooms + ' Bathroom' +
                '</div>' + '</div>' + '<div class="user">' +

                '<div class="description">' + place.description + '</div>' + '</article>';
                $('section.places').append(articleTag);
           }
        }
    });
});
