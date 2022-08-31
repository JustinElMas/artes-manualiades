
const toggleMenuelement = document.getElementById('toggle-menu');
const mainMenuelement = document.getElementById('main-menu');

toggleMenuelement.addEventListener('click', () => {
    mainMenuelement.classList.toggle('main-menu--show');
})

// una sección de cursos permanentes, la bolita quitar detalles poner cursos permanentes, quitar dinero, poner descipción de lo que es.