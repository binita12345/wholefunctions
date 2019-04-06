import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController, MenuController, Nav, App} from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the ProfileModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-modal',
  templateUrl: 'profile-modal.html',
})
export class ProfileModalPage {
  @ViewChild(Nav) nav: Nav;
  userId: any;
  sessionId: any;
  profilePic: any;
  employeename: any;
  position: any;
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, private storage: Storage,
    private alertCtrl: AlertController, public serviceProvider: ServiceProvider, private _sanitizer: DomSanitizer, public menu: MenuController, private app: App) {
    this.storage.get("userData").then(userData => {
      console.log("userData profile", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.profilePic = userData.response.profile_picture;
      this.employeename = userData.response.first_name + userData.response.last_name;
      this.position = userData.response.current_position;;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileModalPage');
  }

  clickToGoSettingsPage() {
  	console.log("going to settings page");
    this.viewCtrl.dismiss();
  	this.navCtrl.push("SettingsPage");
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  signOutFromApp() {
  	console.log("sign out from the app");
    // this.menu.enable(true);
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('password');
    // this.navCtrl.setRoot("LoginPage");
    this.viewCtrl.dismiss();
    let logoutObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
    }

    let alert = this.alertCtrl.create({
      title: 'Confirm logout?',
      message: 'Are you sure you want to logout from the app?',
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
            console.log("logout", logoutObj);
            this.serviceProvider.logOutApi(logoutObj).then((result) => {
             
              if(result['success'] == 4) {
                
                let alert = this.alertCtrl.create({
                  subTitle: result["message"],
                  cssClass: 'newsFeedAlertCss',
                  buttons: [
                    {
                      text: 'OK',
                      handler: () => {
                        console.log('ok clicked');
                        this.navCtrl.push("LoginPage");
                      }
                    }
                  ]
                });
                alert.present();
              } else if(result['success'] == 1) {
                let alert = this.alertCtrl.create({
                  title: <any>this.htmlProperty(),
                  subTitle: result["message"],
                  cssClass: 'newsFeedAlertCss',
                  buttons: [
                    {
                      text: 'OK',
                      handler: () => {
                        this.storage.clear();
                        this.app.getRootNav().push("LoginPage");
                      }
                    }
                  ]
                });
                alert.present();
              } else if(result['success'] == 2) {
                let alert = this.alertCtrl.create({
                  subTitle: result['message'],
                  buttons: ['OK']
                });
                alert.present();
              } else if(result['success'] == 0) {
                let alert = this.alertCtrl.create({
                  subTitle: result['message'],
                  buttons: ['OK']
                });
                alert.present();
              } else {

              }
            }, (err) => {
              console.log("err logOutApi" +JSON.stringify(err));
              // Error log
            });

          }
        }
      ]
    });
    alert.present();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
