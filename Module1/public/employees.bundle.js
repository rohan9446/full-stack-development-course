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

/***/ "./src/EmployeeAdd.jsx"
/*!*****************************!*\
  !*** ./src/EmployeeAdd.jsx ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmployeeAdd)\n/* harmony export */ });\nclass EmployeeAdd extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", null, \"This is a placeholder for Employee Add.\");\n  }\n}\n\n//# sourceURL=webpack:///./src/EmployeeAdd.jsx?\n}");

/***/ },

/***/ "./src/EmployeeFilter.jsx"
/*!********************************!*\
  !*** ./src/EmployeeFilter.jsx ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmployeeFilter)\n/* harmony export */ });\nclass EmployeeFilter extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", null, \"This is a placeholder for the Issue Filter.\");\n  }\n}\n\n//# sourceURL=webpack:///./src/EmployeeFilter.jsx?\n}");

/***/ },

/***/ "./src/EmployeeList.jsx"
/*!******************************!*\
  !*** ./src/EmployeeList.jsx ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmployeeList)\n/* harmony export */ });\n/* harmony import */ var _EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeFilter.jsx */ \"./src/EmployeeFilter.jsx\");\n/* harmony import */ var _EmployeeAdd_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeAdd.jsx */ \"./src/EmployeeAdd.jsx\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-bootstrap/Button'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-bootstrap/Modal'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nfunction EmployeeRow(props) {\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, props.employee.name), /*#__PURE__*/React.createElement(\"td\", null, props.employee.role));\n}\nfunction EmployeeTable(props) {\n  const rows = props.employees.map((emp, index) => /*#__PURE__*/React.createElement(EmployeeRow, {\n    key: index,\n    employee: emp\n  }));\n  return /*#__PURE__*/React.createElement(\"table\", null, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Role\"))), /*#__PURE__*/React.createElement(\"tbody\", null, rows));\n}\nclass EmployeeList extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      employees: [{\n        name: \"John\",\n        role: \"Developer\"\n      }, {\n        name: \"Jane\",\n        role: \"Designer\"\n      }, {\n        name: \"Mike\",\n        role: \"Manager\"\n      }]\n    };\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"Employee List\"), /*#__PURE__*/React.createElement(_EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), /*#__PURE__*/React.createElement(EmployeeTable, {\n      employees: this.state.employees\n    }), /*#__PURE__*/React.createElement(_EmployeeAdd_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n  }\n}\n\n//# sourceURL=webpack:///./src/EmployeeList.jsx?\n}");

/***/ },

/***/ "./src/employees.jsx"
/*!***************************!*\
  !*** ./src/employees.jsx ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EmployeeList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeList.jsx */ \"./src/EmployeeList.jsx\");\n\nReactDOM.render(/*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(_EmployeeList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), document.getElementById('content'));\n\n//# sourceURL=webpack:///./src/employees.jsx?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/employees.jsx");
/******/ 	
/******/ })()
;