import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the LostnfoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostnfound',
  templateUrl: 'lostnfound.html',
})
export class LostnfoundPage {
	lostnfound: any;
	lostNfoundArray: any = [];
	lostnFoundLists: any;
	archiveArray: any = [];
	ifCurrentSelected: boolean = true;
	ifArchiveSelected: boolean = false;
  userId: any;
  sessionId: any;
  error: any = '';
  lostStatus: any;
  current_pageNo = 1;
  archive_pageNo = 1;
  newlosts: any;
  newlostsarchive: any;
  public pagingEnabled: boolean = true;
  public pagingEnabled1: boolean = true;
  scroll: any;
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
  documentName: any;
  imageName: any;
  noimage: any;
  selectedArchive: any;
  selectedCurrent: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public serviceProvider: ServiceProvider,private alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    document.addEventListener("resume", function() {
    // do something
    this.currentLostNFound();
  }, true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostnfoundPage');
    this.storage.get("userData").then(userData => {
      console.log("userData notes", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.lostnfound = 'current';
      this.lostnfoundChange(this.lostnfound);
      this.currentLostNFound();
    });
  }

  lostnfoundChange(notename){
    if(notename == "current"){
      console.log("current");
      this.ifCurrentSelected = true;
      this.ifArchiveSelected = false;
      this.currentLostNFound();
    } else if(notename == "archive"){
      console.log("archive");
      this.ifCurrentSelected = false;
      this.ifArchiveSelected = true;
      this.archiveLostNFound();
    } else {}
  }

  onLostNFoundChanged(event){
    console.log("event", event.value);
    this.lostnfoundChange(event.value);
  }

  filterItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.lostnFoundLists = this.lostNfoundArray.filter((item) => {
          return ((item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });

    } else if(val == ''){
      this.lostnFoundLists = this.lostNfoundArray;
    }
  }

  currentLostNFound() {
    this.scroll = "currentlosts";
    console.log("current LostNFound");
    this.error = '';
    let currentLostObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "current_pageNo": this.current_pageNo
    }
    this.serviceProvider.currentLostNFoundApi(currentLostObj).then(data => {
      // console.log("currentLostNFoundApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.error = '';
        this.lostNfoundArray = data["response"];
        this.lostnFoundLists = this.lostNfoundArray;
        
        // console.log("this.lostnFoundLists" +JSON.stringify(this.lostnFoundLists));
        
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
    this.scroll = "currentlosts";
    this.current_pageNo = this.current_pageNo+1;

    let currentLostObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "current_pageNo":this.current_pageNo
    }
    
    setTimeout(() => {
      this.serviceProvider.currentLostNFoundApi(currentLostObj).then(data => {
        let obj: any = data;
        if (obj.response.length) {
          for(let i in obj.response) {
            this.newlosts = obj.response[i];
            this.lostNfoundArray.push(this.newlosts)
            
            document.addEventListener("pause", function() {
              // do something
              this.lostnFoundLists = this.lostNfoundArray;
            }, true);
          }
        } else {
            this.pagingEnabled = false;
        }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  archiveLostNFound() {
    this.scroll = "archivelosts";
    console.log("archive LostNFound");
    this.error = '';
    let archiveLostObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "archive_pageNo": this.archive_pageNo
    }
    this.serviceProvider.archiveLostNFoundApi(archiveLostObj).then(data => {
      // console.log("archiveLostNFoundApi" +JSON.stringify(data))
      if(data["success"] == 0){
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.error = '';
        this.archiveArray = data["response"];
        
        // console.log("this.archiveArray" +JSON.stringify(this.archiveArray));

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

  doInfinite1(infiniteScroll) {
    this.scroll = "archivelosts";
    this.archive_pageNo = this.archive_pageNo+1;
    let archiveLostObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "archive_pageNo":this.archive_pageNo
    }
    setTimeout(() => {
      this.serviceProvider.archiveLostNFoundApi(archiveLostObj).then(data => {
        let obj: any = data;
        if (obj.response.length) {
          for(let i in obj.response) {
            this.newlostsarchive = obj.response[i];
            this.archiveArray.push(this.newlostsarchive)
          }
        } else {
            this.pagingEnabled1 = false;
        }
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  restorearchive(archive, index) {
  	// console.log("restore archive", archive);
    this.scroll = "archivelosts";
    // console.log("restore this.archive_pageNo", this.archive_pageNo);

    let restoreLostObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "status": "restore",
      "item_id": archive.id,
      "archive_pageNo":this.archive_pageNo
    }
    this.serviceProvider.returnLostNFoundApi(restoreLostObj).then(data => {
      // console.log("returnLostNFoundApi restore" +JSON.stringify(data))
      if(data["success"] == 0){
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.error = '';
        // console.log("archive selected", archive);
        this.selectedArchive = archive;
        let index = this.archiveArray.indexOf(archive);
        if(index > -1){
          this.archiveArray.splice(index, 1);
        }
        this.lostnFoundLists.push(this.selectedArchive);
        this.archiveLostNFound();
        
        let toastSuccess = this.toastCtrl.create({
            message: data["message"],
            duration: 3000,
            position: 'top',
            showCloseButton:true,
            closeButtonText:'X',
            cssClass: "toast-success",
          });
          toastSuccess.present();

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

  returnLostnFound(lostnfound, index) {
  	// console.log("returnLostnFound", lostnfound);
    console.log("this.current_pageNo.. return", this.current_pageNo);
    this.scroll = "currentlosts";
    let returnLostObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "status": "return",
      "item_id": lostnfound.id,
      "current_pageNo":this.current_pageNo
    }
    this.serviceProvider.returnLostNFoundApi(returnLostObj).then(data => {
      // console.log("returnLostNFoundApi retutn" +JSON.stringify(data))
      if(data["success"] == 0){
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.error = '';
        this.selectedCurrent = lostnfound;
        let index = this.lostNfoundArray.indexOf(lostnfound);
        if(index > -1){
          this.lostNfoundArray.splice(index, 1);
        }
        this.archiveArray.push(this.selectedCurrent);
        this.currentLostNFound();
       
        let toastSuccess = this.toastCtrl.create({
          message: data["message"],
          duration: 3000,
          position: 'top',
          showCloseButton:true,
          closeButtonText:'X',
          cssClass: "toast-success",
        });
        toastSuccess.present();

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

  editLostnFound(lostnfound) {
  	console.log("editLostnFound", lostnfound);
    this.navCtrl.push("CreateNewLostNFoundPage", {'editLost': lostnfound});
  }

  createentry() {
    console.log("create lost entry");
    this.navCtrl.push("CreateNewLostNFoundPage");
  }

  openfilesinbrowser(file) {
    console.log("open files", file);
    let URL = file.file_name;
    let browserInst = new InAppBrowser();
    let browser = browserInst.create(URL, '_system', this.options)
  }

}
