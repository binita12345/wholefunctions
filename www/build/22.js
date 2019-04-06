webpackJsonp([22],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePageModule", function() { return MaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintenance__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaintenancePageModule = /** @class */ (function () {
    function MaintenancePageModule() {
    }
    MaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maintenance__["a" /* MaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maintenance__["a" /* MaintenancePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], MaintenancePageModule);
    return MaintenancePageModule;
}());

//# sourceMappingURL=maintenance.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(108);
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
 * Generated class for the MaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaintenancePage = /** @class */ (function () {
    function MaintenancePage(navCtrl, navParams, storage, serviceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.maintainanceArray = [];
        this.error = '';
        this.pageNo = 1;
        this.noRecord = false;
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
    }
    MaintenancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MaintenancePage');
        this.storage.get("userData").then(function (userData) {
            console.log("userData maintenance", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.displayMaintenance();
        });
    };
    MaintenancePage.prototype.displayMaintenance = function () {
        var _this = this;
        console.log("display maintenance");
        this.error = '';
        var maintenanceObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "pageNo": this.pageNo
        };
        this.serviceProvider.displayMaintenanceApi(maintenanceObj).then(function (data) {
            console.log("displayMaintenanceApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.noRecord = true;
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.noRecord = false;
                _this.maintainanceArray = data["response"];
                _this.maintainanceLists = _this.maintainanceArray;
                console.log("this.maintainanceLists" + JSON.stringify(_this.maintainanceLists));
            }
            else if (data["success"] == 2) {
                _this.noRecord = false;
                _this.error = data["message"];
            }
            else if (data['success'] == 4) {
                _this.noRecord = false;
                _this.error = '';
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
    MaintenancePage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.maintainanceLists = this.maintainanceArray.filter(function (item) {
                return ((item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.location.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '') {
            this.maintainanceLists = this.maintainanceArray;
        }
    };
    MaintenancePage.prototype.addEntry = function () {
        console.log("add maintenance entry");
        this.navCtrl.push("CreateNewMaintenancePage");
    };
    MaintenancePage.prototype.openNseeImage = function (mainImage) {
        console.log("open n see image", mainImage);
        var URL = mainImage;
        var browserInst = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        var browser = browserInst.create(URL, '_system', this.options);
    };
    MaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-maintenance',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/maintenance/maintenance.html"*/'<!--\n  Generated template for the MaintenancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Maintenance"> </header>\n\n\n<ion-content class="paddingTop">\n	<div class="divCss"></div>\n	<ion-searchbar placeholder="Search" [(ngModel)]="searchLost" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n	<button ion-button round class="entryBtn" (click)="addEntry()">ADD ENTRY</button>\n	<br/>\n	<br/>\n	<br/>\n	<div class="withscroll">\n		<table class="table table-responsive table-bordered">\n	    <tbody>\n        <tr>\n      		<td class="headerM">Item</td>\n      		<td class="headerL">Description</td>\n      		<td class="headerL">Location</td>\n      		<td class="headerH">Priority</td>\n      		<td class="headerH">Picture</td>\n      		<td class="headerH">Date</td>\n      		<td class="headerH">Status</td>\n        </tr>\n        \n        <tr *ngFor="let maintain of maintainanceLists; let trindex = index">\n        	<td class="headerMCell">{{maintain.item_name}}</td>\n          <td class="headerLCell">{{maintain.description}}</td>\n          <td class="headerLCell">{{maintain.location}}</td>\n          <td class="headerHCell">{{maintain.priority}}</td>\n          <td class="headerHCell" *ngIf="maintain.image == \'\'">n/a</td>\n          <td class="headerHCell" *ngIf="maintain.image !== \'\'" (click)="openNseeImage(maintain.image)">see</td>\n          <td class="headerHCell">{{maintain.date | date: "dd/MM/yyyy"}}</td>\n          <td class="headerHCell">{{maintain.status}}</td>\n        </tr>\n	    </tbody>\n		</table>\n\n	</div>\n  <br/>\n  <div class="norecord" *ngIf="noRecord">\n      {{error}}\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/maintenance/maintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MaintenancePage);
    return MaintenancePage;
}());

//# sourceMappingURL=maintenance.js.map

/***/ })

});
//# sourceMappingURL=22.js.map