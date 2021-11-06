(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_exam-take_exam-take_module_ts"],{

/***/ 8150:
/*!*************************************************************!*\
  !*** ./src/app/pages/exam-take/exam-take-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTakePageRoutingModule": () => (/* binding */ ExamTakePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _exam_take_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-take.page */ 3361);




const routes = [
    {
        path: '',
        component: _exam_take_page__WEBPACK_IMPORTED_MODULE_0__.ExamTakePage
    }
];
let ExamTakePageRoutingModule = class ExamTakePageRoutingModule {
};
ExamTakePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamTakePageRoutingModule);



/***/ }),

/***/ 3842:
/*!*****************************************************!*\
  !*** ./src/app/pages/exam-take/exam-take.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTakePageModule": () => (/* binding */ ExamTakePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _exam_take_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-take-routing.module */ 8150);
/* harmony import */ var _exam_take_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-take.page */ 3361);
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/expandable/expandable.component */ 8932);
/* harmony import */ var _directives_mathjax_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/mathjax.directive */ 2882);









let ExamTakePageModule = class ExamTakePageModule {
};
ExamTakePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _exam_take_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamTakePageRoutingModule
        ],
        declarations: [_exam_take_page__WEBPACK_IMPORTED_MODULE_1__.ExamTakePage, _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__.ExpandableComponent, _directives_mathjax_directive__WEBPACK_IMPORTED_MODULE_3__.MathjaxDirective]
    })
], ExamTakePageModule);



/***/ }),

/***/ 3361:
/*!***************************************************!*\
  !*** ./src/app/pages/exam-take/exam-take.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamTakePage": () => (/* binding */ ExamTakePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exam_take_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exam-take.page.html */ 3086);
/* harmony import */ var _exam_take_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-take.page.scss */ 3879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 6628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);











