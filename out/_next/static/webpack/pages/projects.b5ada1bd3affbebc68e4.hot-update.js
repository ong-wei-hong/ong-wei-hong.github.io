webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/pages/projects/index.js":
/*!*************************************!*\
  !*** ./src/pages/projects/index.js ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main-layout */ "./src/components/main-layout.js");
/* harmony import */ var _components_shared_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/navbar */ "./src/components/shared/navbar.js");
/* harmony import */ var _components_shared_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/project */ "./src/components/shared/project.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Ong Wei Hong\\Documents\\personal-website\\src\\pages\\projects\\index.js";





var __N_SSG = true;
function Projects(_ref) {
  var _this = this;

  var projects = _ref.projects;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_main_layout__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["CardContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_shared_navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
          spacing: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
            variant: "h4",
            sx: {
              fontWeight: 'bold'
            },
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Divider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
            spacing: 6,
            paddingTop: 3,
            children: projects && projects.reverse().map(function (proj, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_shared_project__WEBPACK_IMPORTED_MODULE_3__["Project"], {
                name: proj.name,
                desc: proj.desc,
                endline: proj.endline,
                demoLink: proj.demoLink,
                sourceLink: proj.sourceLink,
                imageLink: proj.imageLink,
                imageHeight: proj.imageHeight,
                imageWidth: proj.imageWidth,
                date: proj.date
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
_c = Projects;

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2plY3RzIiwicHJvamVjdHMiLCJmb250V2VpZ2h0IiwicmV2ZXJzZSIsIm1hcCIsInByb2oiLCJpIiwibmFtZSIsImRlc2MiLCJlbmRsaW5lIiwiZGVtb0xpbmsiLCJzb3VyY2VMaW5rIiwiaW1hZ2VMaW5rIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZVdpZHRoIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcUJlLFNBQVNBLFFBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDM0Msc0JBQ0kscUVBQUMsa0VBQUQ7QUFBQSwyQkFDSSxxRUFBQyxrREFBRDtBQUFBLDZCQUNJLHFFQUFDLHlEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLG1EQUFEO0FBQU8saUJBQU8sRUFBRSxDQUFoQjtBQUFBLGtDQUNJLHFFQUFDLHdEQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUF5QixjQUFFLEVBQUU7QUFBRUMsd0JBQVUsRUFBRTtBQUFkLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUkscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJLHFFQUFDLG1EQUFEO0FBQU8sbUJBQU8sRUFBRSxDQUFoQjtBQUFtQixzQkFBVSxFQUFFLENBQS9CO0FBQUEsc0JBQ01ELFFBQVEsSUFBSUEsUUFBUSxDQUFDRSxPQUFULEdBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxrQ0FDakMscUVBQUMsa0VBQUQ7QUFFSSxvQkFBSSxFQUFFRCxJQUFJLENBQUNFLElBRmY7QUFHSSxvQkFBSSxFQUFFRixJQUFJLENBQUNHLElBSGY7QUFJSSx1QkFBTyxFQUFFSCxJQUFJLENBQUNJLE9BSmxCO0FBS0ksd0JBQVEsRUFBRUosSUFBSSxDQUFDSyxRQUxuQjtBQU1JLDBCQUFVLEVBQUVMLElBQUksQ0FBQ00sVUFOckI7QUFPSSx5QkFBUyxFQUFFTixJQUFJLENBQUNPLFNBUHBCO0FBUUksMkJBQVcsRUFBRVAsSUFBSSxDQUFDUSxXQVJ0QjtBQVNJLDBCQUFVLEVBQUVSLElBQUksQ0FBQ1MsVUFUckI7QUFVSSxvQkFBSSxFQUFFVCxJQUFJLENBQUNVO0FBVmYsaUJBQ1NULENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEaUM7QUFBQSxhQUF2QjtBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIO0tBaEN1Qk4sUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5iNWFkYTFiZDNhZmZiZWJjNjhlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIERpdmlkZXIsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWFpbkxheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21haW4tbGF5b3V0XCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGdldEFsbFByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2FwaS9maXJlYmFzZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdXHJcblxyXG4gICAgYXdhaXQgZ2V0QWxsUHJvamVjdHMoKS50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICBpZihzbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0cyA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhIGF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHByb2plY3RzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyh7IHByb2plY3RzIH0pIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0gcGFkZGluZ1RvcD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2plY3RzICYmIHByb2plY3RzLnJldmVyc2UoKS5tYXAoKHByb2osIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2oubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17cHJvai5kZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRsaW5lPXtwcm9qLmVuZGxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbW9MaW5rPXtwcm9qLmRlbW9MaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VMaW5rPXtwcm9qLnNvdXJjZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTGluaz17cHJvai5pbWFnZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0PXtwcm9qLmltYWdlSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVdpZHRoPXtwcm9qLmltYWdlV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3Byb2ouZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=