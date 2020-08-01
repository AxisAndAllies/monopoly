webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/monopoly */ \"./assets/monopoly.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/apache/github/monopoly/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DiceButton = function DiceButton() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(6),\n      val = _useState[0],\n      setVal = _useState[1];\n\n  return __jsx(\"button\", {\n    onClick: function onClick() {\n      // lol not acc\n      setVal(Math.floor(Math.random() * 12) + 1);\n      console.log(\"rolled\", val);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, \"Roll Dice (\", val, \")\");\n};\n\n_s(DiceButton, \"pgrGZpc0MRXNUfO6Qz6Mm8OQ5g8=\");\n\n_c = DiceButton;\n\nvar BuyButton = function BuyButton(_ref) {\n  var cost = _ref.cost,\n      onClick = _ref.onClick;\n  console.log(cost);\n  return __jsx(\"button\", {\n    onClick: onClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }, \"Buy for $\", cost);\n};\n\n_c2 = BuyButton;\nfunction Home() {\n  var _this2 = this;\n\n  var properties = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].properties,\n      tiles = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].tiles,\n      chance = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].chance,\n      communitychest = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].communitychest;\n  console.log(properties);\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Create Next App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Monopoly\"), __jsx(\"p\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Roll Dice\", __jsx(DiceButton, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, tiles.map(function (t) {\n    return properties.filter(function (p) {\n      return p.id == t.id;\n    });\n  }) // .sort((a, b) => a.position - b.position)\n  .map(function (p) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, JSON.stringify(p)), __jsx(BuyButton, {\n      cost: p.id,\n      onClick: function onClick() {\n        console.log(\"clicked\");\n      },\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }), __jsx(\"button\", {\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Powered by\", \" \", __jsx(\"img\", {\n    src: \"/vercel.svg\",\n    alt: \"Vercel Logo\",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }))));\n}\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DiceButton\");\n$RefreshReg$(_c2, \"BuyButton\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEaWNlQnV0dG9uIiwidXNlU3RhdGUiLCJ2YWwiLCJzZXRWYWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiQnV5QnV0dG9uIiwiY29zdCIsIm9uQ2xpY2siLCJIb21lIiwicHJvcGVydGllcyIsIk1vbm9wb2x5IiwidGlsZXMiLCJjaGFuY2UiLCJjb21tdW5pdHljaGVzdCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ3JpZCIsIm1hcCIsInQiLCJmaWx0ZXIiLCJwIiwiaWQiLCJjYXJkIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxDQUFELENBRFA7QUFBQSxNQUNoQkMsR0FEZ0I7QUFBQSxNQUNYQyxNQURXOztBQUV2QixTQUNFO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2I7QUFDQUEsWUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLElBQWlDLENBQWxDLENBQU47QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQk4sR0FBdEI7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBT2NBLEdBUGQsTUFERjtBQVdELENBYkQ7O0dBQU1GLFU7O0tBQUFBLFU7O0FBZU4sSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3ZDSixTQUFPLENB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LElBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLENBakNGLENBREY7QUE4Q0Q7TUFqRHVCckIsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE1vbm9wb2x5IGZyb20gXCIuLi9hc3NldHMvbW9ub3BvbHlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERpY2VCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZSg2KTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIC8vIGxvbCBub3QgYWNjXG4gICAgICAgIHNldFZhbChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMikgKyAxKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyb2xsZWRcIiwgdmFsKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgUm9sbCBEaWNlICh7dmFsfSlcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmNvbnN0IEJ1eUJ1dHRvbiA9ICh7IGNvc3QsIG9uQ2xpY2sgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhjb3N0KTtcbiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17b25DbGlja30+QnV5IGZvciAke2Nvc3R9PC9idXR0b24+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgbGV0IHsgcHJvcGVydGllcywgdGlsZXMsIGNoYW5jZSwgY29tbXVuaXR5Y2hlc3QgfSA9IE1vbm9wb2x5O1xuICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+TW9ub3BvbHk8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBSb2xsIERpY2VcbiAgICAgICAgICA8RGljZUJ1dHRvbiAvPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7dGlsZXNcbiAgICAgICAgICAgIC5tYXAoKHQpID0+IHByb3BlcnRpZXMuZmlsdGVyKChwKSA9PiBwLmlkID09IHQuaWQpKVxuICAgICAgICAgICAgLy8gLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKVxuICAgICAgICAgICAgLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+e0pTT04uc3RyaW5naWZ5KHApfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXlCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvc3Q9e3AuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})