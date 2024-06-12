/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animations/createErrorAnimation.js":
/*!***************************************************!*\
  !*** ./src/js/animations/createErrorAnimation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorMessageAnimation: () => (/* binding */ createErrorMessageAnimation)
/* harmony export */ });
/* harmony import */ var _createErrorMessageHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorMessageHTML */ "./src/js/animations/createErrorMessageHTML.js");

const createErrorMessageAnimation = message => {
  const errorMessage = (0,_createErrorMessageHTML__WEBPACK_IMPORTED_MODULE_0__.createErrorMessageHTML)(message);
  const closeBtn = errorMessage.querySelector('a');
  closeBtn.onclick = () => errorMessage.style.animation = 'closeNotifications .7s ease forwards';
  setTimeout(() => errorMessage.style.animation = 'closeNotifications .7s ease forwards', 9700);
};

/***/ }),

/***/ "./src/js/animations/createErrorMessageHTML.js":
/*!*****************************************************!*\
  !*** ./src/js/animations/createErrorMessageHTML.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorMessageHTML: () => (/* binding */ createErrorMessageHTML)
/* harmony export */ });
const createErrorMessageHTML = message => {
  const errorMessagesParent = document?.querySelector('.notifications');
  const notificationDIV = document.createElement('div');
  notificationDIV.classList.add('notification');
  const infoImg = document.createElement('i');
  infoImg.classList.add('fa-solid', 'fa-circle-info', 'fa-2xl');
  notificationDIV.appendChild(infoImg);
  const notificationTextDIV = document.createElement('div');
  notificationTextDIV.classList.add('notification-text');
  const notificationHeader = document.createElement('h3');
  const notificationMessage = document.createElement('p');
  notificationHeader.textContent = 'Information';
  notificationMessage.textContent = message;
  notificationTextDIV.appendChild(notificationHeader);
  notificationTextDIV.appendChild(notificationMessage);
  notificationDIV.appendChild(notificationTextDIV);
  const lineDIV = document.createElement('div');
  lineDIV.classList.add('line-on-time');
  const closeBtn = document.createElement('a');
  const closeImg = document.createElement('i');
  closeImg.classList.add('fa-solid', 'fa-xmark');
  closeBtn.appendChild(closeImg);
  notificationDIV.appendChild(lineDIV);
  notificationDIV.appendChild(closeBtn);
  errorMessagesParent.appendChild(notificationDIV);
  return notificationDIV;
};

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.html */ "./src/pages/index.html");
/* harmony import */ var _pages_main_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/main.html */ "./src/pages/main.html");
/* harmony import */ var _pages_tags_genre_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/tags/genre.html */ "./src/pages/tags/genre.html");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/header */ "./src/js/main/header.js");
/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_header__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _main_aside_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/aside/aside */ "./src/js/main/aside/aside.js");
/* harmony import */ var _main_aside_aside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_aside_aside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts */ "./src/js/contacts.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_contacts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _registration_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration */ "./src/js/registration/registration.js");
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");
/* harmony import */ var _registration_resultRegistration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/resultRegistration */ "./src/js/registration/resultRegistration.js");
/* harmony import */ var _registration_resultRegistration__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_registration_resultRegistration__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main */ "./src/js/main/main.js");
/* harmony import */ var _authorization_authorization__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authorization/authorization */ "./src/js/authorization/authorization.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_main_main__WEBPACK_IMPORTED_MODULE_10__]);
_main_main__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/js/authorization/authorization.js":
/*!***********************************************!*\
  !*** ./src/js/authorization/authorization.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/createErrorAnimation */ "./src/js/animations/createErrorAnimation.js");
/* harmony import */ var _utils_dataFromArrToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dataFromArrToObject */ "./src/js/utils/dataFromArrToObject.js");
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");
/* harmony import */ var _utils_getDataFromForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getDataFromForm */ "./src/js/utils/getDataFromForm.js");




let countFailedAuth = 0;
const loginForm = document.querySelector('.unauth');
loginForm?.addEventListener('submit', async event => {
  event.preventDefault();
  const data = (0,_utils_dataFromArrToObject__WEBPACK_IMPORTED_MODULE_1__.dataFromArrToObject)((0,_utils_getDataFromForm__WEBPACK_IMPORTED_MODULE_3__.getDataFromForm)(loginForm).entries());
  const {
    login: formLogin,
    password: formPassword
  } = data;
  const requiredData = await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_2__.getDataFromDB)('users', 'login', formLogin);
  const {
    login: userLogin,
    password: userPassword,
    id
  } = requiredData[0] || {};
  if (formLogin === userLogin && formPassword === userPassword) {
    window.localStorage.setItem('userId', id);
    window.location.reload();
  } else if (formLogin === '' || formPassword === '') {
    (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_0__.createErrorMessageAnimation)('Warning! Failed to login. The login and password fields cannot be empty, please enter the data.');
  } else if (formLogin.length < 3 || formPassword.length < 3) {
    (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_0__.createErrorMessageAnimation)('Warning! Failed to login. The data entry fields must contain information of at least 3 characters in length.');
  } else {
    countFailedAuth++;
    loginForm.password.value = '';
    (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_0__.createErrorMessageAnimation)('Warning! Failed to login. You may have entered an incorrect username or password.');
  }
  countFailedAuth >= 5 ? (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_0__.createErrorMessageAnimation)('Attention! The system noticed that you tried to log in to your account more than 5 times, maybe you should click the button Forgot password?') : '';
});

/***/ }),

/***/ "./src/js/authorization/generateUserDataPanelHTML.js":
/*!***********************************************************!*\
  !*** ./src/js/authorization/generateUserDataPanelHTML.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUserDataPanelHTML: () => (/* binding */ generateUserDataPanelHTML)
/* harmony export */ });
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");

const generateUserDataPanelHTML = async () => {
  const loginPanel = document.querySelector('.login__panel');
  const loginName = loginPanel.querySelector('.login-title');
  const countBookmarksSpan = loginPanel.querySelector('.count-bookmarks');
  const logoutBtn = loginPanel.querySelector('.btn-logout');
  const userId = window.localStorage.getItem('userId');
  const userData = (await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__.getDataFromDB)('users', 'id', userId))[0];
  const {
    login,
    isAdmin,
    novelColections
  } = userData;
  isAdmin ? loginPanel.classList.add('admin') : '';
  loginName.textContent = login;
  const nameColections = Object.keys(novelColections);
  let countBookmarks = 0;
  nameColections.forEach(collection => {
    countBookmarks += novelColections[collection].length;
  });
  countBookmarksSpan.textContent = countBookmarks;
  logoutBtn.onclick = () => {
    window.localStorage.removeItem('userId');
    window.location.reload();
  };
};

/***/ }),

/***/ "./src/js/authorization/isAuthorized.js":
/*!**********************************************!*\
  !*** ./src/js/authorization/isAuthorized.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAuthorized: () => (/* binding */ isAuthorized)
/* harmony export */ });
const isAuthorized = () => !!window.localStorage.getItem('userId');

/***/ }),

/***/ "./src/js/bookmarks/addNovelsInBookmarks.js":
/*!**************************************************!*\
  !*** ./src/js/bookmarks/addNovelsInBookmarks.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNovelsInBookmarks: () => (/* binding */ addNovelsInBookmarks)
/* harmony export */ });
/* harmony import */ var _animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/createErrorAnimation */ "./src/js/animations/createErrorAnimation.js");
/* harmony import */ var _utils_countNovelInCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/countNovelInCollection */ "./src/js/utils/countNovelInCollection.js");
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");



const showErrorAnimations = () => (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_0__.createErrorMessageAnimation)("You don't have access, go through authorization");
const switchPopUp = event => {
  const bookmarkParent = event.target.closest('.bookmark-container');
  const popUp = bookmarkParent.querySelector('.bookmark-popup');
  popUp.classList.toggle('active-poup');
};
const closePopUp = event => {
  const bookmarkParent = event.target.closest('.bookmark-container');
  const popUp = bookmarkParent.querySelector('.bookmark-popup');
  setTimeout(() => popUp.classList.remove('active-poup'), 500);
};
const addBookmarkToDB = async event => {
  const bookmarkName = event.target.closest('a');
  const currentNovel = bookmarkName.closest('.novel');
  const bookmarkBtn = currentNovel.querySelector('.bookmark__title');
  const nameNovel = currentNovel.querySelector('.novel__link').textContent;
  bookmarkName.classList.toggle('active');
  const userId = window.localStorage.getItem('userId');
  const nameCollection = bookmarkName.textContent.trim();
  let nameCollectionForJSON;
  nameCollection.split(' ').length === 2 ? nameCollectionForJSON = nameCollection.split(' ')[0] + nameCollection.split(' ')[1][0].toUpperCase() + nameCollection.split(' ')[1].slice(1) : nameCollectionForJSON = nameCollection;
  const {
    novelColections
  } = (await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_2__.getDataFromDB)('users', 'id', userId))[0];
  let {
    [nameCollectionForJSON]: newnameCollection,
    ...mas
  } = novelColections;
  if (newnameCollection.includes(nameNovel)) {
    newnameCollection = newnameCollection.filter(novel => novel !== nameNovel);
  } else {
    newnameCollection.push(nameNovel);
  }
  const novelCollections = {
    [nameCollectionForJSON]: newnameCollection,
    ...mas
  };
  const countFolder = (0,_utils_countNovelInCollection__WEBPACK_IMPORTED_MODULE_1__.countFolders)(novelCollections, nameNovel);
  if (countFolder === 1) {
    const nameCollection = (0,_utils_countNovelInCollection__WEBPACK_IMPORTED_MODULE_1__.countFolders)(novelCollections, nameNovel, 'searchNovelCollection');
    bookmarkBtn.textContent = nameCollection;
  } else if (countFolder === 0) {
    bookmarkBtn.textContent = 'Bookmark';
  } else {
    bookmarkBtn.textContent = `${countFolder} folders`;
  }
  const newNovelCollection = JSON.stringify({
    novelColections: {
      ...novelCollections
    }
  });
  await fetch(`http://localhost:3000/users/${userId}`, {
    method: 'PATCH',
    body: newNovelCollection
  });
};
const addNovelsInBookmarks = isAuth => {
  const bookmarkBtns = document.querySelectorAll('.btn-bookmark');
  const bookmarksPopUp = document.querySelectorAll('.bookmark-popup');
  const listsBookmarks = document.querySelectorAll('.popup-list');
  if (isAuth) {
    bookmarkBtns.forEach(button => button.addEventListener('click', switchPopUp));
    listsBookmarks.forEach(listBookmarks => listBookmarks.addEventListener('click', addBookmarkToDB));
    bookmarksPopUp.forEach(popUp => popUp.addEventListener('mouseleave', closePopUp));
  } else {
    bookmarkBtns.forEach(button => button.addEventListener('click', showErrorAnimations));
  }
};

/***/ }),

/***/ "./src/js/bookmarks/generateNovelsBookmarks.js":
/*!*****************************************************!*\
  !*** ./src/js/bookmarks/generateNovelsBookmarks.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNovelsBookmarks: () => (/* binding */ generateNovelsBookmarks)
/* harmony export */ });
/* harmony import */ var _utils_countNovelInCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/countNovelInCollection */ "./src/js/utils/countNovelInCollection.js");
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");


const generateNovelsBookmarks = async () => {
  const novels = document.querySelectorAll('.novel');
  const userId = window.localStorage.getItem('userId');
  const {
    novelColections
  } = (await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_1__.getDataFromDB)('users', 'id', userId))[0];
  novels.forEach(novel => {
    const novelName = novel.querySelector('.novel__link').textContent;
    const bookmarkBtnName = novel.querySelector('.bookmark__title');
    const listBookmarks = novel.querySelectorAll('.popup-item');
    const countFolder = (0,_utils_countNovelInCollection__WEBPACK_IMPORTED_MODULE_0__.countFolders)(novelColections, novelName);
    if (countFolder === 1) {
      const nameCollection = (0,_utils_countNovelInCollection__WEBPACK_IMPORTED_MODULE_0__.countFolders)(novelColections, novelName, 'searchNovelCollection');
      bookmarkBtnName.textContent = nameCollection;
    } else if (countFolder === 0) {
      bookmarkBtnName.textContent = 'Bookmark';
    } else {
      bookmarkBtnName.textContent = `${countFolder} folders`;
    }
    listBookmarks.forEach(collectionName => {
      const nameCollection = collectionName.textContent.trim();
      let nameCollectionForJSON;
      nameCollection.split(' ').length === 2 ? nameCollectionForJSON = nameCollection.split(' ')[0] + nameCollection.split(' ')[1][0].toUpperCase() + nameCollection.split(' ')[1].slice(1) : nameCollectionForJSON = nameCollection;
      for (const key in novelColections) {
        if (novelColections[key].includes(novelName) && key === nameCollectionForJSON) {
          collectionName.classList.add('active');
        }
      }
    });
  });
};

/***/ }),

/***/ "./src/js/const/CONST.js":
/*!*******************************!*\
  !*** ./src/js/const/CONST.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   specificSymbols: () => (/* binding */ specificSymbols)
/* harmony export */ });
const specificSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '`', '~', '|', '"', ' ', ':', '{', '}', '[', ']', '/', '*', '.', ';', '?', '<', '>', ',', '№'];

/***/ }),

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ (() => {

const fagGuestions = document.querySelectorAll('.fag-guestion');
const setClassOpen = element => element.closest('li').classList.toggle('answer-open');
fagGuestions.forEach(el => el.onclick = () => setClassOpen(el));

/***/ }),

/***/ "./src/js/main/aside/aside.js":
/*!************************************!*\
  !*** ./src/js/main/aside/aside.js ***!
  \************************************/
/***/ (() => {

const bestTopBtn = document.querySelector('.btn-best') || null;
const discussedTopBtn = document.querySelector('.btn-discussed') || null;
const bestTab = document.querySelector('.novels__best');
const discussedTab = document.querySelector('.novels__discussed');
const setCurrentTab = (btn, tab) => {
  btn.classList.add('active');
  btn !== bestTopBtn ? bestTopBtn.classList.remove('active') : discussedTopBtn.classList.remove('active');
  tab.classList.add('current');
  tab !== bestTab ? bestTab.classList.remove('current') : discussedTab.classList.remove('current');
};
bestTopBtn === null ? '' : bestTopBtn.onclick = () => setCurrentTab(bestTopBtn, bestTab);
discussedTopBtn === null ? '' : discussedTopBtn.onclick = () => setCurrentTab(discussedTopBtn, discussedTab);

/***/ }),

/***/ "./src/js/main/aside/generateAsideHTML.js":
/*!************************************************!*\
  !*** ./src/js/main/aside/generateAsideHTML.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateAsideHTML: () => (/* binding */ generateAsideHTML)
/* harmony export */ });
const generateAsideHTML = (novel, tab) => {
  const bestTabAsideParent = document.querySelector('.novels__best');
  const discussedTabAsideParent = document.querySelector('.novels__discussed');
  const {
    title,
    authors,
    posterName,
    stars,
    language,
    yearOfPublishing,
    totalChapters,
    comments
  } = novel;
  const smallNovel = document.createElement('a');
  smallNovel.classList.add('novel-small');
  smallNovel.setAttribute('href', '#');
  const novelPosterDIV = document.createElement('div');
  novelPosterDIV.classList.add('novel__img');
  const novelPoster = document.createElement('img');
  novelPoster.setAttribute('src', `../img/${posterName}`);
  novelPoster.setAttribute('alt', `novel image`);
  novelPosterDIV.appendChild(novelPoster);
  const animationDIV1 = document.createElement('div');
  const animationDIV2 = document.createElement('div');
  animationDIV1.classList.add('animation_1');
  animationDIV2.classList.add('animation_2');
  novelPosterDIV.appendChild(animationDIV1);
  novelPosterDIV.appendChild(animationDIV2);
  smallNovel.appendChild(novelPosterDIV);
  const novelInfoDIV = document.createElement('div');
  novelInfoDIV.classList.add('info');
  const nameNovelH3 = document.createElement('h3');
  nameNovelH3.classList.add('title__novel');
  nameNovelH3.textContent = title;
  const authorNovelH3 = document.createElement('h3');
  authorNovelH3.classList.add('sub__title');
  tab === 'bestTab' ? authorNovelH3.textContent = authors : authorNovelH3.textContent = `${language}; ${yearOfPublishing} year; ≈${totalChapters}+ chapters`;
  const ratingEM = document.createElement('em');
  tab === 'bestTab' ? ratingEM.textContent = `Rating: ${stars} / 5` : ratingEM.textContent = `${comments} comments`;
  novelInfoDIV.appendChild(nameNovelH3);
  novelInfoDIV.appendChild(authorNovelH3);
  novelInfoDIV.appendChild(ratingEM);
  smallNovel.appendChild(novelInfoDIV);
  tab === 'bestTab' ? bestTabAsideParent.appendChild(smallNovel) : discussedTabAsideParent.appendChild(smallNovel);
};

/***/ }),

/***/ "./src/js/main/aside/generateDataForAside.js":
/*!***************************************************!*\
  !*** ./src/js/main/aside/generateDataForAside.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDataForAside: () => (/* binding */ generateDataForAside)
/* harmony export */ });
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");
/* harmony import */ var _generateAsideHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateAsideHTML */ "./src/js/main/aside/generateAsideHTML.js");


const generateDataForAside = async () => {
  const novels = await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__.getDataFromDB)('novels');
  novels.sort((a, b) => {
    if (a.stars > b.stars && a.views > b.views) return -1;else if (a.stars < b.stars && a.views < b.views) return 1;
    return 0;
  });
  for (let i = 0; i < 10; i++) {
    (0,_generateAsideHTML__WEBPACK_IMPORTED_MODULE_1__.generateAsideHTML)(novels[i], 'bestTab');
  }
  novels.sort((a, b) => {
    if (a.comments > b.comments) return -1;else if (a.comments < b.comments) return 1;
    return 0;
  });
  for (let i = 0; i < 10; i++) {
    (0,_generateAsideHTML__WEBPACK_IMPORTED_MODULE_1__.generateAsideHTML)(novels[i], 'discussedTab');
  }
};

/***/ }),

/***/ "./src/js/main/header.js":
/*!*******************************!*\
  !*** ./src/js/main/header.js ***!
  \*******************************/
/***/ (() => {

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
const scrollResolution = opennedModal => {
  if (screenWidth < 700) {
    if (opennedModal === burger && loginPanel.classList.contains('open__login') || opennedModal === loginPanel && burger.classList.contains('change')) {
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
    behavior: 'smooth'
  });
};

/***/ }),

/***/ "./src/js/main/main.js":
/*!*****************************!*\
  !*** ./src/js/main/main.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newNovels_generateDataForNewNovels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../newNovels/generateDataForNewNovels */ "./src/js/newNovels/generateDataForNewNovels.js");
/* harmony import */ var _bookmarks_addNovelsInBookmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bookmarks/addNovelsInBookmarks */ "./src/js/bookmarks/addNovelsInBookmarks.js");
/* harmony import */ var _authorization_generateUserDataPanelHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization/generateUserDataPanelHTML */ "./src/js/authorization/generateUserDataPanelHTML.js");
/* harmony import */ var _authorization_isAuthorized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authorization/isAuthorized */ "./src/js/authorization/isAuthorized.js");
/* harmony import */ var _bookmarks_generateNovelsBookmarks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bookmarks/generateNovelsBookmarks */ "./src/js/bookmarks/generateNovelsBookmarks.js");
/* harmony import */ var _aside_generateDataForAside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aside/generateDataForAside */ "./src/js/main/aside/generateDataForAside.js");






const page = document.querySelector('.page');
await (0,_newNovels_generateDataForNewNovels__WEBPACK_IMPORTED_MODULE_0__.generateDataForNewNovels)();
await (0,_aside_generateDataForAside__WEBPACK_IMPORTED_MODULE_5__.generateDataForAside)();
if ((0,_authorization_isAuthorized__WEBPACK_IMPORTED_MODULE_3__.isAuthorized)()) {
  page.classList.add('authorized');
  await (0,_authorization_generateUserDataPanelHTML__WEBPACK_IMPORTED_MODULE_2__.generateUserDataPanelHTML)();
  await (0,_bookmarks_generateNovelsBookmarks__WEBPACK_IMPORTED_MODULE_4__.generateNovelsBookmarks)();
  (0,_bookmarks_addNovelsInBookmarks__WEBPACK_IMPORTED_MODULE_1__.addNovelsInBookmarks)(true);
} else {
  (0,_bookmarks_addNovelsInBookmarks__WEBPACK_IMPORTED_MODULE_1__.addNovelsInBookmarks)(false);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/js/newNovels/generateDataForNewNovels.js":
/*!******************************************************!*\
  !*** ./src/js/newNovels/generateDataForNewNovels.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDataForNewNovels: () => (/* binding */ generateDataForNewNovels)
/* harmony export */ });
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");
/* harmony import */ var _generateNewNovelsHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateNewNovelsHTML */ "./src/js/newNovels/generateNewNovelsHTML.js");


const generateDataForNewNovels = async () => {
  const novels = await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__.getDataFromDB)('novels');
  novels.sort((a, b) => {
    if (a.yearOfPublishing > b.yearOfPublishing && a.stars > b.stars && a.views > b.views) return -1;else if (a.yearOfPublishing < b.yearOfPublishing && a.stars < b.stars && a.views < b.views) return 1;
    return 0;
  });
  for (let i = 0; i < 3; i++) (0,_generateNewNovelsHTML__WEBPACK_IMPORTED_MODULE_1__.generateNewNovelsHTML)(novels[i]);
};
// "uploadDate": "2024-03-11T13:41:00Z",

/***/ }),

/***/ "./src/js/newNovels/generateNewNovelsHTML.js":
/*!***************************************************!*\
  !*** ./src/js/newNovels/generateNewNovelsHTML.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNewNovelsHTML: () => (/* binding */ generateNewNovelsHTML)
/* harmony export */ });
/* harmony import */ var _utils_calculateDiffTimeFromPresent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/calculateDiffTimeFromPresent */ "./src/js/utils/calculateDiffTimeFromPresent.js");

const generateNewNovelsHTML = async novel => {
  const newNovelsParent = document.querySelector('.new__novels');
  const {
    title,
    tags,
    posterName,
    description,
    uploadDate,
    stars
  } = novel;
  const novelArticle = document.createElement('article');
  novelArticle.classList.add('novel');
  const novelInfoDIV = document.createElement('div');
  novelInfoDIV.classList.add('novel__info', 'block');
  const novelImgLink = document.createElement('a');
  novelImgLink.setAttribute('href', '#');
  const novelImg = document.createElement('img');
  novelImg.setAttribute('src', `../img/${posterName}`);
  novelImg.setAttribute('alt', `Novel cover`);
  novelImg.classList.add('novel__img');
  novelImgLink.appendChild(novelImg);
  novelInfoDIV.appendChild(novelImgLink);
  const novelTextDIV = document.createElement('div');
  novelTextDIV.classList.add('novel__text');
  const novelTitleH2 = document.createElement('h2');
  novelTitleH2.classList.add('novel__title');
  const novelTitleLink = document.createElement('a');
  novelTitleLink.setAttribute('href', '#');
  novelTitleLink.classList.add('novel__link');
  novelTitleLink.textContent = title;
  novelTitleH2.appendChild(novelTitleLink);
  novelTextDIV.appendChild(novelTitleH2);
  const novelTags = document.createElement('p');
  novelTags.classList.add('novel__tags');
  let tagsText = '';
  tags.forEach((tag, index) => {
    if (index >= 9) return;else if (index === tags.length - 1) tagsText += `${tag}`;else if (index === 8) tagsText += `${tag}...`;else tagsText += `${tag}, `;
  });
  novelTags.textContent = tagsText;
  novelTextDIV.appendChild(novelTags);
  const novelDescriptionDIV = document.createElement('div');
  novelDescriptionDIV.classList.add('novel__description');
  const novelDescriptionText = document.createElement('p');
  novelDescriptionText.textContent = description;
  novelDescriptionDIV.appendChild(novelDescriptionText);
  const novelDescriptionBtn = document.createElement('a');
  novelDescriptionBtn.setAttribute('href', '#');
  novelDescriptionBtn.classList.add('description-more');
  novelDescriptionBtn.textContent = 'Read more';
  novelDescriptionDIV.appendChild(novelDescriptionBtn);
  novelTextDIV.appendChild(novelDescriptionDIV);
  const novelRateDIV = document.createElement('div');
  novelRateDIV.classList.add('novel__rate-date');
  const unitRatingDIV = document.createElement('div');
  unitRatingDIV.classList.add('unit__rating');
  const currentRatingDIV = document.createElement('div');
  currentRatingDIV.classList.add('current__rating');
  currentRatingDIV.style.width = `${stars * 20}%`;
  for (let i = 0; i < 5; i++) {
    const starImg = document.createElement('img');
    starImg.setAttribute('src', `../img/stars-rate-current.svg`);
    starImg.setAttribute('alt', `star-rate`);
    currentRatingDIV.appendChild(starImg);
  }
  unitRatingDIV.appendChild(currentRatingDIV);
  for (let i = 0; i < 5; i++) {
    const starImg = document.createElement('img');
    starImg.setAttribute('src', `../img/stars-rate.svg`);
    starImg.setAttribute('alt', `star-rate`);
    unitRatingDIV.appendChild(starImg);
  }
  novelRateDIV.appendChild(unitRatingDIV);
  const uploadDateLink = document.createElement('a');
  uploadDateLink.setAttribute('href', '#');
  uploadDateLink.classList.add('upload__date');
  uploadDateLink.textContent = '• UP: ';
  const upDateSPAN = document.createElement('span');
  upDateSPAN.classList.add('up__date');
  const {
    years,
    months,
    days,
    hours,
    minutes
  } = (0,_utils_calculateDiffTimeFromPresent__WEBPACK_IMPORTED_MODULE_0__.calculateDiffTimeInMinutes)(uploadDate);
  if (years === 0 && months === 0 && days === 0 && hours > 0) {
    upDateSPAN.textContent = `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else if (years === 0 && months === 0 && days > 0) {
    upDateSPAN.textContent = `${days} ${days > 1 ? 'days' : 'day'} ago`;
  } else if (years === 0 && months > 0) {
    upDateSPAN.textContent = `${months} ${months > 1 ? 'months' : 'month'} ago`;
  } else if (years > 0) {
    upDateSPAN.textContent = `${years} ${years > 1 ? 'years' : 'year'} ago`;
  } else {
    upDateSPAN.textContent = `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  }
  uploadDateLink.appendChild(upDateSPAN);
  novelRateDIV.appendChild(uploadDateLink);
  novelTextDIV.appendChild(novelRateDIV);
  novelInfoDIV.appendChild(novelTextDIV);
  novelArticle.appendChild(novelInfoDIV);
  const borderDIV = document.createElement('div');
  borderDIV.classList.add('border');
  novelArticle.appendChild(borderDIV);
  const novelToolsDIV = document.createElement('div');
  novelToolsDIV.classList.add('novel__tools');
  const novelReadBtn = document.createElement('a');
  novelReadBtn.setAttribute('href', '#');
  novelReadBtn.classList.add('btn', 'btn-read');
  novelReadBtn.textContent = '◃ Read ▹';
  novelToolsDIV.appendChild(novelReadBtn);
  const novelBookmarksDIV = document.createElement('div');
  novelBookmarksDIV.classList.add('bookmark-container');
  const novelBookmarkBtn = document.createElement('a');
  novelBookmarkBtn.classList.add('btn-bookmark');
  const novelBookmarkDIV = document.createElement('div');
  novelBookmarkDIV.classList.add('bookmark');
  const novelBookmarkImg = document.createElement('img');
  novelBookmarkImg.setAttribute('src', '../img/bookmark-icon.svg');
  novelBookmarkImg.setAttribute('alt', 'bookmark');
  novelBookmarkDIV.appendChild(novelBookmarkImg);
  const novelBookmarkTitle = document.createElement('p');
  novelBookmarkTitle.classList.add('bookmark__title');
  novelBookmarkTitle.textContent = 'Bookmark';
  novelBookmarkDIV.appendChild(novelBookmarkTitle);
  novelBookmarkBtn.appendChild(novelBookmarkDIV);
  novelBookmarksDIV.appendChild(novelBookmarkBtn);
  const novelBookmarkPopUp = document.createElement('div');
  novelBookmarkPopUp.classList.add('bookmark-popup');
  const novelPopUpList = document.createElement('div');
  novelPopUpList.classList.add('popup-list');
  const bookmarksNames = ['Viewed', 'Reading now', 'Will read', 'Awaiting', 'Delayed', 'Dropped', 'Finished'];
  bookmarksNames.forEach(bookmarkName => {
    const popUpItem = document.createElement('a');
    popUpItem.classList.add('popup-item');
    const popUpImgDIV = document.createElement('div');
    popUpImgDIV.classList.add('poup-img');
    const popUpImg = document.createElement('img');
    popUpImg.setAttribute('src', '/img/bookmarks.png');
    popUpImg.setAttribute('alt', 'dote picture');
    popUpImg.classList.add('poup-img-dote');
    popUpImgDIV.appendChild(popUpImg);
    popUpItem.appendChild(popUpImgDIV);
    popUpItem.append(bookmarkName);
    novelPopUpList.appendChild(popUpItem);
  });
  novelBookmarkPopUp.appendChild(novelPopUpList);
  const popUpTrigger = document.createElement('a');
  popUpTrigger.classList.add('popup-trigger');
  const popUpImgDIV = document.createElement('div');
  popUpImgDIV.classList.add('poup-img');
  const popUpImg = document.createElement('img');
  popUpImg.setAttribute('src', '/img/bookmarks.png');
  popUpImg.setAttribute('alt', 'pen picture');
  popUpImg.classList.add('poup-img-pen');
  popUpImgDIV.appendChild(popUpImg);
  popUpTrigger.appendChild(popUpImgDIV);
  popUpTrigger.append('My note');
  novelBookmarkPopUp.appendChild(popUpTrigger);
  novelBookmarksDIV.appendChild(novelBookmarkPopUp);
  novelToolsDIV.appendChild(novelBookmarksDIV);
  novelArticle.appendChild(novelToolsDIV);
  newNovelsParent.appendChild(novelArticle);
};

/***/ }),

/***/ "./src/js/registration/registration.js":
/*!*********************************************!*\
  !*** ./src/js/registration/registration.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDataFromDB */ "./src/js/utils/getDataFromDB.js");
/* harmony import */ var _animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/createErrorAnimation */ "./src/js/animations/createErrorAnimation.js");
/* harmony import */ var _utils_dataFromArrToObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dataFromArrToObject */ "./src/js/utils/dataFromArrToObject.js");
/* harmony import */ var _const_CONST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/CONST */ "./src/js/const/CONST.js");
/* harmony import */ var _utils_getDataFromForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getDataFromForm */ "./src/js/utils/getDataFromForm.js");





const registrationForm = document.querySelector('.registration-form');
const registrationLoginParent = document.querySelector('.registration-login');
const registrationCheckButton = registrationLoginParent?.querySelector('a');
const resulRegistrationLogin = registrationLoginParent?.querySelector('div');
const sendDataToServer = async data => {
  const dataFiltered = data.filter(element => element[0] !== 'passwordConfirm');
  const {
    login,
    email,
    password
  } = (0,_utils_dataFromArrToObject__WEBPACK_IMPORTED_MODULE_2__.dataFromArrToObject)(dataFiltered);
  const userData = JSON.stringify({
    login: login,
    email: email,
    password: password,
    isAdmin: false,
    novelColections: {
      Viewed: [],
      ReadingNow: [],
      WillRead: [],
      Awaiting: [],
      Delayed: [],
      Dropped: [],
      Finished: []
    }
  });
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: userData
  });
};
const showRegistrationResult = function (textResult) {
  let colorResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'red';
  registrationLoginParent.classList.add('registration-text');
  resulRegistrationLogin.className = '';
  resulRegistrationLogin.classList.add(colorResult);
  resulRegistrationLogin.textContent = textResult;
};
const checkLogin = async () => {
  const data = [...(0,_utils_getDataFromForm__WEBPACK_IMPORTED_MODULE_4__.getDataFromForm)(registrationForm).entries()];
  const {
    login
  } = (0,_utils_dataFromArrToObject__WEBPACK_IMPORTED_MODULE_2__.dataFromArrToObject)(data);
  const users = await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__.getDataFromDB)('users');
  if (!(login.length >= 3)) {
    showRegistrationResult('Invalid length of the name. Username must be from 3 to 30 characters!');
    return true;
  } else if (_const_CONST__WEBPACK_IMPORTED_MODULE_3__.specificSymbols.some(item => login.includes(item))) {
    showRegistrationResult('You are using an invalid name!');
    return true;
  } else if (users.some(item => item.login === login)) {
    showRegistrationResult('This name is already registered. Please, try another one.');
    return true;
  } else {
    showRegistrationResult('You can use this name to register', 'green');
    return false;
  }
};
!!registrationCheckButton ? registrationCheckButton.onclick = checkLogin : '';
const checkEmail = async email => {
  const users = await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__.getDataFromDB)('users');
  if (users.some(item => item.email === email)) {
    (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_1__.createErrorMessageAnimation)('This email is already registered. Please, try another one.');
    return true;
  } else {
    return false;
  }
};
const checkPassword = async (password, passwordConfirm) => {
  if (!(password.length >= 6)) {
    (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_1__.createErrorMessageAnimation)('The password must be at least 6 characters!');
    return true;
  } else if (!_const_CONST__WEBPACK_IMPORTED_MODULE_3__.specificSymbols.some(item => password.includes(item))) {
    (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_1__.createErrorMessageAnimation)('The password must contain special characters such as !@#$...');
    return true;
  } else if (password !== passwordConfirm) {
    (0,_animations_createErrorAnimation__WEBPACK_IMPORTED_MODULE_1__.createErrorMessageAnimation)('Both passwords must match');
    return true;
  } else {
    return false;
  }
};
const checkDataForRegistration = async data => {
  const {
    email,
    password,
    passwordConfirm
  } = (0,_utils_dataFromArrToObject__WEBPACK_IMPORTED_MODULE_2__.dataFromArrToObject)(data);
  return (await checkLogin()) || (await checkEmail(email)) || (await checkPassword(password, passwordConfirm));
};
registrationForm?.addEventListener('submit', async e => {
  e.preventDefault();
  const data = [...(0,_utils_getDataFromForm__WEBPACK_IMPORTED_MODULE_4__.getDataFromForm)(registrationForm).entries()];
  if (!(await checkDataForRegistration(data))) {
    sendDataToServer(data);
    const {
      login
    } = (0,_utils_dataFromArrToObject__WEBPACK_IMPORTED_MODULE_2__.dataFromArrToObject)(data);
    const {
      id
    } = (await (0,_utils_getDataFromDB__WEBPACK_IMPORTED_MODULE_0__.getDataFromDB)('users', 'login', login))[0];
    window.localStorage.setItem('userId', id);
    window.localStorage.setItem('registrationRes', true);
    setTimeout(() => window.location = 'http://localhost:3500/registration/result.html?redirect=true', 300);
  } else {
    window.localStorage.setItem('registrationRes', false);
    // setTimeout(
    //   // () => (window.location = 'http://localhost:3500/registration/result.html?redirect=true'),
    //   () => 10000,
    // );
  }
});

/***/ }),

/***/ "./src/js/registration/resultRegistration.js":
/*!***************************************************!*\
  !*** ./src/js/registration/resultRegistration.js ***!
  \***************************************************/
/***/ (() => {

const registrationResultPage = document.querySelector('.registration-result');
window.localStorage.getItem('registrationRes') === "true" ? registrationResultPage?.classList.add('reg-suc') : registrationResultPage?.classList.add('reg-fail');
window.localStorage.removeItem('registrationRes');

/***/ }),

/***/ "./src/js/utils/calculateDiffTimeFromPresent.js":
/*!******************************************************!*\
  !*** ./src/js/utils/calculateDiffTimeFromPresent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDiffTimeInMinutes: () => (/* binding */ calculateDiffTimeInMinutes)
/* harmony export */ });
const calculateDiffTimeInMinutes = moment => {
  const presentMoment = new Date();
  const pastMoment = new Date(moment);
  const diffTime = presentMoment - pastMoment;
  const seconds = Math.floor(diffTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // ~30
  const years = Math.floor(days / 365); // ~365

  return {
    years,
    months: months % 12,
    days: days % 30,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
};

/***/ }),

/***/ "./src/js/utils/countNovelInCollection.js":
/*!************************************************!*\
  !*** ./src/js/utils/countNovelInCollection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countFolders: () => (/* binding */ countFolders)
/* harmony export */ });
const countFolders = function (object, searchingNovels) {
  let mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
  let count = 0;
  let novelCollection;
  for (const key in object) {
    if (object[key].includes(searchingNovels)) {
      count++;
      novelCollection = key;
    }
  }
  if (mode === 'searchNovelCollection' && count === 1) {
    return novelCollection;
  }
  return count;
};

/***/ }),

/***/ "./src/js/utils/dataFromArrToObject.js":
/*!*********************************************!*\
  !*** ./src/js/utils/dataFromArrToObject.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataFromArrToObject: () => (/* binding */ dataFromArrToObject)
/* harmony export */ });
const dataFromArrToObject = data => {
  const obj = {};
  data.forEach(item => {
    obj[item[0]] = item[1];
  });
  return obj;
};

/***/ }),

/***/ "./src/js/utils/getDataFromDB.js":
/*!***************************************!*\
  !*** ./src/js/utils/getDataFromDB.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataFromDB: () => (/* binding */ getDataFromDB)
/* harmony export */ });
const getDataFromDB = async function (requiredData) {
  let requiredKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let requiredValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  try {
    let res;
    switch (requiredData) {
      case 'users':
        if (!!requiredKey && !!requiredValue) {
          res = await fetch(`http://localhost:3000/users?${requiredKey}=${requiredValue}`);
          break;
        } else {
          res = await fetch('http://localhost:3000/users');
          break;
        }
      case 'novels':
        if (!!requiredKey && !!requiredValue) {
          res = await fetch(`http://localhost:3000/novels?${requiredKey}=${requiredValue}`);
          break;
        } else {
          res = await fetch('http://localhost:3000/novels');
          break;
        }
      case '':
        console.log('Error! There should be no empty value');
        break;
      default:
        console.log('Error! There are no matches in the database.');
        break;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const getDataFromDBById = async (requiredData, requiredId) => {
//   try {
//     let res;
//     switch (requiredData) {
//       case 'users':
//         res = await fetch(`http://localhost:3000/users/${requiredId}`);
//         break;

//       case 'novels':
//         res = await fetch(`http://localhost:3000/novels/${requiredId}`);
//         break;
//       case '':
//         console.log('Error! There should be no empty value');
//         break;
//       default:
//         console.log('Error! There are no matches in the database.');
//         break;
//     }
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

/***/ }),

/***/ "./src/js/utils/getDataFromForm.js":
/*!*****************************************!*\
  !*** ./src/js/utils/getDataFromForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataFromForm: () => (/* binding */ getDataFromForm)
/* harmony export */ });
const getDataFromForm = form => {
  // const { elements } = form;
  // const data = new FormData();
  // [...elements]
  //   .filter((item) => !!item.value)
  //   .forEach((element) => {
  //     const { name, value } = element;
  //     data.append(name,value)
  //   });
  // return userData;
  return new FormData(form);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-black.eot */ "./src/fonts/GothamPro/gothampro-black.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-black.woff2 */ "./src/fonts/GothamPro/gothampro-black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-black.woff */ "./src/fonts/GothamPro/gothampro-black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-black.ttf */ "./src/fonts/GothamPro/gothampro-black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-black.svg */ "./src/fonts/GothamPro/gothampro-black.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-blackitalic.eot */ "./src/fonts/GothamPro/gothampro-blackitalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-blackitalic.woff2 */ "./src/fonts/GothamPro/gothampro-blackitalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-blackitalic.woff */ "./src/fonts/GothamPro/gothampro-blackitalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-blackitalic.ttf */ "./src/fonts/GothamPro/gothampro-blackitalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-blackitalic.svg */ "./src/fonts/GothamPro/gothampro-blackitalic.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bold.eot */ "./src/fonts/GothamPro/gothampro-bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bold.woff2 */ "./src/fonts/GothamPro/gothampro-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bold.woff */ "./src/fonts/GothamPro/gothampro-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bold.ttf */ "./src/fonts/GothamPro/gothampro-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bold.svg */ "./src/fonts/GothamPro/gothampro-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bolditalic.eot */ "./src/fonts/GothamPro/gothampro-bolditalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bolditalic.woff2 */ "./src/fonts/GothamPro/gothampro-bolditalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bolditalic.woff */ "./src/fonts/GothamPro/gothampro-bolditalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bolditalic.ttf */ "./src/fonts/GothamPro/gothampro-bolditalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-bolditalic.svg */ "./src/fonts/GothamPro/gothampro-bolditalic.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-italic.eot */ "./src/fonts/GothamPro/gothampro-italic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-italic.woff2 */ "./src/fonts/GothamPro/gothampro-italic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-italic.woff */ "./src/fonts/GothamPro/gothampro-italic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-italic.ttf */ "./src/fonts/GothamPro/gothampro-italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-italic.svg */ "./src/fonts/GothamPro/gothampro-italic.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-light.eot */ "./src/fonts/GothamPro/gothampro-light.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-light.woff2 */ "./src/fonts/GothamPro/gothampro-light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-light.woff */ "./src/fonts/GothamPro/gothampro-light.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-light.ttf */ "./src/fonts/GothamPro/gothampro-light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-light.svg */ "./src/fonts/GothamPro/gothampro-light.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-lightitalic.eot */ "./src/fonts/GothamPro/gothampro-lightitalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-lightitalic.woff2 */ "./src/fonts/GothamPro/gothampro-lightitalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-lightitalic.woff */ "./src/fonts/GothamPro/gothampro-lightitalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-lightitalic.ttf */ "./src/fonts/GothamPro/gothampro-lightitalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-lightitalic.svg */ "./src/fonts/GothamPro/gothampro-lightitalic.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-medium.eot */ "./src/fonts/GothamPro/gothampro-medium.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-medium.woff2 */ "./src/fonts/GothamPro/gothampro-medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-medium.woff */ "./src/fonts/GothamPro/gothampro-medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-medium.ttf */ "./src/fonts/GothamPro/gothampro-medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-medium.svg */ "./src/fonts/GothamPro/gothampro-medium.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-mediumitalic.eot */ "./src/fonts/GothamPro/gothampro-mediumitalic.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-mediumitalic.woff2 */ "./src/fonts/GothamPro/gothampro-mediumitalic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-mediumitalic.woff */ "./src/fonts/GothamPro/gothampro-mediumitalic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-mediumitalic.ttf */ "./src/fonts/GothamPro/gothampro-mediumitalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampro-mediumitalic.svg */ "./src/fonts/GothamPro/gothampro-mediumitalic.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-bold.eot */ "./src/fonts/GothamPro/gothampronarrow-bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-bold.woff2 */ "./src/fonts/GothamPro/gothampronarrow-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-bold.woff */ "./src/fonts/GothamPro/gothampronarrow-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-bold.ttf */ "./src/fonts/GothamPro/gothampronarrow-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-bold.svg */ "./src/fonts/GothamPro/gothampronarrow-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-medium.eot */ "./src/fonts/GothamPro/gothampronarrow-medium.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_51___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-medium.woff2 */ "./src/fonts/GothamPro/gothampronarrow-medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_52___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-medium.woff */ "./src/fonts/GothamPro/gothampronarrow-medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_53___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-medium.ttf */ "./src/fonts/GothamPro/gothampronarrow-medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_54___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GothamPro/gothampronarrow-medium.svg */ "./src/fonts/GothamPro/gothampronarrow-medium.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_55___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.woff2 */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_56___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.ttf */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_57___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.woff2 */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_58___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.ttf */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_59___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.woff2 */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_60___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.ttf */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_61___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.woff2 */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_62___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.ttf */ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#gothampro-black" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___, { hash: "#gothampro-blackitalic" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___, { hash: "#gothampro-bold" });
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___, { hash: "#gothampro-bolditalic" });
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___, { hash: "#gothampro-italic" });
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___, { hash: "#gothampro-light" });
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___, { hash: "#gothampro-lightitalic" });
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_44___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___, { hash: "#gothampro-medium" });
var ___CSS_LOADER_URL_REPLACEMENT_48___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_50___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);
var ___CSS_LOADER_URL_REPLACEMENT_52___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_44___, { hash: "#gothampro-mediumitalic" });
var ___CSS_LOADER_URL_REPLACEMENT_54___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_45___);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_45___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_56___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_46___);
var ___CSS_LOADER_URL_REPLACEMENT_57___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_47___);
var ___CSS_LOADER_URL_REPLACEMENT_58___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_48___);
var ___CSS_LOADER_URL_REPLACEMENT_59___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_49___, { hash: "#gothampronarrow-bold" });
var ___CSS_LOADER_URL_REPLACEMENT_60___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_50___);
var ___CSS_LOADER_URL_REPLACEMENT_61___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_50___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_62___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_51___);
var ___CSS_LOADER_URL_REPLACEMENT_63___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_52___);
var ___CSS_LOADER_URL_REPLACEMENT_64___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_53___);
var ___CSS_LOADER_URL_REPLACEMENT_65___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_54___, { hash: "#gothampronarrow-medium" });
var ___CSS_LOADER_URL_REPLACEMENT_66___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_55___);
var ___CSS_LOADER_URL_REPLACEMENT_67___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_56___);
var ___CSS_LOADER_URL_REPLACEMENT_68___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_57___);
var ___CSS_LOADER_URL_REPLACEMENT_69___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_58___);
var ___CSS_LOADER_URL_REPLACEMENT_70___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_59___);
var ___CSS_LOADER_URL_REPLACEMENT_71___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_60___);
var ___CSS_LOADER_URL_REPLACEMENT_72___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_61___);
var ___CSS_LOADER_URL_REPLACEMENT_73___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_62___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.novel {
  margin-bottom: 50px;
  position: relative;
}

.novel__info {
  margin-bottom: 35px;
  display: flex;
  align-items: center;
}
.novel__info .novel__img {
  width: 140px;
  height: 175px;
  border-radius: 5px;
  box-shadow: 0 12px 20px -6px rgba(0, 0, 0, 0.1);
  margin-right: 35px;
  -o-object-fit: cover;
     object-fit: cover;
}
.novel__info .novel__title {
  font-family: "GothamPro-Bold";
  font-size: 18px;
  letter-spacing: -0.01em;
  line-height: 1.35em;
  margin-bottom: 5px;
}
.novel__info .novel__title:hover {
  color: #95ac7c;
  transition: color 0.3s ease-in-out;
}
.novel__info .novel__tags {
  font-size: 12px;
  color: #999;
  font-weight: 800;
  margin-bottom: 10px;
}
.novel__info .novel__description {
  color: #bdbdbd;
  margin-bottom: 15px;
}
.novel__info .novel__description a {
  margin-top: 5px;
  display: none;
  text-transform: uppercase;
  color: #95ac7c;
  font-family: "GothamPro-Bold";
  font-weight: 800;
  transition: color 0.3s;
  font-size: 12px;
}
.novel__info .novel__description a:hover {
  color: #828282;
}
.novel__info .novel__rate-date {
  display: flex;
  align-items: center;
}
.novel__info .novel__rate-date .unit__rating {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: transparent;
  height: 18px;
  display: flex;
  position: relative;
  margin-right: 15px;
}
.novel__info .novel__rate-date .current__rating {
  position: absolute;
  height: 100%;
  z-index: 12;
  display: flex;
  overflow: hidden;
}
.novel__info .novel__rate-date .upload__date {
  background-color: rgba(149, 172, 124, 0.1411764706);
  border-radius: 16px;
  font-family: "GothamPro-Bold";
  font-size: 11px;
  font-weight: 800;
  text-align: center;
  line-height: 1.1;
  padding: 3px 6px 3px 3px;
  color: #95ac7c;
  text-transform: uppercase;
}
.novel__info .novel__rate-date .upload__date:hover {
  background-color: rgba(26, 26, 26, 0.231372549);
  color: #828282;
  transition: all 0.3s ease-in-out;
}

.border {
  border-top: 1px solid #3b3b3b;
  position: relative;
}

.novel__tools {
  background-color: #474747;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin: 0 35px;
  max-height: 40px;
  text-align: center;
  align-items: center;
  margin-top: -21px;
  position: relative;
  z-index: 1;
  box-shadow: inset 0 0 0 1px #3b3b3b;
}
.novel__tools .btn-read {
  width: 110px;
  max-height: 40px;
  text-align: center;
  border: 0;
  outline: none;
  z-index: 1000;
  position: relative;
}
.novel__tools .bookmark-container {
  padding: 12px 16px;
  position: relative;
}
.novel__tools .bookmark-container .btn-bookmark {
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: relative;
}
.novel__tools .bookmark-container .bookmark-popup {
  display: none;
  width: 144px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 21px;
  z-index: 9000;
  position: absolute;
  top: 38px;
  left: -2px;
  text-align: left;
  background-color: #3b3b3b;
  padding: 8px 0px 4px;
  border-radius: 8px;
  border: 1px solid #353535;
  box-shadow: 0 8px 32px -10px rgba(0, 0, 0, 0.3);
}
.novel__tools .bookmark-container .bookmark-popup:before {
  border-width: 0 6px 7px;
  left: 45%;
  border-color: transparent transparent #3b3b3b transparent;
  content: "";
  border-style: solid;
  bottom: 100%;
  position: absolute;
}
.novel__tools .bookmark-container .bookmark-popup .popup-list {
  color: #fff;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.novel__tools .bookmark-container .bookmark-popup .popup-list .active {
  color: #94ab7b;
}
.novel__tools .bookmark-container .bookmark-popup .popup-list .active .poup-img .poup-img-dote {
  top: -24px !important;
}
.novel__tools .bookmark-container .bookmark-popup .popup-list .popup-item {
  padding: 2px 12px;
  cursor: pointer;
  height: 24px;
  display: flex;
  white-space: nowrap;
  position: relative;
  box-sizing: border-box;
  align-items: center;
}
.novel__tools .bookmark-container .bookmark-popup .popup-list .popup-item:hover {
  background-color: #383838;
}
.novel__tools .bookmark-container .bookmark-popup .popup-list .popup-item .poup-img {
  width: 16px;
  height: 16px;
  overflow: hidden;
  margin-right: 4px;
}
.novel__tools .bookmark-container .bookmark-popup .popup-list .popup-item .poup-img .poup-img-dote {
  scale: 0.5;
  top: -40px;
  left: -8px;
  position: relative;
}
.novel__tools .bookmark-container .bookmark-popup .popup-trigger {
  font-family: "GothamPro-Bold";
  cursor: pointer;
  font-weight: 700;
  color: #94ab7b;
  display: flex;
  height: 32px;
  padding: 2px 12px;
  align-items: center;
  box-sizing: border-box;
}
.novel__tools .bookmark-container .bookmark-popup .popup-trigger:hover {
  background-color: #383838;
}
.novel__tools .bookmark-container .bookmark-popup .popup-trigger .poup-img {
  width: 16px;
  height: 16px;
  overflow: hidden;
  margin-right: 4px;
}
.novel__tools .bookmark-container .bookmark-popup .popup-trigger .poup-img .poup-img-pen {
  cursor: pointer;
  scale: 0.5;
  top: -56px;
  left: -8px;
  position: relative;
}
.novel__tools .btn-bookmark:hover .bookmark__title {
  color: #828282;
  transition: all 0.3s ease-in-out;
}
.novel__tools .bookmark {
  display: flex;
  align-items: center;
}
.novel__tools .bookmark img {
  height: 16px;
  margin-right: 4px;
}
.novel__tools .bookmark .bookmark__title {
  font-family: "GothamPro-Bold";
  font-weight: 700;
  font-size: 12px;
  line-height: 1.7;
  text-transform: uppercase;
  color: #95ac7c;
}

.title-stripes {
  text-align: center;
}
.title-stripes .midtitle-stripes {
  font-family: "GothamPro-Bold";
  font-weight: 600;
  font-size: 14px;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.title-stripes span {
  background-color: #474747;
  padding: 0px 14px;
}
.title-stripes span::after,
.title-stripes span::before {
  border-radius: 8px;
  width: 110%;
  height: 2px;
  display: block;
  top: 50%;
  content: "";
  position: absolute;
  background: linear-gradient(45deg, #474747 60%, #797d7f 100%);
  z-index: -11;
}
.title-stripes span::before {
  left: -68%;
}
.title-stripes span::after {
  transform: scaleX(-1);
  right: -68%;
}

.btn-updates {
  display: inline-block;
}

.new__chapter,
.novel-small {
  display: flex;
  transition: all 0.3s;
}
.new__chapter .novel__img,
.novel-small .novel__img {
  position: relative;
  width: 64px;
  height: 64px;
  margin-right: 1rem !important;
}
.new__chapter img,
.novel-small img {
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
  width: 64px;
  height: 64px;
  background-color: #797d7f;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.new__chapter .animation_1,
.new__chapter .animation_2,
.novel-small .animation_1,
.novel-small .animation_2 {
  z-index: 500;
  content: "";
  opacity: 0;
  visibility: hidden;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  vertical-align: middle;
  transform: translate(-50%, -50%) scale(0.2, 0.2);
}
.new__chapter .animation_1,
.novel-small .animation_1 {
  width: 50px;
  height: 50px;
  background-color: rgba(71, 71, 71, 0.6392156863);
  transition: all ease-in-out 0.3s;
}
.new__chapter .animation_2,
.novel-small .animation_2 {
  width: 20px;
  height: 20px;
  background-color: rgba(163, 163, 163, 0.6392156863);
  position: absolute;
  transition: all ease-in-out 0.5s;
}
.new__chapter .info,
.novel-small .info {
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
}
.new__chapter .title__novel,
.novel-small .title__novel {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  font-family: "GothamPro-Bold";
  font-weight: 800;
  letter-spacing: 0.4px;
  line-height: 1.35em;
  margin-bottom: 3px;
}
.new__chapter .sub__title,
.novel-small .sub__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}
.new__chapter em,
.novel-small em {
  font-size: 12px;
  color: #999;
}

.new__chapter:hover .info,
.novel-small:hover .info {
  opacity: 1;
}
.new__chapter:hover .animation_1,
.new__chapter:hover .animation_2,
.novel-small:hover .animation_1,
.novel-small:hover .animation_2 {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}

.block-updates {
  text-align: center;
  height: 40px;
}

@media (max-width: 1250px) {
  .novel {
    margin-bottom: 30px;
  }
  .novel__img {
    margin-right: 25px !important;
  }
  .new__chapters .title__novel,
  .novel-small .title__novel {
    font-size: 12px;
  }
  .new__chapters .novel__img,
  .novel-small .novel__img {
    width: 44px;
    height: 44px;
  }
  .new__chapters img,
  .novel-small img {
    width: 44px;
    height: 44px;
  }
  .new__chapters .animation_1,
  .novel-small .animation_1 {
    width: 34px;
    height: 34px;
  }
  .new__chapters .animation_2,
  .novel-small .animation_2 {
    width: 14px;
    height: 14px;
  }
}
@media (max-width: 700px) {
  .novel {
    padding-bottom: 20px;
    margin-bottom: 0;
    border-bottom: 1px solid #3b3b3b;
    background: linear-gradient(180deg, #474747 calc(100% - 40px), #444444 100%);
  }
  .novel .border {
    display: none;
  }
  .novel .novel__info .novel__text {
    display: flex;
    flex-direction: column;
  }
  .novel .novel__info .novel__text h2 {
    order: 1;
  }
  .novel .novel__info .novel__text .novel__tags {
    order: 4;
    margin-bottom: 15px;
  }
  .novel .novel__info .novel__text .novel__description {
    order: 3;
    margin: 0.75rem 0 0.9rem 105px;
    position: relative;
  }
  .novel .novel__info .novel__text .novel__description p {
    max-height: 128px;
    overflow: hidden;
    max-width: -moz-fit-content;
    max-width: fit-content;
    position: relative;
  }
  .novel .novel__info .novel__text .novel__description p:after {
    position: absolute;
    content: "";
    width: 100%;
    background: linear-gradient(0deg, rgb(71, 71, 71) 0%, rgba(0, 0, 0, 0) 100%);
    left: 0;
    bottom: 0;
    height: 32px;
  }
  .novel .novel__info .novel__text .novel__description a {
    display: block;
    position: relative;
  }
  .novel .novel__info .novel__text .novel__description a:after {
    position: absolute;
    margin-left: 4px;
    display: inline-block;
    content: "";
    top: 30%;
    border: solid;
    border-width: 5px 4px 0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  .novel .novel__info .novel__text .novel__rate-date {
    order: 2;
  }
  .novel .novel__img {
    width: 90px !important;
    height: 120px !important;
    position: absolute;
    top: 25%;
  }
  .novel .novel__tools {
    margin: 0 20px;
  }
  .novel__img {
    margin-right: 15px !important;
  }
  .new__chapters .new__chapter,
  .novel-small .new__chapter {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    margin: 20px 0 !important;
  }
}
.authorized .active-poup {
  display: block !important;
}

aside {
  width: 32.26%;
  background-color: #434343;
  border-radius: 0 8px 0 0;
}
aside .line {
  border-bottom: 1px solid #3b3b3b;
}

.new-novel {
  margin-top: 25px;
  display: block;
  opacity: 0.7;
  transition: all 0.3s;
}
.new-novel:hover {
  opacity: 1;
}
.new-novel h3 {
  font-family: "GothamPro-Bold";
  letter-spacing: 0.4px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.new-novel p {
  color: #999;
  font-size: 12px;
}

.aside__btns {
  display: flex;
  padding: 2px;
  border-radius: 18px;
  box-shadow: 0 1px 0 0 transparent, inset 0 1px 4px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(to bottom, #999 0%, #707070 100%);
  margin-bottom: 25px;
  height: 32px;
}
.aside__btns a {
  width: 50%;
  text-align: center;
  text-transform: uppercase;
  color: #383838;
  cursor: pointer;
  font-size: 11px;
  line-height: 1.8;
  padding: 6px;
  border-radius: 16px;
  font-family: "GothamPro-Bold";
  font-weight: 800;
  transition: all 0.2s;
}
.aside__btns a:hover {
  color: #666;
}
.aside__btns .active {
  cursor: default;
  pointer-events: none;
  color: #383838;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(#707070 0%, #494949 100%);
}

.tabs {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.current {
  opacity: 1;
  visibility: visible;
  transition: opacity, visibility 0.2s ease-in-out;
}

.novel-small {
  margin-bottom: 25px;
}
.novel-small .title__novel,
.novel-small .sub__title {
  width: 245px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 12px;
  display: block;
}
.novel-small em {
  font-style: normal;
}

@media (max-width: 1124px) {
  aside .title__novel,
  aside .sub__title {
    width: 190px !important;
  }
}
@media (max-width: 1001px) {
  aside {
    display: none;
  }
}
@font-face {
  font-family: "GothamPro-Black";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-BlackItalic";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_14___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_15___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_16___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_17___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-BoldItalic";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_19___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_20___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_21___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_22___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_23___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-Italic";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_25___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_26___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_27___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_28___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_29___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-Light";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_30___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_31___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_32___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_33___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_34___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_35___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-LightItalic";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_36___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_37___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_38___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_39___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_40___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_41___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-Medium";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_42___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_43___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_44___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_45___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_46___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_47___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamPro-MediumItalic";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_48___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_49___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_50___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_51___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_52___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_53___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamProNarrow-Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_54___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_55___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_56___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_57___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_58___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_59___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
@font-face {
  font-family: "GothamProNarrow-Medium";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_60___}); /* IE 9 Compatibility Mode */
  src: url(${___CSS_LOADER_URL_REPLACEMENT_61___}) format("embedded-opentype"), url(${___CSS_LOADER_URL_REPLACEMENT_62___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_63___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_64___}) format("truetype"), url(${___CSS_LOADER_URL_REPLACEMENT_65___}) format("svg"); /* Chrome < 4, Legacy iOS */
}
/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
.fa {
  font-family: "Font Awesome 6 Free";
  font-family: var(--fa-style-family, "Font Awesome 6 Free");
  font-weight: 900;
  font-weight: var(--fa-style, 900);
}

.fa,
.fa-brands,
.fa-classic,
.fa-regular,
.fa-sharp,
.fa-solid,
.fab,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  display: var(--fa-display, inline-block);
  font-style: normal;
  font-feature-settings: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}

.fa-classic,
.fa-regular,
.fa-solid,
.far,
.fas {
  font-family: "Font Awesome 6 Free";
}

.fa-brands,
.fab {
  font-family: "Font Awesome 6 Brands";
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.08333em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.07143em;
  vertical-align: 0.05357em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.04167em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}

.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(2em * -1);
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: 2em;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-radius: 0.1em;
  border-radius: var(--fa-border-radius, 0.1em);
  border: 0.08em solid #eee;
  border: var(--fa-border-width, 0.08em) var(--fa-border-style, solid) var(--fa-border-color, #eee);
  padding: 0.2em 0.25em 0.15em;
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: 0.3em;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: 0.3em;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: 0s;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: normal;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: 1s;
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: ease-in-out;
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: 0s;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: normal;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: 1s;
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade,
.fa-fade {
  animation-delay: 0s;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: normal;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: 1s;
  animation-duration: var(--fa-animation-duration, 1s);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: 0s;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: normal;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: 1s;
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: ease-in-out;
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-duration: 1s;
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: linear;
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-shake,
.fa-spin {
  animation-delay: 0s;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: normal;
  animation-direction: var(--fa-animation-direction, normal);
}

.fa-spin {
  animation-name: fa-spin;
  animation-duration: 2s;
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: linear;
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: normal;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: 1s;
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: infinite;
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: steps(8);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-beat-fade,
  .fa-bounce,
  .fa-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.25);
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-0.5em);
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1) translateY(-0.125em);
    transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1) translateY(0);
  }
  to {
    transform: scale(1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: 0.4;
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, to {
    opacity: 0.4;
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.125);
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(0, 1, 0, -180deg);
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, to {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scaleX(-1);
}

.fa-flip-vertical {
  transform: scaleY(-1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1);
}

.fa-rotate-by {
  transform: rotate(none);
  transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: auto;
  z-index: var(--fa-stack-z-index, auto);
}

.fa-stack-1x {
  line-height: inherit;
}

.fa-stack-2x {
  font-size: 2em;
}

.fa-inverse {
  color: #fff;
  color: var(--fa-inverse, #fff);
}

.fa-0:before {
  content: "0";
}

.fa-1:before {
  content: "1";
}

.fa-2:before {
  content: "2";
}

.fa-3:before {
  content: "3";
}

.fa-4:before {
  content: "4";
}

.fa-5:before {
  content: "5";
}

.fa-6:before {
  content: "6";
}

.fa-7:before {
  content: "7";
}

.fa-8:before {
  content: "8";
}

.fa-9:before {
  content: "9";
}

.fa-fill-drip:before {
  content: "\\f576";
}

.fa-arrows-to-circle:before {
  content: "\\e4bd";
}

.fa-chevron-circle-right:before,
.fa-circle-chevron-right:before {
  content: "\\f138";
}

.fa-at:before {
  content: "@";
}

.fa-trash-alt:before,
.fa-trash-can:before {
  content: "\\f2ed";
}

.fa-text-height:before {
  content: "\\f034";
}

.fa-user-times:before,
.fa-user-xmark:before {
  content: "\\f235";
}

.fa-stethoscope:before {
  content: "\\f0f1";
}

.fa-comment-alt:before,
.fa-message:before {
  content: "\\f27a";
}

.fa-info:before {
  content: "\\f129";
}

.fa-compress-alt:before,
.fa-down-left-and-up-right-to-center:before {
  content: "\\f422";
}

.fa-explosion:before {
  content: "\\e4e9";
}

.fa-file-alt:before,
.fa-file-lines:before,
.fa-file-text:before {
  content: "\\f15c";
}

.fa-wave-square:before {
  content: "\\f83e";
}

.fa-ring:before {
  content: "\\f70b";
}

.fa-building-un:before {
  content: "\\e4d9";
}

.fa-dice-three:before {
  content: "\\f527";
}

.fa-calendar-alt:before,
.fa-calendar-days:before {
  content: "\\f073";
}

.fa-anchor-circle-check:before {
  content: "\\e4aa";
}

.fa-building-circle-arrow-right:before {
  content: "\\e4d1";
}

.fa-volleyball-ball:before,
.fa-volleyball:before {
  content: "\\f45f";
}

.fa-arrows-up-to-line:before {
  content: "\\e4c2";
}

.fa-sort-desc:before,
.fa-sort-down:before {
  content: "\\f0dd";
}

.fa-circle-minus:before,
.fa-minus-circle:before {
  content: "\\f056";
}

.fa-door-open:before {
  content: "\\f52b";
}

.fa-right-from-bracket:before,
.fa-sign-out-alt:before {
  content: "\\f2f5";
}

.fa-atom:before {
  content: "\\f5d2";
}

.fa-soap:before {
  content: "\\e06e";
}

.fa-heart-music-camera-bolt:before,
.fa-icons:before {
  content: "\\f86d";
}

.fa-microphone-alt-slash:before,
.fa-microphone-lines-slash:before {
  content: "\\f539";
}

.fa-bridge-circle-check:before {
  content: "\\e4c9";
}

.fa-pump-medical:before {
  content: "\\e06a";
}

.fa-fingerprint:before {
  content: "\\f577";
}

.fa-hand-point-right:before {
  content: "\\f0a4";
}

.fa-magnifying-glass-location:before,
.fa-search-location:before {
  content: "\\f689";
}

.fa-forward-step:before,
.fa-step-forward:before {
  content: "\\f051";
}

.fa-face-smile-beam:before,
.fa-smile-beam:before {
  content: "\\f5b8";
}

.fa-flag-checkered:before {
  content: "\\f11e";
}

.fa-football-ball:before,
.fa-football:before {
  content: "\\f44e";
}

.fa-school-circle-exclamation:before {
  content: "\\e56c";
}

.fa-crop:before {
  content: "\\f125";
}

.fa-angle-double-down:before,
.fa-angles-down:before {
  content: "\\f103";
}

.fa-users-rectangle:before {
  content: "\\e594";
}

.fa-people-roof:before {
  content: "\\e537";
}

.fa-people-line:before {
  content: "\\e534";
}

.fa-beer-mug-empty:before,
.fa-beer:before {
  content: "\\f0fc";
}

.fa-diagram-predecessor:before {
  content: "\\e477";
}

.fa-arrow-up-long:before,
.fa-long-arrow-up:before {
  content: "\\f176";
}

.fa-burn:before,
.fa-fire-flame-simple:before {
  content: "\\f46a";
}

.fa-male:before,
.fa-person:before {
  content: "\\f183";
}

.fa-laptop:before {
  content: "\\f109";
}

.fa-file-csv:before {
  content: "\\f6dd";
}

.fa-menorah:before {
  content: "\\f676";
}

.fa-truck-plane:before {
  content: "\\e58f";
}

.fa-record-vinyl:before {
  content: "\\f8d9";
}

.fa-face-grin-stars:before,
.fa-grin-stars:before {
  content: "\\f587";
}

.fa-bong:before {
  content: "\\f55c";
}

.fa-pastafarianism:before,
.fa-spaghetti-monster-flying:before {
  content: "\\f67b";
}

.fa-arrow-down-up-across-line:before {
  content: "\\e4af";
}

.fa-spoon:before,
.fa-utensil-spoon:before {
  content: "\\f2e5";
}

.fa-jar-wheat:before {
  content: "\\e517";
}

.fa-envelopes-bulk:before,
.fa-mail-bulk:before {
  content: "\\f674";
}

.fa-file-circle-exclamation:before {
  content: "\\e4eb";
}

.fa-circle-h:before,
.fa-hospital-symbol:before {
  content: "\\f47e";
}

.fa-pager:before {
  content: "\\f815";
}

.fa-address-book:before,
.fa-contact-book:before {
  content: "\\f2b9";
}

.fa-strikethrough:before {
  content: "\\f0cc";
}

.fa-k:before {
  content: "K";
}

.fa-landmark-flag:before {
  content: "\\e51c";
}

.fa-pencil-alt:before,
.fa-pencil:before {
  content: "\\f303";
}

.fa-backward:before {
  content: "\\f04a";
}

.fa-caret-right:before {
  content: "\\f0da";
}

.fa-comments:before {
  content: "\\f086";
}

.fa-file-clipboard:before,
.fa-paste:before {
  content: "\\f0ea";
}

.fa-code-pull-request:before {
  content: "\\e13c";
}

.fa-clipboard-list:before {
  content: "\\f46d";
}

.fa-truck-loading:before,
.fa-truck-ramp-box:before {
  content: "\\f4de";
}

.fa-user-check:before {
  content: "\\f4fc";
}

.fa-vial-virus:before {
  content: "\\e597";
}

.fa-sheet-plastic:before {
  content: "\\e571";
}

.fa-blog:before {
  content: "\\f781";
}

.fa-user-ninja:before {
  content: "\\f504";
}

.fa-person-arrow-up-from-line:before {
  content: "\\e539";
}

.fa-scroll-torah:before,
.fa-torah:before {
  content: "\\f6a0";
}

.fa-broom-ball:before,
.fa-quidditch-broom-ball:before,
.fa-quidditch:before {
  content: "\\f458";
}

.fa-toggle-off:before {
  content: "\\f204";
}

.fa-archive:before,
.fa-box-archive:before {
  content: "\\f187";
}

.fa-person-drowning:before {
  content: "\\e545";
}

.fa-arrow-down-9-1:before,
.fa-sort-numeric-desc:before,
.fa-sort-numeric-down-alt:before {
  content: "\\f886";
}

.fa-face-grin-tongue-squint:before,
.fa-grin-tongue-squint:before {
  content: "\\f58a";
}

.fa-spray-can:before {
  content: "\\f5bd";
}

.fa-truck-monster:before {
  content: "\\f63b";
}

.fa-w:before {
  content: "W";
}

.fa-earth-africa:before,
.fa-globe-africa:before {
  content: "\\f57c";
}

.fa-rainbow:before {
  content: "\\f75b";
}

.fa-circle-notch:before {
  content: "\\f1ce";
}

.fa-tablet-alt:before,
.fa-tablet-screen-button:before {
  content: "\\f3fa";
}

.fa-paw:before {
  content: "\\f1b0";
}

.fa-cloud:before {
  content: "\\f0c2";
}

.fa-trowel-bricks:before {
  content: "\\e58a";
}

.fa-face-flushed:before,
.fa-flushed:before {
  content: "\\f579";
}

.fa-hospital-user:before {
  content: "\\f80d";
}

.fa-tent-arrow-left-right:before {
  content: "\\e57f";
}

.fa-gavel:before,
.fa-legal:before {
  content: "\\f0e3";
}

.fa-binoculars:before {
  content: "\\f1e5";
}

.fa-microphone-slash:before {
  content: "\\f131";
}

.fa-box-tissue:before {
  content: "\\e05b";
}

.fa-motorcycle:before {
  content: "\\f21c";
}

.fa-bell-concierge:before,
.fa-concierge-bell:before {
  content: "\\f562";
}

.fa-pen-ruler:before,
.fa-pencil-ruler:before {
  content: "\\f5ae";
}

.fa-people-arrows-left-right:before,
.fa-people-arrows:before {
  content: "\\e068";
}

.fa-mars-and-venus-burst:before {
  content: "\\e523";
}

.fa-caret-square-right:before,
.fa-square-caret-right:before {
  content: "\\f152";
}

.fa-cut:before,
.fa-scissors:before {
  content: "\\f0c4";
}

.fa-sun-plant-wilt:before {
  content: "\\e57a";
}

.fa-toilets-portable:before {
  content: "\\e584";
}

.fa-hockey-puck:before {
  content: "\\f453";
}

.fa-table:before {
  content: "\\f0ce";
}

.fa-magnifying-glass-arrow-right:before {
  content: "\\e521";
}

.fa-digital-tachograph:before,
.fa-tachograph-digital:before {
  content: "\\f566";
}

.fa-users-slash:before {
  content: "\\e073";
}

.fa-clover:before {
  content: "\\e139";
}

.fa-mail-reply:before,
.fa-reply:before {
  content: "\\f3e5";
}

.fa-star-and-crescent:before {
  content: "\\f699";
}

.fa-house-fire:before {
  content: "\\e50c";
}

.fa-minus-square:before,
.fa-square-minus:before {
  content: "\\f146";
}

.fa-helicopter:before {
  content: "\\f533";
}

.fa-compass:before {
  content: "\\f14e";
}

.fa-caret-square-down:before,
.fa-square-caret-down:before {
  content: "\\f150";
}

.fa-file-circle-question:before {
  content: "\\e4ef";
}

.fa-laptop-code:before {
  content: "\\f5fc";
}

.fa-swatchbook:before {
  content: "\\f5c3";
}

.fa-prescription-bottle:before {
  content: "\\f485";
}

.fa-bars:before,
.fa-navicon:before {
  content: "\\f0c9";
}

.fa-people-group:before {
  content: "\\e533";
}

.fa-hourglass-3:before,
.fa-hourglass-end:before {
  content: "\\f253";
}

.fa-heart-broken:before,
.fa-heart-crack:before {
  content: "\\f7a9";
}

.fa-external-link-square-alt:before,
.fa-square-up-right:before {
  content: "\\f360";
}

.fa-face-kiss-beam:before,
.fa-kiss-beam:before {
  content: "\\f597";
}

.fa-film:before {
  content: "\\f008";
}

.fa-ruler-horizontal:before {
  content: "\\f547";
}

.fa-people-robbery:before {
  content: "\\e536";
}

.fa-lightbulb:before {
  content: "\\f0eb";
}

.fa-caret-left:before {
  content: "\\f0d9";
}

.fa-circle-exclamation:before,
.fa-exclamation-circle:before {
  content: "\\f06a";
}

.fa-school-circle-xmark:before {
  content: "\\e56d";
}

.fa-arrow-right-from-bracket:before,
.fa-sign-out:before {
  content: "\\f08b";
}

.fa-chevron-circle-down:before,
.fa-circle-chevron-down:before {
  content: "\\f13a";
}

.fa-unlock-alt:before,
.fa-unlock-keyhole:before {
  content: "\\f13e";
}

.fa-cloud-showers-heavy:before {
  content: "\\f740";
}

.fa-headphones-alt:before,
.fa-headphones-simple:before {
  content: "\\f58f";
}

.fa-sitemap:before {
  content: "\\f0e8";
}

.fa-circle-dollar-to-slot:before,
.fa-donate:before {
  content: "\\f4b9";
}

.fa-memory:before {
  content: "\\f538";
}

.fa-road-spikes:before {
  content: "\\e568";
}

.fa-fire-burner:before {
  content: "\\e4f1";
}

.fa-flag:before {
  content: "\\f024";
}

.fa-hanukiah:before {
  content: "\\f6e6";
}

.fa-feather:before {
  content: "\\f52d";
}

.fa-volume-down:before,
.fa-volume-low:before {
  content: "\\f027";
}

.fa-comment-slash:before {
  content: "\\f4b3";
}

.fa-cloud-sun-rain:before {
  content: "\\f743";
}

.fa-compress:before {
  content: "\\f066";
}

.fa-wheat-alt:before,
.fa-wheat-awn:before {
  content: "\\e2cd";
}

.fa-ankh:before {
  content: "\\f644";
}

.fa-hands-holding-child:before {
  content: "\\e4fa";
}

.fa-asterisk:before {
  content: "*";
}

.fa-check-square:before,
.fa-square-check:before {
  content: "\\f14a";
}

.fa-peseta-sign:before {
  content: "\\e221";
}

.fa-header:before,
.fa-heading:before {
  content: "\\f1dc";
}

.fa-ghost:before {
  content: "\\f6e2";
}

.fa-list-squares:before,
.fa-list:before {
  content: "\\f03a";
}

.fa-phone-square-alt:before,
.fa-square-phone-flip:before {
  content: "\\f87b";
}

.fa-cart-plus:before {
  content: "\\f217";
}

.fa-gamepad:before {
  content: "\\f11b";
}

.fa-circle-dot:before,
.fa-dot-circle:before {
  content: "\\f192";
}

.fa-dizzy:before,
.fa-face-dizzy:before {
  content: "\\f567";
}

.fa-egg:before {
  content: "\\f7fb";
}

.fa-house-medical-circle-xmark:before {
  content: "\\e513";
}

.fa-campground:before {
  content: "\\f6bb";
}

.fa-folder-plus:before {
  content: "\\f65e";
}

.fa-futbol-ball:before,
.fa-futbol:before,
.fa-soccer-ball:before {
  content: "\\f1e3";
}

.fa-paint-brush:before,
.fa-paintbrush:before {
  content: "\\f1fc";
}

.fa-lock:before {
  content: "\\f023";
}

.fa-gas-pump:before {
  content: "\\f52f";
}

.fa-hot-tub-person:before,
.fa-hot-tub:before {
  content: "\\f593";
}

.fa-map-location:before,
.fa-map-marked:before {
  content: "\\f59f";
}

.fa-house-flood-water:before {
  content: "\\e50e";
}

.fa-tree:before {
  content: "\\f1bb";
}

.fa-bridge-lock:before {
  content: "\\e4cc";
}

.fa-sack-dollar:before {
  content: "\\f81d";
}

.fa-edit:before,
.fa-pen-to-square:before {
  content: "\\f044";
}

.fa-car-side:before {
  content: "\\f5e4";
}

.fa-share-alt:before,
.fa-share-nodes:before {
  content: "\\f1e0";
}

.fa-heart-circle-minus:before {
  content: "\\e4ff";
}

.fa-hourglass-2:before,
.fa-hourglass-half:before {
  content: "\\f252";
}

.fa-microscope:before {
  content: "\\f610";
}

.fa-sink:before {
  content: "\\e06d";
}

.fa-bag-shopping:before,
.fa-shopping-bag:before {
  content: "\\f290";
}

.fa-arrow-down-z-a:before,
.fa-sort-alpha-desc:before,
.fa-sort-alpha-down-alt:before {
  content: "\\f881";
}

.fa-mitten:before {
  content: "\\f7b5";
}

.fa-person-rays:before {
  content: "\\e54d";
}

.fa-users:before {
  content: "\\f0c0";
}

.fa-eye-slash:before {
  content: "\\f070";
}

.fa-flask-vial:before {
  content: "\\e4f3";
}

.fa-hand-paper:before,
.fa-hand:before {
  content: "\\f256";
}

.fa-om:before {
  content: "\\f679";
}

.fa-worm:before {
  content: "\\e599";
}

.fa-house-circle-xmark:before {
  content: "\\e50b";
}

.fa-plug:before {
  content: "\\f1e6";
}

.fa-chevron-up:before {
  content: "\\f077";
}

.fa-hand-spock:before {
  content: "\\f259";
}

.fa-stopwatch:before {
  content: "\\f2f2";
}

.fa-face-kiss:before,
.fa-kiss:before {
  content: "\\f596";
}

.fa-bridge-circle-xmark:before {
  content: "\\e4cb";
}

.fa-face-grin-tongue:before,
.fa-grin-tongue:before {
  content: "\\f589";
}

.fa-chess-bishop:before {
  content: "\\f43a";
}

.fa-face-grin-wink:before,
.fa-grin-wink:before {
  content: "\\f58c";
}

.fa-deaf:before,
.fa-deafness:before,
.fa-ear-deaf:before,
.fa-hard-of-hearing:before {
  content: "\\f2a4";
}

.fa-road-circle-check:before {
  content: "\\e564";
}

.fa-dice-five:before {
  content: "\\f523";
}

.fa-rss-square:before,
.fa-square-rss:before {
  content: "\\f143";
}

.fa-land-mine-on:before {
  content: "\\e51b";
}

.fa-i-cursor:before {
  content: "\\f246";
}

.fa-stamp:before {
  content: "\\f5bf";
}

.fa-stairs:before {
  content: "\\e289";
}

.fa-i:before {
  content: "I";
}

.fa-hryvnia-sign:before,
.fa-hryvnia:before {
  content: "\\f6f2";
}

.fa-pills:before {
  content: "\\f484";
}

.fa-face-grin-wide:before,
.fa-grin-alt:before {
  content: "\\f581";
}

.fa-tooth:before {
  content: "\\f5c9";
}

.fa-v:before {
  content: "V";
}

.fa-bangladeshi-taka-sign:before {
  content: "\\e2e6";
}

.fa-bicycle:before {
  content: "\\f206";
}

.fa-rod-asclepius:before,
.fa-rod-snake:before,
.fa-staff-aesculapius:before,
.fa-staff-snake:before {
  content: "\\e579";
}

.fa-head-side-cough-slash:before {
  content: "\\e062";
}

.fa-ambulance:before,
.fa-truck-medical:before {
  content: "\\f0f9";
}

.fa-wheat-awn-circle-exclamation:before {
  content: "\\e598";
}

.fa-snowman:before {
  content: "\\f7d0";
}

.fa-mortar-pestle:before {
  content: "\\f5a7";
}

.fa-road-barrier:before {
  content: "\\e562";
}

.fa-school:before {
  content: "\\f549";
}

.fa-igloo:before {
  content: "\\f7ae";
}

.fa-joint:before {
  content: "\\f595";
}

.fa-angle-right:before {
  content: "\\f105";
}

.fa-horse:before {
  content: "\\f6f0";
}

.fa-q:before {
  content: "Q";
}

.fa-g:before {
  content: "G";
}

.fa-notes-medical:before {
  content: "\\f481";
}

.fa-temperature-2:before,
.fa-temperature-half:before,
.fa-thermometer-2:before,
.fa-thermometer-half:before {
  content: "\\f2c9";
}

.fa-dong-sign:before {
  content: "\\e169";
}

.fa-capsules:before {
  content: "\\f46b";
}

.fa-poo-bolt:before,
.fa-poo-storm:before {
  content: "\\f75a";
}

.fa-face-frown-open:before,
.fa-frown-open:before {
  content: "\\f57a";
}

.fa-hand-point-up:before {
  content: "\\f0a6";
}

.fa-money-bill:before {
  content: "\\f0d6";
}

.fa-bookmark:before {
  content: "\\f02e";
}

.fa-align-justify:before {
  content: "\\f039";
}

.fa-umbrella-beach:before {
  content: "\\f5ca";
}

.fa-helmet-un:before {
  content: "\\e503";
}

.fa-bullseye:before {
  content: "\\f140";
}

.fa-bacon:before {
  content: "\\f7e5";
}

.fa-hand-point-down:before {
  content: "\\f0a7";
}

.fa-arrow-up-from-bracket:before {
  content: "\\e09a";
}

.fa-folder-blank:before,
.fa-folder:before {
  content: "\\f07b";
}

.fa-file-medical-alt:before,
.fa-file-waveform:before {
  content: "\\f478";
}

.fa-radiation:before {
  content: "\\f7b9";
}

.fa-chart-simple:before {
  content: "\\e473";
}

.fa-mars-stroke:before {
  content: "\\f229";
}

.fa-vial:before {
  content: "\\f492";
}

.fa-dashboard:before,
.fa-gauge-med:before,
.fa-gauge:before,
.fa-tachometer-alt-average:before {
  content: "\\f624";
}

.fa-magic-wand-sparkles:before,
.fa-wand-magic-sparkles:before {
  content: "\\e2ca";
}

.fa-e:before {
  content: "E";
}

.fa-pen-alt:before,
.fa-pen-clip:before {
  content: "\\f305";
}

.fa-bridge-circle-exclamation:before {
  content: "\\e4ca";
}

.fa-user:before {
  content: "\\f007";
}

.fa-school-circle-check:before {
  content: "\\e56b";
}

.fa-dumpster:before {
  content: "\\f793";
}

.fa-shuttle-van:before,
.fa-van-shuttle:before {
  content: "\\f5b6";
}

.fa-building-user:before {
  content: "\\e4da";
}

.fa-caret-square-left:before,
.fa-square-caret-left:before {
  content: "\\f191";
}

.fa-highlighter:before {
  content: "\\f591";
}

.fa-key:before {
  content: "\\f084";
}

.fa-bullhorn:before {
  content: "\\f0a1";
}

.fa-globe:before {
  content: "\\f0ac";
}

.fa-synagogue:before {
  content: "\\f69b";
}

.fa-person-half-dress:before {
  content: "\\e548";
}

.fa-road-bridge:before {
  content: "\\e563";
}

.fa-location-arrow:before {
  content: "\\f124";
}

.fa-c:before {
  content: "C";
}

.fa-tablet-button:before {
  content: "\\f10a";
}

.fa-building-lock:before {
  content: "\\e4d6";
}

.fa-pizza-slice:before {
  content: "\\f818";
}

.fa-money-bill-wave:before {
  content: "\\f53a";
}

.fa-area-chart:before,
.fa-chart-area:before {
  content: "\\f1fe";
}

.fa-house-flag:before {
  content: "\\e50d";
}

.fa-person-circle-minus:before {
  content: "\\e540";
}

.fa-ban:before,
.fa-cancel:before {
  content: "\\f05e";
}

.fa-camera-rotate:before {
  content: "\\e0d8";
}

.fa-air-freshener:before,
.fa-spray-can-sparkles:before {
  content: "\\f5d0";
}

.fa-star:before {
  content: "\\f005";
}

.fa-repeat:before {
  content: "\\f363";
}

.fa-cross:before {
  content: "\\f654";
}

.fa-box:before {
  content: "\\f466";
}

.fa-venus-mars:before {
  content: "\\f228";
}

.fa-arrow-pointer:before,
.fa-mouse-pointer:before {
  content: "\\f245";
}

.fa-expand-arrows-alt:before,
.fa-maximize:before {
  content: "\\f31e";
}

.fa-charging-station:before {
  content: "\\f5e7";
}

.fa-shapes:before,
.fa-triangle-circle-square:before {
  content: "\\f61f";
}

.fa-random:before,
.fa-shuffle:before {
  content: "\\f074";
}

.fa-person-running:before,
.fa-running:before {
  content: "\\f70c";
}

.fa-mobile-retro:before {
  content: "\\e527";
}

.fa-grip-lines-vertical:before {
  content: "\\f7a5";
}

.fa-spider:before {
  content: "\\f717";
}

.fa-hands-bound:before {
  content: "\\e4f9";
}

.fa-file-invoice-dollar:before {
  content: "\\f571";
}

.fa-plane-circle-exclamation:before {
  content: "\\e556";
}

.fa-x-ray:before {
  content: "\\f497";
}

.fa-spell-check:before {
  content: "\\f891";
}

.fa-slash:before {
  content: "\\f715";
}

.fa-computer-mouse:before,
.fa-mouse:before {
  content: "\\f8cc";
}

.fa-arrow-right-to-bracket:before,
.fa-sign-in:before {
  content: "\\f090";
}

.fa-shop-slash:before,
.fa-store-alt-slash:before {
  content: "\\e070";
}

.fa-server:before {
  content: "\\f233";
}

.fa-virus-covid-slash:before {
  content: "\\e4a9";
}

.fa-shop-lock:before {
  content: "\\e4a5";
}

.fa-hourglass-1:before,
.fa-hourglass-start:before {
  content: "\\f251";
}

.fa-blender-phone:before {
  content: "\\f6b6";
}

.fa-building-wheat:before {
  content: "\\e4db";
}

.fa-person-breastfeeding:before {
  content: "\\e53a";
}

.fa-right-to-bracket:before,
.fa-sign-in-alt:before {
  content: "\\f2f6";
}

.fa-venus:before {
  content: "\\f221";
}

.fa-passport:before {
  content: "\\f5ab";
}

.fa-heart-pulse:before,
.fa-heartbeat:before {
  content: "\\f21e";
}

.fa-people-carry-box:before,
.fa-people-carry:before {
  content: "\\f4ce";
}

.fa-temperature-high:before {
  content: "\\f769";
}

.fa-microchip:before {
  content: "\\f2db";
}

.fa-crown:before {
  content: "\\f521";
}

.fa-weight-hanging:before {
  content: "\\f5cd";
}

.fa-xmarks-lines:before {
  content: "\\e59a";
}

.fa-file-prescription:before {
  content: "\\f572";
}

.fa-weight-scale:before,
.fa-weight:before {
  content: "\\f496";
}

.fa-user-friends:before,
.fa-user-group:before {
  content: "\\f500";
}

.fa-arrow-up-a-z:before,
.fa-sort-alpha-up:before {
  content: "\\f15e";
}

.fa-chess-knight:before {
  content: "\\f441";
}

.fa-face-laugh-squint:before,
.fa-laugh-squint:before {
  content: "\\f59b";
}

.fa-wheelchair:before {
  content: "\\f193";
}

.fa-arrow-circle-up:before,
.fa-circle-arrow-up:before {
  content: "\\f0aa";
}

.fa-toggle-on:before {
  content: "\\f205";
}

.fa-person-walking:before,
.fa-walking:before {
  content: "\\f554";
}

.fa-l:before {
  content: "L";
}

.fa-fire:before {
  content: "\\f06d";
}

.fa-bed-pulse:before,
.fa-procedures:before {
  content: "\\f487";
}

.fa-shuttle-space:before,
.fa-space-shuttle:before {
  content: "\\f197";
}

.fa-face-laugh:before,
.fa-laugh:before {
  content: "\\f599";
}

.fa-folder-open:before {
  content: "\\f07c";
}

.fa-heart-circle-plus:before {
  content: "\\e500";
}

.fa-code-fork:before {
  content: "\\e13b";
}

.fa-city:before {
  content: "\\f64f";
}

.fa-microphone-alt:before,
.fa-microphone-lines:before {
  content: "\\f3c9";
}

.fa-pepper-hot:before {
  content: "\\f816";
}

.fa-unlock:before {
  content: "\\f09c";
}

.fa-colon-sign:before {
  content: "\\e140";
}

.fa-headset:before {
  content: "\\f590";
}

.fa-store-slash:before {
  content: "\\e071";
}

.fa-road-circle-xmark:before {
  content: "\\e566";
}

.fa-user-minus:before {
  content: "\\f503";
}

.fa-mars-stroke-up:before,
.fa-mars-stroke-v:before {
  content: "\\f22a";
}

.fa-champagne-glasses:before,
.fa-glass-cheers:before {
  content: "\\f79f";
}

.fa-clipboard:before {
  content: "\\f328";
}

.fa-house-circle-exclamation:before {
  content: "\\e50a";
}

.fa-file-arrow-up:before,
.fa-file-upload:before {
  content: "\\f574";
}

.fa-wifi-3:before,
.fa-wifi-strong:before,
.fa-wifi:before {
  content: "\\f1eb";
}

.fa-bath:before,
.fa-bathtub:before {
  content: "\\f2cd";
}

.fa-underline:before {
  content: "\\f0cd";
}

.fa-user-edit:before,
.fa-user-pen:before {
  content: "\\f4ff";
}

.fa-signature:before {
  content: "\\f5b7";
}

.fa-stroopwafel:before {
  content: "\\f551";
}

.fa-bold:before {
  content: "\\f032";
}

.fa-anchor-lock:before {
  content: "\\e4ad";
}

.fa-building-ngo:before {
  content: "\\e4d7";
}

.fa-manat-sign:before {
  content: "\\e1d5";
}

.fa-not-equal:before {
  content: "\\f53e";
}

.fa-border-style:before,
.fa-border-top-left:before {
  content: "\\f853";
}

.fa-map-location-dot:before,
.fa-map-marked-alt:before {
  content: "\\f5a0";
}

.fa-jedi:before {
  content: "\\f669";
}

.fa-poll:before,
.fa-square-poll-vertical:before {
  content: "\\f681";
}

.fa-mug-hot:before {
  content: "\\f7b6";
}

.fa-battery-car:before,
.fa-car-battery:before {
  content: "\\f5df";
}

.fa-gift:before {
  content: "\\f06b";
}

.fa-dice-two:before {
  content: "\\f528";
}

.fa-chess-queen:before {
  content: "\\f445";
}

.fa-glasses:before {
  content: "\\f530";
}

.fa-chess-board:before {
  content: "\\f43c";
}

.fa-building-circle-check:before {
  content: "\\e4d2";
}

.fa-person-chalkboard:before {
  content: "\\e53d";
}

.fa-mars-stroke-h:before,
.fa-mars-stroke-right:before {
  content: "\\f22b";
}

.fa-hand-back-fist:before,
.fa-hand-rock:before {
  content: "\\f255";
}

.fa-caret-square-up:before,
.fa-square-caret-up:before {
  content: "\\f151";
}

.fa-cloud-showers-water:before {
  content: "\\e4e4";
}

.fa-bar-chart:before,
.fa-chart-bar:before {
  content: "\\f080";
}

.fa-hands-bubbles:before,
.fa-hands-wash:before {
  content: "\\e05e";
}

.fa-less-than-equal:before {
  content: "\\f537";
}

.fa-train:before {
  content: "\\f238";
}

.fa-eye-low-vision:before,
.fa-low-vision:before {
  content: "\\f2a8";
}

.fa-crow:before {
  content: "\\f520";
}

.fa-sailboat:before {
  content: "\\e445";
}

.fa-window-restore:before {
  content: "\\f2d2";
}

.fa-plus-square:before,
.fa-square-plus:before {
  content: "\\f0fe";
}

.fa-torii-gate:before {
  content: "\\f6a1";
}

.fa-frog:before {
  content: "\\f52e";
}

.fa-bucket:before {
  content: "\\e4cf";
}

.fa-image:before {
  content: "\\f03e";
}

.fa-microphone:before {
  content: "\\f130";
}

.fa-cow:before {
  content: "\\f6c8";
}

.fa-caret-up:before {
  content: "\\f0d8";
}

.fa-screwdriver:before {
  content: "\\f54a";
}

.fa-folder-closed:before {
  content: "\\e185";
}

.fa-house-tsunami:before {
  content: "\\e515";
}

.fa-square-nfi:before {
  content: "\\e576";
}

.fa-arrow-up-from-ground-water:before {
  content: "\\e4b5";
}

.fa-glass-martini-alt:before,
.fa-martini-glass:before {
  content: "\\f57b";
}

.fa-rotate-back:before,
.fa-rotate-backward:before,
.fa-rotate-left:before,
.fa-undo-alt:before {
  content: "\\f2ea";
}

.fa-columns:before,
.fa-table-columns:before {
  content: "\\f0db";
}

.fa-lemon:before {
  content: "\\f094";
}

.fa-head-side-mask:before {
  content: "\\e063";
}

.fa-handshake:before {
  content: "\\f2b5";
}

.fa-gem:before {
  content: "\\f3a5";
}

.fa-dolly-box:before,
.fa-dolly:before {
  content: "\\f472";
}

.fa-smoking:before {
  content: "\\f48d";
}

.fa-compress-arrows-alt:before,
.fa-minimize:before {
  content: "\\f78c";
}

.fa-monument:before {
  content: "\\f5a6";
}

.fa-snowplow:before {
  content: "\\f7d2";
}

.fa-angle-double-right:before,
.fa-angles-right:before {
  content: "\\f101";
}

.fa-cannabis:before {
  content: "\\f55f";
}

.fa-circle-play:before,
.fa-play-circle:before {
  content: "\\f144";
}

.fa-tablets:before {
  content: "\\f490";
}

.fa-ethernet:before {
  content: "\\f796";
}

.fa-eur:before,
.fa-euro-sign:before,
.fa-euro:before {
  content: "\\f153";
}

.fa-chair:before {
  content: "\\f6c0";
}

.fa-check-circle:before,
.fa-circle-check:before {
  content: "\\f058";
}

.fa-circle-stop:before,
.fa-stop-circle:before {
  content: "\\f28d";
}

.fa-compass-drafting:before,
.fa-drafting-compass:before {
  content: "\\f568";
}

.fa-plate-wheat:before {
  content: "\\e55a";
}

.fa-icicles:before {
  content: "\\f7ad";
}

.fa-person-shelter:before {
  content: "\\e54f";
}

.fa-neuter:before {
  content: "\\f22c";
}

.fa-id-badge:before {
  content: "\\f2c1";
}

.fa-marker:before {
  content: "\\f5a1";
}

.fa-face-laugh-beam:before,
.fa-laugh-beam:before {
  content: "\\f59a";
}

.fa-helicopter-symbol:before {
  content: "\\e502";
}

.fa-universal-access:before {
  content: "\\f29a";
}

.fa-chevron-circle-up:before,
.fa-circle-chevron-up:before {
  content: "\\f139";
}

.fa-lari-sign:before {
  content: "\\e1c8";
}

.fa-volcano:before {
  content: "\\f770";
}

.fa-person-walking-dashed-line-arrow-right:before {
  content: "\\e553";
}

.fa-gbp:before,
.fa-pound-sign:before,
.fa-sterling-sign:before {
  content: "\\f154";
}

.fa-viruses:before {
  content: "\\e076";
}

.fa-square-person-confined:before {
  content: "\\e577";
}

.fa-user-tie:before {
  content: "\\f508";
}

.fa-arrow-down-long:before,
.fa-long-arrow-down:before {
  content: "\\f175";
}

.fa-tent-arrow-down-to-line:before {
  content: "\\e57e";
}

.fa-certificate:before {
  content: "\\f0a3";
}

.fa-mail-reply-all:before,
.fa-reply-all:before {
  content: "\\f122";
}

.fa-suitcase:before {
  content: "\\f0f2";
}

.fa-person-skating:before,
.fa-skating:before {
  content: "\\f7c5";
}

.fa-filter-circle-dollar:before,
.fa-funnel-dollar:before {
  content: "\\f662";
}

.fa-camera-retro:before {
  content: "\\f083";
}

.fa-arrow-circle-down:before,
.fa-circle-arrow-down:before {
  content: "\\f0ab";
}

.fa-arrow-right-to-file:before,
.fa-file-import:before {
  content: "\\f56f";
}

.fa-external-link-square:before,
.fa-square-arrow-up-right:before {
  content: "\\f14c";
}

.fa-box-open:before {
  content: "\\f49e";
}

.fa-scroll:before {
  content: "\\f70e";
}

.fa-spa:before {
  content: "\\f5bb";
}

.fa-location-pin-lock:before {
  content: "\\e51f";
}

.fa-pause:before {
  content: "\\f04c";
}

.fa-hill-avalanche:before {
  content: "\\e507";
}

.fa-temperature-0:before,
.fa-temperature-empty:before,
.fa-thermometer-0:before,
.fa-thermometer-empty:before {
  content: "\\f2cb";
}

.fa-bomb:before {
  content: "\\f1e2";
}

.fa-registered:before {
  content: "\\f25d";
}

.fa-address-card:before,
.fa-contact-card:before,
.fa-vcard:before {
  content: "\\f2bb";
}

.fa-balance-scale-right:before,
.fa-scale-unbalanced-flip:before {
  content: "\\f516";
}

.fa-subscript:before {
  content: "\\f12c";
}

.fa-diamond-turn-right:before,
.fa-directions:before {
  content: "\\f5eb";
}

.fa-burst:before {
  content: "\\e4dc";
}

.fa-house-laptop:before,
.fa-laptop-house:before {
  content: "\\e066";
}

.fa-face-tired:before,
.fa-tired:before {
  content: "\\f5c8";
}

.fa-money-bills:before {
  content: "\\e1f3";
}

.fa-smog:before {
  content: "\\f75f";
}

.fa-crutch:before {
  content: "\\f7f7";
}

.fa-cloud-arrow-up:before,
.fa-cloud-upload-alt:before,
.fa-cloud-upload:before {
  content: "\\f0ee";
}

.fa-palette:before {
  content: "\\f53f";
}

.fa-arrows-turn-right:before {
  content: "\\e4c0";
}

.fa-vest:before {
  content: "\\e085";
}

.fa-ferry:before {
  content: "\\e4ea";
}

.fa-arrows-down-to-people:before {
  content: "\\e4b9";
}

.fa-seedling:before,
.fa-sprout:before {
  content: "\\f4d8";
}

.fa-arrows-alt-h:before,
.fa-left-right:before {
  content: "\\f337";
}

.fa-boxes-packing:before {
  content: "\\e4c7";
}

.fa-arrow-circle-left:before,
.fa-circle-arrow-left:before {
  content: "\\f0a8";
}

.fa-group-arrows-rotate:before {
  content: "\\e4f6";
}

.fa-bowl-food:before {
  content: "\\e4c6";
}

.fa-candy-cane:before {
  content: "\\f786";
}

.fa-arrow-down-wide-short:before,
.fa-sort-amount-asc:before,
.fa-sort-amount-down:before {
  content: "\\f160";
}

.fa-cloud-bolt:before,
.fa-thunderstorm:before {
  content: "\\f76c";
}

.fa-remove-format:before,
.fa-text-slash:before {
  content: "\\f87d";
}

.fa-face-smile-wink:before,
.fa-smile-wink:before {
  content: "\\f4da";
}

.fa-file-word:before {
  content: "\\f1c2";
}

.fa-file-powerpoint:before {
  content: "\\f1c4";
}

.fa-arrows-h:before,
.fa-arrows-left-right:before {
  content: "\\f07e";
}

.fa-house-lock:before {
  content: "\\e510";
}

.fa-cloud-arrow-down:before,
.fa-cloud-download-alt:before,
.fa-cloud-download:before {
  content: "\\f0ed";
}

.fa-children:before {
  content: "\\e4e1";
}

.fa-blackboard:before,
.fa-chalkboard:before {
  content: "\\f51b";
}

.fa-user-alt-slash:before,
.fa-user-large-slash:before {
  content: "\\f4fa";
}

.fa-envelope-open:before {
  content: "\\f2b6";
}

.fa-handshake-alt-slash:before,
.fa-handshake-simple-slash:before {
  content: "\\e05f";
}

.fa-mattress-pillow:before {
  content: "\\e525";
}

.fa-guarani-sign:before {
  content: "\\e19a";
}

.fa-arrows-rotate:before,
.fa-refresh:before,
.fa-sync:before {
  content: "\\f021";
}

.fa-fire-extinguisher:before {
  content: "\\f134";
}

.fa-cruzeiro-sign:before {
  content: "\\e152";
}

.fa-greater-than-equal:before {
  content: "\\f532";
}

.fa-shield-alt:before,
.fa-shield-halved:before {
  content: "\\f3ed";
}

.fa-atlas:before,
.fa-book-atlas:before {
  content: "\\f558";
}

.fa-virus:before {
  content: "\\e074";
}

.fa-envelope-circle-check:before {
  content: "\\e4e8";
}

.fa-layer-group:before {
  content: "\\f5fd";
}

.fa-arrows-to-dot:before {
  content: "\\e4be";
}

.fa-archway:before {
  content: "\\f557";
}

.fa-heart-circle-check:before {
  content: "\\e4fd";
}

.fa-house-chimney-crack:before,
.fa-house-damage:before {
  content: "\\f6f1";
}

.fa-file-archive:before,
.fa-file-zipper:before {
  content: "\\f1c6";
}

.fa-square:before {
  content: "\\f0c8";
}

.fa-glass-martini:before,
.fa-martini-glass-empty:before {
  content: "\\f000";
}

.fa-couch:before {
  content: "\\f4b8";
}

.fa-cedi-sign:before {
  content: "\\e0df";
}

.fa-italic:before {
  content: "\\f033";
}

.fa-church:before {
  content: "\\f51d";
}

.fa-comments-dollar:before {
  content: "\\f653";
}

.fa-democrat:before {
  content: "\\f747";
}

.fa-z:before {
  content: "Z";
}

.fa-person-skiing:before,
.fa-skiing:before {
  content: "\\f7c9";
}

.fa-road-lock:before {
  content: "\\e567";
}

.fa-a:before {
  content: "A";
}

.fa-temperature-arrow-down:before,
.fa-temperature-down:before {
  content: "\\e03f";
}

.fa-feather-alt:before,
.fa-feather-pointed:before {
  content: "\\f56b";
}

.fa-p:before {
  content: "P";
}

.fa-snowflake:before {
  content: "\\f2dc";
}

.fa-newspaper:before {
  content: "\\f1ea";
}

.fa-ad:before,
.fa-rectangle-ad:before {
  content: "\\f641";
}

.fa-arrow-circle-right:before,
.fa-circle-arrow-right:before {
  content: "\\f0a9";
}

.fa-filter-circle-xmark:before {
  content: "\\e17b";
}

.fa-locust:before {
  content: "\\e520";
}

.fa-sort:before,
.fa-unsorted:before {
  content: "\\f0dc";
}

.fa-list-1-2:before,
.fa-list-numeric:before,
.fa-list-ol:before {
  content: "\\f0cb";
}

.fa-person-dress-burst:before {
  content: "\\e544";
}

.fa-money-check-alt:before,
.fa-money-check-dollar:before {
  content: "\\f53d";
}

.fa-vector-square:before {
  content: "\\f5cb";
}

.fa-bread-slice:before {
  content: "\\f7ec";
}

.fa-language:before {
  content: "\\f1ab";
}

.fa-face-kiss-wink-heart:before,
.fa-kiss-wink-heart:before {
  content: "\\f598";
}

.fa-filter:before {
  content: "\\f0b0";
}

.fa-question:before {
  content: "?";
}

.fa-file-signature:before {
  content: "\\f573";
}

.fa-arrows-alt:before,
.fa-up-down-left-right:before {
  content: "\\f0b2";
}

.fa-house-chimney-user:before {
  content: "\\e065";
}

.fa-hand-holding-heart:before {
  content: "\\f4be";
}

.fa-puzzle-piece:before {
  content: "\\f12e";
}

.fa-money-check:before {
  content: "\\f53c";
}

.fa-star-half-alt:before,
.fa-star-half-stroke:before {
  content: "\\f5c0";
}

.fa-code:before {
  content: "\\f121";
}

.fa-glass-whiskey:before,
.fa-whiskey-glass:before {
  content: "\\f7a0";
}

.fa-building-circle-exclamation:before {
  content: "\\e4d3";
}

.fa-magnifying-glass-chart:before {
  content: "\\e522";
}

.fa-arrow-up-right-from-square:before,
.fa-external-link:before {
  content: "\\f08e";
}

.fa-cubes-stacked:before {
  content: "\\e4e6";
}

.fa-krw:before,
.fa-won-sign:before,
.fa-won:before {
  content: "\\f159";
}

.fa-virus-covid:before {
  content: "\\e4a8";
}

.fa-austral-sign:before {
  content: "\\e0a9";
}

.fa-f:before {
  content: "F";
}

.fa-leaf:before {
  content: "\\f06c";
}

.fa-road:before {
  content: "\\f018";
}

.fa-cab:before,
.fa-taxi:before {
  content: "\\f1ba";
}

.fa-person-circle-plus:before {
  content: "\\e541";
}

.fa-chart-pie:before,
.fa-pie-chart:before {
  content: "\\f200";
}

.fa-bolt-lightning:before {
  content: "\\e0b7";
}

.fa-sack-xmark:before {
  content: "\\e56a";
}

.fa-file-excel:before {
  content: "\\f1c3";
}

.fa-file-contract:before {
  content: "\\f56c";
}

.fa-fish-fins:before {
  content: "\\e4f2";
}

.fa-building-flag:before {
  content: "\\e4d5";
}

.fa-face-grin-beam:before,
.fa-grin-beam:before {
  content: "\\f582";
}

.fa-object-ungroup:before {
  content: "\\f248";
}

.fa-poop:before {
  content: "\\f619";
}

.fa-location-pin:before,
.fa-map-marker:before {
  content: "\\f041";
}

.fa-kaaba:before {
  content: "\\f66b";
}

.fa-toilet-paper:before {
  content: "\\f71e";
}

.fa-hard-hat:before,
.fa-hat-hard:before,
.fa-helmet-safety:before {
  content: "\\f807";
}

.fa-eject:before {
  content: "\\f052";
}

.fa-arrow-alt-circle-right:before,
.fa-circle-right:before {
  content: "\\f35a";
}

.fa-plane-circle-check:before {
  content: "\\e555";
}

.fa-face-rolling-eyes:before,
.fa-meh-rolling-eyes:before {
  content: "\\f5a5";
}

.fa-object-group:before {
  content: "\\f247";
}

.fa-chart-line:before,
.fa-line-chart:before {
  content: "\\f201";
}

.fa-mask-ventilator:before {
  content: "\\e524";
}

.fa-arrow-right:before {
  content: "\\f061";
}

.fa-map-signs:before,
.fa-signs-post:before {
  content: "\\f277";
}

.fa-cash-register:before {
  content: "\\f788";
}

.fa-person-circle-question:before {
  content: "\\e542";
}

.fa-h:before {
  content: "H";
}

.fa-tarp:before {
  content: "\\e57b";
}

.fa-screwdriver-wrench:before,
.fa-tools:before {
  content: "\\f7d9";
}

.fa-arrows-to-eye:before {
  content: "\\e4bf";
}

.fa-plug-circle-bolt:before {
  content: "\\e55b";
}

.fa-heart:before {
  content: "\\f004";
}

.fa-mars-and-venus:before {
  content: "\\f224";
}

.fa-home-user:before,
.fa-house-user:before {
  content: "\\e1b0";
}

.fa-dumpster-fire:before {
  content: "\\f794";
}

.fa-house-crack:before {
  content: "\\e3b1";
}

.fa-cocktail:before,
.fa-martini-glass-citrus:before {
  content: "\\f561";
}

.fa-face-surprise:before,
.fa-surprise:before {
  content: "\\f5c2";
}

.fa-bottle-water:before {
  content: "\\e4c5";
}

.fa-circle-pause:before,
.fa-pause-circle:before {
  content: "\\f28b";
}

.fa-toilet-paper-slash:before {
  content: "\\e072";
}

.fa-apple-alt:before,
.fa-apple-whole:before {
  content: "\\f5d1";
}

.fa-kitchen-set:before {
  content: "\\e51a";
}

.fa-r:before {
  content: "R";
}

.fa-temperature-1:before,
.fa-temperature-quarter:before,
.fa-thermometer-1:before,
.fa-thermometer-quarter:before {
  content: "\\f2ca";
}

.fa-cube:before {
  content: "\\f1b2";
}

.fa-bitcoin-sign:before {
  content: "\\e0b4";
}

.fa-shield-dog:before {
  content: "\\e573";
}

.fa-solar-panel:before {
  content: "\\f5ba";
}

.fa-lock-open:before {
  content: "\\f3c1";
}

.fa-elevator:before {
  content: "\\e16d";
}

.fa-money-bill-transfer:before {
  content: "\\e528";
}

.fa-money-bill-trend-up:before {
  content: "\\e529";
}

.fa-house-flood-water-circle-arrow-right:before {
  content: "\\e50f";
}

.fa-poll-h:before,
.fa-square-poll-horizontal:before {
  content: "\\f682";
}

.fa-circle:before {
  content: "\\f111";
}

.fa-backward-fast:before,
.fa-fast-backward:before {
  content: "\\f049";
}

.fa-recycle:before {
  content: "\\f1b8";
}

.fa-user-astronaut:before {
  content: "\\f4fb";
}

.fa-plane-slash:before {
  content: "\\e069";
}

.fa-trademark:before {
  content: "\\f25c";
}

.fa-basketball-ball:before,
.fa-basketball:before {
  content: "\\f434";
}

.fa-satellite-dish:before {
  content: "\\f7c0";
}

.fa-arrow-alt-circle-up:before,
.fa-circle-up:before {
  content: "\\f35b";
}

.fa-mobile-alt:before,
.fa-mobile-screen-button:before {
  content: "\\f3cd";
}

.fa-volume-high:before,
.fa-volume-up:before {
  content: "\\f028";
}

.fa-users-rays:before {
  content: "\\e593";
}

.fa-wallet:before {
  content: "\\f555";
}

.fa-clipboard-check:before {
  content: "\\f46c";
}

.fa-file-audio:before {
  content: "\\f1c7";
}

.fa-burger:before,
.fa-hamburger:before {
  content: "\\f805";
}

.fa-wrench:before {
  content: "\\f0ad";
}

.fa-bugs:before {
  content: "\\e4d0";
}

.fa-rupee-sign:before,
.fa-rupee:before {
  content: "\\f156";
}

.fa-file-image:before {
  content: "\\f1c5";
}

.fa-circle-question:before,
.fa-question-circle:before {
  content: "\\f059";
}

.fa-plane-departure:before {
  content: "\\f5b0";
}

.fa-handshake-slash:before {
  content: "\\e060";
}

.fa-book-bookmark:before {
  content: "\\e0bb";
}

.fa-code-branch:before {
  content: "\\f126";
}

.fa-hat-cowboy:before {
  content: "\\f8c0";
}

.fa-bridge:before {
  content: "\\e4c8";
}

.fa-phone-alt:before,
.fa-phone-flip:before {
  content: "\\f879";
}

.fa-truck-front:before {
  content: "\\e2b7";
}

.fa-cat:before {
  content: "\\f6be";
}

.fa-anchor-circle-exclamation:before {
  content: "\\e4ab";
}

.fa-truck-field:before {
  content: "\\e58d";
}

.fa-route:before {
  content: "\\f4d7";
}

.fa-clipboard-question:before {
  content: "\\e4e3";
}

.fa-panorama:before {
  content: "\\e209";
}

.fa-comment-medical:before {
  content: "\\f7f5";
}

.fa-teeth-open:before {
  content: "\\f62f";
}

.fa-file-circle-minus:before {
  content: "\\e4ed";
}

.fa-tags:before {
  content: "\\f02c";
}

.fa-wine-glass:before {
  content: "\\f4e3";
}

.fa-fast-forward:before,
.fa-forward-fast:before {
  content: "\\f050";
}

.fa-face-meh-blank:before,
.fa-meh-blank:before {
  content: "\\f5a4";
}

.fa-parking:before,
.fa-square-parking:before {
  content: "\\f540";
}

.fa-house-signal:before {
  content: "\\e012";
}

.fa-bars-progress:before,
.fa-tasks-alt:before {
  content: "\\f828";
}

.fa-faucet-drip:before {
  content: "\\e006";
}

.fa-cart-flatbed:before,
.fa-dolly-flatbed:before {
  content: "\\f474";
}

.fa-ban-smoking:before,
.fa-smoking-ban:before {
  content: "\\f54d";
}

.fa-terminal:before {
  content: "\\f120";
}

.fa-mobile-button:before {
  content: "\\f10b";
}

.fa-house-medical-flag:before {
  content: "\\e514";
}

.fa-basket-shopping:before,
.fa-shopping-basket:before {
  content: "\\f291";
}

.fa-tape:before {
  content: "\\f4db";
}

.fa-bus-alt:before,
.fa-bus-simple:before {
  content: "\\f55e";
}

.fa-eye:before {
  content: "\\f06e";
}

.fa-face-sad-cry:before,
.fa-sad-cry:before {
  content: "\\f5b3";
}

.fa-audio-description:before {
  content: "\\f29e";
}

.fa-person-military-to-person:before {
  content: "\\e54c";
}

.fa-file-shield:before {
  content: "\\e4f0";
}

.fa-user-slash:before {
  content: "\\f506";
}

.fa-pen:before {
  content: "\\f304";
}

.fa-tower-observation:before {
  content: "\\e586";
}

.fa-file-code:before {
  content: "\\f1c9";
}

.fa-signal-5:before,
.fa-signal-perfect:before,
.fa-signal:before {
  content: "\\f012";
}

.fa-bus:before {
  content: "\\f207";
}

.fa-heart-circle-xmark:before {
  content: "\\e501";
}

.fa-home-lg:before,
.fa-house-chimney:before {
  content: "\\e3af";
}

.fa-window-maximize:before {
  content: "\\f2d0";
}

.fa-face-frown:before,
.fa-frown:before {
  content: "\\f119";
}

.fa-prescription:before {
  content: "\\f5b1";
}

.fa-shop:before,
.fa-store-alt:before {
  content: "\\f54f";
}

.fa-floppy-disk:before,
.fa-save:before {
  content: "\\f0c7";
}

.fa-vihara:before {
  content: "\\f6a7";
}

.fa-balance-scale-left:before,
.fa-scale-unbalanced:before {
  content: "\\f515";
}

.fa-sort-asc:before,
.fa-sort-up:before {
  content: "\\f0de";
}

.fa-comment-dots:before,
.fa-commenting:before {
  content: "\\f4ad";
}

.fa-plant-wilt:before {
  content: "\\e5aa";
}

.fa-diamond:before {
  content: "\\f219";
}

.fa-face-grin-squint:before,
.fa-grin-squint:before {
  content: "\\f585";
}

.fa-hand-holding-dollar:before,
.fa-hand-holding-usd:before {
  content: "\\f4c0";
}

.fa-bacterium:before {
  content: "\\e05a";
}

.fa-hand-pointer:before {
  content: "\\f25a";
}

.fa-drum-steelpan:before {
  content: "\\f56a";
}

.fa-hand-scissors:before {
  content: "\\f257";
}

.fa-hands-praying:before,
.fa-praying-hands:before {
  content: "\\f684";
}

.fa-arrow-right-rotate:before,
.fa-arrow-rotate-forward:before,
.fa-arrow-rotate-right:before,
.fa-redo:before {
  content: "\\f01e";
}

.fa-biohazard:before {
  content: "\\f780";
}

.fa-location-crosshairs:before,
.fa-location:before {
  content: "\\f601";
}

.fa-mars-double:before {
  content: "\\f227";
}

.fa-child-dress:before {
  content: "\\e59c";
}

.fa-users-between-lines:before {
  content: "\\e591";
}

.fa-lungs-virus:before {
  content: "\\e067";
}

.fa-face-grin-tears:before,
.fa-grin-tears:before {
  content: "\\f588";
}

.fa-phone:before {
  content: "\\f095";
}

.fa-calendar-times:before,
.fa-calendar-xmark:before {
  content: "\\f273";
}

.fa-child-reaching:before {
  content: "\\e59d";
}

.fa-head-side-virus:before {
  content: "\\e064";
}

.fa-user-cog:before,
.fa-user-gear:before {
  content: "\\f4fe";
}

.fa-arrow-up-1-9:before,
.fa-sort-numeric-up:before {
  content: "\\f163";
}

.fa-door-closed:before {
  content: "\\f52a";
}

.fa-shield-virus:before {
  content: "\\e06c";
}

.fa-dice-six:before {
  content: "\\f526";
}

.fa-mosquito-net:before {
  content: "\\e52c";
}

.fa-bridge-water:before {
  content: "\\e4ce";
}

.fa-person-booth:before {
  content: "\\f756";
}

.fa-text-width:before {
  content: "\\f035";
}

.fa-hat-wizard:before {
  content: "\\f6e8";
}

.fa-pen-fancy:before {
  content: "\\f5ac";
}

.fa-digging:before,
.fa-person-digging:before {
  content: "\\f85e";
}

.fa-trash:before {
  content: "\\f1f8";
}

.fa-gauge-simple-med:before,
.fa-gauge-simple:before,
.fa-tachometer-average:before {
  content: "\\f629";
}

.fa-book-medical:before {
  content: "\\f7e6";
}

.fa-poo:before {
  content: "\\f2fe";
}

.fa-quote-right-alt:before,
.fa-quote-right:before {
  content: "\\f10e";
}

.fa-shirt:before,
.fa-t-shirt:before,
.fa-tshirt:before {
  content: "\\f553";
}

.fa-cubes:before {
  content: "\\f1b3";
}

.fa-divide:before {
  content: "\\f529";
}

.fa-tenge-sign:before,
.fa-tenge:before {
  content: "\\f7d7";
}

.fa-headphones:before {
  content: "\\f025";
}

.fa-hands-holding:before {
  content: "\\f4c2";
}

.fa-hands-clapping:before {
  content: "\\e1a8";
}

.fa-republican:before {
  content: "\\f75e";
}

.fa-arrow-left:before {
  content: "\\f060";
}

.fa-person-circle-xmark:before {
  content: "\\e543";
}

.fa-ruler:before {
  content: "\\f545";
}

.fa-align-left:before {
  content: "\\f036";
}

.fa-dice-d6:before {
  content: "\\f6d1";
}

.fa-restroom:before {
  content: "\\f7bd";
}

.fa-j:before {
  content: "J";
}

.fa-users-viewfinder:before {
  content: "\\e595";
}

.fa-file-video:before {
  content: "\\f1c8";
}

.fa-external-link-alt:before,
.fa-up-right-from-square:before {
  content: "\\f35d";
}

.fa-table-cells:before,
.fa-th:before {
  content: "\\f00a";
}

.fa-file-pdf:before {
  content: "\\f1c1";
}

.fa-bible:before,
.fa-book-bible:before {
  content: "\\f647";
}

.fa-o:before {
  content: "O";
}

.fa-medkit:before,
.fa-suitcase-medical:before {
  content: "\\f0fa";
}

.fa-user-secret:before {
  content: "\\f21b";
}

.fa-otter:before {
  content: "\\f700";
}

.fa-female:before,
.fa-person-dress:before {
  content: "\\f182";
}

.fa-comment-dollar:before {
  content: "\\f651";
}

.fa-briefcase-clock:before,
.fa-business-time:before {
  content: "\\f64a";
}

.fa-table-cells-large:before,
.fa-th-large:before {
  content: "\\f009";
}

.fa-book-tanakh:before,
.fa-tanakh:before {
  content: "\\f827";
}

.fa-phone-volume:before,
.fa-volume-control-phone:before {
  content: "\\f2a0";
}

.fa-hat-cowboy-side:before {
  content: "\\f8c1";
}

.fa-clipboard-user:before {
  content: "\\f7f3";
}

.fa-child:before {
  content: "\\f1ae";
}

.fa-lira-sign:before {
  content: "\\f195";
}

.fa-satellite:before {
  content: "\\f7bf";
}

.fa-plane-lock:before {
  content: "\\e558";
}

.fa-tag:before {
  content: "\\f02b";
}

.fa-comment:before {
  content: "\\f075";
}

.fa-birthday-cake:before,
.fa-cake-candles:before,
.fa-cake:before {
  content: "\\f1fd";
}

.fa-envelope:before {
  content: "\\f0e0";
}

.fa-angle-double-up:before,
.fa-angles-up:before {
  content: "\\f102";
}

.fa-paperclip:before {
  content: "\\f0c6";
}

.fa-arrow-right-to-city:before {
  content: "\\e4b3";
}

.fa-ribbon:before {
  content: "\\f4d6";
}

.fa-lungs:before {
  content: "\\f604";
}

.fa-arrow-up-9-1:before,
.fa-sort-numeric-up-alt:before {
  content: "\\f887";
}

.fa-litecoin-sign:before {
  content: "\\e1d3";
}

.fa-border-none:before {
  content: "\\f850";
}

.fa-circle-nodes:before {
  content: "\\e4e2";
}

.fa-parachute-box:before {
  content: "\\f4cd";
}

.fa-indent:before {
  content: "\\f03c";
}

.fa-truck-field-un:before {
  content: "\\e58e";
}

.fa-hourglass-empty:before,
.fa-hourglass:before {
  content: "\\f254";
}

.fa-mountain:before {
  content: "\\f6fc";
}

.fa-user-doctor:before,
.fa-user-md:before {
  content: "\\f0f0";
}

.fa-circle-info:before,
.fa-info-circle:before {
  content: "\\f05a";
}

.fa-cloud-meatball:before {
  content: "\\f73b";
}

.fa-camera-alt:before,
.fa-camera:before {
  content: "\\f030";
}

.fa-square-virus:before {
  content: "\\e578";
}

.fa-meteor:before {
  content: "\\f753";
}

.fa-car-on:before {
  content: "\\e4dd";
}

.fa-sleigh:before {
  content: "\\f7cc";
}

.fa-arrow-down-1-9:before,
.fa-sort-numeric-asc:before,
.fa-sort-numeric-down:before {
  content: "\\f162";
}

.fa-hand-holding-droplet:before,
.fa-hand-holding-water:before {
  content: "\\f4c1";
}

.fa-water:before {
  content: "\\f773";
}

.fa-calendar-check:before {
  content: "\\f274";
}

.fa-braille:before {
  content: "\\f2a1";
}

.fa-prescription-bottle-alt:before,
.fa-prescription-bottle-medical:before {
  content: "\\f486";
}

.fa-landmark:before {
  content: "\\f66f";
}

.fa-truck:before {
  content: "\\f0d1";
}

.fa-crosshairs:before {
  content: "\\f05b";
}

.fa-person-cane:before {
  content: "\\e53c";
}

.fa-tent:before {
  content: "\\e57d";
}

.fa-vest-patches:before {
  content: "\\e086";
}

.fa-check-double:before {
  content: "\\f560";
}

.fa-arrow-down-a-z:before,
.fa-sort-alpha-asc:before,
.fa-sort-alpha-down:before {
  content: "\\f15d";
}

.fa-money-bill-wheat:before {
  content: "\\e52a";
}

.fa-cookie:before {
  content: "\\f563";
}

.fa-arrow-left-rotate:before,
.fa-arrow-rotate-back:before,
.fa-arrow-rotate-backward:before,
.fa-arrow-rotate-left:before,
.fa-undo:before {
  content: "\\f0e2";
}

.fa-hard-drive:before,
.fa-hdd:before {
  content: "\\f0a0";
}

.fa-face-grin-squint-tears:before,
.fa-grin-squint-tears:before {
  content: "\\f586";
}

.fa-dumbbell:before {
  content: "\\f44b";
}

.fa-list-alt:before,
.fa-rectangle-list:before {
  content: "\\f022";
}

.fa-tarp-droplet:before {
  content: "\\e57c";
}

.fa-house-medical-circle-check:before {
  content: "\\e511";
}

.fa-person-skiing-nordic:before,
.fa-skiing-nordic:before {
  content: "\\f7ca";
}

.fa-calendar-plus:before {
  content: "\\f271";
}

.fa-plane-arrival:before {
  content: "\\f5af";
}

.fa-arrow-alt-circle-left:before,
.fa-circle-left:before {
  content: "\\f359";
}

.fa-subway:before,
.fa-train-subway:before {
  content: "\\f239";
}

.fa-chart-gantt:before {
  content: "\\e0e4";
}

.fa-indian-rupee-sign:before,
.fa-indian-rupee:before,
.fa-inr:before {
  content: "\\e1bc";
}

.fa-crop-alt:before,
.fa-crop-simple:before {
  content: "\\f565";
}

.fa-money-bill-1:before,
.fa-money-bill-alt:before {
  content: "\\f3d1";
}

.fa-left-long:before,
.fa-long-arrow-alt-left:before {
  content: "\\f30a";
}

.fa-dna:before {
  content: "\\f471";
}

.fa-virus-slash:before {
  content: "\\e075";
}

.fa-minus:before,
.fa-subtract:before {
  content: "\\f068";
}

.fa-chess:before {
  content: "\\f439";
}

.fa-arrow-left-long:before,
.fa-long-arrow-left:before {
  content: "\\f177";
}

.fa-plug-circle-check:before {
  content: "\\e55c";
}

.fa-street-view:before {
  content: "\\f21d";
}

.fa-franc-sign:before {
  content: "\\e18f";
}

.fa-volume-off:before {
  content: "\\f026";
}

.fa-american-sign-language-interpreting:before,
.fa-asl-interpreting:before,
.fa-hands-american-sign-language-interpreting:before,
.fa-hands-asl-interpreting:before {
  content: "\\f2a3";
}

.fa-cog:before,
.fa-gear:before {
  content: "\\f013";
}

.fa-droplet-slash:before,
.fa-tint-slash:before {
  content: "\\f5c7";
}

.fa-mosque:before {
  content: "\\f678";
}

.fa-mosquito:before {
  content: "\\e52b";
}

.fa-star-of-david:before {
  content: "\\f69a";
}

.fa-person-military-rifle:before {
  content: "\\e54b";
}

.fa-cart-shopping:before,
.fa-shopping-cart:before {
  content: "\\f07a";
}

.fa-vials:before {
  content: "\\f493";
}

.fa-plug-circle-plus:before {
  content: "\\e55f";
}

.fa-place-of-worship:before {
  content: "\\f67f";
}

.fa-grip-vertical:before {
  content: "\\f58e";
}

.fa-arrow-turn-up:before,
.fa-level-up:before {
  content: "\\f148";
}

.fa-u:before {
  content: "U";
}

.fa-square-root-alt:before,
.fa-square-root-variable:before {
  content: "\\f698";
}

.fa-clock-four:before,
.fa-clock:before {
  content: "\\f017";
}

.fa-backward-step:before,
.fa-step-backward:before {
  content: "\\f048";
}

.fa-pallet:before {
  content: "\\f482";
}

.fa-faucet:before {
  content: "\\e005";
}

.fa-baseball-bat-ball:before {
  content: "\\f432";
}

.fa-s:before {
  content: "S";
}

.fa-timeline:before {
  content: "\\e29c";
}

.fa-keyboard:before {
  content: "\\f11c";
}

.fa-caret-down:before {
  content: "\\f0d7";
}

.fa-clinic-medical:before,
.fa-house-chimney-medical:before {
  content: "\\f7f2";
}

.fa-temperature-3:before,
.fa-temperature-three-quarters:before,
.fa-thermometer-3:before,
.fa-thermometer-three-quarters:before {
  content: "\\f2c8";
}

.fa-mobile-android-alt:before,
.fa-mobile-screen:before {
  content: "\\f3cf";
}

.fa-plane-up:before {
  content: "\\e22d";
}

.fa-piggy-bank:before {
  content: "\\f4d3";
}

.fa-battery-3:before,
.fa-battery-half:before {
  content: "\\f242";
}

.fa-mountain-city:before {
  content: "\\e52e";
}

.fa-coins:before {
  content: "\\f51e";
}

.fa-khanda:before {
  content: "\\f66d";
}

.fa-sliders-h:before,
.fa-sliders:before {
  content: "\\f1de";
}

.fa-folder-tree:before {
  content: "\\f802";
}

.fa-network-wired:before {
  content: "\\f6ff";
}

.fa-map-pin:before {
  content: "\\f276";
}

.fa-hamsa:before {
  content: "\\f665";
}

.fa-cent-sign:before {
  content: "\\e3f5";
}

.fa-flask:before {
  content: "\\f0c3";
}

.fa-person-pregnant:before {
  content: "\\e31e";
}

.fa-wand-sparkles:before {
  content: "\\f72b";
}

.fa-ellipsis-v:before,
.fa-ellipsis-vertical:before {
  content: "\\f142";
}

.fa-ticket:before {
  content: "\\f145";
}

.fa-power-off:before {
  content: "\\f011";
}

.fa-long-arrow-alt-right:before,
.fa-right-long:before {
  content: "\\f30b";
}

.fa-flag-usa:before {
  content: "\\f74d";
}

.fa-laptop-file:before {
  content: "\\e51d";
}

.fa-teletype:before,
.fa-tty:before {
  content: "\\f1e4";
}

.fa-diagram-next:before {
  content: "\\e476";
}

.fa-person-rifle:before {
  content: "\\e54e";
}

.fa-house-medical-circle-exclamation:before {
  content: "\\e512";
}

.fa-closed-captioning:before {
  content: "\\f20a";
}

.fa-hiking:before,
.fa-person-hiking:before {
  content: "\\f6ec";
}

.fa-venus-double:before {
  content: "\\f226";
}

.fa-images:before {
  content: "\\f302";
}

.fa-calculator:before {
  content: "\\f1ec";
}

.fa-people-pulling:before {
  content: "\\e535";
}

.fa-n:before {
  content: "N";
}

.fa-cable-car:before,
.fa-tram:before {
  content: "\\f7da";
}

.fa-cloud-rain:before {
  content: "\\f73d";
}

.fa-building-circle-xmark:before {
  content: "\\e4d4";
}

.fa-ship:before {
  content: "\\f21a";
}

.fa-arrows-down-to-line:before {
  content: "\\e4b8";
}

.fa-download:before {
  content: "\\f019";
}

.fa-face-grin:before,
.fa-grin:before {
  content: "\\f580";
}

.fa-backspace:before,
.fa-delete-left:before {
  content: "\\f55a";
}

.fa-eye-dropper-empty:before,
.fa-eye-dropper:before,
.fa-eyedropper:before {
  content: "\\f1fb";
}

.fa-file-circle-check:before {
  content: "\\e5a0";
}

.fa-forward:before {
  content: "\\f04e";
}

.fa-mobile-android:before,
.fa-mobile-phone:before,
.fa-mobile:before {
  content: "\\f3ce";
}

.fa-face-meh:before,
.fa-meh:before {
  content: "\\f11a";
}

.fa-align-center:before {
  content: "\\f037";
}

.fa-book-dead:before,
.fa-book-skull:before {
  content: "\\f6b7";
}

.fa-drivers-license:before,
.fa-id-card:before {
  content: "\\f2c2";
}

.fa-dedent:before,
.fa-outdent:before {
  content: "\\f03b";
}

.fa-heart-circle-exclamation:before {
  content: "\\e4fe";
}

.fa-home-alt:before,
.fa-home-lg-alt:before,
.fa-home:before,
.fa-house:before {
  content: "\\f015";
}

.fa-calendar-week:before {
  content: "\\f784";
}

.fa-laptop-medical:before {
  content: "\\f812";
}

.fa-b:before {
  content: "B";
}

.fa-file-medical:before {
  content: "\\f477";
}

.fa-dice-one:before {
  content: "\\f525";
}

.fa-kiwi-bird:before {
  content: "\\f535";
}

.fa-arrow-right-arrow-left:before,
.fa-exchange:before {
  content: "\\f0ec";
}

.fa-redo-alt:before,
.fa-rotate-forward:before,
.fa-rotate-right:before {
  content: "\\f2f9";
}

.fa-cutlery:before,
.fa-utensils:before {
  content: "\\f2e7";
}

.fa-arrow-up-wide-short:before,
.fa-sort-amount-up:before {
  content: "\\f161";
}

.fa-mill-sign:before {
  content: "\\e1ed";
}

.fa-bowl-rice:before {
  content: "\\e2eb";
}

.fa-skull:before {
  content: "\\f54c";
}

.fa-broadcast-tower:before,
.fa-tower-broadcast:before {
  content: "\\f519";
}

.fa-truck-pickup:before {
  content: "\\f63c";
}

.fa-long-arrow-alt-up:before,
.fa-up-long:before {
  content: "\\f30c";
}

.fa-stop:before {
  content: "\\f04d";
}

.fa-code-merge:before {
  content: "\\f387";
}

.fa-upload:before {
  content: "\\f093";
}

.fa-hurricane:before {
  content: "\\f751";
}

.fa-mound:before {
  content: "\\e52d";
}

.fa-toilet-portable:before {
  content: "\\e583";
}

.fa-compact-disc:before {
  content: "\\f51f";
}

.fa-file-arrow-down:before,
.fa-file-download:before {
  content: "\\f56d";
}

.fa-caravan:before {
  content: "\\f8ff";
}

.fa-shield-cat:before {
  content: "\\e572";
}

.fa-bolt:before,
.fa-zap:before {
  content: "\\f0e7";
}

.fa-glass-water:before {
  content: "\\e4f4";
}

.fa-oil-well:before {
  content: "\\e532";
}

.fa-vault:before {
  content: "\\e2c5";
}

.fa-mars:before {
  content: "\\f222";
}

.fa-toilet:before {
  content: "\\f7d8";
}

.fa-plane-circle-xmark:before {
  content: "\\e557";
}

.fa-cny:before,
.fa-jpy:before,
.fa-rmb:before,
.fa-yen-sign:before,
.fa-yen:before {
  content: "\\f157";
}

.fa-rouble:before,
.fa-rub:before,
.fa-ruble-sign:before,
.fa-ruble:before {
  content: "\\f158";
}

.fa-sun:before {
  content: "\\f185";
}

.fa-guitar:before {
  content: "\\f7a6";
}

.fa-face-laugh-wink:before,
.fa-laugh-wink:before {
  content: "\\f59c";
}

.fa-horse-head:before {
  content: "\\f7ab";
}

.fa-bore-hole:before {
  content: "\\e4c3";
}

.fa-industry:before {
  content: "\\f275";
}

.fa-arrow-alt-circle-down:before,
.fa-circle-down:before {
  content: "\\f358";
}

.fa-arrows-turn-to-dots:before {
  content: "\\e4c1";
}

.fa-florin-sign:before {
  content: "\\e184";
}

.fa-arrow-down-short-wide:before,
.fa-sort-amount-desc:before,
.fa-sort-amount-down-alt:before {
  content: "\\f884";
}

.fa-less-than:before {
  content: "<";
}

.fa-angle-down:before {
  content: "\\f107";
}

.fa-car-tunnel:before {
  content: "\\e4de";
}

.fa-head-side-cough:before {
  content: "\\e061";
}

.fa-grip-lines:before {
  content: "\\f7a4";
}

.fa-thumbs-down:before {
  content: "\\f165";
}

.fa-user-lock:before {
  content: "\\f502";
}

.fa-arrow-right-long:before,
.fa-long-arrow-right:before {
  content: "\\f178";
}

.fa-anchor-circle-xmark:before {
  content: "\\e4ac";
}

.fa-ellipsis-h:before,
.fa-ellipsis:before {
  content: "\\f141";
}

.fa-chess-pawn:before {
  content: "\\f443";
}

.fa-first-aid:before,
.fa-kit-medical:before {
  content: "\\f479";
}

.fa-person-through-window:before {
  content: "\\e5a9";
}

.fa-toolbox:before {
  content: "\\f552";
}

.fa-hands-holding-circle:before {
  content: "\\e4fb";
}

.fa-bug:before {
  content: "\\f188";
}

.fa-credit-card-alt:before,
.fa-credit-card:before {
  content: "\\f09d";
}

.fa-automobile:before,
.fa-car:before {
  content: "\\f1b9";
}

.fa-hand-holding-hand:before {
  content: "\\e4f7";
}

.fa-book-open-reader:before,
.fa-book-reader:before {
  content: "\\f5da";
}

.fa-mountain-sun:before {
  content: "\\e52f";
}

.fa-arrows-left-right-to-line:before {
  content: "\\e4ba";
}

.fa-dice-d20:before {
  content: "\\f6cf";
}

.fa-truck-droplet:before {
  content: "\\e58c";
}

.fa-file-circle-xmark:before {
  content: "\\e5a1";
}

.fa-temperature-arrow-up:before,
.fa-temperature-up:before {
  content: "\\e040";
}

.fa-medal:before {
  content: "\\f5a2";
}

.fa-bed:before {
  content: "\\f236";
}

.fa-h-square:before,
.fa-square-h:before {
  content: "\\f0fd";
}

.fa-podcast:before {
  content: "\\f2ce";
}

.fa-temperature-4:before,
.fa-temperature-full:before,
.fa-thermometer-4:before,
.fa-thermometer-full:before {
  content: "\\f2c7";
}

.fa-bell:before {
  content: "\\f0f3";
}

.fa-superscript:before {
  content: "\\f12b";
}

.fa-plug-circle-xmark:before {
  content: "\\e560";
}

.fa-star-of-life:before {
  content: "\\f621";
}

.fa-phone-slash:before {
  content: "\\f3dd";
}

.fa-paint-roller:before {
  content: "\\f5aa";
}

.fa-hands-helping:before,
.fa-handshake-angle:before {
  content: "\\f4c4";
}

.fa-location-dot:before,
.fa-map-marker-alt:before {
  content: "\\f3c5";
}

.fa-file:before {
  content: "\\f15b";
}

.fa-greater-than:before {
  content: ">";
}

.fa-person-swimming:before,
.fa-swimmer:before {
  content: "\\f5c4";
}

.fa-arrow-down:before {
  content: "\\f063";
}

.fa-droplet:before,
.fa-tint:before {
  content: "\\f043";
}

.fa-eraser:before {
  content: "\\f12d";
}

.fa-earth-america:before,
.fa-earth-americas:before,
.fa-earth:before,
.fa-globe-americas:before {
  content: "\\f57d";
}

.fa-person-burst:before {
  content: "\\e53b";
}

.fa-dove:before {
  content: "\\f4ba";
}

.fa-battery-0:before,
.fa-battery-empty:before {
  content: "\\f244";
}

.fa-socks:before {
  content: "\\f696";
}

.fa-inbox:before {
  content: "\\f01c";
}

.fa-section:before {
  content: "\\e447";
}

.fa-gauge-high:before,
.fa-tachometer-alt-fast:before,
.fa-tachometer-alt:before {
  content: "\\f625";
}

.fa-envelope-open-text:before {
  content: "\\f658";
}

.fa-hospital-alt:before,
.fa-hospital-wide:before,
.fa-hospital:before {
  content: "\\f0f8";
}

.fa-wine-bottle:before {
  content: "\\f72f";
}

.fa-chess-rook:before {
  content: "\\f447";
}

.fa-bars-staggered:before,
.fa-reorder:before,
.fa-stream:before {
  content: "\\f550";
}

.fa-dharmachakra:before {
  content: "\\f655";
}

.fa-hotdog:before {
  content: "\\f80f";
}

.fa-blind:before,
.fa-person-walking-with-cane:before {
  content: "\\f29d";
}

.fa-drum:before {
  content: "\\f569";
}

.fa-ice-cream:before {
  content: "\\f810";
}

.fa-heart-circle-bolt:before {
  content: "\\e4fc";
}

.fa-fax:before {
  content: "\\f1ac";
}

.fa-paragraph:before {
  content: "\\f1dd";
}

.fa-check-to-slot:before,
.fa-vote-yea:before {
  content: "\\f772";
}

.fa-star-half:before {
  content: "\\f089";
}

.fa-boxes-alt:before,
.fa-boxes-stacked:before,
.fa-boxes:before {
  content: "\\f468";
}

.fa-chain:before,
.fa-link:before {
  content: "\\f0c1";
}

.fa-assistive-listening-systems:before,
.fa-ear-listen:before {
  content: "\\f2a2";
}

.fa-tree-city:before {
  content: "\\e587";
}

.fa-play:before {
  content: "\\f04b";
}

.fa-font:before {
  content: "\\f031";
}

.fa-rupiah-sign:before {
  content: "\\e23d";
}

.fa-magnifying-glass:before,
.fa-search:before {
  content: "\\f002";
}

.fa-ping-pong-paddle-ball:before,
.fa-table-tennis-paddle-ball:before,
.fa-table-tennis:before {
  content: "\\f45d";
}

.fa-diagnoses:before,
.fa-person-dots-from-line:before {
  content: "\\f470";
}

.fa-trash-can-arrow-up:before,
.fa-trash-restore-alt:before {
  content: "\\f82a";
}

.fa-naira-sign:before {
  content: "\\e1f6";
}

.fa-cart-arrow-down:before {
  content: "\\f218";
}

.fa-walkie-talkie:before {
  content: "\\f8ef";
}

.fa-file-edit:before,
.fa-file-pen:before {
  content: "\\f31c";
}

.fa-receipt:before {
  content: "\\f543";
}

.fa-pen-square:before,
.fa-pencil-square:before,
.fa-square-pen:before {
  content: "\\f14b";
}

.fa-suitcase-rolling:before {
  content: "\\f5c1";
}

.fa-person-circle-exclamation:before {
  content: "\\e53f";
}

.fa-chevron-down:before {
  content: "\\f078";
}

.fa-battery-5:before,
.fa-battery-full:before,
.fa-battery:before {
  content: "\\f240";
}

.fa-skull-crossbones:before {
  content: "\\f714";
}

.fa-code-compare:before {
  content: "\\e13a";
}

.fa-list-dots:before,
.fa-list-ul:before {
  content: "\\f0ca";
}

.fa-school-lock:before {
  content: "\\e56f";
}

.fa-tower-cell:before {
  content: "\\e585";
}

.fa-down-long:before,
.fa-long-arrow-alt-down:before {
  content: "\\f309";
}

.fa-ranking-star:before {
  content: "\\e561";
}

.fa-chess-king:before {
  content: "\\f43f";
}

.fa-person-harassing:before {
  content: "\\e549";
}

.fa-brazilian-real-sign:before {
  content: "\\e46c";
}

.fa-landmark-alt:before,
.fa-landmark-dome:before {
  content: "\\f752";
}

.fa-arrow-up:before {
  content: "\\f062";
}

.fa-television:before,
.fa-tv-alt:before,
.fa-tv:before {
  content: "\\f26c";
}

.fa-shrimp:before {
  content: "\\e448";
}

.fa-list-check:before,
.fa-tasks:before {
  content: "\\f0ae";
}

.fa-jug-detergent:before {
  content: "\\e519";
}

.fa-circle-user:before,
.fa-user-circle:before {
  content: "\\f2bd";
}

.fa-user-shield:before {
  content: "\\f505";
}

.fa-wind:before {
  content: "\\f72e";
}

.fa-car-burst:before,
.fa-car-crash:before {
  content: "\\f5e1";
}

.fa-y:before {
  content: "Y";
}

.fa-person-snowboarding:before,
.fa-snowboarding:before {
  content: "\\f7ce";
}

.fa-shipping-fast:before,
.fa-truck-fast:before {
  content: "\\f48b";
}

.fa-fish:before {
  content: "\\f578";
}

.fa-user-graduate:before {
  content: "\\f501";
}

.fa-adjust:before,
.fa-circle-half-stroke:before {
  content: "\\f042";
}

.fa-clapperboard:before {
  content: "\\e131";
}

.fa-circle-radiation:before,
.fa-radiation-alt:before {
  content: "\\f7ba";
}

.fa-baseball-ball:before,
.fa-baseball:before {
  content: "\\f433";
}

.fa-jet-fighter-up:before {
  content: "\\e518";
}

.fa-diagram-project:before,
.fa-project-diagram:before {
  content: "\\f542";
}

.fa-copy:before {
  content: "\\f0c5";
}

.fa-volume-mute:before,
.fa-volume-times:before,
.fa-volume-xmark:before {
  content: "\\f6a9";
}

.fa-hand-sparkles:before {
  content: "\\e05d";
}

.fa-grip-horizontal:before,
.fa-grip:before {
  content: "\\f58d";
}

.fa-share-from-square:before,
.fa-share-square:before {
  content: "\\f14d";
}

.fa-child-combatant:before,
.fa-child-rifle:before {
  content: "\\e4e0";
}

.fa-gun:before {
  content: "\\e19b";
}

.fa-phone-square:before,
.fa-square-phone:before {
  content: "\\f098";
}

.fa-add:before,
.fa-plus:before {
  content: "+";
}

.fa-expand:before {
  content: "\\f065";
}

.fa-computer:before {
  content: "\\e4e5";
}

.fa-close:before,
.fa-multiply:before,
.fa-remove:before,
.fa-times:before,
.fa-xmark:before {
  content: "\\f00d";
}

.fa-arrows-up-down-left-right:before,
.fa-arrows:before {
  content: "\\f047";
}

.fa-chalkboard-teacher:before,
.fa-chalkboard-user:before {
  content: "\\f51c";
}

.fa-peso-sign:before {
  content: "\\e222";
}

.fa-building-shield:before {
  content: "\\e4d8";
}

.fa-baby:before {
  content: "\\f77c";
}

.fa-users-line:before {
  content: "\\e592";
}

.fa-quote-left-alt:before,
.fa-quote-left:before {
  content: "\\f10d";
}

.fa-tractor:before {
  content: "\\f722";
}

.fa-trash-arrow-up:before,
.fa-trash-restore:before {
  content: "\\f829";
}

.fa-arrow-down-up-lock:before {
  content: "\\e4b0";
}

.fa-lines-leaning:before {
  content: "\\e51e";
}

.fa-ruler-combined:before {
  content: "\\f546";
}

.fa-copyright:before {
  content: "\\f1f9";
}

.fa-equals:before {
  content: "=";
}

.fa-blender:before {
  content: "\\f517";
}

.fa-teeth:before {
  content: "\\f62e";
}

.fa-ils:before,
.fa-shekel-sign:before,
.fa-shekel:before,
.fa-sheqel-sign:before,
.fa-sheqel:before {
  content: "\\f20b";
}

.fa-map:before {
  content: "\\f279";
}

.fa-rocket:before {
  content: "\\f135";
}

.fa-photo-film:before,
.fa-photo-video:before {
  content: "\\f87c";
}

.fa-folder-minus:before {
  content: "\\f65d";
}

.fa-store:before {
  content: "\\f54e";
}

.fa-arrow-trend-up:before {
  content: "\\e098";
}

.fa-plug-circle-minus:before {
  content: "\\e55e";
}

.fa-sign-hanging:before,
.fa-sign:before {
  content: "\\f4d9";
}

.fa-bezier-curve:before {
  content: "\\f55b";
}

.fa-bell-slash:before {
  content: "\\f1f6";
}

.fa-tablet-android:before,
.fa-tablet:before {
  content: "\\f3fb";
}

.fa-school-flag:before {
  content: "\\e56e";
}

.fa-fill:before {
  content: "\\f575";
}

.fa-angle-up:before {
  content: "\\f106";
}

.fa-drumstick-bite:before {
  content: "\\f6d7";
}

.fa-holly-berry:before {
  content: "\\f7aa";
}

.fa-chevron-left:before {
  content: "\\f053";
}

.fa-bacteria:before {
  content: "\\e059";
}

.fa-hand-lizard:before {
  content: "\\f258";
}

.fa-notdef:before {
  content: "\\e1fe";
}

.fa-disease:before {
  content: "\\f7fa";
}

.fa-briefcase-medical:before {
  content: "\\f469";
}

.fa-genderless:before {
  content: "\\f22d";
}

.fa-chevron-right:before {
  content: "\\f054";
}

.fa-retweet:before {
  content: "\\f079";
}

.fa-car-alt:before,
.fa-car-rear:before {
  content: "\\f5de";
}

.fa-pump-soap:before {
  content: "\\e06b";
}

.fa-video-slash:before {
  content: "\\f4e2";
}

.fa-battery-2:before,
.fa-battery-quarter:before {
  content: "\\f243";
}

.fa-radio:before {
  content: "\\f8d7";
}

.fa-baby-carriage:before,
.fa-carriage-baby:before {
  content: "\\f77d";
}

.fa-traffic-light:before {
  content: "\\f637";
}

.fa-thermometer:before {
  content: "\\f491";
}

.fa-vr-cardboard:before {
  content: "\\f729";
}

.fa-hand-middle-finger:before {
  content: "\\f806";
}

.fa-percent:before,
.fa-percentage:before {
  content: "%";
}

.fa-truck-moving:before {
  content: "\\f4df";
}

.fa-glass-water-droplet:before {
  content: "\\e4f5";
}

.fa-display:before {
  content: "\\e163";
}

.fa-face-smile:before,
.fa-smile:before {
  content: "\\f118";
}

.fa-thumb-tack:before,
.fa-thumbtack:before {
  content: "\\f08d";
}

.fa-trophy:before {
  content: "\\f091";
}

.fa-person-praying:before,
.fa-pray:before {
  content: "\\f683";
}

.fa-hammer:before {
  content: "\\f6e3";
}

.fa-hand-peace:before {
  content: "\\f25b";
}

.fa-rotate:before,
.fa-sync-alt:before {
  content: "\\f2f1";
}

.fa-spinner:before {
  content: "\\f110";
}

.fa-robot:before {
  content: "\\f544";
}

.fa-peace:before {
  content: "\\f67c";
}

.fa-cogs:before,
.fa-gears:before {
  content: "\\f085";
}

.fa-warehouse:before {
  content: "\\f494";
}

.fa-arrow-up-right-dots:before {
  content: "\\e4b7";
}

.fa-splotch:before {
  content: "\\f5bc";
}

.fa-face-grin-hearts:before,
.fa-grin-hearts:before {
  content: "\\f584";
}

.fa-dice-four:before {
  content: "\\f524";
}

.fa-sim-card:before {
  content: "\\f7c4";
}

.fa-transgender-alt:before,
.fa-transgender:before {
  content: "\\f225";
}

.fa-mercury:before {
  content: "\\f223";
}

.fa-arrow-turn-down:before,
.fa-level-down:before {
  content: "\\f149";
}

.fa-person-falling-burst:before {
  content: "\\e547";
}

.fa-award:before {
  content: "\\f559";
}

.fa-ticket-alt:before,
.fa-ticket-simple:before {
  content: "\\f3ff";
}

.fa-building:before {
  content: "\\f1ad";
}

.fa-angle-double-left:before,
.fa-angles-left:before {
  content: "\\f100";
}

.fa-qrcode:before {
  content: "\\f029";
}

.fa-clock-rotate-left:before,
.fa-history:before {
  content: "\\f1da";
}

.fa-face-grin-beam-sweat:before,
.fa-grin-beam-sweat:before {
  content: "\\f583";
}

.fa-arrow-right-from-file:before,
.fa-file-export:before {
  content: "\\f56e";
}

.fa-shield-blank:before,
.fa-shield:before {
  content: "\\f132";
}

.fa-arrow-up-short-wide:before,
.fa-sort-amount-up-alt:before {
  content: "\\f885";
}

.fa-house-medical:before {
  content: "\\e3b2";
}

.fa-golf-ball-tee:before,
.fa-golf-ball:before {
  content: "\\f450";
}

.fa-chevron-circle-left:before,
.fa-circle-chevron-left:before {
  content: "\\f137";
}

.fa-house-chimney-window:before {
  content: "\\e00d";
}

.fa-pen-nib:before {
  content: "\\f5ad";
}

.fa-tent-arrow-turn-left:before {
  content: "\\e580";
}

.fa-tents:before {
  content: "\\e582";
}

.fa-magic:before,
.fa-wand-magic:before {
  content: "\\f0d0";
}

.fa-dog:before {
  content: "\\f6d3";
}

.fa-carrot:before {
  content: "\\f787";
}

.fa-moon:before {
  content: "\\f186";
}

.fa-wine-glass-alt:before,
.fa-wine-glass-empty:before {
  content: "\\f5ce";
}

.fa-cheese:before {
  content: "\\f7ef";
}

.fa-yin-yang:before {
  content: "\\f6ad";
}

.fa-music:before {
  content: "\\f001";
}

.fa-code-commit:before {
  content: "\\f386";
}

.fa-temperature-low:before {
  content: "\\f76b";
}

.fa-biking:before,
.fa-person-biking:before {
  content: "\\f84a";
}

.fa-broom:before {
  content: "\\f51a";
}

.fa-shield-heart:before {
  content: "\\e574";
}

.fa-gopuram:before {
  content: "\\f664";
}

.fa-earth-oceania:before,
.fa-globe-oceania:before {
  content: "\\e47b";
}

.fa-square-xmark:before,
.fa-times-square:before,
.fa-xmark-square:before {
  content: "\\f2d3";
}

.fa-hashtag:before {
  content: "#";
}

.fa-expand-alt:before,
.fa-up-right-and-down-left-from-center:before {
  content: "\\f424";
}

.fa-oil-can:before {
  content: "\\f613";
}

.fa-t:before {
  content: "T";
}

.fa-hippo:before {
  content: "\\f6ed";
}

.fa-chart-column:before {
  content: "\\e0e3";
}

.fa-infinity:before {
  content: "\\f534";
}

.fa-vial-circle-check:before {
  content: "\\e596";
}

.fa-person-arrow-down-to-line:before {
  content: "\\e538";
}

.fa-voicemail:before {
  content: "\\f897";
}

.fa-fan:before {
  content: "\\f863";
}

.fa-person-walking-luggage:before {
  content: "\\e554";
}

.fa-arrows-alt-v:before,
.fa-up-down:before {
  content: "\\f338";
}

.fa-cloud-moon-rain:before {
  content: "\\f73c";
}

.fa-calendar:before {
  content: "\\f133";
}

.fa-trailer:before {
  content: "\\e041";
}

.fa-bahai:before,
.fa-haykal:before {
  content: "\\f666";
}

.fa-sd-card:before {
  content: "\\f7c2";
}

.fa-dragon:before {
  content: "\\f6d5";
}

.fa-shoe-prints:before {
  content: "\\f54b";
}

.fa-circle-plus:before,
.fa-plus-circle:before {
  content: "\\f055";
}

.fa-face-grin-tongue-wink:before,
.fa-grin-tongue-wink:before {
  content: "\\f58b";
}

.fa-hand-holding:before {
  content: "\\f4bd";
}

.fa-plug-circle-exclamation:before {
  content: "\\e55d";
}

.fa-chain-broken:before,
.fa-chain-slash:before,
.fa-link-slash:before,
.fa-unlink:before {
  content: "\\f127";
}

.fa-clone:before {
  content: "\\f24d";
}

.fa-person-walking-arrow-loop-left:before {
  content: "\\e551";
}

.fa-arrow-up-z-a:before,
.fa-sort-alpha-up-alt:before {
  content: "\\f882";
}

.fa-fire-alt:before,
.fa-fire-flame-curved:before {
  content: "\\f7e4";
}

.fa-tornado:before {
  content: "\\f76f";
}

.fa-file-circle-plus:before {
  content: "\\e494";
}

.fa-book-quran:before,
.fa-quran:before {
  content: "\\f687";
}

.fa-anchor:before {
  content: "\\f13d";
}

.fa-border-all:before {
  content: "\\f84c";
}

.fa-angry:before,
.fa-face-angry:before {
  content: "\\f556";
}

.fa-cookie-bite:before {
  content: "\\f564";
}

.fa-arrow-trend-down:before {
  content: "\\e097";
}

.fa-feed:before,
.fa-rss:before {
  content: "\\f09e";
}

.fa-draw-polygon:before {
  content: "\\f5ee";
}

.fa-balance-scale:before,
.fa-scale-balanced:before {
  content: "\\f24e";
}

.fa-gauge-simple-high:before,
.fa-tachometer-fast:before,
.fa-tachometer:before {
  content: "\\f62a";
}

.fa-shower:before {
  content: "\\f2cc";
}

.fa-desktop-alt:before,
.fa-desktop:before {
  content: "\\f390";
}

.fa-m:before {
  content: "M";
}

.fa-table-list:before,
.fa-th-list:before {
  content: "\\f00b";
}

.fa-comment-sms:before,
.fa-sms:before {
  content: "\\f7cd";
}

.fa-book:before {
  content: "\\f02d";
}

.fa-user-plus:before {
  content: "\\f234";
}

.fa-check:before {
  content: "\\f00c";
}

.fa-battery-4:before,
.fa-battery-three-quarters:before {
  content: "\\f241";
}

.fa-house-circle-check:before {
  content: "\\e509";
}

.fa-angle-left:before {
  content: "\\f104";
}

.fa-diagram-successor:before {
  content: "\\e47a";
}

.fa-truck-arrow-right:before {
  content: "\\e58b";
}

.fa-arrows-split-up-and-left:before {
  content: "\\e4bc";
}

.fa-fist-raised:before,
.fa-hand-fist:before {
  content: "\\f6de";
}

.fa-cloud-moon:before {
  content: "\\f6c3";
}

.fa-briefcase:before {
  content: "\\f0b1";
}

.fa-person-falling:before {
  content: "\\e546";
}

.fa-image-portrait:before,
.fa-portrait:before {
  content: "\\f3e0";
}

.fa-user-tag:before {
  content: "\\f507";
}

.fa-rug:before {
  content: "\\e569";
}

.fa-earth-europe:before,
.fa-globe-europe:before {
  content: "\\f7a2";
}

.fa-cart-flatbed-suitcase:before,
.fa-luggage-cart:before {
  content: "\\f59d";
}

.fa-rectangle-times:before,
.fa-rectangle-xmark:before,
.fa-times-rectangle:before,
.fa-window-close:before {
  content: "\\f410";
}

.fa-baht-sign:before {
  content: "\\e0ac";
}

.fa-book-open:before {
  content: "\\f518";
}

.fa-book-journal-whills:before,
.fa-journal-whills:before {
  content: "\\f66a";
}

.fa-handcuffs:before {
  content: "\\e4f8";
}

.fa-exclamation-triangle:before,
.fa-triangle-exclamation:before,
.fa-warning:before {
  content: "\\f071";
}

.fa-database:before {
  content: "\\f1c0";
}

.fa-mail-forward:before,
.fa-share:before {
  content: "\\f064";
}

.fa-bottle-droplet:before {
  content: "\\e4c4";
}

.fa-mask-face:before {
  content: "\\e1d7";
}

.fa-hill-rockslide:before {
  content: "\\e508";
}

.fa-exchange-alt:before,
.fa-right-left:before {
  content: "\\f362";
}

.fa-paper-plane:before {
  content: "\\f1d8";
}

.fa-road-circle-exclamation:before {
  content: "\\e565";
}

.fa-dungeon:before {
  content: "\\f6d9";
}

.fa-align-right:before {
  content: "\\f038";
}

.fa-money-bill-1-wave:before,
.fa-money-bill-wave-alt:before {
  content: "\\f53b";
}

.fa-life-ring:before {
  content: "\\f1cd";
}

.fa-hands:before,
.fa-sign-language:before,
.fa-signing:before {
  content: "\\f2a7";
}

.fa-calendar-day:before {
  content: "\\f783";
}

.fa-ladder-water:before,
.fa-swimming-pool:before,
.fa-water-ladder:before {
  content: "\\f5c5";
}

.fa-arrows-up-down:before,
.fa-arrows-v:before {
  content: "\\f07d";
}

.fa-face-grimace:before,
.fa-grimace:before {
  content: "\\f57f";
}

.fa-wheelchair-alt:before,
.fa-wheelchair-move:before {
  content: "\\e2ce";
}

.fa-level-down-alt:before,
.fa-turn-down:before {
  content: "\\f3be";
}

.fa-person-walking-arrow-right:before {
  content: "\\e552";
}

.fa-envelope-square:before,
.fa-square-envelope:before {
  content: "\\f199";
}

.fa-dice:before {
  content: "\\f522";
}

.fa-bowling-ball:before {
  content: "\\f436";
}

.fa-brain:before {
  content: "\\f5dc";
}

.fa-band-aid:before,
.fa-bandage:before {
  content: "\\f462";
}

.fa-calendar-minus:before {
  content: "\\f272";
}

.fa-circle-xmark:before,
.fa-times-circle:before,
.fa-xmark-circle:before {
  content: "\\f057";
}

.fa-gifts:before {
  content: "\\f79c";
}

.fa-hotel:before {
  content: "\\f594";
}

.fa-earth-asia:before,
.fa-globe-asia:before {
  content: "\\f57e";
}

.fa-id-card-alt:before,
.fa-id-card-clip:before {
  content: "\\f47f";
}

.fa-magnifying-glass-plus:before,
.fa-search-plus:before {
  content: "\\f00e";
}

.fa-thumbs-up:before {
  content: "\\f164";
}

.fa-user-clock:before {
  content: "\\f4fd";
}

.fa-allergies:before,
.fa-hand-dots:before {
  content: "\\f461";
}

.fa-file-invoice:before {
  content: "\\f570";
}

.fa-window-minimize:before {
  content: "\\f2d1";
}

.fa-coffee:before,
.fa-mug-saucer:before {
  content: "\\f0f4";
}

.fa-brush:before {
  content: "\\f55d";
}

.fa-mask:before {
  content: "\\f6fa";
}

.fa-magnifying-glass-minus:before,
.fa-search-minus:before {
  content: "\\f010";
}

.fa-ruler-vertical:before {
  content: "\\f548";
}

.fa-user-alt:before,
.fa-user-large:before {
  content: "\\f406";
}

.fa-train-tram:before {
  content: "\\e5b4";
}

.fa-user-nurse:before {
  content: "\\f82f";
}

.fa-syringe:before {
  content: "\\f48e";
}

.fa-cloud-sun:before {
  content: "\\f6c4";
}

.fa-stopwatch-20:before {
  content: "\\e06f";
}

.fa-square-full:before {
  content: "\\f45c";
}

.fa-magnet:before {
  content: "\\f076";
}

.fa-jar:before {
  content: "\\e516";
}

.fa-note-sticky:before,
.fa-sticky-note:before {
  content: "\\f249";
}

.fa-bug-slash:before {
  content: "\\e490";
}

.fa-arrow-up-from-water-pump:before {
  content: "\\e4b6";
}

.fa-bone:before {
  content: "\\f5d7";
}

.fa-user-injured:before {
  content: "\\f728";
}

.fa-face-sad-tear:before,
.fa-sad-tear:before {
  content: "\\f5b4";
}

.fa-plane:before {
  content: "\\f072";
}

.fa-tent-arrows-down:before {
  content: "\\e581";
}

.fa-exclamation:before {
  content: "!";
}

.fa-arrows-spin:before {
  content: "\\e4bb";
}

.fa-print:before {
  content: "\\f02f";
}

.fa-try:before,
.fa-turkish-lira-sign:before,
.fa-turkish-lira:before {
  content: "\\e2bb";
}

.fa-dollar-sign:before,
.fa-dollar:before,
.fa-usd:before {
  content: "\$";
}

.fa-x:before {
  content: "X";
}

.fa-magnifying-glass-dollar:before,
.fa-search-dollar:before {
  content: "\\f688";
}

.fa-users-cog:before,
.fa-users-gear:before {
  content: "\\f509";
}

.fa-person-military-pointing:before {
  content: "\\e54a";
}

.fa-bank:before,
.fa-building-columns:before,
.fa-institution:before,
.fa-museum:before,
.fa-university:before {
  content: "\\f19c";
}

.fa-umbrella:before {
  content: "\\f0e9";
}

.fa-trowel:before {
  content: "\\e589";
}

.fa-d:before {
  content: "D";
}

.fa-stapler:before {
  content: "\\e5af";
}

.fa-masks-theater:before,
.fa-theater-masks:before {
  content: "\\f630";
}

.fa-kip-sign:before {
  content: "\\e1c4";
}

.fa-hand-point-left:before {
  content: "\\f0a5";
}

.fa-handshake-alt:before,
.fa-handshake-simple:before {
  content: "\\f4c6";
}

.fa-fighter-jet:before,
.fa-jet-fighter:before {
  content: "\\f0fb";
}

.fa-share-alt-square:before,
.fa-square-share-nodes:before {
  content: "\\f1e1";
}

.fa-barcode:before {
  content: "\\f02a";
}

.fa-plus-minus:before {
  content: "\\e43c";
}

.fa-video-camera:before,
.fa-video:before {
  content: "\\f03d";
}

.fa-graduation-cap:before,
.fa-mortar-board:before {
  content: "\\f19d";
}

.fa-hand-holding-medical:before {
  content: "\\e05c";
}

.fa-person-circle-check:before {
  content: "\\e53e";
}

.fa-level-up-alt:before,
.fa-turn-up:before {
  content: "\\f3bf";
}

.fa-sr-only,
.fa-sr-only-focusable:not(:focus),
.sr-only,
.sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

:host,
:root {
  --fa-style-family-brands: "Font Awesome 6 Brands";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

@font-face {
  font-family: "Font Awesome 6 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_66___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_67___}) format("truetype");
}
.fa-brands,
.fab {
  font-weight: 400;
}

.fa-monero:before {
  content: "\\f3d0";
}

.fa-hooli:before {
  content: "\\f427";
}

.fa-yelp:before {
  content: "\\f1e9";
}

.fa-cc-visa:before {
  content: "\\f1f0";
}

.fa-lastfm:before {
  content: "\\f202";
}

.fa-shopware:before {
  content: "\\f5b5";
}

.fa-creative-commons-nc:before {
  content: "\\f4e8";
}

.fa-aws:before {
  content: "\\f375";
}

.fa-redhat:before {
  content: "\\f7bc";
}

.fa-yoast:before {
  content: "\\f2b1";
}

.fa-cloudflare:before {
  content: "\\e07d";
}

.fa-ups:before {
  content: "\\f7e0";
}

.fa-pixiv:before {
  content: "\\e640";
}

.fa-wpexplorer:before {
  content: "\\f2de";
}

.fa-dyalog:before {
  content: "\\f399";
}

.fa-bity:before {
  content: "\\f37a";
}

.fa-stackpath:before {
  content: "\\f842";
}

.fa-buysellads:before {
  content: "\\f20d";
}

.fa-first-order:before {
  content: "\\f2b0";
}

.fa-modx:before {
  content: "\\f285";
}

.fa-guilded:before {
  content: "\\e07e";
}

.fa-vnv:before {
  content: "\\f40b";
}

.fa-js-square:before,
.fa-square-js:before {
  content: "\\f3b9";
}

.fa-microsoft:before {
  content: "\\f3ca";
}

.fa-qq:before {
  content: "\\f1d6";
}

.fa-orcid:before {
  content: "\\f8d2";
}

.fa-java:before {
  content: "\\f4e4";
}

.fa-invision:before {
  content: "\\f7b0";
}

.fa-creative-commons-pd-alt:before {
  content: "\\f4ed";
}

.fa-centercode:before {
  content: "\\f380";
}

.fa-glide-g:before {
  content: "\\f2a6";
}

.fa-drupal:before {
  content: "\\f1a9";
}

.fa-hire-a-helper:before {
  content: "\\f3b0";
}

.fa-creative-commons-by:before {
  content: "\\f4e7";
}

.fa-unity:before {
  content: "\\e049";
}

.fa-whmcs:before {
  content: "\\f40d";
}

.fa-rocketchat:before {
  content: "\\f3e8";
}

.fa-vk:before {
  content: "\\f189";
}

.fa-untappd:before {
  content: "\\f405";
}

.fa-mailchimp:before {
  content: "\\f59e";
}

.fa-css3-alt:before {
  content: "\\f38b";
}

.fa-reddit-square:before,
.fa-square-reddit:before {
  content: "\\f1a2";
}

.fa-vimeo-v:before {
  content: "\\f27d";
}

.fa-contao:before {
  content: "\\f26d";
}

.fa-square-font-awesome:before {
  content: "\\e5ad";
}

.fa-deskpro:before {
  content: "\\f38f";
}

.fa-brave:before {
  content: "\\e63c";
}

.fa-sistrix:before {
  content: "\\f3ee";
}

.fa-instagram-square:before,
.fa-square-instagram:before {
  content: "\\e055";
}

.fa-battle-net:before {
  content: "\\f835";
}

.fa-the-red-yeti:before {
  content: "\\f69d";
}

.fa-hacker-news-square:before,
.fa-square-hacker-news:before {
  content: "\\f3af";
}

.fa-edge:before {
  content: "\\f282";
}

.fa-threads:before {
  content: "\\e618";
}

.fa-napster:before {
  content: "\\f3d2";
}

.fa-snapchat-square:before,
.fa-square-snapchat:before {
  content: "\\f2ad";
}

.fa-google-plus-g:before {
  content: "\\f0d5";
}

.fa-artstation:before {
  content: "\\f77a";
}

.fa-markdown:before {
  content: "\\f60f";
}

.fa-sourcetree:before {
  content: "\\f7d3";
}

.fa-google-plus:before {
  content: "\\f2b3";
}

.fa-diaspora:before {
  content: "\\f791";
}

.fa-foursquare:before {
  content: "\\f180";
}

.fa-stack-overflow:before {
  content: "\\f16c";
}

.fa-github-alt:before {
  content: "\\f113";
}

.fa-phoenix-squadron:before {
  content: "\\f511";
}

.fa-pagelines:before {
  content: "\\f18c";
}

.fa-algolia:before {
  content: "\\f36c";
}

.fa-red-river:before {
  content: "\\f3e3";
}

.fa-creative-commons-sa:before {
  content: "\\f4ef";
}

.fa-safari:before {
  content: "\\f267";
}

.fa-google:before {
  content: "\\f1a0";
}

.fa-font-awesome-alt:before,
.fa-square-font-awesome-stroke:before {
  content: "\\f35c";
}

.fa-atlassian:before {
  content: "\\f77b";
}

.fa-linkedin-in:before {
  content: "\\f0e1";
}

.fa-digital-ocean:before {
  content: "\\f391";
}

.fa-nimblr:before {
  content: "\\f5a8";
}

.fa-chromecast:before {
  content: "\\f838";
}

.fa-evernote:before {
  content: "\\f839";
}

.fa-hacker-news:before {
  content: "\\f1d4";
}

.fa-creative-commons-sampling:before {
  content: "\\f4f0";
}

.fa-adversal:before {
  content: "\\f36a";
}

.fa-creative-commons:before {
  content: "\\f25e";
}

.fa-watchman-monitoring:before {
  content: "\\e087";
}

.fa-fonticons:before {
  content: "\\f280";
}

.fa-weixin:before {
  content: "\\f1d7";
}

.fa-shirtsinbulk:before {
  content: "\\f214";
}

.fa-codepen:before {
  content: "\\f1cb";
}

.fa-git-alt:before {
  content: "\\f841";
}

.fa-lyft:before {
  content: "\\f3c3";
}

.fa-rev:before {
  content: "\\f5b2";
}

.fa-windows:before {
  content: "\\f17a";
}

.fa-wizards-of-the-coast:before {
  content: "\\f730";
}

.fa-square-viadeo:before,
.fa-viadeo-square:before {
  content: "\\f2aa";
}

.fa-meetup:before {
  content: "\\f2e0";
}

.fa-centos:before {
  content: "\\f789";
}

.fa-adn:before {
  content: "\\f170";
}

.fa-cloudsmith:before {
  content: "\\f384";
}

.fa-opensuse:before {
  content: "\\e62b";
}

.fa-pied-piper-alt:before {
  content: "\\f1a8";
}

.fa-dribbble-square:before,
.fa-square-dribbble:before {
  content: "\\f397";
}

.fa-codiepie:before {
  content: "\\f284";
}

.fa-node:before {
  content: "\\f419";
}

.fa-mix:before {
  content: "\\f3cb";
}

.fa-steam:before {
  content: "\\f1b6";
}

.fa-cc-apple-pay:before {
  content: "\\f416";
}

.fa-scribd:before {
  content: "\\f28a";
}

.fa-debian:before {
  content: "\\e60b";
}

.fa-openid:before {
  content: "\\f19b";
}

.fa-instalod:before {
  content: "\\e081";
}

.fa-expeditedssl:before {
  content: "\\f23e";
}

.fa-sellcast:before {
  content: "\\f2da";
}

.fa-square-twitter:before,
.fa-twitter-square:before {
  content: "\\f081";
}

.fa-r-project:before {
  content: "\\f4f7";
}

.fa-delicious:before {
  content: "\\f1a5";
}

.fa-freebsd:before {
  content: "\\f3a4";
}

.fa-vuejs:before {
  content: "\\f41f";
}

.fa-accusoft:before {
  content: "\\f369";
}

.fa-ioxhost:before {
  content: "\\f208";
}

.fa-fonticons-fi:before {
  content: "\\f3a2";
}

.fa-app-store:before {
  content: "\\f36f";
}

.fa-cc-mastercard:before {
  content: "\\f1f1";
}

.fa-itunes-note:before {
  content: "\\f3b5";
}

.fa-golang:before {
  content: "\\e40f";
}

.fa-kickstarter:before {
  content: "\\f3bb";
}

.fa-grav:before {
  content: "\\f2d6";
}

.fa-weibo:before {
  content: "\\f18a";
}

.fa-uncharted:before {
  content: "\\e084";
}

.fa-firstdraft:before {
  content: "\\f3a1";
}

.fa-square-youtube:before,
.fa-youtube-square:before {
  content: "\\f431";
}

.fa-wikipedia-w:before {
  content: "\\f266";
}

.fa-rendact:before,
.fa-wpressr:before {
  content: "\\f3e4";
}

.fa-angellist:before {
  content: "\\f209";
}

.fa-galactic-republic:before {
  content: "\\f50c";
}

.fa-nfc-directional:before {
  content: "\\e530";
}

.fa-skype:before {
  content: "\\f17e";
}

.fa-joget:before {
  content: "\\f3b7";
}

.fa-fedora:before {
  content: "\\f798";
}

.fa-stripe-s:before {
  content: "\\f42a";
}

.fa-meta:before {
  content: "\\e49b";
}

.fa-laravel:before {
  content: "\\f3bd";
}

.fa-hotjar:before {
  content: "\\f3b1";
}

.fa-bluetooth-b:before {
  content: "\\f294";
}

.fa-square-letterboxd:before {
  content: "\\e62e";
}

.fa-sticker-mule:before {
  content: "\\f3f7";
}

.fa-creative-commons-zero:before {
  content: "\\f4f3";
}

.fa-hips:before {
  content: "\\f452";
}

.fa-behance:before {
  content: "\\f1b4";
}

.fa-reddit:before {
  content: "\\f1a1";
}

.fa-discord:before {
  content: "\\f392";
}

.fa-chrome:before {
  content: "\\f268";
}

.fa-app-store-ios:before {
  content: "\\f370";
}

.fa-cc-discover:before {
  content: "\\f1f2";
}

.fa-wpbeginner:before {
  content: "\\f297";
}

.fa-confluence:before {
  content: "\\f78d";
}

.fa-shoelace:before {
  content: "\\e60c";
}

.fa-mdb:before {
  content: "\\f8ca";
}

.fa-dochub:before {
  content: "\\f394";
}

.fa-accessible-icon:before {
  content: "\\f368";
}

.fa-ebay:before {
  content: "\\f4f4";
}

.fa-amazon:before {
  content: "\\f270";
}

.fa-unsplash:before {
  content: "\\e07c";
}

.fa-yarn:before {
  content: "\\f7e3";
}

.fa-square-steam:before,
.fa-steam-square:before {
  content: "\\f1b7";
}

.fa-500px:before {
  content: "\\f26e";
}

.fa-square-vimeo:before,
.fa-vimeo-square:before {
  content: "\\f194";
}

.fa-asymmetrik:before {
  content: "\\f372";
}

.fa-font-awesome-flag:before,
.fa-font-awesome-logo-full:before,
.fa-font-awesome:before {
  content: "\\f2b4";
}

.fa-gratipay:before {
  content: "\\f184";
}

.fa-apple:before {
  content: "\\f179";
}

.fa-hive:before {
  content: "\\e07f";
}

.fa-gitkraken:before {
  content: "\\f3a6";
}

.fa-keybase:before {
  content: "\\f4f5";
}

.fa-apple-pay:before {
  content: "\\f415";
}

.fa-padlet:before {
  content: "\\e4a0";
}

.fa-amazon-pay:before {
  content: "\\f42c";
}

.fa-github-square:before,
.fa-square-github:before {
  content: "\\f092";
}

.fa-stumbleupon:before {
  content: "\\f1a4";
}

.fa-fedex:before {
  content: "\\f797";
}

.fa-phoenix-framework:before {
  content: "\\f3dc";
}

.fa-shopify:before {
  content: "\\e057";
}

.fa-neos:before {
  content: "\\f612";
}

.fa-square-threads:before {
  content: "\\e619";
}

.fa-hackerrank:before {
  content: "\\f5f7";
}

.fa-researchgate:before {
  content: "\\f4f8";
}

.fa-swift:before {
  content: "\\f8e1";
}

.fa-angular:before {
  content: "\\f420";
}

.fa-speakap:before {
  content: "\\f3f3";
}

.fa-angrycreative:before {
  content: "\\f36e";
}

.fa-y-combinator:before {
  content: "\\f23b";
}

.fa-empire:before {
  content: "\\f1d1";
}

.fa-envira:before {
  content: "\\f299";
}

.fa-google-scholar:before {
  content: "\\e63b";
}

.fa-gitlab-square:before,
.fa-square-gitlab:before {
  content: "\\e5ae";
}

.fa-studiovinari:before {
  content: "\\f3f8";
}

.fa-pied-piper:before {
  content: "\\f2ae";
}

.fa-wordpress:before {
  content: "\\f19a";
}

.fa-product-hunt:before {
  content: "\\f288";
}

.fa-firefox:before {
  content: "\\f269";
}

.fa-linode:before {
  content: "\\f2b8";
}

.fa-goodreads:before {
  content: "\\f3a8";
}

.fa-odnoklassniki-square:before,
.fa-square-odnoklassniki:before {
  content: "\\f264";
}

.fa-jsfiddle:before {
  content: "\\f1cc";
}

.fa-sith:before {
  content: "\\f512";
}

.fa-themeisle:before {
  content: "\\f2b2";
}

.fa-page4:before {
  content: "\\f3d7";
}

.fa-hashnode:before {
  content: "\\e499";
}

.fa-react:before {
  content: "\\f41b";
}

.fa-cc-paypal:before {
  content: "\\f1f4";
}

.fa-squarespace:before {
  content: "\\f5be";
}

.fa-cc-stripe:before {
  content: "\\f1f5";
}

.fa-creative-commons-share:before {
  content: "\\f4f2";
}

.fa-bitcoin:before {
  content: "\\f379";
}

.fa-keycdn:before {
  content: "\\f3ba";
}

.fa-opera:before {
  content: "\\f26a";
}

.fa-itch-io:before {
  content: "\\f83a";
}

.fa-umbraco:before {
  content: "\\f8e8";
}

.fa-galactic-senate:before {
  content: "\\f50d";
}

.fa-ubuntu:before {
  content: "\\f7df";
}

.fa-draft2digital:before {
  content: "\\f396";
}

.fa-stripe:before {
  content: "\\f429";
}

.fa-houzz:before {
  content: "\\f27c";
}

.fa-gg:before {
  content: "\\f260";
}

.fa-dhl:before {
  content: "\\f790";
}

.fa-pinterest-square:before,
.fa-square-pinterest:before {
  content: "\\f0d3";
}

.fa-xing:before {
  content: "\\f168";
}

.fa-blackberry:before {
  content: "\\f37b";
}

.fa-creative-commons-pd:before {
  content: "\\f4ec";
}

.fa-playstation:before {
  content: "\\f3df";
}

.fa-quinscape:before {
  content: "\\f459";
}

.fa-less:before {
  content: "\\f41d";
}

.fa-blogger-b:before {
  content: "\\f37d";
}

.fa-opencart:before {
  content: "\\f23d";
}

.fa-vine:before {
  content: "\\f1ca";
}

.fa-signal-messenger:before {
  content: "\\e663";
}

.fa-paypal:before {
  content: "\\f1ed";
}

.fa-gitlab:before {
  content: "\\f296";
}

.fa-typo3:before {
  content: "\\f42b";
}

.fa-reddit-alien:before {
  content: "\\f281";
}

.fa-yahoo:before {
  content: "\\f19e";
}

.fa-dailymotion:before {
  content: "\\e052";
}

.fa-affiliatetheme:before {
  content: "\\f36b";
}

.fa-pied-piper-pp:before {
  content: "\\f1a7";
}

.fa-bootstrap:before {
  content: "\\f836";
}

.fa-odnoklassniki:before {
  content: "\\f263";
}

.fa-nfc-symbol:before {
  content: "\\e531";
}

.fa-mintbit:before {
  content: "\\e62f";
}

.fa-ethereum:before {
  content: "\\f42e";
}

.fa-speaker-deck:before {
  content: "\\f83c";
}

.fa-creative-commons-nc-eu:before {
  content: "\\f4e9";
}

.fa-patreon:before {
  content: "\\f3d9";
}

.fa-avianex:before {
  content: "\\f374";
}

.fa-ello:before {
  content: "\\f5f1";
}

.fa-gofore:before {
  content: "\\f3a7";
}

.fa-bimobject:before {
  content: "\\f378";
}

.fa-brave-reverse:before {
  content: "\\e63d";
}

.fa-facebook-f:before {
  content: "\\f39e";
}

.fa-google-plus-square:before,
.fa-square-google-plus:before {
  content: "\\f0d4";
}

.fa-mandalorian:before {
  content: "\\f50f";
}

.fa-first-order-alt:before {
  content: "\\f50a";
}

.fa-osi:before {
  content: "\\f41a";
}

.fa-google-wallet:before {
  content: "\\f1ee";
}

.fa-d-and-d-beyond:before {
  content: "\\f6ca";
}

.fa-periscope:before {
  content: "\\f3da";
}

.fa-fulcrum:before {
  content: "\\f50b";
}

.fa-cloudscale:before {
  content: "\\f383";
}

.fa-forumbee:before {
  content: "\\f211";
}

.fa-mizuni:before {
  content: "\\f3cc";
}

.fa-schlix:before {
  content: "\\f3ea";
}

.fa-square-xing:before,
.fa-xing-square:before {
  content: "\\f169";
}

.fa-bandcamp:before {
  content: "\\f2d5";
}

.fa-wpforms:before {
  content: "\\f298";
}

.fa-cloudversify:before {
  content: "\\f385";
}

.fa-usps:before {
  content: "\\f7e1";
}

.fa-megaport:before {
  content: "\\f5a3";
}

.fa-magento:before {
  content: "\\f3c4";
}

.fa-spotify:before {
  content: "\\f1bc";
}

.fa-optin-monster:before {
  content: "\\f23c";
}

.fa-fly:before {
  content: "\\f417";
}

.fa-aviato:before {
  content: "\\f421";
}

.fa-itunes:before {
  content: "\\f3b4";
}

.fa-cuttlefish:before {
  content: "\\f38c";
}

.fa-blogger:before {
  content: "\\f37c";
}

.fa-flickr:before {
  content: "\\f16e";
}

.fa-viber:before {
  content: "\\f409";
}

.fa-soundcloud:before {
  content: "\\f1be";
}

.fa-digg:before {
  content: "\\f1a6";
}

.fa-tencent-weibo:before {
  content: "\\f1d5";
}

.fa-letterboxd:before {
  content: "\\e62d";
}

.fa-symfony:before {
  content: "\\f83d";
}

.fa-maxcdn:before {
  content: "\\f136";
}

.fa-etsy:before {
  content: "\\f2d7";
}

.fa-facebook-messenger:before {
  content: "\\f39f";
}

.fa-audible:before {
  content: "\\f373";
}

.fa-think-peaks:before {
  content: "\\f731";
}

.fa-bilibili:before {
  content: "\\e3d9";
}

.fa-erlang:before {
  content: "\\f39d";
}

.fa-x-twitter:before {
  content: "\\e61b";
}

.fa-cotton-bureau:before {
  content: "\\f89e";
}

.fa-dashcube:before {
  content: "\\f210";
}

.fa-42-group:before,
.fa-innosoft:before {
  content: "\\e080";
}

.fa-stack-exchange:before {
  content: "\\f18d";
}

.fa-elementor:before {
  content: "\\f430";
}

.fa-pied-piper-square:before,
.fa-square-pied-piper:before {
  content: "\\e01e";
}

.fa-creative-commons-nd:before {
  content: "\\f4eb";
}

.fa-palfed:before {
  content: "\\f3d8";
}

.fa-superpowers:before {
  content: "\\f2dd";
}

.fa-resolving:before {
  content: "\\f3e7";
}

.fa-xbox:before {
  content: "\\f412";
}

.fa-searchengin:before {
  content: "\\f3eb";
}

.fa-tiktok:before {
  content: "\\e07b";
}

.fa-facebook-square:before,
.fa-square-facebook:before {
  content: "\\f082";
}

.fa-renren:before {
  content: "\\f18b";
}

.fa-linux:before {
  content: "\\f17c";
}

.fa-glide:before {
  content: "\\f2a5";
}

.fa-linkedin:before {
  content: "\\f08c";
}

.fa-hubspot:before {
  content: "\\f3b2";
}

.fa-deploydog:before {
  content: "\\f38e";
}

.fa-twitch:before {
  content: "\\f1e8";
}

.fa-ravelry:before {
  content: "\\f2d9";
}

.fa-mixer:before {
  content: "\\e056";
}

.fa-lastfm-square:before,
.fa-square-lastfm:before {
  content: "\\f203";
}

.fa-vimeo:before {
  content: "\\f40a";
}

.fa-mendeley:before {
  content: "\\f7b3";
}

.fa-uniregistry:before {
  content: "\\f404";
}

.fa-figma:before {
  content: "\\f799";
}

.fa-creative-commons-remix:before {
  content: "\\f4ee";
}

.fa-cc-amazon-pay:before {
  content: "\\f42d";
}

.fa-dropbox:before {
  content: "\\f16b";
}

.fa-instagram:before {
  content: "\\f16d";
}

.fa-cmplid:before {
  content: "\\e360";
}

.fa-upwork:before {
  content: "\\e641";
}

.fa-facebook:before {
  content: "\\f09a";
}

.fa-gripfire:before {
  content: "\\f3ac";
}

.fa-jedi-order:before {
  content: "\\f50e";
}

.fa-uikit:before {
  content: "\\f403";
}

.fa-fort-awesome-alt:before {
  content: "\\f3a3";
}

.fa-phabricator:before {
  content: "\\f3db";
}

.fa-ussunnah:before {
  content: "\\f407";
}

.fa-earlybirds:before {
  content: "\\f39a";
}

.fa-trade-federation:before {
  content: "\\f513";
}

.fa-autoprefixer:before {
  content: "\\f41c";
}

.fa-whatsapp:before {
  content: "\\f232";
}

.fa-slideshare:before {
  content: "\\f1e7";
}

.fa-google-play:before {
  content: "\\f3ab";
}

.fa-viadeo:before {
  content: "\\f2a9";
}

.fa-line:before {
  content: "\\f3c0";
}

.fa-google-drive:before {
  content: "\\f3aa";
}

.fa-servicestack:before {
  content: "\\f3ec";
}

.fa-simplybuilt:before {
  content: "\\f215";
}

.fa-bitbucket:before {
  content: "\\f171";
}

.fa-imdb:before {
  content: "\\f2d8";
}

.fa-deezer:before {
  content: "\\e077";
}

.fa-raspberry-pi:before {
  content: "\\f7bb";
}

.fa-jira:before {
  content: "\\f7b1";
}

.fa-docker:before {
  content: "\\f395";
}

.fa-screenpal:before {
  content: "\\e570";
}

.fa-bluetooth:before {
  content: "\\f293";
}

.fa-gitter:before {
  content: "\\f426";
}

.fa-d-and-d:before {
  content: "\\f38d";
}

.fa-microblog:before {
  content: "\\e01a";
}

.fa-cc-diners-club:before {
  content: "\\f24c";
}

.fa-gg-circle:before {
  content: "\\f261";
}

.fa-pied-piper-hat:before {
  content: "\\f4e5";
}

.fa-kickstarter-k:before {
  content: "\\f3bc";
}

.fa-yandex:before {
  content: "\\f413";
}

.fa-readme:before {
  content: "\\f4d5";
}

.fa-html5:before {
  content: "\\f13b";
}

.fa-sellsy:before {
  content: "\\f213";
}

.fa-sass:before {
  content: "\\f41e";
}

.fa-wirsindhandwerk:before,
.fa-wsh:before {
  content: "\\e2d0";
}

.fa-buromobelexperte:before {
  content: "\\f37f";
}

.fa-salesforce:before {
  content: "\\f83b";
}

.fa-octopus-deploy:before {
  content: "\\e082";
}

.fa-medapps:before {
  content: "\\f3c6";
}

.fa-ns8:before {
  content: "\\f3d5";
}

.fa-pinterest-p:before {
  content: "\\f231";
}

.fa-apper:before {
  content: "\\f371";
}

.fa-fort-awesome:before {
  content: "\\f286";
}

.fa-waze:before {
  content: "\\f83f";
}

.fa-cc-jcb:before {
  content: "\\f24b";
}

.fa-snapchat-ghost:before,
.fa-snapchat:before {
  content: "\\f2ab";
}

.fa-fantasy-flight-games:before {
  content: "\\f6dc";
}

.fa-rust:before {
  content: "\\e07a";
}

.fa-wix:before {
  content: "\\f5cf";
}

.fa-behance-square:before,
.fa-square-behance:before {
  content: "\\f1b5";
}

.fa-supple:before {
  content: "\\f3f9";
}

.fa-webflow:before {
  content: "\\e65c";
}

.fa-rebel:before {
  content: "\\f1d0";
}

.fa-css3:before {
  content: "\\f13c";
}

.fa-staylinked:before {
  content: "\\f3f5";
}

.fa-kaggle:before {
  content: "\\f5fa";
}

.fa-space-awesome:before {
  content: "\\e5ac";
}

.fa-deviantart:before {
  content: "\\f1bd";
}

.fa-cpanel:before {
  content: "\\f388";
}

.fa-goodreads-g:before {
  content: "\\f3a9";
}

.fa-git-square:before,
.fa-square-git:before {
  content: "\\f1d2";
}

.fa-square-tumblr:before,
.fa-tumblr-square:before {
  content: "\\f174";
}

.fa-trello:before {
  content: "\\f181";
}

.fa-creative-commons-nc-jp:before {
  content: "\\f4ea";
}

.fa-get-pocket:before {
  content: "\\f265";
}

.fa-perbyte:before {
  content: "\\e083";
}

.fa-grunt:before {
  content: "\\f3ad";
}

.fa-weebly:before {
  content: "\\f5cc";
}

.fa-connectdevelop:before {
  content: "\\f20e";
}

.fa-leanpub:before {
  content: "\\f212";
}

.fa-black-tie:before {
  content: "\\f27e";
}

.fa-themeco:before {
  content: "\\f5c6";
}

.fa-python:before {
  content: "\\f3e2";
}

.fa-android:before {
  content: "\\f17b";
}

.fa-bots:before {
  content: "\\e340";
}

.fa-free-code-camp:before {
  content: "\\f2c5";
}

.fa-hornbill:before {
  content: "\\f592";
}

.fa-js:before {
  content: "\\f3b8";
}

.fa-ideal:before {
  content: "\\e013";
}

.fa-git:before {
  content: "\\f1d3";
}

.fa-dev:before {
  content: "\\f6cc";
}

.fa-sketch:before {
  content: "\\f7c6";
}

.fa-yandex-international:before {
  content: "\\f414";
}

.fa-cc-amex:before {
  content: "\\f1f3";
}

.fa-uber:before {
  content: "\\f402";
}

.fa-github:before {
  content: "\\f09b";
}

.fa-php:before {
  content: "\\f457";
}

.fa-alipay:before {
  content: "\\f642";
}

.fa-youtube:before {
  content: "\\f167";
}

.fa-skyatlas:before {
  content: "\\f216";
}

.fa-firefox-browser:before {
  content: "\\e007";
}

.fa-replyd:before {
  content: "\\f3e6";
}

.fa-suse:before {
  content: "\\f7d6";
}

.fa-jenkins:before {
  content: "\\f3b6";
}

.fa-twitter:before {
  content: "\\f099";
}

.fa-rockrms:before {
  content: "\\f3e9";
}

.fa-pinterest:before {
  content: "\\f0d2";
}

.fa-buffer:before {
  content: "\\f837";
}

.fa-npm:before {
  content: "\\f3d4";
}

.fa-yammer:before {
  content: "\\f840";
}

.fa-btc:before {
  content: "\\f15a";
}

.fa-dribbble:before {
  content: "\\f17d";
}

.fa-stumbleupon-circle:before {
  content: "\\f1a3";
}

.fa-internet-explorer:before {
  content: "\\f26b";
}

.fa-stubber:before {
  content: "\\e5c7";
}

.fa-telegram-plane:before,
.fa-telegram:before {
  content: "\\f2c6";
}

.fa-old-republic:before {
  content: "\\f510";
}

.fa-odysee:before {
  content: "\\e5c6";
}

.fa-square-whatsapp:before,
.fa-whatsapp-square:before {
  content: "\\f40c";
}

.fa-node-js:before {
  content: "\\f3d3";
}

.fa-edge-legacy:before {
  content: "\\e078";
}

.fa-slack-hash:before,
.fa-slack:before {
  content: "\\f198";
}

.fa-medrt:before {
  content: "\\f3c8";
}

.fa-usb:before {
  content: "\\f287";
}

.fa-tumblr:before {
  content: "\\f173";
}

.fa-vaadin:before {
  content: "\\f408";
}

.fa-quora:before {
  content: "\\f2c4";
}

.fa-square-x-twitter:before {
  content: "\\e61a";
}

.fa-reacteurope:before {
  content: "\\f75d";
}

.fa-medium-m:before,
.fa-medium:before {
  content: "\\f23a";
}

.fa-amilia:before {
  content: "\\f36d";
}

.fa-mixcloud:before {
  content: "\\f289";
}

.fa-flipboard:before {
  content: "\\f44d";
}

.fa-viacoin:before {
  content: "\\f237";
}

.fa-critical-role:before {
  content: "\\f6c9";
}

.fa-sitrox:before {
  content: "\\e44a";
}

.fa-discourse:before {
  content: "\\f393";
}

.fa-joomla:before {
  content: "\\f1aa";
}

.fa-mastodon:before {
  content: "\\f4f6";
}

.fa-airbnb:before {
  content: "\\f834";
}

.fa-wolf-pack-battalion:before {
  content: "\\f514";
}

.fa-buy-n-large:before {
  content: "\\f8a6";
}

.fa-gulp:before {
  content: "\\f3ae";
}

.fa-creative-commons-sampling-plus:before {
  content: "\\f4f1";
}

.fa-strava:before {
  content: "\\f428";
}

.fa-ember:before {
  content: "\\f423";
}

.fa-canadian-maple-leaf:before {
  content: "\\f785";
}

.fa-teamspeak:before {
  content: "\\f4f9";
}

.fa-pushed:before {
  content: "\\f3e1";
}

.fa-wordpress-simple:before {
  content: "\\f411";
}

.fa-nutritionix:before {
  content: "\\f3d6";
}

.fa-wodu:before {
  content: "\\e088";
}

.fa-google-pay:before {
  content: "\\e079";
}

.fa-intercom:before {
  content: "\\f7af";
}

.fa-zhihu:before {
  content: "\\f63f";
}

.fa-korvue:before {
  content: "\\f42f";
}

.fa-pix:before {
  content: "\\e43a";
}

.fa-steam-symbol:before {
  content: "\\f3f6";
}

:host,
:root {
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
}

@font-face {
  font-family: "Font Awesome 6 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_68___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_69___}) format("truetype");
}
.fa-regular,
.far {
  font-weight: 400;
}

:host,
:root {
  --fa-style-family-classic: "Font Awesome 6 Free";
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
}

@font-face {
  font-family: "Font Awesome 6 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_70___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_71___}) format("truetype");
}
.fa-solid,
.fas {
  font-weight: 900;
}

@font-face {
  font-family: "Font Awesome 5 Brands";
  font-display: block;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_66___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_67___}) format("truetype");
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-display: block;
  font-weight: 900;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_70___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_71___}) format("truetype");
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-display: block;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_68___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_69___}) format("truetype");
}
@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_70___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_71___}) format("truetype");
}
@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_66___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_67___}) format("truetype");
}
@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_68___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_69___}) format("truetype");
  unicode-range: u+f003, u+f006, u+f014, u+f016-f017, u+f01a-f01b, u+f01d, u+f022, u+f03e, u+f044, u+f046, u+f05c-f05d, u+f06e, u+f070, u+f087-f088, u+f08a, u+f094, u+f096-f097, u+f09d, u+f0a0, u+f0a2, u+f0a4-f0a7, u+f0c5, u+f0c7, u+f0e5-f0e6, u+f0eb, u+f0f6-f0f8, u+f10c, u+f114-f115, u+f118-f11a, u+f11c-f11d, u+f133, u+f147, u+f14e, u+f150-f152, u+f185-f186, u+f18e, u+f190-f192, u+f196, u+f1c1-f1c9, u+f1d9, u+f1db, u+f1e3, u+f1ea, u+f1f7, u+f1f9, u+f20a, u+f247-f248, u+f24a, u+f24d, u+f255-f25b, u+f25d, u+f271-f274, u+f278, u+f27b, u+f28c, u+f28e, u+f29c, u+f2b5, u+f2b7, u+f2ba, u+f2bc, u+f2be, u+f2c0-f2c1, u+f2c3, u+f2d0, u+f2d2, u+f2d4, u+f2dc;
}
@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_72___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_73___}) format("truetype");
  unicode-range: u+f041, u+f047, u+f065-f066, u+f07d-f07e, u+f080, u+f08b, u+f08e, u+f090, u+f09a, u+f0ac, u+f0ae, u+f0b2, u+f0d0, u+f0d6, u+f0e4, u+f0ec, u+f10a-f10b, u+f123, u+f13e, u+f148-f149, u+f14c, u+f156, u+f15e, u+f160-f161, u+f163, u+f175-f178, u+f195, u+f1f8, u+f219, u+f27a;
}
.header {
  background-color: #474747;
  max-width: 80px;
  position: absolute;
  border-radius: 8px 0px 0px 8px;
  top: 0;
  left: 0;
  bottom: 0;
}
.header .header__top {
  z-index: 1000;
  height: 100%;
}
.header .btn__menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  box-shadow: 0 1px 0 0 transparent, inset 0 -1px 0 0 #3b3b3b;
}
.header .btn__menu svg {
  transition: all 0.3s;
}
.header .btn__menu:hover svg {
  fill: #171717;
  stroke: #171717;
}
.header .btn__menu:first-child:hover svg {
  fill: #323232;
  stroke: #323232;
}
.header .svg__logo {
  width: 40px;
  height: 40px;
}
.header .open__login .login__btn {
  background: #474747;
  position: relative;
  z-index: 550;
}
.header .open__login .login__btn .icon-login,
.header .open__login .login__btn .icon-login_m,
.header .open__login .login__btn .user-avatar,
.header .open__login .login__btn .admin-avatar {
  transform: scale(0.5, 0.5) !important;
  opacity: 0 !important;
  transition: all 0.2s ease-in-out;
}
.header .open__login .login__btn .btn__close {
  transform: scale(1, 1) !important;
  opacity: 1 !important;
  transition: all 0.2s ease-in-out;
}
.header .open__login .drop__panel {
  opacity: 1 !important;
  visibility: visible !important;
  z-index: 500 !important;
  transition: all 0.2s ease-in-out;
}
.header .login__panel .login__btn {
  cursor: pointer;
}
.header .login__panel .btn__menu:hover svg {
  fill: #171717;
  stroke: #171717;
}
.header .login__panel .login-panel {
  display: none;
}
.header .login__panel .login-panel .login-avatar {
  display: flex;
}
.header .login__panel .login-panel .login-avatar img {
  width: 100px;
  height: 100px;
  margin: 12px auto;
  border-radius: 50%;
  border: 5px #fff solid;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}
.header .login__panel .login-panel .login-name {
  font-family: "GothamPro-Bold";
  font-size: 1.2em;
  max-width: -moz-fit-content;
  max-width: fit-content;
  margin: 0 auto;
  transition: all 0.2s;
}
.header .login__panel .login-panel .login-name:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.header .login__panel .login-panel .login-menu {
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 25px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.header .login__panel .login-panel .login-menu a {
  padding: 14px 0px;
  color: rgb(255, 255, 255);
  opacity: 0.7;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}
.header .login__panel .login-panel .login-menu a:hover {
  opacity: 1;
}
.header .login__panel .login-panel .login-menu a i {
  margin-right: 10px;
}
.header .login__panel .login-panel .login-menu a b {
  font-family: "GothamPro-Bold";
}
.header .login__panel .login-panel .login-menu a .count-messages {
  position: absolute;
  right: 0;
}
.header .login__panel .login-panel .login-menu a .span-login {
  position: absolute;
  right: 0;
  font-family: "GothamPro-Bold";
}
.header .login__panel .login-panel .logout {
  max-width: -moz-fit-content;
  max-width: fit-content;
  margin: 0 auto;
  transition: all 0.2s;
}
.header .login__panel .login-panel .logout:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.header .login__panel .login-panel .logout i {
  margin-right: 4px;
}
.header .login__panel .drop__panel {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  margin-left: 80px;
  top: 80px;
  z-index: -2;
  background-color: #474747;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.4);
  color: #fff;
  width: 290px;
  padding: 25px;
  transition: all 0.2s ease-in-out;
}
.header .login__panel .drop__panel .social__links {
  display: flex;
  margin-bottom: 20px;
}
.header .login__panel .drop__panel .social__links a {
  margin-left: 10px;
  border-radius: 10%;
  padding: 4px;
  transition: all ease 0.2s;
}
.header .login__panel .drop__panel .social__links a:hover {
  transform: scale(1.2, 1.2);
}
.header .login__panel .drop__panel .social__links .social__yandex {
  max-height: 21px;
  min-width: 21px;
  background-color: #fff;
  color: #ff0202;
  text-align: center;
}
.header .login__panel .drop__panel .social__links .social__google {
  background-color: #db4a39;
  padding: 4px 6px;
  display: flex;
  margin-left: 12px;
  align-items: center;
}
.header .login__panel .drop__panel .social__links .social__google .icon-gp {
  fill: #fff;
  width: 18px;
  height: 1em;
}
.header .login__panel .drop__panel label {
  margin-bottom: 0.4em;
}
.header .login__panel .drop__panel input {
  margin-bottom: 20px;
  width: calc(100% - 32px);
  border-radius: 4px;
  line-height: 22px;
  background: rgba(52, 52, 52, 0.7490196078);
  border: 1px solid #313131;
  box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.06);
  padding: 8px 15px;
  color: #ccc;
}
.header .login__panel .drop__panel input::-moz-placeholder {
  opacity: 0.6;
}
.header .login__panel .drop__panel input:-ms-input-placeholder {
  opacity: 0.6;
}
.header .login__panel .drop__panel input::placeholder {
  opacity: 0.6;
}
.header .login__panel .drop__panel label,
.header .login__panel .drop__panel input {
  display: block;
}
.header .login__panel .drop__panel .form__footer {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.header .login__panel .drop__panel .form__footer a:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
  transition: all 0.3s;
}
.header .login__panel .drop__panel .form__footer .sign__up {
  font-family: "GothamPro-Bold" !important;
}
.header .icon-login {
  width: 34px;
  height: 38px;
  fill: #323232;
  stroke: #323232;
}
.header .icon-login_m {
  display: none;
  fill: #323232;
  stroke: #323232;
  width: 24px;
  height: 26px;
}
.header .user-avatar {
  display: none;
}
.header .admin-avatar {
  display: none;
}
.header .user-avatar,
.header .admin-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.header .btn__close {
  width: 40px;
  height: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  transform: scale(0.5, 0.5);
  opacity: 0;
  transition: all 0.2s ease-in;
}
.header .btn__close i {
  width: 100%;
  height: 3px;
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
}
.header .btn__close .line1 {
  transform: rotate(45deg);
}
.header .btn__close .line2 {
  transform: rotate(-45deg);
}
.header .btn__burger {
  padding: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  z-index: 300;
  background: #474747;
}
.header .btn__burger:hover .burger {
  opacity: 1;
}
.header .burger {
  position: relative;
  align-items: center;
  width: 40px;
  height: 40px;
  justify-content: center;
  display: flex;
  transition: all 0.3s;
  flex-direction: column;
  opacity: 0.4;
}
.header .burger.change {
  opacity: 1;
}
.header .burger.change .burger__line {
  background-color: transparent;
}
.header .burger.change .burger__line:before,
.header .burger.change .burger__line:after {
  top: 0;
  background-color: #fff;
}
.header .burger.change .burger__line:before {
  transform: rotate(-45deg);
}
.header .burger.change .burger__line:after {
  transform: rotate(45deg);
}
.header .burger__line {
  height: 3px;
  width: 100%;
  background-color: #1a1a1a;
  border-radius: 2px;
  transition: all 0.3s;
  position: absolute;
}
.header .burger__line:before,
.header .burger__line:after {
  height: 3px;
  width: 100%;
  content: "";
  background-color: #1a1a1a;
  border-radius: 2px;
  transition: all 0.3s;
  position: absolute;
}
.header .burger__line:before {
  top: -9px;
}
.header .burger__line:after {
  top: 9px;
}
.header .open__theme .btn__close {
  transform: scale(1, 1) !important;
  opacity: 1 !important;
  transition: all 0.2s ease-in-out;
}
.header .open__theme .icon-skin_ {
  transform: scale(0.5, 0.5) !important;
  opacity: 0 !important;
  transition: all 0.2s ease-in-out;
}
.header .open__theme .icon-skin_m {
  transform: scale(0.5, 0.5) !important;
  opacity: 0 !important;
  transition: all 0.2s ease-in-out;
}
.header .open__theme .themes__pop-up {
  visibility: visible !important;
  opacity: 1 !important;
  transform: translate(0, 0) scale(1) !important;
  transition: opacity 0.125s ease-in-out, transform 0.225s ease-in-out;
}
.header .header__themes {
  display: flex;
  align-items: center;
}
.header .header__themes .header__theme {
  z-index: 401;
  cursor: pointer;
}
.header .header__themes .themes__pop-up {
  position: absolute;
  opacity: 0;
  padding: 0;
  left: 80px;
  max-width: 60px;
  visibility: hidden;
  z-index: 400;
  list-style: none;
  transform: translate(-50%, 0) scale(0.7);
  transition: opacity 0.125s ease-in-out, visibility 0.125s ease-in-out, transform 0.225s ease-in-out;
}
.header .header__themes .themes__pop-up .active {
  cursor: default;
}
.header .header__themes .themes__pop-up .active a {
  pointer-events: none;
}
.header .header__themes .themes__pop-up .active span {
  box-shadow: inset 0 0 0 3px currentColor !important;
}
.header .header__themes .themes__pop-up .active span svg {
  opacity: 1;
}
.header .header__themes .themes__pop-up li {
  position: relative;
  margin-left: 20px;
  width: 38px;
  height: 38px;
  background-color: #3f4a5f;
  border-radius: 50%;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);
  padding: 3px;
  cursor: pointer;
}
.header .header__themes .themes__pop-up a {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .header__themes .themes__pop-up a:hover span {
  box-shadow: inset 0 0 0 6px currentColor !important;
}
.header .header__themes .themes__pop-up span {
  width: 24px;
  height: 24px;
  padding: 7px;
  border-radius: 50%;
  transition: box-shadow 0.2s ease;
}
.header .header__themes .themes__pop-up span svg {
  opacity: 0;
}
.header .header__themes .themes__pop-up .theme__green span {
  box-shadow: inset 0 0 0 8px #95ac7c;
  background-color: #f3f3f3;
  color: #95ac7c;
}
.header .header__themes .themes__pop-up .theme__dgreen span {
  box-shadow: inset 0 0 0 8px #95ac7c;
  background-color: #474747;
  color: #95ac7c;
}
.header .header__themes .themes__pop-up .theme__dblue span {
  box-shadow: inset 0 0 0 8px #6182b5;
  background-color: #374b69;
  color: #6182b5;
}
.header .header__themes .themes__pop-up .theme__amoled span {
  box-shadow: inset 0 0 0 8px #c58af9;
  background-color: #19191a;
  color: #c58af9;
}
.header .header__themes .themes__pop-up > li + li {
  margin-bottom: 4px;
}
.header .header__themes .themes__pop-up li:last-child,
.header .header__themes .themes__pop-up li:first-child {
  margin-left: 4px;
}
.header .header__themes .icon-skin_ {
  fill: #323232;
  height: 48px;
  width: 48px;
}
.header .header__themes .icon-skin_m {
  fill: #323232;
  height: 32px;
  width: 32px;
  display: none;
}
.header .header__upper {
  width: 80px;
  height: 80px;
  cursor: pointer;
  text-align: center;
  position: absolute;
  bottom: 0;
  z-index: 1001;
}
.header .header__upper svg {
  width: 20px;
  fill: #3b3a3a;
  height: 80px;
}
.header .header__upper:hover svg {
  fill: #a9a9a9;
  stroke: #a9a9a9;
}

.menu {
  opacity: 0;
  visibility: hidden;
  margin-left: 80px;
  padding: 0;
  position: absolute;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  width: 290px;
  background: #474747;
  background-color: #474747;
  transition: all 0.3s ease-in-out;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.menu form {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 0 rgba(0, 0, 0, 0.06);
}
.menu form .search__bar {
  height: 80px;
  width: 290px;
  line-height: 24px;
  border: 0;
  background: 0;
  color: #ccc !important;
  padding: 28px 68px 28px 25px;
  font-family: "GothamPro-Light";
  font-weight: 600;
  font-size: 14px;
}
.menu form .search__icon {
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.menu form .search__icon .icon {
  fill: #fff;
  opacity: 0.7;
  width: 18px;
  height: 18px;
}
.menu form .search__icon:hover .icon-search {
  opacity: 1;
  transition: opacity 0.3s;
}
.menu nav {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
}
.menu nav .active {
  opacity: 1 !important;
  cursor: default;
  font-family: "GothamPro-Bold" !important;
}
.menu nav .nav__link {
  padding: 10px 25px;
  font-family: "GothamPro-Light";
  font-weight: 600;
  color: #fff;
  opacity: 0.7;
}
.menu nav .nav__link i {
  margin-right: 10px;
}
.menu nav .nav__link:hover {
  opacity: 1;
  transition: all 0.3s;
}
.menu nav .nav__border {
  margin: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu.change {
  opacity: 1;
  visibility: visible;
  z-index: 200;
}

.menu.modify {
  max-height: calc(100% - 30px);
}

.authorized .icon-login,
.authorized .icon-login_m {
  display: none !important;
}
.authorized .user-avatar {
  display: block;
}
.authorized .admin .user-avatar {
  display: none;
}
.authorized .admin .admin-avatar {
  display: block;
}
.authorized .admin .admin-img {
  display: block !important;
}
.authorized .admin .avatar {
  display: none;
}
.authorized .login-panel {
  display: block !important;
}
.authorized .login-panel .admin-img {
  display: none;
}
.authorized .unauth {
  display: none;
}

@media (max-width: 1250px) {
  .authorized .user-avatar {
    width: 26px;
    height: 26px;
  }
  .authorized .admin .user-avatar {
    display: none;
  }
  .authorized .admin .admin-avatar {
    width: 26px;
    height: 26px;
  }
}
@media (max-width: 1250px) {
  .header {
    width: 60px;
  }
  .header .btn__menu {
    width: 60px;
    height: 60px;
  }
  .header .svg__logo {
    width: 1.8rem;
    height: 1.8rem;
  }
  .header .login__btn:hover .icon-login_m {
    fill: #171717;
    stroke: #171717;
  }
  .header .icon-login {
    display: none;
  }
  .header .icon-login_m {
    display: block;
  }
  .header .btn__close {
    width: 26px;
    height: 26px;
  }
  .header .drop__panel {
    margin-left: 60px !important;
    top: 60px !important;
    max-width: 240px;
  }
  .header .btn__burger {
    width: 26px;
    height: 26px;
    padding: 17px;
  }
  .header .burger {
    width: 26px;
    height: 26px;
  }
  .header .burger__line:before {
    top: -7px;
  }
  .header .burger__line:after {
    top: 7px;
  }
  .header .themes__pop-up {
    left: 60px !important;
  }
  .header .icon-skin_ {
    display: none;
  }
  .header .icon-skin_m {
    display: block !important;
  }
  .header .header__upper {
    width: 60px;
    height: 60px;
  }
  .header .header__upper svg {
    height: 60px;
    fill: #323232;
  }
  .menu {
    margin-left: 60px;
  }
  .menu input {
    height: 60px !important;
    padding: 18px 68px 18px 25px !important;
  }
  .menu.modify {
    max-height: calc(100% - 10px);
  }
}
@media (max-width: 800px) {
  .menu.modify {
    max-height: 100%;
  }
}
@media (max-width: 700px) {
  .header {
    border-radius: 0;
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    min-width: 100vw;
    height: 60px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  }
  .header .header__top {
    width: 100%;
    display: flex;
  }
  .header .header__top .btn__menu {
    box-shadow: none;
  }
  .header .header__top .drop__panel {
    margin-left: 0 !important;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 20px;
    background: #474747;
    min-width: calc(100% - 40px) !important;
    box-shadow: none;
  }
  .header .header__top .btn__burger {
    position: absolute;
    background-color: transparent;
    right: 0;
    z-index: 10000;
  }
  .header .header__top .open__theme .themes__pop-up {
    transform: translate(0, 30%) scale(1) !important;
  }
  .header .header__top .themes__pop-up {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50px;
    left: 120px !important;
    transform: translate(0, -50%) scale(0.7) !important;
  }
  .header .header__top .themes__pop-up li {
    margin-left: 0;
  }
  .header .header__top .themes__pop-up li:first-child, .header .header__top .themes__pop-up li:last-child {
    margin-top: -35px;
    z-index: 10000;
    position: relative;
  }
  .header .header__top menu input {
    padding-left: 20px;
  }
  .header .header__upper {
    display: none;
  }
  .header:before {
    content: "";
    min-width: 100%;
    top: 60px;
    position: absolute;
    z-index: 99999;
    height: 8px;
    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.14) 100%);
  }
  .menu {
    margin-left: 0;
    z-index: 900;
    position: fixed;
    top: 60px;
    box-shadow: none;
    min-width: 100% !important;
  }
}
.tab-content .genre,
.tab-content .language {
  padding: 10px 35px;
  padding-top: 15px;
  display: block;
  opacity: 0.7;
  border-bottom: 1px solid #3b3b3b;
  transition: all 0.3s;
}
.tab-content .genre:hover,
.tab-content .language:hover {
  opacity: 1;
}
.tab-content .genre h3,
.tab-content .language h3 {
  font-family: "GothamPro-Bold";
  letter-spacing: -0.01em;
  line-height: 1.35em;
  font-size: 1.1em;
}
.tab-content .genre p,
.tab-content .language p {
  font-size: 12px;
}
.tab-content .genre:last-child,
.tab-content .language:last-child {
  border-width: 0;
  margin-bottom: 16px;
}
.tab-content .title-stripes {
  opacity: 0.7;
}
.tab-content .language-description {
  padding: 10px 35px;
  color: #999;
  padding-top: 15px;
  border-bottom: 1px solid #3b3b3b;
}
.tab-content .language-description span {
  font-family: "GothamPro-Bold";
  letter-spacing: -0.01em;
  line-height: 1.35em;
  font-size: 1.1em;
}
.tab-content .language-description em {
  opacity: 1.1;
  display: block;
  text-align: right;
  font-size: 12px;
}
.tab-content .language-description:last-child {
  border-width: 0;
  margin-bottom: 16px;
}

@media (max-width: 1250px) {
  .genre,
  .language,
  .language-description {
    padding: 10px 30px !important;
    padding-top: 20px !important;
  }
}
@media (max-width: 700px) {
  .genre,
  .language,
  .language-description {
    padding: 10px 20px !important;
  }
}
.dotted-line {
  margin-top: 20px;
  border-bottom: 2px dashed #3b3b3b;
}

.tag {
  display: inline-block;
  margin-bottom: 3px;
  background-color: #606060;
  padding: 5px 10px;
  border-radius: 6px;
  transition: all 0.2s;
}
.tag:hover {
  background-color: #4e4d4d;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  color: #bebebe;
}

.tags-tabs {
  margin: 35px auto;
  display: flex;
  align-items: center;
  border: 1px solid #3b3b3b;
  border-radius: 15px;
  width: -moz-fit-content;
  width: fit-content;
  height: 28px;
  overflow: hidden;
}
.tags-tabs a {
  font-size: 11px;
  border-left: 1px solid #3b3b3b;
  font-family: "GothamPro-Bold";
  padding: 8px 12px;
  color: #999;
  line-height: 20px;
  text-align: center;
  transition: 0.2s color;
}
.tags-tabs a:first-child {
  border-width: 0;
}
.tags-tabs a:hover {
  color: #bdbdbd;
}
.tags-tabs .tags-active {
  color: #ccc;
  pointer-events: none;
}

.tags-aside-title {
  font-size: 1.2em;
  font-family: "GothamPro-Bold";
  letter-spacing: -0.01em;
  line-height: 1.35em;
  margin: 2em 0 0.8em;
}

@media (max-width: 1250px) {
  .tags-tabs {
    margin: 30px auto;
  }
}
@media (max-width: 700px) {
  .tags-tabs {
    margin: 20px auto;
  }
}
.contacts-title {
  font-size: 1.8em;
  margin-bottom: 0.8em;
  letter-spacing: -0.01em;
  line-height: 1.35em;
  font-family: "GothamPro-Bold";
}

.email-admin {
  display: flex;
  align-items: center;
  gap: 4px;
}
.email-admin svg {
  width: 16px;
  height: 14px;
  fill: #8a8a8a;
  vertical-align: middle;
}
.email-admin h3 {
  font-size: 14px;
}

.link-admin {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 10px 0 15px 0;
}
.link-admin i {
  color: #8a8a8a;
}
.link-admin a {
  color: #4a8bdb;
}
.link-admin a:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.contacts-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 35px;
  align-items: center;
  border-bottom: 2px dashed #3b3b3b;
}
.contacts-header h1 {
  font-size: 54px;
  line-height: 1.3;
  font-family: "GothamPro-Bold";
}
.contacts-header p {
  font-size: 16px;
}
.contacts-header .btn-container {
  text-align: right;
}

.questions {
  list-style: none;
}
.questions .answer-open a span {
  transform: rotate(45deg);
}
.questions .answer-open a span::after, .questions .answer-open a span:before {
  background-color: #d55c3b;
}
.questions .answer-open .answer {
  display: block;
}
.questions li {
  padding-left: 36px;
  padding: 16px 0 16px 36px;
  border-bottom: 1px solid #3b3b3b;
}
.questions li:last-child {
  border-width: 0;
}
.questions li a {
  cursor: pointer;
  line-height: 1.3;
  font-family: "GothamPro-Bold";
}
.questions li a span {
  cursor: pointer;
  position: absolute;
  margin-left: -36px;
  margin-top: -1px;
  width: 15px;
  height: 15px;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s ease;
}
.questions li a span::after {
  content: "";
  height: 3px;
  width: 15px;
  background-color: #95ac7c;
  position: absolute;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}
.questions li a span::before {
  content: "";
  height: 3px;
  width: 15px;
  transition: background-color 0.3s ease;
  background-color: #95ac7c;
  position: absolute;
  transform: rotate(90deg);
  border-radius: 2px;
}
.questions li .answer {
  display: none;
  margin-top: 6px;
}
.questions li .answer a {
  color: #4a8bdb;
  font-family: "GothamPro-Light";
  font-size: 14px;
  font-weight: 600;
}
.questions li .answer a:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.questions li .answer span {
  font-family: "GothamPro-Bold";
}

@media (max-width: 800px) {
  .contacts-title {
    font-size: 1.3em;
  }
  .contacts-header {
    padding: 20px;
  }
  .contacts-header h1 {
    font-size: 46px;
  }
}
@media (max-width: 700px) {
  .contacts-header {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
    gap: 15px;
  }
  .contacts-header .btn-container {
    text-align: center;
    margin-top: 10px;
  }
}
.rules {
  min-height: 1000px;
}
.rules h1 {
  font-size: 1.8em;
  margin-bottom: 0.8em;
  letter-spacing: -0.01em;
  line-height: 1.35em;
  font-family: "GothamPro-Bold";
}
.rules p {
  margin-bottom: 20px;
}
.rules p a {
  color: #4a8bdb;
}
.rules p a:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.rules h3 {
  margin-bottom: 20px;
  font-family: "GothamPro-Bold";
  font-size: 14px;
}
.rules .rules-list {
  margin-bottom: 20px;
}
.rules .rules-list p {
  margin-bottom: 0px;
}
.rules span {
  font-family: "GothamPro-Bold";
}

.btns-registration {
  justify-content: center;
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.reg-suc .registration-success {
  display: block !important;
}

.reg-fail .registration-failed {
  display: block !important;
}

.registration-result .registration-success,
.registration-result .registration-failed {
  background-color: #373737;
  border-radius: 4px;
  padding: 20px 25px;
}
.registration-result .registration-success {
  display: none;
}
.registration-result .registration-failed {
  display: none;
}

.registration h1 {
  font-size: 1.8em;
  margin-bottom: 0.8em;
  letter-spacing: -0.01em;
  line-height: 1.35em;
  font-family: "GothamPro-Bold";
}
.registration h3 {
  font-family: "GothamPro-Bold";
  margin-bottom: 25px;
  font-size: 14px;
}
.registration p {
  margin-bottom: 1.5em;
}
.registration p a {
  color: #4a8bdb;
}
.registration p a:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.registration form label {
  display: block;
  margin-bottom: 0.4em;
}
.registration form label:after {
  content: "*";
  margin-left: 10px;
  color: #e85319;
}
.registration form label span {
  font-size: 12px;
  color: #999;
}
.registration form input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
  line-height: 22px;
  background: rgba(52, 52, 52, 0.7490196078);
  border: 1px solid #313131;
  border-radius: 4px;
  box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.06);
  padding: 8px 15px;
  color: #ccc;
}
.registration form .registration-text div {
  display: block !important;
}
.registration form .registration-login {
  position: relative;
  margin-bottom: 20px;
}
.registration form .registration-login input {
  margin-bottom: 0px;
}
.registration form .registration-login .red {
  color: red;
}
.registration form .registration-login .green {
  color: green;
}
.registration form .registration-login div {
  margin-bottom: 0px;
  display: none;
  transition: all 0.2s;
}
.registration form #registration-login {
  padding-right: 120px;
}
.registration form #registration-email {
  margin-bottom: 30px;
}
.registration form .btn-check {
  position: absolute;
  cursor: pointer;
  right: 0;
  width: 100px;
  height: 30px;
  padding: 4px 10px;
  color: #95ac7c;
  font-family: "GothamPro-Bold";
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  background-color: #404040;
  border: 1px solid #383838;
  border-radius: 20px;
  line-height: 20px;
  margin: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
}
.registration form .submit-registration {
  cursor: pointer;
}
.registration em {
  font-size: 12px;
  color: #999;
}

@media (max-width: 800px) {
  h1 {
    font-size: 1.3em !important;
  }
}
* {
  margin: 0;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
}

body {
  background-color: #3b3a3a;
  font-family: "GothamPro-Light";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.012em;
  line-height: 1.5;
  color: #cccccc;
}
body .page {
  max-width: 1320px;
  margin: 0 auto;
  padding: 30px;
  overflow: hidden;
}
body .body {
  background-color: #474747;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.11), 0 0 35px 0 rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  position: relative;
}
body .fixed {
  position: fixed !important;
  top: 0;
  transition: all 0.4s ease-in;
}
body input {
  outline: none;
  font-size: 14px;
}
body [type=search]::-webkit-search-cancel-button,
body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}
body input:-webkit-autofill,
body input:-webkit-autofill:hover,
body input:-webkit-autofill:focus,
body textarea:-webkit-autofill,
body textarea:-webkit-autofill:hover,
body textarea:-webkit-autofill:focus,
body select:-webkit-autofill,
body select:-webkit-autofill:hover,
body select:-webkit-autofill:focus {
  border: 1px solid #313131;
  -webkit-text-fill-color: inherit;
  -webkit-background-color: rgba(70, 90, 126, 0.4) !important;
}
body input::-moz-placeholder {
  font-size: 14px;
  font-family: "GothamPro-Light";
  font-weight: 600;
  color: #b7b7b7;
}
body input:-ms-input-placeholder {
  font-size: 14px;
  font-family: "GothamPro-Light";
  font-weight: 600;
  color: #b7b7b7;
}
body input::placeholder {
  font-size: 14px;
  font-family: "GothamPro-Light";
  font-weight: 600;
  color: #b7b7b7;
}
body .page-title {
  font-size: 12px;
  border-bottom: 1px solid #3b3b3b;
  margin-left: 80px;
  color: rgba(125, 125, 125, 0.8392156863);
  border-left: 1px solid #3b3b3b;
  line-height: 22px;
  padding: 28.5px 35px;
}
body .page-title a {
  color: #bdbdbd;
}
body .page-title a:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
body main {
  border-left: solid #3b3b3b 1px;
  display: flex;
  margin-left: 80px;
}
body .content {
  width: 67.74%;
  border-right: 1px solid #3b3b3b;
}
body .content .notifications {
  position: fixed;
  display: grid;
  right: 10px;
  top: 20px;
  z-index: 9999999;
}
body .content .notifications .notification {
  transform: translateX(-560px);
  position: relative;
  max-width: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
  gap: 20px;
  animation: showNotifications 0.5s ease forwards;
  background-color: #313131;
  padding: 11px 15px 9px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px 0 15px 15px;
  margin-top: 12px;
  border-radius: 15px 0 15px 15px;
}
body .content .notifications .notification i:before {
  font-size: 1.3em;
  color: #95ac7c;
}
body .content .notifications .notification .notification-text {
  margin-bottom: 10px;
  opacity: 0.8;
}
body .content .notifications .notification .notification-text h3 {
  font-size: 13px;
  margin-bottom: 5px !important;
}
body .content .notifications .notification .notification-text p {
  margin-bottom: 0 !important;
  font-size: 14px;
}
body .content .notifications .notification .line-on-time {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  animation: timer 10s linear;
  height: 3px;
  background-color: #95ac7c;
  box-sizing: border-box;
}
body .content .notifications .notification a {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes showNotifications {
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateX(530px);
  }
  40% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100px);
    transform: translateX(-10px);
  }
}
@keyframes timer {
  to {
    width: 0%;
  }
}
@keyframes closeNotifications {
  0% {
    transform: translateX(-30px);
  }
  40% {
    transform: translateX(30px);
  }
  60% {
    transform: translateX(450px);
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
    display: none;
  }
}
body .footer {
  display: flex;
  justify-content: space-between;
  border-left: 1px solid #3b3b3b;
  margin-left: 80px;
  padding: 30px 50px;
  background-color: #474747;
  border-top: 1px solid #3b3b3b;
  border-radius: 0px 0px 8px 0px;
  font-size: 12px;
  color: #999;
}
body .footer span {
  font-family: "GothamPro-Black";
  font-weight: 700;
}
body .footer a:hover {
  color: #212121;
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
body .btn {
  font-family: "GothamPro-Bold";
  border-radius: 20px;
  padding: 10px 15px;
  text-transform: uppercase;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);
  background-image: -webkit-linear-gradient(top, #626262 0%, #626262 100%);
  background-color: #626262;
  text-align: center;
  outline: none;
  border-width: 0;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
}
body .btn:hover {
  background-color: #5d5c5c;
  background-image: -webkit-linear-gradient(top, #5d5c5c 0%, #818181 100%);
  transition: all 0.3s ease-in-out;
}
body .block {
  margin: 35px 0;
  padding: 0 35px;
}

@media (max-width: 1250px) {
  .page {
    padding: 10px !important;
  }
  .page-title {
    margin-left: 60px !important;
    padding: 18.5px 30px !important;
  }
  main {
    margin-left: 60px !important;
  }
  .footer {
    margin-left: 60px !important;
    padding: 30px 30px !important;
  }
  .block {
    margin: 30px 0 !important;
    padding: 0 30px !important;
  }
}
@media (max-width: 1001px) {
  .content {
    width: 100% !important;
    border-width: 0 !important;
  }
}
@media (max-width: 800px) {
  .page {
    padding: 0 !important;
  }
}
@media (max-width: 700px) {
  .page-title {
    margin-left: 0 !important;
    padding: 20px 20px !important;
  }
  main {
    border-left: none !important;
    display: flex !important;
    margin-left: 0 !important;
  }
  .content .notification {
    max-width: 200px !important;
  }
  .block {
    margin: 0 !important;
    padding: 20px !important;
  }
  .footer {
    margin-left: 0 !important;
    padding: 20px !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/NewNovels/_style.newnovels.scss","webpack://./src/scss/index.scss","webpack://./src/scss/NewNovels/_newnovels-media.scss","webpack://./src/scss/NewNovels/_newnovels-auth.scss","webpack://./src/scss/aside/_style.aside.scss","webpack://./src/scss/_fonts.scss","webpack://./src/scss/header/_style.header.scss","webpack://./src/scss/header/_vars.header.scss","webpack://./src/scss/header/_header-auth.scss","webpack://./src/scss/header/_header-media.scss","webpack://./src/scss/tags/_style.genre&languages.scss","webpack://./src/scss/tags/_style.tagsCatalog-authors.scss","webpack://./src/scss/tags/_style-tags.scss","webpack://./src/scss/contacts/_style.contacts.scss","webpack://./src/scss/rules/_style.rules.scss","webpack://./src/scss/registration/_style.registration.scss"],"names":[],"mappings":"AAGA;EACE,mBAAA;EACA,kBAAA;ACFF;;ADIA;EACE,mBAAA;EACA,aAAA;EACA,mBAAA;ACDF;ADEE;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,+CAAA;EACA,kBAAA;EACA,oBAAA;KAAA,iBAAA;ACAJ;ADEE;EACE,6BAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ACAJ;ADEE;EACE,cAAA;EACA,kCAAA;ACAJ;ADEE;EACE,eAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;ACAJ;ADEE;EACE,cAAA;EACA,mBAAA;ACAJ;ADCI;EACE,eAAA;EACA,aAAA;EACA,yBAAA;EACA,cAAA;EACA,6BAAA;EACA,gBAAA;EACA,sBAAA;EACA,eAAA;ACCN;ADAM;EACE,cAAA;ACER;ADEE;EACE,aAAA;EACA,mBAAA;ACAJ;ADCI;EACE,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,6BAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;ACCN;ADCI;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;ACCN;ADCI;EACE,mDAAA;EACA,mBAAA;EACA,6BAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;EACA,cAAA;EACA,yBAAA;ACCN;ADCI;EACE,+CAAA;EACA,cAAA;EACA,gCAAA;ACCN;;ADGA;EACE,6BAAA;EACA,kBAAA;ACAF;;ADGA;EACE,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,mCAAA;ACAF;ADCE;EACE,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;ACCJ;ADCE;EACE,kBAAA;EACA,kBAAA;ACCJ;ADAI;EACE,kBAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,kBAAA;ACEN;ADAI;EACE,aAAA;EAUA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,yBAAA;EACA,oBAAA;EACA,kBAAA;EACA,yBAAA;EACA,+CAAA;ACPN;ADfM;EACE,uBAAA;EACA,SAAA;EACA,yDAAA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;ACiBR;ADDM;EACE,WAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;ACGR;ADFQ;EACE,cAAA;ACIV;ADFY;EACE,qBAAA;ACId;ADAQ;EACE,iBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;ACEV;ADDU;EACE,yBAAA;ACGZ;ADDU;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;ACGZ;ADFY;EACE,UAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;ACId;ADCM;EACE,6BAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;ACCR;ADAQ;EACE,yBAAA;ACEV;ADAQ;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;ACEV;ADDU;EACE,eAAA;EACA,UAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;ACGZ;ADII;EACE,cAAA;EACA,gCAAA;ACFN;ADKE;EACE,aAAA;EACA,mBAAA;ACHJ;ADII;EACE,YAAA;EACA,iBAAA;ACFN;ADII;EACE,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,cAAA;ACFN;;ADMA;EACE,kBAAA;ACHF;ADIE;EACE,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;ACFJ;ADIE;EACE,yBAAA;EACA,iBAAA;ACFJ;ADIE;;EAEE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,QAAA;EACA,WAAA;EACA,kBAAA;EACA,6DAAA;EACA,YAAA;ACFJ;ADIE;EACE,UAAA;ACFJ;ADIE;EACE,qBAAA;EACA,WAAA;ACFJ;;ADKA;EACE,qBAAA;ACFF;;ADIA;;EAEE,aAAA;EACA,oBAAA;ACDF;ADEE;;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;ACCJ;ADCE;;EACE,kBAAA;EACA,oBAAA;KAAA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,8CAAA;ACEJ;ADAE;;;;EAEE,YAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,gDAAA;ACIJ;ADFE;;EACE,WAAA;EACA,YAAA;EACA,gDAAA;EACA,gCAAA;ACKJ;ADHE;;EACE,WAAA;EACA,YAAA;EACA,mDAAA;EACA,kBAAA;EACA,gCAAA;ACMJ;ADJE;;EACE,YAAA;EACA,gBAAA;EACA,uBAAA;ACOJ;ADLE;;EACE,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,6BAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;ACQJ;ADNE;;EACE,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;ACSJ;ADPE;;EACE,eAAA;EACA,WAAA;ACUJ;;ADLE;;EACE,UAAA;ACSJ;ADPE;;;;EAEE,UAAA;EACA,mBAAA;EACA,yCAAA;ACWJ;;ADRA;EACE,kBAAA;EACA,YAAA;ACWF;;ACnXA;EACE;IACE,mBAAA;EDsXF;ECpXA;IACE,6BAAA;EDsXF;EClXE;;IACE,eAAA;EDqXJ;ECnXE;;IACE,WAAA;IACA,YAAA;EDsXJ;ECpXE;;IACE,WAAA;IACA,YAAA;EDuXJ;ECrXE;;IACE,WAAA;IACA,YAAA;EDwXJ;ECtXE;;IACE,WAAA;IACA,YAAA;EDyXJ;AACF;ACtXA;EACE;IACE,oBAAA;IACA,gBAAA;IACA,gCAAA;IACA,4EAAA;EDwXF;ECvXE;IACE,aAAA;EDyXJ;ECtXI;IACE,aAAA;IACA,sBAAA;EDwXN;ECvXM;IACE,QAAA;EDyXR;ECvXM;IACE,QAAA;IACA,mBAAA;EDyXR;ECvXM;IACE,QAAA;IACA,8BAAA;IACA,kBAAA;EDyXR;ECxXQ;IACE,iBAAA;IACA,gBAAA;IACA,2BAAA;IAAA,sBAAA;IACA,kBAAA;ED0XV;ECzXU;IACE,kBAAA;IACA,WAAA;IACA,WAAA;IACA,4EAAA;IACA,OAAA;IACA,SAAA;IACA,YAAA;ED2XZ;ECxXQ;IACE,cAAA;IACA,kBAAA;ED0XV;ECzXU;IACE,kBAAA;IACA,gBAAA;IACA,qBAAA;IACA,WAAA;IACA,QAAA;IACA,aAAA;IACA,uBAAA;IACA,8BAAA;IACA,+BAAA;IACA,gCAAA;ED2XZ;ECvXM;IACE,QAAA;EDyXR;ECrXE;IACE,sBAAA;IACA,wBAAA;IACA,kBAAA;IACA,QAAA;EDuXJ;ECrXE;IACE,cAAA;EDuXJ;ECpXA;IACE,6BAAA;EDsXF;EClXE;;IACE,2BAAA;IACA,8BAAA;IACA,yBAAA;EDqXJ;AACF;AEpeE;EACE,yBAAA;AFseJ;;AGpeA;EACE,aAAA;EACA,yBAAA;EACA,wBAAA;AHueF;AGteE;EACE,gCAAA;AHweJ;;AGreA;EACE,gBAAA;EACA,cAAA;EACA,YAAA;EACA,oBAAA;AHweF;AGveE;EACE,UAAA;AHyeJ;AGveE;EACE,6BAAA;EACA,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AHyeJ;AGveE;EACE,WAAA;EACA,eAAA;AHyeJ;;AGteA;EACE,aAAA;EACA,YAAA;EACA,mBAAA;EACA,wEACE;EAEF,6DAAA;EACA,mBAAA;EACA,YAAA;AHueF;AGteE;EACE,UAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,6BAAA;EACA,gBAAA;EACA,oBAAA;AHweJ;AGteE;EACE,WAAA;AHweJ;AGteE;EACE,eAAA;EACA,oBAAA;EACA,cAAA;EACA,0CAAA;EACA,qDAAA;AHweJ;;AGreA;EACE,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,gCAAA;AHweF;;AGteA;EACE,UAAA;EACA,mBAAA;EACA,gDACE;AHweJ;;AGreA;EACE,mBAAA;AHweF;AGveE;;EAEE,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;AHyeJ;AGveE;EACE,kBAAA;AHyeJ;;AGteA;EAEI;;IAEE,uBAAA;EHweJ;AACF;AGreA;EACE;IACE,aAAA;EHueF;AACF;AIllBA;EACE,8BAAA;EACA,4CAAA,EAAA,4BAAA;EACA,4SACE,EAMiB,2BAAA;AJ6kBrB;AI1kBA;EACE,oCAAA;EACA,4CAAA,EAAA,4BAAA;EACA,8SACE,EAM2F,2BAAA;AJqkB/F;AIlkBA;EACE,6BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AJ6jBrB;AI1jBA;EACE,mCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMyF,2BAAA;AJqjB7F;AIljBA;EACE,+BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AJ6iBrB;AI1iBA;EACE,8BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AJqiBrB;AIliBA;EACE,oCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAM2F,2BAAA;AJ6hB/F;AI1hBA;EACE,+BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AJqhBrB;AIlhBA;EACE,qCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAM6F,2BAAA;AJ6gBjG;AI1gBA;EACE,mCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMyF,2BAAA;AJqgB7F;AIlgBA;EACE,qCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAM6F,2BAAA;AJ6fjG;AI1fA;;;;EAAA;AAKC;EACC,kCAAA;EAAA,0DAAA;EACA,gBAAA;EAAA,iCAAA;AJ4fF;;AI1fA;;;;;;;;;EASE,kCAAA;EACA,mCAAA;EACA,qBAAA;EAAA,wCAAA;EACA,kBAAA;EACA,6BAAA;EAAA,oBAAA;EACA,cAAA;EACA,oBAAA;AJ6fF;;AI3fA;;;;;EAKE,kCAAA;AJ8fF;;AI5fA;;EAEE,oCAAA;AJ+fF;;AI7fA;EACE,cAAA;AJggBF;;AI9fA;EACE,cAAA;AJigBF;;AI/fA;EACE,cAAA;AJkgBF;;AIhgBA;EACE,cAAA;AJmgBF;;AIjgBA;EACE,cAAA;AJogBF;;AIlgBA;EACE,cAAA;AJqgBF;;AIngBA;EACE,cAAA;AJsgBF;;AIpgBA;EACE,cAAA;AJugBF;;AIrgBA;EACE,cAAA;AJwgBF;;AItgBA;EACE,eAAA;AJygBF;;AIvgBA;EACE,kBAAA;EACA,kBAAA;EACA,uBAAA;AJ0gBF;;AIxgBA;EACE,iBAAA;EACA,sBAAA;EACA,uBAAA;AJ2gBF;;AIzgBA;EACE,kBAAA;EACA,sBAAA;EACA,yBAAA;AJ4gBF;;AI1gBA;EACE,iBAAA;EACA,mBAAA;EACA,wBAAA;AJ6gBF;;AI3gBA;EACE,gBAAA;EACA,sBAAA;EACA,wBAAA;AJ8gBF;;AI5gBA;EACE,cAAA;EACA,sBAAA;EACA,yBAAA;AJ+gBF;;AI7gBA;EACE,kBAAA;EACA,aAAA;AJghBF;;AI9gBA;EACE,qBAAA;EACA,kBAAA;EAAA,uCAAA;EACA,eAAA;AJihBF;;AI/gBA;EACE,kBAAA;AJkhBF;;AIhhBA;EACE,oBAAA;EAAA,wCAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EAAA,8BAAA;EACA,oBAAA;AJmhBF;;AIjhBA;EACE,oBAAA;EAAA,6CAAA;EACA,yBAAA;EAAA,iGAAA;EACA,4BAAA;EAAA,sDAAA;AJohBF;;AIlhBA;EACE,WAAA;EACA,mBAAA;EAAA,0CAAA;AJqhBF;;AInhBA;EACE,YAAA;EACA,kBAAA;EAAA,yCAAA;AJshBF;;AIphBA;EAEE,uBAAA;EAEA,mBAAA;EAAA,8CAAA;EAEA,2BAAA;EAAA,0DAAA;EAEA,sBAAA;EAAA,oDAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,sCAAA;EAAA,kEAAA;AJuhBF;;AIrhBA;EAEE,yBAAA;EAEA,mBAAA;EAAA,8CAAA;EAEA,2BAAA;EAAA,0DAAA;EAEA,sBAAA;EAAA,oDAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,4DAAA;EAAA,wFAAA;AJwhBF;;AIthBA;EAEE,uBAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,uDAAA;EAAA,mFAAA;AJyhBF;;AIvhBA;;EAGE,mBAAA;EAAA,8CAAA;EAEA,2BAAA;EAAA,0DAAA;EAEA,sBAAA;EAAA,oDAAA;AJ0hBF;;AIxhBA;EAEE,4BAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,uDAAA;EAAA,mFAAA;AJ2hBF;;AIzhBA;EAEE,uBAAA;EAEA,mBAAA;EAAA,8CAAA;EAEA,2BAAA;EAAA,0DAAA;EAEA,sBAAA;EAAA,oDAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,sCAAA;EAAA,kEAAA;AJ4hBF;;AI1hBA;EAEE,wBAAA;EAEA,sBAAA;EAAA,oDAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,iCAAA;EAAA,6DAAA;AJ6hBF;;AI3hBA;;EAGE,mBAAA;EAAA,8CAAA;EAEA,2BAAA;EAAA,0DAAA;AJ8hBF;;AI5hBA;EAEE,uBAAA;EAEA,sBAAA;EAAA,oDAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,iCAAA;EAAA,6DAAA;AJ+hBF;;AI7hBA;EACE,iCAAA;AJgiBF;;AI9hBA;;EAGE,uBAAA;EAEA,2BAAA;EAAA,0DAAA;EAEA,sBAAA;EAAA,oDAAA;EAEA,mCAAA;EAAA,wEAAA;EAEA,mCAAA;EAAA,+DAAA;AJiiBF;;AI/hBA;EACE;;;;;;;;;IAUE,qBAAA;IAEA,uBAAA;IAEA,4BAAA;IAEA,oBAAA;IAEA,uBAAA;EJkiBF;AACF;AIrhBA;EACE;IAGE,mBAAA;EJgiBF;EI9hBA;IAEE,sBAAA;IAAA,4CAAA;EJgiBF;AACF;AIpfA;EACE;IAEE,iCAAA;EJohBF;EIlhBA;IAME,wCAAA;IAAA,wGAAA;EJghBF;EI7gBA;IAGE,6CAAA;IAAA,oIAAA;EJ8gBF;EI3gBA;IAME,0CAAA;IAAA,wGAAA;EJygBF;EItgBA;IAEE,wCAAA;IAAA,kEAAA;EJwgBF;EItgBA;IAEE,iCAAA;EJwgBF;EItgBA;IAEE,iCAAA;EJwgBF;AACF;AIjgBA;EACE;IACE,YAAA;IAAA,oCAAA;EJwgBF;AACF;AIzfA;EACE;IAEE,YAAA;IAAA,yCAAA;IAEA,mBAAA;EJsgBF;EIpgBA;IACE,UAAA;IAEA,uBAAA;IAAA,kDAAA;EJsgBF;AACF;AIpfA;EACE;IAOE,qCAAA;IAAA,iHAAA;EJufF;AACF;AIvcA;EACE;IAEE,yBAAA;EJ+eF;EI7eA;IAEE,wBAAA;EJ+eF;EI7eA;IAGE,yBAAA;EJ8eF;EI5eA;IAGE,wBAAA;EJ6eF;EI3eA;IAEE,yBAAA;EJ6eF;EI3eA;IAEE,wBAAA;EJ6eF;EI3eA;IAEE,yBAAA;EJ6eF;EI3eA;IAEE,wBAAA;EJ6eF;EI3eA;IAGE,uBAAA;EJ4eF;AACF;AIheA;EACE;IAEE,uBAAA;EJ4eF;EI1eA;IAEE,wBAAA;EJ4eF;AACF;AI1eA;EAEE,wBAAA;AJ4eF;;AI1eA;EAEE,yBAAA;AJ6eF;;AI3eA;EAEE,yBAAA;AJ8eF;;AI5eA;EAEE,qBAAA;AJ+eF;;AI7eA;EAEE,qBAAA;AJgfF;;AI9eA;;EAGE,oBAAA;AJifF;;AI/eA;EAEE,uBAAA;EAAA,+CAAA;AJkfF;;AIhfA;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;AJmfF;;AIjfA;;EAEE,OAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EAAA,sCAAA;AJofF;;AIlfA;EACE,oBAAA;AJqfF;;AInfA;EACE,cAAA;AJsfF;;AIpfA;EACE,WAAA;EAAA,8BAAA;AJufF;;AIpfA;EACE,YAAA;AJufF;;AIrfA;EACE,YAAA;AJwfF;;AItfA;EACE,YAAA;AJyfF;;AIvfA;EACE,YAAA;AJ0fF;;AIxfA;EACE,YAAA;AJ2fF;;AIzfA;EACE,YAAA;AJ4fF;;AI1fA;EACE,YAAA;AJ6fF;;AI3fA;EACE,YAAA;AJ8fF;;AI5fA;EACE,YAAA;AJ+fF;;AI7fA;EACE,YAAA;AJggBF;;AI9fA;EACE,gBAAA;AJigBF;;AI/fA;EACE,gBAAA;AJkgBF;;AIhgBA;;EAEE,gBAAA;AJmgBF;;AIjgBA;EACE,YAAA;AJogBF;;AIlgBA;;EAEE,gBAAA;AJqgBF;;AIngBA;EACE,gBAAA;AJsgBF;;AIpgBA;;EAEE,gBAAA;AJugBF;;AIrgBA;EACE,gBAAA;AJwgBF;;AItgBA;;EAEE,gBAAA;AJygBF;;AIvgBA;EACE,gBAAA;AJ0gBF;;AIxgBA;;EAEE,gBAAA;AJ2gBF;;AIzgBA;EACE,gBAAA;AJ4gBF;;AI1gBA;;;EAGE,gBAAA;AJ6gBF;;AI3gBA;EACE,gBAAA;AJ8gBF;;AI5gBA;EACE,gBAAA;AJ+gBF;;AI7gBA;EACE,gBAAA;AJghBF;;AI9gBA;EACE,gBAAA;AJihBF;;AI/gBA;;EAEE,gBAAA;AJkhBF;;AIhhBA;EACE,gBAAA;AJmhBF;;AIjhBA;EACE,gBAAA;AJohBF;;AIlhBA;;EAEE,gBAAA;AJqhBF;;AInhBA;EACE,gBAAA;AJshBF;;AIphBA;;EAEE,gBAAA;AJuhBF;;AIrhBA;;EAEE,gBAAA;AJwhBF;;AIthBA;EACE,gBAAA;AJyhBF;;AIvhBA;;EAEE,gBAAA;AJ0hBF;;AIxhBA;EACE,gBAAA;AJ2hBF;;AIzhBA;EACE,gBAAA;AJ4hBF;;AI1hBA;;EAEE,gBAAA;AJ6hBF;;AI3hBA;;EAEE,gBAAA;AJ8hBF;;AI5hBA;EACE,gBAAA;AJ+hBF;;AI7hBA;EACE,gBAAA;AJgiBF;;AI9hBA;EACE,gBAAA;AJiiBF;;AI/hBA;EACE,gBAAA;AJkiBF;;AIhiBA;;EAEE,gBAAA;AJmiBF;;AIjiBA;;EAEE,gBAAA;AJoiBF;;AIliBA;;EAEE,gBAAA;AJqiBF;;AIniBA;EACE,gBAAA;AJsiBF;;AIpiBA;;EAEE,gBAAA;AJuiBF;;AIriBA;EACE,gBAAA;AJwiBF;;AItiBA;EACE,gBAAA;AJyiBF;;AIviBA;;EAEE,gBAAA;AJ0iBF;;AIxiBA;EACE,gBAAA;AJ2iBF;;AIziBA;EACE,gBAAA;AJ4iBF;;AI1iBA;EACE,gBAAA;AJ6iBF;;AI3iBA;;EAEE,gBAAA;AJ8iBF;;AI5iBA;EACE,gBAAA;AJ+iBF;;AI7iBA;;EAEE,gBAAA;AJgjBF;;AI9iBA;;EAEE,gBAAA;AJijBF;;AI/iBA;;EAEE,gBAAA;AJkjBF;;AIhjBA;EACE,gBAAA;AJmjBF;;AIjjBA;EACE,gBAAA;AJojBF;;AIljBA;EACE,gBAAA;AJqjBF;;AInjBA;EACE,gBAAA;AJsjBF;;AIpjBA;EACE,gBAAA;AJujBF;;AIrjBA;;EAEE,gBAAA;AJwjBF;;AItjBA;EACE,gBAAA;AJyjBF;;AIvjBA;;EAEE,gBAAA;AJ0jBF;;AIxjBA;EACE,gBAAA;AJ2jBF;;AIzjBA;;EAEE,gBAAA;AJ4jBF;;AI1jBA;EACE,gBAAA;AJ6jBF;;AI3jBA;;EAEE,gBAAA;AJ8jBF;;AI5jBA;EACE,gBAAA;AJ+jBF;;AI7jBA;;EAEE,gBAAA;AJgkBF;;AI9jBA;EACE,gBAAA;AJikBF;;AI/jBA;;EAEE,gBAAA;AJkkBF;;AIhkBA;EACE,gBAAA;AJmkBF;;AIjkBA;EACE,YAAA;AJokBF;;AIlkBA;EACE,gBAAA;AJqkBF;;AInkBA;;EAEE,gBAAA;AJskBF;;AIpkBA;EACE,gBAAA;AJukBF;;AIrkBA;EACE,gBAAA;AJwkBF;;AItkBA;EACE,gBAAA;AJykBF;;AIvkBA;;EAEE,gBAAA;AJ0kBF;;AIxkBA;EACE,gBAAA;AJ2kBF;;AIzkBA;EACE,gBAAA;AJ4kBF;;AI1kBA;;EAEE,gBAAA;AJ6kBF;;AI3kBA;EACE,gBAAA;AJ8kBF;;AI5kBA;EACE,gBAAA;AJ+kBF;;AI7kBA;EACE,gBAAA;AJglBF;;AI9kBA;EACE,gBAAA;AJilBF;;AI/kBA;EACE,gBAAA;AJklBF;;AIhlBA;EACE,gBAAA;AJmlBF;;AIjlBA;;EAEE,gBAAA;AJolBF;;AIllBA;;;EAGE,gBAAA;AJqlBF;;AInlBA;EACE,gBAAA;AJslBF;;AIplBA;;EAEE,gBAAA;AJulBF;;AIrlBA;EACE,gBAAA;AJwlBF;;AItlBA;;;EAGE,gBAAA;AJylBF;;AIvlBA;;EAEE,gBAAA;AJ0lBF;;AIxlBA;EACE,gBAAA;AJ2lBF;;AIzlBA;EACE,gBAAA;AJ4lBF;;AI1lBA;EACE,YAAA;AJ6lBF;;AI3lBA;;EAEE,gBAAA;AJ8lBF;;AI5lBA;EACE,gBAAA;AJ+lBF;;AI7lBA;EACE,gBAAA;AJgmBF;;AI9lBA;;EAEE,gBAAA;AJimBF;;AI/lBA;EACE,gBAAA;AJkmBF;;AIhmBA;EACE,gBAAA;AJmmBF;;AIjmBA;EACE,gBAAA;AJomBF;;AIlmBA;;EAEE,gBAAA;AJqmBF;;AInmBA;EACE,gBAAA;AJsmBF;;AIpmBA;EACE,gBAAA;AJumBF;;AIrmBA;;EAEE,gBAAA;AJwmBF;;AItmBA;EACE,gBAAA;AJymBF;;AIvmBA;EACE,gBAAA;AJ0mBF;;AIxmBA;EACE,gBAAA;AJ2mBF;;AIzmBA;EACE,gBAAA;AJ4mBF;;AI1mBA;;EAEE,gBAAA;AJ6mBF;;AI3mBA;;EAEE,gBAAA;AJ8mBF;;AI5mBA;;EAEE,gBAAA;AJ+mBF;;AI7mBA;EACE,gBAAA;AJgnBF;;AI9mBA;;EAEE,gBAAA;AJinBF;;AI/mBA;;EAEE,gBAAA;AJknBF;;AIhnBA;EACE,gBAAA;AJmnBF;;AIjnBA;EACE,gBAAA;AJonBF;;AIlnBA;EACE,gBAAA;AJqnBF;;AInnBA;EACE,gBAAA;AJsnBF;;AIpnBA;EACE,gBAAA;AJunBF;;AIrnBA;;EAEE,gBAAA;AJwnBF;;AItnBA;EACE,gBAAA;AJynBF;;AIvnBA;EACE,gBAAA;AJ0nBF;;AIxnBA;;EAEE,gBAAA;AJ2nBF;;AIznBA;EACE,gBAAA;AJ4nBF;;AI1nBA;EACE,gBAAA;AJ6nBF;;AI3nBA;;EAEE,gBAAA;AJ8nBF;;AI5nBA;EACE,gBAAA;AJ+nBF;;AI7nBA;EACE,gBAAA;AJgoBF;;AI9nBA;;EAEE,gBAAA;AJioBF;;AI/nBA;EACE,gBAAA;AJkoBF;;AIhoBA;EACE,gBAAA;AJmoBF;;AIjoBA;EACE,gBAAA;AJooBF;;AIloBA;EACE,gBAAA;AJqoBF;;AInoBA;;EAEE,gBAAA;AJsoBF;;AIpoBA;EACE,gBAAA;AJuoBF;;AIroBA;;EAEE,gBAAA;AJwoBF;;AItoBA;;EAEE,gBAAA;AJyoBF;;AIvoBA;;EAEE,gBAAA;AJ0oBF;;AIxoBA;;EAEE,gBAAA;AJ2oBF;;AIzoBA;EACE,gBAAA;AJ4oBF;;AI1oBA;EACE,gBAAA;AJ6oBF;;AI3oBA;EACE,gBAAA;AJ8oBF;;AI5oBA;EACE,gBAAA;AJ+oBF;;AI7oBA;EACE,gBAAA;AJgpBF;;AI9oBA;;EAEE,gBAAA;AJipBF;;AI/oBA;EACE,gBAAA;AJkpBF;;AIhpBA;;EAEE,gBAAA;AJmpBF;;AIjpBA;;EAEE,gBAAA;AJopBF;;AIlpBA;;EAEE,gBAAA;AJqpBF;;AInpBA;EACE,gBAAA;AJspBF;;AIppBA;;EAEE,gBAAA;AJupBF;;AIrpBA;EACE,gBAAA;AJwpBF;;AItpBA;;EAEE,gBAAA;AJypBF;;AIvpBA;EACE,gBAAA;AJ0pBF;;AIxpBA;EACE,gBAAA;AJ2pBF;;AIzpBA;EACE,gBAAA;AJ4pBF;;AI1pBA;EACE,gBAAA;AJ6pBF;;AI3pBA;EACE,gBAAA;AJ8pBF;;AI5pBA;EACE,gBAAA;AJ+pBF;;AI7pBA;;EAEE,gBAAA;AJgqBF;;AI9pBA;EACE,gBAAA;AJiqBF;;AI/pBA;EACE,gBAAA;AJkqBF;;AIhqBA;EACE,gBAAA;AJmqBF;;AIjqBA;;EAEE,gBAAA;AJoqBF;;AIlqBA;EACE,gBAAA;AJqqBF;;AInqBA;EACE,gBAAA;AJsqBF;;AIpqBA;EACE,YAAA;AJuqBF;;AIrqBA;;EAEE,gBAAA;AJwqBF;;AItqBA;EACE,gBAAA;AJyqBF;;AIvqBA;;EAEE,gBAAA;AJ0qBF;;AIxqBA;EACE,gBAAA;AJ2qBF;;AIzqBA;;EAEE,gBAAA;AJ4qBF;;AI1qBA;;EAEE,gBAAA;AJ6qBF;;AI3qBA;EACE,gBAAA;AJ8qBF;;AI5qBA;EACE,gBAAA;AJ+qBF;;AI7qBA;;EAEE,gBAAA;AJgrBF;;AI9qBA;;EAEE,gBAAA;AJirBF;;AI/qBA;EACE,gBAAA;AJkrBF;;AIhrBA;EACE,gBAAA;AJmrBF;;AIjrBA;EACE,gBAAA;AJorBF;;AIlrBA;EACE,gBAAA;AJqrBF;;AInrBA;;;EAGE,gBAAA;AJsrBF;;AIprBA;;EAEE,gBAAA;AJurBF;;AIrrBA;EACE,gBAAA;AJwrBF;;AItrBA;EACE,gBAAA;AJyrBF;;AIvrBA;;EAEE,gBAAA;AJ0rBF;;AIxrBA;;EAEE,gBAAA;AJ2rBF;;AIzrBA;EACE,gBAAA;AJ4rBF;;AI1rBA;EACE,gBAAA;AJ6rBF;;AI3rBA;EACE,gBAAA;AJ8rBF;;AI5rBA;EACE,gBAAA;AJ+rBF;;AI7rBA;;EAEE,gBAAA;AJgsBF;;AI9rBA;EACE,gBAAA;AJisBF;;AI/rBA;;EAEE,gBAAA;AJksBF;;AIhsBA;EACE,gBAAA;AJmsBF;;AIjsBA;;EAEE,gBAAA;AJosBF;;AIlsBA;EACE,gBAAA;AJqsBF;;AInsBA;EACE,gBAAA;AJssBF;;AIpsBA;;EAEE,gBAAA;AJusBF;;AIrsBA;;;EAGE,gBAAA;AJwsBF;;AItsBA;EACE,gBAAA;AJysBF;;AIvsBA;EACE,gBAAA;AJ0sBF;;AIxsBA;EACE,gBAAA;AJ2sBF;;AIzsBA;EACE,gBAAA;AJ4sBF;;AI1sBA;EACE,gBAAA;AJ6sBF;;AI3sBA;;EAEE,gBAAA;AJ8sBF;;AI5sBA;EACE,gBAAA;AJ+sBF;;AI7sBA;EACE,gBAAA;AJgtBF;;AI9sBA;EACE,gBAAA;AJitBF;;AI/sBA;EACE,gBAAA;AJktBF;;AIhtBA;EACE,gBAAA;AJmtBF;;AIjtBA;EACE,gBAAA;AJotBF;;AIltBA;EACE,gBAAA;AJqtBF;;AIntBA;;EAEE,gBAAA;AJstBF;;AIptBA;EACE,gBAAA;AJutBF;;AIrtBA;;EAEE,gBAAA;AJwtBF;;AIttBA;EACE,gBAAA;AJytBF;;AIvtBA;;EAEE,gBAAA;AJ0tBF;;AIxtBA;;;;EAIE,gBAAA;AJ2tBF;;AIztBA;EACE,gBAAA;AJ4tBF;;AI1tBA;EACE,gBAAA;AJ6tBF;;AI3tBA;;EAEE,gBAAA;AJ8tBF;;AI5tBA;EACE,gBAAA;AJ+tBF;;AI7tBA;EACE,gBAAA;AJguBF;;AI9tBA;EACE,gBAAA;AJiuBF;;AI/tBA;EACE,gBAAA;AJkuBF;;AIhuBA;EACE,YAAA;AJmuBF;;AIjuBA;;EAEE,gBAAA;AJouBF;;AIluBA;EACE,gBAAA;AJquBF;;AInuBA;;EAEE,gBAAA;AJsuBF;;AIpuBA;EACE,gBAAA;AJuuBF;;AIruBA;EACE,YAAA;AJwuBF;;AItuBA;EACE,gBAAA;AJyuBF;;AIvuBA;EACE,gBAAA;AJ0uBF;;AIxuBA;;;;EAIE,gBAAA;AJ2uBF;;AIzuBA;EACE,gBAAA;AJ4uBF;;AI1uBA;;EAEE,gBAAA;AJ6uBF;;AI3uBA;EACE,gBAAA;AJ8uBF;;AI5uBA;EACE,gBAAA;AJ+uBF;;AI7uBA;EACE,gBAAA;AJgvBF;;AI9uBA;EACE,gBAAA;AJivBF;;AI/uBA;EACE,gBAAA;AJkvBF;;AIhvBA;EACE,gBAAA;AJmvBF;;AIjvBA;EACE,gBAAA;AJovBF;;AIlvBA;EACE,gBAAA;AJqvBF;;AInvBA;EACE,gBAAA;AJsvBF;;AIpvBA;EACE,YAAA;AJuvBF;;AIrvBA;EACE,YAAA;AJwvBF;;AItvBA;EACE,gBAAA;AJyvBF;;AIvvBA;;;;EAIE,gBAAA;AJ0vBF;;AIxvBA;EACE,gBAAA;AJ2vBF;;AIzvBA;EACE,gBAAA;AJ4vBF;;AI1vBA;;EAEE,gBAAA;AJ6vBF;;AI3vBA;;EAEE,gBAAA;AJ8vBF;;AI5vBA;EACE,gBAAA;AJ+vBF;;AI7vBA;EACE,gBAAA;AJgwBF;;AI9vBA;EACE,gBAAA;AJiwBF;;AI/vBA;EACE,gBAAA;AJkwBF;;AIhwBA;EACE,gBAAA;AJmwBF;;AIjwBA;EACE,gBAAA;AJowBF;;AIlwBA;EACE,gBAAA;AJqwBF;;AInwBA;EACE,gBAAA;AJswBF;;AIpwBA;EACE,gBAAA;AJuwBF;;AIrwBA;EACE,gBAAA;AJwwBF;;AItwBA;;EAEE,gBAAA;AJywBF;;AIvwBA;;EAEE,gBAAA;AJ0wBF;;AIxwBA;EACE,gBAAA;AJ2wBF;;AIzwBA;EACE,gBAAA;AJ4wBF;;AI1wBA;EACE,gBAAA;AJ6wBF;;AI3wBA;EACE,gBAAA;AJ8wBF;;AI5wBA;;;;EAIE,gBAAA;AJ+wBF;;AI7wBA;;EAEE,gBAAA;AJgxBF;;AI9wBA;EACE,YAAA;AJixBF;;AI/wBA;;EAEE,gBAAA;AJkxBF;;AIhxBA;EACE,gBAAA;AJmxBF;;AIjxBA;EACE,gBAAA;AJoxBF;;AIlxBA;EACE,gBAAA;AJqxBF;;AInxBA;EACE,gBAAA;AJsxBF;;AIpxBA;;EAEE,gBAAA;AJuxBF;;AIrxBA;EACE,gBAAA;AJwxBF;;AItxBA;;EAEE,gBAAA;AJyxBF;;AIvxBA;EACE,gBAAA;AJ0xBF;;AIxxBA;EACE,gBAAA;AJ2xBF;;AIzxBA;EACE,gBAAA;AJ4xBF;;AI1xBA;EACE,gBAAA;AJ6xBF;;AI3xBA;EACE,gBAAA;AJ8xBF;;AI5xBA;EACE,gBAAA;AJ+xBF;;AI7xBA;EACE,gBAAA;AJgyBF;;AI9xBA;EACE,gBAAA;AJiyBF;;AI/xBA;EACE,YAAA;AJkyBF;;AIhyBA;EACE,gBAAA;AJmyBF;;AIjyBA;EACE,gBAAA;AJoyBF;;AIlyBA;EACE,gBAAA;AJqyBF;;AInyBA;EACE,gBAAA;AJsyBF;;AIpyBA;;EAEE,gBAAA;AJuyBF;;AIryBA;EACE,gBAAA;AJwyBF;;AItyBA;EACE,gBAAA;AJyyBF;;AIvyBA;;EAEE,gBAAA;AJ0yBF;;AIxyBA;EACE,gBAAA;AJ2yBF;;AIzyBA;;EAEE,gBAAA;AJ4yBF;;AI1yBA;EACE,gBAAA;AJ6yBF;;AI3yBA;EACE,gBAAA;AJ8yBF;;AI5yBA;EACE,gBAAA;AJ+yBF;;AI7yBA;EACE,gBAAA;AJgzBF;;AI9yBA;EACE,gBAAA;AJizBF;;AI/yBA;;EAEE,gBAAA;AJkzBF;;AIhzBA;;EAEE,gBAAA;AJmzBF;;AIjzBA;EACE,gBAAA;AJozBF;;AIlzBA;;EAEE,gBAAA;AJqzBF;;AInzBA;;EAEE,gBAAA;AJszBF;;AIpzBA;;EAEE,gBAAA;AJuzBF;;AIrzBA;EACE,gBAAA;AJwzBF;;AItzBA;EACE,gBAAA;AJyzBF;;AIvzBA;EACE,gBAAA;AJ0zBF;;AIxzBA;EACE,gBAAA;AJ2zBF;;AIzzBA;EACE,gBAAA;AJ4zBF;;AI1zBA;EACE,gBAAA;AJ6zBF;;AI3zBA;EACE,gBAAA;AJ8zBF;;AI5zBA;EACE,gBAAA;AJ+zBF;;AI7zBA;EACE,gBAAA;AJg0BF;;AI9zBA;;EAEE,gBAAA;AJi0BF;;AI/zBA;;EAEE,gBAAA;AJk0BF;;AIh0BA;;EAEE,gBAAA;AJm0BF;;AIj0BA;EACE,gBAAA;AJo0BF;;AIl0BA;EACE,gBAAA;AJq0BF;;AIn0BA;EACE,gBAAA;AJs0BF;;AIp0BA;;EAEE,gBAAA;AJu0BF;;AIr0BA;EACE,gBAAA;AJw0BF;;AIt0BA;EACE,gBAAA;AJy0BF;;AIv0BA;EACE,gBAAA;AJ00BF;;AIx0BA;;EAEE,gBAAA;AJ20BF;;AIz0BA;EACE,gBAAA;AJ40BF;;AI10BA;EACE,gBAAA;AJ60BF;;AI30BA;;EAEE,gBAAA;AJ80BF;;AI50BA;;EAEE,gBAAA;AJ+0BF;;AI70BA;EACE,gBAAA;AJg1BF;;AI90BA;EACE,gBAAA;AJi1BF;;AI/0BA;EACE,gBAAA;AJk1BF;;AIh1BA;EACE,gBAAA;AJm1BF;;AIj1BA;EACE,gBAAA;AJo1BF;;AIl1BA;EACE,gBAAA;AJq1BF;;AIn1BA;;EAEE,gBAAA;AJs1BF;;AIp1BA;;EAEE,gBAAA;AJu1BF;;AIr1BA;;EAEE,gBAAA;AJw1BF;;AIt1BA;EACE,gBAAA;AJy1BF;;AIv1BA;;EAEE,gBAAA;AJ01BF;;AIx1BA;EACE,gBAAA;AJ21BF;;AIz1BA;;EAEE,gBAAA;AJ41BF;;AI11BA;EACE,gBAAA;AJ61BF;;AI31BA;;EAEE,gBAAA;AJ81BF;;AI51BA;EACE,YAAA;AJ+1BF;;AI71BA;EACE,gBAAA;AJg2BF;;AI91BA;;EAEE,gBAAA;AJi2BF;;AI/1BA;;EAEE,gBAAA;AJk2BF;;AIh2BA;;EAEE,gBAAA;AJm2BF;;AIj2BA;EACE,gBAAA;AJo2BF;;AIl2BA;EACE,gBAAA;AJq2BF;;AIn2BA;EACE,gBAAA;AJs2BF;;AIp2BA;EACE,gBAAA;AJu2BF;;AIr2BA;;EAEE,gBAAA;AJw2BF;;AIt2BA;EACE,gBAAA;AJy2BF;;AIv2BA;EACE,gBAAA;AJ02BF;;AIx2BA;EACE,gBAAA;AJ22BF;;AIz2BA;EACE,gBAAA;AJ42BF;;AI12BA;EACE,gBAAA;AJ62BF;;AI32BA;EACE,gBAAA;AJ82BF;;AI52BA;EACE,gBAAA;AJ+2BF;;AI72BA;;EAEE,gBAAA;AJg3BF;;AI92BA;;EAEE,gBAAA;AJi3BF;;AI/2BA;EACE,gBAAA;AJk3BF;;AIh3BA;EACE,gBAAA;AJm3BF;;AIj3BA;;EAEE,gBAAA;AJo3BF;;AIl3BA;;;EAGE,gBAAA;AJq3BF;;AIn3BA;;EAEE,gBAAA;AJs3BF;;AIp3BA;EACE,gBAAA;AJu3BF;;AIr3BA;;EAEE,gBAAA;AJw3BF;;AIt3BA;EACE,gBAAA;AJy3BF;;AIv3BA;EACE,gBAAA;AJ03BF;;AIx3BA;EACE,gBAAA;AJ23BF;;AIz3BA;EACE,gBAAA;AJ43BF;;AI13BA;EACE,gBAAA;AJ63BF;;AI33BA;EACE,gBAAA;AJ83BF;;AI53BA;EACE,gBAAA;AJ+3BF;;AI73BA;;EAEE,gBAAA;AJg4BF;;AI93BA;;EAEE,gBAAA;AJi4BF;;AI/3BA;EACE,gBAAA;AJk4BF;;AIh4BA;;EAEE,gBAAA;AJm4BF;;AIj4BA;EACE,gBAAA;AJo4BF;;AIl4BA;;EAEE,gBAAA;AJq4BF;;AIn4BA;EACE,gBAAA;AJs4BF;;AIp4BA;EACE,gBAAA;AJu4BF;;AIr4BA;EACE,gBAAA;AJw4BF;;AIt4BA;EACE,gBAAA;AJy4BF;;AIv4BA;EACE,gBAAA;AJ04BF;;AIx4BA;EACE,gBAAA;AJ24BF;;AIz4BA;EACE,gBAAA;AJ44BF;;AI14BA;;EAEE,gBAAA;AJ64BF;;AI34BA;;EAEE,gBAAA;AJ84BF;;AI54BA;;EAEE,gBAAA;AJ+4BF;;AI74BA;EACE,gBAAA;AJg5BF;;AI94BA;;EAEE,gBAAA;AJi5BF;;AI/4BA;;EAEE,gBAAA;AJk5BF;;AIh5BA;EACE,gBAAA;AJm5BF;;AIj5BA;EACE,gBAAA;AJo5BF;;AIl5BA;;EAEE,gBAAA;AJq5BF;;AIn5BA;EACE,gBAAA;AJs5BF;;AIp5BA;EACE,gBAAA;AJu5BF;;AIr5BA;EACE,gBAAA;AJw5BF;;AIt5BA;;EAEE,gBAAA;AJy5BF;;AIv5BA;EACE,gBAAA;AJ05BF;;AIx5BA;EACE,gBAAA;AJ25BF;;AIz5BA;EACE,gBAAA;AJ45BF;;AI15BA;EACE,gBAAA;AJ65BF;;AI35BA;EACE,gBAAA;AJ85BF;;AI55BA;EACE,gBAAA;AJ+5BF;;AI75BA;EACE,gBAAA;AJg6BF;;AI95BA;EACE,gBAAA;AJi6BF;;AI/5BA;EACE,gBAAA;AJk6BF;;AIh6BA;EACE,gBAAA;AJm6BF;;AIj6BA;EACE,gBAAA;AJo6BF;;AIl6BA;EACE,gBAAA;AJq6BF;;AIn6BA;;EAEE,gBAAA;AJs6BF;;AIp6BA;;;;EAIE,gBAAA;AJu6BF;;AIr6BA;;EAEE,gBAAA;AJw6BF;;AIt6BA;EACE,gBAAA;AJy6BF;;AIv6BA;EACE,gBAAA;AJ06BF;;AIx6BA;EACE,gBAAA;AJ26BF;;AIz6BA;EACE,gBAAA;AJ46BF;;AI16BA;;EAEE,gBAAA;AJ66BF;;AI36BA;EACE,gBAAA;AJ86BF;;AI56BA;;EAEE,gBAAA;AJ+6BF;;AI76BA;EACE,gBAAA;AJg7BF;;AI96BA;EACE,gBAAA;AJi7BF;;AI/6BA;;EAEE,gBAAA;AJk7BF;;AIh7BA;EACE,gBAAA;AJm7BF;;AIj7BA;;EAEE,gBAAA;AJo7BF;;AIl7BA;EACE,gBAAA;AJq7BF;;AIn7BA;EACE,gBAAA;AJs7BF;;AIp7BA;;;EAGE,gBAAA;AJu7BF;;AIr7BA;EACE,gBAAA;AJw7BF;;AIt7BA;;EAEE,gBAAA;AJy7BF;;AIv7BA;;EAEE,gBAAA;AJ07BF;;AIx7BA;;EAEE,gBAAA;AJ27BF;;AIz7BA;EACE,gBAAA;AJ47BF;;AI17BA;EACE,gBAAA;AJ67BF;;AI37BA;EACE,gBAAA;AJ87BF;;AI57BA;EACE,gBAAA;AJ+7BF;;AI77BA;EACE,gBAAA;AJg8BF;;AI97BA;EACE,gBAAA;AJi8BF;;AI/7BA;;EAEE,gBAAA;AJk8BF;;AIh8BA;EACE,gBAAA;AJm8BF;;AIj8BA;EACE,gBAAA;AJo8BF;;AIl8BA;;EAEE,gBAAA;AJq8BF;;AIn8BA;EACE,gBAAA;AJs8BF;;AIp8BA;EACE,gBAAA;AJu8BF;;AIr8BA;EACE,gBAAA;AJw8BF;;AIt8BA;;;EAGE,gBAAA;AJy8BF;;AIv8BA;EACE,gBAAA;AJ08BF;;AIx8BA;EACE,gBAAA;AJ28BF;;AIz8BA;EACE,gBAAA;AJ48BF;;AI18BA;;EAEE,gBAAA;AJ68BF;;AI38BA;EACE,gBAAA;AJ88BF;;AI58BA;EACE,gBAAA;AJ+8BF;;AI78BA;;EAEE,gBAAA;AJg9BF;;AI98BA;EACE,gBAAA;AJi9BF;;AI/8BA;;EAEE,gBAAA;AJk9BF;;AIh9BA;;EAEE,gBAAA;AJm9BF;;AIj9BA;EACE,gBAAA;AJo9BF;;AIl9BA;;EAEE,gBAAA;AJq9BF;;AIn9BA;;EAEE,gBAAA;AJs9BF;;AIp9BA;;EAEE,gBAAA;AJu9BF;;AIr9BA;EACE,gBAAA;AJw9BF;;AIt9BA;EACE,gBAAA;AJy9BF;;AIv9BA;EACE,gBAAA;AJ09BF;;AIx9BA;EACE,gBAAA;AJ29BF;;AIz9BA;EACE,gBAAA;AJ49BF;;AI19BA;EACE,gBAAA;AJ69BF;;AI39BA;;;;EAIE,gBAAA;AJ89BF;;AI59BA;EACE,gBAAA;AJ+9BF;;AI79BA;EACE,gBAAA;AJg+BF;;AI99BA;;;EAGE,gBAAA;AJi+BF;;AI/9BA;;EAEE,gBAAA;AJk+BF;;AIh+BA;EACE,gBAAA;AJm+BF;;AIj+BA;;EAEE,gBAAA;AJo+BF;;AIl+BA;EACE,gBAAA;AJq+BF;;AIn+BA;;EAEE,gBAAA;AJs+BF;;AIp+BA;;EAEE,gBAAA;AJu+BF;;AIr+BA;EACE,gBAAA;AJw+BF;;AIt+BA;EACE,gBAAA;AJy+BF;;AIv+BA;EACE,gBAAA;AJ0+BF;;AIx+BA;;;EAGE,gBAAA;AJ2+BF;;AIz+BA;EACE,gBAAA;AJ4+BF;;AI1+BA;EACE,gBAAA;AJ6+BF;;AI3+BA;EACE,gBAAA;AJ8+BF;;AI5+BA;EACE,gBAAA;AJ++BF;;AI7+BA;EACE,gBAAA;AJg/BF;;AI9+BA;;EAEE,gBAAA;AJi/BF;;AI/+BA;;EAEE,gBAAA;AJk/BF;;AIh/BA;EACE,gBAAA;AJm/BF;;AIj/BA;;EAEE,gBAAA;AJo/BF;;AIl/BA;EACE,gBAAA;AJq/BF;;AIn/BA;EACE,gBAAA;AJs/BF;;AIp/BA;EACE,gBAAA;AJu/BF;;AIr/BA;;;EAGE,gBAAA;AJw/BF;;AIt/BA;;EAEE,gBAAA;AJy/BF;;AIv/BA;;EAEE,gBAAA;AJ0/BF;;AIx/BA;;EAEE,gBAAA;AJ2/BF;;AIz/BA;EACE,gBAAA;AJ4/BF;;AI1/BA;EACE,gBAAA;AJ6/BF;;AI3/BA;;EAEE,gBAAA;AJ8/BF;;AI5/BA;EACE,gBAAA;AJ+/BF;;AI7/BA;;;EAGE,gBAAA;AJggCF;;AI9/BA;EACE,gBAAA;AJigCF;;AI//BA;;EAEE,gBAAA;AJkgCF;;AIhgCA;;EAEE,gBAAA;AJmgCF;;AIjgCA;EACE,gBAAA;AJogCF;;AIlgCA;;EAEE,gBAAA;AJqgCF;;AIngCA;EACE,gBAAA;AJsgCF;;AIpgCA;EACE,gBAAA;AJugCF;;AIrgCA;;;EAGE,gBAAA;AJwgCF;;AItgCA;EACE,gBAAA;AJygCF;;AIvgCA;EACE,gBAAA;AJ0gCF;;AIxgCA;EACE,gBAAA;AJ2gCF;;AIzgCA;;EAEE,gBAAA;AJ4gCF;;AI1gCA;;EAEE,gBAAA;AJ6gCF;;AI3gCA;EACE,gBAAA;AJ8gCF;;AI5gCA;EACE,gBAAA;AJ+gCF;;AI7gCA;EACE,gBAAA;AJghCF;;AI9gCA;EACE,gBAAA;AJihCF;;AI/gCA;EACE,gBAAA;AJkhCF;;AIhhCA;EACE,gBAAA;AJmhCF;;AIjhCA;;EAEE,gBAAA;AJohCF;;AIlhCA;;EAEE,gBAAA;AJqhCF;;AInhCA;EACE,gBAAA;AJshCF;;AIphCA;;EAEE,gBAAA;AJuhCF;;AIrhCA;EACE,gBAAA;AJwhCF;;AIthCA;EACE,gBAAA;AJyhCF;;AIvhCA;EACE,gBAAA;AJ0hCF;;AIxhCA;EACE,gBAAA;AJ2hCF;;AIzhCA;EACE,gBAAA;AJ4hCF;;AI1hCA;EACE,gBAAA;AJ6hCF;;AI3hCA;EACE,YAAA;AJ8hCF;;AI5hCA;;EAEE,gBAAA;AJ+hCF;;AI7hCA;EACE,gBAAA;AJgiCF;;AI9hCA;EACE,YAAA;AJiiCF;;AI/hCA;;EAEE,gBAAA;AJkiCF;;AIhiCA;;EAEE,gBAAA;AJmiCF;;AIjiCA;EACE,YAAA;AJoiCF;;AIliCA;EACE,gBAAA;AJqiCF;;AIniCA;EACE,gBAAA;AJsiCF;;AIpiCA;;EAEE,gBAAA;AJuiCF;;AIriCA;;EAEE,gBAAA;AJwiCF;;AItiCA;EACE,gBAAA;AJyiCF;;AIviCA;EACE,gBAAA;AJ0iCF;;AIxiCA;;EAEE,gBAAA;AJ2iCF;;AIziCA;;;EAGE,gBAAA;AJ4iCF;;AI1iCA;EACE,gBAAA;AJ6iCF;;AI3iCA;;EAEE,gBAAA;AJ8iCF;;AI5iCA;EACE,gBAAA;AJ+iCF;;AI7iCA;EACE,gBAAA;AJgjCF;;AI9iCA;EACE,gBAAA;AJijCF;;AI/iCA;;EAEE,gBAAA;AJkjCF;;AIhjCA;EACE,gBAAA;AJmjCF;;AIjjCA;EACE,YAAA;AJojCF;;AIljCA;EACE,gBAAA;AJqjCF;;AInjCA;;EAEE,gBAAA;AJsjCF;;AIpjCA;EACE,gBAAA;AJujCF;;AIrjCA;EACE,gBAAA;AJwjCF;;AItjCA;EACE,gBAAA;AJyjCF;;AIvjCA;EACE,gBAAA;AJ0jCF;;AIxjCA;;EAEE,gBAAA;AJ2jCF;;AIzjCA;EACE,gBAAA;AJ4jCF;;AI1jCA;;EAEE,gBAAA;AJ6jCF;;AI3jCA;EACE,gBAAA;AJ8jCF;;AI5jCA;EACE,gBAAA;AJ+jCF;;AI7jCA;;EAEE,gBAAA;AJgkCF;;AI9jCA;EACE,gBAAA;AJikCF;;AI/jCA;;;EAGE,gBAAA;AJkkCF;;AIhkCA;EACE,gBAAA;AJmkCF;;AIjkCA;EACE,gBAAA;AJokCF;;AIlkCA;EACE,YAAA;AJqkCF;;AInkCA;EACE,gBAAA;AJskCF;;AIpkCA;EACE,gBAAA;AJukCF;;AIrkCA;;EAEE,gBAAA;AJwkCF;;AItkCA;EACE,gBAAA;AJykCF;;AIvkCA;;EAEE,gBAAA;AJ0kCF;;AIxkCA;EACE,gBAAA;AJ2kCF;;AIzkCA;EACE,gBAAA;AJ4kCF;;AI1kCA;EACE,gBAAA;AJ6kCF;;AI3kCA;EACE,gBAAA;AJ8kCF;;AI5kCA;EACE,gBAAA;AJ+kCF;;AI7kCA;EACE,gBAAA;AJglCF;;AI9kCA;;EAEE,gBAAA;AJilCF;;AI/kCA;EACE,gBAAA;AJklCF;;AIhlCA;EACE,gBAAA;AJmlCF;;AIjlCA;;EAEE,gBAAA;AJolCF;;AIllCA;EACE,gBAAA;AJqlCF;;AInlCA;EACE,gBAAA;AJslCF;;AIplCA;;;EAGE,gBAAA;AJulCF;;AIrlCA;EACE,gBAAA;AJwlCF;;AItlCA;;EAEE,gBAAA;AJylCF;;AIvlCA;EACE,gBAAA;AJ0lCF;;AIxlCA;;EAEE,gBAAA;AJ2lCF;;AIzlCA;EACE,gBAAA;AJ4lCF;;AI1lCA;;EAEE,gBAAA;AJ6lCF;;AI3lCA;EACE,gBAAA;AJ8lCF;;AI5lCA;EACE,gBAAA;AJ+lCF;;AI7lCA;;EAEE,gBAAA;AJgmCF;;AI9lCA;EACE,gBAAA;AJimCF;;AI/lCA;EACE,gBAAA;AJkmCF;;AIhmCA;EACE,YAAA;AJmmCF;;AIjmCA;EACE,gBAAA;AJomCF;;AIlmCA;;EAEE,gBAAA;AJqmCF;;AInmCA;EACE,gBAAA;AJsmCF;;AIpmCA;EACE,gBAAA;AJumCF;;AIrmCA;EACE,gBAAA;AJwmCF;;AItmCA;EACE,gBAAA;AJymCF;;AIvmCA;;EAEE,gBAAA;AJ0mCF;;AIxmCA;EACE,gBAAA;AJ2mCF;;AIzmCA;EACE,gBAAA;AJ4mCF;;AI1mCA;;EAEE,gBAAA;AJ6mCF;;AI3mCA;;EAEE,gBAAA;AJ8mCF;;AI5mCA;EACE,gBAAA;AJ+mCF;;AI7mCA;;EAEE,gBAAA;AJgnCF;;AI9mCA;EACE,gBAAA;AJinCF;;AI/mCA;;EAEE,gBAAA;AJknCF;;AIhnCA;EACE,gBAAA;AJmnCF;;AIjnCA;EACE,YAAA;AJonCF;;AIlnCA;;;;EAIE,gBAAA;AJqnCF;;AInnCA;EACE,gBAAA;AJsnCF;;AIpnCA;EACE,gBAAA;AJunCF;;AIrnCA;EACE,gBAAA;AJwnCF;;AItnCA;EACE,gBAAA;AJynCF;;AIvnCA;EACE,gBAAA;AJ0nCF;;AIxnCA;EACE,gBAAA;AJ2nCF;;AIznCA;EACE,gBAAA;AJ4nCF;;AI1nCA;EACE,gBAAA;AJ6nCF;;AI3nCA;EACE,gBAAA;AJ8nCF;;AI5nCA;;EAEE,gBAAA;AJ+nCF;;AI7nCA;EACE,gBAAA;AJgoCF;;AI9nCA;;EAEE,gBAAA;AJioCF;;AI/nCA;EACE,gBAAA;AJkoCF;;AIhoCA;EACE,gBAAA;AJmoCF;;AIjoCA;EACE,gBAAA;AJooCF;;AIloCA;EACE,gBAAA;AJqoCF;;AInoCA;;EAEE,gBAAA;AJsoCF;;AIpoCA;EACE,gBAAA;AJuoCF;;AIroCA;;EAEE,gBAAA;AJwoCF;;AItoCA;;EAEE,gBAAA;AJyoCF;;AIvoCA;;EAEE,gBAAA;AJ0oCF;;AIxoCA;EACE,gBAAA;AJ2oCF;;AIzoCA;EACE,gBAAA;AJ4oCF;;AI1oCA;EACE,gBAAA;AJ6oCF;;AI3oCA;EACE,gBAAA;AJ8oCF;;AI5oCA;;EAEE,gBAAA;AJ+oCF;;AI7oCA;EACE,gBAAA;AJgpCF;;AI9oCA;EACE,gBAAA;AJipCF;;AI/oCA;;EAEE,gBAAA;AJkpCF;;AIhpCA;EACE,gBAAA;AJmpCF;;AIjpCA;;EAEE,gBAAA;AJopCF;;AIlpCA;EACE,gBAAA;AJqpCF;;AInpCA;EACE,gBAAA;AJspCF;;AIppCA;EACE,gBAAA;AJupCF;;AIrpCA;EACE,gBAAA;AJwpCF;;AItpCA;EACE,gBAAA;AJypCF;;AIvpCA;EACE,gBAAA;AJ0pCF;;AIxpCA;;EAEE,gBAAA;AJ2pCF;;AIzpCA;EACE,gBAAA;AJ4pCF;;AI1pCA;EACE,gBAAA;AJ6pCF;;AI3pCA;EACE,gBAAA;AJ8pCF;;AI5pCA;EACE,gBAAA;AJ+pCF;;AI7pCA;EACE,gBAAA;AJgqCF;;AI9pCA;EACE,gBAAA;AJiqCF;;AI/pCA;EACE,gBAAA;AJkqCF;;AIhqCA;EACE,gBAAA;AJmqCF;;AIjqCA;EACE,gBAAA;AJoqCF;;AIlqCA;EACE,gBAAA;AJqqCF;;AInqCA;EACE,gBAAA;AJsqCF;;AIpqCA;EACE,gBAAA;AJuqCF;;AIrqCA;;EAEE,gBAAA;AJwqCF;;AItqCA;;EAEE,gBAAA;AJyqCF;;AIvqCA;;EAEE,gBAAA;AJ0qCF;;AIxqCA;EACE,gBAAA;AJ2qCF;;AIzqCA;;EAEE,gBAAA;AJ4qCF;;AI1qCA;EACE,gBAAA;AJ6qCF;;AI3qCA;;EAEE,gBAAA;AJ8qCF;;AI5qCA;;EAEE,gBAAA;AJ+qCF;;AI7qCA;EACE,gBAAA;AJgrCF;;AI9qCA;EACE,gBAAA;AJirCF;;AI/qCA;EACE,gBAAA;AJkrCF;;AIhrCA;;EAEE,gBAAA;AJmrCF;;AIjrCA;EACE,gBAAA;AJorCF;;AIlrCA;;EAEE,gBAAA;AJqrCF;;AInrCA;EACE,gBAAA;AJsrCF;;AIprCA;;EAEE,gBAAA;AJurCF;;AIrrCA;EACE,gBAAA;AJwrCF;;AItrCA;EACE,gBAAA;AJyrCF;;AIvrCA;EACE,gBAAA;AJ0rCF;;AIxrCA;EACE,gBAAA;AJ2rCF;;AIzrCA;EACE,gBAAA;AJ4rCF;;AI1rCA;EACE,gBAAA;AJ6rCF;;AI3rCA;EACE,gBAAA;AJ8rCF;;AI5rCA;;;EAGE,gBAAA;AJ+rCF;;AI7rCA;EACE,gBAAA;AJgsCF;;AI9rCA;EACE,gBAAA;AJisCF;;AI/rCA;;EAEE,gBAAA;AJksCF;;AIhsCA;EACE,gBAAA;AJmsCF;;AIjsCA;;EAEE,gBAAA;AJosCF;;AIlsCA;EACE,gBAAA;AJqsCF;;AInsCA;;EAEE,gBAAA;AJssCF;;AIpsCA;;EAEE,gBAAA;AJusCF;;AIrsCA;EACE,gBAAA;AJwsCF;;AItsCA;;EAEE,gBAAA;AJysCF;;AIvsCA;;EAEE,gBAAA;AJ0sCF;;AIxsCA;;EAEE,gBAAA;AJ2sCF;;AIzsCA;EACE,gBAAA;AJ4sCF;;AI1sCA;EACE,gBAAA;AJ6sCF;;AI3sCA;;EAEE,gBAAA;AJ8sCF;;AI5sCA;;EAEE,gBAAA;AJ+sCF;;AI7sCA;EACE,gBAAA;AJgtCF;;AI9sCA;EACE,gBAAA;AJitCF;;AI/sCA;EACE,gBAAA;AJktCF;;AIhtCA;EACE,gBAAA;AJmtCF;;AIjtCA;;EAEE,gBAAA;AJotCF;;AIltCA;;;;EAIE,gBAAA;AJqtCF;;AIntCA;EACE,gBAAA;AJstCF;;AIptCA;;EAEE,gBAAA;AJutCF;;AIrtCA;EACE,gBAAA;AJwtCF;;AIttCA;EACE,gBAAA;AJytCF;;AIvtCA;EACE,gBAAA;AJ0tCF;;AIxtCA;EACE,gBAAA;AJ2tCF;;AIztCA;;EAEE,gBAAA;AJ4tCF;;AI1tCA;EACE,gBAAA;AJ6tCF;;AI3tCA;;EAEE,gBAAA;AJ8tCF;;AI5tCA;EACE,gBAAA;AJ+tCF;;AI7tCA;EACE,gBAAA;AJguCF;;AI9tCA;;EAEE,gBAAA;AJiuCF;;AI/tCA;;EAEE,gBAAA;AJkuCF;;AIhuCA;EACE,gBAAA;AJmuCF;;AIjuCA;EACE,gBAAA;AJouCF;;AIluCA;EACE,gBAAA;AJquCF;;AInuCA;EACE,gBAAA;AJsuCF;;AIpuCA;EACE,gBAAA;AJuuCF;;AIruCA;EACE,gBAAA;AJwuCF;;AItuCA;EACE,gBAAA;AJyuCF;;AIvuCA;EACE,gBAAA;AJ0uCF;;AIxuCA;EACE,gBAAA;AJ2uCF;;AIzuCA;;EAEE,gBAAA;AJ4uCF;;AI1uCA;EACE,gBAAA;AJ6uCF;;AI3uCA;;;EAGE,gBAAA;AJ8uCF;;AI5uCA;EACE,gBAAA;AJ+uCF;;AI7uCA;EACE,gBAAA;AJgvCF;;AI9uCA;;EAEE,gBAAA;AJivCF;;AI/uCA;;;EAGE,gBAAA;AJkvCF;;AIhvCA;EACE,gBAAA;AJmvCF;;AIjvCA;EACE,gBAAA;AJovCF;;AIlvCA;;EAEE,gBAAA;AJqvCF;;AInvCA;EACE,gBAAA;AJsvCF;;AIpvCA;EACE,gBAAA;AJuvCF;;AIrvCA;EACE,gBAAA;AJwvCF;;AItvCA;EACE,gBAAA;AJyvCF;;AIvvCA;EACE,gBAAA;AJ0vCF;;AIxvCA;EACE,gBAAA;AJ2vCF;;AIzvCA;EACE,gBAAA;AJ4vCF;;AI1vCA;EACE,gBAAA;AJ6vCF;;AI3vCA;EACE,gBAAA;AJ8vCF;;AI5vCA;EACE,gBAAA;AJ+vCF;;AI7vCA;EACE,YAAA;AJgwCF;;AI9vCA;EACE,gBAAA;AJiwCF;;AI/vCA;EACE,gBAAA;AJkwCF;;AIhwCA;;EAEE,gBAAA;AJmwCF;;AIjwCA;;EAEE,gBAAA;AJowCF;;AIlwCA;EACE,gBAAA;AJqwCF;;AInwCA;;EAEE,gBAAA;AJswCF;;AIpwCA;EACE,YAAA;AJuwCF;;AIrwCA;;EAEE,gBAAA;AJwwCF;;AItwCA;EACE,gBAAA;AJywCF;;AIvwCA;EACE,gBAAA;AJ0wCF;;AIxwCA;;EAEE,gBAAA;AJ2wCF;;AIzwCA;EACE,gBAAA;AJ4wCF;;AI1wCA;;EAEE,gBAAA;AJ6wCF;;AI3wCA;;EAEE,gBAAA;AJ8wCF;;AI5wCA;;EAEE,gBAAA;AJ+wCF;;AI7wCA;;EAEE,gBAAA;AJgxCF;;AI9wCA;EACE,gBAAA;AJixCF;;AI/wCA;EACE,gBAAA;AJkxCF;;AIhxCA;EACE,gBAAA;AJmxCF;;AIjxCA;EACE,gBAAA;AJoxCF;;AIlxCA;EACE,gBAAA;AJqxCF;;AInxCA;EACE,gBAAA;AJsxCF;;AIpxCA;EACE,gBAAA;AJuxCF;;AIrxCA;EACE,gBAAA;AJwxCF;;AItxCA;;;EAGE,gBAAA;AJyxCF;;AIvxCA;EACE,gBAAA;AJ0xCF;;AIxxCA;;EAEE,gBAAA;AJ2xCF;;AIzxCA;EACE,gBAAA;AJ4xCF;;AI1xCA;EACE,gBAAA;AJ6xCF;;AI3xCA;EACE,gBAAA;AJ8xCF;;AI5xCA;EACE,gBAAA;AJ+xCF;;AI7xCA;;EAEE,gBAAA;AJgyCF;;AI9xCA;EACE,gBAAA;AJiyCF;;AI/xCA;EACE,gBAAA;AJkyCF;;AIhyCA;EACE,gBAAA;AJmyCF;;AIjyCA;EACE,gBAAA;AJoyCF;;AIlyCA;EACE,gBAAA;AJqyCF;;AInyCA;EACE,gBAAA;AJsyCF;;AIpyCA;;EAEE,gBAAA;AJuyCF;;AIryCA;EACE,gBAAA;AJwyCF;;AItyCA;;EAEE,gBAAA;AJyyCF;;AIvyCA;;EAEE,gBAAA;AJ0yCF;;AIxyCA;EACE,gBAAA;AJ2yCF;;AIzyCA;;EAEE,gBAAA;AJ4yCF;;AI1yCA;EACE,gBAAA;AJ6yCF;;AI3yCA;EACE,gBAAA;AJ8yCF;;AI5yCA;EACE,gBAAA;AJ+yCF;;AI7yCA;EACE,gBAAA;AJgzCF;;AI9yCA;;;EAGE,gBAAA;AJizCF;;AI/yCA;;EAEE,gBAAA;AJkzCF;;AIhzCA;EACE,gBAAA;AJmzCF;;AIjzCA;EACE,gBAAA;AJozCF;;AIlzCA;EACE,gBAAA;AJqzCF;;AInzCA;;EAEE,gBAAA;AJszCF;;AIpzCA;EACE,gBAAA;AJuzCF;;AIrzCA;EACE,gBAAA;AJwzCF;;AItzCA;EACE,gBAAA;AJyzCF;;AIvzCA;EACE,gBAAA;AJ0zCF;;AIxzCA;EACE,gBAAA;AJ2zCF;;AIzzCA;EACE,gBAAA;AJ4zCF;;AI1zCA;EACE,gBAAA;AJ6zCF;;AI3zCA;;;EAGE,gBAAA;AJ8zCF;;AI5zCA;EACE,gBAAA;AJ+zCF;;AI7zCA;EACE,gBAAA;AJg0CF;;AI9zCA;;;;;EAKE,gBAAA;AJi0CF;;AI/zCA;;EAEE,gBAAA;AJk0CF;;AIh0CA;;EAEE,gBAAA;AJm0CF;;AIj0CA;EACE,gBAAA;AJo0CF;;AIl0CA;;EAEE,gBAAA;AJq0CF;;AIn0CA;EACE,gBAAA;AJs0CF;;AIp0CA;EACE,gBAAA;AJu0CF;;AIr0CA;;EAEE,gBAAA;AJw0CF;;AIt0CA;EACE,gBAAA;AJy0CF;;AIv0CA;EACE,gBAAA;AJ00CF;;AIx0CA;;EAEE,gBAAA;AJ20CF;;AIz0CA;;EAEE,gBAAA;AJ40CF;;AI10CA;EACE,gBAAA;AJ60CF;;AI30CA;;;EAGE,gBAAA;AJ80CF;;AI50CA;;EAEE,gBAAA;AJ+0CF;;AI70CA;;EAEE,gBAAA;AJg1CF;;AI90CA;;EAEE,gBAAA;AJi1CF;;AI/0CA;EACE,gBAAA;AJk1CF;;AIh1CA;EACE,gBAAA;AJm1CF;;AIj1CA;;EAEE,gBAAA;AJo1CF;;AIl1CA;EACE,gBAAA;AJq1CF;;AIn1CA;;EAEE,gBAAA;AJs1CF;;AIp1CA;EACE,gBAAA;AJu1CF;;AIr1CA;EACE,gBAAA;AJw1CF;;AIt1CA;EACE,gBAAA;AJy1CF;;AIv1CA;EACE,gBAAA;AJ01CF;;AIx1CA;;;;EAIE,gBAAA;AJ21CF;;AIz1CA;;EAEE,gBAAA;AJ41CF;;AI11CA;;EAEE,gBAAA;AJ61CF;;AI31CA;EACE,gBAAA;AJ81CF;;AI51CA;EACE,gBAAA;AJ+1CF;;AI71CA;EACE,gBAAA;AJg2CF;;AI91CA;EACE,gBAAA;AJi2CF;;AI/1CA;;EAEE,gBAAA;AJk2CF;;AIh2CA;EACE,gBAAA;AJm2CF;;AIj2CA;EACE,gBAAA;AJo2CF;;AIl2CA;EACE,gBAAA;AJq2CF;;AIn2CA;EACE,gBAAA;AJs2CF;;AIp2CA;;EAEE,gBAAA;AJu2CF;;AIr2CA;EACE,YAAA;AJw2CF;;AIt2CA;;EAEE,gBAAA;AJy2CF;;AIv2CA;;EAEE,gBAAA;AJ02CF;;AIx2CA;;EAEE,gBAAA;AJ22CF;;AIz2CA;EACE,gBAAA;AJ42CF;;AI12CA;EACE,gBAAA;AJ62CF;;AI32CA;EACE,gBAAA;AJ82CF;;AI52CA;EACE,YAAA;AJ+2CF;;AI72CA;EACE,gBAAA;AJg3CF;;AI92CA;EACE,gBAAA;AJi3CF;;AI/2CA;EACE,gBAAA;AJk3CF;;AIh3CA;;EAEE,gBAAA;AJm3CF;;AIj3CA;;;;EAIE,gBAAA;AJo3CF;;AIl3CA;;EAEE,gBAAA;AJq3CF;;AIn3CA;EACE,gBAAA;AJs3CF;;AIp3CA;EACE,gBAAA;AJu3CF;;AIr3CA;;EAEE,gBAAA;AJw3CF;;AIt3CA;EACE,gBAAA;AJy3CF;;AIv3CA;EACE,gBAAA;AJ03CF;;AIx3CA;EACE,gBAAA;AJ23CF;;AIz3CA;;EAEE,gBAAA;AJ43CF;;AI13CA;EACE,gBAAA;AJ63CF;;AI33CA;EACE,gBAAA;AJ83CF;;AI53CA;EACE,gBAAA;AJ+3CF;;AI73CA;EACE,gBAAA;AJg4CF;;AI93CA;EACE,gBAAA;AJi4CF;;AI/3CA;EACE,gBAAA;AJk4CF;;AIh4CA;EACE,gBAAA;AJm4CF;;AIj4CA;EACE,gBAAA;AJo4CF;;AIl4CA;;EAEE,gBAAA;AJq4CF;;AIn4CA;EACE,gBAAA;AJs4CF;;AIp4CA;EACE,gBAAA;AJu4CF;;AIr4CA;;EAEE,gBAAA;AJw4CF;;AIt4CA;EACE,gBAAA;AJy4CF;;AIv4CA;EACE,gBAAA;AJ04CF;;AIx4CA;;EAEE,gBAAA;AJ24CF;;AIz4CA;EACE,gBAAA;AJ44CF;;AI14CA;EACE,gBAAA;AJ64CF;;AI34CA;EACE,gBAAA;AJ84CF;;AI54CA;EACE,gBAAA;AJ+4CF;;AI74CA;;EAEE,gBAAA;AJg5CF;;AI94CA;EACE,gBAAA;AJi5CF;;AI/4CA;EACE,gBAAA;AJk5CF;;AIh5CA;EACE,gBAAA;AJm5CF;;AIj5CA;EACE,gBAAA;AJo5CF;;AIl5CA;EACE,YAAA;AJq5CF;;AIn5CA;;EAEE,gBAAA;AJs5CF;;AIp5CA;EACE,gBAAA;AJu5CF;;AIr5CA;EACE,gBAAA;AJw5CF;;AIt5CA;EACE,gBAAA;AJy5CF;;AIv5CA;EACE,gBAAA;AJ05CF;;AIx5CA;EACE,gBAAA;AJ25CF;;AIz5CA;;EAEE,gBAAA;AJ45CF;;AI15CA;;EAEE,gBAAA;AJ65CF;;AI35CA;;;EAGE,gBAAA;AJ85CF;;AI55CA;EACE,gBAAA;AJ+5CF;;AI75CA;EACE,gBAAA;AJg6CF;;AI95CA;;;EAGE,gBAAA;AJi6CF;;AI/5CA;;EAEE,gBAAA;AJk6CF;;AIh6CA;EACE,gBAAA;AJm6CF;;AIj6CA;;EAEE,gBAAA;AJo6CF;;AIl6CA;;EAEE,gBAAA;AJq6CF;;AIn6CA;;EAEE,gBAAA;AJs6CF;;AIp6CA;EACE,gBAAA;AJu6CF;;AIr6CA;;;;EAIE,gBAAA;AJw6CF;;AIt6CA;EACE,gBAAA;AJy6CF;;AIv6CA;EACE,gBAAA;AJ06CF;;AIx6CA;EACE,YAAA;AJ26CF;;AIz6CA;EACE,gBAAA;AJ46CF;;AI16CA;EACE,gBAAA;AJ66CF;;AI36CA;EACE,gBAAA;AJ86CF;;AI56CA;;EAEE,gBAAA;AJ+6CF;;AI76CA;;;EAGE,gBAAA;AJg7CF;;AI96CA;;EAEE,gBAAA;AJi7CF;;AI/6CA;;EAEE,gBAAA;AJk7CF;;AIh7CA;EACE,gBAAA;AJm7CF;;AIj7CA;EACE,gBAAA;AJo7CF;;AIl7CA;EACE,gBAAA;AJq7CF;;AIn7CA;;EAEE,gBAAA;AJs7CF;;AIp7CA;EACE,gBAAA;AJu7CF;;AIr7CA;;EAEE,gBAAA;AJw7CF;;AIt7CA;EACE,gBAAA;AJy7CF;;AIv7CA;EACE,gBAAA;AJ07CF;;AIx7CA;EACE,gBAAA;AJ27CF;;AIz7CA;EACE,gBAAA;AJ47CF;;AI17CA;EACE,gBAAA;AJ67CF;;AI37CA;EACE,gBAAA;AJ87CF;;AI57CA;EACE,gBAAA;AJ+7CF;;AI77CA;;EAEE,gBAAA;AJg8CF;;AI97CA;EACE,gBAAA;AJi8CF;;AI/7CA;EACE,gBAAA;AJk8CF;;AIh8CA;;EAEE,gBAAA;AJm8CF;;AIj8CA;EACE,gBAAA;AJo8CF;;AIl8CA;EACE,gBAAA;AJq8CF;;AIn8CA;EACE,gBAAA;AJs8CF;;AIp8CA;EACE,gBAAA;AJu8CF;;AIr8CA;EACE,gBAAA;AJw8CF;;AIt8CA;EACE,gBAAA;AJy8CF;;AIv8CA;;;;;EAKE,gBAAA;AJ08CF;;AIx8CA;;;;EAIE,gBAAA;AJ28CF;;AIz8CA;EACE,gBAAA;AJ48CF;;AI18CA;EACE,gBAAA;AJ68CF;;AI38CA;;EAEE,gBAAA;AJ88CF;;AI58CA;EACE,gBAAA;AJ+8CF;;AI78CA;EACE,gBAAA;AJg9CF;;AI98CA;EACE,gBAAA;AJi9CF;;AI/8CA;;EAEE,gBAAA;AJk9CF;;AIh9CA;EACE,gBAAA;AJm9CF;;AIj9CA;EACE,gBAAA;AJo9CF;;AIl9CA;;;EAGE,gBAAA;AJq9CF;;AIn9CA;EACE,YAAA;AJs9CF;;AIp9CA;EACE,gBAAA;AJu9CF;;AIr9CA;EACE,gBAAA;AJw9CF;;AIt9CA;EACE,gBAAA;AJy9CF;;AIv9CA;EACE,gBAAA;AJ09CF;;AIx9CA;EACE,gBAAA;AJ29CF;;AIz9CA;EACE,gBAAA;AJ49CF;;AI19CA;;EAEE,gBAAA;AJ69CF;;AI39CA;EACE,gBAAA;AJ89CF;;AI59CA;;EAEE,gBAAA;AJ+9CF;;AI79CA;EACE,gBAAA;AJg+CF;;AI99CA;;EAEE,gBAAA;AJi+CF;;AI/9CA;EACE,gBAAA;AJk+CF;;AIh+CA;EACE,gBAAA;AJm+CF;;AIj+CA;EACE,gBAAA;AJo+CF;;AIl+CA;EACE,gBAAA;AJq+CF;;AIn+CA;;EAEE,gBAAA;AJs+CF;;AIp+CA;;EAEE,gBAAA;AJu+CF;;AIr+CA;EACE,gBAAA;AJw+CF;;AIt+CA;;EAEE,gBAAA;AJy+CF;;AIv+CA;EACE,gBAAA;AJ0+CF;;AIx+CA;EACE,gBAAA;AJ2+CF;;AIz+CA;EACE,gBAAA;AJ4+CF;;AI1+CA;EACE,gBAAA;AJ6+CF;;AI3+CA;EACE,gBAAA;AJ8+CF;;AI5+CA;;EAEE,gBAAA;AJ++CF;;AI7+CA;EACE,gBAAA;AJg/CF;;AI9+CA;EACE,gBAAA;AJi/CF;;AI/+CA;;EAEE,gBAAA;AJk/CF;;AIh/CA;EACE,gBAAA;AJm/CF;;AIj/CA;;;;EAIE,gBAAA;AJo/CF;;AIl/CA;EACE,gBAAA;AJq/CF;;AIn/CA;EACE,gBAAA;AJs/CF;;AIp/CA;EACE,gBAAA;AJu/CF;;AIr/CA;EACE,gBAAA;AJw/CF;;AIt/CA;EACE,gBAAA;AJy/CF;;AIv/CA;EACE,gBAAA;AJ0/CF;;AIx/CA;;EAEE,gBAAA;AJ2/CF;;AIz/CA;;EAEE,gBAAA;AJ4/CF;;AI1/CA;EACE,gBAAA;AJ6/CF;;AI3/CA;EACE,YAAA;AJ8/CF;;AI5/CA;;EAEE,gBAAA;AJ+/CF;;AI7/CA;EACE,gBAAA;AJggDF;;AI9/CA;;EAEE,gBAAA;AJigDF;;AI//CA;EACE,gBAAA;AJkgDF;;AIhgDA;;;;EAIE,gBAAA;AJmgDF;;AIjgDA;EACE,gBAAA;AJogDF;;AIlgDA;EACE,gBAAA;AJqgDF;;AIngDA;;EAEE,gBAAA;AJsgDF;;AIpgDA;EACE,gBAAA;AJugDF;;AIrgDA;EACE,gBAAA;AJwgDF;;AItgDA;EACE,gBAAA;AJygDF;;AIvgDA;;;EAGE,gBAAA;AJ0gDF;;AIxgDA;EACE,gBAAA;AJ2gDF;;AIzgDA;;;EAGE,gBAAA;AJ4gDF;;AI1gDA;EACE,gBAAA;AJ6gDF;;AI3gDA;EACE,gBAAA;AJ8gDF;;AI5gDA;;;EAGE,gBAAA;AJ+gDF;;AI7gDA;EACE,gBAAA;AJghDF;;AI9gDA;EACE,gBAAA;AJihDF;;AI/gDA;;EAEE,gBAAA;AJkhDF;;AIhhDA;EACE,gBAAA;AJmhDF;;AIjhDA;EACE,gBAAA;AJohDF;;AIlhDA;EACE,gBAAA;AJqhDF;;AInhDA;EACE,gBAAA;AJshDF;;AIphDA;EACE,gBAAA;AJuhDF;;AIrhDA;;EAEE,gBAAA;AJwhDF;;AIthDA;EACE,gBAAA;AJyhDF;;AIvhDA;;;EAGE,gBAAA;AJ0hDF;;AIxhDA;;EAEE,gBAAA;AJ2hDF;;AIzhDA;;EAEE,gBAAA;AJ4hDF;;AI1hDA;EACE,gBAAA;AJ6hDF;;AI3hDA;EACE,gBAAA;AJ8hDF;;AI5hDA;EACE,gBAAA;AJ+hDF;;AI7hDA;EACE,gBAAA;AJgiDF;;AI9hDA;;EAEE,gBAAA;AJiiDF;;AI/hDA;;;EAGE,gBAAA;AJkiDF;;AIhiDA;;EAEE,gBAAA;AJmiDF;;AIjiDA;;EAEE,gBAAA;AJoiDF;;AIliDA;EACE,gBAAA;AJqiDF;;AIniDA;EACE,gBAAA;AJsiDF;;AIpiDA;EACE,gBAAA;AJuiDF;;AIriDA;;EAEE,gBAAA;AJwiDF;;AItiDA;EACE,gBAAA;AJyiDF;;AIviDA;;;EAGE,gBAAA;AJ0iDF;;AIxiDA;EACE,gBAAA;AJ2iDF;;AIziDA;EACE,gBAAA;AJ4iDF;;AI1iDA;EACE,gBAAA;AJ6iDF;;AI3iDA;;;EAGE,gBAAA;AJ8iDF;;AI5iDA;EACE,gBAAA;AJ+iDF;;AI7iDA;EACE,gBAAA;AJgjDF;;AI9iDA;;EAEE,gBAAA;AJijDF;;AI/iDA;EACE,gBAAA;AJkjDF;;AIhjDA;EACE,gBAAA;AJmjDF;;AIjjDA;;EAEE,gBAAA;AJojDF;;AIljDA;EACE,gBAAA;AJqjDF;;AInjDA;EACE,gBAAA;AJsjDF;;AIpjDA;EACE,gBAAA;AJujDF;;AIrjDA;EACE,gBAAA;AJwjDF;;AItjDA;;EAEE,gBAAA;AJyjDF;;AIvjDA;EACE,gBAAA;AJ0jDF;;AIxjDA;;;EAGE,gBAAA;AJ2jDF;;AIzjDA;EACE,gBAAA;AJ4jDF;;AI1jDA;;EAEE,gBAAA;AJ6jDF;;AI3jDA;EACE,gBAAA;AJ8jDF;;AI5jDA;;EAEE,gBAAA;AJ+jDF;;AI7jDA;EACE,gBAAA;AJgkDF;;AI9jDA;EACE,gBAAA;AJikDF;;AI/jDA;;EAEE,gBAAA;AJkkDF;;AIhkDA;EACE,YAAA;AJmkDF;;AIjkDA;;EAEE,gBAAA;AJokDF;;AIlkDA;;EAEE,gBAAA;AJqkDF;;AInkDA;EACE,gBAAA;AJskDF;;AIpkDA;EACE,gBAAA;AJukDF;;AIrkDA;;EAEE,gBAAA;AJwkDF;;AItkDA;EACE,gBAAA;AJykDF;;AIvkDA;;EAEE,gBAAA;AJ0kDF;;AIxkDA;;EAEE,gBAAA;AJ2kDF;;AIzkDA;EACE,gBAAA;AJ4kDF;;AI1kDA;;EAEE,gBAAA;AJ6kDF;;AI3kDA;EACE,gBAAA;AJ8kDF;;AI5kDA;;;EAGE,gBAAA;AJ+kDF;;AI7kDA;EACE,gBAAA;AJglDF;;AI9kDA;;EAEE,gBAAA;AJilDF;;AI/kDA;;EAEE,gBAAA;AJklDF;;AIhlDA;;EAEE,gBAAA;AJmlDF;;AIjlDA;EACE,gBAAA;AJolDF;;AIllDA;;EAEE,gBAAA;AJqlDF;;AInlDA;;EAEE,YAAA;AJslDF;;AIplDA;EACE,gBAAA;AJulDF;;AIrlDA;EACE,gBAAA;AJwlDF;;AItlDA;;;;;EAKE,gBAAA;AJylDF;;AIvlDA;;EAEE,gBAAA;AJ0lDF;;AIxlDA;;EAEE,gBAAA;AJ2lDF;;AIzlDA;EACE,gBAAA;AJ4lDF;;AI1lDA;EACE,gBAAA;AJ6lDF;;AI3lDA;EACE,gBAAA;AJ8lDF;;AI5lDA;EACE,gBAAA;AJ+lDF;;AI7lDA;;EAEE,gBAAA;AJgmDF;;AI9lDA;EACE,gBAAA;AJimDF;;AI/lDA;;EAEE,gBAAA;AJkmDF;;AIhmDA;EACE,gBAAA;AJmmDF;;AIjmDA;EACE,gBAAA;AJomDF;;AIlmDA;EACE,gBAAA;AJqmDF;;AInmDA;EACE,gBAAA;AJsmDF;;AIpmDA;EACE,YAAA;AJumDF;;AIrmDA;EACE,gBAAA;AJwmDF;;AItmDA;EACE,gBAAA;AJymDF;;AIvmDA;;;;;EAKE,gBAAA;AJ0mDF;;AIxmDA;EACE,gBAAA;AJ2mDF;;AIzmDA;EACE,gBAAA;AJ4mDF;;AI1mDA;;EAEE,gBAAA;AJ6mDF;;AI3mDA;EACE,gBAAA;AJ8mDF;;AI5mDA;EACE,gBAAA;AJ+mDF;;AI7mDA;EACE,gBAAA;AJgnDF;;AI9mDA;EACE,gBAAA;AJinDF;;AI/mDA;;EAEE,gBAAA;AJknDF;;AIhnDA;EACE,gBAAA;AJmnDF;;AIjnDA;EACE,gBAAA;AJonDF;;AIlnDA;;EAEE,gBAAA;AJqnDF;;AInnDA;EACE,gBAAA;AJsnDF;;AIpnDA;EACE,gBAAA;AJunDF;;AIrnDA;EACE,gBAAA;AJwnDF;;AItnDA;EACE,gBAAA;AJynDF;;AIvnDA;EACE,gBAAA;AJ0nDF;;AIxnDA;EACE,gBAAA;AJ2nDF;;AIznDA;EACE,gBAAA;AJ4nDF;;AI1nDA;EACE,gBAAA;AJ6nDF;;AI3nDA;EACE,gBAAA;AJ8nDF;;AI5nDA;EACE,gBAAA;AJ+nDF;;AI7nDA;EACE,gBAAA;AJgoDF;;AI9nDA;EACE,gBAAA;AJioDF;;AI/nDA;EACE,gBAAA;AJkoDF;;AIhoDA;EACE,gBAAA;AJmoDF;;AIjoDA;;EAEE,gBAAA;AJooDF;;AIloDA;EACE,gBAAA;AJqoDF;;AInoDA;EACE,gBAAA;AJsoDF;;AIpoDA;;EAEE,gBAAA;AJuoDF;;AIroDA;EACE,gBAAA;AJwoDF;;AItoDA;;EAEE,gBAAA;AJyoDF;;AIvoDA;EACE,gBAAA;AJ0oDF;;AIxoDA;EACE,gBAAA;AJ2oDF;;AIzoDA;EACE,gBAAA;AJ4oDF;;AI1oDA;EACE,gBAAA;AJ6oDF;;AI3oDA;;EAEE,YAAA;AJ8oDF;;AI5oDA;EACE,gBAAA;AJ+oDF;;AI7oDA;EACE,gBAAA;AJgpDF;;AI9oDA;EACE,gBAAA;AJipDF;;AI/oDA;;EAEE,gBAAA;AJkpDF;;AIhpDA;;EAEE,gBAAA;AJmpDF;;AIjpDA;EACE,gBAAA;AJopDF;;AIlpDA;;EAEE,gBAAA;AJqpDF;;AInpDA;EACE,gBAAA;AJspDF;;AIppDA;EACE,gBAAA;AJupDF;;AIrpDA;;EAEE,gBAAA;AJwpDF;;AItpDA;EACE,gBAAA;AJypDF;;AIvpDA;EACE,gBAAA;AJ0pDF;;AIxpDA;EACE,gBAAA;AJ2pDF;;AIzpDA;;EAEE,gBAAA;AJ4pDF;;AI1pDA;EACE,gBAAA;AJ6pDF;;AI3pDA;EACE,gBAAA;AJ8pDF;;AI5pDA;EACE,gBAAA;AJ+pDF;;AI7pDA;;EAEE,gBAAA;AJgqDF;;AI9pDA;EACE,gBAAA;AJiqDF;;AI/pDA;EACE,gBAAA;AJkqDF;;AIhqDA;;EAEE,gBAAA;AJmqDF;;AIjqDA;EACE,gBAAA;AJoqDF;;AIlqDA;;EAEE,gBAAA;AJqqDF;;AInqDA;EACE,gBAAA;AJsqDF;;AIpqDA;EACE,gBAAA;AJuqDF;;AIrqDA;;EAEE,gBAAA;AJwqDF;;AItqDA;EACE,gBAAA;AJyqDF;;AIvqDA;;EAEE,gBAAA;AJ0qDF;;AIxqDA;EACE,gBAAA;AJ2qDF;;AIzqDA;;EAEE,gBAAA;AJ4qDF;;AI1qDA;;EAEE,gBAAA;AJ6qDF;;AI3qDA;;EAEE,gBAAA;AJ8qDF;;AI5qDA;;EAEE,gBAAA;AJ+qDF;;AI7qDA;;EAEE,gBAAA;AJgrDF;;AI9qDA;EACE,gBAAA;AJirDF;;AI/qDA;;EAEE,gBAAA;AJkrDF;;AIhrDA;;EAEE,gBAAA;AJmrDF;;AIjrDA;EACE,gBAAA;AJorDF;;AIlrDA;EACE,gBAAA;AJqrDF;;AInrDA;EACE,gBAAA;AJsrDF;;AIprDA;EACE,gBAAA;AJurDF;;AIrrDA;;EAEE,gBAAA;AJwrDF;;AItrDA;EACE,gBAAA;AJyrDF;;AIvrDA;EACE,gBAAA;AJ0rDF;;AIxrDA;EACE,gBAAA;AJ2rDF;;AIzrDA;;EAEE,gBAAA;AJ4rDF;;AI1rDA;EACE,gBAAA;AJ6rDF;;AI3rDA;EACE,gBAAA;AJ8rDF;;AI5rDA;EACE,gBAAA;AJ+rDF;;AI7rDA;EACE,gBAAA;AJgsDF;;AI9rDA;EACE,gBAAA;AJisDF;;AI/rDA;;EAEE,gBAAA;AJksDF;;AIhsDA;EACE,gBAAA;AJmsDF;;AIjsDA;EACE,gBAAA;AJosDF;;AIlsDA;EACE,gBAAA;AJqsDF;;AInsDA;;EAEE,gBAAA;AJssDF;;AIpsDA;;;EAGE,gBAAA;AJusDF;;AIrsDA;EACE,YAAA;AJwsDF;;AItsDA;;EAEE,gBAAA;AJysDF;;AIvsDA;EACE,gBAAA;AJ0sDF;;AIxsDA;EACE,YAAA;AJ2sDF;;AIzsDA;EACE,gBAAA;AJ4sDF;;AI1sDA;EACE,gBAAA;AJ6sDF;;AI3sDA;EACE,gBAAA;AJ8sDF;;AI5sDA;EACE,gBAAA;AJ+sDF;;AI7sDA;EACE,gBAAA;AJgtDF;;AI9sDA;EACE,gBAAA;AJitDF;;AI/sDA;EACE,gBAAA;AJktDF;;AIhtDA;EACE,gBAAA;AJmtDF;;AIjtDA;;EAEE,gBAAA;AJotDF;;AIltDA;EACE,gBAAA;AJqtDF;;AIntDA;EACE,gBAAA;AJstDF;;AIptDA;EACE,gBAAA;AJutDF;;AIrtDA;;EAEE,gBAAA;AJwtDF;;AIttDA;EACE,gBAAA;AJytDF;;AIvtDA;EACE,gBAAA;AJ0tDF;;AIxtDA;EACE,gBAAA;AJ2tDF;;AIztDA;;EAEE,gBAAA;AJ4tDF;;AI1tDA;;EAEE,gBAAA;AJ6tDF;;AI3tDA;EACE,gBAAA;AJ8tDF;;AI5tDA;EACE,gBAAA;AJ+tDF;;AI7tDA;;;;EAIE,gBAAA;AJguDF;;AI9tDA;EACE,gBAAA;AJiuDF;;AI/tDA;EACE,gBAAA;AJkuDF;;AIhuDA;;EAEE,gBAAA;AJmuDF;;AIjuDA;;EAEE,gBAAA;AJouDF;;AIluDA;EACE,gBAAA;AJquDF;;AInuDA;EACE,gBAAA;AJsuDF;;AIpuDA;;EAEE,gBAAA;AJuuDF;;AIruDA;EACE,gBAAA;AJwuDF;;AItuDA;EACE,gBAAA;AJyuDF;;AIvuDA;;EAEE,gBAAA;AJ0uDF;;AIxuDA;EACE,gBAAA;AJ2uDF;;AIzuDA;EACE,gBAAA;AJ4uDF;;AI1uDA;;EAEE,gBAAA;AJ6uDF;;AI3uDA;EACE,gBAAA;AJ8uDF;;AI5uDA;;EAEE,gBAAA;AJ+uDF;;AI7uDA;;;EAGE,gBAAA;AJgvDF;;AI9uDA;EACE,gBAAA;AJivDF;;AI/uDA;;EAEE,gBAAA;AJkvDF;;AIhvDA;EACE,YAAA;AJmvDF;;AIjvDA;;EAEE,gBAAA;AJovDF;;AIlvDA;;EAEE,gBAAA;AJqvDF;;AInvDA;EACE,gBAAA;AJsvDF;;AIpvDA;EACE,gBAAA;AJuvDF;;AIrvDA;EACE,gBAAA;AJwvDF;;AItvDA;;EAEE,gBAAA;AJyvDF;;AIvvDA;EACE,gBAAA;AJ0vDF;;AIxvDA;EACE,gBAAA;AJ2vDF;;AIzvDA;EACE,gBAAA;AJ4vDF;;AI1vDA;EACE,gBAAA;AJ6vDF;;AI3vDA;EACE,gBAAA;AJ8vDF;;AI5vDA;;EAEE,gBAAA;AJ+vDF;;AI7vDA;EACE,gBAAA;AJgwDF;;AI9vDA;EACE,gBAAA;AJiwDF;;AI/vDA;EACE,gBAAA;AJkwDF;;AIhwDA;;EAEE,gBAAA;AJmwDF;;AIjwDA;EACE,gBAAA;AJowDF;;AIlwDA;EACE,gBAAA;AJqwDF;;AInwDA;;EAEE,gBAAA;AJswDF;;AIpwDA;;EAEE,gBAAA;AJuwDF;;AIrwDA;;;;EAIE,gBAAA;AJwwDF;;AItwDA;EACE,gBAAA;AJywDF;;AIvwDA;EACE,gBAAA;AJ0wDF;;AIxwDA;;EAEE,gBAAA;AJ2wDF;;AIzwDA;EACE,gBAAA;AJ4wDF;;AI1wDA;;;EAGE,gBAAA;AJ6wDF;;AI3wDA;EACE,gBAAA;AJ8wDF;;AI5wDA;;EAEE,gBAAA;AJ+wDF;;AI7wDA;EACE,gBAAA;AJgxDF;;AI9wDA;EACE,gBAAA;AJixDF;;AI/wDA;EACE,gBAAA;AJkxDF;;AIhxDA;;EAEE,gBAAA;AJmxDF;;AIjxDA;EACE,gBAAA;AJoxDF;;AIlxDA;EACE,gBAAA;AJqxDF;;AInxDA;EACE,gBAAA;AJsxDF;;AIpxDA;EACE,gBAAA;AJuxDF;;AIrxDA;;EAEE,gBAAA;AJwxDF;;AItxDA;EACE,gBAAA;AJyxDF;;AIvxDA;;;EAGE,gBAAA;AJ0xDF;;AIxxDA;EACE,gBAAA;AJ2xDF;;AIzxDA;;;EAGE,gBAAA;AJ4xDF;;AI1xDA;;EAEE,gBAAA;AJ6xDF;;AI3xDA;;EAEE,gBAAA;AJ8xDF;;AI5xDA;;EAEE,gBAAA;AJ+xDF;;AI7xDA;;EAEE,gBAAA;AJgyDF;;AI9xDA;EACE,gBAAA;AJiyDF;;AI/xDA;;EAEE,gBAAA;AJkyDF;;AIhyDA;EACE,gBAAA;AJmyDF;;AIjyDA;EACE,gBAAA;AJoyDF;;AIlyDA;EACE,gBAAA;AJqyDF;;AInyDA;;EAEE,gBAAA;AJsyDF;;AIpyDA;EACE,gBAAA;AJuyDF;;AIryDA;;;EAGE,gBAAA;AJwyDF;;AItyDA;EACE,gBAAA;AJyyDF;;AIvyDA;EACE,gBAAA;AJ0yDF;;AIxyDA;;EAEE,gBAAA;AJ2yDF;;AIzyDA;;EAEE,gBAAA;AJ4yDF;;AI1yDA;;EAEE,gBAAA;AJ6yDF;;AI3yDA;EACE,gBAAA;AJ8yDF;;AI5yDA;EACE,gBAAA;AJ+yDF;;AI7yDA;;EAEE,gBAAA;AJgzDF;;AI9yDA;EACE,gBAAA;AJizDF;;AI/yDA;EACE,gBAAA;AJkzDF;;AIhzDA;;EAEE,gBAAA;AJmzDF;;AIjzDA;EACE,gBAAA;AJozDF;;AIlzDA;EACE,gBAAA;AJqzDF;;AInzDA;;EAEE,gBAAA;AJszDF;;AIpzDA;EACE,gBAAA;AJuzDF;;AIrzDA;;EAEE,gBAAA;AJwzDF;;AItzDA;EACE,gBAAA;AJyzDF;;AIvzDA;EACE,gBAAA;AJ0zDF;;AIxzDA;EACE,gBAAA;AJ2zDF;;AIzzDA;EACE,gBAAA;AJ4zDF;;AI1zDA;EACE,gBAAA;AJ6zDF;;AI3zDA;EACE,gBAAA;AJ8zDF;;AI5zDA;EACE,gBAAA;AJ+zDF;;AI7zDA;EACE,gBAAA;AJg0DF;;AI9zDA;;EAEE,gBAAA;AJi0DF;;AI/zDA;EACE,gBAAA;AJk0DF;;AIh0DA;EACE,gBAAA;AJm0DF;;AIj0DA;EACE,gBAAA;AJo0DF;;AIl0DA;EACE,gBAAA;AJq0DF;;AIn0DA;;EAEE,gBAAA;AJs0DF;;AIp0DA;EACE,gBAAA;AJu0DF;;AIr0DA;EACE,gBAAA;AJw0DF;;AIt0DA;EACE,YAAA;AJy0DF;;AIv0DA;EACE,gBAAA;AJ00DF;;AIx0DA;EACE,gBAAA;AJ20DF;;AIz0DA;;;EAGE,gBAAA;AJ40DF;;AI10DA;;;EAGE,YAAA;AJ60DF;;AI30DA;EACE,YAAA;AJ80DF;;AI50DA;;EAEE,gBAAA;AJ+0DF;;AI70DA;;EAEE,gBAAA;AJg1DF;;AI90DA;EACE,gBAAA;AJi1DF;;AI/0DA;;;;;EAKE,gBAAA;AJk1DF;;AIh1DA;EACE,gBAAA;AJm1DF;;AIj1DA;EACE,gBAAA;AJo1DF;;AIl1DA;EACE,YAAA;AJq1DF;;AIn1DA;EACE,gBAAA;AJs1DF;;AIp1DA;;EAEE,gBAAA;AJu1DF;;AIr1DA;EACE,gBAAA;AJw1DF;;AIt1DA;EACE,gBAAA;AJy1DF;;AIv1DA;;EAEE,gBAAA;AJ01DF;;AIx1DA;;EAEE,gBAAA;AJ21DF;;AIz1DA;;EAEE,gBAAA;AJ41DF;;AI11DA;EACE,gBAAA;AJ61DF;;AI31DA;EACE,gBAAA;AJ81DF;;AI51DA;;EAEE,gBAAA;AJ+1DF;;AI71DA;;EAEE,gBAAA;AJg2DF;;AI91DA;EACE,gBAAA;AJi2DF;;AI/1DA;EACE,gBAAA;AJk2DF;;AIh2DA;;EAEE,gBAAA;AJm2DF;;AIj2DA;;;;EAIE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;AJo2DF;;AIl2DA;;EAEE,iDAAA;EACA,0DAAA;AJq2DF;;AIn2DA;EACE,oCAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,0HACE;AJq2DJ;AIl2DA;;EAEE,gBAAA;AJo2DF;;AIl2DA;EACE,gBAAA;AJq2DF;;AIn2DA;EACE,gBAAA;AJs2DF;;AIp2DA;EACE,gBAAA;AJu2DF;;AIr2DA;EACE,gBAAA;AJw2DF;;AIt2DA;EACE,gBAAA;AJy2DF;;AIv2DA;EACE,gBAAA;AJ02DF;;AIx2DA;EACE,gBAAA;AJ22DF;;AIz2DA;EACE,gBAAA;AJ42DF;;AI12DA;EACE,gBAAA;AJ62DF;;AI32DA;EACE,gBAAA;AJ82DF;;AI52DA;EACE,gBAAA;AJ+2DF;;AI72DA;EACE,gBAAA;AJg3DF;;AI92DA;EACE,gBAAA;AJi3DF;;AI/2DA;EACE,gBAAA;AJk3DF;;AIh3DA;EACE,gBAAA;AJm3DF;;AIj3DA;EACE,gBAAA;AJo3DF;;AIl3DA;EACE,gBAAA;AJq3DF;;AIn3DA;EACE,gBAAA;AJs3DF;;AIp3DA;EACE,gBAAA;AJu3DF;;AIr3DA;EACE,gBAAA;AJw3DF;;AIt3DA;EACE,gBAAA;AJy3DF;;AIv3DA;EACE,gBAAA;AJ03DF;;AIx3DA;;EAEE,gBAAA;AJ23DF;;AIz3DA;EACE,gBAAA;AJ43DF;;AI13DA;EACE,gBAAA;AJ63DF;;AI33DA;EACE,gBAAA;AJ83DF;;AI53DA;EACE,gBAAA;AJ+3DF;;AI73DA;EACE,gBAAA;AJg4DF;;AI93DA;EACE,gBAAA;AJi4DF;;AI/3DA;EACE,gBAAA;AJk4DF;;AIh4DA;EACE,gBAAA;AJm4DF;;AIj4DA;EACE,gBAAA;AJo4DF;;AIl4DA;EACE,gBAAA;AJq4DF;;AIn4DA;EACE,gBAAA;AJs4DF;;AIp4DA;EACE,gBAAA;AJu4DF;;AIr4DA;EACE,gBAAA;AJw4DF;;AIt4DA;EACE,gBAAA;AJy4DF;;AIv4DA;EACE,gBAAA;AJ04DF;;AIx4DA;EACE,gBAAA;AJ24DF;;AIz4DA;EACE,gBAAA;AJ44DF;;AI14DA;EACE,gBAAA;AJ64DF;;AI34DA;;EAEE,gBAAA;AJ84DF;;AI54DA;EACE,gBAAA;AJ+4DF;;AI74DA;EACE,gBAAA;AJg5DF;;AI94DA;EACE,gBAAA;AJi5DF;;AI/4DA;EACE,gBAAA;AJk5DF;;AIh5DA;EACE,gBAAA;AJm5DF;;AIj5DA;EACE,gBAAA;AJo5DF;;AIl5DA;;EAEE,gBAAA;AJq5DF;;AIn5DA;EACE,gBAAA;AJs5DF;;AIp5DA;EACE,gBAAA;AJu5DF;;AIr5DA;;EAEE,gBAAA;AJw5DF;;AIt5DA;EACE,gBAAA;AJy5DF;;AIv5DA;EACE,gBAAA;AJ05DF;;AIx5DA;EACE,gBAAA;AJ25DF;;AIz5DA;;EAEE,gBAAA;AJ45DF;;AI15DA;EACE,gBAAA;AJ65DF;;AI35DA;EACE,gBAAA;AJ85DF;;AI55DA;EACE,gBAAA;AJ+5DF;;AI75DA;EACE,gBAAA;AJg6DF;;AI95DA;EACE,gBAAA;AJi6DF;;AI/5DA;EACE,gBAAA;AJk6DF;;AIh6DA;EACE,gBAAA;AJm6DF;;AIj6DA;EACE,gBAAA;AJo6DF;;AIl6DA;EACE,gBAAA;AJq6DF;;AIn6DA;EACE,gBAAA;AJs6DF;;AIp6DA;EACE,gBAAA;AJu6DF;;AIr6DA;EACE,gBAAA;AJw6DF;;AIt6DA;EACE,gBAAA;AJy6DF;;AIv6DA;EACE,gBAAA;AJ06DF;;AIx6DA;EACE,gBAAA;AJ26DF;;AIz6DA;EACE,gBAAA;AJ46DF;;AI16DA;;EAEE,gBAAA;AJ66DF;;AI36DA;EACE,gBAAA;AJ86DF;;AI56DA;EACE,gBAAA;AJ+6DF;;AI76DA;EACE,gBAAA;AJg7DF;;AI96DA;EACE,gBAAA;AJi7DF;;AI/6DA;EACE,gBAAA;AJk7DF;;AIh7DA;EACE,gBAAA;AJm7DF;;AIj7DA;EACE,gBAAA;AJo7DF;;AIl7DA;EACE,gBAAA;AJq7DF;;AIn7DA;EACE,gBAAA;AJs7DF;;AIp7DA;EACE,gBAAA;AJu7DF;;AIr7DA;EACE,gBAAA;AJw7DF;;AIt7DA;EACE,gBAAA;AJy7DF;;AIv7DA;EACE,gBAAA;AJ07DF;;AIx7DA;EACE,gBAAA;AJ27DF;;AIz7DA;EACE,gBAAA;AJ47DF;;AI17DA;EACE,gBAAA;AJ67DF;;AI37DA;EACE,gBAAA;AJ87DF;;AI57DA;EACE,gBAAA;AJ+7DF;;AI77DA;EACE,gBAAA;AJg8DF;;AI97DA;EACE,gBAAA;AJi8DF;;AI/7DA;;EAEE,gBAAA;AJk8DF;;AIh8DA;EACE,gBAAA;AJm8DF;;AIj8DA;EACE,gBAAA;AJo8DF;;AIl8DA;EACE,gBAAA;AJq8DF;;AIn8DA;EACE,gBAAA;AJs8DF;;AIp8DA;EACE,gBAAA;AJu8DF;;AIr8DA;EACE,gBAAA;AJw8DF;;AIt8DA;;EAEE,gBAAA;AJy8DF;;AIv8DA;EACE,gBAAA;AJ08DF;;AIx8DA;EACE,gBAAA;AJ28DF;;AIz8DA;EACE,gBAAA;AJ48DF;;AI18DA;EACE,gBAAA;AJ68DF;;AI38DA;EACE,gBAAA;AJ88DF;;AI58DA;EACE,gBAAA;AJ+8DF;;AI78DA;EACE,gBAAA;AJg9DF;;AI98DA;EACE,gBAAA;AJi9DF;;AI/8DA;EACE,gBAAA;AJk9DF;;AIh9DA;EACE,gBAAA;AJm9DF;;AIj9DA;EACE,gBAAA;AJo9DF;;AIl9DA;;EAEE,gBAAA;AJq9DF;;AIn9DA;EACE,gBAAA;AJs9DF;;AIp9DA;EACE,gBAAA;AJu9DF;;AIr9DA;EACE,gBAAA;AJw9DF;;AIt9DA;EACE,gBAAA;AJy9DF;;AIv9DA;EACE,gBAAA;AJ09DF;;AIx9DA;EACE,gBAAA;AJ29DF;;AIz9DA;EACE,gBAAA;AJ49DF;;AI19DA;EACE,gBAAA;AJ69DF;;AI39DA;EACE,gBAAA;AJ89DF;;AI59DA;EACE,gBAAA;AJ+9DF;;AI79DA;EACE,gBAAA;AJg+DF;;AI99DA;EACE,gBAAA;AJi+DF;;AI/9DA;EACE,gBAAA;AJk+DF;;AIh+DA;EACE,gBAAA;AJm+DF;;AIj+DA;EACE,gBAAA;AJo+DF;;AIl+DA;EACE,gBAAA;AJq+DF;;AIn+DA;;EAEE,gBAAA;AJs+DF;;AIp+DA;EACE,gBAAA;AJu+DF;;AIr+DA;;EAEE,gBAAA;AJw+DF;;AIt+DA;EACE,gBAAA;AJy+DF;;AIv+DA;EACE,gBAAA;AJ0+DF;;AIx+DA;EACE,gBAAA;AJ2+DF;;AIz+DA;EACE,gBAAA;AJ4+DF;;AI1+DA;EACE,gBAAA;AJ6+DF;;AI3+DA;EACE,gBAAA;AJ8+DF;;AI5+DA;EACE,gBAAA;AJ++DF;;AI7+DA;EACE,gBAAA;AJg/DF;;AI9+DA;EACE,gBAAA;AJi/DF;;AI/+DA;EACE,gBAAA;AJk/DF;;AIh/DA;EACE,gBAAA;AJm/DF;;AIj/DA;EACE,gBAAA;AJo/DF;;AIl/DA;EACE,gBAAA;AJq/DF;;AIn/DA;EACE,gBAAA;AJs/DF;;AIp/DA;EACE,gBAAA;AJu/DF;;AIr/DA;EACE,gBAAA;AJw/DF;;AIt/DA;EACE,gBAAA;AJy/DF;;AIv/DA;EACE,gBAAA;AJ0/DF;;AIx/DA;EACE,gBAAA;AJ2/DF;;AIz/DA;EACE,gBAAA;AJ4/DF;;AI1/DA;EACE,gBAAA;AJ6/DF;;AI3/DA;EACE,gBAAA;AJ8/DF;;AI5/DA;EACE,gBAAA;AJ+/DF;;AI7/DA;EACE,gBAAA;AJggEF;;AI9/DA;EACE,gBAAA;AJigEF;;AI//DA;EACE,gBAAA;AJkgEF;;AIhgEA;EACE,gBAAA;AJmgEF;;AIjgEA;EACE,gBAAA;AJogEF;;AIlgEA;EACE,gBAAA;AJqgEF;;AIngEA;EACE,gBAAA;AJsgEF;;AIpgEA;EACE,gBAAA;AJugEF;;AIrgEA;;EAEE,gBAAA;AJwgEF;;AItgEA;EACE,gBAAA;AJygEF;;AIvgEA;;EAEE,gBAAA;AJ0gEF;;AIxgEA;EACE,gBAAA;AJ2gEF;;AIzgEA;;;EAGE,gBAAA;AJ4gEF;;AI1gEA;EACE,gBAAA;AJ6gEF;;AI3gEA;EACE,gBAAA;AJ8gEF;;AI5gEA;EACE,gBAAA;AJ+gEF;;AI7gEA;EACE,gBAAA;AJghEF;;AI9gEA;EACE,gBAAA;AJihEF;;AI/gEA;EACE,gBAAA;AJkhEF;;AIhhEA;EACE,gBAAA;AJmhEF;;AIjhEA;EACE,gBAAA;AJohEF;;AIlhEA;;EAEE,gBAAA;AJqhEF;;AInhEA;EACE,gBAAA;AJshEF;;AIphEA;EACE,gBAAA;AJuhEF;;AIrhEA;EACE,gBAAA;AJwhEF;;AIthEA;EACE,gBAAA;AJyhEF;;AIvhEA;EACE,gBAAA;AJ0hEF;;AIxhEA;EACE,gBAAA;AJ2hEF;;AIzhEA;EACE,gBAAA;AJ4hEF;;AI1hEA;EACE,gBAAA;AJ6hEF;;AI3hEA;EACE,gBAAA;AJ8hEF;;AI5hEA;EACE,gBAAA;AJ+hEF;;AI7hEA;EACE,gBAAA;AJgiEF;;AI9hEA;EACE,gBAAA;AJiiEF;;AI/hEA;EACE,gBAAA;AJkiEF;;AIhiEA;EACE,gBAAA;AJmiEF;;AIjiEA;EACE,gBAAA;AJoiEF;;AIliEA;EACE,gBAAA;AJqiEF;;AIniEA;;EAEE,gBAAA;AJsiEF;;AIpiEA;EACE,gBAAA;AJuiEF;;AIriEA;EACE,gBAAA;AJwiEF;;AItiEA;EACE,gBAAA;AJyiEF;;AIviEA;EACE,gBAAA;AJ0iEF;;AIxiEA;EACE,gBAAA;AJ2iEF;;AIziEA;EACE,gBAAA;AJ4iEF;;AI1iEA;EACE,gBAAA;AJ6iEF;;AI3iEA;;EAEE,gBAAA;AJ8iEF;;AI5iEA;EACE,gBAAA;AJ+iEF;;AI7iEA;EACE,gBAAA;AJgjEF;;AI9iEA;EACE,gBAAA;AJijEF;;AI/iEA;EACE,gBAAA;AJkjEF;;AIhjEA;EACE,gBAAA;AJmjEF;;AIjjEA;EACE,gBAAA;AJojEF;;AIljEA;EACE,gBAAA;AJqjEF;;AInjEA;EACE,gBAAA;AJsjEF;;AIpjEA;EACE,gBAAA;AJujEF;;AIrjEA;EACE,gBAAA;AJwjEF;;AItjEA;EACE,gBAAA;AJyjEF;;AIvjEA;EACE,gBAAA;AJ0jEF;;AIxjEA;EACE,gBAAA;AJ2jEF;;AIzjEA;EACE,gBAAA;AJ4jEF;;AI1jEA;EACE,gBAAA;AJ6jEF;;AI3jEA;EACE,gBAAA;AJ8jEF;;AI5jEA;EACE,gBAAA;AJ+jEF;;AI7jEA;EACE,gBAAA;AJgkEF;;AI9jEA;EACE,gBAAA;AJikEF;;AI/jEA;EACE,gBAAA;AJkkEF;;AIhkEA;EACE,gBAAA;AJmkEF;;AIjkEA;EACE,gBAAA;AJokEF;;AIlkEA;;EAEE,gBAAA;AJqkEF;;AInkEA;EACE,gBAAA;AJskEF;;AIpkEA;EACE,gBAAA;AJukEF;;AIrkEA;EACE,gBAAA;AJwkEF;;AItkEA;EACE,gBAAA;AJykEF;;AIvkEA;EACE,gBAAA;AJ0kEF;;AIxkEA;EACE,gBAAA;AJ2kEF;;AIzkEA;EACE,gBAAA;AJ4kEF;;AI1kEA;EACE,gBAAA;AJ6kEF;;AI3kEA;EACE,gBAAA;AJ8kEF;;AI5kEA;EACE,gBAAA;AJ+kEF;;AI7kEA;EACE,gBAAA;AJglEF;;AI9kEA;EACE,gBAAA;AJilEF;;AI/kEA;EACE,gBAAA;AJklEF;;AIhlEA;EACE,gBAAA;AJmlEF;;AIjlEA;EACE,gBAAA;AJolEF;;AIllEA;EACE,gBAAA;AJqlEF;;AInlEA;EACE,gBAAA;AJslEF;;AIplEA;EACE,gBAAA;AJulEF;;AIrlEA;EACE,gBAAA;AJwlEF;;AItlEA;EACE,gBAAA;AJylEF;;AIvlEA;EACE,gBAAA;AJ0lEF;;AIxlEA;EACE,gBAAA;AJ2lEF;;AIzlEA;EACE,gBAAA;AJ4lEF;;AI1lEA;EACE,gBAAA;AJ6lEF;;AI3lEA;EACE,gBAAA;AJ8lEF;;AI5lEA;EACE,gBAAA;AJ+lEF;;AI7lEA;EACE,gBAAA;AJgmEF;;AI9lEA;EACE,gBAAA;AJimEF;;AI/lEA;EACE,gBAAA;AJkmEF;;AIhmEA;EACE,gBAAA;AJmmEF;;AIjmEA;EACE,gBAAA;AJomEF;;AIlmEA;EACE,gBAAA;AJqmEF;;AInmEA;;EAEE,gBAAA;AJsmEF;;AIpmEA;EACE,gBAAA;AJumEF;;AIrmEA;EACE,gBAAA;AJwmEF;;AItmEA;EACE,gBAAA;AJymEF;;AIvmEA;EACE,gBAAA;AJ0mEF;;AIxmEA;EACE,gBAAA;AJ2mEF;;AIzmEA;EACE,gBAAA;AJ4mEF;;AI1mEA;EACE,gBAAA;AJ6mEF;;AI3mEA;EACE,gBAAA;AJ8mEF;;AI5mEA;EACE,gBAAA;AJ+mEF;;AI7mEA;EACE,gBAAA;AJgnEF;;AI9mEA;EACE,gBAAA;AJinEF;;AI/mEA;;EAEE,gBAAA;AJknEF;;AIhnEA;EACE,gBAAA;AJmnEF;;AIjnEA;EACE,gBAAA;AJonEF;;AIlnEA;EACE,gBAAA;AJqnEF;;AInnEA;EACE,gBAAA;AJsnEF;;AIpnEA;EACE,gBAAA;AJunEF;;AIrnEA;EACE,gBAAA;AJwnEF;;AItnEA;EACE,gBAAA;AJynEF;;AIvnEA;EACE,gBAAA;AJ0nEF;;AIxnEA;EACE,gBAAA;AJ2nEF;;AIznEA;EACE,gBAAA;AJ4nEF;;AI1nEA;EACE,gBAAA;AJ6nEF;;AI3nEA;EACE,gBAAA;AJ8nEF;;AI5nEA;EACE,gBAAA;AJ+nEF;;AI7nEA;EACE,gBAAA;AJgoEF;;AI9nEA;EACE,gBAAA;AJioEF;;AI/nEA;EACE,gBAAA;AJkoEF;;AIhoEA;EACE,gBAAA;AJmoEF;;AIjoEA;EACE,gBAAA;AJooEF;;AIloEA;EACE,gBAAA;AJqoEF;;AInoEA;EACE,gBAAA;AJsoEF;;AIpoEA;EACE,gBAAA;AJuoEF;;AIroEA;EACE,gBAAA;AJwoEF;;AItoEA;EACE,gBAAA;AJyoEF;;AIvoEA;EACE,gBAAA;AJ0oEF;;AIxoEA;EACE,gBAAA;AJ2oEF;;AIzoEA;EACE,gBAAA;AJ4oEF;;AI1oEA;EACE,gBAAA;AJ6oEF;;AI3oEA;EACE,gBAAA;AJ8oEF;;AI5oEA;EACE,gBAAA;AJ+oEF;;AI7oEA;EACE,gBAAA;AJgpEF;;AI9oEA;;EAEE,gBAAA;AJipEF;;AI/oEA;EACE,gBAAA;AJkpEF;;AIhpEA;EACE,gBAAA;AJmpEF;;AIjpEA;;EAEE,gBAAA;AJopEF;;AIlpEA;EACE,gBAAA;AJqpEF;;AInpEA;EACE,gBAAA;AJspEF;;AIppEA;EACE,gBAAA;AJupEF;;AIrpEA;EACE,gBAAA;AJwpEF;;AItpEA;EACE,gBAAA;AJypEF;;AIvpEA;EACE,gBAAA;AJ0pEF;;AIxpEA;EACE,gBAAA;AJ2pEF;;AIzpEA;;EAEE,gBAAA;AJ4pEF;;AI1pEA;EACE,gBAAA;AJ6pEF;;AI3pEA;EACE,gBAAA;AJ8pEF;;AI5pEA;EACE,gBAAA;AJ+pEF;;AI7pEA;EACE,gBAAA;AJgqEF;;AI9pEA;EACE,gBAAA;AJiqEF;;AI/pEA;EACE,gBAAA;AJkqEF;;AIhqEA;EACE,gBAAA;AJmqEF;;AIjqEA;EACE,gBAAA;AJoqEF;;AIlqEA;EACE,gBAAA;AJqqEF;;AInqEA;;EAEE,gBAAA;AJsqEF;;AIpqEA;EACE,gBAAA;AJuqEF;;AIrqEA;EACE,gBAAA;AJwqEF;;AItqEA;EACE,gBAAA;AJyqEF;;AIvqEA;EACE,gBAAA;AJ0qEF;;AIxqEA;EACE,gBAAA;AJ2qEF;;AIzqEA;EACE,gBAAA;AJ4qEF;;AI1qEA;EACE,gBAAA;AJ6qEF;;AI3qEA;EACE,gBAAA;AJ8qEF;;AI5qEA;EACE,gBAAA;AJ+qEF;;AI7qEA;EACE,gBAAA;AJgrEF;;AI9qEA;EACE,gBAAA;AJirEF;;AI/qEA;EACE,gBAAA;AJkrEF;;AIhrEA;EACE,gBAAA;AJmrEF;;AIjrEA;EACE,gBAAA;AJorEF;;AIlrEA;EACE,gBAAA;AJqrEF;;AInrEA;EACE,gBAAA;AJsrEF;;AIprEA;EACE,gBAAA;AJurEF;;AIrrEA;EACE,gBAAA;AJwrEF;;AItrEA;EACE,gBAAA;AJyrEF;;AIvrEA;EACE,gBAAA;AJ0rEF;;AIxrEA;EACE,gBAAA;AJ2rEF;;AIzrEA;EACE,gBAAA;AJ4rEF;;AI1rEA;EACE,gBAAA;AJ6rEF;;AI3rEA;EACE,gBAAA;AJ8rEF;;AI5rEA;EACE,gBAAA;AJ+rEF;;AI7rEA;EACE,gBAAA;AJgsEF;;AI9rEA;EACE,gBAAA;AJisEF;;AI/rEA;EACE,gBAAA;AJksEF;;AIhsEA;EACE,gBAAA;AJmsEF;;AIjsEA;EACE,gBAAA;AJosEF;;AIlsEA;EACE,gBAAA;AJqsEF;;AInsEA;EACE,gBAAA;AJssEF;;AIpsEA;EACE,gBAAA;AJusEF;;AIrsEA;EACE,gBAAA;AJwsEF;;AItsEA;EACE,gBAAA;AJysEF;;AIvsEA;EACE,gBAAA;AJ0sEF;;AIxsEA;EACE,gBAAA;AJ2sEF;;AIzsEA;EACE,gBAAA;AJ4sEF;;AI1sEA;EACE,gBAAA;AJ6sEF;;AI3sEA;EACE,gBAAA;AJ8sEF;;AI5sEA;EACE,gBAAA;AJ+sEF;;AI7sEA;EACE,gBAAA;AJgtEF;;AI9sEA;EACE,gBAAA;AJitEF;;AI/sEA;EACE,gBAAA;AJktEF;;AIhtEA;EACE,gBAAA;AJmtEF;;AIjtEA;EACE,gBAAA;AJotEF;;AIltEA;EACE,gBAAA;AJqtEF;;AIntEA;EACE,gBAAA;AJstEF;;AIptEA;;EAEE,gBAAA;AJutEF;;AIrtEA;EACE,gBAAA;AJwtEF;;AIttEA;EACE,gBAAA;AJytEF;;AIvtEA;EACE,gBAAA;AJ0tEF;;AIxtEA;EACE,gBAAA;AJ2tEF;;AIztEA;EACE,gBAAA;AJ4tEF;;AI1tEA;EACE,gBAAA;AJ6tEF;;AI3tEA;EACE,gBAAA;AJ8tEF;;AI5tEA;EACE,gBAAA;AJ+tEF;;AI7tEA;EACE,gBAAA;AJguEF;;AI9tEA;EACE,gBAAA;AJiuEF;;AI/tEA;;EAEE,gBAAA;AJkuEF;;AIhuEA;EACE,gBAAA;AJmuEF;;AIjuEA;EACE,gBAAA;AJouEF;;AIluEA;EACE,gBAAA;AJquEF;;AInuEA;;EAEE,gBAAA;AJsuEF;;AIpuEA;EACE,gBAAA;AJuuEF;;AIruEA;EACE,gBAAA;AJwuEF;;AItuEA;EACE,gBAAA;AJyuEF;;AIvuEA;EACE,gBAAA;AJ0uEF;;AIxuEA;EACE,gBAAA;AJ2uEF;;AIzuEA;EACE,gBAAA;AJ4uEF;;AI1uEA;EACE,gBAAA;AJ6uEF;;AI3uEA;EACE,gBAAA;AJ8uEF;;AI5uEA;EACE,gBAAA;AJ+uEF;;AI7uEA;EACE,gBAAA;AJgvEF;;AI9uEA;;EAEE,gBAAA;AJivEF;;AI/uEA;;EAEE,gBAAA;AJkvEF;;AIhvEA;EACE,gBAAA;AJmvEF;;AIjvEA;EACE,gBAAA;AJovEF;;AIlvEA;EACE,gBAAA;AJqvEF;;AInvEA;EACE,gBAAA;AJsvEF;;AIpvEA;EACE,gBAAA;AJuvEF;;AIrvEA;EACE,gBAAA;AJwvEF;;AItvEA;EACE,gBAAA;AJyvEF;;AIvvEA;EACE,gBAAA;AJ0vEF;;AIxvEA;EACE,gBAAA;AJ2vEF;;AIzvEA;EACE,gBAAA;AJ4vEF;;AI1vEA;EACE,gBAAA;AJ6vEF;;AI3vEA;EACE,gBAAA;AJ8vEF;;AI5vEA;EACE,gBAAA;AJ+vEF;;AI7vEA;EACE,gBAAA;AJgwEF;;AI9vEA;EACE,gBAAA;AJiwEF;;AI/vEA;EACE,gBAAA;AJkwEF;;AIhwEA;EACE,gBAAA;AJmwEF;;AIjwEA;EACE,gBAAA;AJowEF;;AIlwEA;EACE,gBAAA;AJqwEF;;AInwEA;EACE,gBAAA;AJswEF;;AIpwEA;EACE,gBAAA;AJuwEF;;AIrwEA;EACE,gBAAA;AJwwEF;;AItwEA;EACE,gBAAA;AJywEF;;AIvwEA;EACE,gBAAA;AJ0wEF;;AIxwEA;EACE,gBAAA;AJ2wEF;;AIzwEA;EACE,gBAAA;AJ4wEF;;AI1wEA;EACE,gBAAA;AJ6wEF;;AI3wEA;EACE,gBAAA;AJ8wEF;;AI5wEA;EACE,gBAAA;AJ+wEF;;AI7wEA;EACE,gBAAA;AJgxEF;;AI9wEA;EACE,gBAAA;AJixEF;;AI/wEA;EACE,gBAAA;AJkxEF;;AIhxEA;EACE,gBAAA;AJmxEF;;AIjxEA;EACE,gBAAA;AJoxEF;;AIlxEA;EACE,gBAAA;AJqxEF;;AInxEA;EACE,gBAAA;AJsxEF;;AIpxEA;EACE,gBAAA;AJuxEF;;AIrxEA;EACE,gBAAA;AJwxEF;;AItxEA;EACE,gBAAA;AJyxEF;;AIvxEA;EACE,gBAAA;AJ0xEF;;AIxxEA;EACE,gBAAA;AJ2xEF;;AIzxEA;EACE,gBAAA;AJ4xEF;;AI1xEA;EACE,gBAAA;AJ6xEF;;AI3xEA;;EAEE,gBAAA;AJ8xEF;;AI5xEA;EACE,gBAAA;AJ+xEF;;AI7xEA;EACE,gBAAA;AJgyEF;;AI9xEA;;EAEE,gBAAA;AJiyEF;;AI/xEA;EACE,gBAAA;AJkyEF;;AIhyEA;EACE,gBAAA;AJmyEF;;AIjyEA;;EAEE,gBAAA;AJoyEF;;AIlyEA;EACE,gBAAA;AJqyEF;;AInyEA;EACE,gBAAA;AJsyEF;;AIpyEA;EACE,gBAAA;AJuyEF;;AIryEA;EACE,gBAAA;AJwyEF;;AItyEA;EACE,gBAAA;AJyyEF;;AIvyEA;EACE,gBAAA;AJ0yEF;;AIxyEA;EACE,gBAAA;AJ2yEF;;AIzyEA;;EAEE,gBAAA;AJ4yEF;;AI1yEA;EACE,gBAAA;AJ6yEF;;AI3yEA;EACE,gBAAA;AJ8yEF;;AI5yEA;EACE,gBAAA;AJ+yEF;;AI7yEA;EACE,gBAAA;AJgzEF;;AI9yEA;EACE,gBAAA;AJizEF;;AI/yEA;EACE,gBAAA;AJkzEF;;AIhzEA;EACE,gBAAA;AJmzEF;;AIjzEA;EACE,gBAAA;AJozEF;;AIlzEA;EACE,gBAAA;AJqzEF;;AInzEA;EACE,gBAAA;AJszEF;;AIpzEA;EACE,gBAAA;AJuzEF;;AIrzEA;EACE,gBAAA;AJwzEF;;AItzEA;EACE,gBAAA;AJyzEF;;AIvzEA;EACE,gBAAA;AJ0zEF;;AIxzEA;EACE,gBAAA;AJ2zEF;;AIzzEA;EACE,gBAAA;AJ4zEF;;AI1zEA;EACE,gBAAA;AJ6zEF;;AI3zEA;EACE,gBAAA;AJ8zEF;;AI5zEA;EACE,gBAAA;AJ+zEF;;AI7zEA;EACE,gBAAA;AJg0EF;;AI9zEA;EACE,gBAAA;AJi0EF;;AI/zEA;EACE,gBAAA;AJk0EF;;AIh0EA;EACE,gBAAA;AJm0EF;;AIj0EA;EACE,gBAAA;AJo0EF;;AIl0EA;EACE,gBAAA;AJq0EF;;AIn0EA;EACE,gBAAA;AJs0EF;;AIp0EA;EACE,gBAAA;AJu0EF;;AIr0EA;EACE,gBAAA;AJw0EF;;AIt0EA;;EAEE,yDAAA;AJy0EF;;AIv0EA;EACE,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,0HACE;AJy0EJ;AIt0EA;;EAEE,gBAAA;AJw0EF;;AIt0EA;;EAEE,gDAAA;EACA,uDAAA;AJy0EF;;AIv0EA;EACE,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,0HACE;AJy0EJ;AIt0EA;;EAEE,gBAAA;AJw0EF;;AIt0EA;EACE,oCAAA;EACA,mBAAA;EACA,gBAAA;EACA,0HACE;AJw0EJ;AIr0EA;EACE,kCAAA;EACA,mBAAA;EACA,gBAAA;EACA,0HACE;AJs0EJ;AIn0EA;EACE,kCAAA;EACA,mBAAA;EACA,gBAAA;EACA,0HACE;AJo0EJ;AIj0EA;EACE,0BAAA;EACA,mBAAA;EACA,0HACE;AJk0EJ;AI/zEA;EACE,0BAAA;EACA,mBAAA;EACA,0HACE;AJg0EJ;AI7zEA;EACE,0BAAA;EACA,mBAAA;EACA,0HACE;EAEF,4oBAAA;AJ6zEF;AIrzEA;EACE,0BAAA;EACA,mBAAA;EACA,0HACE;EAEF,2RAAA;AJqzEF;AKrtSA;EACE,yBCFW;EDGX,eCDY;EDEZ,kBAAA;EACA,8BAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;ALutSF;AKttSE;EACE,aAAA;EACA,YAAA;ALwtSJ;AKrtSE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WChBU;EDiBV,YCjBU;EDkBV,2DACE;ALstSN;AKntSE;EACE,oBAAA;ALqtSJ;AKltSI;EACE,aAAA;EACA,eAAA;ALotSN;AKhtSI;EACE,aChCa;EDiCb,eCjCa;ANmvSnB;AK/sSE;EACE,WAAA;EACA,YAAA;ALitSJ;AK9sSI;EACE,mBAAA;EACA,kBAAA;EACA,YAAA;ALgtSN;AK/sSM;;;;EAIE,qCAAA;EACA,qBAAA;EACA,gCAAA;ALitSR;AK9sSM;EACE,iCAAA;EACA,qBAAA;EACA,gCAAA;ALgtSR;AK7sSI;EACE,qBAAA;EACA,8BAAA;EACA,uBAAA;EACA,gCAAA;AL+sSN;AK3sSI;EACE,eAAA;AL6sSN;AK1sSM;EACE,aAAA;EACA,eAAA;AL4sSR;AKxsSI;EACE,aAAA;AL0sSN;AKzsSM;EACE,aAAA;AL2sSR;AK1sSQ;EACE,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,0CAAA;AL4sSV;AKzsSM;EACE,6BAAA;EACA,gBAAA;EACA,2BAAA;EAAA,sBAAA;EACA,cAAA;EACA,oBAAA;AL2sSR;AK1sSQ;EACE,kCAAA;EAAA,0BAAA;AL4sSV;AKzsSM;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,gBAAA;EACA,iDAAA;AL2sSR;AK1sSQ;EACE,iBAAA;EACA,yBAAA;EACA,YAAA;EACA,8CAAA;EACA,oBAAA;AL4sSV;AK3sSU;EACE,UAAA;AL6sSZ;AK3sSU;EACE,kBAAA;AL6sSZ;AK3sSU;EACE,6BAAA;AL6sSZ;AK3sSU;EACE,kBAAA;EACA,QAAA;AL6sSZ;AK3sSU;EACE,kBAAA;EACA,QAAA;EACA,6BAAA;AL6sSZ;AKzsSM;EACE,2BAAA;EAAA,sBAAA;EACA,cAAA;EACA,oBAAA;AL2sSR;AK1sSQ;EACE,kCAAA;EAAA,0BAAA;AL4sSV;AK1sSQ;EACE,iBAAA;AL4sSV;AKxsSI;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;EACA,WAAA;EACA,yBAAA;EACA,wCAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,gCAAA;AL0sSN;AKzsSM;EACE,aAAA;EACA,mBAAA;AL2sSR;AK1sSQ;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;AL4sSV;AK1sSQ;EACE,0BAAA;AL4sSV;AK1sSQ;EACE,gBAAA;EACA,eAAA;EACA,sBAAA;EACA,cAAA;EACA,kBAAA;AL4sSV;AK1sSQ;EACE,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AL4sSV;AK3sSU;EACE,UAAA;EACA,WAAA;EACA,WAAA;AL6sSZ;AKzsSM;EACE,oBAAA;AL2sSR;AKzsSM;EACE,mBAAA;EACA,wBAAA;EACA,kBAAA;EACA,iBAAA;EACA,0CAAA;EACA,yBAAA;EACA,iDAAA;EACA,iBAAA;EACA,WAAA;AL2sSR;AKzsSM;EACE,YAAA;AL2sSR;AK5sSM;EACE,YAAA;AL2sSR;AK5sSM;EACE,YAAA;AL2sSR;AKzsSM;;EAEE,cAAA;AL2sSR;AKzsSM;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;AL2sSR;AK1sSQ;EACE,kCAAA;EAAA,0BAAA;EACA,oBAAA;AL4sSV;AK1sSQ;EACE,wCAAA;AL4sSV;AKvsSE;EACE,WAAA;EACA,YAAA;EACA,aCpOe;EDqOf,eCrOe;AN86SnB;AKvsSE;EACE,aAAA;EACA,aCzOe;ED0Of,eC1Oe;ED2Of,WAAA;EACA,YAAA;ALysSJ;AKvsSE;EACE,aAAA;ALysSJ;AKvsSE;EACE,aAAA;ALysSJ;AKvsSE;;EAEE,YAAA;EACA,WAAA;EACA,kBAAA;ALysSJ;AKtsSE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,0BAAA;EACA,UAAA;EACA,4BAAA;ALwsSJ;AKvsSI;EACE,WAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;ALysSN;AKvsSI;EACE,wBAAA;ALysSN;AKvsSI;EACE,yBAAA;ALysSN;AKtsSE;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;ALwsSJ;AKpsSI;EACE,UAAA;ALssSN;AKnsSE;EACE,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,aAAA;EACA,oBAAA;EACA,sBAAA;EACA,YAAA;ALqsSJ;AKlsSE;EACE,UAAA;ALosSJ;AKnsSI;EACE,6BAAA;ALqsSN;AKnsSI;;EAEE,MAAA;EACA,sBAAA;ALqsSN;AKnsSI;EACE,yBAAA;ALqsSN;AKnsSI;EACE,wBAAA;ALqsSN;AKlsSE;EACE,WAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;ALosSJ;AKlsSE;;EAEE,WAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;ALosSJ;AKlsSE;EACE,SAAA;ALosSJ;AKlsSE;EACE,QAAA;ALosSJ;AKjsSI;EACE,iCAAA;EACA,qBAAA;EACA,gCAAA;ALmsSN;AKjsSI;EACE,qCAAA;EACA,qBAAA;EACA,gCAAA;ALmsSN;AKjsSI;EACE,qCAAA;EACA,qBAAA;EACA,gCAAA;ALmsSN;AKjsSI;EACE,8BAAA;EACA,qBAAA;EACA,8CAAA;EACA,oEACE;ALksSR;AK9rSE;EACE,aAAA;EACA,mBAAA;ALgsSJ;AK/rSI;EACE,YAAA;EACA,eAAA;ALisSN;AK/rSI;EACE,kBAAA;EACA,UAAA;EACA,UAAA;EACA,UAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,wCAAA;EACA,mGACE;ALgsSR;AK7rSM;EACE,eAAA;AL+rSR;AK9rSQ;EACE,oBAAA;ALgsSV;AK9rSQ;EACE,mDAAA;ALgsSV;AK/rSU;EACE,UAAA;ALisSZ;AK7rSM;EACE,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,4CAAA;EACA,YAAA;EACA,eAAA;AL+rSR;AK7rSM;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AL+rSR;AK5rSQ;EACE,mDAAA;AL8rSV;AK3rSM;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,gCAAA;AL6rSR;AK5rSQ;EACE,UAAA;AL8rSV;AK1rSQ;EACE,mCAAA;EACA,yBAAA;EACA,cAAA;AL4rSV;AKxrSQ;EACE,mCAAA;EACA,yBAAA;EACA,cAAA;AL0rSV;AKtrSQ;EACE,mCAAA;EACA,yBAAA;EACA,cAAA;ALwrSV;AKprSQ;EACE,mCAAA;EACA,yBAAA;EACA,cAAA;ALsrSV;AKlrSM;EACE,kBAAA;ALorSR;AKlrSM;;EAEE,gBAAA;ALorSR;AKjrSI;EACE,aCrda;EDsdb,YAAA;EACA,WAAA;ALmrSN;AKjrSI;EACE,aC1da;ED2db,YAAA;EACA,WAAA;EACA,aAAA;ALmrSN;AK/qSE;EACE,WCneU;EDoeV,YCpeU;EDqeV,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;EACA,aAAA;ALirSJ;AK/qSE;EACE,WAAA;EACA,aAAA;EACA,YC9eU;AN+pTd;AK9qSI;EACE,aAAA;EACA,eAAA;ALgrSN;;AK5qSA;EACE,UAAA;EACA,kBAAA;EACA,iBAAA;EACA,UAAA;EACA,kBAAA;EACA,wCAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,gCAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,WAAA;AL+qSF;AK9qSE;EACE,aAAA;EACA,mBAAA;EACA,oFACE;AL+qSN;AK7qSI;EACE,YAAA;EACA,YAAA;EACA,iBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,4BAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;AL+qSN;AK7qSI;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;AL+qSN;AK7qSM;EACE,UAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AL+qSR;AK3qSM;EACE,UAAA;EACA,wBAAA;AL6qSR;AKzqSE;EACE,aAAA;EACA,sBAAA;EACA,eAAA;AL2qSJ;AK1qSI;EACE,qBAAA;EACA,eAAA;EACA,wCAAA;AL4qSN;AK1qSI;EACE,kBAAA;EACA,8BAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;AL4qSN;AK3qSM;EACE,kBAAA;AL6qSR;AK1qSI;EACE,UAAA;EACA,oBAAA;AL4qSN;AK1qSI;EACE,cAAA;EACA,iDAAA;AL4qSN;;AKxqSA;EACE,UAAA;EACA,mBAAA;EACA,YAAA;AL2qSF;;AKzqSA;EACE,6BAAA;AL4qSF;;AOhwTE;;EAEE,wBAAA;APmwTJ;AOjwTE;EACE,cAAA;APmwTJ;AOhwTI;EACE,aAAA;APkwTN;AOhwTI;EACE,cAAA;APkwTN;AOhwTI;EACE,yBAAA;APkwTN;AOhwTI;EACE,aAAA;APkwTN;AO/vTE;EACE,yBAAA;APiwTJ;AOhwTI;EACE,aAAA;APkwTN;AO/vTE;EACE,aAAA;APiwTJ;;AO9vTA;EAEI;IACE,WAAA;IACA,YAAA;EPgwTJ;EO7vTI;IACE,aAAA;EP+vTN;EO7vTI;IACE,WAAA;IACA,YAAA;EP+vTN;AACF;AQ1yTA;EACE;IACE,WAAA;ER4yTF;EQ3yTE;IACE,WAAA;IACA,YAAA;ER6yTJ;EQ3yTE;IACE,aAAA;IACA,cAAA;ER6yTJ;EQ1yTI;IACE,aAAA;IACA,eAAA;ER4yTN;EQzyTE;IACE,aAAA;ER2yTJ;EQzyTE;IACE,cAAA;ER2yTJ;EQzyTE;IACE,WAAA;IACA,YAAA;ER2yTJ;EQzyTE;IACE,4BAAA;IACA,oBAAA;IACA,gBAAA;ER2yTJ;EQzyTE;IACE,WAAA;IACA,YAAA;IACA,aAAA;ER2yTJ;EQzyTE;IACE,WAAA;IACA,YAAA;ER2yTJ;EQzyTE;IACE,SAAA;ER2yTJ;EQzyTE;IACE,QAAA;ER2yTJ;EQzyTE;IACE,qBAAA;ER2yTJ;EQzyTE;IACE,aAAA;ER2yTJ;EQzyTE;IACE,yBAAA;ER2yTJ;EQzyTE;IACE,WAAA;IACA,YAAA;ER2yTJ;EQzyTE;IACE,YAAA;IACA,aF9Da;ENy2TjB;EQxyTA;IACE,iBAAA;ER0yTF;EQzyTE;IACE,uBAAA;IACA,uCAAA;ER2yTJ;EQxyTA;IACE,6BAAA;ER0yTF;AACF;AQxyTA;EACE;IACE,gBAAA;ER0yTF;AACF;AQxyTA;EACE;IACE,gBAAA;IACA,kBAAA;IACA,OAAA;IACA,MAAA;IACA,QAAA;IACA,gBAAA;IACA,YAAA;IACA,0CAAA;ER0yTF;EQzyTE;IACE,WAAA;IACA,aAAA;ER2yTJ;EQ1yTI;IACE,gBAAA;ER4yTN;EQ1yTI;IACE,yBAAA;IACA,eAAA;IACA,OAAA;IACA,SAAA;IACA,aAAA;IACA,mBAAA;IACA,uCAAA;IACA,gBAAA;ER4yTN;EQ1yTI;IACE,kBAAA;IACA,6BAAA;IACA,QAAA;IACA,cAAA;ER4yTN;EQzyTM;IACE,gDAAA;ER2yTR;EQvyTI;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,SAAA;IACA,sBAAA;IACA,mDAAA;ERyyTN;EQxyTM;IAME,cAAA;ERqyTR;EQ1yTQ;IACE,iBAAA;IACA,cAAA;IACA,kBAAA;ER4yTV;EQtyTM;IACE,kBAAA;ERwyTR;EQpyTE;IACE,aAAA;ERsyTJ;EQnyTA;IACE,WAAA;IACA,eAAA;IACA,SAAA;IACA,kBAAA;IACA,cAAA;IACA,WAAA;IACA,gGAAA;ERqyTF;EQ/xTA;IACE,cAAA;IACA,YAAA;IACA,eAAA;IACA,SAAA;IACA,gBAAA;IACA,0BAAA;ERiyTF;AACF;ASv8TE;;EAKE,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;EACA,gCAAA;EACA,oBAAA;ATs8TJ;AS98TI;;EACE,UAAA;ATi9TN;ASz8TI;;EACE,6BAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AT48TN;AS18TI;;EACE,eAAA;AT68TN;AS38TI;;EACE,eAAA;EACA,mBAAA;AT88TN;AS38TE;EACE,YAAA;AT68TJ;AS38TE;EACE,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,gCAAA;AT68TJ;AS58TI;EACE,6BAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AT88TN;AS58TI;EACE,YAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;AT88TN;AS58TI;EACE,eAAA;EACA,mBAAA;AT88TN;;ASz8TA;EACE;;;IAGE,6BAAA;IACA,4BAAA;ET48TF;AACF;AS18TA;EACE;;;IAGE,6BAAA;ET48TF;AACF;AU9gUA;EACE,gBAAA;EACA,iCAAA;AVghUF;;AU9gUA;EACE,qBAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;AVihUF;AUhhUE;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,cAAA;AVkhUJ;;AW9hUA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,YAAA;EACA,gBAAA;AXiiUF;AWhiUE;EAOE,eAAA;EACA,8BAAA;EACA,6BAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;AX4hUJ;AWziUI;EACE,eAAA;AX2iUN;AWziUI;EACE,cAAA;AX2iUN;AWhiUE;EACE,WAAA;EACA,oBAAA;AXkiUJ;;AW9hUA;EACE,gBAAA;EACA,6BAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AXiiUF;;AW7hUA;EACE;IACE,iBAAA;EXgiUF;AACF;AW9hUA;EACE;IACE,iBAAA;EXgiUF;AACF;AYrlUA;EACE,gBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;AZulUF;;AYrlUA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AZwlUF;AYvlUE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AZylUJ;AYvlUE;EACE,eAAA;AZylUJ;;AYtlUA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,qBAAA;AZylUF;AYxlUE;EACE,cAAA;AZ0lUJ;AYxlUE;EACE,cAAA;AZ0lUJ;AYzlUI;EACE,kCAAA;EAAA,0BAAA;AZ2lUN;;AYvlUA;EACE,aAAA;EACA,kCAAA;EACA,aAAA;EACA,mBAAA;EACA,iCAAA;AZ0lUF;AYzlUE;EACE,eAAA;EACA,gBAAA;EACA,6BAAA;AZ2lUJ;AYzlUE;EACE,eAAA;AZ2lUJ;AYzlUE;EACE,iBAAA;AZ2lUJ;;AYxlUA;EACE,gBAAA;AZ2lUF;AYxlUM;EACE,wBAAA;AZ0lUR;AYzlUQ;EAEE,yBAAA;AZ0lUV;AYtlUI;EACE,cAAA;AZwlUN;AYrlUE;EACE,kBAAA;EACA,yBAAA;EACA,gCAAA;AZulUJ;AYtlUI;EACE,eAAA;AZwlUN;AYtlUI;EACE,eAAA;EACA,gBAAA;EACA,6BAAA;AZwlUN;AYvlUM;EAUE,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,mBAAA;EACA,+BAAA;AZglUR;AYlmUQ;EACE,WAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sCAAA;AZomUV;AYxlUQ;EACE,WAAA;EACA,WAAA;EACA,WAAA;EACA,sCAAA;EAEA,yBAAA;EACA,kBAAA;EACA,wBAAA;EACA,kBAAA;AZylUV;AYplUI;EACE,aAAA;EACA,eAAA;AZslUN;AYrlUM;EACE,cAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;AZulUR;AYtlUQ;EACE,kCAAA;EAAA,0BAAA;AZwlUV;AYrlUM;EACE,6BAAA;AZulUR;;AYjlUA;EACE;IACE,gBAAA;EZolUF;EYllUA;IACE,aAAA;EZolUF;EYnlUE;IACE,eAAA;EZqlUJ;AACF;AYllUA;EACE;IACE,0BAAA;IACA,uBAAA;IACA,kBAAA;IACA,SAAA;EZolUF;EYnlUE;IACE,kBAAA;IACA,gBAAA;EZqlUJ;AACF;Aa7uUA;EAgCE,kBAAA;AbgtUF;Aa/uUE;EACE,gBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;AbivUJ;Aa/uUE;EACE,mBAAA;AbivUJ;AahvUI;EACE,cAAA;AbkvUN;AajvUM;EACE,kCAAA;EAAA,0BAAA;AbmvUR;Aa/uUE;EACE,mBAAA;EACA,6BAAA;EACA,eAAA;AbivUJ;Aa/uUE;EACE,mBAAA;AbivUJ;AahvUI;EACE,kBAAA;AbkvUN;Aa/uUE;EACE,6BAAA;AbivUJ;;Ac9wUA;EACE,uBAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;AdixUF;;Ac9wUE;EACE,yBAAA;AdixUJ;;Ac7wUE;EACE,yBAAA;AdgxUJ;;Ac5wUE;;EAEE,yBAAA;EACA,kBAAA;EACA,kBAAA;Ad+wUJ;Ac7wUE;EACE,aAAA;Ad+wUJ;Ac7wUE;EACE,aAAA;Ad+wUJ;;Ac3wUE;EACE,gBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;Ad8wUJ;Ac5wUE;EACE,6BAAA;EACA,mBAAA;EACA,eAAA;Ad8wUJ;Ac5wUE;EACE,oBAAA;Ad8wUJ;Ac7wUI;EACE,cAAA;Ad+wUN;Ac9wUM;EACE,kCAAA;EAAA,0BAAA;AdgxUR;Ac3wUI;EACE,cAAA;EACA,oBAAA;Ad6wUN;Ac5wUM;EACE,YAAA;EACA,iBAAA;EACA,cAAA;Ad8wUR;Ac5wUM;EACE,eAAA;EACA,WAAA;Ad8wUR;Ac3wUI;EACE,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EACA,0CAAA;EACA,yBAAA;EACA,kBAAA;EACA,iDAAA;EACA,iBAAA;EACA,WAAA;Ad6wUN;Ac1wUM;EACE,yBAAA;Ad4wUR;AczwUI;EACE,kBAAA;EACA,mBAAA;Ad2wUN;Ac1wUM;EACE,kBAAA;Ad4wUR;Ac1wUM;EACE,UAAA;Ad4wUR;Ac1wUM;EACE,YAAA;Ad4wUR;Ac1wUM;EACE,kBAAA;EACA,aAAA;EACA,oBAAA;Ad4wUR;AczwUI;EACE,oBAAA;Ad2wUN;AczwUI;EACE,mBAAA;Ad2wUN;AczwUI;EACE,kBAAA;EACA,eAAA;EACA,QAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;EACA,6BAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,yBAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;EACA,2CAAA;EACA,sBAAA;Ad2wUN;AczwUI;EACE,eAAA;Ad2wUN;AcxwUE;EACE,eAAA;EACA,WAAA;Ad0wUJ;;AcpwUA;EACE;IACE,2BAAA;EduwUF;AACF;AA94UA;EACE,SAAA;AAg5UF;;AA94UA;EACE,6BAAA;EAAA,qBAAA;EACA,cAAA;AAi5UF;;AA/4UA;EACE,yBMlBW;ENmBX,8BAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;EACA,cAAA;AAk5UF;AAj5UE;EACE,iBAAA;EACA,cAAA;EACA,aAAA;EACA,gBAAA;AAm5UJ;AAj5UE;EACE,yBM/BS;ENgCT,2EACE;EAEF,kBMlCa;ENmCb,kBAAA;AAi5UJ;AA/4UE;EACE,0BAAA;EACA,MAAA;EACA,4BAAA;AAi5UJ;AA94UE;EACE,aAAA;EACA,eAAA;AAg5UJ;AA94UE;;EAEE,wBAAA;EACA,gBAAA;AAg5UJ;AA94UE;;;;;;;;;EASE,yBAAA;EACA,gCAAA;EACA,2DAAA;AAg5UJ;AA74UE;EACE,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,cAAA;AA+4UJ;AAn5UE;EACE,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,cAAA;AA+4UJ;AAn5UE;EACE,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,cAAA;AA+4UJ;AA74UE;EACE,eAAA;EACA,gCAAA;EACA,iBM1EU;EN2EV,wCAAA;EACA,8BAAA;EACA,iBAAA;EACA,oBAAA;AA+4UJ;AA94UI;EACE,cAAA;AAg5UN;AA/4UM;EACE,kCAAA;EAAA,0BAAA;AAi5UR;AA74UE;EACE,8BAAA;EACA,aAAA;EACA,iBMzFU;ANw+Ud;AA74UE;EACE,aAAA;EACA,+BAAA;AA+4UJ;AA94UI;EACE,eAAA;EACA,aAAA;EACA,WAAA;EACA,SAAA;EACA,gBAAA;AAg5UN;AA/4UM;EACE,6BAAA;EAEA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,+CAAA;EACA,yBAAA;EACA,sBAAA;EACA,2CAAA;EACA,+BAAA;EACA,gBAAA;EA6BA,+BAAA;AAo3UR;AA/4UU;EACE,gBAAA;EACA,cAAA;AAi5UZ;AA94UQ;EACE,mBAAA;EACA,YAAA;AAg5UV;AA/4UU;EACE,eAAA;EACA,6BAAA;AAi5UZ;AA/4UU;EACE,2BAAA;EACA,eAAA;AAi5UZ;AA94UQ;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,2BAAA;EACA,WAAA;EACA,yBAAA;EACA,sBAAA;AAg5UV;AA74UQ;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA+4UV;AA34UI;EACE;IACE,UAAA;IACA,mBAAA;IACA,4BAAA;EA64UN;EA34UI;IACE,2BAAA;EA64UN;EA34UI;IACE,yBAAA;EA64UN;EA34UI;IACE,6BAAA;IAGA,4BAAA;EA24UN;AACF;AAz4UI;EACE;IACE,SAAA;EA24UN;AACF;AAz4UI;EACE;IACE,4BAAA;EA24UN;EAz4UI;IACE,2BAAA;EA24UN;EAz4UI;IACE,4BAAA;EA24UN;EAz4UI;IACE,4BAAA;IAEA,UAAA;IACA,aAAA;EA04UN;AACF;AAv4UE;EACE,aAAA;EACA,8BAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,6BAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;AAy4UJ;AAx4UI;EACE,8BAAA;EACA,gBAAA;AA04UN;AAx4UI;EACE,cAAA;EACA,kCAAA;EAAA,0BAAA;AA04UN;AAv4UE;EACE,6BAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,2CAAA;EACA,wEAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;AAy4UJ;AAv4UE;EACE,yBAAA;EACA,wEAAA;EACA,gCAAA;AAy4UJ;AAv4UE;EACE,cAAA;EACA,eAAA;AAy4UJ;;AAt4UA;EACE;IACE,wBAAA;EAy4UF;EAv4UA;IACE,4BAAA;IACA,+BAAA;EAy4UF;EAv4UA;IACE,4BAAA;EAy4UF;EAv4UA;IACE,4BAAA;IACA,6BAAA;EAy4UF;EAv4UA;IACE,yBAAA;IACA,0BAAA;EAy4UF;AACF;AAv4UA;EACE;IACE,sBAAA;IACA,0BAAA;EAy4UF;AACF;AAv4UA;EACE;IACE,qBAAA;EAy4UF;AACF;AAv4UA;EACE;IACE,yBAAA;IACA,6BAAA;EAy4UF;EAv4UA;IACE,4BAAA;IACA,wBAAA;IACA,yBAAA;EAy4UF;EAt4UE;IACE,2BAAA;EAw4UJ;EAr4UA;IACE,oBAAA;IACA,wBAAA;EAu4UF;EAr4UA;IACE,yBAAA;IACA,wBAAA;EAu4UF;AACF","sourcesContent":["@import './vars.newnovels';\r\n@import '../header/vars.header';\r\n\r\n.novel {\r\n  margin-bottom: 50px;\r\n  position: relative;\r\n}\r\n.novel__info {\r\n  margin-bottom: 35px;\r\n  display: flex;\r\n  align-items: center;\r\n  .novel__img {\r\n    width: 140px;\r\n    height: 175px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 12px 20px -6px rgba(0, 0, 0, 0.1);\r\n    margin-right: 35px;\r\n    object-fit: cover;\r\n  }\r\n  .novel__title {\r\n    font-family: 'GothamPro-Bold';\r\n    font-size: 18px;\r\n    letter-spacing: -0.01em;\r\n    line-height: 1.35em;\r\n    margin-bottom: 5px;\r\n  }\r\n  .novel__title:hover {\r\n    color: #95ac7c;\r\n    transition: color 0.3s ease-in-out;\r\n  }\r\n  .novel__tags {\r\n    font-size: 12px;\r\n    color: #999;\r\n    font-weight: 800;\r\n    margin-bottom: 10px;\r\n  }\r\n  .novel__description {\r\n    color: #bdbdbd;\r\n    margin-bottom: 15px;\r\n    a {\r\n      margin-top: 5px;\r\n      display: none;\r\n      text-transform: uppercase;\r\n      color: #95ac7c;\r\n      font-family: 'GothamPro-Bold';\r\n      font-weight: 800;\r\n      transition: color 0.3s;\r\n      font-size: 12px;\r\n      &:hover {\r\n        color: #828282;\r\n      }\r\n    }\r\n  }\r\n  .novel__rate-date {\r\n    display: flex;\r\n    align-items: center;\r\n    .unit__rating {\r\n      user-select: none;\r\n      background-color: transparent;\r\n      height: 18px;\r\n      display: flex;\r\n      position: relative;\r\n      margin-right: 15px;\r\n    }\r\n    .current__rating {\r\n      position: absolute;\r\n      height: 100%;\r\n      z-index: 12;\r\n      display: flex;\r\n      overflow: hidden;\r\n    }\r\n    .upload__date {\r\n      background-color: #95ac7c24;\r\n      border-radius: 16px;\r\n      font-family: 'GothamPro-Bold';\r\n      font-size: 11px;\r\n      font-weight: 800;\r\n      text-align: center;\r\n      line-height: 1.1;\r\n      padding: 3px 6px 3px 3px;\r\n      color: #95ac7c;\r\n      text-transform: uppercase;\r\n    }\r\n    .upload__date:hover {\r\n      background-color: #1a1a1a3b;\r\n      color: #828282;\r\n      transition: all 0.3s ease-in-out;\r\n    }\r\n  }\r\n}\r\n.border {\r\n  border-top: 1px solid #3b3b3b;\r\n  position: relative;\r\n}\r\n\r\n.novel__tools {\r\n  background-color: #474747;\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 35px;\r\n  max-height: 40px;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-top: -21px;\r\n  position: relative;\r\n  z-index: 1;\r\n  box-shadow: inset 0 0 0 1px #3b3b3b;\r\n  .btn-read {\r\n    width: 110px;\r\n    max-height: 40px;\r\n    text-align: center;\r\n    border: 0;\r\n    outline: none;\r\n    z-index: 1000;\r\n    position: relative;\r\n  }\r\n  .bookmark-container {\r\n    padding: 12px 16px;\r\n    position: relative;\r\n    .btn-bookmark {\r\n      text-align: center;\r\n      cursor: pointer;\r\n      user-select: none;\r\n      position: relative;\r\n    }\r\n    .bookmark-popup {\r\n      display: none;\r\n      &:before {\r\n        border-width: 0 6px 7px;\r\n        left: 45%;\r\n        border-color: transparent transparent #3b3b3b transparent;\r\n        content: '';\r\n        border-style: solid;\r\n        bottom: 100%;\r\n        position: absolute;\r\n      }\r\n      width: 144px;\r\n      box-sizing: border-box;\r\n      font-size: 12px;\r\n      line-height: 21px;\r\n      z-index: 9000;\r\n      position: absolute;\r\n      top: 38px;\r\n      left: -2px;\r\n      text-align: left;\r\n      background-color: #3b3b3b;\r\n      padding: 8px 0px 4px;\r\n      border-radius: 8px;\r\n      border: 1px solid #353535;\r\n      box-shadow: 0 8px 32px -10px rgb(0 0 0/30%);\r\n      .popup-list {\r\n        color: #fff;\r\n        user-select: none;\r\n        .active {\r\n          color: #94ab7b;\r\n          .poup-img {\r\n            .poup-img-dote {\r\n              top: -24px !important;\r\n            }\r\n          }\r\n        }\r\n        .popup-item {\r\n          padding: 2px 12px;\r\n          cursor: pointer;\r\n          height: 24px;\r\n          display: flex;\r\n          white-space: nowrap;\r\n          position: relative;\r\n          box-sizing: border-box;\r\n          align-items: center;\r\n          &:hover {\r\n            background-color: #383838;\r\n          }\r\n          .poup-img {\r\n            width: 16px;\r\n            height: 16px;\r\n            overflow: hidden;\r\n            margin-right: 4px;\r\n            .poup-img-dote {\r\n              scale: 0.5;\r\n              top: -40px;\r\n              left: -8px;\r\n              position: relative;\r\n            }\r\n          }\r\n        }\r\n      }\r\n      .popup-trigger {\r\n        font-family: 'GothamPro-Bold';\r\n        cursor: pointer;\r\n        font-weight: 700;\r\n        color: #94ab7b;\r\n        display: flex;\r\n        height: 32px;\r\n        padding: 2px 12px;\r\n        align-items: center;\r\n        box-sizing: border-box;\r\n        &:hover {\r\n          background-color: #383838;\r\n        }\r\n        .poup-img {\r\n          width: 16px;\r\n          height: 16px;\r\n          overflow: hidden;\r\n          margin-right: 4px;\r\n          .poup-img-pen {\r\n            cursor: pointer;\r\n            scale: 0.5;\r\n            top: -56px;\r\n            left: -8px;\r\n            position: relative;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .btn-bookmark:hover {\r\n    .bookmark__title {\r\n      color: #828282;\r\n      transition: all 0.3s ease-in-out;\r\n    }\r\n  }\r\n  .bookmark {\r\n    display: flex;\r\n    align-items: center;\r\n    img {\r\n      height: 16px;\r\n      margin-right: 4px;\r\n    }\r\n    .bookmark__title {\r\n      font-family: 'GothamPro-Bold';\r\n      font-weight: 700;\r\n      font-size: 12px;\r\n      line-height: 1.7;\r\n      text-transform: uppercase;\r\n      color: #95ac7c;\r\n    }\r\n  }\r\n}\r\n.title-stripes {\r\n  text-align: center;\r\n  .midtitle-stripes {\r\n    font-family: 'GothamPro-Bold';\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n  }\r\n  span {\r\n    background-color: #474747;\r\n    padding: 0px 14px;\r\n  }\r\n  span::after,\r\n  span::before {\r\n    border-radius: 8px;\r\n    width: 110%;\r\n    height: 2px;\r\n    display: block;\r\n    top: 50%;\r\n    content: '';\r\n    position: absolute;\r\n    background: linear-gradient(45deg, #474747 60%, #797d7f 100%);\r\n    z-index: -11;\r\n  }\r\n  span::before {\r\n    left: -68%;\r\n  }\r\n  span::after {\r\n    transform: scaleX(-1);\r\n    right: -68%;\r\n  }\r\n}\r\n.btn-updates {\r\n  display: inline-block;\r\n}\r\n.new__chapter,\r\n.novel-small {\r\n  display: flex;\r\n  transition: all 0.3s;\r\n  .novel__img {\r\n    position: relative;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin-right: 1rem !important;\r\n  }\r\n  img {\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n    width: 64px;\r\n    height: 64px;\r\n    background-color: #797d7f;\r\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n  }\r\n  .animation_1,\r\n  .animation_2 {\r\n    z-index: 500;\r\n    content: '';\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    vertical-align: middle;\r\n    transform: translate(-50%, -50%) scale(0.2, 0.2);\r\n  }\r\n  .animation_1 {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #474747a3;\r\n    transition: all ease-in-out 0.3s;\r\n  }\r\n  .animation_2 {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #a3a3a3a3;\r\n    position: absolute;\r\n    transition: all ease-in-out 0.5s;\r\n  }\r\n  .info {\r\n    opacity: 0.8;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .title__novel {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    font-size: 14px;\r\n    font-family: 'GothamPro-Bold';\r\n    font-weight: 800;\r\n    letter-spacing: 0.4px;\r\n    line-height: 1.35em;\r\n    margin-bottom: 3px;\r\n  }\r\n  .sub__title {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    font-size: 14px;\r\n  }\r\n  em {\r\n    font-size: 12px;\r\n    color: #999;\r\n  }\r\n}\r\n.new__chapter:hover,\r\n.novel-small:hover {\r\n  .info {\r\n    opacity: 1;\r\n  }\r\n  .animation_1,\r\n  .animation_2 {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n}\r\n.block-updates {\r\n  text-align: center;\r\n  height: 40px;\r\n}\r\n@import './newnovels-media';\r\n@import './newnovels-auth';\r\n","@import './NewNovels/style.newnovels';\r\n@import './aside/style.aside';\r\n@import './fonts';\r\n@import './header/style.header';\r\n@import './vars';\r\n@import './tags/style-tags';\r\n@import './contacts/style.contacts';\r\n@import './rules/style.rules';\r\n@import './registration/style.registration';\r\n\r\n* {\r\n  margin: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\nbody {\r\n  background-color: $bodyColour;\r\n  font-family: 'GothamPro-Light';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.012em;\r\n  line-height: 1.5;\r\n  color: #cccccc;\r\n  .page {\r\n    max-width: 1320px;\r\n    margin: 0 auto;\r\n    padding: 30px;\r\n    overflow: hidden;\r\n  }\r\n  .body {\r\n    background-color: $backColour;\r\n    box-shadow:\r\n      0 2px 6px 0 rgba(0, 0, 0, 0.11),\r\n      0 0 35px 0 rgba(0, 0, 0, 0.06);\r\n    border-radius: $sizeRadiusBody;\r\n    position: relative;\r\n  }\r\n  .fixed {\r\n    position: fixed !important;\r\n    top: 0;\r\n    transition: all 0.4s ease-in;\r\n  }\r\n\r\n  input {\r\n    outline: none;\r\n    font-size: 14px;\r\n  }\r\n  [type='search']::-webkit-search-cancel-button,\r\n  [type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n  }\r\n  input:-webkit-autofill,\r\n  input:-webkit-autofill:hover,\r\n  input:-webkit-autofill:focus,\r\n  textarea:-webkit-autofill,\r\n  textarea:-webkit-autofill:hover,\r\n  textarea:-webkit-autofill:focus,\r\n  select:-webkit-autofill,\r\n  select:-webkit-autofill:hover,\r\n  select:-webkit-autofill:focus {\r\n    border: 1px solid #313131;\r\n    -webkit-text-fill-color: inherit;\r\n    -webkit-background-color: #465a7e66 !important;\r\n  }\r\n\r\n  input::placeholder {\r\n    font-size: 14px;\r\n    font-family: 'GothamPro-Light';\r\n    font-weight: 600;\r\n    color: #b7b7b7;\r\n  }\r\n  .page-title {\r\n    font-size: 12px;\r\n    border-bottom: 1px solid #3b3b3b;\r\n    margin-left: $widthHeader;\r\n    color: #7d7d7dd6;\r\n    border-left: 1px solid #3b3b3b;\r\n    line-height: 22px;\r\n    padding: 28.5px 35px;\r\n    a {\r\n      color: #bdbdbd;\r\n      &:hover {\r\n        text-decoration: underline;\r\n      }\r\n    }\r\n  }\r\n  main {\r\n    border-left: solid #3b3b3b 1px;\r\n    display: flex;\r\n    margin-left: $widthHeader;\r\n  }\r\n  .content {\r\n    width: 67.74%;\r\n    border-right: 1px solid #3b3b3b;\r\n    .notifications {\r\n      position: fixed;\r\n      display: grid;\r\n      right: 10px;\r\n      top: 20px;\r\n      z-index: 9999999;\r\n      .notification {\r\n        transform: translateX(-560px);\r\n\r\n        position: relative;\r\n        max-width: 500px;\r\n        display: flex;\r\n        align-items: center;\r\n        overflow: hidden;\r\n        gap: 20px;\r\n        animation: showNotifications 0.5s ease forwards;\r\n        background-color: #313131;\r\n        padding: 11px 15px 9px;\r\n        box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);\r\n        border-radius: 15px 0 15px 15px;\r\n        margin-top: 12px;\r\n        i {\r\n          &:before {\r\n            font-size: 1.3em;\r\n            color: #95ac7c;\r\n          }\r\n        }\r\n        .notification-text {\r\n          margin-bottom: 10px;\r\n          opacity: 0.8;\r\n          h3 {\r\n            font-size: 13px;\r\n            margin-bottom: 5px !important;\r\n          }\r\n          p {\r\n            margin-bottom: 0 !important;\r\n            font-size: 14px;\r\n          }\r\n        }\r\n        .line-on-time {\r\n          position: absolute;\r\n          bottom: 0;\r\n          left: 0;\r\n          width: 100%;\r\n          animation: timer 10s linear;\r\n          height: 3px;\r\n          background-color: #95ac7c;\r\n          box-sizing: border-box;\r\n        }\r\n        border-radius: 15px 0 15px 15px;\r\n        a {\r\n          position: absolute;\r\n          right: 0;\r\n          top: 0;\r\n          cursor: pointer;\r\n          padding: 10px;\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n        }\r\n      }\r\n    }\r\n    @keyframes showNotifications {\r\n      0% {\r\n        opacity: 1;\r\n        visibility: visible;\r\n        transform: translateX(530px);\r\n      }\r\n      40% {\r\n        transform: translateX(-5px);\r\n      }\r\n      80% {\r\n        transform: translateX(0%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100px);\r\n        // opacity: 0;\r\n\r\n        transform: translateX(-10px);\r\n      }\r\n    }\r\n    @keyframes timer {\r\n      to {\r\n        width: 0%;\r\n      }\r\n    }\r\n    @keyframes closeNotifications {\r\n      0% {\r\n        transform: translateX(-30px);\r\n      }\r\n      40% {\r\n        transform: translateX(30px);\r\n      }\r\n      60% {\r\n        transform: translateX(450px);\r\n      }\r\n      100% {\r\n        transform: translateX(100px);\r\n\r\n        opacity: 0;\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n  .footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-left: 1px solid #3b3b3b;\r\n    margin-left: 80px;\r\n    padding: 30px 50px;\r\n    background-color: #474747;\r\n    border-top: 1px solid #3b3b3b;\r\n    border-radius: 0px 0px 8px 0px;\r\n    font-size: 12px;\r\n    color: #999;\r\n    span {\r\n      font-family: 'GothamPro-Black';\r\n      font-weight: 700;\r\n    }\r\n    a:hover {\r\n      color: #212121;\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n  .btn {\r\n    font-family: 'GothamPro-Bold';\r\n    border-radius: 20px;\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);\r\n    background-image: -webkit-linear-gradient(top, #626262 0%, #626262 100%);\r\n    background-color: #626262;\r\n    text-align: center;\r\n    outline: none;\r\n    border-width: 0;\r\n    color: inherit;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n  }\r\n  .btn:hover {\r\n    background-color: #5d5c5c;\r\n    background-image: -webkit-linear-gradient(top, #5d5c5c 0%, #818181 100%);\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  .block {\r\n    margin: 35px 0;\r\n    padding: 0 35px;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_xxl) {\r\n  .page {\r\n    padding: 10px !important;\r\n  }\r\n  .page-title {\r\n    margin-left: calc($widthHeader - 20px) !important;\r\n    padding: 18.5px 30px !important;\r\n  }\r\n  main {\r\n    margin-left: calc($widthHeader - 20px) !important;\r\n  }\r\n  .footer {\r\n    margin-left: calc($widthHeader - 20px) !important;\r\n    padding: 30px 30px !important;\r\n  }\r\n  .block {\r\n    margin: 30px 0 !important;\r\n    padding: 0 30px !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_l) {\r\n  .content {\r\n    width: 100% !important;\r\n    border-width: 0 !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_md) {\r\n  .page {\r\n    padding: 0 !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_sm) {\r\n  .page-title {\r\n    margin-left: 0 !important;\r\n    padding: 20px 20px !important;\r\n  }\r\n  main {\r\n    border-left: none !important;\r\n    display: flex !important;\r\n    margin-left: 0 !important;\r\n  }\r\n  .content {\r\n    .notification {\r\n      max-width: 200px !important;\r\n    }\r\n  }\r\n  .block {\r\n    margin: 0 !important;\r\n    padding: 20px !important;\r\n  }\r\n  .footer {\r\n    margin-left: 0 !important;\r\n    padding: 20px !important;\r\n  }\r\n}\r\n","@import '../vars';\r\n\r\n@media (max-width: $breakpoint_xxl) {\r\n  .novel {\r\n    margin-bottom: 30px;\r\n  }\r\n  .novel__img {\r\n    margin-right: 25px !important;\r\n  }\r\n  .new__chapters,\r\n  .novel-small {\r\n    .title__novel {\r\n      font-size: 12px;\r\n    }\r\n    .novel__img {\r\n      width: 44px;\r\n      height: 44px;\r\n    }\r\n    img {\r\n      width: 44px;\r\n      height: 44px;\r\n    }\r\n    .animation_1 {\r\n      width: 34px;\r\n      height: 34px;\r\n    }\r\n    .animation_2 {\r\n      width: 14px;\r\n      height: 14px;\r\n    }\r\n  }\r\n}\r\n@media (max-width: $breakpoint_sm) {\r\n  .novel {\r\n    padding-bottom: 20px;\r\n    margin-bottom: 0;\r\n    border-bottom: 1px solid #3b3b3b;\r\n    background: linear-gradient(180deg, #474747 calc(100% - 40px), #444444 100%);\r\n    .border {\r\n      display: none;\r\n    }\r\n    .novel__info {\r\n      .novel__text {\r\n        display: flex;\r\n        flex-direction: column;\r\n        h2 {\r\n          order: 1;\r\n        }\r\n        .novel__tags {\r\n          order: 4;\r\n          margin-bottom: 15px;\r\n        }\r\n        .novel__description {\r\n          order: 3;\r\n          margin: 0.75rem 0 0.9rem 105px;\r\n          position: relative;\r\n          p {\r\n            max-height: 128px;\r\n            overflow: hidden;\r\n            max-width: fit-content;\r\n            position: relative;\r\n            &:after {\r\n              position: absolute;\r\n              content: '';\r\n              width: 100%;\r\n              background: linear-gradient(0deg, rgba(71, 71, 71, 1) 0%, rgba(0, 0, 0, 0) 100%);\r\n              left: 0;\r\n              bottom: 0;\r\n              height: 32px;\r\n            }\r\n          }\r\n          a {\r\n            display: block;\r\n            position: relative;\r\n            &:after {\r\n              position: absolute;\r\n              margin-left: 4px;\r\n              display: inline-block;\r\n              content: '';\r\n              top: 30%;\r\n              border: solid;\r\n              border-width: 5px 4px 0;\r\n              border-left-color: transparent;\r\n              border-right-color: transparent;\r\n              border-bottom-color: transparent;\r\n            }\r\n          }\r\n        }\r\n        .novel__rate-date {\r\n          order: 2;\r\n        }\r\n      }\r\n    }\r\n    .novel__img {\r\n      width: 90px !important;\r\n      height: 120px !important;\r\n      position: absolute;\r\n      top: 25%;\r\n    }\r\n    .novel__tools {\r\n      margin: 0 20px;\r\n    }\r\n  }\r\n  .novel__img {\r\n    margin-right: 15px !important;\r\n  }\r\n  .new__chapters,\r\n  .novel-small {\r\n    .new__chapter {\r\n      padding-top: 0px !important;\r\n      padding-bottom: 0px !important;\r\n      margin: 20px 0 !important;\r\n    }\r\n  }\r\n}\r\n",".authorized{\r\n  .active-poup{\r\n    display: block!important;\r\n  }\r\n}","@import './vars.aside';\r\n@import '../header/vars.header';\r\n@import '../vars';\r\n\r\naside {\r\n  width: 32.26%;\r\n  background-color: #434343;\r\n  border-radius: 0 $sizeRadiusBody 0 0;\r\n  .line {\r\n    border-bottom: 1px solid #3b3b3b;\r\n  }\r\n}\r\n.new-novel {\r\n  margin-top: 25px;\r\n  display: block;\r\n  opacity: 0.7;\r\n  transition: all 0.3s;\r\n  &:hover {\r\n    opacity: 1;\r\n  }\r\n  h3 {\r\n    font-family: 'GothamPro-Bold';\r\n    letter-spacing: 0.4px;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  p {\r\n    color: #999;\r\n    font-size: 12px;\r\n  }\r\n}\r\n.aside__btns {\r\n  display: flex;\r\n  padding: 2px;\r\n  border-radius: 18px;\r\n  box-shadow:\r\n    0 1px 0 0 transparent,\r\n    inset 0 1px 4px 0 rgba(0, 0, 0, 0.06);\r\n  background: linear-gradient(to bottom, #999 0%, #707070 100%);\r\n  margin-bottom: 25px;\r\n  height: 32px;\r\n  a {\r\n    width: 50%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: #383838;\r\n    cursor: pointer;\r\n    font-size: 11px;\r\n    line-height: 1.8;\r\n    padding: 6px;\r\n    border-radius: 16px;\r\n    font-family: 'GothamPro-Bold';\r\n    font-weight: 800;\r\n    transition: all 0.2s;\r\n  }\r\n  a:hover {\r\n    color: #666;\r\n  }\r\n  .active {\r\n    cursor: default;\r\n    pointer-events: none;\r\n    color: #383838;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\r\n    background: linear-gradient(#707070 0%, #494949 100%);\r\n  }\r\n}\r\n.tabs {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.current {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition:\r\n    opacity,\r\n    visibility 0.2s ease-in-out;\r\n}\r\n.novel-small {\r\n  margin-bottom: 25px;\r\n  .title__novel,\r\n  .sub__title {\r\n    width: 245px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    display: block;\r\n  }\r\n  em {\r\n    font-style: normal;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_xl) {\r\n  aside {\r\n    .title__novel,\r\n    .sub__title {\r\n      width: 190px !important;\r\n    }\r\n  }\r\n}\r\n@media (max-width: $breakpoint_l) {\r\n  aside{\r\n    display: none;\r\n  }\r\n}\r\n","@font-face {\r\n  font-family: 'GothamPro-Black';\r\n  src: url('../fonts/GothamPro/gothampro-black.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-black.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-black.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-black.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-black.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-black.svg#gothampro-black')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-BlackItalic';\r\n  src: url('../fonts/GothamPro/gothampro-blackitalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-blackitalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-blackitalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-blackitalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-blackitalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-blackitalic.svg#gothampro-blackitalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Bold';\r\n  src: url('../fonts/GothamPro/gothampro-bold.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-bold.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-bold.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-bold.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-bold.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-bold.svg#gothampro-bold')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-BoldItalic';\r\n  src: url('../fonts/GothamPro/gothampro-bolditalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-bolditalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-bolditalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-bolditalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-bolditalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-bolditalic.svg#gothampro-bolditalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Italic';\r\n  src: url('../fonts/GothamPro/gothampro-italic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-italic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-italic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-italic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-italic.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-italic.svg#gothampro-italic')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Light';\r\n  src: url('../fonts/GothamPro/gothampro-light.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-light.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-light.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-light.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-light.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-light.svg#gothampro-light')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-LightItalic';\r\n  src: url('../fonts/GothamPro/gothampro-lightitalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-lightitalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-lightitalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-lightitalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-lightitalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-lightitalic.svg#gothampro-lightitalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Medium';\r\n  src: url('../fonts/GothamPro/gothampro-medium.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-medium.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-medium.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-medium.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-medium.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-medium.svg#gothampro-medium')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-MediumItalic';\r\n  src: url('../fonts/GothamPro/gothampro-mediumitalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-mediumitalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-mediumitalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-mediumitalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-mediumitalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-mediumitalic.svg#gothampro-mediumitalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamProNarrow-Bold';\r\n  src: url('../fonts/GothamPro/gothampronarrow-bold.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampronarrow-bold.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampronarrow-bold.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampronarrow-bold.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampronarrow-bold.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampronarrow-bold.svg#gothampronarrow-bold') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamProNarrow-Medium';\r\n  src: url('../fonts/GothamPro/gothampronarrow-medium.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampronarrow-medium.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampronarrow-medium.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampronarrow-medium.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampronarrow-medium.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampronarrow-medium.svg#gothampronarrow-medium') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n/*!\r\n * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com\r\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n * Copyright 2023 Fonticons, Inc.\r\n */\r\n .fa {\r\n  font-family: var(--fa-style-family, 'Font Awesome 6 Free');\r\n  font-weight: var(--fa-style, 900);\r\n}\r\n.fa,\r\n.fa-brands,\r\n.fa-classic,\r\n.fa-regular,\r\n.fa-sharp,\r\n.fa-solid,\r\n.fab,\r\n.far,\r\n.fas {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  display: var(--fa-display, inline-block);\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  line-height: 1;\r\n  text-rendering: auto;\r\n}\r\n.fa-classic,\r\n.fa-regular,\r\n.fa-solid,\r\n.far,\r\n.fas {\r\n  font-family: 'Font Awesome 6 Free';\r\n}\r\n.fa-brands,\r\n.fab {\r\n  font-family: 'Font Awesome 6 Brands';\r\n}\r\n.fa-1x {\r\n  font-size: 1em;\r\n}\r\n.fa-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-3x {\r\n  font-size: 3em;\r\n}\r\n.fa-4x {\r\n  font-size: 4em;\r\n}\r\n.fa-5x {\r\n  font-size: 5em;\r\n}\r\n.fa-6x {\r\n  font-size: 6em;\r\n}\r\n.fa-7x {\r\n  font-size: 7em;\r\n}\r\n.fa-8x {\r\n  font-size: 8em;\r\n}\r\n.fa-9x {\r\n  font-size: 9em;\r\n}\r\n.fa-10x {\r\n  font-size: 10em;\r\n}\r\n.fa-2xs {\r\n  font-size: 0.625em;\r\n  line-height: 0.1em;\r\n  vertical-align: 0.225em;\r\n}\r\n.fa-xs {\r\n  font-size: 0.75em;\r\n  line-height: 0.08333em;\r\n  vertical-align: 0.125em;\r\n}\r\n.fa-sm {\r\n  font-size: 0.875em;\r\n  line-height: 0.07143em;\r\n  vertical-align: 0.05357em;\r\n}\r\n.fa-lg {\r\n  font-size: 1.25em;\r\n  line-height: 0.05em;\r\n  vertical-align: -0.075em;\r\n}\r\n.fa-xl {\r\n  font-size: 1.5em;\r\n  line-height: 0.04167em;\r\n  vertical-align: -0.125em;\r\n}\r\n.fa-2xl {\r\n  font-size: 2em;\r\n  line-height: 0.03125em;\r\n  vertical-align: -0.1875em;\r\n}\r\n.fa-fw {\r\n  text-align: center;\r\n  width: 1.25em;\r\n}\r\n.fa-ul {\r\n  list-style-type: none;\r\n  margin-left: var(--fa-li-margin, 2.5em);\r\n  padding-left: 0;\r\n}\r\n.fa-ul > li {\r\n  position: relative;\r\n}\r\n.fa-li {\r\n  left: calc(var(--fa-li-width, 2em) * -1);\r\n  position: absolute;\r\n  text-align: center;\r\n  width: var(--fa-li-width, 2em);\r\n  line-height: inherit;\r\n}\r\n.fa-border {\r\n  border-radius: var(--fa-border-radius, 0.1em);\r\n  border: var(--fa-border-width, 0.08em) var(--fa-border-style, solid) var(--fa-border-color, #eee);\r\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\r\n}\r\n.fa-pull-left {\r\n  float: left;\r\n  margin-right: var(--fa-pull-margin, 0.3em);\r\n}\r\n.fa-pull-right {\r\n  float: right;\r\n  margin-left: var(--fa-pull-margin, 0.3em);\r\n}\r\n.fa-beat {\r\n  -webkit-animation-name: fa-beat;\r\n  animation-name: fa-beat;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\r\n  animation-delay: var(--fa-animation-delay, 0s);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n  animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n  animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n}\r\n.fa-bounce {\r\n  -webkit-animation-name: fa-bounce;\r\n  animation-name: fa-bounce;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\r\n  animation-delay: var(--fa-animation-delay, 0s);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n  animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n  animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\r\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\r\n}\r\n.fa-fade {\r\n  -webkit-animation-name: fa-fade;\r\n  animation-name: fa-fade;\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n}\r\n.fa-beat-fade,\r\n.fa-fade {\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\r\n  animation-delay: var(--fa-animation-delay, 0s);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n  animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n  animation-duration: var(--fa-animation-duration, 1s);\r\n}\r\n.fa-beat-fade {\r\n  -webkit-animation-name: fa-beat-fade;\r\n  animation-name: fa-beat-fade;\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n}\r\n.fa-flip {\r\n  -webkit-animation-name: fa-flip;\r\n  animation-name: fa-flip;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\r\n  animation-delay: var(--fa-animation-delay, 0s);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n  animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n  animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n}\r\n.fa-shake {\r\n  -webkit-animation-name: fa-shake;\r\n  animation-name: fa-shake;\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n  animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\r\n  animation-timing-function: var(--fa-animation-timing, linear);\r\n}\r\n.fa-shake,\r\n.fa-spin {\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\r\n  animation-delay: var(--fa-animation-delay, 0s);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n  animation-direction: var(--fa-animation-direction, normal);\r\n}\r\n.fa-spin {\r\n  -webkit-animation-name: fa-spin;\r\n  animation-name: fa-spin;\r\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\r\n  animation-duration: var(--fa-animation-duration, 2s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\r\n  animation-timing-function: var(--fa-animation-timing, linear);\r\n}\r\n.fa-spin-reverse {\r\n  --fa-animation-direction: reverse;\r\n}\r\n.fa-pulse,\r\n.fa-spin-pulse {\r\n  -webkit-animation-name: fa-spin;\r\n  animation-name: fa-spin;\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n  animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n  animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\r\n  animation-timing-function: var(--fa-animation-timing, steps(8));\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n  .fa-beat,\r\n  .fa-beat-fade,\r\n  .fa-bounce,\r\n  .fa-fade,\r\n  .fa-flip,\r\n  .fa-pulse,\r\n  .fa-shake,\r\n  .fa-spin,\r\n  .fa-spin-pulse {\r\n    -webkit-animation-delay: -1ms;\r\n    animation-delay: -1ms;\r\n    -webkit-animation-duration: 1ms;\r\n    animation-duration: 1ms;\r\n    -webkit-animation-iteration-count: 1;\r\n    animation-iteration-count: 1;\r\n    -webkit-transition-delay: 0s;\r\n    transition-delay: 0s;\r\n    -webkit-transition-duration: 0s;\r\n    transition-duration: 0s;\r\n  }\r\n}\r\n@-webkit-keyframes fa-beat {\r\n  0%,\r\n  90% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  45% {\r\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\r\n    transform: scale(var(--fa-beat-scale, 1.25));\r\n  }\r\n}\r\n@keyframes fa-beat {\r\n  0%,\r\n  90% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  45% {\r\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\r\n    transform: scale(var(--fa-beat-scale, 1.25));\r\n  }\r\n}\r\n@-webkit-keyframes fa-bounce {\r\n  0% {\r\n    -webkit-transform: scale(1) translateY(0);\r\n    transform: scale(1) translateY(0);\r\n  }\r\n  10% {\r\n    -webkit-transform: scale(\r\n        var(--fa-bounce-start-scale-x, 1.1),\r\n        var(--fa-bounce-start-scale-y, 0.9)\r\n      )\r\n      translateY(0);\r\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9))\r\n      translateY(0);\r\n  }\r\n  30% {\r\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1))\r\n      translateY(var(--fa-bounce-height, -0.5em));\r\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1))\r\n      translateY(var(--fa-bounce-height, -0.5em));\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(\r\n        var(--fa-bounce-land-scale-x, 1.05),\r\n        var(--fa-bounce-land-scale-y, 0.95)\r\n      )\r\n      translateY(0);\r\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95))\r\n      translateY(0);\r\n  }\r\n  57% {\r\n    -webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n    transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n  }\r\n  64% {\r\n    -webkit-transform: scale(1) translateY(0);\r\n    transform: scale(1) translateY(0);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1) translateY(0);\r\n    transform: scale(1) translateY(0);\r\n  }\r\n}\r\n@keyframes fa-bounce {\r\n  0% {\r\n    -webkit-transform: scale(1) translateY(0);\r\n    transform: scale(1) translateY(0);\r\n  }\r\n  10% {\r\n    -webkit-transform: scale(\r\n        var(--fa-bounce-start-scale-x, 1.1),\r\n        var(--fa-bounce-start-scale-y, 0.9)\r\n      )\r\n      translateY(0);\r\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9))\r\n      translateY(0);\r\n  }\r\n  30% {\r\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1))\r\n      translateY(var(--fa-bounce-height, -0.5em));\r\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1))\r\n      translateY(var(--fa-bounce-height, -0.5em));\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(\r\n        var(--fa-bounce-land-scale-x, 1.05),\r\n        var(--fa-bounce-land-scale-y, 0.95)\r\n      )\r\n      translateY(0);\r\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95))\r\n      translateY(0);\r\n  }\r\n  57% {\r\n    -webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n    transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n  }\r\n  64% {\r\n    -webkit-transform: scale(1) translateY(0);\r\n    transform: scale(1) translateY(0);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1) translateY(0);\r\n    transform: scale(1) translateY(0);\r\n  }\r\n}\r\n@-webkit-keyframes fa-fade {\r\n  50% {\r\n    opacity: var(--fa-fade-opacity, 0.4);\r\n  }\r\n}\r\n@keyframes fa-fade {\r\n  50% {\r\n    opacity: var(--fa-fade-opacity, 0.4);\r\n  }\r\n}\r\n@-webkit-keyframes fa-beat-fade {\r\n  0%,\r\n  to {\r\n    opacity: var(--fa-beat-fade-opacity, 0.4);\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n  }\r\n}\r\n@keyframes fa-beat-fade {\r\n  0%,\r\n  to {\r\n    opacity: var(--fa-beat-fade-opacity, 0.4);\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n  }\r\n}\r\n@-webkit-keyframes fa-flip {\r\n  50% {\r\n    -webkit-transform: rotate3d(\r\n      var(--fa-flip-x, 0),\r\n      var(--fa-flip-y, 1),\r\n      var(--fa-flip-z, 0),\r\n      var(--fa-flip-angle, -180deg)\r\n    );\r\n    transform: rotate3d(\r\n      var(--fa-flip-x, 0),\r\n      var(--fa-flip-y, 1),\r\n      var(--fa-flip-z, 0),\r\n      var(--fa-flip-angle, -180deg)\r\n    );\r\n  }\r\n}\r\n@keyframes fa-flip {\r\n  50% {\r\n    -webkit-transform: rotate3d(\r\n      var(--fa-flip-x, 0),\r\n      var(--fa-flip-y, 1),\r\n      var(--fa-flip-z, 0),\r\n      var(--fa-flip-angle, -180deg)\r\n    );\r\n    transform: rotate3d(\r\n      var(--fa-flip-x, 0),\r\n      var(--fa-flip-y, 1),\r\n      var(--fa-flip-z, 0),\r\n      var(--fa-flip-angle, -180deg)\r\n    );\r\n  }\r\n}\r\n@-webkit-keyframes fa-shake {\r\n  0% {\r\n    -webkit-transform: rotate(-15deg);\r\n    transform: rotate(-15deg);\r\n  }\r\n  4% {\r\n    -webkit-transform: rotate(15deg);\r\n    transform: rotate(15deg);\r\n  }\r\n  8%,\r\n  24% {\r\n    -webkit-transform: rotate(-18deg);\r\n    transform: rotate(-18deg);\r\n  }\r\n  12%,\r\n  28% {\r\n    -webkit-transform: rotate(18deg);\r\n    transform: rotate(18deg);\r\n  }\r\n  16% {\r\n    -webkit-transform: rotate(-22deg);\r\n    transform: rotate(-22deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(22deg);\r\n    transform: rotate(22deg);\r\n  }\r\n  32% {\r\n    -webkit-transform: rotate(-12deg);\r\n    transform: rotate(-12deg);\r\n  }\r\n  36% {\r\n    -webkit-transform: rotate(12deg);\r\n    transform: rotate(12deg);\r\n  }\r\n  40%,\r\n  to {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@keyframes fa-shake {\r\n  0% {\r\n    -webkit-transform: rotate(-15deg);\r\n    transform: rotate(-15deg);\r\n  }\r\n  4% {\r\n    -webkit-transform: rotate(15deg);\r\n    transform: rotate(15deg);\r\n  }\r\n  8%,\r\n  24% {\r\n    -webkit-transform: rotate(-18deg);\r\n    transform: rotate(-18deg);\r\n  }\r\n  12%,\r\n  28% {\r\n    -webkit-transform: rotate(18deg);\r\n    transform: rotate(18deg);\r\n  }\r\n  16% {\r\n    -webkit-transform: rotate(-22deg);\r\n    transform: rotate(-22deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: rotate(22deg);\r\n    transform: rotate(22deg);\r\n  }\r\n  32% {\r\n    -webkit-transform: rotate(-12deg);\r\n    transform: rotate(-12deg);\r\n  }\r\n  36% {\r\n    -webkit-transform: rotate(12deg);\r\n    transform: rotate(12deg);\r\n  }\r\n  40%,\r\n  to {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n@-webkit-keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(1turn);\r\n    transform: rotate(1turn);\r\n  }\r\n}\r\n@keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(1turn);\r\n    transform: rotate(1turn);\r\n  }\r\n}\r\n.fa-rotate-90 {\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.fa-rotate-180 {\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.fa-rotate-270 {\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.fa-flip-horizontal {\r\n  -webkit-transform: scaleX(-1);\r\n  transform: scaleX(-1);\r\n}\r\n.fa-flip-vertical {\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n}\r\n.fa-flip-both,\r\n.fa-flip-horizontal.fa-flip-vertical {\r\n  -webkit-transform: scale(-1);\r\n  transform: scale(-1);\r\n}\r\n.fa-rotate-by {\r\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\r\n  transform: rotate(var(--fa-rotate-angle, none));\r\n}\r\n.fa-stack {\r\n  display: inline-block;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  width: 2.5em;\r\n}\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  left: 0;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 100%;\r\n  z-index: var(--fa-stack-z-index, auto);\r\n}\r\n.fa-stack-1x {\r\n  line-height: inherit;\r\n}\r\n.fa-stack-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-inverse {\r\n  color: var(--fa-inverse, #fff);\r\n}\r\n\r\n.fa-0:before {\r\n  content: '\\30';\r\n}\r\n.fa-1:before {\r\n  content: '\\31';\r\n}\r\n.fa-2:before {\r\n  content: '\\32';\r\n}\r\n.fa-3:before {\r\n  content: '\\33';\r\n}\r\n.fa-4:before {\r\n  content: '\\34';\r\n}\r\n.fa-5:before {\r\n  content: '\\35';\r\n}\r\n.fa-6:before {\r\n  content: '\\36';\r\n}\r\n.fa-7:before {\r\n  content: '\\37';\r\n}\r\n.fa-8:before {\r\n  content: '\\38';\r\n}\r\n.fa-9:before {\r\n  content: '\\39';\r\n}\r\n.fa-fill-drip:before {\r\n  content: '\\f576';\r\n}\r\n.fa-arrows-to-circle:before {\r\n  content: '\\e4bd';\r\n}\r\n.fa-chevron-circle-right:before,\r\n.fa-circle-chevron-right:before {\r\n  content: '\\f138';\r\n}\r\n.fa-at:before {\r\n  content: '\\40';\r\n}\r\n.fa-trash-alt:before,\r\n.fa-trash-can:before {\r\n  content: '\\f2ed';\r\n}\r\n.fa-text-height:before {\r\n  content: '\\f034';\r\n}\r\n.fa-user-times:before,\r\n.fa-user-xmark:before {\r\n  content: '\\f235';\r\n}\r\n.fa-stethoscope:before {\r\n  content: '\\f0f1';\r\n}\r\n.fa-comment-alt:before,\r\n.fa-message:before {\r\n  content: '\\f27a';\r\n}\r\n.fa-info:before {\r\n  content: '\\f129';\r\n}\r\n.fa-compress-alt:before,\r\n.fa-down-left-and-up-right-to-center:before {\r\n  content: '\\f422';\r\n}\r\n.fa-explosion:before {\r\n  content: '\\e4e9';\r\n}\r\n.fa-file-alt:before,\r\n.fa-file-lines:before,\r\n.fa-file-text:before {\r\n  content: '\\f15c';\r\n}\r\n.fa-wave-square:before {\r\n  content: '\\f83e';\r\n}\r\n.fa-ring:before {\r\n  content: '\\f70b';\r\n}\r\n.fa-building-un:before {\r\n  content: '\\e4d9';\r\n}\r\n.fa-dice-three:before {\r\n  content: '\\f527';\r\n}\r\n.fa-calendar-alt:before,\r\n.fa-calendar-days:before {\r\n  content: '\\f073';\r\n}\r\n.fa-anchor-circle-check:before {\r\n  content: '\\e4aa';\r\n}\r\n.fa-building-circle-arrow-right:before {\r\n  content: '\\e4d1';\r\n}\r\n.fa-volleyball-ball:before,\r\n.fa-volleyball:before {\r\n  content: '\\f45f';\r\n}\r\n.fa-arrows-up-to-line:before {\r\n  content: '\\e4c2';\r\n}\r\n.fa-sort-desc:before,\r\n.fa-sort-down:before {\r\n  content: '\\f0dd';\r\n}\r\n.fa-circle-minus:before,\r\n.fa-minus-circle:before {\r\n  content: '\\f056';\r\n}\r\n.fa-door-open:before {\r\n  content: '\\f52b';\r\n}\r\n.fa-right-from-bracket:before,\r\n.fa-sign-out-alt:before {\r\n  content: '\\f2f5';\r\n}\r\n.fa-atom:before {\r\n  content: '\\f5d2';\r\n}\r\n.fa-soap:before {\r\n  content: '\\e06e';\r\n}\r\n.fa-heart-music-camera-bolt:before,\r\n.fa-icons:before {\r\n  content: '\\f86d';\r\n}\r\n.fa-microphone-alt-slash:before,\r\n.fa-microphone-lines-slash:before {\r\n  content: '\\f539';\r\n}\r\n.fa-bridge-circle-check:before {\r\n  content: '\\e4c9';\r\n}\r\n.fa-pump-medical:before {\r\n  content: '\\e06a';\r\n}\r\n.fa-fingerprint:before {\r\n  content: '\\f577';\r\n}\r\n.fa-hand-point-right:before {\r\n  content: '\\f0a4';\r\n}\r\n.fa-magnifying-glass-location:before,\r\n.fa-search-location:before {\r\n  content: '\\f689';\r\n}\r\n.fa-forward-step:before,\r\n.fa-step-forward:before {\r\n  content: '\\f051';\r\n}\r\n.fa-face-smile-beam:before,\r\n.fa-smile-beam:before {\r\n  content: '\\f5b8';\r\n}\r\n.fa-flag-checkered:before {\r\n  content: '\\f11e';\r\n}\r\n.fa-football-ball:before,\r\n.fa-football:before {\r\n  content: '\\f44e';\r\n}\r\n.fa-school-circle-exclamation:before {\r\n  content: '\\e56c';\r\n}\r\n.fa-crop:before {\r\n  content: '\\f125';\r\n}\r\n.fa-angle-double-down:before,\r\n.fa-angles-down:before {\r\n  content: '\\f103';\r\n}\r\n.fa-users-rectangle:before {\r\n  content: '\\e594';\r\n}\r\n.fa-people-roof:before {\r\n  content: '\\e537';\r\n}\r\n.fa-people-line:before {\r\n  content: '\\e534';\r\n}\r\n.fa-beer-mug-empty:before,\r\n.fa-beer:before {\r\n  content: '\\f0fc';\r\n}\r\n.fa-diagram-predecessor:before {\r\n  content: '\\e477';\r\n}\r\n.fa-arrow-up-long:before,\r\n.fa-long-arrow-up:before {\r\n  content: '\\f176';\r\n}\r\n.fa-burn:before,\r\n.fa-fire-flame-simple:before {\r\n  content: '\\f46a';\r\n}\r\n.fa-male:before,\r\n.fa-person:before {\r\n  content: '\\f183';\r\n}\r\n.fa-laptop:before {\r\n  content: '\\f109';\r\n}\r\n.fa-file-csv:before {\r\n  content: '\\f6dd';\r\n}\r\n.fa-menorah:before {\r\n  content: '\\f676';\r\n}\r\n.fa-truck-plane:before {\r\n  content: '\\e58f';\r\n}\r\n.fa-record-vinyl:before {\r\n  content: '\\f8d9';\r\n}\r\n.fa-face-grin-stars:before,\r\n.fa-grin-stars:before {\r\n  content: '\\f587';\r\n}\r\n.fa-bong:before {\r\n  content: '\\f55c';\r\n}\r\n.fa-pastafarianism:before,\r\n.fa-spaghetti-monster-flying:before {\r\n  content: '\\f67b';\r\n}\r\n.fa-arrow-down-up-across-line:before {\r\n  content: '\\e4af';\r\n}\r\n.fa-spoon:before,\r\n.fa-utensil-spoon:before {\r\n  content: '\\f2e5';\r\n}\r\n.fa-jar-wheat:before {\r\n  content: '\\e517';\r\n}\r\n.fa-envelopes-bulk:before,\r\n.fa-mail-bulk:before {\r\n  content: '\\f674';\r\n}\r\n.fa-file-circle-exclamation:before {\r\n  content: '\\e4eb';\r\n}\r\n.fa-circle-h:before,\r\n.fa-hospital-symbol:before {\r\n  content: '\\f47e';\r\n}\r\n.fa-pager:before {\r\n  content: '\\f815';\r\n}\r\n.fa-address-book:before,\r\n.fa-contact-book:before {\r\n  content: '\\f2b9';\r\n}\r\n.fa-strikethrough:before {\r\n  content: '\\f0cc';\r\n}\r\n.fa-k:before {\r\n  content: '\\4b';\r\n}\r\n.fa-landmark-flag:before {\r\n  content: '\\e51c';\r\n}\r\n.fa-pencil-alt:before,\r\n.fa-pencil:before {\r\n  content: '\\f303';\r\n}\r\n.fa-backward:before {\r\n  content: '\\f04a';\r\n}\r\n.fa-caret-right:before {\r\n  content: '\\f0da';\r\n}\r\n.fa-comments:before {\r\n  content: '\\f086';\r\n}\r\n.fa-file-clipboard:before,\r\n.fa-paste:before {\r\n  content: '\\f0ea';\r\n}\r\n.fa-code-pull-request:before {\r\n  content: '\\e13c';\r\n}\r\n.fa-clipboard-list:before {\r\n  content: '\\f46d';\r\n}\r\n.fa-truck-loading:before,\r\n.fa-truck-ramp-box:before {\r\n  content: '\\f4de';\r\n}\r\n.fa-user-check:before {\r\n  content: '\\f4fc';\r\n}\r\n.fa-vial-virus:before {\r\n  content: '\\e597';\r\n}\r\n.fa-sheet-plastic:before {\r\n  content: '\\e571';\r\n}\r\n.fa-blog:before {\r\n  content: '\\f781';\r\n}\r\n.fa-user-ninja:before {\r\n  content: '\\f504';\r\n}\r\n.fa-person-arrow-up-from-line:before {\r\n  content: '\\e539';\r\n}\r\n.fa-scroll-torah:before,\r\n.fa-torah:before {\r\n  content: '\\f6a0';\r\n}\r\n.fa-broom-ball:before,\r\n.fa-quidditch-broom-ball:before,\r\n.fa-quidditch:before {\r\n  content: '\\f458';\r\n}\r\n.fa-toggle-off:before {\r\n  content: '\\f204';\r\n}\r\n.fa-archive:before,\r\n.fa-box-archive:before {\r\n  content: '\\f187';\r\n}\r\n.fa-person-drowning:before {\r\n  content: '\\e545';\r\n}\r\n.fa-arrow-down-9-1:before,\r\n.fa-sort-numeric-desc:before,\r\n.fa-sort-numeric-down-alt:before {\r\n  content: '\\f886';\r\n}\r\n.fa-face-grin-tongue-squint:before,\r\n.fa-grin-tongue-squint:before {\r\n  content: '\\f58a';\r\n}\r\n.fa-spray-can:before {\r\n  content: '\\f5bd';\r\n}\r\n.fa-truck-monster:before {\r\n  content: '\\f63b';\r\n}\r\n.fa-w:before {\r\n  content: '\\57';\r\n}\r\n.fa-earth-africa:before,\r\n.fa-globe-africa:before {\r\n  content: '\\f57c';\r\n}\r\n.fa-rainbow:before {\r\n  content: '\\f75b';\r\n}\r\n.fa-circle-notch:before {\r\n  content: '\\f1ce';\r\n}\r\n.fa-tablet-alt:before,\r\n.fa-tablet-screen-button:before {\r\n  content: '\\f3fa';\r\n}\r\n.fa-paw:before {\r\n  content: '\\f1b0';\r\n}\r\n.fa-cloud:before {\r\n  content: '\\f0c2';\r\n}\r\n.fa-trowel-bricks:before {\r\n  content: '\\e58a';\r\n}\r\n.fa-face-flushed:before,\r\n.fa-flushed:before {\r\n  content: '\\f579';\r\n}\r\n.fa-hospital-user:before {\r\n  content: '\\f80d';\r\n}\r\n.fa-tent-arrow-left-right:before {\r\n  content: '\\e57f';\r\n}\r\n.fa-gavel:before,\r\n.fa-legal:before {\r\n  content: '\\f0e3';\r\n}\r\n.fa-binoculars:before {\r\n  content: '\\f1e5';\r\n}\r\n.fa-microphone-slash:before {\r\n  content: '\\f131';\r\n}\r\n.fa-box-tissue:before {\r\n  content: '\\e05b';\r\n}\r\n.fa-motorcycle:before {\r\n  content: '\\f21c';\r\n}\r\n.fa-bell-concierge:before,\r\n.fa-concierge-bell:before {\r\n  content: '\\f562';\r\n}\r\n.fa-pen-ruler:before,\r\n.fa-pencil-ruler:before {\r\n  content: '\\f5ae';\r\n}\r\n.fa-people-arrows-left-right:before,\r\n.fa-people-arrows:before {\r\n  content: '\\e068';\r\n}\r\n.fa-mars-and-venus-burst:before {\r\n  content: '\\e523';\r\n}\r\n.fa-caret-square-right:before,\r\n.fa-square-caret-right:before {\r\n  content: '\\f152';\r\n}\r\n.fa-cut:before,\r\n.fa-scissors:before {\r\n  content: '\\f0c4';\r\n}\r\n.fa-sun-plant-wilt:before {\r\n  content: '\\e57a';\r\n}\r\n.fa-toilets-portable:before {\r\n  content: '\\e584';\r\n}\r\n.fa-hockey-puck:before {\r\n  content: '\\f453';\r\n}\r\n.fa-table:before {\r\n  content: '\\f0ce';\r\n}\r\n.fa-magnifying-glass-arrow-right:before {\r\n  content: '\\e521';\r\n}\r\n.fa-digital-tachograph:before,\r\n.fa-tachograph-digital:before {\r\n  content: '\\f566';\r\n}\r\n.fa-users-slash:before {\r\n  content: '\\e073';\r\n}\r\n.fa-clover:before {\r\n  content: '\\e139';\r\n}\r\n.fa-mail-reply:before,\r\n.fa-reply:before {\r\n  content: '\\f3e5';\r\n}\r\n.fa-star-and-crescent:before {\r\n  content: '\\f699';\r\n}\r\n.fa-house-fire:before {\r\n  content: '\\e50c';\r\n}\r\n.fa-minus-square:before,\r\n.fa-square-minus:before {\r\n  content: '\\f146';\r\n}\r\n.fa-helicopter:before {\r\n  content: '\\f533';\r\n}\r\n.fa-compass:before {\r\n  content: '\\f14e';\r\n}\r\n.fa-caret-square-down:before,\r\n.fa-square-caret-down:before {\r\n  content: '\\f150';\r\n}\r\n.fa-file-circle-question:before {\r\n  content: '\\e4ef';\r\n}\r\n.fa-laptop-code:before {\r\n  content: '\\f5fc';\r\n}\r\n.fa-swatchbook:before {\r\n  content: '\\f5c3';\r\n}\r\n.fa-prescription-bottle:before {\r\n  content: '\\f485';\r\n}\r\n.fa-bars:before,\r\n.fa-navicon:before {\r\n  content: '\\f0c9';\r\n}\r\n.fa-people-group:before {\r\n  content: '\\e533';\r\n}\r\n.fa-hourglass-3:before,\r\n.fa-hourglass-end:before {\r\n  content: '\\f253';\r\n}\r\n.fa-heart-broken:before,\r\n.fa-heart-crack:before {\r\n  content: '\\f7a9';\r\n}\r\n.fa-external-link-square-alt:before,\r\n.fa-square-up-right:before {\r\n  content: '\\f360';\r\n}\r\n.fa-face-kiss-beam:before,\r\n.fa-kiss-beam:before {\r\n  content: '\\f597';\r\n}\r\n.fa-film:before {\r\n  content: '\\f008';\r\n}\r\n.fa-ruler-horizontal:before {\r\n  content: '\\f547';\r\n}\r\n.fa-people-robbery:before {\r\n  content: '\\e536';\r\n}\r\n.fa-lightbulb:before {\r\n  content: '\\f0eb';\r\n}\r\n.fa-caret-left:before {\r\n  content: '\\f0d9';\r\n}\r\n.fa-circle-exclamation:before,\r\n.fa-exclamation-circle:before {\r\n  content: '\\f06a';\r\n}\r\n.fa-school-circle-xmark:before {\r\n  content: '\\e56d';\r\n}\r\n.fa-arrow-right-from-bracket:before,\r\n.fa-sign-out:before {\r\n  content: '\\f08b';\r\n}\r\n.fa-chevron-circle-down:before,\r\n.fa-circle-chevron-down:before {\r\n  content: '\\f13a';\r\n}\r\n.fa-unlock-alt:before,\r\n.fa-unlock-keyhole:before {\r\n  content: '\\f13e';\r\n}\r\n.fa-cloud-showers-heavy:before {\r\n  content: '\\f740';\r\n}\r\n.fa-headphones-alt:before,\r\n.fa-headphones-simple:before {\r\n  content: '\\f58f';\r\n}\r\n.fa-sitemap:before {\r\n  content: '\\f0e8';\r\n}\r\n.fa-circle-dollar-to-slot:before,\r\n.fa-donate:before {\r\n  content: '\\f4b9';\r\n}\r\n.fa-memory:before {\r\n  content: '\\f538';\r\n}\r\n.fa-road-spikes:before {\r\n  content: '\\e568';\r\n}\r\n.fa-fire-burner:before {\r\n  content: '\\e4f1';\r\n}\r\n.fa-flag:before {\r\n  content: '\\f024';\r\n}\r\n.fa-hanukiah:before {\r\n  content: '\\f6e6';\r\n}\r\n.fa-feather:before {\r\n  content: '\\f52d';\r\n}\r\n.fa-volume-down:before,\r\n.fa-volume-low:before {\r\n  content: '\\f027';\r\n}\r\n.fa-comment-slash:before {\r\n  content: '\\f4b3';\r\n}\r\n.fa-cloud-sun-rain:before {\r\n  content: '\\f743';\r\n}\r\n.fa-compress:before {\r\n  content: '\\f066';\r\n}\r\n.fa-wheat-alt:before,\r\n.fa-wheat-awn:before {\r\n  content: '\\e2cd';\r\n}\r\n.fa-ankh:before {\r\n  content: '\\f644';\r\n}\r\n.fa-hands-holding-child:before {\r\n  content: '\\e4fa';\r\n}\r\n.fa-asterisk:before {\r\n  content: '\\2a';\r\n}\r\n.fa-check-square:before,\r\n.fa-square-check:before {\r\n  content: '\\f14a';\r\n}\r\n.fa-peseta-sign:before {\r\n  content: '\\e221';\r\n}\r\n.fa-header:before,\r\n.fa-heading:before {\r\n  content: '\\f1dc';\r\n}\r\n.fa-ghost:before {\r\n  content: '\\f6e2';\r\n}\r\n.fa-list-squares:before,\r\n.fa-list:before {\r\n  content: '\\f03a';\r\n}\r\n.fa-phone-square-alt:before,\r\n.fa-square-phone-flip:before {\r\n  content: '\\f87b';\r\n}\r\n.fa-cart-plus:before {\r\n  content: '\\f217';\r\n}\r\n.fa-gamepad:before {\r\n  content: '\\f11b';\r\n}\r\n.fa-circle-dot:before,\r\n.fa-dot-circle:before {\r\n  content: '\\f192';\r\n}\r\n.fa-dizzy:before,\r\n.fa-face-dizzy:before {\r\n  content: '\\f567';\r\n}\r\n.fa-egg:before {\r\n  content: '\\f7fb';\r\n}\r\n.fa-house-medical-circle-xmark:before {\r\n  content: '\\e513';\r\n}\r\n.fa-campground:before {\r\n  content: '\\f6bb';\r\n}\r\n.fa-folder-plus:before {\r\n  content: '\\f65e';\r\n}\r\n.fa-futbol-ball:before,\r\n.fa-futbol:before,\r\n.fa-soccer-ball:before {\r\n  content: '\\f1e3';\r\n}\r\n.fa-paint-brush:before,\r\n.fa-paintbrush:before {\r\n  content: '\\f1fc';\r\n}\r\n.fa-lock:before {\r\n  content: '\\f023';\r\n}\r\n.fa-gas-pump:before {\r\n  content: '\\f52f';\r\n}\r\n.fa-hot-tub-person:before,\r\n.fa-hot-tub:before {\r\n  content: '\\f593';\r\n}\r\n.fa-map-location:before,\r\n.fa-map-marked:before {\r\n  content: '\\f59f';\r\n}\r\n.fa-house-flood-water:before {\r\n  content: '\\e50e';\r\n}\r\n.fa-tree:before {\r\n  content: '\\f1bb';\r\n}\r\n.fa-bridge-lock:before {\r\n  content: '\\e4cc';\r\n}\r\n.fa-sack-dollar:before {\r\n  content: '\\f81d';\r\n}\r\n.fa-edit:before,\r\n.fa-pen-to-square:before {\r\n  content: '\\f044';\r\n}\r\n.fa-car-side:before {\r\n  content: '\\f5e4';\r\n}\r\n.fa-share-alt:before,\r\n.fa-share-nodes:before {\r\n  content: '\\f1e0';\r\n}\r\n.fa-heart-circle-minus:before {\r\n  content: '\\e4ff';\r\n}\r\n.fa-hourglass-2:before,\r\n.fa-hourglass-half:before {\r\n  content: '\\f252';\r\n}\r\n.fa-microscope:before {\r\n  content: '\\f610';\r\n}\r\n.fa-sink:before {\r\n  content: '\\e06d';\r\n}\r\n.fa-bag-shopping:before,\r\n.fa-shopping-bag:before {\r\n  content: '\\f290';\r\n}\r\n.fa-arrow-down-z-a:before,\r\n.fa-sort-alpha-desc:before,\r\n.fa-sort-alpha-down-alt:before {\r\n  content: '\\f881';\r\n}\r\n.fa-mitten:before {\r\n  content: '\\f7b5';\r\n}\r\n.fa-person-rays:before {\r\n  content: '\\e54d';\r\n}\r\n.fa-users:before {\r\n  content: '\\f0c0';\r\n}\r\n.fa-eye-slash:before {\r\n  content: '\\f070';\r\n}\r\n.fa-flask-vial:before {\r\n  content: '\\e4f3';\r\n}\r\n.fa-hand-paper:before,\r\n.fa-hand:before {\r\n  content: '\\f256';\r\n}\r\n.fa-om:before {\r\n  content: '\\f679';\r\n}\r\n.fa-worm:before {\r\n  content: '\\e599';\r\n}\r\n.fa-house-circle-xmark:before {\r\n  content: '\\e50b';\r\n}\r\n.fa-plug:before {\r\n  content: '\\f1e6';\r\n}\r\n.fa-chevron-up:before {\r\n  content: '\\f077';\r\n}\r\n.fa-hand-spock:before {\r\n  content: '\\f259';\r\n}\r\n.fa-stopwatch:before {\r\n  content: '\\f2f2';\r\n}\r\n.fa-face-kiss:before,\r\n.fa-kiss:before {\r\n  content: '\\f596';\r\n}\r\n.fa-bridge-circle-xmark:before {\r\n  content: '\\e4cb';\r\n}\r\n.fa-face-grin-tongue:before,\r\n.fa-grin-tongue:before {\r\n  content: '\\f589';\r\n}\r\n.fa-chess-bishop:before {\r\n  content: '\\f43a';\r\n}\r\n.fa-face-grin-wink:before,\r\n.fa-grin-wink:before {\r\n  content: '\\f58c';\r\n}\r\n.fa-deaf:before,\r\n.fa-deafness:before,\r\n.fa-ear-deaf:before,\r\n.fa-hard-of-hearing:before {\r\n  content: '\\f2a4';\r\n}\r\n.fa-road-circle-check:before {\r\n  content: '\\e564';\r\n}\r\n.fa-dice-five:before {\r\n  content: '\\f523';\r\n}\r\n.fa-rss-square:before,\r\n.fa-square-rss:before {\r\n  content: '\\f143';\r\n}\r\n.fa-land-mine-on:before {\r\n  content: '\\e51b';\r\n}\r\n.fa-i-cursor:before {\r\n  content: '\\f246';\r\n}\r\n.fa-stamp:before {\r\n  content: '\\f5bf';\r\n}\r\n.fa-stairs:before {\r\n  content: '\\e289';\r\n}\r\n.fa-i:before {\r\n  content: '\\49';\r\n}\r\n.fa-hryvnia-sign:before,\r\n.fa-hryvnia:before {\r\n  content: '\\f6f2';\r\n}\r\n.fa-pills:before {\r\n  content: '\\f484';\r\n}\r\n.fa-face-grin-wide:before,\r\n.fa-grin-alt:before {\r\n  content: '\\f581';\r\n}\r\n.fa-tooth:before {\r\n  content: '\\f5c9';\r\n}\r\n.fa-v:before {\r\n  content: '\\56';\r\n}\r\n.fa-bangladeshi-taka-sign:before {\r\n  content: '\\e2e6';\r\n}\r\n.fa-bicycle:before {\r\n  content: '\\f206';\r\n}\r\n.fa-rod-asclepius:before,\r\n.fa-rod-snake:before,\r\n.fa-staff-aesculapius:before,\r\n.fa-staff-snake:before {\r\n  content: '\\e579';\r\n}\r\n.fa-head-side-cough-slash:before {\r\n  content: '\\e062';\r\n}\r\n.fa-ambulance:before,\r\n.fa-truck-medical:before {\r\n  content: '\\f0f9';\r\n}\r\n.fa-wheat-awn-circle-exclamation:before {\r\n  content: '\\e598';\r\n}\r\n.fa-snowman:before {\r\n  content: '\\f7d0';\r\n}\r\n.fa-mortar-pestle:before {\r\n  content: '\\f5a7';\r\n}\r\n.fa-road-barrier:before {\r\n  content: '\\e562';\r\n}\r\n.fa-school:before {\r\n  content: '\\f549';\r\n}\r\n.fa-igloo:before {\r\n  content: '\\f7ae';\r\n}\r\n.fa-joint:before {\r\n  content: '\\f595';\r\n}\r\n.fa-angle-right:before {\r\n  content: '\\f105';\r\n}\r\n.fa-horse:before {\r\n  content: '\\f6f0';\r\n}\r\n.fa-q:before {\r\n  content: '\\51';\r\n}\r\n.fa-g:before {\r\n  content: '\\47';\r\n}\r\n.fa-notes-medical:before {\r\n  content: '\\f481';\r\n}\r\n.fa-temperature-2:before,\r\n.fa-temperature-half:before,\r\n.fa-thermometer-2:before,\r\n.fa-thermometer-half:before {\r\n  content: '\\f2c9';\r\n}\r\n.fa-dong-sign:before {\r\n  content: '\\e169';\r\n}\r\n.fa-capsules:before {\r\n  content: '\\f46b';\r\n}\r\n.fa-poo-bolt:before,\r\n.fa-poo-storm:before {\r\n  content: '\\f75a';\r\n}\r\n.fa-face-frown-open:before,\r\n.fa-frown-open:before {\r\n  content: '\\f57a';\r\n}\r\n.fa-hand-point-up:before {\r\n  content: '\\f0a6';\r\n}\r\n.fa-money-bill:before {\r\n  content: '\\f0d6';\r\n}\r\n.fa-bookmark:before {\r\n  content: '\\f02e';\r\n}\r\n.fa-align-justify:before {\r\n  content: '\\f039';\r\n}\r\n.fa-umbrella-beach:before {\r\n  content: '\\f5ca';\r\n}\r\n.fa-helmet-un:before {\r\n  content: '\\e503';\r\n}\r\n.fa-bullseye:before {\r\n  content: '\\f140';\r\n}\r\n.fa-bacon:before {\r\n  content: '\\f7e5';\r\n}\r\n.fa-hand-point-down:before {\r\n  content: '\\f0a7';\r\n}\r\n.fa-arrow-up-from-bracket:before {\r\n  content: '\\e09a';\r\n}\r\n.fa-folder-blank:before,\r\n.fa-folder:before {\r\n  content: '\\f07b';\r\n}\r\n.fa-file-medical-alt:before,\r\n.fa-file-waveform:before {\r\n  content: '\\f478';\r\n}\r\n.fa-radiation:before {\r\n  content: '\\f7b9';\r\n}\r\n.fa-chart-simple:before {\r\n  content: '\\e473';\r\n}\r\n.fa-mars-stroke:before {\r\n  content: '\\f229';\r\n}\r\n.fa-vial:before {\r\n  content: '\\f492';\r\n}\r\n.fa-dashboard:before,\r\n.fa-gauge-med:before,\r\n.fa-gauge:before,\r\n.fa-tachometer-alt-average:before {\r\n  content: '\\f624';\r\n}\r\n.fa-magic-wand-sparkles:before,\r\n.fa-wand-magic-sparkles:before {\r\n  content: '\\e2ca';\r\n}\r\n.fa-e:before {\r\n  content: '\\45';\r\n}\r\n.fa-pen-alt:before,\r\n.fa-pen-clip:before {\r\n  content: '\\f305';\r\n}\r\n.fa-bridge-circle-exclamation:before {\r\n  content: '\\e4ca';\r\n}\r\n.fa-user:before {\r\n  content: '\\f007';\r\n}\r\n.fa-school-circle-check:before {\r\n  content: '\\e56b';\r\n}\r\n.fa-dumpster:before {\r\n  content: '\\f793';\r\n}\r\n.fa-shuttle-van:before,\r\n.fa-van-shuttle:before {\r\n  content: '\\f5b6';\r\n}\r\n.fa-building-user:before {\r\n  content: '\\e4da';\r\n}\r\n.fa-caret-square-left:before,\r\n.fa-square-caret-left:before {\r\n  content: '\\f191';\r\n}\r\n.fa-highlighter:before {\r\n  content: '\\f591';\r\n}\r\n.fa-key:before {\r\n  content: '\\f084';\r\n}\r\n.fa-bullhorn:before {\r\n  content: '\\f0a1';\r\n}\r\n.fa-globe:before {\r\n  content: '\\f0ac';\r\n}\r\n.fa-synagogue:before {\r\n  content: '\\f69b';\r\n}\r\n.fa-person-half-dress:before {\r\n  content: '\\e548';\r\n}\r\n.fa-road-bridge:before {\r\n  content: '\\e563';\r\n}\r\n.fa-location-arrow:before {\r\n  content: '\\f124';\r\n}\r\n.fa-c:before {\r\n  content: '\\43';\r\n}\r\n.fa-tablet-button:before {\r\n  content: '\\f10a';\r\n}\r\n.fa-building-lock:before {\r\n  content: '\\e4d6';\r\n}\r\n.fa-pizza-slice:before {\r\n  content: '\\f818';\r\n}\r\n.fa-money-bill-wave:before {\r\n  content: '\\f53a';\r\n}\r\n.fa-area-chart:before,\r\n.fa-chart-area:before {\r\n  content: '\\f1fe';\r\n}\r\n.fa-house-flag:before {\r\n  content: '\\e50d';\r\n}\r\n.fa-person-circle-minus:before {\r\n  content: '\\e540';\r\n}\r\n.fa-ban:before,\r\n.fa-cancel:before {\r\n  content: '\\f05e';\r\n}\r\n.fa-camera-rotate:before {\r\n  content: '\\e0d8';\r\n}\r\n.fa-air-freshener:before,\r\n.fa-spray-can-sparkles:before {\r\n  content: '\\f5d0';\r\n}\r\n.fa-star:before {\r\n  content: '\\f005';\r\n}\r\n.fa-repeat:before {\r\n  content: '\\f363';\r\n}\r\n.fa-cross:before {\r\n  content: '\\f654';\r\n}\r\n.fa-box:before {\r\n  content: '\\f466';\r\n}\r\n.fa-venus-mars:before {\r\n  content: '\\f228';\r\n}\r\n.fa-arrow-pointer:before,\r\n.fa-mouse-pointer:before {\r\n  content: '\\f245';\r\n}\r\n.fa-expand-arrows-alt:before,\r\n.fa-maximize:before {\r\n  content: '\\f31e';\r\n}\r\n.fa-charging-station:before {\r\n  content: '\\f5e7';\r\n}\r\n.fa-shapes:before,\r\n.fa-triangle-circle-square:before {\r\n  content: '\\f61f';\r\n}\r\n.fa-random:before,\r\n.fa-shuffle:before {\r\n  content: '\\f074';\r\n}\r\n.fa-person-running:before,\r\n.fa-running:before {\r\n  content: '\\f70c';\r\n}\r\n.fa-mobile-retro:before {\r\n  content: '\\e527';\r\n}\r\n.fa-grip-lines-vertical:before {\r\n  content: '\\f7a5';\r\n}\r\n.fa-spider:before {\r\n  content: '\\f717';\r\n}\r\n.fa-hands-bound:before {\r\n  content: '\\e4f9';\r\n}\r\n.fa-file-invoice-dollar:before {\r\n  content: '\\f571';\r\n}\r\n.fa-plane-circle-exclamation:before {\r\n  content: '\\e556';\r\n}\r\n.fa-x-ray:before {\r\n  content: '\\f497';\r\n}\r\n.fa-spell-check:before {\r\n  content: '\\f891';\r\n}\r\n.fa-slash:before {\r\n  content: '\\f715';\r\n}\r\n.fa-computer-mouse:before,\r\n.fa-mouse:before {\r\n  content: '\\f8cc';\r\n}\r\n.fa-arrow-right-to-bracket:before,\r\n.fa-sign-in:before {\r\n  content: '\\f090';\r\n}\r\n.fa-shop-slash:before,\r\n.fa-store-alt-slash:before {\r\n  content: '\\e070';\r\n}\r\n.fa-server:before {\r\n  content: '\\f233';\r\n}\r\n.fa-virus-covid-slash:before {\r\n  content: '\\e4a9';\r\n}\r\n.fa-shop-lock:before {\r\n  content: '\\e4a5';\r\n}\r\n.fa-hourglass-1:before,\r\n.fa-hourglass-start:before {\r\n  content: '\\f251';\r\n}\r\n.fa-blender-phone:before {\r\n  content: '\\f6b6';\r\n}\r\n.fa-building-wheat:before {\r\n  content: '\\e4db';\r\n}\r\n.fa-person-breastfeeding:before {\r\n  content: '\\e53a';\r\n}\r\n.fa-right-to-bracket:before,\r\n.fa-sign-in-alt:before {\r\n  content: '\\f2f6';\r\n}\r\n.fa-venus:before {\r\n  content: '\\f221';\r\n}\r\n.fa-passport:before {\r\n  content: '\\f5ab';\r\n}\r\n.fa-heart-pulse:before,\r\n.fa-heartbeat:before {\r\n  content: '\\f21e';\r\n}\r\n.fa-people-carry-box:before,\r\n.fa-people-carry:before {\r\n  content: '\\f4ce';\r\n}\r\n.fa-temperature-high:before {\r\n  content: '\\f769';\r\n}\r\n.fa-microchip:before {\r\n  content: '\\f2db';\r\n}\r\n.fa-crown:before {\r\n  content: '\\f521';\r\n}\r\n.fa-weight-hanging:before {\r\n  content: '\\f5cd';\r\n}\r\n.fa-xmarks-lines:before {\r\n  content: '\\e59a';\r\n}\r\n.fa-file-prescription:before {\r\n  content: '\\f572';\r\n}\r\n.fa-weight-scale:before,\r\n.fa-weight:before {\r\n  content: '\\f496';\r\n}\r\n.fa-user-friends:before,\r\n.fa-user-group:before {\r\n  content: '\\f500';\r\n}\r\n.fa-arrow-up-a-z:before,\r\n.fa-sort-alpha-up:before {\r\n  content: '\\f15e';\r\n}\r\n.fa-chess-knight:before {\r\n  content: '\\f441';\r\n}\r\n.fa-face-laugh-squint:before,\r\n.fa-laugh-squint:before {\r\n  content: '\\f59b';\r\n}\r\n.fa-wheelchair:before {\r\n  content: '\\f193';\r\n}\r\n.fa-arrow-circle-up:before,\r\n.fa-circle-arrow-up:before {\r\n  content: '\\f0aa';\r\n}\r\n.fa-toggle-on:before {\r\n  content: '\\f205';\r\n}\r\n.fa-person-walking:before,\r\n.fa-walking:before {\r\n  content: '\\f554';\r\n}\r\n.fa-l:before {\r\n  content: '\\4c';\r\n}\r\n.fa-fire:before {\r\n  content: '\\f06d';\r\n}\r\n.fa-bed-pulse:before,\r\n.fa-procedures:before {\r\n  content: '\\f487';\r\n}\r\n.fa-shuttle-space:before,\r\n.fa-space-shuttle:before {\r\n  content: '\\f197';\r\n}\r\n.fa-face-laugh:before,\r\n.fa-laugh:before {\r\n  content: '\\f599';\r\n}\r\n.fa-folder-open:before {\r\n  content: '\\f07c';\r\n}\r\n.fa-heart-circle-plus:before {\r\n  content: '\\e500';\r\n}\r\n.fa-code-fork:before {\r\n  content: '\\e13b';\r\n}\r\n.fa-city:before {\r\n  content: '\\f64f';\r\n}\r\n.fa-microphone-alt:before,\r\n.fa-microphone-lines:before {\r\n  content: '\\f3c9';\r\n}\r\n.fa-pepper-hot:before {\r\n  content: '\\f816';\r\n}\r\n.fa-unlock:before {\r\n  content: '\\f09c';\r\n}\r\n.fa-colon-sign:before {\r\n  content: '\\e140';\r\n}\r\n.fa-headset:before {\r\n  content: '\\f590';\r\n}\r\n.fa-store-slash:before {\r\n  content: '\\e071';\r\n}\r\n.fa-road-circle-xmark:before {\r\n  content: '\\e566';\r\n}\r\n.fa-user-minus:before {\r\n  content: '\\f503';\r\n}\r\n.fa-mars-stroke-up:before,\r\n.fa-mars-stroke-v:before {\r\n  content: '\\f22a';\r\n}\r\n.fa-champagne-glasses:before,\r\n.fa-glass-cheers:before {\r\n  content: '\\f79f';\r\n}\r\n.fa-clipboard:before {\r\n  content: '\\f328';\r\n}\r\n.fa-house-circle-exclamation:before {\r\n  content: '\\e50a';\r\n}\r\n.fa-file-arrow-up:before,\r\n.fa-file-upload:before {\r\n  content: '\\f574';\r\n}\r\n.fa-wifi-3:before,\r\n.fa-wifi-strong:before,\r\n.fa-wifi:before {\r\n  content: '\\f1eb';\r\n}\r\n.fa-bath:before,\r\n.fa-bathtub:before {\r\n  content: '\\f2cd';\r\n}\r\n.fa-underline:before {\r\n  content: '\\f0cd';\r\n}\r\n.fa-user-edit:before,\r\n.fa-user-pen:before {\r\n  content: '\\f4ff';\r\n}\r\n.fa-signature:before {\r\n  content: '\\f5b7';\r\n}\r\n.fa-stroopwafel:before {\r\n  content: '\\f551';\r\n}\r\n.fa-bold:before {\r\n  content: '\\f032';\r\n}\r\n.fa-anchor-lock:before {\r\n  content: '\\e4ad';\r\n}\r\n.fa-building-ngo:before {\r\n  content: '\\e4d7';\r\n}\r\n.fa-manat-sign:before {\r\n  content: '\\e1d5';\r\n}\r\n.fa-not-equal:before {\r\n  content: '\\f53e';\r\n}\r\n.fa-border-style:before,\r\n.fa-border-top-left:before {\r\n  content: '\\f853';\r\n}\r\n.fa-map-location-dot:before,\r\n.fa-map-marked-alt:before {\r\n  content: '\\f5a0';\r\n}\r\n.fa-jedi:before {\r\n  content: '\\f669';\r\n}\r\n.fa-poll:before,\r\n.fa-square-poll-vertical:before {\r\n  content: '\\f681';\r\n}\r\n.fa-mug-hot:before {\r\n  content: '\\f7b6';\r\n}\r\n.fa-battery-car:before,\r\n.fa-car-battery:before {\r\n  content: '\\f5df';\r\n}\r\n.fa-gift:before {\r\n  content: '\\f06b';\r\n}\r\n.fa-dice-two:before {\r\n  content: '\\f528';\r\n}\r\n.fa-chess-queen:before {\r\n  content: '\\f445';\r\n}\r\n.fa-glasses:before {\r\n  content: '\\f530';\r\n}\r\n.fa-chess-board:before {\r\n  content: '\\f43c';\r\n}\r\n.fa-building-circle-check:before {\r\n  content: '\\e4d2';\r\n}\r\n.fa-person-chalkboard:before {\r\n  content: '\\e53d';\r\n}\r\n.fa-mars-stroke-h:before,\r\n.fa-mars-stroke-right:before {\r\n  content: '\\f22b';\r\n}\r\n.fa-hand-back-fist:before,\r\n.fa-hand-rock:before {\r\n  content: '\\f255';\r\n}\r\n.fa-caret-square-up:before,\r\n.fa-square-caret-up:before {\r\n  content: '\\f151';\r\n}\r\n.fa-cloud-showers-water:before {\r\n  content: '\\e4e4';\r\n}\r\n.fa-bar-chart:before,\r\n.fa-chart-bar:before {\r\n  content: '\\f080';\r\n}\r\n.fa-hands-bubbles:before,\r\n.fa-hands-wash:before {\r\n  content: '\\e05e';\r\n}\r\n.fa-less-than-equal:before {\r\n  content: '\\f537';\r\n}\r\n.fa-train:before {\r\n  content: '\\f238';\r\n}\r\n.fa-eye-low-vision:before,\r\n.fa-low-vision:before {\r\n  content: '\\f2a8';\r\n}\r\n.fa-crow:before {\r\n  content: '\\f520';\r\n}\r\n.fa-sailboat:before {\r\n  content: '\\e445';\r\n}\r\n.fa-window-restore:before {\r\n  content: '\\f2d2';\r\n}\r\n.fa-plus-square:before,\r\n.fa-square-plus:before {\r\n  content: '\\f0fe';\r\n}\r\n.fa-torii-gate:before {\r\n  content: '\\f6a1';\r\n}\r\n.fa-frog:before {\r\n  content: '\\f52e';\r\n}\r\n.fa-bucket:before {\r\n  content: '\\e4cf';\r\n}\r\n.fa-image:before {\r\n  content: '\\f03e';\r\n}\r\n.fa-microphone:before {\r\n  content: '\\f130';\r\n}\r\n.fa-cow:before {\r\n  content: '\\f6c8';\r\n}\r\n.fa-caret-up:before {\r\n  content: '\\f0d8';\r\n}\r\n.fa-screwdriver:before {\r\n  content: '\\f54a';\r\n}\r\n.fa-folder-closed:before {\r\n  content: '\\e185';\r\n}\r\n.fa-house-tsunami:before {\r\n  content: '\\e515';\r\n}\r\n.fa-square-nfi:before {\r\n  content: '\\e576';\r\n}\r\n.fa-arrow-up-from-ground-water:before {\r\n  content: '\\e4b5';\r\n}\r\n.fa-glass-martini-alt:before,\r\n.fa-martini-glass:before {\r\n  content: '\\f57b';\r\n}\r\n.fa-rotate-back:before,\r\n.fa-rotate-backward:before,\r\n.fa-rotate-left:before,\r\n.fa-undo-alt:before {\r\n  content: '\\f2ea';\r\n}\r\n.fa-columns:before,\r\n.fa-table-columns:before {\r\n  content: '\\f0db';\r\n}\r\n.fa-lemon:before {\r\n  content: '\\f094';\r\n}\r\n.fa-head-side-mask:before {\r\n  content: '\\e063';\r\n}\r\n.fa-handshake:before {\r\n  content: '\\f2b5';\r\n}\r\n.fa-gem:before {\r\n  content: '\\f3a5';\r\n}\r\n.fa-dolly-box:before,\r\n.fa-dolly:before {\r\n  content: '\\f472';\r\n}\r\n.fa-smoking:before {\r\n  content: '\\f48d';\r\n}\r\n.fa-compress-arrows-alt:before,\r\n.fa-minimize:before {\r\n  content: '\\f78c';\r\n}\r\n.fa-monument:before {\r\n  content: '\\f5a6';\r\n}\r\n.fa-snowplow:before {\r\n  content: '\\f7d2';\r\n}\r\n.fa-angle-double-right:before,\r\n.fa-angles-right:before {\r\n  content: '\\f101';\r\n}\r\n.fa-cannabis:before {\r\n  content: '\\f55f';\r\n}\r\n.fa-circle-play:before,\r\n.fa-play-circle:before {\r\n  content: '\\f144';\r\n}\r\n.fa-tablets:before {\r\n  content: '\\f490';\r\n}\r\n.fa-ethernet:before {\r\n  content: '\\f796';\r\n}\r\n.fa-eur:before,\r\n.fa-euro-sign:before,\r\n.fa-euro:before {\r\n  content: '\\f153';\r\n}\r\n.fa-chair:before {\r\n  content: '\\f6c0';\r\n}\r\n.fa-check-circle:before,\r\n.fa-circle-check:before {\r\n  content: '\\f058';\r\n}\r\n.fa-circle-stop:before,\r\n.fa-stop-circle:before {\r\n  content: '\\f28d';\r\n}\r\n.fa-compass-drafting:before,\r\n.fa-drafting-compass:before {\r\n  content: '\\f568';\r\n}\r\n.fa-plate-wheat:before {\r\n  content: '\\e55a';\r\n}\r\n.fa-icicles:before {\r\n  content: '\\f7ad';\r\n}\r\n.fa-person-shelter:before {\r\n  content: '\\e54f';\r\n}\r\n.fa-neuter:before {\r\n  content: '\\f22c';\r\n}\r\n.fa-id-badge:before {\r\n  content: '\\f2c1';\r\n}\r\n.fa-marker:before {\r\n  content: '\\f5a1';\r\n}\r\n.fa-face-laugh-beam:before,\r\n.fa-laugh-beam:before {\r\n  content: '\\f59a';\r\n}\r\n.fa-helicopter-symbol:before {\r\n  content: '\\e502';\r\n}\r\n.fa-universal-access:before {\r\n  content: '\\f29a';\r\n}\r\n.fa-chevron-circle-up:before,\r\n.fa-circle-chevron-up:before {\r\n  content: '\\f139';\r\n}\r\n.fa-lari-sign:before {\r\n  content: '\\e1c8';\r\n}\r\n.fa-volcano:before {\r\n  content: '\\f770';\r\n}\r\n.fa-person-walking-dashed-line-arrow-right:before {\r\n  content: '\\e553';\r\n}\r\n.fa-gbp:before,\r\n.fa-pound-sign:before,\r\n.fa-sterling-sign:before {\r\n  content: '\\f154';\r\n}\r\n.fa-viruses:before {\r\n  content: '\\e076';\r\n}\r\n.fa-square-person-confined:before {\r\n  content: '\\e577';\r\n}\r\n.fa-user-tie:before {\r\n  content: '\\f508';\r\n}\r\n.fa-arrow-down-long:before,\r\n.fa-long-arrow-down:before {\r\n  content: '\\f175';\r\n}\r\n.fa-tent-arrow-down-to-line:before {\r\n  content: '\\e57e';\r\n}\r\n.fa-certificate:before {\r\n  content: '\\f0a3';\r\n}\r\n.fa-mail-reply-all:before,\r\n.fa-reply-all:before {\r\n  content: '\\f122';\r\n}\r\n.fa-suitcase:before {\r\n  content: '\\f0f2';\r\n}\r\n.fa-person-skating:before,\r\n.fa-skating:before {\r\n  content: '\\f7c5';\r\n}\r\n.fa-filter-circle-dollar:before,\r\n.fa-funnel-dollar:before {\r\n  content: '\\f662';\r\n}\r\n.fa-camera-retro:before {\r\n  content: '\\f083';\r\n}\r\n.fa-arrow-circle-down:before,\r\n.fa-circle-arrow-down:before {\r\n  content: '\\f0ab';\r\n}\r\n.fa-arrow-right-to-file:before,\r\n.fa-file-import:before {\r\n  content: '\\f56f';\r\n}\r\n.fa-external-link-square:before,\r\n.fa-square-arrow-up-right:before {\r\n  content: '\\f14c';\r\n}\r\n.fa-box-open:before {\r\n  content: '\\f49e';\r\n}\r\n.fa-scroll:before {\r\n  content: '\\f70e';\r\n}\r\n.fa-spa:before {\r\n  content: '\\f5bb';\r\n}\r\n.fa-location-pin-lock:before {\r\n  content: '\\e51f';\r\n}\r\n.fa-pause:before {\r\n  content: '\\f04c';\r\n}\r\n.fa-hill-avalanche:before {\r\n  content: '\\e507';\r\n}\r\n.fa-temperature-0:before,\r\n.fa-temperature-empty:before,\r\n.fa-thermometer-0:before,\r\n.fa-thermometer-empty:before {\r\n  content: '\\f2cb';\r\n}\r\n.fa-bomb:before {\r\n  content: '\\f1e2';\r\n}\r\n.fa-registered:before {\r\n  content: '\\f25d';\r\n}\r\n.fa-address-card:before,\r\n.fa-contact-card:before,\r\n.fa-vcard:before {\r\n  content: '\\f2bb';\r\n}\r\n.fa-balance-scale-right:before,\r\n.fa-scale-unbalanced-flip:before {\r\n  content: '\\f516';\r\n}\r\n.fa-subscript:before {\r\n  content: '\\f12c';\r\n}\r\n.fa-diamond-turn-right:before,\r\n.fa-directions:before {\r\n  content: '\\f5eb';\r\n}\r\n.fa-burst:before {\r\n  content: '\\e4dc';\r\n}\r\n.fa-house-laptop:before,\r\n.fa-laptop-house:before {\r\n  content: '\\e066';\r\n}\r\n.fa-face-tired:before,\r\n.fa-tired:before {\r\n  content: '\\f5c8';\r\n}\r\n.fa-money-bills:before {\r\n  content: '\\e1f3';\r\n}\r\n.fa-smog:before {\r\n  content: '\\f75f';\r\n}\r\n.fa-crutch:before {\r\n  content: '\\f7f7';\r\n}\r\n.fa-cloud-arrow-up:before,\r\n.fa-cloud-upload-alt:before,\r\n.fa-cloud-upload:before {\r\n  content: '\\f0ee';\r\n}\r\n.fa-palette:before {\r\n  content: '\\f53f';\r\n}\r\n.fa-arrows-turn-right:before {\r\n  content: '\\e4c0';\r\n}\r\n.fa-vest:before {\r\n  content: '\\e085';\r\n}\r\n.fa-ferry:before {\r\n  content: '\\e4ea';\r\n}\r\n.fa-arrows-down-to-people:before {\r\n  content: '\\e4b9';\r\n}\r\n.fa-seedling:before,\r\n.fa-sprout:before {\r\n  content: '\\f4d8';\r\n}\r\n.fa-arrows-alt-h:before,\r\n.fa-left-right:before {\r\n  content: '\\f337';\r\n}\r\n.fa-boxes-packing:before {\r\n  content: '\\e4c7';\r\n}\r\n.fa-arrow-circle-left:before,\r\n.fa-circle-arrow-left:before {\r\n  content: '\\f0a8';\r\n}\r\n.fa-group-arrows-rotate:before {\r\n  content: '\\e4f6';\r\n}\r\n.fa-bowl-food:before {\r\n  content: '\\e4c6';\r\n}\r\n.fa-candy-cane:before {\r\n  content: '\\f786';\r\n}\r\n.fa-arrow-down-wide-short:before,\r\n.fa-sort-amount-asc:before,\r\n.fa-sort-amount-down:before {\r\n  content: '\\f160';\r\n}\r\n.fa-cloud-bolt:before,\r\n.fa-thunderstorm:before {\r\n  content: '\\f76c';\r\n}\r\n.fa-remove-format:before,\r\n.fa-text-slash:before {\r\n  content: '\\f87d';\r\n}\r\n.fa-face-smile-wink:before,\r\n.fa-smile-wink:before {\r\n  content: '\\f4da';\r\n}\r\n.fa-file-word:before {\r\n  content: '\\f1c2';\r\n}\r\n.fa-file-powerpoint:before {\r\n  content: '\\f1c4';\r\n}\r\n.fa-arrows-h:before,\r\n.fa-arrows-left-right:before {\r\n  content: '\\f07e';\r\n}\r\n.fa-house-lock:before {\r\n  content: '\\e510';\r\n}\r\n.fa-cloud-arrow-down:before,\r\n.fa-cloud-download-alt:before,\r\n.fa-cloud-download:before {\r\n  content: '\\f0ed';\r\n}\r\n.fa-children:before {\r\n  content: '\\e4e1';\r\n}\r\n.fa-blackboard:before,\r\n.fa-chalkboard:before {\r\n  content: '\\f51b';\r\n}\r\n.fa-user-alt-slash:before,\r\n.fa-user-large-slash:before {\r\n  content: '\\f4fa';\r\n}\r\n.fa-envelope-open:before {\r\n  content: '\\f2b6';\r\n}\r\n.fa-handshake-alt-slash:before,\r\n.fa-handshake-simple-slash:before {\r\n  content: '\\e05f';\r\n}\r\n.fa-mattress-pillow:before {\r\n  content: '\\e525';\r\n}\r\n.fa-guarani-sign:before {\r\n  content: '\\e19a';\r\n}\r\n.fa-arrows-rotate:before,\r\n.fa-refresh:before,\r\n.fa-sync:before {\r\n  content: '\\f021';\r\n}\r\n.fa-fire-extinguisher:before {\r\n  content: '\\f134';\r\n}\r\n.fa-cruzeiro-sign:before {\r\n  content: '\\e152';\r\n}\r\n.fa-greater-than-equal:before {\r\n  content: '\\f532';\r\n}\r\n.fa-shield-alt:before,\r\n.fa-shield-halved:before {\r\n  content: '\\f3ed';\r\n}\r\n.fa-atlas:before,\r\n.fa-book-atlas:before {\r\n  content: '\\f558';\r\n}\r\n.fa-virus:before {\r\n  content: '\\e074';\r\n}\r\n.fa-envelope-circle-check:before {\r\n  content: '\\e4e8';\r\n}\r\n.fa-layer-group:before {\r\n  content: '\\f5fd';\r\n}\r\n.fa-arrows-to-dot:before {\r\n  content: '\\e4be';\r\n}\r\n.fa-archway:before {\r\n  content: '\\f557';\r\n}\r\n.fa-heart-circle-check:before {\r\n  content: '\\e4fd';\r\n}\r\n.fa-house-chimney-crack:before,\r\n.fa-house-damage:before {\r\n  content: '\\f6f1';\r\n}\r\n.fa-file-archive:before,\r\n.fa-file-zipper:before {\r\n  content: '\\f1c6';\r\n}\r\n.fa-square:before {\r\n  content: '\\f0c8';\r\n}\r\n.fa-glass-martini:before,\r\n.fa-martini-glass-empty:before {\r\n  content: '\\f000';\r\n}\r\n.fa-couch:before {\r\n  content: '\\f4b8';\r\n}\r\n.fa-cedi-sign:before {\r\n  content: '\\e0df';\r\n}\r\n.fa-italic:before {\r\n  content: '\\f033';\r\n}\r\n.fa-church:before {\r\n  content: '\\f51d';\r\n}\r\n.fa-comments-dollar:before {\r\n  content: '\\f653';\r\n}\r\n.fa-democrat:before {\r\n  content: '\\f747';\r\n}\r\n.fa-z:before {\r\n  content: '\\5a';\r\n}\r\n.fa-person-skiing:before,\r\n.fa-skiing:before {\r\n  content: '\\f7c9';\r\n}\r\n.fa-road-lock:before {\r\n  content: '\\e567';\r\n}\r\n.fa-a:before {\r\n  content: '\\41';\r\n}\r\n.fa-temperature-arrow-down:before,\r\n.fa-temperature-down:before {\r\n  content: '\\e03f';\r\n}\r\n.fa-feather-alt:before,\r\n.fa-feather-pointed:before {\r\n  content: '\\f56b';\r\n}\r\n.fa-p:before {\r\n  content: '\\50';\r\n}\r\n.fa-snowflake:before {\r\n  content: '\\f2dc';\r\n}\r\n.fa-newspaper:before {\r\n  content: '\\f1ea';\r\n}\r\n.fa-ad:before,\r\n.fa-rectangle-ad:before {\r\n  content: '\\f641';\r\n}\r\n.fa-arrow-circle-right:before,\r\n.fa-circle-arrow-right:before {\r\n  content: '\\f0a9';\r\n}\r\n.fa-filter-circle-xmark:before {\r\n  content: '\\e17b';\r\n}\r\n.fa-locust:before {\r\n  content: '\\e520';\r\n}\r\n.fa-sort:before,\r\n.fa-unsorted:before {\r\n  content: '\\f0dc';\r\n}\r\n.fa-list-1-2:before,\r\n.fa-list-numeric:before,\r\n.fa-list-ol:before {\r\n  content: '\\f0cb';\r\n}\r\n.fa-person-dress-burst:before {\r\n  content: '\\e544';\r\n}\r\n.fa-money-check-alt:before,\r\n.fa-money-check-dollar:before {\r\n  content: '\\f53d';\r\n}\r\n.fa-vector-square:before {\r\n  content: '\\f5cb';\r\n}\r\n.fa-bread-slice:before {\r\n  content: '\\f7ec';\r\n}\r\n.fa-language:before {\r\n  content: '\\f1ab';\r\n}\r\n.fa-face-kiss-wink-heart:before,\r\n.fa-kiss-wink-heart:before {\r\n  content: '\\f598';\r\n}\r\n.fa-filter:before {\r\n  content: '\\f0b0';\r\n}\r\n.fa-question:before {\r\n  content: '\\3f';\r\n}\r\n.fa-file-signature:before {\r\n  content: '\\f573';\r\n}\r\n.fa-arrows-alt:before,\r\n.fa-up-down-left-right:before {\r\n  content: '\\f0b2';\r\n}\r\n.fa-house-chimney-user:before {\r\n  content: '\\e065';\r\n}\r\n.fa-hand-holding-heart:before {\r\n  content: '\\f4be';\r\n}\r\n.fa-puzzle-piece:before {\r\n  content: '\\f12e';\r\n}\r\n.fa-money-check:before {\r\n  content: '\\f53c';\r\n}\r\n.fa-star-half-alt:before,\r\n.fa-star-half-stroke:before {\r\n  content: '\\f5c0';\r\n}\r\n.fa-code:before {\r\n  content: '\\f121';\r\n}\r\n.fa-glass-whiskey:before,\r\n.fa-whiskey-glass:before {\r\n  content: '\\f7a0';\r\n}\r\n.fa-building-circle-exclamation:before {\r\n  content: '\\e4d3';\r\n}\r\n.fa-magnifying-glass-chart:before {\r\n  content: '\\e522';\r\n}\r\n.fa-arrow-up-right-from-square:before,\r\n.fa-external-link:before {\r\n  content: '\\f08e';\r\n}\r\n.fa-cubes-stacked:before {\r\n  content: '\\e4e6';\r\n}\r\n.fa-krw:before,\r\n.fa-won-sign:before,\r\n.fa-won:before {\r\n  content: '\\f159';\r\n}\r\n.fa-virus-covid:before {\r\n  content: '\\e4a8';\r\n}\r\n.fa-austral-sign:before {\r\n  content: '\\e0a9';\r\n}\r\n.fa-f:before {\r\n  content: '\\46';\r\n}\r\n.fa-leaf:before {\r\n  content: '\\f06c';\r\n}\r\n.fa-road:before {\r\n  content: '\\f018';\r\n}\r\n.fa-cab:before,\r\n.fa-taxi:before {\r\n  content: '\\f1ba';\r\n}\r\n.fa-person-circle-plus:before {\r\n  content: '\\e541';\r\n}\r\n.fa-chart-pie:before,\r\n.fa-pie-chart:before {\r\n  content: '\\f200';\r\n}\r\n.fa-bolt-lightning:before {\r\n  content: '\\e0b7';\r\n}\r\n.fa-sack-xmark:before {\r\n  content: '\\e56a';\r\n}\r\n.fa-file-excel:before {\r\n  content: '\\f1c3';\r\n}\r\n.fa-file-contract:before {\r\n  content: '\\f56c';\r\n}\r\n.fa-fish-fins:before {\r\n  content: '\\e4f2';\r\n}\r\n.fa-building-flag:before {\r\n  content: '\\e4d5';\r\n}\r\n.fa-face-grin-beam:before,\r\n.fa-grin-beam:before {\r\n  content: '\\f582';\r\n}\r\n.fa-object-ungroup:before {\r\n  content: '\\f248';\r\n}\r\n.fa-poop:before {\r\n  content: '\\f619';\r\n}\r\n.fa-location-pin:before,\r\n.fa-map-marker:before {\r\n  content: '\\f041';\r\n}\r\n.fa-kaaba:before {\r\n  content: '\\f66b';\r\n}\r\n.fa-toilet-paper:before {\r\n  content: '\\f71e';\r\n}\r\n.fa-hard-hat:before,\r\n.fa-hat-hard:before,\r\n.fa-helmet-safety:before {\r\n  content: '\\f807';\r\n}\r\n.fa-eject:before {\r\n  content: '\\f052';\r\n}\r\n.fa-arrow-alt-circle-right:before,\r\n.fa-circle-right:before {\r\n  content: '\\f35a';\r\n}\r\n.fa-plane-circle-check:before {\r\n  content: '\\e555';\r\n}\r\n.fa-face-rolling-eyes:before,\r\n.fa-meh-rolling-eyes:before {\r\n  content: '\\f5a5';\r\n}\r\n.fa-object-group:before {\r\n  content: '\\f247';\r\n}\r\n.fa-chart-line:before,\r\n.fa-line-chart:before {\r\n  content: '\\f201';\r\n}\r\n.fa-mask-ventilator:before {\r\n  content: '\\e524';\r\n}\r\n.fa-arrow-right:before {\r\n  content: '\\f061';\r\n}\r\n.fa-map-signs:before,\r\n.fa-signs-post:before {\r\n  content: '\\f277';\r\n}\r\n.fa-cash-register:before {\r\n  content: '\\f788';\r\n}\r\n.fa-person-circle-question:before {\r\n  content: '\\e542';\r\n}\r\n.fa-h:before {\r\n  content: '\\48';\r\n}\r\n.fa-tarp:before {\r\n  content: '\\e57b';\r\n}\r\n.fa-screwdriver-wrench:before,\r\n.fa-tools:before {\r\n  content: '\\f7d9';\r\n}\r\n.fa-arrows-to-eye:before {\r\n  content: '\\e4bf';\r\n}\r\n.fa-plug-circle-bolt:before {\r\n  content: '\\e55b';\r\n}\r\n.fa-heart:before {\r\n  content: '\\f004';\r\n}\r\n.fa-mars-and-venus:before {\r\n  content: '\\f224';\r\n}\r\n.fa-home-user:before,\r\n.fa-house-user:before {\r\n  content: '\\e1b0';\r\n}\r\n.fa-dumpster-fire:before {\r\n  content: '\\f794';\r\n}\r\n.fa-house-crack:before {\r\n  content: '\\e3b1';\r\n}\r\n.fa-cocktail:before,\r\n.fa-martini-glass-citrus:before {\r\n  content: '\\f561';\r\n}\r\n.fa-face-surprise:before,\r\n.fa-surprise:before {\r\n  content: '\\f5c2';\r\n}\r\n.fa-bottle-water:before {\r\n  content: '\\e4c5';\r\n}\r\n.fa-circle-pause:before,\r\n.fa-pause-circle:before {\r\n  content: '\\f28b';\r\n}\r\n.fa-toilet-paper-slash:before {\r\n  content: '\\e072';\r\n}\r\n.fa-apple-alt:before,\r\n.fa-apple-whole:before {\r\n  content: '\\f5d1';\r\n}\r\n.fa-kitchen-set:before {\r\n  content: '\\e51a';\r\n}\r\n.fa-r:before {\r\n  content: '\\52';\r\n}\r\n.fa-temperature-1:before,\r\n.fa-temperature-quarter:before,\r\n.fa-thermometer-1:before,\r\n.fa-thermometer-quarter:before {\r\n  content: '\\f2ca';\r\n}\r\n.fa-cube:before {\r\n  content: '\\f1b2';\r\n}\r\n.fa-bitcoin-sign:before {\r\n  content: '\\e0b4';\r\n}\r\n.fa-shield-dog:before {\r\n  content: '\\e573';\r\n}\r\n.fa-solar-panel:before {\r\n  content: '\\f5ba';\r\n}\r\n.fa-lock-open:before {\r\n  content: '\\f3c1';\r\n}\r\n.fa-elevator:before {\r\n  content: '\\e16d';\r\n}\r\n.fa-money-bill-transfer:before {\r\n  content: '\\e528';\r\n}\r\n.fa-money-bill-trend-up:before {\r\n  content: '\\e529';\r\n}\r\n.fa-house-flood-water-circle-arrow-right:before {\r\n  content: '\\e50f';\r\n}\r\n.fa-poll-h:before,\r\n.fa-square-poll-horizontal:before {\r\n  content: '\\f682';\r\n}\r\n.fa-circle:before {\r\n  content: '\\f111';\r\n}\r\n.fa-backward-fast:before,\r\n.fa-fast-backward:before {\r\n  content: '\\f049';\r\n}\r\n.fa-recycle:before {\r\n  content: '\\f1b8';\r\n}\r\n.fa-user-astronaut:before {\r\n  content: '\\f4fb';\r\n}\r\n.fa-plane-slash:before {\r\n  content: '\\e069';\r\n}\r\n.fa-trademark:before {\r\n  content: '\\f25c';\r\n}\r\n.fa-basketball-ball:before,\r\n.fa-basketball:before {\r\n  content: '\\f434';\r\n}\r\n.fa-satellite-dish:before {\r\n  content: '\\f7c0';\r\n}\r\n.fa-arrow-alt-circle-up:before,\r\n.fa-circle-up:before {\r\n  content: '\\f35b';\r\n}\r\n.fa-mobile-alt:before,\r\n.fa-mobile-screen-button:before {\r\n  content: '\\f3cd';\r\n}\r\n.fa-volume-high:before,\r\n.fa-volume-up:before {\r\n  content: '\\f028';\r\n}\r\n.fa-users-rays:before {\r\n  content: '\\e593';\r\n}\r\n.fa-wallet:before {\r\n  content: '\\f555';\r\n}\r\n.fa-clipboard-check:before {\r\n  content: '\\f46c';\r\n}\r\n.fa-file-audio:before {\r\n  content: '\\f1c7';\r\n}\r\n.fa-burger:before,\r\n.fa-hamburger:before {\r\n  content: '\\f805';\r\n}\r\n.fa-wrench:before {\r\n  content: '\\f0ad';\r\n}\r\n.fa-bugs:before {\r\n  content: '\\e4d0';\r\n}\r\n.fa-rupee-sign:before,\r\n.fa-rupee:before {\r\n  content: '\\f156';\r\n}\r\n.fa-file-image:before {\r\n  content: '\\f1c5';\r\n}\r\n.fa-circle-question:before,\r\n.fa-question-circle:before {\r\n  content: '\\f059';\r\n}\r\n.fa-plane-departure:before {\r\n  content: '\\f5b0';\r\n}\r\n.fa-handshake-slash:before {\r\n  content: '\\e060';\r\n}\r\n.fa-book-bookmark:before {\r\n  content: '\\e0bb';\r\n}\r\n.fa-code-branch:before {\r\n  content: '\\f126';\r\n}\r\n.fa-hat-cowboy:before {\r\n  content: '\\f8c0';\r\n}\r\n.fa-bridge:before {\r\n  content: '\\e4c8';\r\n}\r\n.fa-phone-alt:before,\r\n.fa-phone-flip:before {\r\n  content: '\\f879';\r\n}\r\n.fa-truck-front:before {\r\n  content: '\\e2b7';\r\n}\r\n.fa-cat:before {\r\n  content: '\\f6be';\r\n}\r\n.fa-anchor-circle-exclamation:before {\r\n  content: '\\e4ab';\r\n}\r\n.fa-truck-field:before {\r\n  content: '\\e58d';\r\n}\r\n.fa-route:before {\r\n  content: '\\f4d7';\r\n}\r\n.fa-clipboard-question:before {\r\n  content: '\\e4e3';\r\n}\r\n.fa-panorama:before {\r\n  content: '\\e209';\r\n}\r\n.fa-comment-medical:before {\r\n  content: '\\f7f5';\r\n}\r\n.fa-teeth-open:before {\r\n  content: '\\f62f';\r\n}\r\n.fa-file-circle-minus:before {\r\n  content: '\\e4ed';\r\n}\r\n.fa-tags:before {\r\n  content: '\\f02c';\r\n}\r\n.fa-wine-glass:before {\r\n  content: '\\f4e3';\r\n}\r\n.fa-fast-forward:before,\r\n.fa-forward-fast:before {\r\n  content: '\\f050';\r\n}\r\n.fa-face-meh-blank:before,\r\n.fa-meh-blank:before {\r\n  content: '\\f5a4';\r\n}\r\n.fa-parking:before,\r\n.fa-square-parking:before {\r\n  content: '\\f540';\r\n}\r\n.fa-house-signal:before {\r\n  content: '\\e012';\r\n}\r\n.fa-bars-progress:before,\r\n.fa-tasks-alt:before {\r\n  content: '\\f828';\r\n}\r\n.fa-faucet-drip:before {\r\n  content: '\\e006';\r\n}\r\n.fa-cart-flatbed:before,\r\n.fa-dolly-flatbed:before {\r\n  content: '\\f474';\r\n}\r\n.fa-ban-smoking:before,\r\n.fa-smoking-ban:before {\r\n  content: '\\f54d';\r\n}\r\n.fa-terminal:before {\r\n  content: '\\f120';\r\n}\r\n.fa-mobile-button:before {\r\n  content: '\\f10b';\r\n}\r\n.fa-house-medical-flag:before {\r\n  content: '\\e514';\r\n}\r\n.fa-basket-shopping:before,\r\n.fa-shopping-basket:before {\r\n  content: '\\f291';\r\n}\r\n.fa-tape:before {\r\n  content: '\\f4db';\r\n}\r\n.fa-bus-alt:before,\r\n.fa-bus-simple:before {\r\n  content: '\\f55e';\r\n}\r\n.fa-eye:before {\r\n  content: '\\f06e';\r\n}\r\n.fa-face-sad-cry:before,\r\n.fa-sad-cry:before {\r\n  content: '\\f5b3';\r\n}\r\n.fa-audio-description:before {\r\n  content: '\\f29e';\r\n}\r\n.fa-person-military-to-person:before {\r\n  content: '\\e54c';\r\n}\r\n.fa-file-shield:before {\r\n  content: '\\e4f0';\r\n}\r\n.fa-user-slash:before {\r\n  content: '\\f506';\r\n}\r\n.fa-pen:before {\r\n  content: '\\f304';\r\n}\r\n.fa-tower-observation:before {\r\n  content: '\\e586';\r\n}\r\n.fa-file-code:before {\r\n  content: '\\f1c9';\r\n}\r\n.fa-signal-5:before,\r\n.fa-signal-perfect:before,\r\n.fa-signal:before {\r\n  content: '\\f012';\r\n}\r\n.fa-bus:before {\r\n  content: '\\f207';\r\n}\r\n.fa-heart-circle-xmark:before {\r\n  content: '\\e501';\r\n}\r\n.fa-home-lg:before,\r\n.fa-house-chimney:before {\r\n  content: '\\e3af';\r\n}\r\n.fa-window-maximize:before {\r\n  content: '\\f2d0';\r\n}\r\n.fa-face-frown:before,\r\n.fa-frown:before {\r\n  content: '\\f119';\r\n}\r\n.fa-prescription:before {\r\n  content: '\\f5b1';\r\n}\r\n.fa-shop:before,\r\n.fa-store-alt:before {\r\n  content: '\\f54f';\r\n}\r\n.fa-floppy-disk:before,\r\n.fa-save:before {\r\n  content: '\\f0c7';\r\n}\r\n.fa-vihara:before {\r\n  content: '\\f6a7';\r\n}\r\n.fa-balance-scale-left:before,\r\n.fa-scale-unbalanced:before {\r\n  content: '\\f515';\r\n}\r\n.fa-sort-asc:before,\r\n.fa-sort-up:before {\r\n  content: '\\f0de';\r\n}\r\n.fa-comment-dots:before,\r\n.fa-commenting:before {\r\n  content: '\\f4ad';\r\n}\r\n.fa-plant-wilt:before {\r\n  content: '\\e5aa';\r\n}\r\n.fa-diamond:before {\r\n  content: '\\f219';\r\n}\r\n.fa-face-grin-squint:before,\r\n.fa-grin-squint:before {\r\n  content: '\\f585';\r\n}\r\n.fa-hand-holding-dollar:before,\r\n.fa-hand-holding-usd:before {\r\n  content: '\\f4c0';\r\n}\r\n.fa-bacterium:before {\r\n  content: '\\e05a';\r\n}\r\n.fa-hand-pointer:before {\r\n  content: '\\f25a';\r\n}\r\n.fa-drum-steelpan:before {\r\n  content: '\\f56a';\r\n}\r\n.fa-hand-scissors:before {\r\n  content: '\\f257';\r\n}\r\n.fa-hands-praying:before,\r\n.fa-praying-hands:before {\r\n  content: '\\f684';\r\n}\r\n.fa-arrow-right-rotate:before,\r\n.fa-arrow-rotate-forward:before,\r\n.fa-arrow-rotate-right:before,\r\n.fa-redo:before {\r\n  content: '\\f01e';\r\n}\r\n.fa-biohazard:before {\r\n  content: '\\f780';\r\n}\r\n.fa-location-crosshairs:before,\r\n.fa-location:before {\r\n  content: '\\f601';\r\n}\r\n.fa-mars-double:before {\r\n  content: '\\f227';\r\n}\r\n.fa-child-dress:before {\r\n  content: '\\e59c';\r\n}\r\n.fa-users-between-lines:before {\r\n  content: '\\e591';\r\n}\r\n.fa-lungs-virus:before {\r\n  content: '\\e067';\r\n}\r\n.fa-face-grin-tears:before,\r\n.fa-grin-tears:before {\r\n  content: '\\f588';\r\n}\r\n.fa-phone:before {\r\n  content: '\\f095';\r\n}\r\n.fa-calendar-times:before,\r\n.fa-calendar-xmark:before {\r\n  content: '\\f273';\r\n}\r\n.fa-child-reaching:before {\r\n  content: '\\e59d';\r\n}\r\n.fa-head-side-virus:before {\r\n  content: '\\e064';\r\n}\r\n.fa-user-cog:before,\r\n.fa-user-gear:before {\r\n  content: '\\f4fe';\r\n}\r\n.fa-arrow-up-1-9:before,\r\n.fa-sort-numeric-up:before {\r\n  content: '\\f163';\r\n}\r\n.fa-door-closed:before {\r\n  content: '\\f52a';\r\n}\r\n.fa-shield-virus:before {\r\n  content: '\\e06c';\r\n}\r\n.fa-dice-six:before {\r\n  content: '\\f526';\r\n}\r\n.fa-mosquito-net:before {\r\n  content: '\\e52c';\r\n}\r\n.fa-bridge-water:before {\r\n  content: '\\e4ce';\r\n}\r\n.fa-person-booth:before {\r\n  content: '\\f756';\r\n}\r\n.fa-text-width:before {\r\n  content: '\\f035';\r\n}\r\n.fa-hat-wizard:before {\r\n  content: '\\f6e8';\r\n}\r\n.fa-pen-fancy:before {\r\n  content: '\\f5ac';\r\n}\r\n.fa-digging:before,\r\n.fa-person-digging:before {\r\n  content: '\\f85e';\r\n}\r\n.fa-trash:before {\r\n  content: '\\f1f8';\r\n}\r\n.fa-gauge-simple-med:before,\r\n.fa-gauge-simple:before,\r\n.fa-tachometer-average:before {\r\n  content: '\\f629';\r\n}\r\n.fa-book-medical:before {\r\n  content: '\\f7e6';\r\n}\r\n.fa-poo:before {\r\n  content: '\\f2fe';\r\n}\r\n.fa-quote-right-alt:before,\r\n.fa-quote-right:before {\r\n  content: '\\f10e';\r\n}\r\n.fa-shirt:before,\r\n.fa-t-shirt:before,\r\n.fa-tshirt:before {\r\n  content: '\\f553';\r\n}\r\n.fa-cubes:before {\r\n  content: '\\f1b3';\r\n}\r\n.fa-divide:before {\r\n  content: '\\f529';\r\n}\r\n.fa-tenge-sign:before,\r\n.fa-tenge:before {\r\n  content: '\\f7d7';\r\n}\r\n.fa-headphones:before {\r\n  content: '\\f025';\r\n}\r\n.fa-hands-holding:before {\r\n  content: '\\f4c2';\r\n}\r\n.fa-hands-clapping:before {\r\n  content: '\\e1a8';\r\n}\r\n.fa-republican:before {\r\n  content: '\\f75e';\r\n}\r\n.fa-arrow-left:before {\r\n  content: '\\f060';\r\n}\r\n.fa-person-circle-xmark:before {\r\n  content: '\\e543';\r\n}\r\n.fa-ruler:before {\r\n  content: '\\f545';\r\n}\r\n.fa-align-left:before {\r\n  content: '\\f036';\r\n}\r\n.fa-dice-d6:before {\r\n  content: '\\f6d1';\r\n}\r\n.fa-restroom:before {\r\n  content: '\\f7bd';\r\n}\r\n.fa-j:before {\r\n  content: '\\4a';\r\n}\r\n.fa-users-viewfinder:before {\r\n  content: '\\e595';\r\n}\r\n.fa-file-video:before {\r\n  content: '\\f1c8';\r\n}\r\n.fa-external-link-alt:before,\r\n.fa-up-right-from-square:before {\r\n  content: '\\f35d';\r\n}\r\n.fa-table-cells:before,\r\n.fa-th:before {\r\n  content: '\\f00a';\r\n}\r\n.fa-file-pdf:before {\r\n  content: '\\f1c1';\r\n}\r\n.fa-bible:before,\r\n.fa-book-bible:before {\r\n  content: '\\f647';\r\n}\r\n.fa-o:before {\r\n  content: '\\4f';\r\n}\r\n.fa-medkit:before,\r\n.fa-suitcase-medical:before {\r\n  content: '\\f0fa';\r\n}\r\n.fa-user-secret:before {\r\n  content: '\\f21b';\r\n}\r\n.fa-otter:before {\r\n  content: '\\f700';\r\n}\r\n.fa-female:before,\r\n.fa-person-dress:before {\r\n  content: '\\f182';\r\n}\r\n.fa-comment-dollar:before {\r\n  content: '\\f651';\r\n}\r\n.fa-briefcase-clock:before,\r\n.fa-business-time:before {\r\n  content: '\\f64a';\r\n}\r\n.fa-table-cells-large:before,\r\n.fa-th-large:before {\r\n  content: '\\f009';\r\n}\r\n.fa-book-tanakh:before,\r\n.fa-tanakh:before {\r\n  content: '\\f827';\r\n}\r\n.fa-phone-volume:before,\r\n.fa-volume-control-phone:before {\r\n  content: '\\f2a0';\r\n}\r\n.fa-hat-cowboy-side:before {\r\n  content: '\\f8c1';\r\n}\r\n.fa-clipboard-user:before {\r\n  content: '\\f7f3';\r\n}\r\n.fa-child:before {\r\n  content: '\\f1ae';\r\n}\r\n.fa-lira-sign:before {\r\n  content: '\\f195';\r\n}\r\n.fa-satellite:before {\r\n  content: '\\f7bf';\r\n}\r\n.fa-plane-lock:before {\r\n  content: '\\e558';\r\n}\r\n.fa-tag:before {\r\n  content: '\\f02b';\r\n}\r\n.fa-comment:before {\r\n  content: '\\f075';\r\n}\r\n.fa-birthday-cake:before,\r\n.fa-cake-candles:before,\r\n.fa-cake:before {\r\n  content: '\\f1fd';\r\n}\r\n.fa-envelope:before {\r\n  content: '\\f0e0';\r\n}\r\n.fa-angle-double-up:before,\r\n.fa-angles-up:before {\r\n  content: '\\f102';\r\n}\r\n.fa-paperclip:before {\r\n  content: '\\f0c6';\r\n}\r\n.fa-arrow-right-to-city:before {\r\n  content: '\\e4b3';\r\n}\r\n.fa-ribbon:before {\r\n  content: '\\f4d6';\r\n}\r\n.fa-lungs:before {\r\n  content: '\\f604';\r\n}\r\n.fa-arrow-up-9-1:before,\r\n.fa-sort-numeric-up-alt:before {\r\n  content: '\\f887';\r\n}\r\n.fa-litecoin-sign:before {\r\n  content: '\\e1d3';\r\n}\r\n.fa-border-none:before {\r\n  content: '\\f850';\r\n}\r\n.fa-circle-nodes:before {\r\n  content: '\\e4e2';\r\n}\r\n.fa-parachute-box:before {\r\n  content: '\\f4cd';\r\n}\r\n.fa-indent:before {\r\n  content: '\\f03c';\r\n}\r\n.fa-truck-field-un:before {\r\n  content: '\\e58e';\r\n}\r\n.fa-hourglass-empty:before,\r\n.fa-hourglass:before {\r\n  content: '\\f254';\r\n}\r\n.fa-mountain:before {\r\n  content: '\\f6fc';\r\n}\r\n.fa-user-doctor:before,\r\n.fa-user-md:before {\r\n  content: '\\f0f0';\r\n}\r\n.fa-circle-info:before,\r\n.fa-info-circle:before {\r\n  content: '\\f05a';\r\n}\r\n.fa-cloud-meatball:before {\r\n  content: '\\f73b';\r\n}\r\n.fa-camera-alt:before,\r\n.fa-camera:before {\r\n  content: '\\f030';\r\n}\r\n.fa-square-virus:before {\r\n  content: '\\e578';\r\n}\r\n.fa-meteor:before {\r\n  content: '\\f753';\r\n}\r\n.fa-car-on:before {\r\n  content: '\\e4dd';\r\n}\r\n.fa-sleigh:before {\r\n  content: '\\f7cc';\r\n}\r\n.fa-arrow-down-1-9:before,\r\n.fa-sort-numeric-asc:before,\r\n.fa-sort-numeric-down:before {\r\n  content: '\\f162';\r\n}\r\n.fa-hand-holding-droplet:before,\r\n.fa-hand-holding-water:before {\r\n  content: '\\f4c1';\r\n}\r\n.fa-water:before {\r\n  content: '\\f773';\r\n}\r\n.fa-calendar-check:before {\r\n  content: '\\f274';\r\n}\r\n.fa-braille:before {\r\n  content: '\\f2a1';\r\n}\r\n.fa-prescription-bottle-alt:before,\r\n.fa-prescription-bottle-medical:before {\r\n  content: '\\f486';\r\n}\r\n.fa-landmark:before {\r\n  content: '\\f66f';\r\n}\r\n.fa-truck:before {\r\n  content: '\\f0d1';\r\n}\r\n.fa-crosshairs:before {\r\n  content: '\\f05b';\r\n}\r\n.fa-person-cane:before {\r\n  content: '\\e53c';\r\n}\r\n.fa-tent:before {\r\n  content: '\\e57d';\r\n}\r\n.fa-vest-patches:before {\r\n  content: '\\e086';\r\n}\r\n.fa-check-double:before {\r\n  content: '\\f560';\r\n}\r\n.fa-arrow-down-a-z:before,\r\n.fa-sort-alpha-asc:before,\r\n.fa-sort-alpha-down:before {\r\n  content: '\\f15d';\r\n}\r\n.fa-money-bill-wheat:before {\r\n  content: '\\e52a';\r\n}\r\n.fa-cookie:before {\r\n  content: '\\f563';\r\n}\r\n.fa-arrow-left-rotate:before,\r\n.fa-arrow-rotate-back:before,\r\n.fa-arrow-rotate-backward:before,\r\n.fa-arrow-rotate-left:before,\r\n.fa-undo:before {\r\n  content: '\\f0e2';\r\n}\r\n.fa-hard-drive:before,\r\n.fa-hdd:before {\r\n  content: '\\f0a0';\r\n}\r\n.fa-face-grin-squint-tears:before,\r\n.fa-grin-squint-tears:before {\r\n  content: '\\f586';\r\n}\r\n.fa-dumbbell:before {\r\n  content: '\\f44b';\r\n}\r\n.fa-list-alt:before,\r\n.fa-rectangle-list:before {\r\n  content: '\\f022';\r\n}\r\n.fa-tarp-droplet:before {\r\n  content: '\\e57c';\r\n}\r\n.fa-house-medical-circle-check:before {\r\n  content: '\\e511';\r\n}\r\n.fa-person-skiing-nordic:before,\r\n.fa-skiing-nordic:before {\r\n  content: '\\f7ca';\r\n}\r\n.fa-calendar-plus:before {\r\n  content: '\\f271';\r\n}\r\n.fa-plane-arrival:before {\r\n  content: '\\f5af';\r\n}\r\n.fa-arrow-alt-circle-left:before,\r\n.fa-circle-left:before {\r\n  content: '\\f359';\r\n}\r\n.fa-subway:before,\r\n.fa-train-subway:before {\r\n  content: '\\f239';\r\n}\r\n.fa-chart-gantt:before {\r\n  content: '\\e0e4';\r\n}\r\n.fa-indian-rupee-sign:before,\r\n.fa-indian-rupee:before,\r\n.fa-inr:before {\r\n  content: '\\e1bc';\r\n}\r\n.fa-crop-alt:before,\r\n.fa-crop-simple:before {\r\n  content: '\\f565';\r\n}\r\n.fa-money-bill-1:before,\r\n.fa-money-bill-alt:before {\r\n  content: '\\f3d1';\r\n}\r\n.fa-left-long:before,\r\n.fa-long-arrow-alt-left:before {\r\n  content: '\\f30a';\r\n}\r\n.fa-dna:before {\r\n  content: '\\f471';\r\n}\r\n.fa-virus-slash:before {\r\n  content: '\\e075';\r\n}\r\n.fa-minus:before,\r\n.fa-subtract:before {\r\n  content: '\\f068';\r\n}\r\n.fa-chess:before {\r\n  content: '\\f439';\r\n}\r\n.fa-arrow-left-long:before,\r\n.fa-long-arrow-left:before {\r\n  content: '\\f177';\r\n}\r\n.fa-plug-circle-check:before {\r\n  content: '\\e55c';\r\n}\r\n.fa-street-view:before {\r\n  content: '\\f21d';\r\n}\r\n.fa-franc-sign:before {\r\n  content: '\\e18f';\r\n}\r\n.fa-volume-off:before {\r\n  content: '\\f026';\r\n}\r\n.fa-american-sign-language-interpreting:before,\r\n.fa-asl-interpreting:before,\r\n.fa-hands-american-sign-language-interpreting:before,\r\n.fa-hands-asl-interpreting:before {\r\n  content: '\\f2a3';\r\n}\r\n.fa-cog:before,\r\n.fa-gear:before {\r\n  content: '\\f013';\r\n}\r\n.fa-droplet-slash:before,\r\n.fa-tint-slash:before {\r\n  content: '\\f5c7';\r\n}\r\n.fa-mosque:before {\r\n  content: '\\f678';\r\n}\r\n.fa-mosquito:before {\r\n  content: '\\e52b';\r\n}\r\n.fa-star-of-david:before {\r\n  content: '\\f69a';\r\n}\r\n.fa-person-military-rifle:before {\r\n  content: '\\e54b';\r\n}\r\n.fa-cart-shopping:before,\r\n.fa-shopping-cart:before {\r\n  content: '\\f07a';\r\n}\r\n.fa-vials:before {\r\n  content: '\\f493';\r\n}\r\n.fa-plug-circle-plus:before {\r\n  content: '\\e55f';\r\n}\r\n.fa-place-of-worship:before {\r\n  content: '\\f67f';\r\n}\r\n.fa-grip-vertical:before {\r\n  content: '\\f58e';\r\n}\r\n.fa-arrow-turn-up:before,\r\n.fa-level-up:before {\r\n  content: '\\f148';\r\n}\r\n.fa-u:before {\r\n  content: '\\55';\r\n}\r\n.fa-square-root-alt:before,\r\n.fa-square-root-variable:before {\r\n  content: '\\f698';\r\n}\r\n.fa-clock-four:before,\r\n.fa-clock:before {\r\n  content: '\\f017';\r\n}\r\n.fa-backward-step:before,\r\n.fa-step-backward:before {\r\n  content: '\\f048';\r\n}\r\n.fa-pallet:before {\r\n  content: '\\f482';\r\n}\r\n.fa-faucet:before {\r\n  content: '\\e005';\r\n}\r\n.fa-baseball-bat-ball:before {\r\n  content: '\\f432';\r\n}\r\n.fa-s:before {\r\n  content: '\\53';\r\n}\r\n.fa-timeline:before {\r\n  content: '\\e29c';\r\n}\r\n.fa-keyboard:before {\r\n  content: '\\f11c';\r\n}\r\n.fa-caret-down:before {\r\n  content: '\\f0d7';\r\n}\r\n.fa-clinic-medical:before,\r\n.fa-house-chimney-medical:before {\r\n  content: '\\f7f2';\r\n}\r\n.fa-temperature-3:before,\r\n.fa-temperature-three-quarters:before,\r\n.fa-thermometer-3:before,\r\n.fa-thermometer-three-quarters:before {\r\n  content: '\\f2c8';\r\n}\r\n.fa-mobile-android-alt:before,\r\n.fa-mobile-screen:before {\r\n  content: '\\f3cf';\r\n}\r\n.fa-plane-up:before {\r\n  content: '\\e22d';\r\n}\r\n.fa-piggy-bank:before {\r\n  content: '\\f4d3';\r\n}\r\n.fa-battery-3:before,\r\n.fa-battery-half:before {\r\n  content: '\\f242';\r\n}\r\n.fa-mountain-city:before {\r\n  content: '\\e52e';\r\n}\r\n.fa-coins:before {\r\n  content: '\\f51e';\r\n}\r\n.fa-khanda:before {\r\n  content: '\\f66d';\r\n}\r\n.fa-sliders-h:before,\r\n.fa-sliders:before {\r\n  content: '\\f1de';\r\n}\r\n.fa-folder-tree:before {\r\n  content: '\\f802';\r\n}\r\n.fa-network-wired:before {\r\n  content: '\\f6ff';\r\n}\r\n.fa-map-pin:before {\r\n  content: '\\f276';\r\n}\r\n.fa-hamsa:before {\r\n  content: '\\f665';\r\n}\r\n.fa-cent-sign:before {\r\n  content: '\\e3f5';\r\n}\r\n.fa-flask:before {\r\n  content: '\\f0c3';\r\n}\r\n.fa-person-pregnant:before {\r\n  content: '\\e31e';\r\n}\r\n.fa-wand-sparkles:before {\r\n  content: '\\f72b';\r\n}\r\n.fa-ellipsis-v:before,\r\n.fa-ellipsis-vertical:before {\r\n  content: '\\f142';\r\n}\r\n.fa-ticket:before {\r\n  content: '\\f145';\r\n}\r\n.fa-power-off:before {\r\n  content: '\\f011';\r\n}\r\n.fa-long-arrow-alt-right:before,\r\n.fa-right-long:before {\r\n  content: '\\f30b';\r\n}\r\n.fa-flag-usa:before {\r\n  content: '\\f74d';\r\n}\r\n.fa-laptop-file:before {\r\n  content: '\\e51d';\r\n}\r\n.fa-teletype:before,\r\n.fa-tty:before {\r\n  content: '\\f1e4';\r\n}\r\n.fa-diagram-next:before {\r\n  content: '\\e476';\r\n}\r\n.fa-person-rifle:before {\r\n  content: '\\e54e';\r\n}\r\n.fa-house-medical-circle-exclamation:before {\r\n  content: '\\e512';\r\n}\r\n.fa-closed-captioning:before {\r\n  content: '\\f20a';\r\n}\r\n.fa-hiking:before,\r\n.fa-person-hiking:before {\r\n  content: '\\f6ec';\r\n}\r\n.fa-venus-double:before {\r\n  content: '\\f226';\r\n}\r\n.fa-images:before {\r\n  content: '\\f302';\r\n}\r\n.fa-calculator:before {\r\n  content: '\\f1ec';\r\n}\r\n.fa-people-pulling:before {\r\n  content: '\\e535';\r\n}\r\n.fa-n:before {\r\n  content: '\\4e';\r\n}\r\n.fa-cable-car:before,\r\n.fa-tram:before {\r\n  content: '\\f7da';\r\n}\r\n.fa-cloud-rain:before {\r\n  content: '\\f73d';\r\n}\r\n.fa-building-circle-xmark:before {\r\n  content: '\\e4d4';\r\n}\r\n.fa-ship:before {\r\n  content: '\\f21a';\r\n}\r\n.fa-arrows-down-to-line:before {\r\n  content: '\\e4b8';\r\n}\r\n.fa-download:before {\r\n  content: '\\f019';\r\n}\r\n.fa-face-grin:before,\r\n.fa-grin:before {\r\n  content: '\\f580';\r\n}\r\n.fa-backspace:before,\r\n.fa-delete-left:before {\r\n  content: '\\f55a';\r\n}\r\n.fa-eye-dropper-empty:before,\r\n.fa-eye-dropper:before,\r\n.fa-eyedropper:before {\r\n  content: '\\f1fb';\r\n}\r\n.fa-file-circle-check:before {\r\n  content: '\\e5a0';\r\n}\r\n.fa-forward:before {\r\n  content: '\\f04e';\r\n}\r\n.fa-mobile-android:before,\r\n.fa-mobile-phone:before,\r\n.fa-mobile:before {\r\n  content: '\\f3ce';\r\n}\r\n.fa-face-meh:before,\r\n.fa-meh:before {\r\n  content: '\\f11a';\r\n}\r\n.fa-align-center:before {\r\n  content: '\\f037';\r\n}\r\n.fa-book-dead:before,\r\n.fa-book-skull:before {\r\n  content: '\\f6b7';\r\n}\r\n.fa-drivers-license:before,\r\n.fa-id-card:before {\r\n  content: '\\f2c2';\r\n}\r\n.fa-dedent:before,\r\n.fa-outdent:before {\r\n  content: '\\f03b';\r\n}\r\n.fa-heart-circle-exclamation:before {\r\n  content: '\\e4fe';\r\n}\r\n.fa-home-alt:before,\r\n.fa-home-lg-alt:before,\r\n.fa-home:before,\r\n.fa-house:before {\r\n  content: '\\f015';\r\n}\r\n.fa-calendar-week:before {\r\n  content: '\\f784';\r\n}\r\n.fa-laptop-medical:before {\r\n  content: '\\f812';\r\n}\r\n.fa-b:before {\r\n  content: '\\42';\r\n}\r\n.fa-file-medical:before {\r\n  content: '\\f477';\r\n}\r\n.fa-dice-one:before {\r\n  content: '\\f525';\r\n}\r\n.fa-kiwi-bird:before {\r\n  content: '\\f535';\r\n}\r\n.fa-arrow-right-arrow-left:before,\r\n.fa-exchange:before {\r\n  content: '\\f0ec';\r\n}\r\n.fa-redo-alt:before,\r\n.fa-rotate-forward:before,\r\n.fa-rotate-right:before {\r\n  content: '\\f2f9';\r\n}\r\n.fa-cutlery:before,\r\n.fa-utensils:before {\r\n  content: '\\f2e7';\r\n}\r\n.fa-arrow-up-wide-short:before,\r\n.fa-sort-amount-up:before {\r\n  content: '\\f161';\r\n}\r\n.fa-mill-sign:before {\r\n  content: '\\e1ed';\r\n}\r\n.fa-bowl-rice:before {\r\n  content: '\\e2eb';\r\n}\r\n.fa-skull:before {\r\n  content: '\\f54c';\r\n}\r\n.fa-broadcast-tower:before,\r\n.fa-tower-broadcast:before {\r\n  content: '\\f519';\r\n}\r\n.fa-truck-pickup:before {\r\n  content: '\\f63c';\r\n}\r\n.fa-long-arrow-alt-up:before,\r\n.fa-up-long:before {\r\n  content: '\\f30c';\r\n}\r\n.fa-stop:before {\r\n  content: '\\f04d';\r\n}\r\n.fa-code-merge:before {\r\n  content: '\\f387';\r\n}\r\n.fa-upload:before {\r\n  content: '\\f093';\r\n}\r\n.fa-hurricane:before {\r\n  content: '\\f751';\r\n}\r\n.fa-mound:before {\r\n  content: '\\e52d';\r\n}\r\n.fa-toilet-portable:before {\r\n  content: '\\e583';\r\n}\r\n.fa-compact-disc:before {\r\n  content: '\\f51f';\r\n}\r\n.fa-file-arrow-down:before,\r\n.fa-file-download:before {\r\n  content: '\\f56d';\r\n}\r\n.fa-caravan:before {\r\n  content: '\\f8ff';\r\n}\r\n.fa-shield-cat:before {\r\n  content: '\\e572';\r\n}\r\n.fa-bolt:before,\r\n.fa-zap:before {\r\n  content: '\\f0e7';\r\n}\r\n.fa-glass-water:before {\r\n  content: '\\e4f4';\r\n}\r\n.fa-oil-well:before {\r\n  content: '\\e532';\r\n}\r\n.fa-vault:before {\r\n  content: '\\e2c5';\r\n}\r\n.fa-mars:before {\r\n  content: '\\f222';\r\n}\r\n.fa-toilet:before {\r\n  content: '\\f7d8';\r\n}\r\n.fa-plane-circle-xmark:before {\r\n  content: '\\e557';\r\n}\r\n.fa-cny:before,\r\n.fa-jpy:before,\r\n.fa-rmb:before,\r\n.fa-yen-sign:before,\r\n.fa-yen:before {\r\n  content: '\\f157';\r\n}\r\n.fa-rouble:before,\r\n.fa-rub:before,\r\n.fa-ruble-sign:before,\r\n.fa-ruble:before {\r\n  content: '\\f158';\r\n}\r\n.fa-sun:before {\r\n  content: '\\f185';\r\n}\r\n.fa-guitar:before {\r\n  content: '\\f7a6';\r\n}\r\n.fa-face-laugh-wink:before,\r\n.fa-laugh-wink:before {\r\n  content: '\\f59c';\r\n}\r\n.fa-horse-head:before {\r\n  content: '\\f7ab';\r\n}\r\n.fa-bore-hole:before {\r\n  content: '\\e4c3';\r\n}\r\n.fa-industry:before {\r\n  content: '\\f275';\r\n}\r\n.fa-arrow-alt-circle-down:before,\r\n.fa-circle-down:before {\r\n  content: '\\f358';\r\n}\r\n.fa-arrows-turn-to-dots:before {\r\n  content: '\\e4c1';\r\n}\r\n.fa-florin-sign:before {\r\n  content: '\\e184';\r\n}\r\n.fa-arrow-down-short-wide:before,\r\n.fa-sort-amount-desc:before,\r\n.fa-sort-amount-down-alt:before {\r\n  content: '\\f884';\r\n}\r\n.fa-less-than:before {\r\n  content: '\\3c';\r\n}\r\n.fa-angle-down:before {\r\n  content: '\\f107';\r\n}\r\n.fa-car-tunnel:before {\r\n  content: '\\e4de';\r\n}\r\n.fa-head-side-cough:before {\r\n  content: '\\e061';\r\n}\r\n.fa-grip-lines:before {\r\n  content: '\\f7a4';\r\n}\r\n.fa-thumbs-down:before {\r\n  content: '\\f165';\r\n}\r\n.fa-user-lock:before {\r\n  content: '\\f502';\r\n}\r\n.fa-arrow-right-long:before,\r\n.fa-long-arrow-right:before {\r\n  content: '\\f178';\r\n}\r\n.fa-anchor-circle-xmark:before {\r\n  content: '\\e4ac';\r\n}\r\n.fa-ellipsis-h:before,\r\n.fa-ellipsis:before {\r\n  content: '\\f141';\r\n}\r\n.fa-chess-pawn:before {\r\n  content: '\\f443';\r\n}\r\n.fa-first-aid:before,\r\n.fa-kit-medical:before {\r\n  content: '\\f479';\r\n}\r\n.fa-person-through-window:before {\r\n  content: '\\e5a9';\r\n}\r\n.fa-toolbox:before {\r\n  content: '\\f552';\r\n}\r\n.fa-hands-holding-circle:before {\r\n  content: '\\e4fb';\r\n}\r\n.fa-bug:before {\r\n  content: '\\f188';\r\n}\r\n.fa-credit-card-alt:before,\r\n.fa-credit-card:before {\r\n  content: '\\f09d';\r\n}\r\n.fa-automobile:before,\r\n.fa-car:before {\r\n  content: '\\f1b9';\r\n}\r\n.fa-hand-holding-hand:before {\r\n  content: '\\e4f7';\r\n}\r\n.fa-book-open-reader:before,\r\n.fa-book-reader:before {\r\n  content: '\\f5da';\r\n}\r\n.fa-mountain-sun:before {\r\n  content: '\\e52f';\r\n}\r\n.fa-arrows-left-right-to-line:before {\r\n  content: '\\e4ba';\r\n}\r\n.fa-dice-d20:before {\r\n  content: '\\f6cf';\r\n}\r\n.fa-truck-droplet:before {\r\n  content: '\\e58c';\r\n}\r\n.fa-file-circle-xmark:before {\r\n  content: '\\e5a1';\r\n}\r\n.fa-temperature-arrow-up:before,\r\n.fa-temperature-up:before {\r\n  content: '\\e040';\r\n}\r\n.fa-medal:before {\r\n  content: '\\f5a2';\r\n}\r\n.fa-bed:before {\r\n  content: '\\f236';\r\n}\r\n.fa-h-square:before,\r\n.fa-square-h:before {\r\n  content: '\\f0fd';\r\n}\r\n.fa-podcast:before {\r\n  content: '\\f2ce';\r\n}\r\n.fa-temperature-4:before,\r\n.fa-temperature-full:before,\r\n.fa-thermometer-4:before,\r\n.fa-thermometer-full:before {\r\n  content: '\\f2c7';\r\n}\r\n.fa-bell:before {\r\n  content: '\\f0f3';\r\n}\r\n.fa-superscript:before {\r\n  content: '\\f12b';\r\n}\r\n.fa-plug-circle-xmark:before {\r\n  content: '\\e560';\r\n}\r\n.fa-star-of-life:before {\r\n  content: '\\f621';\r\n}\r\n.fa-phone-slash:before {\r\n  content: '\\f3dd';\r\n}\r\n.fa-paint-roller:before {\r\n  content: '\\f5aa';\r\n}\r\n.fa-hands-helping:before,\r\n.fa-handshake-angle:before {\r\n  content: '\\f4c4';\r\n}\r\n.fa-location-dot:before,\r\n.fa-map-marker-alt:before {\r\n  content: '\\f3c5';\r\n}\r\n.fa-file:before {\r\n  content: '\\f15b';\r\n}\r\n.fa-greater-than:before {\r\n  content: '\\3e';\r\n}\r\n.fa-person-swimming:before,\r\n.fa-swimmer:before {\r\n  content: '\\f5c4';\r\n}\r\n.fa-arrow-down:before {\r\n  content: '\\f063';\r\n}\r\n.fa-droplet:before,\r\n.fa-tint:before {\r\n  content: '\\f043';\r\n}\r\n.fa-eraser:before {\r\n  content: '\\f12d';\r\n}\r\n.fa-earth-america:before,\r\n.fa-earth-americas:before,\r\n.fa-earth:before,\r\n.fa-globe-americas:before {\r\n  content: '\\f57d';\r\n}\r\n.fa-person-burst:before {\r\n  content: '\\e53b';\r\n}\r\n.fa-dove:before {\r\n  content: '\\f4ba';\r\n}\r\n.fa-battery-0:before,\r\n.fa-battery-empty:before {\r\n  content: '\\f244';\r\n}\r\n.fa-socks:before {\r\n  content: '\\f696';\r\n}\r\n.fa-inbox:before {\r\n  content: '\\f01c';\r\n}\r\n.fa-section:before {\r\n  content: '\\e447';\r\n}\r\n.fa-gauge-high:before,\r\n.fa-tachometer-alt-fast:before,\r\n.fa-tachometer-alt:before {\r\n  content: '\\f625';\r\n}\r\n.fa-envelope-open-text:before {\r\n  content: '\\f658';\r\n}\r\n.fa-hospital-alt:before,\r\n.fa-hospital-wide:before,\r\n.fa-hospital:before {\r\n  content: '\\f0f8';\r\n}\r\n.fa-wine-bottle:before {\r\n  content: '\\f72f';\r\n}\r\n.fa-chess-rook:before {\r\n  content: '\\f447';\r\n}\r\n.fa-bars-staggered:before,\r\n.fa-reorder:before,\r\n.fa-stream:before {\r\n  content: '\\f550';\r\n}\r\n.fa-dharmachakra:before {\r\n  content: '\\f655';\r\n}\r\n.fa-hotdog:before {\r\n  content: '\\f80f';\r\n}\r\n.fa-blind:before,\r\n.fa-person-walking-with-cane:before {\r\n  content: '\\f29d';\r\n}\r\n.fa-drum:before {\r\n  content: '\\f569';\r\n}\r\n.fa-ice-cream:before {\r\n  content: '\\f810';\r\n}\r\n.fa-heart-circle-bolt:before {\r\n  content: '\\e4fc';\r\n}\r\n.fa-fax:before {\r\n  content: '\\f1ac';\r\n}\r\n.fa-paragraph:before {\r\n  content: '\\f1dd';\r\n}\r\n.fa-check-to-slot:before,\r\n.fa-vote-yea:before {\r\n  content: '\\f772';\r\n}\r\n.fa-star-half:before {\r\n  content: '\\f089';\r\n}\r\n.fa-boxes-alt:before,\r\n.fa-boxes-stacked:before,\r\n.fa-boxes:before {\r\n  content: '\\f468';\r\n}\r\n.fa-chain:before,\r\n.fa-link:before {\r\n  content: '\\f0c1';\r\n}\r\n.fa-assistive-listening-systems:before,\r\n.fa-ear-listen:before {\r\n  content: '\\f2a2';\r\n}\r\n.fa-tree-city:before {\r\n  content: '\\e587';\r\n}\r\n.fa-play:before {\r\n  content: '\\f04b';\r\n}\r\n.fa-font:before {\r\n  content: '\\f031';\r\n}\r\n.fa-rupiah-sign:before {\r\n  content: '\\e23d';\r\n}\r\n.fa-magnifying-glass:before,\r\n.fa-search:before {\r\n  content: '\\f002';\r\n}\r\n.fa-ping-pong-paddle-ball:before,\r\n.fa-table-tennis-paddle-ball:before,\r\n.fa-table-tennis:before {\r\n  content: '\\f45d';\r\n}\r\n.fa-diagnoses:before,\r\n.fa-person-dots-from-line:before {\r\n  content: '\\f470';\r\n}\r\n.fa-trash-can-arrow-up:before,\r\n.fa-trash-restore-alt:before {\r\n  content: '\\f82a';\r\n}\r\n.fa-naira-sign:before {\r\n  content: '\\e1f6';\r\n}\r\n.fa-cart-arrow-down:before {\r\n  content: '\\f218';\r\n}\r\n.fa-walkie-talkie:before {\r\n  content: '\\f8ef';\r\n}\r\n.fa-file-edit:before,\r\n.fa-file-pen:before {\r\n  content: '\\f31c';\r\n}\r\n.fa-receipt:before {\r\n  content: '\\f543';\r\n}\r\n.fa-pen-square:before,\r\n.fa-pencil-square:before,\r\n.fa-square-pen:before {\r\n  content: '\\f14b';\r\n}\r\n.fa-suitcase-rolling:before {\r\n  content: '\\f5c1';\r\n}\r\n.fa-person-circle-exclamation:before {\r\n  content: '\\e53f';\r\n}\r\n.fa-chevron-down:before {\r\n  content: '\\f078';\r\n}\r\n.fa-battery-5:before,\r\n.fa-battery-full:before,\r\n.fa-battery:before {\r\n  content: '\\f240';\r\n}\r\n.fa-skull-crossbones:before {\r\n  content: '\\f714';\r\n}\r\n.fa-code-compare:before {\r\n  content: '\\e13a';\r\n}\r\n.fa-list-dots:before,\r\n.fa-list-ul:before {\r\n  content: '\\f0ca';\r\n}\r\n.fa-school-lock:before {\r\n  content: '\\e56f';\r\n}\r\n.fa-tower-cell:before {\r\n  content: '\\e585';\r\n}\r\n.fa-down-long:before,\r\n.fa-long-arrow-alt-down:before {\r\n  content: '\\f309';\r\n}\r\n.fa-ranking-star:before {\r\n  content: '\\e561';\r\n}\r\n.fa-chess-king:before {\r\n  content: '\\f43f';\r\n}\r\n.fa-person-harassing:before {\r\n  content: '\\e549';\r\n}\r\n.fa-brazilian-real-sign:before {\r\n  content: '\\e46c';\r\n}\r\n.fa-landmark-alt:before,\r\n.fa-landmark-dome:before {\r\n  content: '\\f752';\r\n}\r\n.fa-arrow-up:before {\r\n  content: '\\f062';\r\n}\r\n.fa-television:before,\r\n.fa-tv-alt:before,\r\n.fa-tv:before {\r\n  content: '\\f26c';\r\n}\r\n.fa-shrimp:before {\r\n  content: '\\e448';\r\n}\r\n.fa-list-check:before,\r\n.fa-tasks:before {\r\n  content: '\\f0ae';\r\n}\r\n.fa-jug-detergent:before {\r\n  content: '\\e519';\r\n}\r\n.fa-circle-user:before,\r\n.fa-user-circle:before {\r\n  content: '\\f2bd';\r\n}\r\n.fa-user-shield:before {\r\n  content: '\\f505';\r\n}\r\n.fa-wind:before {\r\n  content: '\\f72e';\r\n}\r\n.fa-car-burst:before,\r\n.fa-car-crash:before {\r\n  content: '\\f5e1';\r\n}\r\n.fa-y:before {\r\n  content: '\\59';\r\n}\r\n.fa-person-snowboarding:before,\r\n.fa-snowboarding:before {\r\n  content: '\\f7ce';\r\n}\r\n.fa-shipping-fast:before,\r\n.fa-truck-fast:before {\r\n  content: '\\f48b';\r\n}\r\n.fa-fish:before {\r\n  content: '\\f578';\r\n}\r\n.fa-user-graduate:before {\r\n  content: '\\f501';\r\n}\r\n.fa-adjust:before,\r\n.fa-circle-half-stroke:before {\r\n  content: '\\f042';\r\n}\r\n.fa-clapperboard:before {\r\n  content: '\\e131';\r\n}\r\n.fa-circle-radiation:before,\r\n.fa-radiation-alt:before {\r\n  content: '\\f7ba';\r\n}\r\n.fa-baseball-ball:before,\r\n.fa-baseball:before {\r\n  content: '\\f433';\r\n}\r\n.fa-jet-fighter-up:before {\r\n  content: '\\e518';\r\n}\r\n.fa-diagram-project:before,\r\n.fa-project-diagram:before {\r\n  content: '\\f542';\r\n}\r\n.fa-copy:before {\r\n  content: '\\f0c5';\r\n}\r\n.fa-volume-mute:before,\r\n.fa-volume-times:before,\r\n.fa-volume-xmark:before {\r\n  content: '\\f6a9';\r\n}\r\n.fa-hand-sparkles:before {\r\n  content: '\\e05d';\r\n}\r\n.fa-grip-horizontal:before,\r\n.fa-grip:before {\r\n  content: '\\f58d';\r\n}\r\n.fa-share-from-square:before,\r\n.fa-share-square:before {\r\n  content: '\\f14d';\r\n}\r\n.fa-child-combatant:before,\r\n.fa-child-rifle:before {\r\n  content: '\\e4e0';\r\n}\r\n.fa-gun:before {\r\n  content: '\\e19b';\r\n}\r\n.fa-phone-square:before,\r\n.fa-square-phone:before {\r\n  content: '\\f098';\r\n}\r\n.fa-add:before,\r\n.fa-plus:before {\r\n  content: '\\2b';\r\n}\r\n.fa-expand:before {\r\n  content: '\\f065';\r\n}\r\n.fa-computer:before {\r\n  content: '\\e4e5';\r\n}\r\n.fa-close:before,\r\n.fa-multiply:before,\r\n.fa-remove:before,\r\n.fa-times:before,\r\n.fa-xmark:before {\r\n  content: '\\f00d';\r\n}\r\n.fa-arrows-up-down-left-right:before,\r\n.fa-arrows:before {\r\n  content: '\\f047';\r\n}\r\n.fa-chalkboard-teacher:before,\r\n.fa-chalkboard-user:before {\r\n  content: '\\f51c';\r\n}\r\n.fa-peso-sign:before {\r\n  content: '\\e222';\r\n}\r\n.fa-building-shield:before {\r\n  content: '\\e4d8';\r\n}\r\n.fa-baby:before {\r\n  content: '\\f77c';\r\n}\r\n.fa-users-line:before {\r\n  content: '\\e592';\r\n}\r\n.fa-quote-left-alt:before,\r\n.fa-quote-left:before {\r\n  content: '\\f10d';\r\n}\r\n.fa-tractor:before {\r\n  content: '\\f722';\r\n}\r\n.fa-trash-arrow-up:before,\r\n.fa-trash-restore:before {\r\n  content: '\\f829';\r\n}\r\n.fa-arrow-down-up-lock:before {\r\n  content: '\\e4b0';\r\n}\r\n.fa-lines-leaning:before {\r\n  content: '\\e51e';\r\n}\r\n.fa-ruler-combined:before {\r\n  content: '\\f546';\r\n}\r\n.fa-copyright:before {\r\n  content: '\\f1f9';\r\n}\r\n.fa-equals:before {\r\n  content: '\\3d';\r\n}\r\n.fa-blender:before {\r\n  content: '\\f517';\r\n}\r\n.fa-teeth:before {\r\n  content: '\\f62e';\r\n}\r\n.fa-ils:before,\r\n.fa-shekel-sign:before,\r\n.fa-shekel:before,\r\n.fa-sheqel-sign:before,\r\n.fa-sheqel:before {\r\n  content: '\\f20b';\r\n}\r\n.fa-map:before {\r\n  content: '\\f279';\r\n}\r\n.fa-rocket:before {\r\n  content: '\\f135';\r\n}\r\n.fa-photo-film:before,\r\n.fa-photo-video:before {\r\n  content: '\\f87c';\r\n}\r\n.fa-folder-minus:before {\r\n  content: '\\f65d';\r\n}\r\n.fa-store:before {\r\n  content: '\\f54e';\r\n}\r\n.fa-arrow-trend-up:before {\r\n  content: '\\e098';\r\n}\r\n.fa-plug-circle-minus:before {\r\n  content: '\\e55e';\r\n}\r\n.fa-sign-hanging:before,\r\n.fa-sign:before {\r\n  content: '\\f4d9';\r\n}\r\n.fa-bezier-curve:before {\r\n  content: '\\f55b';\r\n}\r\n.fa-bell-slash:before {\r\n  content: '\\f1f6';\r\n}\r\n.fa-tablet-android:before,\r\n.fa-tablet:before {\r\n  content: '\\f3fb';\r\n}\r\n.fa-school-flag:before {\r\n  content: '\\e56e';\r\n}\r\n.fa-fill:before {\r\n  content: '\\f575';\r\n}\r\n.fa-angle-up:before {\r\n  content: '\\f106';\r\n}\r\n.fa-drumstick-bite:before {\r\n  content: '\\f6d7';\r\n}\r\n.fa-holly-berry:before {\r\n  content: '\\f7aa';\r\n}\r\n.fa-chevron-left:before {\r\n  content: '\\f053';\r\n}\r\n.fa-bacteria:before {\r\n  content: '\\e059';\r\n}\r\n.fa-hand-lizard:before {\r\n  content: '\\f258';\r\n}\r\n.fa-notdef:before {\r\n  content: '\\e1fe';\r\n}\r\n.fa-disease:before {\r\n  content: '\\f7fa';\r\n}\r\n.fa-briefcase-medical:before {\r\n  content: '\\f469';\r\n}\r\n.fa-genderless:before {\r\n  content: '\\f22d';\r\n}\r\n.fa-chevron-right:before {\r\n  content: '\\f054';\r\n}\r\n.fa-retweet:before {\r\n  content: '\\f079';\r\n}\r\n.fa-car-alt:before,\r\n.fa-car-rear:before {\r\n  content: '\\f5de';\r\n}\r\n.fa-pump-soap:before {\r\n  content: '\\e06b';\r\n}\r\n.fa-video-slash:before {\r\n  content: '\\f4e2';\r\n}\r\n.fa-battery-2:before,\r\n.fa-battery-quarter:before {\r\n  content: '\\f243';\r\n}\r\n.fa-radio:before {\r\n  content: '\\f8d7';\r\n}\r\n.fa-baby-carriage:before,\r\n.fa-carriage-baby:before {\r\n  content: '\\f77d';\r\n}\r\n.fa-traffic-light:before {\r\n  content: '\\f637';\r\n}\r\n.fa-thermometer:before {\r\n  content: '\\f491';\r\n}\r\n.fa-vr-cardboard:before {\r\n  content: '\\f729';\r\n}\r\n.fa-hand-middle-finger:before {\r\n  content: '\\f806';\r\n}\r\n.fa-percent:before,\r\n.fa-percentage:before {\r\n  content: '\\25';\r\n}\r\n.fa-truck-moving:before {\r\n  content: '\\f4df';\r\n}\r\n.fa-glass-water-droplet:before {\r\n  content: '\\e4f5';\r\n}\r\n.fa-display:before {\r\n  content: '\\e163';\r\n}\r\n.fa-face-smile:before,\r\n.fa-smile:before {\r\n  content: '\\f118';\r\n}\r\n.fa-thumb-tack:before,\r\n.fa-thumbtack:before {\r\n  content: '\\f08d';\r\n}\r\n.fa-trophy:before {\r\n  content: '\\f091';\r\n}\r\n.fa-person-praying:before,\r\n.fa-pray:before {\r\n  content: '\\f683';\r\n}\r\n.fa-hammer:before {\r\n  content: '\\f6e3';\r\n}\r\n.fa-hand-peace:before {\r\n  content: '\\f25b';\r\n}\r\n.fa-rotate:before,\r\n.fa-sync-alt:before {\r\n  content: '\\f2f1';\r\n}\r\n.fa-spinner:before {\r\n  content: '\\f110';\r\n}\r\n.fa-robot:before {\r\n  content: '\\f544';\r\n}\r\n.fa-peace:before {\r\n  content: '\\f67c';\r\n}\r\n.fa-cogs:before,\r\n.fa-gears:before {\r\n  content: '\\f085';\r\n}\r\n.fa-warehouse:before {\r\n  content: '\\f494';\r\n}\r\n.fa-arrow-up-right-dots:before {\r\n  content: '\\e4b7';\r\n}\r\n.fa-splotch:before {\r\n  content: '\\f5bc';\r\n}\r\n.fa-face-grin-hearts:before,\r\n.fa-grin-hearts:before {\r\n  content: '\\f584';\r\n}\r\n.fa-dice-four:before {\r\n  content: '\\f524';\r\n}\r\n.fa-sim-card:before {\r\n  content: '\\f7c4';\r\n}\r\n.fa-transgender-alt:before,\r\n.fa-transgender:before {\r\n  content: '\\f225';\r\n}\r\n.fa-mercury:before {\r\n  content: '\\f223';\r\n}\r\n.fa-arrow-turn-down:before,\r\n.fa-level-down:before {\r\n  content: '\\f149';\r\n}\r\n.fa-person-falling-burst:before {\r\n  content: '\\e547';\r\n}\r\n.fa-award:before {\r\n  content: '\\f559';\r\n}\r\n.fa-ticket-alt:before,\r\n.fa-ticket-simple:before {\r\n  content: '\\f3ff';\r\n}\r\n.fa-building:before {\r\n  content: '\\f1ad';\r\n}\r\n.fa-angle-double-left:before,\r\n.fa-angles-left:before {\r\n  content: '\\f100';\r\n}\r\n.fa-qrcode:before {\r\n  content: '\\f029';\r\n}\r\n.fa-clock-rotate-left:before,\r\n.fa-history:before {\r\n  content: '\\f1da';\r\n}\r\n.fa-face-grin-beam-sweat:before,\r\n.fa-grin-beam-sweat:before {\r\n  content: '\\f583';\r\n}\r\n.fa-arrow-right-from-file:before,\r\n.fa-file-export:before {\r\n  content: '\\f56e';\r\n}\r\n.fa-shield-blank:before,\r\n.fa-shield:before {\r\n  content: '\\f132';\r\n}\r\n.fa-arrow-up-short-wide:before,\r\n.fa-sort-amount-up-alt:before {\r\n  content: '\\f885';\r\n}\r\n.fa-house-medical:before {\r\n  content: '\\e3b2';\r\n}\r\n.fa-golf-ball-tee:before,\r\n.fa-golf-ball:before {\r\n  content: '\\f450';\r\n}\r\n.fa-chevron-circle-left:before,\r\n.fa-circle-chevron-left:before {\r\n  content: '\\f137';\r\n}\r\n.fa-house-chimney-window:before {\r\n  content: '\\e00d';\r\n}\r\n.fa-pen-nib:before {\r\n  content: '\\f5ad';\r\n}\r\n.fa-tent-arrow-turn-left:before {\r\n  content: '\\e580';\r\n}\r\n.fa-tents:before {\r\n  content: '\\e582';\r\n}\r\n.fa-magic:before,\r\n.fa-wand-magic:before {\r\n  content: '\\f0d0';\r\n}\r\n.fa-dog:before {\r\n  content: '\\f6d3';\r\n}\r\n.fa-carrot:before {\r\n  content: '\\f787';\r\n}\r\n.fa-moon:before {\r\n  content: '\\f186';\r\n}\r\n.fa-wine-glass-alt:before,\r\n.fa-wine-glass-empty:before {\r\n  content: '\\f5ce';\r\n}\r\n.fa-cheese:before {\r\n  content: '\\f7ef';\r\n}\r\n.fa-yin-yang:before {\r\n  content: '\\f6ad';\r\n}\r\n.fa-music:before {\r\n  content: '\\f001';\r\n}\r\n.fa-code-commit:before {\r\n  content: '\\f386';\r\n}\r\n.fa-temperature-low:before {\r\n  content: '\\f76b';\r\n}\r\n.fa-biking:before,\r\n.fa-person-biking:before {\r\n  content: '\\f84a';\r\n}\r\n.fa-broom:before {\r\n  content: '\\f51a';\r\n}\r\n.fa-shield-heart:before {\r\n  content: '\\e574';\r\n}\r\n.fa-gopuram:before {\r\n  content: '\\f664';\r\n}\r\n.fa-earth-oceania:before,\r\n.fa-globe-oceania:before {\r\n  content: '\\e47b';\r\n}\r\n.fa-square-xmark:before,\r\n.fa-times-square:before,\r\n.fa-xmark-square:before {\r\n  content: '\\f2d3';\r\n}\r\n.fa-hashtag:before {\r\n  content: '\\23';\r\n}\r\n.fa-expand-alt:before,\r\n.fa-up-right-and-down-left-from-center:before {\r\n  content: '\\f424';\r\n}\r\n.fa-oil-can:before {\r\n  content: '\\f613';\r\n}\r\n.fa-t:before {\r\n  content: '\\54';\r\n}\r\n.fa-hippo:before {\r\n  content: '\\f6ed';\r\n}\r\n.fa-chart-column:before {\r\n  content: '\\e0e3';\r\n}\r\n.fa-infinity:before {\r\n  content: '\\f534';\r\n}\r\n.fa-vial-circle-check:before {\r\n  content: '\\e596';\r\n}\r\n.fa-person-arrow-down-to-line:before {\r\n  content: '\\e538';\r\n}\r\n.fa-voicemail:before {\r\n  content: '\\f897';\r\n}\r\n.fa-fan:before {\r\n  content: '\\f863';\r\n}\r\n.fa-person-walking-luggage:before {\r\n  content: '\\e554';\r\n}\r\n.fa-arrows-alt-v:before,\r\n.fa-up-down:before {\r\n  content: '\\f338';\r\n}\r\n.fa-cloud-moon-rain:before {\r\n  content: '\\f73c';\r\n}\r\n.fa-calendar:before {\r\n  content: '\\f133';\r\n}\r\n.fa-trailer:before {\r\n  content: '\\e041';\r\n}\r\n.fa-bahai:before,\r\n.fa-haykal:before {\r\n  content: '\\f666';\r\n}\r\n.fa-sd-card:before {\r\n  content: '\\f7c2';\r\n}\r\n.fa-dragon:before {\r\n  content: '\\f6d5';\r\n}\r\n.fa-shoe-prints:before {\r\n  content: '\\f54b';\r\n}\r\n.fa-circle-plus:before,\r\n.fa-plus-circle:before {\r\n  content: '\\f055';\r\n}\r\n.fa-face-grin-tongue-wink:before,\r\n.fa-grin-tongue-wink:before {\r\n  content: '\\f58b';\r\n}\r\n.fa-hand-holding:before {\r\n  content: '\\f4bd';\r\n}\r\n.fa-plug-circle-exclamation:before {\r\n  content: '\\e55d';\r\n}\r\n.fa-chain-broken:before,\r\n.fa-chain-slash:before,\r\n.fa-link-slash:before,\r\n.fa-unlink:before {\r\n  content: '\\f127';\r\n}\r\n.fa-clone:before {\r\n  content: '\\f24d';\r\n}\r\n.fa-person-walking-arrow-loop-left:before {\r\n  content: '\\e551';\r\n}\r\n.fa-arrow-up-z-a:before,\r\n.fa-sort-alpha-up-alt:before {\r\n  content: '\\f882';\r\n}\r\n.fa-fire-alt:before,\r\n.fa-fire-flame-curved:before {\r\n  content: '\\f7e4';\r\n}\r\n.fa-tornado:before {\r\n  content: '\\f76f';\r\n}\r\n.fa-file-circle-plus:before {\r\n  content: '\\e494';\r\n}\r\n.fa-book-quran:before,\r\n.fa-quran:before {\r\n  content: '\\f687';\r\n}\r\n.fa-anchor:before {\r\n  content: '\\f13d';\r\n}\r\n.fa-border-all:before {\r\n  content: '\\f84c';\r\n}\r\n.fa-angry:before,\r\n.fa-face-angry:before {\r\n  content: '\\f556';\r\n}\r\n.fa-cookie-bite:before {\r\n  content: '\\f564';\r\n}\r\n.fa-arrow-trend-down:before {\r\n  content: '\\e097';\r\n}\r\n.fa-feed:before,\r\n.fa-rss:before {\r\n  content: '\\f09e';\r\n}\r\n.fa-draw-polygon:before {\r\n  content: '\\f5ee';\r\n}\r\n.fa-balance-scale:before,\r\n.fa-scale-balanced:before {\r\n  content: '\\f24e';\r\n}\r\n.fa-gauge-simple-high:before,\r\n.fa-tachometer-fast:before,\r\n.fa-tachometer:before {\r\n  content: '\\f62a';\r\n}\r\n.fa-shower:before {\r\n  content: '\\f2cc';\r\n}\r\n.fa-desktop-alt:before,\r\n.fa-desktop:before {\r\n  content: '\\f390';\r\n}\r\n.fa-m:before {\r\n  content: '\\4d';\r\n}\r\n.fa-table-list:before,\r\n.fa-th-list:before {\r\n  content: '\\f00b';\r\n}\r\n.fa-comment-sms:before,\r\n.fa-sms:before {\r\n  content: '\\f7cd';\r\n}\r\n.fa-book:before {\r\n  content: '\\f02d';\r\n}\r\n.fa-user-plus:before {\r\n  content: '\\f234';\r\n}\r\n.fa-check:before {\r\n  content: '\\f00c';\r\n}\r\n.fa-battery-4:before,\r\n.fa-battery-three-quarters:before {\r\n  content: '\\f241';\r\n}\r\n.fa-house-circle-check:before {\r\n  content: '\\e509';\r\n}\r\n.fa-angle-left:before {\r\n  content: '\\f104';\r\n}\r\n.fa-diagram-successor:before {\r\n  content: '\\e47a';\r\n}\r\n.fa-truck-arrow-right:before {\r\n  content: '\\e58b';\r\n}\r\n.fa-arrows-split-up-and-left:before {\r\n  content: '\\e4bc';\r\n}\r\n.fa-fist-raised:before,\r\n.fa-hand-fist:before {\r\n  content: '\\f6de';\r\n}\r\n.fa-cloud-moon:before {\r\n  content: '\\f6c3';\r\n}\r\n.fa-briefcase:before {\r\n  content: '\\f0b1';\r\n}\r\n.fa-person-falling:before {\r\n  content: '\\e546';\r\n}\r\n.fa-image-portrait:before,\r\n.fa-portrait:before {\r\n  content: '\\f3e0';\r\n}\r\n.fa-user-tag:before {\r\n  content: '\\f507';\r\n}\r\n.fa-rug:before {\r\n  content: '\\e569';\r\n}\r\n.fa-earth-europe:before,\r\n.fa-globe-europe:before {\r\n  content: '\\f7a2';\r\n}\r\n.fa-cart-flatbed-suitcase:before,\r\n.fa-luggage-cart:before {\r\n  content: '\\f59d';\r\n}\r\n.fa-rectangle-times:before,\r\n.fa-rectangle-xmark:before,\r\n.fa-times-rectangle:before,\r\n.fa-window-close:before {\r\n  content: '\\f410';\r\n}\r\n.fa-baht-sign:before {\r\n  content: '\\e0ac';\r\n}\r\n.fa-book-open:before {\r\n  content: '\\f518';\r\n}\r\n.fa-book-journal-whills:before,\r\n.fa-journal-whills:before {\r\n  content: '\\f66a';\r\n}\r\n.fa-handcuffs:before {\r\n  content: '\\e4f8';\r\n}\r\n.fa-exclamation-triangle:before,\r\n.fa-triangle-exclamation:before,\r\n.fa-warning:before {\r\n  content: '\\f071';\r\n}\r\n.fa-database:before {\r\n  content: '\\f1c0';\r\n}\r\n.fa-mail-forward:before,\r\n.fa-share:before {\r\n  content: '\\f064';\r\n}\r\n.fa-bottle-droplet:before {\r\n  content: '\\e4c4';\r\n}\r\n.fa-mask-face:before {\r\n  content: '\\e1d7';\r\n}\r\n.fa-hill-rockslide:before {\r\n  content: '\\e508';\r\n}\r\n.fa-exchange-alt:before,\r\n.fa-right-left:before {\r\n  content: '\\f362';\r\n}\r\n.fa-paper-plane:before {\r\n  content: '\\f1d8';\r\n}\r\n.fa-road-circle-exclamation:before {\r\n  content: '\\e565';\r\n}\r\n.fa-dungeon:before {\r\n  content: '\\f6d9';\r\n}\r\n.fa-align-right:before {\r\n  content: '\\f038';\r\n}\r\n.fa-money-bill-1-wave:before,\r\n.fa-money-bill-wave-alt:before {\r\n  content: '\\f53b';\r\n}\r\n.fa-life-ring:before {\r\n  content: '\\f1cd';\r\n}\r\n.fa-hands:before,\r\n.fa-sign-language:before,\r\n.fa-signing:before {\r\n  content: '\\f2a7';\r\n}\r\n.fa-calendar-day:before {\r\n  content: '\\f783';\r\n}\r\n.fa-ladder-water:before,\r\n.fa-swimming-pool:before,\r\n.fa-water-ladder:before {\r\n  content: '\\f5c5';\r\n}\r\n.fa-arrows-up-down:before,\r\n.fa-arrows-v:before {\r\n  content: '\\f07d';\r\n}\r\n.fa-face-grimace:before,\r\n.fa-grimace:before {\r\n  content: '\\f57f';\r\n}\r\n.fa-wheelchair-alt:before,\r\n.fa-wheelchair-move:before {\r\n  content: '\\e2ce';\r\n}\r\n.fa-level-down-alt:before,\r\n.fa-turn-down:before {\r\n  content: '\\f3be';\r\n}\r\n.fa-person-walking-arrow-right:before {\r\n  content: '\\e552';\r\n}\r\n.fa-envelope-square:before,\r\n.fa-square-envelope:before {\r\n  content: '\\f199';\r\n}\r\n.fa-dice:before {\r\n  content: '\\f522';\r\n}\r\n.fa-bowling-ball:before {\r\n  content: '\\f436';\r\n}\r\n.fa-brain:before {\r\n  content: '\\f5dc';\r\n}\r\n.fa-band-aid:before,\r\n.fa-bandage:before {\r\n  content: '\\f462';\r\n}\r\n.fa-calendar-minus:before {\r\n  content: '\\f272';\r\n}\r\n.fa-circle-xmark:before,\r\n.fa-times-circle:before,\r\n.fa-xmark-circle:before {\r\n  content: '\\f057';\r\n}\r\n.fa-gifts:before {\r\n  content: '\\f79c';\r\n}\r\n.fa-hotel:before {\r\n  content: '\\f594';\r\n}\r\n.fa-earth-asia:before,\r\n.fa-globe-asia:before {\r\n  content: '\\f57e';\r\n}\r\n.fa-id-card-alt:before,\r\n.fa-id-card-clip:before {\r\n  content: '\\f47f';\r\n}\r\n.fa-magnifying-glass-plus:before,\r\n.fa-search-plus:before {\r\n  content: '\\f00e';\r\n}\r\n.fa-thumbs-up:before {\r\n  content: '\\f164';\r\n}\r\n.fa-user-clock:before {\r\n  content: '\\f4fd';\r\n}\r\n.fa-allergies:before,\r\n.fa-hand-dots:before {\r\n  content: '\\f461';\r\n}\r\n.fa-file-invoice:before {\r\n  content: '\\f570';\r\n}\r\n.fa-window-minimize:before {\r\n  content: '\\f2d1';\r\n}\r\n.fa-coffee:before,\r\n.fa-mug-saucer:before {\r\n  content: '\\f0f4';\r\n}\r\n.fa-brush:before {\r\n  content: '\\f55d';\r\n}\r\n.fa-mask:before {\r\n  content: '\\f6fa';\r\n}\r\n.fa-magnifying-glass-minus:before,\r\n.fa-search-minus:before {\r\n  content: '\\f010';\r\n}\r\n.fa-ruler-vertical:before {\r\n  content: '\\f548';\r\n}\r\n.fa-user-alt:before,\r\n.fa-user-large:before {\r\n  content: '\\f406';\r\n}\r\n.fa-train-tram:before {\r\n  content: '\\e5b4';\r\n}\r\n.fa-user-nurse:before {\r\n  content: '\\f82f';\r\n}\r\n.fa-syringe:before {\r\n  content: '\\f48e';\r\n}\r\n.fa-cloud-sun:before {\r\n  content: '\\f6c4';\r\n}\r\n.fa-stopwatch-20:before {\r\n  content: '\\e06f';\r\n}\r\n.fa-square-full:before {\r\n  content: '\\f45c';\r\n}\r\n.fa-magnet:before {\r\n  content: '\\f076';\r\n}\r\n.fa-jar:before {\r\n  content: '\\e516';\r\n}\r\n.fa-note-sticky:before,\r\n.fa-sticky-note:before {\r\n  content: '\\f249';\r\n}\r\n.fa-bug-slash:before {\r\n  content: '\\e490';\r\n}\r\n.fa-arrow-up-from-water-pump:before {\r\n  content: '\\e4b6';\r\n}\r\n.fa-bone:before {\r\n  content: '\\f5d7';\r\n}\r\n.fa-user-injured:before {\r\n  content: '\\f728';\r\n}\r\n.fa-face-sad-tear:before,\r\n.fa-sad-tear:before {\r\n  content: '\\f5b4';\r\n}\r\n.fa-plane:before {\r\n  content: '\\f072';\r\n}\r\n.fa-tent-arrows-down:before {\r\n  content: '\\e581';\r\n}\r\n.fa-exclamation:before {\r\n  content: '\\21';\r\n}\r\n.fa-arrows-spin:before {\r\n  content: '\\e4bb';\r\n}\r\n.fa-print:before {\r\n  content: '\\f02f';\r\n}\r\n.fa-try:before,\r\n.fa-turkish-lira-sign:before,\r\n.fa-turkish-lira:before {\r\n  content: '\\e2bb';\r\n}\r\n.fa-dollar-sign:before,\r\n.fa-dollar:before,\r\n.fa-usd:before {\r\n  content: '\\24';\r\n}\r\n.fa-x:before {\r\n  content: '\\58';\r\n}\r\n.fa-magnifying-glass-dollar:before,\r\n.fa-search-dollar:before {\r\n  content: '\\f688';\r\n}\r\n.fa-users-cog:before,\r\n.fa-users-gear:before {\r\n  content: '\\f509';\r\n}\r\n.fa-person-military-pointing:before {\r\n  content: '\\e54a';\r\n}\r\n.fa-bank:before,\r\n.fa-building-columns:before,\r\n.fa-institution:before,\r\n.fa-museum:before,\r\n.fa-university:before {\r\n  content: '\\f19c';\r\n}\r\n.fa-umbrella:before {\r\n  content: '\\f0e9';\r\n}\r\n.fa-trowel:before {\r\n  content: '\\e589';\r\n}\r\n.fa-d:before {\r\n  content: '\\44';\r\n}\r\n.fa-stapler:before {\r\n  content: '\\e5af';\r\n}\r\n.fa-masks-theater:before,\r\n.fa-theater-masks:before {\r\n  content: '\\f630';\r\n}\r\n.fa-kip-sign:before {\r\n  content: '\\e1c4';\r\n}\r\n.fa-hand-point-left:before {\r\n  content: '\\f0a5';\r\n}\r\n.fa-handshake-alt:before,\r\n.fa-handshake-simple:before {\r\n  content: '\\f4c6';\r\n}\r\n.fa-fighter-jet:before,\r\n.fa-jet-fighter:before {\r\n  content: '\\f0fb';\r\n}\r\n.fa-share-alt-square:before,\r\n.fa-square-share-nodes:before {\r\n  content: '\\f1e1';\r\n}\r\n.fa-barcode:before {\r\n  content: '\\f02a';\r\n}\r\n.fa-plus-minus:before {\r\n  content: '\\e43c';\r\n}\r\n.fa-video-camera:before,\r\n.fa-video:before {\r\n  content: '\\f03d';\r\n}\r\n.fa-graduation-cap:before,\r\n.fa-mortar-board:before {\r\n  content: '\\f19d';\r\n}\r\n.fa-hand-holding-medical:before {\r\n  content: '\\e05c';\r\n}\r\n.fa-person-circle-check:before {\r\n  content: '\\e53e';\r\n}\r\n.fa-level-up-alt:before,\r\n.fa-turn-up:before {\r\n  content: '\\f3bf';\r\n}\r\n.fa-sr-only,\r\n.fa-sr-only-focusable:not(:focus),\r\n.sr-only,\r\n.sr-only-focusable:not(:focus) {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  border-width: 0;\r\n}\r\n:host,\r\n:root {\r\n  --fa-style-family-brands: 'Font Awesome 6 Brands';\r\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 6 Brands';\r\n}\r\n@font-face {\r\n  font-family: 'Font Awesome 6 Brands';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-display: block;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.ttf) format('truetype');\r\n}\r\n.fa-brands,\r\n.fab {\r\n  font-weight: 400;\r\n}\r\n.fa-monero:before {\r\n  content: '\\f3d0';\r\n}\r\n.fa-hooli:before {\r\n  content: '\\f427';\r\n}\r\n.fa-yelp:before {\r\n  content: '\\f1e9';\r\n}\r\n.fa-cc-visa:before {\r\n  content: '\\f1f0';\r\n}\r\n.fa-lastfm:before {\r\n  content: '\\f202';\r\n}\r\n.fa-shopware:before {\r\n  content: '\\f5b5';\r\n}\r\n.fa-creative-commons-nc:before {\r\n  content: '\\f4e8';\r\n}\r\n.fa-aws:before {\r\n  content: '\\f375';\r\n}\r\n.fa-redhat:before {\r\n  content: '\\f7bc';\r\n}\r\n.fa-yoast:before {\r\n  content: '\\f2b1';\r\n}\r\n.fa-cloudflare:before {\r\n  content: '\\e07d';\r\n}\r\n.fa-ups:before {\r\n  content: '\\f7e0';\r\n}\r\n.fa-pixiv:before {\r\n  content: '\\e640';\r\n}\r\n.fa-wpexplorer:before {\r\n  content: '\\f2de';\r\n}\r\n.fa-dyalog:before {\r\n  content: '\\f399';\r\n}\r\n.fa-bity:before {\r\n  content: '\\f37a';\r\n}\r\n.fa-stackpath:before {\r\n  content: '\\f842';\r\n}\r\n.fa-buysellads:before {\r\n  content: '\\f20d';\r\n}\r\n.fa-first-order:before {\r\n  content: '\\f2b0';\r\n}\r\n.fa-modx:before {\r\n  content: '\\f285';\r\n}\r\n.fa-guilded:before {\r\n  content: '\\e07e';\r\n}\r\n.fa-vnv:before {\r\n  content: '\\f40b';\r\n}\r\n.fa-js-square:before,\r\n.fa-square-js:before {\r\n  content: '\\f3b9';\r\n}\r\n.fa-microsoft:before {\r\n  content: '\\f3ca';\r\n}\r\n.fa-qq:before {\r\n  content: '\\f1d6';\r\n}\r\n.fa-orcid:before {\r\n  content: '\\f8d2';\r\n}\r\n.fa-java:before {\r\n  content: '\\f4e4';\r\n}\r\n.fa-invision:before {\r\n  content: '\\f7b0';\r\n}\r\n.fa-creative-commons-pd-alt:before {\r\n  content: '\\f4ed';\r\n}\r\n.fa-centercode:before {\r\n  content: '\\f380';\r\n}\r\n.fa-glide-g:before {\r\n  content: '\\f2a6';\r\n}\r\n.fa-drupal:before {\r\n  content: '\\f1a9';\r\n}\r\n.fa-hire-a-helper:before {\r\n  content: '\\f3b0';\r\n}\r\n.fa-creative-commons-by:before {\r\n  content: '\\f4e7';\r\n}\r\n.fa-unity:before {\r\n  content: '\\e049';\r\n}\r\n.fa-whmcs:before {\r\n  content: '\\f40d';\r\n}\r\n.fa-rocketchat:before {\r\n  content: '\\f3e8';\r\n}\r\n.fa-vk:before {\r\n  content: '\\f189';\r\n}\r\n.fa-untappd:before {\r\n  content: '\\f405';\r\n}\r\n.fa-mailchimp:before {\r\n  content: '\\f59e';\r\n}\r\n.fa-css3-alt:before {\r\n  content: '\\f38b';\r\n}\r\n.fa-reddit-square:before,\r\n.fa-square-reddit:before {\r\n  content: '\\f1a2';\r\n}\r\n.fa-vimeo-v:before {\r\n  content: '\\f27d';\r\n}\r\n.fa-contao:before {\r\n  content: '\\f26d';\r\n}\r\n.fa-square-font-awesome:before {\r\n  content: '\\e5ad';\r\n}\r\n.fa-deskpro:before {\r\n  content: '\\f38f';\r\n}\r\n.fa-brave:before {\r\n  content: '\\e63c';\r\n}\r\n.fa-sistrix:before {\r\n  content: '\\f3ee';\r\n}\r\n.fa-instagram-square:before,\r\n.fa-square-instagram:before {\r\n  content: '\\e055';\r\n}\r\n.fa-battle-net:before {\r\n  content: '\\f835';\r\n}\r\n.fa-the-red-yeti:before {\r\n  content: '\\f69d';\r\n}\r\n.fa-hacker-news-square:before,\r\n.fa-square-hacker-news:before {\r\n  content: '\\f3af';\r\n}\r\n.fa-edge:before {\r\n  content: '\\f282';\r\n}\r\n.fa-threads:before {\r\n  content: '\\e618';\r\n}\r\n.fa-napster:before {\r\n  content: '\\f3d2';\r\n}\r\n.fa-snapchat-square:before,\r\n.fa-square-snapchat:before {\r\n  content: '\\f2ad';\r\n}\r\n.fa-google-plus-g:before {\r\n  content: '\\f0d5';\r\n}\r\n.fa-artstation:before {\r\n  content: '\\f77a';\r\n}\r\n.fa-markdown:before {\r\n  content: '\\f60f';\r\n}\r\n.fa-sourcetree:before {\r\n  content: '\\f7d3';\r\n}\r\n.fa-google-plus:before {\r\n  content: '\\f2b3';\r\n}\r\n.fa-diaspora:before {\r\n  content: '\\f791';\r\n}\r\n.fa-foursquare:before {\r\n  content: '\\f180';\r\n}\r\n.fa-stack-overflow:before {\r\n  content: '\\f16c';\r\n}\r\n.fa-github-alt:before {\r\n  content: '\\f113';\r\n}\r\n.fa-phoenix-squadron:before {\r\n  content: '\\f511';\r\n}\r\n.fa-pagelines:before {\r\n  content: '\\f18c';\r\n}\r\n.fa-algolia:before {\r\n  content: '\\f36c';\r\n}\r\n.fa-red-river:before {\r\n  content: '\\f3e3';\r\n}\r\n.fa-creative-commons-sa:before {\r\n  content: '\\f4ef';\r\n}\r\n.fa-safari:before {\r\n  content: '\\f267';\r\n}\r\n.fa-google:before {\r\n  content: '\\f1a0';\r\n}\r\n.fa-font-awesome-alt:before,\r\n.fa-square-font-awesome-stroke:before {\r\n  content: '\\f35c';\r\n}\r\n.fa-atlassian:before {\r\n  content: '\\f77b';\r\n}\r\n.fa-linkedin-in:before {\r\n  content: '\\f0e1';\r\n}\r\n.fa-digital-ocean:before {\r\n  content: '\\f391';\r\n}\r\n.fa-nimblr:before {\r\n  content: '\\f5a8';\r\n}\r\n.fa-chromecast:before {\r\n  content: '\\f838';\r\n}\r\n.fa-evernote:before {\r\n  content: '\\f839';\r\n}\r\n.fa-hacker-news:before {\r\n  content: '\\f1d4';\r\n}\r\n.fa-creative-commons-sampling:before {\r\n  content: '\\f4f0';\r\n}\r\n.fa-adversal:before {\r\n  content: '\\f36a';\r\n}\r\n.fa-creative-commons:before {\r\n  content: '\\f25e';\r\n}\r\n.fa-watchman-monitoring:before {\r\n  content: '\\e087';\r\n}\r\n.fa-fonticons:before {\r\n  content: '\\f280';\r\n}\r\n.fa-weixin:before {\r\n  content: '\\f1d7';\r\n}\r\n.fa-shirtsinbulk:before {\r\n  content: '\\f214';\r\n}\r\n.fa-codepen:before {\r\n  content: '\\f1cb';\r\n}\r\n.fa-git-alt:before {\r\n  content: '\\f841';\r\n}\r\n.fa-lyft:before {\r\n  content: '\\f3c3';\r\n}\r\n.fa-rev:before {\r\n  content: '\\f5b2';\r\n}\r\n.fa-windows:before {\r\n  content: '\\f17a';\r\n}\r\n.fa-wizards-of-the-coast:before {\r\n  content: '\\f730';\r\n}\r\n.fa-square-viadeo:before,\r\n.fa-viadeo-square:before {\r\n  content: '\\f2aa';\r\n}\r\n.fa-meetup:before {\r\n  content: '\\f2e0';\r\n}\r\n.fa-centos:before {\r\n  content: '\\f789';\r\n}\r\n.fa-adn:before {\r\n  content: '\\f170';\r\n}\r\n.fa-cloudsmith:before {\r\n  content: '\\f384';\r\n}\r\n.fa-opensuse:before {\r\n  content: '\\e62b';\r\n}\r\n.fa-pied-piper-alt:before {\r\n  content: '\\f1a8';\r\n}\r\n.fa-dribbble-square:before,\r\n.fa-square-dribbble:before {\r\n  content: '\\f397';\r\n}\r\n.fa-codiepie:before {\r\n  content: '\\f284';\r\n}\r\n.fa-node:before {\r\n  content: '\\f419';\r\n}\r\n.fa-mix:before {\r\n  content: '\\f3cb';\r\n}\r\n.fa-steam:before {\r\n  content: '\\f1b6';\r\n}\r\n.fa-cc-apple-pay:before {\r\n  content: '\\f416';\r\n}\r\n.fa-scribd:before {\r\n  content: '\\f28a';\r\n}\r\n.fa-debian:before {\r\n  content: '\\e60b';\r\n}\r\n.fa-openid:before {\r\n  content: '\\f19b';\r\n}\r\n.fa-instalod:before {\r\n  content: '\\e081';\r\n}\r\n.fa-expeditedssl:before {\r\n  content: '\\f23e';\r\n}\r\n.fa-sellcast:before {\r\n  content: '\\f2da';\r\n}\r\n.fa-square-twitter:before,\r\n.fa-twitter-square:before {\r\n  content: '\\f081';\r\n}\r\n.fa-r-project:before {\r\n  content: '\\f4f7';\r\n}\r\n.fa-delicious:before {\r\n  content: '\\f1a5';\r\n}\r\n.fa-freebsd:before {\r\n  content: '\\f3a4';\r\n}\r\n.fa-vuejs:before {\r\n  content: '\\f41f';\r\n}\r\n.fa-accusoft:before {\r\n  content: '\\f369';\r\n}\r\n.fa-ioxhost:before {\r\n  content: '\\f208';\r\n}\r\n.fa-fonticons-fi:before {\r\n  content: '\\f3a2';\r\n}\r\n.fa-app-store:before {\r\n  content: '\\f36f';\r\n}\r\n.fa-cc-mastercard:before {\r\n  content: '\\f1f1';\r\n}\r\n.fa-itunes-note:before {\r\n  content: '\\f3b5';\r\n}\r\n.fa-golang:before {\r\n  content: '\\e40f';\r\n}\r\n.fa-kickstarter:before {\r\n  content: '\\f3bb';\r\n}\r\n.fa-grav:before {\r\n  content: '\\f2d6';\r\n}\r\n.fa-weibo:before {\r\n  content: '\\f18a';\r\n}\r\n.fa-uncharted:before {\r\n  content: '\\e084';\r\n}\r\n.fa-firstdraft:before {\r\n  content: '\\f3a1';\r\n}\r\n.fa-square-youtube:before,\r\n.fa-youtube-square:before {\r\n  content: '\\f431';\r\n}\r\n.fa-wikipedia-w:before {\r\n  content: '\\f266';\r\n}\r\n.fa-rendact:before,\r\n.fa-wpressr:before {\r\n  content: '\\f3e4';\r\n}\r\n.fa-angellist:before {\r\n  content: '\\f209';\r\n}\r\n.fa-galactic-republic:before {\r\n  content: '\\f50c';\r\n}\r\n.fa-nfc-directional:before {\r\n  content: '\\e530';\r\n}\r\n.fa-skype:before {\r\n  content: '\\f17e';\r\n}\r\n.fa-joget:before {\r\n  content: '\\f3b7';\r\n}\r\n.fa-fedora:before {\r\n  content: '\\f798';\r\n}\r\n.fa-stripe-s:before {\r\n  content: '\\f42a';\r\n}\r\n.fa-meta:before {\r\n  content: '\\e49b';\r\n}\r\n.fa-laravel:before {\r\n  content: '\\f3bd';\r\n}\r\n.fa-hotjar:before {\r\n  content: '\\f3b1';\r\n}\r\n.fa-bluetooth-b:before {\r\n  content: '\\f294';\r\n}\r\n.fa-square-letterboxd:before {\r\n  content: '\\e62e';\r\n}\r\n.fa-sticker-mule:before {\r\n  content: '\\f3f7';\r\n}\r\n.fa-creative-commons-zero:before {\r\n  content: '\\f4f3';\r\n}\r\n.fa-hips:before {\r\n  content: '\\f452';\r\n}\r\n.fa-behance:before {\r\n  content: '\\f1b4';\r\n}\r\n.fa-reddit:before {\r\n  content: '\\f1a1';\r\n}\r\n.fa-discord:before {\r\n  content: '\\f392';\r\n}\r\n.fa-chrome:before {\r\n  content: '\\f268';\r\n}\r\n.fa-app-store-ios:before {\r\n  content: '\\f370';\r\n}\r\n.fa-cc-discover:before {\r\n  content: '\\f1f2';\r\n}\r\n.fa-wpbeginner:before {\r\n  content: '\\f297';\r\n}\r\n.fa-confluence:before {\r\n  content: '\\f78d';\r\n}\r\n.fa-shoelace:before {\r\n  content: '\\e60c';\r\n}\r\n.fa-mdb:before {\r\n  content: '\\f8ca';\r\n}\r\n.fa-dochub:before {\r\n  content: '\\f394';\r\n}\r\n.fa-accessible-icon:before {\r\n  content: '\\f368';\r\n}\r\n.fa-ebay:before {\r\n  content: '\\f4f4';\r\n}\r\n.fa-amazon:before {\r\n  content: '\\f270';\r\n}\r\n.fa-unsplash:before {\r\n  content: '\\e07c';\r\n}\r\n.fa-yarn:before {\r\n  content: '\\f7e3';\r\n}\r\n.fa-square-steam:before,\r\n.fa-steam-square:before {\r\n  content: '\\f1b7';\r\n}\r\n.fa-500px:before {\r\n  content: '\\f26e';\r\n}\r\n.fa-square-vimeo:before,\r\n.fa-vimeo-square:before {\r\n  content: '\\f194';\r\n}\r\n.fa-asymmetrik:before {\r\n  content: '\\f372';\r\n}\r\n.fa-font-awesome-flag:before,\r\n.fa-font-awesome-logo-full:before,\r\n.fa-font-awesome:before {\r\n  content: '\\f2b4';\r\n}\r\n.fa-gratipay:before {\r\n  content: '\\f184';\r\n}\r\n.fa-apple:before {\r\n  content: '\\f179';\r\n}\r\n.fa-hive:before {\r\n  content: '\\e07f';\r\n}\r\n.fa-gitkraken:before {\r\n  content: '\\f3a6';\r\n}\r\n.fa-keybase:before {\r\n  content: '\\f4f5';\r\n}\r\n.fa-apple-pay:before {\r\n  content: '\\f415';\r\n}\r\n.fa-padlet:before {\r\n  content: '\\e4a0';\r\n}\r\n.fa-amazon-pay:before {\r\n  content: '\\f42c';\r\n}\r\n.fa-github-square:before,\r\n.fa-square-github:before {\r\n  content: '\\f092';\r\n}\r\n.fa-stumbleupon:before {\r\n  content: '\\f1a4';\r\n}\r\n.fa-fedex:before {\r\n  content: '\\f797';\r\n}\r\n.fa-phoenix-framework:before {\r\n  content: '\\f3dc';\r\n}\r\n.fa-shopify:before {\r\n  content: '\\e057';\r\n}\r\n.fa-neos:before {\r\n  content: '\\f612';\r\n}\r\n.fa-square-threads:before {\r\n  content: '\\e619';\r\n}\r\n.fa-hackerrank:before {\r\n  content: '\\f5f7';\r\n}\r\n.fa-researchgate:before {\r\n  content: '\\f4f8';\r\n}\r\n.fa-swift:before {\r\n  content: '\\f8e1';\r\n}\r\n.fa-angular:before {\r\n  content: '\\f420';\r\n}\r\n.fa-speakap:before {\r\n  content: '\\f3f3';\r\n}\r\n.fa-angrycreative:before {\r\n  content: '\\f36e';\r\n}\r\n.fa-y-combinator:before {\r\n  content: '\\f23b';\r\n}\r\n.fa-empire:before {\r\n  content: '\\f1d1';\r\n}\r\n.fa-envira:before {\r\n  content: '\\f299';\r\n}\r\n.fa-google-scholar:before {\r\n  content: '\\e63b';\r\n}\r\n.fa-gitlab-square:before,\r\n.fa-square-gitlab:before {\r\n  content: '\\e5ae';\r\n}\r\n.fa-studiovinari:before {\r\n  content: '\\f3f8';\r\n}\r\n.fa-pied-piper:before {\r\n  content: '\\f2ae';\r\n}\r\n.fa-wordpress:before {\r\n  content: '\\f19a';\r\n}\r\n.fa-product-hunt:before {\r\n  content: '\\f288';\r\n}\r\n.fa-firefox:before {\r\n  content: '\\f269';\r\n}\r\n.fa-linode:before {\r\n  content: '\\f2b8';\r\n}\r\n.fa-goodreads:before {\r\n  content: '\\f3a8';\r\n}\r\n.fa-odnoklassniki-square:before,\r\n.fa-square-odnoklassniki:before {\r\n  content: '\\f264';\r\n}\r\n.fa-jsfiddle:before {\r\n  content: '\\f1cc';\r\n}\r\n.fa-sith:before {\r\n  content: '\\f512';\r\n}\r\n.fa-themeisle:before {\r\n  content: '\\f2b2';\r\n}\r\n.fa-page4:before {\r\n  content: '\\f3d7';\r\n}\r\n.fa-hashnode:before {\r\n  content: '\\e499';\r\n}\r\n.fa-react:before {\r\n  content: '\\f41b';\r\n}\r\n.fa-cc-paypal:before {\r\n  content: '\\f1f4';\r\n}\r\n.fa-squarespace:before {\r\n  content: '\\f5be';\r\n}\r\n.fa-cc-stripe:before {\r\n  content: '\\f1f5';\r\n}\r\n.fa-creative-commons-share:before {\r\n  content: '\\f4f2';\r\n}\r\n.fa-bitcoin:before {\r\n  content: '\\f379';\r\n}\r\n.fa-keycdn:before {\r\n  content: '\\f3ba';\r\n}\r\n.fa-opera:before {\r\n  content: '\\f26a';\r\n}\r\n.fa-itch-io:before {\r\n  content: '\\f83a';\r\n}\r\n.fa-umbraco:before {\r\n  content: '\\f8e8';\r\n}\r\n.fa-galactic-senate:before {\r\n  content: '\\f50d';\r\n}\r\n.fa-ubuntu:before {\r\n  content: '\\f7df';\r\n}\r\n.fa-draft2digital:before {\r\n  content: '\\f396';\r\n}\r\n.fa-stripe:before {\r\n  content: '\\f429';\r\n}\r\n.fa-houzz:before {\r\n  content: '\\f27c';\r\n}\r\n.fa-gg:before {\r\n  content: '\\f260';\r\n}\r\n.fa-dhl:before {\r\n  content: '\\f790';\r\n}\r\n.fa-pinterest-square:before,\r\n.fa-square-pinterest:before {\r\n  content: '\\f0d3';\r\n}\r\n.fa-xing:before {\r\n  content: '\\f168';\r\n}\r\n.fa-blackberry:before {\r\n  content: '\\f37b';\r\n}\r\n.fa-creative-commons-pd:before {\r\n  content: '\\f4ec';\r\n}\r\n.fa-playstation:before {\r\n  content: '\\f3df';\r\n}\r\n.fa-quinscape:before {\r\n  content: '\\f459';\r\n}\r\n.fa-less:before {\r\n  content: '\\f41d';\r\n}\r\n.fa-blogger-b:before {\r\n  content: '\\f37d';\r\n}\r\n.fa-opencart:before {\r\n  content: '\\f23d';\r\n}\r\n.fa-vine:before {\r\n  content: '\\f1ca';\r\n}\r\n.fa-signal-messenger:before {\r\n  content: '\\e663';\r\n}\r\n.fa-paypal:before {\r\n  content: '\\f1ed';\r\n}\r\n.fa-gitlab:before {\r\n  content: '\\f296';\r\n}\r\n.fa-typo3:before {\r\n  content: '\\f42b';\r\n}\r\n.fa-reddit-alien:before {\r\n  content: '\\f281';\r\n}\r\n.fa-yahoo:before {\r\n  content: '\\f19e';\r\n}\r\n.fa-dailymotion:before {\r\n  content: '\\e052';\r\n}\r\n.fa-affiliatetheme:before {\r\n  content: '\\f36b';\r\n}\r\n.fa-pied-piper-pp:before {\r\n  content: '\\f1a7';\r\n}\r\n.fa-bootstrap:before {\r\n  content: '\\f836';\r\n}\r\n.fa-odnoklassniki:before {\r\n  content: '\\f263';\r\n}\r\n.fa-nfc-symbol:before {\r\n  content: '\\e531';\r\n}\r\n.fa-mintbit:before {\r\n  content: '\\e62f';\r\n}\r\n.fa-ethereum:before {\r\n  content: '\\f42e';\r\n}\r\n.fa-speaker-deck:before {\r\n  content: '\\f83c';\r\n}\r\n.fa-creative-commons-nc-eu:before {\r\n  content: '\\f4e9';\r\n}\r\n.fa-patreon:before {\r\n  content: '\\f3d9';\r\n}\r\n.fa-avianex:before {\r\n  content: '\\f374';\r\n}\r\n.fa-ello:before {\r\n  content: '\\f5f1';\r\n}\r\n.fa-gofore:before {\r\n  content: '\\f3a7';\r\n}\r\n.fa-bimobject:before {\r\n  content: '\\f378';\r\n}\r\n.fa-brave-reverse:before {\r\n  content: '\\e63d';\r\n}\r\n.fa-facebook-f:before {\r\n  content: '\\f39e';\r\n}\r\n.fa-google-plus-square:before,\r\n.fa-square-google-plus:before {\r\n  content: '\\f0d4';\r\n}\r\n.fa-mandalorian:before {\r\n  content: '\\f50f';\r\n}\r\n.fa-first-order-alt:before {\r\n  content: '\\f50a';\r\n}\r\n.fa-osi:before {\r\n  content: '\\f41a';\r\n}\r\n.fa-google-wallet:before {\r\n  content: '\\f1ee';\r\n}\r\n.fa-d-and-d-beyond:before {\r\n  content: '\\f6ca';\r\n}\r\n.fa-periscope:before {\r\n  content: '\\f3da';\r\n}\r\n.fa-fulcrum:before {\r\n  content: '\\f50b';\r\n}\r\n.fa-cloudscale:before {\r\n  content: '\\f383';\r\n}\r\n.fa-forumbee:before {\r\n  content: '\\f211';\r\n}\r\n.fa-mizuni:before {\r\n  content: '\\f3cc';\r\n}\r\n.fa-schlix:before {\r\n  content: '\\f3ea';\r\n}\r\n.fa-square-xing:before,\r\n.fa-xing-square:before {\r\n  content: '\\f169';\r\n}\r\n.fa-bandcamp:before {\r\n  content: '\\f2d5';\r\n}\r\n.fa-wpforms:before {\r\n  content: '\\f298';\r\n}\r\n.fa-cloudversify:before {\r\n  content: '\\f385';\r\n}\r\n.fa-usps:before {\r\n  content: '\\f7e1';\r\n}\r\n.fa-megaport:before {\r\n  content: '\\f5a3';\r\n}\r\n.fa-magento:before {\r\n  content: '\\f3c4';\r\n}\r\n.fa-spotify:before {\r\n  content: '\\f1bc';\r\n}\r\n.fa-optin-monster:before {\r\n  content: '\\f23c';\r\n}\r\n.fa-fly:before {\r\n  content: '\\f417';\r\n}\r\n.fa-aviato:before {\r\n  content: '\\f421';\r\n}\r\n.fa-itunes:before {\r\n  content: '\\f3b4';\r\n}\r\n.fa-cuttlefish:before {\r\n  content: '\\f38c';\r\n}\r\n.fa-blogger:before {\r\n  content: '\\f37c';\r\n}\r\n.fa-flickr:before {\r\n  content: '\\f16e';\r\n}\r\n.fa-viber:before {\r\n  content: '\\f409';\r\n}\r\n.fa-soundcloud:before {\r\n  content: '\\f1be';\r\n}\r\n.fa-digg:before {\r\n  content: '\\f1a6';\r\n}\r\n.fa-tencent-weibo:before {\r\n  content: '\\f1d5';\r\n}\r\n.fa-letterboxd:before {\r\n  content: '\\e62d';\r\n}\r\n.fa-symfony:before {\r\n  content: '\\f83d';\r\n}\r\n.fa-maxcdn:before {\r\n  content: '\\f136';\r\n}\r\n.fa-etsy:before {\r\n  content: '\\f2d7';\r\n}\r\n.fa-facebook-messenger:before {\r\n  content: '\\f39f';\r\n}\r\n.fa-audible:before {\r\n  content: '\\f373';\r\n}\r\n.fa-think-peaks:before {\r\n  content: '\\f731';\r\n}\r\n.fa-bilibili:before {\r\n  content: '\\e3d9';\r\n}\r\n.fa-erlang:before {\r\n  content: '\\f39d';\r\n}\r\n.fa-x-twitter:before {\r\n  content: '\\e61b';\r\n}\r\n.fa-cotton-bureau:before {\r\n  content: '\\f89e';\r\n}\r\n.fa-dashcube:before {\r\n  content: '\\f210';\r\n}\r\n.fa-42-group:before,\r\n.fa-innosoft:before {\r\n  content: '\\e080';\r\n}\r\n.fa-stack-exchange:before {\r\n  content: '\\f18d';\r\n}\r\n.fa-elementor:before {\r\n  content: '\\f430';\r\n}\r\n.fa-pied-piper-square:before,\r\n.fa-square-pied-piper:before {\r\n  content: '\\e01e';\r\n}\r\n.fa-creative-commons-nd:before {\r\n  content: '\\f4eb';\r\n}\r\n.fa-palfed:before {\r\n  content: '\\f3d8';\r\n}\r\n.fa-superpowers:before {\r\n  content: '\\f2dd';\r\n}\r\n.fa-resolving:before {\r\n  content: '\\f3e7';\r\n}\r\n.fa-xbox:before {\r\n  content: '\\f412';\r\n}\r\n.fa-searchengin:before {\r\n  content: '\\f3eb';\r\n}\r\n.fa-tiktok:before {\r\n  content: '\\e07b';\r\n}\r\n.fa-facebook-square:before,\r\n.fa-square-facebook:before {\r\n  content: '\\f082';\r\n}\r\n.fa-renren:before {\r\n  content: '\\f18b';\r\n}\r\n.fa-linux:before {\r\n  content: '\\f17c';\r\n}\r\n.fa-glide:before {\r\n  content: '\\f2a5';\r\n}\r\n.fa-linkedin:before {\r\n  content: '\\f08c';\r\n}\r\n.fa-hubspot:before {\r\n  content: '\\f3b2';\r\n}\r\n.fa-deploydog:before {\r\n  content: '\\f38e';\r\n}\r\n.fa-twitch:before {\r\n  content: '\\f1e8';\r\n}\r\n.fa-ravelry:before {\r\n  content: '\\f2d9';\r\n}\r\n.fa-mixer:before {\r\n  content: '\\e056';\r\n}\r\n.fa-lastfm-square:before,\r\n.fa-square-lastfm:before {\r\n  content: '\\f203';\r\n}\r\n.fa-vimeo:before {\r\n  content: '\\f40a';\r\n}\r\n.fa-mendeley:before {\r\n  content: '\\f7b3';\r\n}\r\n.fa-uniregistry:before {\r\n  content: '\\f404';\r\n}\r\n.fa-figma:before {\r\n  content: '\\f799';\r\n}\r\n.fa-creative-commons-remix:before {\r\n  content: '\\f4ee';\r\n}\r\n.fa-cc-amazon-pay:before {\r\n  content: '\\f42d';\r\n}\r\n.fa-dropbox:before {\r\n  content: '\\f16b';\r\n}\r\n.fa-instagram:before {\r\n  content: '\\f16d';\r\n}\r\n.fa-cmplid:before {\r\n  content: '\\e360';\r\n}\r\n.fa-upwork:before {\r\n  content: '\\e641';\r\n}\r\n.fa-facebook:before {\r\n  content: '\\f09a';\r\n}\r\n.fa-gripfire:before {\r\n  content: '\\f3ac';\r\n}\r\n.fa-jedi-order:before {\r\n  content: '\\f50e';\r\n}\r\n.fa-uikit:before {\r\n  content: '\\f403';\r\n}\r\n.fa-fort-awesome-alt:before {\r\n  content: '\\f3a3';\r\n}\r\n.fa-phabricator:before {\r\n  content: '\\f3db';\r\n}\r\n.fa-ussunnah:before {\r\n  content: '\\f407';\r\n}\r\n.fa-earlybirds:before {\r\n  content: '\\f39a';\r\n}\r\n.fa-trade-federation:before {\r\n  content: '\\f513';\r\n}\r\n.fa-autoprefixer:before {\r\n  content: '\\f41c';\r\n}\r\n.fa-whatsapp:before {\r\n  content: '\\f232';\r\n}\r\n.fa-slideshare:before {\r\n  content: '\\f1e7';\r\n}\r\n.fa-google-play:before {\r\n  content: '\\f3ab';\r\n}\r\n.fa-viadeo:before {\r\n  content: '\\f2a9';\r\n}\r\n.fa-line:before {\r\n  content: '\\f3c0';\r\n}\r\n.fa-google-drive:before {\r\n  content: '\\f3aa';\r\n}\r\n.fa-servicestack:before {\r\n  content: '\\f3ec';\r\n}\r\n.fa-simplybuilt:before {\r\n  content: '\\f215';\r\n}\r\n.fa-bitbucket:before {\r\n  content: '\\f171';\r\n}\r\n.fa-imdb:before {\r\n  content: '\\f2d8';\r\n}\r\n.fa-deezer:before {\r\n  content: '\\e077';\r\n}\r\n.fa-raspberry-pi:before {\r\n  content: '\\f7bb';\r\n}\r\n.fa-jira:before {\r\n  content: '\\f7b1';\r\n}\r\n.fa-docker:before {\r\n  content: '\\f395';\r\n}\r\n.fa-screenpal:before {\r\n  content: '\\e570';\r\n}\r\n.fa-bluetooth:before {\r\n  content: '\\f293';\r\n}\r\n.fa-gitter:before {\r\n  content: '\\f426';\r\n}\r\n.fa-d-and-d:before {\r\n  content: '\\f38d';\r\n}\r\n.fa-microblog:before {\r\n  content: '\\e01a';\r\n}\r\n.fa-cc-diners-club:before {\r\n  content: '\\f24c';\r\n}\r\n.fa-gg-circle:before {\r\n  content: '\\f261';\r\n}\r\n.fa-pied-piper-hat:before {\r\n  content: '\\f4e5';\r\n}\r\n.fa-kickstarter-k:before {\r\n  content: '\\f3bc';\r\n}\r\n.fa-yandex:before {\r\n  content: '\\f413';\r\n}\r\n.fa-readme:before {\r\n  content: '\\f4d5';\r\n}\r\n.fa-html5:before {\r\n  content: '\\f13b';\r\n}\r\n.fa-sellsy:before {\r\n  content: '\\f213';\r\n}\r\n.fa-sass:before {\r\n  content: '\\f41e';\r\n}\r\n.fa-wirsindhandwerk:before,\r\n.fa-wsh:before {\r\n  content: '\\e2d0';\r\n}\r\n.fa-buromobelexperte:before {\r\n  content: '\\f37f';\r\n}\r\n.fa-salesforce:before {\r\n  content: '\\f83b';\r\n}\r\n.fa-octopus-deploy:before {\r\n  content: '\\e082';\r\n}\r\n.fa-medapps:before {\r\n  content: '\\f3c6';\r\n}\r\n.fa-ns8:before {\r\n  content: '\\f3d5';\r\n}\r\n.fa-pinterest-p:before {\r\n  content: '\\f231';\r\n}\r\n.fa-apper:before {\r\n  content: '\\f371';\r\n}\r\n.fa-fort-awesome:before {\r\n  content: '\\f286';\r\n}\r\n.fa-waze:before {\r\n  content: '\\f83f';\r\n}\r\n.fa-cc-jcb:before {\r\n  content: '\\f24b';\r\n}\r\n.fa-snapchat-ghost:before,\r\n.fa-snapchat:before {\r\n  content: '\\f2ab';\r\n}\r\n.fa-fantasy-flight-games:before {\r\n  content: '\\f6dc';\r\n}\r\n.fa-rust:before {\r\n  content: '\\e07a';\r\n}\r\n.fa-wix:before {\r\n  content: '\\f5cf';\r\n}\r\n.fa-behance-square:before,\r\n.fa-square-behance:before {\r\n  content: '\\f1b5';\r\n}\r\n.fa-supple:before {\r\n  content: '\\f3f9';\r\n}\r\n.fa-webflow:before {\r\n  content: '\\e65c';\r\n}\r\n.fa-rebel:before {\r\n  content: '\\f1d0';\r\n}\r\n.fa-css3:before {\r\n  content: '\\f13c';\r\n}\r\n.fa-staylinked:before {\r\n  content: '\\f3f5';\r\n}\r\n.fa-kaggle:before {\r\n  content: '\\f5fa';\r\n}\r\n.fa-space-awesome:before {\r\n  content: '\\e5ac';\r\n}\r\n.fa-deviantart:before {\r\n  content: '\\f1bd';\r\n}\r\n.fa-cpanel:before {\r\n  content: '\\f388';\r\n}\r\n.fa-goodreads-g:before {\r\n  content: '\\f3a9';\r\n}\r\n.fa-git-square:before,\r\n.fa-square-git:before {\r\n  content: '\\f1d2';\r\n}\r\n.fa-square-tumblr:before,\r\n.fa-tumblr-square:before {\r\n  content: '\\f174';\r\n}\r\n.fa-trello:before {\r\n  content: '\\f181';\r\n}\r\n.fa-creative-commons-nc-jp:before {\r\n  content: '\\f4ea';\r\n}\r\n.fa-get-pocket:before {\r\n  content: '\\f265';\r\n}\r\n.fa-perbyte:before {\r\n  content: '\\e083';\r\n}\r\n.fa-grunt:before {\r\n  content: '\\f3ad';\r\n}\r\n.fa-weebly:before {\r\n  content: '\\f5cc';\r\n}\r\n.fa-connectdevelop:before {\r\n  content: '\\f20e';\r\n}\r\n.fa-leanpub:before {\r\n  content: '\\f212';\r\n}\r\n.fa-black-tie:before {\r\n  content: '\\f27e';\r\n}\r\n.fa-themeco:before {\r\n  content: '\\f5c6';\r\n}\r\n.fa-python:before {\r\n  content: '\\f3e2';\r\n}\r\n.fa-android:before {\r\n  content: '\\f17b';\r\n}\r\n.fa-bots:before {\r\n  content: '\\e340';\r\n}\r\n.fa-free-code-camp:before {\r\n  content: '\\f2c5';\r\n}\r\n.fa-hornbill:before {\r\n  content: '\\f592';\r\n}\r\n.fa-js:before {\r\n  content: '\\f3b8';\r\n}\r\n.fa-ideal:before {\r\n  content: '\\e013';\r\n}\r\n.fa-git:before {\r\n  content: '\\f1d3';\r\n}\r\n.fa-dev:before {\r\n  content: '\\f6cc';\r\n}\r\n.fa-sketch:before {\r\n  content: '\\f7c6';\r\n}\r\n.fa-yandex-international:before {\r\n  content: '\\f414';\r\n}\r\n.fa-cc-amex:before {\r\n  content: '\\f1f3';\r\n}\r\n.fa-uber:before {\r\n  content: '\\f402';\r\n}\r\n.fa-github:before {\r\n  content: '\\f09b';\r\n}\r\n.fa-php:before {\r\n  content: '\\f457';\r\n}\r\n.fa-alipay:before {\r\n  content: '\\f642';\r\n}\r\n.fa-youtube:before {\r\n  content: '\\f167';\r\n}\r\n.fa-skyatlas:before {\r\n  content: '\\f216';\r\n}\r\n.fa-firefox-browser:before {\r\n  content: '\\e007';\r\n}\r\n.fa-replyd:before {\r\n  content: '\\f3e6';\r\n}\r\n.fa-suse:before {\r\n  content: '\\f7d6';\r\n}\r\n.fa-jenkins:before {\r\n  content: '\\f3b6';\r\n}\r\n.fa-twitter:before {\r\n  content: '\\f099';\r\n}\r\n.fa-rockrms:before {\r\n  content: '\\f3e9';\r\n}\r\n.fa-pinterest:before {\r\n  content: '\\f0d2';\r\n}\r\n.fa-buffer:before {\r\n  content: '\\f837';\r\n}\r\n.fa-npm:before {\r\n  content: '\\f3d4';\r\n}\r\n.fa-yammer:before {\r\n  content: '\\f840';\r\n}\r\n.fa-btc:before {\r\n  content: '\\f15a';\r\n}\r\n.fa-dribbble:before {\r\n  content: '\\f17d';\r\n}\r\n.fa-stumbleupon-circle:before {\r\n  content: '\\f1a3';\r\n}\r\n.fa-internet-explorer:before {\r\n  content: '\\f26b';\r\n}\r\n.fa-stubber:before {\r\n  content: '\\e5c7';\r\n}\r\n.fa-telegram-plane:before,\r\n.fa-telegram:before {\r\n  content: '\\f2c6';\r\n}\r\n.fa-old-republic:before {\r\n  content: '\\f510';\r\n}\r\n.fa-odysee:before {\r\n  content: '\\e5c6';\r\n}\r\n.fa-square-whatsapp:before,\r\n.fa-whatsapp-square:before {\r\n  content: '\\f40c';\r\n}\r\n.fa-node-js:before {\r\n  content: '\\f3d3';\r\n}\r\n.fa-edge-legacy:before {\r\n  content: '\\e078';\r\n}\r\n.fa-slack-hash:before,\r\n.fa-slack:before {\r\n  content: '\\f198';\r\n}\r\n.fa-medrt:before {\r\n  content: '\\f3c8';\r\n}\r\n.fa-usb:before {\r\n  content: '\\f287';\r\n}\r\n.fa-tumblr:before {\r\n  content: '\\f173';\r\n}\r\n.fa-vaadin:before {\r\n  content: '\\f408';\r\n}\r\n.fa-quora:before {\r\n  content: '\\f2c4';\r\n}\r\n.fa-square-x-twitter:before {\r\n  content: '\\e61a';\r\n}\r\n.fa-reacteurope:before {\r\n  content: '\\f75d';\r\n}\r\n.fa-medium-m:before,\r\n.fa-medium:before {\r\n  content: '\\f23a';\r\n}\r\n.fa-amilia:before {\r\n  content: '\\f36d';\r\n}\r\n.fa-mixcloud:before {\r\n  content: '\\f289';\r\n}\r\n.fa-flipboard:before {\r\n  content: '\\f44d';\r\n}\r\n.fa-viacoin:before {\r\n  content: '\\f237';\r\n}\r\n.fa-critical-role:before {\r\n  content: '\\f6c9';\r\n}\r\n.fa-sitrox:before {\r\n  content: '\\e44a';\r\n}\r\n.fa-discourse:before {\r\n  content: '\\f393';\r\n}\r\n.fa-joomla:before {\r\n  content: '\\f1aa';\r\n}\r\n.fa-mastodon:before {\r\n  content: '\\f4f6';\r\n}\r\n.fa-airbnb:before {\r\n  content: '\\f834';\r\n}\r\n.fa-wolf-pack-battalion:before {\r\n  content: '\\f514';\r\n}\r\n.fa-buy-n-large:before {\r\n  content: '\\f8a6';\r\n}\r\n.fa-gulp:before {\r\n  content: '\\f3ae';\r\n}\r\n.fa-creative-commons-sampling-plus:before {\r\n  content: '\\f4f1';\r\n}\r\n.fa-strava:before {\r\n  content: '\\f428';\r\n}\r\n.fa-ember:before {\r\n  content: '\\f423';\r\n}\r\n.fa-canadian-maple-leaf:before {\r\n  content: '\\f785';\r\n}\r\n.fa-teamspeak:before {\r\n  content: '\\f4f9';\r\n}\r\n.fa-pushed:before {\r\n  content: '\\f3e1';\r\n}\r\n.fa-wordpress-simple:before {\r\n  content: '\\f411';\r\n}\r\n.fa-nutritionix:before {\r\n  content: '\\f3d6';\r\n}\r\n.fa-wodu:before {\r\n  content: '\\e088';\r\n}\r\n.fa-google-pay:before {\r\n  content: '\\e079';\r\n}\r\n.fa-intercom:before {\r\n  content: '\\f7af';\r\n}\r\n.fa-zhihu:before {\r\n  content: '\\f63f';\r\n}\r\n.fa-korvue:before {\r\n  content: '\\f42f';\r\n}\r\n.fa-pix:before {\r\n  content: '\\e43a';\r\n}\r\n.fa-steam-symbol:before {\r\n  content: '\\f3f6';\r\n}\r\n:host,\r\n:root {\r\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 6 Free';\r\n}\r\n@font-face {\r\n  font-family: 'Font Awesome 6 Free';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-display: block;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.ttf) format('truetype');\r\n}\r\n.fa-regular,\r\n.far {\r\n  font-weight: 400;\r\n}\r\n:host,\r\n:root {\r\n  --fa-style-family-classic: 'Font Awesome 6 Free';\r\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 6 Free';\r\n}\r\n@font-face {\r\n  font-family: 'Font Awesome 6 Free';\r\n  font-style: normal;\r\n  font-weight: 900;\r\n  font-display: block;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.ttf) format('truetype');\r\n}\r\n.fa-solid,\r\n.fas {\r\n  font-weight: 900;\r\n}\r\n@font-face {\r\n  font-family: 'Font Awesome 5 Brands';\r\n  font-display: block;\r\n  font-weight: 400;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.ttf) format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Font Awesome 5 Free';\r\n  font-display: block;\r\n  font-weight: 900;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.ttf) format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Font Awesome 5 Free';\r\n  font-display: block;\r\n  font-weight: 400;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.ttf) format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  font-display: block;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.ttf) format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  font-display: block;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.ttf) format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  font-display: block;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.ttf) format('truetype');\r\n  unicode-range: u+f003, u+f006, u+f014, u+f016-f017, u+f01a-f01b, u+f01d, u+f022, u+f03e, u+f044,\r\n    u+f046, u+f05c-f05d, u+f06e, u+f070, u+f087-f088, u+f08a, u+f094, u+f096-f097, u+f09d, u+f0a0,\r\n    u+f0a2, u+f0a4-f0a7, u+f0c5, u+f0c7, u+f0e5-f0e6, u+f0eb, u+f0f6-f0f8, u+f10c, u+f114-f115,\r\n    u+f118-f11a, u+f11c-f11d, u+f133, u+f147, u+f14e, u+f150-f152, u+f185-f186, u+f18e, u+f190-f192,\r\n    u+f196, u+f1c1-f1c9, u+f1d9, u+f1db, u+f1e3, u+f1ea, u+f1f7, u+f1f9, u+f20a, u+f247-f248, u+f24a,\r\n    u+f24d, u+f255-f25b, u+f25d, u+f271-f274, u+f278, u+f27b, u+f28c, u+f28e, u+f29c, u+f2b5, u+f2b7,\r\n    u+f2ba, u+f2bc, u+f2be, u+f2c0-f2c1, u+f2c3, u+f2d0, u+f2d2, u+f2d4, u+f2dc;\r\n}\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  font-display: block;\r\n  src:\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.woff2) format('woff2'),\r\n    url(../fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.ttf) format('truetype');\r\n  unicode-range: u+f041, u+f047, u+f065-f066, u+f07d-f07e, u+f080, u+f08b, u+f08e, u+f090, u+f09a,\r\n    u+f0ac, u+f0ae, u+f0b2, u+f0d0, u+f0d6, u+f0e4, u+f0ec, u+f10a-f10b, u+f123, u+f13e, u+f148-f149,\r\n    u+f14c, u+f156, u+f15e, u+f160-f161, u+f163, u+f175-f178, u+f195, u+f1f8, u+f219, u+f27a;\r\n}\r\n","@import './vars.header';\r\n\r\n.header {\r\n  background-color: $backColour;\r\n  max-width: $widthHeader;\r\n  position: absolute;\r\n  border-radius: $sizeRadiusBody 0px 0px $sizeRadiusBody;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  .header__top {\r\n    z-index: 1000;\r\n    height: 100%;\r\n  }\r\n\r\n  .btn__menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: $widthHeader;\r\n    height: $widthHeader;\r\n    box-shadow:\r\n      0 1px 0 0 transparent,\r\n      inset 0 -1px 0 0 #3b3b3b;\r\n  }\r\n  .btn__menu svg {\r\n    transition: all 0.3s;\r\n  }\r\n  .btn__menu:hover {\r\n    svg {\r\n      fill: #171717;\r\n      stroke: #171717;\r\n    }\r\n  }\r\n  .btn__menu:first-child:hover {\r\n    svg {\r\n      fill: $colorHeaderIcons;\r\n      stroke: $colorHeaderIcons;\r\n    }\r\n  }\r\n  .svg__logo {\r\n    width: calc($widthHeader/2);\r\n    height: calc($widthHeader/2);\r\n  }\r\n  .open__login {\r\n    .login__btn {\r\n      background: #474747;\r\n      position: relative;\r\n      z-index: 550;\r\n      .icon-login,\r\n      .icon-login_m,\r\n      .user-avatar,\r\n      .admin-avatar {\r\n        transform: scale(0.5, 0.5) !important;\r\n        opacity: 0 !important;\r\n        transition: all 0.2s ease-in-out;\r\n      }\r\n\r\n      .btn__close {\r\n        transform: scale(1, 1) !important;\r\n        opacity: 1 !important;\r\n        transition: all 0.2s ease-in-out;\r\n      }\r\n    }\r\n    .drop__panel {\r\n      opacity: 1 !important;\r\n      visibility: visible !important;\r\n      z-index: 500 !important;\r\n      transition: all 0.2s ease-in-out;\r\n    }\r\n  }\r\n  .login__panel {\r\n    .login__btn {\r\n      cursor: pointer;\r\n    }\r\n    .btn__menu:hover {\r\n      svg {\r\n        fill: #171717;\r\n        stroke: #171717;\r\n      }\r\n    }\r\n\r\n    .login-panel {\r\n      display: none;\r\n      .login-avatar {\r\n        display: flex;\r\n        img {\r\n          width: 100px;\r\n          height: 100px;\r\n          margin: 12px auto;\r\n          border-radius: 50%;\r\n          border: 5px #fff solid;\r\n          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\r\n        }\r\n      }\r\n      .login-name {\r\n        font-family: 'GothamPro-Bold';\r\n        font-size: 1.2em;\r\n        max-width: fit-content;\r\n        margin: 0 auto;\r\n        transition: all 0.2s;\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n      .login-menu {\r\n        display: flex;\r\n        position: relative;\r\n        flex-direction: column;\r\n        margin: 25px 0px;\r\n        border-bottom: 1px solid rgba(255, 255, 255, 0.2);\r\n        a {\r\n          padding: 14px 0px;\r\n          color: rgba(255, 255, 255);\r\n          opacity: 0.7;\r\n          border-top: 1px solid rgba(255, 255, 255, 0.2);\r\n          transition: all 0.3s;\r\n          &:hover {\r\n            opacity: 1;\r\n          }\r\n          i {\r\n            margin-right: 10px;\r\n          }\r\n          b {\r\n            font-family: 'GothamPro-Bold';\r\n          }\r\n          .count-messages {\r\n            position: absolute;\r\n            right: 0;\r\n          }\r\n          .span-login {\r\n            position: absolute;\r\n            right: 0;\r\n            font-family: 'GothamPro-Bold';\r\n          }\r\n        }\r\n      }\r\n      .logout {\r\n        max-width: fit-content;\r\n        margin: 0 auto;\r\n        transition: all 0.2s;\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n        i {\r\n          margin-right: 4px;\r\n        }\r\n      }\r\n    }\r\n    .drop__panel {\r\n      position: absolute;\r\n      opacity: 0;\r\n      visibility: hidden;\r\n      margin-left: 80px;\r\n      top: 80px;\r\n      z-index: -2;\r\n      background-color: #474747;\r\n      box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.4);\r\n      color: #fff;\r\n      width: 290px;\r\n      padding: 25px;\r\n      transition: all 0.2s ease-in-out;\r\n      .social__links {\r\n        display: flex;\r\n        margin-bottom: 20px;\r\n        a {\r\n          margin-left: 10px;\r\n          border-radius: 10%;\r\n          padding: 4px;\r\n          transition: all ease 0.2s;\r\n        }\r\n        a:hover {\r\n          transform: scale(1.2, 1.2);\r\n        }\r\n        .social__yandex {\r\n          max-height: 21px;\r\n          min-width: 21px;\r\n          background-color: #fff;\r\n          color: #ff0202;\r\n          text-align: center;\r\n        }\r\n        .social__google {\r\n          background-color: #db4a39;\r\n          padding: 4px 6px;\r\n          display: flex;\r\n          margin-left: 12px;\r\n          align-items: center;\r\n          .icon-gp {\r\n            fill: #fff;\r\n            width: 18px;\r\n            height: 1em;\r\n          }\r\n        }\r\n      }\r\n      label {\r\n        margin-bottom: 0.4em;\r\n      }\r\n      input {\r\n        margin-bottom: 20px;\r\n        width: calc(100% - 32px);\r\n        border-radius: 4px;\r\n        line-height: 22px;\r\n        background: #343434bf;\r\n        border: 1px solid #313131;\r\n        box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.06);\r\n        padding: 8px 15px;\r\n        color: #ccc;\r\n      }\r\n      input::placeholder {\r\n        opacity: 0.6;\r\n      }\r\n      label,\r\n      input {\r\n        display: block;\r\n      }\r\n      .form__footer {\r\n        margin-top: 25px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        a:hover {\r\n          text-decoration: underline;\r\n          transition: all 0.3s;\r\n        }\r\n        .sign__up {\r\n          font-family: 'GothamPro-Bold' !important;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .icon-login {\r\n    width: 34px;\r\n    height: 38px;\r\n    fill: $colorHeaderIcons;\r\n    stroke: $colorHeaderIcons;\r\n  }\r\n  .icon-login_m {\r\n    display: none;\r\n    fill: $colorHeaderIcons;\r\n    stroke: $colorHeaderIcons;\r\n    width: 24px;\r\n    height: 26px;\r\n  }\r\n  .user-avatar {\r\n    display: none;\r\n  }\r\n  .admin-avatar {\r\n    display: none;\r\n  }\r\n  .user-avatar,\r\n  .admin-avatar {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .btn__close {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    transform: scale(0.5, 0.5);\r\n    opacity: 0;\r\n    transition: all 0.2s ease-in;\r\n    i {\r\n      width: 100%;\r\n      height: 3px;\r\n      position: absolute;\r\n      background-color: #fff;\r\n      border-radius: 2px;\r\n    }\r\n    .line1 {\r\n      transform: rotate(45deg);\r\n    }\r\n    .line2 {\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n  .btn__burger {\r\n    padding: 20px;\r\n    width: calc($widthHeader/2);\r\n    height: calc($widthHeader/2);\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 300;\r\n    background: #474747;\r\n  }\r\n\r\n  .btn__burger:hover {\r\n    .burger {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .burger {\r\n    position: relative;\r\n    align-items: center;\r\n    width: calc($widthHeader/2);\r\n    height: calc($widthHeader/2);\r\n    justify-content: center;\r\n    display: flex;\r\n    transition: all 0.3s;\r\n    flex-direction: column;\r\n    opacity: 0.4;\r\n  }\r\n\r\n  .burger.change {\r\n    opacity: 1;\r\n    .burger__line {\r\n      background-color: transparent;\r\n    }\r\n    .burger__line:before,\r\n    .burger__line:after {\r\n      top: 0;\r\n      background-color: #fff;\r\n    }\r\n    .burger__line:before {\r\n      transform: rotate(-45deg);\r\n    }\r\n    .burger__line:after {\r\n      transform: rotate(45deg);\r\n    }\r\n  }\r\n  .burger__line {\r\n    height: 3px;\r\n    width: 100%;\r\n    background-color: #1a1a1a;\r\n    border-radius: 2px;\r\n    transition: all 0.3s;\r\n    position: absolute;\r\n  }\r\n  .burger__line:before,\r\n  .burger__line:after {\r\n    height: 3px;\r\n    width: 100%;\r\n    content: '';\r\n    background-color: #1a1a1a;\r\n    border-radius: 2px;\r\n    transition: all 0.3s;\r\n    position: absolute;\r\n  }\r\n  .burger__line:before {\r\n    top: -9px;\r\n  }\r\n  .burger__line:after {\r\n    top: 9px;\r\n  }\r\n  .open__theme {\r\n    .btn__close {\r\n      transform: scale(1, 1) !important;\r\n      opacity: 1 !important;\r\n      transition: all 0.2s ease-in-out;\r\n    }\r\n    .icon-skin_ {\r\n      transform: scale(0.5, 0.5) !important;\r\n      opacity: 0 !important;\r\n      transition: all 0.2s ease-in-out;\r\n    }\r\n    .icon-skin_m {\r\n      transform: scale(0.5, 0.5) !important;\r\n      opacity: 0 !important;\r\n      transition: all 0.2s ease-in-out;\r\n    }\r\n    .themes__pop-up {\r\n      visibility: visible !important;\r\n      opacity: 1 !important;\r\n      transform: translate(0, 0) scale(1) !important;\r\n      transition:\r\n        opacity 0.125s ease-in-out,\r\n        transform 0.225s ease-in-out;\r\n    }\r\n  }\r\n  .header__themes {\r\n    display: flex;\r\n    align-items: center;\r\n    .header__theme {\r\n      z-index: 401;\r\n      cursor: pointer;\r\n    }\r\n    .themes__pop-up {\r\n      position: absolute;\r\n      opacity: 0;\r\n      padding: 0;\r\n      left: 80px;\r\n      max-width: 60px;\r\n      visibility: hidden;\r\n      z-index: 400;\r\n      list-style: none;\r\n      transform: translate(-50%, 0) scale(0.7);\r\n      transition:\r\n        opacity 0.125s ease-in-out,\r\n        visibility 0.125s ease-in-out,\r\n        transform 0.225s ease-in-out;\r\n      .active {\r\n        cursor: default;\r\n        a {\r\n          pointer-events: none;\r\n        }\r\n        span {\r\n          box-shadow: inset 0 0 0 3px currentColor !important;\r\n          svg {\r\n            opacity: 1;\r\n          }\r\n        }\r\n      }\r\n      li {\r\n        position: relative;\r\n        margin-left: 20px;\r\n        width: 38px;\r\n        height: 38px;\r\n        background-color: #3f4a5f;\r\n        border-radius: 50%;\r\n        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);\r\n        padding: 3px;\r\n        cursor: pointer;\r\n      }\r\n      a {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n      }\r\n      a:hover {\r\n        span {\r\n          box-shadow: inset 0 0 0 6px currentColor !important;\r\n        }\r\n      }\r\n      span {\r\n        width: 24px;\r\n        height: 24px;\r\n        padding: 7px;\r\n        border-radius: 50%;\r\n        transition: box-shadow 0.2s ease;\r\n        svg {\r\n          opacity: 0;\r\n        }\r\n      }\r\n      .theme__green {\r\n        span {\r\n          box-shadow: inset 0 0 0 8px #95ac7c;\r\n          background-color: #f3f3f3;\r\n          color: #95ac7c;\r\n        }\r\n      }\r\n      .theme__dgreen {\r\n        span {\r\n          box-shadow: inset 0 0 0 8px #95ac7c;\r\n          background-color: #474747;\r\n          color: #95ac7c;\r\n        }\r\n      }\r\n      .theme__dblue {\r\n        span {\r\n          box-shadow: inset 0 0 0 8px #6182b5;\r\n          background-color: #374b69;\r\n          color: #6182b5;\r\n        }\r\n      }\r\n      .theme__amoled {\r\n        span {\r\n          box-shadow: inset 0 0 0 8px #c58af9;\r\n          background-color: #19191a;\r\n          color: #c58af9;\r\n        }\r\n      }\r\n\r\n      > li + li {\r\n        margin-bottom: 4px;\r\n      }\r\n      li:last-child,\r\n      li:first-child {\r\n        margin-left: 4px;\r\n      }\r\n    }\r\n    .icon-skin_ {\r\n      fill: $colorHeaderIcons;\r\n      height: 48px;\r\n      width: 48px;\r\n    }\r\n    .icon-skin_m {\r\n      fill: $colorHeaderIcons;\r\n      height: 32px;\r\n      width: 32px;\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .header__upper {\r\n    width: $widthHeader;\r\n    height: $widthHeader;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 1001;\r\n  }\r\n  .header__upper svg {\r\n    width: calc($widthHeader/4);\r\n    fill: #3b3a3a;\r\n    height: $widthHeader;\r\n  }\r\n  .header__upper:hover {\r\n    svg {\r\n      fill: #a9a9a9;\r\n      stroke: #a9a9a9;\r\n    }\r\n  }\r\n}\r\n.menu {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  margin-left: 80px;\r\n  padding: 0;\r\n  position: absolute;\r\n  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.4);\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 290px;\r\n  background: #474747;\r\n  background-color: #474747;\r\n  transition: all 0.3s ease-in-out;\r\n  user-select: none;\r\n  z-index: -1;\r\n  form {\r\n    display: flex;\r\n    align-items: center;\r\n    box-shadow:\r\n      0 1px 0 0 rgba(255, 255, 255, 0.2),\r\n      inset 0 -1px 0 0 rgba(0, 0, 0, 0.06);\r\n    .search__bar {\r\n      height: 80px;\r\n      width: 290px;\r\n      line-height: 24px;\r\n      border: 0;\r\n      background: 0;\r\n      color: #ccc !important;\r\n      padding: 28px 68px 28px 25px;\r\n      font-family: 'GothamPro-Light';\r\n      font-weight: 600;\r\n      font-size: 14px;\r\n    }\r\n    .search__icon {\r\n      position: absolute;\r\n      right: 0;\r\n      width: 40px;\r\n      height: 40px;\r\n      margin-right: 14px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      cursor: pointer;\r\n\r\n      .icon {\r\n        fill: #fff;\r\n        opacity: 0.7;\r\n        width: 18px;\r\n        height: 18px;\r\n      }\r\n    }\r\n    .search__icon:hover {\r\n      .icon-search {\r\n        opacity: 1;\r\n        transition: opacity 0.3s;\r\n      }\r\n    }\r\n  }\r\n  nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 15px 0;\r\n    .active {\r\n      opacity: 1 !important;\r\n      cursor: default;\r\n      font-family: 'GothamPro-Bold' !important;\r\n    }\r\n    .nav__link {\r\n      padding: 10px 25px;\r\n      font-family: 'GothamPro-Light';\r\n      font-weight: 600;\r\n      color: #fff;\r\n      opacity: 0.7;\r\n      i {\r\n        margin-right: 10px;\r\n      }\r\n    }\r\n    .nav__link:hover {\r\n      opacity: 1;\r\n      transition: all 0.3s;\r\n    }\r\n    .nav__border {\r\n      margin: 10px 0;\r\n      border-bottom: 1px solid #ffffff33;\r\n    }\r\n  }\r\n}\r\n.menu.change {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  z-index: 200;\r\n}\r\n.menu.modify {\r\n  max-height: calc(100% - 30px);\r\n}\r\n\r\n@import './header-media';\r\n","$bodyColour: #3b3a3a;\r\n$backColour: #474747;\r\n$sizeRadiusBody: 8px;\r\n$widthHeader: 80px;\r\n$colorHeaderIcons: #323232;\r\n\r\n","@import '../vars';\r\n\r\n.authorized {\r\n  .icon-login,\r\n  .icon-login_m {\r\n    display: none !important;\r\n  }\r\n  .user-avatar {\r\n    display: block;\r\n  }\r\n  .admin {\r\n    .user-avatar {\r\n      display: none;\r\n    }\r\n    .admin-avatar {\r\n      display: block;\r\n    }\r\n    .admin-img {\r\n      display: block !important;\r\n    }\r\n    .avatar {\r\n      display: none;\r\n    }\r\n  }\r\n  .login-panel {\r\n    display: block !important;\r\n    .admin-img {\r\n      display: none;\r\n    }\r\n  }\r\n  .unauth {\r\n    display: none;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_xxl) {\r\n  .authorized {\r\n    .user-avatar {\r\n      width: 26px;\r\n      height: 26px;\r\n    }\r\n    .admin {\r\n      .user-avatar {\r\n        display: none;\r\n      }\r\n      .admin-avatar {\r\n        width: 26px;\r\n        height: 26px;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import '../vars';\r\n@import './vars.header';\r\n@import './header-auth';\r\n\r\n@media (max-width: $breakpoint_xxl) {\r\n  .header {\r\n    width: calc($widthHeader - 20px);\r\n    .btn__menu {\r\n      width: calc($widthHeader - 20px);\r\n      height: calc($widthHeader - 20px);\r\n    }\r\n    .svg__logo {\r\n      width: 1.8rem;\r\n      height: 1.8rem;\r\n    }\r\n    .login__btn:hover {\r\n      .icon-login_m {\r\n        fill: #171717;\r\n        stroke: #171717;\r\n      }\r\n    }\r\n    .icon-login {\r\n      display: none;\r\n    }\r\n    .icon-login_m {\r\n      display: block;\r\n    }\r\n    .btn__close {\r\n      width: 26px;\r\n      height: 26px;\r\n    }\r\n    .drop__panel {\r\n      margin-left: calc($widthHeader - 20px) !important;\r\n      top: calc($widthHeader - 20px) !important;\r\n      max-width: 240px;\r\n    }\r\n    .btn__burger {\r\n      width: 26px;\r\n      height: 26px;\r\n      padding: 17px;\r\n    }\r\n    .burger {\r\n      width: 26px;\r\n      height: 26px;\r\n    }\r\n    .burger__line:before {\r\n      top: -7px;\r\n    }\r\n    .burger__line:after {\r\n      top: 7px;\r\n    }\r\n    .themes__pop-up {\r\n      left: calc($widthHeader - 20px) !important;\r\n    }\r\n    .icon-skin_ {\r\n      display: none;\r\n    }\r\n    .icon-skin_m {\r\n      display: block !important;\r\n    }\r\n    .header__upper {\r\n      width: calc($widthHeader - 20px);\r\n      height: calc($widthHeader - 20px);\r\n    }\r\n    .header__upper svg {\r\n      height: calc($widthHeader - 20px);\r\n      fill: $colorHeaderIcons;\r\n    }\r\n  }\r\n  .menu {\r\n    margin-left: calc($widthHeader - 20px);\r\n    input {\r\n      height: 60px !important;\r\n      padding: 18px 68px 18px 25px !important;\r\n    }\r\n  }\r\n  .menu.modify {\r\n    max-height: calc(100% - 10px);\r\n  }\r\n}\r\n@media (max-width: $breakpoint_md) {\r\n  .menu.modify {\r\n    max-height: 100%;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_sm) {\r\n  .header {\r\n    border-radius: 0;\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100vw;\r\n    height: 60px;\r\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\r\n    .header__top {\r\n      width: 100%;\r\n      display: flex;\r\n      .btn__menu {\r\n        box-shadow: none;\r\n      }\r\n      .drop__panel {\r\n        margin-left: 0 !important;\r\n        position: fixed;\r\n        left: 0;\r\n        bottom: 0;\r\n        padding: 20px;\r\n        background: #474747;\r\n        min-width: calc(100% - 40px) !important;\r\n        box-shadow: none;\r\n      }\r\n      .btn__burger {\r\n        position: absolute;\r\n        background-color: transparent;\r\n        right: 0;\r\n        z-index: 10000;\r\n      }\r\n      .open__theme {\r\n        .themes__pop-up {\r\n          transform: translate(0, 30%) scale(1) !important;\r\n        }\r\n      }\r\n      \r\n      .themes__pop-up {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        top: calc($widthHeader - 30px);\r\n        left: calc(($widthHeader - 20px) * 2) !important;\r\n        transform: translate(0, -50%) scale(0.7) !important;\r\n        li{\r\n          &:first-child,&:last-child{\r\n            margin-top: -35px;\r\n            z-index: 10000;\r\n            position: relative;\r\n          }\r\n          margin-left: 0;\r\n        }\r\n      }\r\n      menu{\r\n        input{\r\n          padding-left: 20px;\r\n        }\r\n      }\r\n    }\r\n    .header__upper {\r\n      display: none;\r\n    }\r\n  }\r\n  .header:before {\r\n    content: '';\r\n    min-width: 100%;\r\n    top: 60px;\r\n    position: absolute;\r\n    z-index: 99999;\r\n    height: 8px;\r\n    background-image: -webkit-linear-gradient(\r\n      bottom,\r\n      rgba(0, 0, 0, 0) 0%,\r\n      rgba(0, 0, 0, 0.14) 100%\r\n    );\r\n  }\r\n  .menu {\r\n    margin-left: 0;\r\n    z-index: 900;\r\n    position: fixed;\r\n    top: calc($widthHeader - 20px);\r\n    box-shadow: none;\r\n    min-width: 100% !important;\r\n  }\r\n}\r\n","@import '../vars';\r\n\r\n.tab-content {\r\n  .genre,\r\n  .language {\r\n    &:hover {\r\n      opacity: 1;\r\n    }\r\n    padding: 10px 35px;\r\n    padding-top: 15px;\r\n    display: block;\r\n    opacity: 0.7;\r\n    border-bottom: 1px solid #3b3b3b;\r\n    transition: all 0.3s;\r\n    h3 {\r\n      font-family: 'GothamPro-Bold';\r\n      letter-spacing: -0.01em;\r\n      line-height: 1.35em;\r\n      font-size: 1.1em;\r\n    }\r\n    p {\r\n      font-size: 12px;\r\n    }\r\n    &:last-child {\r\n      border-width: 0;\r\n      margin-bottom: 16px;\r\n    }\r\n  }\r\n  .title-stripes {\r\n    opacity: 0.7;\r\n  }\r\n  .language-description {\r\n    padding: 10px 35px;\r\n    color: #999;\r\n    padding-top: 15px;\r\n    border-bottom: 1px solid #3b3b3b;\r\n    span {\r\n      font-family: 'GothamPro-Bold';\r\n      letter-spacing: -0.01em;\r\n      line-height: 1.35em;\r\n      font-size: 1.1em;\r\n    }\r\n    em {\r\n      opacity: 1.1;\r\n      display: block;\r\n      text-align: right;\r\n      font-size: 12px;\r\n    }\r\n    &:last-child {\r\n      border-width: 0;\r\n      margin-bottom: 16px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: $breakpoint_xxl) {\r\n  .genre,\r\n  .language,\r\n  .language-description {\r\n    padding: 10px 30px !important;\r\n    padding-top: 20px !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_sm) {\r\n  .genre,\r\n  .language,\r\n  .language-description {\r\n    padding: 10px 20px !important;\r\n  }\r\n}\r\n","@import '../vars';\r\n\r\n.dotted-line {\r\n  margin-top: 20px;\r\n  border-bottom: 2px dashed #3b3b3b;\r\n}\r\n.tag {\r\n  display: inline-block;\r\n  margin-bottom: 3px;\r\n  background-color: #606060;\r\n  padding: 5px 10px;\r\n  border-radius: 6px;\r\n  transition: all 0.2s;\r\n  &:hover {\r\n    background-color: #4e4d4d;\r\n    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);\r\n    position: relative;\r\n    color: #bebebe;\r\n  }\r\n}\r\n","@import '../vars';\r\n@import './style.genre&languages';\r\n@import './style.tagsCatalog-authors';\r\n\r\n\r\n.tags-tabs {\r\n  margin: 35px auto;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 1px solid #3b3b3b;\r\n  border-radius: 15px;\r\n  width: fit-content;\r\n  height: 28px;\r\n  overflow: hidden;\r\n  a {\r\n    &:first-child {\r\n      border-width: 0;\r\n    }\r\n    &:hover {\r\n      color: #bdbdbd;\r\n    }\r\n    font-size: 11px;\r\n    border-left: 1px solid #3b3b3b;\r\n    font-family: 'GothamPro-Bold';\r\n    padding: 8px 12px;\r\n    color: #999;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    transition: 0.2s color;\r\n  }\r\n  .tags-active {\r\n    color: #ccc;\r\n    pointer-events: none;\r\n  }\r\n}\r\n\r\n.tags-aside-title {\r\n  font-size: 1.2em;\r\n  font-family: 'GothamPro-Bold';\r\n  letter-spacing: -0.01em;\r\n  line-height: 1.35em;\r\n  margin: 2em 0 0.8em;\r\n}\r\n\r\n\r\n@media (max-width: $breakpoint_xxl) {\r\n  .tags-tabs {\r\n    margin: 30px auto;\r\n  }\r\n}\r\n@media (max-width: $breakpoint_sm) {\r\n  .tags-tabs {\r\n    margin: 20px auto;\r\n  }\r\n}\r\n",".contacts-title {\r\n  font-size: 1.8em;\r\n  margin-bottom: 0.8em;\r\n  letter-spacing: -0.01em;\r\n  line-height: 1.35em;\r\n  font-family: 'GothamPro-Bold';\r\n}\r\n.email-admin {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n  svg {\r\n    width: 16px;\r\n    height: 14px;\r\n    fill: #8a8a8a;\r\n    vertical-align: middle;\r\n  }\r\n  h3 {\r\n    font-size: 14px;\r\n  }\r\n}\r\n.link-admin {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n  margin: 10px 0 15px 0;\r\n  i {\r\n    color: #8a8a8a;\r\n  }\r\n  a {\r\n    color: #4a8bdb;\r\n    &:hover {\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n}\r\n.contacts-header {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  padding: 35px;\r\n  align-items: center;\r\n  border-bottom: 2px dashed #3b3b3b;\r\n  h1 {\r\n    font-size: 54px;\r\n    line-height: 1.3;\r\n    font-family: 'GothamPro-Bold';\r\n  }\r\n  p {\r\n    font-size: 16px;\r\n  }\r\n  .btn-container {\r\n    text-align: end;\r\n  }\r\n}\r\n.questions {\r\n  list-style: none;\r\n  .answer-open {\r\n    a {\r\n      span {\r\n        transform: rotate(45deg);\r\n        &::after,\r\n        &:before {\r\n          background-color: #d55c3b;\r\n        }\r\n      }\r\n    }\r\n    .answer {\r\n      display: block;\r\n    }\r\n  }\r\n  li {\r\n    padding-left: 36px;\r\n    padding: 16px 0 16px 36px;\r\n    border-bottom: 1px solid #3b3b3b;\r\n    &:last-child {\r\n      border-width: 0;\r\n    }\r\n    a {\r\n      cursor: pointer;\r\n      line-height: 1.3;\r\n      font-family: 'GothamPro-Bold';\r\n      span {\r\n        &::after {\r\n          content: '';\r\n          height: 3px;\r\n          width: 15px;\r\n          background-color: #95ac7c;\r\n          position: absolute;\r\n          border-radius: 2px;\r\n          transition: background-color 0.3s ease;\r\n        }\r\n        cursor: pointer;\r\n        position: absolute;\r\n        margin-left: -36px;\r\n        margin-top: -1px;\r\n        width: 15px;\r\n        height: 15px;\r\n        padding: 4px;\r\n        display: inline-flex;\r\n        align-items: center;\r\n        transition: transform 0.3s ease;\r\n        &::before {\r\n          content: '';\r\n          height: 3px;\r\n          width: 15px;\r\n          transition: background-color 0.3s ease;\r\n\r\n          background-color: #95ac7c;\r\n          position: absolute;\r\n          transform: rotate(90deg);\r\n          border-radius: 2px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .answer {\r\n      display: none;\r\n      margin-top: 6px;\r\n      a {\r\n        color: #4a8bdb;\r\n        font-family: 'GothamPro-Light';\r\n        font-size: 14px;\r\n        font-weight: 600;\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n      span {\r\n        font-family: 'GothamPro-Bold';\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: $breakpoint_md) {\r\n  .contacts-title {\r\n    font-size: 1.3em;\r\n  }\r\n  .contacts-header {\r\n    padding: 20px;\r\n    h1 {\r\n      font-size: 46px;\r\n    }\r\n  }\r\n}\r\n@media (max-width: $breakpoint_sm) {\r\n  .contacts-header {\r\n    grid-template-columns: 1fr;\r\n    justify-content: center;\r\n    text-align: center;\r\n    gap: 15px;\r\n    .btn-container {\r\n      text-align: center;\r\n      margin-top: 10px;\r\n    }\r\n  }\r\n}\r\n","@import '../vars';\r\n\r\n.rules {\r\n  h1 {\r\n    font-size: 1.8em;\r\n    margin-bottom: 0.8em;\r\n    letter-spacing: -0.01em;\r\n    line-height: 1.35em;\r\n    font-family: 'GothamPro-Bold';\r\n  }\r\n  p {\r\n    margin-bottom: 20px;\r\n    a {\r\n      color: #4a8bdb;\r\n      &:hover {\r\n        text-decoration: underline;\r\n      }\r\n    }\r\n  }\r\n  h3 {\r\n    margin-bottom: 20px;\r\n    font-family: 'GothamPro-Bold';\r\n    font-size: 14px;\r\n  }\r\n  .rules-list{\r\n    margin-bottom: 20px;\r\n    p{\r\n      margin-bottom: 0px;\r\n    }\r\n  }\r\n  span{\r\n    font-family: 'GothamPro-Bold';\r\n\r\n  }\r\n  min-height: 1000px;\r\n}\r\n","@import '../vars';\r\n\r\n.btns-registration {\r\n  justify-content: center;\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-top: 30px;\r\n}\r\n.reg-suc {\r\n  .registration-success {\r\n    display: block !important;\r\n  }\r\n}\r\n.reg-fail {\r\n  .registration-failed {\r\n    display: block !important;\r\n  }\r\n}\r\n.registration-result {\r\n  .registration-success,\r\n  .registration-failed {\r\n    background-color: #373737;\r\n    border-radius: 4px;\r\n    padding: 20px 25px;\r\n  }\r\n  .registration-success {\r\n    display: none;\r\n  }\r\n  .registration-failed {\r\n    display: none;\r\n  }\r\n}\r\n.registration {\r\n  h1 {\r\n    font-size: 1.8em;\r\n    margin-bottom: 0.8em;\r\n    letter-spacing: -0.01em;\r\n    line-height: 1.35em;\r\n    font-family: 'GothamPro-Bold';\r\n  }\r\n  h3 {\r\n    font-family: 'GothamPro-Bold';\r\n    margin-bottom: 25px;\r\n    font-size: 14px;\r\n  }\r\n  p {\r\n    margin-bottom: 1.5em;\r\n    a {\r\n      color: #4a8bdb;\r\n      &:hover {\r\n        text-decoration: underline;\r\n      }\r\n    }\r\n  }\r\n  form {\r\n    label {\r\n      display: block;\r\n      margin-bottom: 0.4em;\r\n      &:after {\r\n        content: '*';\r\n        margin-left: 10px;\r\n        color: #e85319;\r\n      }\r\n      span {\r\n        font-size: 12px;\r\n        color: #999;\r\n      }\r\n    }\r\n    input {\r\n      display: inline-block;\r\n      box-sizing: border-box;\r\n      width: 100%;\r\n      margin-bottom: 20px;\r\n      line-height: 22px;\r\n      background: #343434bf;\r\n      border: 1px solid #313131;\r\n      border-radius: 4px;\r\n      box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.06);\r\n      padding: 8px 15px;\r\n      color: #ccc;\r\n    }\r\n    .registration-text {\r\n      div {\r\n        display: block !important;\r\n      }\r\n    }\r\n    .registration-login {\r\n      position: relative;\r\n      margin-bottom: 20px;\r\n      input {\r\n        margin-bottom: 0px;\r\n      }\r\n      .red {\r\n        color: red;\r\n      }\r\n      .green {\r\n        color: green;\r\n      }\r\n      div {\r\n        margin-bottom: 0px;\r\n        display: none;\r\n        transition: all 0.2s;\r\n      }\r\n    }\r\n    #registration-login {\r\n      padding-right: 120px;\r\n    }\r\n    #registration-email {\r\n      margin-bottom: 30px;\r\n    }\r\n    .btn-check {\r\n      position: absolute;\r\n      cursor: pointer;\r\n      right: 0;\r\n      width: 100px;\r\n      height: 30px;\r\n      padding: 4px 10px;\r\n      color: #95ac7c;\r\n      font-family: 'GothamPro-Bold';\r\n      text-transform: uppercase;\r\n      font-size: 11px;\r\n      text-align: center;\r\n      background-color: #404040;\r\n      border: 1px solid #383838;\r\n      border-radius: 20px;\r\n      line-height: 20px;\r\n      margin: 5px;\r\n      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);\r\n      box-sizing: border-box;\r\n    }\r\n    .submit-registration {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  em {\r\n    font-size: 12px;\r\n    color: #999;\r\n  }\r\n  \r\n}\r\n\r\n\r\n@media (max-width: $breakpoint_md) {\r\n  h1 {\r\n    font-size: 1.3em !important;\r\n  }\r\n  \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/index.html":
/*!******************************!*\
  !*** ./src/pages/index.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/avatar.jpg */ "./src/img/avatar.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/admin.jpg */ "./src/img/admin.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/i-become-a-mafia-in-the-academy.jpg */ "./src/img/i-become-a-mafia-in-the-academy.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/thunder-gods-reincarnation.jpg */ "./src/img/thunder-gods-reincarnation.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/i-can-extract-everything.jpg */ "./src/img/i-can-extract-everything.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/martial-peak.jpg */ "./src/img/martial-peak.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/circle-of-inevitability.jpg */ "./src/img/circle-of-inevitability.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/the-celestial-returned-from-hell.jpg */ "./src/img/the-celestial-returned-from-hell.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/stranger-danger.webp */ "./src/img/stranger-danger.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/supremacy-games.jpg */ "./src/img/supremacy-games.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/the-supreme-magus.jpg */ "./src/img/the-supreme-magus.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ultragene-warlord.jpg */ "./src/img/ultragene-warlord.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var code = "<!doctype html>\r\n<html lang=\"en ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Novels online - RANOBES.COPY - Ranobes</title>\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" />\r\n    <svg\r\n      aria-hidden=\"true\"\r\n      style=\"position: absolute; width: 0; height: 0; overflow: hidden\"\r\n      width=\"0\"\r\n      height=\"0\"\r\n      version=\"1.1\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <defs>\r\n        <symbol id=\"icon-login\" viewBox=\"0 0 916 1024\">\r\n          <path\r\n            d=\"M808.421 1024h-700.632c-59.284 0-107.789-48.505-107.789-107.789v-377.263c0-59.284 48.505-107.789 107.789-107.789h565.895v-242.526c0-59.284-48.505-107.789-107.789-107.789h-215.579c-59.284 0-107.789 48.505-107.789 107.789v161.684h-80.842v-161.684c0-105.095 83.537-188.632 188.632-188.632h215.579c105.095 0 188.632 83.537 188.632 188.632v242.526h53.895c59.284 0 107.789 48.505 107.789 107.789v377.263c0 59.284-48.505 107.789-107.789 107.789zM835.368 565.895c0-29.642-24.253-53.895-53.895-53.895h-646.737c-29.642 0-53.895 24.253-53.895 53.895v323.368c0 29.642 24.253 53.895 53.895 53.895h646.737c29.642 0 53.895-24.253 53.895-53.895v-323.368zM458.105 862.316c-75.453 0-134.737-59.284-134.737-134.737s59.284-134.737 134.737-134.737c75.453 0 134.737 59.284 134.737 134.737s-59.284 134.737-134.737 134.737zM458.105 673.684c-29.642 0-53.895 24.253-53.895 53.895s24.253 53.895 53.895 53.895c29.642 0 53.895-24.253 53.895-53.895s-24.253-53.895-53.895-53.895z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-up\" viewBox=\"0 0 597 1024\">\r\n          <path\r\n            d=\"M585.956 327.111c-17.067 17.067-42.667 17.067-59.733 0l-184.889-182.044v836.267c0 22.756-19.911 42.667-42.667 42.667v0c-22.756 0-42.667-19.911-42.667-42.667v-836.267l-184.889 184.889c-17.067 17.067-42.667 17.067-59.733 0s-17.067-42.667 0-59.733l250.311-250.311c2.844-2.844 2.844-5.689 5.689-8.533 8.533-8.533 22.756-11.378 36.978-11.378 2.844 0 5.689 0 5.689 0s2.844 0 2.844 0c8.533 2.844 14.222 8.533 17.067 14.222l253.156 253.156c17.067 17.067 17.067 45.511 2.844 59.733z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin\" viewBox=\"0 0 48 48\">\r\n          <path\r\n            d=\"m24.04,37.75l-4.12-4h-5.59v-5.61l-4.07-4.1,4.07-4.1v-5.61h5.6l4.08-4.08,4.07,4.08h5.62v5.61l4.07,4.1-4.07,4.1v5.61h-5.61l-4.04,4ZM7,24.03c0,.66.22,1.22.67,1.67l3.65,3.67v4.99c0,.66.23,1.22.7,1.68s1.03.7,1.68.7h5l3.68,3.57c.45.45,1,.68,1.66.68s1.21-.23,1.67-.68l3.61-3.57h4.99c.65,0,1.21-.23,1.68-.7s.7-1.03.7-1.68v-4.99l3.65-3.67c.45-.45.67-1,.67-1.66s-.22-1.22-.67-1.67l-3.65-3.67v-4.99c0-.66-.23-1.22-.7-1.68s-1.03-.7-1.68-.7h-4.99l-3.61-3.61c-.48-.48-1.04-.71-1.7-.71s-1.21.23-1.67.68l-3.66,3.65h-4.98c-.65,0-1.21.23-1.68.7s-.7,1.03-.7,1.68v4.99l-3.65,3.67c-.45.45-.67,1-.67,1.66Zm24-.03c0,3.87-3.13,7-7,7v-14c3.87,0,7,3.13,7,7Z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-search\" viewBox=\"0 0 1036 1024\">\r\n          <path\r\n            d=\"M1006.644 1000.859c-34.712 34.712-86.78 34.712-121.492 0l-109.921-109.921c-80.994 57.853-179.345 92.565-283.48 92.565-271.91 0-491.751-219.842-491.751-491.751s219.842-491.751 491.751-491.751c271.91 0 491.751 219.842 491.751 491.751 0 104.136-28.927 196.701-86.78 277.695l109.921 109.921c34.712 34.712 34.712 86.78 0 121.492zM491.751 173.559c-173.559 0-318.192 144.633-318.192 318.192s144.633 318.192 318.192 318.192c173.559 0 318.192-144.633 318.192-318.192s-144.633-318.192-318.192-318.192z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-gp\" viewBox=\"0 0 1536 1024\">\r\n          <path\r\n            d=\"M1399.467 588.8c0 51.2 0 93.867 0 145.067-42.667 0-93.867 0-136.533 0 0-51.2 0-93.867 0-145.067-42.667 0-93.867 0-136.533 0 0-51.2 0-93.867 0-145.067 42.667 0 93.867 0 136.533 0 0-51.2 0-93.867 0-145.067 42.667 0 93.867 0 136.533 0 0 51.2 0 93.867 0 145.067 42.667 0 93.867 0 136.533 0 0 51.2 0 93.867 0 145.067-42.667 0-93.867 0-136.533 0zM307.2 989.867c-187.733-76.8-324.267-290.133-307.2-503.467 0-264.533 238.933-494.933 486.4-486.4 119.467-8.533 230.4 51.2 324.267 128-34.133 42.667-76.8 93.867-119.467 136.533-110.933-85.333-273.067-110.933-384-17.067-162.133 110.933-162.133 384-17.067 512 145.067 145.067 426.667 68.267 469.333-145.067-93.867 0-187.733 0-281.6 0 0-59.733 0-119.467 0-170.667 153.6 0 307.2 0 469.333 0 8.533 136.533-8.533 281.6-85.333 392.533-119.467 179.2-358.4 230.4-554.667 153.6z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin-check\" viewBox=\"0 0 24 24\">\r\n          <path\r\n            fill=\"currentColor\"\r\n            d=\"m9.45,17.98c-.15,0-.3-.03-.44-.09s-.27-.15-.39-.26l-4.53-4.52c-.23-.23-.35-.52-.35-.85s.12-.62.35-.85c.23-.23.51-.35.84-.35s.61.12.86.35l3.65,3.65,8.75-8.73c.23-.23.51-.35.84-.36.32,0,.6.11.84.36.23.23.35.52.35.85s-.12.62-.35.85l-9.6,9.6c-.12.12-.25.2-.39.26-.14.06-.29.09-.44.09Z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-login_m\" viewBox=\"0 0 945 1024\">\r\n          <path\r\n            d=\"M787.692 1024h-630.154c-86.646 0-157.538-70.892-157.538-157.538v-315.077c0-86.646 70.892-157.538 157.538-157.538h472.615v-118.154c0-86.646-70.892-157.538-157.538-157.538s-157.538 70.892-157.538 157.538h-118.154c0-153.6 122.092-275.692 275.692-275.692s275.692 122.092 275.692 275.692v118.154h39.385c86.646 0 157.538 70.892 157.538 157.538v315.077c0 86.646-70.892 157.538-157.538 157.538zM827.077 590.769c0-43.323-35.446-78.769-78.769-78.769h-551.385c-43.323 0-78.769 35.446-78.769 78.769v236.308c0 43.323 35.446 78.769 78.769 78.769h551.385c43.323 0 78.769-35.446 78.769-78.769v-236.308zM472.615 787.692c-43.323 0-78.769-35.446-78.769-78.769s35.446-78.769 78.769-78.769 78.769 35.446 78.769 78.769c0 43.323-35.446 78.769-78.769 78.769z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin_m\" viewBox=\"0 0 32 32\">\r\n          <path\r\n            d=\"m2,16.03c0-.54.18-1,.55-1.37l3-3.02v-4.11c0-.54.19-1,.58-1.39.38-.38.84-.58,1.38-.58h4.1l3.02-3.01c.38-.37.84-.56,1.38-.56s1.01.2,1.4.59l2.97,2.98h4.11c.54,0,1,.19,1.38.58.38.38.58.85.58,1.39v4.11l3,3.02c.37.38.55.84.55,1.38s-.18,1-.55,1.37l-3,3.02v4.11c0,.54-.19,1-.58,1.39-.38.38-.84.58-1.38.58h-4.11l-2.97,2.94c-.38.37-.84.56-1.38.56s-1-.19-1.37-.56l-3.03-2.94h-4.12c-.54,0-1-.19-1.38-.58-.38-.38-.58-.85-.58-1.39v-4.11l-3-3.02c-.37-.38-.55-.84-.55-1.38Zm17.13-7.46l-3.13-3.14-3.14,3.14h-4.3v4.31l-3.14,3.16,3.14,3.16v4.31h4.29l3.18,3.09,3.11-3.09h4.3v-4.31l3.14-3.16-3.14-3.16v-4.31h-4.31Zm1.87,7.43c0,2.76-2.24,5-5,5v-10c2.76,0,5,2.24,5,5Z\"\r\n          ></path>\r\n        </symbol>\r\n      </defs>\r\n    </svg>\r\n  </head>\r\n  <body>\r\n    <div class=\"page\">\r\n      <div class=\"body\">\r\n        <header class=\"header\">\r\n          <div class=\"header__top\">\r\n            <a href=\"./index.html\" class=\"logo btn__menu\">\r\n              <svg class=\"svg__logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\r\n                <rect />\r\n                <path\r\n                  fill=\"#323232\"\r\n                  width=\"40px\"\r\n                  d=\"M10.09,40.1h7.08V29.8h5.47l7,10.3h8.28L30.05,28.6a10,10,0,0,0,6.9-10,10.18,10.18,0,0,0-2.76-7.45C32.07,9.05,28.9,7.9,24.8,7.9H10.09Zm7.08-16.56V14.29h7c3.45,0,5.56,1.57,5.56,4.6,0,2.81-2,4.65-5.43,4.65Z\"\r\n                />\r\n              </svg>\r\n            </a>\r\n            <div class=\"login__panel\">\r\n              <a class=\"login__btn btn__menu\">\r\n                <svg class=\"icon icon-login\">\r\n                  <use xlink:href=\"#icon-login\"></use>\r\n                </svg>\r\n                <svg class=\"icon m_ico icon-login_m\">\r\n                  <use xlink:href=\"#icon-login_m\"></use>\r\n                </svg>\r\n                <img class=\"user-avatar\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"avatar\" />\r\n                <img class=\"admin-avatar\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"avatar\" />\r\n                <span class=\"btn__close\">\r\n                  <i class=\"line1\"></i>\r\n                  <i class=\"line2\"></i>\r\n                </span>\r\n              </a>\r\n              <!--  -->\r\n              <div class=\"login-panel drop__panel\">\r\n                <a href=\"#\" class=\"login-avatar\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"avatar\" class=\"avatar\" />\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"avatar\" class=\"admin-img\" />\r\n                </a>\r\n                <div class=\"login-name\">\r\n                  <a href=\"#\" class=\"login-title\"></a>\r\n                </div>\r\n                <div class=\"login-menu\">\r\n                  <a href=\"#\" class=\"link-login\"\r\n                    ><i class=\"fas fa-inbox\"></i>Messages\r\n                    <span class=\"count-messages\"\r\n                      ><b>0</b> of <span class=\"count-message\">0</span></span\r\n                    ></a\r\n                  >\r\n                  <a href=\"#\" class=\"link-login\"\r\n                    ><i class=\"fas fa-thumbtack\"></i>Bookmarks\r\n                    <span class=\"span-login count-bookmarks\">0</span></a\r\n                  >\r\n                  <a href=\"#\" class=\"link-login\"\r\n                    ><i class=\"fas fa-bell\"></i>Subscriptions\r\n                    <span class=\"span-login count-subscriptions\">0</span></a\r\n                  >\r\n                  <a href=\"#\" class=\"link-login\"><i class=\"fas fa-comment-dots\"></i>Comments</a>\r\n                  <a href=\"#\" class=\"link-login\"\r\n                    ><i class=\"fas fa-history\"></i>Last viewed chapters</a\r\n                  >\r\n                </div>\r\n                <div class=\"logout\">\r\n                  <a href=\"#\" class=\"btn-logout\"><i class=\"fas fa-sign-out-alt\"></i>Logout</a>\r\n                </div>\r\n              </div>\r\n              <form class=\"drop__panel unauth\">\r\n                <div class=\"social__links\">\r\n                  <a href=\"#\" class=\"social__yandex\"\r\n                    ><i class=\"fa-brands fa-yandex-international\"></i\r\n                  ></a>\r\n                  <a href=\"#\" class=\"social__google\">\r\n                    <svg class=\"icon icon-gp\">\r\n                      <use xlink:href=\"#icon-gp\"></use>\r\n                    </svg>\r\n                  </a>\r\n                </div>\r\n                <label for=\"login\">Login:</label>\r\n                <input type=\"text\" class=\"login\" name=\"login\" placeholder=\"Login:\" />\r\n                <label for=\"login\">Password</label>\r\n                <input type=\"password\" class=\"password\" name=\"password\" placeholder=\"Password\" />\r\n                <button type=\"submit\" class=\"btn\">sign in</button>\r\n                <div class=\"form__footer\">\r\n                  <a href=\"\" class=\"lost__password\">Forgot password?</a>\r\n                  <a href=\"./registration/rules.html\" class=\"sign__up\">Sign up</a>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <a class=\"btn__menu btn__burger\">\r\n              <div class=\"burger\">\r\n                <div class=\"burger__line\"></div>\r\n              </div>\r\n            </a>\r\n            <div class=\"header__themes\">\r\n              <a class=\"btn__menu header__theme\">\r\n                <svg class=\"icon m_ico icon-skin_\">\r\n                  <use xlink:href=\"#icon-skin\"></use>\r\n                </svg>\r\n                <svg class=\"icon m_ico icon-skin_m\">\r\n                  <use xlink:href=\"#icon-skin_m\"></use>\r\n                </svg>\r\n                <span class=\"btn__close\">\r\n                  <i class=\"line1\"></i>\r\n                  <i class=\"line2\"></i>\r\n                </span>\r\n              </a>\r\n              <ul class=\"themes__pop-up\">\r\n                <li style=\"order: 1\">\r\n                  <a class=\"theme__green\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"active\" style=\"order: 2\">\r\n                  <a class=\"theme__dgreen\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li style=\"order: 3\">\r\n                  <a class=\"theme__dblue\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li style=\"order: 4\">\r\n                  <a class=\"theme__amoled\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <menu class=\"menu\">\r\n              <div class=\"greenmenu\">\r\n                <form class=\"search\">\r\n                  <input\r\n                    class=\"search__bar\"\r\n                    type=\"search\"\r\n                    placeholder=\"Simple: super, divine, wasp\"\r\n                    maxlength=\"70\"\r\n                    minlength=\"3\"\r\n                  />\r\n                  <a class=\"search__icon\">\r\n                    <svg class=\"icon icon-search\">\r\n                      <use xlink:href=\"#icon-search\"></use>\r\n                    </svg>\r\n                  </a>\r\n                </form>\r\n                <nav class=\"nav\">\r\n                  <a href=\"\" class=\"active nav__link\"> <i class=\"fas fa-home\"></i>Home</a>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-book-open\"></i>Novels</a>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-sync\"></i>Updates</a>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-fire\"></i>Popular</a>\r\n                  <div class=\"nav__border\"></div>\r\n                  <a href=\"./tags/genre.html\" class=\"nav__link\"\r\n                    ><i class=\"fas fa-list\"></i>Genre catalog</a\r\n                  >\r\n                  <a href=\"\" class=\"nav__link\"\r\n                    ><i class=\"fas fa-clipboard-check\"></i>Completed novels</a\r\n                  >\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-folder-plus\"></i>Suggest a novel</a>\r\n                  <a href=\"\" class=\"nav__link\"\r\n                    ><i class=\"fa-solid fa-share-nodes\"></i>Collections</a\r\n                  >\r\n                  <div class=\"nav__border\"></div>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-search\"></i>Local search engine</a>\r\n                  <a href=\"./contacts.html\" class=\"nav__link\"\r\n                    ><i class=\"fas fa-envelope\"></i>Contacts</a\r\n                  >\r\n                  <a href=\"./rules.html\" class=\"nav__link\"><i class=\"fas fa-receipt\"></i>Rules</a>\r\n                </nav>\r\n              </div>\r\n            </menu>\r\n          </div>\r\n          <div class=\"header__upper\">\r\n            <a class=\"header__upper_btn\">\r\n              <svg class=\"icon icon-up\">\r\n                <use xlink:href=\"#icon-up\"></use>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </header>\r\n\r\n        <main>\r\n          <div class=\"content\">\r\n            <div class=\"notifications\"></div>\r\n            <div class=\"new__novels\">\r\n              <!-- <article class=\"novel\">\r\n                <div class=\"novel__info block\">\r\n                  <a href=\"./main.html\"\r\n                    ><img src=\"../img/re-monarch.webp\" alt=\"Novel cover\" class=\"novel__img\"\r\n                  /></a>\r\n                  <div class=\"novel__text\">\r\n                    <h2 class=\"novel__title\">\r\n                      <a href=\"./main.html\" class=\"novel__link\">RE: Monarch</a>\r\n                    </h2>\r\n                    <p class=\"novel__tags\">\r\n                      Action, Fantasy, Adventure, Mature, Mystery, Psychological, Supernatural,\r\n                      Martial Arts\r\n                    </p>\r\n                    <div class=\"novel__description\">\r\n                      <p>\r\n                        Cairn is a prince who is already tired of ruling. Faced with an imminent\r\n                        coronation and an overbearing father, he wants nothing more than to drown\r\n                        his responsibilities in cheap liquor and poor decisions. With the help of\r\n                        his sister, he hatches a plan to escape the clutches of the throne once\r\n                        and...\r\n                      </p>\r\n                      <a href=\"./main.html\" class=\"description-more\">Read more</a>\r\n                    </div>\r\n                    <div class=\"novel__rate-date\">\r\n                      <div class=\"unit__rating\">\r\n                        <div class=\"current__rating\">\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"star-rate\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"star-rate\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"star-rate\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"star-rate\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"star-rate\" />\r\n                        </div>\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                      </div>\r\n                      <a href=\"./main.html\" class=\"upload__date\">\r\n                        • UP: <span class=\"up__date\">29 days ago</span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"border\"></div>\r\n                <div class=\"novel__tools\">\r\n                  <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                  <div class=\"bookmark-container\">\r\n                    <a class=\"btn-bookmark\">\r\n                      <div class=\"bookmark\">\r\n                        <img src=\"../img/bookmark-icon.svg\" alt=\"bookmark\" />\r\n                        <p class=\"bookmark__title\">Bookmark</p>\r\n                      </div>\r\n                    </a>\r\n                    <div class=\"bookmark-popup\">\r\n                      <div class=\"popup-list\">\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              class=\"poup-img-dote\"\r\n                              src=\"../img/bookmarks.png\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Viewed</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              class=\"poup-img-dote\"\r\n                              src=\"../img/bookmarks.png\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Reading now</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Will read</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Awaiting</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Delayed</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Dropped</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Finished</a\r\n                        >\r\n                      </div>\r\n                      <a class=\"popup-trigger\"\r\n                        ><div class=\"poup-img\">\r\n                          <img src=\"../img/bookmarks.png\" class=\"poup-img-pen\" alt=\"dote picture\" />\r\n                        </div>\r\n                        My note</a\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </article>\r\n              <article class=\"novel\">\r\n                <div class=\"novel__info block\">\r\n                  <a href=\"./main.html\"\r\n                    ><img\r\n                      src=\"../img/the-extra-of-the-lunerra.webp\"\r\n                      alt=\"Novel cover\"\r\n                      class=\"novel__img\"\r\n                  /></a>\r\n                  <div class=\"novel__text\">\r\n                    <h2 class=\"novel__title\">\r\n                      <a href=\"./main.html\" class=\"novel__link\">The Extra of The Lunerra</a>\r\n                    </h2>\r\n                    <p class=\"novel__tags\">Fantasy, Action, Tragedy, Adventure, Romance, Game</p>\r\n                    <div class=\"novel__description\">\r\n                      <p>\r\n                        The only game in my life that makes me laugh: The Lands of The Lunerra… I\r\n                        played this game for six thousand hours in three years, and the day I\r\n                        thought I had done everything I could in this game, I felt a great emptiness\r\n                        inside me. I thought nothing in my ordinary and monotonous life could make\r\n                        me...\r\n                      </p>\r\n                      <a href=\"./main.html\" class=\"description-more\">Read more</a>\r\n                    </div>\r\n                    <div class=\"novel__rate-date\">\r\n                      <div class=\"unit__rating\">\r\n                        <div class=\"current__rating\">\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                        </div>\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                      </div>\r\n                      <a href=\"./main.html\" class=\"upload__date\">\r\n                        • UP: <span class=\"up__date\">7 days ago</span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"border\"></div>\r\n                <div class=\"novel__tools\">\r\n                  <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                  <div class=\"bookmark-container\">\r\n                    <a class=\"btn-bookmark\">\r\n                      <div class=\"bookmark\">\r\n                        <img src=\"../img/bookmark-icon.svg\" alt=\"bookmark\" />\r\n                        <p class=\"bookmark__title\">Bookmark</p>\r\n                      </div>\r\n                    </a>\r\n                    <div class=\"bookmark-popup\">\r\n                      <div class=\"popup-list\">\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              class=\"poup-img-dote\"\r\n                              src=\"../img/bookmarks.png\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Viewed</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              class=\"poup-img-dote\"\r\n                              src=\"../img/bookmarks.png\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Reading now</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Will read</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Awaiting</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Delayed</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Dropped</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Finished</a\r\n                        >\r\n                      </div>\r\n                      <a class=\"popup-trigger\"\r\n                        ><div class=\"poup-img\">\r\n                          <img src=\"../img/bookmarks.png\" class=\"poup-img-pen\" alt=\"dote picture\" />\r\n                        </div>\r\n                        My note</a\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </article>\r\n              <article class=\"novel\">\r\n                <div class=\"novel__info block\">\r\n                  <a href=\"./main.html\"\r\n                    ><img src=\"../img/cultist-of-cerebon.webp\" alt=\"Novel cover\" class=\"novel__img\"\r\n                  /></a>\r\n                  <div class=\"novel__text\">\r\n                    <h2 class=\"novel__title\">\r\n                      <a href=\"./main.html\" class=\"novel__link\">Cultist of Cerebon</a>\r\n                    </h2>\r\n                    <p class=\"novel__tags\">Action, Drama, Fantasy, Adventure</p>\r\n                    <div class=\"novel__description\">\r\n                      <p>\r\n                        When Zareth first realized he had been reborn into a world that seemed to\r\n                        run on video game mechanics, he was ecstatic. He’d expected to go on to live\r\n                        an exciting life filled with danger and adventure. Instead, Zareth spent\r\n                        much of his new life living on the streets of Tal’Qamar before eventually...\r\n                      </p>\r\n                      <a href=\"./main.html\" class=\"description-more\">Read more</a>\r\n                    </div>\r\n                    <div class=\"novel__rate-date\">\r\n                      <div class=\"unit__rating\">\r\n                        <div class=\"current__rating\">\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                          <img src=\"../img/stars-rate-current.svg\" alt=\"\" />\r\n                        </div>\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                        <img src=\"../img/stars-rate.svg\" alt=\"star\" />\r\n                      </div>\r\n                      <a href=\"./main.html\" class=\"upload__date\">\r\n                        • UP: <span class=\"up__date\">1 day ago</span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"border\"></div>\r\n                <div class=\"novel__tools\">\r\n                  <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                  <div class=\"bookmark-container\">\r\n                    <a class=\"btn-bookmark\">\r\n                      <div class=\"bookmark\">\r\n                        <img src=\"../img/bookmark-icon.svg\" alt=\"bookmark\" />\r\n                        <p class=\"bookmark__title\">Bookmark</p>\r\n                      </div>\r\n                    </a>\r\n                    <div class=\"bookmark-popup\">\r\n                      <div class=\"popup-list\">\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              class=\"poup-img-dote\"\r\n                              src=\"../img/bookmarks.png\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Viewed</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              class=\"poup-img-dote\"\r\n                              src=\"../img/bookmarks.png\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Reading now</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Will read</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Awaiting</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Delayed</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Dropped</a\r\n                        >\r\n                        <a class=\"popup-item\"\r\n                          ><div class=\"poup-img\">\r\n                            <img\r\n                              src=\"../img/bookmarks.png\"\r\n                              class=\"poup-img-dote\"\r\n                              alt=\"dote picture\"\r\n                            />\r\n                          </div>\r\n                          Finished</a\r\n                        >\r\n                      </div>\r\n                      <a class=\"popup-trigger\"\r\n                        ><div class=\"poup-img\">\r\n                          <img src=\"../img/bookmarks.png\" class=\"poup-img-pen\" alt=\"dote picture\" />\r\n                        </div>\r\n                        My note</a\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </article> -->\r\n            </div>\r\n            <div class=\"new__chapters\">\r\n              <div class=\"title-stripes block\">\r\n                <h2 class=\"midtitle-stripes\"><span>UPDATE TAPE</span></h2>\r\n              </div>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">I Become a Mafia in the Academy</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>180:</span></h3>\r\n                  <em>19 minutes ago</em>\r\n                </div>\r\n              </a>\r\n\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Thunder God's Reincarnation</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>216</span></h3>\r\n                  <em>30 minutes ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Supreme Lord: I can extract everything!</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>559: Complaints</span></h3>\r\n                  <em>1 hour ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Martial Peak</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>5468: Black Ink Disciples’ Goal</span></h3>\r\n                  <em>1 hour ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Circle of Inevitability</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>585: Repeated “Betrayal”</span></h3>\r\n                  <em>1 hour ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">The Celestial Returned From Hell</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>347</span></h3>\r\n                  <em>2 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Stranger Danger</h3>\r\n                  <h3 class=\"sub__title\">\r\n                    Charter <span>290: The Incense of Fortune Can’t Be Lit!?</span>\r\n                  </h3>\r\n                  <em>2 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Supremacy Games</h3>\r\n                  <h3 class=\"sub__title\">\r\n                    Charter <span>1647: Stealing The Celestial Energy! II</span>\r\n                  </h3>\r\n                  <em>2 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Supreme Magus</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>2908: The Outsider (part 2)</span></h3>\r\n                  <em>3 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <div class=\"novel__img\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"novel image\" />\r\n                  <div class=\"animation_1\"></div>\r\n                  <div class=\"animation_2\"></div>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <h3 class=\"title__novel\">Ultragene Warlord</h3>\r\n                  <h3 class=\"sub__title\">Charter <span>1293: Goodbye, Third Realm</span></h3>\r\n                  <em>3 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <div class=\"block block-updates\">\r\n                <a href=\"#\" class=\"btn btn-updates\">More updates</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <aside>\r\n            <div class=\"aside__top block\">\r\n              <div class=\"aside__btns\">\r\n                <a class=\"active btn-best\">Best novels</a>\r\n                <a class=\"btn-discussed\">Most Discussed</a>\r\n              </div>\r\n              <div class=\"aside__top-content\">\r\n                <div class=\"current novels__best tabs\"></div>\r\n                <div class=\"tabs novels__discussed\"></div>\r\n              </div>\r\n            </div>\r\n          </aside>\r\n        </main>\r\n        <footer class=\"footer\">\r\n          <p>Each book is <span>a new life</span> filled with new adventures.</p>\r\n          <a href=\"#\">Completed novels</a>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/pages/main.html":
/*!*****************************!*\
  !*** ./src/pages/main.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/re-monarch.webp */ "./src/img/re-monarch.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/stars-rate-current.svg */ "./src/img/stars-rate-current.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/stars-rate.svg */ "./src/img/stars-rate.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bookmark-icon.svg */ "./src/img/bookmark-icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/the-extra-of-the-lunerra.webp */ "./src/img/the-extra-of-the-lunerra.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cultist-of-cerebon.webp */ "./src/img/cultist-of-cerebon.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/i-become-a-mafia-in-the-academy.jpg */ "./src/img/i-become-a-mafia-in-the-academy.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/thunder-gods-reincarnation.jpg */ "./src/img/thunder-gods-reincarnation.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/i-can-extract-everything.jpg */ "./src/img/i-can-extract-everything.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/martial-peak.jpg */ "./src/img/martial-peak.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/circle-of-inevitability.jpg */ "./src/img/circle-of-inevitability.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/the-celestial-returned-from-hell.jpg */ "./src/img/the-celestial-returned-from-hell.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/stranger-danger.webp */ "./src/img/stranger-danger.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/supremacy-games.jpg */ "./src/img/supremacy-games.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/the-supreme-magus.jpg */ "./src/img/the-supreme-magus.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ultragene-warlord.jpg */ "./src/img/ultragene-warlord.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var code = "<!doctype html>\r\n<html lang=\"en ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Novels online - RANOBES.COPY - Ranobes</title>\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" />\r\n    <svg\r\n      aria-hidden=\"true\"\r\n      style=\"position: absolute; width: 0; height: 0; overflow: hidden\"\r\n      width=\"0\"\r\n      height=\"0\"\r\n      version=\"1.1\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <defs>\r\n        <symbol id=\"icon-login\" viewBox=\"0 0 916 1024\">\r\n          <path\r\n            d=\"M808.421 1024h-700.632c-59.284 0-107.789-48.505-107.789-107.789v-377.263c0-59.284 48.505-107.789 107.789-107.789h565.895v-242.526c0-59.284-48.505-107.789-107.789-107.789h-215.579c-59.284 0-107.789 48.505-107.789 107.789v161.684h-80.842v-161.684c0-105.095 83.537-188.632 188.632-188.632h215.579c105.095 0 188.632 83.537 188.632 188.632v242.526h53.895c59.284 0 107.789 48.505 107.789 107.789v377.263c0 59.284-48.505 107.789-107.789 107.789zM835.368 565.895c0-29.642-24.253-53.895-53.895-53.895h-646.737c-29.642 0-53.895 24.253-53.895 53.895v323.368c0 29.642 24.253 53.895 53.895 53.895h646.737c29.642 0 53.895-24.253 53.895-53.895v-323.368zM458.105 862.316c-75.453 0-134.737-59.284-134.737-134.737s59.284-134.737 134.737-134.737c75.453 0 134.737 59.284 134.737 134.737s-59.284 134.737-134.737 134.737zM458.105 673.684c-29.642 0-53.895 24.253-53.895 53.895s24.253 53.895 53.895 53.895c29.642 0 53.895-24.253 53.895-53.895s-24.253-53.895-53.895-53.895z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-up\" viewBox=\"0 0 597 1024\">\r\n          <path\r\n            d=\"M585.956 327.111c-17.067 17.067-42.667 17.067-59.733 0l-184.889-182.044v836.267c0 22.756-19.911 42.667-42.667 42.667v0c-22.756 0-42.667-19.911-42.667-42.667v-836.267l-184.889 184.889c-17.067 17.067-42.667 17.067-59.733 0s-17.067-42.667 0-59.733l250.311-250.311c2.844-2.844 2.844-5.689 5.689-8.533 8.533-8.533 22.756-11.378 36.978-11.378 2.844 0 5.689 0 5.689 0s2.844 0 2.844 0c8.533 2.844 14.222 8.533 17.067 14.222l253.156 253.156c17.067 17.067 17.067 45.511 2.844 59.733z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin\" viewBox=\"0 0 48 48\">\r\n          <path\r\n            d=\"m24.04,37.75l-4.12-4h-5.59v-5.61l-4.07-4.1,4.07-4.1v-5.61h5.6l4.08-4.08,4.07,4.08h5.62v5.61l4.07,4.1-4.07,4.1v5.61h-5.61l-4.04,4ZM7,24.03c0,.66.22,1.22.67,1.67l3.65,3.67v4.99c0,.66.23,1.22.7,1.68s1.03.7,1.68.7h5l3.68,3.57c.45.45,1,.68,1.66.68s1.21-.23,1.67-.68l3.61-3.57h4.99c.65,0,1.21-.23,1.68-.7s.7-1.03.7-1.68v-4.99l3.65-3.67c.45-.45.67-1,.67-1.66s-.22-1.22-.67-1.67l-3.65-3.67v-4.99c0-.66-.23-1.22-.7-1.68s-1.03-.7-1.68-.7h-4.99l-3.61-3.61c-.48-.48-1.04-.71-1.7-.71s-1.21.23-1.67.68l-3.66,3.65h-4.98c-.65,0-1.21.23-1.68.7s-.7,1.03-.7,1.68v4.99l-3.65,3.67c-.45.45-.67,1-.67,1.66Zm24-.03c0,3.87-3.13,7-7,7v-14c3.87,0,7,3.13,7,7Z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-search\" viewBox=\"0 0 1036 1024\">\r\n          <path\r\n            d=\"M1006.644 1000.859c-34.712 34.712-86.78 34.712-121.492 0l-109.921-109.921c-80.994 57.853-179.345 92.565-283.48 92.565-271.91 0-491.751-219.842-491.751-491.751s219.842-491.751 491.751-491.751c271.91 0 491.751 219.842 491.751 491.751 0 104.136-28.927 196.701-86.78 277.695l109.921 109.921c34.712 34.712 34.712 86.78 0 121.492zM491.751 173.559c-173.559 0-318.192 144.633-318.192 318.192s144.633 318.192 318.192 318.192c173.559 0 318.192-144.633 318.192-318.192s-144.633-318.192-318.192-318.192z\"\r\n          ></path>\r\n        </symbol>\r\n      </defs>\r\n    </svg>\r\n  </head>\r\n  <body>\r\n    <div class=\"page\">\r\n      <div class=\"body\">\r\n        <header class=\"header\">\r\n          <div class=\"header__top\">\r\n            <a href=\"./index.html\" class=\"logo btn__menu\">\r\n              <svg class=\"svg__logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\r\n                <rect />\r\n                <path\r\n                  fill=\"#323232\"\r\n                  width=\"40px\"\r\n                  d=\"M10.09,40.1h7.08V29.8h5.47l7,10.3h8.28L30.05,28.6a10,10,0,0,0,6.9-10,10.18,10.18,0,0,0-2.76-7.45C32.07,9.05,28.9,7.9,24.8,7.9H10.09Zm7.08-16.56V14.29h7c3.45,0,5.56,1.57,5.56,4.6,0,2.81-2,4.65-5.43,4.65Z\"\r\n                />\r\n              </svg>\r\n            </a>\r\n            <a href=\"#\" class=\"login__btn btn__menu\">\r\n              <svg class=\"icon icon-login\">\r\n                <use xlink:href=\"#icon-login\"></use>\r\n              </svg>\r\n            </a>\r\n            <a class=\"btn__menu btn__burger\">\r\n              <div class=\"burger\">\r\n                <div class=\"burger__line\"></div>\r\n              </div>\r\n            </a>\r\n            <a href=\"#\" class=\"btn__menu header__theme\">\r\n              <svg class=\"icon m_ico icon-skin_\">\r\n                <use xlink:href=\"#icon-skin\"></use>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n          <div class=\"header__upper\">\r\n            <a class=\"header__upper_btn\">\r\n              <svg class=\"icon icon-up\">\r\n                <use xlink:href=\"#icon-up\"></use>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </header>\r\n        <menu class=\"menu\">\r\n          <form class=\"search\">\r\n            <input\r\n              class=\"search__bar\"\r\n              type=\"search\"\r\n              placeholder=\"Simple: super, divine, wasp\"\r\n              maxlength=\"70\"\r\n              minlength=\"3\"\r\n            />\r\n            <a class=\"icon-search\">\r\n              <svg class=\"icon icon-search\">\r\n                <use xlink:href=\"#icon-search\" class=\"icon\"></use>\r\n              </svg>\r\n            </a>\r\n          </form>\r\n          <nav class=\"nav\">\r\n            <a href=\"\" class=\"active nav__link\"> <i class=\"fas fa-home\"></i>Home</a>\r\n            <a href=\"\" class=\"nav__link\"><i class=\"fas fa-book-open\"></i>Novels</a>\r\n            <a href=\"\" class=\"nav__link\"><i class=\"fas fa-sync\"></i>Updates</a>\r\n            <a href=\"\" class=\"nav__link\"><i class=\"fas fa-fire\"></i>Popular</a>\r\n            <a href=\"\" class=\"nav__link\"></a>\r\n            <a href=\"\" class=\"nav__link\"></a>\r\n            <a href=\"\" class=\"nav__link\"></a>\r\n            <a href=\"\" class=\"nav__link\"></a>\r\n            <a href=\"\" class=\"nav__link\"></a>\r\n            <a href=\"\" class=\"nav__link\"></a>\r\n            <a href=\"\" class=\"nav__link\"></a>\r\n          </nav>\r\n        </menu>\r\n        <main>\r\n          <div class=\"content\">\r\n            <div class=\"new__novels\">\r\n              <article class=\"novel\">\r\n                <div class=\"novel__info\">\r\n                  <a href=\"./main.html\"\r\n                    ><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Novel cover\" class=\"novel__img\"\r\n                  /></a>\r\n                  <div class=\"novel__text\">\r\n                    <h2 class=\"novel__title\">\r\n                      <a href=\"./main.html\" class=\"novel__link\">RE: Monarch</a>\r\n                    </h2>\r\n                    <p class=\"novel__tags\">\r\n                      Action, Fantasy, Adventure, Mature, Mystery, Psychological, Supernatural,\r\n                      Martial Arts\r\n                    </p>\r\n                    <p class=\"novel__description\">\r\n                      Cairn is a prince who is already tired of ruling. Faced with an imminent\r\n                      coronation and an overbearing father, he wants nothing more than to drown his\r\n                      responsibilities in cheap liquor and poor decisions. With the help of his\r\n                      sister, he hatches a plan to escape the clutches of the throne once and...\r\n                    </p>\r\n                    <div class=\"novel__rate-date\">\r\n                      <div class=\"unit__rating\">\r\n                        <div class=\"current__rating\">\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                        </div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                      </div>\r\n                      <a href=\"./main.html\" class=\"upload__date\">\r\n                        • UP: <span class=\"up__date\">29 days ago</span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"border\"></div>\r\n                <div class=\"novel__tools\">\r\n                  <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                  <a href=\"./main.html\" class=\"btn-bookmark\">\r\n                    <div class=\"bookmark\">\r\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"bookmark\" />\r\n                      <p class=\"bookmark__title\">Bookmark</p>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </article>\r\n              <article class=\"novel\">\r\n                <div class=\"novel__info\">\r\n                  <a href=\"./main.html\"\r\n                    ><img\r\n                      src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                      alt=\"Novel cover\"\r\n                      class=\"novel__img\"\r\n                  /></a>\r\n                  <div class=\"novel__text\">\r\n                    <h2 class=\"novel__title\">\r\n                      <a href=\"./main.html\" class=\"novel__link\">The Extra of The Lunerra</a>\r\n                    </h2>\r\n                    <p class=\"novel__tags\">Fantasy, Action, Tragedy, Adventure, Romance, Game</p>\r\n                    <p class=\"novel__description\">\r\n                      The only game in my life that makes me laugh: The Lands of The Lunerra… I\r\n                      played this game for six thousand hours in three years, and the day I thought\r\n                      I had done everything I could in this game, I felt a great emptiness inside\r\n                      me. I thought nothing in my ordinary and monotonous life could make me...\r\n                    </p>\r\n                    <div class=\"novel__rate-date\">\r\n                      <div class=\"unit__rating\">\r\n                        <div class=\"current__rating\">\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                        </div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                      </div>\r\n                      <a href=\"./main.html\" class=\"upload__date\">\r\n                        • UP: <span class=\"up__date\">7 days ago</span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"border\"></div>\r\n                <div class=\"novel__tools\">\r\n                  <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                  <a href=\"./main.html\" class=\"btn-bookmark\">\r\n                    <div class=\"bookmark\">\r\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"bookmark\" />\r\n                      <p class=\"bookmark__title\">Bookmark</p>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </article>\r\n              <article class=\"novel\">\r\n                <div class=\"novel__info\">\r\n                  <a href=\"./main.html\"\r\n                    ><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Novel cover\" class=\"novel__img\"\r\n                  /></a>\r\n                  <div class=\"novel__text\">\r\n                    <h2 class=\"novel__title\">\r\n                      <a href=\"./main.html\" class=\"novel__link\">Cultist of Cerebon</a>\r\n                    </h2>\r\n                    <p class=\"novel__tags\">Action, Drama, Fantasy, Adventure</p>\r\n                    <p class=\"novel__description\">\r\n                      When Zareth first realized he had been reborn into a world that seemed to run\r\n                      on video game mechanics, he was ecstatic. He’d expected to go on to live an\r\n                      exciting life filled with danger and adventure. Instead, Zareth spent much of\r\n                      his new life living on the streets of Tal’Qamar before eventually...\r\n                    </p>\r\n                    <div class=\"novel__rate-date\">\r\n                      <div class=\"unit__rating\">\r\n                        <div class=\"current__rating\">\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                        </div>\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                      </div>\r\n                      <a href=\"./main.html\" class=\"upload__date\">\r\n                        • UP: <span class=\"up__date\">1 day ago</span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"border\"></div>\r\n                <div class=\"novel__tools\">\r\n                  <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                  <a href=\"./main.html\" class=\"btn-bookmark\">\r\n                    <div class=\"bookmark\">\r\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"bookmark\" />\r\n                      <p class=\"bookmark__title\">Bookmark</p>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </article>\r\n            </div>\r\n            <div class=\"new__chapters\">\r\n              <div class=\"title__new__chapters block\">\r\n                <h2 class=\"midtitle__new__chapters\"><span>UPDATE TAPE</span></h2>\r\n              </div>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                  alt=\"novel image\"\r\n                  class=\"chapter__img\"\r\n                />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">I Become a Mafia in the Academy</h3>\r\n                  <h3 class=\"charter__number\">Charter <span>180:</span></h3>\r\n                  <em class=\"chapter__time\">19 minutes ago</em>\r\n                </div>\r\n              </a>\r\n\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"novel image\"\r\n                  class=\"chapter__img\"\r\n                />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Thunder God's Reincarnation</h3>\r\n                  <h3 class=\"charter__number\">Charter <span>216</span></h3>\r\n                  <em class=\"chapter__time\">30 minutes ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                  alt=\"novel image\"\r\n                  class=\"chapter__img\"\r\n                />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Supreme Lord: I can extract everything!</h3>\r\n                  <h3 class=\"charter__number\">Charter <span>559: Complaints</span></h3>\r\n                  <em class=\"chapter__time\">1 hour ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Martial Peak</h3>\r\n                  <h3 class=\"charter__number\">\r\n                    Charter <span>5468: Black Ink Disciples’ Goal</span>\r\n                  </h3>\r\n                  <em class=\"chapter__time\">1 hour ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                  alt=\"novel image\"\r\n                  class=\"chapter__img\"\r\n                />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Circle of Inevitability</h3>\r\n                  <h3 class=\"charter__number\">Charter <span>585: Repeated “Betrayal”</span></h3>\r\n                  <em class=\"chapter__time\">1 hour ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n                  alt=\"novel image\"\r\n                  class=\"chapter__img\"\r\n                />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">The Celestial Returned From Hell</h3>\r\n                  <h3 class=\"charter__number\">Charter <span>347</span></h3>\r\n                  <em class=\"chapter__time\">2 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Stranger Danger</h3>\r\n                  <h3 class=\"charter__number\">\r\n                    Charter <span>290: The Incense of Fortune Can’t Be Lit!?</span>\r\n                  </h3>\r\n                  <em class=\"chapter__time\">2 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Supremacy Games</h3>\r\n                  <h3 class=\"charter__number\">\r\n                    Charter <span>1647: Stealing The Celestial Energy! II</span>\r\n                  </h3>\r\n                  <em class=\"chapter__time\">2 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Supreme Magus</h3>\r\n                  <h3 class=\"charter__number\">Charter <span>2908: The Outsider (part 2)</span></h3>\r\n                  <em class=\"chapter__time\">3 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <a href=\"#\" class=\"new__chapter block\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                <div class=\"chapter__info\">\r\n                  <h3 class=\"title__novel\">Ultragene Warlord</h3>\r\n                  <h3 class=\"charter__number\">Charter <span>1293: Goodbye, Third Realm</span></h3>\r\n                  <em class=\"chapter__time\">3 hours ago</em>\r\n                </div>\r\n              </a>\r\n              <div class=\"block block-updates\">\r\n                <a href=\"#\" class=\"btn btn-updates\">More updates</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </main>\r\n        <footer class=\"footer\">\r\n          <p>Each book is <span>a new life</span> filled with new adventures.</p>\r\n          <a href=\"#\">Completed novels</a>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/pages/tags/genre.html":
/*!***********************************!*\
  !*** ./src/pages/tags/genre.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!doctype html>\r\n<html lang=\"en ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Genres catalog: xianxia, xuanhuan, josei, ecchi | Ranobes</title>\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" />\r\n    <svg\r\n      aria-hidden=\"true\"\r\n      style=\"position: absolute; width: 0; height: 0; overflow: hidden\"\r\n      width=\"0\"\r\n      height=\"0\"\r\n      version=\"1.1\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <defs>\r\n        <symbol id=\"icon-login\" viewBox=\"0 0 916 1024\">\r\n          <path\r\n            d=\"M808.421 1024h-700.632c-59.284 0-107.789-48.505-107.789-107.789v-377.263c0-59.284 48.505-107.789 107.789-107.789h565.895v-242.526c0-59.284-48.505-107.789-107.789-107.789h-215.579c-59.284 0-107.789 48.505-107.789 107.789v161.684h-80.842v-161.684c0-105.095 83.537-188.632 188.632-188.632h215.579c105.095 0 188.632 83.537 188.632 188.632v242.526h53.895c59.284 0 107.789 48.505 107.789 107.789v377.263c0 59.284-48.505 107.789-107.789 107.789zM835.368 565.895c0-29.642-24.253-53.895-53.895-53.895h-646.737c-29.642 0-53.895 24.253-53.895 53.895v323.368c0 29.642 24.253 53.895 53.895 53.895h646.737c29.642 0 53.895-24.253 53.895-53.895v-323.368zM458.105 862.316c-75.453 0-134.737-59.284-134.737-134.737s59.284-134.737 134.737-134.737c75.453 0 134.737 59.284 134.737 134.737s-59.284 134.737-134.737 134.737zM458.105 673.684c-29.642 0-53.895 24.253-53.895 53.895s24.253 53.895 53.895 53.895c29.642 0 53.895-24.253 53.895-53.895s-24.253-53.895-53.895-53.895z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-up\" viewBox=\"0 0 597 1024\">\r\n          <path\r\n            d=\"M585.956 327.111c-17.067 17.067-42.667 17.067-59.733 0l-184.889-182.044v836.267c0 22.756-19.911 42.667-42.667 42.667v0c-22.756 0-42.667-19.911-42.667-42.667v-836.267l-184.889 184.889c-17.067 17.067-42.667 17.067-59.733 0s-17.067-42.667 0-59.733l250.311-250.311c2.844-2.844 2.844-5.689 5.689-8.533 8.533-8.533 22.756-11.378 36.978-11.378 2.844 0 5.689 0 5.689 0s2.844 0 2.844 0c8.533 2.844 14.222 8.533 17.067 14.222l253.156 253.156c17.067 17.067 17.067 45.511 2.844 59.733z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin\" viewBox=\"0 0 48 48\">\r\n          <path\r\n            d=\"m24.04,37.75l-4.12-4h-5.59v-5.61l-4.07-4.1,4.07-4.1v-5.61h5.6l4.08-4.08,4.07,4.08h5.62v5.61l4.07,4.1-4.07,4.1v5.61h-5.61l-4.04,4ZM7,24.03c0,.66.22,1.22.67,1.67l3.65,3.67v4.99c0,.66.23,1.22.7,1.68s1.03.7,1.68.7h5l3.68,3.57c.45.45,1,.68,1.66.68s1.21-.23,1.67-.68l3.61-3.57h4.99c.65,0,1.21-.23,1.68-.7s.7-1.03.7-1.68v-4.99l3.65-3.67c.45-.45.67-1,.67-1.66s-.22-1.22-.67-1.67l-3.65-3.67v-4.99c0-.66-.23-1.22-.7-1.68s-1.03-.7-1.68-.7h-4.99l-3.61-3.61c-.48-.48-1.04-.71-1.7-.71s-1.21.23-1.67.68l-3.66,3.65h-4.98c-.65,0-1.21.23-1.68.7s-.7,1.03-.7,1.68v4.99l-3.65,3.67c-.45.45-.67,1-.67,1.66Zm24-.03c0,3.87-3.13,7-7,7v-14c3.87,0,7,3.13,7,7Z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-search\" viewBox=\"0 0 1036 1024\">\r\n          <path\r\n            d=\"M1006.644 1000.859c-34.712 34.712-86.78 34.712-121.492 0l-109.921-109.921c-80.994 57.853-179.345 92.565-283.48 92.565-271.91 0-491.751-219.842-491.751-491.751s219.842-491.751 491.751-491.751c271.91 0 491.751 219.842 491.751 491.751 0 104.136-28.927 196.701-86.78 277.695l109.921 109.921c34.712 34.712 34.712 86.78 0 121.492zM491.751 173.559c-173.559 0-318.192 144.633-318.192 318.192s144.633 318.192 318.192 318.192c173.559 0 318.192-144.633 318.192-318.192s-144.633-318.192-318.192-318.192z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-gp\" viewBox=\"0 0 1536 1024\">\r\n          <path\r\n            d=\"M1399.467 588.8c0 51.2 0 93.867 0 145.067-42.667 0-93.867 0-136.533 0 0-51.2 0-93.867 0-145.067-42.667 0-93.867 0-136.533 0 0-51.2 0-93.867 0-145.067 42.667 0 93.867 0 136.533 0 0-51.2 0-93.867 0-145.067 42.667 0 93.867 0 136.533 0 0 51.2 0 93.867 0 145.067 42.667 0 93.867 0 136.533 0 0 51.2 0 93.867 0 145.067-42.667 0-93.867 0-136.533 0zM307.2 989.867c-187.733-76.8-324.267-290.133-307.2-503.467 0-264.533 238.933-494.933 486.4-486.4 119.467-8.533 230.4 51.2 324.267 128-34.133 42.667-76.8 93.867-119.467 136.533-110.933-85.333-273.067-110.933-384-17.067-162.133 110.933-162.133 384-17.067 512 145.067 145.067 426.667 68.267 469.333-145.067-93.867 0-187.733 0-281.6 0 0-59.733 0-119.467 0-170.667 153.6 0 307.2 0 469.333 0 8.533 136.533-8.533 281.6-85.333 392.533-119.467 179.2-358.4 230.4-554.667 153.6z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin-check\" viewBox=\"0 0 24 24\">\r\n          <path\r\n            fill=\"currentColor\"\r\n            d=\"m9.45,17.98c-.15,0-.3-.03-.44-.09s-.27-.15-.39-.26l-4.53-4.52c-.23-.23-.35-.52-.35-.85s.12-.62.35-.85c.23-.23.51-.35.84-.35s.61.12.86.35l3.65,3.65,8.75-8.73c.23-.23.51-.35.84-.36.32,0,.6.11.84.36.23.23.35.52.35.85s-.12.62-.35.85l-9.6,9.6c-.12.12-.25.2-.39.26-.14.06-.29.09-.44.09Z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-login_m\" viewBox=\"0 0 945 1024\">\r\n          <path\r\n            d=\"M787.692 1024h-630.154c-86.646 0-157.538-70.892-157.538-157.538v-315.077c0-86.646 70.892-157.538 157.538-157.538h472.615v-118.154c0-86.646-70.892-157.538-157.538-157.538s-157.538 70.892-157.538 157.538h-118.154c0-153.6 122.092-275.692 275.692-275.692s275.692 122.092 275.692 275.692v118.154h39.385c86.646 0 157.538 70.892 157.538 157.538v315.077c0 86.646-70.892 157.538-157.538 157.538zM827.077 590.769c0-43.323-35.446-78.769-78.769-78.769h-551.385c-43.323 0-78.769 35.446-78.769 78.769v236.308c0 43.323 35.446 78.769 78.769 78.769h551.385c43.323 0 78.769-35.446 78.769-78.769v-236.308zM472.615 787.692c-43.323 0-78.769-35.446-78.769-78.769s35.446-78.769 78.769-78.769 78.769 35.446 78.769 78.769c0 43.323-35.446 78.769-78.769 78.769z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin_m\" viewBox=\"0 0 32 32\">\r\n          <path\r\n            d=\"m2,16.03c0-.54.18-1,.55-1.37l3-3.02v-4.11c0-.54.19-1,.58-1.39.38-.38.84-.58,1.38-.58h4.1l3.02-3.01c.38-.37.84-.56,1.38-.56s1.01.2,1.4.59l2.97,2.98h4.11c.54,0,1,.19,1.38.58.38.38.58.85.58,1.39v4.11l3,3.02c.37.38.55.84.55,1.38s-.18,1-.55,1.37l-3,3.02v4.11c0,.54-.19,1-.58,1.39-.38.38-.84.58-1.38.58h-4.11l-2.97,2.94c-.38.37-.84.56-1.38.56s-1-.19-1.37-.56l-3.03-2.94h-4.12c-.54,0-1-.19-1.38-.58-.38-.38-.58-.85-.58-1.39v-4.11l-3-3.02c-.37-.38-.55-.84-.55-1.38Zm17.13-7.46l-3.13-3.14-3.14,3.14h-4.3v4.31l-3.14,3.16,3.14,3.16v4.31h4.29l3.18,3.09,3.11-3.09h4.3v-4.31l3.14-3.16-3.14-3.16v-4.31h-4.31Zm1.87,7.43c0,2.76-2.24,5-5,5v-10c2.76,0,5,2.24,5,5Z\"\r\n          ></path>\r\n        </symbol>\r\n      </defs>\r\n    </svg>\r\n  </head>\r\n  <body>\r\n    <div class=\"page\">\r\n      <div class=\"body\">\r\n        <header class=\"header\">\r\n          <div class=\"header__top\">\r\n            <a href=\"../index.html\" class=\"logo btn__menu\">\r\n              <svg class=\"svg__logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\r\n                <rect />\r\n                <path\r\n                  fill=\"#323232\"\r\n                  width=\"40px\"\r\n                  d=\"M10.09,40.1h7.08V29.8h5.47l7,10.3h8.28L30.05,28.6a10,10,0,0,0,6.9-10,10.18,10.18,0,0,0-2.76-7.45C32.07,9.05,28.9,7.9,24.8,7.9H10.09Zm7.08-16.56V14.29h7c3.45,0,5.56,1.57,5.56,4.6,0,2.81-2,4.65-5.43,4.65Z\"\r\n                />\r\n              </svg>\r\n            </a>\r\n            <div class=\"login__panel\">\r\n              <a class=\"login__btn btn__menu\">\r\n                <svg class=\"icon icon-login\">\r\n                  <use xlink:href=\"#icon-login\"></use>\r\n                </svg>\r\n                <svg class=\"icon m_ico icon-login_m\">\r\n                  <use xlink:href=\"#icon-login_m\"></use>\r\n                </svg>\r\n                <span class=\"btn__close\">\r\n                  <i class=\"line1\"></i>\r\n                  <i class=\"line2\"></i>\r\n                </span>\r\n              </a>\r\n              <form class=\"drop__panel\">\r\n                <div class=\"social__links\">\r\n                  <a href=\"#\" class=\"social__yandex\"\r\n                    ><i class=\"fa-brands fa-yandex-international\"></i\r\n                  ></a>\r\n                  <a href=\"#\" class=\"social__google\">\r\n                    <svg class=\"icon icon-gp\">\r\n                      <use xlink:href=\"#icon-gp\"></use>\r\n                    </svg>\r\n                  </a>\r\n                </div>\r\n                <label for=\"login\">Login:</label>\r\n                <input type=\"text\" class=\"login\" placeholder=\"Login:\" />\r\n                <label for=\"login\">Password</label>\r\n                <input type=\"password\" class=\"password\" placeholder=\"Password\" />\r\n                <a href=\"\" class=\"btn\">sign in</a>\r\n                <div class=\"form__footer\">\r\n                  <a href=\"\" class=\"lost__password\">Forgot password?</a>\r\n                  <a href=\"../registration/rules.html\" class=\"sign__up\">Sign up</a>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <a class=\"btn__menu btn__burger\">\r\n              <div class=\"burger\">\r\n                <div class=\"burger__line\"></div>\r\n              </div>\r\n            </a>\r\n            <div class=\"header__themes\">\r\n              <a class=\"btn__menu header__theme\">\r\n                <svg class=\"icon m_ico icon-skin_\">\r\n                  <use xlink:href=\"#icon-skin\"></use>\r\n                </svg>\r\n                <svg class=\"icon m_ico icon-skin_m\">\r\n                  <use xlink:href=\"#icon-skin_m\"></use>\r\n                </svg>\r\n                <span class=\"btn__close\">\r\n                  <i class=\"line1\"></i>\r\n                  <i class=\"line2\"></i>\r\n                </span>\r\n              </a>\r\n              <ul class=\"themes__pop-up\">\r\n                <li style=\"order: 1\">\r\n                  <a class=\"theme__green\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"active\" style=\"order: 2\">\r\n                  <a class=\"theme__dgreen\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li style=\"order: 3\">\r\n                  <a class=\"theme__dblue\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li style=\"order: 4\">\r\n                  <a class=\"theme__amoled\">\r\n                    <span>\r\n                      <svg width=\"24\" height=\"24\">\r\n                        <use xlink:href=\"#icon-skin-check\"></use>\r\n                      </svg>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <menu class=\"menu\">\r\n              <div class=\"greenmenu\">\r\n                <form class=\"search\">\r\n                  <input\r\n                    class=\"search__bar\"\r\n                    type=\"search\"\r\n                    placeholder=\"Simple: super, divine, wasp\"\r\n                    maxlength=\"70\"\r\n                    minlength=\"3\"\r\n                  />\r\n                  <a class=\"search__icon\">\r\n                    <svg class=\"icon icon-search\">\r\n                      <use xlink:href=\"#icon-search\"></use>\r\n                    </svg>\r\n                  </a>\r\n                </form>\r\n                <nav class=\"nav\">\r\n                  <a href=\"../index.html\" class=\"nav__link\"> <i class=\"fas fa-home\"></i>Home</a>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-book-open\"></i>Novels</a>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-sync\"></i>Updates</a>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-fire\"></i>Popular</a>\r\n                  <div class=\"nav__border\"></div>\r\n                  <a href=\"./tagsCatalog.html\" class=\"nav__link active\"\r\n                    ><i class=\"fas fa-list\"></i>Genre catalog</a\r\n                  >\r\n                  <a href=\"\" class=\"nav__link\"\r\n                    ><i class=\"fas fa-clipboard-check\"></i>Completed novels</a\r\n                  >\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-folder-plus\"></i>Suggest a novel</a>\r\n                  <a href=\"\" class=\"nav__link\"\r\n                    ><i class=\"fa-solid fa-share-nodes\"></i>Collections</a\r\n                  >\r\n                  <div class=\"nav__border\"></div>\r\n                  <a href=\"\" class=\"nav__link\"><i class=\"fas fa-search\"></i>Local search engine</a>\r\n                  <a href=\"../contacts.html\" class=\"nav__link\"><i class=\"fas fa-envelope\"></i>Contacts</a>\r\n                  <a href=\"../rules.html\" class=\"nav__link\"><i class=\"fas fa-receipt\"></i>Rules</a>\r\n                </nav>\r\n              </div>\r\n            </menu>\r\n          </div>\r\n          <div class=\"header__upper\">\r\n            <a class=\"header__upper_btn\">\r\n              <svg class=\"icon icon-up\">\r\n                <use xlink:href=\"#icon-up\"></use>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </header>\r\n\r\n        <h2 class=\"page-title\"><a href=\"../index.html\">Ranobes</a> » Genres</h2>\r\n        <main>\r\n          <div class=\"content\">\r\n            <div class=\"tags-tabs\">\r\n              <a href=\"./catalog.html\">Tags catalog</a>\r\n              <a href=\"./genre.html\" class=\"tags-active\">Genres</a>\r\n              <a href=\"./authors.html\">Authors</a>\r\n              <a href=\"./languages.html\">Languages</a>\r\n            </div>\r\n            <div class=\"tab-content\">\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Action</h3>\r\n                <p>A work typically depicting fighting, violence, chaos, and fast paced motion.</p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Adult</h3>\r\n                <p>\r\n                  Contains mature content that is suitable only for adults. Titles in this category\r\n                  may include prolonged scenes of intense violence and/or graphic sexual content and\r\n                  nudity.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Adventure</h3>\r\n                <p>\r\n                  Exploring new places, environments or situations. This is often associated with\r\n                  people on long journeys to places far away encountering amazing things.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Comedy</h3>\r\n                <p>\r\n                  A dramatic work that is light and often humorous or satirical in tone and that\r\n                  usually contains a happy resolution of the thematic conflict.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Drama</h3>\r\n                <p>\r\n                  A work meant to bring on an emotional response, such as instilling sadness or\r\n                  tension. Novels that often show life or characters through conflict and emotions.\r\n                  In general, the different parts of the story tend to form a whole that is greater\r\n                  than the sum of the parts. In other words, the story has a message that is bigger\r\n                  than just the story line itself.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Ecchi</h3>\r\n                <p>\r\n                  Possibly the line between hentai and non-hentai, ecchi usually refers to\r\n                  fanservice put in to attract a certain group of fans.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Fantasy</h3>\r\n                <p>\r\n                  Anything that involves, but not limited to, magic, dream world, and fairy tales.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Game</h3>\r\n                <p>\r\n                  Novels related to game elements, or a similar system. For example: characters are\r\n                  immersed in VR, God closed people in space with the system, technologies like a\r\n                  game (RealRPG) descended into the world.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Gender Bender</h3>\r\n                <p>\r\n                  Girls dressing up as guys, guys dressing up as girls. Guys turning into girls,\r\n                  girls turning into guys.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Harem</h3>\r\n                <p>\r\n                  A series involving one male character and many female characters (usually\r\n                  attracted to the male character). A Reverse Harem is when the genders are\r\n                  reversed.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\">\r\n                <h3>Josei</h3>\r\n                <p>\r\n                  Literally [Woman]. Targets women 18-30. Female equivalent to seinen. Unlike shoujo\r\n                  the romance is more realistic and less idealized. The storytelling is more\r\n                  explicit and mature.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Historical</h3>\r\n                <p>\r\n                  Novels whose setting is in the past. Frequently these follow historical tales,\r\n                  sagas or facts. World with kingdom setting that are not from actual history saga,\r\n                  tales, are not included.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Horror</h3>\r\n                <p>Novels whose focus is to scare the audience.</p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Martial Arts</h3>\r\n                <p>\r\n                  The novel has a focus on any of several arts of combat or self-defense. These may\r\n                  include aikido, karate, judo, or tae kwon do, kendo, fencing, and so on and so\r\n                  forth.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Mature</h3>\r\n                <p>\r\n                  Contains subject matter which may be too extreme for a younger audience. Content\r\n                  that deals with mature themes such as gore, sex, or violence.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Mecha</h3>\r\n                <p>\r\n                  A work involving and usually concentrating on all types of large robotic machines.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Mystery</h3>\r\n                <p>\r\n                  Usually an unexplained event occurs, and the main protagonist attempts to find out\r\n                  what caused it.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Romance</h3>\r\n                <p>\r\n                  A story in this genre focus heavily on the romantic relationship between two or\r\n                  more people.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>School Life</h3>\r\n                <p>Having a major setting of the story deal with some type of school.</p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Sci-fi</h3>\r\n                <p>\r\n                  Short for science fiction, these works involve twists on technology and other\r\n                  science related phenomena which are contrary or stretches of the modern day\r\n                  scientific world.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Seinen</h3>\r\n                <p>\r\n                  Seinen means 'Young Man.' Novels that specifically targets young adult males\r\n                  around the ages of 18 to 25 are Seinen titles. Typically the story lines deal with\r\n                  the issues of adulthood.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Shoujo</h3>\r\n                <p>\r\n                  A work intended and primarily written for females. Usually the story is from the\r\n                  point of view of a young female protagonist and usually involves romance and\r\n                  drama.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Shounen</h3>\r\n                <p>\r\n                  A work intended and primarily written for younger male audience. These works\r\n                  usually involve, but not limited to, fighting and/or violence.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Slice of Life</h3>\r\n                <p>\r\n                  Novels with no focused plot. This genre tends to be naturalistic and mainly\r\n                  focuses around the main characters and their everyday lives. Often there will be\r\n                  some philosophical perspectives regarding love, relationships, life etc. tied into\r\n                  the novel. The overall typical moods for this type of story are cheery and\r\n                  carefree, no-rush life for the characters.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Shounen Ai</h3>\r\n                <p>\r\n                  Often synonymous with Yaoi, this can be thought of as somewhat less extreme and\r\n                  only hints at a relationship between two males. [Boy's Love], so to speak.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Sports</h3>\r\n                <p>\r\n                  As the name suggests, story with sports as one of its main element. Baseball,\r\n                  basketball, hockey, soccer, golf, and racing just to name a few.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Supernatural</h3>\r\n                <p>\r\n                  Usually entails amazing and unexplained powers or events which defy the laws of\r\n                  physics.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Smut</h3>\r\n                <p>\r\n                  Erotic work of fiction that's mainly targeted toward females. Smut stories often\r\n                  gives heavy focus on love and relationships between the main characters.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Tragedy</h3>\r\n                <p>Contains events resulting in great loss and misfortune.</p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Xianxia</h3>\r\n                <p>\r\n                  Xianxia is fictional martial art stories where the main goal of the population is\r\n                  cultivating to Immortality, seeking eternal life and the pinnacle of strength.\r\n                  Xianxia stories features supernatural elements, influenced heavily by Chinese\r\n                  folklore / mythology. Cultivation path in xianxia involves taoism/daoism elements.\r\n                  If the story doesn't mention the dao, odds are that it is not a Xianxia.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Xuanhuan</h3>\r\n                <p>\r\n                  Similar to xianxia, Xuanhuan may contain immortal cultivation. However, unlike\r\n                  xianxia, which is more focused on becoming immortal and tighter on chinese\r\n                  mythology, Xuanhuan is a broader, more loose genre. Basically, if it's a\r\n                  cultivation-based story, yet it contain elements of western fantasy, such as\r\n                  sci-fi, or magic that's not inherently eastern, then it is a xuanhuan.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Wuxia</h3>\r\n                <p>\r\n                  Wuxia is a fictional stories about mortal humans who can achieve superhuman\r\n                  ability through martial arts training or internal energy cultivation. Wuxia is\r\n                  usually depicted in an ancient china setting. Despite any existence of\r\n                  supernatural elements, characters in a wuxia are rarely depicted reaching over 150\r\n                  years of age. No immortality.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Yaoi</h3>\r\n                <p>\r\n                  This work usually involves intimate relationships between men. Mutually exclusive\r\n                  with shounen ai.\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"genre\"\r\n                ><h3>Yuri</h3>\r\n                <p>\r\n                  This work usually involves intimate relationships between women. Mutually\r\n                  exclusive with shoujo ai.\r\n                </p>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <aside>\r\n            <div class=\"block\">\r\n              <h2 class=\"tags-aside-title\">NEW ON SITE</h2>\r\n              <a href=\"\" class=\"new-novel\">\r\n                <h3>A Regressor’s Tale of Cultivation</h3>\r\n                <p class=\"text\">\r\n                  <span class=\"new-author\">Tremendous </span>·<span class=\"new-genre\">\r\n                    Psychological</span\r\n                  >\r\n                </p>\r\n              </a>\r\n              <a href=\"\" class=\"new-novel\"\r\n                ><h3>I Fabricated the Techniques, but My Disciple Really Mastered Them?</h3>\r\n                <p class=\"text\">\r\n                  <span class=\"new-author\">Half a clear breeze </span>·<span class=\"new-genre\">\r\n                    Xuanhuan</span\r\n                  >\r\n                </p></a\r\n              >\r\n              <a href=\"\" class=\"new-novel\"\r\n                ><h3>Cultivation Nerd</h3>\r\n                <p class=\"text\">\r\n                  <span class=\"new-author\">HolyMouse </span>·<span class=\"new-genre\"> Xianxia</span>\r\n                </p></a\r\n              >\r\n            </div>\r\n            <div class=\"line\"></div>\r\n          </aside>\r\n        </main>\r\n        <footer class=\"footer\">\r\n          <p>Each book is <span>a new life</span> filled with new adventures.</p>\r\n          <a href=\"#\">Completed novels</a>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-black.eot":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-black.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5d7af9ae9d0446cce7bb.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-black.svg":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-black.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-black.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-black.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-black.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-black.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-black.woff":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-black.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-black.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-black.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "39d3c1c39a14e1bb4e7f.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-blackitalic.eot":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-blackitalic.eot ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "614a0e211ff476548355.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-blackitalic.svg":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-blackitalic.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-blackitalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-blackitalic.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-blackitalic.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-blackitalic.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-blackitalic.woff":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-blackitalic.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-blackitalic.woff2":
/*!*********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-blackitalic.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9948a2f9c9c0dda663f4.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bold.eot":
/*!************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bold.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2eca11eb8ebc1d254a45.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bold.svg":
/*!************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bold.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-bold.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bold.ttf":
/*!************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bold.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-bold.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bold.woff":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bold.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bold.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bold.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ad94330d291c377feb86.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bolditalic.eot":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bolditalic.eot ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9157e0529467fd730405.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bolditalic.svg":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bolditalic.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-bolditalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bolditalic.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bolditalic.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-bolditalic.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bolditalic.woff":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bolditalic.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bolditalic.woff2":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bolditalic.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f69fc87382b0e46563b9.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-italic.eot":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-italic.eot ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "24e9ce4fcf28daac6d01.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-italic.svg":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-italic.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-italic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-italic.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-italic.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-italic.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-italic.woff":
/*!***************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-italic.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-italic.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-italic.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef72fe7a4269179edd41.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-light.eot":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-light.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "67dcc6c3498622fd4642.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-light.svg":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-light.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-light.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-light.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-light.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-light.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-light.woff":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-light.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-light.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-light.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c337768035c47738acf0.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-lightitalic.eot":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-lightitalic.eot ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "59020da5eeb10710eb09.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-lightitalic.svg":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-lightitalic.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-lightitalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-lightitalic.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-lightitalic.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-lightitalic.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-lightitalic.woff":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-lightitalic.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-lightitalic.woff2":
/*!*********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-lightitalic.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d8cf32f2563af29e9bc.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-medium.eot":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-medium.eot ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "38b9efdc31bc5e2f8f93.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-medium.svg":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-medium.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-medium.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-medium.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-medium.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-medium.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-medium.woff":
/*!***************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-medium.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-medium.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-medium.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "475a0173f7022f67dc86.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-mediumitalic.eot":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-mediumitalic.eot ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e7e640aeea71e9e66299.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-mediumitalic.svg":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-mediumitalic.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-mediumitalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-mediumitalic.ttf":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-mediumitalic.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampro-mediumitalic.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-mediumitalic.woff":
/*!*********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-mediumitalic.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-mediumitalic.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-mediumitalic.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9c273c20b9849f8e3e6.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-bold.eot":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-bold.eot ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "41002f3c0618b6e59733.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-bold.svg":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-bold.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampronarrow-bold.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-bold.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-bold.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampronarrow-bold.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-bold.woff":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-bold.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-bold.woff2":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-bold.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b4c8b9f0badef1f284a3.woff2";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-medium.eot":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-medium.eot ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "965c6317d7c1ce7bacb6.eot";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-medium.svg":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-medium.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampronarrow-medium.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-medium.ttf":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-medium.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/gothampronarrow-medium.ttf";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-medium.woff":
/*!*********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-medium.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-medium.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-medium.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fefef2b3329a252eb2f5.woff2";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.ttf":
/*!*************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.ttf ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/fa-brands-400.ttf";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.woff2":
/*!***************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-brands-400.woff2 ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8d3cabfc66809162fb4d.woff2";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.ttf":
/*!**************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.ttf ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/fa-regular-400.ttf";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.woff2":
/*!****************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-regular-400.woff2 ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e931bc0d14f5bbb1da22.woff2";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.ttf":
/*!************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.ttf ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/fa-solid-900.ttf";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.woff2":
/*!**************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-solid-900.woff2 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb8184add5a3101ad0a3.woff2";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.ttf":
/*!******************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.ttf ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/fa-v4compatibility.ttf";

/***/ }),

/***/ "./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.woff2":
/*!********************************************************************************!*\
  !*** ./src/fonts/fontawesome-free-6.5.1-web/webfonts/fa-v4compatibility.woff2 ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3049b13a93f07e026fc.woff2";

/***/ }),

/***/ "./src/img/admin.jpg":
/*!***************************!*\
  !*** ./src/img/admin.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/admin.jpg";

/***/ }),

/***/ "./src/img/avatar.jpg":
/*!****************************!*\
  !*** ./src/img/avatar.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/avatar.jpg";

/***/ }),

/***/ "./src/img/bookmark-icon.svg":
/*!***********************************!*\
  !*** ./src/img/bookmark-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bookmark-icon.svg";

/***/ }),

/***/ "./src/img/circle-of-inevitability.jpg":
/*!*********************************************!*\
  !*** ./src/img/circle-of-inevitability.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/circle-of-inevitability.jpg";

/***/ }),

/***/ "./src/img/cultist-of-cerebon.webp":
/*!*****************************************!*\
  !*** ./src/img/cultist-of-cerebon.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cultist-of-cerebon.webp";

/***/ }),

/***/ "./src/img/i-become-a-mafia-in-the-academy.jpg":
/*!*****************************************************!*\
  !*** ./src/img/i-become-a-mafia-in-the-academy.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/i-become-a-mafia-in-the-academy.jpg";

/***/ }),

/***/ "./src/img/i-can-extract-everything.jpg":
/*!**********************************************!*\
  !*** ./src/img/i-can-extract-everything.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/i-can-extract-everything.jpg";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./src/img/martial-peak.jpg":
/*!**********************************!*\
  !*** ./src/img/martial-peak.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/martial-peak.jpg";

/***/ }),

/***/ "./src/img/re-monarch.webp":
/*!*********************************!*\
  !*** ./src/img/re-monarch.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/re-monarch.webp";

/***/ }),

/***/ "./src/img/stars-rate-current.svg":
/*!****************************************!*\
  !*** ./src/img/stars-rate-current.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/stars-rate-current.svg";

/***/ }),

/***/ "./src/img/stars-rate.svg":
/*!********************************!*\
  !*** ./src/img/stars-rate.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/stars-rate.svg";

/***/ }),

/***/ "./src/img/stranger-danger.webp":
/*!**************************************!*\
  !*** ./src/img/stranger-danger.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/stranger-danger.webp";

/***/ }),

/***/ "./src/img/supremacy-games.jpg":
/*!*************************************!*\
  !*** ./src/img/supremacy-games.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/supremacy-games.jpg";

/***/ }),

/***/ "./src/img/the-celestial-returned-from-hell.jpg":
/*!******************************************************!*\
  !*** ./src/img/the-celestial-returned-from-hell.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/the-celestial-returned-from-hell.jpg";

/***/ }),

/***/ "./src/img/the-extra-of-the-lunerra.webp":
/*!***********************************************!*\
  !*** ./src/img/the-extra-of-the-lunerra.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/the-extra-of-the-lunerra.webp";

/***/ }),

/***/ "./src/img/the-supreme-magus.jpg":
/*!***************************************!*\
  !*** ./src/img/the-supreme-magus.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/the-supreme-magus.jpg";

/***/ }),

/***/ "./src/img/thunder-gods-reincarnation.jpg":
/*!************************************************!*\
  !*** ./src/img/thunder-gods-reincarnation.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/thunder-gods-reincarnation.jpg";

/***/ }),

/***/ "./src/img/ultragene-warlord.jpg":
/*!***************************************!*\
  !*** ./src/img/ultragene-warlord.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ultragene-warlord.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.8f49c95d6be0d83de530.js.map