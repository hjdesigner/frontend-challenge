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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/view/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/view/scripts/GetAPI/fields.js":
/*!*******************************************!*\
  !*** ./src/view/scripts/GetAPI/fields.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar GetFields = function GetFields() {\n\treturn fetch('http://localhost:3000/fields').then(function (data) {\n\t\treturn data.json();\n\t});\n};\n\nexports.default = GetFields;\n\n//# sourceURL=webpack:///./src/view/scripts/GetAPI/fields.js?");

/***/ }),

/***/ "./src/view/scripts/app.js":
/*!*********************************!*\
  !*** ./src/view/scripts/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _fields = __webpack_require__(/*! ./GetAPI/fields */ \"./src/view/scripts/GetAPI/fields.js\");\n\nvar _fields2 = _interopRequireDefault(_fields);\n\nvar _FieldsSelect = __webpack_require__(/*! ./components/FieldsSelect */ \"./src/view/scripts/components/FieldsSelect.js\");\n\nvar _FieldsSelect2 = _interopRequireDefault(_FieldsSelect);\n\nvar _TextareaFields = __webpack_require__(/*! ./components/TextareaFields */ \"./src/view/scripts/components/TextareaFields.js\");\n\nvar _TextareaFields2 = _interopRequireDefault(_TextareaFields);\n\nvar _InputFields = __webpack_require__(/*! ./components/InputFields */ \"./src/view/scripts/components/InputFields.js\");\n\nvar _InputFields2 = _interopRequireDefault(_InputFields);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fields = (0, _fields2.default)();\nvar boxForm = document.querySelector('[data-js=\"form\"]');\n\n/* eslint indent: [2, 2] */\nfunction fieldType(data) {\n  data.forEach(function (item) {\n    switch (item.type) {\n      case 'enumerable':\n        (0, _FieldsSelect2.default)(item, boxForm);\n        break;\n      case 'big_text':\n        (0, _TextareaFields2.default)(item, boxForm);\n        break;\n      case 'cep':\n        (0, _InputFields2.default)(item, boxForm, 'tel');\n        break;\n      case 'small_text':\n        (0, _InputFields2.default)(item, boxForm, 'text');\n        break;\n      case 'email':\n        (0, _InputFields2.default)(item, boxForm, 'email');\n        break;\n      case 'phone':\n        (0, _InputFields2.default)(item, boxForm, 'tel');\n        break;\n      default:\n        console.log('not filds');\n    }\n  });\n}\n\nfields.then(function (data) {\n  data.forEach(function (item) {\n    fieldType(item._embedded.request_fields);\n    fieldType(item._embedded.user_fields);\n  });\n});\n\n//# sourceURL=webpack:///./src/view/scripts/app.js?");

/***/ }),

/***/ "./src/view/scripts/components/FieldsSelect.js":
/*!*****************************************************!*\
  !*** ./src/view/scripts/components/FieldsSelect.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = FieldsSelect;\nfunction FieldsSelect(data, element) {\n\tvar elementHTML = element;\n\tvar item = data;\n\tvar markup = '<div class=\"form__field\">\\n\\t\\t<label for=\"' + item.name + '\" class=\"form__label\">' + item.label + '</label>\\n\\t\\t<select id=\"' + item.name + '\" name=\"' + item.name + '\" class=\"form__input\" ' + (item.required === true ? 'required=\"required\"' : '') + '>\\n\\t\\t\\t<option value=\"\" hidden>' + item.mask + '</option>\\n\\t\\t\\t' + Object.keys(item.values).map(function (option) {\n\t\treturn '<option value=\"' + item.values[option] + '\">' + option + '</option>\\n';\n\t}).join('') + '\\n\\t\\t</select>\\n\\t</div>';\n\telementHTML.insertAdjacentHTML('beforeend', markup);\n}\n\n//# sourceURL=webpack:///./src/view/scripts/components/FieldsSelect.js?");

/***/ }),

/***/ "./src/view/scripts/components/InputFields.js":
/*!****************************************************!*\
  !*** ./src/view/scripts/components/InputFields.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = InputFields;\n\n/* eslint indent: [2, 2] */\nfunction InputFields(data, element, type) {\n  var elementHTML = element;\n  var item = data;\n  var inputType = type;\n  var markup = '<div class=\"form__field\">\\n    <label for=\"' + item.name + '\" class=\"form__label\">' + item.label + '</label>\\n    <input type=\"' + (inputType !== '' ? inputType : 'text') + '\" name=\"' + item.name + '\" id=\"' + item.name + '\" class=\"form__input form__input--' + item.type + '\" data-mask=\"' + item.type + '\" placeholder=\"' + item.placeholder + '\" ' + (item.required === true ? 'required=\"required\"' : '') + '>\\n  </div>';\n  elementHTML.insertAdjacentHTML('beforeend', markup);\n}\n\n//# sourceURL=webpack:///./src/view/scripts/components/InputFields.js?");

/***/ }),

/***/ "./src/view/scripts/components/TextareaFields.js":
/*!*******************************************************!*\
  !*** ./src/view/scripts/components/TextareaFields.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = TextareaFields;\n\n/* eslint indent: [2, 2] */\nfunction TextareaFields(data, element) {\n  var elementHTML = element;\n  var item = data;\n  var markup = '<div class=\"form__field\">\\n    <label for=\"' + item.name + '\" class=\"form__label\">' + item.label + '</label>\\n    <textarea class=\"form__field\" id=\"' + item.name + '\" name=\"' + item.name + '\" placeholder=\"' + item.placeholder + '\" ' + (item.required === true ? 'required=\"required\"' : '') + '></textarea>\\n  </div>';\n  elementHTML.insertAdjacentHTML('beforeend', markup);\n}\n\n//# sourceURL=webpack:///./src/view/scripts/components/TextareaFields.js?");

/***/ })

/******/ });