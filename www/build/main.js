webpackJsonp([44],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Alert = /** @class */ (function () {
    function Alert(alertCtrl, _sanitizer) {
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        console.log('Hello Alert Provider');
    }
    Alert.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    Alert.prototype.successAlert = function (message) {
        this.alert = this.alertCtrl.create({
            title: this.htmlProperty(),
            subTitle: message,
            cssClass: 'newsFeedAlertCss',
            buttons: ['OK']
        });
        this.alert.present();
    };
    Alert.prototype.successAlertHide = function () {
        this.alert.dismiss();
    };
    Alert.prototype.errorAlert = function (message) {
        this.alert = this.alertCtrl.create({
            subTitle: message,
            cssClass: 'checkAlertCss',
            buttons: ['OK']
        });
        this.alert.present();
    };
    Alert.prototype.errorAlertHide = function () {
        this.alert.dismiss();
    };
    Alert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], Alert);
    return Alert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/allocation-list/allocation-list.module": [
		439,
		43
	],
	"../pages/breakage/breakage.module": [
		440,
		42
	],
	"../pages/calendar/calendar.module": [
		441,
		41
	],
	"../pages/cleaning-plan/cleaning-plan.module": [
		442,
		40
	],
	"../pages/create-new-breakage/create-new-breakage.module": [
		443,
		39
	],
	"../pages/create-new-calendar-event/create-new-calendar-event.module": [
		444,
		38
	],
	"../pages/create-new-challenge/create-new-challenge.module": [
		445,
		37
	],
	"../pages/create-new-lost-n-found/create-new-lost-n-found.module": [
		446,
		36
	],
	"../pages/create-new-maintenance/create-new-maintenance.module": [
		447,
		35
	],
	"../pages/create-new-note/create-new-note.module": [
		448,
		34
	],
	"../pages/create-new-private-message/create-new-private-message.module": [
		449,
		0
	],
	"../pages/create-new-wishes/create-new-wishes.module": [
		450,
		33
	],
	"../pages/create-newsfeed-entry/create-newsfeed-entry.module": [
		451,
		32
	],
	"../pages/dinner/dinner.module": [
		452,
		31
	],
	"../pages/duty-roster-employee-profile/duty-roster-employee-profile.module": [
		453,
		30
	],
	"../pages/duty-roster/duty-roster.module": [
		454,
		29
	],
	"../pages/f-and-b/f-and-b.module": [
		455,
		28
	],
	"../pages/forgot-password/forgot-password.module": [
		456,
		27
	],
	"../pages/general/general.module": [
		457,
		26
	],
	"../pages/guest-preferences/guest-preferences.module": [
		458,
		25
	],
	"../pages/learning-platform/learning-platform.module": [
		459,
		24
	],
	"../pages/login/login.module": [
		295
	],
	"../pages/lostnfound/lostnfound.module": [
		460,
		23
	],
	"../pages/maintenance/maintenance.module": [
		461,
		22
	],
	"../pages/my-department/my-department.module": [
		462,
		21
	],
	"../pages/news-feed/news-feed.module": [
		299
	],
	"../pages/newsfeed-detail/newsfeed-detail.module": [
		463,
		20
	],
	"../pages/notes/notes.module": [
		464,
		19
	],
	"../pages/order-list-modal/order-list-modal.module": [
		465,
		18
	],
	"../pages/other/other.module": [
		466,
		17
	],
	"../pages/personal-information/personal-information.module": [
		467,
		16
	],
	"../pages/previous-order/previous-order.module": [
		468,
		15
	],
	"../pages/private-message-detail/private-message-detail.module": [
		469,
		14
	],
	"../pages/private-message/private-message.module": [
		470,
		13
	],
	"../pages/profile-modal/profile-modal.module": [
		471,
		12
	],
	"../pages/register/register.module": [
		472,
		11
	],
	"../pages/requisition/requisition.module": [
		473,
		10
	],
	"../pages/reset-password/reset-password.module": [
		474,
		9
	],
	"../pages/restaurant/restaurant.module": [
		475,
		8
	],
	"../pages/search-user-to-message/search-user-to-message.module": [
		476,
		7
	],
	"../pages/settings/settings.module": [
		477,
		6
	],
	"../pages/study-certificate/study-certificate.module": [
		478,
		5
	],
	"../pages/study-detail/study-detail.module": [
		479,
		4
	],
	"../pages/study-f-n-b/study-f-n-b.module": [
		480,
		3
	],
	"../pages/study-tests/study-tests.module": [
		481,
		2
	],
	"../pages/sub-study-menu-list/sub-study-menu-list.module": [
		482,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityProvider; });
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


/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI. */
var UtilityProvider = /** @class */ (function () {
    function UtilityProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    //Show popup alert
    UtilityProvider.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    UtilityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], UtilityProvider);
    return UtilityProvider;
}());

//# sourceMappingURL=utility.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettersandgettersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the SettersandgettersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettersandgettersProvider = /** @class */ (function () {
    function SettersandgettersProvider() {
        console.log('Hello SettersandgettersProvider Provider');
    }
    Object.defineProperty(SettersandgettersProvider.prototype, "Email", {
        get: function () {
            return this.email;
        },
        set: function (val) {
            this.email = val;
        },
        enumerable: true,
        configurable: true
    });
    SettersandgettersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettersandgettersProvider);
    return SettersandgettersProvider;
}());

//# sourceMappingURL=settersandgetters.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedPageModule", function() { return NewsFeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_feed__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsFeedPageModule = /** @class */ (function () {
    function NewsFeedPageModule() {
    }
    NewsFeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_feed__["a" /* NewsFeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_feed__["a" /* NewsFeedPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], NewsFeedPageModule);
    return NewsFeedPageModule;
}());

//# sourceMappingURL=news-feed.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.progress = '87';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}\n    </div>\n</div>'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderComponentModule = /** @class */ (function () {
    function HeaderComponentModule() {
    }
    HeaderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderComponent */]]
        })
    ], HeaderComponentModule);
    return HeaderComponentModule;
}());

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_bar__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressBarComponentModule = /** @class */ (function () {
    function ProgressBarComponentModule() {
    }
    ProgressBarComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progress_bar__["a" /* ProgressBarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__progress_bar__["a" /* ProgressBarComponent */]
            ]
        })
    ], ProgressBarComponentModule);
    return ProgressBarComponentModule;
}());

