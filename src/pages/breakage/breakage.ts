import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the BreakagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-breakage',
  templateUrl: 'breakage.html',
})
export class BreakagePage {
	breakage: any = 'wine';
	ifWineMenuSelected: boolean = true;
	ifChinaMenuSelected: boolean = false;
  ifGlassesMenuSelected: boolean = false;
  winebreakageArray: any = [];
  chinabreakageArray: any = [];
  glassbreakageArray: any = [];
  isnotListarray: boolean = false;
  isListarray: boolean = false;
  isnotGlassListarray: boolean = false;
  isGlassListarray: boolean = false;
  isnotChineListarray: boolean = false;
  isChineListarray: boolean = false;
  InwineMenu : boolean = true;
  InChinaMenu : boolean = false;
  InGlassMenu : boolean = false;
  userId: any;
  sessionId: any;
  wine_pageNo = 1;
  china_pageNo = 1;
  glass_pageNo = 1;
  addbreakageType: any;
  error: any = '';
  public pagingEnabled: boolean = true;
  public pagingEnabled1: boolean = true;
  public pagingEnabled2: boolean = true;
  scroll: any;
  selectedCurrent: any;
  scrolldata: any;
  scrolldata1: any;
  scrolldata2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private storage: Storage, public serviceProvider: ServiceProvider,
    public toastCtrl: ToastController) {
  	this.addbreakageType = navParams.get('addBreakageType');
    console.log("this.addbreakageType", this.addbreakageType);
    if(this.addbreakageType == "wine") {
      this.scroll = "winescroll";
      this.breakage = 'wine';
      this.breakageChange(this.breakage);
    } else if(this.addbreakageType == "china") {
      this.scroll = "chinascroll";
      this.breakage = 'china';
      this.breakageChange(this.breakage);
    } else if(this.addbreakageType == "glass") {
      this.scroll = "glassscroll";
      this.breakage = 'glass';
      this.breakageChange(this.breakage);
    } else {
      this.scroll = "winescroll";
      this.breakage = 'wine';
      this.breakageChange(this.breakage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakagePage');
    this.storage.get("userData").then(userData => {
      // console.log("userData breakage", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.displayBreakage();
    });
  }

  breakageChange(breakagename){
    if(breakagename == "wine"){
      console.log("wine");
      this.scroll = "winescroll";
      this.china_pageNo = 1;
      this.glass_pageNo = 1;
      this.ifWineMenuSelected = true;
      this.ifChinaMenuSelected = false;
      this.ifGlassesMenuSelected = false;

      this.InwineMenu = true;
      this.InChinaMenu = false;
      this.InGlassMenu = false;

    } else if(breakagename == "china"){
      console.log("china");
      this.scroll = "chinascroll";
      this.wine_pageNo = 1;
      this.glass_pageNo = 1;
      this.ifWineMenuSelected = false;
      this.ifChinaMenuSelected = true;
      this.ifGlassesMenuSelected = false;

      this.InwineMenu = false;
      this.InChinaMenu = true;
      this.InGlassMenu = false;

    } else if(breakagename == "glass"){
      console.log("glass");
      this.wine_pageNo = 1;
      this.china_pageNo = 1;
      this.scroll = "glassscroll";
      this.ifWineMenuSelected = false;
      this.ifChinaMenuSelected = false;
      this.ifGlassesMenuSelected = true;

      this.InwineMenu = false;
      this.InChinaMenu = false;
      this.InGlassMenu = true;

    } else {}
  }

  onBreakageChanged(event){
    console.log("event", event.value);
    this.breakageChange(event.value);
  }

  displayBreakage() {
    console.log("display breakage");
    this.error = '';
    let disBreakageObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "wine_pageno": this.wine_pageNo,
      "china_pageno": this.china_pageNo,
      "glass_pageno": this.glass_pageNo
    }
    this.serviceProvider.displayBreakageApi(disBreakageObj).then(data => {
      console.log("displayBreakageApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.error = '';
        let breakages = data["response"];
        for(let i in breakages){
          if(breakages[i].type == "wine") {
            this.winebreakageArray = breakages[i].data;
            if(this.winebreakageArray.length < 0 || this.winebreakageArray.length == []) {
              this.isnotListarray = true;
              this.isListarray = false;
            } else {
              this.isnotListarray = false;
              this.isListarray = true;
            }
          } else if(breakages[i].type == "china") {
            this.chinabreakageArray = breakages[i].data;
            if(this.chinabreakageArray.length == [] || this.chinabreakageArray.length < 0) {
              this.isnotChineListarray = true;
              this.isChineListarray = false;
            } else {
              this.isnotChineListarray = false;
              this.isChineListarray = true;
            }
          } else if(breakages[i].type == "glass") {
            this.glassbreakageArray = breakages[i].data;
            if(this.glassbreakageArray.length == [] || this.glassbreakageArray.length < 0) {
              this.isnotGlassListarray = true;
              this.isGlassListarray = false;
            } else {
              this.isnotGlassListarray = false;
              this.isGlassListarray = true;
            }
          }
        }
        
      } else if(data["success"] == 2) {
        this.error = data["message"];
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

  doInfinite(infiniteScroll) {
    console.log("scroll");
    this.scroll = "winescroll";
    this.wine_pageNo = this.wine_pageNo+1;
    let disBreakageObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "wine_pageno": this.wine_pageNo,
    }
    setTimeout(() => {
      this.serviceProvider.displayBreakageApi(disBreakageObj).then(data => {
        let obj: any = data;
        for(let i in obj.response){
          // console.log("obj.response[i]", obj.response[i]);
          let scrolldata = obj.response[i].data;
          this.scrolldata = scrolldata;
          if(this.scrolldata.length) {
            for(let i in this.scrolldata){
              // console.log("this.scrolldata[i].breakage_type", this.scrolldata[i].breakage_type);
              if(this.scrolldata[i].breakage_type == "wine") {
                this.winebreakageArray.push(this.scrolldata[i]);
                // console.log("this.winebreakageArray", this.winebreakageArray);
              } 
            }
          } else {
            this.pagingEnabled = false;
          }
        }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  doInfinite1(infiniteScroll) {
    console.log("scroll");
    this.scroll = "chinascroll";
    this.china_pageNo = this.china_pageNo+1;
    let disBreakageObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "china_pageno": this.china_pageNo,
    }
    setTimeout(() => {
      this.serviceProvider.displayBreakageApi(disBreakageObj).then(data => {
        let obj: any = data;
        console.log("obj.response.length", obj.response.length);
        for(let i in obj.response){
          console.log("obj.response[i]", obj.response[i]);
          let scrolldata1 = obj.response[i].data;
          this.scrolldata1 = scrolldata1;
          if(this.scrolldata1.length) {
            for(let i in this.scrolldata1){
              console.log("this.scrolldata1[i].breakage_type", this.scrolldata1[i].breakage_type);
              if(this.scrolldata1[i].breakage_type == "china") {
                this.chinabreakageArray.push(this.scrolldata1[i]);
                console.log("this.chinabreakageArray", this.chinabreakageArray);
              } 
            }
          } else {
            this.pagingEnabled1 = false;
          }
        }
        
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  doInfinite2(infiniteScroll) {
    console.log("scroll");
    this.scroll = "glassscroll";
    this.glass_pageNo = this.glass_pageNo+1;
    let disBreakageObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "glass_pageno": this.glass_pageNo
    }
    setTimeout(() => {
      this.serviceProvider.displayBreakageApi(disBreakageObj).then(data => {
        let obj: any = data;
        for(let i in obj.response){
          console.log("obj.response[i]", obj.response[i]);
          
          let scrolldata2 = obj.response[i].data;
          console.log("scrolldata2", scrolldata2);
          this.scrolldata2 = scrolldata2;
          if(this.scrolldata2.length) {
            for(let i in this.scrolldata2){
              console.log("this.scrolldata2[i].breakage_type", this.scrolldata2[i].breakage_type);
              if(this.scrolldata2[i].breakage_type == "glass") {
                this.glassbreakageArray.push(this.scrolldata2[i]);
                console.log("this.glassbreakageArray", this.glassbreakageArray);
              } 
            }
          } else {
            this.pagingEnabled2 = false;
          }
        }
        
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  AddWineBreakage() {
  	console.log("add breakage");
    this.breakage = 'wine';
  	this.navCtrl.push("CreateNewBreakagePage", {'breakage': this.breakage});
  }

  AddChinaBreakage() {
    console.log("add breakage");
    this.breakage = 'china';
    this.navCtrl.push("CreateNewBreakagePage", {'breakage': this.breakage});
  }

  AddGlassBreakage() {
    console.log("add breakage");
    this.breakage = 'glass';
    this.navCtrl.push("CreateNewBreakagePage", {'breakage': this.breakage});
  }

  editBreakage(breakage) {
    console.log("edit breakage", breakage);
    // console.log("menu breakage", this.breakage);
    this.navCtrl.push("CreateNewBreakagePage", {'editbreakage': breakage, 'breakage': this.breakage});
  }

  removeBreakage(removeBreakage, index) {
    console.log("remove breakage", removeBreakage);
    console.log("remove breakage type", removeBreakage.breakage_type);
    // console.log("this.current_pageNo", this.current_pageNo);
    // this.wine_pageNo = 1;
    // this.china_pageNo = 1;
    // this.glass_pageNo = 1;
    let deleteBreakageObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "breakage_id": removeBreakage.id,
      "wine_pageno": this.wine_pageNo,
      "china_pageno": this.china_pageNo,
      "glass_pageno": this.glass_pageNo
    }
    console.log("deleteBreakageObj", deleteBreakageObj);
    let alert = this.alertCtrl.create({
      title: 'Confirm delete selected Breakage',
      message: 'Are you sure you want to delete this Breakage?',
      cssClass: 'breakageAlertCss',
      buttons: [
        {
            text: 'No',
            handler: () => {
                console.log('Cancel clicked');
            }
        },
        {
            text: 'Yes',
            handler: () => {
              console.log('ok clicked');
              
              this.serviceProvider.deleteBreakageApi(deleteBreakageObj).then((result) => {
                // console.log("result deleteBreakageApi" +JSON.stringify(result));
                if(result['success'] == 4) {
                  let alert = this.alertCtrl.create({
                    subTitle:result["message"],
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
                } else if(result['success'] == 1) {
                  this.selectedCurrent = removeBreakage;
                  if(removeBreakage.breakage_type == "wine") {
                    this.scroll = "winescroll";
                    let index = this.winebreakageArray.indexOf(removeBreakage);
                    if(index > -1){
                      this.winebreakageArray.splice(index, 1);
                    }
                  } else if(removeBreakage.breakage_type == "china") {
                    this.scroll = "chinascroll";
                    let index = this.chinabreakageArray.indexOf(removeBreakage);
                    if(index > -1){
                      this.chinabreakageArray.splice(index, 1);
                    }
                  } else if(removeBreakage.breakage_type == "glass") {
                    this.scroll = "glassscroll";
                    let index = this.glassbreakageArray.indexOf(removeBreakage);
                    if(index > -1){
                      this.glassbreakageArray.splice(index, 1);
                    }
                  } else {}
                  
                  // this.displayBreakage();
                  let toastSuccess = this.toastCtrl.create({
                      message: result["message"],
                      duration: 3000,
                      position: 'top',
                      showCloseButton:true,
                      closeButtonText:'X',
                      cssClass: "toast-success",
                    });
                    toastSuccess.present();

                } else if(result['success'] == 2) {
                  this.error = result["message"];
                } else if(result['success'] == 0) {
                  this.error = result["message"];
                } else {

                }
              }, (err) => {
                console.log("err deleteBreakageApi" +JSON.stringify(err));
                // Error log
              });

            }
        }
      ]
    });
    alert.present();
  }

}
