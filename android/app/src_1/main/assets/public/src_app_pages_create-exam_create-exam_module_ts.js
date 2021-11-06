(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_create-exam_create-exam_module_ts"],{

/***/ 6779:
/*!*****************************************************************!*\
  !*** ./src/app/pages/create-exam/create-exam-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateExamPageRoutingModule": () => (/* binding */ CreateExamPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_exam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-exam.page */ 5601);




const routes = [
    {
        path: '',
        component: _create_exam_page__WEBPACK_IMPORTED_MODULE_0__.CreateExamPage
    }
];
let CreateExamPageRoutingModule = class CreateExamPageRoutingModule {
};
CreateExamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateExamPageRoutingModule);



/***/ }),

/***/ 6481:
/*!*********************************************************!*\
  !*** ./src/app/pages/create-exam/create-exam.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateExamPageModule": () => (/* binding */ CreateExamPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_exam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-exam-routing.module */ 6779);
/* harmony import */ var _create_exam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-exam.page */ 5601);







let CreateExamPageModule = class CreateExamPageModule {
};
CreateExamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_exam_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateExamPageRoutingModule
        ],
        declarations: [_create_exam_page__WEBPACK_IMPORTED_MODULE_1__.CreateExamPage]
    })
], CreateExamPageModule);



/***/ }),

/***/ 5601:
/*!*******************************************************!*\
  !*** ./src/app/pages/create-exam/create-exam.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateExamPage": () => (/* binding */ CreateExamPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_exam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-exam.page.html */ 7044);
/* harmony import */ var _create_exam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-exam.page.scss */ 1502);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);









