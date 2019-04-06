webpackJsonp([14],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateMessageDetailPageModule", function() { return PrivateMessageDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__private_message_detail__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrivateMessageDetailPageModule = /** @class */ (function () {
    function PrivateMessageDetailPageModule() {
    }
    PrivateMessageDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__private_message_detail__["a" /* PrivateMessageDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__private_message_detail__["a" /* PrivateMessageDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], PrivateMessageDetailPageModule);
    return PrivateMessageDetailPageModule;
}());

//# sourceMappingURL=private-message-detail.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateMessageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__ = __webpack_require__(347);
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
 * Generated class for the PrivateMessageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivateMessageDetailPage = /** @class */ (function () {
    function PrivateMessageDetailPage(navCtrl, navParams, plt, fileChooser, filePicker, filePath, file, base64, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.fileChooser = fileChooser;
        this.filePicker = filePicker;
        this.filePath = filePath;
        this.file = file;
        this.base64 = base64;
        this.alertCtrl = alertCtrl;
        this.saveFiles = [];
        this.filenameArray = [];
        this.designationTitle = 'Employee of the Month';
        this.messageename = 'Ryan';
        this.fullMessage = 'Congratulation - you are nominated as Employee of the Month September.Therefore,you and all other nominees are invited for breakfast with our GM. \n Attached you can find your invitation.Please let me know if you can come.';
        this.currentusername = 'R. Perkins';
        this.currentuserdesign = 'Head Waiter';
        this.filenameArray = [{ 'File_Name': 'invitationEotM.pdf' }];
    }
    PrivateMessageDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivateMessageDetailPage');
    };
    PrivateMessageDetailPage.prototype.addImageORFile = function () {
        var _this = this;
        console.log("add Image or file");
        if (this.plt.is('android')) {
            console.log("add files or image in android");
            this.fileChooser.open().then(function (uri) {
                console.log("file uri", uri);
                _this.filePath.resolveNativePath(uri).then(function (filePathResult) {
                    console.log("file filePathResult", filePathResult);
                    var fileName = filePathResult.substr(filePathResult.lastIndexOf('/') + 1);
                    console.log("android file fileName", fileName);
                    _this.displayFile = fileName;
                    console.log("this.displayFile" + JSON.stringify(_this.displayFile));
                    _this.filenameArray.push({ 'File_Name': _this.displayFile });
                    var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
                    console.log("android file fileExtension", fileExtension);
                    _this.extension = fileExtension;
                    var filePathurl = filePathResult;
                    console.log("file uri filePathurl", filePathurl);
                    _this.base64.encodeFile(filePathurl).then(function (base64File) {
                        _this.fileData = base64File;
                        var splitbase64 = _this.fileData.split(',');
                        _this.getSplitbase64 = splitbase64[1];
                    }, function (err) {
                        console.log(err);
                    });
                });
            }).catch(function (err) {
                console.log('Error', err);
            });
        }
        else if (this.plt.is('ios')) {
            console.log("add files or image in ios");
            this.filePicker.pickFile().then(function (uri) {
                console.log("ios file uri" + uri);
                var correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
                console.log("ios file correctPath", correctPath);
                var currentName = uri.substring(uri.lastIndexOf('/') + 1);
                console.log("ios file currentName", currentName);
                _this.filenameArray.push({ 'File_Name': currentName });
                _this.file.readAsDataURL("file:///" + correctPath, currentName).then(function (result) {
                    console.log("ios file result", result);
                });
            });
        }
    };
    PrivateMessageDetailPage.prototype.removeAttachedFile = function (file) {
        console.log("remove attach file", file);
        var alert = this.alertCtrl.create({
            title: 'Confirm delete selected file',
            message: 'Are you sure you want to permanently delete this file?',
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
    PrivateMessageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-private-message-detail',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/private-message-detail/private-message-detail.html"*/'<!--\n  Generated template for the PrivateMessageDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<header title="Newsfeed"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="md-arrow-round-back" class="iconCss" item-start navPop></ion-icon>\n		<p class="pCss">Private Message Detail</p>\n	</ion-item>\n\n	<ion-grid class="gridCss">\n		<ion-row>\n			<ion-col col-12 col-xl-12>\n				<h6 style="margin-top: 0.6rem;">{{designationTitle}}</h6>\n				<p class="upperDetail">Dear {{messageename}}</p>\n				<p class="upperDetail">{{fullMessage}}</p>\n				<p class="upperDetail">Best Regards,</p>\n				<p class="upperDetail">Nethalie Gross <br/>(HR)</p>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n  		<ion-col col-5 col-xl-5 *ngFor="let file of filenameArray">\n  			<button class="filesBtn" round outline ion-button>{{file.File_Name}}</button>\n  		</ion-col>\n  		<ion-col col-2 col-xl-2 class="colAdd">\n  			<ion-avatar>\n					<img src="assets/imgs/newsfeed/close.png" class="image" (click)="removeAttachedFile(file)">\n				</ion-avatar>\n  		</ion-col>\n  	</ion-row>\n\n		<div class="divBorder"></div>\n		<br/>\n		<div>\n			<ion-row>\n				<ion-col col-3 col-xl-3 class="colDesc">\n					<img src="assets/imgs/newsfeed/profile.jpg" class="comProfile">\n					<p class="comusername">{{currentusername}}</p>\n					<p class="comuserdesign">{{currentuserdesign}}</p>\n				</ion-col>\n				<ion-col col-9 col-xl-9 class="colText">\n					<div class="divCom">\n						<ion-textarea class="textArea" [(ngModel)]="commentdetail"></ion-textarea>\n					</div>\n				</ion-col>\n			</ion-row>	\n			<ion-item class="lastBtns">\n		    <button ion-button round outline class="imageBtn" (click)="addImageORFile()" item-end>ADD IMAGE/FILE</button>\n				<button ion-button round class="postcommentBtn" (click)="saveAnswer()" item-end>ANSWER</button>\n		  </ion-item>\n		</div>\n	</ion-grid>\n	<div style="margin-bottom: 65px;"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/private-message-detail/private-message-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__["a" /* IOSFilePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PrivateMessageDetailPage);
    return PrivateMessageDetailPage;
}());

//# sourceMappingURL=private-message-detail.js.map

/***/ })

});
//# sourceMappingURL=14.js.map