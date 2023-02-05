const menuBars = document.querySelector('.icono-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile');
let items = document.getElementsByClassName('navigation')

menuBars.addEventListener('click', () => {
menuMobile.classList.toggle('oculto');
});