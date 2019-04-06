import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import moment from 'moment';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the OrderListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list-modal',
  templateUrl: 'order-list-modal.html',
})
export class OrderListModalPage {
	orderLists: any = [];
	orderNo: any;
	setDate: any;
  userId: any;
  sessionId: any;
  requisitionType: any;
	private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,private alertCtrl: AlertController, private _sanitizer: DomSanitizer, 
    private storage: Storage, public serviceProvider: ServiceProvider) {
    this.requisitionType = navParams.get('reqType');
  	
  	var dateNtime = moment();
  	console.log("dateNtime", dateNtime);
  	this.setDate = moment(dateNtime).format('L hh:mm');
  	console.log("this.setDate", this.setDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListModalPage');
    this.storage.get("userData").then(userData => {
      // console.log("userData breakage", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getCartOrderData();
    });
  }

  getCartOrderData() {
    console.log("get order data");
    let orderCartObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "type": this.requisitionType
    }
    this.serviceProvider.cartTableApi(orderCartObj).then(data => {
      console.log('cartTableApi', data);
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        // this.error = '';
        this.orderLists = data["response"];
        // console.log("this.orderLists", this.orderLists);
        for(let orderNo of this.orderLists) {
          // console.log("orderNo", orderNo);
          this.orderNo = orderNo.order_no;
        }
      } else if(data["success"] == 2) {
        // this.error = data["message"];
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  removeOrder(order) {
    console.log("remove order", order);
    let remOrderObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "cart_item_id": order.id
    }
    this.serviceProvider.removecartItemApi(remOrderObj).then(data => {
      console.log('removecartItemApi', data);
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        // this.error = '';
        this.getCartOrderData();
      } else if(data["success"] == 2) {
        // this.error = data["message"];
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  placeOrder() {
    console.log("place order");
    this.viewCtrl.dismiss();

    let placeOrderObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "order_no": this.orderNo,
      "type": this.requisitionType
    }
    this.serviceProvider.orderApi(placeOrderObj).then(data => {
      console.log('orderApi', data);
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        let alert = this.alertCtrl.create({
            title: <any>this.htmlProperty(),
            subTitle: data["message"],
            message: 'Order No.' + this.orderNo + ' at ' + this.setDate,
            cssClass: 'newsFeedAlertCss',
        });
        alert.present();
        setTimeout(()=>{
            alert.dismiss();
            this.navCtrl.push("RequisitionPage");
        }, 4000);
      } else if(data["success"] == 2) {
        // this.error = data["message"];
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });

  }

}
