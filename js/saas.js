const mobilemenu = document.querySelector('.header .navbar .navlist .mobilemenu');
const bars = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header.container');

mobilemenu.addEventListener('click', ()=>{
mobilemenu.classList.toggle('active');
bars.classList.toggle('active');

})