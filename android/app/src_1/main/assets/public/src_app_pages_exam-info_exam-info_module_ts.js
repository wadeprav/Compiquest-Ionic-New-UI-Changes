(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_exam-info_exam-info_module_ts"],{

/***/ 1928:
/*!*************************************************************!*\
  !*** ./src/app/pages/exam-info/exam-info-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamInfoPageRoutingModule": () => (/* binding */ ExamInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _exam_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-info.page */ 9290);




const routes = [
    {
        path: '',
        component: _exam_info_page__WEBPACK_IMPORTED_MODULE_0__.ExamInfoPage
    }
];
let ExamInfoPageRoutingModule = class ExamInfoPageRoutingModule {
};
ExamInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamInfoPageRoutingModule);



/***/ }),

/***/ 9215:
/*!*****************************************************!*\
  !*** ./src/app/pages/exam-info/exam-info.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamInfoPageModule": () => (/* binding */ ExamInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _exam_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-info-routing.module */ 1928);
/* harmony import */ var _exam_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-info.page */ 9290);
/* harmony import */ var src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/expandable/expandable.component */ 8932);








let ExamInfoPageModule = class ExamInfoPageModule {
};
ExamInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _exam_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamInfoPageRoutingModule
        ],
        declarations: [_exam_info_page__WEBPACK_IMPORTED_MODULE_1__.ExamInfoPage, src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__.ExpandableComponent]
    })
], ExamInfoPageModule);



/***/ }),

/***/ 9290:
/*!***************************************************!*\
  !*** ./src/app/pages/exam-info/exam-info.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamInfoPage": () => (/* binding */ ExamInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exam_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exam-info.page.html */ 2038);
/* harmony import */ var _exam_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-info.page.scss */ 4052);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 6628);









let ExamInfoPage = class ExamInfoPage {
    constructor(api, prefs, router) {
        this.api = api;
        this.prefs = prefs;
        this.router = router;
        this.examSubjects = [];
        this.isLoading = true;
        this.prefs.getExamData().then((res) => {
            this.exdata = JSON.parse(res.value);
            console.log(this.exdata);
        });
    }
    ionViewDidEnter() {
        console.log('did');
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.prefs.getUserToken().then((token) => {
            this.getExamDetail(token.value);
            if (this.exdata) {
                this.getResumeExamInfo(token.value);
            }
        });
    }
    getExamDetail(token) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        if (this.exdata) {
            this.api.getData(`/api/Exam/GetCandidateStartExamDetails/${this.exdata.examEnrolDetail}/${this.exdata.candId}/${this.exdata.subjId}`, httpOptions).subscribe((res) => {
                console.log(res);
                this.examSubjects = res.examDetailsSubjectWise;
                this.startExamData = res.examDetailsHeader;
                this.isLoading = false;
            }, (error) => {
                alert(error);
                this.isLoading = false;
            });
        }
    }
    expandContent(idx) {
        this.examSubjects.map((val, idex) => {
            if (idx === idex) {
                val.toggle = !val.toggle;
            }
        });
    }
    gotoExamTake(subId, mins, numbsOfQue) {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.remove({ key: 'examSubjData' });
        const examData = {
            subId: subId,
            examtime: mins,
            numberOfQues: numbsOfQue
        };
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.set({ key: 'examSubjData', value: JSON.stringify(examData) });
        this.router.navigate(['/exam-take']);
    }
    getResumeExamInfo(token) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        if (this.exdata) {
            this.api.getData(`/api/Exam/GetOCResumeExamDetails/${this.exdata.examEnrolDetail}/${this.exdata.candId}/${this.exdata.subjId}`, httpOptions).subscribe((res) => {
                this.resumeExamData = res;
                console.log(this.resumeExamData);
            }, (error) => {
                console.log(error);
            });
        }
    }
    Cancel() {
        location.reload();
        this.router.navigate(['/home']);
    }
};
ExamInfoPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ExamInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-exam-info',
        template: _raw_loader_exam_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exam_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamInfoPage);



/***/ }),

/***/ 4052:
/*!*****************************************************!*\
  !*** ./src/app/pages/exam-info/exam-info.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-col {\n  padding: 10px;\n  border: 1px solid darkgrey;\n}\n\n.exam-det-header {\n  margin: 20px 20px;\n  font-size: 15px;\n  font-weight: 500;\n}\n\nion-label, ion-text {\n  color: white;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 #ece9e9d1, 0 6px 20px 0 #b1a5a570;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0taW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzlCOztBQUNBO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFFcEI7O0FBQUE7RUFDSSxZQUFZO0FBR2hCOztBQUNBO0VBQ0UseURBQXlEO0FBRTNEIiwiZmlsZSI6ImV4YW0taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xufVxuLmV4YW0tZGV0LWhlYWRlcntcbiAgICBtYXJnaW46IDIwcHggMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1sYWJlbCwgaW9uLXRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5pb24tY2FyZHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgI2VjZTllOWQxLCAwIDZweCAyMHB4IDAgI2IxYTVhNTcwO1xuXG4gIH0iXX0= */");

