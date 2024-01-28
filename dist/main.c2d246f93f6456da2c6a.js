/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (() => {

const page = document.querySelector('.page');
const headerTop = document.querySelector('.header__top');
const BtnUpper = document.querySelector('.header__upper');
console.log(page.offsetHeight);
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
    behavior: 'smooth'
  });
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  background-color: #474747;
  max-width: 80px;
  position: absolute;
  border-radius: 8px 0px 0px 8px;
  top: 0;
  left: 0;
  bottom: 0;
}
.header .header__top {
  transition: all 0.4s ease-in;
}
.header .fixed {
  position: fixed;
  top: 0;
  transition: all 0.4s ease-in;
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
.header .icon-login {
  width: 34px;
  height: 38px;
  fill: #323232;
  stroke: #323232;
}
.header .burger {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.header .burger:hover .burger__line {
  background-color: #1a1a1a;
}
.header .burger__line {
  height: 3px;
  width: 40px;
  background-color: #3b3a3a;
  border-radius: 2px;
  margin-bottom: 6px;
  transition: all 0.3s;
}
.header .burger__line:last-child {
  margin-bottom: 0;
}
.header .header__theme svg {
  fill: #323232;
  height: 48px;
  width: 48px;
}
.header .header__upper {
  width: 80px;
  height: 80px;
  cursor: pointer;
  text-align: center;
  position: absolute;
  bottom: 0;
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

main {
  border-left: solid #3b3b3b 1px;
  display: flex;
  margin-left: 80px;
}

.novel {
  margin-bottom: 50px;
}

.novel__info {
  margin: 35px 0;
  padding: 0 35px;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
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
.novel__info .novel__rate-date {
  display: flex;
  align-items: center;
}
.novel__info .novel__rate-date .unit__rating {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  background-color: transparent;
  height: 18px;
  display: flex;
  position: relative;
  margin-right: 15px;
}
.novel__info .novel__rate-date .current__rating {
  position: absolute;
  width: 50%;
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
.novel__tools .btn-bookmark {
  padding: 12px 16px;
  text-align: center;
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

.new__chapters .title__new__chapters {
  text-align: center;
}
.new__chapters .title__new__chapters .midtitle__new__chapters {
  font-family: "GothamPro-Bold";
  font-weight: 600;
  font-size: 14px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.new__chapters .title__new__chapters span {
  background-color: #474747;
  padding: 0px 14px;
}
.new__chapters .title__new__chapters span::after,
.new__chapters .title__new__chapters span::before {
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
.new__chapters .title__new__chapters span::before {
  left: -68%;
}
.new__chapters .title__new__chapters span::after {
  transform: scaleX(-1);
  right: -68%;
}
.new__chapters .new__chapter {
  display: flex;
  transition: all 0.3s;
}
.new__chapters .new__chapter:hover .chapter__info {
  opacity: 1;
}
.new__chapters .chapter__img {
  margin-right: 1rem;
  border-radius: 50%;
  -o-object-fit: cover;
     object-fit: cover;
  width: 64px;
  height: 64px;
}
.new__chapters .chapter__info {
  opacity: 0.8;
}
.new__chapters .title__novel {
  font-size: 14px;
  font-family: "GothamPro-Bold";
  font-weight: 800;
  letter-spacing: 0.4px;
  line-height: 1.35em;
  margin-bottom: 3px;
}
.new__chapters .charter__number {
  font-size: 14px;
}
.new__chapters .chapter__time {
  font-size: 12px;
  color: #999;
}
.new__chapters .block-updates {
  text-align: center;
  height: 40px;
}
.new__chapters .block-updates .btn-updates {
  display: inline-block;
}

.footer {
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
.footer span {
  font-family: "GothamPro-Black";
  font-weight: 700;
}
.footer a:hover {
  color: #212121;
  -webkit-text-decoration: underline;
  text-decoration: underline;
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
}
body .body {
  background-color: #474747;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.11), 0 0 35px 0 rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  position: relative;
}
body .container {
  display: flex;
}
body .content {
  width: 67.74%;
  border-right: 1px solid #3b3b3b;
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
  color: #efefef;
}
body .btn:hover {
  background-color: #5d5c5c;
  background-image: -webkit-linear-gradient(top, #5d5c5c 0%, #818181 100%);
  transition: all 0.3s ease-in-out;
}
body .block {
  margin: 35px 0;
  padding: 0 35px;
}`, "",{"version":3,"sources":["webpack://./src/scss/header/_style.header.scss","webpack://./src/scss/header/_vars.header.scss","webpack://./src/scss/index.scss","webpack://./src/scss/NewNovels/_style.newnovels.scss","webpack://./src/scss/_fonts.scss"],"names":[],"mappings":"AAEA;EACE,yBCFW;EDGX,eCDY;EDEZ,kBAAA;EACA,8BAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;AEDF;AFEE;EACE,4BAAA;AEAJ;AFEE;EACE,eAAA;EACA,MAAA;EACA,4BAAA;AEAJ;AFEE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WCnBU;EDoBV,YCpBU;EDqBV,2DACE;AEDN;AFIE;EACE,oBAAA;AEFJ;AFKI;EACE,aAAA;EACA,eAAA;AEHN;AFOI;EACE,aCnCa;EDoCb,eCpCa;AC+BnB;AFQE;EACE,WAAA;EACA,YAAA;AENJ;AFQE;EACE,WAAA;EACA,YAAA;EACA,aC9Ce;ED+Cf,eC/Ce;ACyCnB;AFQE;EACE,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;AENJ;AFSI;EACE,yBAAA;AEPN;AFUE;EACE,WAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,oBAAA;AERJ;AFUE;EACE,gBAAA;AERJ;AFUE;EACE,aCxEe;EDyEf,YAAA;EACA,WAAA;AERJ;AFUE;EACE,WC9EU;ED+EV,YC/EU;EDgFV,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;AERJ;AFUE;EACE,WAAA;EACA,aAAA;EACA,YCxFU;ACgFd;AFWI;EACE,aAAA;EACA,eAAA;AETN;;AFaA;EACE,8BAAA;EACA,aAAA;EACA,iBCpGY;AC0Fd;;AC3FA;EACE,mBAAA;AD8FF;;AC5FA;EACE,cAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;AD+FF;AC9FE;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,+CAAA;EACA,kBAAA;EACA,oBAAA;KAAA,iBAAA;ADgGJ;AC9FE;EACE,6BAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ADgGJ;AC9FE;EACE,cAAA;EACA,kCAAA;ADgGJ;AC9FE;EACE,eAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;ADgGJ;AC9FE;EACE,cAAA;EACA,mBAAA;ADgGJ;AC9FE;EACE,aAAA;EACA,mBAAA;ADgGJ;AC/FI;EACE,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,6BAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;ADiGN;AC/FI;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;ADiGN;AC/FI;EACE,mDAAA;EACA,mBAAA;EACA,6BAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;EACA,cAAA;EACA,yBAAA;ADiGN;AC/FI;EACE,+CAAA;EACA,cAAA;EACA,gCAAA;ADiGN;;AC7FA;EACE,6BAAA;EACA,kBAAA;ADgGF;;AC7FA;EACE,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,mCAAA;ADgGF;AC/FE;EACE,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;ADiGJ;AC9FE;EACE,kBAAA;EACA,kBAAA;ADgGJ;AC7FI;EACE,cAAA;EACA,gCAAA;AD+FN;AC5FE;EACE,aAAA;EACA,mBAAA;AD8FJ;AC7FI;EACE,YAAA;EACA,iBAAA;AD+FN;AC7FI;EACE,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,cAAA;AD+FN;;AC1FE;EACE,kBAAA;AD6FJ;AC5FI;EACE,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;AD8FN;AC5FI;EACE,yBAAA;EACA,iBAAA;AD8FN;AC5FI;;EAEE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,QAAA;EACA,WAAA;EACA,kBAAA;EACA,6DAAA;EACA,YAAA;AD8FN;AC5FI;EACE,UAAA;AD8FN;AC5FI;EACE,qBAAA;EACA,WAAA;AD8FN;AC3FE;EACE,aAAA;EACA,oBAAA;AD6FJ;AC1FI;EACE,UAAA;AD4FN;ACzFE;EACE,kBAAA;EACA,kBAAA;EACA,oBAAA;KAAA,iBAAA;EACA,WAAA;EACA,YAAA;AD2FJ;ACzFE;EACE,YAAA;AD2FJ;ACzFE;EACE,eAAA;EACA,6BAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;AD2FJ;ACzFE;EACE,eAAA;AD2FJ;ACzFE;EACE,eAAA;EACA,WAAA;AD2FJ;ACzFE;EACE,kBAAA;EACA,YAAA;AD2FJ;ACzFI;EACE,qBAAA;AD2FN;;ACvFA;EACE,aAAA;EACA,8BAAA;EACA,8BAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,6BAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;AD0FF;ACzFE;EACE,8BAAA;EACA,gBAAA;AD2FJ;ACzFE;EACE,cAAA;EACA,kCAAA;EAAA,0BAAA;AD2FJ;;AE/TA;EACE,8BAAA;EACA,4CAAA,EAAA,4BAAA;EACA,4SACE,EAMiB,2BAAA;AF2TrB;AExTA;EACE,oCAAA;EACA,4CAAA,EAAA,4BAAA;EACA,8SACE,EAM2F,2BAAA;AFmT/F;AEhTA;EACE,6BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AF2SrB;AExSA;EACE,mCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMyF,2BAAA;AFmS7F;AEhSA;EACE,+BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AF2RrB;AExRA;EACE,8BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AFmRrB;AEhRA;EACE,oCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAM2F,2BAAA;AF2Q/F;AExQA;EACE,+BAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMiB,2BAAA;AFmQrB;AEhQA;EACE,qCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAM6F,2BAAA;AF2PjG;AExPA;EACE,mCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAMyF,2BAAA;AFmP7F;AEhPA;EACE,qCAAA;EACA,6CAAA,EAAA,4BAAA;EACA,iTACE,EAM6F,2BAAA;AF2OjG;AAnXA;EACE,SAAA;AAqXF;;AAnXA;EACE,6BAAA;EAAA,qBAAA;EACA,cAAA;AAsXF;;AApXA;EACE,yBDZW;ECaX,8BAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;EACA,cAAA;AAuXF;AAtXE;EACE,iBAAA;EACA,cAAA;EACA,aAAA;AAwXJ;AAtXE;EACE,yBDxBS;ECyBT,2EACE;EAEF,kBD3BkB;EC4BlB,kBAAA;AAsXJ;AAnXE;EACE,aAAA;AAqXJ;AAnXE;EACE,aAAA;EACA,+BAAA;AAqXJ;AAnXE;EACE,6BAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,2CAAA;EACA,wEAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AAqXJ;AAnXE;EACE,yBAAA;EACA,wEAAA;EACA,gCAAA;AAqXJ;AAnXE;EACE,cAAA;EACA,eAAA;AAqXJ","sourcesContent":["@import './vars.header';\r\n\r\n.header {\r\n  background-color: $backColour;\r\n  max-width: $widthHeader;\r\n  position: absolute;\r\n  border-radius: $sizeRadiusContainer 0px 0px $sizeRadiusContainer;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  .header__top {\r\n    transition: all 0.4s ease-in;\r\n  }\r\n  .fixed {\r\n    position: fixed;\r\n    top: 0;\r\n    transition: all 0.4s ease-in;\r\n  }\r\n  .btn__menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: $widthHeader;\r\n    height: $widthHeader;\r\n    box-shadow:\r\n      0 1px 0 0 transparent,\r\n      inset 0 -1px 0 0 #3b3b3b;\r\n  }\r\n  .btn__menu svg {\r\n    transition: all 0.3s;\r\n  }\r\n  .btn__menu:hover {\r\n    svg {\r\n      fill: #171717;\r\n      stroke: #171717;\r\n    }\r\n  }\r\n  .btn__menu:first-child:hover {\r\n    svg {\r\n      fill: $colorHeaderIcons;\r\n      stroke: $colorHeaderIcons;\r\n    }\r\n  }\r\n  .svg__logo {\r\n    width: calc($widthHeader/2);\r\n    height: calc($widthHeader/2);\r\n  }\r\n  .icon-login {\r\n    width: 34px;\r\n    height: 38px;\r\n    fill: $colorHeaderIcons;\r\n    stroke: $colorHeaderIcons;\r\n  }\r\n  .burger {\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .burger:hover {\r\n    .burger__line {\r\n      background-color: #1a1a1a;\r\n    }\r\n  }\r\n  .burger__line {\r\n    height: 3px;\r\n    width: calc($widthHeader/2);\r\n    background-color: #3b3a3a;\r\n    border-radius: 2px;\r\n    margin-bottom: 6px;\r\n    transition: all 0.3s;\r\n  }\r\n  .burger__line:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  .header__theme svg {\r\n    fill: $colorHeaderIcons;\r\n    height: 48px;\r\n    width: 48px;\r\n  }\r\n  .header__upper {\r\n    width: $widthHeader;\r\n    height: $widthHeader;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n  .header__upper svg {\r\n    width: calc($widthHeader/4);\r\n    fill: #3b3a3a;\r\n    height: $widthHeader;\r\n  }\r\n  .header__upper:hover {\r\n    svg {\r\n      fill: #a9a9a9;\r\n      stroke: #a9a9a9;\r\n    }\r\n  }\r\n}\r\nmain {\r\n  border-left: solid #3b3b3b 1px;\r\n  display: flex;\r\n  margin-left: $widthHeader;\r\n}\r\n","$bodyColour: #3b3a3a;\r\n$backColour: #474747;\r\n$sizeRadiusContainer: 8px;\r\n$widthHeader: 80px;\r\n$colorHeaderIcons: #323232;\r\n","@import './header/style.header';\r\n@import './NewNovels/style.newnovels';\r\n@import './fonts';\r\n\r\n* {\r\n  margin: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\nbody {\r\n  background-color: $bodyColour;\r\n  font-family: 'GothamPro-Light';\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.012em;\r\n  line-height: 1.5;\r\n  color: #cccccc;\r\n  .page {\r\n    max-width: 1320px;\r\n    margin: 0 auto;\r\n    padding: 30px;\r\n  }\r\n  .body {\r\n    background-color: $backColour;\r\n    box-shadow:\r\n      0 2px 6px 0 rgba(0, 0, 0, 0.11),\r\n      0 0 35px 0 rgba(0, 0, 0, 0.06);\r\n    border-radius: $sizeRadiusContainer;\r\n    position: relative;\r\n    \r\n  }\r\n  .container {\r\n    display: flex;\r\n  }\r\n  .content {\r\n    width: 67.74%;\r\n    border-right: 1px solid #3b3b3b;\r\n  }\r\n  .btn {\r\n    font-family: 'GothamPro-Bold';\r\n    border-radius: 20px;\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);\r\n    background-image: -webkit-linear-gradient(top, #626262 0%, #626262 100%);\r\n    background-color: #626262;\r\n    text-align: center;\r\n    color: #efefef;\r\n  }\r\n  .btn:hover {\r\n    background-color: #5d5c5c;\r\n    background-image: -webkit-linear-gradient(top, #5d5c5c 0%, #818181 100%);\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  .block {\r\n    margin: 35px 0;\r\n    padding: 0 35px;\r\n  }\r\n}\r\n","@import './vars.newnovels';\r\n\r\n.novel {\r\n  margin-bottom: 50px;\r\n}\r\n.novel__info {\r\n  margin: 35px 0;\r\n  padding: 0 35px;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 35px;\r\n  .novel__img {\r\n    width: 140px;\r\n    height: 175px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 12px 20px -6px rgba(0, 0, 0, 0.1);\r\n    margin-right: 35px;\r\n    object-fit: cover;\r\n  }\r\n  .novel__title {\r\n    font-family: 'GothamPro-Bold';\r\n    font-size: 18px;\r\n    letter-spacing: -0.01em;\r\n    line-height: 1.35em;\r\n    margin-bottom: 5px;\r\n  }\r\n  .novel__title:hover {\r\n    color: #95ac7c;\r\n    transition: color 0.3s ease-in-out;\r\n  }\r\n  .novel__tags {\r\n    font-size: 12px;\r\n    color: #999;\r\n    font-weight: 800;\r\n    margin-bottom: 10px;\r\n  }\r\n  .novel__description {\r\n    color: #bdbdbd;\r\n    margin-bottom: 15px;\r\n  }\r\n  .novel__rate-date {\r\n    display: flex;\r\n    align-items: center;\r\n    .unit__rating {\r\n      user-select: none;\r\n      background-color: transparent;\r\n      height: 18px;\r\n      display: flex;\r\n      position: relative;\r\n      margin-right: 15px;\r\n    }\r\n    .current__rating {\r\n      position: absolute;\r\n      width: 50%;\r\n      height: 100%;\r\n      z-index: 12;\r\n      display: flex;\r\n      overflow: hidden;\r\n    }\r\n    .upload__date {\r\n      background-color: #95ac7c24;\r\n      border-radius: 16px;\r\n      font-family: 'GothamPro-Bold';\r\n      font-size: 11px;\r\n      font-weight: 800;\r\n      text-align: center;\r\n      line-height: 1.1;\r\n      padding: 3px 6px 3px 3px;\r\n      color: #95ac7c;\r\n      text-transform: uppercase;\r\n    }\r\n    .upload__date:hover {\r\n      background-color: #1a1a1a3b;\r\n      color: #828282;\r\n      transition: all 0.3s ease-in-out;\r\n    }\r\n  }\r\n}\r\n.border {\r\n  border-top: 1px solid #3b3b3b;\r\n  position: relative;\r\n}\r\n\r\n.novel__tools {\r\n  background-color: #474747;\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 35px;\r\n  max-height: 40px;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-top: -21px;\r\n  position: relative;\r\n  z-index: 1;\r\n  box-shadow: inset 0 0 0 1px #3b3b3b;\r\n  .btn-read {\r\n    width: 110px;\r\n    max-height: 40px;\r\n    text-align: center;\r\n    border: 0;\r\n    outline: none;\r\n    z-index: 1000;\r\n    position: relative;\r\n  }\r\n\r\n  .btn-bookmark {\r\n    padding: 12px 16px;\r\n    text-align: center;\r\n  }\r\n  .btn-bookmark:hover {\r\n    .bookmark__title {\r\n      color: #828282;\r\n      transition: all 0.3s ease-in-out;\r\n    }\r\n  }\r\n  .bookmark {\r\n    display: flex;\r\n    align-items: center;\r\n    img {\r\n      height: 16px;\r\n      margin-right: 4px;\r\n    }\r\n    .bookmark__title {\r\n      font-family: 'GothamPro-Bold';\r\n      font-weight: 700;\r\n      font-size: 12px;\r\n      line-height: 1.7;\r\n      text-transform: uppercase;\r\n      color: #95ac7c;\r\n    }\r\n  }\r\n}\r\n.new__chapters {\r\n  .title__new__chapters {\r\n    text-align: center;\r\n    .midtitle__new__chapters {\r\n      font-family: 'GothamPro-Bold';\r\n      font-weight: 600;\r\n      font-size: 14px;\r\n      position: relative;\r\n      z-index: 1;\r\n      overflow: hidden;\r\n    }\r\n    span {\r\n      background-color: #474747;\r\n      padding: 0px 14px;\r\n    }\r\n    span::after,\r\n    span::before {\r\n      border-radius: 8px;\r\n      width: 110%;\r\n      height: 2px;\r\n      display: block;\r\n      top: 50%;\r\n      content: '';\r\n      position: absolute;\r\n      background: linear-gradient(45deg, #474747 60%, #797d7f 100%);\r\n      z-index: -11;\r\n    }\r\n    span::before {\r\n      left: -68%;\r\n    }\r\n    span::after {\r\n      transform: scaleX(-1);\r\n      right: -68%;\r\n    }\r\n  }\r\n  .new__chapter {\r\n    display: flex;\r\n    transition: all .3s;\r\n  }\r\n  .new__chapter:hover{\r\n    .chapter__info {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .chapter__img {\r\n    margin-right: 1rem;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n  .chapter__info {\r\n    opacity: 0.8;\r\n  }\r\n  .title__novel {\r\n    font-size: 14px;\r\n    font-family: 'GothamPro-Bold';\r\n    font-weight: 800;\r\n    letter-spacing: 0.4px;\r\n    line-height: 1.35em;\r\n    margin-bottom: 3px;\r\n  }\r\n  .charter__number {\r\n    font-size: 14px;\r\n  }\r\n  .chapter__time {\r\n    font-size: 12px;\r\n    color: #999;\r\n  }\r\n  .block-updates {\r\n    text-align: center;\r\n    height: 40px;\r\n\r\n    .btn-updates {\r\n      display: inline-block;\r\n    }\r\n  }\r\n}\r\n.footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-left: 1px solid #3b3b3b;\r\n  margin-left: 80px;\r\n  padding: 30px 50px;\r\n  background-color: #474747;\r\n  border-top: 1px solid #3b3b3b;\r\n  border-radius: 0px 0px 8px 0px;\r\n  font-size: 12px;\r\n  color: #999;\r\n  span {\r\n    font-family: 'GothamPro-Black';\r\n    font-weight: 700;\r\n  }\r\n  a:hover {\r\n    color: #212121;\r\n    text-decoration: underline;\r\n  }\r\n}\r\n","@font-face {\r\n  font-family: 'GothamPro-Black';\r\n  src: url('../fonts/GothamPro/gothampro-black.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-black.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-black.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-black.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-black.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-black.svg#gothampro-black')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-BlackItalic';\r\n  src: url('../fonts/GothamPro/gothampro-blackitalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-blackitalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-blackitalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-blackitalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-blackitalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-blackitalic.svg#gothampro-blackitalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Bold';\r\n  src: url('../fonts/GothamPro/gothampro-bold.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-bold.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-bold.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-bold.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-bold.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-bold.svg#gothampro-bold')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-BoldItalic';\r\n  src: url('../fonts/GothamPro/gothampro-bolditalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-bolditalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-bolditalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-bolditalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-bolditalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-bolditalic.svg#gothampro-bolditalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Italic';\r\n  src: url('../fonts/GothamPro/gothampro-italic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-italic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-italic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-italic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-italic.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-italic.svg#gothampro-italic')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Light';\r\n  src: url('../fonts/GothamPro/gothampro-light.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-light.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-light.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-light.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-light.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-light.svg#gothampro-light')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-LightItalic';\r\n  src: url('../fonts/GothamPro/gothampro-lightitalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-lightitalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-lightitalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-lightitalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-lightitalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-lightitalic.svg#gothampro-lightitalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-Medium';\r\n  src: url('../fonts/GothamPro/gothampro-medium.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-medium.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-medium.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-medium.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */ url('../fonts/GothamPro/gothampro-medium.ttf')\r\n      format('truetype'),\r\n    /* Safari, Android, iOS */ url('../fonts/GothamPro/gothampro-medium.svg#gothampro-medium')\r\n      format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamPro-MediumItalic';\r\n  src: url('../fonts/GothamPro/gothampro-mediumitalic.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampro-mediumitalic.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampro-mediumitalic.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampro-mediumitalic.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampro-mediumitalic.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampro-mediumitalic.svg#gothampro-mediumitalic') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamProNarrow-Bold';\r\n  src: url('../fonts/GothamPro/gothampronarrow-bold.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampronarrow-bold.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampronarrow-bold.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampronarrow-bold.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampronarrow-bold.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampronarrow-bold.svg#gothampronarrow-bold') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n\r\n@font-face {\r\n  font-family: 'GothamProNarrow-Medium';\r\n  src: url('../fonts/GothamPro/gothampronarrow-medium.eot'); /* IE 9 Compatibility Mode */\r\n  src:\r\n    url('../fonts/GothamPro/gothampronarrow-medium.eot?#iefix') format('embedded-opentype'),\r\n    /* IE < 9 */ url('../fonts/GothamPro/gothampronarrow-medium.woff2') format('woff2'),\r\n    /* Super Modern Browsers */ url('../fonts/GothamPro/gothampronarrow-medium.woff') format('woff'),\r\n    /* Firefox >= 3.6, any other modern browser */\r\n      url('../fonts/GothamPro/gothampronarrow-medium.ttf') format('truetype'),\r\n    /* Safari, Android, iOS */\r\n      url('../fonts/GothamPro/gothampronarrow-medium.svg#gothampronarrow-medium') format('svg'); /* Chrome < 4, Legacy iOS */\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<!doctype html>\r\n<html lang=\"en ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Novels online - RANOBES.COPY - Ranobes</title>\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" />\r\n    <svg\r\n      aria-hidden=\"true\"\r\n      style=\"position: absolute; width: 0; height: 0; overflow: hidden\"\r\n      width=\"0\"\r\n      height=\"0\"\r\n      version=\"1.1\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <defs>\r\n        <symbol id=\"icon-login\" viewBox=\"0 0 916 1024\">\r\n          <path\r\n            d=\"M808.421 1024h-700.632c-59.284 0-107.789-48.505-107.789-107.789v-377.263c0-59.284 48.505-107.789 107.789-107.789h565.895v-242.526c0-59.284-48.505-107.789-107.789-107.789h-215.579c-59.284 0-107.789 48.505-107.789 107.789v161.684h-80.842v-161.684c0-105.095 83.537-188.632 188.632-188.632h215.579c105.095 0 188.632 83.537 188.632 188.632v242.526h53.895c59.284 0 107.789 48.505 107.789 107.789v377.263c0 59.284-48.505 107.789-107.789 107.789zM835.368 565.895c0-29.642-24.253-53.895-53.895-53.895h-646.737c-29.642 0-53.895 24.253-53.895 53.895v323.368c0 29.642 24.253 53.895 53.895 53.895h646.737c29.642 0 53.895-24.253 53.895-53.895v-323.368zM458.105 862.316c-75.453 0-134.737-59.284-134.737-134.737s59.284-134.737 134.737-134.737c75.453 0 134.737 59.284 134.737 134.737s-59.284 134.737-134.737 134.737zM458.105 673.684c-29.642 0-53.895 24.253-53.895 53.895s24.253 53.895 53.895 53.895c29.642 0 53.895-24.253 53.895-53.895s-24.253-53.895-53.895-53.895z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-up\" viewBox=\"0 0 597 1024\">\r\n          <path\r\n            d=\"M585.956 327.111c-17.067 17.067-42.667 17.067-59.733 0l-184.889-182.044v836.267c0 22.756-19.911 42.667-42.667 42.667v0c-22.756 0-42.667-19.911-42.667-42.667v-836.267l-184.889 184.889c-17.067 17.067-42.667 17.067-59.733 0s-17.067-42.667 0-59.733l250.311-250.311c2.844-2.844 2.844-5.689 5.689-8.533 8.533-8.533 22.756-11.378 36.978-11.378 2.844 0 5.689 0 5.689 0s2.844 0 2.844 0c8.533 2.844 14.222 8.533 17.067 14.222l253.156 253.156c17.067 17.067 17.067 45.511 2.844 59.733z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin\" viewBox=\"0 0 48 48\">\r\n          <path\r\n            d=\"m24.04,37.75l-4.12-4h-5.59v-5.61l-4.07-4.1,4.07-4.1v-5.61h5.6l4.08-4.08,4.07,4.08h5.62v5.61l4.07,4.1-4.07,4.1v5.61h-5.61l-4.04,4ZM7,24.03c0,.66.22,1.22.67,1.67l3.65,3.67v4.99c0,.66.23,1.22.7,1.68s1.03.7,1.68.7h5l3.68,3.57c.45.45,1,.68,1.66.68s1.21-.23,1.67-.68l3.61-3.57h4.99c.65,0,1.21-.23,1.68-.7s.7-1.03.7-1.68v-4.99l3.65-3.67c.45-.45.67-1,.67-1.66s-.22-1.22-.67-1.67l-3.65-3.67v-4.99c0-.66-.23-1.22-.7-1.68s-1.03-.7-1.68-.7h-4.99l-3.61-3.61c-.48-.48-1.04-.71-1.7-.71s-1.21.23-1.67.68l-3.66,3.65h-4.98c-.65,0-1.21.23-1.68.7s-.7,1.03-.7,1.68v4.99l-3.65,3.67c-.45.45-.67,1-.67,1.66Zm24-.03c0,3.87-3.13,7-7,7v-14c3.87,0,7,3.13,7,7Z\"\r\n          ></path>\r\n        </symbol>\r\n      </defs>\r\n    </svg>\r\n  </head>\r\n  <body>\r\n    <div class=\"page\">\r\n      <div class=\"body\">\r\n        <div class=\"container\">\r\n          <header class=\"header\">\r\n            <div class=\"header__top\">\r\n              <a href=\"./index.html\" class=\"logo btn__menu\">\r\n                <svg class=\"svg__logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\r\n                  <rect />\r\n                  <path\r\n                    fill=\"#323232\"\r\n                    width=\"40px\"\r\n                    d=\"M10.09,40.1h7.08V29.8h5.47l7,10.3h8.28L30.05,28.6a10,10,0,0,0,6.9-10,10.18,10.18,0,0,0-2.76-7.45C32.07,9.05,28.9,7.9,24.8,7.9H10.09Zm7.08-16.56V14.29h7c3.45,0,5.56,1.57,5.56,4.6,0,2.81-2,4.65-5.43,4.65Z\"\r\n                  />\r\n                </svg>\r\n              </a>\r\n              <a href=\"#\" class=\"login__btn btn__menu\">\r\n                <svg class=\"icon icon-login\">\r\n                  <use xlink:href=\"#icon-login\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"\" class=\"btn__menu burger\">\r\n                <div class=\"burger__line\"></div>\r\n                <div class=\"burger__line\"></div>\r\n                <div class=\"burger__line\"></div>\r\n              </a>\r\n              <a href=\"#\" class=\"btn__menu header__theme\">\r\n                <svg class=\"icon m_ico icon-skin_\">\r\n                  <use xlink:href=\"#icon-skin\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n            <div class=\"header__upper\">\r\n              <a class=\"header__upper_btn\">\r\n                <svg class=\"icon icon-up\">\r\n                  <use xlink:href=\"#icon-up\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n          </header>\r\n          <main>\r\n            <div class=\"content\">\r\n              <div class=\"new__novels\">\r\n                <article class=\"novel\">\r\n                  <div class=\"novel__info\">\r\n                    <a href=\"./main.html\"\r\n                      ><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Novel cover\" class=\"novel__img\"\r\n                    /></a>\r\n                    <div class=\"novel__text\">\r\n                      <h2 class=\"novel__title\">\r\n                        <a href=\"./main.html\" class=\"novel__link\">RE: Monarch</a>\r\n                      </h2>\r\n                      <p class=\"novel__tags\">\r\n                        Action, Fantasy, Adventure, Mature, Mystery, Psychological, Supernatural,\r\n                        Martial Arts\r\n                      </p>\r\n                      <p class=\"novel__description\">\r\n                        Cairn is a prince who is already tired of ruling. Faced with an imminent\r\n                        coronation and an overbearing father, he wants nothing more than to drown\r\n                        his responsibilities in cheap liquor and poor decisions. With the help of\r\n                        his sister, he hatches a plan to escape the clutches of the throne once\r\n                        and...\r\n                      </p>\r\n                      <div class=\"novel__rate-date\">\r\n                        <div class=\"unit__rating\">\r\n                          <div class=\"current__rating\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          </div>\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        </div>\r\n                        <a href=\"./main.html\" class=\"upload__date\">\r\n                          • UP: <span class=\"up__date\">29 days ago</span>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"border\"></div>\r\n                  <div class=\"novel__tools\">\r\n                    <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                    <a href=\"./main.html\" class=\"btn-bookmark\">\r\n                      <div class=\"bookmark\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"bookmark\" />\r\n                        <p class=\"bookmark__title\">Bookmark</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </article>\r\n                <article class=\"novel\">\r\n                  <div class=\"novel__info\">\r\n                    <a href=\"./main.html\"\r\n                      ><img\r\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n                        alt=\"Novel cover\"\r\n                        class=\"novel__img\"\r\n                    /></a>\r\n                    <div class=\"novel__text\">\r\n                      <h2 class=\"novel__title\">\r\n                        <a href=\"./main.html\" class=\"novel__link\">The Extra of The Lunerra</a>\r\n                      </h2>\r\n                      <p class=\"novel__tags\">Fantasy, Action, Tragedy, Adventure, Romance, Game</p>\r\n                      <p class=\"novel__description\">\r\n                        The only game in my life that makes me laugh: The Lands of The Lunerra… I\r\n                        played this game for six thousand hours in three years, and the day I\r\n                        thought I had done everything I could in this game, I felt a great emptiness\r\n                        inside me. I thought nothing in my ordinary and monotonous life could make\r\n                        me...\r\n                      </p>\r\n                      <div class=\"novel__rate-date\">\r\n                        <div class=\"unit__rating\">\r\n                          <div class=\"current__rating\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          </div>\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        </div>\r\n                        <a href=\"./main.html\" class=\"upload__date\">\r\n                          • UP: <span class=\"up__date\">7 days ago</span>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"border\"></div>\r\n                  <div class=\"novel__tools\">\r\n                    <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                    <a href=\"./main.html\" class=\"btn-bookmark\">\r\n                      <div class=\"bookmark\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"bookmark\" />\r\n                        <p class=\"bookmark__title\">Bookmark</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </article>\r\n                <article class=\"novel\">\r\n                  <div class=\"novel__info\">\r\n                    <a href=\"./main.html\"\r\n                      ><img\r\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                        alt=\"Novel cover\"\r\n                        class=\"novel__img\"\r\n                    /></a>\r\n                    <div class=\"novel__text\">\r\n                      <h2 class=\"novel__title\">\r\n                        <a href=\"./main.html\" class=\"novel__link\">Cultist of Cerebon</a>\r\n                      </h2>\r\n                      <p class=\"novel__tags\">Action, Drama, Fantasy, Adventure</p>\r\n                      <p class=\"novel__description\">\r\n                        When Zareth first realized he had been reborn into a world that seemed to\r\n                        run on video game mechanics, he was ecstatic. He’d expected to go on to live\r\n                        an exciting life filled with danger and adventure. Instead, Zareth spent\r\n                        much of his new life living on the streets of Tal’Qamar before eventually...\r\n                      </p>\r\n                      <div class=\"novel__rate-date\">\r\n                        <div class=\"unit__rating\">\r\n                          <div class=\"current__rating\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                          </div>\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"star\" />\r\n                        </div>\r\n                        <a href=\"./main.html\" class=\"upload__date\">\r\n                          • UP: <span class=\"up__date\">1 day ago</span>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"border\"></div>\r\n                  <div class=\"novel__tools\">\r\n                    <a href=\"./main.html\" class=\"btn btn-read\">◃ Read ▹</a>\r\n                    <a href=\"./main.html\" class=\"btn-bookmark\">\r\n                      <div class=\"bookmark\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"bookmark\" />\r\n                        <p class=\"bookmark__title\">Bookmark</p>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n              <div class=\"new__chapters\">\r\n                <div class=\"title__new__chapters block\">\r\n                  <h2 class=\"midtitle__new__chapters\"><span>UPDATE TAPE</span></h2>\r\n                </div>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                    alt=\"novel image\"\r\n                    class=\"chapter__img\"\r\n                  />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">I Become a Mafia in the Academy</h3>\r\n                    <h3 class=\"charter__number\">Charter <span>180:</span></h3>\r\n                    <em class=\"chapter__time\">19 minutes ago</em>\r\n                  </div>\r\n                </a>\r\n\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                    alt=\"novel image\"\r\n                    class=\"chapter__img\"\r\n                  />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Thunder God's Reincarnation</h3>\r\n                    <h3 class=\"charter__number\">Charter <span>216</span></h3>\r\n                    <em class=\"chapter__time\">30 minutes ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n                    alt=\"novel image\"\r\n                    class=\"chapter__img\"\r\n                  />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Supreme Lord: I can extract everything!</h3>\r\n                    <h3 class=\"charter__number\">Charter <span>559: Complaints</span></h3>\r\n                    <em class=\"chapter__time\">1 hour ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Martial Peak</h3>\r\n                    <h3 class=\"charter__number\">\r\n                      Charter <span>5468: Black Ink Disciples’ Goal</span>\r\n                    </h3>\r\n                    <em class=\"chapter__time\">1 hour ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                    alt=\"novel image\"\r\n                    class=\"chapter__img\"\r\n                  />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Circle of Inevitability</h3>\r\n                    <h3 class=\"charter__number\">Charter <span>585: Repeated “Betrayal”</span></h3>\r\n                    <em class=\"chapter__time\">1 hour ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\r\n                    alt=\"novel image\"\r\n                    class=\"chapter__img\"\r\n                  />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">The Celestial Returned From Hell</h3>\r\n                    <h3 class=\"charter__number\">Charter <span>347</span></h3>\r\n                    <em class=\"chapter__time\">2 hours ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Stranger Danger</h3>\r\n                    <h3 class=\"charter__number\">\r\n                      Charter <span>290: The Incense of Fortune Can’t Be Lit!?</span>\r\n                    </h3>\r\n                    <em class=\"chapter__time\">2 hours ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Supremacy Games</h3>\r\n                    <h3 class=\"charter__number\">\r\n                      Charter <span>1647: Stealing The Celestial Energy! II</span>\r\n                    </h3>\r\n                    <em class=\"chapter__time\">2 hours ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Supreme Magus</h3>\r\n                    <h3 class=\"charter__number\">\r\n                      Charter <span>2908: The Outsider (part 2)</span>\r\n                    </h3>\r\n                    <em class=\"chapter__time\">3 hours ago</em>\r\n                  </div>\r\n                </a>\r\n                <a href=\"#\" class=\"new__chapter block\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"novel image\" class=\"chapter__img\" />\r\n                  <div class=\"chapter__info\">\r\n                    <h3 class=\"title__novel\">Ultragene Warlord</h3>\r\n                    <h3 class=\"charter__number\">Charter <span>1293: Goodbye, Third Realm</span></h3>\r\n                    <em class=\"chapter__time\">3 hours ago</em>\r\n                  </div>\r\n                </a>\r\n                <div class=\"block block-updates\">\r\n                  <a href=\"#\" class=\"btn btn-updates\">More updates</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </main>\r\n        </div>\r\n        <footer class=\"footer\">\r\n          <p>Each book is <span>a new life</span> filled with new adventures.</p>\r\n          <a href=\"#\">Completed novels</a>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!doctype html>\r\n<html lang=\"en ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>mainmain copy</title>\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" />\r\n    <svg\r\n      aria-hidden=\"true\"\r\n      style=\"position: absolute; width: 0; height: 0; overflow: hidden\"\r\n      width=\"0\"\r\n      height=\"0\"\r\n      version=\"1.1\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <defs>\r\n        <symbol id=\"icon-login\" viewBox=\"0 0 916 1024\">\r\n          <path\r\n            d=\"M808.421 1024h-700.632c-59.284 0-107.789-48.505-107.789-107.789v-377.263c0-59.284 48.505-107.789 107.789-107.789h565.895v-242.526c0-59.284-48.505-107.789-107.789-107.789h-215.579c-59.284 0-107.789 48.505-107.789 107.789v161.684h-80.842v-161.684c0-105.095 83.537-188.632 188.632-188.632h215.579c105.095 0 188.632 83.537 188.632 188.632v242.526h53.895c59.284 0 107.789 48.505 107.789 107.789v377.263c0 59.284-48.505 107.789-107.789 107.789zM835.368 565.895c0-29.642-24.253-53.895-53.895-53.895h-646.737c-29.642 0-53.895 24.253-53.895 53.895v323.368c0 29.642 24.253 53.895 53.895 53.895h646.737c29.642 0 53.895-24.253 53.895-53.895v-323.368zM458.105 862.316c-75.453 0-134.737-59.284-134.737-134.737s59.284-134.737 134.737-134.737c75.453 0 134.737 59.284 134.737 134.737s-59.284 134.737-134.737 134.737zM458.105 673.684c-29.642 0-53.895 24.253-53.895 53.895s24.253 53.895 53.895 53.895c29.642 0 53.895-24.253 53.895-53.895s-24.253-53.895-53.895-53.895z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-up\" viewBox=\"0 0 597 1024\">\r\n          <path\r\n            d=\"M585.956 327.111c-17.067 17.067-42.667 17.067-59.733 0l-184.889-182.044v836.267c0 22.756-19.911 42.667-42.667 42.667v0c-22.756 0-42.667-19.911-42.667-42.667v-836.267l-184.889 184.889c-17.067 17.067-42.667 17.067-59.733 0s-17.067-42.667 0-59.733l250.311-250.311c2.844-2.844 2.844-5.689 5.689-8.533 8.533-8.533 22.756-11.378 36.978-11.378 2.844 0 5.689 0 5.689 0s2.844 0 2.844 0c8.533 2.844 14.222 8.533 17.067 14.222l253.156 253.156c17.067 17.067 17.067 45.511 2.844 59.733z\"\r\n          ></path>\r\n        </symbol>\r\n        <symbol id=\"icon-skin\" viewBox=\"0 0 48 48\">\r\n          <path\r\n            d=\"m24.04,37.75l-4.12-4h-5.59v-5.61l-4.07-4.1,4.07-4.1v-5.61h5.6l4.08-4.08,4.07,4.08h5.62v5.61l4.07,4.1-4.07,4.1v5.61h-5.61l-4.04,4ZM7,24.03c0,.66.22,1.22.67,1.67l3.65,3.67v4.99c0,.66.23,1.22.7,1.68s1.03.7,1.68.7h5l3.68,3.57c.45.45,1,.68,1.66.68s1.21-.23,1.67-.68l3.61-3.57h4.99c.65,0,1.21-.23,1.68-.7s.7-1.03.7-1.68v-4.99l3.65-3.67c.45-.45.67-1,.67-1.66s-.22-1.22-.67-1.67l-3.65-3.67v-4.99c0-.66-.23-1.22-.7-1.68s-1.03-.7-1.68-.7h-4.99l-3.61-3.61c-.48-.48-1.04-.71-1.7-.71s-1.21.23-1.67.68l-3.66,3.65h-4.98c-.65,0-1.21.23-1.68.7s-.7,1.03-.7,1.68v4.99l-3.65,3.67c-.45.45-.67,1-.67,1.66Zm24-.03c0,3.87-3.13,7-7,7v-14c3.87,0,7,3.13,7,7Z\"\r\n          ></path>\r\n        </symbol>\r\n      </defs>\r\n    </svg>\r\n  </head>\r\n  <body>\r\n    <div class=\"page\">\r\n      <div class=\"body\">\r\n        <div class=\"container\">\r\n          <header class=\"header\">\r\n            <div class=\"header__top\">\r\n              <a href=\"./index.html\" class=\"logo btn__menu\">\r\n                <svg class=\"svg__logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\r\n                  <rect />\r\n                  <path\r\n                    fill=\"#323232\"\r\n                    width=\"40px\"\r\n                    d=\"M10.09,40.1h7.08V29.8h5.47l7,10.3h8.28L30.05,28.6a10,10,0,0,0,6.9-10,10.18,10.18,0,0,0-2.76-7.45C32.07,9.05,28.9,7.9,24.8,7.9H10.09Zm7.08-16.56V14.29h7c3.45,0,5.56,1.57,5.56,4.6,0,2.81-2,4.65-5.43,4.65Z\"\r\n                  />\r\n                </svg>\r\n              </a>\r\n              <a href=\"#\" class=\"login__btn btn__menu\">\r\n                <svg class=\"icon icon-login\">\r\n                  <use xlink:href=\"#icon-login\"></use>\r\n                </svg>\r\n              </a>\r\n              <a href=\"\" class=\"btn__menu burger\">\r\n                <div class=\"burger__line\"></div>\r\n                <div class=\"burger__line\"></div>\r\n                <div class=\"burger__line\"></div>\r\n              </a>\r\n              <a href=\"#\" class=\"btn__menu header__theme\">\r\n                <svg class=\"icon m_ico icon-skin_\">\r\n                  <use xlink:href=\"#icon-skin\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n            <div class=\"header__upper\">\r\n              <a class=\"header__upper_btn\">\r\n                <svg class=\"icon icon-up\">\r\n                  <use xlink:href=\"#icon-up\"></use>\r\n                </svg>\r\n              </a>\r\n            </div>\r\n          </header>\r\n          <main>\r\n            <p>\r\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n              asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n              nihil cumque, dolorem, harum nam quaerat atque animi?\r\n            </p>\r\n            <p>\r\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n              asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n              nihil cumque, dolorem, harum nam quaerat atque animi?\r\n            </p>\r\n            <p>\r\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n              asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n              nihil cumque, dolorem, harum nam quaerat atque animi?\r\n            </p>\r\n            <p>\r\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n              asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n              nihil cumque, dolorem, harum nam quaerat atque animi?\r\n            </p>\r\n            <p>\r\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n              asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n              nihil cumque, dolorem, harum nam quaerat atque animi?\r\n            </p>\r\n            <div class=\"content\"></div>\r\n          </main>\r\n          <p>\r\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n            asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n            nihil cumque, dolorem, harum nam quaerat atque animi?\r\n          </p>\r\n          <p>\r\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n            asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n            nihil cumque, dolorem, harum nam quaerat atque animi?\r\n          </p>\r\n          <p>\r\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n            asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n            nihil cumque, dolorem, harum nam quaerat atque animi?\r\n          </p>\r\n          <p>\r\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n            asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n            nihil cumque, dolorem, harum nam quaerat atque animi?\r\n          </p>\r\n          <p>\r\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto inventore\r\n            asperiores amet quas vel explicabo sunt nobis? Fugit cum commodi praesentium, eius\r\n            nihil cumque, dolorem, harum nam quaerat atque animi?\r\n          </p>\r\n        </div>\r\n        <footer class=\"footer\">\r\n          <p>Each book is <span>a new life</span> filled with new adventures.</p>\r\n          <a href=\"#\">Completed novels</a>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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

/***/ "./src/fonts/GothamPro/gothampro-black.svg":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-black.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-black.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-blackitalic.svg":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-blackitalic.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-blackitalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bold.svg":
/*!************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bold.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-bold.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-bolditalic.svg":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-bolditalic.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-bolditalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-italic.svg":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-italic.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-italic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-light.svg":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-light.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-light.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-lightitalic.svg":
/*!*******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-lightitalic.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-lightitalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-medium.svg":
/*!**************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-medium.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-medium.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-mediumitalic.svg":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-mediumitalic.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampro-mediumitalic.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-bold.svg":
/*!******************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-bold.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampronarrow-bold.svg";

/***/ }),

/***/ "./src/fonts/GothamPro/gothampronarrow-medium.svg":
/*!********************************************************!*\
  !*** ./src/fonts/GothamPro/gothampronarrow-medium.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gothampronarrow-medium.svg";

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

/***/ }),

/***/ "./src/fonts/GothamPro/gothampro-black.eot":
/*!*************************************************!*\
  !*** ./src/fonts/GothamPro/gothampro-black.eot ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5d7af9ae9d0446cce7bb.eot";

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

/***/ "./src/img/cultist-of-cerebon.webp":
/*!*****************************************!*\
  !*** ./src/img/cultist-of-cerebon.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9fed3a7ac45d0ceb8c76.webp";

/***/ }),

/***/ "./src/img/re-monarch.webp":
/*!*********************************!*\
  !*** ./src/img/re-monarch.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b2e0b7c3d2f9860347c3.webp";

/***/ }),

/***/ "./src/img/stranger-danger.webp":
/*!**************************************!*\
  !*** ./src/img/stranger-danger.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bff125b36529768c38a6.webp";

/***/ }),

/***/ "./src/img/the-extra-of-the-lunerra.webp":
/*!***********************************************!*\
  !*** ./src/img/the-extra-of-the-lunerra.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "99711d1a2ac5ffcf9db6.webp";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.html */ "./src/pages/index.html");
/* harmony import */ var _pages_main_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/main.html */ "./src/pages/main.html");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.c2d246f93f6456da2c6a.js.map