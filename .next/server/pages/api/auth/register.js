"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\register.js */ \"(api)/./pages/api/auth/register.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/register\",\n        pathname: \"/api/auth/register\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_auth_register_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1Q3JlZ2lzdGVyLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQzREO0FBQzVEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VtZW50LWFwaS8/YTVhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFxhdXRoXFxcXHJlZ2lzdGVyLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3JlZ2lzdGVyXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9yZWdpc3RlclwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/auth/register.js":
/*!************************************!*\
  !*** ./pages/api/auth/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst schema = joi__WEBPACK_IMPORTED_MODULE_2___default().object({\n    email: joi__WEBPACK_IMPORTED_MODULE_2___default().string().email().required(),\n    password: joi__WEBPACK_IMPORTED_MODULE_2___default().string().min(6).required()\n});\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const { error } = schema.validate(req.body);\n        if (error) return res.status(400).json({\n            message: error.details[0].message\n        });\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(req.body.password, 10);\n        await _utils_db__WEBPACK_IMPORTED_MODULE_1__.db.createUser(req.body.email, hashedPassword);\n        res.status(201).json({\n            message: 'User created'\n        });\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFDVztBQUNqQjtBQUV0QixNQUFNRyxTQUFTRCxpREFBVSxDQUFDO0lBQ3hCRyxPQUFPSCxpREFBVSxHQUFHRyxLQUFLLEdBQUdFLFFBQVE7SUFDcENDLFVBQVVOLGlEQUFVLEdBQUdPLEdBQUcsQ0FBQyxHQUFHRixRQUFRO0FBQ3hDO0FBRWUsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdYLE9BQU9ZLFFBQVEsQ0FBQ0osSUFBSUssSUFBSTtRQUMxQyxJQUFJRixPQUFPLE9BQU9GLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBU0wsTUFBTU0sT0FBTyxDQUFDLEVBQUUsQ0FBQ0QsT0FBTztRQUFDO1FBRTNFLE1BQU1FLGlCQUFpQixNQUFNckIsa0RBQVcsQ0FBQ1csSUFBSUssSUFBSSxDQUFDUixRQUFRLEVBQUU7UUFDNUQsTUFBTVAseUNBQUVBLENBQUNzQixVQUFVLENBQUNaLElBQUlLLElBQUksQ0FBQ1gsS0FBSyxFQUFFZ0I7UUFDcENULElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFlO0lBQ2pELE9BQU87UUFDTFAsSUFBSVksU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CWixJQUFJSyxNQUFNLENBQUMsS0FBS1EsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFZCxJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZW1lbnQtYXBpLy4vcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIuanM/YzdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGInO1xyXG5pbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig2KS5yZXF1aXJlZCgpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBzY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UgfSk7XHJcblxyXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChyZXEuYm9keS5wYXNzd29yZCwgMTApO1xyXG4gICAgYXdhaXQgZGIuY3JlYXRlVXNlcihyZXEuYm9keS5lbWFpbCwgaGFzaGVkUGFzc3dvcmQpO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBjcmVhdGVkJyB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYmNyeXB0IiwiZGIiLCJKb2kiLCJzY2hlbWEiLCJvYmplY3QiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImRldGFpbHMiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJjcmVhdGVVc2VyIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/register.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dbConfig = {\n    host: 'localhost',\n    user: 'root',\n    password: 'root',\n    database: 'contact_management'\n};\nconst db = {\n    async query (sql, values) {\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection(dbConfig);\n        const [results] = await connection.execute(sql, values);\n        connection.end();\n        return results;\n    },\n    async createUser (email, password) {\n        return this.query(`INSERT INTO users (email, password) VALUES (?, ?)`, [\n            email,\n            password\n        ]);\n    },\n    async getUserByEmail (email) {\n        const result = await this.query(`SELECT * FROM users WHERE email = ?`, [\n            email\n        ]);\n        return result[0];\n    },\n    async addContact (contact) {\n        return this.query(`INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)`, [\n            contact.name,\n            contact.email,\n            contact.phone\n        ]);\n    },\n    async getContacts () {\n        return this.query(`SELECT * FROM contacts`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFbkMsTUFBTUMsV0FBVztJQUNiQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0FBQ1o7QUFHSyxNQUFNQyxLQUFLO0lBQ2hCLE1BQU1DLE9BQU1DLEdBQUcsRUFBRUMsTUFBTTtRQUNyQixNQUFNQyxhQUFhLE1BQU1WLHNFQUFzQixDQUFDQztRQUNoRCxNQUFNLENBQUNXLFFBQVEsR0FBRyxNQUFNRixXQUFXRyxPQUFPLENBQUNMLEtBQUtDO1FBQ2hEQyxXQUFXSSxHQUFHO1FBQ2QsT0FBT0Y7SUFDVDtJQUNBLE1BQU1HLFlBQVdDLEtBQUssRUFBRVosUUFBUTtRQUM5QixPQUFPLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsaURBQWlELENBQUMsRUFBRTtZQUFDUztZQUFPWjtTQUFTO0lBQzFGO0lBQ0EsTUFBTWEsZ0JBQWVELEtBQUs7UUFDeEIsTUFBTUUsU0FBUyxNQUFNLElBQUksQ0FBQ1gsS0FBSyxDQUFDLENBQUMsbUNBQW1DLENBQUMsRUFBRTtZQUFDUztTQUFNO1FBQzlFLE9BQU9FLE1BQU0sQ0FBQyxFQUFFO0lBQ2xCO0lBQ0EsTUFBTUMsWUFBV0MsT0FBTztRQUN0QixPQUFPLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUMsMERBQTBELENBQUMsRUFBRTtZQUFDYSxRQUFRQyxJQUFJO1lBQUVELFFBQVFKLEtBQUs7WUFBRUksUUFBUUUsS0FBSztTQUFDO0lBQzlIO0lBQ0EsTUFBTUM7UUFDSixPQUFPLElBQUksQ0FBQ2hCLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBQzVDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3QtbWFuYWdlbWVudC1hcGkvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcblxyXG5jb25zdCBkYkNvbmZpZyA9IHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgcGFzc3dvcmQ6ICdyb290JyxcclxuICAgIGRhdGFiYXNlOiAnY29udGFjdF9tYW5hZ2VtZW50JyxcclxuICB9O1xyXG4gIFxyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0ge1xyXG4gIGFzeW5jIHF1ZXJ5KHNxbCwgdmFsdWVzKSB7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihkYkNvbmZpZyk7XHJcbiAgICBjb25zdCBbcmVzdWx0c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoc3FsLCB2YWx1ZXMpO1xyXG4gICAgY29ubmVjdGlvbi5lbmQoKTtcclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH0sXHJcbiAgYXN5bmMgY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KGBJTlNFUlQgSU5UTyB1c2VycyAoZW1haWwsIHBhc3N3b3JkKSBWQUxVRVMgKD8sID8pYCwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG4gIH0sXHJcbiAgYXN5bmMgZ2V0VXNlckJ5RW1haWwoZW1haWwpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoYFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/YCwgW2VtYWlsXSk7XHJcbiAgICByZXR1cm4gcmVzdWx0WzBdO1xyXG4gIH0sXHJcbiAgYXN5bmMgYWRkQ29udGFjdChjb250YWN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeShgSU5TRVJUIElOVE8gY29udGFjdHMgKG5hbWUsIGVtYWlsLCBwaG9uZSkgVkFMVUVTICg/LCA/LCA/KWAsIFtjb250YWN0Lm5hbWUsIGNvbnRhY3QuZW1haWwsIGNvbnRhY3QucGhvbmVdKTtcclxuICB9LFxyXG4gIGFzeW5jIGdldENvbnRhY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVlcnkoYFNFTEVDVCAqIEZST00gY29udGFjdHNgKTtcclxuICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJkYkNvbmZpZyIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsImRiIiwicXVlcnkiLCJzcWwiLCJ2YWx1ZXMiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsInJlc3VsdHMiLCJleGVjdXRlIiwiZW5kIiwiY3JlYXRlVXNlciIsImVtYWlsIiwiZ2V0VXNlckJ5RW1haWwiLCJyZXN1bHQiLCJhZGRDb250YWN0IiwiY29udGFjdCIsIm5hbWUiLCJwaG9uZSIsImdldENvbnRhY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cregister.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();