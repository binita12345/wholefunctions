webpackJsonp([35],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewMaintenancePageModule", function() { return CreateNewMaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_maintenance__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewMaintenancePageModule = /** @class */ (function () {
    function CreateNewMaintenancePageModule() {
    }
    CreateNewMaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_new_maintenance__["a" /* CreateNewMaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_new_maintenance__["a" /* CreateNewMaintenancePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewMaintenancePageModule);
    return CreateNewMaintenancePageModule;
}());

//# sourceMappingURL=create-new-maintenance.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewMaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(36);
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
 * Generated class for the CreateNewMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewMaintenancePage = /** @class */ (function () {
    function CreateNewMaintenancePage(navCtrl, navParams, viewCtrl, alertCtrl, _sanitizer, actionSheetCtrl, plt, camera, loader, serviceProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.plt = plt;
        this.camera = camera;
        this.loader = loader;
        this.serviceProvider = serviceProvider;
        this.storage = storage;
        this.error = '';
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        var dateNtime = __WEBPACK_IMPORTED_MODULE_2_moment___default()();
        console.log("dateNtime", dateNtime);
        this.dob = __WEBPACK_IMPORTED_MODULE_2_moment___default()(dateNtime).format('YYYY-MM-DD');
        this.storage.get("userData").then(function (userData) {
            console.log("userData notes", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
        });
    }
    CreateNewMaintenancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewMaintenancePage');
    };
    CreateNewMaintenancePage.prototype.onStatusChange = function (status) {
        console.log('status', status);
    };
    CreateNewMaintenancePage.prototype.onPriorityChange = function (priority) {
        console.log('priority', priority);
    };
    CreateNewMaintenancePage.prototype.addImageToMaintenance = function () {
        var _this = this;
        console.log("add image to maintenance");
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Option',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Take photo',
                    role: 'destructive',
                    icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,
                    handler: function () {
                        _this.takephoto();
                    }
                },
                {
                    text: 'Choose photo from Gallery',
                    icon: !this.plt.is('ios') ? 'ios-images-outline' : null,
                    handler: function () {
                        _this.openGallery();
                    }
                },
            ]
        });
        actionSheet.present();
    };
    CreateNewMaintenancePage.prototype.takephoto = function () {
        var _this = this;
        var options = {
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // If it's base64:
            _this.image = imageData;
            console.log("take photo imagedata" + JSON.stringify(imageData));
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    CreateNewMaintenancePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.loader.show("compressing Image...");
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.image = imageData;
            console.log("gallary imagedata" + JSON.stringify(imageData));
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    CreateNewMaintenancePage.prototype.cancelNewMaintenance = function () {
        console.log("cancelNewLost");
        this.viewCtrl.dismiss();
    };
    CreateNewMaintenancePage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewMaintenancePage.prototype.createNewMaintenance = function () {
        var _this = this;
        console.log("add new maintenance");
        this.loader.show("Creating a new maintenance item...");
        var addmaintenanceObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "item_name": this.item,
            "description": this.description,
            "location": this.location,
            "status": this.status,
            "priority": this.priority,
            "date": this.dob,
            "photos": this.base64Image
        };
        console.log("addmaintenanceObj", addmaintenanceObj);
        if (this.item == '' || this.item == undefined || this.item == null) {
            this.loader.hide();
            this.error = 'please enter item name';
        }
        else if (this.description == '' || this.description == undefined || this.description == null) {
            this.loader.hide();
            this.error = 'please enter description';
        }
        else if (this.location == '' || this.location == undefined || this.location == null) {
            this.loader.hide();
            this.error = 'please enter location';
        }
        else if (this.status == '' || this.status == undefined || this.status == null) {
            this.loader.hide();
            this.error = 'please enter status';
        }
        else if (this.priority == '' || this.priority == undefined || this.priority == null) {
            this.loader.hide();
            this.error = 'please enter priority';
        }
        else {
            this.error = '';
            this.serviceProvider.addMaintenanceApi(addmaintenanceObj).then(function (data) {
                console.log("addMaintenanceApi" + JSON.stringify(data));
                if (data["success"] == 0) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else if (data["success"] == 1) {
                    _this.loader.hide();
                    _this.error = '';
                    var alert_1 = _this.alertCtrl.create({
                        title: _this.htmlProperty(),
                        subTitle: 'Your Maintenance Entry Added successfully.',
                        cssClass: 'newsFeedAlertCss',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    console.log('ok clicked');
                                    _this.navCtrl.push("MaintenancePage");
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
    CreateNewMaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-new-maintenance',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-maintenance/create-new-maintenance.html"*/'<!--\n  Generated template for the CreateNewMaintenancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<header title="Maintenance"> </header>\n\n<ion-content class="paddingTop">\n	<div class="divCss"></div>\n	<ion-grid class="gridCss">\n		<p class="headP">Create New Entry</p>\n		\n		<ion-row>\n			<ion-col col-12 col-xl-12>\n				<ion-item class="drpItem">\n					<ion-input type="text" [(ngModel)]="item" placeholder="Item"></ion-input>\n				</ion-item>\n			</ion-col>\n			<br/>\n			<ion-col col-12 col-xl-12>\n				<ion-item class="drpItem">\n					<ion-input type="text" [(ngModel)]="description" placeholder="Description"></ion-input>\n				</ion-item>\n			</ion-col>\n			<br/>\n			<ion-col col-12 col-xl-12>\n				<ion-item class="drpItem">\n					<ion-input type="text" [(ngModel)]="location" placeholder="Location"></ion-input>\n				</ion-item>\n			</ion-col>\n			\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n				    <ion-select name="status" [(ngModel)]="status" (ionChange)="onStatusChange(status)" placeholder="Status" text-wrap class="selectItem1">\n	            <ion-option value="In Process">In Process</ion-option>\n	            <ion-option value="Waiting">Waiting</ion-option>\n	            <ion-option value="Done">Done</ion-option>\n          	</ion-select>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n				    <ion-select name="priority" [(ngModel)]="priority" (ionChange)="onPriorityChange(priority)" placeholder="Priority" text-wrap class="selectItem1">\n	            <ion-option value="High">High</ion-option>\n	            <ion-option value="Medium">Medium</ion-option>\n	            <ion-option value="Low">Low</ion-option>\n          	</ion-select>\n				</ion-item>\n			</ion-col>\n\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n				    <ion-datetime class="dateInput" displayFormat="DD/MM/YY" [(ngModel)]="dob" placeholder="{{dob}}"></ion-datetime>\n    				<ion-icon name="md-calendar" item-end class="iconP"></ion-icon>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<button ion-button round outline class="imageBtn" (click)="addImageToMaintenance()">ADD IMAGE</button>\n			</ion-col>\n		</ion-row>\n\n		<div class="error-message">\n	    {{error}}\n	  </div>\n	  <br/>\n	  <br/>\n		<ion-item class="lastBtns">\n	    	<button ion-button round class="cancelBtn" (click)="cancelNewMaintenance()" item-end>CANCEL</button>\n			<button ion-button round class="saveBtn" (click)="createNewMaintenance()" item-end>POST</button>\n	  </ion-item>\n	  \n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-maintenance/create-new-maintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__["a" /* Loader */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], CreateNewMaintenancePage);
    return CreateNewMaintenancePage;
}());

//# sourceMappingURL=create-new-maintenance.js.map

/***/ })

});
//# sourceMappingURL=35.js.map