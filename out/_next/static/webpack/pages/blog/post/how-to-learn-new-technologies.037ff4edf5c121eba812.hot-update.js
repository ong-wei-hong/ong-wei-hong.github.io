webpackHotUpdate_N_E("pages/blog/post/how-to-learn-new-technologies",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-layout */ "./src/components/main-layout.js");
/* harmony import */ var _shared_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/navbar */ "./src/components/shared/navbar.js");
/* harmony import */ var _shared_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/contact */ "./src/components/shared/contact.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Ong Wei Hong\\Documents\\personal-website\\src\\components\\blog-layout.js",
    _this = undefined;







var BlogLayout = function BlogLayout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      date = _ref.date,
      prevPost = _ref.prevPost,
      nextPost = _ref.nextPost;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_main_layout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
      spacing: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_shared_navbar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
            container: true,
            direction: "column",
            spacing: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
              item: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "h3",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "subtitle1",
                sx: {
                  fontStyle: 'italic'
                },
                children: "".concat(date, " by ONG WEI HONG")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
              item: true,
              children: children
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
              item: true,
              container: true,
              justifyContent: "space-between",
              flexWrap: "wrap",
              children: [prevPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                item: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: prevPost.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Link"], {
                    children: prevPost.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 42
              }, _this), nextPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                item: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: '/blog/post/' + nextPost.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Link"], {
                    children: nextPost.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 42
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            variant: "h4",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_shared_contact__WEBPACK_IMPORTED_MODULE_4__["Contact"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZy1sYXlvdXQuanMiXSwibmFtZXMiOlsiQmxvZ0xheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJkYXRlIiwicHJldlBvc3QiLCJuZXh0UG9zdCIsImZvbnRTdHlsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLE1BQW9CQyxJQUFwQixRQUFvQkEsSUFBcEI7QUFBQSxNQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsTUFBb0NDLFFBQXBDLFFBQW9DQSxRQUFwQztBQUFBLHNCQUN0QixxRUFBQyx1REFBRDtBQUFBLDJCQUNJLHFFQUFDLG1EQUFEO0FBQU8sYUFBTyxFQUFFLENBQWhCO0FBQUEsOEJBQ0kscUVBQUMsa0RBQUQ7QUFBQSwrQkFDSSxxRUFBQyx5REFBRDtBQUFBLGtDQUNJLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSxxRUFBQyxrREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBZ0IscUJBQVMsRUFBQyxRQUExQjtBQUFtQyxtQkFBTyxFQUFFLENBQTVDO0FBQUEsb0NBQ0kscUVBQUMsa0RBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQUEsc0NBQ0kscUVBQUMsd0RBQUQ7QUFBWSx1QkFBTyxFQUFDLElBQXBCO0FBQUEsMEJBQ01IO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJLHFFQUFDLHdEQUFEO0FBQVksdUJBQU8sRUFBQyxXQUFwQjtBQUFnQyxrQkFBRSxFQUFFO0FBQUVJLDJCQUFTLEVBQUU7QUFBYixpQkFBcEM7QUFBQSxvQ0FDU0gsSUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBU0kscUVBQUMsa0RBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQUEsd0JBQ01GO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSixlQVlJLHFFQUFDLGtEQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLHVCQUFTLE1BQXBCO0FBQXFCLDRCQUFjLEVBQUMsZUFBcEM7QUFBb0Qsc0JBQVEsRUFBQyxNQUE3RDtBQUFBLHlCQUNLRyxRQUFRLGlCQUFJLHFFQUFDLGtEQUFEO0FBQU0sb0JBQUksTUFBVjtBQUFBLHVDQUNULHFFQUFDLGdEQUFEO0FBQVUsc0JBQUksRUFBRUEsUUFBUSxDQUFDRyxJQUF6QjtBQUFBLHlDQUNJLHFFQUFDLGtEQUFEO0FBQUEsOEJBQ0tILFFBQVEsQ0FBQ0Y7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURTO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGpCLEVBUUtHLFFBQVEsaUJBQUkscUVBQUMsa0RBQUQ7QUFBTSxvQkFBSSxNQUFWO0FBQUEsdUNBQ1QscUVBQUMsZ0RBQUQ7QUFBVSxzQkFBSSxFQUFFLGdCQUFnQkEsUUFBUSxDQUFDRSxJQUF6QztBQUFBLHlDQUNJLHFFQUFDLGtEQUFEO0FBQUEsOEJBQ0tGLFFBQVEsQ0FBQ0g7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURTO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBbUNJLHFFQUFDLGtEQUFEO0FBQUEsK0JBQ0kscUVBQUMseURBQUQ7QUFBQSxrQ0FDSSxxRUFBQyx3REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURzQjtBQUFBLENBQW5CO0tBQU1GLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9wb3N0L2hvdy10by1sZWFybi1uZXctdGVjaG5vbG9naWVzLjAzN2ZmNGVkZjVjMTIxZWJhODEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgR3JpZCwgVHlwb2dyYXBoeSwgU3RhY2ssIExpbmsgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tIFwiLi9tYWluLWxheW91dFwiO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL3NoYXJlZC9uYXZiYXInO1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9zaGFyZWQvY29udGFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ0xheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZGF0ZSwgcHJldlBvc3QsIG5leHRQb3N0IH0pID0+IChcclxuICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN4PXt7IGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBgJHtkYXRlfSBieSBPTkcgV0VJIEhPTkdgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgZmxleFdyYXA9J3dyYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXZQb3N0ICYmIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9e3ByZXZQb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmV2UG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25leHRQb3N0ICYmIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9eycvYmxvZy9wb3N0LycgKyBuZXh0UG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV4dFBvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICA8L01haW5MYXlvdXQ+XHJcbikiXSwic291cmNlUm9vdCI6IiJ9