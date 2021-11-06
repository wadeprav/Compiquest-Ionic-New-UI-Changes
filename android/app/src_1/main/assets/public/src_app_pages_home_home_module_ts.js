(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 6178);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ChartsModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);









let HomePage = class HomePage {
    constructor(menuCtrl, api, router, pref) {
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.router = router;
        this.pref = pref;
        this.examsData = [];
        this.isLoading = true;
        this.pref.getUser().subscribe(res => {
            this.userData = JSON.parse(res);
        });
        this.menuCtrl.enable(true);
    }
    ngOnInit() {
        this.pref.getUserToken().then(resp => {
            this.token = resp.value;
            this.getExamsData(resp.value, this.userData.candidateID);
        });
    }
    getExamsData(token, candId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        this.api.getData(`/api/ExamEnrollment/GetEnrollmentByCandidateID/${candId}`, httpOptions).subscribe((res) => {
            console.log(res);
            this.userData = res.candidateModel;
            this.examsData = res.examEnrollmetDetailsModel;
            this.examListBackup = this.examsData;
            this.isLoading = false;
        });
    }
    gotoExamDetail(enrolDetailsId, candId, subjectId, appeard, qpResId) {
        this.pref.setExamData({ candId: candId, examEnrolDetail: enrolDetailsId, subjId: subjectId, qpResultId: qpResId, isAppeard: appeard });
        this.router.navigate(['/exam-info']);
    }
    gotoResult(id) {
        this.router.navigate(['/exam-result', id]);
    }
    filterList(evt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.examsData = this.examListBackup;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.examsData = this.examsData.filter(curExam => {
                if (curExam.qpUniqueName && searchTerm) {
                    return (curExam.qpUniqueName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    getPapersList(e) {
        this.getExamsData(this.token, this.userData.candidateID);
        if (e)
            e.target.complete();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("img {\n  height: 50px;\n  width: 50px;\n  border-radius: 100px;\n  margin-top: 20px;\n}\n\np {\n  margin: 4px;\n}\n\nion-text {\n  display: block;\n  color: white;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 #000000d1, 0 6px 20px 0 #00000070;\n}\n\nion-card p {\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n}\n\nion-label {\n  text-transform: capitalize;\n  color: white;\n  font-size: 16px;\n  display: block;\n}\n\n.exam-btns {\n  margin-right: 20%;\n}\n\n.grid_base {\n  box-shadow: 0 4px 8px 0 #ece9e9d1, 0 6px 20px 0 #b1a5a570;\n}\n\n.base {\n  box-shadow: 0 2px 2px 0 #2485e9d1, 0 2px 3px 0 #16101070;\n  border-radius: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztBQUViOztBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFHZDs7QUFFQTtFQUNBLHlEQUF5RDtBQUN6RDs7QUFGQTtFQUtJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFDRjtBQUFGOztBQUdBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUFoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlEQUF5RDtBQUMzRDs7QUFHQTtFQUNFLHdEQUF3RDtFQUV4RCxrQkFBa0I7QUFEcEIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbnB7XG4gIG1hcmdpbjogNHB4O1xufVxuaW9uLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuaW9uLWNhcmQge1xuYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzAwMDAwMGQxLCAwIDZweCAyMHB4IDAgIzAwMDAwMDcwO1xuXG4gIHB7XG5cbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogd2hpdGVcbiAgfVxuXG59XG5pb24tbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmV4YW0tYnRuc3sgIFxuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn1cblxuLmdyaWRfYmFzZXtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgI2VjZTllOWQxLCAwIDZweCAyMHB4IDAgI2IxYTVhNTcwO1xuLy8gYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzAwMDAwMGQxLCAwIDZweCAyMHB4IDAgIzAwMDAwMDcwO1xuXG59XG4uYmFzZXtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgIzI0ODVlOWQxLCAwIDJweCAzcHggMCAjMTYxMDEwNzA7XG5cbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufSJdfQ== */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-toolbar>\n  <ion-searchbar showcancelbutton=\"\" (ionInput)=\"filterList($event)\"></ion-searchbar>\n</ion-toolbar>\n<ion-content>\n  <div *ngIf=\"isLoading\" style=\"height: 100%; text-align: center;\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"getPapersList($event)\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content pullingIcon=\"arrow-down-outline\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\"\n      refreshingText=\"Loading data...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div>\n\n\n    <ion-card *ngFor=\"let exam of examsData\" class=\"ion-padding ion-margin\">\n      <!-- <ion-text>\n        Paper\n      </ion-text> -->\n      <ion-grid >\n        <ion-row>\n          <ion-col sizeSm=\"4\" class=\"base\">\n            <p style=\"font-weight: bolder;font-size: large; text-align: center;\" >{{exam.qpUniqueName}}</p>\n          </ion-col>\n            <ion-col sizeSm=\"4\">\n              <div class=\"ion-text-end exam-btns\">\n\n                <ion-button *ngIf=\"exam.examCompletionStatus == 'I' && exam.isExamAppeared == true\"\n                  (click)=\"gotoExamDetail(exam.examEnrollmentDetailsId, exam.candidateId, exam.subjectId, exam.isExamAppeared, exam.qpResultID)\">\n                  RESUME</ion-button>\n                <ion-button *ngIf=\"exam.examCompletionStatus == null && exam.isExamAppeared == false\"\n                  (click)=\"gotoExamDetail(exam.examEnrollmentDetailsId, exam.candidateId, exam.subjectId, exam.isExamAppeared, exam.qpResultID)\">\n                  START</ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n      <ion-grid class=\"base\">\n        <ion-row>\n          <ion-col sizeSm=\"4\">\n            <ion-text>\n              Enrollment:\n            </ion-text>\n          </ion-col>\n          <ion-col sizeSm=\"6\">\n            <p>{{exam.examEnrolmentDate}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"exam.examAppearedDate\">\n          <ion-col sizeSm=\"4\">\n            <ion-text>\n              Appeared\n            </ion-text>\n          </ion-col>\n          <ion-col sizeSm=\"6\">\n            <p>{{exam.examAppearedDate}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col sizeSm=\"4\">\n            <ion-text>\n              Result Details\n            </ion-text>\n          </ion-col>\n          <ion-col sizeSm=\"6\">\n            <p *ngIf=\"exam.examCompletionStatus == 'I' && exam.isExamAppeared == true\">In Progress</p>\n            <p *ngIf=\"exam.examCompletionStatus == null && exam.isExamAppeared == false\">In Progress</p>\n            <p *ngIf=\"exam.examCompletionStatus == 'C' && exam.isExamAppeared == true\">Attempted</p>\n\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"exam.examCompletionStatus == 'C' && exam.isExamAppeared == true\">\n          <ion-col sizeSm=\"3\">\n            <ion-label style=\"font-size: 14px;\">\n              Marks Obtained:\n            </ion-label>\n            <ion-text>{{exam.marksObtained}}/{{exam.totalMarks}}\n              <!-- {{exam.marksObtained / exam.totalMarks | number:'1.1-2'}} -->\n            </ion-text>\n          </ion-col>\n          <ion-col sizeSm=\"7\">\n            <ion-button (click)=\"gotoResult(exam.qpResultID)\"> Check Result\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n    </ion-card>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map