item1 = false;
item2 = false;

function showArticle(item) {
    if ($(item).parent().attr("id") == "article-1") {
        if (item1 == false) {
            $("#article-2").slideUp(300);
            var text = $("#article-1 > .intro").text();
            text = text.replace("...", "");
            $("#article-1 > .intro").text(text);
            $("#article-1 > .full").slideDown(300);
            $(item).html("Zwiń<span> &#9650;</span>");
            item1 = true;
        }
        else {
            $("#article-2").slideDown(300);
            var text = $("#article-1 > .intro").text();
            text += "...";
            $("#article-1 > .intro").text(text);
            $("#article-1 > .full").slideUp(300);
            $(item).html("Rozwiń<span> &#9660;</span>");
            item1 = false;
        }
    }
    else {
        if (item2 == false) {
            $("#article-1").slideUp(300);
            var text = $("#article-2 > .intro").text();
            text = text.replace("...", "");
            $("#article-2 > .intro").text(text);
            $("#article-2 > .full").slideDown(300);
            $(item).html("Zwiń<span> &#9650;</span>");
            item2 = true;
        }
        else {
            $("#article-1").slideDown(300);
            var text = $("#article-2 > .intro").text();
            text += "...";
            $("#article-2 > .intro").text(text);
            $("#article-2 > .full").slideUp(300);
            $(item).html("Rozwiń<span> &#9660;</span>");
            item2 = false;
        }
    }
}