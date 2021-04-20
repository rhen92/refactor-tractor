/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/green-apples.jpg */ "./src/images/green-apples.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* ~~~~~~~~ GLOBAL RULES ~~~~~~~~~ */\nbody {\n  background-color: #5B7894;\n  display: grid;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  height: 100em;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n  @media screen and (max-width: 613px) {\n    body {\n      grid-template-columns: 1fr;\n      grid-template-areas: \"header\" \"image\" \"aside\" \"main\"; } }\n\n/* ~~~~~~~~ HEADER ~~~~~~~~~ */\nh1 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%; }\n  @media screen and (max-width: 726px) {\n    h1 {\n      font-size: 40px;\n      width: 60%; } }\n  @media screen and (max-width: 595px) {\n    h1 {\n      font-size: 30px;\n      width: 50%; } }\n\nh2 {\n  color: #508067;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease; }\n\nh4 {\n  color: #1B4E35;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\nheader {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  opacity: 100%;\n  grid-area: header; }\n\n.header-apple-icon {\n  height: 40px;\n  margin-left: 5px;\n  width: 35px;\n  color: #C4EB67;\n  font-weight: 400; }\n\n/* ~~~~~~~~ SEARCH RULES ~~~~~~~~~ */\n#search {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  opacity: 100%;\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset #C4EB67;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  font-family: \"Quicksand\", sans-serif;\n  justify-content: center;\n  margin: 1.2% 0.5% 1.2% 0%; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0 2% 0 0;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%; }\n  #search-input:hover {\n    box-shadow: inset 0px 0px 0px 0px white;\n    transition: .8s ease; }\n  #search-input:focus {\n    box-shadow: inset 0px 0px 0px 0px white; }\n  #search-input::placeholder {\n    color: #5B7894;\n    font-size: 20px;\n    text-align: right;\n    text-shadow: none; }\n  #search-input:focus::placeholder {\n    font-size: 0px;\n    transition: .8s ease; }\n  @media screen and (max-width: 365px) {\n    #search-input {\n      height: 76%;\n      width: 76%;\n      padding: 0 1% 0 0;\n      font-size: 28px;\n      display: flex;\n      margin-bottom: 0; } }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-radius: 0px 15px 15px 0px; }\n\n/* ~~~~~~~~ SEARCH BUTTONS ~~~~~~~~~ */\n.nav-btn {\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font-size: 0px;\n  font-weight: 700;\n  justify-content: center;\n  overflow: hidden;\n  text-align: center;\n  transition: .4s ease;\n  width: 15%;\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n  .nav-btn:hover {\n    color: #C4EB67;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease; }\n  .nav-btn img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px; }\n    @media screen and (max-width: 788px) {\n      .nav-btn img {\n        max-height: 30px;\n        max-width: 30px; } }\n    @media screen and (max-width: 481px) {\n      .nav-btn img {\n        max-height: 23px;\n        max-width: 23px; } }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #C4EB67; }\n\n/* ~~~~~~~~ BANNER ~~~~~~~~~ */\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  height: 150px;\n  overflow: hidden;\n  width: 100%; }\n\n.my-recipes-banner,\n.welcome-msg {\n  text-align: center;\n  width: 95%; }\n\n.my-recipes-banner h1,\n.welcome-msg h1 {\n  color: white;\n  width: 100%;\n  opacity: 100%; }\n\n.my-recipes-banner {\n  display: none;\n  margin-top: 25px; }\n\n.welcome-msg {\n  margin-top: 50px; }\n\n/* ~~~~~~~~ FILTER SIDEBAR ~~~~~~~~~ */\naside {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  background-color: white;\n  height: auto;\n  text-align: center; }\n\n.wrap {\n  background-color: white;\n  height: 100em;\n  padding: 10px;\n  position: relative;\n  width: 200px; }\n  @media screen and (max-width: 613px) {\n    .wrap {\n      height: 30em; } }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n\nli {\n  margin: 2px; }\n\n/* ~~~~~~~~ RECIPE CARDS ~~~~~~~~~ */\nmain {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  grid-area: main;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  overflow: scroll; }\n\n.recipe-card {\n  background-color: white;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 270px;\n  margin: 20px;\n  padding: 15px;\n  width: 250px; }\n  .recipe-card:hover .card-photo-preview {\n    opacity: 50%;\n    transition: .8s ease; }\n  .recipe-card:hover .text {\n    width: 100%;\n    opacity: 100%;\n    font-size: 20px;\n    transition: .5s ease; }\n  .recipe-card:hover h3 {\n    text-shadow: 0px 0px 4px #C4EB67;\n    transition: .8s ease; }\n\n.card-apple-icon {\n  cursor: pointer;\n  float: right;\n  height: 50px;\n  padding-bottom: 10px;\n  width: 45px; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 130px;\n  transition: .8s ease;\n  width: 100%; }\n\n.card-photo-container {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  height: 130px;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease; }\n\n.text:focus-visible {\n  width: 100%;\n  opacity: 100%;\n  font-size: 20px;\n  background-color: #359567;\n  position: absolute;\n  text-align: center; }\n\n/* ~~~~~~~~ REMAINING PAGE BUTTONS ~~~~~~~~~ */\n.show-pantry-recipes-btn,\n.show-all-btn,\n.filter-btn {\n  background-color: #2BB271;\n  border: 0;\n  border-radius: 3px;\n  color: #000506;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px; }\n\n.show-pantry-recipes-btn {\n  margin-top: 10px; }\n\n.show-all-btn {\n  height: 40px;\n  margin-top: 20px;\n  width: 200px; }\n\n.filter-btn:hover {\n  background-color: #84C8A4; }\n\n/* ~~~~~~~~ PANTRY ~~~~~~~~~ */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 600px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  width: 250px;\n  z-index: 3; }\n  .drop-menu h2 {\n    color: #359567;\n    margin: 0px; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left; }\n\n/* ~~~~~~~~ RECIPE INSTRUCTIONS ~~~~~~~~~ */\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n  .recipe-instructions h4 {\n    background: white;\n    color: #359567; }\n  .recipe-instructions p {\n    margin-left: 2%; }\n  .recipe-instructions ol {\n    margin-right: 2%; }\n\n#close {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 5px;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease; }\n  #close:hover {\n    background: #C4EB67;\n    transition: .3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n", "",{"version":3,"sources":["webpack://./src/css/index.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'normalize.css';\n@import './_variables';\n@import './_mixins';\n\n/* ~~~~~~~~ GLOBAL RULES ~~~~~~~~~ */\nbody {\n  background-color: $primary-background;\n  display: grid;\n  font-family: $quick-font;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  height: 100em;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n\n  @media screen and (max-width: 613px) {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"header\"\n      \"image\"\n      \"aside\"\n      \"main\"\n  }\n}\n\n/* ~~~~~~~~ HEADER ~~~~~~~~~ */\n\nh1 {\n  align-self: center;\n  color: $white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n  @media screen and (max-width: 726px) {\n    font-size: 40px;\n    width: 60%;\n  }\n\n  @media screen and (max-width: 595px) {\n    font-size: 30px;\n    width: 50%;\n  }\n}\n\nh2 {\n  color: $green-cyan;\n  margin: 10px 0px 10px 0px;\n}\n\nh3 {\n  color: $eucalyptus;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease;\n}\n\nh4 {\n  color: $dark-green;\n  background-color: $pea-green;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content;\n}\n\nheader {\n  @include displayFlexRow();\n  @include widthAndOpacity();\n  grid-area: header;\n}\n\n.header-apple-icon {\n  height: 40px;\n  margin-left: 5px;\n  width: 35px;\n  color: $pea-green;\n  font-weight: 400;\n}\n\n/* ~~~~~~~~ SEARCH RULES ~~~~~~~~~ */\n\n#search {\n  @include displayFlexRow();\n  @include widthAndOpacity();\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset $pea-green;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  font-family: $quick-font;\n  justify-content: center;\n  margin: 1.2% 0.5% 1.2% 0%;\n}\n\n#search-input {\n  background-color: $hunter-green;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: $reef-blue;\n  font-family: $quick-font;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0 2% 0 0;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%;\n\n  &:hover {\n    box-shadow: inset 0px 0px 0px 0px $white;\n    transition: .8s ease;\n  }\n\n  &:focus {\n    box-shadow: inset 0px 0px 0px 0px $white;\n  }\n\n  &::placeholder {\n    color: $reef-blue;\n    font-size: 20px;\n    text-align: right;\n    text-shadow: none;\n  }\n\n  &:focus::placeholder {\n    font-size: 0px;\n    transition: .8s ease;\n  }\n\n  @media screen and (max-width: 365px) {\n    height: 76%;\n    width: 76%;\n    padding: 0 1% 0 0;\n    font-size: 28px;\n    display: flex;\n    margin-bottom: 0;\n  }\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-radius: 0px 15px 15px 0px;\n}\n\n/* ~~~~~~~~ SEARCH BUTTONS ~~~~~~~~~ */\n.nav-btn {\n  align-items: center;\n  background: $reef-blue no-repeat;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font-size: 0px;\n  font-weight: 700;\n  justify-content: center;\n  overflow: hidden;\n  text-align: center;\n  transition: .4s ease;\n  width: 15%;\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n\n  &:hover {\n    color: $pea-green;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease;\n  }\n\n  img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px;\n\n    @media screen and (max-width: 788px) {\n      max-height: 30px;\n      max-width: 30px;\n    }\n\n    @media screen and (max-width: 481px) {\n      max-height: 23px;\n      max-width: 23px;\n    }\n  }\n}\n\n\n.saved-ingredients-btn {\n  border-left: 3px solid $pea-green;\n}\n\n/* ~~~~~~~~ BANNER ~~~~~~~~~ */\n.banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  grid-area: image;\n  height: 150px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.my-recipes-banner,\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n}\n\n.my-recipes-banner h1,\n.welcome-msg h1 {\n  color: $white;\n  @include widthAndOpacity();\n}\n\n.my-recipes-banner {\n  display: none;\n  margin-top: 25px;\n}\n\n.welcome-msg {\n  margin-top: 50px;\n}\n\n/* ~~~~~~~~ FILTER SIDEBAR ~~~~~~~~~ */\naside {\n  @include centerFlexWithPaddingAndMargin();\n  background-color: $white;\n  height: auto;\n  text-align: center;\n}\n\n.wrap {\n  background-color: $white;\n  height: 100em;\n  padding: 10px;\n  position: relative;\n  width: 200px;\n\n  @media screen and (max-width: 613px) {\n    height: 30em;\n  }\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n}\n\nli {\n  margin: 2px;\n}\n\n/* ~~~~~~~~ RECIPE CARDS ~~~~~~~~~ */\nmain {\n  @include centerFlexWithPaddingAndMargin();\n  @include displayFlexRow();\n  grid-area: main;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  overflow: scroll;\n}\n\n.recipe-card {\n  background-color: $white;\n  border: 2px solid $pea-green;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 270px;\n  margin: 20px;\n  padding: 15px;\n  width: 250px;\n\n  &:hover .card-photo-preview {\n    opacity: 50%;\n    transition: .8s ease;\n  }\n\n  &:hover .text {\n    @include widthAndOpacity();\n    font-size: 20px;\n    transition: .5s ease;\n  }\n\n  &:hover h3 {\n    text-shadow: 0px 0px 4px $pea-green;\n    transition: .8s ease;\n  }\n}\n\n.card-apple-icon {\n  cursor: pointer;\n  float: right;\n  height: 50px;\n  padding-bottom: 10px;\n  width: 45px;\n}\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 130px;\n  transition: .8s ease;\n  width: 100%;\n}\n\n.card-photo-container {\n  @include centerFlexWithPaddingAndMargin();\n  align-items: center;\n  height: 130px;\n  position: relative;\n}\n\n.text {\n  background: $eucalyptus;\n  color: $white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease;\n}\n\n.text:focus-visible {\n  @include widthAndOpacity();\n  font-size: 20px;\n  background-color: $eucalyptus;\n  position: absolute;\n  text-align: center;\n}\n\n/* ~~~~~~~~ REMAINING PAGE BUTTONS ~~~~~~~~~ */\n.show-pantry-recipes-btn,\n.show-all-btn,\n.filter-btn {\n  background-color: #2BB271;\n  border: 0;\n  border-radius: 3px;\n  color: #000506;\n  cursor: pointer;\n  font-family: $quick-font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px;\n}\n\n.show-pantry-recipes-btn {\n  margin-top: 10px;\n}\n\n.show-all-btn {\n  height: 40px;\n  margin-top: 20px;\n  width: 200px;\n}\n\n.filter-btn:hover {\n  background-color: #84C8A4;\n}\n\n/* ~~~~~~~~ PANTRY ~~~~~~~~~ */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 600px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  width: 250px;\n  z-index: 3;\n\n  h2 {\n    color: $eucalyptus;\n    margin: 0px;\n  }\n}\n\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left;\n}\n\n/* ~~~~~~~~ RECIPE INSTRUCTIONS ~~~~~~~~~ */\n.recipe-instructions {\n  background: $white;\n  border: 3px solid $pea-green;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n\n  h4 {\n    background: $white;\n    color: $eucalyptus;\n  }\n\n  p {\n    margin-left: 2%;\n  }\n\n  ol {\n    margin-right: 2%;\n  }\n}\n\n#close {\n  background: $white;\n  border: 2px double $eucalyptus;\n  border-radius: 5px;\n  color: $eucalyptus;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease;\n\n  &:hover {\n    background: $pea-green;\n    transition: .3s ease;\n  }\n}\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: $white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color: $reef-blue;\n  height:100%;\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  width:100%;\n  z-index:100;\n}\n","$primary-background: #5B7894;\n$white: white;\n$eucalyptus: #359567;\n$green-cyan: #508067;\n$dark-green: #1B4E35;\n$pea-green: #C4EB67;\n$hunter-green: #b6dcca;\n$reef-blue: #5B7894;\n\n$quick-font: \"Quicksand\", sans-serif;\n","@mixin\ncenterFlexWithPaddingAndMargin($padding: 0, $margin: 0, $direction: center) {\n  display: flex;\n  justify-content: $direction;\n  margin: $margin;\n  padding: $padding;\n}\n\n@mixin\ndisplayFlexRow($direction: row) {\n  display: flex;\n  flex-direction: $direction;\n}\n\n@mixin\nwidthAndOpacity($width: 100%, $opacity: 100%) {\n  width: $width;\n  opacity: $opacity;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Recipe.js":
/*!***********************!*\
  !*** ./src/Recipe.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Recipe {
  constructor(recipe, ingredientData) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
    this.ingredientData = ingredientData.filter(data => this.ingredients.some(ingredient => ingredient.id === data.id))
  }

  calculateIngredientsCost() {
    const sortedIngredients = this.ingredients.sort((a, b) => a.id - b.id)
    const sortedIngredientData = this.ingredientData.sort((a, b) => a.id - b.id)
    return sortedIngredientData.reduce((counter, ingredient, index) => {
      let dollarAmount = ingredient.estimatedCostInCents / 100;
      let quantity = sortedIngredients[index].quantity.amount;
      return counter + (dollarAmount * quantity)
    }, 0)
  }
}

module.exports = Recipe;


/***/ }),

