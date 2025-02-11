"use strict";
exports.id = "libs_fn7-common-lib_src_index_ts";
exports.ids = ["libs_fn7-common-lib_src_index_ts"];
exports.modules = {

/***/ 70907:
/*!******************************************!*\
  !*** ./libs/fn7-common-lib/src/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fn7CommonLibModule: function() { return /* reexport safe */ _lib_fn7_common_lib_module__WEBPACK_IMPORTED_MODULE_0__.Fn7CommonLibModule; },
/* harmony export */   Fn7SDKService: function() { return /* reexport safe */ _lib_services_fn7_sdk_service__WEBPACK_IMPORTED_MODULE_2__.Fn7SDKService; },
/* harmony export */   ListViewResolver: function() { return /* reexport safe */ _lib_resolvers_list_view_resolver__WEBPACK_IMPORTED_MODULE_5__.ListViewResolver; },
/* harmony export */   LookUpService: function() { return /* reexport safe */ _lib_services_look_up_service__WEBPACK_IMPORTED_MODULE_7__.LookUpService; },
/* harmony export */   MetaTagsServiceService: function() { return /* reexport safe */ _lib_services_meta_tags_service_service__WEBPACK_IMPORTED_MODULE_6__.MetaTagsServiceService; },
/* harmony export */   WorkflowEngineService: function() { return /* reexport safe */ _lib_services_workflow_engine_service__WEBPACK_IMPORTED_MODULE_4__.WorkflowEngineService; },
/* harmony export */   fn7CommonLibRoutes: function() { return /* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.fn7CommonLibRoutes; }
/* harmony export */ });
/* harmony import */ var _lib_fn7_common_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fn7-common-lib.module */ 43040);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 93530);
/* harmony import */ var _lib_services_fn7_sdk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/fn7-sdk.service */ 25277);
/* harmony import */ var _lib_interfaces_workFlow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/interfaces/workFlow */ 46799);
/* harmony import */ var _lib_services_workflow_engine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/workflow-engine.service */ 48111);
/* harmony import */ var _lib_resolvers_list_view_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/resolvers/list-view.resolver */ 17401);
/* harmony import */ var _lib_services_meta_tags_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/meta-tags-service.service */ 99054);
/* harmony import */ var _lib_services_look_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/services/look-up.service */ 39658);









/***/ }),

/***/ 43040:
/*!**************************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/fn7-common-lib.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fn7CommonLibModule: function() { return /* binding */ Fn7CommonLibModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 63370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib.routes */ 93530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class Fn7CommonLibModule {}
Fn7CommonLibModule.ɵfac = function Fn7CommonLibModule_Factory(t) {
  return new (t || Fn7CommonLibModule)();
};
Fn7CommonLibModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: Fn7CommonLibModule
});
Fn7CommonLibModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_2__.fn7CommonLibRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Fn7CommonLibModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 46799:
/*!************************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/interfaces/workFlow.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 93530:
/*!***************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/lib.routes.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fn7CommonLibRoutes: function() { return /* binding */ fn7CommonLibRoutes; }
/* harmony export */ });
const fn7CommonLibRoutes = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];

/***/ }),

/***/ 17401:
/*!*********************************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/resolvers/list-view.resolver.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListViewResolver: function() { return /* binding */ ListViewResolver; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 63370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_fn7_sdk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fn7-sdk.service */ 25277);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 48016);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_meta_tags_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/meta-tags-service.service */ 99054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);











