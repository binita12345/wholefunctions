webpackJsonp([42],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakagePageModule", function() { return BreakagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breakage__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BreakagePageModule = /** @class */ (function () {
    function BreakagePageModule() {
    }
    BreakagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__breakage__["a" /* BreakagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__breakage__["a" /* BreakagePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], BreakagePageModule);
    return BreakagePageModule;
}());

//# sourceMappingURL=breakage.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakagePage; });
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
 * Generated class for the BreakagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BreakagePage = /** @class */ (function () {
    function BreakagePage(navCtrl, navParams, alertCtrl, storage, serviceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.breakage = 'wine';
        this.ifWineMenuSelected = true;
        this.ifChinaMenuSelected = false;
        this.ifGlassesMenuSelected = false;
        this.winebreakageArray = [];
        this.chinabreakageArray = [];
        this.glassbreakageArray = [];
        this.isnotListarray = false;
        this.isListarray = false;
        this.isnotGlassListarray = false;
        this.isGlassListarray = false;
        this.isnotChineListarray = false;
        this.isChineListarray = false;
        this.InwineMenu = true;
        this.InChinaMenu = false;
        this.InGlassMenu = false;
        this.wine_pageNo = 1;
        this.china_pageNo = 1;
        this.glass_pageNo = 1;
        this.error = '';
        this.pagingEnabled = true;
        this.pagingEnabled1 = true;
        this.pagingEnabled2 = true;
        this.addbreakageType = navParams.get('addBreakageType');
        console.log("this.addbreakageType", this.addbreakageType);
        if (this.addbreakageType == "wine") {
            this.scroll = "winescroll";
            this.breakage = 'wine';
            this.breakageChange(this.breakage);
        }
        else if (this.addbreakageType == "china") {
            this.scroll = "chinascroll";
            this.breakage = 'china';
            this.breakageChange(this.breakage);
        }
        else if (this.addbreakageType == "glass") {
            this.scroll = "glassscroll";
            this.breakage = 'glass';
            this.breakageChange(this.breakage);
        }
        else {
            this.scroll = "winescroll";
            this.breakage = 'wine';
            this.breakageChange(this.breakage);
        }
    }
    BreakagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BreakagePage');
        this.storage.get("userData").then(function (userData) {
            // console.log("userData breakage", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.displayBreakage();
        });
    };
    BreakagePage.prototype.breakageChange = function (breakagename) {
        if (breakagename == "wine") {
            console.log("wine");
            this.scroll = "winescroll";
            this.china_pageNo = 1;
            this.glass_pageNo = 1;
            this.ifWineMenuSelected = true;
            this.ifChinaMenuSelected = false;
            this.ifGlassesMenuSelected = false;
            this.InwineMenu = true;
            this.InChinaMenu = false;
            this.InGlassMenu = false;
        }
        else if (breakagename == "china") {
            console.log("china");
            this.scroll = "chinascroll";
            this.wine_pageNo = 1;
            this.glass_pageNo = 1;
            this.ifWineMenuSelected = false;
            this.ifChinaMenuSelected = true;
            this.ifGlassesMenuSelected = false;
            this.InwineMenu = false;
            this.InChinaMenu = true;
            this.InGlassMenu = false;
        }
        else if (breakagename == "glass") {
            console.log("glass");
            this.wine_pageNo = 1;
            this.china_pageNo = 1;
            this.scroll = "glassscroll";
            this.ifWineMenuSelected = false;
            this.ifChinaMenuSelected = false;
            this.ifGlassesMenuSelected = true;
            this.InwineMenu = false;
            this.InChinaMenu = false;
            this.InGlassMenu = true;
        }
        else { }
    };
    BreakagePage.prototype.onBreakageChanged = function (event) {
        console.log("event", event.value);
        this.breakageChange(event.value);
    };
    BreakagePage.prototype.displayBreakage = function () {
        var _this = this;
        console.log("display breakage");
        this.error = '';
        var disBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "wine_pageno": this.wine_pageNo,
            "china_pageno": this.china_pageNo,
            "glass_pageno": this.glass_pageNo
        };
        this.serviceProvider.displayBreakageApi(disBreakageObj).then(function (data) {
            console.log("displayBreakageApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                var breakages = data["response"];
                for (var i in breakages) {
                    if (breakages[i].type == "wine") {
                        _this.winebreakageArray = breakages[i].data;
                        if (_this.winebreakageArray.length < 0 || _this.winebreakageArray.length == []) {
                            _this.isnotListarray = true;
                            _this.isListarray = false;
                        }
                        else {
                            _this.isnotListarray = false;
                            _this.isListarray = true;
                        }
                    }
                    else if (breakages[i].type == "china") {
                        _this.chinabreakageArray = breakages[i].data;
                        if (_this.chinabreakageArray.length == [] || _this.chinabreakageArray.length < 0) {
                            _this.isnotChineListarray = true;
                            _this.isChineListarray = false;
                        }
                        else {
                            _this.isnotChineListarray = false;
                            _this.isChineListarray = true;
                        }
                    }
                    else if (breakages[i].type == "glass") {
                        _this.glassbreakageArray = breakages[i].data;
                        if (_this.glassbreakageArray.length == [] || _this.glassbreakageArray.length < 0) {
                            _this.isnotGlassListarray = true;
                            _this.isGlassListarray = false;
                        }
                        else {
                            _this.isnotGlassListarray = false;
                            _this.isGlassListarray = true;
                        }
                    }
                }
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
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
    BreakagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log("scroll");
        this.scroll = "winescroll";
        this.wine_pageNo = this.wine_pageNo + 1;
        var disBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "wine_pageno": this.wine_pageNo,
        };
        setTimeout(function () {
            _this.serviceProvider.displayBreakageApi(disBreakageObj).then(function (data) {
                var obj = data;
                for (var i in obj.response) {
                    // console.log("obj.response[i]", obj.response[i]);
                    var scrolldata = obj.response[i].data;
                    _this.scrolldata = scrolldata;
                    if (_this.scrolldata.length) {
                        for (var i_1 in _this.scrolldata) {
                            // console.log("this.scrolldata[i].breakage_type", this.scrolldata[i].breakage_type);
                            if (_this.scrolldata[i_1].breakage_type == "wine") {
                                _this.winebreakageArray.push(_this.scrolldata[i_1]);
                                // console.log("this.winebreakageArray", this.winebreakageArray);
                            }
                        }
                    }
                    else {
                        _this.pagingEnabled = false;
                    }
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    BreakagePage.prototype.doInfinite1 = function (infiniteScroll) {
        var _this = this;
        console.log("scroll");
        this.scroll = "chinascroll";
        this.china_pageNo = this.china_pageNo + 1;
        var disBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "china_pageno": this.china_pageNo,
        };
        setTimeout(function () {
            _this.serviceProvider.displayBreakageApi(disBreakageObj).then(function (data) {
                var obj = data;
                console.log("obj.response.length", obj.response.length);
                for (var i in obj.response) {
                    console.log("obj.response[i]", obj.response[i]);
                    var scrolldata1 = obj.response[i].data;
                    _this.scrolldata1 = scrolldata1;
                    if (_this.scrolldata1.length) {
                        for (var i_2 in _this.scrolldata1) {
                            console.log("this.scrolldata1[i].breakage_type", _this.scrolldata1[i_2].breakage_type);
                            if (_this.scrolldata1[i_2].breakage_type == "china") {
                                _this.chinabreakageArray.push(_this.scrolldata1[i_2]);
                                console.log("this.chinabreakageArray", _this.chinabreakageArray);
                            }
                        }
                    }
                    else {
                        _this.pagingEnabled1 = false;
                    }
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    BreakagePage.prototype.doInfinite2 = function (infiniteScroll) {
        var _this = this;
        console.log("scroll");
        this.scroll = "glassscroll";
        this.glass_pageNo = this.glass_pageNo + 1;
        var disBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "glass_pageno": this.glass_pageNo
        };
        setTimeout(function () {
            _this.serviceProvider.displayBreakageApi(disBreakageObj).then(function (data) {
                var obj = data;
                for (var i in obj.response) {
                    console.log("obj.response[i]", obj.response[i]);
                    var scrolldata2 = obj.response[i].data;
                    console.log("scrolldata2", scrolldata2);
                    _this.scrolldata2 = scrolldata2;
                    if (_this.scrolldata2.length) {
                        for (var i_3 in _this.scrolldata2) {
                            console.log("this.scrolldata2[i].breakage_type", _this.scrolldata2[i_3].breakage_type);
                            if (_this.scrolldata2[i_3].breakage_type == "glass") {
                                _this.glassbreakageArray.push(_this.scrolldata2[i_3]);
                                console.log("this.glassbreakageArray", _this.glassbreakageArray);
                            }
                        }
                    }
                    else {
                        _this.pagingEnabled2 = false;
                    }
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    BreakagePage.prototype.AddWineBreakage = function () {
        console.log("add breakage");
        this.breakage = 'wine';
        this.navCtrl.push("CreateNewBreakagePage", { 'breakage': this.breakage });
    };
    BreakagePage.prototype.AddChinaBreakage = function () {
        console.log("add breakage");
        this.breakage = 'china';
        this.navCtrl.push("CreateNewBreakagePage", { 'breakage': this.breakage });
    };
    BreakagePage.prototype.AddGlassBreakage = function () {
        console.log("add breakage");
        this.breakage = 'glass';
        this.navCtrl.push("CreateNewBreakagePage", { 'breakage': this.breakage });
    };
    BreakagePage.prototype.editBreakage = function (breakage) {
        console.log("edit breakage", breakage);
        // console.log("menu breakage", this.breakage);
        this.navCtrl.push("CreateNewBreakagePage", { 'editbreakage': breakage, 'breakage': this.breakage });
    };
    BreakagePage.prototype.removeBreakage = function (removeBreakage, index) {
        var _this = this;
        console.log("remove breakage", removeBreakage);
        console.log("remove breakage type", removeBreakage.breakage_type);
        // console.log("this.current_pageNo", this.current_pageNo);
        // this.wine_pageNo = 1;
        // this.china_pageNo = 1;
        // this.glass_pageNo = 1;
        var deleteBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "breakage_id": removeBreakage.id,
            "wine_pageno": this.wine_pageNo,
            "china_pageno": this.china_pageNo,
            "glass_pageno": this.glass_pageNo
        };
        console.log("deleteBreakageObj", deleteBreakageObj);
        var alert = this.alertCtrl.create({
            title: 'Confirm delete selected Breakage',
            message: 'Are you sure you want to delete this Breakage?',
            cssClass: 'breakageAlertCss',
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
                        _this.serviceProvider.deleteBreakageApi(deleteBreakageObj).then(function (result) {
                            // console.log("result deleteBreakageApi" +JSON.stringify(result));
                            if (result['success'] == 4) {
                                var alert_2 = _this.alertCtrl.create({
                                    subTitle: result["message"],
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
                            else if (result['success'] == 1) {
                                _this.selectedCurrent = removeBreakage;
                                if (removeBreakage.breakage_type == "wine") {
                                    _this.scroll = "winescroll";
                                    var index_1 = _this.winebreakageArray.indexOf(removeBreakage);
                                    if (index_1 > -1) {
                                        _this.winebreakageArray.splice(index_1, 1);
                                    }
                                }
                                else if (removeBreakage.breakage_type == "china") {
                                    _this.scroll = "chinascroll";
                                    var index_2 = _this.chinabreakageArray.indexOf(removeBreakage);
                                    if (index_2 > -1) {
                                        _this.chinabreakageArray.splice(index_2, 1);
                                    }
                                }
                                else if (removeBreakage.breakage_type == "glass") {
                                    _this.scroll = "glassscroll";
                                    var index_3 = _this.glassbreakageArray.indexOf(removeBreakage);
                                    if (index_3 > -1) {
                                        _this.glassbreakageArray.splice(index_3, 1);
                                    }
                                }
                                else { }
                                // this.displayBreakage();
                                var toastSuccess = _this.toastCtrl.create({
                                    message: result["message"],
                                    duration: 3000,
                                    position: 'top',
                                    showCloseButton: true,
                                    closeButtonText: 'X',
                                    cssClass: "toast-success",
                                });
                                toastSuccess.present();
                            }
                            else if (result['success'] == 2) {
                                _this.error = result["message"];
                            }
                            else if (result['success'] == 0) {
                                _this.error = result["message"];
                            }
                            else {
                            }
                        }, function (err) {
                            console.log("err deleteBreakageApi" + JSON.stringify(err));
                            // Error log
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    BreakagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-breakage',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/breakage/breakage.html"*/'<!--\n  Generated template for the BreakagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="My Department"> </header>\n\n\n<ion-content class="paddingTop">\n	<ion-toolbar class="toolbar-color">\n    <ion-segment [(ngModel)]="breakage" (ionChange)="onBreakageChanged($event)" class="segment">\n      <ion-segment-button value="wine" class="segment-btn">\n        WINE\n      </ion-segment-button>\n      <ion-segment-button value="china" class="segment-btn">\n        CHINA\n      </ion-segment-button>\n      <ion-segment-button value="glass" class="segment-btn">\n        GLASSES\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div class="divC" navPop>\n  	<ion-icon name="ios-arrow-back" class="iconC"></ion-icon>\n  	<p class="nameP">Breakage</p>\n  </div>\n  <ion-item *ngIf="InwineMenu">\n  	<button ion-button round class="breakBtn" (click)="AddWineBreakage()" item-end>ADD BREAKAGE</button>\n  </ion-item>\n  <ion-item *ngIf="InChinaMenu">\n  	<button ion-button round class="breakBtn" (click)="AddChinaBreakage()" item-end>ADD BREAKAGE</button>\n  </ion-item>\n  <ion-item *ngIf="InGlassMenu">\n  	<button ion-button round class="breakBtn" (click)="AddGlassBreakage()" item-end>ADD BREAKAGE</button>\n  </ion-item>\n\n  <div *ngIf="ifWineMenuSelected">\n  	<div class="nullDiv" *ngIf="isnotListarray">\n			<h5>No current breakages.</h5>\n			<!-- <p class="dateP">Last breakage: 17/07/2019</p> -->\n		</div>\n\n		<ion-grid class="listGrid" *ngIf="isListarray">\n			<ion-row class="listRow" *ngFor="let wine of winebreakageArray;let idx = index;">\n	  		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n	  			<img src="{{wine.image}}" class="listImg">\n	  		</ion-col>\n	  		<ion-col col-6 col-xl-6 col-lg-6 class="listcol5">\n	  			<p class="dateC">{{wine.date | date: "dd/MM/yyyy"}}</p>\n	  			<p class="nameC"><b>{{wine.amount}}l</b> {{wine.name}}</p>\n	  			<p class="reasonP">{{wine.reason}}</p>\n	  		</ion-col>\n	  		<ion-col col-2 col-xl-2 col-lg-2 class="colBtn">\n					<button ion-button round outline class="editBtn" (click)="editBreakage(wine)">EDIT</button>\n	  		</ion-col>\n	  		<ion-col col-1 col-xl-1 col-lg-1 class="closeIcon">\n	  			<ion-icon name="ios-close-circle" item-end (click)="removeBreakage(wine, idx)"></ion-icon>\n	  		</ion-col>\n	  	</ion-row>\n  	</ion-grid>\n  </div>\n\n  <div *ngIf="ifChinaMenuSelected">\n  	<div class="nullDiv" *ngIf="isnotChineListarray">\n			<h5>No current breakages.</h5>\n			<!-- <p class="dateP">Last breakage: 17/07/2019</p> -->\n		</div>\n\n		<ion-grid class="listGrid" *ngIf="isChineListarray">\n			<ion-row class="listRow" *ngFor="let china of chinabreakageArray;let idx = index;">\n	  		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n	  			<img src="{{china.image}}" class="listImg">\n	  		</ion-col>\n	  		<ion-col col-6 col-xl-6 col-lg-6 class="listcol5">\n	  			<p class="dateC">{{china.date | date: "dd/MM/yyyy"}}</p>\n	  			<p class="nameC"><b>{{china.quantity}}x</b> {{china.name}}</p>\n	  			<p class="reasonP">{{china.reason}}</p>\n	  		</ion-col>\n	  		<ion-col col-2 col-xl-2 col-lg-2 class="colBtn">\n					<button ion-button round outline class="editBtn" (click)="editBreakage(china)">EDIT</button>\n	  		</ion-col>\n	  		<ion-col col-1 col-xl-1 col-lg-1 class="closeIcon">\n	  			<ion-icon name="ios-close-circle" item-end (click)="removeBreakage(china, idx)"></ion-icon>\n	  		</ion-col>\n	  	</ion-row>\n  	</ion-grid>\n  </div>\n\n  <div *ngIf="ifGlassesMenuSelected">\n  	<div class="nullDiv" *ngIf="isnotGlassListarray">\n			<h5>No current breakages.</h5>\n			<!-- <p class="dateP">Last breakage: 17/07/2019</p> -->\n		</div>\n		<ion-grid class="listGrid" *ngIf="isGlassListarray">\n			<ion-row class="listRow" *ngFor="let glass of glassbreakageArray;let idx = index;">\n	  		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n	  			<img src="{{glass.image}}" class="listImg">\n	  		</ion-col>\n	  		<ion-col col-6 col-xl-6 col-lg-6 class="listcol5">\n	  			<p class="dateC">{{glass.date | date: "dd/MM/yyyy"}}</p>\n	  			<p class="nameC"><b>{{glass.quantity}}x</b> {{glass.name}}</p>\n	  			<p class="reasonP">{{glass.reason}}</p>\n	  		</ion-col>\n	  		<ion-col col-2 col-xl-2 col-lg-2 class="colBtn">\n					<button ion-button round outline class="editBtn" (click)="editBreakage(glass)">EDIT</button>\n	  		</ion-col>\n	  		<ion-col col-1 col-xl-1 col-lg-1 class="closeIcon">\n	  			<ion-icon name="ios-close-circle" item-end (click)="removeBreakage(glass, idx)"></ion-icon>\n	  		</ion-col>\n	  	</ion-row>\n  	</ion-grid>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="scroll == \'winescroll\'">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more wine data..." *ngIf="pagingEnabled"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf="!pagingEnabled && scroll == \'winescroll\'" class="nopost"> No more wine breakage is available.</div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite1($event)" *ngIf="scroll == \'chinascroll\'">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more china data..." *ngIf="pagingEnabled1"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf="!pagingEnabled1 && scroll == \'chinascroll\'" class="nopost"> No more china breakage is available.</div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite2($event)" *ngIf="scroll == \'glassscroll\'">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more glass data..." *ngIf="pagingEnabled2"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf="!pagingEnabled2 && scroll == \'glassscroll\'" class="nopost"> No more glass breakage is available.</div>\n  <div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/breakage/breakage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], BreakagePage);
    return BreakagePage;
}());

//# sourceMappingURL=breakage.js.map

/***/ })

});
//# sourceMappingURL=42.js.map