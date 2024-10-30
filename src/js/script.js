// humberger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// navbar fixed

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;


    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }


}

// Menunggu hingga halaman selesai dimuat
window.onload = function() {
    // Mengambil elemen gambar Website dan Design
    const websiteImage = document.getElementById('websiteImage');
    const designImage = document.getElementById('designImage');
    
    // Mengatur tinggi gambar Design agar sesuai dengan tinggi gambar Website
    designImage.style.height = `${websiteImage.clientHeight}px`;
  };