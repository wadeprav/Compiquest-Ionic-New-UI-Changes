(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_exam-result_exam-result_module_ts"],{

/***/ 2824:
/*!*****************************************************************!*\
  !*** ./src/app/pages/exam-result/exam-result-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamResultPageRoutingModule": () => (/* binding */ ExamResultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _exam_result_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-result.page */ 2387);




const routes = [
    {
        path: '',
        component: _exam_result_page__WEBPACK_IMPORTED_MODULE_0__.ExamResultPage
    }
];
let ExamResultPageRoutingModule = class ExamResultPageRoutingModule {
};
ExamResultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamResultPageRoutingModule);



/***/ }),

/***/ 6675:
/*!*********************************************************!*\
  !*** ./src/app/pages/exam-result/exam-result.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamResultPageModule": () => (/* binding */ ExamResultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _exam_result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-result-routing.module */ 2824);
/* harmony import */ var _exam_result_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-result.page */ 2387);







let ExamResultPageModule = class ExamResultPageModule {
};
ExamResultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exam_result_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamResultPageRoutingModule
        ],
        declarations: [_exam_result_page__WEBPACK_IMPORTED_MODULE_1__.ExamResultPage]
    })
], ExamResultPageModule);



/***/ }),

/***/ 2387:
/*!*******************************************************!*\
  !*** ./src/app/pages/exam-result/exam-result.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamResultPage": () => (/* binding */ ExamResultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exam_result_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exam-result.page.html */ 9074);
/* harmony import */ var _exam_result_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-result.page.scss */ 7401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);








let ExamResultPage = class ExamResultPage {
    constructor(route, api, prefs, router) {
        this.route = route;
        this.api = api;
        this.prefs = prefs;
        this.router = router;
        this.resultData = [];
        this.isLoading = true;
        this.canId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.prefs.getUserToken().then(resp => {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                    'Authorization': 'Bearer ' + resp.value
                })
            };
            this.api.getData(`/api/ExamResult/GetResultSubjectWiseByQPResultID/${this.canId}`, httpOptions).subscribe((res) => {
                console.log(res);
                this.resultData = res.subjectWiseResult;
                this.calculateTotal();
                this.candidateRes = res.candidateQPDetails;
                this.isLoading = false;
            });
        });
    }
    calculateTotal() {
        this.totalMarks = this.resultData.reduce((res, val) => res + val.maximumMarksPerSubject, 0);
        this.obtainedMarks = this.resultData.reduce((res, val) => res + val.marksObtained, 0);
        console.log(this.totalMarks);
    }
    gotoQuesResult(qpId, subId) {
        const navigationExtras = {
            state: {
                qAData: {
                    qpResId: qpId,
                    subjId: subId
                }
            }
        };
        this.router.navigate(['question-result'], navigationExtras);
    }
    Cancel() {
        location.reload();
        this.router.navigate(['/home']);
    }
};
ExamResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ExamResultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-exam-result',
        template: _raw_loader_exam_result_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exam_result_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamResultPage);



/***/ }),

/***/ 7401:
/*!*********************************************************!*\
  !*** ./src/app/pages/exam-result/exam-result.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  --background: #2D71E5;\n  box-shadow: 0 4px 8px 0 #ece9e9d1, 0 6px 20px 0 #b1a5a570;\n}\n\nion-card p, ion-card ion-text {\n  color: #fff;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 #ece9e9d1, 0 6px 20px 0 #b1a5a570;\n}\n\nion-card p {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhO0VBQ2YseURBQXlEO0FBQzNEOztBQUVFO0VBQ0UsV0FBVztBQUNmOztBQUdFO0VBQ0EseURBQXlEO0FBQTNEOztBQURFO0VBSUksZUFBZTtFQUNmLGdCQUFnQjtBQUN0QiIsImZpbGUiOiJleGFtLXJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICAtLWJhY2tncm91bmQ6ICMyRDcxRTU7O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjZWNlOWU5ZDEsIDAgNnB4IDIwcHggMCAjYjFhNWE1NzA7XG5cbiAgfVxuICBpb24tY2FyZCB7cCAsaW9uLXRleHQge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIH1cbiAgXG4gIGlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgI2VjZTllOWQxLCAwIDZweCAyMHB4IDAgI2IxYTVhNTcwO1xuXG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 9074:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exam-result/exam-result.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/reports\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>Exam Result</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\" style=\"margin-top: 220px;\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div>\n    <ion-card>\n      <ion-grid *ngIf=\"candidateRes\">\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-text style=\"font-weight: bolder;font-size: medium;\">\n              {{candidateRes.qpUniqueName}}\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label color=\"light\">\n              Total Marks:\n            </ion-label>\n            <ion-text *ngIf=\"totalMarks\">\n              {{totalMarks}}\n            </ion-text>\n          </ion-col>\n\n          <!-- <ion-col size=\"6\">\n            <ion-label color=\"light\">\n              Marks Obtained:\n            </ion-label>\n            <ion-text *ngIf=\"obtainedMarks\">\n              {{obtainedMarks}}\n            </ion-text>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <!-- <ion-col size=\"4\">\n            <ion-label color=\"light\">Question paper name:</ion-label>\n\n          </ion-col> -->\n         \n\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card *ngFor=\"let res of resultData\" class=\"ion-padding ion-margin-bottom\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-text>\n              Subject\n            </ion-text>\n            <p>{{res.subjectName}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-text>\n              Total Questions\n            </ion-text>\n            <p>{{res.noOfQuestionsPerSubject}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-text>\n            Marks\n            </ion-text>\n            <p>{{res.maximumMarksPerSubject}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-text>\n              Obtained Marks\n            </ion-text>\n            <p>{{res.marksObtained}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-text>\n              Attempted Questions\n            </ion-text>\n            <p>{{res.attemptedQuestionCount}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-text>Correct Questions</ion-text>\n            <p>{{res.correctQuestionCount}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-text>Unattempted Questions</ion-text>\n            <p>{{res.unAttemptedQuestionCount}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n\n            <ion-text>Wrong Questions</ion-text>\n            <p>{{res.wrongQuestionCount}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-end\">\n            <ion-button (click)=\"gotoQuesResult(res.qpResultID, res.subjectID)\">Question Wise Result</ion-button>\n            <ion-button (click)=\"Cancel()\">Cancel</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exam-result_exam-result_module_ts.js.map