//color menu bar on scroll
var navbar = document.querySelector('header');
var dropDown = document.querySelector('#dropdown');
var topBar = document.querySelector('.header_top');
var imgLogo = document.querySelector('.navbar-brand');

window.onscroll = function() {
  if (window.pageYOffset > 200) {
    navbar.classList.add('is-active');
    dropDown.classList.add('bgcolor-dropdown');
    imgLogo.classList.add('navbar-logo');
  
  } else {
    navbar.classList.remove('is-active');
    dropDown.classList.remove('bgcolor-dropdown');
    imgLogo.classList.remove('navbar-logo');
  
  }
}