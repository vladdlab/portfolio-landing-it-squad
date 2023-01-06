import './css/style.css';

const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const siteListItemsLinks = document.querySelectorAll('.site-list__item a')

let mobileMenuOpened = false;
let lastScroll = 0;
function toggleMenu() {
  if (document.documentElement.clientWidth >= 1200) return

  if (mobileMenuOpened) {
    mobileMenuOpened = false
    document.body.classList.remove('page__body--nav-opened');
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  } else {
    mobileMenuOpened = true
    mainNav.classList.add('main-nav--opened');
    mainNav.classList.remove('main-nav--closed');
    document.body.classList.add('page__body--nav-opened');


  }
}

mainNavToggle.addEventListener('click', toggleMenu)
siteListItemsLinks.forEach(link => {
  link.addEventListener('click', toggleMenu)
})
