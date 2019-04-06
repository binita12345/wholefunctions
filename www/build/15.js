webpackJsonp([15],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousOrderPageModule", function() { return PreviousOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_order__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PreviousOrderPageModule = /** @class */ (function () {
    function PreviousOrderPageModule() {
    }
    PreviousOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__previous_order__["a" /* PreviousOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_order__["a" /* PreviousOrderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */]
            ],
        })
    ], PreviousOrderPageModule);
    return PreviousOrderPageModule;
}());

//# sourceMappingURL=previous-order.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousOrderPage; });
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
 * Generated class for the PreviousOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviousOrderPage = /** @class */ (function () {
    function PreviousOrderPage(navCtrl, navParams, viewCtrl, storage, serviceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.previousOrders = [];
        this.noRecord = false;
        this.error = '';
        this.requisitionType = navParams.get('reqType');
        // this.previousOrders = [{'date': '27/08/2019', 'tableData': [{'order': 'Order 533', 'quantity': '2x', 'item': 'Rausch GG', 'items': '120344'},
        // {'order': '', 'quantity': '5x', 'item': 'I Frati', 'items': '12032'},
        // {'order': '', 'quantity': '3x', 'item': 'Kiedrich Turmberg', 'items': '12039'},
        // {'order': 'Order 533', 'quantity': '1x', 'item': 'Rausch GG', 'items': '120344'}]},
        // {'date': '26/08/2019', 'tableData': [{'order': 'Order 531', 'quantity': '1x', 'item': 'Rausch GG', 'items': '120344'},
        // {'order': '', 'quantity': '2x', 'item': 'Johannisberg', 'items': '12022'},
        // {'order': '', 'quantity': '11x', 'item': 'Chavignol', 'items': '120333'},
        // {'order': '', 'quantity': '2x', 'item': 'Pinot Grigio', 'items': '120344'}]},
        // {'date': '25/08/2019', 'tableData': [{'order': 'Order 533', 'quantity': '2x', 'item': 'Rausch GG', 'items': '120344'},
        // {'order': 'Order 533', 'quantity': '2x', 'item': 'Rausch GG', 'items': '120344'}]}]
    }
    PreviousOrderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PreviousOrderPage');
        this.storage.get("userData").then(function (userData) {
            // console.log("userData breakage", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getPrevOrderData();
        });
    };
    PreviousOrderPage.prototype.getPrevOrderData = function () {
        var _this = this;
        this.error = '';
        console.log("get order data");
        var OprevrderObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "type": this.requisitionType
        };
        this.serviceProvider.previousOrderApi(OprevrderObj).then(function (data) {
            console.log('previousOrderApi', data);
            if (data["success"] == 0) {
                _this.noRecord = true;
                _this.error = data["message"];
            }
            else if (data["success"] == 1) {
                _this.noRecord = false;
                _this.error = '';
                _this.previousOrders = data["response"];
                console.log("this.previousOrders", _this.previousOrders);
            }
            else if (data["success"] == 2) {
                _this.noRecord = false;
                _this.error = data["message"];
            }
            else if (data['success'] == 4) {
                _this.error = '';
                _this.noRecord = false;
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
    PreviousOrderPage.prototype.closePreviousOrder = function () {
        this.viewCtrl.dismiss();
    };
    PreviousOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-previous-order',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/previous-order/previous-order.html"*/'<!--\n  Generated template for the PreviousOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<header title="My Department"> </header>\n\n<ion-content class="paddingTop">\n	<div class="divCss"></div>\n	<div class="closeDiv">\n		<button ion-button round outline class="imageBtn" (click)="closePreviousOrder()" item-end>CLOSE</button>\n		<div class="divC" navPop>\n	  	<ion-icon name="ios-arrow-back" class="iconC"></ion-icon>\n	  	<p class="nameC">Requisition</p>\n	  </div>\n	</div>\n	<div class="gridCss">\n		<p class="nameP">PREVIOUS ORDERS</p>\n		<div class="withscroll">\n			<table class="table table-responsive table-bordered" *ngFor="let order of previousOrders" style="margin-top: 15px;">\n		    <tbody>\n		    	<tr>\n		    		<td class="date-th">{{order.created_at | date: "dd/MM/yyyy"}}</td>\n		    		<td class="quantity-th">Quantity</td>\n		    		<td class="item-th">Item</td>\n		    		<td class="items-th">Item #</td>\n		    	</tr>\n	      	<tr>\n	      		<td class="date-td">Order {{order.order_no}}</td>\n		    		<td class="quantity-td">{{order.quantity}}x</td>\n		    		<td class="item-td">{{order.product_name}}</td>\n		    		<td class="items-td">{{order.product_id}}</td>\n	      	</tr>\n		    </tbody>\n			</table>\n		</div>\n		<div class="norecord" *ngIf="noRecord">\n      {{error}}\n    </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/previous-order/previous-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PreviousOrderPage);
    return PreviousOrderPage;
}());

//# sourceMappingURL=previous-order.js.map

/***/ })

});
//# sourceMappingURL=15.js.map