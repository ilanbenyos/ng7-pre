(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calander/calander.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calander/calander.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  calander works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/settings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/statistics/statistics.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/statistics/statistics.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  statistics works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/users/users.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/users/users.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/workflow/workflow.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/workflow/workflow.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  workflow works!\n</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pages_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/workflow/workflow.component */ "./src/app/pages/workflow/workflow.component.ts");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "./src/app/pages/statistics/statistics.component.ts");
/* harmony import */ var _pages_calander_calander_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/calander/calander.component */ "./src/app/pages/calander/calander.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'workflow', component: _pages_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowComponent"] },
    { path: 'statistics', component: _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__["StatisticsComponent"] },
    { path: 'calender', component: _pages_calander_calander_component__WEBPACK_IMPORTED_MODULE_6__["CalanderComponent"] },
    { path: 'users', component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"] },
    { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-page {\n  margin-bottom: 1rem;\n  margin-top: 6rem;\n  padding: 1.5rem;\n}\n@media (max-width: 576px) {\n  .app-page {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGRldlxcam9iU2VhcmNoXFx1aVxcbmc3LXByZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFKRjtJQUtJLG9CQUFBO0lBQ0EscUJBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1wYWdle1xyXG4gIG1hcmdpbi1ib3R0b206MXJlbTtcclxuICBtYXJnaW4tdG9wOjZyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgcGFkZGluZy1sZWZ0Oi41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDouNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5hcHAtcGFnZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDZyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYXBwLXBhZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(data, store) {
        this.data = data;
        this.store = store;
        this.title = 'Merkury';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = this.data.getUser();
        this.isNav = false;
    };
    AppComponent.prototype.toggleNav = function () {
        this.isNav = !this.isNav;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <app-nav [title]='title' \n             class=\"nav\"\n             (emitter)=\"toggleNav()\"\n             [isNav]='isNav'\n             ></app-nav>\n    <app-header (emitter)=\"toggleNav()\" [user]=\"user\" class=\"position-fixed w-100 z-index-1\"></app-header>\n    <div class=\"app-page\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_reducers_tutorial_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/reducers/tutorial.reducer */ "./src/app/state/reducers/tutorial.reducer.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pages_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/workflow/workflow.component */ "./src/app/pages/workflow/workflow.component.ts");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "./src/app/pages/statistics/statistics.component.ts");
/* harmony import */ var _pages_calander_calander_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/calander/calander.component */ "./src/app/pages/calander/calander.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _blocks_tasks_task_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/tasks/task.component */ "./src/app/blocks/tasks/task.component.ts");
/* harmony import */ var _blocks_message_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/message/message.component */ "./src/app/blocks/message/message.component.ts");
/* harmony import */ var _blocks_activity_activity_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/activity/activity.component */ "./src/app/blocks/activity/activity.component.ts");
/* harmony import */ var _blocks_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/block-header/block-header.component */ "./src/app/blocks/block-header/block-header.component.ts");
/* harmony import */ var _get_time_ago_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./get-time-ago.pipe */ "./src/app/get-time-ago.pipe.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pages_workflow_workflow_component__WEBPACK_IMPORTED_MODULE_12__["WorkflowComponent"],
                _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_13__["StatisticsComponent"],
                _pages_calander_calander_component__WEBPACK_IMPORTED_MODULE_14__["CalanderComponent"],
                _pages_users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _blocks_tasks_task_component__WEBPACK_IMPORTED_MODULE_18__["TaskComponent"],
                _blocks_message_message_component__WEBPACK_IMPORTED_MODULE_19__["MessageComponent"],
                _blocks_activity_activity_component__WEBPACK_IMPORTED_MODULE_20__["ActivityComponent"],
                _blocks_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_21__["BlockHeaderComponent"],
                _get_time_ago_pipe__WEBPACK_IMPORTED_MODULE_22__["GetTimeAgoPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                    tutorial: _state_reducers_tutorial_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blocks/activity/activity.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/blocks/activity/activity.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity {\n  padding: 0;\n}\n\n.main {\n  width: calc(100% - 90px);\n}\n\n.vr {\n  position: absolute;\n  left: 50%;\n  width: 2px;\n  height: 80px;\n  z-index: 1;\n  top: -37px;\n  background-color: lavender;\n}\n\n.avatar img {\n  z-index: 2;\n}\n\n.list-group-item:not(:last-of-type) {\n  border-bottom: none;\n}\n\n.list-group-item:not(:first-of-type) {\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tzL2FjdGl2aXR5L0Q6XFxkZXZcXGpvYlNlYXJjaFxcdWlcXG5nNy1wcmUvc3JjXFxhcHBcXGJsb2Nrc1xcYWN0aXZpdHlcXGFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ja3MvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxVQUFBO0FDQUY7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDRUY7O0FEQ0U7RUFDRSxVQUFBO0FDRUo7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWN0aXZpdHl7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcbi5tYWlue1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxufVxyXG4udnJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogLTM3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbn1cclxuLmF2YXRhcntcclxuICBpbWd7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufVxyXG4ubGlzdC1ncm91cC1pdGVtOm5vdCg6bGFzdC1vZi10eXBlKXtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG5cclxufVxyXG4ubGlzdC1ncm91cC1pdGVtOm5vdCg6Zmlyc3Qtb2YtdHlwZSl7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuXHJcbn1cclxuXHJcbiIsIi5hY3Rpdml0eSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xufVxuXG4udnIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB6LWluZGV4OiAxO1xuICB0b3A6IC0zN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn1cblxuLmF2YXRhciBpbWcge1xuICB6LWluZGV4OiAyO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/blocks/activity/activity.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/blocks/activity/activity.component.ts ***!
  \*******************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// from: img msg action date
var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ActivityComponent.prototype, "activities", void 0);
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: "\n    <app-block-header\n      title=\"Activities\"\n      [successCount]='activities.length'\n    >\n    </app-block-header>\n    <div class=\"list-group\">\n      <div class=\"activity d-flex justify-content-between align-items-center list-group-item \" \n           *ngFor=\"let activity of activities ; let i = index\">\n        <div class=\"left ml-3 position-relative\">\n          <div class=\"vr\" *ngIf=\"i>0\"></div>\n          <div class=\"avatar flex-shrink-0 \">\n            <img [src]=\"activity.img\">\n          </div>\n        </div>\n        <div class=\"main  font-xs ml-2 d-flex flex-column flex-grow-1\">\n          <span class=\"upper truncate\">\n            <span class=\"from font-weight-bold\">{{activity.from}}</span>\n            <span class=\"action ml-1\">{{activity.action}}</span>\n            <span class=\"msg ml-1 \">{{activity.msg}}</span>\n          </span>\n\n          <span class=\"bottom mt-1 text-secondary\">\n            <i class=\"material-icons font-xs rol-btn text-secondary\">access_time</i>\n            <span class=\"date ml-2\" >{{activity.date | getTimeAgo}}</span>\n          </span>\n      </div>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./activity.component.scss */ "./src/app/blocks/activity/activity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/blocks/block-header/block-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/blocks/block-header/block-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9ibG9jay1oZWFkZXIvYmxvY2staGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/blocks/block-header/block-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/blocks/block-header/block-header.component.ts ***!
  \***************************************************************/
