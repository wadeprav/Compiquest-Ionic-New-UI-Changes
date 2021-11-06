(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3322:
/*!*********************************************************************!*\
  !*** ./src/app/components/subscriptions/subscriptions.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionsComponent": () => (/* binding */ SubscriptionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_subscriptions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./subscriptions.component.html */ 1975);
/* harmony import */ var _subscriptions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptions.component.scss */ 3498);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);







let SubscriptionsComponent = class SubscriptionsComponent {
    constructor(mdl, api) {
        this.mdl = mdl;
        this.api = api;
        this.subsResp = {
            annualFee: 0,
            totalDiscountAmt: 0,
            cgst: 0,
            sgst: 0,
        };
        this.totalSubs = [];
        this.isLoading = false;
        this.allSubscriptions = [];
    }
    ngOnInit() {
        this.getAllSubscription();
    }
    closeModal() {
        this.mdl.dismiss();
    }
    getAllSubscription() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        this.api.getData('/api/Subscription/GetExamSubscriptionByID/0', httpOptions).subscribe((res) => {
            this.allSubscriptions = res.subscriptionDetails;
            console.log(res);
        });
    }
    getSubscription(e) {
        this.isLoading = true;
        if (e.detail.checked) {
            const subs = e.detail.value;
            this.totalSubs.push(subs);
            this.subsResp.annualFee = this.subsResp.annualFee + subs.annualFee;
            this.subsResp.totalDiscountAmt = this.subsResp.totalDiscountAmt + subs.totalDiscountAmt;
            this.subsResp.cgst = this.subsResp.cgst + subs.cgst;
            this.subsResp.sgst = this.subsResp.sgst + subs.sgst;
            this.isLoading = false;
        }
        else {
            this.totalSubs.find(sub => {
                if (sub.examSubscriptionId == e.detail.value.examSubscriptionId) {
                    this.subsResp.annualFee = this.subsResp.annualFee - sub.annualFee;
                    this.subsResp.totalDiscountAmt = this.subsResp.totalDiscountAmt - sub.totalDiscountAmt;
                    this.subsResp.cgst = this.subsResp.cgst - sub.cgst;
                    this.subsResp.sgst = this.subsResp.sgst - sub.sgst;
                }
            });
            this.isLoading = false;
        }
    }
    round(value) {
        return Math.round(value);
    }
};
SubscriptionsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
SubscriptionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-subscriptions',
        template: _raw_loader_subscriptions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_subscriptions_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubscriptionsComponent);



/***/ }),

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var src_app_components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/subscriptions/subscriptions.component */ 3322);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, src_app_components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_2__.SubscriptionsComponent],
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 547);
/* harmony import */ var src_app_components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/subscriptions/subscriptions.component */ 3322);










let LoginPage = class LoginPage {
    constructor(fb, toastController, modalCtrl, menuCtrl, alertControler, auth, router, navCtrl, prefs) {
        this.fb = fb;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.alertControler = alertControler;
        this.auth = auth;
        this.router = router;
        this.navCtrl = navCtrl;
        this.prefs = prefs;
        this.isLoading = false;
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    login() {
        this.isLoading = true;
        const user = {
            username: this.userForm.value.username,
            password: this.userForm.value.password
        };
        this.auth.login(user).subscribe((res) => {
            console.log(res);
            if (res.result !== false) {
                if (res.roles[0].subscriptionStatus === 0) {
                    // this.presentToast();
                    // this.openSubscriptions();
                    this.presentAlert('Subscriptions Not Active, Please contact compiquest Admin.');
                }
                else {
                    this.prefs.storeUser(res.roles[0]);
                    this.userForm.reset();
                    this.prefs.storeUserToken(res.token);
                    this.isLoading = false;
                    this.router.navigate(['/home']);
                }
            }
            else {
                this.isLoading = false;
                this.presentAlert(res.message);
            }
        }, (error) => {
            this.isLoading = false;
            // console.log(error);
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'subscription not valid',
                duration: 2000
            });
            toast.present();
        });
    }
    gotoRegistration() {
        this.navCtrl.navigateForward('/registration');
    }
    openSubscriptions() {
        this.modalCtrl.create({
            component: src_app_components_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_4__.SubscriptionsComponent
        }).then(modal => modal.present());
    }
    presentAlert(msg) {
        this.alertControler.create({
            header: 'Error',
            message: msg,
            buttons: ['OK']
        }).then(aler => aler.present());
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferenceService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 3498:
/*!***********************************************************************!*\
  !*** ./src/app/components/subscriptions/subscriptions.component.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input {\n  border-radius: 5px;\n  font-size: 16px;\n  padding: 0px 10px !important;\n}\n\n.margin {\n  margin-top: -15px;\n}\n\n.base {\n  border-radius: 30px;\n  box-shadow: 2px 2px gray;\n}\n\n.grid_base {\n  box-shadow: 0 4px 8px 0 #ece9e9d1, 0 6px 20px 0 #b1a5a570;\n}\n\np {\n  font-size: 16px;\n  font-weight: 500;\n}\n\nion-item ion-label {\n  margin-left: 5px;\n}\n\nimg {\n  height: 70px;\n}\n\nion-button {\n  --border-color: #3FCA89;\n}\n\n.login-background {\n  background: url(\"https://compiquest.com/images/slider1.jpg\");\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNEJBQTRCO0FBRGhDOztBQUdBO0VBQ0ksaUJBQWlCO0FBQXJCOztBQUVBO0VBRUksbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUE1Qjs7QUFFQTtFQUNJLHlEQUF5RDtBQUM3RDs7QUFFQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7RUFDSSxnQkFBZ0I7QUFFcEI7O0FBQUE7RUFDSSxZQUFZO0FBR2hCOztBQURBO0VBQ0ksdUJBQWU7QUFJbkI7O0FBRkE7RUFDQSw0REFBNEQ7QUFLNUQiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICAvLyBtYXJnaW4tbGVmdDogMTNweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRjBGMEYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYXJnaW57XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4uYmFzZXtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzQyNzg0ZCwgIzI3MzYxZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IGdyYXk7XG59XG4uZ3JpZF9iYXNle1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICNlY2U5ZTlkMSwgMCA2cHggMjBweCAwICNiMWE1YTU3MDtcbiAgICBcbiAgICB9XG5wIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmltZyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItY29sb3I6ICMzRkNBODk7XG59XG4ubG9naW4tYmFja2dyb3VuZCB7XG5iYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vY29tcGlxdWVzdC5jb20vaW1hZ2VzL3NsaWRlcjEuanBnJylcbn0iXX0= */");

/***/ }),

