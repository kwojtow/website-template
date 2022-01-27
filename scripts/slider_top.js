var images = ["images/slider_top/1.png", "images/slider_top/2.png", "images/slider_top/3.png"];
var titles = [
    { "h1": "Sztuczna", "h2": "Inteligencja", "p": "Suspendisse rutrum rhoncus metus nec ornare. Vestibulum ac ligula nisl. Vestibulum ulamcorper vestibulum ligula, ut bibendum est dictum at. Integer sit amet nisl urna... <span class=\"more\">&#9658;</span>" },
    { "h1": "Roboty", "h2": "Domowe", "p": "Suspendisse rutrum rhoncus metus nec ornare. Vestibulum ac ligula nisl. Vestibulum ulamcorper vestibulum ligula, ut bibendum est dictum at. Integer sit amet nisl urna... <span class=\"more\">&#9658;</span>" },
    { "h1": "Robotyka", "h2": "Automatyka", "p": "Suspendisse rutrum rhoncus metus nec ornare. Vestibulum ac ligula nisl. Vestibulum ulamcorper vestibulum ligula, ut bibendum est dictum at. Integer sit amet nisl urna... <span class=\"more\">&#9658;</span>" }
]

var arrowLeftImg = "images/slider_top/arrow-left.png";
var arrowRightImg = "images/slider_top/arrow-right.png";
var arrowLeftOnImg = "images/slider_top/arrow-left-on.png";
var arrowRightOnImg = "images/slider_top/arrow-right-on.png";

var currentImage = 1;
var currentImageId = "#img-" + currentImage;

var animationTime = 500;

function unlock(item) {
    $(item).removeClass("blocked");
}

$(document).ready(function () {
    $("#img-1").attr("src", images[0]);
    $("#img-2").attr("src", images[1]);
    $("#img-3").attr("src", images[2]);

    $("#arrow-left > img").attr("src", arrowLeftImg);
    $("#arrow-right > img").attr("src", arrowRightImg);

    $("#img-1").css("display", "inline");

    $("#arrow-right").click(function () {
        if (!($(this).hasClass("blocked"))) {
            $(this).addClass("blocked");
            $("#arrow-left").addClass("blocked");
            setTimeout(function () {
                $("#arrow-right").removeClass("blocked");
                $("#arrow-left").removeClass("blocked");
            }, animationTime);
            $(currentImageId).hide("slide", { direction: "left" }, animationTime);
            currentImage++;
            if (currentImage > 3)
                currentImage = 1;
            currentImageId = "#img-" + currentImage;
            $(currentImageId).show("slide", { direction: "right" }, animationTime);

            changeDescription();
        }
    });
    $("#arrow-left").click(function () {
        if (!($(this).hasClass("blocked"))) {
            $(this).addClass("blocked");
            $("#arrow-right").addClass("blocked");
            setTimeout(function () {
                $("#arrow-left").removeClass("blocked");
                $("#arrow-right").removeClass("blocked");
            }, animationTime);
            $(currentImageId).hide("slide", { direction: "right" }, animationTime);
            currentImage--;
            if (currentImage < 1)
                currentImage = 3;
            currentImageId = "#img-" + currentImage;
            $(currentImageId).show("slide", { direction: "left" }, animationTime);

            changeDescription();
        }
    });

    $("#arrow-right > img").mouseenter(function () {
        $(this).attr("src", arrowRightOnImg);
    });
    $("#arrow-right > img").mouseleave(function () {
        $(this).attr("src", arrowRightImg);
    });
    $("#arrow-left > img").mouseenter(function () {
        $(this).attr("src", arrowLeftOnImg);
    });
    $("#arrow-left > img").mouseleave(function () {
        $(this).attr("src", arrowLeftImg);
    });

    function changeDescription() {
        $("#slider-desc > h1").fadeOut(animationTime / 2, function () {
            $("#slider-desc > h1").text(titles[currentImage - 1].h1).fadeIn(animationTime / 2);
        });
        $("#slider-desc > h2").fadeOut(animationTime / 2, function () {
            $("#slider-desc > h2").html(titles[currentImage - 1].h2).fadeIn(animationTime / 2);
        });
        $("#slider-desc > p").fadeOut(animationTime / 2, function () {
            $("#slider-desc > p").html(titles[currentImage - 1].p).fadeIn(animationTime / 2);
        });
    }
});