class ListViewResolver {
  constructor(http, sdk,
  // private appStateService: AppStateService,
  reuser, metaTagsService) {
    this.http = http;
    this.sdk = sdk;
    this.reuser = reuser;
    this.metaTagsService = metaTagsService;
  }
  resolve(route, state) {
    var _a;
    const startTime = Date.now(); // Record start time
    const routePath = this.getCurrentURL(route);
    const doc_options = (_a = route.params['doc_options']) === null || _a === void 0 ? void 0 : _a.split('-');
    this.global_doc_options = doc_options;
    const doc_type = doc_options[0];
    const doc_id = doc_options[1];
    console.log('doc_type', doc_type);
    const queryParams = this.extractQueryParams(route);
    if (this.reuser.shouldAttach(route)) {
      return this.resolveFromCache(routePath, doc_type, queryParams);
    }
    const userRole = this.sdk.getUserRole() || 'Consumer';
    const subScriptionPlan = this.getSubscriptionPlan();
    const {
      schemaName,
      uiSchemaName
    } = this.getSchemaNames(doc_type, userRole, subScriptionPlan, doc_id ? 'detail' : 'list');
    const baseUrl = this.getBaseUrl();
    const current_host = this.getCurrentHost();
    const JsonSchema = this.http.get(`${baseUrl}/${current_host}/templates/${schemaName}`);
    const JsonUiSchema = this.http.get(`${baseUrl}/${current_host}/templates/${uiSchemaName}`);
    const JsonData = doc_id ? this.sdk.getDocument(doc_type, doc_id) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({});
    console.log('doc_id', doc_id, doc_type);
    console.log('JsonSchemaUrl', `${baseUrl}/${current_host}/templates/${schemaName}`, `${baseUrl}/${current_host}/templates/${uiSchemaName}`);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
      JsonSchema,
      JsonUiSchema,
      JsonData
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => this.handleError(err)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      const executionTime = Date.now() - startTime;
      console.log(`Resolver execution time: ${executionTime} ms`);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(data => this.mapData(data, routePath, doc_type, doc_id, queryParams)));
  }
  getCurrentURL(routeSnapshot) {
    const segments = routeSnapshot.pathFromRoot.map(s => s.url.map(segment => segment.path).join('/')).filter(path => path).join('/');
    const queryParams = new URLSearchParams(routeSnapshot.queryParams).toString();
    return `/${segments}?${queryParams}`;
  }
  extractQueryParams(route) {
    const filter = JSON.parse((0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(route.queryParams, 'filter', '{}'));
    const esFilter = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(route.queryParams, 'esFilter', undefined);
    if (filter['filter'] && esFilter) {
      filter['filter'] = `${filter['filter']} AND ${esFilter}`;
    } else if (esFilter) {
      filter['filter'] = esFilter;
    }
    return (0,lodash__WEBPACK_IMPORTED_MODULE_4__.omitBy)({
      filter: filter['filter'],
      sortBy: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(route.queryParams, 'sortBy', undefined),
      search: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(route.queryParams, 'search', undefined),
      page: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(route.queryParams, 'page', 1),
      perPage: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(route.queryParams, 'perPage', 10),
      serverSideAction: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.get)(route.queryParams, 'serverSideAction', undefined)
    }, lodash__WEBPACK_IMPORTED_MODULE_4__.isNil);
  }
  resolveFromCache(routePath, doc_type, queryParams) {
    const data$ = this.sdk.getDocuments(doc_type, queryParams);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      isCachedRoute: true,
      data$: data$,
      isListView: true,
      routePath: routePath
    });
  }
  getSubscriptionPlan() {
    const currentSubPlan = this.sdk.isPlatformBrowser() ? JSON.parse(localStorage.getItem('currentPlan') || '{}') : {};
    return currentSubPlan.subscription_plan_id || currentSubPlan.sub_id;
  }
  getSchemaNames(doc_type, userRole, subScriptionPlan, view = 'detail') {
    if (subScriptionPlan) {
      return {
        schemaName: `${doc_type}_${userRole}_${subScriptionPlan}.jsonschema.json`,
        uiSchemaName: `${doc_type}_${userRole}_${subScriptionPlan}.${view}.uischema.json`
      };
    }
    return {
      schemaName: `${doc_type}_${userRole}.jsonschema.json`,
      uiSchemaName: `${doc_type}_${userRole}.${view}.uischema.json`
    };
  }
  getBaseUrl() {
    return this.sdk.getHostName() === 'localhost' ? 'http://localhost:8080/api/k8s/helika' : '/api/k8s/helika';
  }
  getCurrentHost() {
    const appName = 'helix'; //this.sdk.applicationName();
    return appName;
    // return window.location.hostname === 'localhost'
    //   ? appName
    //   : window.location.host.split('.')[0];
  }

  handleError(err) {
    console.error('Error in fetching data', err);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      JsonSchema: {},
      JsonUiSchema: {},
      JsonData: {}
    });
  }
  mapData(data, routePath, doc_type, doc_id = '', queryParams) {
    var _a, _b, _c, _d;
    console.log('data', data);
    const JsonData = ((_b = (_a = data.JsonData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) > 0 ? data.JsonData.data : {};
    const additionalData = {
      totalRecords: data.JsonData.total,
      appliedSearchParam: queryParams.search,
      appliedSortByParams: queryParams.sortBy,
      appliedFilters: queryParams.filter,
      jsonFormInstanceKey: doc_type,
      page: queryParams.page,
      recordsPerPage: queryParams.perPage
    };
    // this.appStateService.setView('list');
    // update meta Tags for SEO
    console.log('data.JsonSchema?.metaTages', (_c = data.JsonSchema) === null || _c === void 0 ? void 0 : _c.metaTags);
    this.metaTagsService.updateMetaTags((_d = data.JsonSchema) === null || _d === void 0 ? void 0 : _d.metaTags);
    const oa = this.sdk.isPlatformBrowser() ? JSON.parse(localStorage.getItem('oa') || '{}') : '';
    console.log('oa ->', oa);
    const localStorageData = oa[this.global_doc_options];
    return {
      JsonSchema: data.JsonSchema,
      JsonUiSchema: data.JsonUiSchema,
      JsonData: doc_id ? JsonData[0] : JsonData ? localStorageData ? localStorageData : {} : {},
      additionalData,
      routePath,
      doc_type
    };
  }
}
ListViewResolver.ɵfac = function ListViewResolver_Factory(t) {
  return new (t || ListViewResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_fn7_sdk_service__WEBPACK_IMPORTED_MODULE_2__.Fn7SDKService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouteReuseStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_meta_tags_service_service__WEBPACK_IMPORTED_MODULE_5__.MetaTagsServiceService));
};
ListViewResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: ListViewResolver,
  factory: ListViewResolver.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 25277:
/*!*****************************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/services/fn7-sdk.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fn7SDKService: function() { return /* binding */ Fn7SDKService; }
/* harmony export */ });
/* harmony import */ var _Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/fn7-base-lib */ 15051);
/* harmony import */ var _app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 95989);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 63370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 39641);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var libs_ssr_fn7_ui_renderer_src_lib_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! libs/ssr-fn7-ui-renderer/src/lib/shared/dialog/dialog.component */ 50383);













// Server state keys
const APP_INFO = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.makeStateKey)('APP_INFO');
const FN7_PLATFORM_VERSION = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.makeStateKey)('PLATFORM-VERSION');
const HOST_NAME = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.makeStateKey)('HOST_NAME');
const HOST = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.makeStateKey)('HOST');
class Fn7SDKService {
  constructor(dataService, platformId, transferState, snckBar, injector, router, zone) {
    this.dataService = dataService;
    this.platformId = platformId;
    this.transferState = transferState;
    this.snckBar = snckBar;
    this.injector = injector;
    this.router = router;
    this.zone = zone;
    // "Navigation," "Forms," "User Engagement," "Media,"
    this.defaultCategory = 'Navigationv';
    // "Click," "Submit," "View," "Play," "Download,"
    this.defaultAction = 'Click';
    this.globalDialogRef = null;
    this.getWorkflowFileFromBackend = (urlPath, params) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this.dataService.getWorkflowFileFromBackend(urlPath, params));
    };
    this.executeServerSideAction = (ssaName, payload, query_params, customHeaders) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.dataService.executeServerSideAction(ssaName, payload, query_params, customHeaders));
    };
    // CRUD operations
    this.createDocument = (doc_type, data, callback, customHeaders) => {
      console.log('client-sdk');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.dataService.createDocument(doc_type, data, callback, customHeaders || []));
    };
    this.getDocuments = (doc_type, params, callback, customHeaders) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.dataService.getDocuments(doc_type, params, callback, customHeaders || []));
    };
    this.getDocument = (doc_type, doc_id, params, callback, customHeaders) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.dataService.getDocument(doc_type, doc_id, params, callback, customHeaders || []));
    };
    this.updateDocument = (doc_type, doc_id, data, upsert, callback, customHeaders) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.dataService.updateDocument(doc_type, doc_id, data, upsert, callback, customHeaders || []));
    };
    this.deleteDocument = (doc_type, doc_id, callback, customHeaders) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.dataService.deleteDocument(doc_type, doc_id, callback, customHeaders || []));
    };
    // context operations
    this.applicationMeta = () => {
      return this.dataService.applicationMeta();
    };
    this.applicationName = () => {
      return this.dataService.applicationName();
    };
    this.userContext = () => {
      return this.dataService.userContext();
    };
    this.getUserRole = () => {
      const userMeta = this.userContext();
      return userMeta === null || userMeta === void 0 ? void 0 : userMeta.user_role;
    };
    this.getOrgRole = () => {
      const userMeta = this.userContext();
      return userMeta === null || userMeta === void 0 ? void 0 : userMeta.org_role;
    };
    // browser or server side
    this.isPlatformBrowser = () => {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId);
    };
    this.getHost = () => {
      if (this.isPlatformBrowser()) {
        return window.location.host;
      } else {
        return this.transferState.get(HOST, null);
      }
    };
    this.getHostName = () => {
      if (this.isPlatformBrowser()) {
        return window.location.hostname;
      } else {
        return this.transferState.get(HOST_NAME, null);
      }
    };
    // angular based methods
    this.navigateTo = (doc_type, mode, doc_id, params) => {
      const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
      console.log('params', params);
      const ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
      ngZone.run(() => {
        if (doc_id && mode == 'edit') {
          router.navigate([`/admin/dynamic/${doc_type}/${doc_id}/edit`]);
        } else if (doc_id) {
          router.navigate([`/admin/dynamic/${doc_type}/${doc_id}`], params ? {
            queryParams: params
          } : {});
        } else if (mode == 'new') {
          router.navigate([`/admin/dynamic/${doc_type}/new`], params ? {
            queryParams: params
          } : {});
        } else {
          router.navigate([`/admin/dynamic/${doc_type}`], params ? {
            queryParams: params
          } : {});
        }
      });
    };
    this.navigateToHeadless = (doc_type, mode, doc_id, params, oa) => {
      const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
      const ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
      try {
        ngZone.run(() => {
          if (oa) {
            if (doc_id && mode == 'detail') {
              router.navigate([`/admin/oa/headless/dynamic/${doc_type}/${doc_id}`], params ? {
                queryParams: params
              } : {});
            } else {
              router.navigate([`/admin/oa/headless/dynamic/${doc_type}/new`], params ? {
                queryParams: params
              } : {});
            }
          } else {
            if (doc_id && mode == 'detail') {
              router.navigate([`/admin/headless/dynamic/${doc_type}/${doc_id}`], params ? {
                queryParams: params
              } : {});
            } else if (mode == 'new') {
              router.navigate([`/admin/headless/dynamic/${doc_type}/new`], params ? {
                queryParams: params
              } : {});
            } else {
              router.navigate([`/admin/headless/dynamic/${doc_type}`], params ? {
                queryParams: params
              } : {});
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    this.navigateToComponent = (url, data) => {
      console.log('SAIKUMAR,', url, data);
      const ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
      try {
        ngZone.run(() => {
          // Ensure queryParamsHandling is 'merge' by default
          const navigationExtras = {
            ...data,
            queryParamsHandling: 'merge'
          };
          this.router.navigate([url], navigationExtras);
        });
      } catch (e) {
        console.log(e);
      }
    };
    this.openSnackBar = (message, action, duration, verticalPosition, horizontalPosition) => {
      this.snckBar.openSnackBar(message, action, duration);
    };
    this.openDialogRef = (config, callback) => {
      var _a, _b;
      const dialog = this.injector.get(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog);
      let dialogRef;
      let subscription;
      const closeOnNavigation = ((_a = config === null || config === void 0 ? void 0 : config.modal_config) === null || _a === void 0 ? void 0 : _a.closeOnNavigation) == undefined ? true : (_b = config === null || config === void 0 ? void 0 : config.modal_config) === null || _b === void 0 ? void 0 : _b.closeOnNavigation;
      return new Promise((resolve, reject) => {
        this.zone.run(() => {
          dialogRef = dialog.open(libs_ssr_fn7_ui_renderer_src_lib_shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__.DialogComponent, {
            data: config,
            ...config.modal_config
          });
          this.globalDialogRef = dialogRef;
        });
        if (closeOnNavigation) {
          subscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationStart) {
              dialogRef.close();
              subscription.unsubscribe();
            }
          });
        }
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log('result', result);
          resolve(result);
        });
      });
    };
  }
  trackEvent({
    category,
    action,
    label = '',
    value = null
  }) {
    var _this = this;
    return (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.GtrackEvent({
        category: category,
        action: action,
        label: label,
        value: value
      });
    })();
  }
  GtrackEvent({
    category = this.defaultCategory,
    action = this.defaultAction,
    label = '',
    value = null
  }) {
    console.log('trackevent', action, label, value, category);
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  eventEmitter(eventName, eventCategory, eventAction, eventLabel = null, eventValue = null) {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_action: eventAction,
      event_label: eventLabel,
      event_value: eventValue
    });
  }
  closeDialogRef() {
    if (this.globalDialogRef) {
      this.globalDialogRef.close();
    }
  }
  copyURLToClipBoard(url) {
    navigator.clipboard.writeText(url);
  }
}
Fn7SDKService.ɵfac = function Fn7SDKService_Factory(t) {
  return new (t || Fn7SDKService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.TransferState), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
Fn7SDKService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Fn7SDKService,
  factory: Fn7SDKService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 39658:
/*!*****************************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/services/look-up.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LookUpService: function() { return /* binding */ LookUpService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 40104);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/fn7-base-lib */ 15051);
/* harmony import */ var _app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);






