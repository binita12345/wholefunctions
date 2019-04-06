webpackJsonp([24],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningPlatformPageModule", function() { return LearningPlatformPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__learning_platform__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LearningPlatformPageModule = /** @class */ (function () {
    function LearningPlatformPageModule() {
    }
    LearningPlatformPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__learning_platform__["a" /* LearningPlatformPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__learning_platform__["a" /* LearningPlatformPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], LearningPlatformPageModule);
    return LearningPlatformPageModule;
}());

//# sourceMappingURL=learning-platform.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningPlatformPage; });
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


/**
 * Generated class for the LearningPlatformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LearningPlatformPage = /** @class */ (function () {
    function LearningPlatformPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ifStudySelected = true;
        this.ifChallengesSelected = false;
        this.ifHCPointsSelected = false;
        this.platforms = [];
        this.ifAllcurrent = true;
        this.ifAttending = false;
        this.allCurrentChallenges = [];
        this.attend = false;
        this.detailLists = [];
        this.coupanLists = [];
        this.coupanFnb = [];
        this.coupanSpa = [];
        this.coupanOthers = [];
        this.certiLists = [];
        this.learningplt = 'study';
        this.learningpltChange(this.learningplt);
        this.platforms = [{ 'image': 'assets/imgs/mydepartment/fnb.jpg', 'name': 'F & B' },
            { 'image': 'assets/imgs/mydepartment/housekeep.jpg', 'name': 'Houskeeping' },
            { 'image': 'assets/imgs/mydepartment/frontoffice.jpg', 'name': 'Front Office' },
            { 'image': 'assets/imgs/mydepartment/spa.jpg', 'name': 'SPA' },
            { 'image': 'assets/imgs/mydepartment/general.jpg', 'name': 'General' },
            { 'image': 'assets/imgs/mydepartment/it.jpg', 'name': 'IT' },
            { 'image': 'assets/imgs/mydepartment/maintenance.jpg', 'name': 'Maintenance' }];
        this.platformLists = this.platforms;
        this.allCurrentChallenges = [{ 'chalId': '#1', 'chalName': 'Most 4 courses', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
                'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.' },
            { 'chalId': '#2', 'chalName': 'Most 4 courses', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
                'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.' },
            { 'chalId': '#3', 'chalName': 'Most 4 courses', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
                'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.' },
            { 'chalId': '#4', 'chalName': 'Guest Preferences', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
                'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.' }];
        this.challengeLists = this.allCurrentChallenges;
        this.detailLists = [{ 'name': 'Challenges', 'points': '480' }, { 'name': 'TripAdvisor comments', 'points': '90' }, { 'name': 'Extra Mile', 'points': '50' },
            { 'name': 'Promotion', 'points': '150' }, { 'name': 'Birthday', 'points': '100' }, { 'name': 'Employee of the Month', 'points': '400' }];
        this.coupanLists = [{ 'fnb': [{ 'name': 'Cocktail', 'points': '100' }, { 'name': '50 F&B voucher', 'points': '250' }, { 'name': 'Wine Bottle <300', 'points': '300' },
                    { 'name': '4-Course Menu', 'points': '400' }, { 'name': 'Champagne', 'points': '500' }] },
            { 'spa': [{ 'name': 'Nail Polishing', 'points': '150' }, { 'name': 'Eyebrow Plucking', 'points': '150' }, { 'name': 'Neck Massage', 'points': '250' },
                    { 'name': 'Foot Massage', 'points': '250' }, { 'name': 'Hot Stone Massage', 'points': '450' }, { 'name': 'Fully Body Massage', 'points': '500' }] },
            { 'others': [{ 'name': 'Hotel Cup', 'points': '50' }, { 'name': 'Bathrobe', 'points': '100' }, { 'name': 'Hotel Branded Umbrella', 'points': '100' },
                    { 'name': 'Bus Sightseeing Tour', 'points': '300' }, { 'name': 'Free Night', 'points': '1000' }, { 'name': 'Free Night for Family', 'points': '1500' }] }];
        this.certiLists = [{ 'certification': 'Red Wines', 'score': '93%', 'date': '17/09/2019' }, { 'certification': 'Cheese', 'score': '89%', 'date': '30/08/2019' },
            { 'certification': 'Telephone', 'score': '100%', 'date': '27/05/2019' }];
    }
    LearningPlatformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LearningPlatformPage');
    };
    LearningPlatformPage.prototype.getAllcurrentChallenge = function () {
        this.ifAttending = true;
        this.ifAllcurrent = false;
    };
    LearningPlatformPage.prototype.getAttendingChallenge = function () {
        this.ifAttending = false;
        this.ifAllcurrent = true;
    };
    LearningPlatformPage.prototype.learningpltChange = function (learnPlt) {
        if (learnPlt == "study") {
            console.log("study");
            this.ifStudySelected = true;
            this.ifChallengesSelected = false;
            this.ifHCPointsSelected = false;
        }
        else if (learnPlt == "challenges") {
            console.log("challenges");
            this.ifStudySelected = false;
            this.ifChallengesSelected = true;
            this.ifHCPointsSelected = false;
        }
        else if (learnPlt == "hcpoints") {
            console.log("hcpoints");
            this.ifStudySelected = false;
            this.ifChallengesSelected = false;
            this.ifHCPointsSelected = true;
        }
        else { }
    };
    LearningPlatformPage.prototype.onLearningPltChanged = function (event) {
        console.log("event", event.value);
        this.learningpltChange(event.value);
    };
    LearningPlatformPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.platformLists = this.platforms.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '') {
            this.platformLists = this.platforms;
        }
    };
    LearningPlatformPage.prototype.toGotoPlatform = function (platform) {
        console.log("toGotoPlatform", platform);
        this.platformName = platform.name;
        if (this.platformName == 'F & B') {
            console.log("ifff");
            this.navCtrl.push("StudyFNBPage");
        }
        else {
            console.log("else");
        }
    };
    LearningPlatformPage.prototype.attendCurrentChallenge = function (currentChal) {
        console.log("attendCurrentChallenge", currentChal);
        this.attend = !this.attend;
        console.log("attendCurrentChallenge this.attend", this.attend);
    };
    LearningPlatformPage.prototype.stopAttendenceChallenge = function (currentChal) {
        console.log("stopAttendenceChallenge", currentChal);
        this.attend = !this.attend;
    };
    LearningPlatformPage.prototype.createChallenges = function () {
        console.log("createChallenges");
        this.navCtrl.push("CreateNewChallengePage");
    };
    LearningPlatformPage.prototype.deleteCurrentChallenge = function () {
        console.log("deleteCurrentChallenge");
        var alert = this.alertCtrl.create({
            title: 'Confirm delete selected Challenge',
            cssClass: 'breakageAlertCss',
            message: 'Are you sure you want to permanently delete this Challenge?',
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
                    }
                }
            ]
        });
        alert.present();
    };
    LearningPlatformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-learning-platform',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/learning-platform/learning-platform.html"*/'<!--\n  Generated template for the LearningPlatformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Learning Platform"> </header>\n\n<ion-content class="paddingTop">\n	<ion-toolbar class="toolbar-color">\n    <ion-segment [(ngModel)]="learningplt" (ionChange)="onLearningPltChanged($event)" class="segment">\n      <ion-segment-button value="study" class="segment-btn">\n        STUDY\n      </ion-segment-button>\n      <ion-segment-button value="challenges" class="segment-btn">\n        CHALLENGES\n      </ion-segment-button>\n      <ion-segment-button value="hcpoints" class="segment-btn">\n        HC POINTS\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div *ngIf="ifStudySelected">\n    <br/>\n  	<ion-searchbar placeholder="Search" [(ngModel)]="searchstudy" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n  	<br/>\n  	<h3 class="head">DEPARTMENT</h3>\n		<ion-item class="itemBG" (click)="toGotoPlatform(platform)" *ngFor="let platform of platformLists;let idx = index;">\n			<ion-thumbnail item-start class="thumbnailImg">\n	      <img src="{{platform.image}}" class="dprtImg">\n	    </ion-thumbnail>\n	    <p class="para">{{platform.name}}</p>\n    </ion-item>\n  </div>\n  <div *ngIf="ifChallengesSelected">\n    <br/>\n  	<ion-searchbar placeholder="Search" [(ngModel)]="searchstudy" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n    <div class="filterC">\n      <h3 class="headP">FILTER</h3>\n      <img src="assets/imgs/mydepartment/allcurrent.png" *ngIf="ifAllcurrent" (click)="getAllcurrentChallenge()" class="inout">\n      <img src="assets/imgs/mydepartment/attending.png" *ngIf="ifAttending" (click)="getAttendingChallenge()" class="inout">\n    </div>\n    <ion-item>\n      <button ion-button round class="chalengeBtn" (click)="createChallenges()" item-end>CREATE CHALLENGE</button>\n    </ion-item>\n\n    <ion-grid class="gridCss" *ngFor="let currentChal of challengeLists;let idx = index;">\n      <ion-row>\n        <ion-col col-1 col-xl-1 col-lg-1 class="col1" [ngClass]="{\'bluebg\' : attend == true}">\n          <span class="spanP">{{currentChal.chalId}}</span>\n        </ion-col>\n\n        <ion-col col-11 col-xl-11 col-lg-11 class="col11">\n          <ion-item class="lastBtns">\n            <button ion-button round outline class="attendBtn" (click)="attendCurrentChallenge(currentChal)" item-end *ngIf="!attend">ATTEND</button>\n            <button ion-button round class="deleteBtn" (click)="stopAttendenceChallenge(currentChal)" item-end *ngIf="attend">STOP ATTENDENCE</button>\n            <button ion-button round class="deleteBtn" (click)="deleteCurrentChallenge(currentChal)" item-end>DELETE CHALLENGE</button>\n          </ion-item>\n          <h4>{{currentChal.chalName}}</h4>\n          <ion-row class="radioRow">\n            <ion-col col-6 col-xl-3 col-lg-3 class="radioCss">\n              <p class="nameCss">By<br>\n                <b class="boldName">{{currentChal.by}}</b>\n              </p>\n            </ion-col>\n            <ion-col col-6 col-xl-3 col-lg-3 class="radioCss">\n              <p class="nameCss">Duration<br>\n                <b class="boldName">{{currentChal.duration}}</b>\n              </p>\n            </ion-col>\n            <ion-col col-6 col-xl-3 col-lg-3 class="radioCss"> \n              <br/>\n              <p class="nameCss">Hoscom Points<br>\n                <b class="boldName">{{currentChal.points}}</b>\n              </p>\n            </ion-col>\n            <ion-col col-6 col-xl-3 col-lg-3 class="radioCss">\n              <p class="nameCss">Current Participants<br>\n                <b class="boldName">{{currentChal.particcpants}}</b>\n              </p>\n            </ion-col>\n          </ion-row>\n          <h6 class="otherH">Description</h6>\n          <p class="descP">{{currentChal.description}}</p>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf="ifHCPointsSelected">\n    <br/>\n    <div class="divHC">\n      <div class="divText">\n        You earned <br/>\n        1270 <br/>\n        HosCom Points.\n      </div>\n      <img src="assets/imgs/hcpoints.png" class="hcImg">\n    </div>\n    <div class="nextDiv">\n      <h3 class="headP">In Detail</h3>\n      <ion-grid>\n        <ion-row class="rowHC" *ngFor="let detail of detailLists">\n          <ion-col col-10 col-xl-10 col-lg-11 class="colLeft">\n            {{detail.name}}\n          </ion-col>\n          <ion-col col-2 col-xl-2 col-lg-1 class="colRight">\n            {{detail.points}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="nextDiv">\n      <h3 class="headP">Coupans List</h3>\n      <ion-grid>\n        <h5 class="head5">F&B</h5>\n        <div class="divSub">\n          <ion-row class="rowHC" *ngFor="let fnb of coupanLists[0].fnb">\n            <ion-col col-10 col-xl-10 col-lg-11 class="colLeft">\n              {{fnb.name}}\n            </ion-col>\n            <ion-col col-2 col-xl-2 col-lg-1 class="colRightCoupan">\n              {{fnb.points}}\n            </ion-col>\n          </ion-row>\n        </div>\n        <h5 class="head5">SPA</h5>\n        <div class="divSub">\n          <ion-row class="rowHC" *ngFor="let spa of coupanLists[1].spa">\n            <ion-col col-10 col-xl-10 col-lg-11 class="colLeft">\n              {{spa.name}}\n            </ion-col>\n            <ion-col col-2 col-xl-2 col-lg-1 class="colRightCoupan">\n              {{spa.points}}\n            </ion-col>\n          </ion-row>\n        </div>\n        <h5 class="head5">Others</h5>\n        <div class="divSub">\n          <ion-row class="rowHC" *ngFor="let others of coupanLists[2].others">\n            <ion-col col-10 col-xl-10 col-lg-11 class="colLeft">\n              {{others.name}}\n            </ion-col>\n            <ion-col col-2 col-xl-2 col-lg-1 class="colRightCoupan">\n              {{others.points}}\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n    <div class="nextDiv">\n      <h3 class="headP">HosCom Certifications</h3>\n      <div class="withscroll">\n        <table>\n          <thead>\n            <tr>\n              <th class="tableH1">Certification</th>\n              <th class="tableH">Score</th>\n              <th class="tableH">Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let certi of certiLists">\n              <td class="tableB">{{certi.certification}}</td>\n              <td class="tableB">{{certi.score}}</td>\n              <td class="tableB">{{certi.date}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <button ion-button round outline class="dwnloadBtn" (click)="downloadAll()">DOWNLOAD ALL</button>\n    </div>\n  </div>\n  <div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/learning-platform/learning-platform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LearningPlatformPage);
    return LearningPlatformPage;
}());

//# sourceMappingURL=learning-platform.js.map

/***/ })

});
//# sourceMappingURL=24.js.map