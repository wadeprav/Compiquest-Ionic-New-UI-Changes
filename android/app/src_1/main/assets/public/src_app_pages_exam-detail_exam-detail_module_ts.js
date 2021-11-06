(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_exam-detail_exam-detail_module_ts"],{

/***/ 6112:
/*!*****************************************************************!*\
  !*** ./src/app/pages/exam-detail/exam-detail-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamDetailPageRoutingModule": () => (/* binding */ ExamDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _exam_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-detail.page */ 3253);




const routes = [
    {
        path: '',
        component: _exam_detail_page__WEBPACK_IMPORTED_MODULE_0__.ExamDetailPage
    }
];
let ExamDetailPageRoutingModule = class ExamDetailPageRoutingModule {
};
ExamDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamDetailPageRoutingModule);



/***/ }),

/***/ 3256:
/*!*********************************************************!*\
  !*** ./src/app/pages/exam-detail/exam-detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamDetailPageModule": () => (/* binding */ ExamDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _exam_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-detail-routing.module */ 6112);
/* harmony import */ var _exam_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-detail.page */ 3253);







let ExamDetailPageModule = class ExamDetailPageModule {
};
ExamDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exam_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamDetailPageRoutingModule
        ],
        declarations: [_exam_detail_page__WEBPACK_IMPORTED_MODULE_1__.ExamDetailPage]
    })
], ExamDetailPageModule);



/***/ }),

/***/ 3253:
/*!*******************************************************!*\
  !*** ./src/app/pages/exam-detail/exam-detail.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamDetailPage": () => (/* binding */ ExamDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exam_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exam-detail.page.html */ 7199);
/* harmony import */ var _exam_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-detail.page.scss */ 6322);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);









let ExamDetailPage = class ExamDetailPage {
    constructor(router, prefs, api, navCtrl) {
        this.router = router;
        this.prefs = prefs;
        this.api = api;
        this.navCtrl = navCtrl;
        this.isLoading = true;
        this.examTable = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.data = this.router.getCurrentNavigation().extras.state.examStatus;
            this.prefs.setExamData({ candId: this.data.canId, examEnrolDetail: this.data.enDetId, subjId: this.data.subId, qpResultId: this.data.qpResultId, isAppeared: this.data.isAppeard });
        }
    }
    ngOnInit() {
        this.prefs.getUserToken().then(resp => {
            this.getExamDetail(resp.value);
        });
    }
    getExamDetail(token) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        if (this.data) {
            this.api.getData(`/api/Exam/GetCandidateStartExamDetails/${this.data.enDetId}/${this.data.canId}/${this.data.subId}`, httpOptions).subscribe((res) => {
                console.log(res);
                alert(res);
                this.candidateData = res.examDetailsHeader;
                this.examTable = res.examDetailsSubjectWise;
                this.isLoading = false;
            }, (error) => {
                alert(error);
                this.isLoading = false;
            });
        }
    }
    gotoExamScreen() {
        this.router.navigate(['/exam-info']);
    }
};
ExamDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
ExamDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-exam-detail',
        template: _raw_loader_exam_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exam_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamDetailPage);



/***/ }),

