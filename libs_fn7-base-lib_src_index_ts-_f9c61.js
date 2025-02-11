"use strict";
exports.id = "libs_fn7-base-lib_src_index_ts-_f9c61";
exports.ids = ["libs_fn7-base-lib_src_index_ts-_f9c61"];
exports.modules = {

/***/ 13247:
/*!****************************************!*\
  !*** ./libs/fn7-base-lib/src/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONTEXT: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.APP_CONTEXT; },
/* harmony export */   AppInfoService: function() { return /* reexport safe */ _lib_services_app_info_service__WEBPACK_IMPORTED_MODULE_2__.AppInfoService; },
/* harmony export */   AuthenticationService: function() { return /* reexport safe */ _lib_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService; },
/* harmony export */   DataService: function() { return /* reexport safe */ _lib_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService; },
/* harmony export */   FIREBASE_CUSTOM_TOKEN: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.FIREBASE_CUSTOM_TOKEN; },
/* harmony export */   FIREBASE_CUSTOM_TOKEN_EXPIRY: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.FIREBASE_CUSTOM_TOKEN_EXPIRY; },
/* harmony export */   Fn7BaseLibModule: function() { return /* reexport safe */ _lib_fn7_base_lib_module__WEBPACK_IMPORTED_MODULE_0__.Fn7BaseLibModule; },
/* harmony export */   GlobalService: function() { return /* reexport safe */ _lib_services_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService; },
/* harmony export */   LoaderComponent: function() { return /* reexport safe */ _lib_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent; },
/* harmony export */   ORG_HKEY: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.ORG_HKEY; },
/* harmony export */   ORG_ROLE: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.ORG_ROLE; },
/* harmony export */   PLATFORM_VERSION: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_VERSION; },
/* harmony export */   PlatformConstants: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.PlatformConstants; },
/* harmony export */   SnackbarService: function() { return /* reexport safe */ _lib_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService; },
/* harmony export */   USER_ROLE: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.USER_ROLE; },
/* harmony export */   helixAppId: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.helixAppId; },
/* harmony export */   helixJourney: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.helixJourney; },
/* harmony export */   userFn7HelixApplications: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.userFn7HelixApplications; },
/* harmony export */   userHelixJourney: function() { return /* reexport safe */ _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__.userHelixJourney; }
/* harmony export */ });
/* harmony import */ var _lib_fn7_base_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fn7-base-lib.module */ 47616);
/* harmony import */ var _lib_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/loader/loader.component */ 28513);
/* harmony import */ var _lib_services_app_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/app-info.service */ 72797);
/* harmony import */ var _lib_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/authentication.service */ 89967);
/* harmony import */ var _lib_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/data.service */ 68499);
/* harmony import */ var _lib_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services/global.service */ 93112);
/* harmony import */ var _lib_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/snackbar.service */ 50392);
/* harmony import */ var _lib_PlatformConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/PlatformConstants */ 25575);









/***/ }),

/***/ 25575:
/*!********************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/PlatformConstants.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONTEXT: function() { return /* binding */ APP_CONTEXT; },
/* harmony export */   FIREBASE_CUSTOM_TOKEN: function() { return /* binding */ FIREBASE_CUSTOM_TOKEN; },
/* harmony export */   FIREBASE_CUSTOM_TOKEN_EXPIRY: function() { return /* binding */ FIREBASE_CUSTOM_TOKEN_EXPIRY; },
/* harmony export */   ORG_HKEY: function() { return /* binding */ ORG_HKEY; },
/* harmony export */   ORG_ROLE: function() { return /* binding */ ORG_ROLE; },
/* harmony export */   PLATFORM_VERSION: function() { return /* binding */ PLATFORM_VERSION; },
/* harmony export */   PlatformConstants: function() { return /* binding */ PlatformConstants; },
/* harmony export */   USER_ROLE: function() { return /* binding */ USER_ROLE; },
/* harmony export */   helixAppId: function() { return /* binding */ helixAppId; },
/* harmony export */   helixJourney: function() { return /* binding */ helixJourney; },
/* harmony export */   userFn7HelixApplications: function() { return /* binding */ userFn7HelixApplications; },
/* harmony export */   userHelixJourney: function() { return /* binding */ userHelixJourney; }
/* harmony export */ });
var PlatformConstants;
(function (PlatformConstants) {
  PlatformConstants["baseIndex"] = "7000000001.1000000001";
  PlatformConstants["organisation_hierarchy_key"] = "org_hkey";
  PlatformConstants["organisation_role"] = "org_role";
})(PlatformConstants || (PlatformConstants = {}));
const userFn7HelixApplications = "user_helix_applications";
const userHelixJourney = "user_helix_journey";
const helixJourney = "helix_journey";
const helixAppId = "fn7_helix_application_id";
const PLATFORM_VERSION = "platform_version";
const APP_CONTEXT = 'app_context';
const ORG_HKEY = 'org_hkey';
const ORG_ROLE = 'org_role';
const USER_ROLE = 'user_role';
const FIREBASE_CUSTOM_TOKEN = 'firebase_custom_token';
const FIREBASE_CUSTOM_TOKEN_EXPIRY = 'firebase_custom_token_expiry';

/***/ }),

/***/ 47616:
/*!**********************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/fn7-base-lib.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fn7BaseLibModule: function() { return /* binding */ Fn7BaseLibModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/global.service */ 93112);
/* harmony import */ var _services_app_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/app-info.service */ 72797);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/snackbar.service */ 50392);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 75689);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 63370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/http/http.service */ 70996);
/* harmony import */ var _services_http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http/api-prefix.interceptor */ 47515);
/* harmony import */ var _services_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/http/auth.interceptor */ 73230);
/* harmony import */ var _services_http_custom_headers_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/http/custom-headers.interceptor */ 6168);
/* harmony import */ var _services_http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/http/error-handler.interceptor */ 75335);
/* harmony import */ var _services_http_global_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/http/global.interceptor */ 9767);
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./route-reusable-strategy */ 36106);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/authentication.service */ 89967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_15__);
















class Fn7BaseLibModule {}
Fn7BaseLibModule.ɵfac = function Fn7BaseLibModule_Factory(t) {
  return new (t || Fn7BaseLibModule)();
};
Fn7BaseLibModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: Fn7BaseLibModule
});
Fn7BaseLibModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService, _services_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService, _services_app_info_service__WEBPACK_IMPORTED_MODULE_2__.AppInfoService, _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__.AuthenticationService, _services_http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_8__.ApiPrefixInterceptor, _services_http_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__.AuthInterceptor, _services_http_custom_headers_interceptor__WEBPACK_IMPORTED_MODULE_10__.CustomHeadersInterceptor, _services_http_global_interceptor__WEBPACK_IMPORTED_MODULE_12__.GlobalInterceptor, _services_http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_11__.ErrorHandlerInterceptor, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient,
    useClass: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__.HttpService
  }, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy,
    useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_13__.RouteReusableStrategy
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](Fn7BaseLibModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule],
    exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule]
  });
})();

/***/ }),

