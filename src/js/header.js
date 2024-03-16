const page = document.querySelector('.page');
const menuHeader = document.querySelector('menu');
const menuColor = document.querySelector('.greenmenu');
const headerTop = document.querySelector('.header__top');
const burger = document.querySelector('.burger');
const loginPanel = document.querySelector('.login__panel');
const headerThemes = document.querySelector('.header__themes');

const burgerBtn = document.querySelector('.btn__burger');
const UpperBtn = document.querySelector('.header__upper');
const loginBtn = document.querySelector('.login__btn');
const themeBtn = document.querySelector('.header__theme');

const screenWidth = window.screen.width;

const scrollResolution = (opennedModal) => {
  if (screenWidth < 700) {
    if (
      (opennedModal === burger && loginPanel.classList.contains('open__login')) ||
      (opennedModal === loginPanel && burger.classList.contains('change'))
    ) {
      return;
    }
    page.classList.toggle('fixed');
  }
};

window.addEventListener('scroll', () => {
  if (screenWidth > 700) {
    if (page.getBoundingClientRect().y < -20) {
      headerTop.classList.add('fixed');
      menuColor.classList.add('fixed');
    } else {
      headerTop.classList.remove('fixed');
      menuColor.classList.remove('fixed');
    }
  } 
  
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
    menuHeader.classList.add('modify');
  } else {
    menuHeader.classList.remove('modify');
  }
});

burgerBtn.onclick = () => {
  scrollResolution(burger);
  burger.classList.toggle('change');
  menuHeader.classList.toggle('change');
  loginPanel.classList.remove('open__login');
  headerThemes.classList.remove('open__theme');
};
loginBtn.onclick = () => {
  scrollResolution(loginPanel);
  loginPanel.classList.toggle('open__login');
  burger.classList.remove('change');
  menuHeader.classList.remove('change');
  headerThemes.classList.remove('open__theme');
};
themeBtn.onclick = () => {
  headerThemes.classList.toggle('open__theme');
  page.classList.remove('fixed');
  loginPanel.classList.remove('open__login');
  burger.classList.remove('change');
  menuHeader.classList.remove('change');
};
UpperBtn.onclick = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};
