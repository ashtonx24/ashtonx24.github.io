const mobileToggle = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('#navbar');

mobileToggle.addEventListener('click', () => {
  navbar.classList.toggle('navbar-mobile');
  mobileToggle.classList.toggle('bi-x');
});