//# sourceMappingURL=progress-bar.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_news_feed_news_feed__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_feed_news_feed_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fingerprint_aio_ngx__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_settersandgetters_settersandgetters__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_utility_utility__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_scrollable_tabs_scrollable_tabs__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_picker__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_path__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_ngx__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_chooser_ngx__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_alert_alert__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_base64__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_date_picker__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_calendar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic2_rating__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_progress_bar_progress_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_progress_bar_progress_bar_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file_opener_ngx__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__components_scrollable_tabs_scrollable_tabs__["a" /* ScrollableTabs */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/allocation-list/allocation-list.module#AllocationListPageModule', name: 'AllocationListPage', segment: 'allocation-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/breakage/breakage.module#BreakagePageModule', name: 'BreakagePage', segment: 'breakage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cleaning-plan/cleaning-plan.module#CleaningPlanPageModule', name: 'CleaningPlanPage', segment: 'cleaning-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-breakage/create-new-breakage.module#CreateNewBreakagePageModule', name: 'CreateNewBreakagePage', segment: 'create-new-breakage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-calendar-event/create-new-calendar-event.module#CreateNewCalendarEventPageModule', name: 'CreateNewCalendarEventPage', segment: 'create-new-calendar-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-challenge/create-new-challenge.module#CreateNewChallengePageModule', name: 'CreateNewChallengePage', segment: 'create-new-challenge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-lost-n-found/create-new-lost-n-found.module#CreateNewLostNFoundPageModule', name: 'CreateNewLostNFoundPage', segment: 'create-new-lost-n-found', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-maintenance/create-new-maintenance.module#CreateNewMaintenancePageModule', name: 'CreateNewMaintenancePage', segment: 'create-new-maintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-note/create-new-note.module#CreateNewNotePageModule', name: 'CreateNewNotePage', segment: 'create-new-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-private-message/create-new-private-message.module#CreateNewPrivateMessagePageModule', name: 'CreateNewPrivateMessagePage', segment: 'create-new-private-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-new-wishes/create-new-wishes.module#CreateNewWishesPageModule', name: 'CreateNewWishesPage', segment: 'create-new-wishes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-newsfeed-entry/create-newsfeed-entry.module#CreateNewsfeedEntryPageModule', name: 'CreateNewsfeedEntryPage', segment: 'create-newsfeed-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dinner/dinner.module#DinnerPageModule', name: 'DinnerPage', segment: 'dinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duty-roster-employee-profile/duty-roster-employee-profile.module#DutyRosterEmployeeProfilePageModule', name: 'DutyRosterEmployeeProfilePage', segment: 'duty-roster-employee-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duty-roster/duty-roster.module#DutyRosterPageModule', name: 'DutyRosterPage', segment: 'duty-roster', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/f-and-b/f-and-b.module#FAndBPageModule', name: 'FAndBPage', segment: 'f-and-b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/general/general.module#GeneralPageModule', name: 'GeneralPage', segment: 'general', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guest-preferences/guest-preferences.module#GuestPreferencesPageModule', name: 'GuestPreferencesPage', segment: 'guest-preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/learning-platform/learning-platform.module#LearningPlatformPageModule', name: 'LearningPlatformPage', segment: 'learning-platform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lostnfound/lostnfound.module#LostnfoundPageModule', name: 'LostnfoundPage', segment: 'lostnfound', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintenance/maintenance.module#MaintenancePageModule', name: 'MaintenancePage', segment: 'maintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-department/my-department.module#MyDepartmentPageModule', name: 'MyDepartmentPage', segment: 'my-department', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-feed/news-feed.module#NewsFeedPageModule', name: 'NewsFeedPage', segment: 'news-feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newsfeed-detail/newsfeed-detail.module#NewsfeedDetailPageModule', name: 'NewsfeedDetailPage', segment: 'newsfeed-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes/notes.module#NotesPageModule', name: 'NotesPage', segment: 'notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-list-modal/order-list-modal.module#OrderListModalPageModule', name: 'OrderListModalPage', segment: 'order-list-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-information/personal-information.module#PersonalInformationPageModule', name: 'PersonalInformationPage', segment: 'personal-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/previous-order/previous-order.module#PreviousOrderPageModule', name: 'PreviousOrderPage', segment: 'previous-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/private-message-detail/private-message-detail.module#PrivateMessageDetailPageModule', name: 'PrivateMessageDetailPage', segment: 'private-message-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/private-message/private-message.module#PrivateMessagePageModule', name: 'PrivateMessagePage', segment: 'private-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-modal/profile-modal.module#ProfileModalPageModule', name: 'ProfileModalPage', segment: 'profile-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requisition/requisition.module#RequisitionPageModule', name: 'RequisitionPage', segment: 'requisition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant/restaurant.module#RestaurantPageModule', name: 'RestaurantPage', segment: 'restaurant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-user-to-message/search-user-to-message.module#SearchUserToMessagePageModule', name: 'SearchUserToMessagePage', segment: 'search-user-to-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study-certificate/study-certificate.module#StudyCertificatePageModule', name: 'StudyCertificatePage', segment: 'study-certificate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study-detail/study-detail.module#StudyDetailPageModule', name: 'StudyDetailPage', segment: 'study-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study-f-n-b/study-f-n-b.module#StudyFNBPageModule', name: 'StudyFNBPage', segment: 'study-f-n-b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study-tests/study-tests.module#StudyTestsPageModule', name: 'StudyTestsPage', segment: 'study-tests', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sub-study-menu-list/sub-study-menu-list.module#SubStudyMenuListPageModule', name: 'SubStudyMenuListPage', segment: 'sub-study-menu-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_30__components_progress_bar_progress_bar_module__["a" /* ProgressBarComponentModule */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__pages_news_feed_news_feed_module__["NewsFeedPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_news_feed_news_feed__["a" /* NewsFeedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_settersandgetters_settersandgetters__["a" /* SettersandgettersProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_fingerprint_aio_ngx__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_12__providers_utility_utility__["a" /* UtilityProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_picker__["a" /* IOSFilePicker */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_chooser_ngx__["a" /* Chooser */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__providers_loader_loader__["a" /* Loader */],
                __WEBPACK_IMPORTED_MODULE_24__providers_alert_alert__["a" /* Alert */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_file_opener_ngx__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 163,
	"./af.js": 163,
	"./ar": 164,
	"./ar-dz": 165,
	"./ar-dz.js": 165,
	"./ar-kw": 166,
	"./ar-kw.js": 166,
	"./ar-ly": 167,
	"./ar-ly.js": 167,
	"./ar-ma": 168,
	"./ar-ma.js": 168,
	"./ar-sa": 169,
	"./ar-sa.js": 169,
	"./ar-tn": 170,
	"./ar-tn.js": 170,
	"./ar.js": 164,
	"./az": 171,
	"./az.js": 171,
	"./be": 172,
	"./be.js": 172,
	"./bg": 173,
	"./bg.js": 173,
	"./bm": 174,
	"./bm.js": 174,
	"./bn": 175,
	"./bn.js": 175,
	"./bo": 176,
	"./bo.js": 176,
	"./br": 177,
	"./br.js": 177,
	"./bs": 178,
	"./bs.js": 178,
	"./ca": 179,
	"./ca.js": 179,
	"./cs": 180,
	"./cs.js": 180,
	"./cv": 181,
	"./cv.js": 181,
	"./cy": 182,
	"./cy.js": 182,
	"./da": 183,
	"./da.js": 183,
	"./de": 184,
	"./de-at": 185,
	"./de-at.js": 185,
	"./de-ch": 186,
	"./de-ch.js": 186,
	"./de.js": 184,
	"./dv": 187,
	"./dv.js": 187,
	"./el": 188,
	"./el.js": 188,
	"./en-SG": 189,
	"./en-SG.js": 189,
	"./en-au": 190,
	"./en-au.js": 190,
	"./en-ca": 191,
	"./en-ca.js": 191,
	"./en-gb": 192,
	"./en-gb.js": 192,
	"./en-ie": 193,
	"./en-ie.js": 193,
	"./en-il": 194,
	"./en-il.js": 194,
	"./en-nz": 195,
	"./en-nz.js": 195,
	"./eo": 196,
	"./eo.js": 196,
	"./es": 197,
	"./es-do": 198,
	"./es-do.js": 198,
	"./es-us": 199,
	"./es-us.js": 199,
	"./es.js": 197,
	"./et": 200,
	"./et.js": 200,
	"./eu": 201,
	"./eu.js": 201,
	"./fa": 202,
	"./fa.js": 202,
	"./fi": 203,
	"./fi.js": 203,
	"./fo": 204,
	"./fo.js": 204,
	"./fr": 205,
	"./fr-ca": 206,
	"./fr-ca.js": 206,
	"./fr-ch": 207,
	"./fr-ch.js": 207,
	"./fr.js": 205,
	"./fy": 208,
	"./fy.js": 208,
	"./ga": 209,
	"./ga.js": 209,
	"./gd": 210,
	"./gd.js": 210,
	"./gl": 211,
	"./gl.js": 211,
	"./gom-latn": 212,
	"./gom-latn.js": 212,
	"./gu": 213,
	"./gu.js": 213,
	"./he": 214,
	"./he.js": 214,
	"./hi": 215,
	"./hi.js": 215,
	"./hr": 216,
	"./hr.js": 216,
	"./hu": 217,
	"./hu.js": 217,
	"./hy-am": 218,
	"./hy-am.js": 218,
	"./id": 219,
	"./id.js": 219,
	"./is": 220,
	"./is.js": 220,
	"./it": 221,
	"./it-ch": 222,
	"./it-ch.js": 222,
	"./it.js": 221,
	"./ja": 223,
	"./ja.js": 223,
	"./jv": 224,
	"./jv.js": 224,
	"./ka": 225,
	"./ka.js": 225,
	"./kk": 226,
	"./kk.js": 226,
	"./km": 227,
	"./km.js": 227,
	"./kn": 228,
	"./kn.js": 228,
	"./ko": 229,
	"./ko.js": 229,
	"./ku": 230,
	"./ku.js": 230,
	"./ky": 231,
	"./ky.js": 231,
	"./lb": 232,
	"./lb.js": 232,
	"./lo": 233,
	"./lo.js": 233,
	"./lt": 234,
	"./lt.js": 234,
	"./lv": 235,
	"./lv.js": 235,
	"./me": 236,
	"./me.js": 236,
	"./mi": 237,
	"./mi.js": 237,
	"./mk": 238,
	"./mk.js": 238,
	"./ml": 239,
	"./ml.js": 239,
	"./mn": 240,
	"./mn.js": 240,
	"./mr": 241,
	"./mr.js": 241,
	"./ms": 242,
	"./ms-my": 243,
	"./ms-my.js": 243,
	"./ms.js": 242,
	"./mt": 244,
	"./mt.js": 244,
	"./my": 245,
	"./my.js": 245,
	"./nb": 246,
	"./nb.js": 246,
	"./ne": 247,
	"./ne.js": 247,
	"./nl": 248,
	"./nl-be": 249,
	"./nl-be.js": 249,
	"./nl.js": 248,
	"./nn": 250,
	"./nn.js": 250,
	"./pa-in": 251,
	"./pa-in.js": 251,
	"./pl": 252,
	"./pl.js": 252,
	"./pt": 253,
	"./pt-br": 254,
	"./pt-br.js": 254,
	"./pt.js": 253,
	"./ro": 255,
	"./ro.js": 255,
	"./ru": 256,
	"./ru.js": 256,
	"./sd": 257,
	"./sd.js": 257,
	"./se": 258,
	"./se.js": 258,
	"./si": 259,
	"./si.js": 259,
	"./sk": 260,
	"./sk.js": 260,
	"./sl": 261,
	"./sl.js": 261,
	"./sq": 262,
	"./sq.js": 262,
	"./sr": 263,
	"./sr-cyrl": 264,
	"./sr-cyrl.js": 264,
	"./sr.js": 263,
	"./ss": 265,
	"./ss.js": 265,
	"./sv": 266,
	"./sv.js": 266,
	"./sw": 267,
	"./sw.js": 267,
	"./ta": 268,
	"./ta.js": 268,
	"./te": 269,
	"./te.js": 269,
	"./tet": 270,
	"./tet.js": 270,
	"./tg": 271,
	"./tg.js": 271,
	"./th": 272,
	"./th.js": 272,
	"./tl-ph": 273,
	"./tl-ph.js": 273,
	"./tlh": 274,
	"./tlh.js": 274,
	"./tr": 275,
	"./tr.js": 275,
	"./tzl": 276,
	"./tzl.js": 276,
	"./tzm": 277,
	"./tzm-latn": 278,
	"./tzm-latn.js": 278,
	"./tzm.js": 277,
	"./ug-cn": 279,
	"./ug-cn.js": 279,
	"./uk": 280,
	"./uk.js": 280,
	"./ur": 281,
	"./ur.js": 281,
	"./uz": 282,
	"./uz-latn": 283,
	"./uz-latn.js": 283,
	"./uz.js": 282,
	"./vi": 284,
	"./vi.js": 284,
	"./x-pseudo": 285,
	"./x-pseudo.js": 285,
	"./yo": 286,
	"./yo.js": 286,
	"./zh-cn": 287,
	"./zh-cn.js": 287,
	"./zh-hk": 288,
	"./zh-hk.js": 288,
	"./zh-tw": 289,
	"./zh-tw.js": 289
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 402;

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
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
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalCtrl, storage, navCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        console.log('Hello HeaderComponent Component');
        this.text = 'Hello World';
        var todayDate = new Date();
        var time = __WEBPACK_IMPORTED_MODULE_2_moment___default()(todayDate).format('hh:mm');
        // console.log('today default time is: ', time);
        this.timeH = time;
        this.storage.get("userData").then(function (userData) {
            // console.log("userData header", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.profilePic = userData.response.profile_picture;
        });
    }
    HeaderComponent.prototype.openProfileModal = function () {
        // console.log("open profile modal");
        // this.navCtrl.setRoot("LoginPage");
        var profileModal = this.modalCtrl.create("ProfileModalPage");
        profileModal.present();
        profileModal.onDidDismiss(function (data) {
            // console.log(data);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/components/header/header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<ion-header>\n  <ion-navbar>   \n  	\n    <ion-grid>\n      <ion-row>\n        <ion-col col-1 col-xl-1 class="colTime">\n        	<img src="assets/imgs/menuicon/menu.png" class="menuImg" menuToggle>\n        </ion-col>\n        <ion-col col-7 col-xl-7 class="colTime">\n        	<ion-title class="titleCss">{{title}}</ion-title>\n        </ion-col>\n        <ion-col col-2 col-xl-2 class="colTime">\n        	<ion-label class="labelCss">{{timeH}} h</ion-label>\n        </ion-col>\n        <ion-col col-1 col-xl-1 class="colTime">\n        	<img src="assets/imgs/pie.png" class="menuImg" class="pieImg">\n        </ion-col>\n        <ion-col col-1 col-xl-1 class="profilCol">\n        	<img src="assets/imgs/user.png" class="profileImg" (click)="openProfileModal()" *ngIf="profilePic == \'\'">\n          <img src="{{profilePic}}" class="profileImg" (click)="openProfileModal()" *ngIf="profilePic !== \'\'">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header> '/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_feed_news_feed__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        var _this = this;
        this.menu = menu;
        // rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.initializeApp(statusBar, splashScreen);
            statusBar.styleDefault();
            if (platform.is('android')) {
                statusBar.backgroundColorByHexString('#000000');
            }
            statusBar.overlaysWebView(false);
            splashScreen.hide();
        });
        this.pages = [
            { image: 'assets/imgs/menuicon/newsfeed.png', otherimage: 'assets/imgs/menuicon/newsfeed1.png', title: 'NEWS FEED', component: 'NewsFeedPage' },
            { image: 'assets/imgs/menuicon/dutyroster.png', otherimage: 'assets/imgs/menuicon/dutyroster1.png', title: 'DUTY ROSTER', component: 'DutyRosterPage' },
            { image: 'assets/imgs/menuicon/calendar.png', otherimage: 'assets/imgs/menuicon/calendar1.png', title: 'CALENDAR', component: 'CalendarPage' },
            { image: 'assets/imgs/menuicon/mydepartment.png', otherimage: 'assets/imgs/menuicon/mydepartment1.png', title: 'MY DEPARTMENT', component: 'MyDepartmentPage' },
            { image: 'assets/imgs/menuicon/learningpltfrm.png', otherimage: 'assets/imgs/menuicon/learningpltfrm1.png', title: 'LEARNING PLATFORM', component: 'LearningPlatformPage' },
            { image: 'assets/imgs/menuicon/notes.png', otherimage: 'assets/imgs/menuicon/notes1.png', title: 'NOTES', component: 'NotesPage' },
            { image: 'assets/imgs/menuicon/lostnfound.png', otherimage: 'assets/imgs/menuicon/lostnfound1.png', title: 'LOST & FOUND', component: 'LostnfoundPage' },
            { image: 'assets/imgs/menuicon/maintenance.png', otherimage: 'assets/imgs/menuicon/maintenance1.png', title: 'MAINTENANCE', component: 'MaintenancePage' },
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.selectedmenu = page.title;
        if (page.component) {
            this.nav.setRoot(page.component);
            this.menu.close();
        }
    };
    MyApp.prototype.closeMenuPage = function () {
        this.menu.close();
    };
    MyApp.prototype.initializeApp = function (statusBar, splashScreen) {
        var email = window.localStorage.getItem('email') ? window.localStorage.getItem('email') : '';
        var password = window.localStorage.getItem('password') ? window.localStorage.getItem('password') : '';
        if (email == window.localStorage.getItem('email') && password == window.localStorage.getItem('password')) {
            console.log("already logged in");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_news_feed_news_feed__["a" /* NewsFeedPage */]);
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/app/app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n\n<ion-menu [content]="content" side="left" persistent="true" type="overlay">\n  \n  <ion-content style="background-color: #040655;">\n    <div class="menuDivDefault" (click)="closeMenuPage()">\n      <img class="menuImgsdefault" src="assets/imgs/menuicon/cancel.png"/>\n    </div>\n    <div class="menuDiv" *ngFor="let p of pages; let idx = index" (click)="openPage(p, idx)" [ngClass]="{\'selectedMenu\' : (p.title == selectedmenu)}" [class.selected]="idx === currentSelected">\n      <img class="menuImgs" src="{{p.image}}"/>\n      <img class="menuImgs1" src="{{p.otherimage}}"/>\n      <p class="name">{{p.title}}</p>\n    </div>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableTabs; });
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