/***/ "./src/RecipeRepository.js":
/*!*********************************!*\
  !*** ./src/RecipeRepository.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
  }

  filterRecipesByTag(keyword) {
    return this.recipeList.filter(recipe => recipe.tags.includes(keyword));
  }

  filterRecipesByName(keyword) {
    const nameList = this.recipeList.map(rec => rec.name);
    const filteredNameList = nameList.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
    return this.recipeList.filter(recipe => recipe.name.split().some(word => filteredNameList.includes(word)));
  }

  filterRecipesByIngredient(keyword) {
    const ingredientList = this.recipeList.map(rec => rec.ingredientData.map(ing => ing.name)).flat();
    const filteredIngredientList = ingredientList.filter(ing => ing.includes(keyword.toLowerCase()));
    return this.recipeList.filter(recipe => recipe.ingredientData.some(ingredient => filteredIngredientList.includes(ingredient.name)))
  }
}

module.exports = RecipeRepository;


/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: users, ingredientData, recipeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientData", function() { return ingredientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeData", function() { return recipeData; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user__WEBPACK_IMPORTED_MODULE_0__);


let users;
let ingredientData;
let recipeData;

const usersGET = () => fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json())
  .then(data => users = data.map(point => new _user__WEBPACK_IMPORTED_MODULE_0___default.a(point)))
  .catch(err => err.message);

const ingredientsGET = () => fetch('http://localhost:3001/api/v1/ingredients')
  .then(response => response.json())
  .then(data => ingredientData = data)
  .catch(err => err.message);

const recipesGET = () => fetch('http://localhost:3001/api/v1/recipes')
  .then(response => response.json())
  .then(data => recipeData = data)
  .catch(err => err.message);

usersGET();
ingredientsGET();
recipesGET();



/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: renderWelcome, displayPantryInfo, addRecipeCardToDom, listTags, hideUnselectedRecipes, showSavedRecipes, renderShowAllRecipesBanner, generateRecipeTitle, addRecipeImage, exitRecipe, showWelcomeBanner, togglePantryMenu, showAllRecipes, generateInstructions, recipeInfoOverlay, isDescendant, addRecipeToFavorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWelcome", function() { return renderWelcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPantryInfo", function() { return displayPantryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRecipeCardToDom", function() { return addRecipeCardToDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listTags", function() { return listTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideUnselectedRecipes", function() { return hideUnselectedRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSavedRecipes", function() { return showSavedRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderShowAllRecipesBanner", function() { return renderShowAllRecipesBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRecipeTitle", function() { return generateRecipeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRecipeImage", function() { return addRecipeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitRecipe", function() { return exitRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWelcomeBanner", function() { return showWelcomeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePantryMenu", function() { return togglePantryMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAllRecipes", function() { return showAllRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateInstructions", function() { return generateInstructions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeInfoOverlay", function() { return recipeInfoOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDescendant", function() { return isDescendant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRecipeToFavorites", function() { return addRecipeToFavorites; });
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");


let pantryMenuOpen = false;

const renderWelcome = () => {
  let firstName = _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].name.split(' ')[0];
  let welcomeMsg = `
    <div class="welcome-msg">
      <h1>Welcome ${firstName}!</h1>
    </div>`;
  document.querySelector('.banner-image').insertAdjacentHTML('afterbegin',
    welcomeMsg);
}

function displayPantryInfo(pantry) {
  pantry.forEach(ingredient => {
    let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
      <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
    document.querySelector('.pantry-list').insertAdjacentHTML('beforeend',
      ingredientHtml);
  });
}

function addRecipeCardToDom(recipe, shortRecipeName) {
  const main = document.querySelector('main');
  let cardHtml = `
    <article tabindex="0" class="recipe-card" id="${recipe.id}">
      <h3 maxlength="40">${shortRecipeName}</h3>
      <div class="card-photo-container">
        <img src="${recipe.image}" class="card-photo-preview" alt="${recipe.name} recipe" title="${recipe.name} recipe">
        <button class="text">
          <a>Click for Instructions</a>
        </button>
      </div>
      <h4>${recipe.tags[0]}</h4>
      <img tabindex="0" src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
    </article>`
  main.insertAdjacentHTML('beforeend', cardHtml);
}

function listTags(allTags) {
  const tagList = document.querySelector('.tag-list');
  allTags.forEach(tag => {
    let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
      <label for="${tag}">${Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(tag)}</label></li>`;
    tagList.insertAdjacentHTML('beforeend', tagHtml);
  });
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = 'none';
  });
}

function showSavedRecipes() {
  let unsavedRecipes = _scripts__WEBPACK_IMPORTED_MODULE_0__["recipes"].filter(recipe => {
    return !_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = 'none';
  });
  renderShowAllRecipesBanner();
}

function renderShowAllRecipesBanner() {
  document.querySelector('.welcome-msg').style.display = 'none';
  document.querySelector('.my-recipes-banner').style.display = 'block';
}

function generateRecipeTitle(recipe, ingredients, event) {
  let recipeTitle = `
    <button id="close" aria-label="close">X</button>
    <h3 id="recipe-title">${recipe.name}</h3>
    <h4>Ingredients</h4>
    <p>${ingredients}</p>`
  _scripts__WEBPACK_IMPORTED_MODULE_0__["fullRecipeInfo"].insertAdjacentHTML('beforeend', recipeTitle);
  const close = document.getElementById('close');
  close.focus();
  close.addEventListener('keydown', function (event) {
    if (event.keyCode === 9) {
      event.preventDefault();
    }
  })
}

function addRecipeImage(recipe) {
  document.getElementById('recipe-title').style.backgroundImage = `url(${recipe.image})`;
}

function exitRecipe() {
  while (_scripts__WEBPACK_IMPORTED_MODULE_0__["fullRecipeInfo"].firstChild &&
    _scripts__WEBPACK_IMPORTED_MODULE_0__["fullRecipeInfo"].removeChild(_scripts__WEBPACK_IMPORTED_MODULE_0__["fullRecipeInfo"].firstChild)) {
    _scripts__WEBPACK_IMPORTED_MODULE_0__["fullRecipeInfo"].style.display = 'none';
  }
  document.getElementById('overlay').remove();
}

function showWelcomeBanner() {
  document.querySelector('.welcome-msg').style.display = 'flex';
  document.querySelector('.my-recipes-banner').style.display = 'none';
}

function togglePantryMenu() {
  var menuDropdown = document.querySelector('.drop-menu');
  let attr = _scripts__WEBPACK_IMPORTED_MODULE_0__["buttons"].pantry.getAttribute("aria-expanded");
  pantryMenuOpen = !pantryMenuOpen;
  if (pantryMenuOpen && attr === 'false') {
    menuDropdown.style.display = 'block';
    _scripts__WEBPACK_IMPORTED_MODULE_0__["buttons"].pantry.setAttribute("aria-expanded", true);
  } else {
    menuDropdown.style.display = 'none';
    _scripts__WEBPACK_IMPORTED_MODULE_0__["buttons"].pantry.setAttribute("aria-expanded", false);
  }
}

function showAllRecipes() {
  _scripts__WEBPACK_IMPORTED_MODULE_0__["recipes"].forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = 'block';
  });
  showWelcomeBanner();
}

function generateInstructions(recipe) {
  let instructionsList = '';
  let instructions = recipe.instructions.map(i => {
    return i.instruction
  });
  instructions.forEach(i => {
    instructionsList += `<li>${i}</li>`
  });
  _scripts__WEBPACK_IMPORTED_MODULE_0__["fullRecipeInfo"].insertAdjacentHTML('beforeend', '<h4>Instructions</h4>');
  _scripts__WEBPACK_IMPORTED_MODULE_0__["fullRecipeInfo"].insertAdjacentHTML('beforeend', `<ol>${instructionsList}</ol>`);
}

function recipeInfoOverlay(domElement) {
  domElement.insertAdjacentHTML('beforebegin', '<section id="overlay"></div>');
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function addRecipeToFavorites(event) {
  if (event.keyCode === 13 || event instanceof MouseEvent) {
    let cardId = parseInt(event.target.closest('.recipe-card').id)
    if (!_scripts__WEBPACK_IMPORTED_MODULE_0__["user"].favoriteRecipes.includes(cardId)) {
      event.target.src = '../images/apple-logo.png';
      _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].saveRecipe(cardId);
    } else {
      event.target.src = '../images/apple-logo-outline.png';
      _scripts__WEBPACK_IMPORTED_MODULE_0__["user"].removeRecipe(cardId);
    }
  }
}



/***/ }),