/*! exports provided: BlockHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockHeaderComponent", function() { return BlockHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockHeaderComponent = /** @class */ (function () {
    function BlockHeaderComponent() {
    }
    BlockHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BlockHeaderComponent.prototype, "errorCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BlockHeaderComponent.prototype, "successCount", void 0);
    BlockHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-header',
            template: "\n    <div class=\"header p-3 d-flex justify-content-between block-border bg-white\">\n      <div class=\"font-sm font-weight-bold d-flex align-items-center\">{{title}}</div>\n      <div class=\"counts d-flex\">\n        <div class=\"success-avatar avatar avatar-small bg-primary\" *ngIf=\"successCount\">{{successCount}}</div>\n        <div class=\"error-avatar avatar avatar-small ml-2 bg-danger\" *ngIf=\"errorCount\">{{errorCount}}</div>\n      </div>\n    </div>\n  \n  ",
            styles: [__webpack_require__(/*! ./block-header.component.scss */ "./src/app/blocks/block-header/block-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockHeaderComponent);
    return BlockHeaderComponent;
}());



/***/ }),

/***/ "./src/app/blocks/message/message.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/blocks/message/message.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  min-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tzL21lc3NhZ2UvRDpcXGRldlxcam9iU2VhcmNoXFx1aVxcbmc3LXByZS9zcmNcXGFwcFxcYmxvY2tzXFxtZXNzYWdlXFxtZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ja3MvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYmxvY2tzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbntcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuIiwiLm1haW4ge1xuICBtaW4td2lkdGg6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/blocks/message/message.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blocks/message/message.component.ts ***!
  \*****************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MessageComponent.prototype, "msgs", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: "\n    <app-block-header\n      title=\"Messages\"\n      [successCount]='msgs.length'\n    >\n    </app-block-header>\n    <div class=\"list-group\">\n\n    <div class=\"msg d-flex p-3 justify-content-between align-items-center list-group-item list-group-item-action\" \n         *ngFor=\"let msg of msgs\">\n      <div class=\"avatar flex-shrink-0\">\n        <img [src]=\"msg.img\">\n      </div>\n      <div class=\"main font-xs ml-2 d-flex flex-column flex-grow-1\">\n       <div class=\"item-header d-flex\">\n        <div class=\"from font-weight-bold\">{{msg.from}}</div>\n        <div class=\"date ml-2 text-secondary font-weight-light\">{{msg.date | getTimeAgo}}</div>\n       </div>\n        <span class=\"txt-msg truncate\">{{msg.msg}}</span>\n        <div class=\"bottom\">\n          <i class=\"material-icons font-xs rol-btn text-secondary\">settings</i>\n          <i class=\"material-icons font-xs rol-btn ml-2 text-secondary\">reply</i>\n\n\n        </div>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/blocks/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/blocks/tasks/task.component.ts":
