webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/components/shared/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/shared/navbar.js ***!
  \*****************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ong Wei Hong\\Documents\\personal-website\\src\\components\\shared\\navbar.js",
    _this = undefined;




var navbarInfo = [{
  name: 'home',
  title: 'About',
  link: '/',
  variant: 'text'
}, {
  name: 'blog',
  title: 'Blog',
  link: '/blog',
  variant: 'text'
}, {
  name: 'projects',
  title: 'Projects',
  link: '/projects',
  variant: 'text'
}, {
  name: 'contact',
  title: 'Contact',
  link: '/contact',
  variant: 'contained'
}];
var Navbar = function Navbar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    spacing: 2,
    children: navbarInfo.map(function (info, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: info.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            variant: info.variant,
            href: info.link,
            children: info.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};
_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci5qcyJdLCJuYW1lcyI6WyJuYXZiYXJJbmZvIiwibmFtZSIsInRpdGxlIiwibGluayIsInZhcmlhbnQiLCJOYXZiYXIiLCJtYXAiLCJpbmZvIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNmO0FBQ0lDLE1BQUksRUFBRSxNQURWO0FBRUlDLE9BQUssRUFBRSxPQUZYO0FBR0lDLE1BQUksRUFBRSxHQUhWO0FBSUlDLFNBQU8sRUFBRTtBQUpiLENBRGUsRUFPZjtBQUNJSCxNQUFJLEVBQUUsTUFEVjtBQUVJQyxPQUFLLEVBQUUsTUFGWDtBQUdJQyxNQUFJLEVBQUUsT0FIVjtBQUlJQyxTQUFPLEVBQUU7QUFKYixDQVBlLEVBYWY7QUFDSUgsTUFBSSxFQUFFLFVBRFY7QUFFSUMsT0FBSyxFQUFFLFVBRlg7QUFHSUMsTUFBSSxFQUFFLFdBSFY7QUFJSUMsU0FBTyxFQUFFO0FBSmIsQ0FiZSxFQW1CZjtBQUNJSCxNQUFJLEVBQUUsU0FEVjtBQUVJQyxPQUFLLEVBQUUsU0FGWDtBQUdJQyxNQUFJLEVBQUUsVUFIVjtBQUlJQyxTQUFPLEVBQUU7QUFKYixDQW5CZSxDQUFuQjtBQTJCTyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUNsQixxRUFBQyxrREFBRDtBQUNJLGFBQVMsTUFEYjtBQUVJLFdBQU8sRUFBQyxNQUZaO0FBR0ksa0JBQWMsRUFBQyxVQUhuQjtBQUlJLFlBQVEsRUFBQyxNQUpiO0FBS0ksV0FBTyxFQUFFLENBTGI7QUFBQSxjQVFLTCxVQUFVLENBQUNNLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSwwQkFDWixxRUFBQyxrREFBRDtBQUFjLFlBQUksTUFBbEI7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFVLGNBQUksRUFBRUQsSUFBSSxDQUFDSixJQUFyQjtBQUFBLGlDQUNJLHFFQUFDLG9EQUFEO0FBQ0ksbUJBQU8sRUFBRUksSUFBSSxDQUFDSCxPQURsQjtBQUVJLGdCQUFJLEVBQUVHLElBQUksQ0FBQ0osSUFGZjtBQUFBLHNCQUlLSSxJQUFJLENBQUNMO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFXTSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWY7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGtCO0FBQUEsQ0FBZjtLQUFNSCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMzEzYzgzNTg4ZGZlOTk0OGJiMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgR3JpZCAgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IG5hdmJhckluZm8gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxyXG4gICAgICAgIHRpdGxlOiAnQWJvdXQnLFxyXG4gICAgICAgIGxpbms6ICcvJyxcclxuICAgICAgICB2YXJpYW50OiAndGV4dCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2Jsb2cnLFxyXG4gICAgICAgIHRpdGxlOiAnQmxvZycsXHJcbiAgICAgICAgbGluazogJy9ibG9nJyxcclxuICAgICAgICB2YXJpYW50OiAndGV4dCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Byb2plY3RzJyxcclxuICAgICAgICB0aXRsZTogJ1Byb2plY3RzJyxcclxuICAgICAgICBsaW5rOiAnL3Byb2plY3RzJyxcclxuICAgICAgICB2YXJpYW50OiAndGV4dCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2NvbnRhY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnQ29udGFjdCcsXHJcbiAgICAgICAgbGluazogJy9jb250YWN0JyxcclxuICAgICAgICB2YXJpYW50OiAnY29udGFpbmVkJ1xyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhciA9ICgpID0+IChcclxuICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxyXG4gICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXHJcbiAgICAgICAgc3BhY2luZz17Mn1cclxuICAgID5cclxuICAgICAgICBcclxuICAgICAgICB7bmF2YmFySW5mby5tYXAoKGluZm8sIGkpID0+IChcclxuICAgICAgICAgICAgPEdyaWQga2V5PXtpfSBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9e2luZm8ubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtpbmZvLnZhcmlhbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2luZm8ubGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9HcmlkPlxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9