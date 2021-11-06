(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_question-result_question-result_module_ts"],{

/***/ 8585:
/*!*************************************************************************!*\
  !*** ./src/app/pages/question-result/question-result-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionResultPageRoutingModule": () => (/* binding */ QuestionResultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _question_result_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-result.page */ 5800);




const routes = [
    {
        path: '',
        component: _question_result_page__WEBPACK_IMPORTED_MODULE_0__.QuestionResultPage
    }
];
let QuestionResultPageRoutingModule = class QuestionResultPageRoutingModule {
};
QuestionResultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionResultPageRoutingModule);



/***/ }),

/***/ 492:
/*!*****************************************************************!*\
  !*** ./src/app/pages/question-result/question-result.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionResultPageModule": () => (/* binding */ QuestionResultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _question_result_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-result-routing.module */ 8585);
/* harmony import */ var _question_result_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-result.page */ 5800);
/* harmony import */ var _directives_mathjax_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/mathjax.directive */ 2882);








let QuestionResultPageModule = class QuestionResultPageModule {
};
QuestionResultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _question_result_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionResultPageRoutingModule
        ],
        declarations: [_question_result_page__WEBPACK_IMPORTED_MODULE_1__.QuestionResultPage, _directives_mathjax_directive__WEBPACK_IMPORTED_MODULE_2__.MathjaxDirective]
    })
], QuestionResultPageModule);



/***/ }),

/***/ 5800:
/*!***************************************************************!*\
  !*** ./src/app/pages/question-result/question-result.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionResultPage": () => (/* binding */ QuestionResultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_question_result_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./question-result.page.html */ 6826);
/* harmony import */ var _question_result_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-result.page.scss */ 3685);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);








let QuestionResultPage = class QuestionResultPage {
    constructor(route, http, router, auth, pref) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.pref = pref;
        this.questionResults = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.qpData = this.router.getCurrentNavigation().extras.state.qAData;
                console.log(this.qpData);
            }
        });
    }
    ngOnInit() {
        this.pref.getUserToken().then((tok) => {
            this.token = tok.value;
            if (this.token) {
                this.getQuestionsResult();
            }
        });
    }
    getQuestionsResult() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Authorization': 'Bearer ' + this.token
            })
        };
        this.auth.getData(`/api/ExamResult/GetQuestionWiseDetailResult/${this.qpData.qpResId}/${this.qpData.subjId}`, httpOptions).subscribe((ansRes) => {
            console.log(ansRes);
            this.questionResults = ansRes;
        });
    }
};
QuestionResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService }
];
QuestionResultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-question-result',
        template: _raw_loader_question_result_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_question_result_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuestionResultPage);



/***/ }),

/***/ 3685:
/*!*****************************************************************!*\
  !*** ./src/app/pages/question-result/question-result.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-size: 17px;\n  color: white;\n  margin: 7px 0px 7px 0px;\n  font-weight: 700;\n}\n\nion-text {\n  font-size: 14px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLXJlc3VsdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDcEI7O0FBQ0E7RUFFSSxlQUFlO0VBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJxdWVzdGlvbi1yZXN1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDdweCAwcHggN3B4IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuaW9uLXRleHR7XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ 6826:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/question-result/question-result.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/exam-result/1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Question Result</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"questionResults.length == 0\" class=\"ion-text-center\" style=\"margin-top: 30%;\">\n    <ion-spinner>\n\n    </ion-spinner>\n  </div>\n\n  <ion-card *ngFor=\"let res of questionResults\" class=\"ion-padding ion-margin-bottom\">\n    <p> Q. {{res.questionsequence}}\n\n      <span *ngIf=\"res.correctOption == res.attemptedOption\"\n        style=\"color: green;background-color:yellow; padding: 5px;\">Correct</span>\n      <span *ngIf=\"res.correctOption != res.attemptedOption && res.attemptedOption!=null\"\n        style=\"color: red;background-color:yellow; padding: 5px;\">Wrong</span>\n      <span *ngIf=\"res.attemptedOption==null\"\n        style=\"color: red;background-color:yellow; padding: 5px;\">Unattempted</span>\n    </p>\n    <p [appMathjax]=\"res.questionText\" style=\" overflow: hidden;\">{{res.questionText}}</p>\n    <p *ngIf=\"res.questionImage != null\"> <img src=\"{{res.questionImage}}\"></p>\n    <ion-text>\n      Correct Answer:\n    </ion-text>\n    <p [appMathjax]=\"res.correctAnsText\">{{res.correctAnsText}}</p>\n    <p *ngIf=\"res.correctAnsText == null\">\n      <img src=\"{{res.correctAnswerImage}}\">\n    </p>\n\n    <ion-text>Attempted Answer</ion-text>\n    <p [appMathjax]=\"res.attemptedAnsText\">{{res.attemptedAnsText}}</p>\n    <p *ngIf=\"res.correctAnsText == null\"> <img src=\"{{res.attemptedAnswerImage}}\"></p>\n\n    <div *ngIf=\"res.answerSolnText != null || res.solution != null\">\n      <ion-text>Solution</ion-text>\n      <p *ngIf=\"res.solution == null\" [appMathjax]=\"res.answerSolnText\">{{res.AnswerSolnText}}</p>\n      <p *ngIf=\"res.answerSolnText == null\"> <img src=\"{{res.solution}}\"></p>\n    </div>\n    <!-- <p *ngIf=\"res.correctOption == res.attemptedOption\" style=\"color: green;background-color:yellow\" >Correct</p>\n        <p *ngIf=\"res.correctOption != res.attemptedOption\" style=\"color: red;background-color:yellow\" >Wrong</p> -->\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_question-result_question-result_module_ts.js.map