/***/ "./src/images/apple-logo-outline.png":
/*!*******************************************!*\
  !*** ./src/images/apple-logo-outline.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo-outline.png");

/***/ }),

/***/ "./src/images/apple-logo.png":
/*!***********************************!*\
  !*** ./src/images/apple-logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo.png");

/***/ }),

/***/ "./src/images/chicken-parm.jpg":
/*!*************************************!*\
  !*** ./src/images/chicken-parm.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/chicken-parm.jpg");

/***/ }),

/***/ "./src/images/cookbook.png":
/*!*********************************!*\
  !*** ./src/images/cookbook.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/cookbook.png");

/***/ }),

/***/ "./src/images/green-apples.jpg":
/*!*************************************!*\
  !*** ./src/images/green-apples.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/green-apples.jpg");

/***/ }),

/***/ "./src/images/pancakes.jpg":
/*!*********************************!*\
  !*** ./src/images/pancakes.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/pancakes.jpg");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.png");

/***/ }),

/***/ "./src/images/seasoning.png":
/*!**********************************!*\
  !*** ./src/images/seasoning.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/seasoning.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");



/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! exports provided: user, recipes, recipeRepo, capitalize, fullRecipeInfo, buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipes", function() { return recipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeRepo", function() { return recipeRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullRecipeInfo", function() { return fullRecipeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Recipe */ "./src/Recipe.js");
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Recipe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RecipeRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecipeRepository */ "./src/RecipeRepository.js");
/* harmony import */ var _RecipeRepository__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RecipeRepository__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _images_chicken_parm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/chicken-parm.jpg */ "./src/images/chicken-parm.jpg");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/green-apples.jpg */ "./src/images/green-apples.jpg");
/* harmony import */ var _images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/pancakes.jpg */ "./src/images/pancakes.jpg");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");



Object.entries(_domUpdates__WEBPACK_IMPORTED_MODULE_1__).forEach(([name, exported]) => window[name] = exported);














let user;
let recipes;
let recipeRepo;
const fullRecipeInfo = document.querySelector('.recipe-instructions');
const pantryInfo = [];
const searchForm = document.querySelector('#search');
const buttons = {
  allRecipes: document.querySelector('.show-all-btn'),
  filter: document.querySelector('.filter-btn'),
  pantry: document.querySelector('#pantry-btn'),
  savedRecipes: document.querySelector('#saved-recipes-btn'),
  search: document.querySelector('.search-btn'),
  showPantryRecipes: document.querySelector('.show-pantry-recipes-btn'),
}

window.addEventListener('load', onLoad);
window.addEventListener('click', clickHandlers);
window.addEventListener('keyup', addRecipeToFavorites);
searchForm.addEventListener('submit', searchRecipes);

function onLoad() {
  generateUser();
  generateRecipes();
  renderWelcome();
  createCards();
  findTags();
}

function clickHandlers(event) {
  switch (event.target) {
  case buttons.allRecipes:
    showAllRecipes()
    break;
  case buttons.filter:
    findCheckedBoxes()
    break;
  case buttons.pantry:
    togglePantryMenu()
    break;
  case buttons.savedRecipes:
    showSavedRecipes()
    break;
  case buttons.search:
    searchRecipes(event)
    break;
  case buttons.showPantryRecipes:
    findCheckedPantryBoxes()
    break;
  default:
    recipeCardManagement(event)
    break;
  }
}

function generateUser() {
  user = _apiCalls__WEBPACK_IMPORTED_MODULE_0__["users"][Math.floor(Math.random() * _apiCalls__WEBPACK_IMPORTED_MODULE_0__["users"].length)];
  findPantryInfo();
}

function generateRecipes() {
  recipes = _apiCalls__WEBPACK_IMPORTED_MODULE_0__["recipeData"].map(recipe => new _Recipe__WEBPACK_IMPORTED_MODULE_2___default.a(recipe, _apiCalls__WEBPACK_IMPORTED_MODULE_0__["ingredientData"]));
  recipeRepo = new _RecipeRepository__WEBPACK_IMPORTED_MODULE_3___default.a(recipes);
}

function createCards() {
  recipes.forEach(recipe => {
    let shortRecipeName = recipe.name;
    if (recipe.name.length > 40) {
      shortRecipeName = recipe.name.substring(0, 40) + '...';
    }
    addRecipeCardToDom(recipe, shortRecipeName)
  });
}

function findTags() {
  let tags = [];
  let recipeTagLists = recipes.map(recipe => recipe.tags);
  recipeTagLists.forEach(tagList => {
    tags.push(...tagList.filter(tag => !tags.includes(tag)))
  });
  tags.sort();
  listTags(tags);
}

