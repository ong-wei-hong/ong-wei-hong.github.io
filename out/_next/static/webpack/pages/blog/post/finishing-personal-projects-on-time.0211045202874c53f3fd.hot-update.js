webpackHotUpdate_N_E("pages/blog/post/finishing-personal-projects-on-time",{

/***/ "./src/components/blog-layout.js":
/*!***************************************!*\
  !*** ./src/components/blog-layout.js ***!
  \***************************************/
/*! exports provided: BlogLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLayout", function() { return BlogLayout; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _main_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-layout */ "./src/components/main-layout.js");
/* harmony import */ var _shared_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar */ "./src/components/shared/navbar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Ong Wei Hong\\Documents\\personal-website\\src\\components\\blog-layout.js",
    _this = undefined;





var BlogLayout = function BlogLayout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      date = _ref.date;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_main_layout__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_shared_navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
          container: true,
          direction: "column",
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
            item: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "h3",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
              variant: "subtitle1",
              sx: {
                fontStyle: 'italic'
              },
              children: "".concat(date, " by ONG WEI HONG")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
            item: true,
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};
_c = BlogLayout;

var _c;

$RefreshReg$(_c, "BlogLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZy1sYXlvdXQuanMiXSwibmFtZXMiOlsiQmxvZ0xheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJkYXRlIiwiZm9udFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLE1BQW9CQyxJQUFwQixRQUFvQkEsSUFBcEI7QUFBQSxzQkFDdEIscUVBQUMsdURBQUQ7QUFBQSwyQkFDUSxxRUFBQyxrREFBRDtBQUFBLDZCQUNJLHFFQUFDLHlEQUFEO0FBQUEsZ0NBQ0kscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLGtEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFnQixtQkFBUyxFQUFDLFFBQTFCO0FBQW1DLGlCQUFPLEVBQUUsQ0FBNUM7QUFBQSxrQ0FDSSxxRUFBQyxrREFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBQSxvQ0FDSSxxRUFBQyx3REFBRDtBQUFZLHFCQUFPLEVBQUMsSUFBcEI7QUFBQSx3QkFDTUQ7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUkscUVBQUMsd0RBQUQ7QUFBWSxxQkFBTyxFQUFDLFdBQXBCO0FBQWdDLGdCQUFFLEVBQUU7QUFBRUUseUJBQVMsRUFBRTtBQUFiLGVBQXBDO0FBQUEsa0NBQ1NELElBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVNJLHFFQUFDLGtEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFBLHNCQUNNRjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHNCO0FBQUEsQ0FBbkI7S0FBTUQsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL3Bvc3QvZmluaXNoaW5nLXBlcnNvbmFsLXByb2plY3RzLW9uLXRpbWUuMDIxMTA0NTIwMjg3NGM1M2YzZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tIFwiLi9tYWluLWxheW91dFwiO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL3NoYXJlZC9uYXZiYXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRhdGUgfSkgPT4gKFxyXG4gICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYCR7ZGF0ZX0gYnkgT05HIFdFSSBIT05HYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==