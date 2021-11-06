(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registration_registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registration/registration.module */ 15)).then(m => m.RegistrationPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
    },
    // {
    //   path: 'reports',
    //   loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsPageModule)
    // },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
    },
    {
        path: 'exam-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exam-detail_exam-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exam-detail/exam-detail.module */ 3256)).then(m => m.ExamDetailPageModule)
    },
    {
        path: 'exam-take',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exam-take_exam-take_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exam-take/exam-take.module */ 3842)).then(m => m.ExamTakePageModule)
    },
    {
        path: 'exam-info',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exam-info_exam-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exam-info/exam-info.module */ 9215)).then(m => m.ExamInfoPageModule)
    },
    {
        path: 'exam-result/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exam-result_exam-result_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exam-result/exam-result.module */ 6675)).then(m => m.ExamResultPageModule)
    },
    {
        path: 'create-exam',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_create-exam_create-exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/create-exam/create-exam.module */ 6481)).then(m => m.CreateExamPageModule)
    },
    {
        path: 'question-result',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_question-result_question-result_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/question-result/question-result.module */ 492)).then(m => m.QuestionResultPageModule)
    },
    {
        path: 'reports',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_analysis-report_analysis-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/analysis-report/analysis-report.module */ 5246)).then(m => m.AnalysisReportPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 6628);
/* harmony import */ var _services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/preference.service */ 547);







const AUTH_TOKEN = 'token';
const USER_DATA = 'userData';
let AppComponent = class AppComponent {
    constructor(navCtrl, pref) {
        this.navCtrl = navCtrl;
        this.pref = pref;
        this.listingpages = [];
        this.logout = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.remove({ key: AUTH_TOKEN });
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.remove({ key: USER_DATA });
            this.navCtrl.navigateRoot(['/login']);
        });
        this.checkLoginStatus();
    }
    checkLoginStatus() {
        this.pref.getUserTokenObs().subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.navCtrl.navigateRoot(['/home']);
            }
            else {
                this.navCtrl.navigateRoot(['/login']);
            }
        });
        this.pref.getUser().subscribe((res) => {
            this.userData = JSON.parse(res);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 6178);
/* harmony import */ var _pages_analysis_report_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/analysis-report/fetch-api-data.service */ 8981);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.ChartsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, _pages_analysis_report_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_2__.FetchApiDataService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 8981:
/*!*****************************************************************!*\
  !*** ./src/app/pages/analysis-report/fetch-api-data.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchApiDataService": () => (/* binding */ FetchApiDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let FetchApiDataService = class FetchApiDataService {
    constructor(http) {
        this.http = http;
        this.url = 'https://api.compiquest.com:8443/api/AnalysisReport/AnalysisReport/AnalysisSummaryReport?CandidateID=7';
    }
    getData() {
        return this.http.get(this.url);
    }
};
FetchApiDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FetchApiDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FetchApiDataService);



/***/ }),

/***/ 547:
/*!************************************************!*\
  !*** ./src/app/services/preference.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferenceService": () => (/* binding */ PreferenceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 6628);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);