/***/ 28513:
/*!**************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/loader/loader.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: function() { return /* binding */ LoaderComponent; }
/* harmony export */ });
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/global.service */ 93112);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class LoaderComponent {
  constructor(loader) {
    this.loader = loader;
  }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_service__WEBPACK_IMPORTED_MODULE_0__.GlobalService));
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "fixed top-0 left-0 w-full z-[999]", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "z-[999]"], [1, "w-full", "h-[4px]", "rounded", "overflow-hidden"], [1, "h-full", "bg-primary-500", "animate-progress"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 3, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loader.getLoading());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".cssload-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: black;\n  z-index: 9999;\n  opacity: 0.7;\n}\n\n.cssload-speeding-wheel[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 48%;\n  top: 40%;\n  width: 83px;\n  height: 83px;\n  margin: 0 auto;\n  border: 10px solid transparent;\n  border-radius: 50%;\n  border-left-color: var(--primary-500);\n  border-right-color: var(--accent-500);\n  animation: _ngcontent-%COMP%_cssload-spin 500ms infinite linear;\n  -o-animation: cssload-spin 500ms infinite linear;\n  -ms-animation: cssload-spin 500ms infinite linear;\n  -webkit-animation: _ngcontent-%COMP%_cssload-spin 500ms infinite linear;\n  -moz-animation: cssload-spin 500ms infinite linear;\n}\n\n@keyframes _ngcontent-%COMP%_cssload-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loader[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: block;\n  margin: 15px auto;\n  position: relative;\n  color: #FFF;\n  left: -100px;\n  box-sizing: border-box;\n  animation: _ngcontent-%COMP%_shadowRolling 2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shadowRolling {\n  0% {\n    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  12% {\n    box-shadow: 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  25% {\n    box-shadow: 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);\n  }\n  36% {\n    box-shadow: 120px 0 white, 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0);\n  }\n  50% {\n    box-shadow: 130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white;\n  }\n  62% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white, 110px 0 white;\n  }\n  75% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white;\n  }\n  87% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white;\n  }\n  100% {\n    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_progress {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.animate-progress[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_progress 2s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZm43LWJhc2UtbGliL3NyYy9saWIvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0VBQ0EscURBQUE7RUFDQSxrREFBQTtBQUNKOztBQUVFO0VBQ0U7SUFFRSx5QkFBQTtFQUNKO0FBQ0Y7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7QUFKSjs7QUFPRTtFQUNFO0lBQ0Usa0lBQUE7RUFKSjtFQU9FO0lBQ0UsbUhBQUE7RUFMSjtFQVFFO0lBQ0Usb0dBQUE7RUFOSjtFQVNFO0lBQ0UscUZBQUE7RUFQSjtFQVVFO0lBQ0Usc0VBQUE7RUFSSjtFQVdFO0lBQ0UsdUZBQUE7RUFUSjtFQVlFO0lBQ0Usd0dBQUE7RUFWSjtFQWFFO0lBQ0UseUhBQUE7RUFYSjtFQWNFO0lBQ0UsMElBQUE7RUFaSjtBQUNGO0FBZUU7RUFDRTtJQUNFLDRCQUFBO0VBYko7RUFnQkU7SUFDRSwyQkFBQTtFQWRKO0FBQ0Y7QUFpQkU7RUFDRSxzQ0FBQTtBQWZKIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc2xvYWQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIFxuICAuY3NzbG9hZC1zcGVlZGluZy13aGVlbCB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDglO1xuICAgIHRvcDogNDAlO1xuICAgIHdpZHRoOiA4M3B4O1xuICAgIGhlaWdodDogODNweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS1hY2NlbnQtNTAwKTtcbiAgICBhbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIC1tcy1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBALW1zLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gICAgMTAwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgLmxvYWRlciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgbGVmdDogLTEwMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYW5pbWF0aW9uOiBzaGFkb3dSb2xsaW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzaGFkb3dSb2xsaW5nIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIH1cbiAgXG4gICAgMTIlIHtcbiAgICAgIGJveC1zaGFkb3c6IDEwMHB4IDAgd2hpdGUsIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgfVxuICBcbiAgICAyNSUge1xuICAgICAgYm94LXNoYWRvdzogMTEwcHggMCB3aGl0ZSwgMTAwcHggMCB3aGl0ZSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB9XG4gIFxuICAgIDM2JSB7XG4gICAgICBib3gtc2hhZG93OiAxMjBweCAwIHdoaXRlLCAxMTBweCAwIHdoaXRlLCAxMDBweCAwIHdoaXRlLCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIH1cbiAgXG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDEzMHB4IDAgd2hpdGUsIDEyMHB4IDAgd2hpdGUsIDExMHB4IDAgd2hpdGUsIDEwMHB4IDAgd2hpdGU7XG4gICAgfVxuICBcbiAgICA2MiUge1xuICAgICAgYm94LXNoYWRvdzogMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwIHdoaXRlLCAxMjBweCAwIHdoaXRlLCAxMTBweCAwIHdoaXRlO1xuICAgIH1cbiAgXG4gICAgNzUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAxMzBweCAwIHdoaXRlLCAxMjBweCAwIHdoaXRlO1xuICAgIH1cbiAgXG4gICAgODclIHtcbiAgICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDEzMHB4IDAgd2hpdGU7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgMjAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAyMDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIDIwMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hbmltYXRlLXByb2dyZXNzIHtcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36106:
/*!**************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/route-reusable-strategy.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteReusableStrategy: function() { return /* binding */ RouteReusableStrategy; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 48016);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class RouteReusableStrategy {
  // private retrievingRoute : any;
  constructor() {
    this.routeStore = new Map();
    this.getCurrentURL = routeSnapshot => {
      const segments = routeSnapshot.pathFromRoot
      // map each snapshot to its URL segments array
      .map(s => s.url.map(segment => segment.path).join('/'))
      // filter out empty segments
      .filter(path => path)
      // join segments with slashes
      .join('/');
      const queryParams = new URLSearchParams(routeSnapshot.queryParams).toString();
      console.log(" Cached route URL segments => ", segments);
      return `/${segments}?${queryParams}`;
    };
  }
  shouldDetach(route) {
    // const isMenuLayoutComp = lget(route, "data.routeCacheConfig.isMenuLayoutComp", false)
    const shouldStore = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(route, "data.routeCacheConfig.reuse", false);
    // console.log(" Cached route LOCATION shouldDetach => ", window.location.href)
    // const key = this.getCurrentURL(route)
    // shouldStore &&  console.log("qawert Cached route STORE", key, shouldStore, isMenuLayoutComp)
    // let r = this.routeStore.get(key)
    // shouldStore && !isMenuLayoutComp && console.log("qawert Cached route STORE componentttttt", r)
    // if(shouldStore && !isMenuLayoutComp) {
    //   // console.log(" Cached route store LOCATION store 1=> ",shouldReuse, route.data)
    //   if(key.includes(this.retrievingRoute)){
    //     console.log("qawert Cached route SAMEEEEEE")
    //     this.retrievingRoute = null;
    //     this.routeStore.delete(key)
    //     return false;
    //   }
    // }
    return shouldStore;
  }
  store(route, handle) {
    const routeCacheConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(route, "data.routeCacheConfig", {});
    const shouldReuse = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(route, "data.routeCacheConfig.reuse", false);
    if (shouldReuse) {
      // console.log(" Cached route store LOCATION store 1=> ",shouldReuse, route.data)
      const isMenuLayoutComp = routeCacheConfig["isMenuLayoutComp"];
      const mode = routeCacheConfig["mode"];
      let key = '';
      if (isMenuLayoutComp) {
        key = "MenuLayoutComp";
      } else {
        // const doc_type = (route.params && route.params['doc_type']) || '';
        // key = `${doc_type}.${mode}`;
        key = this.getCurrentURL(route);
      }
      // console.log(" Cached route store LOCATION store 2 => ",key)
      // console.log(" Cached route ", key)
      handle && this.routeStore.set(key, handle);
    }
    // console.log(" Cached route LOCATION store => ", window.location.href)
    // console.log(" Cached route NOTHING TO STORE")
  }

  shouldAttach(route) {
    const routeCacheConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(route, "data.routeCacheConfig", {});
    const shouldReuse = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(route, "data.routeCacheConfig.reuse", false);
    // const kkey = this.getCurrentURL(route)
    // shouldReuse && console.log("qawert Cached route RETRIEVE", kkey)
    if (shouldReuse) {
      // console.log(" Cached route shouldAttach routeCacheConfig => ", routeCacheConfig)
      const isMenuLayoutComp = routeCacheConfig["isMenuLayoutComp"];
      const mode = routeCacheConfig["mode"];
      if (isMenuLayoutComp && route.component && this.routeStore.get("MenuLayoutComp")) {
        return true;
      } else if (!isMenuLayoutComp) {
        const doc_type = route.params && route.params['doc_type'] || '';
        const cachedRoute = `${doc_type}.${mode}`;
        const cachedRouteKey = this.getCurrentURL(route);
        // this.retrievingRoute = cachedRouteKey
        // let r = this.routeStore.get(cachedRouteKey)
        // console.log("qawert Cached route RETRIEVE componentttttt", r)
        const res = !!this.routeStore.get(cachedRouteKey) || false;
        // console.log(" Cached route LOCATION shouldAttach => ", cachedRouteKey)
        // console.log(" Cached route ", cachedRouteKey)
        return res;
      }
    }
    return false;
  }
  retrieve(route) {
    const routeCacheConfig = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(route, "data.routeCacheConfig", {});
    const shouldReuse = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(route, "data.routeCacheConfig.reuse", false);
    if (shouldReuse) {
      const isMenuLayoutComp = routeCacheConfig["isMenuLayoutComp"];
      const mode = routeCacheConfig["mode"];
      let key = "";
      if (isMenuLayoutComp && route.component && this.routeStore.get("MenuLayoutComp")) {
        key = "MenuLayoutComp";
      } else {
        // const doc_type = (route.params && route.params['doc_type']) || '';
        // key = `${doc_type}.${mode}`;
        key = this.getCurrentURL(route);
      }
      // console.log(" Cached route LOCATION retrieve => ", key)
      // console.log(" Cached route ", key)
      return this.routeStore.get(key);
    }
    return this.routeStore.get("");
  }
  shouldReuseRoute(future, curr) {
    // const futureRouteCacheConfig = lget(future, "data.routeCacheConfig.reuse", false);
    // const isMenuLayoutComp = lget(curr,"data.routeCacheConfig.isMenuLayoutComp",false);
    // // let reuse = false;
    // // if (future.routeConfig && !future.data["reuse"]) {
    // //   reuse = ( future.routeConfig === curr.routeConfig &&
    // //             future.paramMap === curr.paramMap &&
    // //             future.queryParamMap === curr.queryParamMap);
    // // } else {
    // //   reuse = future.routeConfig === curr.routeConfig || (future.data["reuse"]);
    // // }
    // // const reuse = (future.routeConfig === curr.routeConfig &&
    // //   future.paramMap === curr.paramMap &&
    // //   future.queryParamMap === curr.queryParamMap) ||
    // //   future.data.reuse;
    // // let reuse = ( future.routeConfig === curr.routeConfig &&
    // //   future.paramMap === curr.paramMap &&
    // //   future.queryParamMap === curr.queryParamMap);
    // console.log(" Cached route MAP 1 => ", this.routeStore)
    // if(futureRouteCacheConfig) {
    // let currURL = this.getCurrentURL(future)
    // let futureURL = this.getCurrentURL(curr)
    // let reuse = currURL == futureURL
    // // console.log(" Cached route REUSE URLS => ", futureURL, currURL )
    // // console.log(" Cached route REUSE => ", currURL == futureURL)
    // // console.log(" Cached route MAP 2 => ", this.routeStore)
    // return reuse;
    // } return isMenuLayoutComp
    return false;
  }
}

/***/ }),

/***/ 72797:
/*!****************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/app-info.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInfoService: function() { return /* binding */ AppInfoService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class AppInfoService {
  constructor(http) {
    this.http = http;
    this.app_meta_data = {};
    this.prefix = '/api';
    this.getAppInfoData = () => {
      return this.http.get(`${this.prefix}/info`, {
        params: {}
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
  }
  getAppInfo() {
    // const domain = "helix.dev.app.fn7.io"
    const server_uri = `https://helix.dev.app.fn7.io`;
    const current_host = location.hostname === 'localhost' ? new URL(server_uri).host : location.host;
    localStorage.setItem('server_url', `https://${current_host}`);
    // Removing random version in the info call
    return this.http.get(`${this.prefix}/info`, {
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Something went wrong while fetching app meta data.');
    })).toPromise().then(response => {
      this.app_meta_data = response.body;
      console.log('App meta data fetched successfully.', this.app_meta_data);
      // storing the platform version in local storage
      const headers = response.headers;
      const platformVersion = headers.get('PLATFORM-VERSION');
      localStorage.setItem('PLATFORM-VERSION', platformVersion);
      return this.app_meta_data;
    }).catch(error => {
      console.error('Error:', error);
      return null; // Return a default value or handle the error as needed
    });
  }
}

AppInfoService.ɵfac = function AppInfoService_Factory(t) {
  return new (t || AppInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
AppInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppInfoService,
  factory: AppInfoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 89967:
/*!**********************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/authentication.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var _Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ 65753);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ 44846);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snackbar.service */ 50392);
/* harmony import */ var _services_app_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/app-info.service */ 72797);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ 48016);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/global.service */ 93112);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.service */ 68499);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 63370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_12__);




















class AuthenticationService {
  constructor(http, snackbar, appMetaService, globalService, fn7sdk, router, loader, location,
  // private auth0: AuthService
  route) {
    this.http = http;
    this.snackbar = snackbar;
    this.appMetaService = appMetaService;
    this.globalService = globalService;
    this.fn7sdk = fn7sdk;
    this.router = router;
    this.loader = loader;
    this.location = location;
    this.route = route;
    this.auth0_domain = 'fn7.us.auth0.com';
    this.custom_domain = 'uauth.fn7.io';
    // auth0_callback_url: string;
    this.auth0_connection = 'fn7-authentication-prod';
    this.auth0_client_id = 'wgikqwgkjgdkjgvjkw';
    this.auth0_client_secret = 'vT41FTVGEnCWGip6K4Ti9igMKREqf5lAnsAqWDOrmYKL9YHj19XFu7LzPqJqumaE';
    // Initialize Auth0 Configuration
    // if(window){
    //   this.auth0_callback_url = window.location.origin + '/auth';
    // }
    // // this.auth0_callback_url = window.location.origin + '/auth';
    // console.log(this.router)
    // alert(this.auth0_callback_url);
    // this.appMetaService.getAppInfo().then((res): any => {
    //   const app_context: any = _.get(res, 'data.application_details');
    //   const { auth0_configurations, ...app_data } = app_context;
    //   this.initializeAuth0Config(auth0_configurations.tenants[0]);
    // })
    // this.getAuth0Config();
  }

