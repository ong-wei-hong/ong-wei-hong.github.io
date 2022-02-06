webpackHotUpdate_N_E("pages/index",{

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
var Navbar = function Navbar(props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci5qcyJdLCJuYW1lcyI6WyJuYXZiYXJJbmZvIiwibmFtZSIsInRpdGxlIiwibGluayIsInZhcmlhbnQiLCJOYXZiYXIiLCJwcm9wcyIsIm1hcCIsImluZm8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2Y7QUFDSUMsTUFBSSxFQUFFLE1BRFY7QUFFSUMsT0FBSyxFQUFFLE9BRlg7QUFHSUMsTUFBSSxFQUFFLEdBSFY7QUFJSUMsU0FBTyxFQUFFO0FBSmIsQ0FEZSxFQU9mO0FBQ0lILE1BQUksRUFBRSxNQURWO0FBRUlDLE9BQUssRUFBRSxNQUZYO0FBR0lDLE1BQUksRUFBRSxPQUhWO0FBSUlDLFNBQU8sRUFBRTtBQUpiLENBUGUsRUFhZjtBQUNJSCxNQUFJLEVBQUUsVUFEVjtBQUVJQyxPQUFLLEVBQUUsVUFGWDtBQUdJQyxNQUFJLEVBQUUsV0FIVjtBQUlJQyxTQUFPLEVBQUU7QUFKYixDQWJlLEVBbUJmO0FBQ0lILE1BQUksRUFBRSxTQURWO0FBRUlDLE9BQUssRUFBRSxTQUZYO0FBR0lDLE1BQUksRUFBRSxVQUhWO0FBSUlDLFNBQU8sRUFBRTtBQUpiLENBbkJlLENBQW5CO0FBMkJPLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxzQkFDbEIscUVBQUMsa0RBQUQ7QUFDSSxhQUFTLE1BRGI7QUFFSSxXQUFPLEVBQUMsTUFGWjtBQUdJLGtCQUFjLEVBQUMsVUFIbkI7QUFJSSxZQUFRLEVBQUMsTUFKYjtBQUtJLFdBQU8sRUFBRSxDQUxiO0FBQUEsY0FRS04sVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsMEJBQ1oscUVBQUMsa0RBQUQ7QUFBYyxZQUFJLE1BQWxCO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUVELElBQUksQ0FBQ0wsSUFBckI7QUFBQSxpQ0FDSSxxRUFBQyxvREFBRDtBQUNJLG1CQUFPLEVBQUVLLElBQUksQ0FBQ0osT0FEbEI7QUFFSSxnQkFBSSxFQUFFSSxJQUFJLENBQUNMLElBRmY7QUFBQSxzQkFJS0ssSUFBSSxDQUFDTjtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBV08sQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFmO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQWY7S0FBTUosTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYmRjZmVlM2FiMDcxNDNlZjAzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBHcmlkICB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbmF2YmFySW5mbyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnaG9tZScsXHJcbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXHJcbiAgICAgICAgbGluazogJy8nLFxyXG4gICAgICAgIHZhcmlhbnQ6ICd0ZXh0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnYmxvZycsXHJcbiAgICAgICAgdGl0bGU6ICdCbG9nJyxcclxuICAgICAgICBsaW5rOiAnL2Jsb2cnLFxyXG4gICAgICAgIHZhcmlhbnQ6ICd0ZXh0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAncHJvamVjdHMnLFxyXG4gICAgICAgIHRpdGxlOiAnUHJvamVjdHMnLFxyXG4gICAgICAgIGxpbms6ICcvcHJvamVjdHMnLFxyXG4gICAgICAgIHZhcmlhbnQ6ICd0ZXh0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY29udGFjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdDb250YWN0JyxcclxuICAgICAgICBsaW5rOiAnL2NvbnRhY3QnLFxyXG4gICAgICAgIHZhcmlhbnQ6ICdjb250YWluZWQnXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcclxuICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxyXG4gICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAge25hdmJhckluZm8ubWFwKChpbmZvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGtleT17aX0gaXRlbT5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtpbmZvLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17aW5mby52YXJpYW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpbmZvLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5mby50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApKX1cclxuICAgIDwvR3JpZD5cclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==