class LookUpService {
  constructor(http, injector) {
    this.http = http;
    this.injector = injector;
    console.log('fn7 helika constructor LookUpService');
  }
  getSchemasAndData(args, refConfig) {
    // console.log('In getSchemasAndData', args);
    var _a;
    const fn7Sdk = this.injector.get(_app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__.DataService);
    // let fn7Sdk = args.fn7Sdk;
    // let doc_type = args.doc_type;
    // let doc_id = args.doc_id;
    // let doc_type_filter = args.doc_type_filter;
    // let JsonFileName = args.additional_data?.jsonSchemaRef;
    // let JsonUiFileName = args.additional_data?.uiSchemaRef;
    // let action_type = args.additional_data?.action_type;
    // let data_filter = args.additional_data?.data_filter;
    // let mode = args.mode;
    // let fn7Sdk = args.fn7Sdk;
    // // console.log('fn7Sdk',this.fn7Sdk);
    const doc_type = args === null || args === void 0 ? void 0 : args.doc_type;
    const doc_id = args === null || args === void 0 ? void 0 : args.doc_id;
    let JsonFileName = args === null || args === void 0 ? void 0 : args.jsonSchemaRef;
    let JsonUiFileName = args === null || args === void 0 ? void 0 : args.uiSchemaRef;
    const template_name = args === null || args === void 0 ? void 0 : args.template_name;
    const requestParams = (_a = args === null || args === void 0 ? void 0 : args.filters) === null || _a === void 0 ? void 0 : _a.data;
    const mode = args.mode;
    const userRole = fn7Sdk.getUserRole();
    const fetch_data = args.hasOwnProperty('fetch_data') ? args.fetch_data : true;
    const fetch_schemas = args.hasOwnProperty('fetch_schemas') ? args.fetch_schemas : true;
    let JsonData;
    let JsonSchema;
    let JsonUiSchema;
    const current_host = window.location.hostname == 'localhost' ? 'helix' : window.location.host.split('.')[0];
    let baseUrl = '/api/k8s/helika';
    if (location.hostname === 'localhost') {
      baseUrl = `http://localhost:8080/api/k8s/helika`;
    }
    if (fetch_schemas) {
      if (!JsonFileName || !JsonUiFileName) {
        if (template_name) {
          JsonFileName = `${doc_type}.${template_name}.jsonschema.json`;
          JsonUiFileName = `${doc_type}.${template_name}.${mode}.uischema.json`;
        } else {
          JsonFileName = `${doc_type}_${userRole}.jsonschema.json`;
          JsonUiFileName = `${doc_type}_${userRole}.${mode}.uischema.json`;
        }
      }
      JsonSchema = this.http.get(`${baseUrl}/${current_host}/templates/${JsonFileName}`);
      JsonUiSchema = this.http.get(`${baseUrl}/${current_host}/templates/${JsonUiFileName}`);
    } else {
      JsonSchema = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({});
      JsonUiSchema = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({});
    }
    if (fetch_data) {
      if (requestParams && (requestParams['page'] == undefined || requestParams['page'] == null)) {
        requestParams['page'] = 1;
      }
      if (mode == 'list') {
        JsonData = fn7Sdk.getDocuments(doc_type, requestParams ? requestParams : {});
      }
      if (mode == 'create') {
        JsonData = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({});
      }
      if (mode == 'detail') {
        JsonData = fn7Sdk.getDocument(doc_type, doc_id, requestParams ? requestParams : {});
      }
    } else {
      JsonData = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({});
    }
    const dataTosend = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
      JsonSchema,
      JsonUiSchema,
      JsonData
    });
    return dataTosend.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      console.error('err', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        JsonSchema: {},
        JsonUiSchema: {},
        Jsondata: {}
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(data => {
      // console.log('data', data);
      const JsonData = data.JsonData.data;
      const JsonSchema = data.JsonSchema;
      const JsonUiSchema = data.JsonUiSchema;
      let additionalData = {};
      additionalData['totalRecords'] = data.JsonData.total;
      additionalData['doc_type'] = data.JsonData.doc_type;
      additionalData['jsonFormInstanceKey'] = additionalData['doc_type'];
      additionalData['recordsPerPage'] = (refConfig === null || refConfig === void 0 ? void 0 : refConfig.recordsPerPage) || 10;
      const dataToSend = {
        JsonSchema,
        JsonUiSchema,
        JsonData,
        additionalData
      };
      // console.log('dataToSend', dataToSend);
      return dataToSend;
    }));
  }
  getLookUpData(args) {
    var _a;
    const fn7Sdk = this.injector.get(_app_fn7_base_lib__WEBPACK_IMPORTED_MODULE_2__.DataService);
    const data_filter = (_a = args === null || args === void 0 ? void 0 : args.additional_data) === null || _a === void 0 ? void 0 : _a.data_filter;
    // console.log('getLookUpData', data_filter);
    if (args.doc_type && args.doc_id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(fn7Sdk.getDocument(args.doc_type, args.doc_id, data_filter ? data_filter : {}));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(fn7Sdk.getDocuments(args.doc_type, data_filter ? data_filter : {}));
    }
  }
  getUploadSignedUrl1() {
    // let gcpSdk = this.injector.get(GcpSdkService);
    // let appName = args.appName;
    // let fileName = args.fileName;
    // return firstValueFrom(gcpSdk.getUploadSignedUrl(appName,fileName));
  }
}
LookUpService.ɵfac = function LookUpService_Factory(t) {
  return new (t || LookUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
LookUpService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LookUpService,
  factory: LookUpService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 99054:
/*!***************************************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/services/meta-tags-service.service.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaTagsServiceService: function() { return /* binding */ MetaTagsServiceService; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 95989);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class MetaTagsServiceService {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
  }
  updateMetaTags(Tags = []) {
    Tags.forEach(tag => {
      if (tag.name === 'title') {
        this.titleService.setTitle(tag.content);
      } else {
        this.metaService.updateTag({
          name: tag.name,
          content: tag.content
        });
      }
    });
  }
}
MetaTagsServiceService.ɵfac = function MetaTagsServiceService_Factory(t) {
  return new (t || MetaTagsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.Meta));
};
MetaTagsServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MetaTagsServiceService,
  factory: MetaTagsServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 48111:
