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
                          sx: {
                            color: 'grey'
                          },
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
                children: nextPost && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                  marginRight: 0,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    href: nextPost.link,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Link"], {
                      underline: "hover",
                      color: "black",
                      children: nextPost.title
                    }, void 0, false, {
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
            lineNumber: 60,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_shared_contact__WEBPACK_IMPORTED_MODULE_4__["Contact"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZy1sYXlvdXQuanMiXSwibmFtZXMiOlsiQmxvZ0xheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJkYXRlIiwicHJldlBvc3QiLCJuZXh0UG9zdCIsImZvbnRTdHlsZSIsImxpbmsiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsS0FBYixRQUFhQSxLQUFiO0FBQUEsTUFBb0JDLElBQXBCLFFBQW9CQSxJQUFwQjtBQUFBLE1BQTBCQyxRQUExQixRQUEwQkEsUUFBMUI7QUFBQSxNQUFvQ0MsUUFBcEMsUUFBb0NBLFFBQXBDO0FBQUEsc0JBQ3RCLHFFQUFDLHVEQUFEO0FBQUEsMkJBQ0kscUVBQUMsbURBQUQ7QUFBTyxhQUFPLEVBQUUsQ0FBaEI7QUFBQSw4QkFDSSxxRUFBQyxrREFBRDtBQUFBLCtCQUNJLHFFQUFDLHlEQUFEO0FBQUEsa0NBQ0kscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLGtEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFnQixxQkFBUyxFQUFDLFFBQTFCO0FBQW1DLG1CQUFPLEVBQUUsQ0FBNUM7QUFBQSxvQ0FDSSxxRUFBQyxrREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBQSxzQ0FDSSxxRUFBQyx3REFBRDtBQUFZLHVCQUFPLEVBQUMsSUFBcEI7QUFBQSwwQkFDTUg7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUkscUVBQUMsd0RBQUQ7QUFBWSx1QkFBTyxFQUFDLFdBQXBCO0FBQWdDLGtCQUFFLEVBQUU7QUFBRUksMkJBQVMsRUFBRTtBQUFiLGlCQUFwQztBQUFBLG9DQUNTSCxJQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFTSSxxRUFBQyxrREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBQSx3QkFDTUY7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLGVBWUkscUVBQUMsa0RBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQUEscUNBQ0kscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkosZUFlSSxxRUFBQyxrREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyx1QkFBUyxNQUFwQjtBQUFxQiw0QkFBYyxFQUFDLGVBQXBDO0FBQUEsc0NBQ0kscUVBQUMsa0RBQUQ7QUFBTSxvQkFBSSxNQUFWO0FBQUEsMEJBQ0tHLFFBQVEsaUJBQUkscUVBQUMsZ0RBQUQ7QUFBVSxzQkFBSSxFQUFFQSxRQUFRLENBQUNHLElBQXpCO0FBQUEseUNBQ1QscUVBQUMsa0RBQUQ7QUFBTSw2QkFBUyxFQUFDLE9BQWhCO0FBQXdCLHlCQUFLLEVBQUMsT0FBOUI7QUFBQSwyQ0FDSSxxRUFBQyxrREFBRDtBQUFNLGdDQUFVLEVBQUUsQ0FBbEI7QUFBQSw4Q0FDSSxxRUFBQyxrREFBRDtBQUFBLCtDQUNJLHFFQUFDLHdEQUFEO0FBQVksaUNBQU8sRUFBQyxXQUFwQjtBQUFnQyw0QkFBRSxFQUFFO0FBQUVDLGlDQUFLLEVBQUU7QUFBVCwyQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBTUkscUVBQUMsa0RBQUQ7QUFBQSxrQ0FDTUosUUFBUSxDQUFDRjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQWlCSSxxRUFBQyxrREFBRDtBQUFNLG9CQUFJLE1BQVY7QUFBQSwwQkFDS0csUUFBUSxpQkFBSSxxRUFBQyxrREFBRDtBQUFNLDZCQUFXLEVBQUUsQ0FBbkI7QUFBQSx5Q0FDVCxxRUFBQyxnREFBRDtBQUFVLHdCQUFJLEVBQUVBLFFBQVEsQ0FBQ0UsSUFBekI7QUFBQSwyQ0FDSSxxRUFBQyxrREFBRDtBQUFNLCtCQUFTLEVBQUMsT0FBaEI7QUFBd0IsMkJBQUssRUFBQyxPQUE5QjtBQUFBLGdDQUNLRixRQUFRLENBQUNIO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBaURJLHFFQUFDLGtEQUFEO0FBQUEsK0JBQ0kscUVBQUMseURBQUQ7QUFBQSxrQ0FDSSxxRUFBQyx3REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURzQjtBQUFBLENBQW5CO0tBQU1GLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9wb3N0L2ZpbmlzaGluZy1wZXJzb25hbC1wcm9qZWN0cy1vbi10aW1lLjYwNjAzYTY3YjFkNDBmNDFiZTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgR3JpZCwgVHlwb2dyYXBoeSwgU3RhY2ssIExpbmssIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tIFwiLi9tYWluLWxheW91dFwiO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL3NoYXJlZC9uYXZiYXInO1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9zaGFyZWQvY29udGFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ0xheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZGF0ZSwgcHJldlBvc3QsIG5leHRQb3N0IH0pID0+IChcclxuICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXs1fT5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN4PXt7IGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBgJHtkYXRlfSBieSBPTkcgV0VJIEhPTkdgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmV2UG9zdCAmJiA8TmV4dExpbmsgaHJlZj17cHJldlBvc3QubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHVuZGVybGluZT1cImhvdmVyXCIgY29sb3I9XCJibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgbWFyZ2luTGVmdD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzeD17eyBjb2xvcjogJ2dyZXknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQUkVWSU9VUyBQT1NUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByZXZQb3N0LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25leHRQb3N0ICYmIDxHcmlkIG1hcmdpblJpZ2h0PXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9e25leHRQb3N0Lmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdW5kZXJsaW5lPVwiaG92ZXJcIiBjb2xvcj1cImJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25leHRQb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG4pIl0sInNvdXJjZVJvb3QiOiIifQ==