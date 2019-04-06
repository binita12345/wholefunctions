webpackJsonp([21],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDepartmentPageModule", function() { return MyDepartmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_department__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyDepartmentPageModule = /** @class */ (function () {
    function MyDepartmentPageModule() {
    }
    MyDepartmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_department__["a" /* MyDepartmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_department__["a" /* MyDepartmentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], MyDepartmentPageModule);
    return MyDepartmentPageModule;
}());

//# sourceMappingURL=my-department.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDepartmentPage; });
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
 * Generated class for the MyDepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyDepartmentPage = /** @class */ (function () {
    function MyDepartmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyDepartmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyDepartmentPage');
    };
    MyDepartmentPage.prototype.toFandB = function () {
        console.log("f and b section");
        this.navCtrl.push("FAndBPage");
    };
    MyDepartmentPage.prototype.toRequisition = function () {
        console.log("toRequisition section");
        this.navCtrl.push("RequisitionPage");
    };
    MyDepartmentPage.prototype.toGuestPreferences = function () {
        console.log("toGuestPreferences section");
        this.navCtrl.push("GuestPreferencesPage");
    };
    MyDepartmentPage.prototype.toBreakage = function () {
        console.log("toBreakage section");
        this.navCtrl.push("BreakagePage");
    };
    MyDepartmentPage.prototype.toAllocationList = function () {
        console.log("toAllocationList section");
        this.navCtrl.push("AllocationListPage");
    };
    MyDepartmentPage.prototype.toCleaningPlan = function () {
        console.log("toCleaningPlan section");
        this.navCtrl.push("CleaningPlanPage");
    };
    MyDepartmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-department',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/my-department/my-department.html"*/'<!--\n  Generated template for the MyDepartmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<header title="My Department"></header>\n\n<ion-content class="paddingTop">\n	<div class="divCss"></div>\n	<br/>\n	<h3 class="head">FAVORITES</h3>\n	<ion-grid class="lastContent">\n		<ion-item class="itemBG" (click)="toFandB()">\n			<ion-thumbnail item-start class="thumbnailImg">\n	      <img src="assets/imgs/mydepartment/fnb.jpg" class="dprtImg">\n	    </ion-thumbnail>\n	    <p class="para">F & B</p>\n    </ion-item>\n    <br/>\n			\n		<ion-item class="itemBG" (click)="toRequisition()">\n			<ion-thumbnail item-start class="thumbnailImg">\n	      <img src="assets/imgs/mydepartment/requisition.jpg" class="dprtImg">\n	    </ion-thumbnail>\n	    <p class="para">Requisition</p>\n    </ion-item>\n    <br/>\n\n		<ion-item class="itemBG" (click)="toGuestPreferences()">\n			<ion-thumbnail item-start class="thumbnailImg">\n	      <img src="assets/imgs/mydepartment/guest.jpg" class="dprtImg">\n	    </ion-thumbnail>\n	    <p class="para">Guest Preferences</p>\n    </ion-item>\n    <br/>\n\n		<ion-item class="itemBG" (click)="toBreakage()">\n			<ion-thumbnail item-start class="thumbnailImg">\n	      <img src="assets/imgs/mydepartment/breakage.jpg" class="dprtImg">\n	    </ion-thumbnail>\n	    <p class="para">Breakage</p>\n    </ion-item>\n    <br/>\n			\n		<h3 class="listName">ALL TOOLS</h3>\n		<ion-row>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="itemBGall" (click)="toAllocationList()">\n					<ion-thumbnail item-start class="thumbnailImg">\n			      <img src="assets/imgs/mydepartment/alloclist.jpg" class="dprtImgall">\n			    </ion-thumbnail>\n			    <p class="paraall">Allocation List</p>\n		    </ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="itemBGall" (click)="toCleaningPlan()">\n					<ion-thumbnail item-start class="thumbnailImg">\n			      <img src="assets/imgs/mydepartment/cleanplan.jpeg" class="dprtImgall">\n			    </ion-thumbnail>\n			    <p class="paraall">Cleaning Plan</p>\n		    </ion-item>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/my-department/my-department.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MyDepartmentPage);
    return MyDepartmentPage;
}());

//# sourceMappingURL=my-department.js.map

/***/ })

});
//# sourceMappingURL=21.js.map