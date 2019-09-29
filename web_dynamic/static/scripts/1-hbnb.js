$(function(){
    const id_store = {}
    $('input:checkbox').click(function(){
        if($(this).is(":checked")){
            id_store[$(this).data-id] = $(this).data-name;
        }
        else if($(this).is(":not(:checked)")){
            delete id_store[$(this).data-id];
        }
        let checkamen = Object.values(id_store);
        $('div.amenities h4').text(checkamen);
    });
});
