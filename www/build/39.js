webpackJsonp([39],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewBreakagePageModule", function() { return CreateNewBreakagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_breakage__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewBreakagePageModule = /** @class */ (function () {
    function CreateNewBreakagePageModule() {
    }
    CreateNewBreakagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_new_breakage__["a" /* CreateNewBreakagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_new_breakage__["a" /* CreateNewBreakagePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewBreakagePageModule);
    return CreateNewBreakagePageModule;
}());

//# sourceMappingURL=create-new-breakage.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewBreakagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
 * Generated class for the CreateNewBreakagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewBreakagePage = /** @class */ (function () {
    function CreateNewBreakagePage(navCtrl, navParams, viewCtrl, alertCtrl, _sanitizer, storage, serviceProvider, loader) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.loader = loader;
        this.wineArray = [];
        this.chinaArray = [];
        this.glassArray = [];
        this.error = '';
        this.errorWine = '';
        this.errorChina = '';
        this.errorGlass = '';
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        var dateNtime = __WEBPACK_IMPORTED_MODULE_6_moment___default()();
        console.log("dateNtime", dateNtime);
        this.dob = __WEBPACK_IMPORTED_MODULE_6_moment___default()(dateNtime).format('YYYY-MM-DD');
        console.log("this.dob", this.dob);
        this.breakageType = navParams.get('breakage');
        console.log("this.breakageType", this.breakageType);
        this.getBreakageData = navParams.get('editbreakage');
        console.log("this.getBreakageData", this.getBreakageData);
        if (this.getBreakageData == undefined) {
            this.breakageReason = '';
            this.dob = this.dob;
            this.breakageItemId = '';
            this.breakageLitres = '';
            this.breakageQuantity = '';
            this.breakage_type = this.breakageType;
            this.breakageId = '';
        }
        else {
            this.breakageReason = this.getBreakageData.reason;
            this.dob = this.getBreakageData.date;
            this.breakageItemId = this.getBreakageData.breakitem_id;
            this.breakageLitres = this.getBreakageData.amount;
            this.breakageQuantity = this.getBreakageData.quantity;
            this.breakage_type = this.getBreakageData.breakage_type;
            this.breakageId = this.getBreakageData.id;
        }
        this.storage.get("userData").then(function (userData) {
            console.log("userData breakage", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.wineBreakages();
        });
    }
    CreateNewBreakagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewBreakagePage');
    };
    CreateNewBreakagePage.prototype.backToListBreakage = function () {
        console.log("back to list");
        this.viewCtrl.dismiss();
    };
    CreateNewBreakagePage.prototype.wineBreakages = function () {
        var _this = this;
        this.error = '';
        this.errorWine = '';
        var wineBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId
        };
        this.serviceProvider.breakageWineProductsApi(wineBreakageObj).then(function (data) {
            // console.log("breakageWineProductsApi" +JSON.stringify(data));
            if (data["success"] == 0) {
                _this.errorWine = data["message"];
                _this.error = '';
                _this.chinaBreakages();
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.errorWine = '';
                _this.wineArray = data["response"];
                _this.wineLists = _this.wineArray;
                _this.chinaBreakages();
                // console.log("this.wineLists" +JSON.stringify(this.wineLists));
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
                _this.errorWine = '';
                _this.chinaBreakages();
            }
            else if (data['success'] == 4) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                console.log("wine breakage session expired");
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
    CreateNewBreakagePage.prototype.chinaBreakages = function () {
        var _this = this;
        this.error = '';
        this.errorChina = '';
        var chinaBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId
        };
        this.serviceProvider.breakageChinaProductsApi(chinaBreakageObj).then(function (data) {
            // console.log("breakageChinaProductsApi" +JSON.stringify(data));
            if (data["success"] == 0) {
                _this.errorChina = data["message"];
                _this.error = '';
                _this.glassBreakages();
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.errorChina = '';
                _this.chinaArray = data["response"];
                _this.chinaLists = _this.chinaArray;
                // console.log("this.chinaLists" +JSON.stringify(this.chinaLists));
                _this.glassBreakages();
            }
            else if (data["success"] == 2) {
                _this.errorChina = '';
                _this.error = data["message"];
                _this.glassBreakages();
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
    CreateNewBreakagePage.prototype.glassBreakages = function () {
        var _this = this;
        this.error = '';
        this.errorGlass = '';
        var glassBreakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId
        };
        this.serviceProvider.breakageGlassProductsApi(glassBreakageObj).then(function (data) {
            // console.log("breakageGlassProductsApi" +JSON.stringify(data));
            if (data["success"] == 0) {
                _this.error = '';
                _this.errorGlass = data["message"];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.errorGlass = '';
                _this.glassArray = data["response"];
                _this.glassLists = _this.glassArray;
                // console.log("this.glassLists" +JSON.stringify(this.glassLists));
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
                _this.errorGlass = '';
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
    CreateNewBreakagePage.prototype.filterItems = function (ev) {
        console.log("ev.target.value", ev.target.value);
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.wineLists = this.wineArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '' || val == undefined) {
            this.wineLists = this.wineArray;
        }
        var val1 = ev.target.value;
        if (val1 && val1.trim() != '') {
            this.chinaLists = this.chinaArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val1.toLowerCase()) > -1));
            });
        }
        else if (val1 == '' || val1 == undefined) {
            this.chinaLists = this.chinaArray;
        }
        var val2 = ev.target.value;
        if (val2 && val2.trim() != '') {
            this.glassLists = this.glassArray.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val2.toLowerCase()) > -1));
            });
        }
        else if (val2 == '' || val2 == undefined) {
            this.glassLists = this.glassArray;
        }
    };
    CreateNewBreakagePage.prototype.selectBreakage = function (breakageItem) {
        console.log("select breakage item", breakageItem);
        this.breakageItemId = breakageItem.id;
    };
    CreateNewBreakagePage.prototype.cancelNewBreakage = function () {
        console.log("cancel new wishes");
        this.viewCtrl.dismiss();
    };
    CreateNewBreakagePage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewBreakagePage.prototype.addNewBreakage = function () {
        var _this = this;
        console.log("add new breakage");
        this.loader.show("Creating a new Breakage...");
        var breakageObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "reason": this.breakageReason,
            "breakage_type": this.breakageType,
            "breakitem_id": this.breakageItemId,
            "amount": this.breakageLitres,
            "quantity": this.breakageQuantity,
            "date": this.dob,
            "breakage_id": this.breakageId
        };
        console.log("breakageObj", breakageObj);
        if (breakageObj.reason == '' || breakageObj.reason == undefined || breakageObj.reason == null) {
            this.loader.hide();
            this.error = 'please give breakage reason';
        }
        else if (breakageObj.breakitem_id == '' || breakageObj.breakitem_id == undefined || breakageObj.breakitem_id == null) {
            this.loader.hide();
            this.error = 'please select any one breakage item';
        }
        else {
            this.error = '';
            this.serviceProvider.addBreakageApi(breakageObj).then(function (data) {
                console.log("addBreakageApi" + JSON.stringify(data));
                if (data["success"] == 0) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else if (data["success"] == 1) {
                    _this.loader.hide();
                    _this.error = '';
                    var alert_4 = _this.alertCtrl.create({
                        title: _this.htmlProperty(),
                        subTitle: 'Your Breakage have been added successfully.',
                        cssClass: 'newsFeedAlertCss',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    console.log('ok clicked');
                                    // this.navCtrl.push("BreakagePage");
                                    _this.navCtrl.push("BreakagePage", { 'addBreakageType': _this.breakageType });
                                }
                            }
                        ]
                    });
                    alert_4.present();
                }
                else if (data["success"] == 2) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else if (data["success"] == 4) {
                    _this.loader.hide();
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
                    _this.loader.hide();
                    _this.error = '';
                }
            }, function (err) {
                _this.loader.hide();
                console.log("this.error" + JSON.stringify(err));
            });
        }
    };
    CreateNewBreakagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-new-breakage',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-breakage/create-new-breakage.html"*/'<!--\n  Generated template for the CreateNewBreakagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="My Department"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="ios-arrow-back" class="iconCss" item-start (click)="backToListBreakage()"></ion-icon>\n		<p class="pCss">BREAKAGE</p>\n	</ion-item>\n\n	<ion-grid class="gridCss">\n		<p class="headP">New Breakage</p>\n		<ion-searchbar placeholder="Search" [(ngModel)]="searchTerm" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n		<br/>\n		<div >\n			<ion-grid class="listGrid" *ngIf="breakageType == \'wine\'">\n				<ion-row class="listRow" *ngFor="let wine of wineLists;let idx = index" (click)="selectBreakage(wine)">\n		  		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n		  			<img src="{{wine.image}}" class="listImg">\n		  		</ion-col>\n\n		  		<ion-col col-9 col-xl-9 col-lg-9 class="listcol5">\n		  			<b>{{wine.name}}</b>\n		  		</ion-col>\n		  	</ion-row>\n		  	<div class="listDiv" *ngIf="wineArray.length <= 0">\n		  			{{errorWine}}\n		  	</div>\n	  	</ion-grid>\n\n	  	<ion-grid class="listGrid" *ngIf="breakageType == \'china\'">\n				<ion-row class="listRow" *ngFor="let china of chinaLists;let idx = index" (click)="selectBreakage(china)">\n		  		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n		  			<img src="{{china.image}}" class="listImg">\n		  		</ion-col>\n\n		  		<ion-col col-9 col-xl-9 col-lg-9 class="listcol5">\n		  			<b>{{china.name}}</b>\n		  		</ion-col>\n		  	</ion-row>\n		  	<div class="listDiv" *ngIf="chinaArray.length <= 0">\n		  			{{errorChina}}\n		  	</div>\n	  	</ion-grid>\n\n	  	<ion-grid class="listGrid" *ngIf="breakageType == \'glass\'">\n				<ion-row class="listRow" *ngFor="let glass of glassLists;let idx = index" (click)="selectBreakage(glass)">\n		  		<ion-col col-3 col-xl-3 col-lg-3 class="listCol">\n		  			<img src="{{glass.image}}" class="listImg">\n		  		</ion-col>\n\n		  		<ion-col col-9 col-xl-9 col-lg-9 class="listcol5">\n		  			<b>{{glass.name}}</b>\n		  		</ion-col>\n		  	</ion-row>\n\n		  	<div class="listDiv" *ngIf="glassArray.length <= 0">\n		  			{{errorGlass}}\n		  	</div>\n	  	</ion-grid>\n\n\n	  	<br/>\n	  	<div>\n	  		<ion-grid class="gridText">\n		  		<ion-row>\n						<ion-col>\n							<ion-textarea placeholder="Reason for Breakage" class="textArea" [(ngModel)]="breakageReason" value="{{breakageReason}}"></ion-textarea>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n				<ion-grid>\n					<ion-row class="rowData">\n						<ion-col col-6 col-xl-6 *ngIf="breakageType == \'wine\'">\n							AMOUNT IN LITRES\n							<br/>\n							<ion-input type="number" placeholder="litres" class="inputC" [(ngModel)]="breakageLitres" value="{{breakageLitres}}"></ion-input>\n						</ion-col>\n						<ion-col col-6 col-xl-6 *ngIf="breakageType !== \'wine\'">\n							AMOUNT IN QUANTITY\n							<br/>\n							<ion-input type="number" placeholder="quantity" class="inputC" [(ngModel)]="breakageQuantity" value="{{breakageQuantity}}"></ion-input>\n						</ion-col>\n						<ion-col col-6 col-xl-6>\n							DATE OF BREAKAGE\n							<ion-item class="itemC">\n						    <ion-datetime class="dateInput" displayFormat="DD/MM/YY" [(ngModel)]="dob" placeholder="{{dob}}"></ion-datetime>\n		    				<ion-icon name="md-calendar" item-end class="iconP"></ion-icon>\n							</ion-item>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n				<div class="error-message">\n			    {{error}}\n			  </div>\n				<br/>\n	  		<ion-item class="lastBtns">\n		    	<button ion-button round class="cancelBtn" (click)="cancelNewBreakage()" item-end>CANCEL</button>\n					<button ion-button round class="addBtn" (click)="addNewBreakage()" item-end>ADD</button>\n			  </ion-item>\n	  	</div>\n  	</div>\n  	\n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-breakage/create-new-breakage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* Loader */]])
    ], CreateNewBreakagePage);
    return CreateNewBreakagePage;
}());

//# sourceMappingURL=create-new-breakage.js.map

/***/ })

});
//# sourceMappingURL=39.js.map