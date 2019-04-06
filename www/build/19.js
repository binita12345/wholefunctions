webpackJsonp([19],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotesPageModule = /** @class */ (function () {
    function NotesPageModule() {
    }
    NotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notes__["a" /* NotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notes__["a" /* NotesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], NotesPageModule);
    return NotesPageModule;
}());

//# sourceMappingURL=notes.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
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
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl, navParams, storage, serviceProvider, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.NotesArray = [];
        this.archiveArray = [];
        this.ifCurrentSelected = true;
        this.ifArchiveSelected = false;
        this.error = '';
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NotesPage');
        this.storage.get("userData").then(function (userData) {
            console.log("userData notes", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.note = 'current';
            _this.noteChange(_this.note);
            _this.currentNotes();
        });
    };
    NotesPage.prototype.noteChange = function (notename) {
        console.log("noteChange notename", notename);
        if (notename == "current") {
            console.log("current");
            this.ifCurrentSelected = true;
            this.ifArchiveSelected = false;
            this.currentNotes();
        }
        else if (notename == "archive") {
            console.log("archive");
            this.ifCurrentSelected = false;
            this.ifArchiveSelected = true;
            this.archiveNotes();
        }
        else { }
    };
    NotesPage.prototype.currentNotes = function () {
        var _this = this;
        console.log("current notes");
        this.error = '';
        var currentNoteObj = {
            "user_id": this.userId,
            "session_id": this.sessionId
        };
        this.serviceProvider.currentNotesApi(currentNoteObj).then(function (data) {
            console.log("currentNotesApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.error = data["message"];
                _this.NotesArray = [];
                _this.archiveNotes();
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.NotesArray = data["response"];
                _this.archiveNotes();
            }
            else if (data["success"] == 2) {
                _this.error = data["message"];
                _this.archiveNotes();
            }
            else if (data['success'] == 4) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: data["message"],
                    cssClass: 'newsFeedAlertCss',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                console.log("current notes session expired");
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
    NotesPage.prototype.archiveNotes = function () {
        var _this = this;
        console.log("archive notes");
        this.error = '';
        var archiveNoteObj = {
            "user_id": this.userId,
            "session_id": this.sessionId
        };
        this.serviceProvider.archiveNotesApi(archiveNoteObj).then(function (data) {
            console.log("archiveNotesApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                _this.error = data["message"];
                _this.archiveArray = [];
            }
            else if (data["success"] == 1) {
                _this.error = '';
                _this.archiveArray = data["response"];
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
                                console.log("archive notes session expired");
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
    NotesPage.prototype.editCurrentNotes = function (currentnote) {
        console.log("editCurrentNotes currentnote", currentnote);
        console.log("currentnote id", currentnote.id);
        this.navCtrl.push("CreateNewNotePage", { 'noteid': currentnote.id, 'notemessage': currentnote.notes });
    };
    NotesPage.prototype.onNotesChanged = function (event) {
        console.log("event", event.value);
        this.noteChange(event.value);
    };
    NotesPage.prototype.refreshNote = function (archive) {
        var _this = this;
        console.log("refresh notes", archive);
        this.noteStatus = "restore";
        var deleteNoteObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "status": this.noteStatus,
            "note_id": archive.id
        };
        this.serviceProvider.deleteNotesApi(deleteNoteObj).then(function (result) {
            console.log("result restore DeleteApi" + JSON.stringify(result));
            if (result['success'] == 4) {
                var alert_3 = _this.alertCtrl.create({
                    subTitle: result["message"],
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
            else if (result['success'] == 1) {
                _this.archiveNotes();
                var toastSuccess = _this.toastCtrl.create({
                    message: result["message"],
                    duration: 3000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'X',
                    cssClass: "toast-success",
                });
                toastSuccess.present();
            }
            else if (result['success'] == 2) {
                _this.error = result["message"];
            }
            else if (result['success'] == 0) {
                _this.error = result["message"];
            }
            else {
            }
        }, function (err) {
            console.log("err restore notesListApi" + JSON.stringify(err));
            // Error log
        });
    };
    NotesPage.prototype.removeNote = function (note) {
        var _this = this;
        console.log("remove notes", note);
        this.noteStatus = "remove";
        var deleteNoteObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "status": this.noteStatus,
            "note_id": note.id
        };
        var alert = this.alertCtrl.create({
            title: 'Confirm delete selected Note',
            message: 'Are you sure you want to delete this Note?',
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
                        console.log("deleteNoteObj", deleteNoteObj);
                        _this.serviceProvider.deleteNotesApi(deleteNoteObj).then(function (result) {
                            console.log("result documentDeleteApi" + JSON.stringify(result));
                            if (result['success'] == 4) {
                                var alert_4 = _this.alertCtrl.create({
                                    subTitle: result["message"],
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
                            else if (result['success'] == 1) {
                                _this.currentNotes();
                                var toastSuccess = _this.toastCtrl.create({
                                    message: result["message"],
                                    duration: 3000,
                                    position: 'top',
                                    showCloseButton: true,
                                    closeButtonText: 'X',
                                    cssClass: "toast-success",
                                });
                                toastSuccess.present();
                            }
                            else if (result['success'] == 2) {
                                _this.error = result["message"];
                            }
                            else if (result['success'] == 0) {
                                _this.error = result["message"];
                            }
                            else {
                            }
                        }, function (err) {
                            console.log("err notesListApi" + JSON.stringify(err));
                            // Error log
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    NotesPage.prototype.newNote = function () {
        console.log("new note");
        this.navCtrl.push("CreateNewNotePage");
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/notes/notes.html"*/'<!--\n  Generated template for the NotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<header title="Notes"> </header>\n\n<ion-content class="paddingTop">\n	<ion-toolbar class="toolbar-color">\n    <ion-segment [(ngModel)]="note" (ionChange)="onNotesChanged($event)" class="segment">\n      <ion-segment-button value="current" class="segment-btn">\n        CURRENT\n      </ion-segment-button>\n      <ion-segment-button value="archive" class="segment-btn">\n        ARCHIVE\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <img src="assets/imgs/mydepartment/notes.jpg" class="clockC">\n\n  <div *ngIf="ifCurrentSelected">\n  	<ion-item style="margin-top: -15px;">\n  		<button ion-button round class="noteBtn" (click)="newNote()" item-end>NEW NOTE</button>\n		</ion-item>\n		<ion-grid class="noteGrig" *ngIf="NotesArray.length >= 1">\n			<ion-row *ngFor="let note of NotesArray;let idx = index;"  class="noteRow">\n				<ion-col col-10 col-xl-10 col-lg-11 (click)="editCurrentNotes(note)">\n					<ion-label class="dateP">{{note.created_at | date: "dd/MM/yyyy HH:mm"}}</ion-label>\n					<ion-label class="labelC">{{note.notes}}</ion-label>\n				</ion-col>\n				<ion-col col-2 col-xl-2 col-lg-1 class="closeIcon">\n					<ion-icon name="ios-close-circle" item-end (click)="removeNote(note)"></ion-icon>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<ion-grid class="noteGrig" *ngIf="NotesArray.length <= 0">\n			<ion-row class="noteRow">\n				<ion-col col-12 col-xl-12 col-lg-12 class="notecol">\n					{{error}}\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n  </div>\n\n  <div *ngIf="ifArchiveSelected">\n  	<ion-grid class="noteGrig" *ngIf="archiveArray.length >= 1">\n			<ion-row *ngFor="let archive of archiveArray;let idx = index;"  class="noteRow">\n				<ion-col col-10 col-xl-10 col-lg-11>\n					<ion-label class="dateP">{{archive.created_at | date: "dd/MM/yyyy HH:mm"}}</ion-label>\n					<ion-label class="labelC">{{archive.notes}}</ion-label>\n				</ion-col>\n				<ion-col col-2 col-xl-2 col-lg-1 class="closeIcon">\n					<ion-icon name="md-refresh-circle" item-end (click)="refreshNote(archive)"></ion-icon>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<ion-grid class="noteGrig" *ngIf="archiveArray.length <= 0">\n			<ion-row class="noteRow">\n				<ion-col col-12 col-xl-12 col-lg-12 class="notecol">\n					{{error}}\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n  </div>\n  <div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ })

});
//# sourceMappingURL=19.js.map