import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the PreviousOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previous-order',
  templateUrl: 'previous-order.html',
})
export class PreviousOrderPage {
	previousOrders : any = [];
  userId: any;
  sessionId: any;
  requisitionType: any;
  noRecord: boolean = false;
  error: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private storage: Storage, public serviceProvider: ServiceProvider,
    private alertCtrl: AlertController) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousOrderPage');
    this.storage.get("userData").then(userData => {
      // console.log("userData breakage", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getPrevOrderData();
    });
  }

  getPrevOrderData() {
    this.error = '';
    console.log("get order data");
    let OprevrderObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "type": this.requisitionType
    }
    this.serviceProvider.previousOrderApi(OprevrderObj).then(data => {
      console.log('previousOrderApi', data);
      if(data["success"] == 0){
        this.noRecord = true;
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.noRecord = false;
        this.error = '';
        this.previousOrders = data["response"];
        console.log("this.previousOrders", this.previousOrders);
        
      } else if(data["success"] == 2) {
        this.noRecord = false;
        this.error = data["message"];
      } else if(data['success'] == 4) {
        this.error = '';
        this.noRecord = false;
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

  closePreviousOrder(){
    this.viewCtrl.dismiss();
  }

}
