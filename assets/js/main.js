// Select the DOM elements
var navbar = document.querySelector('header');
var dropDown = document.querySelector('#dropdown');
var topBar = document.querySelector('.header_top');
var imgLogo = document.querySelector('.navbar-brand');

window.onscroll = function() {
  if (window.scrollY > 200) {
    if (navbar) navbar.classList.add('is-active');
    if (dropDown) dropDown.classList.add('bgcolor-dropdown');
    if (imgLogo) imgLogo.classList.add('navbar-logo');
  } else {
    if (navbar) navbar.classList.remove('is-active');
    if (dropDown) dropDown.classList.remove('bgcolor-dropdown');
    if (imgLogo) imgLogo.classList.remove('navbar-logo');
  }
}