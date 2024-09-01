const navbar = document.querySelector('.navbar');
const navbarBackground = document.querySelector('.navbar-background');

const toggleButton = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu-items');

const copyright = document.querySelector('.date');

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navbarBackground.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  scrollY > 90
    ? navbar.classList.add('scroll')
    : navbar.classList.remove('scroll');
});

copyright.innerText = new Date().getFullYear()
