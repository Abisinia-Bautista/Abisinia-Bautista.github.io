//Swiper
const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    preventInteractionOnTransition: false,
    speed: 800,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
});