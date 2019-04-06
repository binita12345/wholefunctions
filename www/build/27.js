webpackJsonp([27],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(54);
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
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, formBuilder, serviceProvider, loader, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.serviceProvider = serviceProvider;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.error = '';
        this.forgotPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])]
        });
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.onChange = function (ev) {
        console.log("ev", ev);
        if (this.forgotPasswordForm.value.email.length > -1) {
            this.error = '';
        }
    };
    ForgotPasswordPage.prototype.goBack = function () {
        console.log("go back");
        this.navCtrl.push("LoginPage");
    };
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        console.log("forgot password");
        this.error = '';
        this.loader.show('Please Wait');
        var frgtPwdObj = {
            'email': this.forgotPasswordForm.value.email
        };
        if (this.forgotPasswordForm.value.email.length > 0) {
            this.error = '';
            this.serviceProvider.forgotPasswordApi(frgtPwdObj).then(function (data) {
                console.log("ts forgot data" + JSON.stringify(data));
                if (data["success"] == 0) {
                    _this.loader.hide();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Congratulations!',
                        subTitle: data["message"],
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
                else if (data["success"] == 1) {
                    _this.loader.hide();
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Congratulations!',
                        subTitle: data["message"],
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
                    alert_2.present();
                }
                else if (data["success"] == 2) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else {
                    _this.loader.hide();
                    _this.error = '';
                }
            }, function (err) {
                _this.loader.hide();
                console.log("this.error" + JSON.stringify(err));
            });
        }
        else {
            this.error = 'please enter your valid email address';
        }
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="bgCss">\n\n	<div>\n    <ion-icon name="md-arrow-back" class="backArrow" (click)="goBack()"></ion-icon>\n		<img src="assets/imgs/Hoscom_animation.gif" class="animationImg">\n		<img src="assets/imgs/logo.png" class="logoHotel">\n	</div>\n	\n	<br/>\n  <br/>\n	\n\n	<form [formGroup]="forgotPasswordForm" (submit)="forgotPassword()" class="formCss">\n		<p class="emailP">Just Write in your email address and we will send you link to resend your password</p>\n		<br/>\n    <ion-item class="itemCss"> \n	    <ion-input type="email" placeholder="Email" formControlName="email" class="inputText" (ionChange)="onChange($event)" [class.invalid]="!forgotPasswordForm.controls.email.valid && forgotPasswordForm.controls.email.dirty"></ion-input>\n	  </ion-item>\n    <div class="error-message" *ngIf="!forgotPasswordForm.controls.email.valid  && forgotPasswordForm.controls.email.dirty">\n      <p class="parag">Please enter a valid email.</p>\n    </div>\n    <br/>\n    <div class="error-message">\n	    {{error}}\n	  </div>\n    \n    <button ion-button round full class="forgotBtn" type="submit">SUBMIT</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* Loader */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=27.js.map