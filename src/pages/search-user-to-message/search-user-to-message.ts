import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the SearchUserToMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-user-to-message',
  templateUrl: 'search-user-to-message.html',
})
export class SearchUserToMessagePage {
	userArray: any = [];
	userList: any;
  userId: any;
  sessionId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private storage: Storage, public serviceProvider: ServiceProvider,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchUserToMessagePage');
    this.storage.get("userData").then(userData => {
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getSearchUserList();
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    console.log("ev.target.value" ,ev.target.value);
    let val = ev.target.value;

    if (val && val.trim() != '') {
      console.log("userArray" ,this.userArray);
      this.userList = this.userArray.filter((item) => {
        console.log("get items item...", item);
          return (item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

    } else if(val == '' || val == undefined){
      this.userList = this.userArray;
    }
  }

  getSearchUserList() {
    let userListObj = {
      "user_id": this.userId,
      "session_id": this.sessionId
    }
    this.serviceProvider.userListApi(userListObj).then(data => {
        // console.log("userListApi data" +JSON.stringify(data));
        if (data["success"] == 0) {
            // this.alert.errorAlert(data["message"]);
        } else if (data["success"] == 1) {
            this.userArray = data["response"];
            this.userList = this.userArray;
            console.log("this.userList", this.userList);
        } else if (data["success"] == 2) {
            // this.error = data["message"];

        } else if (data["success"] == 4) {
            // this.loader.hide();
            let alert = this.alertCtrl.create({
              subTitle:data["message"],
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

        } else {
          // this.loader.hide();
        }
    }, err => {
        // this.loader.hide();
        console.log("err", err)
    });
  }

  closeModal() {
    console.log("close modal");
    this.viewCtrl.dismiss();
  }

  selectUserToMessage(user) {
    console.log("selectUserToMessage user", user);
    this.viewCtrl.dismiss(user);
  }

}
