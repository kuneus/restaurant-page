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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst contactPage = () => {\n  // reset homepage background\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.setHomeBG)();\n\n  // set title of page to 'Contact Us'\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'page-title', 'Contact Us', _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n\n  // form container and elements\n  const formCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'form-cont', null, _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n  const form = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('form', null, null, null, formCont);\n  const fullName = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('input', null, 'fName', null, form);\n  fullName.setAttribute('placeholder', 'Name');\n\n  const email = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('input', null, 'email', null, form);\n  email.setAttribute('placeholder', 'Email');\n  email.setAttribute('type', 'email');\n\n  const phoneNumber = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('input', null, 'phone', null, form);\n  phoneNumber.setAttribute('placeholder', 'Phone Number');\n  phoneNumber.setAttribute('type', 'tel');\n\n  const messageField = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('textarea', null, null, null, form);\n  messageField.setAttribute('placeholder', 'Message');\n  messageField.setAttribute('rows', '10');\n  messageField.setAttribute('cols', '40');\n\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('button', null, 'submit-btn', 'Submit', form);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst homePage = () => {\n  // reset homepage background\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.setHomeBG)();\n\n  // welcome message for main body\n  const pageTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'page-title', null, _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n  const welcomeMsg1 = 'Welcome to Philosophy Coffee Company';\n  const welcomeMsg2 = 'Where great minds drink alike';\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg1, pageTitle);\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg2, pageTitle);\n\n  // bottom container\n  const bottomCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'bottCont', null, _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n\n  // business hours\n  const hoursContainer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'div',\n    'hours',\n    null,\n    null,\n    bottomCont,\n  );\n  let daysArr = [\n    'Business Hours:',\n    'Mon: 6am - 9pm',\n    'Tue: 6am - 9pm',\n    'Wed: 6am - 9pm',\n    'Thu: 6am - 9pm',\n    'Fri: 6am - 11pm',\n    'Sat: 8am - 11pm',\n    'Sun: 8am - 9pm',\n  ];\n  for (let i = 0; i < daysArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, daysArr[i], hoursContainer);\n  }\n\n  // address\n  const addressCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'address', null, null, bottomCont);\n  let addressArr = ['Address', \"375 Plato's Cave\", 'Athens, Greece'];\n  for (let i = 0; i < addressArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, addressArr[i], addressCont);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAndAppend\": () => (/* binding */ createAndAppend),\n/* harmony export */   \"pageTitle\": () => (/* binding */ pageTitle),\n/* harmony export */   \"setHomeBG\": () => (/* binding */ setHomeBG),\n/* harmony export */   \"topCont\": () => (/* binding */ topCont)\n/* harmony export */ });\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction createAndAppend(elementType, eleClass, eleID, eleText, eleParent) {\n  let element = document.createElement(elementType);\n  if (eleClass) {\n    element.classList.add(eleClass);\n  }\n  if (eleID) {\n    element.setAttribute('id', eleID);\n  }\n  if (eleText) {\n    element.textContent = eleText;\n  }\n  eleParent.appendChild(element);\n  return element;\n}\n\nconst headerEls = document.getElementsByClassName('headerEls');\nconst pageTitle = document.getElementById('page-title');\nconst topCont = document.getElementById('topCont');\nconst setHomeBG = () => {\n  topCont.style.backgroundImage = \"url('./images/cafe.png')\";\n  document.getElementById('pcMsg').textContent =\n    'Photo by Polina Kuzovkova on Unsplash';\n};\n\nlet homeStatus = true;\nlet menuStatus = false;\nlet contactStatus = false;\n\nconst setPageStatus = (bool1, bool2, bool3) => {\n  homeStatus = bool1;\n  menuStatus = bool2;\n  contactStatus = bool3;\n};\n\nlet headerArr = Array.from(headerEls);\n\nfor (let i = 0; i < headerArr.length; i++) {\n  headerArr[i].addEventListener('click', () => {\n    if (i === 0) {\n      if (homeStatus === false) {\n        setPageStatus(true, false, false);\n        topCont.innerHTML = '';\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_2__.homePage)();\n      }\n    } else if (i === 1) {\n      if (menuStatus === false) {\n        setPageStatus(false, true, false);\n        topCont.innerHTML = '';\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\n      }\n    } else if (i === 2) {\n      if (contactStatus === false) {\n        setPageStatus(false, false, true);\n        topCont.innerHTML = '';\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactPage)();\n      }\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst menuPage = () => {\n  // set title of page to 'Menu'\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'page-title', 'Menu', _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n  _index__WEBPACK_IMPORTED_MODULE_0__.topCont.style.backgroundImage = \"url('./images/jungle.png')\";\n\n  const menuCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'menu-cont', null, _index__WEBPACK_IMPORTED_MODULE_0__.topCont);\n  const menuItems = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'menu-items', null, menuCont);\n\n  // create coffee menu objects\n  function coffeeFactory(type, item, size1, price1, size2, price2, url) {\n    return { type, item, size1, price1, size2, price2, url };\n  }\n\n  let coffeeArr = [];\n\n  // construct coffee object and push to coffeeArr\n  const makeAndPush = (type, item, size1, price1, size2, price2, url) => {\n    let coffee = coffeeFactory(type, item, size1, price1, size2, price2, url);\n    coffeeArr.push(coffee);\n  };\n\n  let bc = 'Brewed Coffee';\n  let ex = 'Espresso';\n  let sz = [\n    '130 ml',\n    '250 ml',\n    '300 ml',\n    '375 ml',\n    '500 ml',\n    '750 ml',\n    '1000 ml',\n    '400 ml',\n  ];\n\n  // function for getting URL\n  const a = (item) => {\n    return `url('./images/${item}.png')`;\n  };\n\n  // variables to prevent code from overflowing to next line for below functions\n  const ncb = 'Nitro Cold Brew';\n  const viet = 'Vietnamese Iced Coffee';\n\n  // coffee objects\n  makeAndPush(bc, 'V60 Pour Over', sz[1], '$5.50', sz[4], '$6.50', a('v60'));\n  makeAndPush(bc, 'Chemex', sz[5], '$7.50', sz[6], '$8.50', a('chemex'));\n  makeAndPush(bc, 'Siphon Coffee', sz[4], '$7.50', null, null, a('siphon'));\n  makeAndPush(bc, 'Aeropress', sz[2], '$5.50', null, null, a('aeropress'));\n  makeAndPush(bc, 'Cold Brew', sz[3], '$4.50', sz[4], '$5.00', a('coldbrew'));\n  makeAndPush(bc, ncb, sz[3], '$5.50', sz[4], '$6.00', a('nitro'));\n  makeAndPush(bc, 'French Press', sz[3], '$6.00', sz[4], '$7.00', a('fpress'));\n  makeAndPush(bc, viet, sz[3], '$5.50', sz[4], '$6.00', a('viet'));\n  makeAndPush(ex, 'Latte', sz[1], '$4.50', sz[7], '$5.00', a('latte'));\n  makeAndPush(ex, 'Flat White', sz[1], '$4.50', sz[7], '$5.00', a('flatwhite'));\n  makeAndPush(ex, 'Capuccino', sz[1], '$4.50', sz[7], '$5.00', a('capuccino'));\n  makeAndPush(ex, 'Cortado', sz[0], '$3.75', null, null, a('cortado'));\n  makeAndPush(ex, 'Gibraltar', sz[0], '$4.25', null, null, a('gibraltar'));\n  makeAndPush(ex, 'Americano', sz[1], '$3.75', sz[3], '$4.00', a('americano'));\n  makeAndPush(ex, 'Doppio', '60 ml', '$3.00', null, null, a('doppio'));\n  makeAndPush(ex, 'Single shot', '30 ml', '$1.75', null, null, a('singleshot'));\n\n  // containers for espresso and brewed coffee categories\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'coTitle', null, 'BREWED COFFEE', menuItems);\n  let bcCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'coCont', null, null, menuItems);\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'coTitle', null, 'ESPRESSO', menuItems);\n  let exCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'coCont', null, null, menuItems);\n\n  // loop to append all the coffee objects to the DOM\n  for (let i = 0; i < coffeeArr.length; i++) {\n    // container for each coffee card\n    let coffeeCard = document.createElement('div');\n    coffeeCard.classList.add('coffeeCard');\n\n    // set background image for each card and assign number to each item\n    let coffeeImg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'imgCont', null, i + 1, coffeeCard);\n    coffeeImg.style.backgroundImage = coffeeArr[i].url;\n\n    // display coffee item and size and price\n    let objInfo = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'objInfo', null, null, coffeeCard);\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, coffeeArr[i].item, objInfo);\n    const szLine1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'sz-line', null, null, objInfo);\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, coffeeArr[i].size1, szLine1);\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, coffeeArr[i].price1, szLine1);\n    if (coffeeArr[i].size2) {\n      const szLine2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'sz-line', null, null, objInfo);\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, coffeeArr[i].size2, szLine2);\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, coffeeArr[i].price2, szLine2);\n    }\n    if (coffeeArr[i].type === 'Brewed Coffee') {\n      bcCont.appendChild(coffeeCard);\n    } else if (coffeeArr[i].type === 'Espresso') {\n      exCont.appendChild(coffeeCard);\n    }\n  }\n\n  // Photo credit list for coffee photos\n  let pcMsg = [\n    'Chemex: Photo by Calvin Craig on Unsplash',\n    'V60: Photo by Ben Moreland on Unsplash',\n    'Siphon: Photo by Laura Landers on Unsplash',\n    'Aeropress: Photo by Skylar Gordon on Unsplash',\n    'Cold Brew: Photo by Tamara Schipchinskaya on Unsplash',\n    'Nitro Cold Brew: Photo by Hatsfields London on Unsplash',\n    'French Press: Photo by Pratik Gupta on Unsplash',\n    'Vietnamese: Photo by Jon Spectacle on Unsplash',\n    'Latte: Photo by Nathan Dumlao on Unsplash',\n    'Flat White: Photo by Byron Breytenbach on Unsplash',\n    'Capuccino: Photo by Daria Rudyk on Unsplash',\n    'Cortado: Photo by Lex Sirikiat on Unsplash',\n    'Gibraltar: Photo by Jenna Neal on Unsplash',\n    'Americano: Photo by Oak & Bond Coffee Co. on Unsplash',\n    'Doppio: Photo by Nathan Dumlao on Unsplash',\n    'Single shot: Photo by Nathan Dumlao on Unsplash',\n  ];\n\n  const pcContainer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'div',\n    'pcContainer',\n    null,\n    'Photo credits: ',\n    menuItems,\n  );\n  // append photo credit list to DOM\n  for (let i = 0; i < pcMsg.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, i + 1 + ' ' + pcMsg[i], pcContainer);\n  }\n\n  // photo credit for background image\n  const jungleBG = 'Photo by Yoal Desurmont on Unsplash';\n  document.getElementById('pcMsg').textContent = jungleBG;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n// createAndAppend (elementType, eleClass, eleID, eleText, eleParent)\n\nconst pageLoad = (() => {\n  const content = document.getElementById('content');\n\n  // header\n  const header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('header', 'header', null, null, content);\n\n  // header elements\n  let headerArr = ['Home', 'Menu', 'Contact Us'];\n  for (let i = 0; i <= 2; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', `headerEls`, `headerEl${[i]}`, headerArr[i], header);\n  }\n\n  // main container\n  const container = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'main-cont', null, content);\n\n  // top container\n  const topCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'topCont', null, container);\n  topCont.style.backgroundImage = \"url('./images/cafe.png')\";\n\n  // welcome message for main body\n  const pageTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'page-title', null, topCont);\n  const welcomeMsg1 = 'Welcome to Philosophy Coffee Company';\n  const welcomeMsg2 = 'Where great minds drink alike';\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg1, pageTitle);\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, welcomeMsg2, pageTitle);\n\n  // bottom container\n  const bottomCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, 'bottCont', null, topCont);\n\n  // business hours\n  const hoursContainer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)(\n    'div',\n    'hours',\n    null,\n    null,\n    bottomCont,\n  );\n  let daysArr = [\n    'Business Hours:',\n    'Mon: 6am - 9pm',\n    'Tue: 6am - 9pm',\n    'Wed: 6am - 9pm',\n    'Thu: 6am - 9pm',\n    'Fri: 6am - 11pm',\n    'Sat: 8am - 11pm',\n    'Sun: 8am - 9pm',\n  ];\n  for (let i = 0; i < daysArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, daysArr[i], hoursContainer);\n  }\n\n  // address\n  const addressCont = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', 'address', null, null, bottomCont);\n  let addressArr = ['Address', \"375 Plato's Cave\", 'Athens, Greece'];\n  for (let i = 0; i < addressArr.length; i++) {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, addressArr[i], addressCont);\n  }\n\n  // footer\n  const footer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('footer', 'footer', null, null, content);\n  const authorCredit = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('div', null, null, null, footer);\n  authorCredit.innerHTML =\n    'Made by Kuni <a href=\"https://github.com/kuneus\"> @Kuneus<a>';\n  const pcMsg = 'Photo by Polina Kuzovkova on Unsplash';\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.createAndAppend)('p', null, 'pcMsg', pcMsg, footer);\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

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