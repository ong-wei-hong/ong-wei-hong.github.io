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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Divider"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
              item: true,
              container: true,
              justifyContent: "space-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                item: true,
                children: prevPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: prevPost.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Link"], {
                    underline: "hover",
                    color: "black",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                      marginLeft: 0,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                          variant: "subtitle1",
                          fontSize: "0.7rem",
                          children: "PREVIOUS POST:"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                          columnNumber: 49
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                        children: prevPost.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 46
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                item: true,
                children: nextPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: nextPost.link,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Link"], {
                    underline: "hover",
                    color: "black",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                      marginRight: 0,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
                          variant: "subtitle1",
                          fontSize: "0.7rem",
                          children: "PREVIOUS POST:"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 50,
                          columnNumber: 49
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                        children: nextPost.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 46
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
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
            lineNumber: 67,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_shared_contact__WEBPACK_IMPORTED_MODULE_4__["Contact"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZy1sYXlvdXQuanMiXSwibmFtZXMiOlsiQmxvZ0xheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJkYXRlIiwicHJldlBvc3QiLCJuZXh0UG9zdCIsImZvbnRTdHlsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLE1BQW9CQyxJQUFwQixRQUFvQkEsSUFBcEI7QUFBQSxNQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsTUFBb0NDLFFBQXBDLFFBQW9DQSxRQUFwQztBQUFBLHNCQUN0QixxRUFBQyx1REFBRDtBQUFBLDJCQUNJLHFFQUFDLG1EQUFEO0FBQU8sYUFBTyxFQUFFLENBQWhCO0FBQUEsOEJBQ0kscUVBQUMsa0RBQUQ7QUFBQSwrQkFDSSxxRUFBQyx5REFBRDtBQUFBLGtDQUNJLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSxxRUFBQyxrREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBZ0IscUJBQVMsRUFBQyxRQUExQjtBQUFtQyxtQkFBTyxFQUFFLENBQTVDO0FBQUEsb0NBQ0kscUVBQUMsa0RBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQUEsc0NBQ0kscUVBQUMsd0RBQUQ7QUFBWSx1QkFBTyxFQUFDLElBQXBCO0FBQUEsMEJBQ01IO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJLHFFQUFDLHdEQUFEO0FBQVksdUJBQU8sRUFBQyxXQUFwQjtBQUFnQyxrQkFBRSxFQUFFO0FBQUVJLDJCQUFTLEVBQUU7QUFBYixpQkFBcEM7QUFBQSxvQ0FDU0gsSUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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RixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvcG9zdC9maW5pc2hpbmctcGVyc29uYWwtcHJvamVjdHMtb24tdGltZS4yNjAxZGM0OWU3YmVkM2ZlMTk1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIEdyaWQsIFR5cG9ncmFwaHksIFN0YWNrLCBMaW5rLCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSBcIi4vbWFpbi1sYXlvdXRcIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnLi9zaGFyZWQvbmF2YmFyJztcclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4vc2hhcmVkL2NvbnRhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJsb2dMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGRhdGUsIHByZXZQb3N0LCBuZXh0UG9zdCB9KSA9PiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NX0+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYCR7ZGF0ZX0gYnkgT05HIFdFSSBIT05HYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJldlBvc3QgJiYgPE5leHRMaW5rIGhyZWY9e3ByZXZQb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB1bmRlcmxpbmU9XCJob3ZlclwiIGNvbG9yPVwiYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIG1hcmdpbkxlZnQ9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgZm9udFNpemU9XCIwLjdyZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBSRVZJT1VTIFBPU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJldlBvc3QudGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV4dFBvc3QgJiYgPE5leHRMaW5rIGhyZWY9e25leHRQb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB1bmRlcmxpbmU9XCJob3ZlclwiIGNvbG9yPVwiYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIG1hcmdpblJpZ2h0PXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGZvbnRTaXplPVwiMC43cmVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQUkVWSU9VUyBQT1NUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5leHRQb3N0LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICA8L01haW5MYXlvdXQ+XHJcbikiXSwic291cmNlUm9vdCI6IiJ9