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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    color: white;\r\n}\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    width: 100vw;\r\n}\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 60%;\r\n    margin-top: 10px;\r\n    margin-left: -30%;\r\n    border-radius: 10px;\r\n    background-color: rgba(44, 44, 44, 0.5);\r\n}\r\nh1 {\r\n    font-size: 2rem;\r\n    margin-bottom: 10px;\r\n    color: white;\r\n}\r\n.location-form {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n#location-input {\r\n    font-size: 20px;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 400px;\r\n    height: 30px;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 8px 0 0 8px;\r\n    background-color: rgb(175, 175, 175);\r\n}\r\n.search-btn {\r\n    font-size: 24px;\r\n    color: white;\r\n    width: 100px;\r\n    height: 30px;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 0 8px 8px 0;\r\n    cursor: pointer;\r\n    background-color: grey;\r\n}\r\n.search-btn .fa-magnifying-glass {\r\n    font-size: 18px;\r\n}\r\nbutton:hover {\r\n    background-color: #616161;\r\n}\r\n.weather-container {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n.today-container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding-top: 30px;\r\n    width: 70%;\r\n}\r\n.today-container h2 {\r\n    font-size: 30px;\r\n    margin-bottom: 5px;\r\n}\r\n.today-container p {\r\n    font-size: 20px;\r\n}\r\n.today-container .wi {\r\n    font-size: 50px;\r\n    margin-top: 8px;\r\n}\r\n#current-temp {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    margin-top: 8px;\r\n}\r\n.current-cards-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    margin: 20px;\r\n}\r\n.card {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border-radius: 10px;\r\n    width: 250px;\r\n    height: 120px;\r\n    background-color: rgba(44, 44, 44, 0.5);\r\n}\r\n.card>* {\r\n    line-height: 35px;\r\n}\r\n.card .wi {\r\n    font-size: 30px;\r\n}\r\n.forecast-container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 30%;\r\n    padding: 10px 0;\r\n    margin: 10px;\r\n    margin-top: -88px;\r\n    border-radius: 10px;\r\n    background-color: rgba(44, 44, 44, 0.5);\r\n}\r\n.forecast-container h3 {\r\n    font-size: 26px;\r\n    margin-bottom: 10px;\r\n}\r\n.forecast-day {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: white;\r\n    min-width: 350px; \r\n    padding-top: 20px;\r\n    text-align: center;\r\n}\r\n.forecast-day h3 {\r\n    font-size: 13px;\r\n    color: white; \r\n}\r\n.forecast-day p {\r\n    font-size: 12px; \r\n}\r\n.forecast-day i {\r\n    font-size: 20px;\r\n    margin-top: 8px;\r\n    color:white; \r\n}\r\n.day-date {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 12px;\r\n    width: 120px;\r\n}\r\n.day-data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 200px;\r\n    padding-top: 10px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiData: () => (/* binding */ apiData),\n/* harmony export */   requiredData: () => (/* binding */ requiredData)\n/* harmony export */ });\nconst api_key = 'HDQ37NYBYDG5RPSCNVXVT36DR';\r\nlet units = 'metric';\r\n\r\nasync function apiData(location) {\r\n\r\n    const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${api_key}&contentType=json`;\r\n    \r\n    try {\r\n        const response = await fetch(apiURL);\r\n        if (!response.ok) throw new Error(`Error: ${response.statusText}`);\r\n        \r\n        const data = await response.json();\r\n        console.log(data); \r\n        return data;\r\n    } catch (error) {\r\n        console.log('Failed to fetch API data:', error);\r\n    }\r\n}\r\n\r\nfunction requiredData(data) {\r\n    const { address, currentConditions, days } = data;\r\n    \r\n    // Today's weather data\r\n    const todaysData = {\r\n        location: address,\r\n        time: new Date().toLocaleString('en-US', {\r\n            weekday: 'long', \r\n            month: 'long', \r\n            day: 'numeric', \r\n            hour12: true, \r\n            hour: '2-digit', \r\n            minute: '2-digit'\r\n        }),\r\n        clouds: currentConditions.cloudcover,\r\n        precipitation: currentConditions.precipprob,\r\n        humidity: currentConditions.humidity,\r\n        pressure: currentConditions.pressure,\r\n        uvIndex: currentConditions.uvindex,\r\n        temperature: currentConditions.temp,\r\n        conditions: currentConditions.conditions,\r\n        windSpeed: currentConditions.windspeed,\r\n    };\r\n\r\n    // Forecast weather data\r\n    const forecastData = days.slice(1, 7).map(day => ({\r\n        date: day.datetime,\r\n        tempMax: day.tempmax,\r\n        tempMin: day.tempmin,\r\n        conditions: day.conditions\r\n    }));\r\n    \r\n    todaysData.forecastData = forecastData;\r\n    console.log(todaysData); \r\n    return todaysData;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherIcon: () => (/* binding */ weatherIcon)\n/* harmony export */ });\nfunction weatherIcon(conditions) {\r\n\r\n    const conditionMap = {\r\n        'Clear': 'wi-day-sunny',\r\n        'Partially cloudy': 'wi-day-cloudy',\r\n        'Cloudy': 'wi-cloudy',\r\n        'Overcast': 'wi-cloud',\r\n        'Rain': 'wi-showers',\r\n        'Thunderstorm': 'wi-thunderstorm',\r\n        'Snow': 'wi-snow',\r\n        'Fog': 'wi-fog',\r\n        'Wind': 'wi-strong-wind',\r\n        'Rain, Partially cloudy': 'wi-day-showers',\r\n        'Rain, Overcast': 'wi-rain'\r\n    };\r\n\r\n    return conditionMap[conditions] || 'wi-na'; \r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/icons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ \"./src/icons.js\");\n/* harmony import */ var _img_clear_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/clear.jpg */ \"./img/clear.jpg\");\n/* harmony import */ var _img_cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/cloudy.jpg */ \"./img/cloudy.jpg\");\n/* harmony import */ var _img_fog_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/fog.jpg */ \"./img/fog.jpg\");\n/* harmony import */ var _img_overcast_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/overcast.jpg */ \"./img/overcast.jpg\");\n/* harmony import */ var _img_partly_cloudy_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/partly-cloudy.jpg */ \"./img/partly-cloudy.jpg\");\n/* harmony import */ var _img_rain_overcast_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/rain-overcast.jpg */ \"./img/rain-overcast.jpg\");\n/* harmony import */ var _img_showers_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/showers.jpg */ \"./img/showers.jpg\");\n/* harmony import */ var _img_snow_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/snow.jpg */ \"./img/snow.jpg\");\n/* harmony import */ var _img_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/thunderstorm.jpg */ \"./img/thunderstorm.jpg\");\n/* harmony import */ var _img_wind_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/wind.jpg */ \"./img/wind.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.getElementById('location-form').addEventListener('submit', async function(e) {\r\n    e.preventDefault();\r\n    \r\n    const location = document.getElementById('location-input').value;\r\n    const weatherData = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.apiData)(location);\r\n    const todaysData = (0,_api__WEBPACK_IMPORTED_MODULE_1__.requiredData)(weatherData);\r\n    \r\n    displayWeather(todaysData);\r\n});\r\n\r\nfunction displayWeather(data) {\r\n    const weatherContainer = document.querySelector('#weather-container');\r\n    const iconClass = (0,_icons__WEBPACK_IMPORTED_MODULE_2__.weatherIcon)(data.conditions);\r\n    changeBackgroundImage(data.conditions);\r\n    \r\n    const currentWeatherHtml = `\r\n        <h2>Today's Weather ${data.location}</h2>\r\n        <p>Time: ${data.time}</p>\r\n        <i class=\"wi ${iconClass}\"></i>\r\n        <p id=\"current-temp\">${data.temperature}&degC</p>\r\n        <p class=\"cond\">${data.conditions}</p>\r\n        <div class=\"current-cards-container\">\r\n            <card class=\"card\">\r\n                <h4>Clouds</h4>\r\n                <i class=\"wi wi-cloud\"></i>\r\n                <p>${data.clouds}%</p>\r\n            </card>\r\n            <card class=\"card\">\r\n                <h4>Precipitation</h4>\r\n                <i class=\"wi wi-day-rain\"></i>\r\n                <p>${data.precipitation}%</p>\r\n            </card>\r\n            <card class=\"card\">\r\n                <h4>Wind Speed</h4>\r\n                <i class=\"wi wi-strong-wind\"></i>\r\n                <p>${data.windSpeed}km/h</p>\r\n            </card>\r\n            <card class=\"card\">\r\n                <h4>Humidity</h4>\r\n                <i class=\"wi wi-humidity\"></i>\r\n                <p>${data.humidity}%</p>\r\n            </card>\r\n            <card class=\"card\">\r\n                <h4>Pressure</h4>\r\n                <i class=\"wi wi-barometer\"></i>\r\n                <p>${data.pressure}mb</p>\r\n            </card>\r\n            <card class=\"card\">\r\n                <h4>UV Index</h4>\r\n                <i class=\"wi wi-hot\"></i>\r\n                <p>${data.uvIndex}</p>\r\n            </card>\r\n        </div>\r\n    `;\r\n    \r\n    const forecastWeatherHtml = data.forecastData.map(day => {\r\n        const date = new Date(day.date);\r\n        const weekdayName = date.toLocaleDateString('en-US', { weekday: 'long' });\r\n        const iconClass = (0,_icons__WEBPACK_IMPORTED_MODULE_2__.weatherIcon)(day.conditions);\r\n        \r\n        return `\r\n            <div \r\n                class=\"forecast-day\" \r\n                data-max-celsius=\"${day.tempMax}\" \r\n                data-min-celsius=\"${day.tempMin}\" \r\n            >\r\n                <div class=\"day-date\">\r\n                    <h3>${weekdayName}</h3>\r\n                    <p>${date.toLocaleDateString('en-US')}</p>\r\n                    <i class=\"wi ${iconClass}\"></i>\r\n                </div>\r\n                <div class=\"day-data\">\r\n                    <p>High: ${day.tempMax}&degC</p>\r\n                    <p>Low: ${day.tempMin}&degC</p>\r\n                    <p>${day.conditions}</p>\r\n                </div>\r\n            </div>\r\n        `;\r\n    }).join('');\r\n    \r\n    weatherContainer.innerHTML = `\r\n    <section class=\"today-container\">\r\n        ${currentWeatherHtml}\r\n    </section> \r\n    <section class=\"forecast-container\">\r\n        <h3>Forecast</h3>\r\n        ${forecastWeatherHtml}\r\n    </section>\r\n    `\r\n}\r\n\r\nfunction changeBackgroundImage(conditions) {\r\n    \r\n    const backgroundImage = {\r\n        'Clear': _img_clear_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n        'Cloudy': _img_cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n        'Fog': _img_fog_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n        'Overcast': _img_overcast_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n        'Partially cloudy': _img_partly_cloudy_jpg__WEBPACK_IMPORTED_MODULE_7__,\r\n        'Rain, Overcast': _img_rain_overcast_jpg__WEBPACK_IMPORTED_MODULE_8__,\r\n        'Rain, Partially cloudy': _img_showers_jpg__WEBPACK_IMPORTED_MODULE_9__,\r\n        'Snow': _img_snow_jpg__WEBPACK_IMPORTED_MODULE_10__,\r\n        'Thunderstorm': _img_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_11__,\r\n        'Wind': _img_wind_jpg__WEBPACK_IMPORTED_MODULE_12__\r\n    };\r\n    \r\n    const defaultImg = _img_clear_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n    const background = backgroundImage[conditions] || defaultImg;\r\n    document.body.style.backgroundImage = `url(${background})`;\r\n}\r\nchangeBackgroundImage();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./img/clear.jpg":
/*!***********************!*\
  !*** ./img/clear.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/c970ce02ba4e4db9e70f.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/clear.jpg?");

/***/ }),

