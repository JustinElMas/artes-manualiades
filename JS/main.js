
const toggleMenuelement = document.getElementById('toggle-menu');
const mainMenuelement = document.getElementById('main-menu');
const navAltura = document.getElementById("altura");
const marginTop = document.getElementById("top-margin");

toggleMenuelement.addEventListener('click', () => {
    mainMenuelement.classList.toggle('main-menu--show');
    navAltura.classList.toggle('altura-nav');
    marginTop.classList.toggle('margentop');
})



// una sección de cursos permanentes, la bolita quitar detalles poner cursos permanentes, quitar dinero, poner descipción de lo que es.
// ¿cómo se inscriben desde su casa?
// (una idea es incorporar un menú hamburguesa que contenga las fotos) añadir las fotos para las cursos pero de una forma épica y distinta que incorpore un buen diseño (dos para ca uno), con responsive disign