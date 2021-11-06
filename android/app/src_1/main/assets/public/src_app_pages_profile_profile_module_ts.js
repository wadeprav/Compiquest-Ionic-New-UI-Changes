(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 9291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);










let ProfilePage = class ProfilePage {
    constructor(fb, navctrl, loadingController, api, prefs, router) {
        this.fb = fb;
        this.navctrl = navctrl;
        this.loadingController = loadingController;
        this.api = api;
        this.prefs = prefs;
        this.router = router;
        this.submitAttempt = false;
        this.stateArray = [];
        this.userProfile = {
            candidateID: 0,
            fName: '',
            mName: '',
            lName: '',
            address: '',
            city: '',
            adharCardNo: '',
            dateOfBirth: '',
            mobile: '',
            gender: '',
            photo: '',
            emailID: '',
            collegeName: '',
            class: '',
            stateId: '',
            instituteId: '',
            active: true,
            createdDate: '',
            modifiedDate: '',
            createdBy: '',
            updatedBy: '',
            repeaterFlag: true,
            parentFName: '',
            parentMName: '',
            parentLName: '',
            parentEmailID: '',
            parentMobile: '',
            vendorId: 0
        };
        this.date = new Date("2011-07-14 11:23:00".replace(/-/g, "/"));
    }
    ngOnInit() {
        this.prefs.getUser().subscribe(user => {
            this.userData = JSON.parse(user);
            console.log(this.userData);
        });
        this.regForm = this.fb.group({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
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
            adharCardNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
            emailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            parentFName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            parentMName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            parentLName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-\']+'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            parentMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            parentEmailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
            instituteId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
            stateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
            collegeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
            class: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: []
            }),
        });
        this.prefs.getUserToken().then(resp => {
            this.getUserAllData(resp.value, this.userData.candidateID);
        });
    }
    getUserAllData(tokenData, userID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'Authorization': 'Bearer ' + tokenData
            })
        };
        const httpOptionsst = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.api.getData(`/api/Candidate/Candidate/GetCandidateProfile/${userID}`, httpOptions).subscribe((userPro) => {
            this.userRes = userPro;
            this.api.getData(`/api/Candidate/GetState/${userPro.stateId}`, httpOptionsst).subscribe((state) => {
                this.stateArray = state;
                console.log(state);
            });
            this.regForm.patchValue({
                address: userPro.address,
                firstname: userPro.fName,
                adharCardNo: userPro.adharCardNo,
                city: userPro.city,
                class: userPro.class,
                collegeName: userPro.collegeName,
                createdDate: userPro.createdDate,
                dateOfBirth: userPro.dateOfBirth,
                emailID: userPro.emailID,
                lastname: userPro.lName,
                middlename: userPro.mName,
                mobile: userPro.mobile,
                fullname: userPro.fName + ' ' + userPro.lName,
                modifiedDate: userPro.modifiedDate,
                parentEmailID: userPro.parentEmailID,
                parentFName: userPro.parentFName,
                parentLName: userPro.parentLName,
                parentMName: userPro.parentMName,
                parentMobile: userPro.parentMobile,
                photo: userPro.photo,
            });
            if (userPro.instituteId == 0) {
                this.regForm.patchValue({
                    instituteId: '',
                });
            }
            this.genderVal = userPro.gender;
            console.log(userPro);
            this.repeatr = userPro.repeaterFlag;
        });
    }
    updateUserProfile() {
        this.presentLoading();
        const httpOptionsst = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.userProfile.fName = this.regForm.value.firstname;
        this.userProfile.lName = this.regForm.value.lastname;
        this.userProfile.candidateID = this.userData.candidateID;
        this.userProfile.mName = this.regForm.value.middlename;
        this.userProfile.address = this.regForm.value.address;
        this.userProfile.city = this.regForm.value.city;
        this.userProfile.adharCardNo = this.regForm.value.adharCardNo;
        this.userProfile.dateOfBirth = this.regForm.value.dateOfBirth;
        this.userProfile.mobile = this.regForm.value.mobile;
        this.userProfile.photo = this.regForm.value.photo;
        this.userProfile.emailID = this.regForm.value.emailID;
        this.userProfile.collegeName = this.regForm.value.collegeName;
        this.userProfile.stateId = this.userRes.stateId;
        this.userProfile.instituteId = this.regForm.value.instituteId;
        this.userProfile.active = this.userRes.active;
        this.userProfile.createdDate = this.userRes.createdDate;
        this.userProfile.modifiedDate = this.date.toString();
        this.userProfile.createdBy = this.regForm.value.fullname;
        this.userProfile.updatedBy = this.regForm.value.fullname;
        this.userProfile.parentFName = this.regForm.value.parentFName;
        this.userProfile.parentMName = this.regForm.value.parentMName;
        this.userProfile.parentLName = this.regForm.value.parentLName;
        this.userProfile.parentEmailID = this.regForm.value.parentEmailID;
        this.userProfile.parentMobile = this.regForm.value.parentMobile;
        this.userProfile.vendorId = this.userRes.vendorId;
        console.log(this.userProfile);
        this.api.postData('/api/Candidate/Candidate/UpdateCandidateProfile', this.userProfile, httpOptionsst).subscribe((userProfRes) => {
            console.log(userProfRes);
            this.loadingController.dismiss();
        });
    }
    getGender(e) {
        this.userProfile.gender = e.detail.value;
    }
    getState(e) {
        this.regForm.patchValue({
            stateId: e.detail.value
        });
    }
    getRepetr(e) {
        this.userProfile.repeaterFlag = e.detail.value;
    }
    getClass(e) {
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Updating Profile...',
                duration: 2000
            });
            yield loading.present();
            console.log('Loading dismissed!');
        });
    }
    getSelectedState(id) {
        this.stateArray.forEach((el, ind) => {
            if (el.stateID == id) {
                this.stateInd = ind;
            }
        });
        return this.stateInd;
    }
    Cancel() {
        //location.reload();
        this.router.navigate(['/home']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-radio-group ion-label {\n  margin-left: 6px;\n}\n\n.base {\n  box-shadow: 0 4px 8px 0 #ece9e9d1, 0 6px 20px 0 #b1a5a570;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCO0FBQXhCOztBQUlBO0VBRUkseURBQXlEO0FBRjdEIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJhZGlvLWdyb3VwIHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIH1cbn1cblxuLmJhc2V7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0Mjc4NGQsICMyNzM2MWQpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICNlY2U5ZTlkMSwgMCA2cHggMjBweCAwICNiMWE1YTU3MDtcbn0iXX0= */");

/***/ }),

/***/ 9291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" >\n  <form [formGroup]=\"regForm\" (ngSubmit)=\"updateUserProfile()\" class=\"ion-padding base\">\n    <ion-item >\n      <ion-label position=\"floating\">First Name:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.firstname.valid  && (regForm.controls.firstname.dirty || submitAttempt)\"\n        formControlName=\"firstname\"></ion-input>\n      <p style=\"text-align: center; color: #ea6153\"\n        *ngIf=\"!regForm.controls.firstname.valid  && (regForm.controls.firstname.dirty || submitAttempt)\">\n        Please Enter Valid First Name.\n      </p>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Middle Name:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.middlename.valid  && (regForm.controls.middlename.dirty || submitAttempt)\"\n        formControlName=\"middlename\"></ion-input>\n      <p style=\"text-align: center; color: #ea6153\"\n        *ngIf=\"!regForm.controls.middlename.valid  && (regForm.controls.middlename.dirty || submitAttempt)\">\n        Please Enter Valid Middle Name.\n      </p>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Last Name:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.lastname.valid  && (regForm.controls.lastname.dirty || submitAttempt)\"\n        type=\"text\" formControlName=\"lastname\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Full Name:</ion-label>\n      <ion-input type=\"text\" formControlName=\"fullname\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Adhar Card No:</ion-label>\n      <ion-input type=\"text\" formControlName=\"adharCardNo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Mobile:</ion-label>\n      <ion-input type=\"tel\"\n        [class.error-input]=\"!regForm.controls.mobile.valid  && (regForm.controls.mobile.dirty || submitAttempt)\"\n        formControlName=\"mobile\" readonly></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email Address:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.emailID.valid  && (regForm.controls.emailID.dirty || submitAttempt)\"\n        type=\"text\" formControlName=\"emailID\" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Address:</ion-label>\n      <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Institute Name:</ion-label>\n      <ion-input type=\"text\" formControlName=\"instituteId\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">City:</ion-label>\n      <ion-input type=\"text\" formControlName=\"city\"></ion-input>\n    </ion-item>\n    <div class=\"ion-margin-top\" *ngIf=\"userRes\">\n      <!-- <ion-label>Select State:</ion-label> -->\n      <div *ngIf=\"getSelectedState(userRes.stateId) > -1\">\n        <ion-select [value]=\"stateArray[stateInd]\" (ionChange)=\"getState($event)\">\n          <ion-select-option *ngFor=\"let state of stateArray\" [value]=\"state\">{{state.stateDescription}}\n          </ion-select-option>\n        </ion-select>\n      </div>\n\n    </div>\n    <div class=\"ion-margin-top\">\n      <!-- <ion-label>Gender:</ion-label> -->\n      <ion-radio-group [value]=\"genderVal\" (ionChange)=\"getGender($event)\">\n\n        <ion-item>\n          <ion-radio value=\"M\"></ion-radio>\n          <ion-label>Male</ion-label>\n\n          <ion-radio value=\"F\"></ion-radio>\n          <ion-label>Female</ion-label>\n\n        </ion-item>\n      </ion-radio-group>\n    </div>\n    <!-- <ion-item class=\"ion-margin-top\">\n      <ion-label position=\"floating\">Photo:</ion-label>\n      <ion-input type=\"text\" formControlName=\"photo\"></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-label position=\"floating\">College:</ion-label>\n      <ion-input type=\"text\" formControlName=\"collegeName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date of Birth:</ion-label>\n      <ion-datetime formControlName=\"dateOfBirth\"></ion-datetime>\n    </ion-item>\n\n    <div class=\"ion-margin-top\">\n      <ion-label>Repeater:</ion-label>\n      <ion-radio-group [value]=\"repeatr\" (ionChange)=\"getRepetr($event)\">\n\n        <ion-item>\n          <ion-radio value=\"true\"></ion-radio>\n          <ion-label>Yes</ion-label>\n\n          <ion-radio value=\"false\"></ion-radio>\n          <ion-label>No</ion-label>\n\n        </ion-item>\n      </ion-radio-group>\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\">Parent Email:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.parentEmailID.valid  && (regForm.controls.parentEmailID.dirty || submitAttempt)\"\n        type=\"text\" formControlName=\"parentEmailID\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Parent First Name:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.parentFName.valid  && (regForm.controls.parentFName.dirty || submitAttempt)\"\n        type=\"text\" formControlName=\"parentFName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Parent Last Name:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.parentLName.valid  && (regForm.controls.parentLName.dirty || submitAttempt)\"\n        type=\"text\" formControlName=\"parentLName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Parent Middle Name:</ion-label>\n      <ion-input\n        [class.error-input]=\"!regForm.controls.parentMName.valid  && (regForm.controls.parentMName.dirty || submitAttempt)\"\n        type=\"text\" formControlName=\"parentMName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Parent Mobile:</ion-label>\n      <ion-input type=\"tel\"\n        [class.error-input]=\"!regForm.controls.parentMobile.valid  && (regForm.controls.parentMobile.dirty || submitAttempt)\"\n        type=\"text\" formControlName=\"parentMobile\"></ion-input>\n    </ion-item>\n    <!-- <div class=\"ion-margin-top\">\n      <ion-label>Class:</ion-label>\n      <ion-input \n      type=\"text\" formControlName=\"class\"></ion-input> -->\n    <!-- <ion-select placeholder=\"select class\" formControlName=\"class\" (ionChange)=\"getClass($event)\">\n        <ion-select-option>8th</ion-select-option>\n        <ion-select-option>9th</ion-select-option>\n      </ion-select> -->\n    <!-- </div> -->\n    <div class=\"ion-margin-top ion-text-center\">\n      <ion-button type=\"submit\">Save</ion-button>\n      <ion-button (click)=\"Cancel()\">Cancel</ion-button>\n\n    </div>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map