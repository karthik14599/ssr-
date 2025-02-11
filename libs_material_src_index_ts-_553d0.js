"use strict";
exports.id = "libs_material_src_index_ts-_553d0";
exports.ids = ["libs_material_src_index_ts-_553d0"];
exports.modules = {

/***/ 86489:
/*!************************************!*\
  !*** ./libs/material/src/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: function() { return /* reexport safe */ _lib_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule; }
/* harmony export */ });
/* harmony import */ var _lib_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/material.module */ 4352);


/***/ }),

/***/ 4352:
/*!**************************************************!*\
  !*** ./libs/material/src/lib/material.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 15962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 88525);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 60513);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 43417);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ 3401);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 95885);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 71389);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 97061);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_material_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 42721);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 16761);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 13953);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 39641);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ 48039);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_material_badge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 8131);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 19657);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_material_select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 75689);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2507);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 41421);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 24463);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 8873);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ 19915);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_material_chips__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 90791);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 16299);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_material_divider__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/stepper */ 43689);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 10929);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 88035);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_angular_material_radio__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tree */ 57173);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_material_tree__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ 43177);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_angular_material_table__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ 44285);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_angular_material_sort__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 24645);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/dialog */ 80515);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 58927);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 88169);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/autocomplete */ 65069);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button-toggle */ 13067);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/overlay */ 41437);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 44701);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-bar */ 16773);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ 85216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_38__);







































class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggleModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__.CdkStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_30__.DialogModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocompleteModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__.MatButtonToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggleModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__.CdkStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__.MatTreeModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_30__.DialogModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocompleteModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__.MatButtonToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggleModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__.CdkStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_30__.DialogModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocompleteModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__.MatButtonToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggleModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_23__.CdkStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__.MatTreeModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_30__.DialogModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocompleteModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__.MatButtonToggleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__.DragDropModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_37__.MatProgressBarModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=libs_material_src_index_ts-_553d0.js.map