var ScrollableTabs = /** @class */ (function () {
    function ScrollableTabs(elemRef, renderer) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.opts = {};
        this.tabs = [];
    }
    ScrollableTabs.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('opts')) {
            if (changes['opts'].currentValue.refresh) {
                setTimeout(function () {
                    _this.setAnchorStyles();
                    _this.scrollToselectedTab();
                }, 300);
            }
        }
    };
    ScrollableTabs.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.nativeTabbar = this.ionTabs._tabbar.nativeElement;
        this.tabs = this.ionTabs._tabs;
        this.currentTabIndex = typeof (this.ionTabs.selectedIndex) == "undefined" ? 0 : this.ionTabs.selectedIndex;
        this.ionTabs.ionChange.subscribe(function () {
            _this.scrollToselectedTab();
        });
        var _loop_1 = function (i) {
            this_1.tabs[i].ionSelect.subscribe(function () {
                _this.currentTabIndex = i;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.length; i++) {
            _loop_1(i);
        }
        // set tabbar overflow-x: scroll
        this.renderer.setElementStyle(this.nativeTabbar, "overflow-x", "scroll");
        // set tabbar overflow-y: hidden
        this.renderer.setElementStyle(this.nativeTabbar, "overflow-y", "hidden");
        this.setAnchorStyles();
        this.scrollToselectedTab();
    };
    ScrollableTabs.prototype.onResize = function (event) {
        var _this = this;
        this.setAnchorStyles();
        setTimeout(function () {
            _this.scrollToselectedTab();
        }, 300);
    };
    ScrollableTabs.prototype.setAnchorStyles = function () {
        if (typeof (this.nativeTabbar) != "undefined") {
            var tabBar_width = this.nativeTabbar.clientWidth;
            var numOfTabs = this.tabs.length;
            var numOfVisibleAnchors = 0;
            var sumOfVisibleAnchorWidth = 0;
            // loop through tab elements in tabs
            for (var i = 0; i < numOfTabs; i++) {
                var element = this.nativeTabbar.children[i];
                // when Tab visible (effecting show property)
                if (this.tabs[i]._isShown) {
                    numOfVisibleAnchors++;
                    // set <a> display: inline-table
                    this.renderer.setElementStyle(element, 'display', 'inline-table');
                    // set <a> width: 6rem
                    this.renderer.setElementStyle(element, 'width', '6rem');
                    // extra padding for title-only tags only
                    if (element.classList.contains("has-title-only")) {
                        // set <a> padding-top: 1.5rem
                        this.renderer.setElementStyle(element, 'padding-top', '1.5rem');
                    }
                    sumOfVisibleAnchorWidth += element.clientWidth;
                }
                else {
                    // set <a> display: none
                    this.renderer.setElementStyle(element, 'display', 'none');
                }
            }
            // to prevent extra space at end
            if (sumOfVisibleAnchorWidth < tabBar_width) {
                var anchorWidth = tabBar_width / numOfVisibleAnchors;
                for (var i = 0; i < numOfTabs; i++) {
                    var element = this.nativeTabbar.children[i];
                    // when Tab not not visible effecting show property
                    if (!element.classList.contains("tab-hidden")) {
                        this.renderer.setElementStyle(element, 'width', anchorWidth + 'px');
                    }
                }
            }
        }
    };
    ScrollableTabs.prototype.scrollToselectedTab = function () {
        if (typeof this.nativeTabbar != 'undefined') {
            var tabBar_width = this.nativeTabbar.clientWidth;
            var selectedTab = this.nativeTabbar.children[this.currentTabIndex];
            var selectedTab_Width = selectedTab.clientWidth;
            var selectedTab_LeftOffset = document.getElementById(selectedTab.id).offsetLeft;
            var selectedTab_mid = selectedTab_LeftOffset + (selectedTab_Width / 2);
            var newScrollLeft = selectedTab_mid - (tabBar_width / 2);
            this.scrollXTo(newScrollLeft, 300).then(function () { });
        }
    };
    ScrollableTabs.prototype.scrollXTo = function (x, duration) {
        if (duration === void 0) { duration = 300; }
        // scroll animation loop w/ easing
        var tabbar = this.nativeTabbar;
        if (!tabbar) {
            // invalid element
            return Promise.resolve();
        }
        x = x || 0;
        var originalRaf = (window[window['Zone']['__symbol__']('requestAnimationFrame')] || window[window['Zone']['__symbol__']('webkitRequestAnimationFrame')]);
        var nativeRaf = originalRaf !== undefined ? originalRaf['bind'](window) : window.requestAnimationFrame.bind(window);
        var fromX = tabbar.scrollLeft;
        var maxAttempts = (duration / 16) + 100;
        return new Promise(function (resolve) {
            var startTime;
            var attempts = 0;
            var isPlaying;
            // scroll loop
            function step() {
                attempts++;
                if (!tabbar || !isPlaying || attempts > maxAttempts) {
                    isPlaying = false;
                    resolve();
                    return;
                }
                var time = Math.min(1, ((Date.now() - startTime) / duration));
                // where .5 would be 50% of time on a linear scale easedT gives a
                // fraction based on the easing method
                var easedT = (--time) * time * time + 1;
                if (fromX !== x) {
                    tabbar.scrollLeft = Math.floor((easedT * (x - fromX)) + fromX);
                }
                if (easedT < 1) {
                    nativeRaf(step);
                }
                else {
                    // done
                    resolve();
                }
            }
            // start scroll loop
            isPlaying = true;
            // chill out for a frame first
            nativeRaf(function () {
                startTime = Date.now();
                nativeRaf(step);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scrollable-tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Tabs */])
    ], ScrollableTabs.prototype, "ionTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('opts'),
        __metadata("design:type", Object)
    ], ScrollableTabs.prototype, "opts", void 0);
    ScrollableTabs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[scrollable-tabs]',
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], ScrollableTabs);
    return ScrollableTabs;
}());

