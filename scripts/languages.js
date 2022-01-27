function changeFlagImg(item){
    img = $(item).attr("src");
    img = img.replace("-gray.",".");
    $(item).attr("src", img);
}
function changeFlagImgBack(item){
    img = $(item).attr("src");
    img = img.replace(".", "-gray.");
    $(item).attr("src", img);
}