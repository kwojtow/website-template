$(document).ready(function () {
    $("#font-sizes > span").click(function () {
        var size = $(this).css("font-size");
        $("body").css("font-size", size);
        $("html").css("font-size", size);
        var sizeNumber = parseInt(size.replace("px", ""));
        var helpFont = sizeNumber - 4;
        if (helpFont < 13)
            helpFont = 13;
        helpFont += "px";
        $(".help").css("font-size", helpFont);

    });
});