webpackJsonp([41],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_service_service__ = __webpack_require__(53);
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
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams, calendar, plt, fileChooser, filePicker, filePath, file, base64, datePicker, alertCtrl, storage, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.plt = plt;
        this.fileChooser = fileChooser;
        this.filePicker = filePicker;
        this.filePath = filePath;
        this.file = file;
        this.base64 = base64;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.eventLists = [];
        this.eventAsButton = "normal";
        this.selectedMonthEvent = [];
        this.norecords = false;
        this.eventImg = false;
        // this.eventLists = [{'startEvent': '17:00', 'endEvent': '08:00', 'eventName': 'Beverage Inventory', 'description': ''},
        // {'startEvent': '14:00', 'endEvent': '14:30', 'eventName': 'Meeting Mr. Dow', 'description': 'talk about latest report'},
        // {'startEvent': '16:00', 'endEvent': '16:40', 'eventName': 'Requisition', 'description': ''},
        // {'startEvent': '18:00', 'endEvent': '04:00', 'eventName': 'Wedding', 'description': ''}]
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CalendarPage');
        this.storage.get("userData").then(function (userData) {
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getdate = new Date();
            _this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            _this.getDaysOfMonth();
            _this.getEventLists();
        });
    };
    CalendarPage.prototype.getEventLists = function () {
        var _this = this;
        console.log("event lists");
        var eventListObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "month": this.currentMonth,
            "year": this.currentYear
        };
        console.log("eventListObj", eventListObj);
        this.serviceProvider.eventListApi(eventListObj).then(function (data) {
            console.log("eventListApi" + JSON.stringify(data));
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.eventLists = data["response"];
                console.log("this.eventLists", _this.eventLists);
                console.log("this.daysInThisMonth j array", _this.daysInThisMonth);
                for (var i in _this.eventLists) {
                    _this.monthlyEventList = _this.eventLists[i].events;
                    console.log("this.monthlyEventList.....12..1.", _this.monthlyEventList);
                    // if(this.monthlyEventList.length >= 1) {
                    //     this.eventImg = true;
                    //     console.log("this.eventImg ifff", this.eventImg);
                    //   } else {
                    //     this.eventImg = false;
                    //     console.log("this.eventImg else", this.eventImg);
                    //   }
                    _this.eventDate = _this.eventLists[i].date;
                    console.log("this.eventDate", _this.eventDate);
                    // for(let day of this.daysInThisMonth) {
                    //   console.log("day", day);
                    _this.daysInThisMonth.push({ 'eventdate': _this.eventDate });
                    // }
                    console.log("this.monthlyEventList", _this.monthlyEventList);
                    if (_this.startdaydate == _this.eventDate || _this.enddaydate == _this.eventDate) {
                        // console.log("this.monthlyEventList", this.monthlyEventList);
                        _this.selectedMonthEvent = _this.monthlyEventList;
                    }
                }
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
                // this.error = '';
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
    CalendarPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        // console.log("this.daysInThisMonth", this.daysInThisMonth);
        this.daysInLastMonth = new Array();
        // console.log("this.daysInLastMonth", this.daysInLastMonth);
        this.daysInNextMonth = new Array();
        // console.log("this.daysInNextMonth", this.daysInNextMonth);
        this.currentMonth = this.monthNames[this.getdate.getMonth()];
        console.log("this.currentMonth", this.currentMonth);
        this.currentYear = this.getdate.getFullYear();
        console.log("this.currentYear", this.currentYear);
        if (this.getdate.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
            console.log("this.currentDate", this.currentDate);
        }
        else {
            this.currentDate = 999;
            // console.log("this.currentDate", this.currentDate);
        }
        var firstDayThisMonth = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 1).getDay();
        // console.log("firstDayThisMonth", firstDayThisMonth);
        var prevNumOfDays = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 0).getDate();
        // console.log("prevNumOfDays", prevNumOfDays);
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
            // console.log("this.daysInLastMonth arry", this.daysInLastMonth);
        }
        var thisNumOfDays = new Date(this.getdate.getFullYear(), this.getdate.getMonth() + 1, 0).getDate();
        // console.log("thisNumOfDays", thisNumOfDays);
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.getdate.getFullYear(), this.getdate.getMonth() + 1, 0).getDay();
        // console.log("lastDayThisMonth", lastDayThisMonth);
        // var nextNumOfDays = new Date(this.getdate.getFullYear(), this.getdate.getMonth()+2, 0).getDate();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
            // console.log("this.daysInNextMonth", this.daysInNextMonth);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        // console.log("totalDays", totalDays);
        var thisDate1 = this.getdate.getFullYear() + "-" + (this.getdate.getMonth() + 1) + "-" + this.currentDate + " 00:00:00";
        this.startdaydate = __WEBPACK_IMPORTED_MODULE_9_moment___default()(thisDate1).format('YYYY-MM-DD');
        console.log("this.startdaydate selected date", this.startdaydate);
        var thisDate2 = this.getdate.getFullYear() + "-" + (this.getdate.getMonth() + 1) + "-" + this.currentDate + " 23:59:59";
        this.enddaydate = __WEBPACK_IMPORTED_MODULE_9_moment___default()(thisDate2).format('YYYY-MM-DD');
        console.log("this.enddaydate selected date", this.enddaydate);
        this.getEventLists();
    };
    CalendarPage.prototype.goToLastMonth = function () {
        this.getdate = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 0);
        this.getDaysOfMonth();
    };
    CalendarPage.prototype.goToNextMonth = function () {
        this.getdate = new Date(this.getdate.getFullYear(), this.getdate.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    CalendarPage.prototype.showDatePicker = function () {
        var _this = this;
        console.log("show date");
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        }).then(function (date) {
            console.log('Got date: ', date);
            var selectedDate = date;
            console.log("selectedDate", selectedDate);
            // this.convertDate(selectedDate);
            _this.getMonthYear = __WEBPACK_IMPORTED_MODULE_9_moment___default()(selectedDate).format('LL');
            console.log("this.getMonthYear", _this.getMonthYear);
            var splitMonth = _this.getMonthYear.split(', ');
            var getyearName = splitMonth[1];
            var nameSplit = splitMonth[0].split(' ');
            _this.currentMonth = nameSplit[0];
            console.log("this.currentMonth", _this.currentMonth);
            _this.currentYear = getyearName;
            console.log("this.currentYear", _this.currentYear);
            _this.getdate = new Date(_this.currentYear, _this.currentMonth);
            _this.getDaysOfMonth();
        }), (function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    CalendarPage.prototype.addEvent = function () {
        this.navCtrl.push("CreateNewCalendarEventPage", { 'eventasbutton': this.eventAsButton });
    };
    CalendarPage.prototype.editEvent = function () {
        this.navCtrl.push("CreateNewCalendarEventPage");
    };
    // loadEventThisMonth() {
    //   this.eventList = new Array();
    //   var startDate = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 1);
    //   var endDate = new Date(this.getdate.getFullYear(), this.getdate.getMonth()+1, 0);
    //   this.calendar.listEventsInRange(startDate, endDate).then(
    //     (msg) => {
    //       msg.forEach(item => {
    //         this.eventList.push(item);
    //       });
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }
    // checkEvent(day) {
    //   var hasEvent = false;
    //   var thisDate1 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+day+" 00:00:00";
    //   var thisDate2 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+day+" 23:59:59";
    //   this.eventList.forEach(event => {
    //     if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
    //       hasEvent = true;
    //     }
    //   });
    //   return hasEvent;
    // }
    CalendarPage.prototype.selectDate = function (day) {
        this.isSelected = false;
        // this.selectedEvent = new Array();
        // console.log("this.selectedEvent", this.selectedEvent);
        var thisDate1 = this.getdate.getFullYear() + "-" + (this.getdate.getMonth() + 1) + "-" + day + " 00:00:00";
        this.startdaydate = __WEBPACK_IMPORTED_MODULE_9_moment___default()(thisDate1).format('YYYY-MM-DD');
        console.log("this.startdaydate selected date", this.startdaydate);
        var thisDate2 = this.getdate.getFullYear() + "-" + (this.getdate.getMonth() + 1) + "-" + day + " 23:59:59";
        this.enddaydate = __WEBPACK_IMPORTED_MODULE_9_moment___default()(thisDate2).format('YYYY-MM-DD');
        console.log("this.enddaydate selected date", this.enddaydate);
        var currentMonth = (this.getdate.getMonth() + 1);
        this.currentMonth = __WEBPACK_IMPORTED_MODULE_9_moment___default()(currentMonth, 'MM').format('MMMM');
        console.log("this.currentMonth", this.currentMonth);
        this.currentYear = this.getdate.getFullYear();
        console.log("this.currentYear", this.currentYear);
        this.getEventLists();
        // this.eventList.forEach(event => {
        //   console.log("event selected date", event);
        //   if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        //     this.isSelected = true;
        //     this.selectedEvent.push(event);
        //   }
        // });
    };
    CalendarPage.prototype.openBEO = function () {
        var _this = this;
        console.log("open BEo");
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
                    var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
                    console.log("android file fileExtension", fileExtension);
                    _this.extension = fileExtension;
                    var filePathurl = filePathResult;
                    console.log("file uri filePathurl", filePathurl);
                    _this.base64.encodeFile(filePathurl).then(function (base64File) {
                        console.log("file uri base64File", base64File);
                        _this.fileData = base64File;
                        console.log("file uri this.fileData", _this.fileData);
                        var splitbase64 = _this.fileData.split(',');
                        console.log("add files in android splitbase64", splitbase64[1]);
                        _this.getSplitbase64 = splitbase64[1];
                        console.log("add files in android this.getSplitbase64", _this.getSplitbase64);
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
    CalendarPage.prototype.trainingEvent = function () {
        this.eventAsButton = "training";
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/calendar/calendar.html"*/'<header title="Calendar"> </header>\n\n<ion-content class="paddingTop">\n\n	<img src="assets/imgs/calendar/clock.png" class="clockC">\n	<button ion-button round class="eventBtn" (click)="addEvent()">ADD EVENT</button>\n	<ion-item>\n		<ion-icon name="ios-arrow-back" (click)="goToLastMonth()" item-start class="backC"></ion-icon>\n		<ion-icon name="md-calendar" (click)="showDatePicker()" item-start class="calendarC"></ion-icon>\n		<ion-icon name="ios-arrow-forward" (click)="goToNextMonth()" item-start class="forwardC"></ion-icon>\n		<p item-start class="monthP">{{currentMonth}} {{currentYear}}</p>\n	</ion-item>\n		\n  <div class="calendar-body">\n    <ion-grid class="withscroll">\n      <ion-row class="calendar-weekday">\n      	<ion-col class="employee-col">Sunday</ion-col>\n        <ion-col class="employee-col">Monday</ion-col>\n        <ion-col class="employee-col">Tuesday</ion-col>\n        <ion-col class="employee-col">Wednesday</ion-col>\n        <ion-col class="employee-col">Thursday</ion-col>\n        <ion-col class="employee-col">Friday</ion-col>\n        <ion-col class="employee-col">Saturday</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n        <ion-col *ngFor="let lastDay of daysInLastMonth" class="last-month setCol" (click)="goToLastMonth()">{{lastDay}}</ion-col>\n        <ion-col *ngFor="let day of daysInThisMonth" (click)="selectDate(day)" class="setCol1 topleft">\n          <img src="assets/imgs/calendar/shap-3.png" class="shapeC" *ngIf="eventImg">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">\n            {{day}}<br>\n          </ng-template>\n        </ion-col>\n        <ion-col *ngFor="let nextDay of daysInNextMonth" class="next-month setCol" (click)="goToNextMonth()">{{nextDay}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <br/>\n  \n  <ion-grid>\n  	<ion-row *ngFor="let event of selectedMonthEvent" class="eventItem">\n      <!-- {{event | json}} -->\n  		<ion-col col-2 col-xl-2 class="colP">\n  			<p class="timeP">{{event.start_time}}<br>\n        {{event.end_time}}</p>\n  		</ion-col>\n  		<ion-col col-8 col-xl-8 class="colP">\n  			<p item-start class="descP"><b class="descB">{{event.title}}</b><br>{{event.description}}</p>\n  		</ion-col>\n  		<ion-col col-2 col-xl-2 class="colEdit">\n  			<div item-end class="divC">\n        	<button ion-button round outline class="editBtn" (click)="editEvent()">EDIT</button>\n        	<br/>\n        	<button ion-button round outline class="openBEO" (click)="openBEO()">OPEN BEO</button>\n      	</div>\n  		</ion-col>\n  		\n  	</ion-row>\n\n    <ion-row *ngIf="selectedMonthEvent.length <= 0" class="eventItem">\n      No Events Available On This Day.\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n  	<ion-row>\n				<ion-col class="eventCol"><button ion-button round outline class="EventBtn" (click)="trainingEvent()">TRAINING</button></ion-col>\n				<ion-col class="eventCol"><button ion-button round outline class="EventBtn" (click)="reservationEvent()">RESERVATION</button></ion-col>\n				<ion-col class="eventCol"><button ion-button round outline class="EventBtn" (click)="occupancyEvent()">OCCUPANCY</button></ion-col>\n				<ion-col class="eventCol"><button ion-button round outline class="EventBtn" (click)="vipListEvent()">VIP LIST</button></ion-col>\n			</ion-row>\n  </ion-grid>\n  <div style="margin-top: 45px;height: 20px;"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker__["a" /* IOSFilePicker */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11__providers_service_service__["a" /* ServiceProvider */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=41.js.map