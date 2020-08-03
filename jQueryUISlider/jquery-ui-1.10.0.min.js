$('#slider-bar').slider({
    range:'min',
    min:0,
    max:100,
    value:50,
    orientation:'horizontal',
    animate:'slow',
    slide:function(event, ui){
        $('#data-value').val(ui.value);
    }
});

$('#data-value').val('#slider-bar').slider('value');