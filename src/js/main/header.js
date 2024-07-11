import { displayDataNovels } from '../novels/displayDataNovels';
import { getDataFromDB } from '../utils/getDataFromDB';
import { setThemes } from './setThemes';

const page = document.querySelector('.page');
const menuHeader = document.querySelector('menu');
const menuColor = document.querySelector('.greenmenu');
const headerTop = document.querySelector('.header__top');
const burger = document.querySelector('.burger');
const loginPanel = document.querySelector('.login__panel');
const headerThemes = document.querySelector('.header__themes');
const sortParent = document?.querySelector('.sort');
const sortPanel = document?.querySelector('.sort-menu');
const sortLinks = sortPanel?.querySelectorAll('li');

const burgerBtn = document.querySelector('.btn__burger');
const UpperBtn = document.querySelector('.header__upper');
const loginBtn = document.querySelector('.login__btn');
const themeBtn = document.querySelector('.header__theme');
const sortBtn = document.querySelector('.btn-sort');

const screenWidth = window.screen.width;

const removeClassForSortLink = (sortLink) => {
  sortLinks.forEach((link) => {
    if (sortLink !== link) {
      link.classList.remove('decreasing');
      link.classList.remove('ascending');
    }
  });
};
export const changeSortMode = async (novels = null) => {
  const sortPanelNew = document?.querySelector('.sort-menu');
  const sortElements = sortPanelNew.querySelectorAll('li');
  sortElements.forEach((sortElement) => {
    const sortLinkName = sortElement.querySelector('a').textContent.trim();
    if (sortLinkName === 'date') {
      sortElement.setAttribute('class', 'ascending');
      removeClassForSortLink(sortElement);
    }
  });
  !!novels ? '' : (novels = await getDataFromDB('novels'));
  sortPanelNew.onclick = (event) => {
    const sortListElement = event.target.closest('li');
    let sortName = sortListElement.textContent.trim();
    if (sortListElement.classList.contains('decreasing')) {
      sortListElement.setAttribute('class', 'ascending');
      removeClassForSortLink(sortListElement);
    } else if (sortListElement.classList.contains('ascending')) {
      sortListElement.setAttribute('class', 'decreasing');
      removeClassForSortLink(sortListElement);
    } else {
      sortListElement.setAttribute('class', 'ascending');
      removeClassForSortLink(sortListElement);
    }
    sortName.split(' ').length === 2
      ? (sortName =
          sortName.split(' ')[0] +
          sortName.split(' ')[1][0].toUpperCase() +
          sortName.split(' ')[1].slice(1))
      : '';
    const sortMode =
      sortName + event.target.classList[0][0].toUpperCase() + event.target.classList[0].slice(1);
    displayDataNovels(novels, sortMode);
    sortBtn.closest('div').classList.toggle('active');
    scrollResolution(sortBtn.closest('div'))
  };
};

const scrollResolution = (openedModal) => {
  if (screenWidth < 700) {
    const modalWindows = [
      {
        element: burgerBtn,
        classChange: 'change',
      },
      {
        element: loginPanel,
        classChange: 'open__login',
      },
      {
        element: sortParent,
        classChange: 'active',
      },
    ];
    modalWindows.forEach((modalWindow) => {
      if (
        modalWindow.element !== openedModal &&
        modalWindow.element.classList.contains(modalWindow.classChange)
      )
        return;
      page.classList.toggle('fixed');
    });
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
  scrollResolution(burgerBtn);
  burgerBtn.classList.toggle('change');
  menuHeader.classList.toggle('change');
  loginPanel.classList.remove('open__login');
  headerThemes.classList.remove('open__theme');
  if (!!sortBtn) sortBtn.closest('div').classList.remove('active');
};
loginBtn.onclick = () => {
  scrollResolution(loginPanel);
  loginPanel.classList.toggle('open__login');
  burgerBtn.classList.remove('change');
  menuHeader.classList.remove('change');
  headerThemes.classList.remove('open__theme');
  if (!!sortBtn) sortBtn.closest('div').classList.remove('active');
};
themeBtn.onclick = () => {
  headerThemes.classList.toggle('open__theme');
  page.classList.remove('fixed');
  loginPanel.classList.remove('open__login');
  burgerBtn.classList.remove('change');
  menuHeader.classList.remove('change');
  if (!!sortBtn) sortBtn.closest('div').classList.remove('active');
};
if (!!sortBtn) {
  sortBtn.onclick = () => {
    scrollResolution(sortBtn.closest('div'));
    sortBtn.closest('div').classList.toggle('active');
    burgerBtn.classList.remove('change');
    menuHeader.classList.remove('change');
    headerThemes.classList.remove('open__theme');
    loginPanel.classList.remove('open__login');
  };
  changeSortMode();
}

setThemes();
UpperBtn.onclick = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};
