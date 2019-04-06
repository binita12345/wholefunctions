webpackJsonp([38],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewCalendarEventPageModule", function() { return CreateNewCalendarEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_calendar_event__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewCalendarEventPageModule = /** @class */ (function () {
    function CreateNewCalendarEventPageModule() {
    }
    CreateNewCalendarEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_new_calendar_event__["a" /* CreateNewCalendarEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_new_calendar_event__["a" /* CreateNewCalendarEventPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewCalendarEventPageModule);
    return CreateNewCalendarEventPageModule;
}());

//# sourceMappingURL=create-new-calendar-event.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewCalendarEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_picker__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_ngx__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loader_loader__ = __webpack_require__(54);
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
 * Generated class for the CreateNewCalendarEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewCalendarEventPage = /** @class */ (function () {
    function CreateNewCalendarEventPage(navCtrl, navParams, viewCtrl, _sanitizer, alertCtrl, storage, serviceProvider, plt, fileChooser, filePicker, filePath, file, base64, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._sanitizer = _sanitizer;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.plt = plt;
        this.fileChooser = fileChooser;
        this.filePicker = filePicker;
        this.filePath = filePath;
        this.file = file;
        this.base64 = base64;
        this.loader = loader;
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.event = "personal";
        this.ifBusiness = true;
        this.ifPersonal = false;
        this.userLists = [];
        this.error = '';
        this.eventAsButton = navParams.get("eventasbutton");
    }
    CreateNewCalendarEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CreateNewCalendarEventPage');
        this.storage.get("userData").then(function (userData) {
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getPeopleList();
        });
    };
    CreateNewCalendarEventPage.prototype.cancelNewEvent = function () {
        console.log("cancel new wishes");
        this.viewCtrl.dismiss();
    };
    CreateNewCalendarEventPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewCalendarEventPage.prototype.createBusiness = function () {
        console.log("create business");
        this.ifBusiness = false;
        this.ifPersonal = true;
        this.event = "business";
    };
    CreateNewCalendarEventPage.prototype.createPersonal = function () {
        console.log("create personal");
        this.ifBusiness = true;
        this.ifPersonal = false;
        this.event = "personal";
    };
    CreateNewCalendarEventPage.prototype.onPeriodChange = function (period) {
        console.log('period', period);
        this.period = period;
    };
    CreateNewCalendarEventPage.prototype.onPeopleChange = function (people) {
        console.log('people', people);
        this.people = people;
        console.log('this.people', this.people);
        var substr = this.people;
        var commaList = '';
        var i;
        for (i = 0; i < substr.length; ++i) {
            commaList += ", " + substr[i];
        }
        this.commaPeople = commaList.substr(2, commaList.length);
        this.commaPeople = this.commaPeople.replace(/^[,\s]+|[,\s]+$/g, '');
        this.commaPeople = this.commaPeople.replace(/\s*,\s*/g, ',');
        console.log("commaPeople", this.commaPeople);
    };
    CreateNewCalendarEventPage.prototype.addImageORFileToEntry = function () {
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
                    var filePathurl = filePathResult;
                    // console.log("file uri filePathurl", filePathurl);
                    _this.base64.encodeFile(filePathurl).then(function (base64File) {
                        // console.log("file uri base64File", base64File);
                        _this.fileData = base64File;
                        console.log("this.fileData", _this.fileData);
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
                _this.file.readAsDataURL("file:///" + correctPath, currentName).then(function (base64File) {
                    // console.log("ios file base64" +JSON.stringify(base64));
                    _this.fileData = base64File;
                });
            });
        }
    };
    CreateNewCalendarEventPage.prototype.getPeopleList = function () {
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
                _this.userLists = data["response"];
                // console.log("this.userLists", this.userLists);
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
    CreateNewCalendarEventPage.prototype.createNewEvent = function () {
        var _this = this;
        console.log("send new message");
        if (this.commaPeople == undefined) {
            this.commaPeople = '';
        }
        if (this.fileData == undefined) {
            this.fileData = '';
        }
        this.error = '';
        this.loader.show("Creating a new Event...");
        var newEventObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "start_date": this.startDate,
            "start_time": this.startTime,
            "end_date": this.endDate,
            "end_time": this.endTime,
            "event_type": this.event,
            "title": this.headline,
            "description": this.eventDesc,
            "event_periods": this.period,
            "invited_people": this.commaPeople,
            "document": this.fileData,
            "event_id": "",
            "event_as": this.eventAsButton
        };
        console.log("newEventObj", newEventObj);
        if (newEventObj.start_date == undefined) {
            this.loader.hide();
            this.error = 'please enter start date';
        }
        else if (newEventObj.end_date == undefined) {
            this.loader.hide();
            this.error = 'please enter end date';
        }
        else if (newEventObj.start_time == undefined) {
            this.loader.hide();
            this.error = 'please enter start time';
        }
        else if (newEventObj.end_time == undefined) {
            this.loader.hide();
            this.error = 'please enter end time';
        }
        else if (newEventObj.title == '' || newEventObj.title == undefined || newEventObj.title == null) {
            this.loader.hide();
            this.error = 'please enter event title';
        }
        else if (newEventObj.description == '' || newEventObj.description == undefined || newEventObj.description == null) {
            this.loader.hide();
            this.error = 'please enter event title';
        }
        else if (newEventObj.event_type == '' || newEventObj.event_type == undefined || newEventObj.event_type == null) {
            this.loader.hide();
            this.error = 'please select event type';
        }
        else if (newEventObj.event_periods == '' || newEventObj.event_periods == undefined || newEventObj.event_periods == null) {
            this.loader.hide();
            this.error = 'please select event period';
        }
        else {
            this.error = '';
            this.serviceProvider.addEventApi(newEventObj).then(function (data) {
                console.log("addEventApi" + JSON.stringify(data));
                if (data["success"] == 0) {
                    _this.loader.hide();
                    // this.noRecord = true;
                    // this.error = data["message"];
                }
                else if (data["success"] == 1) {
                    _this.loader.hide();
                    // this.viewCtrl.dismiss();
                    var alert_2 = _this.alertCtrl.create({
                        title: _this.htmlProperty(),
                        message: 'Your Event created successfully.',
                        cssClass: 'checkAlertCss',
                    });
                    alert_2.present();
                    setTimeout(function () {
                        alert_2.dismiss();
                        _this.viewCtrl.dismiss();
                    }, 2000);
                }
                else if (data["success"] == 2) {
                    _this.loader.hide();
                    // this.noRecord = false;
                    // this.error = data["message"];
                }
                else if (data['success'] == 4) {
                    _this.loader.hide();
                    // this.error = '';
                    // this.noRecord = false;
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
                    _this.loader.hide();
                    _this.error = '';
                }
            }, function (err) {
                console.log("this.error" + JSON.stringify(err));
            });
        }
    };
    CreateNewCalendarEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-new-calendar-event',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-calendar-event/create-new-calendar-event.html"*/'<!--\n  Generated template for the CreateNewCalendarEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Calendar"> </header>\n\n<ion-content class="paddingTop">\n	<ion-item class="divCss">\n		<ion-icon name="md-arrow-round-back" class="iconCss" item-start navPop></ion-icon>\n	Create Event\n	</ion-item>\n\n	<ion-grid class="gridCss">\n		<p class="headP">Create New Event</p>\n		<ion-row>\n			<ion-col>\n				<p class="dateP">START</p>\n				<div class="divC">\n					<ion-item class="itemC">\n					    <ion-datetime class="dateInput" displayFormat="DD/MM/YY" [(ngModel)]="startDate" placeholder="DD/MM/YY"></ion-datetime>\n	    				<ion-icon name="md-calendar" item-end class="iconP"></ion-icon>\n					</ion-item>\n					<ion-item class="itemC2">\n						<ion-datetime class="dateInput" displayFormat="hh:mm:ss" [(ngModel)]="startTime" placeholder="hh:mm"></ion-datetime>\n					</ion-item>\n				</div>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col> \n				<p class="dateP">END</p>\n				<div class="divC">\n					<ion-item class="itemC">\n					    <ion-datetime class="dateInput" displayFormat="DD/MM/YY" [(ngModel)]="endDate" placeholder="DD/MM/YY"></ion-datetime>\n	    				<ion-icon name="md-calendar" item-end class="iconP"></ion-icon>\n					</ion-item>\n					<ion-item class="itemC2">\n						<ion-datetime class="dateInput" displayFormat="hh:mm:ss" [(ngModel)]="endTime" placeholder="hh:mm"></ion-datetime>\n					</ion-item>\n				</div>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="headlineC" col-6 col-xl-6>\n				<ion-item class="drpItem">\n					<ion-input type="text" class="ionInput" [(ngModel)]="headline" placeholder="Headline"></ion-input>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6 col-xl-6>\n				<ion-item class="drpItem">\n					<ion-select name="period" [(ngModel)]="period" (ionChange)="onPeriodChange(period)" placeholder="Period" text-wrap class="selectItem1">\n					    <ion-option value="daily">Daily</ion-option>\n					    <ion-option value="weekly">Weekly</ion-option>\n					    <ion-option value="monthly">Monthly</ion-option>\n					    <ion-option value="yearly">Yearly</ion-option>\n					  </ion-select>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<ion-textarea placeholder="Description" class="textArea" [(ngModel)]="eventDesc"></ion-textarea>\n			</ion-col>\n		</ion-row>\n		<br/>\n		<ion-row class="postCss">\n			<ion-col>\n				Event Type:\n				<br/>\n				<img src="assets/imgs/calendar/business.png" *ngIf="ifBusiness" (click)="createBusiness()" class="indepart">\n				<img src="assets/imgs/calendar/personal.png" *ngIf="ifPersonal" (click)="createPersonal()" class="indepart">\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-12 col-xl-6 col-lg-6>\n				<button ion-button round outline class="imageBtn" (click)="addImageORFileToEntry()">ADD IMAGE OR FILE</button>\n			</ion-col>\n		</ion-row>\n		\n    <ion-row>\n    	<ion-col>\n				<ion-item class="drpItem">\n					<ion-select name="people" [(ngModel)]="people" (ionChange)="onPeopleChange(people)" placeholder="Select People To Invite" text-wrap class="selectItem1" multiple="true">\n				    <ion-option *ngFor="let people of userLists" [value]="people.id" [selected]="people.checked">{{people.first_name}} {{people.last_name}}</ion-option>\n				  </ion-select>\n				</ion-item>\n			</ion-col>\n		</ion-row>  \n		<br/>\n		<div class="error-message">\n			    {{error}}\n			  </div>                     \n		<ion-item class="lastBtns">\n	    	<button ion-button round class="cancelBtn" (click)="cancelNewEvent()" item-end>CANCEL</button>\n			<button ion-button round class="postBtn" (click)="createNewEvent()" item-end>CREATE</button>\n	  </ion-item>\n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-calendar-event/create-new-calendar-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_picker__["a" /* IOSFilePicker */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_10__providers_loader_loader__["a" /* Loader */]])
    ], CreateNewCalendarEventPage);
    return CreateNewCalendarEventPage;
}());

//# sourceMappingURL=create-new-calendar-event.js.map

/***/ })

});
//# sourceMappingURL=38.js.map