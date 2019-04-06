webpackJsonp([4],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyDetailPageModule", function() { return StudyDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__study_detail__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudyDetailPageModule = /** @class */ (function () {
    function StudyDetailPageModule() {
    }
    StudyDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__study_detail__["a" /* StudyDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__study_detail__["a" /* StudyDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], StudyDetailPageModule);
    return StudyDetailPageModule;
}());

//# sourceMappingURL=study-detail.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyDetailPage; });
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
 * Generated class for the StudyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyDetailPage = /** @class */ (function () {
    function StudyDetailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.getmenu = navParams.get('menuname');
        console.log("this.getmenu", this.getmenu);
    }
    StudyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyDetailPage');
    };
    StudyDetailPage.prototype.gotoBackMenu = function () {
        console.log("gotoBackMenu");
        this.navCtrl.push("SubStudyMenuListPage", { 'menuname': this.getmenu });
    };
    StudyDetailPage.prototype.takeTest = function (menu) {
        console.log("take test", menu);
        this.navCtrl.push("StudyTestsPage", { 'menuname': menu });
    };
    StudyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-study-detail',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/study-detail/study-detail.html"*/'<!--\n  Generated template for the StudyDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Learning Platform"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="ios-arrow-back" class="iconCss" item-start (click)="gotoBackMenu()"></ion-icon>\n		<p class="pCss">{{getmenu}}</p>\n	</ion-item>\n	<div class="divChk">\n		<ion-item class="checkCss">\n	    <ion-label slot="end">mark as knowledge</ion-label>\n	    <ion-checkbox slot="end" [(ngModel)]="markasknow" class="chkbox"></ion-checkbox>\n	  </ion-item>\n	</div>\n	\n	<ion-item class="lastBtns">\n  	<button ion-button round class="upbtn" (click)="takeTest(getmenu)" item-end>TAKE TEST</button>\n		<button ion-button round class="upbtn" (click)="addToCalendar()" item-end>ADD TO CALENDAR</button>\n  </ion-item>\n  <div class="divPdf">\n  	<h3 class="head">{{getmenu}}</h3>\n	</div>\n	<div class="col document">\n   	<div class="scroll-wrapper">\n      <iframe src="assets/imgs/Lastenheft_IonicApp_Queries.pdf" scrolling="no"></iframe>\n   	</div>\n	</div>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/study-detail/study-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], StudyDetailPage);
    return StudyDetailPage;
}());

//# sourceMappingURL=study-detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map