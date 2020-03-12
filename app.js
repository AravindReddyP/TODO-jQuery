// strike through functionality
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");

});

// deleting
$("ul").on("click","span" ,function(event) {
    $(this).parent().fadeOut(200,function(){
        $(this).remove();
    });
    event.stopPropagation();

});

// adding

$("input").keypress(function(event) {
    if(event.which === 13) {
        var task = $("input").val();
        $("ul").append("<li><span class='del'><i class='fas fa-trash'></i> </span>" + ' '+ task + " </li>");
        $("input").val(" ");
    }   
});

//toggle input
$("#add").click(function() {
    $("input").fadeToggle();
});
