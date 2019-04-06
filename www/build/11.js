webpackJsonp([11],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











;
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, serviceProvider, device, alert, loader, storage, alertCtrl, _sanitizer, actionSheetCtrl, platform, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.serviceProvider = serviceProvider;
        this.device = device;
        this.alert = alert;
        this.loader = loader;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.camera = camera;
        this.error = '';
        this.deviceInfo = {};
        this.base64Image = 'assets/imgs/camera.png';
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.deviceInfo.platform = this.device.platform;
        this.deviceInfo.token = this.device.uuid;
        this.signUpFrom = formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            dateofbirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            position: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.choosePhoto = function () {
        var _this = this;
        console.log("choose photo option");
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
    RegisterPage.prototype.takephoto = function () {
        var _this = this;
        console.log("choose photo option to take photo");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.image = imageData;
            // console.log("take photo imagedata" +JSON.stringify(imageData));
            _this.base64Image = 'data:image/png;base64,' + imageData;
            // this.photos.push(this.base64Image);
            // this.photos.reverse();
        }, function (err) {
            // Handle error
        });
    };
    RegisterPage.prototype.openGallery = function () {
        var _this = this;
        console.log("choose photo option to select from gallary");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.image = imageData;
            // console.log("gallary imagedata" +JSON.stringify(imageData));
            _this.base64Image = 'data:image/png;base64,' + imageData;
            // console.log("gallary base64Image" +this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    RegisterPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    RegisterPage.prototype.signupUser = function () {
        var _this = this;
        console.log("signup user");
        this.error = '';
        this.loader.show("Creating your Account. Please Wait");
        var signupObj = {
            "first_name": this.signUpFrom.value.firstname,
            "last_name": this.signUpFrom.value.lastname,
            "email": this.signUpFrom.value.email,
            "current_position": this.signUpFrom.value.position,
            "password": this.signUpFrom.value.password,
            "deviceType": this.deviceInfo.platform,
            "deviceToken": this.deviceInfo.token,
            "profile_picture": this.base64Image,
            "date_of_birth": this.signUpFrom.value.dateofbirth,
            "experience": '',
            "language": ''
        };
        console.log("signupObj" + JSON.stringify(signupObj));
        window.localStorage.setItem('email', this.signUpFrom.value.email);
        window.localStorage.setItem('password', this.signUpFrom.value.password);
        this.serviceProvider.signupApi(signupObj).then(function (result) {
            console.log("result signup" + JSON.stringify(result));
            // this.loader.hide();
            if (result["success"] == 0) {
                _this.loader.hide();
                _this.alert.errorAlert(result["message"]);
            }
            else if (result["success"] == 1) {
                _this.loader.hide();
                var obj_1 = result;
                console.log("obj signin" + JSON.stringify(obj_1));
                var alert_1 = _this.alertCtrl.create({
                    title: _this.htmlProperty(),
                    subTitle: obj_1["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.serviceProvider.headers.append("Authorization", obj_1.response.sessionId);
                                _this.storage.set("userData", obj_1);
                                _this.storage.set("userId", obj_1.response.user_id);
                                _this.storage.set("token", obj_1.response.sessionId);
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (result["success"] == 2) {
                _this.loader.hide();
                _this.alert.errorAlert(result["message"]);
                // this.alertFunction(result["message"]);
            }
            else {
                _this.loader.hide();
            }
        }, function (err) {
            console.log("err signup" + JSON.stringify(err));
            // Error log
        });
        // }
    };
    RegisterPage.prototype.backToLogin = function () {
        console.log("already have an account");
        this.navCtrl.push("LoginPage");
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="bgCss">\n\n	<div>\n    <ion-icon name="md-arrow-back" class="backArrow" navPop></ion-icon>\n		<img src="assets/imgs/Hoscom_animation.gif" class="animationImg">\n		<img src="assets/imgs/logo.png" class="logoHotel">\n	</div>\n\n	<div class="error-message">\n    {{error}}\n  </div>\n  <br/>\n  <form [formGroup]="signUpFrom" (submit)="signupUser()" class="formCss">\n  	<ion-item class="itemCss">\n      <ion-input type="text" placeholder="First Name" class="inputText" formControlName="firstname"></ion-input>\n    </ion-item>\n    <div class="error-message" \n      *ngIf="!signUpFrom.controls.firstname.valid  && signUpFrom.controls.firstname.dirty">\n      <p class="parag">Plaese enter first name.</p>\n    </div>\n\n    <ion-item class="itemCss">\n      <ion-input type="text" placeholder="Last Name" class="inputText" formControlName="lastname"></ion-input>\n    </ion-item>\n\n    <ion-item class="itemCss">\n      <ion-datetime class="dateInput inputText" displayFormat="DD.MM.YYYY" [(ngModel)]="myDate" placeholder="Date of Birth" formControlName="dateofbirth"></ion-datetime>\n    </ion-item>\n\n    <ion-item class="itemCss">\n      <ion-input type="text" placeholder="Current Position" class="inputText" formControlName="position"></ion-input>\n    </ion-item>\n    <br/>\n    <ion-grid class="picGrid">\n      <ion-row>\n        <ion-col class="camCss">\n          <img src="{{base64Image}}" class="camimg" (click)="choosePhoto()">\n          <p class="campara">Profile Picture</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item class="itemCss">\n      <ion-input type="email" placeholder="Email" class="inputText" formControlName="email" [class.invalid]="!signUpFrom.controls.email.valid && signUpFrom.controls.email.dirty"></ion-input>\n    </ion-item>\n    <div class="error-message" \n      *ngIf="!signUpFrom.controls.email.valid  && signUpFrom.controls.email.dirty">\n      <p>Please enter a valid email.</p>\n    </div>\n\n    <ion-item class="itemCss">\n      <ion-input type="password" placeholder="Password" class="inputText" formControlName="password" [class.invalid]="!signUpFrom.controls.password.valid && signUpFrom.controls.password.dirty"></ion-input>\n    </ion-item>\n    <div class="error-message" \n      *ngIf="!signUpFrom.controls.password.valid  && signUpFrom.controls.password.dirty">\n      <p class="parag">Your password needs more than 6 characters.</p>\n    </div>\n\n    <br/>\n\n  	<button ion-button round full class="signupBtn" type="submit">REGISTER</button>\n  </form>\n  <p class="loginP" (click)="backToLogin()">Already have an account ? Login Here</p>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* Alert */], __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* Loader */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=11.js.map