/***/ 6322:
/*!*********************************************************!*\
  !*** ./src/app/pages/exam-detail/exam-detail.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  margin: 0px;\n  color: white;\n  font-size: 14px;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 #ece9e9d1, 0 6px 20px 0 #b1a5a570;\n}\n\nion-label {\n  font-size: 14px;\n  color: white;\n}\n\nion-text {\n  color: white;\n}\n\n.notice-cont ion-label {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.notice-cont p {\n  color: red;\n  font-weight: 500;\n}\n\nion-col {\n  border: 1px solid darkgrey;\n}\n\n.exam-subs-detail ion-col {\n  font-size: 12px;\n}\n\n.exam-subs-detail ion-text {\n  display: block;\n  margin-top: 10px;\n}\n\n.cand-data-grid {\n  padding: 10px;\n}\n\np {\n  margin: 5px;\n  font-weight: 600;\n}\n\nion-label {\n  margin: 5px;\n}\n\nion-card.sub-detail {\n  width: 100%;\n  text-align: start;\n  padding: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNuQjs7QUFFQTtFQUNJLHlEQUF5RDtBQUM3RDs7QUFFQTtFQUNJLGVBQWU7RUFDZixZQUFZO0FBQ2hCOztBQUNBO0VBQ0ksWUFBWTtBQUVoQjs7QUFBQTtFQUdRLGVBQWU7RUFDZixnQkFBZ0I7QUFDeEI7O0FBTEE7RUFRUSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ3hCOztBQUdBO0VBQ0ksMEJBQTBCO0FBQTlCOztBQUdBO0VBQ0ksZUFBZTtBQUFuQjs7QUFFQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDQyxhQUFhO0FBQ2Q7O0FBQ0M7RUFDRyxXQUFXO0VBQ1gsZ0JBQWdCO0FBRXBCOztBQUFBO0VBQ0ksV0FBVztBQUdmOztBQURBO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBSWpCIiwiZmlsZSI6ImV4YW0tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1jYXJke1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICNlY2U5ZTlkMSwgMCA2cHggMjBweCAwICNiMWE1YTU3MDtcbiAgXG4gICAgfVxuaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RpY2UtY29udCB7XG5cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICBcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuXG5pb24tY29sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbn1cblxuLmV4YW0tc3Vicy1kZXRhaWwgaW9uLWNvbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmV4YW0tc3Vicy1kZXRhaWwgaW9uLXRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59ICAgXG5cbi5jYW5kLWRhdGEtZ3JpZHtcbiBwYWRkaW5nOiAxMHB4O1xufVxuIHAge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tbGFiZWwge1xuICAgIG1hcmdpbjogNXB4O1xufVxuaW9uLWNhcmQuc3ViLWRldGFpbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgcGFkZGluZzogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ 7199:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exam-detail/exam-detail.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"data\">\n      {{data.isAppeard == true ? 'Resume Exam' :\n      'Start Exam'}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\" style=\"height: 100%; width: 100%;\" *ngIf=\"isLoading\">\n    <ion-spinner style=\"margin-top: 50%;\"></ion-spinner>\n  </div>\n  <ion-card class=\"cand-data-grid\" *ngIf=\"candidateData\">\n    <ion-label>Institute:</ion-label>\n\n    <p>{{candidateData.instituteName}}</p>\n    <ion-label>Enrolled On:</ion-label>\n\n    <p>{{candidateData.examEnrollmentDate}}</p>\n\n    <ion-label>Remaining Duration:</ion-label>\n\n    <p *ngIf=\"candidateData.durationMins\">{{candidateData.durationMins}} mins</p>\n    <p *ngIf=\"!candidateData.durationMins\">0 mins</p>\n\n    <ion-label>Question Paper:</ion-label>\n\n    <p>{{candidateData.qpUniqueName}}</p>\n\n    <ion-label>Total Questions:</ion-label>\n\n    <p *ngIf=\"candidateData.noOfQuestions\">{{candidateData.noOfQuestions}}</p>\n    <p *ngIf=\"!candidateData.noOfQuestions\">0</p>\n\n    <ion-label>Max Marks:</ion-label>\n\n    <p *ngIf=\"candidateData.maximumMarksForExam\">{{candidateData.maximumMarksForExam}}</p>\n    <p *ngIf=\"!candidateData.maximumMarksForExam\">0</p>\n  </ion-card>\n  <div class=\"ion-padding ion-text-center\">\n    <div class=\"notice-cont ion-margin-top\">\n      <div class=\"ion-margin-top\">\n        <p>To {{data.isAppeard == true ? 'Resume' :\n          'Start'}} the exam, please click </p>\n        <p>Detailed Subject wise summary is described in Next Screen.</p>\n        <ion-button class=\"ion-margin-top\" (click)=\"gotoExamScreen()\">{{data.isAppeard == true ? 'Resume Exam' :\n          'Start Exam'}}</ion-button>\n      </div>\n    </div>\n\n\n\n  </div>\n\n  <ion-slides *ngIf=\"examTable.length > 0\">\n    <ion-slide *ngFor=\"let examSub of examTable\">\n      <ion-card class=\"sub-detail\">\n        <ion-text>Subject</ion-text>\n        <p>\n          {{examSub.subjectName}}\n        </p>\n        <ion-text>\n          No. of Questions\n        </ion-text>\n        <p>\n          {{examSub.noOfQuestions}}\n        </p>\n        <ion-text>Marks</ion-text>\n        <p>{{examSub.maximumMarksPerSubject}}</p>\n        <ion-text> -Ve Marks</ion-text>\n        <p>{{examSub.negativeMarksPerQues}}</p>\n        <ion-text>Paper No</ion-text>\n        <p>{{examSub.subjectID}}</p>\n        <ion-text>\n          Duration Mins\n        </ion-text>\n        <p>{{examSub.subDurationMins}}</p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- <div class=\"ion-margin\">\n    <h5>General Instructions or Guidelines :</h5>\n    <p>Before Begining of the exam</p>\n\n\n    <ion-text>1. Make sure you have the good Internet connection.<br>\n      2. If you are taking the exam late in the day, it is recommended that you reboot your computer before\n      beginning to free up memory resources from other programs on your computer.<br>\n      3. Shut down all instant Messaging tools (Skype, AIM, MSN Messenger) and Email programs as they can conflict\n      with Blackboard.<br>\n      4. Enter the exam using Firefox or google chrome. Do not use any other internet browser.<br>\n      5. Maximize your browser window before starting the test. Minimizing the browser window during the exam can\n      prevent the submission of your exam.<br>\n      6. When you begin the exam click the START Exam button only ONCE to launch the test. Double clicking can lock\n      the test.<br>\n    </ion-text>\n\n  </div>\n\n  <div class=\"ion-margin\">\n    <h5>During the exam:</h5>\n    <ion-text>\n      1. Do not begin until you are absolutely ready to start!<br>\n      2. Do not resize (minimize) the browse during the test<br>\n      3. The exam must be completed in one sitting. You can only open it once.<br>\n      4. Avoid using the scroll button on your mouse if present.<br>\n      5. You will have 180 minutes to complete your exam.<br>\n      6. Answer all questions in the exam.<br>\n      7. Click the “Submit” button to submit your exam. Do not press “Enter” on the keyboard to submit the exam.<br>\n      <p style=\"color: red;\"> 8. Timer will be displayed at the right hand corner and the Exam Window will be\n        automatically Closed after Time\n        out.</p><br>\n    </ion-text>\n  </div> -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exam-detail_exam-detail_module_ts.js.map