webpackJsonp([18],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListModalPageModule", function() { return OrderListModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_list_modal__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderListModalPageModule = /** @class */ (function () {
    function OrderListModalPageModule() {
    }
    OrderListModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_list_modal__["a" /* OrderListModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_list_modal__["a" /* OrderListModalPage */]),
            ],
        })
    ], OrderListModalPageModule);
    return OrderListModalPageModule;
}());

//# sourceMappingURL=order-list-modal.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(53);
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
 * Generated class for the OrderListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderListModalPage = /** @class */ (function () {
    function OrderListModalPage(navCtrl, navParams, viewCtrl, alertCtrl, _sanitizer, storage, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this._sanitizer = _sanitizer;
        this.storage = storage;
        this.serviceProvider = serviceProvider;
        this.orderLists = [];
        this._htmlProperty = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
        this.requisitionType = navParams.get('reqType');
        var dateNtime = __WEBPACK_IMPORTED_MODULE_3_moment___default()();
        console.log("dateNtime", dateNtime);
        this.setDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(dateNtime).format('L hh:mm');
        console.log("this.setDate", this.setDate);
    }
    OrderListModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrderListModalPage');
        this.storage.get("userData").then(function (userData) {
            // console.log("userData breakage", userData);
            _this.userId = userData.response.user_id;
            _this.sessionId = userData.response.sessionId;
            _this.getCartOrderData();
        });
    };
    OrderListModalPage.prototype.getCartOrderData = function () {
        var _this = this;
        console.log("get order data");
        var orderCartObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "type": this.requisitionType
        };
        this.serviceProvider.cartTableApi(orderCartObj).then(function (data) {
            console.log('cartTableApi', data);
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                // this.error = '';
                _this.orderLists = data["response"];
                // console.log("this.orderLists", this.orderLists);
                for (var _i = 0, _a = _this.orderLists; _i < _a.length; _i++) {
                    var orderNo = _a[_i];
                    // console.log("orderNo", orderNo);
                    _this.orderNo = orderNo.order_no;
                }
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
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
    OrderListModalPage.prototype.removeOrder = function (order) {
        var _this = this;
        console.log("remove order", order);
        var remOrderObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "cart_item_id": order.id
        };
        this.serviceProvider.removecartItemApi(remOrderObj).then(function (data) {
            console.log('removecartItemApi', data);
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                // this.error = '';
                _this.getCartOrderData();
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
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
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    OrderListModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    OrderListModalPage.prototype.htmlProperty = function () {
        return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
    };
    OrderListModalPage.prototype.placeOrder = function () {
        var _this = this;
        console.log("place order");
        this.viewCtrl.dismiss();
        var placeOrderObj = {
            "user_id": this.userId,
            "session_id": this.sessionId,
            "order_no": this.orderNo,
            "type": this.requisitionType
        };
        this.serviceProvider.orderApi(placeOrderObj).then(function (data) {
            console.log('orderApi', data);
            if (data["success"] == 0) {
                // this.error = data["message"];
            }
            else if (data["success"] == 1) {
                var alert_3 = _this.alertCtrl.create({
                    title: _this.htmlProperty(),
                    subTitle: data["message"],
                    message: 'Order No.' + _this.orderNo + ' at ' + _this.setDate,
                    cssClass: 'newsFeedAlertCss',
                });
                alert_3.present();
                setTimeout(function () {
                    alert_3.dismiss();
                    _this.navCtrl.push("RequisitionPage");
                }, 4000);
            }
            else if (data["success"] == 2) {
                // this.error = data["message"];
            }
            else if (data['success'] == 4) {
                var alert_4 = _this.alertCtrl.create({
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
                alert_4.present();
            }
            else {
            }
        }, function (err) {
            console.log("this.error" + JSON.stringify(err));
        });
    };
    OrderListModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-order-list-modal',template:/*ion-inline-start:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/order-list-modal/order-list-modal.html"*/'<!--\n  Generated template for the OrderListModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n	<div>\n		<p class="nameP">Order {{orderNo}}</p>\n		<ion-icon name="close" class="closeC" (click)="closeModal()"></ion-icon>\n	</div>\n	<div class="orderDiv">\n		<ion-item class="item1" *ngFor="let order of orderLists">\n				<p class="orderP"><b class="orderB">{{order.quantity}}x</b>{{order.product_name}} {{order.product_id}}</p>\n				<ion-icon name="ios-close-circle" item-end (click)="removeOrder(order)" class="closeIcon"></ion-icon>\n		</ion-item>\n	</div>\n	\n	<br/>\n	<div>\n		<button ion-button round class="orderBtn" (click)="placeOrder()">ORDER</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/mac_data/Document_data/Binita/hoscom/HosComApp/src/pages/order-list-modal/order-list-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], OrderListModalPage);
    return OrderListModalPage;
}());

//# sourceMappingURL=order-list-modal.js.map

/***/ })

});
//# sourceMappingURL=18.js.map