function capitalize(words) {
  return words.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll('.checked-tag');
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
  renderShowAllRecipesBanner();
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function recipeCardManagement(event) {
  switch (true) {
  case event.target.className === 'card-apple-icon':
    addRecipeToFavorites(event);
    break;
  case isDescendant(event.target.closest('.recipe-card'), event.target):
    openRecipeInfo(event);
    break;
  case event.target.id === 'close':
    exitRecipe();
    break
  }
}

function openRecipeInfo(event) {
  fullRecipeInfo.style.display = 'inline';
  let recipeId = event.path.find(e => e.id).id;
  let recipe = _apiCalls__WEBPACK_IMPORTED_MODULE_0__["recipeData"].find(recipe => recipe.id === Number(recipeId));
  generateRecipeTitle(recipe, generateIngredients(recipe), event);
  addRecipeImage(recipe);
  generateInstructions(recipe);
  recipeInfoOverlay(fullRecipeInfo)
}

function generateIngredients(recipe) {
  let ingredients = recipe.ingredients.sort((a, b) => a - b);
  let ingredientNames = ingredients.map(ing => _apiCalls__WEBPACK_IMPORTED_MODULE_0__["ingredientData"].filter(i => i.id === ing.id).map(i => capitalize(i.name)).toString());
  return ingredients.map((ing, index) => {
    return `${ingredientNames[index]} (${ing.quantity.amount} ${ing.quantity.unit})`
  }).join(', ');
}

function searchRecipes(event) {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input');
  showAllRecipes();
  const names = recipeRepo.filterRecipesByName(searchInput.value.toLowerCase());
  const ingredients = recipeRepo.filterRecipesByIngredient(searchInput.value.toLowerCase());
  let searchedRecipes = [...names, ...ingredients]
  filterNonSearched(searchedRecipes);
  renderShowAllRecipesBanner();
}

function filterNonSearched(filtered) {
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function findPantryInfo() {
  user.pantry.forEach(item => {
    let itemInfo = _apiCalls__WEBPACK_IMPORTED_MODULE_0__["ingredientData"].find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = pantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.count += item.amount;
    } else if (itemInfo) {
      pantryInfo.push({
        name: itemInfo.name,
        count: item.amount
      });
    }
  });
  displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll('.pantry-checkbox');
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
    renderShowAllRecipesBanner();
  }
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  let ingredientList = selected.map(item => {
    return item.id;
  })
  recipes.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredientData.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientList)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = 'none';
    }
  })
}



/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(recipe) {
    let i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1);
  }

  decideToCook(recipe) {
    this.recipesToCook.push(recipe);
  }
}