  get auth0_callback_url() {
    // return window.location.origin + '/auth';
    return window.location.origin;
  }
  getAuth0Config() {
    console.log('get config');
    let app_context = localStorage.getItem('app_context');
    if (app_context) {
      app_context = JSON.parse(app_context);
      console.log(app_context);
      this.initializeAuth0Config(app_context.auth0_configurations.tenants[0]);
    }
  }
  initializeAuth0Config(config) {
    this.auth0_connection = config.auth0_connection;
    this.auth0_client_id = config.auth0_client_id;
    this.auth0_client_secret = config.auth0_client_secret;
    this.auth0_domain = config.auth0_domain;
    this.custom_domain = config.custom_auth0_domain;
    this.auth0Client = new auth0_js__WEBPACK_IMPORTED_MODULE_2__.WebAuth({
      domain: this.custom_domain,
      clientID: this.auth0_client_id,
      audience: `https://${this.auth0_domain}/api/v2/`,
      responseType: 'token id_token'
      // scope:
      //   'openid profile email offline_access update:current_user_metadata read:users update:users',
    });
    // // init auth0 client with popup
    // this.auth0Client = new auth0.Popup(
    //   {
    //     client: this.auth0_client_id
    //   }, {}
    // )
    // WebAuth({
    //   domain: this.custom_domain,
    //   clientID: this.auth0_client_id,
    //   audience: `https://${this.auth0_domain}/api/v2/`,
    //   responseType: 'token id_token',
    //   scope: 'openid profile email offline_access update:current_user_metadata read:users update:users',
    //   redirectUri: this.auth0_callback_url + '/callback/user/login',
    // });
    console.log('init autho');
  }
  universallogin(redirectUripath) {
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    this.auth0Client.authorize({
      domain: 'uauth.fn7.io',
      clientID: this.auth0_client_id,
      redirectUri: this.auth0_callback_url + redirectUripath,
      audience: `https://fn7.us.auth0.com/api/v2/`,
      responseType: 'token code',
      scope: 'openid profile email offline_access'
    });
  }
  login(email, password, redirectUriPath = '/admin/callback/user/login', role = 'Consumer') {
    return new Promise((resolve, reject) => {
      // Get the query string from URL
      const urlParamsString = window.location.search;
      if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
        this.getAuth0Config();
      }
      console.log('login', this.auth0Client);
      this.loader.setLoading(true);
      this.auth0Client.login({
        domain: this.custom_domain,
        clientID: this.auth0_client_id,
        audience: `https://${this.auth0_domain}/api/v2/`,
        responseType: 'code',
        scope: 'openid profile email offline_access',
        realm: this.auth0_connection,
        email: email,
        password: password,
        redirectUri: this.auth0_callback_url + redirectUriPath + urlParamsString
      }, err => {
        this.globalService.setLoading(false);
        if (err) console.log('something went wrong: ', err);
        this.callSnackBar(err === null || err === void 0 ? void 0 : err.error_description);
        this.loader.setLoading(false);
        reject(err === null || err === void 0 ? void 0 : err.error_description);
      }, result => {
        console.log(result);
        resolve(result);
      });
    });
  }
  loginWithoutRedirect(email, password) {
    var _this = this;
    return new Promise((resolve, reject) => {
      if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
        this.getAuth0Config();
      }
      console.log('login', this.auth0Client);
      this.loader.setLoading(true);
      this.auth0Client.popup.loginWithCredentials({
        // domain: this.custom_domain,
        // clientID: this.auth0_client_id,
        // audience: `https://${this.auth0_domain}/api/v2/`,
        responseType: 'token id_token',
        scope: 'openid profile email offline_access update:current_user_metadata',
        realm: this.auth0_connection,
        username: email,
        password: password,
        redirectUri: this.auth0_callback_url + '/admin/callback/user/login',
        connection: this.auth0_connection
      }, /*#__PURE__*/function () {
        var _ref = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, authResult) {
          _this.globalService.setLoading(false);
          if (err) {
            console.log('something went wrong: ', err);
            _this.callSnackBar(err === null || err === void 0 ? void 0 : err.error_description);
            _this.loader.setLoading(false);
            reject(err === null || err === void 0 ? void 0 : err.error_description);
          } else {
            console.log(authResult);
            // const newSessionData = await this.refreshSession();
            console.log(authResult);
            _this.setSessionInLocalStorage(authResult);
            resolve(authResult);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
  signupWithoutRedirect(email, password, redirectUripath, name, fn7DirectUser = false, role = 'Consumer') {
    var _this2 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        try {
          if (!_this2.auth0Client && typeof _this2.auth0Client === 'undefined') {
            _this2.getAuth0Config();
          }
          console.log('login', _this2.auth0Client);
          _this2.loader.setLoading(true);
          let urlParamsString = window.location.search;
          if (fn7DirectUser) {
            urlParamsString = window.location.search ? `${window.location.search}&fn7DirectUser=${encodeURIComponent(fn7DirectUser)}` : `?fn7DirectUser=${encodeURIComponent(fn7DirectUser)}`;
          }
          let userMeta = yield _this2.prepareUserMetadata(role);
          userMeta['fn7DirectUser'] = fn7DirectUser.toString();
          console.log(userMeta);
          // return;
          _this2.auth0Client.signup({
            // domain: this.custom_domain,
            // clientID: this.auth0_client_id,
            // audience: `https://${this.auth0_domain}/api/v2/`,
            // responseType: 'code',
            scope: 'openid profile email offline_access update:users,update:users_app_metadata,update:current_user_metadata',
            // realm: this.auth0_connection,
            email: email,
            password: password,
            name: name,
            connection: _this2.auth0_connection,
            redirectUri: _this2.auth0_callback_url + redirectUripath,
            responseType: 'token id_token',
            userMetadata: userMeta
          }, /*#__PURE__*/function () {
            var _ref3 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, authResult) {
              _this2.globalService.setLoading(false);
              if (err) {
                console.log('something went wrong: ', err);
                _this2.callSnackBar(err === null || err === void 0 ? void 0 : err.description);
                _this2.loader.setLoading(false);
                reject(err === null || err === void 0 ? void 0 : err.description);
              } else {
                console.log(authResult);
                try {
                  // take user consent
                  const result = yield _this2.loginWithoutRedirect(email, password);
                  yield _this2.performPostSignupActions(authResult, role);
                  resolve(result);
                } catch (err) {
                  console.log(err);
                  reject(err.description ? err.description : err);
                }
              }
            });
            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          }());
        } catch (err) {
          console.log(err);
          reject(err);
        }
      });
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  socialAuthWithPopup(provider, redirectUripath, fn7DirectUser = false, role = 'Consumer') {
    var _this3 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.auth0Client && typeof _this3.auth0Client === 'undefined') {
        _this3.getAuth0Config();
      }
      let urlParamsString = window.location.search;
      if (fn7DirectUser) {
        urlParamsString = window.location.search ? `${window.location.search}&fn7DirectUser=${encodeURIComponent(fn7DirectUser)}` : `?fn7DirectUser=${encodeURIComponent(fn7DirectUser)}`;
      }
      let userMeta = yield _this3.prepareUserMetadata(role);
      userMeta['fn7DirectUser'] = fn7DirectUser.toString();
      console.log(userMeta);
      return new Promise((resolve, reject) => {
        _this3.auth0Client.popup.authorize({
          connection: provider,
          // responseType: 'code',
          redirectUri: _this3.auth0_callback_url + redirectUripath + urlParamsString,
          // redirectUri: '',
          owp: true,
          scope: 'openid profile email offline_access update:current_user_metadata'
        }, /*#__PURE__*/function () {
          var _ref4 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, authResult) {
            if (err) {
              console.error(err);
              _this3.callSnackBar(err.error_description);
              reject(err.error_description);
            } else {
              console.log(authResult);
              // this.setSessionInLocalStorage(authResult);
              const decodedToken = _this3.decodeIdToken(authResult.idToken);
              if (!decodedToken.user_id || !decodedToken.user_role) {
                yield _this3.setUserMetaDataInAuth0(authResult.accessToken, authResult.idToken, userMeta);
                const newSession = yield _this3.refreshSession();
                // this.setSessionInLocalStorage(newSession);
                yield _this3.performPostSignupActions(newSession, role);
                resolve({
                  authResult: newSession,
                  action: 'signup'
                });
              } else {
                _this3.setSessionInLocalStorage(authResult);
                resolve({
                  authResult: authResult,
                  action: 'login'
                });
              }
            }
          });
          return function (_x7, _x8) {
            return _ref4.apply(this, arguments);
          };
        }());
      });
    })();
  }
  setUserMetaDataInAuth0(accessToken, idToken, userMetadata) {
    return new Promise((resolve, reject) => {
      const management = new auth0_js__WEBPACK_IMPORTED_MODULE_2__.Management({
        domain: this.custom_domain,
        token: accessToken
      });
      const userId = this.decodeIdToken(idToken).sub;
      management.patchUserMetadata(userId, userMetadata, (err, user) => {
        if (err) {
          console.error(err);
          this.callSnackBar(err.error_description);
          reject(err.error_description);
        } else {
          console.log(user);
          resolve(user);
        }
      });
    });
  }
  performPostSignupActions(authResult, role = 'Consumer') {
    var _this4 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref5 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        let userMetadata;
        if (role == 'platform-owner') {
          userMetadata = _this4.prepareUserMetadata('PlatformOwner', '', 'Admin');
        } else if (role == 'provider') {
          userMetadata = _this4.prepareUserMetadata('Provider');
        } else {
          userMetadata = _this4.prepareUserMetadata('Consumer');
        }
        const queryParams = _this4.route.snapshot.queryParams;
        userMetadata['fn7DirectUser'] = queryParams['fn7DirectUser'];
        const data = _this4.decodeIdToken();
        const userData = {
          user_id: data.user_id,
          name: data.name,
          org_role: data.org_role,
          user_role: data.user_role,
          org_hkey: data.org_hkey,
          email: data.email,
          fn7DirectUser: userMetadata.fn7DirectUser,
          utm_source: userMetadata.utm_source,
          utm_medium: userMetadata.utm_medium,
          utm_campaign: userMetadata.utm_campaign,
          // aaditional data
          doc_id: data.user_id,
          isActive: true,
          isSignupJourneyCompleted: false
        };
        const org_id = data.org_hkey.split('.').pop();
        const orgData = {
          doc_id: org_id,
          org_hkey: data.org_hkey,
          org_role: data.org_role,
          name: data.name,
          isActive: true
        };
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.lastValueFrom)(_this4.fn7sdk.createDocument('Fn7Organisations', orgData, null));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.lastValueFrom)(_this4.fn7sdk.createDocument('AppUsers', userData, null));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.lastValueFrom)(_this4.fn7sdk.executeServerSideAction('globalCreateUserContact', userData));
        if (!data.email_verified) {
          // return this.router.navigate([`auth/email-verification`]);
          _this4.router.navigate([`admin/email-verification`], {
            queryParamsHandling: 'merge'
          });
        } else {
          resolve(authResult);
        }
        // update user metadata
        // const management = new auth0.Management({
        //   domain: this.custom_domain,
        //   token: authResult.accessToken,
        // });
        // management.patchUserMetadata(
        //   authResult.idTokenPayload.sub,
        //   userMetadata,
        //   async (err: any, user: any) => {
        //     if (err) {
        //       console.error(err);
        //       this.callSnackBar(err.error_description);
        //       reject(err.error_description);
        //     } else {
        //       const data = this.decodeIdToken();
        //       const userData = {
        //         user_id: data.user_id,
        //         name: data.name,
        //         org_role: data.org_role,
        //         user_role: data.user_role,
        //         org_hkey: data.org_hkey,
        //         email: data.email,
        //         fn7DirectUser: userMetadata.fn7DirectUser,
        //         utm_source: userMetadata.utm_source,
        //         utm_medium: userMetadata.utm_medium,
        //         utm_campaign: userMetadata.utm_campaign,
        //         // aaditional data
        //         doc_id: data.user_id,
        //         isActive: true,
        //         isSignupJourneyCompleted: false,
        //       };
        //       const org_id = data.org_hkey.split('.').pop();
        //       const orgData = {
        //         doc_id: org_id,
        //         org_hkey: data.org_hkey,
        //         org_role: data.org_role,
        //         name: data.name,
        //         isActive: true,
        //       };
        //       lastValueFrom(
        //         this.fn7sdk.createDocument('Fn7Organisations', orgData, null)
        //       );
        //       await lastValueFrom(
        //         this.fn7sdk.createDocument('AppUsers', userData, null)
        //       );
        //       lastValueFrom(
        //         this.fn7sdk.executeServerSideAction(
        //           'globalCreateUserContact',
        //           userData
        //         )
        //       );
        //       if (!data.email_verified) {
        //         // return this.router.navigate([`auth/email-verification`]);
        //         this.router.navigate([`admin/email-verification`], {
        //           queryParamsHandling: 'merge',
        //         });
        //       } else {
        //         resolve(authResult);
        //       }
        //     }
        //   }
        // );
      });
      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  //  which wil give new access token and id token
  refreshSession() {
    var _this5 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (!_this5.auth0Client && typeof _this5.auth0Client === 'undefined') {
          _this5.getAuth0Config();
        }
        _this5.auth0Client.checkSession({
          redirectUri: `${_this5.auth0_callback_url}/admin/callback/user/login`,
          audience: `https://${_this5.auth0_domain}/api/v2/`,
          scope: 'openid profile email offline_access update:users,update:users_app_metadata,update:current_user_metadata'
        }, (err, result) => {
          if (err) {
            console.error('Session check error:', err);
            reject(err);
          } else {
            console.log('Session check result:', result);
            _this5.setSessionAfterExchange(result);
            resolve(result);
          }
        });
      });
    })();
  }
  getUserInfoFromAuth0(refreshToken = '') {
    const token = refreshToken || localStorage.getItem('access_token');
    return new Promise((resolve, reject) => {
      this.auth0Client.client.userInfo(token, (err, user) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(user);
          resolve(user);
        }
      });
    });
  }
  // setSessioninLocalStorage
  setSessionInLocalStorage(authResult) {
    var _this6 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return new Promise(async (resolve, reject) => {
      try {
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('refresh_token', authResult.refreshToken);
        // const userInfo: any = await this.getUserInfoFromAuth0(
        //   authResult.accessToken
        // );
        const decodedToken = _this6.decodeIdToken(authResult.idToken);
        const userContext = decodedToken;
        localStorage.setItem('user_context', JSON.stringify(userContext));
        // resolve(true);
        return true;
      } catch (err) {
        return err;
        // reject(err);
      }
      // });
    })();
  }

  newlogin(email, password, redirectUriPath = '/callback/user/login') {
    var _this7 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.auth0.loginWithPopup().subscribe(res => {
        _this7.afterAuthenticate('login');
      });
    })();
  }
  newSignup() {
    var _this8 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.auth0.loginWithPopup({
        authorizationParams: {
          screen_hint: 'signup'
        }
      }).subscribe(res => {
        _this8.afterAuthenticate('signup');
      });
    })();
  }
  afterAuthenticate(mode = 'login') {
    var _this9 = this;
    this.auth0.user$.subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        console.log(user);
        let tokenAUTH;
        const access_token = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.lastValueFrom)(_this9.auth0.getAccessTokenSilently());
        console.log(access_token);
        _this9.auth0.getAccessTokenSilently().subscribe(token => {
          console.log(token);
          tokenAUTH = token;
        });
        //   getAccessTokenSilently(options: GetTokenSilentlyOptions & {
        //     detailedResponse: true;
        // }):
        _this9.auth0.getAccessTokenSilently({
          detailedResponse: true
        }).subscribe(token => {
          console.log(token);
          tokenAUTH = token;
        });
        // get id_token
        let Claims; //await lastValueFrom(this.auth0.idTokenClaims$);
        _this9.auth0.idTokenClaims$.subscribe( /*#__PURE__*/function () {
          var _ref7 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (claims) {
            console.log(claims);
            console.log(Claims);
            Claims = claims;
            const id_token = Claims.__raw;
            const expires_at = Claims.exp * 1000;
            console.log(id_token, expires_at);
            const appInfo = _this9.globalService.applicationMeta();
            const userMetadata = _this9.prepareUserMetadata(appInfo === null || appInfo === void 0 ? void 0 : appInfo.defaultOrgSignUpRole);
            // set local storage
            localStorage.setItem('id_token', id_token);
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('expires_at', JSON.stringify(expires_at));
            if (mode == 'login') {
              if (user['user_id']) {
                const AppUser = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(_this9.fn7sdk.getDocument('AppUsers', user['user_id']));
                localStorage.setItem('user_context', JSON.stringify(AppUser.data[0]));
                console.log(AppUser);
              }
              const userMetadata = _this9.prepareUserMetadata(appInfo === null || appInfo === void 0 ? void 0 : appInfo.defaultOrgSignUpRole);
              //  const handleAuth = await this.handleAuthentication(userMetadata, 'code');
              // this.routeUser(AppUser.data[0].isSignupJourneyCompleted);
              const loginWorkflowId = appInfo === null || appInfo === void 0 ? void 0 : appInfo.loginWorkflowId;
              _this9.routeUser(true);
            }
            if (mode == 'signup') {
              const userMetadata = _this9.prepareUserMetadata('Provider');
              const decodedToken = _this9.decodeIdToken(id_token);
              // set user metadata
              const auth0meta = yield _this9.setUserMetaData(access_token, decodedToken.sub, userMetadata);
              console.log(auth0meta);
            }
          });
          return function (_x12) {
            return _ref7.apply(this, arguments);
          };
        }());
      });
      return function (_x11) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  signupAndLogin(email, password, redirectUripath, name, fn7DirectUser = false) {
    let urlParamsString = window.location.search;
    if (fn7DirectUser) {
      urlParamsString = window.location.search ? `${window.location.search}&fn7DirectUser=${encodeURIComponent(fn7DirectUser)}` : `?fn7DirectUser=${encodeURIComponent(fn7DirectUser)}`;
    }
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    let redirectUri = this.auth0_callback_url + redirectUripath + urlParamsString;
    this.auth0Client.redirect.signupAndLogin({
      connection: this.auth0_connection,
      email: email,
      password: password,
      responseType: 'code',
      name: name,
      redirectUri: redirectUri
    }, (error, result) => {
      if (error) {
        this.globalService.setLoading(false);
        this.callSnackBar('Sign up failed. Please try again.');
        console.error(error);
      } else {
        console.log('result', result);
        this.callSnackBar('Sucessful Signup');
      }
    });
  }
  routeUser(isSignupJourneyCompleted) {
    const redirectUrlParams = this.getReturnUrlParams;
    const idToken = this.decodeIdToken();
    const user = JSON.parse(localStorage.getItem('user_context') || '{}');
    const app_data = this.globalService.applicationMeta();
    const appRoutes = app_data.appRoutes;
    let roleroute;
    console.log('user =>', user);
    console.log('Org role', idToken.org_role);
    console.log('App data', app_data);
    if (idToken.org_role == 'Consumer') {
      roleroute = appRoutes['Consumer'] ? appRoutes['Consumer'] : appRoutes['default'];
      if (isSignupJourneyCompleted) {
        console.log('Journey Completed');
        if (redirectUrlParams) return this.rediretToReturnUrl();
        this.router.navigate([roleroute]);
      } else {
        console.log('Journey not Completed');
        const role_configurations = lodash__WEBPACK_IMPORTED_MODULE_6__.get(app_data, 'role_configurations', undefined);
        const signupJourneyDocType = lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'Consumer.signupJourneyDocType');
        console.log('Signup Journey DocType  =>', lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'Consumer.signupJourneyDocType'));
        if (signupJourneyDocType) {
          const displaySignupJourneyPopup = lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'Consumer.displaySignupJourneyPopup');
          console.log('displaySignupJourneyPopup', displaySignupJourneyPopup);
          if (displaySignupJourneyPopup) {
            // Display signup journey from popup
            // this.openSignupJourneyDialog(roleroute, signupJourneyDocType);
          } else {
            this.router.navigate([`admin/headless/dynamic/${signupJourneyDocType}/new`]);
          }
        } else {
          if (redirectUrlParams) return this.rediretToReturnUrl();
          // this.router.navigate([roleroute]);
          this.router.navigateByUrl(roleroute);
        }
      }
    } else if (idToken.org_role == 'PlatformOwner') {
      console.log('idToken.org_hkey', idToken.org_hkey);
      const currentUrl = window.location.href;
      console.log(currentUrl);
      roleroute = appRoutes['PlatformOwner'] ? appRoutes['PlatformOwner'] : appRoutes['default'];
      if (isSignupJourneyCompleted) {
        console.log('Journey Completed');
        this.router.navigate([roleroute]);
      } else {
        console.log('Journey not Completed');
        const role_configurations = lodash__WEBPACK_IMPORTED_MODULE_6__.get(app_data, 'role_configurations', undefined);
        const signupJourneyDocType = lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'PlatformOwner.signupJourneyDocType');
        console.log('Signup Journey DocType  =>', lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'PlatformOwner.signupJourneyDocType'));
        if (signupJourneyDocType) {
          const displaySignupJourneyPopup = lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'PlatformOwner.displaySignupJourneyPopup');
          console.log('displaySignupJourneyPopup', displaySignupJourneyPopup);
          if (displaySignupJourneyPopup) {
            // Display signup journey from popup
            // this.openSignupJourneyDialog(roleroute, signupJourneyDocType);
          } else {
            this.router.navigate([`admin/headless/dynamic/${signupJourneyDocType}/new`]);
          }
        } else {
          if (redirectUrlParams) return this.rediretToReturnUrl();
          // this.router.navigate([roleroute]);
          this.router.navigateByUrl(roleroute);
        }
      }
    } else {
      roleroute = appRoutes['Provider'] ? appRoutes['Provider'] : appRoutes['default'];
      if (isSignupJourneyCompleted) {
        console.log('Journey Completed');
        this.router.navigate([roleroute]);
      } else {
        console.log('Journey not Completed');
        const role_configurations = lodash__WEBPACK_IMPORTED_MODULE_6__.get(app_data, 'role_configurations', undefined);
        const signupJourneyDocType = lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'Provider.signupJourneyDocType');
        console.log('Signup Journey DocType  =>', lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'Provider.signupJourneyDocType'));
        if (signupJourneyDocType) {
          const displaySignupJourneyPopup = lodash__WEBPACK_IMPORTED_MODULE_6__.get(role_configurations, 'Provider.displaySignupJourneyPopup');
          console.log('displaySignupJourneyPopup', displaySignupJourneyPopup);
          if (displaySignupJourneyPopup) {
            // Display signup journey from popup
            // this.openSignupJourneyDialog(roleroute, signupJourneyDocType);
          } else {
            this.router.navigate([`admin/headless/dynamic/${signupJourneyDocType}/new`]);
          }
        } else {
          if (redirectUrlParams) return this.rediretToReturnUrl();
          // this.router.navigate([roleroute]);
          this.router.navigateByUrl(roleroute);
        }
      }
    }
  }
  inviteUser(email, orgRole, assignedUserRole, data) {
    var _this10 = this;
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    const currentUserData = this.globalService.userContext();
    const appInfo = this.globalService.applicationMeta();
    const parent_org_hkey = appInfo ? appInfo.org_hkey : '';
    const orgid = this.generateDocId();
    const org_hkey = orgRole == (currentUserData === null || currentUserData === void 0 ? void 0 : currentUserData.org_role) ? currentUserData === null || currentUserData === void 0 ? void 0 : currentUserData.org_hkey : parent_org_hkey + '.' + orgid;
    orgRole = orgRole ? orgRole : currentUserData === null || currentUserData === void 0 ? void 0 : currentUserData.org_role;
    let user_id = '';
    if (typeof data == 'string') {
      user_id = data;
    } else if (typeof data == 'object') {
      user_id = data['doc_id'];
    }
    const userData = this.prepareUserMetadata(orgRole, org_hkey, assignedUserRole, user_id);
    // data = { ...data, ...userData };
    return new Promise((resolve, reject) => {
      this.auth0Client.signup({
        connection: this.auth0_connection,
        email: email,
        password: 'hexitopnd@1234',
        userMetadata: userData
      }, /*#__PURE__*/function () {
        var _ref8 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error, result) {
          if (error) {
            _this10.globalService.setLoading(false);
            // this.callSnackBar('Sign up failed. Please try again.');
            const res = yield _this10.changepassword(email);
            console.error(error);
            resolve('Reinvited user successfully');
          } else {
            console.log('result', result);
            const res = yield _this10.changepassword(email);
            const authoId = 'auth0|' + result['Id'];
            const uData = {
              ...userData,
              ...data,
              email: email,
              authoId: authoId
            };
            _this10.createUserInBackend(uData, orgRole == (currentUserData === null || currentUserData === void 0 ? void 0 : currentUserData.org_role));
            console.log(res);
            resolve('User invited successfully');
          }
        });
        return function (_x13, _x14) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
  }
  signupWithSocial(provider, redirectUripath, fn7DirectUser = false) {
    // Get the query string from URL
    let urlParamsString = window.location.search;
    if (fn7DirectUser) {
      urlParamsString = window.location.search ? `${window.location.search}&fn7DirectUser=${encodeURIComponent(fn7DirectUser)}` : `?fn7DirectUser=${encodeURIComponent(fn7DirectUser)}`;
    }
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    let redirectUri = this.auth0_callback_url + redirectUripath + urlParamsString;
    console.log('redirectURI', redirectUri);
    this.auth0Client.authorize({
      connection: provider,
      responseType: 'code',
      redirectUri: this.auth0_callback_url + redirectUripath + urlParamsString
    });
    console.log('google signup done');
  }
  sendVerificationMail() {
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    this.auth0Client.passwordlessStart({
      connection: this.auth0_connection,
      // email: 'shubham.pancholi@fn7.io',
      send: 'link'
    }, function (err, result) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        // Verification email sent
        console.log(result);
      }
    });
  }
  changepassword(email) {
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    return new Promise((resolve, reject) => {
      this.auth0Client.changePassword({
        connection: this.auth0_connection,
        email: email
      }, (err, res) => {
        if (err) {
          reject(err.description);
        } else {
          resolve('Password reset email sent!');
        }
      });
    });
  }
  setUserMetaData(accessToken, userId, userMetadata, isUpdate = false) {
    var _this11 = this;
    console.log('setusermetaaa');
    const management = new auth0_js__WEBPACK_IMPORTED_MODULE_2__.Management({
      domain: this.custom_domain,
      token: accessToken
    });
    console.log('user meta update', userId, accessToken);
    return new Promise((resolve, reject) => {
      management.patchUserMetadata(userId, userMetadata, /*#__PURE__*/function () {
        var _ref9 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err, updatedUser) {
          if (err) {
            console.error(err);
            reject();
          } else {
            console.log('User metadata updated successfully:', updatedUser);
            if (!isUpdate) {
              yield _this11.checkSession(true, userMetadata);
            }
            resolve();
            // Continue with your application logic after updating user metadata
          }
        });
        return function (_x15, _x16) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
  }
  createUserInBackend(data, same_org = false) {
    // data = { ...data, ...userMetadata };
    const org_id = data.org_hkey.split('.').pop();
    const orgData = {
      doc_id: org_id,
      org_hkey: data.org_hkey,
      org_role: data.org_role,
      name: data.name,
      isActive: true
    };
    const userData = {
      doc_id: data.user_id,
      ...data,
      isActive: true,
      isSignupJourneyCompleted: false
    };
    console.log(data);
    if (!same_org) {
      console.log('orgdata', orgData);
      this.fn7sdk.createDocument('Fn7Organisations', orgData, null, []).subscribe();
    }
    return new Promise((resolve, reject) => {
      console.log('userdata', userData);
      this.fn7sdk.createDocument('AppUsers', userData, null, []).subscribe(() => {
        this.fn7sdk.executeServerSideAction('globalCreateUserContact', userData).subscribe();
        resolve();
      });
    });
  }
  handleAuthentication(userMetaData = '') {
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    // Check if there's an authorization code in the URL parameters.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      // Authorization code is present; exchange it for tokens.
      return this.exchangeCodeForTokens(code, 'authorization_code', userMetaData);
    } else {
      // No authorization code in URL parameters; parse the hash.
      console.log('handleAuthentication');
      return new Promise((resolve, reject) => {
        const extractedParams = {};
        urlParams.forEach((value, key) => {
          extractedParams[key] = value;
        });
        if (extractedParams['access_token'] && extractedParams['id_token'] && extractedParams['refresh_token'] && extractedParams['expires_in']) {
          console.log(extractedParams);
          this.setSessionAfterExchange(extractedParams);
          const decodedToken = this.decodeIdToken(extractedParams['id_token']);
          if (userMetaData && !(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.org_hkey) && !(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.org_role)) {
            this.setUserMetaData(extractedParams['access_token'], decodedToken.sub, userMetaData);
            resolve(false);
          } else {
            resolve(true);
          }
        } else {
          reject();
        }
      });
    }
  }
  exchangeCodeForTokens(code, grantType, userMetaData) {
    var _this12 = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref10 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        // Make a POST request to your auth0 to exchange the code for tokens.
        // const url = `https://${this.custom_domain}/oauth/token`;
        // const headers = new HttpHeaders({
        //   'Content-Type': 'application/x-www-form-urlencoded',
        // });
        // const body = {
        //   grant_type: 'authorization_code',
        //   code: code,
        //   client_id: this.auth0_client_id,
        //   client_secret: this.auth0_client_secret,
        //   redirect_uri: `${this.auth0_callback_url}/auth/callback/user/login`,
        // };
        // this.http
        //   .post(url, body, { headers: headers })
        //   .subscribe(
        //     (data: any) => {
        //       console.log("new token", data);
        //       if (data.access_token && data.id_token) {
        //         // Tokens obtained from the backend.
        //         this.setSession(data);
        //         let decodedToken = this.decodeIdToken(data.idToken);
        //         if (userMetaData && !decodedToken?.org_hkey && !decodedToken?.org_role) {
        //           this.setUserMetaData(data.accessToken, decodedToken.sub, userMetaData)
        //         }
        //         resolve();
        //       } else {
        //         console.error('Failed to obtain tokens from backend');
        //         reject('Failed to obtain tokens from backend');
        //       }
        //     },
        //     (error) => {
        //       console.error('Token exchange error:', error);
        //       reject(error);
        //     }
        //   )
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken || refreshToken == 'undefined' || refreshToken == 'null' || refreshToken == null || refreshToken == undefined) {
          try {
            const session = yield _this12.refreshSession();
            resolve(session);
          } catch (error) {
            reject(error);
          }
          return;
        }
        const bodyData = {
          grant_type: grantType,
          client_secret: _this12.auth0_client_secret,
          client_id: _this12.auth0_client_id,
          redirect_uri: _this12.auth0_callback_url + '/auth/callback/user/login'
        };
        const access_key = grantType == 'authorization_code' ? 'code' : 'refresh_token';
        bodyData[access_key] = code;
        const urlEncodedData = Object.keys(bodyData).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(bodyData[key])}`).join('&');
        _this12.loader.setLoading(true);
        fetch(`https://${_this12.custom_domain}/oauth/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlEncodedData
        }).then(response => response.json()).then( /*#__PURE__*/function () {
          var _ref11 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this12.loader.setLoading(false);
            console.log('new token', data);
            if (data.access_token && data.id_token) {
              // Tokens obtained from the backend.
              _this12.setSessionAfterExchange(data);
              const decodedToken = _this12.decodeIdToken(data.idToken);
              if (userMetaData && !(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.org_hkey) && !(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.org_role)) {
                yield _this12.setUserMetaData(data.access_token, decodedToken.sub, userMetaData);
                resolve(false);
              } else {
                resolve(true);
              }
            } else {
              _this12.loader.setLoading(false);
              console.error('Failed to obtain tokens from backend');
              _this12.logout();
              reject('Failed to obtain tokens from backend');
            }
          });
          return function (_x19) {
            return _ref11.apply(this, arguments);
          };
        }()).catch(error => {
          console.error('Token exchange error:', error);
          reject(error);
        });
      });
      return function (_x17, _x18) {
        return _ref10.apply(this, arguments);
      };
    }());
  }
  checkSession(signup = false, userMetadata = {}) {
    var _this13 = this;
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    console.log('check session');
    return new Promise((resolve, reject) => {
      this.auth0Client.checkSession({
        redirectUri: this.auth0_callback_url + '/admin/callback/user/login'
      }, /*#__PURE__*/function () {
        var _ref12 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error, authResult) {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            console.log('new token');
            if (authResult && authResult.accessToken && authResult.idToken) {
              _this13.setSession(authResult);
              if (signup) {
                const data = _this13.decodeIdToken();
                const userData = {
                  user_id: data.user_id,
                  name: data.name,
                  org_role: data.org_role,
                  user_role: data.user_role,
                  org_hkey: data.org_hkey,
                  email: data.email,
                  fn7DirectUser: userMetadata.fn7DirectUser,
                  utm_source: userMetadata.utm_source,
                  utm_medium: userMetadata.utm_medium,
                  utm_campaign: userMetadata.utm_campaign
                };
                yield _this13.createUserInBackend(userData);
              }
              resolve();
            } else {
              console.error('Failed to renew the session');
              _this13.logout();
              reject(new Error('Failed to renew the session'));
            }
          }
        });
        return function (_x20, _x21) {
          return _ref12.apply(this, arguments);
        };
      }());
    });
  }
  setSessionAfterExchange(authResult) {
    // Set the time that the access token will expire at
    console.log('setsessionforcode');
    const expiresAt = JSON.stringify(authResult.expires_in || authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.access_token || authResult.accessToken);
    localStorage.setItem('id_token', authResult.id_token || authResult.idToken);
    localStorage.setItem('refresh_token', authResult.refresh_token || authResult.refreshToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('user_context', JSON.stringify(this.decodeIdToken()));
  }
  setSession(authResult) {
    // Set the time that the access token will expire at
    console.log('setsession');
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    //localStorage.setItem('refresh_token', authResult.refreshToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('user_context', JSON.stringify(this.decodeIdToken()));
  }
  getUserData() {
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    return new Promise((resolve, reject) => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        reject('Access token not found');
        return;
      }
      this.auth0Client.client.userInfo(accessToken, (err, user) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        const userData = this.globalService.userContext();
        user = {
          ...userData,
          ...user
        };
        localStorage.setItem('user_context', JSON.stringify(user));
        resolve(user);
      });
    });
  }
  isEmailVerified() {
    var _this14 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise( /*#__PURE__*/function () {
        var _ref13 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            let user = _this14.globalService.userContext();
            if (!user) {
              user = yield _this14.getUserData();
            }
            console.log(user.email_verified);
            resolve(user.email_verified);
          } catch (error) {
            console.error(error);
            reject(false);
          }
        });
        return function (_x22, _x23) {
          return _ref13.apply(this, arguments);
        };
      }());
    })();
  }
  get isLoggedIn() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }
  logout() {
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    // Save the value of `app_context` temporarily
    const appContext = localStorage.getItem('app_context');
    const theme = localStorage.getItem('theme');
    const serverUrl = localStorage.getItem('server_url');
    // Clear the local storage
    localStorage.clear();
    // Restore the value of `app_context`
    localStorage.setItem('app_context', appContext);
    if (theme) localStorage.setItem('theme', theme);
    localStorage.setItem('server_url', serverUrl);
    const returnUrl = window.location.origin + '/auth/login';
    console.log('logout', this.auth0Client);
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.router.navigate(['/auth/login']);
      return;
    }
    this.auth0Client.logout({
      returnTo: returnUrl
    });
  }
  refreshAccessToken(refreshToken) {
    if (!this.auth0Client && typeof this.auth0Client === 'undefined') {
      this.getAuth0Config();
    }
    return this.exchangeCodeForTokens(refreshToken, 'refresh_token');
  }
  callSnackBar(msg) {
    this.snackbar.openSnackBar(msg);
  }
  decodeIdToken(idToken = '') {
    if (!idToken) {
      idToken = localStorage.getItem('id_token');
    }
    if (idToken) {
      const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(idToken);
      return decoded;
    }
    return null;
  }
  prepareUserMetadata(role, org_hkey, userRole, user_id, userData = {}) {
    console.log('user_id', user_id);
    user_id = user_id ? user_id : this.generateDocId();
    const org_id = this.generateDocId();
    const appInfo = this.globalService.applicationMeta();
    userRole = userRole ? userRole : appInfo.role_configurations[role].defaultUserSignUpRole;
    let parent_org_hkey;
    if (role == 'PlatformOwner') {
      parent_org_hkey = '7000000001';
    } else {
      parent_org_hkey = appInfo ? appInfo.org_hkey : '';
    }
    const userMetadata = {
      user_id: user_id,
      org_role: role,
      user_role: userRole,
      org_hkey: org_hkey ? org_hkey : parent_org_hkey + '.' + org_id,
      application_id: appInfo.doc_id
    };
    return userMetadata;
  }
  generateDocId() {
    return Math.random().toString().slice(2, 12);
  }
  // store the URL so we can redirect after logging in
  setReturnUrlParams() {
    const returnUrlParams = {
      path: window.location.pathname,
      query: window.location.search
    };
    localStorage.setItem('redirect_url_params', JSON.stringify(returnUrlParams));
  }
  get getReturnUrlParams() {
    const param = localStorage.getItem('redirect_url_params');
    if (param) {
      return JSON.parse(param);
    } else {
      return null;
    }
  }
  rediretToReturnUrl() {
    const returnUrlParams = this.getReturnUrlParams;
    if (returnUrlParams) {
      const url = returnUrlParams.path + returnUrlParams.query;
      localStorage.removeItem('redirect_url_params');
      this.router.navigateByUrl(url);
    }
  }
  redirectToDefaultRoute() {
    const appRoutes = this.globalService.applicationMeta().appRoutes;
    const orgRole = this.globalService.userContext().org_role;
    const defaultRoute = appRoutes[orgRole] || appRoutes.default;
    this.router.navigateByUrl(defaultRoute);
  }
  getManagementToken() {
    var _this15 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const clientId = '7wmlCy4lUWHW3XrwsAAyNB9RBCBf3Rwy';
      const clientSecret = 'rlGY-MchpybcSmnydrZFMS0SucyJ6xAb2JJ5ZEaMAXyYtzaS9XzW5S8co6TrxNmT';
      const audience = `https://${_this15.auth0_domain}/api/v2/`;
      const url = `https://${_this15.auth0_domain}/oauth/token`;
      try {
        const response = yield fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            audience: audience,
            grant_type: 'client_credentials'
          })
        });
        const data = yield response.json();
        return data.access_token;
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  }
  getUserByEmail(access_token, email) {
    var _this16 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const getUsersUrl = `https://${_this16.auth0_domain}/api/v2/users-by-email?email=${email}`;
      try {
        const response = yield fetch(getUsersUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        });
        const userData = yield response.json();
        return userData;
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  }
  updateBlockStatus(access_token, userId, block) {
    var _this17 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = {
        blocked: block
      };
      const getUsersUrl = `https://${_this17.auth0_domain}/api/v2/users/${userId}`;
      try {
        const response = yield fetch(getUsersUrl, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            blocked: block
          })
        });
        const userData = yield response.json();
        return userData;
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  }
  changeUserRole(email, newUserRole, doc_id, authoId) {
    var _this18 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const access_token = yield _this18.getManagementToken();
        let userId;
        let userData;
        let updatedmetaData = {};
        if (authoId == undefined) {
          userData = yield _this18.getUserByEmail(access_token, email);
          userId = userData[0].user_id;
          updatedmetaData = userData[0].user_metadata;
        }
        userId = userId == undefined ? authoId : userId;
        updatedmetaData['user_role'] = newUserRole;
        const response = yield _this18.setUserMetaData(access_token, userId, updatedmetaData, true);
        const data = {
          user_role: newUserRole
        };
        _this18.fn7sdk.updateDocument('AppUsers', doc_id, data, null, []).subscribe();
      } catch (error) {
        console.error('Error:', error);
        // Handle or propagate the error as needed
      }
    })();
  }

  changeUserStatus(email, block, doc_id, authoId) {
    var _this19 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const access_token = yield _this19.getManagementToken();
        let userId;
        if (authoId == undefined) {
          const userData = yield _this19.getUserByEmail(access_token, email);
          userId = userData[0].user_id;
        }
        userId = userId == undefined ? authoId : userId;
        yield _this19.updateBlockStatus(access_token, userId, block);
        const data = {
          isActive: !block
        };
        _this19.fn7sdk.updateDocument('AppUsers', doc_id, data, null, []).subscribe(() => {
          const message = block ? 'User In-Active Successfully' : 'User Active Successsfully';
          _this19.callSnackBar(message);
        });
      } catch (error) {
        console.log('Error:', error);
      }
    })();
  }
  changeOrgStatus(doc_id, block) {
    var _this20 = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const data = {
          isActive: !block
        };
        const res = _this20.fn7sdk.updateDocument('Fn7Organisations', doc_id, data, null, []).subscribe();
      } catch (error) {
        console.log('Error:', error);
      }
    })();
  }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_app_info_service__WEBPACK_IMPORTED_MODULE_5__.AppInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_global_service__WEBPACK_IMPORTED_MODULE_7__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_8__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_global_service__WEBPACK_IMPORTED_MODULE_7__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 68499:
