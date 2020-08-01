webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/monopoly */ \"./assets/monopoly.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/apache/github/monopoly/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DiceButton = function DiceButton() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(6),\n      val = _useState[0],\n      setVal = _useState[1];\n\n  return __jsx(\"button\", {\n    onClick: function onClick() {\n      // lol not acc\n      setVal(Math.floor(Math.random() * 12) + 1);\n      console.log(\"rolled\", val);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, \"Roll Dice (\", val, \")\");\n};\n\n_s(DiceButton, \"pgrGZpc0MRXNUfO6Qz6Mm8OQ5g8=\");\n\n_c = DiceButton;\n\nvar BuyButton = function BuyButton(_ref) {\n  var cost = _ref.cost,\n      onClick = _ref.onClick;\n  console.log(cost);\n  return __jsx(\"button\", {\n    onClick: onClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }, \"Buy for $\", cost);\n};\n\n_c2 = BuyButton;\n\nvar ActionButton = function ActionButton(_ref2) {\n  var cost = _ref2.cost,\n      descript = _ref2.descript,\n      action = _ref2.action;\n  console.log(descript);\n  return __jsx(\"button\", {\n    onClick: action,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 10\n    }\n  }, \"Action: \", descript);\n};\n\n_c3 = ActionButton;\nfunction Home() {\n  var _this2 = this;\n\n  var properties = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].properties,\n      tiles = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].tiles,\n      chance = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].chance,\n      communitychest = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].communitychest;\n  console.log(properties);\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Create Next App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Monopoly\"), __jsx(\"p\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Roll Dice\", __jsx(DiceButton, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, tiles.map(function (t) {\n    return properties.filter(function (p) {\n      return p.id == t.id;\n    })[0];\n  }) // .sort((a, b) => a.position - b.position)\n  .map(function (p) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }, JSON.stringify(p)), __jsx(BuyButton, {\n      cost: p.price,\n      onClick: function onClick() {\n        console.log(\"clicked\");\n      },\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, \"Powered by\", \" \", __jsx(\"img\", {\n    src: \"/vercel.svg\",\n    alt: \"Vercel Logo\",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }))));\n}\n_c4 = Home;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DiceButton\");\n$RefreshReg$(_c2, \"BuyButton\");\n$RefreshReg$(_c3, \"ActionButton\");\n$RefreshReg$(_c4, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEaWNlQnV0dG9uIiwidXNlU3RhdGUiLCJ2YWwiLCJzZXRWYWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiQnV5QnV0dG9uIiwiY29zdCIsIm9uQ2xpY2siLCJBY3Rpb25CdXR0b24iLCJkZXNjcmlwdCIsImFjdGlvbiIsIkhvbWUiLCJwcm9wZXJ0aWVzIiwiTW9ub3BvbHkiLCJ0aWxlcyIsImNoYW5jZSIsImNvbW11bml0eWNoZXN0Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJncmlkIiwibWFwIiwidCIsImZpbHRlciIsInAiLCJpZCIsImNhcmQiLCJKU09OIiwic3RyaW5naWZ5IiwicHJpY2UiLCJmb290ZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsQ0FBRCxDQURQO0FBQUEsTUFDaEJDLEdBRGdCO0FBQUEsTUFDWEMsTUFEVzs7QUFFdkIsU0FDRTtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiO0FBQ0FBLFlBQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxDQUFsQyxDQUFOO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JOLEdBQXRCO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9jQSxHQVBkLE1BREY7QUFXRCxDQWJEOztHQUFNRixVOztLQUFBQSxVOztBQWVOLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXVCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFv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QURILENBUkYsQ0FORixFQWlDRTtBQUFRLGFBQVMsRUFBRWEsOERBQU0sQ0FBQ2UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHdHQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFLYSxHQUxiLEVBTUU7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBeUMsYUFBUyxFQUFFZiw4REFBTSxDQUFDZ0IsSUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FqQ0YsQ0FERjtBQThDRDtNQWpEdUJ0QixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTW9ub3BvbHkgZnJvbSBcIi4uL2Fzc2V0cy9tb25vcG9seVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGljZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKDYpO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgLy8gbG9sIG5vdCBhY2NcbiAgICAgICAgc2V0VmFsKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyKSArIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJvbGxlZFwiLCB2YWwpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICBSb2xsIERpY2UgKHt2YWx9KVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuY29uc3QgQnV5QnV0dG9uID0gKHsgY29zdCwgb25DbGljayB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvc3QpO1xuICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT5CdXkgZm9yICR7Y29zdH08L2J1dHRvbj47XG59O1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSAoeyBjb3N0LCBkZXNjcmlwdCwgYWN0aW9uIH0pID0+IHtcbiAgY29uc29sZS5sb2coZGVzY3JpcHQpO1xuICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXthY3Rpb259PkFjdGlvbjoge2Rlc2NyaXB0fTwvYnV0dG9uPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCB7IHByb3BlcnRpZXMsIHRpbGVzLCBjaGFuY2UsIGNvbW11bml0eWNoZXN0IH0gPSBNb25vcG9seTtcbiAgY29uc29sZS5sb2cocHJvcGVydGllcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk1vbm9wb2x5PC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgUm9sbCBEaWNlXG4gICAgICAgICAgPERpY2VCdXR0b24gLz5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge3RpbGVzXG4gICAgICAgICAgICAubWFwKCh0KSA9PiBwcm9wZXJ0aWVzLmZpbHRlcigocCkgPT4gcC5pZCA9PSB0LmlkKVswXSlcbiAgICAgICAgICAgIC8vIC5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbilcbiAgICAgICAgICAgIC5tYXAoKHApID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PntKU09OLnN0cmluZ2lmeShwKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV5QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb3N0PXtwLnByaWNlfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24+PC9idXR0b24+ICovfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})