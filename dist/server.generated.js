/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n  env: \"development\" || 0,\n  port: process.env_PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.envMONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://mern-skeleton/./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\server\\\\controllers\\\\auth.controller.js: Unexpected reserved word 'await'. (8:19)\\n\\n\\u001b[0m \\u001b[90m  6 |\\u001b[39m \\u001b[36mconst\\u001b[39m signin \\u001b[33m=\\u001b[39m (req\\u001b[33m,\\u001b[39m res) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m  7 |\\u001b[39m     \\u001b[36mtry\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  8 |\\u001b[39m         \\u001b[36mlet\\u001b[39m user \\u001b[33m=\\u001b[39m \\u001b[36mawait\\u001b[39m \\u001b[33mUser\\u001b[39m\\u001b[33m.\\u001b[39mfindOne({\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 |\\u001b[39m           \\u001b[32m\\\"email\\\"\\u001b[39m\\u001b[33m:\\u001b[39m req\\u001b[33m.\\u001b[39mbody\\u001b[33m.\\u001b[39memail\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 |\\u001b[39m         })\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 |\\u001b[39m         \\u001b[36mif\\u001b[39m (\\u001b[33m!\\u001b[39muser)\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:810:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:803:17)\\n    at Parser.raise (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:764:17)\\n    at Parser.checkReservedWord (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12235:12)\\n    at Parser.parseIdentifierName (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12197:12)\\n    at Parser.parseIdentifier (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12164:23)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11213:27)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10954:23)\\n    at Parser.parseUpdate (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10934:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10912:23)\");\n\n//# sourceURL=webpack://mern-skeleton/./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\server\\\\controllers\\\\user.controller.js: Unexpected reserved word 'await'. (55:8)\\n\\n\\u001b[0m \\u001b[90m 53 |\\u001b[39m         user \\u001b[33m=\\u001b[39m extend(user\\u001b[33m,\\u001b[39m req\\u001b[33m.\\u001b[39mbody)\\u001b[0m\\n\\u001b[0m \\u001b[90m 54 |\\u001b[39m         user\\u001b[33m.\\u001b[39mupdated \\u001b[33m=\\u001b[39m \\u001b[33mDate\\u001b[39m\\u001b[33m.\\u001b[39mnow()\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 55 |\\u001b[39m         \\u001b[36mawait\\u001b[39m user\\u001b[33m.\\u001b[39msave()\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m         \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 56 |\\u001b[39m         user\\u001b[33m.\\u001b[39mhashed_password \\u001b[33m=\\u001b[39m undefined\\u001b[0m\\n\\u001b[0m \\u001b[90m 57 |\\u001b[39m         user\\u001b[33m.\\u001b[39msalt \\u001b[33m=\\u001b[39m undefined\\u001b[0m\\n\\u001b[0m \\u001b[90m 58 |\\u001b[39m         res\\u001b[33m.\\u001b[39mjson(user)\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:810:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:803:17)\\n    at Parser.raise (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:764:17)\\n    at Parser.checkReservedWord (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12235:12)\\n    at Parser.parseIdentifierName (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12197:12)\\n    at Parser.parseIdentifier (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12164:23)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11213:27)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10954:23)\\n    at Parser.parseUpdate (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10934:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\nagle\\\\OneDrive\\\\Documents\\\\GitHub\\\\mern-skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10912:23)\");\n\n//# sourceURL=webpack://mern-skeleton/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.get('/', (req, res) => {\n  res.status(200).send((0,_template_js__WEBPACK_IMPORTED_MODULE_6__.default)());\n});\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__.default);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__.default);\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://mern-skeleton/./server/express.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/auth/signin').post((_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1___default().signin));\nrouter.route('/auth/signout').get((_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1___default().signout));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://mern-skeleton/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users').get((_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1___default().list)).post((_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1___default().create));\nrouter.route('/api/users/:userId').get(authCrtl.requireSignin, (_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1___default().read)).put(authCrtl.requireSignin, authCrtl.hasAuthorization, (_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1___default().update)).delete((_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2___default().requireSignin), authCrtl.hasAuthorization, (_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1___default().remove));\nrouter.param('userId', (_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1___default().userByID));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://mern-skeleton/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error', () => {\n  throw new Error('unable to connect to database: ${mongoUri}');\n});\n_express__WEBPACK_IMPORTED_MODULE_1__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__.default.port);\n});\n\n//# sourceURL=webpack://mern-skeleton/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  return `<!doctype html>\n        <html lang = \"en\">\n            <head>\n                <meta charset=\"utf-8\">\n                <title>MERN Skeleton</title>\n            </head>\n            <body>\n                <div id=\"root\">Hello World</div>\n            </body>\n        </html>`;\n});\n\n//# sourceURL=webpack://mern-skeleton/./template.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;