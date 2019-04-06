webpackJsonp([43],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocationListPageModule", function() { return AllocationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allocation_list__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AllocationListPageModule = /** @class */ (function () {
    function AllocationListPageModule() {
    }
    AllocationListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allocation_list__["a" /* AllocationListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allocation_list__["a" /* AllocationListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], AllocationListPageModule);
    return AllocationListPageModule;
}());

//# sourceMappingURL=allocation-list.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllocationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AllocationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllocationListPage = /** @class */ (function () {
    function AllocationListPage(navCtrl, navParams, datePicker, alertCtrl, storage, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.employeesArray = [];
        this.staticAlloc = [];
        var dateNtime = __WEBPACK_IMPORTED_MODULE_2_moment___default()();
        console.log("dateNtime", dateNtime);
        this.setDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()(dateNtime).format('DD/MM/YYYY');
        console.log("this.setDate", this.setDate);
    }
    AllocationListPage.prototype.showDatePicker = function () {
        var _this = this;
        console.log("show date");
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            console.log('Got date: ', date);
            var selectedDate = date;
            console.log("selectedDate", selectedDate);
            _this.setDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()(selectedDate).format('DD/MM/YYYY');
            console.log("this.setDate", _this.setDate);
        }), (function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    AllocationListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AllocationListPage');
        this.storage.get("userData").then(function (userData) {
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getAllocationList();
        });
    };
    AllocationListPage.prototype.getAllocationList = function () {
        var _this = this;
        console.log("get allocation list");
        var allocListObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
        };
        this.serviceProvider.allocationListApi(allocListObj).then(function (data) {
            console.log("allocationListApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.employeesArray = data["response"].tabledata;
                _this.staticAlloc = data["response"].normaldata;
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
                // this.error = '';
                var alert_1 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    AllocationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-allocation-list',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/allocation-list/allocation-list.html"*/'<!--\n  Generated template for the AllocationListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="My Department"> </header>\n\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="ios-arrow-back" class="iconCss" item-start navPop></ion-icon>\n		<p class="pCss">ALLOCATION LIST</p>\n	</ion-item>\n	<img src="assets/imgs/mydepartment/AllocationList.jpg" class="clockC">\n	<ion-item>\n		<ion-icon name="md-calendar" (click)="showDatePicker()" item-start class="calendarC"></ion-icon>\n		<p class="dateInput">{{setDate}}</p>\n	</ion-item>\n	<div class="withscroll">\n		<table class="table table-responsive table-bordered">\n	    <tbody>\n        <tr>\n      		<td class="employee-table">Station</td>\n      		<td class="employee-table">Station Waiter</td>\n      		<td class="employee-table">Commis</td>\n        </tr>\n        \n        <tr *ngFor="let employee of employeesArray; let trindex = index">\n        	<td class="employee-table1">{{employee.sub_area}}</td>\n          <td class="employee-col">{{employee.Station}}</td>\n          <td class="employee-col">{{employee.Commis}}</td>\n        </tr>\n	    </tbody>\n		</table>\n	</div>\n	<br/>\n	<br/>\n	<br/>\n	<br/>\n	<div>\n		<table>\n	    <tbody>\n	    	<tr *ngFor="let static of staticAlloc; let trindex = index">\n	      	<td class="allocHead">{{static.area}}</td>\n	        <td class="allocName">{{static.employee_name}}</td>\n	      </tr>\n	    </tbody>\n		</table>\n	</div>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/allocation-list/allocation-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], AllocationListPage);
    return AllocationListPage;
}());

//# sourceMappingURL=allocation-list.js.map

/***/ })

});
//# sourceMappingURL=43.js.map