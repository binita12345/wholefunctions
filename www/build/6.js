webpackJsonp([6],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(54);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, camera, platform, actionSheetCtrl, loader, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loader = loader;
        this.viewCtrl = viewCtrl;
        this.base64Image = 'assets/imgs/images.jpeg';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.onWeekDayChange = function (week) {
        console.log('week', week);
    };
    SettingsPage.prototype.editProfilePhoto = function () {
        var _this = this;
        console.log("edit profile photo");
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Option',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Take photo',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
                    handler: function () {
                        _this.takephoto();
                    }
                },
                {
                    text: 'Choose photo from Gallery',
                    icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
                    handler: function () {
                        _this.openGallery();
                    }
                },
            ]
        });
        actionSheet.present();
    };
    SettingsPage.prototype.takephoto = function () {
        var _this = this;
        this.loader.show("loading captured image");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.image = imageData;
            console.log("take photo imagedata" + JSON.stringify(imageData));
            _this.loader.hide();
            _this.base64Image = 'data:image/png;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    SettingsPage.prototype.openGallery = function () {
        var _this = this;
        this.loader.show("loading gallary image");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.image = imageData;
            console.log("gallary imagedata" + JSON.stringify(imageData));
            _this.loader.hide();
            _this.base64Image = 'data:image/png;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    SettingsPage.prototype.cancelComment = function () {
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.saveProfileChange = function () {
        console.log("save profile changes");
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-grid class="gridCss">\n		<h6>Personal Information</h6>\n		<ion-row>\n			<ion-col col-6 col-xl-6>\n				<img src="{{base64Image}}" class="imgDetail">\n				<button ion-button round outline class="imageBtn" (click)="editProfilePhoto()">EDIT PROFILE PHOTO</button>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="itemC">\n				  <ion-label stacked class="labelC">Name</ion-label>\n				  <ion-input class="inputC" placeholder="Name"></ion-input>\n				</ion-item>\n				<ion-item class="itemC">\n				  <ion-label stacked class="labelC">First Name</ion-label>\n				  <ion-input class="inputC" placeholder="First Name"></ion-input>\n				</ion-item>\n				<ion-item class="itemC">\n				  <ion-label stacked class="labelC">Date of Birth</ion-label>\n				  <ion-input class="inputC" placeholder="Date of Birth"></ion-input>\n				</ion-item>\n				<ion-item class="itemC">\n				  <ion-label stacked class="labelC">Position</ion-label>\n				  <ion-input class="inputC" placeholder="Position"></ion-input>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n\n		<h6>General Settings</h6>\n		<p class="checkP">Newsfeed</p>\n		  <ion-item class="checkCss1">\n		    <ion-label class="checkL">Show notifications</ion-label>\n		    <ion-checkbox slot="end" [(ngModel)]="notification"></ion-checkbox>\n		  </ion-item>\n		  <ion-item class="checkCss2">\n		    <ion-label class="checkL">mute sounds</ion-label>\n		    <ion-checkbox slot="end" [(ngModel)]="mutesounds"></ion-checkbox>\n		  </ion-item>\n		<p class="checkP">Duty Roster</p>\n		<ion-item class="drpItem">\n			<ion-label>Start of the week: </ion-label>\n	    <ion-select name="week" [(ngModel)]="week" (ionChange)="onWeekDayChange(week)" placeholder="Monday" text-wrap class="selectC">\n	      <ion-option value="monday">Monday</ion-option>\n	      <ion-option value="tuesday">Tuesday</ion-option>\n	      <ion-option value="wednesday">Wednesday</ion-option>\n	      <ion-option value="thursday">Thursday</ion-option>\n	      <ion-option value="friday">Friday</ion-option>\n	      <ion-option value="saturday">Saturday</ion-option>\n	      <ion-option value="sunday">Sunday</ion-option>\n	  	</ion-select>\n		</ion-item>\n		<p class="checkP">calendar</p>\n	  <ion-item class="checkCss1">\n	    <ion-label class="checkL">Show notifications</ion-label>\n	    <ion-checkbox slot="end" [(ngModel)]="calnotification"></ion-checkbox>\n	  </ion-item>\n	  <ion-item class="lastBtns">\n	    <button ion-button round class="cancelBtn" (click)="cancelComment()" item-end>CANCEL</button>\n			<button ion-button round class="postcommentBtn" (click)="saveProfileChange()" item-end>SAVE CHANGES</button>\n	  </ion-item>\n	</ion-grid>\n\n	\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* Loader */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=6.js.map