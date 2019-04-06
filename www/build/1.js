webpackJsonp([1],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubStudyMenuListPageModule", function() { return SubStudyMenuListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_study_menu_list__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_progress_bar_progress_bar_module__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SubStudyMenuListPageModule = /** @class */ (function () {
    function SubStudyMenuListPageModule() {
    }
    SubStudyMenuListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_study_menu_list__["a" /* SubStudyMenuListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_study_menu_list__["a" /* SubStudyMenuListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_progress_bar_progress_bar_module__["a" /* ProgressBarComponentModule */]
            ],
        })
    ], SubStudyMenuListPageModule);
    return SubStudyMenuListPageModule;
}());

//# sourceMappingURL=sub-study-menu-list.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubStudyMenuListPage; });
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
 * Generated class for the SubStudyMenuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubStudyMenuListPage = /** @class */ (function () {
    function SubStudyMenuListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.substudyArray = [];
        this.getmenu = navParams.get('menuname');
        console.log("this.getmenu", this.getmenu);
        this.substudyArray = [{ 'image': 'assets/imgs/mydepartment/drink1.jpg', 'percent': '75', 'name': 'Chardonny', 'points': 90 },
            { 'image': 'assets/imgs/mydepartment/drink2.jpg', 'percent': '90', 'name': 'Reisling', 'points': 85 },
            { 'image': 'assets/imgs/mydepartment/drink3.jpg', 'percent': '100', 'name': 'Sauvignon Blanc', 'points': 120 }];
        this.substudyLists = this.substudyArray;
    }
    SubStudyMenuListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubStudyMenuListPage');
    };
    SubStudyMenuListPage.prototype.gotoBackMenu = function () {
        console.log("gotoBackMenu");
        this.navCtrl.push("StudyFNBPage", { 'menuname': this.getmenu });
    };
    SubStudyMenuListPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.substudyLists = this.substudyArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '') {
            this.substudyLists = this.substudyArray;
        }
    };
    SubStudyMenuListPage.prototype.gotoMenuDetails = function (substudy) {
        console.log("gotoMenuDetails", substudy);
        this.navCtrl.push("StudyDetailPage", { 'menuname': substudy.name });
    };
    SubStudyMenuListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sub-study-menu-list',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/sub-study-menu-list/sub-study-menu-list.html"*/'<!--\n  Generated template for the SubStudyMenuListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Learning Platform"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="ios-arrow-back" class="iconCss" item-start (click)="gotoBackMenu()"></ion-icon>\n		<p class="pCss">{{getmenu}}</p>\n	</ion-item>\n\n	<ion-searchbar placeholder="Search" [(ngModel)]="searchTerm" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n	<ion-grid class="gridC">\n		<ion-row class="listRow" *ngFor="let substudy of substudyLists;let idx = index;" (click)="gotoMenuDetails(substudy)">\n			<progress-bar [progress]="substudy.percent" class="progr"></progress-bar>\n			<ion-col col-5 col-xl-5 col-lg-4 class="colImg">\n				<div class="btnDiv">\n					<button ion-button round class="percentBtn" [ngClass]="{\'green-btn\' : substudy.percent == \'100\'}">{{substudy.percent}}%</button>\n					<img src="{{substudy.image}}" class="listImg">	\n				</div>\n			</ion-col>\n			<ion-col col-7 col-xl-7 col-lg-8 class="colText">\n				<h3 class="listH">{{substudy.name}}</h3>\n				<p class="listP">{{substudy.points}} points</p>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/sub-study-menu-list/sub-study-menu-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SubStudyMenuListPage);
    return SubStudyMenuListPage;
}());

//# sourceMappingURL=sub-study-menu-list.js.map

/***/ })

});
//# sourceMappingURL=1.js.map