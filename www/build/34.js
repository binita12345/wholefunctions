webpackJsonp([34],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewNotePageModule", function() { return CreateNewNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_note__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewNotePageModule = /** @class */ (function () {
    function CreateNewNotePageModule() {
    }
    CreateNewNotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_new_note__["a" /* CreateNewNotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_new_note__["a" /* CreateNewNotePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CreateNewNotePageModule);
    return CreateNewNotePageModule;
}());

//# sourceMappingURL=create-new-note.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(54);
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
 * Generated class for the CreateNewNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewNotePage = /** @class */ (function () {
    function CreateNewNotePage(navCtrl, navParams, viewCtrl, _sanitizer, alertCtrl, storage, serviceProvider, loader) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._sanitizer = _sanitizer;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.loader = loader;
        this.error = '';
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.noteId = navParams.get('noteid');
        console.log("this.noteId", this.noteId);
        this.noteMessage = navParams.get('notemessage');
        console.log("this.noteMessage", this.noteMessage);
        if (this.noteId == undefined || this.noteId == null || this.noteId == '') {
            this.noteId = '';
        }
        this.storage.get("userData").then(function (userData) {
            console.log("userData notes", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
        });
    }
    CreateNewNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewNotePage');
    };
    CreateNewNotePage.prototype.cancelNewNote = function () {
        console.log("cancel new wishes");
        this.viewCtrl.dismiss();
    };
    CreateNewNotePage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    CreateNewNotePage.prototype.saveNewNote = function () {
        var _this = this;
        console.log("send new message");
        this.loader.show("Creating a new note...");
        var addnoteObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "message": this.noteMessage,
            "note_id": this.noteId
        };
        console.log("addnoteObj", addnoteObj);
        if (this.noteMessage == '' || this.noteMessage == undefined || this.noteMessage == null) {
            this.loader.hide();
            this.error = 'please give message to new note.';
        }
        else {
            this.error = '';
            this.serviceProvider.addNotesApi(addnoteObj).then(function (data) {
                console.log("currentNotesApi" + JSON.stringify(data));
                if (data["success"] == 0) {
                    _this.loader.hide();
                    _this.error = data["message"];
                }
                else if (data["success"] == 1) {
                    _this.loader.hide();
                    _this.error = '';
                    var alert_1 = _this.alertCtrl.create({
                        title: _this.htmlProperty(),
                        subTitle: 'Your Note Added successfully.',
                        cssClass: 'newsFeedAlertCss',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    console.log('ok clicked');
                                    _this.navCtrl.push("NotesPage");
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
                console.log("this.error" + JSON.stringify(err));
            });
        }
    };
    CreateNewNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-create-new-note',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-note/create-new-note.html"*/'<!--\n  Generated template for the CreateNewNotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Notes"> </header>\n\n<ion-content class="paddingTop">\n	<ion-grid class="gridCss">\n		<p class="headP">Create New Notes</p>\n		\n		<ion-row>\n			<!-- <ion-col col-12>\n				<ion-item class="itemC">\n			    <ion-datetime class="dateInput" displayFormat="DD/MM/YY" [(ngModel)]="dob" placeholder="DD/MM/YY"></ion-datetime>\n  				<ion-icon name="md-calendar" item-end class="iconP"></ion-icon>\n				</ion-item>\n			</ion-col> -->\n			<!-- <ion-col col-12> -->\n				<ion-textarea placeholder="Your Message" class="textArea" [(ngModel)]="noteMessage" value="{{noteMessage}}"></ion-textarea>\n			<!-- </ion-col> -->\n		</ion-row>\n		<div class="error-message">\n	    {{error}}\n	  </div>\n		<ion-item class="lastBtns">\n	    	<button ion-button round class="cancelBtn" (click)="cancelNewNote()" item-end>CANCEL</button>\n			<button ion-button round class="saveBtn" (click)="saveNewNote()" item-end>SAVE</button>\n	  </ion-item>\n	  \n	</ion-grid>\n	<div style="margin-top: 45px;height: 20px;"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/create-new-note/create-new-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* Loader */]])
    ], CreateNewNotePage);
    return CreateNewNotePage;
}());

//# sourceMappingURL=create-new-note.js.map

/***/ })

});
//# sourceMappingURL=34.js.map