/*!************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/data.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.service */ 93112);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 48016);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









class DataService {
  constructor(http, sdk, platformId) {
    this.http = http;
    this.sdk = sdk;
    this.platformId = platformId;
    this.prefix = '/api';
    this.executeServerSideAction = (ssaName, payload, queryParams = {}, customHeaders) => {
      const request = this.http.authorize().setCustomHeaders(customHeaders);
      const url = `${this.prefix}/lambda/${ssaName}`;
      const query_params = {
        ...queryParams,
        cckey: this.checksum(this.getCCKeyString())
      };
      const params = this.encodeQueryParams(query_params);
      if (payload) {
        return request.post(url, payload, {
          params: params
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
          return data;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
        }));
      } else {
        return request.get(url, {
          params: params
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
          return data;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
        }));
      }
    };
    this.getDocument = (doc_type, doc_id, callback, customHeaders, queryParams) => {
      const query_params = {
        ...queryParams,
        cckey: this.checksum(this.getCCKeyString())
      };
      const params = this.encodeQueryParams(query_params);
      return this.http.authorize().setCustomHeaders(customHeaders).get(`${this.prefix}/${doc_type}/${doc_id}`, {
        params: params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.getDocuments = (doc_type, query_params = {}, callback, customHeaders) => {
      query_params['cckey'] = this.checksum(this.getCCKeyString());
      const cleanedObject = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omitBy)(query_params, lodash__WEBPACK_IMPORTED_MODULE_3__.isNil);
      console.log(' getDocuments query_params', cleanedObject);
      const params = this.encodeQueryParams(cleanedObject);
      console.log('params', params);
      return this.http
      // .authorize()
      .setCustomHeaders(customHeaders).get(`${this.prefix}/${doc_type}`, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.log('ASS Cached route DynamicRenderComponent RESOLVER getDocuments err => ', err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.exportData = (doc_type, query_params = {}, exportFields, callback, customHeaders) => {
      query_params['cckey'] = this.checksum(this.getCCKeyString());
      const cleanedObject = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omitBy)(query_params, lodash__WEBPACK_IMPORTED_MODULE_3__.isNil);
      console.log(' exports query_params', cleanedObject);
      const params = this.encodeQueryParams(cleanedObject);
      console.log('params', params);
      return this.http.authorize().setCustomHeaders(customHeaders).post(`${this.prefix}/export/${doc_type}`, exportFields, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        console.log('error', err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.encodeQueryParams = query_params => {
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
      console.log(query_params);
      const keys = Object.keys(query_params);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        let value = query_params[key];
        // console.log(key, value)
        if (typeof value === 'object') {
          value = JSON.stringify(value);
        }
        params = params.append(key, encodeURIComponent(value));
      }
      // console.log("params", params)
      return params;
    };
    this.createDocument = (doc_type, data, callback, customHeaders) => {
      if (!data.doc_id) {
        data.doc_id = this.generateDocId();
      }
      return this.http.authorize().setCustomHeaders(customHeaders).post(`${this.prefix}/${doc_type}/${data.doc_id}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.updateDocument = (doc_type, doc_id, data, upsert = false, callback, customHeaders) => {
      return this.http.authorize().setCustomHeaders(customHeaders).put(`${this.prefix}/${doc_type}/${doc_id}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.deleteDocument = (doc_type, doc_id, callback, customHeaders) => {
      return this.http.authorize().setCustomHeaders(customHeaders).delete(`${this.prefix}/${doc_type}/${doc_id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.createApplication = (application_id, data, callback, customHeaders) => {
      return this.http.authorize().setCustomHeaders(customHeaders).post(`${this.prefix}/application/${application_id}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        console.log('Application created successfully.', data);
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.createBulkDocuments = (data, doc_type, customHeaders) => {
      return this.http.authorize().setCustomHeaders(customHeaders).put(`${this.prefix}/dumpBulkData/${doc_type}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        console.log('Mapped fields sent successfully.', response);
        return response;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.sendEmail = (from, to, subject, body, callback, customHeaders) => {
      console.log('browser sdk');
      const email_body = {
        from: from,
        to: to,
        subject: subject,
        body: body
      };
      return this.http.authorize().setCustomHeaders(customHeaders).put(`${this.prefix}/send-email`, email_body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.generateDocId = () => {
      return Math.random().toString().slice(2, 12);
    };
    this.getWorkflowFileFromBackend = (urlPath, params) => {
      return this.http.get(`${this.prefix}/k8s/${urlPath}`, {
        responseType: 'text'
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.getCCKeyString = () => {
      const userOrgHkey = this.sdk.getUserOrgHkey();
      const orgRole = this.sdk.getUserOrgRole();
      const userRole = this.sdk.getUserRole();
      const extendedParams = this.getExtendedParams();
      if (extendedParams) {
        return `${userOrgHkey}.${orgRole}.${userRole}.${extendedParams}`;
      }
      return `${userOrgHkey}.${orgRole}.${userRole}`;
    };
    this.checksum = string => {
      let hash = 0x12345678;
      const len = string.length;
      for (let i = 0; i < len; i++) {
        hash += string.charCodeAt(i) * (i + 1);
      }
      return (hash & 0xffffffff).toString(16);
    };
    // nivy now lets keep this function here for now
    this.userContext = () => {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        const userContext = localStorage.getItem('user_context') || '{}';
        return JSON.parse(userContext);
      } else {
        // Return a default value or handle server-side logic here
        return {};
      }
    };
    this.applicationMeta = () => {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        const appContext = localStorage.getItem('app_context') || '{}';
        return JSON.parse(appContext);
      } else {
        return {};
      }
    };
    this.applicationName = () => {
      const app_context = this.applicationMeta();
      return app_context === null || app_context === void 0 ? void 0 : app_context.application_url_prefix;
    };
    this.getUserRole = () => {
      const userMeta = this.userContext();
      return userMeta === null || userMeta === void 0 ? void 0 : userMeta.user_role;
    };
    this.getOrgRole = () => {
      const userMeta = this.userContext();
      return userMeta === null || userMeta === void 0 ? void 0 : userMeta.org_role;
    };
    this.getExtendedParams = () => {
      let extendedParams = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId) ? localStorage.getItem('extended_params') || '{}' : '{}';
      extendedParams = JSON.parse(extendedParams);
      const objValues = Object.values(extendedParams);
      if (objValues.length > 0) {
        return objValues.join('.');
      }
      return false;
    };
    this.chat = (payload, customHeaders, queryParams) => {
      const cleanedObject = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omitBy)(queryParams, lodash__WEBPACK_IMPORTED_MODULE_3__.isNil);
      // console.log(" AI CHAT query_params", cleanedObject)
      const params = this.encodeQueryParams(cleanedObject);
      return this.http.authorize().setCustomHeaders(customHeaders).put(`${this.prefix}/k8s/ai-chat`, payload, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
    this.documentSummary = (payload, queryParams, customHeaders) => {
      const cleanedObject = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omitBy)(queryParams, lodash__WEBPACK_IMPORTED_MODULE_3__.isNil);
      const params = this.encodeQueryParams(cleanedObject);
      return this.http.authorize().setCustomHeaders(customHeaders).put(`${this.prefix}/k8s/doc-summarize`, payload, {
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
        console.log('data ->', data);
        return data;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
      }));
    };
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 93112:
/*!**************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/global.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalService: function() { return /* binding */ GlobalService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlatformConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlatformConstants */ 25575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 63370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/angular */ 72058);
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sentry_angular__WEBPACK_IMPORTED_MODULE_5__);



// import { DialogReferenceComponent } from 'libs/fn7-ui-renderer/src/lib/other/dialog-reference/dialog-reference.component';
// import { PrintManagerComponent } from 'libs/standalone-modules/src/lib/print-manager/print-manager.component';





class GlobalService {
  constructor(injector, zone, router, platformId) {
    this.injector = injector;
    this.zone = zone;
    this.router = router;
    this.platformId = platformId;
    this.helixUserInputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.loading = false;
    this.loadingMessage = '';
    // private globalDialogRef: MatDialogRef<any> | null = null;
    this.scope = _sentry_angular__WEBPACK_IMPORTED_MODULE_5__.getCurrentScope();
    this.userContext = () => {
      const userContext = this.getLocalStorageItem('user_context') || '{}';
      return JSON.parse(userContext);
    };
    this.getUserOrgHkey = () => {
      const userMeta = this.userContext();
      return userMeta[_PlatformConstants__WEBPACK_IMPORTED_MODULE_2__.ORG_HKEY];
    };
    this.getUserOrgRole = () => {
      const userMeta = this.userContext();
      return userMeta[_PlatformConstants__WEBPACK_IMPORTED_MODULE_2__.ORG_ROLE];
    };
    this.getUserRole = () => {
      const userMeta = this.userContext();
      return userMeta === null || userMeta === void 0 ? void 0 : userMeta.user_role;
    };
    this.applicationMeta = () => {
      const appContext = this.getLocalStorageItem(_PlatformConstants__WEBPACK_IMPORTED_MODULE_2__.APP_CONTEXT) || '{}';
      return JSON.parse(appContext);
    };
    this.applicationName = () => {
      const app_context = this.applicationMeta();
      return app_context === null || app_context === void 0 ? void 0 : app_context.application_url_prefix;
    };
    this.sentry = () => {
      return _sentry_angular__WEBPACK_IMPORTED_MODULE_5__;
    };
  }
  setLoading(loading) {
    // alert('in loader service' + loading);
    if (!loading) {
      this.loadingMessage = '';
    }
    this.loading = loading;
  }
  getLoading() {
    return this.loading;
  }
  getLoadingMessage() {
    return this.loadingMessage;
  }
  setLoadingMessage(loadingMessage) {
    this.loadingMessage = loadingMessage;
  }
  getHelixUserInput() {
    return this.helixUserInputSubject;
  }
  setHelixUserInput(input) {
    this.helixUserInputSubject.next(input);
  }
  // for no application renderer
  // private renderersErrorSubject = new Subject<string>();
  // renderersError$ = this.renderersErrorSubject.asObservable();
  // triggerRenderersError(errorMessage: string): void {
  //   this.renderersErrorSubject.next(errorMessage);
  // }
  setTheme(theme) {
    this.setLocalStorageItem('theme', theme);
  }
  get getTheme() {
    return this.getLocalStorageItem('theme') ? this.getLocalStorageItem('theme') : 'darkMode';
  }
  // get app context
  get getAppContext() {
    return JSON.parse(this.getLocalStorageItem('app_context') || '{}');
  }
  get getUSerContext() {
    return JSON.parse(this.getLocalStorageItem('user_context') || '{}');
  }
  getLocalStorageItem(key) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }
  setLocalStorageItem(key, value) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }
  // sentry methods
  setSentryTag(key, value) {
    _sentry_angular__WEBPACK_IMPORTED_MODULE_5__.setTag(key, value);
  }
  setSentryUser(user) {
    _sentry_angular__WEBPACK_IMPORTED_MODULE_5__.setUser(user);
  }
  // log to sentry
  logToSentry(error, additionalInfo) {
    // // console.log('Logging to sentry', error);
    // Sentry.setContext('character', {
    //   name: 'Mighty Fighter',
    //   age: 19,
    //   attack_type: 'melee',
    // });
    _sentry_angular__WEBPACK_IMPORTED_MODULE_5__.captureException(error, additionalInfo);
  }
  setSetryContext(name, context) {
    _sentry_angular__WEBPACK_IMPORTED_MODULE_5__.setContext(name, context);
  }
}
GlobalService.ɵfac = function GlobalService_Factory(t) {
  return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
};
GlobalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GlobalService,
  factory: GlobalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 47515:
/*!***************************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/http/api-prefix.interceptor.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiPrefixInterceptor: function() { return /* binding */ ApiPrefixInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 95989);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/no-explicit-any */






const HOST_NAME = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.makeStateKey)('HOST_NAME');
const HOST = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.makeStateKey)('HOST');
class ApiPrefixInterceptor {
  constructor(injector, platformId, transferState) {
    this.injector = injector;
    this.platformId = platformId;
    this.transferState = transferState;
  }
  intercept(request, next) {
    console.log('fn7-base-ui ApiPrefixInterceptor is called');
    const server_uri = 'https://helix.dev.app.fn7.io/'; // new URL((localStorage.getItem('server_url') ? localStorage.getItem('server_url') : localStorage.getItem('server_url')) ||  "https://carsales.dev.app.fn7.io/");
    const host_name = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId) ? location.hostname : this.transferState.get(HOST_NAME, null);
    const host = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId) ? location.host : this.transferState.get(HOST_NAME, null);
    const domain_check = request.url;
    const current_host = host_name == 'localhost' ? new URL(server_uri).host : host;
    console.log('current_host: ===>', current_host);
    // headers
    const headers = {};
    let correlationId = Math.random().toString().slice(2);
    headers['Correlation-id'] = correlationId; //uuid();
    console.log('CustomHeadersInterceptor: settings Correlation-id ', headers['Correlation-id']);
    // setting correlation  to log monitor
    // Sentry.setTag('transactionId', correlationId);
    const fn7_helix_application_id = this.getLocalStorageItem('fn7_helix_application_id') || null;
    if (fn7_helix_application_id && request.url.includes('Fn7Helix')) {
      headers['Fn7-helix-application-id'] = fn7_helix_application_id;
    }
    headers[`x-fn7-host`] = current_host;
    headers[`x-fn7-active-listener`] = this.getLocalStorageItem('activeListener') || '';
    const currentSubPlan = JSON.parse(this.getLocalStorageItem('currentPlan') || '{}');
    console.log('currentSubPlan', currentSubPlan);
    if (Object.keys(currentSubPlan).length > 0) {
      headers[`x-fn7-active-plan`] = ((currentSubPlan === null || currentSubPlan === void 0 ? void 0 : currentSubPlan.subscription_plan_id) ? currentSubPlan === null || currentSubPlan === void 0 ? void 0 : currentSubPlan.subscription_plan_id : 'standard') || ((currentSubPlan === null || currentSubPlan === void 0 ? void 0 : currentSubPlan.sub_id) ? currentSubPlan === null || currentSubPlan === void 0 ? void 0 : currentSubPlan.sub_id : 'standard');
    } else {
      headers[`x-fn7-active-plan`] = 'standard';
    }
    const requestExtendedData = JSON.parse(this.getLocalStorageItem('x-fn7-extended-data') || '{}');
    if (Object.keys(requestExtendedData).length > 0) {
      headers['x-fn7-extended-data'] = JSON.stringify(requestExtendedData);
    }
    // chare  app name here to check locally
    const dev_current_host_url = 'http://localhost:8080' + request.url; //'https://' + 'helix.dev.app.fn7.io' + request.url
    // const dev_current_host_url =
    'https://' + 'fainr.dev.app.fn7.io' + request.url;
    // Non-Fastly domains
    if (domain_check.indexOf('storage.googleapis.com') == -1 && domain_check.indexOf('dev-public-objectstore-fn7.storage.googleapis.com') == -1 && domain_check.indexOf('fn7.dev.app.fn7.io/api/file/app') == -1 && domain_check.indexOf('fn7-backend.us-central1-dev.k8s.gcp.fn7.io') == -1 && domain_check.indexOf('localhost') == -1) {
      console.log('storage.googleapis.com');
      let url = host_name !== 'localhost' ? dev_current_host_url : 'https://' + current_host + request.url;
      if (host_name !== 'localhost' && (request.url.includes('js') || request.url.includes('payment') || request.url.includes('chat'))) {
        url = `http://localhost:8080` + request.url;
      }
      console.log('CustomHeadersInterceptor: ALL HEADERS', headers, request);
      request = request.clone({
        url: url,
        setHeaders: headers
      });
    }
    // if url includes templates add platform version to the url
    if (request.url.includes('templates')) {
      const platformVersion = this.getLocalStorageItem('PLATFORM-VERSION') == 'null' ? 'V1' : this.getLocalStorageItem('PLATFORM-VERSION') || 'V1';
      request = request.clone({
        url: request.url + `?platform_version=${platformVersion}`
      });
    }
    console.log('request: ===>', request);
    // Request
    return next.handle(request);
  }
  getLocalStorageItem(key) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }
}
ApiPrefixInterceptor.ɵfac = function ApiPrefixInterceptor_Factory(t) {
  return new (t || ApiPrefixInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.TransferState));
};
ApiPrefixInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ApiPrefixInterceptor,
  factory: ApiPrefixInterceptor.ɵfac
});

/***/ }),

/***/ 73230:
/*!*********************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/http/auth.interceptor.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: function() { return /* binding */ AuthInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ 89967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);








class AuthInterceptor {
  constructor(authenticationService, platformId) {
    this.authenticationService = authenticationService;
    this.platformId = platformId;
    this.isRefreshing = false;
    this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
  }
  intercept(request, next) {
    console.log('fn7-base-ui ApiPrefixInterceptor is called');
    const idToken = this.getLocalStorageItem('id_token');
    const expirationTime = this.getLocalStorageItem('expires_at');
    // if (!idToken || !expirationTime) {
    //   this.authenticationService.logout();
    //   return throwError("No token or token expired");
    // }
    if (idToken && expirationTime) {
      const currentTime = new Date().getTime();
      const expirationTimestamp = parseInt(expirationTime, 10);
      if (currentTime > expirationTimestamp) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          const refreshToken = this.getLocalStorageItem('refresh_token');
          if (refreshToken) {
            this.refreshTokenSubject.next(null);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.authenticationService.refreshAccessToken(refreshToken)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(token => {
              this.isRefreshing = false;
              this.refreshTokenSubject.next(token);
              const idToken = this.getLocalStorageItem('id_token'); // Retrieve the refreshed idToken
              return next.handle(this.attachTokenToRequest(request, idToken));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
              this.isRefreshing = false;
              this.authenticationService.logout();
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
              this.refreshTokenSubject.next(null);
            }));
          } else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.authenticationService.refreshSession()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
              this.isRefreshing = false;
              const idToken = this.getLocalStorageItem('id_token'); // Retrieve the refreshed idToken
              return next.handle(this.attachTokenToRequest(request, idToken));
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(e => {
              this.isRefreshing = false;
              this.authenticationService.logout();
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(e);
            }));
          }
        } else {
          return this.refreshTokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(token => token !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
            const idToken = this.getLocalStorageItem('id_token'); // Retrieve the refreshed idToken
            return next.handle(this.attachTokenToRequest(request, idToken));
          }));
        }
      } else {
        return next.handle(this.attachTokenToRequest(request, idToken));
      }
    }
    return next.handle(request);
  }
  attachTokenToRequest(request, token) {
    return request.clone({
      setHeaders: {
        Authorization: token
      }
    });
  }
  getLocalStorageItem(key) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
  return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
};
AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthInterceptor,
  factory: AuthInterceptor.ɵfac
});

