webpackJsonp([3],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyFNBPageModule", function() { return StudyFNBPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__study_f_n_b__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_progress_bar_progress_bar_module__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StudyFNBPageModule = /** @class */ (function () {
    function StudyFNBPageModule() {
    }
    StudyFNBPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__study_f_n_b__["a" /* StudyFNBPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__study_f_n_b__["a" /* StudyFNBPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_progress_bar_progress_bar_module__["a" /* ProgressBarComponentModule */]
            ],
        })
    ], StudyFNBPageModule);
    return StudyFNBPageModule;
}());

//# sourceMappingURL=study-f-n-b.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyFNBPage; });
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
 * Generated class for the StudyFNBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyFNBPage = /** @class */ (function () {
    function StudyFNBPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.studyWineArray = [];
        this.studyFoodArray = [];
        this.studyStandardArray = [];
        this.studyWineArray = [{ 'image': 'assets/imgs/mydepartment/greengrapes.jpg', 'percent': '87', 'name': 'White Wine Grapes', 'points': 295, 'score': 83 },
            { 'image': 'assets/imgs/mydepartment/redgrapes.jpg', 'percent': '50', 'name': 'Red Wine Grapes', 'points': 99, 'score': 28 },
            { 'image': 'assets/imgs/mydepartment/countries.jpg', 'percent': '16', 'name': 'Countrie', 'points': 55, 'score': 12 },
            { 'image': 'assets/imgs/mydepartment/maturation.jpg', 'percent': '6', 'name': 'Maturation', 'points': 10, 'score': 3 },
            { 'image': 'assets/imgs/mydepartment/degustation.jpg', 'percent': '35', 'name': 'Degustation', 'points': 40, 'score': 35 },
            { 'image': 'assets/imgs/mydepartment/comb.jpg', 'percent': '90', 'name': 'Wine + Food Combination', 'points': 280, 'score': 85 }];
        this.studyWineLists = this.studyWineArray;
        this.studyFoodArray = [{ 'image': 'assets/imgs/mydepartment/fish.jpeg', 'percent': '95', 'name': 'Fish', 'points': 295, 'score': 83 },
            { 'image': 'assets/imgs/mydepartment/meat.jpeg', 'percent': '78', 'name': 'Meat', 'points': 99, 'score': 28 },
            { 'image': 'assets/imgs/mydepartment/cheese.jpg', 'percent': '60', 'name': 'Cheese', 'points': 55, 'score': 12 },
            { 'image': 'assets/imgs/mydepartment/mashrooms.jpeg', 'percent': '82', 'name': 'Mashroom', 'points': 10, 'score': 3 },
            { 'image': 'assets/imgs/mydepartment/herbs.jpg', 'percent': '17', 'name': 'Herbs + Spices', 'points': 40, 'score': 35 },];
        this.studyFoodLists = this.studyFoodArray;
        this.studyStandardArray = [{ 'image': 'assets/imgs/mydepartment/lqa.jpg', 'percent': '100', 'name': 'LQA Breakfast', 'points': 295, 'score': 83 },
            { 'image': 'assets/imgs/mydepartment/china.jpg', 'percent': '85', 'name': 'LQA Lunch & Dinner', 'points': 99, 'score': 28 },
            { 'image': 'assets/imgs/mydepartment/telephone.jpg', 'percent': '100', 'name': 'Telephone', 'points': 55, 'score': 12 }];
        this.studyStandardLists = this.studyStandardArray;
    }
    StudyFNBPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.studyWineLists = this.studyWineArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '') {
            this.studyWineLists = this.studyWineArray;
        }
        var val1 = ev.target.value;
        if (val1 && val1.trim() != '') {
            this.studyFoodLists = this.studyFoodArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val1.toLowerCase()) > -1));
            });
        }
        else if (val1 == '') {
            this.studyFoodLists = this.studyFoodArray;
        }
        var val2 = ev.target.value;
        if (val2 && val2.trim() != '') {
            this.studyStandardLists = this.studyStandardArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val2.toLowerCase()) > -1));
            });
        }
        else if (val2 == '') {
            this.studyStandardLists = this.studyStandardArray;
        }
    };
    StudyFNBPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyFNBPage');
    };
    StudyFNBPage.prototype.gotoBackMenu = function () {
        console.log("gotoBackMenu");
        this.navCtrl.push("LearningPlatformPage");
    };
    StudyFNBPage.prototype.gotoStudyMenuList = function (menu) {
        console.log("gotoStudyMenuList", menu);
        this.navCtrl.push("SubStudyMenuListPage", { 'menuname': menu.name });
    };
    StudyFNBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-study-f-n-b',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/study-f-n-b/study-f-n-b.html"*/'<!--\n  Generated template for the StudyFNBPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Learning Platform"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="ios-arrow-back" class="iconCss" item-start (click)="gotoBackMenu()"></ion-icon>\n		<p class="pCss">F&B</p>\n	</ion-item>\n\n	<ion-searchbar placeholder="Search" [(ngModel)]="searchTerm" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n	<ion-grid class="gridC">\n		<h3 class="head">WINE</h3>\n		<ion-row class="listRow" *ngFor="let wine of studyWineLists;let idx = index;" (click)="gotoStudyMenuList(wine)">\n			<progress-bar [progress]="wine.percent" class="progr"></progress-bar>\n			<ion-col col-5 col-xl-5 col-lg-4 class="colImg">\n				<div class="btnDiv">\n					<button ion-button round class="percentBtn" [ngClass]="{\'green-btn\' : wine.percent == \'100\'}">{{wine.percent}}%</button>\n					<img src="{{wine.image}}" class="listImg">	\n				</div>\n			</ion-col>\n			<ion-col col-7 col-xl-7 col-lg-8 class="colText">\n				<h3 class="listH">{{wine.name}}</h3>\n				<p class="listP">{{wine.points}} points, {{wine.score}}% Av Score</p>\n			</ion-col>\n		</ion-row>\n		<br/>\n		<br/>\n		<h3 class="head">FOOD</h3>\n		<ion-row class="listRow" *ngFor="let food of studyFoodLists;let idx = index;" (click)="gotoStudyMenuList(food)">\n			<progress-bar [progress]="food.percent" class="progr"></progress-bar>\n			<ion-col col-5 col-xl-5 col-lg-4 class="colImg">\n				<div class="btnDiv">\n					<button ion-button round class="percentBtn" [ngClass]="{\'green-btn\' : food.percent == \'100\'}">{{food.percent}}%</button>\n					<img src="{{food.image}}" class="listImg">	\n				</div>\n			</ion-col>\n			<ion-col col-7 col-xl-7 col-lg-8 class="colText">\n				<h3 class="listH">{{food.name}}</h3>\n				<p class="listP">{{food.points}} points, {{food.score}}% Av Score</p>\n			</ion-col>\n		</ion-row>\n		<br/>\n		<br/>\n		<h3 class="head">STANDARD</h3>\n		<ion-row class="listRow" *ngFor="let standard of studyStandardLists;let idx = index;" (click)="gotoStudyMenuList(standard)">\n			<progress-bar [progress]="standard.percent" class="progr"></progress-bar>\n			<ion-col col-5 col-xl-5 col-lg-4 class="colImg">\n				<div class="btnDiv">\n					<button ion-button round class="percentBtn" [ngClass]="{\'green-btn\' : standard.percent == \'100\'}">{{standard.percent}}%</button>\n					<img src="{{standard.image}}" class="listImg">	\n				</div>\n			</ion-col>\n			<ion-col col-7 col-xl-7 col-lg-8 class="colText">\n				<h3 class="listH">{{standard.name}}</h3>\n				<p class="listP">{{standard.points}} points, {{standard.score}}% Av Score</p>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/study-f-n-b/study-f-n-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], StudyFNBPage);
    return StudyFNBPage;
}());

//# sourceMappingURL=study-f-n-b.js.map

/***/ })

});
//# sourceMappingURL=3.js.map