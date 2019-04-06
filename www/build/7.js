webpackJsonp([7],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserToMessagePageModule", function() { return SearchUserToMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_user_to_message__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchUserToMessagePageModule = /** @class */ (function () {
    function SearchUserToMessagePageModule() {
    }
    SearchUserToMessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_user_to_message__["a" /* SearchUserToMessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_user_to_message__["a" /* SearchUserToMessagePage */]),
            ],
        })
    ], SearchUserToMessagePageModule);
    return SearchUserToMessagePageModule;
}());

//# sourceMappingURL=search-user-to-message.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserToMessagePage; });
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
 * Generated class for the SearchUserToMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchUserToMessagePage = /** @class */ (function () {
    function SearchUserToMessagePage(navCtrl, navParams, viewCtrl, storage, serviceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.userArray = [];
    }
    SearchUserToMessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SearchUserToMessagePage');
        this.storage.get("userData").then(function (userData) {
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getSearchUserList();
        });
    };
    SearchUserToMessagePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        console.log("ev.target.value", ev.target.value);
        var val = ev.target.value;
        if (val && val.trim() != '') {
            console.log("userArray", this.userArray);
            this.userList = this.userArray.filter(function (item) {
                console.log("get items item...", item);
                return (item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else if (val == '' || val == undefined) {
            this.userList = this.userArray;
        }
    };
    SearchUserToMessagePage.prototype.getSearchUserList = function () {
        var _this = this;
        var userListObj = {
            "user_id": this.userId,
            "session_id": this.sessionId
        };
        this.serviceProvider.userListApi(userListObj).then(function (data) {
            // console.log("userListApi data" +JSON.stringify(data));
            if (data["success"] == 0) {
                // this.alert.errorAlert(data["message"]);
            }
            else if (data["success"] == 1) {
                _this.userArray = data["response"];
                _this.userList = _this.userArray;
                console.log("this.userList", _this.userList);
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data["success"] == 4) {
                // this.loader.hide();
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
                // this.loader.hide();
            }
        }, function (err) {
            // this.loader.hide();
            console.log("err", err);
        });
    };
    SearchUserToMessagePage.prototype.closeModal = function () {
        console.log("close modal");
        this.viewCtrl.dismiss();
    };
    SearchUserToMessagePage.prototype.selectUserToMessage = function (user) {
        console.log("selectUserToMessage user", user);
        this.viewCtrl.dismiss(user);
    };
    SearchUserToMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-user-to-message',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/search-user-to-message/search-user-to-message.html"*/'<!--\n  Generated template for the SearchUserToMessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n	<ion-grid>\n		<ion-icon name="ios-close-circle-outline" class="closeIcon" (click)="closeModal()"></ion-icon>\n		<ion-row>\n			<ion-col>\n				<ion-searchbar placeholder="Search" [(ngModel)]="searchTerm" (ionInput)="getItems($event)" class="searchBar"></ion-searchbar>\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor="let user of userList" class="rowCss" (click)="selectUserToMessage(user)">\n			<ion-col col-3 col-xl-3 class="colDesc">\n				<img src="{{user.profile_picture}}" class="userImg" *ngIf="user.profile_picture !== \'\'">\n				<img src="assets/imgs/images.png" class="userImg" *ngIf="user.profile_picture == \'\'">\n				<p class="username">{{user.current_position}}</p>\n			</ion-col>\n			<ion-col col-9 col-xl-9>\n				<ion-label class="userlabl">{{user.first_name}} {{user.last_name}}</ion-label>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/search-user-to-message/search-user-to-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SearchUserToMessagePage);
    return SearchUserToMessagePage;
}());

//# sourceMappingURL=search-user-to-message.js.map

/***/ })

});
//# sourceMappingURL=7.js.map