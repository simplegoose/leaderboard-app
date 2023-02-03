/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Preahvihear&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: #6274fd;\n  --white: #fff;\n  --accent: #6274fd;\n  --light: #f7f7f9;\n  --tb-wrip: #a7aefe;\n  --tb-wrip-color: #423f3e;\n  --btn-focus: #3a6ef2;\n  --danger: #ff776a;\n\n  background-color: var(--bg-color);\n}\n\n*,\n::after,\n::before {\n  font-family: 'Preahvihear', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--white);\n}\n\n.header {\n  padding: 1.5rem;\n  font-size: 1.5rem;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.no-wrap {\n  flex-wrap: nowrap;\n}\n\n.basis-100 {\n  flex-basis: 100%;\n}\n\nmain {\n  margin: 3rem auto;\n  width: 80%;\n  gap: 5%;\n}\n\n.table,\n.form {\n  width: 45%;\n}\n\n.header-wrapper {\n  align-items: start;\n}\n\n.table {\n  align-items: flex-start;\n}\n\n.table-header {\n  flex-basis: 70%;\n}\n\n.refresh {\n  margin-left: auto;\n}\n\n.btn {\n  padding: 0.5rem 0.7rem;\n  font-size: 1rem;\n  border: 1px solid var(--white);\n  background-color: var(--accent);\n  font-weight: 600;\n  border-radius: 8px;\n}\n\n.btn:focus {\n  background-color: var(--btn-focus);\n}\n\n.table-list {\n  flex-basis: 100%;\n  list-style: none;\n  margin-top: 1rem;\n  border-radius: 3px;\n  width: 100%;\n}\n\n.table-list th,\n.table-list td {\n  padding: 0.5rem;\n  border-bottom: 2px solid var(--light);\n  border-right: 2px solid var(--light);\n}\n\n.table-list tr td:nth-child(1),\n.table-list tr td:nth-child(3) {\n  text-align: center;\n}\n\n.table-list th:nth-child(1) {\n  width: 15%;\n}\n\n.table-list th:nth-child(2) {\n  width: 60%;\n  text-align: start;\n}\n\n.table-list th:nth-child(3) {\n  width: 25%;\n  text-align: start;\n}\n\n.table-list tr:nth-child(2n) {\n  background-color: var(--tb-wrip);\n}\n\n.table-list tr:nth-child(2n) td {\n  color: var(--tb-wrip-color);\n}\n\n.table-header,\n.form-header {\n  font-size: 2rem;\n}\n\n.form {\n  max-width: 250px;\n}\n\nform {\n  margin-top: 1rem;\n  justify-content: end;\n  gap: 1.5rem;\n}\n\n.form-input {\n  width: 100%;\n}\n\ninput[type=\"text\"] {\n  border: 2px solid var(--white);\n  padding: 1rem;\n  border-radius: 8px;\n  background-color: inherit;\n  outline: none;\n  font-size: 1rem;\n  display: block;\n  margin-bottom: 0.25rem;\n  width: 100%;\n}\n\ninput[type=\"text\"]::placeholder {\n  color: var(--light);\n}\n\nsmall {\n  color: var(--danger);\n  display: none;\n}\n\n.input-invalid {\n  border: 1px solid var(--danger);\n}\n\n.input-invalid ~ small {\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  main {\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n  }\n\n  .table,\n  .form {\n    width: 80%;\n  }\n\n  .form {\n    max-width: 350px;\n  }\n\n  .header-wrapper {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: start;\n  }\n\n  .refresh {\n    margin: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;;EAEjB,iCAAiC;AACnC;;AAEA;;;EAGE,kKAAkK;EAClK,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,OAAO;AACT;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,8BAA8B;EAC9B,+BAA+B;EAC/B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,eAAe;EACf,qCAAqC;EACrC,oCAAoC;AACtC;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,sBAAsB;IACtB,SAAS;IACT,mBAAmB;EACrB;;EAEA;;IAEE,UAAU;EACZ;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,sBAAsB;IACtB,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,SAAS;EACX;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Preahvihear&display=swap');\n\n:root {\n  --bg-color: #6274fd;\n  --white: #fff;\n  --accent: #6274fd;\n  --light: #f7f7f9;\n  --tb-wrip: #a7aefe;\n  --tb-wrip-color: #423f3e;\n  --btn-focus: #3a6ef2;\n  --danger: #ff776a;\n\n  background-color: var(--bg-color);\n}\n\n*,\n::after,\n::before {\n  font-family: 'Preahvihear', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--white);\n}\n\n.header {\n  padding: 1.5rem;\n  font-size: 1.5rem;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.no-wrap {\n  flex-wrap: nowrap;\n}\n\n.basis-100 {\n  flex-basis: 100%;\n}\n\nmain {\n  margin: 3rem auto;\n  width: 80%;\n  gap: 5%;\n}\n\n.table,\n.form {\n  width: 45%;\n}\n\n.header-wrapper {\n  align-items: start;\n}\n\n.table {\n  align-items: flex-start;\n}\n\n.table-header {\n  flex-basis: 70%;\n}\n\n.refresh {\n  margin-left: auto;\n}\n\n.btn {\n  padding: 0.5rem 0.7rem;\n  font-size: 1rem;\n  border: 1px solid var(--white);\n  background-color: var(--accent);\n  font-weight: 600;\n  border-radius: 8px;\n}\n\n.btn:focus {\n  background-color: var(--btn-focus);\n}\n\n.table-list {\n  flex-basis: 100%;\n  list-style: none;\n  margin-top: 1rem;\n  border-radius: 3px;\n  width: 100%;\n}\n\n.table-list th,\n.table-list td {\n  padding: 0.5rem;\n  border-bottom: 2px solid var(--light);\n  border-right: 2px solid var(--light);\n}\n\n.table-list tr td:nth-child(1),\n.table-list tr td:nth-child(3) {\n  text-align: center;\n}\n\n.table-list th:nth-child(1) {\n  width: 15%;\n}\n\n.table-list th:nth-child(2) {\n  width: 60%;\n  text-align: start;\n}\n\n.table-list th:nth-child(3) {\n  width: 25%;\n  text-align: start;\n}\n\n.table-list tr:nth-child(2n) {\n  background-color: var(--tb-wrip);\n}\n\n.table-list tr:nth-child(2n) td {\n  color: var(--tb-wrip-color);\n}\n\n.table-header,\n.form-header {\n  font-size: 2rem;\n}\n\n.form {\n  max-width: 250px;\n}\n\nform {\n  margin-top: 1rem;\n  justify-content: end;\n  gap: 1.5rem;\n}\n\n.form-input {\n  width: 100%;\n}\n\ninput[type=\"text\"] {\n  border: 2px solid var(--white);\n  padding: 1rem;\n  border-radius: 8px;\n  background-color: inherit;\n  outline: none;\n  font-size: 1rem;\n  display: block;\n  margin-bottom: 0.25rem;\n  width: 100%;\n}\n\ninput[type=\"text\"]::placeholder {\n  color: var(--light);\n}\n\nsmall {\n  color: var(--danger);\n  display: none;\n}\n\n.input-invalid {\n  border: 1px solid var(--danger);\n}\n\n.input-invalid ~ small {\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  main {\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n  }\n\n  .table,\n  .form {\n    width: 80%;\n  }\n\n  .form {\n    max-width: 350px;\n  }\n\n  .header-wrapper {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: start;\n  }\n\n  .refresh {\n    margin: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
  } // For old IE

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

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createScore": () => (/* binding */ createScore),
/* harmony export */   "getScores": () => (/* binding */ getScores)
/* harmony export */ });
const createScore = async ({ user, score }) => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VMtXKJ13vD2AuGu5jYsU/scores';

  const res = await fetch(requestURL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ user, score }),
  });
  const data = await res.json();

  return { status: res.status, data };
};

