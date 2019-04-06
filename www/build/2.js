webpackJsonp([2],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyTestsPageModule", function() { return StudyTestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__study_tests__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudyTestsPageModule = /** @class */ (function () {
    function StudyTestsPageModule() {
    }
    StudyTestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__study_tests__["a" /* StudyTestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__study_tests__["a" /* StudyTestsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], StudyTestsPageModule);
    return StudyTestsPageModule;
}());

//# sourceMappingURL=study-tests.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyTestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
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
 * Generated class for the StudyTestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyTestsPage = /** @class */ (function () {
    function StudyTestsPage(navCtrl, navParams, viewCtrl, _sanitizer, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._sanitizer = _sanitizer;
        this.alertCtrl = alertCtrl;
        this.isFirstQuestion = true;
        this.isSecondQuestion = false;
        this.isThirdQuestion = false;
        this.isForthQuestion = false;
        this.isFifthQuestion = false;
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.getmenu = navParams.get('menuname');
        console.log("this.getmenu", this.getmenu);
    }
    StudyTestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyTestsPage');
    };
    StudyTestsPage.prototype.cancelTest = function () {
        console.log("cancel test");
        this.viewCtrl.dismiss();
    };
    StudyTestsPage.prototype.previosQuestion1 = function () {
        console.log("previous question1");
        this.isFirstQuestion = true;
        this.isSecondQuestion = false;
        this.isThirdQuestion = false;
        this.isForthQuestion = false;
        this.isFifthQuestion = false;
    };
    StudyTestsPage.prototype.previosQuestion2 = function () {
        console.log("previous question1");
        this.isFirstQuestion = false;
        this.isSecondQuestion = true;
        this.isThirdQuestion = false;
        this.isForthQuestion = false;
        this.isFifthQuestion = false;
    };
    StudyTestsPage.prototype.previosQuestion3 = function () {
        console.log("previous question1");
        this.isFirstQuestion = false;
        this.isSecondQuestion = false;
        this.isThirdQuestion = true;
        this.isForthQuestion = false;
        this.isFifthQuestion = false;
    };
    StudyTestsPage.prototype.previosQuestion4 = function () {
        console.log("previous question1");
        this.isFirstQuestion = false;
        this.isSecondQuestion = false;
        this.isThirdQuestion = false;
        this.isForthQuestion = true;
        this.isFifthQuestion = false;
    };
    StudyTestsPage.prototype.nextToSecondQuestion = function () {
        console.log("next screen to second question");
        this.isFirstQuestion = false;
        this.isSecondQuestion = true;
        this.isThirdQuestion = false;
        this.isForthQuestion = false;
        this.isFifthQuestion = false;
    };
    StudyTestsPage.prototype.nextToThirdQuestion = function () {
        console.log("next screen to Third question");
        this.isFirstQuestion = false;
        this.isSecondQuestion = false;
        this.isThirdQuestion = true;
        this.isForthQuestion = false;
        this.isFifthQuestion = false;
    };
    StudyTestsPage.prototype.nextToForthQuestion = function () {
        console.log("next screen to Forth question");
        this.isFirstQuestion = false;
        this.isSecondQuestion = false;
        this.isThirdQuestion = false;
        this.isForthQuestion = true;
        this.isFifthQuestion = false;
    };
    StudyTestsPage.prototype.nextToFifthQuestion = function () {
        console.log("next screen to Fifth question");
        this.isFirstQuestion = false;
        this.isSecondQuestion = false;
        this.isThirdQuestion = false;
        this.isForthQuestion = false;
        this.isFifthQuestion = true;
    };
    StudyTestsPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    StudyTestsPage.prototype.nextToDownloadCertificate = function () {
        var _this = this;
        console.log("next screen to DownloadCertificate");
        this.isFirstQuestion = false;
        this.isSecondQuestion = false;
        this.isThirdQuestion = false;
        this.isForthQuestion = false;
        this.isFifthQuestion = true;
        var alert = this.alertCtrl.create({
            title: this.htmlProperty(),
            subTitle: 'You finished all the tests for Sauvignon Blanc.',
            cssClass: 'certificateAlertCss',
            buttons: [
                {
                    text: 'DOWNLOAD CERTIFICATION',
                    handler: function () {
                        console.log('ok clicked');
                        _this.navCtrl.push("StudyCertificatePage", { 'menuname': _this.getmenu });
                    }
                }
            ]
        });
        alert.present();
    };
    StudyTestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-study-tests',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/study-tests/study-tests.html"*/'<!--\n  Generated template for the StudyTestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Learning Platform"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="ios-arrow-back" class="iconCss" item-start navPop></ion-icon>\n		<p class="pCss">{{getmenu}}</p>\n	</ion-item>\n	<ion-item class="lastBtns">\n  	<button ion-button outline round class="savebtn" (click)="saveTest()" item-end>SAVE TEST</button>\n		<button ion-button round class="cancelBtn" (click)="cancelTest()" item-end>CANCEL TEST</button>\n  </ion-item>\n\n  <div class="divC" *ngIf="isFirstQuestion" id="1">\n  	<h2 class="head3">1/5</h2>\n  	<p class="queP">Sauvignon Blanc is often matured in oak.</p>\n  	<ion-list radio-group [(ngModel)]="firstAns">\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">true</ion-label>\n		    <ion-radio value="first_one" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">false</ion-label>\n		    <ion-radio value="first_two" item-start class="radioC"></ion-radio>\n		  </ion-item>\n	  </ion-list>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <ion-item class="lastBtns">\n			<button ion-button round class="nextBtn" (click)="nextToSecondQuestion()" item-end>NEXT</button>\n	  </ion-item>\n  </div>\n\n  <div class="divC" *ngIf="isSecondQuestion" id="2">\n  	<h2 class="head3">2/5</h2>\n  	<p class="queP">Sauvignon Blanc mostly have __________ acidity.</p>\n  	<ion-list radio-group [(ngModel)]="firstAns">\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">low</ion-label>\n		    <ion-radio value="second_one" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">medium</ion-label>\n		    <ion-radio value="second_two" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">high</ion-label>\n		    <ion-radio value="second_three" item-start class="radioC"></ion-radio>\n		  </ion-item>\n	  </ion-list>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <ion-item class="lastBtns">\n	  	<button ion-button outline round class="savebtn" (click)="previosQuestion1()" item-end>PREVIOUS</button>\n			<button ion-button round class="nextBtn" (click)="nextToThirdQuestion()" item-end>NEXT</button>\n	  </ion-item>\n  </div>\n\n  <div class="divC" *ngIf="isThirdQuestion" id="3">\n  	<h2 class="head3">3/5</h2>\n  	<p class="queP">Which of the following region is typical for Sauvignon Blanc?</p>\n  	<ion-list radio-group [(ngModel)]="firstAns">\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Sancerre</ion-label>\n		    <ion-radio value="third_one" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Pouilly Fuisse</ion-label>\n		    <ion-radio value="third_two" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Mersault</ion-label>\n		    <ion-radio value="third_three" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Chablis</ion-label>\n		    <ion-radio value="third_four" item-start class="radioC"></ion-radio>\n		  </ion-item>\n	  </ion-list>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <ion-item class="lastBtns">\n	  	<button ion-button outline round class="savebtn" (click)="previosQuestion2()" item-end>PREVIOUS</button>\n			<button ion-button round class="nextBtn" (click)="nextToForthQuestion()" item-end>NEXT</button>\n	  </ion-item>\n  </div>\n\n  <div class="divC" *ngIf="isForthQuestion" id="4">\n  	<h2 class="head3">4/5</h2>\n  	<p class="queP">In California Sauvignon Blanc is also called ________ .</p>\n  	<ion-list radio-group [(ngModel)]="firstAns">\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Pinot Bainco</ion-label>\n		    <ion-radio value="forth_one" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Fume Blanc</ion-label>\n		    <ion-radio value="forth_two" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Pinot Blanc</ion-label>\n		    <ion-radio value="forth_three" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Cabernet Sauvignon</ion-label>\n		    <ion-radio value="forth_four" item-start class="radioC"></ion-radio>\n		  </ion-item>\n	  </ion-list>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <ion-item class="lastBtns">\n	  	<button ion-button outline round class="savebtn" (click)="previosQuestion3()" item-end>PREVIOUS</button>\n			<button ion-button round class="nextBtn" (click)="nextToFifthQuestion()" item-end>NEXT</button>\n	  </ion-item>\n  </div>\n\n  <div class="divC" *ngIf="isFifthQuestion" id="5">\n  	<h2 class="head3">5/5</h2>\n  	<p class="queP">Sauvignon Blanc is also grown in Bordeaux.</p>\n  	<ion-list radio-group [(ngModel)]="firstAns">\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Semillon</ion-label>\n		    <ion-radio value="fifth_one" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Chardonny</ion-label>\n		    <ion-radio value="fifth_two" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Pinot noir</ion-label>\n		    <ion-radio value="fifth_three" item-start class="radioC"></ion-radio>\n		  </ion-item>\n\n		  <ion-item class="itemC">\n		    <ion-label item-end class="labelC">Vermentino</ion-label>\n		    <ion-radio value="fifth_four" item-start class="radioC"></ion-radio>\n		  </ion-item>\n	  </ion-list>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <br/>\n	  <ion-item class="lastBtns">\n	  	<button ion-button outline round class="savebtn" (click)="previosQuestion4()" item-end>PREVIOUS</button>\n			<button ion-button round class="nextBtn" (click)="nextToDownloadCertificate()" item-end>NEXT</button>\n	  </ion-item>\n  </div>\n  \n	<div style="margin-top: 45px;height: 20px;"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/study-tests/study-tests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], StudyTestsPage);
    return StudyTestsPage;
}());

//# sourceMappingURL=study-tests.js.map

/***/ })

});
//# sourceMappingURL=2.js.map