/*!*************************************************************************!*\
  !*** ./libs/fn7-common-lib/src/lib/services/workflow-engine.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowEngineService: function() { return /* binding */ WorkflowEngineService; }
/* harmony export */ });
/* harmony import */ var _Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _fn7_sdk_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn7-sdk.service */ 25277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class WorkflowEngineService {
  constructor(fn7SDK // private jsonContext?: JsonFormContextService
  ) {
    var _this = this;
    this.fn7SDK = fn7SDK;
    this.strings = 'WorkFlowEngine';
    this.executor = (workFlowHandle, callback) => {
      console.log(this.strings, workFlowHandle);
      // const k = this.fn7SDK.isOnline();
      // console.log(k);
      if (workFlowHandle.fn7_workflow_id) {
        return this.triggerStatefullWorkflow(`${workFlowHandle.fn7_workflow_id}Workflow.js`, workFlowHandle, callback);
      } else {
        const isGlobal = /^(global)/i.test(workFlowHandle.action);
        const fileName = isGlobal ? 'globalFunctions.js' : 'stateless-workflow.js';
        return this.triggerStatelessWorkflow(fileName, workFlowHandle, callback);
      }
    };
    this.triggerStatefullWorkflow = (path = './myjsfile', workFlowHandle, callback) => {
      try {
        console.log('triggerStatefullWorkflow => ', path);
        // return new Promise((resolve, reject) => {
        this.loadWorkFlowClass(path).then(factory => {
          // const instance = new MyClass();
          console.log('triggerStatefullWorkflow FACTORY=> ', factory, workFlowHandle);
          factory.strings = 'wewe';
          const implementation_instance = {
            workflow_context: workFlowHandle,
            fn7_sdk: this.fn7SDK,
            jsonFormsContextSDK: this.jsonContext && this.jsonContext,
            json_form_instance: this.jsonContext && this.jsonContext.getJsonContext(),
            getNextActions: workFlowHandle.getNextActions || false,
            role_context: '',
            user_context: '',
            org_context: '',
            callback: callback
          };
          factory = new factory(implementation_instance, callback);
          factory.run();
          // Use the instance of MyClass here
          console.log('---end-----');
          // factory.print();
          // factory.executor();
          // instance.print();
        });
        // return resolve(true);
        // });
        return true;
      } catch (e) {
        console.log('errrrr');
        console.log(e);
        return true;
      }
    };
    this.triggerStatelessWorkflow = (path = './myjsfile', workFlowHandle, callback) => {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            console.log('triggerStatelessWorkflow => ', callback);
            const implementation_instance = {
              workflow_context: workFlowHandle,
              fn7_sdk: _this.fn7SDK,
              getNextActions: workFlowHandle.getNextActions || false,
              role_context: '',
              user_context: '',
              org_context: '',
              jsonFormsContextSDK: _this.jsonContext && _this.jsonContext,
              json_form_instance: _this.jsonContext && _this.jsonContext.getJsonContext(),
              callback: callback
            };
            if (!_this.factory) {
              _this.loadWorkFlowClass(path).then( /*#__PURE__*/function () {
                var _ref2 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (factory) {
                  console.log('triggerStatelessWorkflow FACTORY=> ', factory, workFlowHandle);
                  factory.strings = 'wewe';
                  _this.factory = new factory(implementation_instance, callback);
                  if (workFlowHandle.async_action) {
                    console.log('async');
                    try {
                      const res = yield _this.factory[workFlowHandle.action](callback);
                      console.log(res);
                      resolve(res);
                    } catch (error) {
                      console.error('Error in async operation:', error);
                      reject(error);
                    }
                  } else {
                    _this.factory[workFlowHandle.action](callback);
                    resolve(true);
                  }
                  console.log('---end-----');
                });
                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }()).catch(error => {
                console.error('Error loading workflow class:', error);
                reject(error);
              });
            } else {
              _this.factory['setWorkflowEngineObject'](implementation_instance);
              if (workFlowHandle.async_action) {
                console.log('async');
                try {
                  const res = yield _this.factory[workFlowHandle.action](callback);
                  console.log(res);
                  resolve(res);
                } catch (error) {
                  console.error('Error in async operation:', error);
                  reject(error);
                }
              } else {
                _this.factory[workFlowHandle.action](callback);
                resolve(true);
              }
            }
          } catch (e) {
            console.log('errrrr');
            console.log(e);
            reject(e);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    };
    this.loadWorkFlowClass = /*#__PURE__*/function () {
      var _ref3 = (0,_Users_karthikch_Downloads_fn7_main_ui_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (path) {
        try {
          if (!_this.workflow) {
            console.log(`Nivyyyy workflow isnt there! - ${path}`);
            // const myModule = await import(`${path}.js`);
            // this.workflow = myModule.defaultx
            const appContext = _this.fn7SDK.applicationMeta();
            const appName = appContext.application_url_prefix;
            const filePath = `helika/${appName}/workflows/${path}`;
            const textFile = yield _this.fn7SDK.getWorkflowFileFromBackend(filePath, {
              platform_version: localStorage.getItem('PLATFORM-VERSION') || '1'
            }).then(res => res).catch(err => {
              console.log('errrrr');
              console.log(err);
            });
            const jsClass = eval(`(${textFile})`);
            _this.workflow = jsClass;
            return jsClass;
          }
          console.log(`Nivyyyy workflow IS there! - ${path}`);
          return _this.workflow;
        } catch (e) {
          console.log('errrrr');
          console.log(e);
          return Promise.resolve('return something nice ');
        }
      });
      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }();
  }
}
WorkflowEngineService.ɵfac = function WorkflowEngineService_Factory(t) {
  return new (t || WorkflowEngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fn7_sdk_service__WEBPACK_IMPORTED_MODULE_1__.Fn7SDKService));
};
WorkflowEngineService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: WorkflowEngineService,
  factory: WorkflowEngineService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 50383:
/*!****************************************************************************!*\
  !*** ./libs/ssr-fn7-ui-renderer/src/lib/shared/dialog/dialog.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogComponent: function() { return /* binding */ DialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 39641);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 75689);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jsonforms_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsonforms/core */ 9473);
/* harmony import */ var _jsonforms_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jsonforms_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 48016);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44866);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_fn7_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/fn7-common-lib */ 81891);
/* harmony import */ var _app_fn7_common_lib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_fn7_common_lib__WEBPACK_IMPORTED_MODULE_6__);



// import { JsonFormContextService } from '@app/fn7-ui-renderer';
// import { DialogReferenceComponent } from '@app/standalone-modules';

// import { LookUpService } from 'libs/fn7-ui-renderer/src/lib/services/look-up.service';







const _c0 = ["jsonforms"];
function DialogComponent_h1_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.title);
  }
}
function DialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ssr-fn7-ui-renderer", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function DialogComponent_ng_container_2_Template_ssr_fn7_ui_renderer_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onDataChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.Jsondata)("schema", ctx_r1.JsonSchema)("uischema", ctx_r1.JsonUiSchema)("additionalData", ctx_r1.additionalData)("isDialogInstance", true);
  }
}
function DialogComponent_mat_dialog_actions_4_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_mat_dialog_actions_4_ng_container_1_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.removeInstance());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r7.data.actions == null ? null : ctx_r7.data.actions.secondary) || "", " ");
  }
}
function DialogComponent_mat_dialog_actions_4_ng_container_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_mat_dialog_actions_4_ng_container_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r8.data.actions == null ? null : ctx_r8.data.actions.primary) || "Close", " ");
  }
}
function DialogComponent_mat_dialog_actions_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogComponent_mat_dialog_actions_4_ng_container_1_button_1_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogComponent_mat_dialog_actions_4_ng_container_1_button_2_Template, 2, 1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.actions == null ? null : ctx_r6.data.actions.secondary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.actions == null ? null : ctx_r6.data.actions.primary);
  }
}
function DialogComponent_mat_dialog_actions_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogComponent_mat_dialog_actions_4_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.JsonUiSchema);
  }
}
class DialogComponent {
  constructor(data, injector,
  // private jsonFormContextService: JsonFormContextService,
  _snackBar, dialogRef) {
    this.data = data;
    this.injector = injector;
    this._snackBar = _snackBar;
    this.dialogRef = dialogRef;
    this.horizontalPosition = 'end';
    this.verticalPosition = 'top';
    this.Jsondata = {};
    this.ChangedData = {};
    this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.additionalData = {};
    this.ajv = (0,_jsonforms_core__WEBPACK_IMPORTED_MODULE_3__.createAjv)({
      allErrors: true
    });
  }
  ngOnInit() {
    console.log('Dialog', this.data);
    this.getSchemas();
  }
  getSchemas() {
    var _a;
    let config = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.schemaConfig) ? this.data : this.schemaConfig;
    console.log('configaaaaaa', config);
    this.args = {
      doc_type: config.doc_type,
      doc_id: config === null || config === void 0 ? void 0 : config.doc_id,
      mode: config.mode,
      additional_data: config.additional_data,
      template_name: config === null || config === void 0 ? void 0 : config.template_name,
      filters: config === null || config === void 0 ? void 0 : config.filters,
      isMultiSelect: config === null || config === void 0 ? void 0 : config.isMultiSelect,
      hasBackdrop: config === null || config === void 0 ? void 0 : config.hasBackdrop,
      data: config === null || config === void 0 ? void 0 : config.data,
      fetch_schemas: config.schema && config.uiSchema ? false : true,
      fetch_data: ((_a = config.data) === null || _a === void 0 ? void 0 : _a.length) > 0 || Object.keys(config.data).length > 0 ? false : true
    };
    this.loading$.next(true);
    // inject look service in closed
    let lookUpService = this.injector.get(_app_fn7_common_lib__WEBPACK_IMPORTED_MODULE_6__.LookUpService);
    // const injector = Injector.create({ providers: [], parent: this.injector });
    // const lookUpService = injector.get(LookUpService);
    lookUpService.getSchemasAndData(this.args).subscribe(data => {
      var _a, _b;
      console.log('%c data', 'font-size:20px; color:blue', data);
      let totalRecords;
      if (this.args.fetch_schemas) {
        this.JsonSchema = data === null || data === void 0 ? void 0 : data.JsonSchema;
        this.JsonUiSchema = data === null || data === void 0 ? void 0 : data.JsonUiSchema;
      } else {
        this.JsonSchema = config.schema;
        this.JsonUiSchema = config.uiSchema;
      }
      if (((_a = this.args.data) === null || _a === void 0 ? void 0 : _a.length) > 0 || Object.keys(this.args.data).length > 0) {
        this.Jsondata = this.args.data;
        totalRecords = this.args.data.length;
      } else {
        this.Jsondata = (data === null || data === void 0 ? void 0 : data.JsonData) || {};
      }
      if (this.args.hasBackdrop) {
        this.dialogRef.disableClose = true;
      }
      if (this.args['mode'] == 'list') {
        lodash__WEBPACK_IMPORTED_MODULE_4___default().set(this.JsonUiSchema, 'options.show_actions', true);
        lodash__WEBPACK_IMPORTED_MODULE_4___default().set(this.JsonUiSchema, 'options.isSelectable', true);
        lodash__WEBPACK_IMPORTED_MODULE_4___default().set(this.JsonUiSchema, 'options.hide_addnew', true);
        if (this.args.isMultiSelect) {
          lodash__WEBPACK_IMPORTED_MODULE_4___default().set(this.JsonUiSchema, 'options.isMultiSelect', true);
        }
        // updating selectd values with maping field
        // console.log(this.data?.data[this.data.maping_field])
        // this.Jsondata?.map((item: any) => {
        //     this.data.data[this.data.maping_field]?.map((selectedItem: any) => {
        //       if(item.doc_id == selectedItem.doc_id) {
        //         item.checked = true
        //       }
        //     })
        // })
      }

      this.loading$.next(false);
      let additionalData = data.additionalData;
      this.additionalData['totalRecords'] = additionalData['totalRecords'] ? additionalData['totalRecords'] : totalRecords;
      this.additionalData['doc_type'] = this.JsonSchema.doc_type;
      this.additionalData['jsonFormInstanceKey'] = `Dialog-${(_b = this.JsonSchema) === null || _b === void 0 ? void 0 : _b.doc_type}`;
      this.additionalData['recordsPerPage'] = this.JsonUiSchema.options.recordsPerPage || 10;
      this.additionalData['page'] = 1;
      console.log('this.Jsondata', this.Jsondata, this.additionalData);
      console.log('this.JsonUiSchema', this.JsonUiSchema);
      console.log('this.JsonSchema', this.JsonSchema);
    });
  }
  openSnackBar() {
    this._snackBar.open('Fill Required Fields', 'Dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }
  validateData(data, schema) {
    const validate = this.ajv.compile(schema);
    // console.log(updatedData);
    const valid = validate(data);
    if (!valid) {
      console.error('Validation errors:', validate.errors);
    }
    return valid;
  }
  onDataChange(event) {
    console.log('onDataChange', event);
    this.ChangedData = event;
    console.log('onDataChange', this.Jsondata);
    // this.Jsondata = event
  }

  removeInstance() {
    // this.jsonFormContextService.deleteDialog(
    //   this.additionalData['jsonFormInstanceKey']
    // );
  }
  closeDialog() {
    const dialogData = {
      /* Data you want to pass back to the parent component */
    };
    console.log('dialogData', this.jsonforms1);
    let ChangedData = this.jsonforms1.jsonforms1.jsonformsService._state.core.data;
    if (!Array.isArray(ChangedData)) {
      const isValid = this.validateData(ChangedData, this.JsonSchema);
      if (!isValid) {
        this.jsonforms1.jsonforms1.jsonformsService.updateValidationMode('ValidateAndShow');
        this.openSnackBar();
        return;
      }
    }
    console.log('ChangedData', ChangedData);
    // if(this.args.mode == 'list') {
    //   ChangedData = ChangedData.filter((item: any) => item.checked == true)
    // }
    this.dialogRef.close(ChangedData);
    // this.removeInstance();
  }
}

DialogComponent.ɵfac = function DialogComponent_Factory(t) {
  return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
DialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DialogComponent,
  selectors: [["ssr-dialog"]],
  viewQuery: function DialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.jsonforms1 = _t.first);
    }
  },
  inputs: {
    schemaConfig: "schemaConfig"
  },
  decls: 5,
  vars: 6,
  consts: [["mat-dialog-title", "", 4, "ngIf"], ["id", "Dialog", 3, "ngClass"], [4, "ngIf"], ["align", "end", "class", "flex items-center gap-4 !p-5", 4, "ngIf"], ["mat-dialog-title", ""], [3, "data", "schema", "uischema", "additionalData", "isDialogInstance", "onChange"], ["jsonforms", ""], ["align", "end", 1, "flex", "items-center", "gap-4", "!p-5"], ["mat-stroked-button", "", "color", "primary", "cdkFocusInitial", "", "matDialogClose", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "btn-m", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "cdkFocusInitial", "", "matDialogClose", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn-m", 3, "click"]],
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogComponent_h1_0_Template, 2, 1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogComponent_ng_container_2_Template, 3, 5, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogComponent_mat_dialog_actions_4_Template, 2, 1, "mat-dialog-actions", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.schemaConfig ? "!max-h-[90vh]" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.loading$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actions);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

};
;
//# sourceMappingURL=libs_fn7-common-lib_src_index_ts.js.map