const getScores = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VMtXKJ13vD2AuGu5jYsU/scores');

  const res = await fetch(request);
  const data = await res.json();

  return { status: res.status, data };
};

/***/ }),

/***/ "./src/js/eventListeners.js":
/*!**********************************!*\
  !*** ./src/js/eventListeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventListeners": () => (/* binding */ addEventListeners),
/* harmony export */   "formSubmit": () => (/* binding */ formSubmit),
/* harmony export */   "refreshBtnListener": () => (/* binding */ refreshBtnListener)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/js/api.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/js/render.js");



const formSubmit = async (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector('.submit');
  submitBtn.setAttribute('disabled', true);

  const user = e.target.name.value;
  const score = e.target.score.value;

  if (!user) {
    submitBtn.removeAttribute('disabled');
    return e.target.name.classList.add('input-invalid');
  }

  if (!score) {
    submitBtn.removeAttribute('disabled');
    return e.target.score.classList.add('input-invalid');
  }

  const { status, data } = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.createScore)({ user, score });

  if (status === 200 || status === 201) {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.addListItem)({ user, score });
    submitBtn.removeAttribute('disabled');
    e.target.reset();
  }

  return data;
};

const refreshBtnListener = async (e) => {
  e.target.blur();
  e.target.setAttribute('disabled', true);

  const { status, data } = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getScores)();

  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(data.result);

  if (status === 200 || status === 201) {
    e.target.removeAttribute('disabled');
  }
};

