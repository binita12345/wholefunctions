webpackJsonp([12],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModalPageModule", function() { return ProfileModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_modal__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileModalPageModule = /** @class */ (function () {
    function ProfileModalPageModule() {
    }
    ProfileModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_modal__["a" /* ProfileModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_modal__["a" /* ProfileModalPage */]),
            ],
        })
    ], ProfileModalPageModule);
    return ProfileModalPageModule;
}());

//# sourceMappingURL=profile-modal.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(21);
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
 * Generated class for the ProfileModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileModalPage = /** @class */ (function () {
    function ProfileModalPage(navCtrl, navParams, modalCtrl, viewCtrl, storage, alertCtrl, serviceProvider, _sanitizer, menu, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.serviceProvider = serviceProvider;
        this._sanitizer = _sanitizer;
        this.menu = menu;
        this.app = app;
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.storage.get("userData").then(function (userData) {
            console.log("userData profile", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.profilePic = userData.response.profile_picture;
            _this.employeename = userData.response.first_name + userData.response.last_name;
            _this.position = userData.response.current_position;
            ;
        });
    }
    ProfileModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileModalPage');
    };
    ProfileModalPage.prototype.clickToGoSettingsPage = function () {
        console.log("going to settings page");
        this.viewCtrl.dismiss();
        this.navCtrl.push("SettingsPage");
    };
    ProfileModalPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    ProfileModalPage.prototype.signOutFromApp = function () {
        var _this = this;
        console.log("sign out from the app");
        // this.menu.enable(true);
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('password');
        // this.navCtrl.setRoot("LoginPage");
        this.viewCtrl.dismiss();
        var logoutObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
        };
        var alert = this.alertCtrl.create({
            title: 'Confirm logout?',
            message: 'Are you sure you want to logout from the app?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('ok clicked');
                        console.log("logout", logoutObj);
                        _this.serviceProvider.logOutApi(logoutObj).then(function (result) {
                            if (result['success'] == 4) {
                                var alert_1 = _this.alertCtrl.create({
                                    subTitle: result["message"],
                                    cssClass: 'newsFeedAlertCss',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                console.log('ok clicked');
                                                _this.navCtrl.push("LoginPage");
                                            }
                                        }
                                    ]
                                });
                                alert_1.present();
                            }
                            else if (result['success'] == 1) {
                                var alert_2 = _this.alertCtrl.create({
                                    title: _this.htmlProperty(),
                                    subTitle: result["message"],
                                    cssClass: 'newsFeedAlertCss',
                                    buttons: [
                                        {
                                            text: 'OK',
                                            handler: function () {
                                                _this.storage.clear();
                                                _this.app.getRootNav().push("LoginPage");
                                            }
                                        }
                                    ]
                                });
                                alert_2.present();
                            }
                            else if (result['success'] == 2) {
                                var alert_3 = _this.alertCtrl.create({
                                    subTitle: result['message'],
                                    buttons: ['OK']
                                });
                                alert_3.present();
                            }
                            else if (result['success'] == 0) {
                                var alert_4 = _this.alertCtrl.create({
                                    subTitle: result['message'],
                                    buttons: ['OK']
                                });
                                alert_4.present();
                            }
                            else {
                            }
                        }, function (err) {
                            console.log("err logOutApi" + JSON.stringify(err));
                            // Error log
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfileModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ProfileModalPage.prototype, "nav", void 0);
    ProfileModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile-modal',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/profile-modal/profile-modal.html"*/'<!--\n  Generated template for the ProfileModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<div>\n		<img src="assets/imgs/images.jpeg" class="imgDetail" *ngIf="profilePic == \'\'">\n      	<img src="{{profilePic}}" class="imgDetail" *ngIf="profilePic !== \'\'">\n		<ion-icon name="close" class="closeC" (click)="closeModal()"></ion-icon>\n		<div class="divAbove">\n			<h6>{{employeename}}</h6>\n			<p class="modalP">{{position}}</p>\n		</div>\n	</div>\n	<ion-item class="item1">\n		<p (click)="clickToGoSettingsPage()">SETTINGS</p>\n		<ion-icon name="ios-arrow-forward" item-end></ion-icon>\n	</ion-item>\n	<ion-item class="item2" (click)="signOutFromApp()">\n		<p>SIGN OUT</p>\n	</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/profile-modal/profile-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], ProfileModalPage);
    return ProfileModalPage;
}());

//# sourceMappingURL=profile-modal.js.map

/***/ })

});
//# sourceMappingURL=12.js.map