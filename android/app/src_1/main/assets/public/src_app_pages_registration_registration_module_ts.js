(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_registration_registration_module_ts"],{

/***/ 7863:
/*!*******************************************************************!*\
  !*** ./src/app/pages/registration/registration-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageRoutingModule": () => (/* binding */ RegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.page */ 8010);




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ 15:
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageModule": () => (/* binding */ RegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-routing.module */ 7863);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page */ 8010);







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
    })
], RegistrationPageModule);



/***/ }),

/***/ 8010:
/*!*********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.page.html */ 1279);
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page.scss */ 5563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);









let RegistrationPage = class RegistrationPage {
    constructor(fb, navCtrl, auth, alertController, prefs) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertController = alertController;
        this.prefs = prefs;
        this.isLoading = false;
        this.submitAttempt = false;
    }
    ngOnInit() {
        this.prefs.getUserToken().then(resp => {
            this.token = resp.value;
        });
        this.regForm = this.fb.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            middlename: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            parentfirstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            parentmiddlename: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            parentlastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            parentmobilenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            parentEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
        });
    }
    submitCandidate() {
        this.isLoading = true;
        this.submitAttempt = true;
        console.log(this.regForm);
        const candidate = {
            fName: this.regForm.value.firstname,
            mName: this.regForm.value.middlename,
            lName: this.regForm.value.lastname,
            // dateOfBirth: moment(this.regForm.value.dateOfBirth).format('YYYY-MM-DD'),
            dateOfBirth: this.regForm.value.dateOfBirth,
            mobile: this.regForm.value.mobile,
            emailId: this.regForm.value.email,
            parentFName: this.regForm.value.parentfirstname,
            parentMName: this.regForm.value.parentmiddlename,
            parentLName: this.regForm.value.parentlastname,
            parentMobile: this.regForm.value.parentmobilenumber,
            parentEmailId: this.regForm.value.parentEmail
        };
        console.log(candidate);
        this.auth.registerCandidate(candidate).subscribe(resp => {
            // this.regForm.reset();
            this.isLoading = false;
            this.showConfirm(resp);
            console.log(resp);
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    showConfirm(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Message',
                message: JSON.stringify(msg.value),
                buttons: [
                    {
                        text: 'Try Again',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            if (msg.value === 'Candidate Registered Successfully') {
                                this.navCtrl.navigateRoot('/home');
                            }
                            else {
                                this.navCtrl.pop();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancelBtn() {
        this.navCtrl.pop();
    }
    checkEmail(email) {
        const em = email.detail.value;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                // 'Authorization': 'Bearer ' + this.token
                'Content-Type': 'application/json'
            })
        };
        this.auth.getData(`/api/Candidate/Candidate/CheckCandidateEmailAlreadyExists/${em}`, httpOptions).subscribe(res => {
            this.isEmailAvail = res;
        });
    }
    checkMobile(phone) {
        const em = phone.detail.value;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
                // 'Authorization': 'Bearer ' + this.token
                'Content-Type': 'application/json'
            })
        };
        this.auth.getData(`/api/Candidate/Candidate/CheckCandidateMobileAlreadyExists/${em.toString()}`, httpOptions).subscribe(res => {
            console.log(res);
            this.isEmailAvail = res;
        });
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService }
];
RegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationPage);



/***/ }),

/***/ 5563:
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input {\n  margin-left: 5px;\n  background: #ccd8ee;\n  border-radius: 30px;\n  font-size: 16px;\n  padding: 0px 10px !important;\n  box-shadow: 2px 3px #c6c6c8;\n}\n\n.grid_base {\n  box-shadow: 0 4px 8px 0 #c6c6c8, 0 6px 20px 0 #00000070;\n  border-radius: 30px;\n}\n\np {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.base {\n  background: #f7f7f7;\n  border-radius: 30px;\n  box-shadow: 2px 3px #c6c6c8;\n}\n\nion-label {\n  margin-left: 10px;\n  color: #696969 !important;\n}\n\nion-icon {\n  font-size: 40px;\n  color: #696969;\n  margin-left: 12px;\n}\n\nion-button {\n  width: 130px;\n  margin: 14px;\n}\n\n.error-input {\n  border: 1px solid #ea6153;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtFQUNJLHVEQUF1RDtFQUN2RCxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFFL0I7O0FBQUE7RUFDSSxpQkFBaUI7RUFDakIseUJBQXlCO0FBRzdCOztBQURBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFJckI7O0FBRkE7RUFDSSxZQUFZO0VBQ1osWUFBWTtBQUtoQjs7QUFIQTtFQUNJLHlCQUF5QjtBQU03QiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNjY2Q4ZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAycHggM3B4ICNjNmM2Yzg7XG5cbn1cbi5ncmlkX2Jhc2V7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgI2M2YzZjOCwgMCA2cHggMjBweCAwICMwMDAwMDA3MDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIFxuICAgIH1cbnAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmJhc2V7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAzcHggI2M2YzZjODtcbn1cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICM2OTY5NjkgIWltcG9ydGFudDtcbn1cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6ICM2OTY5Njk7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgbWFyZ2luOiAxNHB4O1xufVxuLmVycm9yLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWE2MTUzO1xuICB9Il19 */");

/***/ }),

