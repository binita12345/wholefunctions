import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the MaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintenance',
  templateUrl: 'maintenance.html',
})
export class MaintenancePage {
	maintainanceArray: any =[];
	maintainanceLists: any;
  userId: any;
  sessionId: any;
  error: any = '';
  pageNo = 1;
  noRecord: boolean = false;
  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'no', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public serviceProvider: ServiceProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintenancePage');
    this.storage.get("userData").then(userData => {
      console.log("userData maintenance", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.displayMaintenance();
    });
  }

  displayMaintenance() {
    console.log("display maintenance");
    this.error = '';
    let maintenanceObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "pageNo": this.pageNo
    }
    this.serviceProvider.displayMaintenanceApi(maintenanceObj).then(data => {
      console.log("displayMaintenanceApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.noRecord = true;
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.error = '';
        this.noRecord = false;
        this.maintainanceArray = data["response"];
        this.maintainanceLists = this.maintainanceArray;
        console.log("this.maintainanceLists" +JSON.stringify(this.maintainanceLists));
       

      } else if(data["success"] == 2) {
        this.noRecord = false;
        this.error = data["message"];
      } else if(data['success'] == 4) {
        this.noRecord = false;
        this.error = '';
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

  filterItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.maintainanceLists = this.maintainanceArray.filter((item) => {
          return ((item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.location.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    } else if(val == ''){
      this.maintainanceLists = this.maintainanceArray;
    }
  }

  addEntry() {
    console.log("add maintenance entry");
    this.navCtrl.push("CreateNewMaintenancePage");
  }

  openNseeImage(mainImage) {
    console.log("open n see image", mainImage);
    let URL = mainImage;
    let browserInst = new InAppBrowser();
    let browser = browserInst.create(URL, '_system', this.options)
  }

}
