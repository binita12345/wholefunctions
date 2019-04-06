webpackJsonp([33],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewWishesPageModule", function() { return CreateNewWishesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_wishes__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewWishesPageModule = /** @class */ (function () {
    function CreateNewWishesPageModule() {
    }
    CreateNewWishesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_new_wishes__["a" /* CreateNewWishesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_new_wishes__["a" /* CreateNewWishesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewWishesPageModule);
    return CreateNewWishesPageModule;
}());

//# sourceMappingURL=create-new-wishes.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewWishesPage; });
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
 * Generated class for the CreateNewWishesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewWishesPage = /** @class */ (function () {
    function CreateNewWishesPage(navCtrl, navParams, viewCtrl, _sanitizer, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._sanitizer = _sanitizer;
        this.alertCtrl = alertCtrl;
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
    }
    CreateNewWishesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewWishesPage');
    };
    CreateNewWishesPage.prototype.cancelNewWishes = function () {
        console.log("cancel new wishes");
        this.viewCtrl.dismiss();
    };
    CreateNewWishesPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewWishesPage.prototype.createNewWish = function () {
        console.log("send new message");
        this.viewCtrl.dismiss();
        var alert = this.alertCtrl.create({
            title: this.htmlProperty(),
            message: 'Your Wish created successfully.',
            cssClass: 'checkAlertCss',
        });
        alert.present();
        setTimeout(function () {
            alert.dismiss();
        }, 2000);
    };
    CreateNewWishesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-new-wishes',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-wishes/create-new-wishes.html"*/'<!--\n  Generated template for the CreateNewWishesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Duty Roster"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="md-arrow-round-back" class="iconCss" item-start navPop></ion-icon>\n	Create Wishes\n	</ion-item>\n\n	<ion-grid class="gridCss">\n		<p class="headP">Create New Wish</p>\n		<ion-row>\n			<ion-col col-6 col-xl-3 col-lg-3>\n				<p class="dateP">START</p>\n				<ion-item class="itemC">\n				    <ion-datetime class="dateInput" displayFormat="DD/MM/YY" [(ngModel)]="dob" placeholder="DD/MM/YY"></ion-datetime>\n    				<ion-icon name="md-calendar" item-end class="iconP"></ion-icon>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-3 col-lg-3> \n				<p class="dateP">END</p>\n				<ion-item class="itemC">\n				    <ion-datetime class="dateInput" displayFormat="DD/MM/YY" [(ngModel)]="dob" placeholder="DD/MM/YY"></ion-datetime>\n    				<ion-icon name="md-calendar" item-end class="iconP"></ion-icon>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col>\n				<ion-textarea placeholder="Reason" class="textArea"></ion-textarea>\n			</ion-col>\n		</ion-row>\n\n		<ion-item class="lastBtns">\n	    	<button ion-button round class="cancelBtn" (click)="cancelNewWishes()" item-end>CANCEL</button>\n			<button ion-button round class="postBtn" (click)="createNewWish()" item-end>CREATE</button>\n	  </ion-item>\n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-wishes/create-new-wishes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CreateNewWishesPage);
    return CreateNewWishesPage;
}());

//# sourceMappingURL=create-new-wishes.js.map

/***/ })

});
//# sourceMappingURL=33.js.map