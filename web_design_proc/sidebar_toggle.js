$(function(){
    $("#hamburger").click(function(){
        $(".sidebar").toggleClass("sidebar-no-display");
        $(".content").toggleClass("col-md-12");
    });
});