/***/ 1975:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subscriptions/subscriptions.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\" defaultHref=\"/login\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Subscription</ion-title>\n  </ion-toolbar>\n\n\n\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-label>Select Exam</ion-label>\n  <div *ngIf=\"allSubscriptions.length > 0\">\n    <ion-item *ngFor=\"let subs of allSubscriptions\">\n      <ion-label>{{subs.examName}}</ion-label>\n      <ion-checkbox (ionChange)=\"getSubscription($event)\" [value]=\"subs\">\n      </ion-checkbox>\n    </ion-item>\n\n    <div class=\"ion-text-center\" *ngIf=\"isLoading\">\n      <ion-spinner>\n\n      </ion-spinner>\n    </div>\n\n    <ion-list *ngIf=\"subsResp && !isLoading\">\n      <ion-item>\n        <ion-label>Total Subscription Cost</ion-label>\n        <ion-text> {{subsResp.annualFee}} </ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>Total Discount</ion-label>\n        <ion-text>{{subsResp.totalDiscountAmt}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>Final Subscription Cost</ion-label>\n        <ion-text>{{subsResp.annualFee - subsResp.totalDiscountAmt}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>CGST {{allSubscriptions[0].cgst}}%</ion-label>\n        <ion-text>{{(subsResp.cgst/100) * (subsResp.annualFee - subsResp.totalDiscountAmt)}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>SGST {{allSubscriptions[0].sgst}}%</ion-label>\n        <ion-text>{{round((subsResp.sgst/100) * (subsResp.annualFee - subsResp.totalDiscountAmt))}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Final Subscription with GST\n        </ion-label>\n        <ion-text>{{(subsResp.annualFee - subsResp.totalDiscountAmt) + ((subsResp.cgst/100) *\n          (subsResp.annualFee - subsResp.totalDiscountAmt) + (subsResp.sgst/100) * (subsResp.annualFee -\n          subsResp.totalDiscountAmt))}}</ion-text>\n      </ion-item>\n\n\n      <div class=\"ion-text-center\">\n        <ion-button>Proceed for Payment</ion-button>\n        <ion-button (click)=\"closeModal()\">Cancel</ion-button>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div class=\"ion-text-center\">Login</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-margin base ion-text-center grid_base\">\n    <ion-row >\n      <ion-col offsetSm=\"4\" sizeSm=\"5\" >\n        <div class=\"ion-text-center\">\n          <img src=\"../../../assets/images/exam-logo.jpeg\" style=\"width:70%;height:70%\" />\n        </div>\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\" class=\"ion-margin-top\">\n          <ion-item class=\"base\">\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input type=\"text\" formControlName=\"username\">\n\n            </ion-input>\n          </ion-item>\n          <br>\n          <ion-item  class=\"base margin\">\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\">\n\n            </ion-input>\n          </ion-item>\n          <br>\n\n          <ion-item lines=\"none\" class=\"margin\">\n\n            <ion-checkbox>\n\n            </ion-checkbox>\n            <ion-label>Remember me</ion-label>\n\n          </ion-item>\n\n          <div class=\"ion-text-center\">\n\n            <ion-button color=\"success\" style=\"height: 50px;\" expand=\"block\" [disabled]=\"!userForm.valid\" type=\"submit\">\n              <ion-text *ngIf=\"!isLoading\">LOGIN</ion-text>\n              <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\n            </ion-button>\n          </div>\n          <p style=\"color: red;\">Forgot Password?</p>\n          <p style=\"color: blue;font-size: 12px;\">For Subscription, Visit www.compiquest.com</p>\n\n        </form>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n\n<ion-footer>\n  <div class=\"ion-text-center\">\n    <p>If you don't have a Account. <span style=\"color: green;\" (click)=\"gotoRegistration()\">Sign up</span></p>\n  </div>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map