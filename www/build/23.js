webpackJsonp([23],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostnfoundPageModule", function() { return LostnfoundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lostnfound__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LostnfoundPageModule = /** @class */ (function () {
    function LostnfoundPageModule() {
    }
    LostnfoundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lostnfound__["a" /* LostnfoundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lostnfound__["a" /* LostnfoundPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], LostnfoundPageModule);
    return LostnfoundPageModule;
}());

//# sourceMappingURL=lostnfound.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostnfoundPage; });
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
 * Generated class for the LostnfoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LostnfoundPage = /** @class */ (function () {
    function LostnfoundPage(navCtrl, navParams, storage, serviceProvider, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.lostNfoundArray = [];
        this.archiveArray = [];
        this.ifCurrentSelected = true;
        this.ifArchiveSelected = false;
        this.error = '';
        this.current_pageNo = 1;
        this.archive_pageNo = 1;
        this.pagingEnabled = true;
        this.pagingEnabled1 = true;
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
        document.addEventListener("resume", function () {
            // do something
            this.currentLostNFound();
        }, true);
    }
    LostnfoundPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LostnfoundPage');
        this.storage.get("userData").then(function (userData) {
            console.log("userData notes", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.lostnfound = 'current';
            _this.lostnfoundChange(_this.lostnfound);
            _this.currentLostNFound();
        });
    };
    LostnfoundPage.prototype.lostnfoundChange = function (notename) {
        if (notename == "current") {
            console.log("current");
            this.ifCurrentSelected = true;
            this.ifArchiveSelected = false;
            this.currentLostNFound();
        }
        else if (notename == "archive") {
            console.log("archive");
            this.ifCurrentSelected = false;
            this.ifArchiveSelected = true;
            this.archiveLostNFound();
        }
        else { }
    };
    LostnfoundPage.prototype.onLostNFoundChanged = function (event) {
        console.log("event", event.value);
        this.lostnfoundChange(event.value);
    };
    LostnfoundPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.lostnFoundLists = this.lostNfoundArray.filter(function (item) {
                return ((item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
        else if (val == '') {
            this.lostnFoundLists = this.lostNfoundArray;
        }
    };
    LostnfoundPage.prototype.currentLostNFound = function () {
        var _this = this;
        this.scroll = "currentlosts";
        console.log("current LostNFound");
        this.error = '';
        var currentLostObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "current_pageNo": this.current_pageNo
        };
        this.serviceProvider.currentLostNFoundApi(currentLostObj).then(function (data) {
            // console.log("currentLostNFoundApi" +JSON.stringify(data));
            if (data["success"] == 0) {
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.lostNfoundArray = data["response"];
                _this.lostnFoundLists = _this.lostNfoundArray;
                // console.log("this.lostnFoundLists" +JSON.stringify(this.lostnFoundLists));
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
    LostnfoundPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.scroll = "currentlosts";
        this.current_pageNo = this.current_pageNo + 1;
        var currentLostObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "current_pageNo": this.current_pageNo
        };
        setTimeout(function () {
            _this.serviceProvider.currentLostNFoundApi(currentLostObj).then(function (data) {
                var obj = data;
                if (obj.response.length) {
                    for (var i in obj.response) {
                        _this.newlosts = obj.response[i];
                        _this.lostNfoundArray.push(_this.newlosts);
                        document.addEventListener("pause", function () {
                            // do something
                            this.lostnFoundLists = this.lostNfoundArray;
                        }, true);
                    }
                }
                else {
                    _this.pagingEnabled = false;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    LostnfoundPage.prototype.archiveLostNFound = function () {
        var _this = this;
        this.scroll = "archivelosts";
        console.log("archive LostNFound");
        this.error = '';
        var archiveLostObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "archive_pageNo": this.archive_pageNo
        };
        this.serviceProvider.archiveLostNFoundApi(archiveLostObj).then(function (data) {
            // console.log("archiveLostNFoundApi" +JSON.stringify(data))
            if (data["success"] == 0) {
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.archiveArray = data["response"];
                // console.log("this.archiveArray" +JSON.stringify(this.archiveArray));
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
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
    LostnfoundPage.prototype.doInfinite1 = function (infiniteScroll) {
        var _this = this;
        this.scroll = "archivelosts";
        this.archive_pageNo = this.archive_pageNo + 1;
        var archiveLostObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "archive_pageNo": this.archive_pageNo
        };
        setTimeout(function () {
            _this.serviceProvider.archiveLostNFoundApi(archiveLostObj).then(function (data) {
                var obj = data;
                if (obj.response.length) {
                    for (var i in obj.response) {
                        _this.newlostsarchive = obj.response[i];
                        _this.archiveArray.push(_this.newlostsarchive);
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
    LostnfoundPage.prototype.restorearchive = function (archive, index) {
        var _this = this;
        // console.log("restore archive", archive);
        this.scroll = "archivelosts";
        // console.log("restore this.archive_pageNo", this.archive_pageNo);
        var restoreLostObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "status": "restore",
            "item_id": archive.id,
            "archive_pageNo": this.archive_pageNo
        };
        this.serviceProvider.returnLostNFoundApi(restoreLostObj).then(function (data) {
            // console.log("returnLostNFoundApi restore" +JSON.stringify(data))
            if (data["success"] == 0) {
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                // console.log("archive selected", archive);
                _this.selectedArchive = archive;
                var index_1 = _this.archiveArray.indexOf(archive);
                if (index_1 > -1) {
                    _this.archiveArray.splice(index_1, 1);
                }
                _this.lostnFoundLists.push(_this.selectedArchive);
                _this.archiveLostNFound();
                var toastSuccess = _this.toastCtrl.create({
                    message: data["message"],
                    duration: 3000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'X',
                    cssClass: "toast-success",
                });
                toastSuccess.present();
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
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
    LostnfoundPage.prototype.returnLostnFound = function (lostnfound, index) {
        var _this = this;
        // console.log("returnLostnFound", lostnfound);
        console.log("this.current_pageNo.. return", this.current_pageNo);
        this.scroll = "currentlosts";
        var returnLostObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "status": "return",
            "item_id": lostnfound.id,
            "current_pageNo": this.current_pageNo
        };
        this.serviceProvider.returnLostNFoundApi(returnLostObj).then(function (data) {
            // console.log("returnLostNFoundApi retutn" +JSON.stringify(data))
            if (data["success"] == 0) {
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.selectedCurrent = lostnfound;
                var index_2 = _this.lostNfoundArray.indexOf(lostnfound);
                if (index_2 > -1) {
                    _this.lostNfoundArray.splice(index_2, 1);
                }
                _this.archiveArray.push(_this.selectedCurrent);
                _this.currentLostNFound();
                var toastSuccess = _this.toastCtrl.create({
                    message: data["message"],
                    duration: 3000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'X',
                    cssClass: "toast-success",
                });
                toastSuccess.present();
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
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
    LostnfoundPage.prototype.editLostnFound = function (lostnfound) {
        console.log("editLostnFound", lostnfound);
        this.navCtrl.push("CreateNewLostNFoundPage", { 'editLost': lostnfound });
    };
    LostnfoundPage.prototype.createentry = function () {
        console.log("create lost entry");
        this.navCtrl.push("CreateNewLostNFoundPage");
    };
    LostnfoundPage.prototype.openfilesinbrowser = function (file) {
        console.log("open files", file);
        var URL = file.file_name;
        var browserInst = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        var browser = browserInst.create(URL, '_system', this.options);
    };
    LostnfoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lostnfound',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/lostnfound/lostnfound.html"*/'<!--\n  Generated template for the archivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Lost & Found"> </header>\n\n<ion-content class="paddingTop">\n	<ion-toolbar class="toolbar-color">\n    <ion-segment [(ngModel)]="lostnfound" (ionChange)="onLostNFoundChanged($event)" class="segment">\n      <ion-segment-button value="current" class="segment-btn">\n        CURRENT\n      </ion-segment-button>\n      <ion-segment-button value="archive" class="segment-btn">\n        ARCHIVE\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <div *ngIf="ifCurrentSelected">\n		<ion-searchbar placeholder="Search" [(ngModel)]="searchLost" (ionInput)="filterItems($event)" class="searchBar"></ion-searchbar>\n		<button ion-button round class="entryBtn" (click)="createentry()">CREATE ENTRY</button>\n\n		<ion-grid class="gridC" *ngIf="lostNfoundArray.length >= 1">\n			<ion-row class="rowC"  *ngFor="let lostnfound of lostnFoundLists;let idx = index;">\n				<ion-col col-4 col-xl-4 col-lg-3 class="imgCol">\n					<img src="{{lostnfound.file_name}}" class="listImg" *ngIf="lostnfound.file_type == \'jpg\' || lostnfound.file_type == \'png\' || lostnfound.file_type == \'jpeg\' || lostnfound.file_type == \'mp4\'">\n					\n					<div class="listImgdiv" *ngIf="lostnfound.file_type == \'odt\' || lostnfound.file_type == \'pdf\' || lostnfound.file_type == \'xlsx\' || lostnfound.file_type == \'txt\'">\n						<button ion-button round outline class="downloadBtn" (click)="openfilesinbrowser(lostnfound)">Download OR <br/>Open File</button>\n					</div>\n					<img src="assets/imgs/noimage.png" class="listImg" *ngIf="lostnfound.file_type == \'\'">\n				</ion-col>\n				<ion-col col-8 col-xl-8 col-lg-9>\n					<ion-item class="lastBtns">\n			    	<button ion-button round outline class="returnBtn" (click)="returnLostnFound(lostnfound, idx)" item-end>RETURNED</button>\n						<button ion-button round outline class="editBtn" (click)="editLostnFound(lostnfound)" item-end>EDIT</button>\n				  </ion-item>\n				  <ion-row>\n				  	<ion-col col-12 col-xl-12><h5 class="nameH">{{lostnfound.item_name}}</h5></ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Description</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{lostnfound.description}}</ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Name/#</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{lostnfound.name}}</ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Location</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{lostnfound.location}}</ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Date</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{lostnfound.date}}</ion-col>\n				  </ion-row>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<ion-grid class="gridC" *ngIf="lostNfoundArray.length <= 0">\n			<ion-row class="rowC">\n				<ion-col col-12 col-xl-12 col-lg-12 class="notecol">\n					{{error}}\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n	</div>\n	<div *ngIf="ifArchiveSelected">\n		<ion-grid class="gridC" *ngIf="archiveArray.length >= 1">\n			<ion-row class="rowC"  *ngFor="let archive of archiveArray;let idx = index;">\n				<ion-col col-4 col-xl-4 col-lg-3 class="imgCol">\n					<img src="{{archive.file_name}}" class="listImg" *ngIf="archive.file_type == \'jpg\' || archive.file_type == \'png\' || archive.file_type == \'jpeg\' || archive.file_type == \'mp4\'">\n					\n					<div class="listImgdiv" *ngIf="archive.file_type == \'odt\' || archive.file_type == \'pdf\' || archive.file_type == \'xlsx\' || archive.file_type == \'txt\' || archive.file_type == \'docx\'">\n						<button ion-button round outline class="downloadBtn" (click)="openfilesinbrowser(archive)">Download OR <br/>Open File</button>\n					</div>\n					<img src="assets/imgs/noimage.png" class="listImg" *ngIf="archive.file_type == \'\'">\n				</ion-col>\n				<ion-col col-8 col-xl-8 col-lg-9>\n					<ion-item class="lastBtns">\n			    	<button ion-button round outline class="returnBtn" (click)="restorearchive(archive, idx)" item-end>RESTORE</button>\n				  </ion-item>\n				  <ion-row>\n				  	<ion-col col-12 col-xl-12><h5 class="nameH">{{archive.item_name}}</h5></ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Description</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{archive.description}}</ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Name/#</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{archive.name}}</ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Location</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{archive.location}}</ion-col>\n				  	<ion-col col-5 col-xl-4 col-lg-3 class="nameP">Date</ion-col>\n				  	<ion-col col-7 col-xl-8 col-lg-9 class="nameB">{{archive.date}}</ion-col>\n				  </ion-row>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<ion-grid class="gridC" *ngIf="archiveArray.length <= 0">\n			<ion-row class="rowC">\n				<ion-col col-12 col-xl-12 col-lg-12 class="notecol">\n					{{error}}\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="scroll == \'currentlosts\'">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more current data..." *ngIf="pagingEnabled"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> \n  <ion-infinite-scroll (ionInfinite)="doInfinite1($event)" *ngIf="scroll == \'archivelosts\'">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more archive data..." *ngIf="pagingEnabled1"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf="!pagingEnabled && scroll == \'currentlosts\'" class="nopost"> No more current lost is available.</div>\n  <div *ngIf="!pagingEnabled1 && scroll == \'archivelosts\'" class="nopost"> No more archive lost is available.</div>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/lostnfound/lostnfound.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], LostnfoundPage);
    return LostnfoundPage;
}());

//# sourceMappingURL=lostnfound.js.map

/***/ })

});
//# sourceMappingURL=23.js.map