let ExamTakePage = class ExamTakePage {
    constructor(router, alertController, navCtrl, api, prefs) {
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.api = api;
        this.prefs = prefs;
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('00:00:00');
        this.isLoading = true;
        this.examSubjects = [];
        this.quesData = [];
        this.multianswers = [];
        this.answerSubmited = false;
        this.quetsIndexArray = [];
        this.examAsnwer = {
            candidateId: 0,
            quesPaperCriteriaID: 0,
            examEnrollmentDetailsID: 0,
            questionID: 0,
            qpAttemtedAnswerTableType: "",
            duration: 0,
            completionStatus: ''
        };
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.get({ key: 'examSubjData' }).then(res => {
            this.data = JSON.parse(res.value);
        });
    }
    ngOnInit() {
        this.prefs.getUserToken().then(tkn => {
            this.token = tkn.value;
            this.prefs.getExamData().then((exms) => {
                this.examData = JSON.parse(exms.value);
                this.getExamQuets(tkn.value, this.data.subId, this.data.examtime * 60);
            });
        });
    }
    getExamQuets(token, subId, timer) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Authorization': 'Bearer ' + token
            })
        };
        this.api.getData(`/api/Exam/GetExamQARealtimeOneByOne/${this.examData.examEnrolDetail}/${this.examData.candId}/${subId}/1/${timer}`, httpOptions).subscribe((ques) => {
            console.log(ques);
            this.exmHeader = ques.examHeader;
            this.quesData = ques.questionAnswerData;
            this.quetsIndexArray = ques.subjectWiseQuestionsAttempted;
            this.getSelectAnswer();
            this.startTimer(timer);
            this.isLoading = false;
        });
    }
    getSelectAnswer() {
        this.quesData.forEach((ansr, idx) => {
            if (ansr.attemptedAnswerFlg == 1) {
                this.selectedAnser = ansr;
            }
            if (this.quesData[0].attemptedAnswerFlg != 1) {
                this.quetsIndexArray[0].isQuestionVisited = 1;
            }
        });
    }
    startTimer(dur) {
        this.examTime = dur;
        setInterval(() => {
            this.updateTimeVal();
        }, 1000);
    }
    updateTimeVal() {
        let hours = Math.floor(this.examTime / 60 / 60);
        let minutes = Math.floor(this.examTime / 60) - (hours * 60);
        let seconds = this.examTime % 60;
        const text = hours + ':' + minutes + ':' + seconds;
        this.time.next(text);
        this.examTime--;
        if (this.examTime == 0) {
            this.examSubmission();
            this.navCtrl.pop();
            this.router.navigate(['/home']);
        }
    }
    nextQue(quesNum) {
        if (quesNum == this.data.numberOfQues) {
            return;
        }
        quesNum = quesNum + 1;
        this.submitAnswer(quesNum, 'I', 'queNav');
    }
    prevQue(ques) {
        if (ques == 1) {
            return;
        }
        ques = ques - 1;
        this.submitAnswer(ques, 'I', 'queNav');
    }
    getAnswer(e) {
        this.examAsnwer.qpAttemtedAnswerTableType = e.detail.value.answerID.toString();
    }
    getAnswerCheck(e) {
        const isChecked = e.detail.checked;
        if (isChecked) {
            this.multianswers.push(e.detail.value.answerID);
        }
        else {
            this.multianswers = this.multianswers.filter(ans => ans != e.detail.value);
        }
        this.examAsnwer.qpAttemtedAnswerTableType = this.multianswers.join();
    }
    submitAnswer(seq, comStatus, navType) {
        this.isLoading = false;
        if (this.examAsnwer.qpAttemtedAnswerTableType == '') {
            this.checkVisit(seq);
            return;
        }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };
        this.examAsnwer.candidateId = this.examData.candId;
        this.examAsnwer.examEnrollmentDetailsID = this.examData.examEnrolDetail;
        this.examAsnwer.duration = this.examTime;
        this.examAsnwer.questionID = this.quesData[0].questionId;
        this.examAsnwer.quesPaperCriteriaID = this.exmHeader.questionPaperCriteriaID;
        this.examAsnwer.completionStatus = comStatus;
        this.api.postData('/api/Exam/exam/insertexamquestionanswer', this.examAsnwer, httpOptions).subscribe((res) => {
            console.log(res);
            if (res.statusCode == 201) {
                this.examAsnwer.qpAttemtedAnswerTableType = '';
                this.getAnswerColor(seq - 1);
                if (navType == 'queNav') {
                    this.checkVisit(seq);
                }
                this.isLoading = true;
            }
        });
    }
    submitAnswerGenericFlg(seq, comStatus) {
        this.isLoading = false;
        // if (this.examAsnwer.qpAttemtedAnswerTableType == '') {
        //   this.checkVisit(seq);
        //   return;
        // }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };
        this.examAsnwer.candidateId = this.examData.candId;
        this.examAsnwer.examEnrollmentDetailsID = this.examData.examEnrolDetail;
        this.examAsnwer.duration = this.examTime;
        this.examAsnwer.questionID = this.quesData[0].questionId;
        this.examAsnwer.quesPaperCriteriaID = this.exmHeader.questionPaperCriteriaID;
        this.examAsnwer.completionStatus = comStatus;
        this.api.postData('/api/Exam/exam/insertexamquestionanswer', this.examAsnwer, httpOptions).subscribe((res) => {
            console.log(res);
            if (res.statusCode == 201) {
                this.examAsnwer.qpAttemtedAnswerTableType = '';
                this.getAnswerColor(seq);
                this.isLoading = true;
                location.reload();
                this.router.navigate(['/home']);
            }
        });
    }
    // switchQue(qNum) {
    //   // this.checkVisit(index, false);
    //   this.switchQues(qNum);
    // }
    checkVisit(queSeq) {
        this.quetsIndexArray.map((val, idx) => {
            if (val.questionSequence === queSeq) {
                this.switchQues(queSeq);
                val.isQuestionVisited = 1;
            }
        });
    }
    getAnswerColor(queSeq) {
        this.quetsIndexArray.map((val, idx) => {
            if (val.questionSequence === queSeq) {
                this.switchQues(queSeq);
                val.isAttempted = 1;
            }
        });
    }
    switchQues(quesNum) {
        this.isLoading = true;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Authorization': 'Bearer ' + this.token
            })
        };
        this.api.getData(`/api/Exam/GetExamQARealtimeOneByOne/${this.examData.examEnrolDetail}/${this.examData.candId}/${this.data.subId}/${quesNum}/${this.examTime}`, httpOptions).subscribe((ques) => {
            console.log(ques);
            this.quesData = ques.questionAnswerData;
            this.getSelectAnswer();
            this.isLoading = false;
        }, (error) => {
            console.log(error);
        });
    }
    submitRes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Please ensure you have attempted all questions before submit',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.examSubmission();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    examSubmission() {
        const id = this.examData.qpResultId;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };
        this.examAsnwer.candidateId = this.examData.candId;
        this.examAsnwer.examEnrollmentDetailsID = this.examData.examEnrolDetail;
        this.examAsnwer.duration = this.examTime;
        this.examAsnwer.questionID = this.quesData[0].questionId;
        this.examAsnwer.quesPaperCriteriaID = this.exmHeader.questionPaperCriteriaID;
        this.examAsnwer.completionStatus = 'C';
        console.log(this.examAsnwer);
        // this.checkVisit(seq - 1, true);
        this.api.postData('/api/Exam/exam/insertexamquestionanswer', this.examAsnwer, httpOptions).subscribe((res) => {
            console.log(res);
            if (res.statusCode == 201) {
                this.examAsnwer.qpAttemtedAnswerTableType = '';
                this.router.navigate(['/exam-result', id]);
            }
        });
    }
};
ExamTakePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService }
];
ExamTakePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-exam-take',
        template: _raw_loader_exam_take_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exam_take_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamTakePage);



