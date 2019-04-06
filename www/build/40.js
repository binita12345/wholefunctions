webpackJsonp([40],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleaningPlanPageModule", function() { return CleaningPlanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_plan__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CleaningPlanPageModule = /** @class */ (function () {
    function CleaningPlanPageModule() {
    }
    CleaningPlanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cleaning_plan__["a" /* CleaningPlanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cleaning_plan__["a" /* CleaningPlanPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CleaningPlanPageModule);
    return CleaningPlanPageModule;
}());

//# sourceMappingURL=cleaning-plan.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningPlanPage; });
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
 * Generated class for the CleaningPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CleaningPlanPage = /** @class */ (function () {
    function CleaningPlanPage(navCtrl, navParams, datePicker, alertCtrl, storage, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.cleaningArray = [];
        this.ifRestaurantSelected = true;
        this.ifBarSelected = false;
        this.weekDays = [];
        this.mergeDays = [];
        this.arr = [];
        this.noRecord = false;
        this.error = '';
        this.cleaning = 'restaurant';
        this.cleaningChange(this.cleaning);
        var elm = document.createElement('input');
        elm.type = 'week';
        elm.valueAsDate = new Date();
        var week = elm.value.split('W').pop();
        this.weeknumber = week;
        var currentYear = new Date().getFullYear();
        this.year = currentYear;
        var current = new Date(); // get current date    
        var weekstart = current.getDate() - current.getDay() + 1;
        this.weekstart = weekstart;
        var weekend = weekstart + 6; // end day is the first day + 6 
        var monday = new Date(current.setDate(weekstart));
        var sunday = new Date(current.setDate(weekend));
        for (var i = 0; i <= 6; i++) {
            this.days = __WEBPACK_IMPORTED_MODULE_2_moment___default()(monday).add(i, 'days').format("MM/DD/YY");
            this.dayName = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.days).format('dddd');
            this.weekDays.push({ 'day': this.days, 'name': this.dayName });
        }
        var arr = this.weekDays;
        this.arr = arr.filter(function (e, i) { return i == 0 || i == arr.length - 1; });
        this.startDate = this.arr[0].day;
        this.endDate = this.arr[1].day;
    }
    CleaningPlanPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CleaningPlanPage');
        this.storage.get("userData").then(function (userData) {
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.cleaningPlanData();
        });
    };
    CleaningPlanPage.prototype.cleaningPlanData = function () {
        var _this = this;
        console.log("cleaning plan data");
        var cleanPlanObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "week": this.weeknumber,
            "year": this.year
        };
        this.serviceProvider.displayCleaningPlanApi(cleanPlanObj).then(function (data) {
            console.log("displayCleaningPlanApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.noRecord = true;
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.noRecord = false;
                _this.error = '';
                _this.cleaningArray = data["response"];
            }
            else if (data["success"] == 2) {
                _this.noRecord = false;
                _this.error = data["message"];
            }
            else if (data['success'] == 4) {
                _this.error = '';
                _this.noRecord = false;
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
    CleaningPlanPage.prototype.convertDate = function (date) {
        var current = new Date(date); // get current date   
        var weekstart = current.getDate() - current.getDay() + 1;
        this.weekstart = weekstart;
        var weekend = weekstart + 6; // end day is the first day + 6 
        var monday = new Date(current.setDate(weekstart));
        var sunday = new Date(current.setDate(weekend));
        this.weekDays = [];
        for (var i = 0; i <= 6; i++) {
            this.days = __WEBPACK_IMPORTED_MODULE_2_moment___default()(monday).add(i, 'days').format("MM/DD/YY");
            this.dayName = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.days).format('dddd');
            this.weekDays.push({ 'day': this.days, 'name': this.dayName });
        }
        var arr = this.weekDays;
        this.arr = arr.filter(function (e, i) { return i == 0 || i == arr.length - 1; });
        this.startDate = this.arr[0].day;
        this.endDate = this.arr[1].day;
    };
    CleaningPlanPage.prototype.decreaseDay = function () {
        if (this.weeknumber >= 1) {
            this.weeknumber = this.weeknumber - 1;
        }
        var now = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.startDate, 'MM/DD/YY');
        this.dates = __WEBPACK_IMPORTED_MODULE_2_moment___default()(now).subtract(7, 'days');
        var decreasedDate = this.dates;
        this.convertDate(decreasedDate);
        this.cleaningPlanData();
    };
    CleaningPlanPage.prototype.increaseDay = function () {
        if (this.weeknumber <= 52) {
            this.weeknumber = ++this.weeknumber;
        }
        console.log("this.weeknumber", this.weeknumber);
        var now = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.startDate, 'MM/DD/YY');
        this.dates = __WEBPACK_IMPORTED_MODULE_2_moment___default()(now).add(7, 'days');
        var increasedDate = this.dates;
        this.convertDate(increasedDate);
        this.cleaningPlanData();
    };
    CleaningPlanPage.prototype.cleaningChange = function (cleaningname) {
        if (cleaningname == "restaurant") {
            this.ifRestaurantSelected = true;
            this.ifBarSelected = false;
        }
        else if (cleaningname == "bar") {
            this.ifRestaurantSelected = false;
            this.ifBarSelected = true;
        }
        else { }
    };
    CleaningPlanPage.prototype.onCleaningChanged = function (event) {
        console.log("event", event.value);
        this.cleaningChange(event.value);
    };
    CleaningPlanPage.prototype.updateCleaningStatus = function (cleaning) {
        var _this = this;
        console.log("update grey cleaning plan status", cleaning);
        var updateCleanStatusObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "item_id": cleaning.id
        };
        this.serviceProvider.updateCleaningPlanApi(updateCleanStatusObj).then(function (data) {
            // console.log("updateCleaningPlanApi" +JSON.stringify(data));
            if (data["success"] == 0) {
                _this.noRecord = true;
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.noRecord = false;
                _this.error = '';
                _this.cleaningArray = data["response"];
            }
            else if (data["success"] == 2) {
                _this.noRecord = false;
                _this.error = data["message"];
            }
            else if (data['success'] == 4) {
                _this.error = '';
                _this.noRecord = false;
                var alert_2 = _this.alertCtrl.create({
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
                alert_2.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    CleaningPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cleaning-plan',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/cleaning-plan/cleaning-plan.html"*/'<!--\n  Generated template for the CleaningPlanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="My Department"> </header>\n\n\n<ion-content class="paddingTop">\n	<ion-toolbar class="toolbar-color">\n    <ion-segment [(ngModel)]="cleaning" (ionChange)="onCleaningChanged($event)" class="segment">\n      <ion-segment-button value="restaurant" class="segment-btn">\n        Restaurant\n      </ion-segment-button>\n      <ion-segment-button value="bar" class="segment-btn">\n        Bar\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n	<div class="divC" navPop>\n  	<ion-icon name="ios-arrow-back" class="iconC"></ion-icon>\n  	<p class="nameP">CLEANING</p>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n  <div *ngIf="ifRestaurantSelected">\n  	<ion-grid>\n			<ion-row>\n				<ion-col col-2 col-xl-4 class="col1">\n				</ion-col>\n				<ion-col class="col4">\n					<ion-icon name="ios-arrow-back" (click)="decreaseDay()" class="decDate"></ion-icon>\n					{{startDate}} - {{endDate}}\n					<ion-icon name="ios-arrow-forward" (click)="increaseDay()" class="incDate"></ion-icon>\n				</ion-col>\n				<ion-col col-2 col-xl-4 class="col3">\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n  	<div class="withscroll">\n			<table class="table table-responsive table-bordered">\n		    <tbody>\n	        <tr>\n	      		<td class="HeadMain">Week {{startDate}} - {{endDate}}</td>\n	      		<td *ngFor="let week of weekDays" class="headName">{{week.name}}</td>\n	        </tr>\n	        <tr *ngFor="let cleaning of cleaningArray; let trindex = index">\n	        	<td class="cleanNames">{{cleaning.area_name}}</td>\n	        	<td class="cleanC" *ngIf="cleaning.Monday == \'greybox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Monday}}</td>\n	        	<td class="cleanColorBlue" *ngIf="cleaning.Monday == \'bluebox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Monday}}</td>\n	        	<td class="cleanColorGreen" *ngIf="cleaning.Monday == \'greenbox\'">{{cleaning.Monday}}</td>\n	        	<td class="cleanColorRed" *ngIf="cleaning.Monday == \'redbox\'">{{cleaning.Monday}}</td>\n\n	          <td class="cleanC" *ngIf="cleaning.Tuesday == \'greybox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Tuesday}}</td>\n	          <td class="cleanColorBlue" *ngIf="cleaning.Tuesday == \'bluebox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Tuesday}}</td>\n	        	<td class="cleanColorGreen" *ngIf="cleaning.Tuesday == \'greenbox\'">{{cleaning.Tuesday}}</td>\n	        	<td class="cleanColorRed" *ngIf="cleaning.Tuesday == \'redbox\'">{{cleaning.Tuesday}}</td>\n\n	          <td class="cleanC" *ngIf="cleaning.Wednesday == \'greybox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Wednesday}}</td>\n	          <td class="cleanColorBlue" *ngIf="cleaning.Wednesday == \'bluebox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Wednesday}}</td>\n	        	<td class="cleanColorGreen" *ngIf="cleaning.Wednesday == \'greenbox\'">{{cleaning.Wednesday}}</td>\n	        	<td class="cleanColorRed" *ngIf="cleaning.Wednesday == \'redbox\'">{{cleaning.Wednesday}}</td>\n\n	          <td class="cleanC" *ngIf="cleaning.Thusday == \'greybox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Thusday}}</td>\n	          <td class="cleanColorBlue" *ngIf="cleaning.Thusday == \'bluebox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Thusday}}</td>\n	        	<td class="cleanColorGreen" *ngIf="cleaning.Thusday == \'greenbox\'">{{cleaning.Thusday}}</td>\n	        	<td class="cleanColorRed" *ngIf="cleaning.Thusday == \'redbox\'">{{cleaning.Thusday}}</td>\n\n	          <td class="cleanC" *ngIf="cleaning.Friday == \'greybox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Friday}}</td>\n	          <td class="cleanColorBlue" *ngIf="cleaning.Friday == \'bluebox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Friday}}</td>\n	        	<td class="cleanColorGreen" *ngIf="cleaning.Friday == \'greenbox\'">{{cleaning.Friday}}</td>\n	        	<td class="cleanColorRed" *ngIf="cleaning.Friday == \'redbox\'">{{cleaning.Friday}}</td>\n\n	          <td class="cleanC" *ngIf="cleaning.Saturday == \'greybox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Saturday}}</td>\n	          <td class="cleanColorBlue" *ngIf="cleaning.Saturday == \'bluebox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Saturday}}</td>\n	        	<td class="cleanColorGreen" *ngIf="cleaning.Saturday == \'greenbox\'">{{cleaning.Saturday}}</td>\n	        	<td class="cleanColorRed" *ngIf="cleaning.Saturday == \'redbox\'">{{cleaning.Saturday}}</td>\n\n	          <td class="cleanC" *ngIf="cleaning.Sunday == \'greybox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Sunday}}</td>\n	          <td class="cleanColorBlue" *ngIf="cleaning.Sunday == \'bluebox\'" (click)="updateCleaningStatus(cleaning)">{{cleaning.Sunday}}</td>\n	        	<td class="cleanColorGreen" *ngIf="cleaning.Sunday == \'greenbox\'">{{cleaning.Sunday}}</td>\n	        	<td class="cleanColorRed" *ngIf="cleaning.Sunday == \'redbox\'">{{cleaning.Sunday}}</td>\n\n	        </tr>\n		    </tbody>\n			</table>\n		</div>\n\n		<br/>\n  	<div class="norecord" *ngIf="noRecord">\n      {{error}}\n    </div>\n  </div>\n\n  <div *ngIf="ifBarSelected">\n  	No Content For Bar\n  </div>\n  <div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/cleaning-plan/cleaning-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], CleaningPlanPage);
    return CleaningPlanPage;
}());

//# sourceMappingURL=cleaning-plan.js.map

/***/ })

});
//# sourceMappingURL=40.js.map