/*!************************************************!*\
  !*** ./src/app/blocks/tasks/task.component.ts ***!
  \************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.isDelay = function (time) {
        return time < Date.now();
    };
    TaskComponent.prototype.delaysLen = function () {
        var _this = this;
        var len = 0;
        this.tasks.forEach(function (i) {
            if (_this.isDelay(i.date))
                len++;
        });
        return len;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TaskComponent.prototype, "tasks", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: "\n    <app-block-header\n      title=\"Tasks\"\n      [successCount]='tasks.length'\n      [errorCount]='delaysLen()'\n    >\n    </app-block-header>\n    <div class=\"list-group\">\n      <div *ngFor=\"let task of tasks\" \n           class=\"task d-flex p-3 justify-content-between align-items-center list-group-item list-group-item-action\">\n        <div class=\"avatar avatar-small bg-primary flex-shrink-0\" >{{task.msg[0]}}</div>\n        <div class=\"main font-xs ml-2 d-flex flex-column flex-grow-1\">\n          <div class=\"msg truncate font-weight-bold font-sm\">{{task.msg}}</div>\n          <div  [ngClass]=\"['date d-flex align-items-center',isDelay(task.date)? 'text-danger':'']\" >\n            <i class=\"material-icons font-sm rol-btn mr-2\">access_time</i>\n            <span >{{task.date | getTimeAgo}}</span></div>\n        </div>\n        <div class=\"dots-3 rol-btn flex-shrink-0\">\n        </div>\n      </div>\n    </div>\n  \n  ",
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/blocks/tasks/tasks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/blocks/tasks/tasks.component.scss":
/*!***************************************************!*\
  !*** ./src/app/blocks/tasks/tasks.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  max-width: calc(100% - 4rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2tzL3Rhc2tzL0Q6XFxkZXZcXGpvYlNlYXJjaFxcdWlcXG5nNy1wcmUvc3JjXFxhcHBcXGJsb2Nrc1xcdGFza3NcXHRhc2tzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ja3MvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYmxvY2tzL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcclxufVxyXG5cclxuIiwiLm1haW4ge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getUser = function () {
        return user;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());

var user = {
    name: 'John',
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    tasks: [
        {
            id: 11,
            msg: 'new site for Symo.com',
            date: 1560394336794,
        }, {
            id: 12,
            msg: 'new logo for yossi',
            date: 1560333062818,
        }, {
            id: 14,
            msg: 'free business PSD Template',
            date: 1500004179699,
        },
    ],
    messages: [
        {
            from: 'Nina Jones',
            img: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg',
            msg: 'Hey there! it\'s me again:-)',
            date: 1560991219206,
        }, {
            from: 'Jones Dave',
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
            msg: 'hellllow! could you bring some coffie?',
            date: 1560997719206,
        }, {
            from: 'Dave solomon',
            img: 'https://i.kinja-img.com/gawker-media/image/upload/s--rc0zysTU--/c_scale,f_auto,fl_progressive,q_80,w_800/xq47qve5n1mlmpvqlxca.jpg',
            msg: 'good mornin! you are fired!!',
            date: 1560330665151,
        }, {
            from: 'Noam turbo',
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
            msg: 'when will you be here?',
            date: 1560330690151,
        },
    ],
    activities: [
        {
            from: 'Nina Jones',
            img: 'https://uploads.guim.co.uk/2017/10/06/Arwa_Mahdawi,_L.png',
            msg: 'free ui kit',
            action: 'commented project',
            date: 1560995419206,
        }, {
            from: 'Noam turbo',
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
            msg: 'added new project',
            action: 'free psd (...)',
            date: 1560991975206,
        }, {
            from: 'Jones Dave',
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
            msg: 'uploaded vids & pics',
            action: 'ended today!',
            date: 1560330611151,
        }, {
            from: 'Jones Dave',
            img: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg',
            msg: 'started a new position',
            action: 'at wix.com',
            date: 1560330690151,
        },
    ]
};


/***/ }),