/***/ }),

/***/ 6168:
/*!*******************************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/http/custom-headers.interceptor.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHeadersInterceptor: function() { return /* binding */ CustomHeadersInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 48016);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class CustomHeadersInterceptor {
  constructor() {
    this.customHeaders = [];
    console.log('fn7-base-ui ApiPrefixInterceptor is called');
    console.log('configure CustomHeadersInterceptor ');
  }
  configure(options) {
    console.log('configure CustomHeadersInterceptor ', options);
    const instance = new CustomHeadersInterceptor();
    if (options && options.customHeaders) {
      instance.customHeaders = options.customHeaders;
    }
    return instance;
  }
  intercept(request, next) {
    console.log('fn7-base-ui ApiPrefixInterceptor is called');
    if (this.customHeaders.length > 0) {
      console.log('intercept CustomHeadersInterceptor ', this.customHeaders);
      const headers = {};
      lodash__WEBPACK_IMPORTED_MODULE_1__.each(this.customHeaders, (element, key) => {
        // let headerKey = _.keys(value)[0];
        // if (element.headerKey)
        headers[element.headerKey] = element.headerValue;
      });
      console.log('request intercept CustomHeadersInterceptor ', headers);
      lodash__WEBPACK_IMPORTED_MODULE_1__.each(request.headers.keys(), key => {
        console.log('existing headers CustomHeadersInterceptor ', key);
        headers[key] = request.headers.get(key);
      });
      // headers['Correlation-id'] = Math.random().toString().slice(2, 12);
      // console.log('CustomHeadersInterceptor: settings Correlation-id ', headers['Correlation-id']);
      // const fn7_helix_application_id = localStorage.getItem('fn7_helix_application_id') || null;
      // if(fn7_helix_application_id && (request.url.includes('Fn7Helix'))) {
      //   headers['Fn7-helix-application-id'] = fn7_helix_application_id;
      // }
      console.log('CustomHeadersInterceptor: ALL HEADERS', headers);
      request = request.clone({
        setHeaders: headers
      });
    }
    return next.handle(request);
  }
}
CustomHeadersInterceptor.ɵfac = function CustomHeadersInterceptor_Factory(t) {
  return new (t || CustomHeadersInterceptor)();
};
CustomHeadersInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CustomHeadersInterceptor,
  factory: CustomHeadersInterceptor.ɵfac
});

