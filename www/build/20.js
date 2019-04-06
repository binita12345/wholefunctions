webpackJsonp([20],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedDetailPageModule", function() { return NewsfeedDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newsfeed_detail__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsfeedDetailPageModule = /** @class */ (function () {
    function NewsfeedDetailPageModule() {
    }
    NewsfeedDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newsfeed_detail__["a" /* NewsfeedDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newsfeed_detail__["a" /* NewsfeedDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], NewsfeedDetailPageModule);
    return NewsfeedDetailPageModule;
}());

//# sourceMappingURL=newsfeed-detail.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(108);
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
 * Generated class for the NewsfeedDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsfeedDetailPage = /** @class */ (function () {
    function NewsfeedDetailPage(navCtrl, navParams, plt, fileChooser, filePicker, filePath, file, base64, storage, loader, serviceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.fileChooser = fileChooser;
        this.filePicker = filePicker;
        this.filePath = filePath;
        this.file = file;
        this.base64 = base64;
        this.storage = storage;
        this.loader = loader;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.userComments = [];
        this.ifusercomments = false;
        this.slideImages = [];
        this.error = '';
        this.filenameArray = [];
        this.attachments = [];
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
        this.title = navParams.get('title');
        this.postid = navParams.get('post_id');
    }
    NewsfeedDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NewsfeedDetailPage');
        this.storage.get("userData").then(function (userData) {
            // console.log("newsfeed entry userData", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.newsfeedDetail(_this.userId, _this.sessionId);
            _this.getUserListOncomment();
        });
    };
    NewsfeedDetailPage.prototype.newsfeedDetail = function (userId, sessionId) {
        var _this = this;
        console.log("newsfeed detail");
        var nfdetail = {
            "user_id": userId,
            "session_id": sessionId,
            "post_id": this.postid
        };
        this.serviceProvider.singlefeedApi(nfdetail).then(function (data) {
            console.log("displayNewsfeedApi data" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.loader.hide();
                _this.error = data["message"];
                // this.alert.errorAlert(data["message"]);
            }
            else if (data["success"] == 1) {
                _this.loader.hide();
                _this.detail = data["response"];
                console.log("newsfeed this.detail" + JSON.stringify(_this.detail));
                _this.attachments = _this.detail.photos;
                for (var i in _this.attachments) {
                    console.log("this.attachments[i]", _this.attachments[i]);
                    console.log("this.attachments[i].file type", _this.attachments[i].file_type);
                    var filetype = _this.attachments[i].file_type;
                    var fileName = _this.attachments[i].file_name.substr(_this.attachments[i].file_name.lastIndexOf('/') + 1);
                    console.log("file fileName", fileName);
                    var newVal = fileName.substring(12, fileName.length);
                    console.log("file newVal", newVal);
                    if (filetype == "odt" || filetype == "pdf" || filetype == "xlsx" || filetype == "txt" || filetype == "docx") {
                        _this.filenameArray.push({ 'File_Name': newVal, 'File_Url': _this.attachments[i].file_name });
                        console.log("file this.filenameArray", _this.filenameArray);
                    }
                    else if (filetype == "jpg" || filetype == "png" || filetype == "jpeg" || filetype == "mp4") {
                        _this.slideImages.push({ 'File_Name': _this.attachments[i].file_name, 'File_Extension': filetype });
                        console.log("newsfeed this.slideImages" + JSON.stringify(_this.slideImages));
                    }
                    else { }
                }
                _this.designationTitle = _this.detail.current_position;
                _this.fullMessage = _this.detail.description;
                _this.disableComment = _this.detail.disable_comment;
                //  this.title = navParams.get('title');
            }
            else if (data["success"] == 2) {
                _this.loader.hide();
                _this.error = data["message"];
                // this.alert.errorAlert(data["message"]);
            }
            else if (data["success"] == 4) {
                _this.loader.hide();
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
                _this.loader.hide();
            }
        }, function (err) {
            // this.loader.hide();
            console.log("err", err);
        });
    };
    NewsfeedDetailPage.prototype.createComment = function () {
        console.log("create comment");
        this.ifusercomments = true;
    };
    NewsfeedDetailPage.prototype.cancelComment = function () {
        console.log("cancel comment");
        this.ifusercomments = false;
    };
    NewsfeedDetailPage.prototype.addImageToComment = function () {
        var _this = this;
        console.log("add Image To comment");
        if (this.plt.is('android')) {
            // console.log("add files or image in android");
            this.fileChooser.open().then(function (uri) {
                // console.log("file uri", uri);
                _this.filePath.resolveNativePath(uri).then(function (filePathResult) {
                    // console.log("file filePathResult", filePathResult);
                    var fileName = filePathResult.substr(filePathResult.lastIndexOf('/') + 1);
                    // console.log("android file fileName", fileName);
                    _this.displayFile = fileName;
                    // console.log("this.displayFile" +JSON.stringify(this.displayFile));
                    var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
                    // console.log("android file fileExtension", fileExtension);
                    _this.extension = fileExtension;
                    var filePathurl = filePathResult;
                    // console.log("file uri filePathurl", filePathurl);
                    _this.base64.encodeFile(filePathurl).then(function (base64File) {
                        // console.log("file uri base64File", base64File);
                        _this.fileData = base64File;
                        // console.log("file uri this.fileData", this.fileData);
                        var splitbase64 = _this.fileData.split(',');
                        // console.log("add files in android splitbase64", splitbase64[1]);
                        _this.getSplitbase64 = splitbase64[1];
                        // console.log("add files in android this.getSplitbase64", this.getSplitbase64);
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
                _this.file.readAsDataURL("file:///" + correctPath, currentName).then(function (result) {
                    console.log("ios file result", result);
                });
            });
        }
    };
    NewsfeedDetailPage.prototype.postComment = function () {
        console.log("post comment");
    };
    NewsfeedDetailPage.prototype.next = function () {
        this.slides.slideNext();
    };
    NewsfeedDetailPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    NewsfeedDetailPage.prototype.getUserListOncomment = function () {
        var _this = this;
        var userListObj = {
            "user_id": this.userId,
            "session_id": this.sessionId
        };
        this.serviceProvider.userListApi(userListObj).then(function (data) {
            console.log("userListApi data" + JSON.stringify(data));
            if (data["success"] == 0) {
                // this.loader.hide();
                _this.error = data["message"];
                // this.alert.errorAlert(data["message"]);
            }
            else if (data["success"] == 1) {
                // this.loader.hide();
                _this.userComments = data["response"];
                console.log("this.userComments", _this.userComments);
            }
            else if (data["success"] == 2) {
                // this.loader.hide();
                _this.error = data["message"];
                // this.alert.errorAlert(data["message"]);
            }
            else if (data["success"] == 4) {
                // this.loader.hide();
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
                // this.loader.hide();
            }
        }, function (err) {
            // this.loader.hide();
            console.log("err", err);
        });
    };
    NewsfeedDetailPage.prototype.openfilesinbrowser = function (file) {
        console.log("open files", file);
        var URL = file.File_Url;
        var browserInst = new __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        var browser = browserInst.create(URL, '_system', this.options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], NewsfeedDetailPage.prototype, "slides", void 0);
    NewsfeedDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-newsfeed-detail',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/newsfeed-detail/newsfeed-detail.html"*/'<!--\n  Generated template for the NewsfeedDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Newsfeed"> </header>\n\n<ion-content class="paddingTop">\n\n	<ion-item class="divCss">\n		<ion-icon name="md-arrow-round-back" class="iconCss" item-start navPop></ion-icon>\n		<p class="pCss">{{title}}</p>\n	</ion-item>\n\n	<ion-grid class="gridCss">\n		<ion-row>\n			<ion-col col-12 col-xl-12>\n				<h6 style="margin-top: 0.6rem;">{{designationTitle}}</h6>\n				<p class="upperDetail">{{fullMessage}}</p>\n				<p class="upperDetail" *ngIf="attachments?.length > 0">we attached his portraits</p>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-12 col-xl-12 *ngFor="let file of filenameArray">\n  			<button class="filesBtn" round outline ion-button (click)="openfilesinbrowser(file)">{{file.File_Name}}</button>\n  		</ion-col>\n  	</ion-row>\n		<ion-row *ngIf="slideImages?.length > 0">\n			<ion-col col-1 col-xl-1 class="colImg">\n				<img src="assets/imgs/newsfeed/back.png" class="imgDetail" (click)="prev()">\n			</ion-col>\n			<ion-col col-10 col-xl-10 class="colImg1">\n				<ion-slides options="slideOpts" class="slideCss" #slides>\n		      <ion-slide *ngFor="let slide of slideImages">\n		        <img src="{{slide.File_Name}}" class="imgPic" *ngIf="slide.File_Extension == \'jpg\' || slide.File_Extension == \'png\' || slide.File_Extension == \'jpeg\'">\n		        <video width="100%" height="100" loop class="embed-responsive-item" controls *ngIf="slide.File_Extension == \'mp4\'">\n					    <source [src]="slide.File_Name" type="video/mp4">\n					  </video>\n		      </ion-slide>\n		    </ion-slides>\n			</ion-col>\n			<ion-col col-1 col-xl-1 class="colImg">\n				<img src="assets/imgs/newsfeed/forward.png" class="imgDetail" (click)="next()">\n			</ion-col>\n		</ion-row>	\n\n		<ion-row *ngIf="disableComment == \'0\'">\n			<ion-col col-6 col-xl-6 class="comCol">\n				Comment\n			</ion-col>\n			<ion-col col-6 col-xl-6 class="comBtn" *ngIf="!ifusercomments">\n				<button ion-button round outline class="commentBtn" (click)="createComment()">COMMENT</button>\n			</ion-col>\n		</ion-row>	\n\n		<div *ngIf="ifusercomments">\n			<div *ngIf="disableComment == \'0\'">\n				<ion-row>\n					<ion-col col-3 col-xl-3 class="colDesc">\n						<img src="assets/imgs/user.png" class="comProfile">\n						<p class="comusername">{{currentusername}}</p>\n						<p class="comuserdesign">{{currentuserdesign}}</p>\n					</ion-col>\n					<ion-col col-9 col-xl-9>\n						<div class="divCom">\n							<ion-textarea class="textArea" [(ngModel)]="commentdetail"></ion-textarea>\n						</div>\n					</ion-col>\n				</ion-row>	\n				<ion-row>\n					<ion-col col-4 col-xl-4><button ion-button round class="cancelBtn" (click)="cancelComment()">CANCEL</button></ion-col>\n					<ion-col col-4 col-xl-4><button ion-button round outline class="imageBtn" (click)="addImageToComment()">ADD IMAGE/FILE</button></ion-col>\n					<ion-col col-4 col-xl-4><button ion-button round class="postcommentBtn" (click)="postComment()">POST COMMENT</button></ion-col>\n				</ion-row>\n			</div>\n		</div>\n		<div *ngIf="disableComment == \'0\'">\n			<ion-row *ngFor="let comment of userComments">\n				<ion-col col-3 col-xl-3 class="colDesc">\n					<img src="{{comment.profile_picture}}" class="comProfile" *ngIf="comment.profile_picture !== \'\'">\n					<img src="assets/imgs/images.png" class="comProfile" *ngIf="comment.profile_picture == \'\'">\n					<p class="comusername">{{comment.first_name}} {{comment.last_name}}</p>\n					<p class="comuserdesign">{{comment.current_position}}</p>\n				</ion-col>\n				<ion-col col-9 col-xl-9>\n					<div class="divCom">\n						<p class="paraDiv">{{comment.commentdetail}}</p>\n						<p class="date">{{comment.date}} &nbsp;&nbsp;&nbsp;&nbsp; {{comment.time}}</p>\n					</div>\n				</ion-col>\n			</ion-row>	\n		</div>\n	</ion-grid>\n	<div style="margin-bottom: 65px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/newsfeed-detail/newsfeed-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__["a" /* IOSFilePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__providers_loader_loader__["a" /* Loader */], __WEBPACK_IMPORTED_MODULE_9__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewsfeedDetailPage);
    return NewsfeedDetailPage;
}());

//# sourceMappingURL=newsfeed-detail.js.map

/***/ })

});
//# sourceMappingURL=20.js.map