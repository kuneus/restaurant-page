/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst homePage = () => {\n  console.log('homepage clicked!');\n  // welcome message for main body\n  const pageTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'page-title', null, _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n  const welcomeMsg1 = 'Welcome to Philosophy Coffee Company';\n  const welcomeMsg2 = 'Where great minds drink alike';\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg1, pageTitle);\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg2, pageTitle);\n\n  // bottom container\n  const bottomCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'bottCont', null, _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n\n  // business hours\n  const hoursContainer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'div',\n    'hours',\n    null,\n    null,\n    bottomCont,\n  );\n  let daysArr = [\n    'Business Hours:',\n    'Mon: 6am - 9pm',\n    'Tue: 6am - 9pm',\n    'Wed: 6am - 9pm',\n    'Thu: 6am - 9pm',\n    'Fri: 6am - 11pm',\n    'Sat: 8am - 11pm',\n    'Sun: 8am - 9pm',\n  ];\n  for (let i = 0; i < daysArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, daysArr[i], hoursContainer);\n  }\n\n  // address\n  const addressCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'address', null, null, bottomCont);\n  let addressArr = ['Address', \"375 Plato's Cave\", 'Athens, Greece'];\n  for (let i = 0; i < addressArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, addressArr[i], addressCont);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAndAppend\": () => (/* binding */ createAndAppend),\n/* harmony export */   \"pageTitle\": () => (/* binding */ pageTitle),\n/* harmony export */   \"topCont\": () => (/* binding */ topCont)\n/* harmony export */ });\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n\n\nfunction createAndAppend(elementType, eleClass, eleID, eleText, eleParent) {\n  let element = document.createElement(elementType);\n  if (eleClass) {\n    element.classList.add(eleClass);\n  }\n  if (eleID) {\n    element.setAttribute('id', eleID);\n  }\n  if (eleText) {\n    element.textContent = eleText;\n  }\n  eleParent.appendChild(element);\n  return element;\n}\n\nconst headerEls = document.getElementsByClassName('headerEls');\nconst pageTitle = document.getElementById('page-title');\nconst topCont = document.getElementById('topCont');\n\nlet homeStatus = true;\nlet menuStatus = false;\nlet contactStatus = false;\n\nconst setPageStatus = (bool1, bool2, bool3) => {\n  homeStatus = bool1;\n  menuStatus = bool2;\n  contactStatus = bool3;\n};\n\nlet headerArr = Array.from(headerEls);\n\nfor (let i = 0; i < headerArr.length; i++) {\n  headerArr[i].addEventListener('click', () => {\n    if (i === 0) {\n      if (homeStatus === false) {\n        setPageStatus(true, false, false);\n        topCont.innerHTML = '';\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_2__.homePage)();\n      }\n    } else if (i === 1) {\n      if (menuStatus === false) {\n        setPageStatus(false, true, false);\n        topCont.innerHTML = '';\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\n      }\n    } else if (i === 2) {\n      if (contactStatus === false) {\n        console.log('Contact us!');\n        setPageStatus(false, false, true);\n        topCont.innerHTML = '';\n      }\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst menuPage = () => {\n  console.log('menu clicked!');\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'page-title', 'Menu', _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n  const menuCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'menu-cont', null, _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n  //   const menuTitle = createAndAppend('div', null, null, 'Menu', menuCont);\n  //   welContainer.textContent = 'Menu';\n\n  const menuItems = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'menu-items', null, menuCont);\n  // create item boxes for each menu item\n  let menuArr = [\n    'Latte',\n    'Capuccino',\n    'Cortado',\n    'Americano',\n    'Pour-over V2',\n    'Pour-over Chemex',\n    'Cold brew',\n    'Kyoto Cold Brew',\n  ];\n  for (let i = 0; i < menuArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, menuArr[i], menuItems);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n// createAndAppend (elementType, eleClass, eleID, eleText, eleParent)\n\nconst pageLoad = (() => {\n  const content = document.getElementById('content');\n\n  // header\n  const header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('header', 'header', null, null, content);\n\n  // header elements\n  let headerArr = ['Philosophy Coffee Company', 'Menu', 'Contact Us'];\n  for (let i = 0; i <= 2; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', `headerEls`, `headerEl${[i]}`, headerArr[i], header);\n  }\n\n  // main container\n  const container = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'main-cont', null, content);\n\n  // top container\n  const topCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'topCont', null, container);\n  topCont.style.backgroundImage = \"url('./images/cafe.png')\";\n\n  // welcome message for main body\n  const pageTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'page-title', null, topCont);\n  const welcomeMsg1 = 'Welcome to Philosophy Coffee Company';\n  const welcomeMsg2 = 'Where great minds drink alike';\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg1, pageTitle);\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg2, pageTitle);\n\n  // bottom container\n  const bottomCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'bottCont', null, topCont);\n\n  // business hours\n  const hoursContainer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'div',\n    'hours',\n    null,\n    null,\n    bottomCont,\n  );\n  let daysArr = [\n    'Business Hours:',\n    'Mon: 6am - 9pm',\n    'Tue: 6am - 9pm',\n    'Wed: 6am - 9pm',\n    'Thu: 6am - 9pm',\n    'Fri: 6am - 11pm',\n    'Sat: 8am - 11pm',\n    'Sun: 8am - 9pm',\n  ];\n  for (let i = 0; i < daysArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, daysArr[i], hoursContainer);\n  }\n\n  // address\n  const addressCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'address', null, null, bottomCont);\n  let addressArr = ['Address', \"375 Plato's Cave\", 'Athens, Greece'];\n  for (let i = 0; i < addressArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, addressArr[i], addressCont);\n  }\n\n  // footer\n  const footer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('footer', 'footer', null, null, content);\n  footer.innerHTML =\n    'Made by Kuni <a href=\"https://github.com/kuneus\"> @Kuneus<a>';\n  const pcMsg = 'Photo by Polina Kuzovkova on Unsplash';\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('p', null, null, pcMsg, footer);\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;