webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog/index.js":
/*!*********************************!*\
  !*** ./src/pages/blog/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main-layout */ "./src/components/main-layout.js");
/* harmony import */ var _components_shared_blog_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/blog-snippet */ "./src/components/shared/blog-snippet.js");
/* harmony import */ var _components_shared_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/navbar */ "./src/components/shared/navbar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Ong Wei Hong\\Documents\\personal-website\\src\\pages\\blog\\index.js";





var __N_SSG = true;
function Blog(_ref) {
  var _this = this;

  var posts = _ref.posts;
  var postLength = posts.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_main_layout__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_shared_navbar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
          spacing: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            variant: "h4",
            sx: {
              fontWeight: 'bold'
            },
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Divider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
            spacing: 3,
            paddingTop: 3,
            children: posts && posts.map(function (_info, i) {
              var info = posts[postLength - i - 1];
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_shared_blog_snippet__WEBPACK_IMPORTED_MODULE_2__["BlogSnippet"], {
                title: info.title,
                date: info.date,
                snippet: info.snippet,
                link: info.link
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}
_c = Blog;

var _c;

$RefreshReg$(_c, "Blog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZyIsInBvc3RzIiwicG9zdExlbmd0aCIsImxlbmd0aCIsImZvbnRXZWlnaHQiLCJtYXAiLCJfaW5mbyIsImkiLCJpbmZvIiwidGl0bGUiLCJkYXRlIiwic25pcHBldCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQXFCZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3BDLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxNQUF6QjtBQUVBLHNCQUNJLHFFQUFDLGtFQUFEO0FBQUEsMkJBQ0kscUVBQUMsa0RBQUQ7QUFBQSw2QkFDSSxxRUFBQyx5REFBRDtBQUFBLGdDQUNJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyxtREFBRDtBQUFPLGlCQUFPLEVBQUUsQ0FBaEI7QUFBQSxrQ0FDSSxxRUFBQyx3REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBeUIsY0FBRSxFQUFFO0FBQUVDLHdCQUFVLEVBQUU7QUFBZCxhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSSxxRUFBQyxtREFBRDtBQUFPLG1CQUFPLEVBQUUsQ0FBaEI7QUFBbUIsc0JBQVUsRUFBRSxDQUEvQjtBQUFBLHNCQUNNSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQy9CLGtCQUFNQyxJQUFJLEdBQUdQLEtBQUssQ0FBQ0MsVUFBVSxHQUFHSyxDQUFiLEdBQWlCLENBQWxCLENBQWxCO0FBQ0Esa0NBQ0kscUVBQUMsMkVBQUQ7QUFFSSxxQkFBSyxFQUFFQyxJQUFJLENBQUNDLEtBRmhCO0FBR0ksb0JBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUhmO0FBSUksdUJBQU8sRUFBRUYsSUFBSSxDQUFDRyxPQUpsQjtBQUtJLG9CQUFJLEVBQUVILElBQUksQ0FBQ0k7QUFMZixpQkFDU0wsQ0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBU0gsYUFYVTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Qkg7S0FoQ3VCUCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZTE0MThiNjM5NWNmNDRiYzE1MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5LCBEaXZpZGVyLCBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tYWluLWxheW91dFwiO1xyXG5pbXBvcnQgeyBCbG9nU25pcHBldCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9ibG9nLXNuaXBwZXRcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhclwiO1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi8uLi9hcGkvZmlyZWJhc2VcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBsZXQgcG9zdHMgPSBbXVxyXG5cclxuICAgIGF3YWl0IGdldEFsbFBvc3RzKCkudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgaWYoc25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgICAgICAgICAgcG9zdHMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YSBhdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IHBvc3RzIH0pIHtcclxuICAgIGNvbnN0IHBvc3RMZW5ndGggPSBwb3N0cy5sZW5ndGg7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXszfSBwYWRkaW5nVG9wPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcG9zdHMgJiYgcG9zdHMubWFwKChfaW5mbywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBwb3N0c1twb3N0TGVuZ3RoIC0gaSAtIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2dTbmlwcGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW5mby50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2luZm8uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNuaXBwZXQ9e2luZm8uc25pcHBldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e2luZm8ubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==