/***/ }),

/***/ 2038:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exam-info/exam-info.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>\n      Exam Information\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\" style=\"margin-top: 50px;\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div>\n    <p class=\"exam-det-header\">\n      Exam Details\n    </p>\n    <ion-card class=\"ion-margin\" *ngIf=\"resumeExamData\">\n      <ion-grid *ngIf=\"resumeExamData.resumeExamSubjectDetails\">\n\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-label>Total Questions:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text>{{resumeExamData.resumeExamSubjectDetails.noOfQuestions}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-label>Attempted Questions</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-text>{{resumeExamData.resumeExamSubjectDetails.attemptedQcount}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-label>UnAttempted Questions</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-text>{{resumeExamData.resumeExamSubjectDetails.unAttemptedQcount}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-label>Negative Marks Per Questions</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-text>{{resumeExamData.resumeExamSubjectDetails.negativeMarksPerQues}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n  </div>\n  <div class=\"ion-padding\" *ngIf=\"examSubjects\">\n    <div *ngFor=\"let exam of examSubjects; let i = index\">\n      <ion-item *ngIf=\"resumeExamData\">\n        <ion-label (click)=\"expandContent(i)\">{{exam.subjectName}}</ion-label>\n        <ion-button *ngIf=\"!resumeExamData.resumeExamHeader\"\n          (click)=\"gotoExamTake(exam.subjectID, startExamData.durationMins, exam.noOfQuestions)\">\n          {{exdata.isExamAppeared == true ? 'Resume Exam' :\n          'Start Exam'}}\n        </ion-button>\n        <ion-button *ngIf=\"resumeExamData.resumeExamHeader\"\n          [disabled]=\"!resumeExamData.resumeExamHeader.isExamCompleted == 'I'\"\n          (click)=\"gotoExamTake(exam.subjectID, resumeExamData.resumeExamHeader.durationMins/60, exam.noOfQuestions)\">\n          {{resumeExamData.resumeExamHeader.isExamAppeared == true ? 'Resume Exam' :\n          'Start Exam'}}\n        </ion-button>\n        <!-- <ion-button *ngIf=\"!resumeExamData.resumeExamHeader\"\n          (click)=\"gotoExamTake(exam.subjectID, startExamData.durationMins, exam.noOfQuestions)\">\n          {{resumeExamData.resumeExamHeader.isExamAppeared == true ? 'Resume Exam' :\n          'Start Exam'}}\n        </ion-button>\n        <ion-button *ngIf=\"resumeExamData.resumeExamHeader\"\n          (click)=\"gotoExamTake(exam.subjectID, resumeExamData.resumeExamHeader.durationMins/60, exam.noOfQuestions)\">\n          {{resumeExamData.resumeExamHeader.isExamAppeared == true ? 'Resume Exam' :\n          'Start Exam'}}\n        </ion-button> -->\n        <ion-icon *ngIf=\"exam.toggle == false\" name=\"add-outline\"></ion-icon>\n        <ion-icon *ngIf=\"exam.toggle == true\" name=\"remove-outline\"></ion-icon>\n      </ion-item>\n\n      <app-expandable [expanded]=\"exam.toggle == true\" expandHeight=\"500px\">\n\n        <ion-card>\n          <ion-grid>\n\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label>Subject</ion-label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <ion-text>{{exam.subjectName}}</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label>No Of Questions</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-text>{{exam.noOfQuestions}}</ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label>Marks</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-text>{{exam.maximumMarksPerSubject}}</ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label>-Ve Marks</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-text>{{exam.negativeMarksPerQues}}</ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label>Paper No</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-text>{{exam.subjectID}}</ion-text>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label> Duration Mins</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-text>{{exam.subDurationMins}}</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label>Marks Per Question</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-text>{{exam.marksPerQuestion}}</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label> Part of Question Paper</ion-label>\n              </ion-col>\n              <ion-col>\n                <ion-text>{{exam.partOfQuestionPaper}}</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col *ngIf=\"resumeExamData\">\n                <!-- <ion-button (click)=\"gotoExamTake(exam.subjectID, exam.subDurationMins, exam.noOfQuestions)\">\n                  {{data.isAppeared == true ? 'Resume Exam' :\n                  'Start Exam'}}\n                </ion-button> -->\n\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n\n\n\n      </app-expandable>\n    </div>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exam-info_exam-info_module_ts.js.map