/***/ }),

/***/ 75335:
/*!******************************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/http/error-handler.interceptor.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHandlerInterceptor: function() { return /* binding */ ErrorHandlerInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snackbar.service */ 50392);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ 89967);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ 93112);










/**
 * Adds a default error handler to all requests.
 */
class ErrorHandlerInterceptor {
  constructor(injector, snackbar, gloalService) {
    this.injector = injector;
    this.snackbar = snackbar;
    this.gloalService = gloalService;
  }
  intercept(request, next) {
    console.log(' ErrorHandlerInterceptor is called');
    console.log('fn7-base-ui ApiPrefixInterceptor is called');
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => this.errorHandler(error, next, request)));
  }
  errorHandler(response, next, request) {
    var _a;
    const authenticationService = this.injector.get(_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService);
    if (response['status'] !== 200) {
      // logging to sentry
      this.gloalService.setSentryTag('ErrorStatus', response['status']);
      this.gloalService.setSetryContext('Error Info ', {
        errorMessage: (_a = response.message) !== null && _a !== void 0 ? _a : 'No message',
        name: response.name,
        url: response['url'],
        status: response['status']
      });
      this.gloalService.logToSentry(new Error('HTTP Request Failed'));
      // end of login to sentry
      if (response['status'] == 401 || response['status'] == 618) {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken && refreshToken !== 'undefined' && refreshToken !== 'null') {
          if (response['status'] == 618) {
            this.snackbar.openSnackBar('Session expired. Refreshing...');
          }
          authenticationService.refreshAccessToken(refreshToken).then(res => {
            if (res && response['status'] == 618) {
              window.location.reload();
            }
          });
        } else {
          if (response['status'] == 618) {
            this.snackbar.openSnackBar('Session expired. Refreshing...');
          }
          authenticationService.refreshSession().then(res => {
            window.location.reload();
          }).catch(error => {
            this.snackbar.openSnackBar('Session expired. Please login again.');
            authenticationService.logout();
          });
        }
      }
      if (response['status'] == 403) {
        this.snackbar.openSnackBar(response['error']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(response);
    }
    return next.handle(request);
  }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) {
  return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_6__.GlobalService));
};
ErrorHandlerInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ErrorHandlerInterceptor,
  factory: ErrorHandlerInterceptor.ɵfac
});

