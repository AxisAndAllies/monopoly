webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/monopoly */ \"./assets/monopoly.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/apache/github/monopoly/pages/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DiceButton = function DiceButton() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(6),\n      val = _useState[0],\n      setVal = _useState[1];\n\n  return __jsx(\"button\", {\n    onClick: function onClick() {\n      // lol not acc\n      setVal(Math.floor(Math.random() * 12) + 1);\n      console.log(\"rolled\", val);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, \"Roll Dice (\", val, \")\");\n};\n\n_s(DiceButton, \"pgrGZpc0MRXNUfO6Qz6Mm8OQ5g8=\");\n\n_c = DiceButton;\n\nvar BuyButton = function BuyButton(_ref) {\n  var cost = _ref.cost,\n      onClick = _ref.onClick;\n  console.log(cost);\n  return __jsx(\"button\", {\n    onClick: onClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }, \"Buy for $\", cost);\n};\n\n_c2 = BuyButton;\n\nvar ActionButton = function ActionButton(_ref2) {\n  var descript = _ref2.descript,\n      action = _ref2.action;\n  console.log(descript);\n  return __jsx(\"button\", {\n    onClick: action,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 10\n    }\n  }, \"Action: \", descript);\n};\n\n_c3 = ActionButton;\nfunction Home() {\n  _s2();\n\n  var _this2 = this;\n\n  var properties = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].properties,\n      tiles = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].tiles,\n      chance = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].chance,\n      communitychest = _assets_monopoly__WEBPACK_IMPORTED_MODULE_3__[\"default\"].communitychest;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    name: \"bob\",\n    money: 155\n  }, {\n    name: \"sally\"\n  }]),\n      players = _useState2[0],\n      setPlayers = _useState2[1];\n\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, \"Create Next App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Monopoly\"), __jsx(\"p\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"Roll Dice\", __jsx(DiceButton, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, tiles.map(function (t) {\n    return properties.filter(function (p) {\n      return p.id == t.id;\n    })[0];\n  }) // .sort((a, b) => a.position - b.position)\n  .map(function (p) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, __jsx(\"p\", {\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 19\n      }\n    }, JSON.stringify(p)), p.price && __jsx(BuyButton, {\n      cost: p.price,\n      onClick: function onClick() {\n        console.log(\"clicked\");\n      },\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 21\n      }\n    }), __jsx(ActionButton, {\n      descript: function descript() {//pass\n      },\n      action: function action() {//pass\n      },\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 19\n      }\n    })));\n  }))), __jsx(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, \"Powered by\", \" \", __jsx(\"img\", {\n    src: \"/vercel.svg\",\n    alt: \"Vercel Logo\",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s2(Home, \"eTkhiLfmZDnF3XNrUUqKSSWsZ1I=\");\n\n_c4 = Home;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DiceButton\");\n$RefreshReg$(_c2, \"BuyButton\");\n$RefreshReg$(_c3, \"ActionButton\");\n$RefreshReg$(_c4, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEaWNlQnV0dG9uIiwidXNlU3RhdGUiLCJ2YWwiLCJzZXRWYWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiQnV5QnV0dG9uIiwiY29zdCIsIm9uQ2xpY2siLCJBY3Rpb25CdXR0b24iLCJkZXNjcmlwdCIsImFjdGlvbiIsIkhvbWUiLCJwcm9wZXJ0aWVzIiwiTW9ub3BvbHkiLCJ0aWxlcyIsImNoYW5jZSIsImNvbW11bml0eWNoZXN0IiwibmFtZSIsIm1vbmV5IiwicGxheWVycyIsInNldFBsYXllcnMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdyaWQiLCJtYXAiLCJ0IiwiZmlsdGVyIiwicCIsImlkIiwiY2FyZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcmljZSIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsQ0FBRCxDQURQO0FBQUEsTUFDaEJDLEdBRGdCO0FBQUEsTUFDWEMsTUFEVzs7QUFFdkIsU0FDRTtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiO0FBQ0FBLFlBQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxDQUFsQyxDQUFOO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JOLEdBQXRCO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9jQSxHQVBkLE1BREY7QUFXRCxDQWJEOztHQUFNRixVOztLQUFBQSxVOztBQWVOLElBQU1TLFNBQVMsR0FBRyxTQUFaQSxT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ZixDQUFKLENBREYsRUFFR0EsQ0FBQyxDQUFDSyxLQUFGLElBQ0MsTUFBQyxTQUFEO0FBQ0UsVUFBSSxFQUFFTCxDQUFDLENBQUNLLEtBRFY7QUFFRSxhQUFPLEVBQUUsbUJBQU07QUFDYmhDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRCxPQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixFQVVFLE1BQUMsWUFBRDtBQUNFLGNBQVEsRUFBRSxvQkFBTSxDQUNkO0FBQ0QsT0FISDtBQUlFLFlBQU0sRUFBRSxrQkFBTSxDQUNaO0FBQ0QsT0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsQ0FERixDQURHO0FBQUEsR0FITixDQURILENBUkYsQ0FORixFQTRDRTtBQUFRLGFBQVMsRUFBRWlCLDhEQUFNLENBQUNlLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx3R0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBS2EsR0FMYixFQU1FO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsT0FBRyxFQUFDLGFBQTNCO0FBQXlDLGFBQVMsRUFBRWYsOERBQU0sQ0FBQ2dCLElBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLENBNUNGLENBREY7QUF5REQ7O0lBcEV1QjFCLEk7O01BQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBNb25vcG9seSBmcm9tIFwiLi4vYXNzZXRzL21vbm9wb2x5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEaWNlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoNik7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAvLyBsb2wgbm90IGFjY1xuICAgICAgICBzZXRWYWwoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpICsgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicm9sbGVkXCIsIHZhbCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIFJvbGwgRGljZSAoe3ZhbH0pXG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5jb25zdCBCdXlCdXR0b24gPSAoeyBjb3N0LCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc29sZS5sb2coY29zdCk7XG4gIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PkJ1eSBmb3IgJHtjb3N0fTwvYnV0dG9uPjtcbn07XG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9ICh7IGRlc2NyaXB0LCBhY3Rpb24gfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkZXNjcmlwdCk7XG4gIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2FjdGlvbn0+QWN0aW9uOiB7ZGVzY3JpcHR9PC9idXR0b24+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgbGV0IHsgcHJvcGVydGllcywgdGlsZXMsIGNoYW5jZSwgY29tbXVuaXR5Y2hlc3QgfSA9IE1vbm9wb2x5O1xuICBsZXQgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiYm9iXCIsXG4gICAgICBtb25leTogMTU1LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzYWxseVwiLFxuICAgIH0sXG4gIF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Nb25vcG9seTwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIFJvbGwgRGljZVxuICAgICAgICAgIDxEaWNlQnV0dG9uIC8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHt0aWxlc1xuICAgICAgICAgICAgLm1hcCgodCkgPT4gcHJvcGVydGllcy5maWx0ZXIoKHApID0+IHAuaWQgPT0gdC5pZClbMF0pXG4gICAgICAgICAgICAvLyAuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pXG4gICAgICAgICAgICAubWFwKChwKSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeShwKX08L3A+XG4gICAgICAgICAgICAgICAgICB7cC5wcmljZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjb3N0PXtwLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxBY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAvL3Bhc3NcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy9wYXNzXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})