$(function (){
    $('.items-owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        arrows: true,
        navText : ["",""],
        loop: false,
        singleItem:true,
        items: 1,
    });
});
$(function () {
    $("#selectArea").selectmenu();
});