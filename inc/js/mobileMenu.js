const showMobileMenu = document.getElementById('showMobileMenu');
const showMenu = document.querySelector('header');
showMobileMenu.addEventListener('click', () => {
    console.log(showMenu);
    showMenu.classList.contains('show-mobile-menu') ? showMenu.classList.remove('show-mobile-menu') : showMenu.classList.add('show-mobile-menu');
});

function getWindowSize() {
    if (window.innerWidth > 1024) {
        showMenu.classList.contains('show-mobile-menu') ? showMenu.classList.remove('show-mobile-menu') : '';
    }
}
window.onresize = getWindowSize;