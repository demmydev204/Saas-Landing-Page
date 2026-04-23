const mobilemenu = document.querySelector('.header .navbar .navlist .mobilemenu');
const bars = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header.container');

mobilemenu.addEventListener('click', ()=>{
mobilemenu.classList.toggle('active');
bars.classList.toggle('active');

});

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });