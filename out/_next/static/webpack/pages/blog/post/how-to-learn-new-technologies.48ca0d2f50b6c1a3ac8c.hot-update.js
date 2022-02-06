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
/* harmony import */ var _main_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-layout */ "./src/components/main-layout.js");
/* harmony import */ var _shared_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar */ "./src/components/shared/navbar.js");
/* harmony import */ var _shared_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/contact */ "./src/components/shared/contact.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Ong Wei Hong\\Documents\\personal-website\\src\\components\\blog-layout.js",
    _this = undefined;






var BlogLayout = function BlogLayout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      date = _ref.date,
      prevPost = _ref.prevPost,
      nextPost = _ref.nextPost;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_main_layout__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
      spacing: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_shared_navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
            container: true,
            direction: "column",
            spacing: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
              item: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "h3",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                variant: "subtitle1",
                sx: {
                  fontStyle: 'italic'
                },
                children: "".concat(date, " by ONG WEI HONG")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
              item: true,
              children: children
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
              item: true,
              container: true,
              justifyContent: "space-between",
              flexWrap: "wrap",
              children: [prevPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                item: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NextLink, {
                  href: prevPost.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Link"], {
                    children: prevPost.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 42
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                item: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            variant: "h4",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_shared_contact__WEBPACK_IMPORTED_MODULE_3__["Contact"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZy1sYXlvdXQuanMiXSwibmFtZXMiOlsiQmxvZ0xheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJkYXRlIiwicHJldlBvc3QiLCJuZXh0UG9zdCIsImZvbnRTdHlsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsS0FBYixRQUFhQSxLQUFiO0FBQUEsTUFBb0JDLElBQXBCLFFBQW9CQSxJQUFwQjtBQUFBLE1BQTBCQyxRQUExQixRQUEwQkEsUUFBMUI7QUFBQSxNQUFvQ0MsUUFBcEMsUUFBb0NBLFFBQXBDO0FBQUEsc0JBQ3RCLHFFQUFDLHVEQUFEO0FBQUEsMkJBQ0kscUVBQUMsbURBQUQ7QUFBTyxhQUFPLEVBQUUsQ0FBaEI7QUFBQSw4QkFDSSxxRUFBQyxrREFBRDtBQUFBLCtCQUNJLHFFQUFDLHlEQUFEO0FBQUEsa0NBQ0kscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLGtEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFnQixxQkFBUyxFQUFDLFFBQTFCO0FBQW1DLG1CQUFPLEVBQUUsQ0FBNUM7QUFBQSxvQ0FDSSxxRUFBQyxrREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBQSxzQ0FDSSxxRUFBQyx3REFBRDtBQUFZLHVCQUFPLEVBQUMsSUFBcEI7QUFBQSwwQkFDTUg7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUkscUVBQUMsd0RBQUQ7QUFBWSx1QkFBTyxFQUFDLFdBQXBCO0FBQWdDLGtCQUFFLEVBQUU7QUFBRUksMkJBQVMsRUFBRTtBQUFiLGlCQUFwQztBQUFBLG9DQUNTSCxJQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFTSSxxRUFBQyxrREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBQSx3QkFDTUY7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLGVBWUkscUVBQUMsa0RBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsdUJBQVMsTUFBcEI7QUFBcUIsNEJBQWMsRUFBQyxlQUFwQztBQUFvRCxzQkFBUSxFQUFDLE1BQTdEO0FBQUEseUJBQ0tHLFFBQVEsaUJBQUkscUVBQUMsa0RBQUQ7QUFBTSxvQkFBSSxNQUFWO0FBQUEsdUNBQ1QscUVBQUMsUUFBRDtBQUFVLHNCQUFJLEVBQUVBLFFBQVEsQ0FBQ0csSUFBekI7QUFBQSx5Q0FDSSxxRUFBQyxrREFBRDtBQUFBLDhCQUNLSCxRQUFRLENBQUNGO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURqQixlQVFJLHFFQUFDLGtEQUFEO0FBQU0sb0JBQUk7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBK0JJLHFFQUFDLGtEQUFEO0FBQUEsK0JBQ0kscUVBQUMseURBQUQ7QUFBQSxrQ0FDSSxxRUFBQyx3REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURzQjtBQUFBLENBQW5CO0tBQU1GLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9wb3N0L2hvdy10by1sZWFybi1uZXctdGVjaG5vbG9naWVzLjQ4Y2EwZDJmNTBiNmMxYTNhYzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgR3JpZCwgVHlwb2dyYXBoeSwgU3RhY2ssIExpbmsgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTWFpbkxheW91dCB9IGZyb20gXCIuL21haW4tbGF5b3V0XCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4vc2hhcmVkL25hdmJhcic7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL3NoYXJlZC9jb250YWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRhdGUsIHByZXZQb3N0LCBuZXh0UG9zdCB9KSA9PiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYCR7ZGF0ZX0gYnkgT05HIFdFSSBIT05HYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGZsZXhXcmFwPSd3cmFwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmV2UG9zdCAmJiA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtwcmV2UG9zdC5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJldlBvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==