const AUTH_TOKEN = 'token';
const USER_DATA = 'userData';
const EXAM_DATA = 'examData';
let PreferenceService = class PreferenceService {
    constructor() {
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: USER_DATA }).then(res => {
            this.user.next(res.value);
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: AUTH_TOKEN }).then(tok => {
            this.token.next(tok.value);
        });
    }
    ;
    storeUser(user) {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: USER_DATA, value: JSON.stringify(user) });
        this.user.next(JSON.stringify(user));
    }
    getUser() {
        return this.user.asObservable();
    }
    storeUserToken(token) {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: AUTH_TOKEN, value: token });
        this.token.next(token);
    }
    getUserToken() {
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: AUTH_TOKEN });
    }
    getUserTokenObs() {
        return this.token.asObservable();
    }
    setExamData(exmData) {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: EXAM_DATA, value: JSON.stringify(exmData) });
    }
    getExamData() {
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: EXAM_DATA });
    }
};
PreferenceService.ctorParameters = () => [];
PreferenceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PreferenceService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://api.compiquest.com:8443',
    //apiUrl: 'https://compiquest-dotnet-core-apis.herokuapp.com'
    //apiUrl: 'http://localhost:35634'
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 6431,
	"./af.js": 6431,
	"./ar": 1286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 3160,
	"./ar-ly.js": 3160,
	"./ar-ma": 2551,
	"./ar-ma.js": 2551,
	"./ar-sa": 9989,
	"./ar-sa.js": 9989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 1286,
	"./az": 5887,
	"./az.js": 5887,
	"./be": 4572,
	"./be.js": 4572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 3344,
	"./bm.js": 3344,
	"./bn": 8985,
	"./bn-bd": 3990,
	"./bn-bd.js": 3990,
	"./bn.js": 8985,
	"./bo": 4391,
	"./bo.js": 4391,
	"./br": 6728,
	"./br.js": 6728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 1043,
	"./ca.js": 1043,
	"./cs": 420,
	"./cs.js": 420,
	"./cv": 3513,
	"./cv.js": 3513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 7978,
	"./da.js": 7978,
	"./de": 6061,
	"./de-at": 5204,
	"./de-at.js": 5204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 6061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 5724,
	"./en-au.js": 5724,
	"./en-ca": 525,
	"./en-ca.js": 525,
	"./en-gb": 2847,
	"./en-gb.js": 2847,
	"./en-ie": 7216,
	"./en-ie.js": 7216,
	"./en-il": 9305,
	"./en-il.js": 9305,
	"./en-in": 3364,
	"./en-in.js": 3364,
	"./en-nz": 9130,
	"./en-nz.js": 9130,
	"./en-sg": 1161,
	"./en-sg.js": 1161,
	"./eo": 802,
	"./eo.js": 802,
	"./es": 328,
	"./es-do": 5551,
	"./es-do.js": 5551,
	"./es-mx": 5615,
	"./es-mx.js": 5615,
	"./es-us": 4790,
	"./es-us.js": 4790,
	"./es.js": 328,
	"./et": 6389,
	"./et.js": 6389,
	"./eu": 2961,
	"./eu.js": 2961,
	"./fa": 6151,
	"./fa.js": 6151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 8898,
	"./fil.js": 8898,
	"./fo": 7779,
	"./fo.js": 7779,
	"./fr": 8174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 8867,
	"./fr-ch.js": 8867,
	"./fr.js": 8174,
	"./fy": 452,
	"./fy.js": 452,
	"./ga": 5014,
	"./ga.js": 5014,
	"./gd": 4127,
	"./gd.js": 4127,
	"./gl": 2124,
	"./gl.js": 2124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 7953,
	"./gom-latn.js": 7953,
	"./gu": 6604,
	"./gu.js": 6604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 4235,
	"./hi.js": 4235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 7735,
	"./hu.js": 7735,
	"./hy-am": 402,
	"./hy-am.js": 402,
	"./id": 9187,
	"./id.js": 9187,
	"./is": 536,
	"./is.js": 536,
	"./it": 5007,
	"./it-ch": 4667,
	"./it-ch.js": 4667,
	"./it.js": 5007,
	"./ja": 2093,
	"./ja.js": 2093,
	"./jv": 59,
	"./jv.js": 59,
	"./ka": 6870,
	"./ka.js": 6870,
	"./kk": 880,
	"./kk.js": 880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 8785,
	"./kn.js": 8785,
	"./ko": 1721,
	"./ko.js": 1721,
	"./ku": 7851,
	"./ku.js": 7851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 346,
	"./lb.js": 346,
	"./lo": 3002,
	"./lo.js": 3002,
	"./lt": 4035,
	"./lt.js": 4035,
	"./lv": 6927,
	"./lv.js": 6927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 4173,
	"./mi.js": 4173,
	"./mk": 6320,
	"./mk.js": 6320,
	"./ml": 1705,
	"./ml.js": 1705,
	"./mn": 1062,
	"./mn.js": 1062,
	"./mr": 2805,
	"./mr.js": 2805,
	"./ms": 1341,
	"./ms-my": 9900,
	"./ms-my.js": 9900,
	"./ms.js": 1341,
	"./mt": 7734,
	"./mt.js": 7734,
	"./my": 9034,
	"./my.js": 9034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 6495,
	"./ne.js": 6495,
	"./nl": 673,
	"./nl-be": 6272,
	"./nl-be.js": 6272,
	"./nl.js": 673,
	"./nn": 2486,
	"./nn.js": 2486,
	"./oc-lnc": 6219,
	"./oc-lnc.js": 6219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 8444,
	"./pl.js": 8444,
	"./pt": 3170,
	"./pt-br": 6117,
	"./pt-br.js": 6117,
	"./pt.js": 3170,
	"./ro": 6587,
	"./ro.js": 6587,
	"./ru": 9264,
	"./ru.js": 9264,
	"./sd": 2135,
	"./sd.js": 2135,
	"./se": 5366,
	"./se.js": 5366,
	"./si": 3379,
	"./si.js": 3379,
	"./sk": 6143,
	"./sk.js": 6143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 1082,
	"./sq.js": 1082,
	"./sr": 1621,
	"./sr-cyrl": 8963,
	"./sr-cyrl.js": 8963,
	"./sr.js": 1621,
	"./ss": 1404,
	"./ss.js": 1404,
	"./sv": 5685,
	"./sv.js": 5685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 4106,
	"./ta.js": 4106,
	"./te": 9204,
	"./te.js": 9204,
	"./tet": 3692,
	"./tet.js": 3692,
	"./tg": 6361,
	"./tg.js": 6361,
	"./th": 1735,
	"./th.js": 1735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 6129,
	"./tl-ph.js": 6129,
	"./tlh": 3759,
	"./tlh.js": 3759,
	"./tr": 1644,
	"./tr.js": 1644,
	"./tzl": 875,
	"./tzl.js": 875,
	"./tzm": 6878,
	"./tzm-latn": 1041,
	"./tzm-latn.js": 1041,
	"./tzm.js": 6878,
	"./ug-cn": 4357,
	"./ug-cn.js": 4357,
	"./uk": 4810,
	"./uk.js": 4810,
	"./ur": 6794,
	"./ur.js": 6794,
	"./uz": 8966,
	"./uz-latn": 7959,
	"./uz-latn.js": 7959,
	"./uz.js": 8966,
	"./vi": 5386,
	"./vi.js": 5386,
	"./x-pseudo": 3156,
	"./x-pseudo.js": 3156,
	"./yo": 8028,
	"./yo.js": 8028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 9380,
	"./zh-hk.js": 9380,
	"./zh-mo": 874,
	"./zh-mo.js": 874,
	"./zh-tw": 6508,
	"./zh-tw.js": 6508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menu-bar {\n  --width: 70%;\n}\n\n.menu-item {\n  padding: 11px 25px;\n  font-size: 14px;\n  color: #7481A5;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nion-toolbar {\n  --background: #fff;\n  --padding-bottom: 26px;\n  border-bottom: 1px solid #EAF2FD;\n  --border-style: none;\n}\n\n.user-thum {\n  width: 85px;\n  height: 85px;\n  border-radius: 100%;\n  border: 1px solid #dedede;\n  background-color: #ccc;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.user-data {\n  margin-top: 12px;\n}\n\n.user-data a {\n  color: #675DDD;\n  font-size: 13px;\n  border-bottom: 1px solid #675DDD;\n}\n\n.user-data h6 {\n  color: green;\n  margin: 8px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 14px;\n}\n\n.user-data h5 {\n  color: darkgreen;\n  margin: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 14px;\n}\n\n.user-data h6 {\n  color: #7481A5;\n  margin: 8px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVE7QUFDWjs7QUFDRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix3SUFBd0k7QUFFNUk7O0FBQ0U7RUFDRSxrQkFBYTtFQUNYLHNCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsb0JBQWU7QUFFckI7O0FBQ0U7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFFdEI7O0FBQ0U7RUFDRSxnQkFBZ0I7QUFFcEI7O0FBQ0U7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdDQUFnQztBQUVwQzs7QUFDRTtFQUNFLFlBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFFckI7O0FBQUU7RUFDRSxnQkFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUdyQjs7QUFERTtFQUNFLGNBQWE7RUFDYixXQUFXO0VBQ1gsd0lBQXdJO0VBQ3hJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBSXJCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWJhciB7XG4gICAgLS13aWR0aDogNzAlO1xuICB9XG4gIC5tZW51LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDExcHggMjVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM3NDgxQTU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMjZweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUFGMkZEO1xuICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC51c2VyLXRodW0ge1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogODVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC51c2VyLWRhdGEge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiAgXG4gIC51c2VyLWRhdGEgYSB7XG4gICAgY29sb3I6ICM2NzVEREQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc1REREO1xuICB9XG4gIFxuICAudXNlci1kYXRhIGg2IHtcbiAgICBjb2xvcjpncmVlbjtcbiAgICBtYXJnaW46IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxuICAudXNlci1kYXRhIGg1IHtcbiAgICBjb2xvcjpkYXJrZ3JlZW47XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIH1cbiAgLnVzZXItZGF0YSBoNiB7XG4gICAgY29sb3I6Izc0ODFBNTtcbiAgICBtYXJnaW46IDhweDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB9XG5cbiAgIl19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\" class=\"menu-bar\">\n    <ion-header class=\"ion-no-border\">\n      <ion-toolbar>\n        <div style=\"margin-top: 30px\">\n          <div *ngIf=\"userData\" class=\"ion-text-center\">\n            <ion-avatar class=\"user-thum\">\n              <img *ngIf=\"!userData.candidatePhoto\" src=\"../../../assets/images/userAvatar.png\" />\n              <img *ngIf=\"userData.candidatePhoto\" [src]=\"userData.candidatePhoto\" />\n            </ion-avatar>\n            <div class=\"user-data\">\n              <h6>Hello!</h6>\n              <h6>{{userData.candidateName}}</h6>\n              <h6>{{userData.email}}</h6>\n            </div>\n          </div>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n\n      <ion-list style=\"padding-top: 20px\">\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-menu-toggle auto-hide=\"true\">\n            <div class=\"menu-item\" routerLink=\"/home\" routerDirection=\"forward\">\n              <ion-icon style=\"vertical-align: middle\" name=\"home-outline\"></ion-icon>\n              <span style=\"margin-left: 8px\">Dashboard</span>\n            </div>\n          </ion-menu-toggle>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-menu-toggle auto-hide=\"true\">\n            <div *ngIf=\"userData\">\n              <!-- <div class=\"menu-item\" *ngIf=\"userData.instituteID == 0\" routerLink=\"/create-exam\"\n                routerDirection=\"forward\">\n                <ion-icon style=\"vertical-align: middle\" name=\"calculator\"></ion-icon>\n                <span style=\"margin-left: 8px\">Create Exam</span>\n              </div> -->\n              <div class=\"menu-item\" routerLink=\"/create-exam\"\n              routerDirection=\"forward\">\n              <ion-icon style=\"vertical-align: middle\" name=\"calculator\"></ion-icon>\n              <span style=\"margin-left: 8px\">Create Exam</span>\n            </div>\n            </div>\n          </ion-menu-toggle>\n\n        </ion-item>\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-menu-toggle auto-hide=\"true\">\n            <div class=\"menu-item\" routerLink=\"/reports\" routerDirection=\"forward\">\n              <ion-icon style=\"vertical-align: middle\" name=\"document-text-outline\"></ion-icon>\n              <span style=\"margin-left: 8px\">My Exam Result Analysis</span>\n            </div>\n          </ion-menu-toggle>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-menu-toggle auto-hide=\"true\">\n            <div class=\"menu-item\" routerLink=\"/profile\" routerDirection=\"forward\">\n              <ion-icon style=\"vertical-align: middle\" name=\"person-outline\"></ion-icon>\n              <span style=\"margin-left: 8px\">My Profile</span>\n            </div>\n          </ion-menu-toggle>\n        </ion-item>\n      \n        \n\n        <ion-item (click)=\"logout()\" class=\"ion-no-padding\" lines=\"none\">\n          <ion-menu-toggle auto-hide=\"true\">\n            <div class=\"menu-item\">\n\n              <ion-icon style=\"vertical-align: middle\" name=\"log-out-outline\"></ion-icon>\n              <span style=\"margin-left: 8px\">Logout</span>\n            </div>\n          </ion-menu-toggle>\n\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map