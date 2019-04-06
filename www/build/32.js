webpackJsonp([32],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewsfeedEntryPageModule", function() { return CreateNewsfeedEntryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_newsfeed_entry__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewsfeedEntryPageModule = /** @class */ (function () {
    function CreateNewsfeedEntryPageModule() {
    }
    CreateNewsfeedEntryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_newsfeed_entry__["a" /* CreateNewsfeedEntryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_newsfeed_entry__["a" /* CreateNewsfeedEntryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewsfeedEntryPageModule);
    return CreateNewsfeedEntryPageModule;
}());

//# sourceMappingURL=create-newsfeed-entry.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewsfeedEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_chooser_ngx__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_loader_loader__ = __webpack_require__(54);
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
 * Generated class for the CreateNewsfeedEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewsfeedEntryPage = /** @class */ (function () {
    function CreateNewsfeedEntryPage(navCtrl, navParams, plt, fileChooser, filePicker, chooser, filePath, file, base64, viewCtrl, alertCtrl, _sanitizer, serviceProvider, storage, loader) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.fileChooser = fileChooser;
        this.filePicker = filePicker;
        this.chooser = chooser;
        this.filePath = filePath;
        this.file = file;
        this.base64 = base64;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.serviceProvider = serviceProvider;
        this.storage = storage;
        this.loader = loader;
        this.checkboxes = [];
        this.ifIndividual = true;
        this.ifDepartment = false;
        this.department = '0';
        this.group = '1';
        this.post = "individual";
        this.photos = [];
        this.error = '';
        this.extensions = [];
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.checkboxes = [{ 'val': 'Pin', 'isChecked': false }, { 'val': 'Important', 'isChecked': false }, { 'val': 'disable comments', 'isChecked': false }];
        console.log("this.checkboxes", this.checkboxes);
        this.storage.get("userData").then(function (userData) {
            console.log("newsfeed entry userData", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getDepartments(_this.userId, _this.sessionId);
            _this.getGroups(_this.userId, _this.sessionId);
        });
    }
    CreateNewsfeedEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewsfeedEntryPage');
    };
    CreateNewsfeedEntryPage.prototype.getDepartments = function (userId, sessionId) {
        var _this = this;
        console.log("getAllDepartments");
        var allDepObj = {
            "user_id": userId,
            "session_id": sessionId
        };
        this.serviceProvider.allDepartmentApi(allDepObj).then(function (data) {
            console.log("allDepartmentApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.departments = data["response"];
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    CreateNewsfeedEntryPage.prototype.getGroups = function (userId, sessionId) {
        var _this = this;
        console.log("getGroups");
        var allGroupObj = {
            "user_id": userId,
            "session_id": sessionId
        };
        this.serviceProvider.allGroupsApi(allGroupObj).then(function (data) {
            console.log("allGroupsApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.groups = data["response"];
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    CreateNewsfeedEntryPage.prototype.createIndividual = function () {
        console.log("create individual");
        this.ifIndividual = false;
        this.ifDepartment = true;
        this.post = "department";
    };
    CreateNewsfeedEntryPage.prototype.createDepartment = function () {
        console.log("create department");
        this.ifIndividual = true;
        this.ifDepartment = false;
        this.post = "individual";
    };
    CreateNewsfeedEntryPage.prototype.addImageORFileToEntry = function () {
        var _this = this;
        console.log("addImageORFileToEntry");
        if (this.plt.is('android')) {
            console.log("add files or image in android");
            this.fileChooser.open().then(function (uri) {
                // console.log("file uri", uri);
                _this.filePath.resolveNativePath(uri).then(function (filePathResult) {
                    console.log("file filePathResult", filePathResult);
                    var fileName = filePathResult.substr(filePathResult.lastIndexOf('/') + 1);
                    console.log("android file fileName", fileName);
                    _this.displayFile = fileName;
                    console.log("this.displayFile" + JSON.stringify(_this.displayFile));
                    var onlyfilename = _this.displayFile.split(".");
                    // console.log("onlyfilename[0]" +onlyfilename[0]);
                    var name = onlyfilename[0];
                    var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
                    console.log("android file fileExtension", fileExtension);
                    _this.extension = fileExtension;
                    var filePathurl = filePathResult;
                    // console.log("file uri filePathurl", filePathurl);
                    _this.base64.encodeFile(filePathurl).then(function (base64File) {
                        // console.log("file uri base64File", base64File);
                        _this.fileData = base64File;
                        var newStringVal = _this.fileData.replace(/ /g, "");
                        // this.fileData = this.fileData.replace(/\s+/g, "");
                        console.log("file uri this.fileData", _this.fileData);
                        var splitbase64 = _this.fileData.split(',');
                        // console.log("add files in android splitbase64", splitbase64[1]);
                        _this.getSplitbase64 = splitbase64[1];
                        // console.log("add files in android this.getSplitbase64", this.getSplitbase64);
                        // this.extensions.push({'extensions': this.extension})
                        _this.photos.push({ 'filename': name, 'filestring': newStringVal, 'filetype': _this.extension });
                        console.log("file uri photos", _this.photos);
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
                console.log("ios file uri" + JSON.stringify(uri));
                var correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
                console.log("ios file correctPath" + JSON.stringify(correctPath));
                var currentName = uri.substring(uri.lastIndexOf('/') + 1);
                console.log("ios file currentName" + JSON.stringify(currentName));
                var onlyfilename = currentName.split(".");
                console.log("onlyfilename[0]" + onlyfilename[0]);
                var name = onlyfilename[0];
                console.log("name" + name);
                var extension = onlyfilename[1];
                console.log("extension" + extension);
                _this.file.readAsDataURL("file:///" + correctPath, currentName).then(function (base64File) {
                    // console.log("ios file base64" +JSON.stringify(base64));
                    _this.fileData = base64File;
                    var newStringVal = _this.fileData.replace(/ /g, "");
                    console.log("ios file fileData" + _this.fileData);
                    _this.photos.push({ 'filename': name, 'filestring': newStringVal, 'filetype': extension });
                    console.log("file uri photos", _this.photos);
                });
            });
        }
    };
    CreateNewsfeedEntryPage.prototype.onDepartmentChange = function (department) {
        console.log('department', department);
    };
    CreateNewsfeedEntryPage.prototype.onGroupChange = function (group) {
        console.log('group', group);
    };
    CreateNewsfeedEntryPage.prototype.cancelNewEntry = function () {
        console.log("cancel new entry");
        this.viewCtrl.dismiss();
    };
    CreateNewsfeedEntryPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewsfeedEntryPage.prototype.postNewEntry = function () {
        var _this = this;
        console.log("post new entry");
        this.loader.show("Creating Newsfeed Entry...");
        // console.log("this.checkboxes", this.checkboxes);
        for (var i in this.checkboxes) {
            // console.log("this.checkboxes[i]", this.checkboxes[i]);
            if (this.checkboxes[0].isChecked == true) {
                this.pin = 1;
            }
            else {
                this.pin = 0;
            }
            // console.log("this.pin", this.pin);
            if (this.checkboxes[1].isChecked == true) {
                this.important = 1;
            }
            else {
                this.important = 0;
            }
            // console.log("this.important", this.important);
            if (this.checkboxes[2].isChecked == true) {
                this.disable_comment = 1;
            }
            else {
                this.disable_comment = 0;
            }
            // console.log("this.disable_comment", this.disable_comment);
        }
        var addNewsfeedObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "photos": this.photos,
            "message": this.message,
            "department": this.department,
            "group": this.group,
            "headline": this.headline,
            "pin": this.pin,
            "important": this.important,
            "disable_comment": this.disable_comment,
            "post_as": this.post
        };
        console.log("addNewsfeedObj", addNewsfeedObj);
        if (addNewsfeedObj.department == '' || addNewsfeedObj.department == undefined || addNewsfeedObj.department == null) {
            this.loader.hide();
            this.error = 'please select any department';
        }
        else if (addNewsfeedObj.group == '' || addNewsfeedObj.group == undefined || addNewsfeedObj.group == null) {
            this.loader.hide();
            this.error = 'please select any group';
        }
        else if (addNewsfeedObj.headline == '' || addNewsfeedObj.headline == undefined || addNewsfeedObj.headline == null) {
            this.loader.hide();
            this.error = 'please enter headline';
        }
        else if (addNewsfeedObj.message == '' || addNewsfeedObj.message == undefined || addNewsfeedObj.message == null) {
            this.loader.hide();
            this.error = 'please enter message';
        }
        else if (addNewsfeedObj.post_as == '' || addNewsfeedObj.post_as == undefined || addNewsfeedObj.post_as == null) {
            this.loader.hide();
            this.error = 'please select post';
        }
        else {
            this.serviceProvider.createNewsfeedApi(addNewsfeedObj).then(function (data) {
                console.log("createNewsfeedApi data" + JSON.stringify(data));
                if (data["success"] == 0) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else if (data["success"] == 1) {
                    _this.loader.hide();
                    var alert_1 = _this.alertCtrl.create({
                        title: _this.htmlProperty(),
                        subTitle: 'You created an entry.',
                        message: 'Tap on a post for a detail view.',
                        cssClass: 'newsFeedAlertCss',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    _this.navCtrl.push("NewsFeedPage");
                                }
                            }
                        ]
                    });
                    alert_1.present();
                    setTimeout(function () {
                        alert_1.dismiss();
                    }, 4000);
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
    CreateNewsfeedEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-newsfeed-entry',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-newsfeed-entry/create-newsfeed-entry.html"*/'<!--\n  Generated template for the CreateNewsfeedEntryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Newsfeed"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="md-arrow-round-back" class="iconCss" item-start navPop></ion-icon>\n		<p class="pCss">Create Entry</p>\n	</ion-item>\n\n	<ion-grid class="gridCss">\n		<p class="headP">Create New Entry</p>\n		<ion-row>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n					<ion-select name="department" [(ngModel)]="department" (ionChange)="onDepartmentChange(department)" placeholder="Department" text-wrap class="selectItem1">\n				    <ion-option *ngFor="let department of departments" [value]="department.id" [selected]="department.id == department">{{department.department_name}}</ion-option>\n				  </ion-select>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n					<ion-select name="group" [(ngModel)]="group" (ionChange)="onGroupChange(group)" placeholder="Group" text-wrap class="selectItem1">\n				    <ion-option *ngFor="let group of groups" [value]="group.id" [selected]="group.id == group">{{group.group_name}}</ion-option>\n				  </ion-select>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<ion-searchbar placeholder="Search" [(ngModel)]="searchTerm" (ionInput)="filterItems()" class="searchBar"></ion-searchbar>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<ion-item class="drpItem">\n				<ion-input type="text" class="ionInput" [(ngModel)]="headline" placeholder="Headline"></ion-input>\n			</ion-item>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<button ion-button round outline class="imageBtn" (click)="addImageORFileToEntry()">ADD IMAGE OR FILE</button>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<ion-textarea placeholder="Your Message" class="textArea" [(ngModel)]="message"></ion-textarea>\n			</ion-col>\n		</ion-row>\n		<ion-list>\n		  <ion-item *ngFor="let box of checkboxes" class="checkCss">\n		    <ion-label>{{box.val}}</ion-label>\n		    <ion-checkbox slot="end" [(ngModel)]="box.isChecked"></ion-checkbox>\n		  </ion-item>\n		 \n		</ion-list>\n		<ion-row class="postCss">\n			<ion-col>\n				Post as:\n				<br/>\n				<img src="assets/imgs/newsfeed/individual.png" *ngIf="ifIndividual" (click)="createIndividual()" class="indepart">\n				<img src="assets/imgs/newsfeed/department.png" *ngIf="ifDepartment" (click)="createDepartment()" class="indepart">\n			</ion-col>\n		</ion-row>\n		<br/>\n		<div class="error-message">\n	    {{error}}\n	  </div>\n		<ion-row>\n			<br/>\n			<ion-col col-6 col-xl-6>\n				<button ion-button round class="cancelBtn" (click)="cancelNewEntry()">CANCEL</button>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<button ion-button round class="postBtn" (click)="postNewEntry()">POST</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-newsfeed-entry/create-newsfeed-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__["a" /* IOSFilePicker */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_chooser_ngx__["a" /* Chooser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_9__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11__providers_loader_loader__["a" /* Loader */]])
    ], CreateNewsfeedEntryPage);
    return CreateNewsfeedEntryPage;
}());

//# sourceMappingURL=create-newsfeed-entry.js.map

/***/ })

});
//# sourceMappingURL=32.js.map