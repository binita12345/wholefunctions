webpackJsonp([28],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAndBPageModule", function() { return FAndBPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__f_and_b__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FAndBPageModule = /** @class */ (function () {
    function FAndBPageModule() {
    }
    FAndBPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__f_and_b__["a" /* FAndBPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__f_and_b__["a" /* FAndBPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], FAndBPageModule);
    return FAndBPageModule;
}());

//# sourceMappingURL=f-and-b.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAndBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
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
 * Generated class for the FAndBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FAndBPage = /** @class */ (function () {
    function FAndBPage(navCtrl, navParams, alertCtrl, storage, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.ifFoodMenuSelected = true;
        this.ifDrinkMenuSelected = false;
        this.checkCourses = [];
        this.checkDrinks = [];
        this.selectedArray = [];
        this.ifDetailName = false;
        this.ifPhoto = true;
        this.ifFoodPairing = false;
        this.ifFoodImage = true;
        this.ifFoodDetails = false;
        this.food_pageNo = 1;
        this.drink_pageNo = 1;
        this.foodMenuArray = [];
        this.foodMenuLists = [];
        this.drinkMenuArray = [];
        this.drinkMenuLists = [];
        this.foodOutlets = [];
        this.drinkOutlets = [];
        this.pagingEnabled = true;
        this.pagingEnabled1 = true;
        this.compare = false;
        this.drinkCompareLists = [];
        this.fAndB = 'foodmanu';
        this.fAndBStatusChange(this.fAndB);
    }
    FAndBPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FAndBPage');
        this.storage.get("userData").then(function (userData) {
            // console.log("userData breakage", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getFoodMenu();
        });
    };
    FAndBPage.prototype.fAndBStatusChange = function (fAndBname) {
        if (fAndBname == "foodmanu") {
            console.log("foodmanu");
            this.ifFoodMenuSelected = true;
            this.ifDrinkMenuSelected = false;
            this.getFoodMenu();
        }
        else if (fAndBname == "drinkmenu") {
            console.log("drinkmenu");
            this.ifFoodMenuSelected = false;
            this.ifDrinkMenuSelected = true;
            this.scroll = "drinkmenu";
            this.drink_pageNo = 1;
            this.pagingEnabled1 = true;
            this.getDrinkMenu();
        }
        else { }
    };
    FAndBPage.prototype.onfAndBChanged = function (event) {
        console.log("event", event.value);
        this.fAndBStatusChange(event.value);
    };
    FAndBPage.prototype.sortedFoodData = function () {
        var _this = this;
        console.log("sortedFoodData");
        this.scroll = "foodmenu";
        this.food_pageNo = 1;
        this.pagingEnabled = true;
        var foodMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "food_pageno": this.food_pageNo,
            "search_val": this.foodsearch,
            "outletval": this.foodoutletId,
            "category": this.courseString
        };
        this.serviceProvider.foodMenuApi(foodMenuObj).then(function (data) {
            if (data["success"] == 0) {
            }
            else if (data["success"] == 1) {
                var foodData = data["response"];
                _this.foodMenuArray = foodData.food;
                _this.foodMenuLists = _this.foodMenuArray;
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    FAndBPage.prototype.sortedDrinkData = function () {
        var _this = this;
        this.scroll = "drinkmenu";
        this.drink_pageNo = 1;
        this.pagingEnabled1 = true;
        var drinkMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "drink_pageno": this.drink_pageNo,
            "search_val": this.drinksearch,
            "outletval": this.drinkoutletId,
            "category": this.drinkString
        };
        // console.log('drink drinkMenuObj', drinkMenuObj);
        this.serviceProvider.drinkMenuApi(drinkMenuObj).then(function (data) {
            // console.log('drink drinkMenuApi', data);
            if (data["success"] == 0) {
            }
            else if (data["success"] == 1) {
                var drinkData = data["response"];
                _this.drinkMenuArray = drinkData.drink;
                _this.drinkMenuLists = _this.drinkMenuArray;
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
                // this.getDrinkMenu();
            }
            else if (data['success'] == 4) {
                var alert_2 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    FAndBPage.prototype.onFoodOutletChange = function (foodoutlet) {
        console.log('food foodoutlet', foodoutlet);
        this.foodoutletId = foodoutlet;
        this.sortedFoodData();
    };
    FAndBPage.prototype.onDrinkOutletChange = function (drinkoutlet) {
        // console.log('drink drinkoutlet', drinkoutlet);
        this.drinkoutletId = drinkoutlet;
        this.sortedDrinkData();
    };
    FAndBPage.prototype.filterFoodItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // console.log("food val", val)
        this.foodsearch = val;
        if (this.foodsearch && this.foodsearch.trim() != '') {
            this.foodMenuLists = this.foodMenuArray.filter(function (item) {
                return ((item.item_name.toLowerCase().indexOf(_this.foodsearch.toLowerCase()) > -1) || (item.smaller_price.toLowerCase().indexOf(_this.foodsearch.toLowerCase()) > -1));
            });
        }
        else if (this.foodsearch == '' || this.foodsearch == undefined) {
            this.foodMenuLists = this.foodMenuArray;
        }
        this.sortedFoodData();
    };
    FAndBPage.prototype.filterDrinkItems = function (ev) {
        var _this = this;
        var val1 = ev.target.value;
        this.drinksearch = val1;
        if (this.drinksearch && this.drinksearch.trim() != '') {
            this.drinkMenuLists = this.drinkMenuArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(_this.drinksearch.toLowerCase()) > -1));
            });
        }
        else if (this.drinksearch == '' || this.drinksearch == undefined) {
            this.drinkMenuLists = this.drinkMenuArray;
        }
        this.sortedDrinkData();
    };
    FAndBPage.prototype.selectCourse = function (course) {
        console.log("selectCourse");
        if (course.isChecked == true) {
            this.selectedArray.push(course);
        }
        else {
            var newArray = this.selectedArray.filter(function (el) {
                return el.id !== course.id;
            });
            this.selectedArray = newArray;
        }
        Array.prototype.map.call(this.selectedArray, function (s) { return s.id; }).toString(); // "A,B,C"
        this.courseString = Array.prototype.map.call(this.selectedArray, function (s) { return s.id; }).toString();
        this.sortedFoodData();
    };
    FAndBPage.prototype.getFoodMenu = function () {
        var _this = this;
        console.log("getFoodMenu");
        this.scroll = "foodmenu";
        var foodMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "food_pageno": this.food_pageNo,
            "search_val": this.foodsearch,
            "outletval": this.foodoutletId,
            "category": this.courseString
        };
        // console.log("foodMenuObj", foodMenuObj);
        this.serviceProvider.foodMenuApi(foodMenuObj).then(function (data) {
            // console.log("foodMenuApi" +JSON.stringify(data));
            if (data["success"] == 0) {
            }
            else if (data["success"] == 1) {
                var foodData = data["response"];
                _this.foodOutlets = foodData.outlet;
                // console.log("food this.foodOutlets", this.foodOutlets);
                _this.checkCourses = foodData.category;
                _this.foodMenuArray = foodData.food;
                _this.foodMenuLists = _this.foodMenuArray;
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
                // this.getDrinkMenu();
            }
            else if (data['success'] == 4) {
                var alert_3 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    FAndBPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.scroll = "foodmenu";
        this.food_pageNo = this.food_pageNo + 1;
        var foodMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "food_pageno": this.food_pageNo,
            "search_val": this.foodsearch,
            "outletval": this.foodoutletId,
            "category": this.courseString
        };
        setTimeout(function () {
            _this.serviceProvider.foodMenuApi(foodMenuObj).then(function (data) {
                var obj = data;
                if (obj.response.food.length) {
                    for (var i in obj.response.food) {
                        _this.newfoods = obj.response.food[i];
                        _this.foodMenuArray.push(_this.newfoods);
                    }
                }
                else {
                    _this.pagingEnabled = false;
                    _this.food_pageNo = _this.food_pageNo - 1;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    FAndBPage.prototype.selectDrink = function (drink) {
        console.log('drink', drink);
        this.drinkCompareLists = [];
        if (drink.isChecked == true) {
            this.selectedArray.push(drink);
        }
        else {
            var newArray = this.selectedArray.filter(function (el) {
                return el.id !== drink.id;
            });
            this.selectedArray = newArray;
        }
        Array.prototype.map.call(this.selectedArray, function (s) { return s.id; }).toString(); // "A,B,C"
        this.drinkString = Array.prototype.map.call(this.selectedArray, function (s) { return s.id; }).toString();
        this.sortedDrinkData();
    };
    FAndBPage.prototype.getDrinkMenu = function () {
        var _this = this;
        this.scroll = "drinkmenu";
        // console.log("getFoodMenu");
        var drinkMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "drink_pageno": this.drink_pageNo,
            "search_val": this.drinksearch,
            "outletval": this.drinkoutletId,
            "category": this.drinkString
        };
        // console.log("drinkMenuObj", drinkMenuObj);
        this.serviceProvider.drinkMenuApi(drinkMenuObj).then(function (data) {
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                // this.error = '';
                var drinkData = data["response"];
                _this.drinkOutlets = drinkData.outlet;
                // console.log("drink this.drinkOutlets", this.drinkOutlets);
                _this.checkDrinks = drinkData.category;
                _this.drinkMenuArray = drinkData.drink;
                _this.drinkMenuLists = _this.drinkMenuArray;
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
                var alert_4 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.push("LoginPage");
                            }
                        }
                    ]
                });
                alert_4.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    FAndBPage.prototype.doInfinite1 = function (infiniteScroll) {
        var _this = this;
        this.scroll = "drinkmenu";
        this.drink_pageNo = this.drink_pageNo + 1;
        var drinkMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "drink_pageno": this.drink_pageNo,
            "search_val": this.drinksearch,
            "outletval": this.drinkoutletId,
            "category": this.drinkString
        };
        setTimeout(function () {
            _this.serviceProvider.drinkMenuApi(drinkMenuObj).then(function (data) {
                var obj = data;
                if (obj.response.drink.length) {
                    for (var i in obj.response.drink) {
                        _this.newdrinks = obj.response.drink[i];
                        _this.drinkMenuArray.push(_this.newdrinks);
                    }
                }
                else {
                    _this.pagingEnabled1 = false;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    FAndBPage.prototype.desertDetail = function () {
        console.log("desertDetail");
        this.ifDetailName = true;
    };
    FAndBPage.prototype.closeDetail = function () {
        console.log("desertDetail");
        this.ifDetailName = false;
    };
    FAndBPage.prototype.selectPhoto = function () {
        console.log("select photo");
        this.ifPhoto = false;
        this.ifFoodPairing = true;
        this.ifFoodImage = false;
        this.ifFoodDetails = true;
    };
    FAndBPage.prototype.selectFoodPairing = function () {
        console.log("select food pairing");
        this.ifPhoto = true;
        this.ifFoodPairing = false;
        this.ifFoodImage = true;
        this.ifFoodDetails = false;
    };
    FAndBPage.prototype.compareThreeWines = function (drink, index) {
        console.log("compare wines", drink);
        this.compare = true;
        if (this.drinkCompareLists.length < 3) {
            this.comparedDrink = drink;
            var index_1 = this.drinkMenuLists.indexOf(drink);
            if (index_1 > -1) {
                this.drinkMenuLists.splice(index_1, 1);
            }
            this.drinkCompareLists.push(this.comparedDrink);
        }
    };
    FAndBPage.prototype.dontCompareThreeWines = function (drink, index) {
        console.log("don't compare wines", drink);
        if (this.drinkCompareLists.length > 0) {
            this.dontcomparedDrink = drink;
            var index_2 = this.drinkCompareLists.indexOf(drink);
            if (index_2 > -1) {
                this.drinkCompareLists.splice(index_2, 1);
            }
            this.drinkMenuLists.push(this.dontcomparedDrink);
        }
    };
    FAndBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-f-and-b',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/f-and-b/f-and-b.html"*/'<!--\n  Generated template for the FAndBPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="My Department"> </header>\n\n\n<ion-content class="paddingTop">\n	<ion-toolbar class="toolbar-color">\n    <ion-segment [(ngModel)]="fAndB" (ionChange)="onfAndBChanged($event)" class="segment">\n      <ion-segment-button value="foodmanu" class="segment-btn">\n        Food Menu\n      </ion-segment-button>\n      <ion-segment-button value="drinkmenu" class="segment-btn">\n        Drink Menu	\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  \n  <div class="divC" navPop>\n  	<ion-icon name="ios-arrow-back" class="iconC"></ion-icon>\n  	<p class="nameC">F&B</p>\n  </div>\n  \n  <div *ngIf="ifFoodMenuSelected">\n  	<div class="divMain">\n	    <ion-searchbar placeholder="Search" [(ngModel)]="searchFood" (ionInput)="filterFoodItems($event)" class="searchBar"></ion-searchbar>\n		  <ion-label class="selLabel">OUTLET</ion-label>\n		  <ion-item class="ionItem">\n		  	<ion-select name="foodoutlet" [(ngModel)]="foodoutlet" (ionChange)="onFoodOutletChange(foodoutlet)" placeholder="All" text-wrap class="selectItem">\n			    <ion-option *ngFor="let foodoutlet of foodOutlets" [value]="foodoutlet.id" [selected]="foodoutlet.id == foodoutlet">{{foodoutlet.name}}</ion-option>\n			  </ion-select>\n			</ion-item>\n			<br/>\n			<ion-label class="selLabel">COURSE</ion-label>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6 col-xl-6 *ngFor="let course of checkCourses;let idx = index;" class="checkCss">\n						<ion-item class="checkItem">\n							<ion-checkbox [(ngModel)]="course.isChecked" class="chkbox" (click)="selectCourse(course)"></ion-checkbox>\n					    <ion-label class="checkLabel">{{course.name}}</ion-label>\n				    </ion-item>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n\n			<ion-grid>\n				<ion-row class="rowFood" *ngFor="let food of foodMenuLists">\n					<ion-col col-12 col-xl-12 class="colImg">\n						<ion-slides options="slideOpts" class="slideCss" #slides autoplay="3000" loop pager="true">\n				      <ion-slide *ngFor="let slideimage of food?.images">\n				        <img src="{{slideimage.image}}" class="foodImg">\n				      </ion-slide>\n				    </ion-slides>\n					</ion-col>\n						\n					<ion-col col-12 col-xl-12>\n						<b class="descB">{{food.item_name}}</b>\n						<br/>\n						<ion-item class="mainItem">\n							<p item-start>Glutonfree<br>\n								<ion-icon name="md-checkmark" class="trueC" *ngIf="food.glutenfree == \'1\'"></ion-icon>\n								<img src="assets/imgs/mydepartment/prepare.png" *ngIf="food.glutenfree == \'2\'" class="prepareC">\n								<ion-icon name="md-close" class="falseC" *ngIf="food.glutenfree == \'0\'"></ion-icon>\n							</p>\n							<p>Lactosefree<br>\n								<ion-icon name="md-checkmark" class="trueC" *ngIf="food.lacetosefree == \'1\'"></ion-icon>\n								<img src="assets/imgs/mydepartment/prepare.png" *ngIf="food.lacetosefree == \'2\'" class="prepareC">\n								<ion-icon name="md-close" class="falseC" *ngIf="food.lacetosefree == \'0\'"></ion-icon>\n							</p>\n							<p item-end>Veggie<br>\n								<ion-icon name="md-checkmark" class="trueC" *ngIf="food.veggie == \'1\'"></ion-icon>\n								<img src="assets/imgs/mydepartment/prepare.png" *ngIf="food.veggie == \'2\'" class="prepareC">\n								<ion-icon name="md-close" class="falseC" *ngIf="food.veggie == \'0\'"></ion-icon>\n							</p>\n						</ion-item>\n						<ion-item class="mainItem1">\n							<p item-start>Vegan<br>\n								<ion-icon name="md-checkmark" class="trueC" *ngIf="food.vegan == \'1\'"></ion-icon>\n								<img src="assets/imgs/mydepartment/prepare.png" *ngIf="food.vegan == \'2\'" class="prepareC">\n								<ion-icon name="md-close" class="falseC" *ngIf="food.vegan == \'0\'"></ion-icon>\n							</p>\n							<p>Alcohol<br>\n								<ion-icon name="md-checkmark" class="trueC" *ngIf="food.alcohol == \'1\'"></ion-icon>\n								<img src="assets/imgs/mydepartment/prepare.png" *ngIf="food.alcohol == \'2\'" class="prepareC">\n								<ion-icon name="md-close" class="falseC" *ngIf="food.alcohol == \'0\'"></ion-icon>\n							</p>\n						</ion-item>\n\n						<ion-row  *ngFor="let menu of food?.menu">\n							<ion-col col-5 col-xl-5 class="ingname">\n								{{menu.name}}\n							</ion-col>\n							<ion-col col-7 col-xl-7 class="ingdetail">\n								{{menu.value}}\n							</ion-col>\n						</ion-row>\n						<div style="border: 0.55px solid #C7C8CA;"></div>\n						<ion-row>\n							<ion-col col-5 col-xl-5 class="ingname">\n								Price\n							</ion-col>\n							<ion-col col-7 col-xl-7 class="ingdetail">\n								{{food.smaller_price}}€ <b *ngIf="food.larger_price !== \'\'">(larger portion {{food.larger_price}})€</b>\n							</ion-col>\n						</ion-row>\n					</ion-col>\n				</ion-row>\n\n				<div class="divFood" *ngIf="foodMenuLists.length <= 0">\n					No Foods Available\n				</div>\n			</ion-grid>\n			<ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="scroll == \'foodmenu\'">\n		    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more food data..." *ngIf="pagingEnabled"></ion-infinite-scroll-content>\n		  </ion-infinite-scroll>\n		  <div *ngIf="!pagingEnabled && scroll == \'foodmenu\'" class="nopost"> No more food data is available.</div>\n		</div>\n  </div>\n\n  <!-- ///////////////////////////////////////  Drink Menu ////////////////////////////////////////////// -->\n  <div *ngIf="ifDrinkMenuSelected">\n    <div class="divMain">\n	    <ion-searchbar placeholder="Search" [(ngModel)]="searchDrink" (ionInput)="filterDrinkItems($event)" class="searchBar"></ion-searchbar>\n		  <ion-label class="selLabel">OUTLET</ion-label>\n		  <ion-item class="ionItem">\n		    <ion-select name="drinkoutlet" [(ngModel)]="drinkoutlet" (ionChange)="onDrinkOutletChange(drinkoutlet)" placeholder="All" text-wrap class="selectItem">\n			    <ion-option *ngFor="let drinkoutlet of drinkOutlets" [value]="drinkoutlet.id" [selected]="drinkoutlet.id == drinkoutlet">{{drinkoutlet.name}}</ion-option>\n			  </ion-select>\n			</ion-item>\n			<br/>\n			<ion-label class="selLabel">SORT OF DRINK</ion-label>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6 col-xl-6 *ngFor="let drink of checkDrinks" class="checkCss">\n						<ion-item class="checkItem">\n							<ion-checkbox [(ngModel)]="drink.isChecked" class="chkbox" (click)="selectDrink(drink)"></ion-checkbox>\n					    <ion-label class="checkLabel">{{drink.name}}</ion-label>\n				    </ion-item>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n\n			<ion-grid *ngIf="compare">\n				<div *ngFor="let drink of drinkCompareLists;let idx = index;">\n\n					<ion-row class="rowFood" *ngIf="drink.category == \'2\'">\n						<ion-col col-4 col-xl-4 class="colImg">\n							<div>\n								<ion-slides options="slideOpts" class="slideCss" #slides autoplay="3000" loop pager="true">\n						      <ion-slide *ngFor="let slideimage of drink?.images">\n						        <img src="{{slideimage.image}}" class="whitewineImg">\n						      </ion-slide>\n						    </ion-slides>\n							</div>\n						</ion-col>\n						<ion-col col-8 col-xl-8 class="colDetail">\n							<ion-item class="comB">\n								<button ion-button round class="comBtn" (click)="dontCompareThreeWines(drink, idx)" item-end>DON\'T COMPARE</button>\n							</ion-item>\n							<b class="descB">{{drink.name}}</b>\n							<br/>\n							<ion-row>\n								<ion-col col-4 col-xl-4 class="comN">\n									Dryness\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ingdetail1">\n									dry\n								</ion-col>\n								<ion-col col-4 col-xl-4 class="comN">\n									acidity\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ratingC">\n									<rating [(ngModel)]="drink.acidity" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-4 col-xl-4 class="comN">\n									Body\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ratingC">\n									<rating [(ngModel)]="drink.body" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-4 col-xl-4 class="comN">\n									Finish\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ratingC">\n									<rating [(ngModel)]="drink.finish" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n							</ion-row>\n							\n						</ion-col>\n\n						<ion-col col-12 col-xl-12 class="colDetail">\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Nose\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.nose}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Taste\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.taste}}\n								</ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Alcohol\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.alcohol}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Soil\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.soil}}\n								</ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Price\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.larger_price}}€\n								</ion-col>\n							</ion-row>\n\n							<ion-row class="radioRow">\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Grape<br>\n										<b class="boldName">{{drink.grape}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Country Region<br>\n										<b class="boldName">{{drink.country}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss"> \n									<br/>\n									<p class="nameCss">Year<br>\n										<b class="boldName">{{drink.year}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Maturation<br>\n										<b class="boldName">{{drink.maturation}}</b>\n									</p>\n								</ion-col>\n							</ion-row>\n						</ion-col>\n					</ion-row>\n\n					<ion-row class="rowFood" *ngIf="drink.category == \'1\'">\n						<ion-col col-4 col-xl-4 class="colImg">\n							<div>\n								<ion-slides options="slideOpts" class="slideCss" #slides autoplay="3000" loop pager="true">\n						      <ion-slide *ngFor="let slideimage of drink?.images">\n						        <img src="{{slideimage.image}}" class="whitewineImg">\n						      </ion-slide>\n						    </ion-slides>\n							</div>\n						</ion-col>\n						<ion-col col-8 col-xl-8 class="colDetail">\n							<ion-item class="comB">\n								<button ion-button round class="comBtn" (click)="dontCompareThreeWines(drink, idx)" item-end>DON\'T COMPARE</button>\n							</ion-item>\n							<b class="descB">{{drink.name}}</b>\n							<br/>\n							<ion-row>\n								<ion-col col-4 col-xl-4 class="comN">\n									Dryness\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ingdetail1">\n									dry\n								</ion-col>\n								<ion-col col-4 col-xl-4 class="comN">\n									acidity\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ratingC">\n									<rating [(ngModel)]="drink.acidity" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-4 col-xl-4 class="comN">\n									Body\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ratingC">\n									<rating [(ngModel)]="drink.body" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-4 col-xl-4 class="comN">\n									Finish\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ratingC">\n									<rating [(ngModel)]="drink.finish" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n									</rating>\n								</ion-col>\n								<ion-col col-4 col-xl-4 class="ingname">\n									Tannins\n								</ion-col>\n								<ion-col col-8 col-xl-8 class="ratingC">\n									<rating [(ngModel)]="drink.tannins" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n							</ion-row>\n							\n						</ion-col>\n\n						<ion-col col-12 col-xl-12 class="colDetail">\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Nose\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.nose}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Taste\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.taste}}\n								</ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Alcohol\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.alcohol}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Soil\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.soil}}\n								</ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Price\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.larger_price}}€\n								</ion-col>\n							</ion-row>\n\n							<ion-row class="radioRow">\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Grape<br>\n										<b class="boldName">{{drink.grape}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Country Region<br>\n										<b class="boldName">{{drink.country}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss"> \n									<br/>\n									<p class="nameCss">Year<br>\n										<b class="boldName">{{drink.year}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Maturation<br>\n										<b class="boldName">{{drink.maturation}}</b>\n									</p>\n								</ion-col>\n							</ion-row>\n						</ion-col>\n					</ion-row>\n				</div>\n			</ion-grid>\n\n			<ion-grid>\n				<div *ngFor="let drink of drinkMenuLists;let idx = index;">\n					<ion-row class="rowFood" *ngIf="drink.category == \'1\'">\n						<ion-col col-12 col-xl-12 class="colImg">\n							<div>\n								<ion-slides options="slideOpts" class="slideCss" #slides autoplay="3000" loop pager="true" *ngIf="ifFoodImage">\n						      <ion-slide *ngFor="let slideimage of drink?.images">\n						        <img src="{{slideimage.image}}" class="whitewineImg">\n						      </ion-slide>\n						    </ion-slides>\n\n								<div class="wineDetailDiv" *ngIf="ifFoodDetails">\n									<ion-row class="pairC" *ngFor="let pairingfood of drink?.pairing_foods">\n										<ion-col col-3 col-xl-3 class="colBG">\n											<img src="{{pairingfood.images}}" class="dprtImg">\n										</ion-col>\n										<ion-col col-9 col-xl-9 class="colBG1">\n											<h6>{{pairingfood.item_name}}</h6>\n											<div *ngFor="let pairmenu of pairingfood?.menu">\n										    <p class="foodP">{{pairmenu.name}} : {{pairmenu.value}}</p>\n									    </div>\n										</ion-col>\n										<ion-col col-12 col-xl-12 class="nopair" *ngIf="pairingfood?.id == \'\'">\n											No Pairing Foods available\n										</ion-col>\n									</ion-row>\n								</div>\n								<img src="assets/imgs/mydepartment/photo.png" class="toggleC" *ngIf="ifPhoto" (click)="selectPhoto()">\n								<img src="assets/imgs/mydepartment/foodpairing.png" class="toggleC1" *ngIf="ifFoodPairing" (click)="selectFoodPairing()">\n							</div>\n						</ion-col>\n						<ion-item class="btnItem">\n							<button ion-button round class="compareBtn" (click)="compareThreeWines(drink, idx)" item-end>COMPARE</button>\n						</ion-item>\n						<ion-col col-12 col-xl-12 class="colDetail">\n							<b class="descB">{{drink.name}}</b>\n							<br/>\n							<ion-row class="radioRow">\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Grape<br>\n										<b class="boldName">{{drink.grape}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Country Region<br>\n										<b class="boldName">{{drink.country}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss"> \n									<br/>\n									<p class="nameCss">Year<br>\n										<b class="boldName">{{drink.year}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Maturation<br>\n										<b class="boldName">{{drink.maturation}}</b>\n									</p>\n								</ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Dryness\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									dry\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									acidity\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ratingC">\n									<rating [(ngModel)]="drink.acidity" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Body\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ratingC">\n									<rating [(ngModel)]="drink.body" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Finish\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ratingC">\n									<rating [(ngModel)]="drink.finish" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Tannins\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ratingC">\n									<rating [(ngModel)]="drink.tannins" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n							</ion-row>\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Nose\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.nose}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Taste\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.taste}}\n								</ion-col>\n							</ion-row>\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Alcohol\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.alcohol}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Soil\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.soil}}\n								</ion-col>\n							</ion-row>\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Price\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.larger_price}}€\n								</ion-col>\n							</ion-row>\n						</ion-col>\n					</ion-row>\n\n					<ion-row class="rowFood" *ngIf="drink.category == \'2\'">\n						<ion-col col-12 col-xl-12 class="colImg">\n							<div>\n								<ion-slides options="slideOpts" class="slideCss" #slides autoplay="3000" loop pager="true" *ngIf="ifFoodImage">\n						      <ion-slide *ngFor="let slideimage of drink?.images">\n						        <img src="{{slideimage.image}}" class="whitewineImg">\n						      </ion-slide>\n						    </ion-slides>\n\n								<div class="wineDetailDiv" *ngIf="ifFoodDetails">\n									<ion-row class="pairC" *ngFor="let pairingfood of drink?.pairing_foods">\n										<ion-col col-3 col-xl-3 class="colBG">\n											<img src="{{pairingfood.images}}" class="dprtImg">\n										</ion-col>\n										<ion-col col-9 col-xl-9 class="colBG1">\n											<h6>{{pairingfood.item_name}}</h6>\n											<div *ngFor="let pairmenu of pairingfood?.menu">\n										    <p class="foodP">{{pairmenu.name}} : {{pairmenu.value}}</p>\n									    </div>\n										</ion-col>\n									\n										<ion-col col-12 col-xl-12 class="nopair" *ngIf="pairingfood?.id == \'\'">\n											No Pairing Foods available\n										</ion-col>\n									</ion-row>\n								</div>\n								<img src="assets/imgs/mydepartment/photo.png" class="toggleC" *ngIf="ifPhoto" (click)="selectPhoto()">\n								<img src="assets/imgs/mydepartment/foodpairing.png" class="toggleC1" *ngIf="ifFoodPairing" (click)="selectFoodPairing()">\n							</div>\n						</ion-col>\n						\n						<ion-item class="btnItem">\n							<button ion-button round class="compareBtn" (click)="compareThreeWines(drink, idx)" item-end>COMPARE</button>\n						</ion-item>\n						<ion-col col-12 col-xl-12 class="colDetail">\n							<b class="descB">{{drink.name}}</b>\n							<br/>\n							<ion-row class="radioRow">\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Grape<br>\n										<b class="boldName">{{drink.grape}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Country Region<br>\n										<b class="boldName">{{drink.country}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss"> \n									<br/>\n									<p class="nameCss">Year<br>\n										<b class="boldName">{{drink.year}}</b>\n									</p>\n								</ion-col>\n								<ion-col col-6 col-xl-6 col-lg-3 class="radioCss">\n									<p class="nameCss">Maturation<br>\n										<b class="boldName">{{drink.maturation}}</b>\n									</p>\n								</ion-col>\n							</ion-row>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Dryness\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									dry\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									acidity\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ratingC">\n									<rating [(ngModel)]="drink.acidity" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Body\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ratingC">\n									<rating [(ngModel)]="drink.body" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Finish\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ratingC">\n									<rating [(ngModel)]="drink.finish" \n								        readOnly="true"\n								        max="5" \n								        emptyStarIconName="radio-button-off" \n								        halfStarIconName="contrast" \n								        starIconName="ios-radio-button-on" \n								        nullable="false" class="starCss">\n								</rating>\n								</ion-col>\n							</ion-row>\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Nose\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.nose}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Taste\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.taste}}\n								</ion-col>\n							</ion-row>\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Alcohol\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.alcohol}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Soil\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.soil}}\n								</ion-col>\n							</ion-row>\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Price\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.larger_price}}€\n								</ion-col>\n							</ion-row>\n						</ion-col>\n					</ion-row>\n\n					<ion-row class="rowFood" *ngIf="drink.category == \'3\'">\n						<ion-col col-12 col-xl-12 class="colImg">\n							<ion-slides options="slideOpts" class="slideCss" #slides autoplay="3000" loop pager="true">\n					      <ion-slide *ngFor="let slideimage of drink?.images">\n					        <img src="{{slideimage.image}}" class="foodImg">\n					      </ion-slide>\n					    </ion-slides>\n						</ion-col>\n						<ion-col col-12 col-xl-12>\n							<b class="descB">{{drink.name}}</b>\n							<br/>\n							<ion-item class="mainItem">\n								<p item-start>still {{drink.small_litre}}<br>\n									<b class="boldName">{{drink.smaller_price}}€</b>\n								</p>\n								<p>still  {{drink.large_litre}}<br>\n									<b class="boldName">{{drink.larger_price}}€</b>\n								</p>\n							</ion-item>\n						</ion-col>\n					</ion-row>\n\n					<ion-row class="rowFood" *ngIf="drink.category == \'4\'">\n						<ion-col col-12 col-xl-12 class="colImg">\n							<ion-slides options="slideOpts" class="slideCss" #slides autoplay="3000" loop pager="true">\n					      <ion-slide *ngFor="let slideimage of drink?.images">\n					        <img src="{{slideimage.image}}" class="foodImg">\n					      </ion-slide>\n					    </ion-slides>\n						</ion-col>\n						<ion-col col-12 col-xl-12>\n							<b class="descB">{{drink.name}}</b>\n							<br/>\n							<ion-item class="mainItem">\n								<p item-start>small<br>\n									<b class="boldName">{{drink.smaller_price}}€</b>\n								</p>\n								<p>large<br>\n									<b class="boldName">{{drink.larger_price}}€</b>\n								</p>\n							</ion-item>\n						</ion-col>\n					</ion-row>\n\n					<ion-row class="rowFood" *ngIf="drink.category == \'5\'">\n						<ion-col col-12 col-xl-12 class="colImg">\n							<img src="assets/imgs/mydepartment/drink2.jpg" class="foodImg">\n						</ion-col>\n						<ion-col col-12 col-xl-12>\n							<b class="descB">{{drink.name}}</b>\n							<br/>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Recipe\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.recipe}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Equipment\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.equipment}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Preparation\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.preperation}}\n								</ion-col>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Garnish\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									{{drink.garnish}}\n								</ion-col>\n							</ion-row>\n							<div style="border: 0.55px solid #C7C8CA;"></div>\n							<ion-row>\n								<ion-col col-5 col-xl-5 class="ingname">\n									Price\n								</ion-col>\n								<ion-col col-7 col-xl-7 class="ingdetail1">\n									12€\n								</ion-col>\n							</ion-row>\n						</ion-col>\n					</ion-row>\n				</div>\n\n				<div class="divFood" *ngIf="drinkMenuLists.length <= 0">\n					No Drinks Available\n				</div>\n			</ion-grid>\n\n			\n\n			<ion-infinite-scroll (ionInfinite)="doInfinite1($event)" *ngIf="scroll == \'drinkmenu\'">\n		    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more drink data..." *ngIf="pagingEnabled1"></ion-infinite-scroll-content>\n		  </ion-infinite-scroll>\n		  <div *ngIf="!pagingEnabled1 && scroll == \'drinkmenu\'" class="nopost"> No more drink data is available.</div>\n		</div>\n  </div>\n\n  <div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/f-and-b/f-and-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], FAndBPage);
    return FAndBPage;
}());

//# sourceMappingURL=f-and-b.js.map

/***/ })

});
//# sourceMappingURL=28.js.map