module.exports = User;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVjaXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWNpcGVSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3M/N2FiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NoaWNrZW4tcGFybS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGFuY2FrZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXNvbmluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lHO0FBQzdCO0FBQzVFLDhCQUE4QixzRUFBMkIsQ0FBQyx5RkFBcUM7QUFDL0Y7QUFDQSw4QkFBOEIsUUFBUyxnVUFBZ1Usc0JBQXNCLDJDQUEyQyxXQUFXLDhKQUE4SixjQUFjLEdBQUcsd0VBQXdFLG1CQUFtQixHQUFHLHNKQUFzSixtQkFBbUIscUJBQXFCLEdBQUcsb05BQW9OLDRCQUE0QixzQkFBc0IsOEJBQThCLFdBQVcsdUpBQXVKLHNDQUFzQywyQkFBMkIsV0FBVyx5TEFBeUwsa0NBQWtDLEdBQUcsMEpBQTBKLHdC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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIH5+fn5+fn5+IEdMT0JBTCBSVUxFUyB+fn5+fn5+fn4gKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJpbWFnZSBpbWFnZVxcXCIgXFxcImFzaWRlIG1haW5cXFwiO1xcbiAgaGVpZ2h0OiAxMDBlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTNweCkge1xcbiAgICBib2R5IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyXFxcIiBcXFwiaW1hZ2VcXFwiIFxcXCJhc2lkZVxcXCIgXFxcIm1haW5cXFwiOyB9IH1cXG5cXG4vKiB+fn5+fn5+fiBIRUFERVIgfn5+fn5+fn5+ICovXFxuaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdWxwaHVyIFBvaW50XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIG1hcmdpbjogMCU7XFxuICBwYWRkaW5nOiAwLjUlIDAuNyUgMCU7XFxuICB3aWR0aDogNzAlOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjZweCkge1xcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgIHdpZHRoOiA2MCU7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk1cHgpIHtcXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICB3aWR0aDogNTAlOyB9IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogIzUwODA2NztcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7IH1cXG5cXG5oMyB7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTclO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG5oNCB7XFxuICBjb2xvcjogIzFCNEUzNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4IDFweCA0cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICBncmlkLWFyZWE6IGhlYWRlcjsgfVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBjb2xvcjogI0M0RUI2NztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4vKiB+fn5+fn5+fiBTRUFSQ0ggUlVMRVMgfn5+fn5+fn5+ICovXFxuI3NlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBib3JkZXI6IDNweCBvdXRzZXQgI0M0RUI2NztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAjNDc1ZDc0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlOyB9XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCB3aGl0ZSksIGNvbG9yLXN0b3AoMSwgI2UxZTFlMSkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4gIGNvbG9yOiAjNUI3ODk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAjc2VhcmNoLWlucHV0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcbiAgI3NlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCB3aGl0ZTsgfVxcbiAgI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogIzVCNzg5NDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7IH1cXG4gICNzZWFyY2gtaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xcbiAgICAjc2VhcmNoLWlucHV0IHtcXG4gICAgICBoZWlnaHQ6IDc2JTtcXG4gICAgICB3aWR0aDogNzYlO1xcbiAgICAgIHBhZGRpbmc6IDAgMSUgMCAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IH0gfVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4OyB9XFxuXFxuLyogfn5+fn5+fn4gU0VBUkNIIEJVVFRPTlMgfn5+fn5+fn5+ICovXFxuLm5hdi1idG4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM1Qjc4OTQgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIHdpZHRoOiAxNSU7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4OyB9XFxuICAubmF2LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjQzRFQjY3O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7IH1cXG4gIC5uYXYtYnRuIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgcGFkZGluZzogMnB4IDBweDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODhweCkge1xcbiAgICAgIC5uYXYtYnRuIGltZyB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMHB4OyB9IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcXG4gICAgICAubmF2LWJ0biBpbWcge1xcbiAgICAgICAgbWF4LWhlaWdodDogMjNweDtcXG4gICAgICAgIG1heC13aWR0aDogMjNweDsgfSB9XFxuXFxuLnNhdmVkLWluZ3JlZGllbnRzLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNDNEVCNjc7IH1cXG5cXG4vKiB+fn5+fn5+fiBCQU5ORVIgfn5+fn5+fn5+ICovXFxuLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIsXFxuLndlbGNvbWUtbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIgaDEsXFxuLndlbGNvbWUtbXNnIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMTAwJTsgfVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjVweDsgfVxcblxcbi53ZWxjb21lLW1zZyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4OyB9XFxuXFxuLyogfn5+fn5+fn4gRklMVEVSIFNJREVCQVIgfn5+fn5+fn5+ICovXFxuYXNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMGVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDBweDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEzcHgpIHtcXG4gICAgLndyYXAge1xcbiAgICAgIGhlaWdodDogMzBlbTsgfSB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzVweDsgfVxcblxcbmxpIHtcXG4gIG1hcmdpbjogMnB4OyB9XFxuXFxuLyogfn5+fn5+fn4gUkVDSVBFIENBUkRTIH5+fn5+fn5+fiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyNzBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogMjUwcHg7IH1cXG4gIC5yZWNpcGUtY2FyZDpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcbiAgLnJlY2lwZS1jYXJkOmhvdmVyIC50ZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7IH1cXG4gIC5yZWNpcGUtY2FyZDpob3ZlciBoMyB7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjQzRFQjY3O1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogNDVweDsgfVxcblxcbi5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTsgfVxcblxcbi50ZXh0OmZvY3VzLXZpc2libGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTU2NztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qIH5+fn5+fn5+IFJFTUFJTklORyBQQUdFIEJVVFRPTlMgfn5+fn5+fn5+ICovXFxuLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuLFxcbi5zaG93LWFsbC1idG4sXFxuLmZpbHRlci1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCQjI3MTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjMDAwNTA2O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLnNob3ctYWxsLWJ0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxuLmZpbHRlci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0QzhBNDsgfVxcblxcbi8qIH5+fn5+fn5+IFBBTlRSWSB+fn5+fn5+fn4gKi9cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogODElO1xcbiAgbWFyZ2luLXRvcDogOTJweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgei1pbmRleDogMzsgfVxcbiAgLmRyb3AtbWVudSBoMiB7XFxuICAgIGNvbG9yOiAjMzU5NTY3O1xcbiAgICBtYXJnaW46IDBweDsgfVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4vKiB+fn5+fn5+fiBSRUNJUEUgSU5TVFJVQ1RJT05TIH5+fn5+fn5+fiAqL1xcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgaDQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMzNTk1Njc7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIG9sIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcblxcbiNjbG9zZSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjMzU5NTY3O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAtNCUgLTMlIDIlIC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlOyB9XFxuICAjY2xvc2U6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcblxcbiNyZWNpcGUtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjazsgfVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFj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QWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQiwyQ0FBQTtBQUNBO0VBQ0UsaUJDblpXO0VEb1pYLHlCQ2haaUI7RURpWmpCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYSxFQUFBO0VBZGY7SUFpQkksaUJDbmFTO0lEb2FULGNDbmFnQixFQUFBO0VEaVpwQjtJQXNCSSxlQUFlLEVBQUE7RUF0Qm5CO0lBMEJJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGlCQ2piVztFRGtiWCwwQkNqYmtCO0VEa2JsQixrQkFBa0I7RUFDbEIsY0NuYmtCO0VEb2JsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG9CQUFvQixFQUFBO0VBVnRCO0lBYUksbUJDemJlO0lEMGJmLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFlDdGNXO0VEdWNYLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx5QkFBd0I7RUFDeEIseUJDMWNpQjtFRDJjakIsWUFBVztFQUNYLE9BQU07RUFDTixZQUFXO0VBQ1gsZUFBYztFQUNkLE1BQUs7RUFDTCxXQUFVO0VBQ1YsWUFBVyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xcbkBpbXBvcnQgJy4vX3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnLi9fbWl4aW5zJztcXG5cXG4vKiB+fn5+fn5+fiBHTE9CQUwgUlVMRVMgfn5+fn5+fn5+ICovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtZmFtaWx5OiAkcXVpY2stZm9udDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiaW1hZ2UgaW1hZ2VcXFwiXFxuICAgIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIGhlaWdodDogMTAwZW07XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxM3B4KSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgXFxcImltYWdlXFxcIlxcbiAgICAgIFxcXCJhc2lkZVxcXCJcXG4gICAgICBcXFwibWFpblxcXCJcXG4gIH1cXG59XFxuXFxuLyogfn5+fn5+fn4gSEVBREVSIH5+fn5+fn5+fiAqL1xcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmc6IDAuNSUgMC43JSAwJTtcXG4gIHdpZHRoOiA3MCU7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjZweCkge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTVweCkge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAkZ3JlZW4tY3lhbjtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiAkZXVjYWx5cHR1cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTclO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxufVxcblxcbmg0IHtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwZWEtZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4IDFweCA0cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleFJvdygpO1xcbiAgQGluY2x1ZGUgd2lkdGhBbmRPcGFjaXR5KCk7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmhlYWRlci1hcHBsZS1pY29uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGNvbG9yOiAkcGVhLWdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyogfn5+fn5+fn4gU0VBUkNIIFJVTEVTIH5+fn5+fn5+fiAqL1xcblxcbiNzZWFyY2gge1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXhSb3coKTtcXG4gIEBpbmNsdWRlIHdpZHRoQW5kT3BhY2l0eSgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJvcmRlcjogM3B4IG91dHNldCAkcGVhLWdyZWVuO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICM0NzVkNzQ7XFxuICBmb250LWZhbWlseTogJHF1aWNrLWZvbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMS4yJSAwLjUlIDEuMiUgMCU7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGh1bnRlci1ncmVlbjtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoIGxpbmVhcixsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiKDI1NSwgMjU1LCAyNTUpKSwgY29sb3Itc3RvcCgxLCByZ2IoMjI1LDIyNSwyMjUpKSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTFweCAyMHB4IDFweCAjNWM3ODk0O1xcbiAgY29sb3I6ICRyZWVmLWJsdWU7XFxuICBmb250LWZhbWlseTogJHF1aWNrLWZvbnQ7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCAyJSAwIDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4ICR3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4ICR3aGl0ZTtcXG4gIH1cXG5cXG4gICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICRyZWVmLWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgfVxcblxcbiAgJjpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xcbiAgICBoZWlnaHQ6IDc2JTtcXG4gICAgd2lkdGg6IDc2JTtcXG4gICAgcGFkZGluZzogMCAxJSAwIDA7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG59XFxuXFxuLyogfn5+fn5+fn4gU0VBUkNIIEJVVFRPTlMgfn5+fn5+fn5+ICovXFxuLm5hdi1idG4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICRyZWVmLWJsdWUgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIHdpZHRoOiAxNSU7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4O1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAkcGVhLWdyZWVuO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDJweCAwcHg7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4OHB4KSB7XFxuICAgICAgbWF4LWhlaWdodDogMzBweDtcXG4gICAgICBtYXgtd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgxcHgpIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyM3B4O1xcbiAgICAgIG1heC13aWR0aDogMjNweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4uc2F2ZWQtaW5ncmVkaWVudHMtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHBlYS1ncmVlbjtcXG59XFxuXFxuLyogfn5+fn5+fn4gQkFOTkVSIH5+fn5+fn5+fiAqL1xcbi5iYW5uZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjUpLCByZ2JhKDAsMCwwLC41KSksdXJsKFxcXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1xcXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lcixcXG4ud2VsY29tZS1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIGgxLFxcbi53ZWxjb21lLW1zZyBoMSB7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgQGluY2x1ZGUgd2lkdGhBbmRPcGFjaXR5KCk7XFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi8qIH5+fn5+fn5+IEZJTFRFUiBTSURFQkFSIH5+fn5+fn5+fiAqL1xcbmFzaWRlIHtcXG4gIEBpbmNsdWRlIGNlbnRlckZsZXhXaXRoUGFkZGluZ0FuZE1hcmdpbigpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICBoZWlnaHQ6IDEwMGVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxM3B4KSB7XFxuICAgIGhlaWdodDogMzBlbTtcXG4gIH1cXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbi8qIH5+fn5+fn5+IFJFQ0lQRSBDQVJEUyB+fn5+fn5+fn4gKi9cXG5tYWluIHtcXG4gIEBpbmNsdWRlIGNlbnRlckZsZXhXaXRoUGFkZGluZ0FuZE1hcmdpbigpO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXhSb3coKTtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgJHBlYS1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjcwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcblxcbiAgJjpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIgLnRleHQge1xcbiAgICBAaW5jbHVkZSB3aWR0aEFuZE9wYWNpdHkoKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIgaDMge1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJHBlYS1ncmVlbjtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxufVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogNDVweDtcXG59XFxuXFxuLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gIEBpbmNsdWRlIGNlbnRlckZsZXhXaXRoUGFkZGluZ0FuZE1hcmdpbigpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0IHtcXG4gIGJhY2tncm91bmQ6ICRldWNhbHlwdHVzO1xcbiAgY29sb3I6ICR3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG59XFxuXFxuLnRleHQ6Zm9jdXMtdmlzaWJsZSB7XFxuICBAaW5jbHVkZSB3aWR0aEFuZE9wYWNpdHkoKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRldWNhbHlwdHVzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiB+fn5+fn5+fiBSRU1BSU5JTkcgUEFHRSBCVVRUT05TIH5+fn5+fn5+fiAqL1xcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0bixcXG4uc2hvdy1hbGwtYnRuLFxcbi5maWx0ZXItYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQkIyNzE7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogIzAwMDUwNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkcXVpY2stZm9udDtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxufVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2hvdy1hbGwtYnRuIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5maWx0ZXItYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NEM4QTQ7XFxufVxcblxcbi8qIH5+fn5+fn5+IFBBTlRSWSB+fn5+fn5+fn4gKi9cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogODElO1xcbiAgbWFyZ2luLXRvcDogOTJweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgei1pbmRleDogMztcXG5cXG4gIGgyIHtcXG4gICAgY29sb3I6ICRldWNhbHlwdHVzO1xcbiAgICBtYXJnaW46IDBweDtcXG4gIH1cXG59XFxuXFxuXFxuLnBhbnRyeS1saXN0IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogfn5+fn5+fn4gUkVDSVBFIElOU1RSVUNUSU9OUyB+fn5+fn5+fn4gKi9cXG4ucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAkcGVhLWdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggYmxhY2s7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxNSU7XFxuICB0b3A6IDE1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICB6LWluZGV4OiAxMDAwO1xcblxcbiAgaDQge1xcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICAgIGNvbG9yOiAkZXVjYWx5cHR1cztcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICB9XFxuXFxuICBvbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICB9XFxufVxcblxcbiNjbG9zZSB7XFxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgJGV1Y2FseXB0dXM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogJGV1Y2FseXB0dXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAtNCUgLTMlIDIlIC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICRwZWEtZ3JlZW47XFxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcbiAgfVxcbn1cXG5cXG4jcmVjaXBlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgY29sb3I6ICR3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBmaWx0ZXI6YWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVlZi1ibHVlO1xcbiAgaGVpZ2h0OjEwMCU7XFxuICBsZWZ0OjA7XFxuICBvcGFjaXR5OjAuNTtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgdG9wOjA7XFxuICB3aWR0aDoxMDAlO1xcbiAgei1pbmRleDoxMDA7XFxufVxcblwiLFwiJHByaW1hcnktYmFja2dyb3VuZDogIzVCNzg5NDtcXG4kd2hpdGU6IHdoaXRlO1xcbiRldWNhbHlwdHVzOiAjMzU5NTY3O1xcbiRncmVlbi1jeWFuOiAjNTA4MDY3O1xcbiRkYXJrLWdyZWVuOiAjMUI0RTM1O1xcbiRwZWEtZ3JlZW46ICNDNEVCNjc7XFxuJGh1bnRlci1ncmVlbjogI2I2ZGNjYTtcXG4kcmVlZi1ibHVlOiAjNUI3ODk0O1xcblxcbiRxdWljay1mb250OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG5cIixcIkBtaXhpblxcbmNlbnRlckZsZXhXaXRoUGFkZGluZ0FuZE1hcmdpbigkcGFkZGluZzogMCwgJG1hcmdpbjogMCwgJGRpcmVjdGlvbjogY2VudGVyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiAkZGlyZWN0aW9uO1xcbiAgbWFyZ2luOiAkbWFyZ2luO1xcbiAgcGFkZGluZzogJHBhZGRpbmc7XFxufVxcblxcbkBtaXhpblxcbmRpc3BsYXlGbGV4Um93KCRkaXJlY3Rpb246IHJvdykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcbn1cXG5cXG5AbWl4aW5cXG53aWR0aEFuZE9wYWNpdHkoJHdpZHRoOiAxMDAlLCAkb3BhY2l0eTogMTAwJSkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG9wYWNpdHk6ICRvcGFjaXR5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50RGF0YSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5ncmVkaWVudERhdGEgPSBpbmdyZWRpZW50RGF0YS5maWx0ZXIoZGF0YSA9PiB0aGlzLmluZ3JlZGllbnRzLnNvbWUoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09PSBkYXRhLmlkKSlcbiAgfVxuXG4gIGNhbGN1bGF0ZUluZ3JlZGllbnRzQ29zdCgpIHtcbiAgICBjb25zdCBzb3J0ZWRJbmdyZWRpZW50cyA9IHRoaXMuaW5ncmVkaWVudHMuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpXG4gICAgY29uc3Qgc29ydGVkSW5ncmVkaWVudERhdGEgPSB0aGlzLmluZ3JlZGllbnREYXRhLnNvcnQoKGEsIGIpID0+IGEuaWQgLSBiLmlkKVxuICAgIHJldHVybiBzb3J0ZWRJbmdyZWRpZW50RGF0YS5yZWR1Y2UoKGNvdW50ZXIsIGluZ3JlZGllbnQsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZG9sbGFyQW1vdW50ID0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyAvIDEwMDtcbiAgICAgIGxldCBxdWFudGl0eSA9IHNvcnRlZEluZ3JlZGllbnRzW2luZGV4XS5xdWFudGl0eS5hbW91bnQ7XG4gICAgICByZXR1cm4gY291bnRlciArIChkb2xsYXJBbW91bnQgKiBxdWFudGl0eSlcbiAgICB9LCAwKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjaXBlO1xuIiwiY2xhc3MgUmVjaXBlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZURhdGEpIHtcbiAgICB0aGlzLnJlY2lwZUxpc3QgPSByZWNpcGVEYXRhO1xuICB9XG5cbiAgZmlsdGVyUmVjaXBlc0J5VGFnKGtleXdvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVMaXN0LmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnRhZ3MuaW5jbHVkZXMoa2V5d29yZCkpO1xuICB9XG5cbiAgZmlsdGVyUmVjaXBlc0J5TmFtZShrZXl3b3JkKSB7XG4gICAgY29uc3QgbmFtZUxpc3QgPSB0aGlzLnJlY2lwZUxpc3QubWFwKHJlYyA9PiByZWMubmFtZSk7XG4gICAgY29uc3QgZmlsdGVyZWROYW1lTGlzdCA9IG5hbWVMaXN0LmZpbHRlcihuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKTtcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVMaXN0LmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLm5hbWUuc3BsaXQoKS5zb21lKHdvcmQgPT4gZmlsdGVyZWROYW1lTGlzdC5pbmNsdWRlcyh3b3JkKSkpO1xuICB9XG5cbiAgZmlsdGVyUmVjaXBlc0J5SW5ncmVkaWVudChrZXl3b3JkKSB7XG4gICAgY29uc3QgaW5ncmVkaWVudExpc3QgPSB0aGlzLnJlY2lwZUxpc3QubWFwKHJlYyA9PiByZWMuaW5ncmVkaWVudERhdGEubWFwKGluZyA9PiBpbmcubmFtZSkpLmZsYXQoKTtcbiAgICBjb25zdCBmaWx0ZXJlZEluZ3JlZGllbnRMaXN0ID0gaW5ncmVkaWVudExpc3QuZmlsdGVyKGluZyA9PiBpbmcuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgcmV0dXJuIHRoaXMucmVjaXBlTGlzdC5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5pbmdyZWRpZW50RGF0YS5zb21lKGluZ3JlZGllbnQgPT4gZmlsdGVyZWRJbmdyZWRpZW50TGlzdC5pbmNsdWRlcyhpbmdyZWRpZW50Lm5hbWUpKSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY2lwZVJlcG9zaXRvcnk7XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5sZXQgdXNlcnM7XG5sZXQgaW5ncmVkaWVudERhdGE7XG5sZXQgcmVjaXBlRGF0YTtcblxuY29uc3QgdXNlcnNHRVQgPSAoKSA9PiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2VycycpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB1c2VycyA9IGRhdGEubWFwKHBvaW50ID0+IG5ldyBVc2VyKHBvaW50KSkpXG4gIC5jYXRjaChlcnIgPT4gZXJyLm1lc3NhZ2UpO1xuXG5jb25zdCBpbmdyZWRpZW50c0dFVCA9ICgpID0+IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2luZ3JlZGllbnRzJylcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IGluZ3JlZGllbnREYXRhID0gZGF0YSlcbiAgLmNhdGNoKGVyciA9PiBlcnIubWVzc2FnZSk7XG5cbmNvbnN0IHJlY2lwZXNHRVQgPSAoKSA9PiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9yZWNpcGVzJylcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IHJlY2lwZURhdGEgPSBkYXRhKVxuICAuY2F0Y2goZXJyID0+IGVyci5tZXNzYWdlKTtcblxudXNlcnNHRVQoKTtcbmluZ3JlZGllbnRzR0VUKCk7XG5yZWNpcGVzR0VUKCk7XG5cbmV4cG9ydCB7IHVzZXJzLCBpbmdyZWRpZW50RGF0YSwgcmVjaXBlRGF0YSB9IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7XG4gIHVzZXIsXG4gIHJlY2lwZXMsXG4gIGNhcGl0YWxpemUsXG4gIGZ1bGxSZWNpcGVJbmZvLFxuICBidXR0b25zLFxufSBmcm9tICcuL3NjcmlwdHMnXG5cbmxldCBwYW50cnlNZW51T3BlbiA9IGZhbHNlO1xuXG5jb25zdCByZW5kZXJXZWxjb21lID0gKCkgPT4ge1xuICBsZXQgZmlyc3ROYW1lID0gdXNlci5uYW1lLnNwbGl0KCcgJylbMF07XG4gIGxldCB3ZWxjb21lTXNnID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLW1zZ1wiPlxuICAgICAgPGgxPldlbGNvbWUgJHtmaXJzdE5hbWV9ITwvaDE+XG4gICAgPC9kaXY+YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lci1pbWFnZScpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgd2VsY29tZU1zZyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYW50cnlJbmZvKHBhbnRyeSkge1xuICBwYW50cnkuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICBsZXQgaW5ncmVkaWVudEh0bWwgPSBgPGxpPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInBhbnRyeS1jaGVja2JveFwiIGlkPVwiJHtpbmdyZWRpZW50Lm5hbWV9XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiJHtpbmdyZWRpZW50Lm5hbWV9XCI+JHtpbmdyZWRpZW50Lm5hbWV9LCAke2luZ3JlZGllbnQuY291bnR9PC9sYWJlbD48L2xpPmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbnRyeS1saXN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgaW5ncmVkaWVudEh0bWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUmVjaXBlQ2FyZFRvRG9tKHJlY2lwZSwgc2hvcnRSZWNpcGVOYW1lKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGxldCBjYXJkSHRtbCA9IGBcbiAgICA8YXJ0aWNsZSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9XCIke3JlY2lwZS5pZH1cIj5cbiAgICAgIDxoMyBtYXhsZW5ndGg9XCI0MFwiPiR7c2hvcnRSZWNpcGVOYW1lfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1waG90by1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3JlY2lwZS5pbWFnZX1cIiBjbGFzcz1cImNhcmQtcGhvdG8tcHJldmlld1wiIGFsdD1cIiR7cmVjaXBlLm5hbWV9IHJlY2lwZVwiIHRpdGxlPVwiJHtyZWNpcGUubmFtZX0gcmVjaXBlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgPGE+Q2xpY2sgZm9yIEluc3RydWN0aW9uczwvYT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND4ke3JlY2lwZS50YWdzWzBdfTwvaDQ+XG4gICAgICA8aW1nIHRhYmluZGV4PVwiMFwiIHNyYz1cIi4uL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCIgYWx0PVwidW5maWxsZWQgYXBwbGUgaWNvblwiIGNsYXNzPVwiY2FyZC1hcHBsZS1pY29uXCI+XG4gICAgPC9hcnRpY2xlPmBcbiAgbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNhcmRIdG1sKTtcbn1cblxuZnVuY3Rpb24gbGlzdFRhZ3MoYWxsVGFncykge1xuICBjb25zdCB0YWdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhZy1saXN0Jyk7XG4gIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgIGxldCB0YWdIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2VkLXRhZ1wiIGlkPVwiJHt0YWd9XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiJHt0YWd9XCI+JHtjYXBpdGFsaXplKHRhZyl9PC9sYWJlbD48L2xpPmA7XG4gICAgdGFnTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRhZ0h0bWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcykge1xuICBmb3VuZFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93U2F2ZWRSZWNpcGVzKCkge1xuICBsZXQgdW5zYXZlZFJlY2lwZXMgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiAhdXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlLmlkKTtcbiAgfSk7XG4gIHVuc2F2ZWRSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICBsZXQgZG9tUmVjaXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmVjaXBlLmlkfWApO1xuICAgIGRvbVJlY2lwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbiAgcmVuZGVyU2hvd0FsbFJlY2lwZXNCYW5uZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2hvd0FsbFJlY2lwZXNCYW5uZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLW1zZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1yZWNpcGVzLWJhbm5lcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlY2lwZVRpdGxlKHJlY2lwZSwgaW5ncmVkaWVudHMsIGV2ZW50KSB7XG4gIGxldCByZWNpcGVUaXRsZSA9IGBcbiAgICA8YnV0dG9uIGlkPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIj5YPC9idXR0b24+XG4gICAgPGgzIGlkPVwicmVjaXBlLXRpdGxlXCI+JHtyZWNpcGUubmFtZX08L2gzPlxuICAgIDxoND5JbmdyZWRpZW50czwvaDQ+XG4gICAgPHA+JHtpbmdyZWRpZW50c308L3A+YFxuICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlY2lwZVRpdGxlKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKTtcbiAgY2xvc2UuZm9jdXMoKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUmVjaXBlSW1hZ2UocmVjaXBlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGUtdGl0bGUnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVjaXBlLmltYWdlfSlgO1xufVxuXG5mdW5jdGlvbiBleGl0UmVjaXBlKCkge1xuICB3aGlsZSAoZnVsbFJlY2lwZUluZm8uZmlyc3RDaGlsZCAmJlxuICAgIGZ1bGxSZWNpcGVJbmZvLnJlbW92ZUNoaWxkKGZ1bGxSZWNpcGVJbmZvLmZpcnN0Q2hpbGQpKSB7XG4gICAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzaG93V2VsY29tZUJhbm5lcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUtbXNnJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXJlY2lwZXMtYmFubmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGFudHJ5TWVudSgpIHtcbiAgdmFyIG1lbnVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLW1lbnUnKTtcbiAgbGV0IGF0dHIgPSBidXR0b25zLnBhbnRyeS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO1xuICBwYW50cnlNZW51T3BlbiA9ICFwYW50cnlNZW51T3BlbjtcbiAgaWYgKHBhbnRyeU1lbnVPcGVuICYmIGF0dHIgPT09ICdmYWxzZScpIHtcbiAgICBtZW51RHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYnV0dG9ucy5wYW50cnkuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBtZW51RHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBidXR0b25zLnBhbnRyeS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWxsUmVjaXBlcygpIHtcbiAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgbGV0IGRvbVJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3JlY2lwZS5pZH1gKTtcbiAgICBkb21SZWNpcGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pO1xuICBzaG93V2VsY29tZUJhbm5lcigpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUluc3RydWN0aW9ucyhyZWNpcGUpIHtcbiAgbGV0IGluc3RydWN0aW9uc0xpc3QgPSAnJztcbiAgbGV0IGluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnMubWFwKGkgPT4ge1xuICAgIHJldHVybiBpLmluc3RydWN0aW9uXG4gIH0pO1xuICBpbnN0cnVjdGlvbnMuZm9yRWFjaChpID0+IHtcbiAgICBpbnN0cnVjdGlvbnNMaXN0ICs9IGA8bGk+JHtpfTwvbGk+YFxuICB9KTtcbiAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPGg0Pkluc3RydWN0aW9uczwvaDQ+Jyk7XG4gIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxvbD4ke2luc3RydWN0aW9uc0xpc3R9PC9vbD5gKTtcbn1cblxuZnVuY3Rpb24gcmVjaXBlSW5mb092ZXJsYXkoZG9tRWxlbWVudCkge1xuICBkb21FbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCAnPHNlY3Rpb24gaWQ9XCJvdmVybGF5XCI+PC9kaXY+Jyk7XG59XG5cbmZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCBub2RlID0gY2hpbGQ7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhZGRSZWNpcGVUb0Zhdm9yaXRlcyhldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgbGV0IGNhcmRJZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucmVjaXBlLWNhcmQnKS5pZClcbiAgICBpZiAoIXVzZXIuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKGNhcmRJZCkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5zcmMgPSAnLi4vaW1hZ2VzL2FwcGxlLWxvZ28ucG5nJztcbiAgICAgIHVzZXIuc2F2ZVJlY2lwZShjYXJkSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuc3JjID0gJy4uL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nJztcbiAgICAgIHVzZXIucmVtb3ZlUmVjaXBlKGNhcmRJZCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHJlbmRlcldlbGNvbWUsXG4gIGRpc3BsYXlQYW50cnlJbmZvLFxuICBhZGRSZWNpcGVDYXJkVG9Eb20sXG4gIGxpc3RUYWdzLFxuICBoaWRlVW5zZWxlY3RlZFJlY2lwZXMsXG4gIHNob3dTYXZlZFJlY2lwZXMsXG4gIHJlbmRlclNob3dBbGxSZWNpcGVzQmFubmVyLFxuICBnZW5lcmF0ZVJlY2lwZVRpdGxlLFxuICBhZGRSZWNpcGVJbWFnZSxcbiAgZXhpdFJlY2lwZSxcbiAgc2hvd1dlbGNvbWVCYW5uZXIsXG4gIHRvZ2dsZVBhbnRyeU1lbnUsXG4gIHNob3dBbGxSZWNpcGVzLFxuICBnZW5lcmF0ZUluc3RydWN0aW9ucyxcbiAgcmVjaXBlSW5mb092ZXJsYXksXG4gIGlzRGVzY2VuZGFudCxcbiAgYWRkUmVjaXBlVG9GYXZvcml0ZXNcbn0iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXBwbGUtbG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jaGlja2VuLXBhcm0uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY29va2Jvb2sucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BhbmNha2VzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NlYXJjaC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFzb25pbmcucG5nXCI7IiwiaW1wb3J0ICcuL3NjcmlwdHMuanMnO1xuIiwiaW1wb3J0IHtcbiAgdXNlcnMsXG4gIGluZ3JlZGllbnREYXRhLFxuICByZWNpcGVEYXRhLFxufSBmcm9tICcuL2FwaUNhbGxzJ1xuXG5pbXBvcnQgKiBhcyBleHBvcnRzIGZyb20gJy4vZG9tVXBkYXRlcydcbk9iamVjdC5lbnRyaWVzKGV4cG9ydHMpLmZvckVhY2goKFtuYW1lLCBleHBvcnRlZF0pID0+IHdpbmRvd1tuYW1lXSA9IGV4cG9ydGVkKTtcblxuaW1wb3J0IFJlY2lwZSBmcm9tICcuL1JlY2lwZSc7XG5pbXBvcnQgUmVjaXBlUmVwb3NpdG9yeSBmcm9tICcuL1JlY2lwZVJlcG9zaXRvcnknXG5cbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2NoaWNrZW4tcGFybS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcGFuY2FrZXMuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFzb25pbmcucG5nJ1xuaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcblxubGV0IHVzZXI7XG5sZXQgcmVjaXBlcztcbmxldCByZWNpcGVSZXBvO1xuY29uc3QgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLWluc3RydWN0aW9ucycpO1xuY29uc3QgcGFudHJ5SW5mbyA9IFtdO1xuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbmNvbnN0IGJ1dHRvbnMgPSB7XG4gIGFsbFJlY2lwZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LWFsbC1idG4nKSxcbiAgZmlsdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWJ0bicpLFxuICBwYW50cnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYW50cnktYnRuJyksXG4gIHNhdmVkUmVjaXBlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmVkLXJlY2lwZXMtYnRuJyksXG4gIHNlYXJjaDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKSxcbiAgc2hvd1BhbnRyeVJlY2lwZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0bicpLFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXJzKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGFkZFJlY2lwZVRvRmF2b3JpdGVzKTtcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2VhcmNoUmVjaXBlcyk7XG5cbmZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgZ2VuZXJhdGVVc2VyKCk7XG4gIGdlbmVyYXRlUmVjaXBlcygpO1xuICByZW5kZXJXZWxjb21lKCk7XG4gIGNyZWF0ZUNhcmRzKCk7XG4gIGZpbmRUYWdzKCk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcnMoZXZlbnQpIHtcbiAgc3dpdGNoIChldmVudC50YXJnZXQpIHtcbiAgY2FzZSBidXR0b25zLmFsbFJlY2lwZXM6XG4gICAgc2hvd0FsbFJlY2lwZXMoKVxuICAgIGJyZWFrO1xuICBjYXNlIGJ1dHRvbnMuZmlsdGVyOlxuICAgIGZpbmRDaGVja2VkQm94ZXMoKVxuICAgIGJyZWFrO1xuICBjYXNlIGJ1dHRvbnMucGFudHJ5OlxuICAgIHRvZ2dsZVBhbnRyeU1lbnUoKVxuICAgIGJyZWFrO1xuICBjYXNlIGJ1dHRvbnMuc2F2ZWRSZWNpcGVzOlxuICAgIHNob3dTYXZlZFJlY2lwZXMoKVxuICAgIGJyZWFrO1xuICBjYXNlIGJ1dHRvbnMuc2VhcmNoOlxuICAgIHNlYXJjaFJlY2lwZXMoZXZlbnQpXG4gICAgYnJlYWs7XG4gIGNhc2UgYnV0dG9ucy5zaG93UGFudHJ5UmVjaXBlczpcbiAgICBmaW5kQ2hlY2tlZFBhbnRyeUJveGVzKClcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgICByZWNpcGVDYXJkTWFuYWdlbWVudChldmVudClcbiAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVzZXIoKSB7XG4gIHVzZXIgPSB1c2Vyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1c2Vycy5sZW5ndGgpXTtcbiAgZmluZFBhbnRyeUluZm8oKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSZWNpcGVzKCkge1xuICByZWNpcGVzID0gcmVjaXBlRGF0YS5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlLCBpbmdyZWRpZW50RGF0YSkpO1xuICByZWNpcGVSZXBvID0gbmV3IFJlY2lwZVJlcG9zaXRvcnkocmVjaXBlcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmRzKCkge1xuICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICBsZXQgc2hvcnRSZWNpcGVOYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgaWYgKHJlY2lwZS5uYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICBzaG9ydFJlY2lwZU5hbWUgPSByZWNpcGUubmFtZS5zdWJzdHJpbmcoMCwgNDApICsgJy4uLic7XG4gICAgfVxuICAgIGFkZFJlY2lwZUNhcmRUb0RvbShyZWNpcGUsIHNob3J0UmVjaXBlTmFtZSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWdzKCkge1xuICBsZXQgdGFncyA9IFtdO1xuICBsZXQgcmVjaXBlVGFnTGlzdHMgPSByZWNpcGVzLm1hcChyZWNpcGUgPT4gcmVjaXBlLnRhZ3MpO1xuICByZWNpcGVUYWdMaXN0cy5mb3JFYWNoKHRhZ0xpc3QgPT4ge1xuICAgIHRhZ3MucHVzaCguLi50YWdMaXN0LmZpbHRlcih0YWcgPT4gIXRhZ3MuaW5jbHVkZXModGFnKSkpXG4gIH0pO1xuICB0YWdzLnNvcnQoKTtcbiAgbGlzdFRhZ3ModGFncyk7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUod29yZHMpIHtcbiAgcmV0dXJuIHdvcmRzLnNwbGl0KCcgJykubWFwKHdvcmQgPT4ge1xuICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2hlY2tlZEJveGVzKCkge1xuICBsZXQgdGFnQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2VkLXRhZycpO1xuICBsZXQgY2hlY2tib3hJbmZvID0gQXJyYXkuZnJvbSh0YWdDaGVja2JveGVzKVxuICBsZXQgc2VsZWN0ZWRUYWdzID0gY2hlY2tib3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZDtcbiAgfSlcbiAgZmluZFRhZ2dlZFJlY2lwZXMoc2VsZWN0ZWRUYWdzKTtcbiAgcmVuZGVyU2hvd0FsbFJlY2lwZXNCYW5uZXIoKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhZ2dlZFJlY2lwZXMoc2VsZWN0ZWQpIHtcbiAgbGV0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICBzZWxlY3RlZC5mb3JFYWNoKHRhZyA9PiB7XG4gICAgbGV0IGFsbFJlY2lwZXMgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZy5pZCk7XG4gICAgfSk7XG4gICAgYWxsUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBpZiAoIWZpbHRlcmVkUmVzdWx0cy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHJlY2lwZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG4gIHNob3dBbGxSZWNpcGVzKCk7XG4gIGlmIChmaWx0ZXJlZFJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgIGZpbHRlclJlY2lwZXMoZmlsdGVyZWRSZXN1bHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJSZWNpcGVzKGZpbHRlcmVkKSB7XG4gIGxldCBmb3VuZFJlY2lwZXMgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiAhZmlsdGVyZWQuaW5jbHVkZXMocmVjaXBlKTtcbiAgfSk7XG4gIGhpZGVVbnNlbGVjdGVkUmVjaXBlcyhmb3VuZFJlY2lwZXMpXG59XG5cbmZ1bmN0aW9uIHJlY2lwZUNhcmRNYW5hZ2VtZW50KGV2ZW50KSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICBjYXNlIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjYXJkLWFwcGxlLWljb24nOlxuICAgIGFkZFJlY2lwZVRvRmF2b3JpdGVzKGV2ZW50KTtcbiAgICBicmVhaztcbiAgY2FzZSBpc0Rlc2NlbmRhbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtY2FyZCcpLCBldmVudC50YXJnZXQpOlxuICAgIG9wZW5SZWNpcGVJbmZvKGV2ZW50KTtcbiAgICBicmVhaztcbiAgY2FzZSBldmVudC50YXJnZXQuaWQgPT09ICdjbG9zZSc6XG4gICAgZXhpdFJlY2lwZSgpO1xuICAgIGJyZWFrXG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblJlY2lwZUluZm8oZXZlbnQpIHtcbiAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICBsZXQgcmVjaXBlSWQgPSBldmVudC5wYXRoLmZpbmQoZSA9PiBlLmlkKS5pZDtcbiAgbGV0IHJlY2lwZSA9IHJlY2lwZURhdGEuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBOdW1iZXIocmVjaXBlSWQpKTtcbiAgZ2VuZXJhdGVSZWNpcGVUaXRsZShyZWNpcGUsIGdlbmVyYXRlSW5ncmVkaWVudHMocmVjaXBlKSwgZXZlbnQpO1xuICBhZGRSZWNpcGVJbWFnZShyZWNpcGUpO1xuICBnZW5lcmF0ZUluc3RydWN0aW9ucyhyZWNpcGUpO1xuICByZWNpcGVJbmZvT3ZlcmxheShmdWxsUmVjaXBlSW5mbylcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgbGV0IGluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgbGV0IGluZ3JlZGllbnROYW1lcyA9IGluZ3JlZGllbnRzLm1hcChpbmcgPT4gaW5ncmVkaWVudERhdGEuZmlsdGVyKGkgPT4gaS5pZCA9PT0gaW5nLmlkKS5tYXAoaSA9PiBjYXBpdGFsaXplKGkubmFtZSkpLnRvU3RyaW5nKCkpO1xuICByZXR1cm4gaW5ncmVkaWVudHMubWFwKChpbmcsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGAke2luZ3JlZGllbnROYW1lc1tpbmRleF19ICgke2luZy5xdWFudGl0eS5hbW91bnR9ICR7aW5nLnF1YW50aXR5LnVuaXR9KWBcbiAgfSkuam9pbignLCAnKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoUmVjaXBlcyhldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcbiAgc2hvd0FsbFJlY2lwZXMoKTtcbiAgY29uc3QgbmFtZXMgPSByZWNpcGVSZXBvLmZpbHRlclJlY2lwZXNCeU5hbWUoc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gIGNvbnN0IGluZ3JlZGllbnRzID0gcmVjaXBlUmVwby5maWx0ZXJSZWNpcGVzQnlJbmdyZWRpZW50KHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgc2VhcmNoZWRSZWNpcGVzID0gWy4uLm5hbWVzLCAuLi5pbmdyZWRpZW50c11cbiAgZmlsdGVyTm9uU2VhcmNoZWQoc2VhcmNoZWRSZWNpcGVzKTtcbiAgcmVuZGVyU2hvd0FsbFJlY2lwZXNCYW5uZXIoKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTm9uU2VhcmNoZWQoZmlsdGVyZWQpIHtcbiAgbGV0IGZvdW5kID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICBsZXQgaWRzID0gZmlsdGVyZWQubWFwKGYgPT4gZi5pZCk7XG4gICAgcmV0dXJuICFpZHMuaW5jbHVkZXMocmVjaXBlLmlkKVxuICB9KVxuICBoaWRlVW5zZWxlY3RlZFJlY2lwZXMoZm91bmQpO1xufVxuXG5mdW5jdGlvbiBmaW5kUGFudHJ5SW5mbygpIHtcbiAgdXNlci5wYW50cnkuZm9yRWFjaChpdGVtID0+IHtcbiAgICBsZXQgaXRlbUluZm8gPSBpbmdyZWRpZW50RGF0YS5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnQuaWQgPT09IGl0ZW0uaW5ncmVkaWVudDtcbiAgICB9KTtcbiAgICBsZXQgb3JpZ2luYWxJbmdyZWRpZW50ID0gcGFudHJ5SW5mby5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKGl0ZW1JbmZvKSB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUgPT09IGl0ZW1JbmZvLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGl0ZW1JbmZvICYmIG9yaWdpbmFsSW5ncmVkaWVudCkge1xuICAgICAgb3JpZ2luYWxJbmdyZWRpZW50LmNvdW50ICs9IGl0ZW0uYW1vdW50O1xuICAgIH0gZWxzZSBpZiAoaXRlbUluZm8pIHtcbiAgICAgIHBhbnRyeUluZm8ucHVzaCh7XG4gICAgICAgIG5hbWU6IGl0ZW1JbmZvLm5hbWUsXG4gICAgICAgIGNvdW50OiBpdGVtLmFtb3VudFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgZGlzcGxheVBhbnRyeUluZm8ocGFudHJ5SW5mby5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGVja2VkUGFudHJ5Qm94ZXMoKSB7XG4gIGxldCBwYW50cnlDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbnRyeS1jaGVja2JveCcpO1xuICBsZXQgcGFudHJ5Q2hlY2tib3hJbmZvID0gQXJyYXkuZnJvbShwYW50cnlDaGVja2JveGVzKVxuICBsZXQgc2VsZWN0ZWRJbmdyZWRpZW50cyA9IHBhbnRyeUNoZWNrYm94SW5mby5maWx0ZXIoYm94ID0+IHtcbiAgICByZXR1cm4gYm94LmNoZWNrZWQ7XG4gIH0pXG4gIHNob3dBbGxSZWNpcGVzKCk7XG4gIGlmIChzZWxlY3RlZEluZ3JlZGllbnRzLmxlbmd0aCA+IDApIHtcbiAgICBmaW5kUmVjaXBlc1dpdGhDaGVja2VkSW5ncmVkaWVudHMoc2VsZWN0ZWRJbmdyZWRpZW50cyk7XG4gICAgcmVuZGVyU2hvd0FsbFJlY2lwZXNCYW5uZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kUmVjaXBlc1dpdGhDaGVja2VkSW5ncmVkaWVudHMoc2VsZWN0ZWQpIHtcbiAgbGV0IHJlY2lwZUNoZWNrZXIgPSAoYXJyLCB0YXJnZXQpID0+IHRhcmdldC5ldmVyeSh2ID0+IGFyci5pbmNsdWRlcyh2KSk7XG4gIGxldCBpbmdyZWRpZW50TGlzdCA9IHNlbGVjdGVkLm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfSlcbiAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgbGV0IGFsbFJlY2lwZUluZ3JlZGllbnRzID0gW107XG4gICAgcmVjaXBlLmluZ3JlZGllbnREYXRhLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBhbGxSZWNpcGVJbmdyZWRpZW50cy5wdXNoKGluZ3JlZGllbnQubmFtZSk7XG4gICAgfSk7XG4gICAgaWYgKCFyZWNpcGVDaGVja2VyKGFsbFJlY2lwZUluZ3JlZGllbnRzLCBpbmdyZWRpZW50TGlzdCkpIHtcbiAgICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgICBkb21SZWNpcGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIHVzZXIsXG4gIHJlY2lwZXMsXG4gIHJlY2lwZVJlcG8sXG4gIGNhcGl0YWxpemUsXG4gIGZ1bGxSZWNpcGVJbmZvLFxuICBidXR0b25zLFxufSIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgIHRoaXMucGFudHJ5ID0gdXNlci5wYW50cnk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgfVxuXG4gIHNhdmVSZWNpcGUocmVjaXBlKSB7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMucHVzaChyZWNpcGUpO1xuICB9XG5cbiAgcmVtb3ZlUmVjaXBlKHJlY2lwZSkge1xuICAgIGxldCBpID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIGRlY2lkZVRvQ29vayhyZWNpcGUpIHtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=