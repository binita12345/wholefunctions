webpackJsonp([30],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DutyRosterEmployeeProfilePageModule", function() { return DutyRosterEmployeeProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duty_roster_employee_profile__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DutyRosterEmployeeProfilePageModule = /** @class */ (function () {
    function DutyRosterEmployeeProfilePageModule() {
    }
    DutyRosterEmployeeProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__duty_roster_employee_profile__["a" /* DutyRosterEmployeeProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__duty_roster_employee_profile__["a" /* DutyRosterEmployeeProfilePage */]),
            ],
        })
    ], DutyRosterEmployeeProfilePageModule);
    return DutyRosterEmployeeProfilePageModule;
}());

//# sourceMappingURL=duty-roster-employee-profile.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutyRosterEmployeeProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the DutyRosterEmployeeProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DutyRosterEmployeeProfilePage = /** @class */ (function () {
    function DutyRosterEmployeeProfilePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.lastname = 'Perkins';
        this.firstname = 'Ryan';
        this.birthdate = '05.04.1987';
        this.position = 'Head Writer';
    }
    DutyRosterEmployeeProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DutyRosterEmployeeProfilePage');
    };
    DutyRosterEmployeeProfilePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DutyRosterEmployeeProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-duty-roster-employee-profile',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/duty-roster-employee-profile/duty-roster-employee-profile.html"*/'<!--\n  Generated template for the DutyRosterEmployeeProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n	<div class="divC1">\n		<ion-item class="itemC">\n			<p class="headP">Name</p>\n			<p class="detailP">{{lastname}}</p>\n		</ion-item>\n		<ion-item class="itemC">\n			<p class="headP">First Name</p>\n			<p class="detailP">{{firstname}}</p>\n		</ion-item>\n		<ion-item class="itemC">\n			<p class="headP">Date of Birth</p>\n			<p class="detailP">{{birthdate}}</p>\n		</ion-item>\n		<ion-item class="itemC">\n			<p class="headP">Position</p>\n			<p class="detailP">{{position}}</p>\n		</ion-item>\n	</div>\n	<div class="divC2">\n		<img src="assets/imgs/newsfeed/profile.jpg" class="imageC">\n		<ion-icon name="close" class="closeC" (click)="closeModal()"></ion-icon>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/duty-roster-employee-profile/duty-roster-employee-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], DutyRosterEmployeeProfilePage);
    return DutyRosterEmployeeProfilePage;
}());

//# sourceMappingURL=duty-roster-employee-profile.js.map

/***/ })

});
//# sourceMappingURL=30.js.map