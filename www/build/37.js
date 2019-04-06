webpackJsonp([37],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewChallengePageModule", function() { return CreateNewChallengePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_challenge__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewChallengePageModule = /** @class */ (function () {
    function CreateNewChallengePageModule() {
    }
    CreateNewChallengePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_new_challenge__["a" /* CreateNewChallengePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_new_challenge__["a" /* CreateNewChallengePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewChallengePageModule);
    return CreateNewChallengePageModule;
}());

//# sourceMappingURL=create-new-challenge.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewChallengePage; });
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
 * Generated class for the CreateNewChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewChallengePage = /** @class */ (function () {
    function CreateNewChallengePage(navCtrl, navParams, viewCtrl, alertCtrl, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.error = '';
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
    }
    CreateNewChallengePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewChallengePage');
    };
    CreateNewChallengePage.prototype.onDurationChange = function (duration) {
        console.log('duration', duration);
    };
    CreateNewChallengePage.prototype.cancelNewChallenge = function () {
        console.log("cancelNewLost");
        this.viewCtrl.dismiss();
    };
    CreateNewChallengePage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewChallengePage.prototype.createNewChallenge = function () {
        console.log("send new message");
        if (this.title == '' || this.title == undefined || this.title == null) {
            this.error = 'please enter challenge title';
        }
        else if (this.description == '' || this.description == undefined || this.description == null) {
            this.error = 'please enter challenge description';
        }
        else if (this.points == '' || this.points == undefined || this.points == null) {
            this.error = 'please enter challenge points';
        }
        else if (this.duration == '' || this.duration == undefined || this.duration == null) {
            this.error = 'please select duration';
        }
        else {
            this.error = '';
            var alert_1 = this.alertCtrl.create({
                title: this.htmlProperty(),
                subTitle: 'You created a new challenge',
                cssClass: 'newsFeedAlertCss',
            });
            alert_1.present();
            setTimeout(function () {
                alert_1.dismiss();
            }, 2000);
        }
    };
    CreateNewChallengePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-new-challenge',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-challenge/create-new-challenge.html"*/'<!--\n  Generated template for the CreateNewChallengePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Learning Platform"> </header>\n\n<ion-content class="paddingTop">\n	<div class="divCss"></div>\n	<ion-grid class="gridCss">\n		<p class="headP">Create New Challenge</p>\n		\n		<ion-row>\n			<ion-col col-12 col-xl-12>\n				<ion-item class="drpItem">\n					<ion-input type="text" [(ngModel)]="title" placeholder="Title"></ion-input>\n				</ion-item>\n			</ion-col>\n			<br/>\n			<ion-col col-12 col-xl-12>\n				<ion-textarea placeholder="Description" class="textArea" [(ngModel)]="description"></ion-textarea>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n				    <ion-input type="number" [(ngModel)]="points" placeholder="Hoscom Points"></ion-input>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n				    <ion-select name="duration" [(ngModel)]="duration" (ionChange)="onDurationChange(duration)" placeholder="Duration" text-wrap class="selectItem1">\n	            <ion-option value="1week">1 week</ion-option>\n	            <ion-option value="2week">2 week</ion-option>\n	            <ion-option value="3week">3 week</ion-option>\n          	</ion-select>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n\n		<div class="error-message">\n	    {{error}}\n	  </div>\n	  <br/>\n	  <br/>\n		<ion-item class="lastBtns">\n	    	<button ion-button round class="cancelBtn" (click)="cancelNewChallenge()" item-end>CANCEL</button>\n			<button ion-button round class="saveBtn" (click)="createNewChallenge()" item-end>POST</button>\n	  </ion-item>\n	  \n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-challenge/create-new-challenge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CreateNewChallengePage);
    return CreateNewChallengePage;
}());

//# sourceMappingURL=create-new-challenge.js.map

/***/ })

});
//# sourceMappingURL=37.js.map