function setMenu() {
    if ($(window).width() > 750) {
        $("nav").css("display", "block");
    }
    else {
        $("nav").css("display", "none");
    }
    $("nav li a").click(function () {
        if ($(".lvl-1 > li").css("float") == "none") {
            if ($(this).parent("li").children("ul").css("display") == "none") {
                $(this).parent("li").children("ul").clearQueue().delay(300);
                $(this).parent("li").children("ul").slideDown(300);
            }
            else {
                $(this).parent("li").children("ul").children().children("ul").slideUp(300);
                $(this).parent("li").children("ul").slideUp(300);
            }
        }
    });

    $("nav li").hover(
        function () {
            if ($(".lvl-1 > li").css("float") == "left") {
                $(this).children("ul").finish().delay(300).toggle("slide", { direction: "up" }, 300);
            }
        },
        function () {
            if ($(".lvl-1 > li").css("float") == "left") {
                $(this).children("ul").children().children("ul").finish().hide("slide", { direction: "up" }, 300);
                $(this).children("ul").finish().hide("slide", { direction: "up" }, 300);
            }
        }
    );

    $("#menu-button").click(function () {
        $("nav").clearQueue().delay(300);
        $(".lvl-1 > li").children("ul").children().children("ul").slideUp(300);
        $(".lvl-1 > li").children("ul").slideUp(300);
        $("nav").toggle(300);
    });

}

$(document).ready(setMenu);
$(window).resize(setMenu);