"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/play/page",{

/***/ "(app-pages-browser)/./app/components/leaderBoard/leaderBoard.js":
/*!***************************************************!*\
  !*** ./app/components/leaderBoard/leaderBoard.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LeaderBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../styles/leaderBoard.module.css */ \"(app-pages-browser)/./app/styles/leaderBoard.module.css\");\n/* harmony import */ var _styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetcher */ \"(app-pages-browser)/./app/fetcher.js\");\n/* harmony import */ var _img_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/close.svg */ \"(app-pages-browser)/./img/close.svg\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LeaderBoard(props) {\n    var _this = this;\n    _s();\n    const { data: users } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/v1/game_2048/game_score/\", _fetcher__WEBPACK_IMPORTED_MODULE_4__.fetcher);\n    const apiBack = process.env.BACKEND_API_KEY;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    props.onClose();\n                },\n                className: (_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default().closeBtn),\n                style: {},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: _img_close_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"close-btn\"\n                }, void 0, false, {\n                    fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                lineNumber: 14,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default().containerTitle),\n                children: \"Список лидеров:\"\n            }, void 0, false, {\n                fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    className: (_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default().containerList),\n                    children: [\n                        users === null || users === void 0 ? void 0 : users.map(function(user) {\n                            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    (user === null || user === void 0 ? void 0 : user.profile_picture) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        width: 140,\n                                        height: 140,\n                                        style: {\n                                            borderRadius: \"21px\",\n                                            marginRight: \"35px\"\n                                        },\n                                        src: \"\".concat(apiBack).concat(user === null || user === void 0 ? void 0 : user.profile_picture),\n                                        alt: \"user-jpg\"\n                                    }, void 0, false, {\n                                        fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 51\n                                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            borderRadius: \"21px\",\n                                            marginRight: \"35px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RandomAvatar, {\n                                            name: user === null || user === void 0 ? void 0 : user.username,\n                                            square: true,\n                                            size: 140\n                                        }, void 0, false, {\n                                            fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 257\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 198\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default().username),\n                                        children: [\n                                            user.username,\n                                            \":\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default().userscore),\n                                        children: user.score\n                                    }, void 0, false, {\n                                        fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, user.username, true, {\n                                fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                                lineNumber: 22,\n                                columnNumber: 28\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: (_styles_leaderBoard_module_css__WEBPACK_IMPORTED_MODULE_1___default().hrLine)\n                        }, void 0, false, {\n                            fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/proj/2o48/game-2048-frontend/app/components/leaderBoard/leaderBoard.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(LeaderBoard, \"ntPaatyGa2vedBXmVr4aDmO95yU=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = LeaderBoard;\nvar _c;\n$RefreshReg$(_c, \"LeaderBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2xlYWRlckJvYXJkL2xlYWRlckJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3lEO0FBQzNCO0FBQ047QUFDZ0I7QUFDTTtBQUUvQixTQUFTSyxZQUFZQyxLQUFLOzs7SUFDckMsTUFBTSxFQUFFQyxNQUFNQyxLQUFLLEVBQUUsR0FBR04sK0NBQU1BLENBQUMsaUNBQWlDQyw2Q0FBT0E7SUFDdkUsTUFBTU0sVUFBVUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlO0lBRTNDLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXZCxpRkFBZTs7MEJBQzFCLDhEQUFDZ0I7Z0JBQU9DLFNBQVM7b0JBQU9YLE1BQU1ZLE9BQU87Z0JBQUU7Z0JBQUdKLFdBQVdkLGdGQUFjO2dCQUFFQSxPQUFPLENBQzdFOzBCQUNBLDRFQUFDQyxrREFBS0E7b0JBQUNtQixLQUFLaEIsc0RBQVNBO29CQUFFaUIsS0FBSTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDQztnQkFBR1IsV0FBV2Qsc0ZBQW9COzBCQUFFOzs7Ozs7MEJBQ3JDLDhEQUFDYTswQkFDRCw0RUFBQ1c7b0JBQUdWLFdBQVdkLHFGQUFtQjs7d0JBQzdCUSxrQkFBQUEsNEJBQUFBLE1BQU9rQixHQUFHLENBQUMsU0FBQ0M7Z0NBQUtDLHFFQUFFOzRCQUNoQixxQkFBTyw4REFBQ0M7O29DQUNIRixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1HLGVBQWUsa0JBQUksOERBQUNDO3dDQUFJQyxPQUFPO3dDQUFLQyxRQUFRO3dDQUFLakMsT0FBTzs0Q0FBRWtDLGNBQWM7NENBQVFDLGFBQWE7d0NBQU87d0NBQUdmLEtBQUssVUFBR1gsU0FBZ0MsT0FBdEJrQixpQkFBQUEsMkJBQUFBLEtBQU1HLGVBQWU7d0NBQUlULEtBQUk7Ozs7OzhEQUFnQiw4REFBQ1I7d0NBQUliLE9BQU87NENBQUVrQyxjQUFjOzRDQUFRQyxhQUFhO3dDQUFPO2tEQUFHLDRFQUFDQzs0Q0FBYUMsSUFBSSxFQUFFVixpQkFBQUEsMkJBQUFBLEtBQU1XLFFBQVE7NENBQUdDLFFBQVE7NENBQU1DLE1BQU07Ozs7Ozs7Ozs7O2tEQUNqUyw4REFBQ0M7d0NBQUszQixXQUFXZCxnRkFBYzs7NENBQUcyQixLQUFLVyxRQUFROzRDQUFDOzs7Ozs7O2tEQUNoRCw4REFBQ0c7d0NBQUszQixXQUFXZCxpRkFBZTtrREFBRzJCLEtBQUtnQixLQUFLOzs7Ozs7OytCQUhqQ2hCLEtBQUtXLFFBQVE7Ozs7O3dCQUtqQztzQ0FDQSw4REFBQ007NEJBQUc5QixXQUFXZCw4RUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0M7R0F6QndCSzs7UUFDSUgsMkNBQU1BOzs7S0FEVkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbGVhZGVyQm9hcmQvbGVhZGVyQm9hcmQuanM/MTkyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLy4uLy4uL3N0eWxlcy9sZWFkZXJCb2FyZC5tb2R1bGUuY3NzXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIlxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuLi8uLi9mZXRjaGVyXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCIuLi8uLi8uLi9pbWcvY2xvc2Uuc3ZnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVyQm9hcmQocHJvcHMpIHtcbiAgICBjb25zdCB7IGRhdGE6IHVzZXJzIH0gPSB1c2VTV1IoXCIvYXBpL3YxL2dhbWVfMjA0OC9nYW1lX3Njb3JlL1wiLCBmZXRjaGVyKVxuICAgIGNvbnN0IGFwaUJhY2sgPSBwcm9jZXNzLmVudi5CQUNLRU5EX0FQSV9LRVlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9ID5cbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5vbkNsb3NlKCl9fSBjbGFzc05hbWU9e3N0eWxlLmNsb3NlQnRufSBzdHlsZT17e1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjbG9zZUljb259IGFsdD1cImNsb3NlLWJ0blwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lclRpdGxlfT7QodC/0LjRgdC+0Log0LvQuNC00LXRgNC+0LI6PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8b2wgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJMaXN0fT5cbiAgICAgICAgICAgICAgICB7dXNlcnM/Lm1hcCgodXNlcixpPTEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e3VzZXIudXNlcm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXI/LnByb2ZpbGVfcGljdHVyZSA/ICg8aW1nIHdpZHRoPXsxNDB9IGhlaWdodD17MTQwfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMjFweFwiLCBtYXJnaW5SaWdodDogXCIzNXB4XCIgfX0gc3JjPXtgJHthcGlCYWNrfSR7dXNlcj8ucHJvZmlsZV9waWN0dXJlfWB9IGFsdD1cInVzZXItanBnXCIgLz4pOig8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIyMXB4XCIsIG1hcmdpblJpZ2h0OiBcIjM1cHhcIiB9fT48UmFuZG9tQXZhdGFyIG5hbWU9e3VzZXI/LnVzZXJuYW1lfSAgc3F1YXJlPXt0cnVlfSBzaXplPXsxNDB9IC8+PC9kaXY+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUudXNlcm5hbWV9Pnt1c2VyLnVzZXJuYW1lfTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLnVzZXJzY29yZX0+e3VzZXIuc2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZS5ockxpbmV9Lz5cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJzdHlsZSIsIkltYWdlIiwidXNlU1dSIiwiZmV0Y2hlciIsImNsb3NlSWNvbiIsIkxlYWRlckJvYXJkIiwicHJvcHMiLCJkYXRhIiwidXNlcnMiLCJhcGlCYWNrIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfQVBJX0tFWSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiY2xvc2VCdG4iLCJzcmMiLCJhbHQiLCJoMSIsImNvbnRhaW5lclRpdGxlIiwib2wiLCJjb250YWluZXJMaXN0IiwibWFwIiwidXNlciIsImkiLCJsaSIsInByb2ZpbGVfcGljdHVyZSIsImltZyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJSYW5kb21BdmF0YXIiLCJuYW1lIiwidXNlcm5hbWUiLCJzcXVhcmUiLCJzaXplIiwic3BhbiIsInVzZXJzY29yZSIsInNjb3JlIiwiaHIiLCJockxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/leaderBoard/leaderBoard.js\n"));

/***/ })

});