/***/ "./src/app/get-time-ago.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/get-time-ago.pipe.ts ***!
  \**************************************/
/*! exports provided: GetTimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTimeAgoPipe", function() { return GetTimeAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3__);




javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3___default.a);
var timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"]('en-US');
var GetTimeAgoPipe = /** @class */ (function () {
    function GetTimeAgoPipe() {
    }
    GetTimeAgoPipe.prototype.transform = function (time) {
        if (time > Date.now()) {
            return timeAgo.format(Date.now() + Date.now() - time, 'twitter');
        }
        else {
            return timeAgo.format(Date.now() + Date.now() - time, 'time') + ' delays';
        }
    };
    GetTimeAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'getTimeAgo'
        })
    ], GetTimeAgoPipe);
    return GetTimeAgoPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nul li {\n  background: #eeeeee;\n  padding: 2em;\n  border-radius: 4px;\n  margin-bottom: 7px;\n  display: grid;\n  grid-template-columns: 60px auto;\n}\nul li p {\n  font-weight: bold;\n  margin-left: 20px;\n}\nul li img {\n  border-radius: 50%;\n  width: 100%;\n}\n.graph-section {\n  height: 20rem;\n}\n.reports {\n  flex-grow: 2;\n  margin-left: 1rem;\n}\n.sales {\n  flex-grow: 1;\n}\n.block {\n  width: 32%;\n}\n@media (max-width: 768px) {\n  h1 {\n    text-align: center;\n  }\n\n  .block {\n    width: 50%;\n    margin-top: 1rem;\n  }\n\n  .graph {\n    flex-direction: column;\n    height: unset;\n  }\n  .graph .reports {\n    margin-top: 1rem;\n    margin-left: unset;\n  }\n}\n@media (max-width: 576px) {\n  .block {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcZGV2XFxqb2JTZWFyY2hcXHVpXFxuZzctcHJlL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFBVSxVQUFBO0FDRVo7QURBRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNFSjtBREFJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0VOO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDTjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FER0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREVBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0E7RUFDRSxVQUFBO0FDRUY7QURDQTtFQUNFO0lBQ0Usa0JBQUE7RUNFRjs7RURBQTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtFQ0dGOztFRERBO0lBQ0Usc0JBQUE7SUFDQSxhQUFBO0VDSUY7RURIRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNLSjtBQUNGO0FERkE7RUFDRTtJQUNFLFdBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7cGFkZGluZzogMDtcclxuXHJcbiAgbGkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ncmFwaC1zZWN0aW9ue1xyXG4gIGhlaWdodDoyMHJlbVxyXG59XHJcbi5yZXBvcnRze1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tbGVmdDoxcmVtO1xyXG4gfVxyXG4uc2FsZXN7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gfVxyXG4uYmxvY2t7XHJcbiAgd2lkdGg6MzIlO1xyXG5cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJsb2Nre1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xyXG4gIH1cclxuICAuZ3JhcGh7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OnVuc2V0O1xyXG4gICAgLnJlcG9ydHN7XHJcbiAgICAgIG1hcmdpbi10b3A6MXJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYmxvY2t7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxufVxyXG4iLCJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxudWwgbGkge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0bztcbn1cbnVsIGxpIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG51bCBsaSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JhcGgtc2VjdGlvbiB7XG4gIGhlaWdodDogMjByZW07XG59XG5cbi5yZXBvcnRzIHtcbiAgZmxleC1ncm93OiAyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNhbGVzIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uYmxvY2sge1xuICB3aWR0aDogMzIlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5ibG9jayB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgLmdyYXBoIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogdW5zZXQ7XG4gIH1cbiAgLmdyYXBoIC5yZXBvcnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, store) {
        this.data = data;
        this.store = store;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = this.data.getUser();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: "\n    <div class=\"home d-flex flex-column mb-4\" *ngIf=\"user\">\n      <h1 class=\"mb-3 font-weight-bold\">Hello {{user.name}}!</h1>\n      <section class=\"graph d-flex mb-4\">\n        <div class=\"sales graph-section bg-primary block-border\"></div>\n        <div class=\"reports graph-section bg-success block-border\"></div>\n\n      </section>\n      <section class=\"boxes justify-content-between row\">\n\n        <app-task [tasks]=\"user.tasks\" class=\"block col-sm\"></app-task>\n        <app-message [msgs]=\"user.messages\" class=\"block col-sm\"></app-message>\n        <app-activity [activities]=\"user.activities\" class=\"block col-sm\"></app-activity>\n\n      </section>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: white;\n}\n.header .btn {\n  background-color: #5584ff;\n  border-radius: 3rem;\n}\n.header .icon-badge {\n  background-color: #5584ff;\n  border-radius: 50%;\n  position: absolute;\n  right: -6px;\n  border: 2px solid white;\n  font-size: 9px;\n  top: -6px;\n  color: white;\n}\n.header .avatar {\n  justify-content: unset;\n  overflow: unset;\n}\n.header .avatar::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n  color: black;\n}\n.px-header {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n@media (max-width: 576px) {\n  .px-header {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9EOlxcZGV2XFxqb2JTZWFyY2hcXHVpXFxuZzctcHJlL3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9EOlxcZGV2XFxqb2JTZWFyY2hcXHVpXFxuZzctcHJlL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtBQ0RGO0FERUU7RUFDRSx5QkVMTztFRk1QLG1CQUFBO0FDQUo7QURFRTtFQUNFLHlCRVRPO0VGVVAsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUU7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FDREo7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREdFO0VBSEY7SUFJSSxrQkFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHAtYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgfVxyXG4gIC5pY29uLWJhZGdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcC1ibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC02cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5hdmF0YXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG5cclxuICB9XHJcbiAgLmF2YXRhcjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLjI1NWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IC4yNTVlbTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG5cclxufVxyXG4ucHgtaGVhZGVye1xyXG4gIHBhZGRpbmctbGVmdDozcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6M3JlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDoxcmVtO1xyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4NGZmO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xufVxuLmhlYWRlciAuaWNvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTg0ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTZweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0b3A6IC02cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXIgLmF2YXRhciB7XG4gIGp1c3RpZnktY29udGVudDogdW5zZXQ7XG4gIG92ZXJmbG93OiB1bnNldDtcbn1cbi5oZWFkZXIgLmF2YXRhcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMC4zZW0gc29saWQ7XG4gIGJvcmRlci1yaWdodDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHgtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5weC1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG59IiwiJGFwcC1ibHVlOiAjNTU4NGZmO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleNav = function () {
        this.emitter.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HeaderComponent.prototype, "emitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: "\n  <div class=\"header py-4 px-header d-flex justify-content-between block-border\">\n    <div class=\"left d-flex align-items-center\">\n      <i class=\"material-icons rol-btn\" (click)=\"toggleNav()\">menu</i>\n      <i class=\"material-icons rol-btn ml-3\">search</i>\n    </div>\n    <div class=\"rigth d-flex align-items-center justify-content-center\" *ngIf=\"user\">\n      <div class=\"btn text-white py-2 px-3 mr-4 font-weight-bold rol-btn align-items-center justify-content-center d-none d-sm-flex\">\n        <i class=\"material-icons rol-btn mr-2 opacity-05\">add</i>\n        <span>Add project</span>\n      </div>\n      <div class=\"add-project d-inline-block d-sm-none\">\n        <i class=\"material-icons rol-btn ml-3\">add</i>\n      </div>\n        <div class=\"email d-inline-block position-relative\">\n        <i class=\"material-icons rol-btn ml-3\">email</i>\n        <span class=\"icon-badge badge \">{{user.messages.length}}</span>\n      </div>\n      <div class=\"notifications d-inline-block position-relative\">\n        <i class=\"material-icons rol-btn ml-3\">notifications</i>\n        <span class=\"icon-badge badge\">4</span>\n      </div>\n        <div class=\"avatar ml-5 rol-btn\" *ngIf=\"user\">\n          <img [src]=\"user.img\">\n        </div>\n    </div>\n  </div>\n  ",
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-app .overlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.9);\n  transition: opacity 0.5s;\n  opacity: 0;\n}\n.nav-app .overlay.is-nav {\n  display: initial;\n}\n.nav-app .nav {\n  color: white;\n  background: #0e1a35;\n  width: 20rem;\n  height: 100vh;\n  position: absolute;\n  z-index: 1;\n  left: -22rem;\n  transition: left 0.5s;\n}\n.nav-app .nav.is-nav {\n  left: 0;\n}\n.nav-app .nav .logo {\n  font-weight: bold;\n}\n.nav-app .nav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-app .nav ul li {\n  border-top: 1px solid black;\n  float: left;\n  list-style-type: none;\n  transition: all 0.5s;\n  border-left: 3px solid transparent;\n}\n.nav-app .nav ul li:hover {\n  border-left: 3px solid #5584ff;\n  background-color: #122143;\n}\n.nav-app .nav ul li i {\n  color: #4772dc;\n}\n.nav-app a:hover {\n  color: #0056b3;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdi9EOlxcZGV2XFxqb2JTZWFyY2hcXHVpXFxuZzctcHJlL3NyY1xcYXBwXFxsYXlvdXRcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FER0k7RUFDRSxnQkFBQTtBQ0ROO0FETUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0pKO0FES0k7RUFDRSxPQUFBO0FDSE47QURLSTtFQUNFLGlCQUFBO0FDSE47QURLSTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNITjtBREtNO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FDSFI7QURJUTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUNGVjtBREtRO0VBQ0UsY0FBQTtBQ0hWO0FEU0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi5uYXYtYXBwIHtcclxuICAub3ZlcmxheSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgICYuaXMtbmF2IHtcclxuICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgLy9vcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzBlMWEzNTtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDotMjJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IC41cztcclxuICAgICYuaXMtbmF2e1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDozcHggc29saWQgJGFwcC1ibHVlIDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjIxNDM7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjNDc3MmRjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwNTZiMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiLm5hdi1hcHAgLm92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG59XG4ubmF2LWFwcCAub3ZlcmxheS5pcy1uYXYge1xuICBkaXNwbGF5OiBpbml0aWFsO1xufVxuLm5hdi1hcHAgLm5hdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzBlMWEzNTtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IC0yMnJlbTtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzO1xufVxuLm5hdi1hcHAgLm5hdi5pcy1uYXYge1xuICBsZWZ0OiAwO1xufVxuLm5hdi1hcHAgLm5hdiAubG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5hdi1hcHAgLm5hdiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm5hdi1hcHAgLm5hdiB1bCBsaSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubmF2LWFwcCAubmF2IHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNTU4NGZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyMTQzO1xufVxuLm5hdi1hcHAgLm5hdiB1bCBsaSBpIHtcbiAgY29sb3I6ICM0NzcyZGM7XG59XG4ubmF2LWFwcCBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavComponent.prototype.ngOnInit = function () {
        this.links = [
            { id: 'home', icon: 'home' },
            { id: 'workflow', icon: 'view_agenda' },
            { id: 'statistics', icon: 'trending_down' },
            { id: 'calender', icon: 'calendar_today' },
            { id: 'users', icon: 'perm_identity' },
            { id: 'settings', icon: 'settings' },
        ];
    };
    NavComponent.prototype.toggleNav = function () {
        this.emitter.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavComponent.prototype, "isNav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NavComponent.prototype, "emitter", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: "\n    <div class=\"nav-app position-fixed z-index-2\">\n      <div class=\"overlay\" \n           (click)=\"toggleNav()\" \n           [ngClass]=\"isNav ? 'is-nav': ''\">{{isNav}}\n      </div>\n      <div class=\"nav py-2 d-flex flex-column\" \n           [ngClass]=\"isNav ? 'is-nav': ''\">\n      <div class=\"logo py-3 px-4 d-flex\">\n        <i class=\"material-icons\">home</i>\n        <div class=\"title ml-2 h3\">{{ title }}</div>\n      </div>\n      \n      <ul class=\"d-flex flex-column\">\n          <li *ngFor=\"let item of links; let i = index\" \n              class=\"p-3\" \n              (click)=\"toggleNav()\" >\n            <a routerLink=\"{{item.id}}\" class=\"d-flex\">\n              <i class=\"material-icons icon\">{{item.icon}}</i>\n              <span class=\"link-to ml-2\">{{item.id}}</span>\n            </a>\n          </li>\n        </ul>\n    </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/layout/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pages/calander/calander.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/calander/calander.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGFuZGVyL2NhbGFuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/calander/calander.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/calander/calander.component.ts ***!
  \******************************************************/
/*! exports provided: CalanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalanderComponent", function() { return CalanderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalanderComponent = /** @class */ (function () {
    function CalanderComponent() {
    }
    CalanderComponent.prototype.ngOnInit = function () {
    };
    CalanderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calander',
            template: __webpack_require__(/*! raw-loader!./calander.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calander/calander.component.html"),
            styles: [__webpack_require__(/*! ./calander.component.scss */ "./src/app/pages/calander/calander.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalanderComponent);
    return CalanderComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/statistics/statistics.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/statistics/statistics.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/statistics/statistics.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/statistics/statistics.component.ts ***!
  \**********************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/pages/statistics/statistics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/pages/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/workflow/workflow.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/workflow/workflow.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtmbG93L3dvcmtmbG93LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/workflow/workflow.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/workflow/workflow.component.ts ***!
  \******************************************************/
/*! exports provided: WorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowComponent", function() { return WorkflowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkflowComponent = /** @class */ (function () {
    function WorkflowComponent() {
    }
    WorkflowComponent.prototype.ngOnInit = function () {
    };
    WorkflowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workflow',
            template: __webpack_require__(/*! raw-loader!./workflow.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/workflow/workflow.component.html"),
            styles: [__webpack_require__(/*! ./workflow.component.scss */ "./src/app/pages/workflow/workflow.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkflowComponent);
    return WorkflowComponent;
}());



/***/ }),

/***/ "./src/app/state/actions/tutorial.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/state/actions/tutorial.actions.ts ***!
  \***************************************************/
/*! exports provided: SET_USER, setUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
var SET_USER = '[USER] Set';
// Section 3
var setUser = /** @class */ (function () {
    function setUser(payload) {
        this.payload = payload;
        this.type = SET_USER;
    }
    return setUser;
}());



/***/ }),

/***/ "./src/app/state/reducers/tutorial.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/state/reducers/tutorial.reducer.ts ***!
  \****************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_tutorial_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/tutorial.actions */ "./src/app/state/actions/tutorial.actions.ts");


// Section 1
var initialState = {
    user: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState.user; }
    switch (action.type) {
        case _actions_tutorial_actions__WEBPACK_IMPORTED_MODULE_1__["SET_USER"]:
            var rrr = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: action.payload });
            debugger;
            return rrr;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\jobSearch\ui\ng7-pre\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map