const inputListener = (e) => {
  if (e.target.value && e.target.classList.contains('input-invalid')) {
    e.target.classList.remove('input-invalid');
  }
};

const addEventListeners = () => {
  const form = document.querySelector('form');
  const btnRefresh = document.querySelector('.btn.refresh');
  const inputName = document.querySelector('#name');
  const inputScore = document.querySelector('#score');

  inputName.addEventListener('change', inputListener);
  inputScore.addEventListener('change', inputListener);

  btnRefresh.addEventListener('click', refreshBtnListener);

  form.addEventListener('submit', formSubmit);

  window.addEventListener('load', async () => {
    const { data } = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getScores)();

    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(data.result);
  });
};

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListItem": () => (/* binding */ addListItem),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
const render = (data = []) => {
  const tableList = document.querySelector('#table-list');
  const tbody = tableList.querySelector('tbody');

  let html = '';

  data.forEach((score, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${score.user}</td>
        <td>${score.score}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
};

const addListItem = ({ user, score }) => {
  const tableList = document.querySelector('#table-list tbody');
  const tableRows = tableList.querySelectorAll('tr');

  const listItem = document.createElement('tr');

  listItem.innerHTML = `
    <td>${tableRows.length + 1}</td>
    <td>${user}</td>
    <td>${score}</td>
  `;

  tableList.appendChild(listItem);
};

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/eventListeners.js */ "./src/js/eventListeners.js");



(0,_js_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__.addEventListeners)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5SEFBeUg7QUFDekg7QUFDQSxpREFBaUQsd0JBQXdCLGtCQUFrQixzQkFBc0IscUJBQXFCLHVCQUF1Qiw2QkFBNkIseUJBQXlCLHNCQUFzQix3Q0FBd0MsR0FBRyw0QkFBNEIsdUtBQXVLLDJCQUEyQixjQUFjLGVBQWUsd0JBQXdCLEdBQUcsYUFBYSxvQkFBb0Isc0JBQXNCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxXQUFXLG9CQUFvQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLFVBQVUsc0JBQXNCLGVBQWUsWUFBWSxHQUFHLG9CQUFvQixlQUFlLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsVUFBVSwyQkFBMkIsb0JBQW9CLG1DQUFtQyxvQ0FBb0MscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQix1Q0FBdUMsR0FBRyxpQkFBaUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLGdCQUFnQixHQUFHLHFDQUFxQyxvQkFBb0IsMENBQTBDLHlDQUF5QyxHQUFHLHFFQUFxRSx1QkFBdUIsR0FBRyxpQ0FBaUMsZUFBZSxHQUFHLGlDQUFpQyxlQUFlLHNCQUFzQixHQUFHLGlDQUFpQyxlQUFlLHNCQUFzQixHQUFHLGtDQUFrQyxxQ0FBcUMsR0FBRyxxQ0FBcUMsZ0NBQWdDLEdBQUcsa0NBQWtDLG9CQUFvQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsVUFBVSxxQkFBcUIseUJBQXlCLGdCQUFnQixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRywwQkFBMEIsbUNBQW1DLGtCQUFrQix1QkFBdUIsOEJBQThCLGtCQUFrQixvQkFBb0IsbUJBQW1CLDJCQUEyQixnQkFBZ0IsR0FBRyx1Q0FBdUMsd0JBQXdCLEdBQUcsV0FBVyx5QkFBeUIsa0JBQWtCLEdBQUcsb0JBQW9CLG9DQUFvQyxHQUFHLDRCQUE0QixtQkFBbUIsR0FBRywwQ0FBMEMsVUFBVSw2QkFBNkIsZ0JBQWdCLDBCQUEwQixLQUFLLHdCQUF3QixpQkFBaUIsS0FBSyxhQUFhLHVCQUF1QixLQUFLLHVCQUF1Qiw2QkFBNkIsa0JBQWtCLHlCQUF5QixLQUFLLGdCQUFnQixnQkFBZ0IsS0FBSyxHQUFHLFNBQVMsb0ZBQW9GLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssMEdBQTBHLFdBQVcsd0JBQXdCLGtCQUFrQixzQkFBc0IscUJBQXFCLHVCQUF1Qiw2QkFBNkIseUJBQXlCLHNCQUFzQix3Q0FBd0MsR0FBRyw0QkFBNEIsdUtBQXVLLDJCQUEyQixjQUFjLGVBQWUsd0JBQXdCLEdBQUcsYUFBYSxvQkFBb0Isc0JBQXNCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxXQUFXLG9CQUFvQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLFVBQVUsc0JBQXNCLGVBQWUsWUFBWSxHQUFHLG9CQUFvQixlQUFlLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsVUFBVSwyQkFBMkIsb0JBQW9CLG1DQUFtQyxvQ0FBb0MscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQix1Q0FBdUMsR0FBRyxpQkFBaUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLGdCQUFnQixHQUFHLHFDQUFxQyxvQkFBb0IsMENBQTBDLHlDQUF5QyxHQUFHLHFFQUFxRSx1QkFBdUIsR0FBRyxpQ0FBaUMsZUFBZSxHQUFHLGlDQUFpQyxlQUFlLHNCQUFzQixHQUFHLGlDQUFpQyxlQUFlLHNCQUFzQixHQUFHLGtDQUFrQyxxQ0FBcUMsR0FBRyxxQ0FBcUMsZ0NBQWdDLEdBQUcsa0NBQWtDLG9CQUFvQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsVUFBVSxxQkFBcUIseUJBQXlCLGdCQUFnQixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRywwQkFBMEIsbUNBQW1DLGtCQUFrQix1QkFBdUIsOEJBQThCLGtCQUFrQixvQkFBb0IsbUJBQW1CLDJCQUEyQixnQkFBZ0IsR0FBRyx1Q0FBdUMsd0JBQXdCLEdBQUcsV0FBVyx5QkFBeUIsa0JBQWtCLEdBQUcsb0JBQW9CLG9DQUFvQyxHQUFHLDRCQUE0QixtQkFBbUIsR0FBRywwQ0FBMEMsVUFBVSw2QkFBNkIsZ0JBQWdCLDBCQUEwQixLQUFLLHdCQUF3QixpQkFBaUIsS0FBSyxhQUFhLHVCQUF1QixLQUFLLHVCQUF1Qiw2QkFBNkIsa0JBQWtCLHlCQUF5QixLQUFLLGdCQUFnQixnQkFBZ0IsS0FBSyxHQUFHLHFCQUFxQjtBQUM1Mk87QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmTyw2QkFBNkIsYUFBYTtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsR0FBRztBQUNIOztBQUVBLFdBQVc7QUFDWDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmtEO0FBQ0E7O0FBRTNDO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxlQUFlLFFBQVEsb0RBQVcsR0FBRyxhQUFhOztBQUU1RDtBQUNBLElBQUksdURBQVcsR0FBRyxhQUFhO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQSxVQUFVLGVBQWUsUUFBUSxrREFBUzs7QUFFMUMsRUFBRSxrREFBTTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVksT0FBTyxRQUFRLGtEQUFTOztBQUVwQyxJQUFJLGtEQUFNO0FBQ1YsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNyRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjLFdBQVc7QUFDekIsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRU8sdUJBQXVCLGFBQWE7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVUscUJBQXFCO0FBQy9CLFVBQVUsS0FBSztBQUNmLFVBQVUsTUFBTTtBQUNoQjs7QUFFQTtBQUNBOzs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDa0M7O0FBRTNELHdFQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vc3JjL2pzL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9zcmMvanMvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vc3JjL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVhaHZpaGVhciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjNjI3NGZkO1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tYWNjZW50OiAjNjI3NGZkO1xcbiAgLS1saWdodDogI2Y3ZjdmOTtcXG4gIC0tdGItd3JpcDogI2E3YWVmZTtcXG4gIC0tdGItd3JpcC1jb2xvcjogIzQyM2YzZTtcXG4gIC0tYnRuLWZvY3VzOiAjM2E2ZWYyO1xcbiAgLS1kYW5nZXI6ICNmZjc3NmE7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogJ1ByZWFodmloZWFyJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLndyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubm8td3JhcCB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmJhc2lzLTEwMCB7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGdhcDogNSU7XFxufVxcblxcbi50YWJsZSxcXG4uZm9ybSB7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4udGFibGUge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YWJsZS1oZWFkZXIge1xcbiAgZmxleC1iYXNpczogNzAlO1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5idG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWZvY3VzKTtcXG59XFxuXFxuLnRhYmxlLWxpc3Qge1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YWJsZS1saXN0IHRoLFxcbi50YWJsZS1saXN0IHRkIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saWdodCk7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1saWdodCk7XFxufVxcblxcbi50YWJsZS1saXN0IHRyIHRkOm50aC1jaGlsZCgxKSxcXG4udGFibGUtbGlzdCB0ciB0ZDpudGgtY2hpbGQoMykge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFibGUtbGlzdCB0aDpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDE1JTtcXG59XFxuXFxuLnRhYmxlLWxpc3QgdGg6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiA2MCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRhYmxlLWxpc3QgdGg6bnRoLWNoaWxkKDMpIHtcXG4gIHdpZHRoOiAyNSU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRhYmxlLWxpc3QgdHI6bnRoLWNoaWxkKDJuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Yi13cmlwKTtcXG59XFxuXFxuLnRhYmxlLWxpc3QgdHI6bnRoLWNoaWxkKDJuKSB0ZCB7XFxuICBjb2xvcjogdmFyKC0tdGItd3JpcC1jb2xvcik7XFxufVxcblxcbi50YWJsZS1oZWFkZXIsXFxuLmZvcm0taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1pbnZhbGlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhbmdlcik7XFxufVxcblxcbi5pbnB1dC1pbnZhbGlkIH4gc21hbGwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBtYWluIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRhYmxlLFxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmZvcm0ge1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgfVxcblxcbiAgLmhlYWRlci13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5yZWZyZXNoIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpQkFBaUI7O0VBRWpCLGlDQUFpQztBQUNuQzs7QUFFQTs7O0VBR0Usa0tBQWtLO0VBQ2xLLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZWFodmloZWFyJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6ICM2Mjc0ZmQ7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1hY2NlbnQ6ICM2Mjc0ZmQ7XFxuICAtLWxpZ2h0OiAjZjdmN2Y5O1xcbiAgLS10Yi13cmlwOiAjYTdhZWZlO1xcbiAgLS10Yi13cmlwLWNvbG9yOiAjNDIzZjNlO1xcbiAgLS1idG4tZm9jdXM6ICMzYTZlZjI7XFxuICAtLWRhbmdlcjogI2ZmNzc2YTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuKixcXG46OmFmdGVyLFxcbjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUHJlYWh2aWhlYXInLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ud3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5uby13cmFwIHtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5cXG4uYmFzaXMtMTAwIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgZ2FwOiA1JTtcXG59XFxuXFxuLnRhYmxlLFxcbi5mb3JtIHtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi50YWJsZSB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRhYmxlLWhlYWRlciB7XFxuICBmbGV4LWJhc2lzOiA3MCU7XFxufVxcblxcbi5yZWZyZXNoIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmJ0bjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tZm9jdXMpO1xcbn1cXG5cXG4udGFibGUtbGlzdCB7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhYmxlLWxpc3QgdGgsXFxuLnRhYmxlLWxpc3QgdGQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0KTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuLnRhYmxlLWxpc3QgdHIgdGQ6bnRoLWNoaWxkKDEpLFxcbi50YWJsZS1saXN0IHRyIHRkOm50aC1jaGlsZCgzKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YWJsZS1saXN0IHRoOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogMTUlO1xcbn1cXG5cXG4udGFibGUtbGlzdCB0aDpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDYwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4udGFibGUtbGlzdCB0aDpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDI1JTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4udGFibGUtbGlzdCB0cjpudGgtY2hpbGQoMm4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRiLXdyaXApO1xcbn1cXG5cXG4udGFibGUtbGlzdCB0cjpudGgtY2hpbGQoMm4pIHRkIHtcXG4gIGNvbG9yOiB2YXIoLS10Yi13cmlwLWNvbG9yKTtcXG59XFxuXFxuLnRhYmxlLWhlYWRlcixcXG4uZm9ybS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbnNtYWxsIHtcXG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlucHV0LWludmFsaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFuZ2VyKTtcXG59XFxuXFxuLmlucHV0LWludmFsaWQgfiBzbWFsbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIG1haW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAudGFibGUsXFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuZm9ybSB7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICB9XFxuXFxuICAuaGVhZGVyLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgfVxcblxcbiAgLnJlZnJlc2gge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjcmVhdGVTY29yZSA9IGFzeW5jICh7IHVzZXIsIHNjb3JlIH0pID0+IHtcbiAgY29uc3QgcmVxdWVzdFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9WTXRYS0oxM3ZEMkF1R3U1allzVS9zY29yZXMnO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJlcXVlc3RVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXIsIHNjb3JlIH0pLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHsgc3RhdHVzOiByZXMuc3RhdHVzLCBkYXRhIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL1ZNdFhLSjEzdkQyQXVHdTVqWXNVL3Njb3JlcycpO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4geyBzdGF0dXM6IHJlcy5zdGF0dXMsIGRhdGEgfTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlU2NvcmUsIGdldFNjb3JlcyB9IGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCB7IGFkZExpc3RJdGVtLCByZW5kZXIgfSBmcm9tICcuL3JlbmRlci5qcyc7XG5cbmV4cG9ydCBjb25zdCBmb3JtU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgY29uc3QgdXNlciA9IGUudGFyZ2V0Lm5hbWUudmFsdWU7XG4gIGNvbnN0IHNjb3JlID0gZS50YXJnZXQuc2NvcmUudmFsdWU7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgc3VibWl0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gZS50YXJnZXQubmFtZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1pbnZhbGlkJyk7XG4gIH1cblxuICBpZiAoIXNjb3JlKSB7XG4gICAgc3VibWl0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gZS50YXJnZXQuc2NvcmUuY2xhc3NMaXN0LmFkZCgnaW5wdXQtaW52YWxpZCcpO1xuICB9XG5cbiAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGF3YWl0IGNyZWF0ZVNjb3JlKHsgdXNlciwgc2NvcmUgfSk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gMjAwIHx8IHN0YXR1cyA9PT0gMjAxKSB7XG4gICAgYWRkTGlzdEl0ZW0oeyB1c2VyLCBzY29yZSB9KTtcbiAgICBzdWJtaXRCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoQnRuTGlzdGVuZXIgPSBhc3luYyAoZSkgPT4ge1xuICBlLnRhcmdldC5ibHVyKCk7XG4gIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgZ2V0U2NvcmVzKCk7XG5cbiAgcmVuZGVyKGRhdGEucmVzdWx0KTtcblxuICBpZiAoc3RhdHVzID09PSAyMDAgfHwgc3RhdHVzID09PSAyMDEpIHtcbiAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cbn07XG5cbmNvbnN0IGlucHV0TGlzdGVuZXIgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQudmFsdWUgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1pbnZhbGlkJykpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1pbnZhbGlkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgYnRuUmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4ucmVmcmVzaCcpO1xuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICBjb25zdCBpbnB1dFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGlucHV0TGlzdGVuZXIpO1xuICBpbnB1dFNjb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGlucHV0TGlzdGVuZXIpO1xuXG4gIGJ0blJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoQnRuTGlzdGVuZXIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZm9ybVN1Ym1pdCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBnZXRTY29yZXMoKTtcblxuICAgIHJlbmRlcihkYXRhLnJlc3VsdCk7XG4gIH0pO1xufTsiLCJleHBvcnQgY29uc3QgcmVuZGVyID0gKGRhdGEgPSBbXSkgPT4ge1xuICBjb25zdCB0YWJsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUtbGlzdCcpO1xuICBjb25zdCB0Ym9keSA9IHRhYmxlTGlzdC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuXG4gIGxldCBodG1sID0gJyc7XG5cbiAgZGF0YS5mb3JFYWNoKChzY29yZSwgaW5kZXgpID0+IHtcbiAgICBodG1sICs9IGBcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPiR7aW5kZXggKyAxfTwvdGQ+XG4gICAgICAgIDx0ZD4ke3Njb3JlLnVzZXJ9PC90ZD5cbiAgICAgICAgPHRkPiR7c2NvcmUuc2NvcmV9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgYDtcbiAgfSk7XG5cbiAgdGJvZHkuaW5uZXJIVE1MID0gaHRtbDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMaXN0SXRlbSA9ICh7IHVzZXIsIHNjb3JlIH0pID0+IHtcbiAgY29uc3QgdGFibGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlLWxpc3QgdGJvZHknKTtcbiAgY29uc3QgdGFibGVSb3dzID0gdGFibGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJyk7XG5cbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICA8dGQ+JHt0YWJsZVJvd3MubGVuZ3RoICsgMX08L3RkPlxuICAgIDx0ZD4ke3VzZXJ9PC90ZD5cbiAgICA8dGQ+JHtzY29yZX08L3RkPlxuICBgO1xuXG4gIHRhYmxlTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9qcy9ldmVudExpc3RlbmVycy5qcyc7XG5cbmFkZEV2ZW50TGlzdGVuZXJzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9