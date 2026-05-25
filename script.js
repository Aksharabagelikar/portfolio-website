const navLinks =
document.querySelectorAll('.nav-link');

const navbarCollapse =
document.querySelector('.navbar-collapse');

navLinks.forEach(link => {

  link.addEventListener('click', () => {

    navbarCollapse.classList.remove('show');

  });

});