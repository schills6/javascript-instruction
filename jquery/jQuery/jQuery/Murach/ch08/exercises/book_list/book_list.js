"use strict";
$(document).ready(function() {
    $("#categories h2").click(function(evt) {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    }); // end click
    $("#categories").find("a:first").focus();

    $("#categories a").click(function(evt) {
        $("#categories li").each(function() {
        var displayImage = new Image();
        displayImage.src = $(this).attr("href");
        $(this).show();
        }
        evt.preventDefault();
    });

}); // end ready