import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import moment from 'moment';
/**
 * Generated class for the CreateNewBreakagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-breakage',
  templateUrl: 'create-new-breakage.html',
})
export class CreateNewBreakagePage {
  wineArray: any = [];
  wineLists: any;
  chinaArray: any = [];
  chinaLists: any;
  glassArray: any = [];
  glassLists: any;
  breakageReason: any;
  breakageLitres: any;
  breakageQuantity: any;
  error: any = '';
  breakageType: any;
  userId: any;
  sessionId: any;
  errorWine: any = '';
  errorChina: any = '';
  errorGlass: any = '';
  breakageItemId: any;
  dob: any;
  getBreakageData: any;
  breakage_type: any;
  breakageId: any;
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private alertCtrl: AlertController, private _sanitizer: DomSanitizer,
    private storage: Storage, public serviceProvider: ServiceProvider, private loader: Loader) {
    var dateNtime = moment();
    console.log("dateNtime", dateNtime);
    this.dob = moment(dateNtime).format('YYYY-MM-DD');
    console.log("this.dob", this.dob);
    this.breakageType = navParams.get('breakage');
    console.log("this.breakageType", this.breakageType);

    this.getBreakageData = navParams.get('editbreakage');
    console.log("this.getBreakageData", this.getBreakageData);
    if(this.getBreakageData == undefined) {
      this.breakageReason = '';
      this.dob = this.dob;
      this.breakageItemId = '';
      this.breakageLitres = '';
      this.breakageQuantity = '';
      this.breakage_type = this.breakageType;
      this.breakageId = '';
      
    } else {
      this.breakageReason = this.getBreakageData.reason;
      this.dob = this.getBreakageData.date;
      this.breakageItemId = this.getBreakageData.breakitem_id;
      this.breakageLitres = this.getBreakageData.amount;
      this.breakageQuantity = this.getBreakageData.quantity;
      this.breakage_type = this.getBreakageData.breakage_type;
      this.breakageId = this.getBreakageData.id;
      
    }

    this.storage.get("userData").then(userData => {
      console.log("userData breakage", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.wineBreakages();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewBreakagePage');
    
  }

  backToListBreakage() {
    console.log("back to list");
    this.viewCtrl.dismiss();
  }

  wineBreakages() {
    this.error = '';
    this.errorWine = '';
    let wineBreakageObj = {
      "user_id": this.userId,
      "session_id":this.sessionId
    }
    this.serviceProvider.breakageWineProductsApi(wineBreakageObj).then(data => {
      // console.log("breakageWineProductsApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.errorWine = data["message"];
        this.error = '';
        this.chinaBreakages();
      } else if(data["success"] == 1) {
        this.error = '';
        this.errorWine = '';
        this.wineArray = data["response"];
        this.wineLists = this.wineArray;
        this.chinaBreakages();
        // console.log("this.wineLists" +JSON.stringify(this.wineLists));
        
      } else if(data["success"] == 2) {
        this.error = data["message"];
        this.errorWine = '';
        this.chinaBreakages();
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log("wine breakage session expired");
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

  chinaBreakages() {
    this.error = '';
    this.errorChina = '';
    let chinaBreakageObj = {
      "user_id": this.userId,
      "session_id":this.sessionId
    }
    this.serviceProvider.breakageChinaProductsApi(chinaBreakageObj).then(data => {
      // console.log("breakageChinaProductsApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.errorChina = data["message"];
        this.error = '';
        this.glassBreakages();
      } else if(data["success"] == 1) {
        this.error = '';
        this.errorChina = '';
        this.chinaArray = data["response"];
        this.chinaLists = this.chinaArray;
        
        // console.log("this.chinaLists" +JSON.stringify(this.chinaLists));
        this.glassBreakages();
      } else if(data["success"] == 2) {
        this.errorChina = '';
        this.error = data["message"];
        this.glassBreakages();
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

  glassBreakages() {
    this.error = '';
    this.errorGlass = '';
    let glassBreakageObj = {
      "user_id": this.userId,
      "session_id": this.sessionId
    }
    this.serviceProvider.breakageGlassProductsApi(glassBreakageObj).then(data => {
      // console.log("breakageGlassProductsApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.error = '';
        this.errorGlass = data["message"];
      } else if(data["success"] == 1) {
        this.error = '';
        this.errorGlass = '';
        this.glassArray = data["response"];
        this.glassLists = this.glassArray;
        
        // console.log("this.glassLists" +JSON.stringify(this.glassLists));
        
      } else if(data["success"] == 2) {
        this.error = data["message"];
        this.errorGlass = '';
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

  filterItems(ev: any) {
    console.log("ev.target.value" ,ev.target.value);
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.wineLists = this.wineArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    } else if(val == '' || val == undefined){
      this.wineLists = this.wineArray;
    }

    let val1 = ev.target.value;
    if (val1 && val1.trim() != '') {
      this.chinaLists = this.chinaArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val1.toLowerCase()) > -1));
      });
    } else if(val1 == '' || val1 == undefined){
      this.chinaLists = this.chinaArray;
    }

    let val2 = ev.target.value;
    if (val2 && val2.trim() != '') {
      this.glassLists = this.glassArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val2.toLowerCase()) > -1));
      });
    } else if(val2 == '' || val2 == undefined){
      this.glassLists = this.glassArray;
    }
  }

  selectBreakage(breakageItem) {
    console.log("select breakage item", breakageItem);
    this.breakageItemId = breakageItem.id;
  }

  cancelNewBreakage() {
    console.log("cancel new wishes");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  addNewBreakage() {
    console.log("add new breakage");
    this.loader.show("Creating a new Breakage...");
    let breakageObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "reason": this.breakageReason,
      "breakage_type": this.breakageType,
      "breakitem_id": this.breakageItemId,
      "amount": this.breakageLitres,
      "quantity": this.breakageQuantity,
      "date": this.dob,
      "breakage_id": this.breakageId
    }

    console.log("breakageObj", breakageObj);
    if(breakageObj.reason == '' || breakageObj.reason == undefined || breakageObj.reason == null) {
      this.loader.hide();
      this.error = 'please give breakage reason';
    } else if(breakageObj.breakitem_id == '' || breakageObj.breakitem_id == undefined || breakageObj.breakitem_id == null) {
      this.loader.hide();
      this.error = 'please select any one breakage item';
    } else {
      this.error = '';
      this.serviceProvider.addBreakageApi(breakageObj).then(data => {
        console.log("addBreakageApi" +JSON.stringify(data))
        if(data["success"] == 0){
          this.loader.hide();
          this.error = data["message"];
        } else if(data["success"] == 1) {
          this.loader.hide();
          this.error = '';
          let alert = this.alertCtrl.create({
            title: <any>this.htmlProperty(),
            subTitle: 'Your Breakage have been added successfully.',
            cssClass: 'newsFeedAlertCss',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  // this.navCtrl.push("BreakagePage");
                  this.navCtrl.push("BreakagePage", {'addBreakageType': this.breakageType});
                }
              }
            ]
          });
          alert.present();
        } else if(data["success"] == 2) {
          this.loader.hide();
          this.error = data["message"];
        } else if (data["success"] == 4) {
            this.loader.hide();
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
          this.loader.hide();
          this.error = '';
        }
      },
      err => {
        this.loader.hide();
        console.log("this.error" +JSON.stringify(err))
      });
    }
  }

}