/***/ }),

/***/ 9767:
/*!***********************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/http/global.interceptor.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalInterceptor: function() { return /* binding */ GlobalInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32778);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ 93112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class GlobalInterceptor {
  constructor(loader) {
    this.loader = loader;
    this.requestCount = 0;
  }
  intercept(request, next) {
    console.log('GlobalInterceptor is called...');
    console.log('fn7-base-ui ApiPrefixInterceptor is called');
    console.log('loading sarted ', this.requestCount);
    // if (request.url.startsWith('/api')) {
    //   console.log('assadsadsa');
    // }
    // increment request count
    this.requestCount++;
    this.loader.setLoading(true);
    // alert(this.loader.getLoading());
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      // handle errors here if needed
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(err);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      // decrement request count
      this.requestCount--;
      // stop loader if no more requests are pending
      // if (this.requestCount === 0) {
      this.loader.setLoading(false);
      // alert(this.loader.getLoading());
      // }
    }));
  }
}

GlobalInterceptor.ɵfac = function GlobalInterceptor_Factory(t) {
  return new (t || GlobalInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService));
};
GlobalInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: GlobalInterceptor,
  factory: GlobalInterceptor.ɵfac
});

/***/ }),

/***/ 70996:
/*!*****************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/http/http.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTTP_DYNAMIC_INTERCEPTORS: function() { return /* binding */ HTTP_DYNAMIC_INTERCEPTORS; },
/* harmony export */   HttpService: function() { return /* binding */ HttpService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.interceptor */ 75335);
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.interceptor */ 73230);
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-prefix.interceptor */ 47515);
/* harmony import */ var _app_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-info.service */ 72797);
/* harmony import */ var _global_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global.interceptor */ 9767);
/* harmony import */ var _custom_headers_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-headers.interceptor */ 6168);