let CreateExamPage = class CreateExamPage {
    constructor(toast, api, navCtrl, pref, http, alertController, router) {
        this.toast = toast;
        this.api = api;
        this.navCtrl = navCtrl;
        this.pref = pref;
        this.http = http;
        this.alertController = alertController;
        this.router = router;
        this.allExamType = [];
        this.isSub = false;
        this.subList = [];
        this.secList = [];
        this.lessonList = [];
        this.secListSave = [];
        this.lessonListSave = [];
        this.gnericPaperList = [];
        this.selfExam = {
            candidateID: 0,
            qpDefaultCriteriaFlag: true,
            examTypeID: 0,
            subjectID: 0,
            sectionID: 0,
            lessonID: 0,
            topicID: 0,
            toughFlag: true
        };
    }
    ngOnInit() {
        this.pref.getUser().subscribe((res) => {
            this.userData = JSON.parse(res);
            this.selfExam.candidateID = this.userData.candidateID;
        });
        this.pref.getUserToken().then((toke) => {
            this.token = toke.value;
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                })
            };
        });
    }
    getAllExams(e) {
        this.crExamType = '';
        this.crExamType = e.detail.value;
        this.api.getData(`/api/CreateExamForOnlineCandidate/GetCandidateExamTypes/${this.userData.candidateID}`, this.httpOptions).subscribe((exRes) => {
            this.allExamType = exRes.value;
        });
    }
    getComplexity(e) {
        const comp = e.detail.value;
        if (comp == 'tough') {
            this.selfExam.toughFlag = true;
        }
        else {
            this.selfExam.toughFlag = false;
        }
    }
    getGenericExam(e) {
        this.genexamId = e.detail.value.examTypeId;
        console.log(this.genexamId);
        this.api.getData(`/api/CreateExamForOnlineCandidate/GetGenericQuestionPaperList/${this.userData.candidateID}/${this.genexamId}`, this.httpOptions).subscribe((examRes) => {
            console.log(examRes);
            this.gnericPaperList = examRes.value;
        });
    }
    getExamType(e) {
        this.subList = [];
        const examId = e.detail.value.examTypeId;
        this.selfExam.examTypeID = examId;
        this.api.getData(`/api/CreateExamForOnlineCandidate/GetSubjectList/${examId}`, this.httpOptions).subscribe((examRes) => {
            console.log(examRes);
            this.subList = examRes.value.subjectListViewModel;
        });
    }
    getGenricQuesPaper(e) {
        this.qpCriId = e.detail.value.questionPaperCriteriaId;
    }
    getSub(e) {
        this.selfExam.subjectID = e.detail.value.subjectID;
        this.getSecList(e.detail.value.subjectID);
    }
    getSec(e) {
        this.selfExam.sectionID = e.detail.value.sectionID;
        this.getLessList(e.detail.value.sectionID);
    }
    getLes(e) {
        this.selfExam.lessonID = e.detail.value.lessonID;
    }
    submitGeneric() {
        if (this.crExamType == 'self') {
            if (this.selfExam.examTypeID == 0) {
                this.presentAlert('Kindly Select exam type');
                return;
            }
            if (this.selfExam.subjectID != 0) {
                this.selfExam.qpDefaultCriteriaFlag = false;
            }
            this.isSub = true;
            if (this.userData.instituteID == "0") //Enable Create Exam for Online Candidate.
             {
                this.createExamAPILink = `/api/CreateExamForOnlineCandidate/CreateExamForOnlineCandidate`;
            }
            else if (this.userData.instituteID > 0 || this.userData.instituteID != null) //Enable Create Exam for Institute Candidate.
             {
                this.createExamAPILink = `/api/CreateExamForInstituteCandidate/CreateExamForInstituteCandidate`;
            }
            this.api.postData(this.createExamAPILink, this.selfExam, this.httpOptions).subscribe((res) => {
                // this.presentAlert(res.value);
                this.isSub = false;
                console.log(res);
                if (res.value == 'SUCCESS') {
                    this.presentToast('Exam created');
                    this.navCtrl.navigateRoot('/home');
                    location.reload();
                }
                else {
                    this.presentAlert('There is problem creating exam');
                }
            });
        }
        else {
            if (this.genexamId == null) {
                this.presentAlert('Kindly Select exam type');
            }
            else if (this.qpCriId == null) {
                this.presentAlert('Kindly Select question paper');
            }
            else {
                this.isSub = true;
                this.http.post(`https://api.compiquest.com:8443/api/CreateExamForOnlineCandidate/InsertGenericPaperCriteria?CandidateID=${this.userData.candidateID}&QuestionPaperCriteriaID=${this.qpCriId}`, {}).subscribe(res => this.presentAlert(res));
                this.isSub = false;
                this.navCtrl.navigateRoot('/home');
            }
        }
    }
    presentAlert(msg) {
        this.alertController.create({
            header: 'Notification',
            message: msg,
            buttons: ['OK']
        }).then(aler => aler.present());
    }
    presentToast(msg) {
        this.toast.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
    cancelExam() {
        this.navCtrl.navigateRoot('/home');
    }
    selectPapCont(e) {
        this.papCont = e.detail.value;
    }
    getSecList(id) {
        this.secList = [];
        this.api.getData(`/api/CreateExamForOnlineCandidate/GetSectionsBySubject/${id}`, this.httpOptions).subscribe((resp) => {
            console.log(resp);
            this.secList = resp.value.sectionListViewModel;
        });
    }
    getLessList(id) {
        this.lessonList = [];
        this.api.getData(`/api/CreateExamForOnlineCandidate/GetLessonBySection/${id}`, this.httpOptions).subscribe((resp) => {
            console.log(resp);
            this.lessonList = resp.value.lessonListViewModel;
        });
    }
};
CreateExamPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
CreateExamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create-exam',
        template: _raw_loader_create_exam_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_exam_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateExamPage);



/***/ }),

/***/ 1502:
/*!*********************************************************!*\
  !*** ./src/app/pages/create-exam/create-exam.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-radio-group ion-label {\n  margin-left: 5px;\n}\n\n.alert-tappable.alert-radio {\n  height: auto;\n  contain: content;\n}\n\n.alert-radio-label.sc-ion-alert-md,\n.alert-radio-label.sc-ion-alert-ios {\n  white-space: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1leGFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFnQjtBQUF4Qjs7QUFHQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7QUFBcEI7O0FBR0E7O0VBRUksbUJBQW1CO0FBQXZCIiwiZmlsZSI6ImNyZWF0ZS1leGFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby1ncm91cCB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG59XG4uYWxlcnQtdGFwcGFibGUuYWxlcnQtcmFkaW8ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjb250YWluOiBjb250ZW50O1xufVxuXG4uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kLFxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */");

