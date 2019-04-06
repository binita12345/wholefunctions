webpackJsonp([25],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPreferencesPageModule", function() { return GuestPreferencesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guest_preferences__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GuestPreferencesPageModule = /** @class */ (function () {
    function GuestPreferencesPageModule() {
    }
    GuestPreferencesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__guest_preferences__["a" /* GuestPreferencesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__guest_preferences__["a" /* GuestPreferencesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], GuestPreferencesPageModule);
    return GuestPreferencesPageModule;
}());

//# sourceMappingURL=guest-preferences.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestPreferencesPage; });
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
 * Generated class for the GuestPreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuestPreferencesPage = /** @class */ (function () {
    function GuestPreferencesPage(navCtrl, navParams, alertCtrl, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.visible = false;
        this.showPreferences = false;
        this.guestPreferences = [];
        this.countClick = 0;
        this.addpreference = false;
        this.error = '';
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.guestPreferences = [{ 'prefId': '#113', 'prefName': 'Nico Willis', 'fNb': [{ 'name': 'likes still water' }, { 'name': 'needs a lot of ice cubes for soft drinks' },
                    { 'name': 'prefers his steak med well' }, { 'name': 'has a tomato alergy' }, { 'name': 'heats raisins' }], 'nighthotel': '22', 'nightbrand': '34', 'arrival': '29/08/19',
                'departure': '09/09/19', 'otherinfo': "wife's name: Laura", 'complaints': [{ 'name': 'slow service in Restaurant (05/2017)' },
                    { 'name': 'late check-in (07/2018)' }, { 'name': 'unitdy SPA area (08/2018)' }] },
            { 'prefId': '#114', 'prefName': 'Fabienne Reimann', 'fNb': [{ 'name': 'needs a lot of ice cubes for soft drinks' },
                    { 'name': 'prefers his steak med well' }, { 'name': 'has a tomato alergy' }, { 'name': 'heats raisins' }], 'nighthotel': '22', 'nightbrand': '34', 'arrival': '29/08/19',
                'departure': '09/09/19', 'otherinfo': "wife's name: Laura", 'complaints': [{ 'name': 'slow service in Restaurant (05/2017)' },
                    { 'name': 'late check-in (07/2018)' }, { 'name': 'unitdy SPA area (08/2018)' }] },
            { 'prefId': '#115', 'prefName': 'Nico Willis', 'fNb': [{ 'name': 'likes still water' }, { 'name': 'needs a lot of ice cubes for soft drinks' },
                    { 'name': 'prefers his steak med well' }, { 'name': 'has a tomato alergy' }, { 'name': 'heats raisins' }], 'nighthotel': '22', 'nightbrand': '34', 'arrival': '29/08/19',
                'departure': '09/09/19', 'otherinfo': "wife's name: Laura", 'complaints': [{ 'name': 'slow service in Restaurant (05/2017)' },
                    { 'name': 'late check-in (07/2018)' }, { 'name': 'unitdy SPA area (08/2018)' }] }];
        this.preferencesLists = this.guestPreferences;
    }
    GuestPreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuestPreferencesPage');
    };
    GuestPreferencesPage.prototype.filterItems = function (ev) {
        // Reset items back to all of the items
        console.log("ev.target.value", ev.target.value);
        var val = ev.target.value;
        if (val && val.trim() != '') {
            console.log("guestPreferences", this.guestPreferences);
            this.preferencesLists = this.guestPreferences.filter(function (item) {
                console.log("get items item...", item);
                return ((item.prefId.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.prefName.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '' || val == undefined) {
            this.preferencesLists = this.guestPreferences;
        }
    };
    GuestPreferencesPage.prototype.toggle = function (index) {
        console.log("toggle icon", index);
        this.visible = !this.visible;
        this.showPreferences = !this.showPreferences;
    };
    GuestPreferencesPage.prototype.verifyPreference = function (fAndB) {
        console.log("verify preference", fAndB);
        this.countClick = this.countClick + 1;
        console.log("verify this.countClick", this.countClick);
    };
    GuestPreferencesPage.prototype.addPreferences = function () {
        console.log("add preference");
        this.addpreference = true;
    };
    GuestPreferencesPage.prototype.onPreferencesChange = function (preference) {
        console.log('preference', preference);
        this.prefrns = preference;
        console.log('this.prefrns', this.prefrns);
    };
    GuestPreferencesPage.prototype.cancelNewPreference = function () {
        console.log("cancel new Preference");
        this.addpreference = false;
    };
    GuestPreferencesPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    GuestPreferencesPage.prototype.addNewPreference = function () {
        console.log("send new Preference");
        console.log("this.preferenceTexts", this.preferenceTexts);
        console.log("this.prefrns", this.prefrns);
        if (this.prefrns == '' || this.prefrns == undefined || this.prefrns == null) {
            this.error = 'please select any area';
        }
        else if (this.preferenceTexts == '' || this.preferenceTexts == undefined || this.preferenceTexts == null) {
            this.error = 'please enter your preference data';
        }
        else {
            this.error = '';
            this.addpreference = false;
            var alert_1 = this.alertCtrl.create({
                title: this.htmlProperty(),
                cssClass: 'checkAlertCss',
                message: 'Your Preference has been add successfully.'
            });
            alert_1.present();
        }
    };
    GuestPreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-guest-preferences',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/guest-preferences/guest-preferences.html"*/'<!--\n  Generated template for the GuestPreferencesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="My Department"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="ios-arrow-back" class="iconCss" item-start navPop></ion-icon>\n		<p class="pCss">Guest Preferences</p>\n	</ion-item>\n	<br/>\n	<ion-searchbar placeholder="Search for Guest or Room No." [(ngModel)]="searchTerm" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n	<div style="margin-bottom: 55px;">\n		<ion-grid class="gridCss" *ngFor="let preference of preferencesLists;let idx = index;">\n			<ion-row>\n				<ion-col col-1 col-xl-1 col-lg-1 class="col1">\n					<span class="spanP">{{preference.prefId}}</span>\n				</ion-col>\n\n				<ion-col col-11 col-xl-11 col-lg-11 *ngIf="!addpreference">\n					<h5>{{preference.prefName}}</h5>\n					<ion-item class="itemC">\n					  <ion-icon [name]="visible ? \'ios-arrow-down\' :\'ios-arrow-forward\'" (click)="toggle(idx)" item-start class="iconC"></ion-icon>\n						<p class="prefP">F & B</p>\n						<div *ngIf="showPreferences">\n							<P class="descP" *ngFor="let fNb of preference.fNb;let ix = index;">- {{fNb.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b class="descB" (click)="verifyPreference(fNb)" *ngIf="countClick < 3">VERIEFY</b><b class="checkB" *ngIf="countClick == 3">1x <ion-icon name="md-checkmark" class="checkC"></ion-icon></b>\n							</P>\n						</div>\n					</ion-item>\n					<ion-item class="itemC">\n					  <ion-icon [name]="visible ? \'ios-arrow-down\' :\'ios-arrow-forward\'" (click)="toggle(idx)" item-start class="iconC"></ion-icon>\n						<p class="prefP">FO</p>\n					</ion-item>\n					<ion-item class="itemC">\n					  <ion-icon [name]="visible ? \'ios-arrow-down\' :\'ios-arrow-forward\'" (click)="toggle(idx)" item-start class="iconC"></ion-icon>\n						<p class="prefP">HSK</p>\n					</ion-item>\n					<ion-item class="itemC">\n					  <ion-icon [name]="visible ? \'ios-arrow-down\' :\'ios-arrow-forward\'" (click)="toggle(idx)" item-start class="iconC"></ion-icon>\n						<p class="prefP">Concierge</p>\n					</ion-item>\n					<ion-item class="itemC">\n					  <ion-icon [name]="visible ? \'ios-arrow-down\' :\'ios-arrow-forward\'" (click)="toggle(idx)" item-start class="iconC"></ion-icon>\n						<p class="prefP">SPA</p>\n					</ion-item>\n\n					<div class="buttonDiv">\n						<button ion-button round outline class="imageBtn" (click)="addPreferences()">ADD PREFERENCE</button>\n					</div>\n\n					<ion-row class="radioRow">\n						<ion-col col-6 col-xl-3 col-lg-3 class="radioCss">\n							<p class="nameCss">Nights in Hotel<br>\n								<b class="boldName">{{preference.nighthotel}}</b>\n							</p>\n						</ion-col>\n						<ion-col col-6 col-xl-3 col-lg-3 class="radioCss">\n							<p class="nameCss">Nights in Brand<br>\n								<b class="boldName">{{preference.nightbrand}}</b>\n							</p>\n						</ion-col>\n						<ion-col col-6 col-xl-3 col-lg-3 class="radioCss"> \n							<br/>\n							<p class="nameCss">Arrival<br>\n								<b class="boldName">{{preference.arrival}}</b>\n							</p>\n						</ion-col>\n						<ion-col col-6 col-xl-3 col-lg-3 class="radioCss">\n							<p class="nameCss">Departure<br>\n								<b class="boldName">{{preference.departure}}</b>\n							</p>\n						</ion-col>\n					</ion-row>\n					<h6 class="otherH">OTHER INFO</h6>\n					<p class="descP">- {{preference.otherinfo}}</p>\n					<br/>\n					<h6 class="compH">COMPLAINTS</h6>\n					<p class="compP" *ngFor="let complaint of preference.complaints">- {{complaint.name}}</p>\n				</ion-col>\n\n				<ion-col col-11 col-xl-11 col-lg-11 *ngIf="addpreference">\n					<h5 class="addH">New Preference</h5>\n\n					<ion-item class="slectItem">\n				    <ion-select name="prefrns" [(ngModel)]="prefrns" (ionChange)="onPreferencesChange(prefrns)" placeholder="Area" text-wrap class="selectItem1">\n	            <ion-option value="fnb">F&B</ion-option>\n	            <ion-option value="hsk">HSK</ion-option>\n	            <ion-option value="concierge">Concierge</ion-option>\n	            <ion-option value="fo">FO</ion-option>\n	            <ion-option value="spa">SPA</ion-option>\n          	</ion-select>\n				</ion-item>\n				<ion-textarea placeholder="Preference" class="textArea" [(ngModel)]="preferenceTexts"></ion-textarea>\n				<div class="error-message">\n			    {{error}}\n			  </div>\n				<ion-item class="lastBtns">\n		    	<button ion-button round class="cancelBtn" (click)="cancelNewPreference()" item-end>CANCEL</button>\n					<button ion-button round class="postBtn" (click)="addNewPreference()" item-end>ADD</button>\n			  </ion-item>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/guest-preferences/guest-preferences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], GuestPreferencesPage);
    return GuestPreferencesPage;
}());

//# sourceMappingURL=guest-preferences.js.map

/***/ })

});
//# sourceMappingURL=25.js.map