//# sourceMappingURL=scrollable-tabs.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = 'https://apolloshine.com/hoscom/webservices/';
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        console.log('Hello ServiceProvider Provider');
        storage.get("token").then(function (token) {
            _this.token = token;
            if (token) {
                _this.headers.append('Access-Control-Allow-Origin', '*');
                _this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                _this.headers.append('Accept', 'application/json');
                _this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                _this.headers.append('Content-Type', 'application/json');
                // this.headers.append('Content-Type','multipart/form-data');
                _this.headers.append("Authorization", token);
            }
        });
    }
    // This api is used for sign up in application.
    ServiceProvider.prototype.signupApi = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'signup.php', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used for login in application.
    ServiceProvider.prototype.loginApi = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'login.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used for forgot Password in application.
    ServiceProvider.prototype.forgotPasswordApi = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'forgotPassword.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to create newsfeed in application.
    ServiceProvider.prototype.createNewsfeedApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_newsfeed.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display newsfeed in application.
    ServiceProvider.prototype.displayNewsfeedApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'newsfeed.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display single newsfeed in application.
    ServiceProvider.prototype.singlefeedApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'singlefeed.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add comment in application.
    ServiceProvider.prototype.addcommentApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_comment.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get list of user in application.
    ServiceProvider.prototype.userListApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'userlist.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add private message in application.
    ServiceProvider.prototype.addPrivateMessageApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_private_message.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get list of private message in application.
    ServiceProvider.prototype.displayPrivateMessageApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'privatemessage.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to read nesfeed in application.
    ServiceProvider.prototype.readNewsfeedApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'newsfeed_read.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to read private message in application.
    ServiceProvider.prototype.readPrivateMessageApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'privatemessage_read.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get all department in application.
    ServiceProvider.prototype.allDepartmentApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'all_department.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get all groups in application.
    ServiceProvider.prototype.allGroupsApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'all_group.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display maintenance list in application.
    ServiceProvider.prototype.displayMaintenanceApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'maintanance.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add new maintenance in application.
    ServiceProvider.prototype.addMaintenanceApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_maintanance.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get all current lost n found list in application.
    ServiceProvider.prototype.currentLostNFoundApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'current_lost_found.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get all archive lost n found list in application.
    ServiceProvider.prototype.archiveLostNFoundApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'archive_lost_found.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to return and restore lost n found list in application.
    ServiceProvider.prototype.returnLostNFoundApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'lost_found_return-restore.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add new lost n found in application.
    ServiceProvider.prototype.addLostNFoundApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_lost_found.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add new notes in application.
    ServiceProvider.prototype.addNotesApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_notes.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to delete notes from list list in application.
    ServiceProvider.prototype.deleteNotesApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'notes_del-restore.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get current notes list in application.
    ServiceProvider.prototype.currentNotesApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'current_notes.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get archive notes list in application.
    ServiceProvider.prototype.archiveNotesApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'archive_notes.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display cleaning plans list in application.
    ServiceProvider.prototype.displayCleaningPlanApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'cleaningplan.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to update cleaning plan from list in application.
    ServiceProvider.prototype.updateCleaningPlanApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'update_cleaning_status.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display brakage list in application.
    ServiceProvider.prototype.displayBreakageApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'breakage.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to delete breakage from list in application.
    ServiceProvider.prototype.deleteBreakageApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'delete_breakage.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add breakage in application.
    ServiceProvider.prototype.addBreakageApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_breakage.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display breakage glass products list in application.
    ServiceProvider.prototype.breakageGlassProductsApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'breakage_glass_product.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display breakage china products list in application.
    ServiceProvider.prototype.breakageChinaProductsApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'breakage_china_product.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to display breakage wine products list in application.
    ServiceProvider.prototype.breakageWineProductsApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'breakage_dring_product.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to log out from the app.
    ServiceProvider.prototype.logOutApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'logout.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get food menu list of hotel.
    ServiceProvider.prototype.foodMenuApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'my_department_food.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get drink menu list of hotel.
    ServiceProvider.prototype.drinkMenuApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'my_department_drink.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get requisition all wine data of hotel.
    ServiceProvider.prototype.wineRequisitionApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'drink_requision.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add wine order of hotel.
    ServiceProvider.prototype.addWineOrderApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_wine_order.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to show number of items in cart of hotel.
    ServiceProvider.prototype.cartTableApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'cart.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to remove cart item from order list modal of hotel.
    ServiceProvider.prototype.removecartItemApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'remove_cart_item.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to place order of hotel.
    ServiceProvider.prototype.orderApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'order.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get previous order of hotel.
    ServiceProvider.prototype.previousOrderApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'previous_order.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get allocation list of hotel.
    ServiceProvider.prototype.allocationListApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'allocationlist.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to add event of hotel.
    ServiceProvider.prototype.addEventApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'add_event.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get event list of hotel.
    ServiceProvider.prototype.eventListApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'calender_event.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to get event list of hotel.
    ServiceProvider.prototype.updateUserProfileApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'update_user.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    // This api is used to update user profile of hotel.
    ServiceProvider.prototype.changePasswordApi = function (data) {
        var _this = this;
        //console.log("data", data);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + 'change_password.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Loader = /** @class */ (function () {
    function Loader(loading) {
        this.loading = loading;
        console.log('Hello Loader Provider');
    }
    Loader.prototype.show = function (message) {
        this.loader = this.loading.create({ content: message });
        this.loader.present();
    };
    Loader.prototype.hide = function () {
        this.loader.dismiss();
    };
    Loader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Loader);
    return Loader;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio_ngx__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settersandgetters_settersandgetters__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_alert_alert__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(21);
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
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, utility, loader, faio, setAndGet, serviceProvider, alertCtrl, storage, device, alert, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.loader = loader;
        this.faio = faio;
        this.setAndGet = setAndGet;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.device = device;
        this.alert = alert;
        this._sanitizer = _sanitizer;
        this.deviceInfo = {};
        this.error = '';
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.deviceInfo.platform = this.device.platform;
        this.deviceInfo.token = this.device.uuid;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.loginForm.controls.email.setValue('binita.sensussoft@gmail.com');
        this.loginForm.controls.password.setValue('123456');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    LoginPage.prototype.appLogin = function () {
        var _this = this;
        this.error = "";
        this.loader.show("Logging In. Please Wait...");
        var loginObj = {
            "email": this.loginForm.value.email,
            "password": this.loginForm.value.password,
            "deviceType": this.deviceInfo.platform,
            "device_token": this.deviceInfo.token
        };
        console.log("loginObj" + JSON.stringify(loginObj));
        window.localStorage.setItem('email', this.loginForm.value.email);
        window.localStorage.setItem('password', this.loginForm.value.password);
        console.log("already email", window.localStorage.setItem('email', this.loginForm.value.email));
        console.log("already password", window.localStorage.setItem('password', this.loginForm.value.password));
        this.serviceProvider.loginApi(loginObj).then(function (data) {
            console.log("loginApi data", data);
            if (data["success"] == 0) {
                _this.loader.hide();
                _this.alert.errorAlert(data["message"]);
            }
            else if (data["success"] == 1) {
                _this.loader.hide();
                var obj_1 = data;
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
                                _this.navCtrl.push("NewsFeedPage");
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (data["success"] == 2) {
                _this.loader.hide();
                _this.alert.errorAlert(data["message"]);
            }
            else {
                _this.loader.hide();
            }
        }, function (err) {
            _this.loader.hide();
            // console.log("err", err)
            _this.error = err.message;
            // console.log("this.error", this.error)
        });
        // if (!this.loginForm.value.email)
        // {
        //   this.utility.presentAlert("Please enter Email!");
        //   return;            
        // }
        // else {
        //Check if Fingerprint or Face  is available
        //   this.faio.isAvailable()
        //   .then(result => {
        //     console.log("result is available", result);
        //     if(result === "finger" || result === "face"){
        //       //Fingerprint or Face Auth is available
        //       console.log("Fingerprint or Face Exist!")
        //       this.faio.show({
        //         clientId: 'NihinDemoBioAuthApp',
        //         clientSecret: 'nihinBioAuthDemo', //Only necessary for Android
        //         disableBackup: true, //Only for Android(optional)
        //         localizedFallbackTitle: 'Use Pin', //Only for iOS
        //         localizedReason: 'Please Authenticate' //Only for iOS
        //       })
        //       .then((result: any) => {
        //         console.log("result is show", result);
        //         if(result == "Success"){
        //         //Fingerprint/Face was successfully verified            
        //         //Go to dashboard
        //         this.setAndGet.Email = this.loginForm.value.email;
        //         console.log("this.setAndGet.Email", this.setAndGet.Email);
        // this.navCtrl.setRoot("NewsFeedPage");
        //         }
        //         else {
        //         //Fingerprint/Face was not successfully verified                      
        //           this.utility.presentAlert(result);
        //           console.log(result);
        //         }
        //       })
        //       .catch((error: any) => {
        //         //Fingerprint/Face was not successfully verified          
        //         this.utility.presentAlert(error);
        //         console.log(error);
        //       });
        //     }
        //     else {
        //       //Fingerprint or Face Auth is not available        
        //       this.utility.presentAlert("Fingerprint/Face Auth is not available on this device!");
        //       console.log("Fingerprint/Face Auth is not available on this device!")
        //     }
        //   })
        // }
    };
    LoginPage.prototype.forgotPassword = function () {
        console.log("forgot password");
        this.navCtrl.push("ForgotPasswordPage");
    };
    LoginPage.prototype.resetPassword = function () {
        console.log("reset password");
        this.navCtrl.push("ResetPasswordPage");
    };
    LoginPage.prototype.userRegistration = function () {
        console.log("user registration");
        this.navCtrl.push("RegisterPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="bgCss">\n	<div>\n		<img src="assets/imgs/Hoscom_animation.gif" class="animationImg">\n		<img src="assets/imgs/logo.png" class="logoHotel">\n	</div>\n	\n	<br/>\n  <br/>\n	<div class="error-message">\n    {{error}}\n  </div>\n\n	<form [formGroup]="loginForm" (submit)="appLogin()" class="formCss">\n		<ion-list>\n		  <ion-item class="itemCss"> \n		    <ion-input type="email" placeholder="YourName@hotel.com" formControlName="email" class="inputText" [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n		  </ion-item>\n		  <div class="error-message" \n	      *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n	      <p class="parag">Please enter a valid email.</p>\n	    </div>\n	    <br/>\n\n		  <ion-item class="itemCss"> \n		    <ion-input type="password" placeholder="Your Password" formControlName="password" class="inputText" [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n		    <ion-icon name="finger-print" item-right></ion-icon>\n		  </ion-item>\n		  <div class="error-message" \n	      *ngIf="!loginForm.controls.password.valid  && loginForm.controls.password.dirty">\n	      <p class="parag">Please enter a valid password.</p>\n	    </div>\n		</ion-list>\n		<button ion-button round full class="loginBtn" type="submit">SIGN IN</button>\n		<p class="frgtPwd" (click)="forgotPassword()">Forgot Password?</p>\n\n		<p class="alterCss">Alternative : Use your fingerprint or faceID to sign in.</p>\n	</form>\n	<div class="lastBtns">\n		<button ion-button round class="resetBtn" (click)="resetPassword()">RESET PASSWORD</button>\n		<button ion-button round class="resetBtn" (click)="userRegistration()">REGISTER</button>\n	</div>\n	<br/>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_loader_loader__["a" /* Loader */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_fingerprint_aio_ngx__["a" /* FingerprintAIO */], __WEBPACK_IMPORTED_MODULE_6__providers_settersandgetters_settersandgetters__["a" /* SettersandgettersProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_11__providers_alert_alert__["a" /* Alert */], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(108);
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
 * Generated class for the NewsFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsFeedPage = /** @class */ (function () {
    function NewsFeedPage(navCtrl, navParams, serviceProvider, storage, loader, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.storage = storage;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.tabsColor = "default";
        this.generaldetail = [];
        this.restaurantdetail = [];
        this.dinnerdetail = [];
        this.othersdetail = [];
        this.privatemessagedetail = [];
        this.ifGeneralSelected = true;
        this.ifRestaurantSelected = false;
        this.ifDinnerSelected = false;
        this.ifOthersSelected = false;
        this.ifPrivateMessageSelected = false;
        this.ifisNotPrivate = false;
        this.ifPrivate = false;
        this.ifOutbox = false;
        this.ifInbox = true;
        this.error = '';
        this.groupNames = [];
        this.className = 'one-class';
        this.selectedItem = 0;
        this.newspage = 1;
        this.privatepage = 1;
        this.pagingEnabled = true;
        this.pagingEnabled1 = true;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        document.addEventListener("resume", function () {
            // do something
            this.displayNesfeedFunction();
        }, true);
        this.restaurantdetail = [{ 'topImage': "", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" },
            { 'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
            { 'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "", 'imageFile': "" },
            { 'topImage': "assets/imgs/newsfeed/remark.png", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" }];
        this.dinnerdetail = [{ 'topImage': "assets/imgs/newsfeed/remark.png", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" },
            { 'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
            { 'topImage': "assets/imgs/newsfeed/toppin.png", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "", 'imageFile': "" },
            { 'topImage': "", 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" }];
        this.othersdetail = [{ 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
            { 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" },
            { 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "", 'imageFile': "" },
            { 'datetime': '01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title': "Basic Rules for the Newsfeed",
                'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
                'comments': '14', 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" }];
        // this.privatemessagedetail = [{'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
        // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
        // 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "" },
        // {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
        // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
        // 'file': "assets/imgs/newsfeed/file.png", 'imageFile': "assets/imgs/newsfeed/image.png" },
        // {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
        // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
        // 'file': "", 'imageFile': "" },
        // {'datetime':'01/01/2019 13 : 46', 'image': "assets/imgs/user.png", 'name': 'DEPARTMENT IT', 'title':"Basic Rules for the Newsfeed", 
        // 'desc': "Please read the following carefully beforeyou post into the newfed. this rules are necessary in order for us to keep the clean structure and clarity. Step 1 : Before you create a new entry, plesae be aware of the impact this has no other employees' newsfeed...",
        // 'file': "", 'imageFile': "assets/imgs/newsfeed/image.png" }];
    }
    NewsFeedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NewsFeedPage');
        this.newsfeed = 'general';
        this.newsFeedStatusChange(this.newsfeed);
        this.storage.get("userData").then(function (userData) {
            // console.log("newsfeed entry userData", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.displayNesfeedFunction();
        });
    };
    // ionViewWillUnload() {
    //   this.displayNesfeedFunction();
    //   // this.sub2$.unsubscribe();
    // }
    NewsFeedPage.prototype.displayNesfeedFunction = function () {
        var _this = this;
        // console.log("displayNesfeedFunction");
        this.loader.show("Displaying Newsfeed Posts...");
        var disNewsfeedObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "pageNo": this.newspage
        };
        // console.log("disNewsfeedObj", disNewsfeedObj);
        this.serviceProvider.displayNewsfeedApi(disNewsfeedObj).then(function (data) {
            if (data["success"] == 0) {
                _this.loader.hide();
                _this.error = data["message"];
                _this.displayPrivateMessage();
            }
            else if (data["success"] == 1) {
                _this.loader.hide();
                var obj = data;
                _this.groupNames = [];
                // console.log("obj.response", obj.response);
                for (var i in obj.response) {
                    if (obj.response[i].group_name == "General") {
                        _this.valueName = "general";
                    }
                    else if (obj.response[i].group_name == "Restaurant") {
                        _this.valueName = "restaurant";
                    }
                    else if (obj.response[i].group_name == "Dinner") {
                        _this.valueName = "dinner";
                    }
                    else if (obj.response[i].group_name == "Others") {
                        _this.valueName = "others";
                    }
                    else {
                    }
                    _this.groupNames.push({ "group_name": obj.response[i].group_name, "value_name": _this.valueName, "badge": obj.response[i].countmessage });
                    // console.log("this.groupNames", this.groupNames);
                    // console.log("obj.response[i].data", obj.response[i].data);
                    _this.newposts = obj.response[i];
                    // console.log("this.newposts", this.newposts.data);
                    for (var i_1 in _this.newposts.data) {
                        // console.log("this.newposts.data[i]", this.newposts.data[i]);
                        // this.generaldetail = this.newposts.data[i];
                        _this.generaldetail.push(_this.newposts.data[i_1]);
                        // console.log("this.generaldetail", this.generaldetail);
                    }
                    // this.generaldetail = obj.response[i].data;
                }
                _this.displayPrivateMessage();
            }
            else if (data["success"] == 2) {
                _this.loader.hide();
                _this.error = data["message"];
                _this.displayPrivateMessage();
            }
            else if (data["success"] == 4) {
                _this.loader.hide();
                var alert_1 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                // console.log("newsfeed session expired");
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.loader.hide();
                _this.error = '';
            }
        }, function (err) {
            _this.loader.hide();
            console.log("err", err);
        });
    };
    NewsFeedPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.newspage = this.newspage + 1;
        var disNewsfeedObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "pageNo": this.newspage
        };
        setTimeout(function () {
            _this.serviceProvider.displayNewsfeedApi(disNewsfeedObj).then(function (data) {
                var obj = data;
                if (obj.response.length) {
                    for (var i in obj.response) {
                        _this.newposts = obj.response[i];
                        // console.log("this.newposts", this.newposts.data);
                        for (var i_2 in _this.newposts.data) {
                            // console.log("this.newposts.data[i]", this.newposts.data[i]);
                            _this.generaldetail.push(_this.newposts.data[i_2]);
                            // console.log("this.generaldetail", this.generaldetail);
                            document.addEventListener("pause", function () {
                                // do something
                                this.generaldetail = this.generaldetail;
                            }, true);
                        }
                    }
                }
                else {
                    _this.pagingEnabled = false;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    NewsFeedPage.prototype.newsFeedStatusChange = function (newsfeedname) {
        console.log("newsfeedname", newsfeedname);
        if (newsfeedname == "general") {
            console.log("general");
            this.ifGeneralSelected = true;
            this.ifRestaurantSelected = false;
            this.ifDinnerSelected = false;
            this.ifOthersSelected = false;
            this.ifPrivateMessageSelected = false;
            this.ifisNotPrivate = true;
            this.ifPrivate = false;
        }
        else if (newsfeedname == "restaurant") {
            console.log("restaurant");
            this.ifGeneralSelected = false;
            this.ifRestaurantSelected = true;
            this.ifDinnerSelected = false;
            this.ifOthersSelected = false;
            this.ifPrivateMessageSelected = false;
            this.ifisNotPrivate = true;
            this.ifPrivate = false;
        }
        else if (newsfeedname == "dinner") {
            console.log("dinner");
            this.ifGeneralSelected = false;
            this.ifRestaurantSelected = false;
            this.ifDinnerSelected = true;
            this.ifOthersSelected = false;
            this.ifPrivateMessageSelected = false;
            this.ifisNotPrivate = true;
            this.ifPrivate = false;
        }
        else if (newsfeedname == "others") {
            console.log("others");
            this.ifGeneralSelected = false;
            this.ifRestaurantSelected = false;
            this.ifDinnerSelected = false;
            this.ifOthersSelected = true;
            this.ifPrivateMessageSelected = false;
            this.ifisNotPrivate = true;
            this.ifPrivate = false;
        }
        else { }
    };
    NewsFeedPage.prototype.displayPrivateMessage = function () {
        var _this = this;
        // console.log("displayPrivateMessage");
        this.loader.show("Displaying Private Messages...");
        var disprMsgObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "pageNo": this.privatepage
        };
        // console.log("disprMsgObj", disprMsgObj);
        this.serviceProvider.displayPrivateMessageApi(disprMsgObj).then(function (data) {
            // console.log("displayPrivateMessageApi", data);
            if (data["success"] == 0) {
                _this.loader.hide();
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.loader.hide();
            }
            else if (data["success"] == 2) {
                _this.loader.hide();
                _this.error = data["message"];
            }
            else if (data["success"] == 4) {
                _this.loader.hide();
                var alert_2 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                // console.log("newsfeed session expired");
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                _this.loader.hide();
                _this.error = '';
            }
        }, function (err) {
            _this.loader.hide();
            console.log("err", err);
        });
    };
    NewsFeedPage.prototype.doInfinite1 = function (infiniteScroll) {
        var _this = this;
        this.privatepage = this.privatepage + 1;
        var disprMsgObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "pageNo": this.privatepage
        };
        setTimeout(function () {
            _this.serviceProvider.displayPrivateMessageApi(disprMsgObj).then(function (data) {
                var obj = data;
                // if (obj.response.length) {
                //   for(let i in obj.response) {
                //     this.newposts = obj.response[i];
                //     // console.log("this.newposts", this.newposts.data);
                //     for(let i in this.newposts.data) {
                //       // console.log("this.newposts.data[i]", this.newposts.data[i]);
                //       this.generaldetail.push(this.newposts.data[i])
                //       // console.log("this.generaldetail", this.generaldetail);
                //       document.addEventListener("pause", function() {
                //         // do something
                //         this.generaldetail = this.generaldetail;
                //       }, true);
                //     }
                //   }
                // } else {
                //     this.pagingEnabled = false;
                // }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    NewsFeedPage.prototype.openPrivate = function (i) {
        console.log("open private");
        this.selectedItem = i;
        this.ifGeneralSelected = false;
        this.ifRestaurantSelected = false;
        this.ifDinnerSelected = false;
        this.ifOthersSelected = false;
        this.ifPrivateMessageSelected = true;
        this.ifisNotPrivate = false;
        this.ifPrivate = true;
    };
    NewsFeedPage.prototype.openTab = function (i, feedname) {
        this.selectedItem = i;
        this.newsFeedStatusChange(feedname);
    };
    NewsFeedPage.prototype.createInbox = function () {
        this.ifOutbox = true;
        this.ifInbox = false;
    };
    NewsFeedPage.prototype.createOutbox = function () {
        this.ifOutbox = false;
        this.ifInbox = true;
    };
    NewsFeedPage.prototype.onClickOfPrivateMessage = function (index) {
        // console.log("on click of PrivateMessage", index);
        this.navCtrl.push("PrivateMessageDetailPage");
    };
    NewsFeedPage.prototype.onClickOfGeneral = function (index, general) {
        console.log("on click of General index", index);
        console.log("on click of General general", general);
        this.navCtrl.push("NewsfeedDetailPage", { 'title': 'General Detail', 'post_id': general.id });
    };
    NewsFeedPage.prototype.onClickOfRestaurant = function (index) {
        // console.log("on click of onClickOfRestaurant", index);
        this.navCtrl.push("NewsfeedDetailPage", { 'title': 'Restaurant Detail' });
    };
    NewsFeedPage.prototype.onClickOfDinner = function (index) {
        // console.log("on click of onClickOfDinner", index);
        this.navCtrl.push("NewsfeedDetailPage", { 'title': 'Dinner Detail' });
    };
    NewsFeedPage.prototype.onClickOfOthers = function (index) {
        // console.log("on click of onClickOfOthers", index);
        this.navCtrl.push("NewsfeedDetailPage", { 'title': 'Others Detail' });
    };
    NewsFeedPage.prototype.createNewsfeedEntry = function () {
        // console.log("create newfeed entry");
        this.navCtrl.push("CreateNewsfeedEntryPage");
    };
    NewsFeedPage.prototype.createNewMessage = function () {
        // console.log("create new message");
        this.navCtrl.push("CreateNewPrivateMessagePage");
    };
    NewsFeedPage.prototype.openfilesinbrowser = function (photo) {
        console.log("openfilesinbrowser", photo);
        var URL = photo.file_name;
        var browserInst = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        var browser = browserInst.create(URL, '_system', this.options);
    };
    NewsFeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news-feed',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/news-feed/news-feed.html"*/'<header title="Newsfeed"> </header>\n\n<ion-content class="paddingTop">\n  <div>\n\n    <ion-slides class="slidesCss">\n      <ion-slide (ionSlideDidChange)="slideChanged()" class="slide-css">\n        <ion-toolbar class="toolbar-color">\n          <div class="divD">\n            <ion-item *ngFor="let group of groupNames;let i=index" class="cust_delay delay" [class.active]="selectedItem == i" (click)="openTab(i, group.value_name)">\n              {{group.group_name}}\n              <ion-badge id="cart-badge" class="badgeOn">{{group.badge}}</ion-badge>\n            </ion-item>\n          </div>\n        </ion-toolbar>\n      </ion-slide>\n      <ion-slide (ionSlideDidChange)="slideChanged()" class="slide-css">\n        <ion-toolbar class="toolbar-color">\n          <div class="divD">\n            <ion-item class="cust_delay delay" (click)="openPrivate(i)" [class.active]="selectedItem == i">\n                  Private &nbsp;&nbsp;<ion-icon name="md-mail" class="iconCss"></ion-icon><ion-badge id="cart-badge" class="badgeOn">16</ion-badge>\n            </ion-item>\n          </div>\n        </ion-toolbar>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  \n  <div class="paddingTopDiv" *ngIf="ifisNotPrivate">\n    <button ion-button class="createEntryBtn" (click)="createNewsfeedEntry()">CREATE ENTRY</button>\n  </div>\n  <div class="paddingTopDiv" *ngIf="ifPrivate">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-7 col-xl-7 class="colinout">\n          <img src="assets/imgs/newsfeed/inbox.png" *ngIf="ifInbox" (click)="createInbox()" class="inout">\n          <img src="assets/imgs/newsfeed/outbox.png" *ngIf="ifOutbox" (click)="createOutbox()" class="inout">\n        </ion-col>\n        <ion-col col-5 col-xl-5 class="colmessage">\n          <button ion-button class="createEntryBtn" (click)="createNewMessage()">NEW MESSAGE</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <br/>\n  <div *ngIf="ifGeneralSelected">\n    <ion-grid *ngFor="let general of generaldetail; let idx = index" class="gridCss" [class.selected]="idx === currentSelected">\n      <ion-row>\n        <ion-col class="topPin">\n          <img src="assets/imgs/newsfeed/toppin.png" class="imagePin" *ngIf="general.pin == \'1\' && general.important == \'0\'">\n          <img src="assets/imgs/newsfeed/toppin.png" class="imagePin" *ngIf="general.pin == \'1\' && general.important == \'1\'">\n          <img src="assets/imgs/newsfeed/remark.png" class="imagePin" *ngIf="general.pin == \'0\' && general.important == \'1\'">\n          <p class="dateCol">{{general.created_at | date: "dd/MM/yyyy HH:mm"}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class="downrow" (click)="onClickOfGeneral(idx, general)">\n        <ion-col col-3 col-xl-3 class="imageCol">\n          <ion-row>\n            <ion-col col-12 col-xl-12>\n              <img src="{{general.profile_picture}}" class="imageGen" *ngIf="general.profile_picture !== \'\'">\n              <img src="assets/imgs/user.png" class="imageGen" *ngIf="general.profile_picture == \'\'">\n            </ion-col>\n            <ion-col col-12 col-xl-12><p class="nameCol">{{general.first_name}} {{general.last_name}}</p></ion-col>\n            <ion-col col-12 col-xl-12><p class="nameCol1">{{general.current_position}}</p></ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-9 col-xl-9>\n          <ion-row>\n            <ion-col col-12><h4 class="titleCol">{{general.title}}</h4></ion-col>\n            <ion-col col-12 class="paraCol">{{general.description}}</ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row *ngIf="general?.photos?.length > 0">\n        <ion-col class="commantCol" *ngFor="let photo of general?.photos;let idx of index;">\n         \n          <img src="assets/imgs/newsfeed/file.png" class="attachment" *ngIf="photo.file_type == \'odt\' || photo.file_type == \'pdf\' || photo.file_type == \'xlsx\' || photo.file_type == \'txt\' || photo.file_type == \'docx\'" (click)="openfilesinbrowser(photo)">\n          <img src="assets/imgs/newsfeed/image.png" class="attachment" *ngIf="photo.file_type == \'jpg\' || photo.file_type == \'png\' || photo.file_type == \'jpeg\' || photo.file_type == \'mp4\'" (click)="openfilesinbrowser(photo)">&nbsp;&nbsp;\n          \n        </ion-col>\n        <b class="commentB">{{general.comments}} Commments</b>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="ifRestaurantSelected">\n    <ion-grid *ngFor="let restaurant of restaurantdetail; let idx = index" class="gridCss" (click)="onClickOfRestaurant(idx)" [class.selected]="idx === currentSelected">\n      <ion-row>\n        <ion-col class="topPin">\n          <img src="{{restaurant.topImage}}" class="imagePin" *ngIf="restaurant.topImage != \'\'">\n          <p class="dateCol">{{restaurant.datetime}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class="downrow">\n        <ion-col col-3 col-xl-3 class="imageCol">\n          <ion-row>\n            <ion-col><img src="{{restaurant.image}}" class="imageGen"></ion-col>\n            <ion-col class="nameCol">{{restaurant.name}}</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-9 col-xl-9>\n          <ion-row>\n            <ion-col col-12><h4 class="titleCol">{{restaurant.title}}</h4></ion-col>\n            <ion-col col-12 class="paraCol">{{restaurant.desc}}</ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="commantCol">\n          <img src="{{restaurant.file}}" class="attachment" *ngIf="restaurant.file != \'\'">\n          <img src="{{restaurant.imageFile}}" class="attachment" *ngIf="restaurant.imageFile != \'\'">&nbsp;&nbsp;\n          {{restaurant.comments}} Commments\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="ifDinnerSelected">\n    <ion-grid *ngFor="let dinner of dinnerdetail; let idx = index" class="gridCss" (click)="onClickOfDinner(idx)" [class.selected]="idx === currentSelected">\n      <ion-row>\n        <ion-col class="topPin">\n          <img src="{{dinner.topImage}}" class="imagePin" *ngIf="dinner.topImage != \'\'">\n          <p class="dateCol">{{dinner.datetime}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class="downrow">\n        <ion-col col-3 col-xl-3 class="imageCol">\n          <ion-row>\n            <ion-col><img src="{{dinner.image}}" class="imageGen"></ion-col>\n            <ion-col class="nameCol">{{dinner.name}}</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-9 col-xl-9>\n          <ion-row>\n            <ion-col col-12><h4 class="titleCol">{{dinner.title}}</h4></ion-col>\n            <ion-col col-12 class="paraCol">{{dinner.desc}}</ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="commantCol">\n          <img src="{{dinner.file}}" class="attachment" *ngIf="dinner.file != \'\'">\n          <img src="{{dinner.imageFile}}" class="attachment" *ngIf="dinner.imageFile != \'\'">&nbsp;&nbsp;\n          {{dinner.comments}} Commments\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="ifOthersSelected">\n    <ion-grid *ngFor="let others of othersdetail; let idx = index" class="gridCss" (click)="onClickOfOthers(idx)" [class.selected]="idx === currentSelected">\n      <ion-row>\n        <ion-col class="topPin">\n          <!-- <img src="{{others.topImage}}" class="imagePin" *ngIf="others.topImage != \'\'"> -->\n          <p class="dateCol">{{others.datetime}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class="downrow">\n        <ion-col col-3 col-xl-3 class="imageCol">\n          <ion-row>\n            <ion-col><img src="{{others.image}}" class="imageGen"></ion-col>\n            <ion-col class="nameCol">{{others.name}}</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-9 col-xl-9>\n          <ion-row>\n            <ion-col col-12><h4 class="titleCol">{{others.title}}</h4></ion-col>\n            <ion-col col-12 class="paraCol">{{others.desc}}</ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="commantCol">\n          <img src="{{others.file}}" class="attachment" *ngIf="others.file != \'\'">\n          <img src="{{others.imageFile}}" class="attachment" *ngIf="others.imageFile != \'\'">&nbsp;&nbsp;\n          {{others.comments}} Commments\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="ifPrivateMessageSelected" style="margin-top: -20px;">\n    <ion-grid *ngFor="let private of privatemessagedetail; let idx = index" (click)="onClickOfPrivateMessage(idx)" class="gridCss selectGrid" [class.selected]="idx === currentSelected">\n      <ion-row>\n        <ion-col class="topPin">\n          <p class="dateCol">{{private.datetime}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class="downrow">\n        <ion-col col-3 col-xl-3 class="imageCol">\n          <ion-row>\n            <ion-col><img src="{{private.image}}" class="imageGen"></ion-col>\n            <ion-col class="nameCol">{{private.name}}</ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-9 col-xl-9>\n          <ion-row>\n            <ion-col col-12><h4 class="titleCol">{{private.title}}</h4></ion-col>\n            <ion-col col-12 class="paraCol">{{private.desc}}</ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="commantCol">\n          <img src="{{private.file}}" class="attachment" *ngIf="private.file != \'\'">\n          <img src="{{private.imageFile}}" class="attachment" *ngIf="private.imageFile != \'\'">&nbsp;&nbsp;\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..." *ngIf="pagingEnabled"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> \n  <div *ngIf="!pagingEnabled" class="nopost"> No more post is available.</div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite1($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more messages..." *ngIf="pagingEnabled1"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> \n  <div *ngIf="!pagingEnabled1" class="nopost"> No more message is available.</div>\n    <div style="margin-top: 45px;height: 20px;"></div>\n  \n</ion-content>'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/news-feed/news-feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* Loader */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], NewsFeedPage);
    return NewsFeedPage;
}());

//# sourceMappingURL=news-feed.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map