/***/ }),

/***/ 7044:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-exam/create-exam.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title>Create Exam</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n\n    <div class=\"ion-margin-top\">\n      <ion-label>\n        Paper Type:\n      </ion-label>\n      <ion-radio-group (ionChange)=\"getAllExams($event)\">\n        <ion-item>\n          <ion-radio value=\"generic\"></ion-radio>\n          <ion-label>CompiQuest</ion-label>\n          <ion-radio value=\"self\"></ion-radio>\n          <ion-label>Self</ion-label>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n\n    <div class=\"ion-margin-top\" *ngIf=\"allExamType.length > 0\">\n      <ion-label>\n        Exam\n      </ion-label>\n      <ion-select (ionChange)=\"crExamType == 'self' ? getExamType($event): getGenericExam($event)\"\n        placeholder=\"Select exam\">\n        <ion-select-option *ngFor=\"let exam of allExamType\" [value]=\"exam\">{{exam.examName}}</ion-select-option>\n      </ion-select>\n    </div>\n\n    <div class=\"ion-margin-top\" *ngIf=\"crExamType == 'self'\">\n      <ion-label>Complexity:</ion-label>\n      <ion-radio-group value=\"tough\" (ionChange)=\"getComplexity($event)\">\n        <ion-item>\n          <ion-radio value=\"tough\"></ion-radio>\n          <ion-label>Tough</ion-label>\n          <ion-radio value=\"regular\"></ion-radio>\n          <ion-label>Regular</ion-label>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n    <div class=\"ion-margin-top\" *ngIf=\"crExamType == 'self'\">\n      <ion-label>Paper Content:</ion-label>\n      <ion-radio-group value=\"mock\" (ionChange)=\"selectPapCont($event)\">\n        <ion-item>\n          <ion-radio value=\"mock\"></ion-radio>\n          <ion-label>Mock Test</ion-label>\n          <ion-radio value=\"subject\"></ion-radio>\n          <ion-label>Subject</ion-label>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-no-padding ion-margin-top\" *ngIf=\"papCont == 'subject' && crExamType == 'self'\">\n        <ion-col size=\"12\" *ngIf=\"subList.length > 0\">\n          <ion-label> Subjects:</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Select subject\" (ionChange)=\"getSub($event)\">\n            <ion-select-option *ngFor=\"let sub of subList\" [value]=\"sub\">{{sub.subjectName}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"secList.length > 0\">\n          <ion-label>Sections:</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Select section\" (ionChange)=\"getSec($event)\">\n            <ion-select-option *ngFor=\"let sec of secList\" [value]=\"sec\">{{sec.sectionName}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"lessonList.length > 0\">\n          <ion-label>Lessons:</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Select lesson\" (ionChange)=\"getLes($event)\">\n            <ion-select-option *ngFor=\"let leson of lessonList\" [value]=\"leson\">{{leson.lessonName}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-top\" *ngIf=\"crExamType == 'generic' && gnericPaperList.length > 0\">\n        <ion-label>\n          Generic Question Paper:\n        </ion-label>\n        <ion-col size=\"12\">\n          <ion-select interface=\"action-sheet\" placeholder=\"Select Question Paper\"\n            (ionChange)=\"getGenricQuesPaper($event)\">\n            <ion-select-option *ngFor=\"let genExam of gnericPaperList\" [value]=\"genExam\">\n              {{genExam.qpUniqueName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-button (click)=\"submitGeneric()\" [disabled]=\"crExamType == null\">\n        <ion-text *ngIf=\"!isSub\">{{crExamType == 'generic' ? 'Assign CompiQuest Paper' : 'Generate Paper'}}</ion-text>\n        <ion-spinner *ngIf=\"isSub\"></ion-spinner>\n      </ion-button>\n      <ion-button (click)=\"cancelExam()\">Cancel</ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_create-exam_create-exam_module_ts.js.map