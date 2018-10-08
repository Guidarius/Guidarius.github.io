



var timer;
var view = $(window); 

$("section").height(view.height());
$("section").width(view.width());

view.on('resize',function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        $("section").height(view.height());
        $("section").width(view.width());
    }, 100);

});