//allows to chain interceptors
class HttpInterceptorHandler {
  constructor(next, interceptor) {
    this.next = next;
    this.interceptor = interceptor;
  }
  handle(request) {
    console.log('fn7-base-ui ApiPrefixInterceptor is called');
    return this.interceptor.intercept(request, this.next);
  }
}
const HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
class HttpService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient {
  constructor(httpHandler, injector, interceptors = []) {
    super(httpHandler);
    this.httpHandler = httpHandler;
    this.injector = injector;
    this.interceptors = interceptors;
    if (!this.interceptors) {
      // Configure default interceptors that can be disabled here
      this.interceptors = [this.injector.get(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__.ApiPrefixInterceptor), this.injector.get(_global_interceptor__WEBPACK_IMPORTED_MODULE_6__.GlobalInterceptor), this.injector.get(_custom_headers_interceptor__WEBPACK_IMPORTED_MODULE_7__.CustomHeadersInterceptor), this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerInterceptor)];
    }
  }
  authorize() {
    console.log('authorize is called');
    return this.addInterceptor(this.injector.get(_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor));
  }
  setCustomHeaders(customHeaders) {
    return this.addInterceptor(this.injector.get(_custom_headers_interceptor__WEBPACK_IMPORTED_MODULE_7__.CustomHeadersInterceptor).configure({
      customHeaders: customHeaders
    }));
  }
  skipLoader() {
    console.log('skipLoader is called');
    return this.removeInterceptor(this.injector.get(_global_interceptor__WEBPACK_IMPORTED_MODULE_6__.GlobalInterceptor));
  }
  // Override the original method to wire all interceptors when triggering any request.
  request(method, url, options) {
    if (!this.appMetaService) {
      this.appMetaService = this.injector.get(_app_info_service__WEBPACK_IMPORTED_MODULE_5__.AppInfoService);
    }
    const handler = this.interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.httpHandler);
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient(handler).request(method, url, options);
  }
  addInterceptor(interceptor) {
    return new HttpService(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
  }
  removeInterceptor(interceptor) {
    return new HttpService(this.httpHandler, this.injector, this.interceptors.filter(i => i !== interceptor));
  }
}
HttpService.ɵfac = function HttpService_Factory(t) {
  return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HTTP_DYNAMIC_INTERCEPTORS, 8));
};
HttpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HttpService,
  factory: HttpService.ɵfac
});

/***/ }),

/***/ 50392:
/*!****************************************************************!*\
  !*** ./libs/fn7-base-lib/src/lib/services/snackbar.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarService: function() { return /* binding */ SnackbarService; }
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 75689);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class SnackbarService {
  constructor(_snackBar) {
    this._snackBar = _snackBar;
  }
  openSnackBar(message = 'No Message', action = 'Dismiss', duration = 5000, verticalPosition = 'top', horizontalPosition = 'right', panelClass = 'snackbarDefault') {
    const snackBarRef = this._snackBar.open(message, action, {
      duration: duration,
      verticalPosition: verticalPosition,
      horizontalPosition: horizontalPosition
    });
    return new Promise(resolve => {
      const snackBarRef = this._snackBar.open(message, action, {
        duration: duration,
        verticalPosition: verticalPosition,
        horizontalPosition: horizontalPosition
      });
      const actionSubscription = snackBarRef.onAction().subscribe(() => {
        resolve('action');
        actionSubscription.unsubscribe();
        dismissalSubscription.unsubscribe();
      });
      const dismissalSubscription = snackBarRef.afterDismissed().subscribe(() => {
        resolve('dismiss');
        actionSubscription.unsubscribe();
        dismissalSubscription.unsubscribe();
      });
    });
  }
  get getSnackbarInstance() {
    return this._snackBar;
  }
  disMissSnackBar() {
    console.log('dismiss');
    this._snackBar.dismiss();
  }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) {
  return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar));
};
SnackbarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SnackbarService,
  factory: SnackbarService.ɵfac,
  providedIn: 'root'
});

/***/ })

};
;
//# sourceMappingURL=libs_fn7-base-lib_src_index_ts-_f9c61.js.map