const page = document.querySelector('.page');
const headerTop = document.querySelector('.header__top');
const BtnUpper = document.querySelector('.header__upper');
console.log(page.offsetHeight)
window.addEventListener('scroll', () => {
  if (page.getBoundingClientRect().y < -20) {
    headerTop.classList.add('fixed');
  } else {
    headerTop.classList.remove('fixed');
  }
});
BtnUpper.onclick = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};
