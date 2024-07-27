// Hero Swiper Slider
var swiper = new Swiper('.swiper-container',{
    // direction:'vertical',
    speed:2000,
    spaceBetween:0,
    loop:true,
    pagination:{
        el: '.swiper-pagination',
        clickable:true,
    },
    autoplay:{
        delay:3000,
    },
});