/***/ "./img/cloudy.jpg":
/*!************************!*\
  !*** ./img/cloudy.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/84b5e34e2b75687634b0.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/cloudy.jpg?");

/***/ }),

/***/ "./img/fog.jpg":
/*!*********************!*\
  !*** ./img/fog.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/c719ddcac5292911dacb.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/fog.jpg?");

/***/ }),

/***/ "./img/overcast.jpg":
/*!**************************!*\
  !*** ./img/overcast.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/413f19bcb08c4d2be3f1.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/overcast.jpg?");

/***/ }),

/***/ "./img/partly-cloudy.jpg":
/*!*******************************!*\
  !*** ./img/partly-cloudy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/8fff3163057713731e00.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/partly-cloudy.jpg?");

/***/ }),

/***/ "./img/rain-overcast.jpg":
/*!*******************************!*\
  !*** ./img/rain-overcast.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/fe84600364d47ce0a732.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/rain-overcast.jpg?");

/***/ }),

/***/ "./img/showers.jpg":
/*!*************************!*\
  !*** ./img/showers.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/5ec7c0d6c5f1b6756e15.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/showers.jpg?");

/***/ }),

/***/ "./img/snow.jpg":
/*!**********************!*\
  !*** ./img/snow.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/a6c913c4dbb0868e33b0.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/snow.jpg?");

/***/ }),

/***/ "./img/thunderstorm.jpg":
/*!******************************!*\
  !*** ./img/thunderstorm.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/7ec5b2331d0f21d4c34c.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/thunderstorm.jpg?");

/***/ }),

/***/ "./img/wind.jpg":
/*!**********************!*\
  !*** ./img/wind.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/2396382f6f2745bd9fc6.jpg\";\n\n//# sourceURL=webpack://weather-app/./img/wind.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;