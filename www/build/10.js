webpackJsonp([10],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequisitionPageModule", function() { return RequisitionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requisition__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RequisitionPageModule = /** @class */ (function () {
    function RequisitionPageModule() {
    }
    RequisitionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__requisition__["a" /* RequisitionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requisition__["a" /* RequisitionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], RequisitionPageModule);
    return RequisitionPageModule;
}());

//# sourceMappingURL=requisition.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionPage; });
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
 * Generated class for the RequisitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequisitionPage = /** @class */ (function () {
    function RequisitionPage(navCtrl, navParams, modalCtrl, alertCtrl, storage, serviceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.ifWineMenuSelected = true;
        this.ifNonfoodMenuSelected = false;
        this.ifOfficeMenuSelected = false;
        this.ifLaundryMenuSelected = false;
        this.outofOrder = false;
        this.ifAllOrder = true;
        this.ifOutOrder = false;
        this.wineArray = [];
        this.checkWines = [];
        this.outofWines = [];
        this.sum = 0;
        this.all_pageNo = 1;
        this.out_order_pageNo = 1;
        this.selectedArray = [];
        this.pagingEnabled = true;
        this.pagingEnabled1 = true;
        this.outofArray = [];
        this.requisition = 'wine';
        this.scroll = "allorder";
        this.sum = 0;
        this.requisitionChange(this.requisition);
        this.checkWines = [{ 'id': 1, 'name': 'Red Wine', 'isChecked': false }, { 'id': 2, 'name': 'White Wine', 'isChecked': false }];
        this.outofWines = [{ 'id': 1, 'name': 'Red Wine', 'isChecked': false }, { 'id': 2, 'name': 'White Wine', 'isChecked': false }];
    }
    RequisitionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RequisitionPage');
        this.storage.get("userData").then(function (userData) {
            // console.log("userData breakage", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getRequisitionData();
        });
    };
    RequisitionPage.prototype.filterItems = function (ev) {
        // Reset items back to all of the items
        console.log("ev.target.value", ev.target.value);
        var val = ev.target.value;
        this.allrequsearch = val;
        if (val && val.trim() != '') {
            console.log("wineArray", this.wineArray);
            this.wineLists = this.wineArray.filter(function (item) {
                console.log("get items item...", item);
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '') {
            this.wineLists = this.wineArray;
        }
        this.sortedDrinkRequiData();
    };
    RequisitionPage.prototype.filterOutofItems = function (ev) {
        // Reset items back to all of the items
        console.log("ev.target.value", ev.target.value);
        var val1 = ev.target.value;
        this.outofrequsearch = val1;
        if (val1 && val1.trim() != '') {
            console.log("outofArray", this.outofArray);
            this.outofLists = this.outofArray.filter(function (item) {
                console.log("get items item...", item);
                return ((item.name.toLowerCase().indexOf(val1.toLowerCase()) > -1));
            });
        }
        else if (val1 == '') {
            this.outofLists = this.outofArray;
        }
        this.sortedOutofDrinkRequiData();
    };
    RequisitionPage.prototype.sortedDrinkRequiData = function () {
        var _this = this;
        this.scroll = "allorder";
        this.all_pageNo = 1;
        this.pagingEnabled = true;
        var drinkMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "all_pageno": this.all_pageNo,
            "search_val": this.allrequsearch,
            "category": this.drinkString
        };
        // console.log('drink drinkMenuObj', drinkMenuObj);
        this.serviceProvider.wineRequisitionApi(drinkMenuObj).then(function (data) {
            console.log('drink drinkMenuApi sorted', data);
            if (data["success"] == 0) {
            }
            else if (data["success"] == 1) {
                _this.wineArray = data["response"].all_drink;
                _this.wineLists = _this.wineArray;
                console.log("this.wineLists", _this.wineLists);
                // this.sum = data["response"].total;
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
                // this.getDrinkMenu();
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
    RequisitionPage.prototype.sortedOutofDrinkRequiData = function () {
        var _this = this;
        this.scroll = "outoforder";
        this.out_order_pageNo = 1;
        this.pagingEnabled1 = true;
        var drinkMenuObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "out_order_pageno": this.out_order_pageNo,
            "search_val": this.outofrequsearch,
            "category": this.outofString
        };
        // console.log('drink drinkMenuObj', drinkMenuObj);
        this.serviceProvider.wineRequisitionApi(drinkMenuObj).then(function (data) {
            // console.log('drink drinkMenuApi', data);
            if (data["success"] == 0) {
            }
            else if (data["success"] == 1) {
                _this.outofArray = data["response"].out_of_order;
                _this.outofLists = _this.outofArray;
                console.log("this.outofLists", _this.outofLists);
                // this.sum = data["response"].total;
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
    RequisitionPage.prototype.selectDrinkRequi = function (drink) {
        console.log('drink', drink);
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
        this.sortedDrinkRequiData();
        // this.sortedOutofDrinkRequiData();
    };
    RequisitionPage.prototype.selectOutofDrinkRequi = function (outof) {
        console.log('outof', outof);
        if (outof.isChecked == true) {
            this.selectedArray.push(outof);
        }
        else {
            var newArray = this.selectedArray.filter(function (el) {
                return el.id !== outof.id;
            });
            this.selectedArray = newArray;
        }
        Array.prototype.map.call(this.selectedArray, function (s) { return s.id; }).toString(); // "A,B,C"
        this.outofString = Array.prototype.map.call(this.selectedArray, function (s) { return s.id; }).toString();
        this.sortedOutofDrinkRequiData();
    };
    RequisitionPage.prototype.getRequisitionData = function () {
        var _this = this;
        // console.log("get requisition data");
        var drinkRequiObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "all_pageno": this.all_pageNo,
            "search_val": this.allrequsearch,
            "out_order_pageno": this.out_order_pageNo,
            "category": this.drinkString
        };
        // console.log("drinkRequiObj", drinkRequiObj);
        this.serviceProvider.wineRequisitionApi(drinkRequiObj).then(function (data) {
            // console.log('wineRequisitionApi', data);
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                // this.error = '';
                _this.wineArray = data["response"].all_drink;
                _this.wineLists = _this.wineArray;
                console.log("this.wineLists", _this.wineLists);
                _this.outofArray = data["response"].out_of_order;
                _this.outofLists = _this.outofArray;
                console.log("this.outofLists", _this.outofLists);
                if (data["response"].total == null || data["response"].total == undefined || data["response"].total == '') {
                    _this.sum = 0;
                }
                else {
                    _this.sum = data["response"].total;
                }
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
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
    RequisitionPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.scroll = "allorder";
        this.all_pageNo = this.all_pageNo + 1;
        var drinkRequiObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "all_pageno": this.all_pageNo,
            "search_val": this.allrequsearch,
            "category": this.drinkString
        };
        setTimeout(function () {
            _this.serviceProvider.wineRequisitionApi(drinkRequiObj).then(function (data) {
                var obj = data;
                console.log('obj.response', obj.response);
                console.log('obj.response.length', obj.response.length);
                // if (obj.response !== []) {
                // this.sum = obj.response.total;
                if (obj.response.all_drink) {
                    for (var i in obj.response.all_drink) {
                        _this.newrequi = obj.response.all_drink[i];
                        _this.wineArray.push(_this.newrequi);
                        // this.wineLists = this.wineArray;
                    }
                }
                else {
                    _this.pagingEnabled = false;
                    _this.all_pageNo = _this.all_pageNo - 1;
                    // console.log('this.all_pageNo', this.all_pageNo);
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    RequisitionPage.prototype.doInfinite1 = function (infiniteScroll) {
        var _this = this;
        this.scroll = "outoforder";
        this.out_order_pageNo = this.out_order_pageNo + 1;
        var drinkRequiObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "out_order_pageno": this.out_order_pageNo,
            "search_val": this.allrequsearch,
            "category": this.outofString
        };
        setTimeout(function () {
            _this.serviceProvider.wineRequisitionApi(drinkRequiObj).then(function (data) {
                var obj = data;
                // this.sum = obj.response.total;
                // if (obj.response !== []) {
                // this.sum = obj.response.total;
                if (obj.response.out_of_order) {
                    for (var i in obj.response.out_of_order) {
                        _this.outrequi = obj.response.out_of_order[i];
                        _this.outofArray.push(_this.outrequi);
                        // this.outofLists = this.outofArray;
                    }
                }
                else {
                    _this.pagingEnabled1 = false;
                    // this.sum = obj.response.total;
                    _this.out_order_pageNo = _this.out_order_pageNo - 1;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    RequisitionPage.prototype.requisitionChange = function (requisition) {
        if (requisition == "wine") {
            console.log("wine");
            this.ifWineMenuSelected = true;
            this.ifNonfoodMenuSelected = false;
            this.ifOfficeMenuSelected = false;
            this.ifLaundryMenuSelected = false;
            // this.scroll = "allorder";
        }
        else if (requisition == "nonfood") {
            console.log("nonfood");
            this.ifWineMenuSelected = false;
            this.ifNonfoodMenuSelected = true;
            this.ifOfficeMenuSelected = false;
            this.ifLaundryMenuSelected = false;
        }
        else if (requisition == "office") {
            console.log("office");
            this.ifWineMenuSelected = false;
            this.ifNonfoodMenuSelected = false;
            this.ifOfficeMenuSelected = true;
            this.ifLaundryMenuSelected = false;
        }
        else if (requisition == "laundry") {
            console.log("laundry");
            this.ifWineMenuSelected = false;
            this.ifNonfoodMenuSelected = false;
            this.ifOfficeMenuSelected = false;
            this.ifLaundryMenuSelected = true;
        }
        else { }
    };
    RequisitionPage.prototype.onRequisitionChanged = function (event) {
        console.log("event", event.value);
        this.requisitionChange(event.value);
    };
    RequisitionPage.prototype.selectAllorder = function () {
        console.log("select all order");
        this.scroll = "outoforder";
        this.ifAllOrder = false;
        this.ifOutOrder = true;
        this.outofOrder = true;
        this.getRequisitionData();
    };
    RequisitionPage.prototype.selectOutorder = function () {
        console.log("select out order");
        this.scroll = "allorder";
        this.ifAllOrder = true;
        this.ifOutOrder = false;
        this.outofOrder = false;
        this.sortedDrinkRequiData();
    };
    RequisitionPage.prototype.gotoPreviousOrder = function () {
        console.log("previous order");
        this.navCtrl.push("PreviousOrderPage", { 'reqType': this.requisition });
    };
    RequisitionPage.prototype.incDecApiData = function (wineid, quantity) {
        var _this = this;
        console.log("this.requisition inc", this.requisition);
        var incObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "item_id": wineid,
            "type": this.requisition,
            "item_quantity": quantity
        };
        this.serviceProvider.addWineOrderApi(incObj).then(function (data) {
            // console.log('addWineOrderApi', data);
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                var toastSuccess = _this.toastCtrl.create({
                    message: data["message"],
                    duration: 1000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'X',
                    cssClass: "toast-success",
                });
                toastSuccess.present();
                _this.itemId = data["response"].item_id;
                _this.itemquntity = data["response"].item_quantity;
                if (data["response"].total == null) {
                    _this.sum = 0;
                }
                else {
                    _this.sum = data["response"].total;
                }
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
    RequisitionPage.prototype.incrementQty = function (wine) {
        console.log("increment wine", wine);
        if (this.itemId == wine.id) {
            wine.quantity = this.itemquntity;
        }
        else {
            wine.quantity = wine.quantity;
        }
        wine.quantity++;
        this.incDecApiData(wine.id, wine.quantity);
    };
    RequisitionPage.prototype.decrementQty = function (wine) {
        console.log("decrement wine", wine);
        if (this.itemId == wine.id) {
            wine.quantity = this.itemquntity;
        }
        else {
            wine.quantity = wine.quantity;
        }
        if (wine.quantity - 1 < 1) {
            wine.quantity = 0;
        }
        else {
            wine.quantity -= 1;
        }
        this.incDecApiData(wine.id, wine.quantity);
    };
    RequisitionPage.prototype.toSeeOrderLists = function () {
        console.log("to see order list");
        // console.log("req typr cart order", this.requisition);
        var orderListModal = this.modalCtrl.create("OrderListModalPage", { 'reqType': this.requisition });
        orderListModal.present();
        orderListModal.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    RequisitionPage.prototype.goBack = function () {
        this.navCtrl.push("MyDepartmentPage");
    };
    RequisitionPage.prototype.onChange = function (ev, outof) {
        var _this = this;
        console.log("ev", ev.target.value);
        this.inputModel = ev.target.value;
        console.log("outof", outof);
        var incObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "item_id": outof.id,
            "type": this.requisition,
            "item_quantity": ev.target.value
        };
        console.log("incObj", incObj);
        this.serviceProvider.addWineOrderApi(incObj).then(function (data) {
            console.log('addWineOrderApi', data);
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.itemId = data["response"].item_id;
                _this.itemquntity = data["response"].item_quantity;
                if (data["response"].total == null) {
                    _this.sum = 0;
                }
                else {
                    _this.sum = data["response"].total;
                }
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
                var alert_5 = _this.alertCtrl.create({
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
                alert_5.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    RequisitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-requisition',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/requisition/requisition.html"*/'<!--\n  Generated template for the RequisitionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="My Department"> </header>\n\n\n<ion-content class="paddingTop">\n	<ion-toolbar class="toolbar-color">\n    <ion-segment [(ngModel)]="requisition" (ionChange)="onRequisitionChanged($event)" class="segment">\n      <ion-segment-button value="wine" class="segment-btn">\n        WINE\n      </ion-segment-button>\n      <ion-segment-button value="nonfood" class="segment-btn">\n        NONFOOD\n      </ion-segment-button>\n      <ion-segment-button value="office" class="segment-btn">\n        OFFICE\n      </ion-segment-button>\n      <ion-segment-button value="laundry" class="segment-btn">\n        LAUNDRY\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div class="divC" (click)="goBack()">\n  	<ion-icon name="ios-arrow-back" class="iconC"></ion-icon>\n  	<p class="nameC">Requisition</p>\n  </div>\n  <div *ngIf="ifWineMenuSelected">\n  	<div class="divMain" *ngIf="!outofOrder">\n	    <ion-searchbar placeholder="Search" [(ngModel)]="searchTerm" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n			<ion-label class="selLabel">FILTER</ion-label>\n	    <ion-grid>\n				<ion-row>\n					<ion-col col-4 col-xl-4 class="checkCss" *ngFor="let wine of checkWines;let idx = index;">\n						<ion-item class="chkItem" >\n							<ion-checkbox [(ngModel)]="wine.isChecked" class="chkbox" (click)="selectDrinkRequi(wine)"></ion-checkbox>\n					    <ion-label class="checkLabel">{{wine.name}}</ion-label>\n\n				    </ion-item>\n				    \n					</ion-col>\n					<ion-col col-4 col-xl-4 class="checkCss">\n						<ion-item class="item2">\n					    <img src="assets/imgs/mydepartment/shopping.png" item-start class="shopImg" *ngIf="sum == 0 || sum == null">\n					    <img src="assets/imgs/mydepartment/shopping_1.png" item-start class="shopImg" *ngIf="sum > 0" (click)="toSeeOrderLists()">\n					    <p item-end class="itemP">{{sum}} item</p>\n				    </ion-item>\n			    </ion-col>\n\n				</ion-row>\n			</ion-grid>\n\n	    <ion-grid>\n	    	<ion-row>\n	    		<ion-col col-5 col-xl-5 col-lg-3>\n	    			<button ion-button round outline class="imageBtn" (click)="gotoPreviousOrder()" item-end>PREVIOUS ORDER</button>\n	    		</ion-col>\n	    		<ion-col col-7 col-xl-7 col-lg-9 class="colToggle">\n	    			<img src="assets/imgs/mydepartment/allorder.png" item-end class="toggleImg" *ngIf="ifAllOrder" (click)="selectAllorder()">\n	    			<img src="assets/imgs/mydepartment/outorder.png" item-end class="toggleImg" *ngIf="ifOutOrder" (click)="selectOutorder()">\n	    		</ion-col>\n	    	</ion-row>\n\n	    	<ion-row class="listRow" *ngFor="let wine of wineLists;let idx = index">\n	    		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n	    			<img src="{{wine.images}}" class="listImg">\n	    		</ion-col>\n\n	    		<ion-col col-5 col-xl-5 col-lg-5 class="listcol5">\n	    			<b class="idB">{{wine.name}}<p class="listId">{{wine.id}}</p></b>\n	    		</ion-col>\n\n	    		<ion-col col-4 col-xl-4>\n	    			<ion-row>\n			    		<ion-col col-3 col-xl-3 col-lg-3 class="listIcon1">\n			    			<ion-icon name="remove-circle" (click)="decrementQty(wine)"></ion-icon>\n			    		</ion-col>\n			    		<ion-col col-6 col-xl-6 col-lg-6 class="listCol2">\n			    			<!-- <p class="listCount">{{wine.quantity}}</p> -->\n			    			<ion-input type="number" class="listCount" value="{{wine.quantity}}" (keyup)="onChange($event, wine)"></ion-input>\n			    		</ion-col>\n			    		<ion-col col-3 col-xl-3 col-lg-3 class="listIcon2">\n			    			<ion-icon name="add-circle" (click)="incrementQty(wine)"></ion-icon>\n			    		</ion-col>\n		    		</ion-row>\n		    		<ion-row *ngIf="wine.out_of_order !== \'\'">\n			    		<ion-col class="outOrder">\n			    			<p class="outP">Out of order until {{wine.out_of_order | date:"dd/MM/yyyy"}}</p>\n			    		</ion-col>\n		    		</ion-row>\n	    		</ion-col>\n	    	</ion-row>\n\n	    </ion-grid>\n		</div>\n\n		<div class="divMain" *ngIf="outofOrder">\n	    <ion-searchbar placeholder="Search" [(ngModel)]="searchOutof" (ionInput)="filterOutofItems($event)" class="searchBar"></ion-searchbar>\n			<ion-label class="selLabel">FILTER</ion-label>\n	    <ion-grid>\n				<ion-row>\n					<ion-col col-4 col-xl-4 class="checkCss" *ngFor="let outof of outofWines;let idx = index;">\n						<ion-item class="chkItem" >\n							<ion-checkbox [(ngModel)]="outof.isChecked" class="chkbox" (click)="selectOutofDrinkRequi(outof)"></ion-checkbox>\n					    <ion-label class="checkLabel">{{outof.name}}</ion-label>\n\n				    </ion-item>\n				    \n					</ion-col>\n					<ion-col col-4 col-xl-4 class="checkCss">\n						<ion-item class="item2">\n					    <img src="assets/imgs/mydepartment/shopping.png" item-start class="shopImg"  *ngIf="sum == 0 || sum == null">\n					    <img src="assets/imgs/mydepartment/shopping_1.png" item-start class="shopImg" *ngIf="sum > 0" (click)="toSeeOrderLists()">\n					    <p item-end class="itemP">{{sum}} item</p>\n				    </ion-item>\n			    </ion-col>\n\n				</ion-row>\n			</ion-grid>\n\n	    <ion-grid>\n	    	<ion-row>\n	    		<ion-col col-5 col-xl-5 col-lg-3>\n	    			<button ion-button round outline class="imageBtn" (click)="gotoPreviousOrder()" item-end>PREVIOUS ORDER</button>\n	    		</ion-col>\n	    		<ion-col col-7 col-xl-7 col-lg-9 class="colToggle">\n	    			<img src="assets/imgs/mydepartment/allorder.png" item-end class="toggleImg" *ngIf="ifAllOrder" (click)="selectAllorder()">\n	    			<img src="assets/imgs/mydepartment/outorder.png" item-end class="toggleImg" *ngIf="ifOutOrder" (click)="selectOutorder()">\n	    		</ion-col>\n	    	</ion-row>\n\n	    	<ion-row class="listRow" *ngFor="let outof of outofLists;let idx = index">\n		    		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n		    			<img src="{{outof.images}}" class="listImg">\n		    		</ion-col>\n\n		    		<ion-col col-5 col-xl-5 col-lg-5 class="listcol5">\n		    			<b class="idB">{{outof.name}}<p class="listId">{{outof.id}}</p></b>\n		    		</ion-col>\n\n		    		<ion-col col-4 col-xl-4>\n		    			<ion-row>\n				    		<ion-col col-3 col-xl-3 col-lg-3 class="listIcon1">\n				    			<ion-icon name="remove-circle" (click)="decrementQty(outof)"></ion-icon>\n				    		</ion-col>\n				    		<ion-col col-6 col-xl-6 col-lg-6 class="listCol2">\n				    			<ion-input type="number" class="listCount" value="{{outof.quantity}}" (keyup)="onChange($event, outof)"></ion-input>\n				    		</ion-col>\n				    		<ion-col col-3 col-xl-3 col-lg-3 class="listIcon2">\n				    			<ion-icon name="add-circle" (click)="incrementQty(outof)"></ion-icon>\n				    		</ion-col>\n			    		</ion-row>\n			    		<ion-row>\n				    		<ion-col class="outOrder">\n				    			<p class="outP">Out of order until {{outof.out_of_order | date:"dd/MM/yyyy"}}</p>\n				    		</ion-col>\n			    		</ion-row>\n		    		</ion-col>\n		    	</ion-row>\n\n	    </ion-grid>\n		</div>\n	</div>\n	<div *ngIf="ifNonfoodMenuSelected">\n  	non food\n	</div>\n	<div *ngIf="ifOfficeMenuSelected">\n  	office\n	</div>\n	<div *ngIf="ifLaundryMenuSelected">\n  	Laundry\n	</div>\n\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="scroll == \'allorder\'">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more all order data..." *ngIf="pagingEnabled"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf="!pagingEnabled && scroll == \'allorder\'" class="nopost"> No more all order is available.</div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite1($event)" *ngIf="scroll == \'outoforder\'">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more out of order data..." *ngIf="pagingEnabled1"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf="!pagingEnabled1 && scroll == \'outoforder\'" class="nopost"> No more out of order is available.</div>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/requisition/requisition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], RequisitionPage);
    return RequisitionPage;
}());

//# sourceMappingURL=requisition.js.map

/***/ })

});
//# sourceMappingURL=10.js.map