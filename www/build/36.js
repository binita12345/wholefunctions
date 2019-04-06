webpackJsonp([36],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewLostNFoundPageModule", function() { return CreateNewLostNFoundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_lost_n_found__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewLostNFoundPageModule = /** @class */ (function () {
    function CreateNewLostNFoundPageModule() {
    }
    CreateNewLostNFoundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_new_lost_n_found__["a" /* CreateNewLostNFoundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_new_lost_n_found__["a" /* CreateNewLostNFoundPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewLostNFoundPageModule);
    return CreateNewLostNFoundPageModule;
}());

//# sourceMappingURL=create-new-lost-n-found.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewLostNFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(36);
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
 * Generated class for the CreateNewLostNFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewLostNFoundPage = /** @class */ (function () {
    function CreateNewLostNFoundPage(navCtrl, navParams, plt, fileChooser, filePicker, filePath, file, base64, viewCtrl, alertCtrl, _sanitizer, loader, serviceProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.fileChooser = fileChooser;
        this.filePicker = filePicker;
        this.filePath = filePath;
        this.file = file;
        this.base64 = base64;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.loader = loader;
        this.serviceProvider = serviceProvider;
        this.storage = storage;
        this.error = '';
        this.photos = {};
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        var dateNtime = __WEBPACK_IMPORTED_MODULE_8_moment___default()();
        console.log("dateNtime", dateNtime);
        this.setDate = __WEBPACK_IMPORTED_MODULE_8_moment___default()(dateNtime).format('YYYY-MM-DD hh:mm');
        console.log("this.setDate", this.setDate);
        var splitDate = this.setDate.split(' ');
        this.dob = splitDate[0];
        this.time = splitDate[1];
        this.getLostData = navParams.get('editLost');
        console.log("this.getLostData", this.getLostData);
        if (this.getLostData == undefined) {
            this.lostitem = '';
            this.location = '';
            this.description = '';
            this.dob = this.dob;
            this.itemId = '';
            this.owner = '';
            this.ownerroom = '';
        }
        else {
            this.lostitem = this.getLostData.item_name;
            this.location = this.getLostData.location;
            this.description = this.getLostData.description;
            this.dob = this.getLostData.date;
            this.itemId = this.getLostData.id;
            this.owner = this.getLostData.owner_name;
            this.ownerroom = this.getLostData.owner_room_number;
        }
        this.storage.get("userData").then(function (userData) {
            console.log("userData notes", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
        });
    }
    CreateNewLostNFoundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewLostNFoundPage');
    };
    CreateNewLostNFoundPage.prototype.addImageORFileToLost = function () {
        var _this = this;
        console.log("addImageORFileToLost");
        if (this.plt.is('android')) {
            console.log("add files or image in android");
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
                        _this.photos = { 'filestring': _this.fileData, 'filetype': _this.extension };
                    }, function (err) {
                        // this.loader.hide();
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
                // console.log("ios file uri" +uri);
                var correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
                // console.log("ios file correctPath", correctPath);
                var currentName = uri.substring(uri.lastIndexOf('/') + 1);
                // console.log("ios file currentName", currentName);
                var onlyfilename = currentName.split(".");
                // console.log("onlyfilename[0]" +onlyfilename[0]);
                var name = onlyfilename[0];
                // console.log("name" +name);
                var extension = onlyfilename[1];
                // console.log("extension" +extension);
                _this.file.readAsDataURL("file:///" + correctPath, currentName).then(function (result) {
                    // console.log("ios file result", result);
                    _this.fileData = result;
                    _this.photos = { 'filestring': _this.fileData, 'filetype': _this.extension };
                });
            });
        }
    };
    CreateNewLostNFoundPage.prototype.cancelNewLost = function () {
        console.log("cancelNewLost");
        this.viewCtrl.dismiss();
    };
    CreateNewLostNFoundPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewLostNFoundPage.prototype.createNewLost = function () {
        var _this = this;
        console.log("send new message");
        console.log("this.dob", this.dob);
        this.loader.show("Creating a new lost n found item...");
        var addlostObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "item_name": this.lostitem,
            "description": this.description,
            "location": this.location,
            "date": this.dob,
            "owner_name": this.owner,
            "owner_room_number": this.ownerroom,
            "time": this.time,
            "item_id": this.itemId,
            "photos": this.photos
        };
        console.log("addlostObj", addlostObj);
        if (addlostObj.item_name == '' || addlostObj.item_name == undefined || addlostObj.item_name == null) {
            this.loader.hide();
            this.error = 'please enter lost item name';
        }
        else if (addlostObj.location == '' || addlostObj.location == undefined || addlostObj.location == null) {
            this.loader.hide();
            this.error = 'please enter location';
        }
        else if (addlostObj.date == '' || addlostObj.date == undefined || addlostObj.date == null) {
            this.loader.hide();
            this.error = 'please enter date of birth';
        }
        else if (addlostObj.time == '' || addlostObj.time == undefined || addlostObj.time == null) {
            this.loader.hide();
            this.error = 'please enter time';
        }
        else if (addlostObj.description == '' || addlostObj.description == undefined || addlostObj.description == null) {
            this.loader.hide();
            this.error = 'please enter description';
        }
        else {
            this.error = '';
            this.serviceProvider.addLostNFoundApi(addlostObj).then(function (data) {
                console.log("addLostNFoundApi" + JSON.stringify(data));
                if (data["success"] == 0) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else if (data["success"] == 1) {
                    _this.loader.hide();
                    _this.error = '';
                    var alert_1 = _this.alertCtrl.create({
                        title: _this.htmlProperty(),
                        subTitle: 'Your Lost Entry Added successfully.',
                        cssClass: 'newsFeedAlertCss',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    console.log('ok clicked');
                                    _this.navCtrl.push("LostnfoundPage");
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                else if (data["success"] == 2) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else if (data["success"] == 4) {
                    _this.loader.hide();
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
                    _this.loader.hide();
                    _this.error = '';
                }
            }, function (err) {
                _this.loader.hide();
                console.log("this.error" + JSON.stringify(err));
            });
        }
    };
    CreateNewLostNFoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-new-lost-n-found',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-lost-n-found/create-new-lost-n-found.html"*/'<!--\n  Generated template for the CreateNewLostNFoundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<header title="Lost & Found"> </header>\n\n<ion-content class="paddingTop">\n	<div class="divCss"></div>\n	<ion-grid class="gridCss">\n		<p class="headP">Create New Lost & Found</p>\n		\n		<ion-row>\n			<ion-col col-6 col-xl-6 class="headlineC">\n				<ion-item class="drpItem">\n					<ion-input type="text" class="ionInput" [(ngModel)]="lostitem" value="{{lostitem}}" placeholder="Lost Item"></ion-input>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6 class="addimageC">\n				<button ion-button round outline class="imageBtn" (click)="addImageORFileToLost()" accept="image/*,application/pdf">ADD IMAGE OR FILE</button>\n			</ion-col>\n\n			<ion-col col-5 col-xl-5>\n				<ion-item class="drpItem">\n					<ion-input type="text" class="ionInput" [(ngModel)]="location" value="{{location}}" placeholder="Location"></ion-input>\n				</ion-item>\n			</ion-col>\n			<ion-col col-4 col-xl-4 class="dateCol">\n				<ion-item class="dateInput">\n			    <ion-datetime class="dateInput1" displayFormat="DD/MM/YY" [(ngModel)]="dob" placeholder="{{dob}}"></ion-datetime>\n				</ion-item>\n			</ion-col>\n			<ion-col col-3 col-xl-3>\n				<ion-item class="drpItem">\n			    <ion-datetime class="dateInput2" displayFormat="hh:mm" [(ngModel)]="time" placeholder="{{time}}"></ion-datetime>\n				</ion-item>\n			</ion-col>\n\n			<ion-col col-12 col-xl-12>\n				<ion-textarea placeholder="Description" class="textArea" value="{{description}}" [(ngModel)]="description"></ion-textarea>\n			</ion-col>\n\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n					<ion-input type="text" class="ionInput" [(ngModel)]="owner" placeholder="Owner" value="{{owner}}"></ion-input>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n					<ion-input type="text" class="ionInput" [(ngModel)]="ownerroom" placeholder="Owner\'s roomNo." value="{{ownerroom}}"></ion-input>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n\n		<div class="error-message">\n	    {{error}}\n	  </div>\n		<ion-item class="lastBtns">\n	    	<button ion-button round class="cancelBtn" (click)="cancelNewLost()" item-end>CANCEL</button>\n			<button ion-button round class="saveBtn" (click)="createNewLost()" item-end>POST</button>\n	  </ion-item>\n	  \n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-lost-n-found/create-new-lost-n-found.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__["a" /* IOSFilePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_10__providers_loader_loader__["a" /* Loader */], __WEBPACK_IMPORTED_MODULE_9__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */]])
    ], CreateNewLostNFoundPage);
    return CreateNewLostNFoundPage;
}());

//# sourceMappingURL=create-new-lost-n-found.js.map

/***/ })

});
//# sourceMappingURL=36.js.map