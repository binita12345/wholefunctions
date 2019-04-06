webpackJsonp([9],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]),
            ],
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.error = '';
        this.changePasswordForm = formBuilder.group({
            oldpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            newpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            confirmpassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage.prototype.onChange = function (ev) {
        console.log("ev", ev);
        if (this.changePasswordForm.value.newpassword != this.changePasswordForm.value.confirmpassword) {
            this.error = "Password Mismatch, Please enter the same Password as above.";
        }
        else {
            this.error = '';
        }
    };
    ResetPasswordPage.prototype.changePassword = function () {
        console.log("change password");
        this.error = '';
        if (this.changePasswordForm.value.oldpassword == '') {
            this.error = "Please enter your old password";
        }
        else if (this.changePasswordForm.value.newpassword == '') {
            this.error = "Please enter New Password";
        }
        else {
            this.error = '';
            if (this.changePasswordForm.value.newpassword != this.changePasswordForm.value.confirmpassword) {
                this.error = "Password Mismatch, Please enter the same Password as above.";
            }
            else {
                this.error = '';
                this.navCtrl.push("LoginPage");
            }
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/reset-password/reset-password.html"*/'<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="bgCss">\n\n	<div>\n    <ion-icon name="md-arrow-back" class="backArrow" navPop></ion-icon>\n		<img src="assets/imgs/Hoscom_animation.gif" class="animationImg">\n		<img src="assets/imgs/logo.png" class="logoHotel">\n	</div>\n\n	<form [formGroup]="changePasswordForm" (submit)="changePassword()" class="formCss">\n  	<ion-item class="itemCss">\n      <ion-input type="password" placeholder="Old Password" class="inputText" formControlName="oldpassword" [class.invalid]="!changePasswordForm.controls.oldpassword.valid && changePasswordForm.controls.oldpassword.dirty"></ion-input>\n    </ion-item>\n\n    <ion-item class="itemCss">\n      <ion-input type="password" placeholder="New Password" class="inputText" formControlName="newpassword" [class.invalid]="!changePasswordForm.controls.newpassword.valid && changePasswordForm.controls.newpassword.dirty"></ion-input>\n    </ion-item>\n    <div class="error-message"\n      *ngIf="!changePasswordForm.controls.newpassword.valid  && changePasswordForm.controls.newpassword.dirty">\n      <p class="parag">Your new password needs more than 6 characters.</p>\n    </div>\n\n    <ion-item class="itemCss">\n      <ion-input type="password" placeholder="Confirm Password" class="inputText" formControlName="confirmpassword" (ionChange)="onChange($event)" [class.invalid]="!changePasswordForm.controls.confirmpassword.valid && changePasswordForm.controls.confirmpassword.dirty"></ion-input>\n    </ion-item>\n    <br/>\n    <div class="error-message">\n      {{error}}\n    </div>\n\n    <br/>\n  	<button ion-button round full class="changePwdBtn" type="submit">SUBMIT</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ })

});
//# sourceMappingURL=9.js.map