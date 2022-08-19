
const toggleMenuelement = document.getElementById('toggle-menu');
const mainMenuelement = document.getElementById('main-menu');

toggleMenuelement.addEventListener('click', () => {
    mainMenuelement.classList.toggle('main-menu--show');
})