/***/ }),

/***/ 3879:
/*!*****************************************************!*\
  !*** ./src/app/pages/exam-take/exam-take.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ques-text {\n  display: block;\n  font-size: 16px;\n  color: black;\n  --ion-font-family: -apple-system, BlinkMacSystemFont, 'Montserrat','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue' !important;\n}\n\nion-img {\n  margin-top: 10px;\n  height: 120px;\n  width: 120px;\n}\n\n.nxt-btn {\n  float: right;\n}\n\n.exam-timer {\n  margin-right: 75px;\n  font-size: 15px;\n  color: red;\n}\n\n.quesNavigate {\n  border-radius: 100px;\n  border: 1px solid black;\n  font-size: 14px;\n  text-align: center;\n}\n\n.quesNavigateActive {\n  border-radius: 100px;\n  border: 1px solid white;\n  font-size: 14px;\n  text-align: center;\n  background-color: green;\n  color: white;\n}\n\n.quesNavigatevisit {\n  border-radius: 100px;\n  border: 1px solid white;\n  font-size: 14px;\n  text-align: center;\n  background-color: grey;\n  color: white;\n}\n\nion-col.quesNavigate {\n  margin: 5px 0px 0px 9px;\n}\n\nion-grid.action-btns {\n  margin-top: 25px;\n}\n\nion-grid.action-btns ion-row ion-col ion-button {\n  max-width: 65px;\n}\n\nion-radio {\n  margin: 22px 7px -3px 0px;\n  display: inline-block;\n}\n\n.anser-img {\n  height: 58px;\n  width: 100%;\n  margin-left: 15px;\n}\n\n.answer-text {\n  display: block;\n  font-size: 16px;\n  color: black;\n  --ion-font-family: -apple-system, BlinkMacSystemFont, 'Montserrat','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue' !important;\n}\n\nion-card {\n  --background: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tdGFrZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWiwwSkFBa0I7QUFDdEI7O0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFFaEI7O0FBQ0E7RUFDSSxZQUFZO0FBRWhCOztBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0FBR2Q7O0FBREE7RUFDSSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7QUFJdkI7O0FBREE7RUFDSSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFJakI7O0FBREE7RUFDSSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFJakI7O0FBQUE7RUFDSSx1QkFBdUI7QUFHM0I7O0FBQUE7RUFDSSxnQkFBZ0I7QUFHcEI7O0FBSkE7RUFLWSxlQUFlO0FBRzNCOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFDQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBRXJCOztBQUFBO0VBS0ksY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osMEpBQWtCO0FBRHRCOztBQUlBO0VBQ0ksbUJBQWE7QUFEakIiLCJmaWxlIjoiZXhhbS10YWtlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzLXRleHR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtLWlvbi1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnTW9udHNlcnJhdCcsJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyAhaW1wb3J0YW50O1xufVxuaW9uLWltZyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxuLm54dC1idG4ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5leGFtLXRpbWVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiByZWQ7XG59XG4ucXVlc05hdmlnYXRlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5xdWVzTmF2aWdhdGVBY3RpdmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuLnF1ZXNOYXZpZ2F0ZXZpc2l0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG5pb24tY29sLnF1ZXNOYXZpZ2F0ZSB7XG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCA5cHg7XG59XG5cbmlvbi1ncmlkLmFjdGlvbi1idG5zIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICBpb24tcm93e1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gIH0gIFxufVxuaW9uLXJhZGlvIHtcbiAgICBtYXJnaW46IDIycHggN3B4IC0zcHggMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hbnNlci1pbWcge1xuICAgIGhlaWdodDogNThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5hbnN3ZXItdGV4dHtcbiAgICAvLyBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8vIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdNb250c2VycmF0JywnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ 3086:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exam-take/exam-take.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/exam-info\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title *ngIf=\"quesData.length > 0\">\n      {{quesData[0].subjectName}}\n    </ion-title>\n\n    <ion-title slot=\"end\" *ngIf=\"exmHeader\"> <span class=\"exam-timer\" *ngIf=\"examTime\">{{time | async}}</span>\n      <span>{{quesData[0].questionSequence}} / {{this.data.numberOfQues}}</span>\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding-start\" *ngIf=\"examSubjects\">\n\n    <ion-spinner style=\"margin-left: 50%;\" *ngIf=\"isLoading\"></ion-spinner>\n    <ion-card class=\"ion-padding\" *ngIf=\"quesData.length > 0 && !isLoading\">\n      <ion-label class=\"ques-text\" [appMathjax]=\"quesData[0].questionText\">\n      Q. {{quesData[0].questionText}}\n      </ion-label>\n      <ion-img *ngIf=\"quesData[0].questionImage\" [src]=\"quesData[0].questionImage\" style=\"height: 80%; width: 80%;\"></ion-img>\n      <ion-radio-group *ngIf=\"quesData[0].correctAnswerCount == 1\" [value]=\"selectedAnser\"\n        (ionChange)=\"getAnswer($event)\">\n        <ion-item lines=\"none\" *ngFor=\"let que of quesData\">\n\n\n\n          <div *ngIf=\"que.displayBothQandIFlg\">\n\n\n            <ion-radio [value]=\"que\"></ion-radio>\n\n            <ion-text style=\"display: inline-block;\">{{que.seqOfAnswerText}}:</ion-text>\n            <ion-label *ngIf=\"que.answerText\" class=\"answer-text\" [appMathjax]=\"que.answerText\">\n              {{que.answerText}}\n            </ion-label>\n\n            <img *ngIf=\"que.answerImage\"  [src]=\"que.answerImage\" />\n\n          </div>\n          <div *ngIf=\"!que.displayBothQandIFlg\">\n\n\n            <ion-radio [value]=\"que\"></ion-radio>\n            <ion-text style=\"display: inline-block;font-size: 14px;\">{{que.seqOfAnswerText}}:</ion-text>\n\n            <ion-label *ngIf=\"que.answerText\" class=\"answer-text\" [appMathjax]=\"que.answerText\" text-wrap>\n              {{que.answerText}}\n            </ion-label>\n\n            <img *ngIf=\"que.answerImage\" class=\"anser-img\" [src]=\"que.answerImage\" />\n\n          </div>\n\n\n\n\n        </ion-item>\n\n      </ion-radio-group>\n      <ion-list *ngIf=\"quesData[0].correctAnswerCount > 1\">\n        <ion-item lines=\"none\" *ngFor=\"let que of quesData\">\n          <div *ngIf=\"que.displayBothQandIFlg\">\n\n\n            <ion-checkbox [value]=\"que\" (ionChange)=\"getAnswerCheck($event)\">\n\n            </ion-checkbox>\n            <ion-text style=\"display: inline-block;\">{{que.seqOfAnswerText}}:</ion-text>\n            <ion-label *ngIf=\"que.answerText\" class=\"answer-text\" [appMathjax]=\"que.answerText\" text-wrap>\n              {{que.answerText}}\n            </ion-label>\n\n            <img *ngIf=\"que.questionImage\" class=\"anser-img\" [src]=\"que.questionImage\" />\n          </div>\n          <div *ngIf=\"!que.displayBothQandIFlg\">\n\n\n            <ion-checkbox [value]=\"que\" (ionChange)=\"getAnswerCheck($event)\">\n\n            </ion-checkbox>\n            <ion-text style=\"display: inline-block;\">{{que.seqOfAnswerText}}:</ion-text>\n            <ion-label *ngIf=\"que.answerText\" class=\"answer-text\" [appMathjax]=\"que.answerText\">\n              {{que.answerText}}\n            </ion-label>\n\n            <img *ngIf=\"que.questionImage\" class=\"anser-img\" [src]=\"que.questionImage\" />\n          </div>\n        </ion-item>\n      </ion-list>\n      <ion-grid class=\"ion-no-padding action-btns\">\n        <ion-row class=\"ion-no-padding\">\n          <ion-col class=\"ion-no-padding\" size=\"3\">\n            <ion-button (click)=\"prevQue(quesData[0].questionSequence)\">\n              <ion-icon name=\"caret-back-outline\"></ion-icon>\n              Prev\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=\"3\">\n            <ion-button (click)=\"nextQue(quesData[0].questionSequence)\">Next\n\n              <ion-icon name=\"caret-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <!-- <ion-col class=\"ion-no-padding\" size=\"3\">\n            <ion-button [disabled]=\"this.examAsnwer.qpAttemtedAnswerTableType == null\"\n              (click)=\"submitAnswer(quesData[0].questionSequence+1, 'I', 'numSeq')\">Save</ion-button>\n\n          </ion-col> -->\n          <ion-col *ngIf=\"!this.exmHeader.genericQPFlag\" class=\"ion-no-padding\" size=\"3\">\n            <ion-button [disabled]=\"this.examAsnwer.qpAttemtedAnswerTableType == null\"\n              (click)=\"submitAnswerGenericFlg(quesData[0].questionSequence, 'I')\">Exit</ion-button>\n\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=\"3\">\n            <ion-button (click)=\"submitRes()\">\n              Submit\n            </ion-button>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n      <!-- <div class=\"ion-text-center\">\n        <ion-button routerLink=\"/home\" routerDirection=\"back\">Save\n          for later</ion-button>\n      </div> -->\n    </ion-card>\n\n    <ion-grid>\n      <ion-row class=\"ques-panel\">\n        <!-- <ion-col class=\"quesNavigate\" size=\"2\" *ngFor=\"let queNum of quetsIndexArray; let i = index\"\n          (click)=\"switchQue(queNum.ques, i)\"\n          [ngClass]=\"[queNum.backColor == 'red' ? 'quesNavigatevisit' : '',  queNum.backColor == 'green' ? 'quesNavigateActive' : '', queNum.backColor == 'white' ? 'quesNavigate' : '', selectedAnser.]\"\n          > -->\n        <ion-col class=\"quesNavigate\" size=\"2\" *ngFor=\"let queNum of quetsIndexArray;\"\n          (click)=\"checkVisit(queNum.questionSequence)\"\n          [ngClass]=\"[queNum.isAttempted == '1' ? 'quesNavigateActive' : '', queNum.isQuestionVisited == '1' && queNum.isAttempted == '0' ? 'quesNavigatevisit' : '']\">\n          {{queNum.questionSequence}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exam-take_exam-take_module_ts.js.map