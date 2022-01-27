function showInfo(item){
    $(item).attr("src", "images/info-active.png");
    $(item).prev(".dymek").css("visibility", "visible");
    $(item).prev(".dymek").prev("p").css("visibility", "visible");
}
function hideInfo(item){
    $(item).attr("src", "images/info.png");
    $(item).prev(".dymek").css("visibility", "hidden");
    $(item).prev(".dymek").prev("p").css("visibility", "hidden");
}