webpackJsonp([29],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DutyRosterPageModule", function() { return DutyRosterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duty_roster__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DutyRosterPageModule = /** @class */ (function () {
    function DutyRosterPageModule() {
    }
    DutyRosterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__duty_roster__["a" /* DutyRosterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__duty_roster__["a" /* DutyRosterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], DutyRosterPageModule);
    return DutyRosterPageModule;
}());

//# sourceMappingURL=duty-roster.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutyRosterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(348);
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
 * Generated class for the DutyRosterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DutyRosterPage = /** @class */ (function () {
    function DutyRosterPage(navCtrl, navParams, datePicker, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.modalCtrl = modalCtrl;
        this.employeesArray = [];
        this.weekDays = [];
        this.mergeDays = [];
        this.arr = [];
        this.employeesArray = [{ 'name': 'Arias, Carla', 'td1': '05:30', 'td2': '05:30', 'td3': '', 'td4': '', 'td5': '07:30', 'td6': '07:00', 'td7': '06:00' },
            { 'name': 'Carten, Sean', 'td1': '07:00', 'td2': '07:00', 'td3': '05:30', 'td4': '05:30', 'td5': '', 'td6': '', 'td7': '07:30' },
            { 'name': 'Cullen, Danniella', 'td1': '08:00', 'td2': '', 'td3': '', 'td4': '08:00', 'td5': '08:00', 'td6': '08:00', 'td7': '08:00' },
            { 'name': 'Dikson, Ashlee', 'td1': '08:00', 'td2': '08:00', 'td3': '08:00', 'td4': '', 'td5': '', 'td6': '08:00', 'td7': '08:00' },
            { 'name': 'Ho, Yusef', 'td1': '', 'td2': '', 'td3': '', 'td4': '', 'td5': '', 'td6': '', 'td7': '' },
            { 'name': 'Marta, Rebecca', 'td1': '15:00', 'td2': '15:00', 'td3': '15:00', 'td4': '15:00', 'td5': '15:00', 'td6': '', 'td7': '' },
            { 'name': 'Oliver, Minnie', 'td1': '17:00', 'td2': '17:00', 'td3': '17:00', 'td4': '', 'td5': '', 'td6': '17:00', 'td7': '17:00' },
            { 'name': 'Perkins, Ryan', 'td1': '17:00', 'td2': '15:00', 'td3': '15:00', 'td4': 'GT', 'td5': 'GT', 'td6': '', 'td7': '' },
            { 'name': 'Schafer, Kim', 'td1': '17:00', 'td2': '', 'td3': '17:00', 'td4': '15:00', 'td5': '17:00', 'td6': '15:00', 'td7': '' }];
        var currentDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()();
        var weekStart = currentDate.clone().startOf('day');
        var days = [];
        for (var i = 0; i <= 6; i++) {
            this.days = __WEBPACK_IMPORTED_MODULE_2_moment___default()(weekStart).add(i, 'days').format("DD.MM.YY");
            console.log("this.days...1", this.days);
            this.weekDays.push({ 'day': this.days });
        }
        console.log("this.weekDays...1", this.weekDays);
        var arr = this.weekDays;
        this.arr = arr.filter(function (e, i) { return i == 0 || i == arr.length - 1; });
        this.startDate = this.arr[0].day;
        this.endDate = this.arr[1].day;
        for (var i_1 in this.weekDays) {
            this.daySplit = this.weekDays[i_1].day.split('.');
            this.mergeDay = this.daySplit[0] + '.' + this.daySplit[1];
            this.mergeDays.push({ 'day': this.mergeDay });
        }
    }
    DutyRosterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DutyRosterPage');
    };
    DutyRosterPage.prototype.convertDate = function (date) {
        var weekStart = __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).clone().startOf('day');
        var days = [];
        this.weekDays = [];
        for (var i = 0; i <= 6; i++) {
            this.days = __WEBPACK_IMPORTED_MODULE_2_moment___default()(weekStart).add(i, 'days').format("DD.MM.YY");
            this.weekDays.push({ 'day': this.days });
        }
        var arr = this.weekDays;
        this.arr = arr.filter(function (e, i) { return i == 0 || i == arr.length - 1; });
        this.startDate = this.arr[0].day;
        this.endDate = this.arr[1].day;
        this.mergeDays = [];
        for (var i_2 in this.weekDays) {
            this.daySplit = this.weekDays[i_2].day.split('.');
            this.mergeDay = this.daySplit[0] + '.' + this.daySplit[1];
            this.mergeDays.push({ 'day': this.mergeDay });
        }
    };
    DutyRosterPage.prototype.showDatePicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            console.log('Got date: ', date);
            var selectedDate = date;
            _this.convertDate(selectedDate);
        }), (function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    DutyRosterPage.prototype.decreaseDay = function () {
        var now = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.startDate, 'DD.MM.YY');
        this.dates = __WEBPACK_IMPORTED_MODULE_2_moment___default()(now).subtract(1, 'days');
        var decreasedDate = this.dates;
        this.convertDate(decreasedDate);
    };
    DutyRosterPage.prototype.increaseDay = function () {
        var now = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.startDate, 'DD.MM.YY');
        this.dates = __WEBPACK_IMPORTED_MODULE_2_moment___default()(now).add(1, 'days');
        var increasedDate = this.dates;
        this.convertDate(increasedDate);
    };
    DutyRosterPage.prototype.createWishesDutyRoster = function () {
        this.navCtrl.push("CreateNewWishesPage");
    };
    DutyRosterPage.prototype.employeeProfile = function (employee) {
        console.log("employee", employee);
        var employeeModal = this.modalCtrl.create("DutyRosterEmployeeProfilePage", {}, { showBackdrop: true, enableBackdropDismiss: true });
        employeeModal.present();
        employeeModal.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    DutyRosterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-duty-roster',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/duty-roster/duty-roster.html"*/'<!--\n  Generated template for the DutyRosterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Duty Roster"></header>\n\n<ion-content class="paddingTop">\n	<br/>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-5 col-xl-5 class="col1">\n				<ion-icon name="ios-arrow-back" (click)="decreaseDay()"></ion-icon>\n			</ion-col>\n			<ion-col col-2 col-xl-2 class="col2">\n				<ion-icon name="md-calendar" (click)="showDatePicker()"></ion-icon>\n			</ion-col>\n			<ion-col col-5 col-xl-5 class="col3">\n				<ion-icon name="ios-arrow-forward" (click)="increaseDay()"></ion-icon>\n			</ion-col>\n			<ion-col class="col4">\n				{{startDate}}-{{endDate}}\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div class="withscroll">\n		<table class="table table-responsive table-bordered">\n	    <tbody>\n        <tr>\n      		<td class="employee-table">Employee</td>\n          <td *ngFor="let mergeweek of mergeDays" class="employee-col">{{mergeweek.day}}</td>\n        </tr>\n        <tr *ngFor="let employee of employeesArray; let trindex = index">\n        	<td class="employee-table1" (click)="employeeProfile(employee)">{{employee.name}}</td>\n\n        	<td class="employee-col1" *ngIf="!employee.td1==\'\'">{{employee.td1}}</td>\n        	<td class="employee-col2" *ngIf="employee.td1==\'\'">{{employee.td1}}</td>\n\n          <td class="employee-col1" *ngIf="!employee.td2==\'\'">{{employee.td2}}</td>\n          <td class="employee-col2" *ngIf="employee.td2==\'\'">{{employee.td2}}</td>\n\n          <td class="employee-col1" *ngIf="!employee.td3==\'\'">{{employee.td3}}</td>\n          <td class="employee-col2" *ngIf="employee.td3==\'\'">{{employee.td3}}</td>\n\n          <td class="employee-col1" *ngIf="!employee.td4==\'\'">{{employee.td4}}</td>\n          <td class="employee-col2" *ngIf="employee.td4==\'\'">{{employee.td4}}</td>\n\n          <td class="employee-col1" *ngIf="!employee.td5==\'\'">{{employee.td5}}</td>\n          <td class="employee-col2" *ngIf="employee.td5==\'\'">{{employee.td5}}</td>\n\n          <td class="employee-col1" *ngIf="!employee.td6==\'\'">{{employee.td6}}</td>\n          <td class="employee-col2" *ngIf="employee.td6==\'\'">{{employee.td6}}</td>\n\n          <td class="employee-col1" *ngIf="!employee.td7==\'\'">{{employee.td7}}</td>\n          <td class="employee-col2" *ngIf="employee.td7==\'\'">{{employee.td7}}</td>\n        </tr>\n			       \n	    </tbody>\n		</table>\n	</div>\n	<br/>\n	<ion-item class="lastBtns">\n    	<button ion-button round outline class="bothBtn" (click)="createVacationDutyRoster()" item-end>VACATION</button>\n			<button ion-button round outline class="bothBtn" (click)="createWishesDutyRoster()" item-end>WISHES</button>\n  </ion-item>\n\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/duty-roster/duty-roster.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], DutyRosterPage);
    return DutyRosterPage;
}());

//# sourceMappingURL=duty-roster.js.map

/***/ })

});
//# sourceMappingURL=29.js.map