/***/ 1279:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/login\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Candidate Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"regForm\" (ngSubmit)=\"submitCandidate()\" class=\"ion-padding\">\n    <ion-grid class=\"base\">\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>First Name</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input type=\"text\" placeholder=\"First Name\"\n            [class.error-input]=\"!regForm.controls.firstname.valid  && (regForm.controls.firstname.dirty || submitAttempt)\"\n            formControlName=\"firstname\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.firstname.valid  && (regForm.controls.firstname.dirty || submitAttempt)\">\n            Please Enter Valid First Name.\n          </p>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Middle Name</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input type=\"text\"\n            [class.error-input]=\"!regForm.controls.middlename.valid  && (regForm.controls.middlename.dirty || submitAttempt)\"\n            placeholder=\"Middle Name\" formControlName=\"middlename\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.middlename.valid  && (regForm.controls.middlename.dirty || submitAttempt)\">\n            Please Enter Valid Middle Name.\n          </p>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Last Name</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input\n            [class.error-input]=\"!regForm.controls.lastname.valid  && (regForm.controls.lastname.dirty || submitAttempt)\"\n            type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.lastname.valid  && (regForm.controls.lastname.dirty || submitAttempt)\">\n            Please Enter Valid Last Name.\n          </p>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Email</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input\n            [class.error-input]=\"!regForm.controls.email.valid  && (regForm.controls.email.dirty || submitAttempt)\"\n            type=\"email\" placeholder=\"Email\" formControlName=\"email\" (ionChange)=\"checkEmail($event)\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.email.valid  && (regForm.controls.email.dirty || submitAttempt)\">\n            Please Enter Valid Email.\n          </p>\n          <p style=\"text-align: center; color: #ea6153\" *ngIf=\"isEmailAvail != undefined && isEmailAvail != 'AVAILABLE'\">\n            Email already exists!\n          </p>\n          <!-- <p style=\"text-align: center; color: #ea6153\" *ngIf=\"isEmailAvail == 'AVAILABLE'\">\n            Email is Available.\n          </p> -->\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Mobile</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input type=\"tel\" placeholder=\"Mobile\" formControlName=\"mobile\" maxlength=\"10\" minlength=\"10\"\n            (ionChange)=\"checkMobile($event)\">\n\n          </ion-input>\n          <!-- <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.mobile.valid  && (regForm.controls.mobile.dirty || submitAttempt)\">\n            Please Enter Valid Mobile.\n          </p> -->\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Date of Birth</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-icon name=\"calendar-number-outline\"> </ion-icon>\n          <ion-datetime pickerFormat=\"YYYY-MM-DD\" min=\"1900-01-01\" displayFormat=\"YYYY-MM-DD\"\n            placeholder=\"Date of Birth\" value=\"1900-01-01\" formControlName=\"dateOfBirth\"> </ion-datetime>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Parent First Name</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input\n            [class.error-input]=\"!regForm.controls.parentfirstname.valid  && (regForm.controls.parentfirstname.dirty || submitAttempt)\"\n            type=\"text\" placeholder=\"Parent First Name\" formControlName=\"parentfirstname\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.parentfirstname.valid && (regForm.controls.parentfirstname.dirty || submitAttempt)\">\n            Please Enter Valid Parent First Name.\n          </p>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Parent Middle Name</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input\n            [class.error-input]=\"!regForm.controls.parentmiddlename.valid  && (regForm.controls.parentmiddlename.dirty || submitAttempt)\"\n            type=\"text\" placeholder=\"Parent Middle Name\" formControlName=\"parentmiddlename\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.parentmiddlename.valid && (regForm.controls.parentmiddlename.dirty || submitAttempt)\">\n            Please Enter Valid Parent Middle Name.\n          </p>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Parent Last Name</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input\n            [class.error-input]=\"!regForm.controls.parentlastname.valid  && (regForm.controls.parentlastname.dirty || submitAttempt)\"\n            type=\"text\" placeholder=\"Parent Last Name\" formControlName=\"parentlastname\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.parentlastname.valid && (regForm.controls.parentlastname.dirty || submitAttempt)\">\n            Please Enter Valid Parent Last Name.\n          </p>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Parent Mobile Number</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input type=\"tel\" placeholder=\"Parent Mobile Number\" formControlName=\"parentmobilenumber\" maxlength=\"10\">\n\n          </ion-input>\n        </ion-col>\n\n\n\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n          <p>Parent Email</p>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-input\n            [class.error-input]=\"!regForm.controls.parentEmail.valid  && (regForm.controls.parentEmail.dirty || submitAttempt)\"\n            type=\"text\" placeholder=\"Parent Email\" formControlName=\"parentEmail\">\n\n          </ion-input>\n          <p style=\"text-align: center; color: #ea6153\"\n            *ngIf=\"!regForm.controls.parentEmail.valid && (regForm.controls.parentEmail.dirty || submitAttempt)\">\n            Please Enter Valid Parent Email.\n          </p>\n        </ion-col>\n\n\n\n      </ion-row>\n    </ion-grid>\n    <br>\n    <ion-item lines=\"none\">\n      <ion-checkbox></ion-checkbox>\n      <ion-label>I accept detailed Terms and Privacy Policy</ion-label>\n    </ion-item>\n\n    <div class=\"ion-text-center\">\n      <ion-button [disabled]=\"!regForm.valid\" type=\"submit\">\n        <ion-text *ngIf=\"!isLoading\">Register</ion-text>\n        <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n      </ion-button>\n      <ion-button (click)=\"cancelBtn()\">\n        Cancel\n      </ion-button>\n    </div>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registration_registration_module_ts.js.map