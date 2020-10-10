// alert("Connected");

$("ul").on("click","li",function(){
    $(this).toggleClass("selected");
});

$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
    e.stopPropagation();
});
$("input").keypress(function(event){
    if(event.which===13){
        var txt = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + txt + "</li>"); 
    }
});
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle(200);
});