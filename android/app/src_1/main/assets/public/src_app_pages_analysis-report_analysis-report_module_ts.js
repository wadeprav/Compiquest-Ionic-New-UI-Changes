(self["webpackChunkOnlineExamApp"] = self["webpackChunkOnlineExamApp"] || []).push([["src_app_pages_analysis-report_analysis-report_module_ts"],{

/***/ 8235:
/*!*************************************************************************!*\
  !*** ./src/app/pages/analysis-report/analysis-report-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisReportPageRoutingModule": () => (/* binding */ AnalysisReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _analysis_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analysis-report.page */ 4853);




const routes = [
    {
        path: '',
        component: _analysis_report_page__WEBPACK_IMPORTED_MODULE_0__.AnalysisReportPage
    }
];
let AnalysisReportPageRoutingModule = class AnalysisReportPageRoutingModule {
};
AnalysisReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnalysisReportPageRoutingModule);



/***/ }),

/***/ 5246:
/*!*****************************************************************!*\
  !*** ./src/app/pages/analysis-report/analysis-report.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisReportPageModule": () => (/* binding */ AnalysisReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 6178);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _analysis_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analysis-report-routing.module */ 8235);
/* harmony import */ var _analysis_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analysis-report.page */ 4853);








let AnalysisReportPageModule = class AnalysisReportPageModule {
};
AnalysisReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ChartsModule,
            _analysis_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalysisReportPageRoutingModule
        ],
        declarations: [_analysis_report_page__WEBPACK_IMPORTED_MODULE_1__.AnalysisReportPage]
    })
], AnalysisReportPageModule);



/***/ }),

/***/ 4853:
/*!***************************************************************!*\
  !*** ./src/app/pages/analysis-report/analysis-report.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisReportPage": () => (/* binding */ AnalysisReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_analysis_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./analysis-report.page.html */ 1012);
/* harmony import */ var _analysis_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analysis-report.page.scss */ 3665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-api-data.service */ 8981);





let AnalysisReportPage = class AnalysisReportPage {
    constructor(apiData) {
        this.apiData = apiData;
        this.title = 'ng2-charts-client';
        this.chartOptions = {
            responsive: true,
            legend: {
                display: true,
                fullWidth: true,
                labels: {
                    fontSize: 18,
                }
            }
        };
        this.doughnutChartLabels = ['Correct', 'Incorrect', 'Unattempt'];
        this.doughnutChartData = [];
        this.labelList = [];
        this.labelListID = [];
        this.labelDataBySubject = [];
        this.labelData = [];
        this.labelDatas = [];
        this.setArray = [];
        this.doughnutChartType = 'doughnut';
    }
    onnginit() { }
    ngAfterViewInit() {
        // API DATA 
        this.apiData.getData().subscribe((data) => {
            console.log(data);
            data['analysisSummary'].forEach((element) => {
                if (this.labelList.length == 0) {
                    var dL = {
                        label: element['examName'],
                        id: element['examTypeId']
                    };
                    this.labelList.push(element['examName']);
                    this.labelListID.push(dL);
                    var d = {
                        label: element['examName'],
                        data: [element['qCount']]
                    };
                    this.labelData.push(d);
                }
                else {
                    if (this.checkLables(element['examName']) == false) {
                        var dL = {
                            label: element['examName'],
                            id: element['examTypeId']
                        };
                        this.labelList.push(element['examName']);
                        this.labelListID.push(dL);
                        var d = {
                            label: element['examName'],
                            data: [element['qCount']]
                        };
                        this.labelData.push(d);
                    }
                    else {
                        if (this.checkLableForData(element['examName']) == true) {
                            for (let index = 0; index < this.labelData.length; index++) {
                                if (this.labelData[index]['label'] == element['examName']) {
                                    this.labelData[index]['data'].push(element['qCount']);
                                }
                            }
                        }
                    }
                }
            });
            this.labelData.forEach((element) => {
                this.labelDatas.push(element.data);
            });
            this.chartBySubject(data);
        });
    }
    checkLables(label) {
        let check = false;
        this.labelList.forEach((element) => {
            if (element == label) {
                return check = true;
            }
            else {
                return check;
            }
        });
        return check;
    }
    checkLableForData(label) {
        let check = false;
        this.labelData.forEach((element) => {
            if (element['label'] == label) {
                return check = true;
            }
            else {
                return check;
            }
        });
        return check;
    }
    checkLableForDataSub(id, subject) {
        let check = false;
        this.labelDataBySubject.forEach((element) => {
            if (element['id'] == id && element['subject'] == subject) {
                return check = true;
            }
            else {
                return check;
            }
        });
        return check;
    }
    chartBySubject(data) {
        data['analysisBySubject'].forEach((e) => {
            if (this.labelDataBySubject.length == 0) {
                var d = {
                    id: e['examTypeId'],
                    subject: e['subjectName'],
                    data: [e['qCount']]
                };
                this.labelDataBySubject.push(d);
            }
            else {
                if (this.checkLableForDataSub(e['examTypeId'], e['subjectName']) == true) {
                    console.log('else part');
                    for (let index = 0; index < this.labelDataBySubject.length; index++) {
                        if (this.labelDataBySubject[index]['id'] == e['examTypeId'] && this.labelDataBySubject[index]['subject'] == e['subjectName']) {
                            this.labelDataBySubject[index]['data'].push(e['qCount']);
                        }
                    }
                }
                if (this.checkLableForDataSub(e['examTypeId'], e['subjectName']) == false) {
                    var d = {
                        id: e['examTypeId'],
                        subject: e['subjectName'],
                        data: [e['qCount']]
                    };
                    this.labelDataBySubject.push(d);
                }
            }
        });
        this.plotchart();
    }
    plotchart() {
        this.labelDataBySubject.forEach((element) => {
            if (this.setArray.lenght == 0) {
                var d = {
                    subject: element.subject,
                    data: element.data
                };
                var makeSets = {
                    'examType': element.id,
                    data: [d]
                };
                this.setArray.push(makeSets);
            }
            else {
                if (this.uniqueSetDatacheck(element.id) == true) {
                    for (let index = 0; index < this.setArray.length; index++) {
                        if (this.setArray[index]['examType'] == element.id) {
                            console.log('indssie');
                            var d = {
                                subject: element.subject,
                                data: element.data
                            };
                            this.setArray[index]['data'].push(d);
                        }
                    }
                }
                if (this.uniqueSetDatacheck(element.id) == false) {
                    var d = {
                        subject: element.subject,
                        data: element.data
                    };
                    var makeSetas = {
                        'examType': element.id,
                        data: [d]
                    };
                    this.setArray.push(makeSetas);
                }
            }
        });
    }
    uniqueSetDatacheck(data) {
        let check = false;
        this.setArray.forEach((e) => {
            if (e.examType == data) {
                return check = true;
            }
            else {
                return check;
            }
        });
        return check;
    }
};
AnalysisReportPage.ctorParameters = () => [
    { type: _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_2__.FetchApiDataService }
];
AnalysisReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-analysis-report',
        template: _raw_loader_analysis_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_analysis_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnalysisReportPage);



