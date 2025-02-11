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
