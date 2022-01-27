$(document).ready(function () {
    images = $("#images-area-bot").children();
    var number = images.length;
    for (i = 0; i < number; i++) {
        $(images[i]).css("order", i);
    }

    var animationTime = 300;
    var maxOrder = number - 1;

    $('#images-area-bot > div[style*="order: ' + (maxOrder) + ';"]').css("display", "none");
    $('#images-area-bot > div[style*="order: ' + (maxOrder - number + 1) + ';"]').css("display", "none");


    $("#arrow-right-bot").click(function () {
        $('#images-area-bot > div[style*="order: ' + (maxOrder - number + 2) + ';"]').animate({ width: 'toggle' }, animationTime);
        $('#images-area-bot > div[style*="order: ' + (maxOrder - number + 1) + ';"]').css("order", maxOrder + 1);
        $('#images-area-bot > div[style*="order: ' + (maxOrder) + ';"]').animate({ width: 'toggle' }, animationTime);
        maxOrder++;
    });

    $("#arrow-left-bot").click(function () {
        $('#images-area-bot > div[style*="order: ' + (maxOrder - 1) + ';"]').animate({ width: 'toggle' }, animationTime);
        $('#images-area-bot > div[style*="order: ' + maxOrder + ';"]').css("order", maxOrder - number);
        $('#images-area-bot > div[style*="order: ' + (maxOrder - number + 1) + ';"]').animate({ width: 'toggle' }, animationTime);
        maxOrder--;
    });

    $("#arrow-left-bot > img").mouseenter(function () {
        $(this).attr("src", "images/slider_bot/arrow-left-on.png")
    });
    $("#arrow-right-bot > img").mouseenter(function () {
        $(this).attr("src", "images/slider_bot/arrow-right-on.png")
    });
    $("#arrow-left-bot > img").mouseleave(function () {
        $(this).attr("src", "images/slider_bot/arrow-left.png")
    });
    $("#arrow-right-bot > img").mouseleave(function () {
        $(this).attr("src", "images/slider_bot/arrow-right.png")
    });
});