/***/ }),

/***/ 3665:
/*!*****************************************************************!*\
  !*** ./src/app/pages/analysis-report/analysis-report.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 600;\n}\n\nh2 {\n  text-align: center !important;\n  background: #428cff;\n  height: 46px;\n  padding: 6px;\n  border-top-right-radius: 18px;\n  border-bottom-right-radius: 25px;\n  box-shadow: 2px 2px grey;\n  width: 60%;\n  color: azure;\n}\n\nion-card {\n  --background: #f9f9f9 !important;\n  width: inherit !important;\n  box-shadow: 0 4px 8px 0 #000000d1, 0 6px 20px 0 #00000070;\n  --ion-font-family: -apple-system, BlinkMacSystemFont, 'Montserrat','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue' !important;\n}\n\n.grid_base {\n  box-shadow: 0 4px 8px 0 #000000d1, 0 6px 20px 0 #00000070;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5c2lzLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNwQjs7QUFHQTtFQUNJLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsWUFBWTtBQUFoQjs7QUFJQTtFQUNJLGdDQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlEQUF5RDtFQUV6RCwwSkFBa0I7QUFGdEI7O0FBSUE7RUFDSSx5REFBeUQ7QUFEN0QiLCJmaWxlIjoiYW5hbHlzaXMtcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM0MjhjZmY7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBncmV5O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGNvbG9yOiBhenVyZTtcclxuXHJcblxyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmOSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICMwMDAwMDBkMSwgMCA2cHggMjBweCAwICMwMDAwMDA3MDtcclxuXHJcbiAgICAtLWlvbi1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnTW9udHNlcnJhdCcsJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyAhaW1wb3J0YW50O1xyXG59XHJcbi5ncmlkX2Jhc2V7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjMDAwMDAwZDEsIDAgNnB4IDIwcHggMCAjMDAwMDAwNzA7XHJcbiAgICBcclxuICAgIH0iXX0= */");

/***/ }),

/***/ 1012:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/analysis-report/analysis-report.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/exam-result/1\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>My Exam Result Analysis</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n\n\n    <div *ngFor=\"let set of setArray; let i = index\" id=\"{{i}}\">\n      <ion-card  style=\"width:400px\" id=\"{{i}}\">\n      \n        <h2  *ngIf=\"set['examType'] == 1\">NEET</h2>\n        <h2 *ngIf=\"set['examType'] == 2\">CET</h2>\n        <h2  *ngIf=\"set['examType'] == 3\">JEE</h2>\n\n\n\n\n        <canvas baseChart id=\"c{{i}}\" [data]=\"labelData[i]['data']\" [labels]=\"doughnutChartLabels\" [options]=\"chartOptions\"\n          [chartType]=\"doughnutChartType\">\n        </canvas>\n        <p >Analysis</p>\n\n\n        <div class=\"card-body\">\n          <div *ngFor=\"let sets of set['data'];let n = index;let l = count;\">\n\n            <canvas baseChart id=\"canv_{{n}}\" [data]=\"sets['data']\" [labels]=\"doughnutChartLabels\"  [options]=\"chartOptions\"\n              [chartType]=\"doughnutChartType\">\n            </canvas>\n            <p >{{sets['subject']}}</p>\n          </div>\n        </div>\n      </ion-card>\n        <br>\n      </div>\n \n\n\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_analysis-report_analysis-report_module_ts.js.map