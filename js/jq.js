$('document').ready(function(){
    $('.title-infos').hide();
    $('.text-info').hide();
    $('.trans').hide();
});

$('.home').click(function(){
    $('.title-infos').show(1000);
    $('.text-info').show(1000);
});

$('.statistics').click(function(){
    $('.trans').show();
});
