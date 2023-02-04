    const menuBars = document.querySelector('.icono-menu-mobile');
    const menuMobile = document.querySelector('.menu-mobile');
    let items = document.getElementsByClassName('navigation')

    menuBars.addEventListener('click', () => {
    menuMobile.classList.toggle('oculto');
});


// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener("mouseover", function (e) {
//         this.style.color = "#252525";
//         this.style.backgroundColor = "#c63637";
//       });
//       items[i].addEventListener("mouseleave", function (e) {
//         this.style.color = "#252525";
//         this.style.backgroundColor = "transparent";
//       });
// };