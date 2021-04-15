// By default //

$('document').ready(function(){
    $('.whole-bar').hide();
    $('.full-2-p').hide();
    $('.dive-in').hide();
});

// On click functions //

$('.show-all').click(function(){
    $('.whole-bar').toggle();
    $('.dive-in').toggle();
});

$('.link-1').click(function(){
    $('.full-2-p').show();
});