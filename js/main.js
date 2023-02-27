const navMenu = document.querySelector('.nav__menu');
const navMenuButton = document.querySelector('.nav__burger-btn');

const showMenu = () => {
    navMenu.classList.toggle('active');
}

navMenuButton.addEventListener('click', showMenu);