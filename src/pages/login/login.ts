import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { EmailValidator } from '../../validators/email';
import { UtilityProvider } from '../../providers/utility/utility'
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import { Device } from '@ionic-native/device';
import { Alert } from "../../providers/alert/alert";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface deviceInterface {
    token?: string,
    platform?: string
};
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public deviceInfo: deviceInterface = {};
	public loginForm:FormGroup;
	error: any = '';
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public utility: UtilityProvider, private loader: Loader,
    public faio: FingerprintAIO, public setAndGet: SettersandgettersProvider, public serviceProvider: ServiceProvider, private alertCtrl: AlertController, 
    private storage: Storage, private device: Device, private alert: Alert, private _sanitizer: DomSanitizer) {
    this.deviceInfo.platform = this.device.platform;
    this.deviceInfo.token = this.device.uuid;
  	this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])],
    });

    this.loginForm.controls.email.setValue('binita.sensussoft@gmail.com');
    this.loginForm.controls.password.setValue('123456');
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }
  appLogin(){
    this.error = "";
    this.loader.show("Logging In. Please Wait...");

    let loginObj = {
        "email": this.loginForm.value.email,
        "password": this.loginForm.value.password,
        "deviceType": this.deviceInfo.platform,
        "device_token": this.deviceInfo.token
    };

    console.log("loginObj" +JSON.stringify(loginObj));
    window.localStorage.setItem('email', this.loginForm.value.email);
    window.localStorage.setItem('password', this.loginForm.value.password);

    console.log("already email", window.localStorage.setItem('email', this.loginForm.value.email));
    console.log("already password", window.localStorage.setItem('password', this.loginForm.value.password));
    this.serviceProvider.loginApi(loginObj).then(data => {

        console.log("loginApi data", data);

        if (data["success"] == 0) {
            this.loader.hide();
            this.alert.errorAlert(data["message"]);
        } else if (data["success"] == 1) {
            this.loader.hide();
            let obj: any = data;
            console.log("obj signin" + JSON.stringify(obj));

            let alert = this.alertCtrl.create({
            title: <any>this.htmlProperty(),
            subTitle: obj["message"],
            cssClass: 'newsFeedAlertCss',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.serviceProvider.headers.append("Authorization", obj.response.sessionId);
                  this.storage.set("userData", obj);
                  this.storage.set("userId", obj.response.user_id);
                  this.storage.set("token", obj.response.sessionId);
                  this.navCtrl.push("NewsFeedPage");
                }
              }
            ]
          });
          alert.present();
        } else if (data["success"] == 2) {
            this.loader.hide();
            this.alert.errorAlert(data["message"]);

        } else {
          this.loader.hide();
        }
    }, err => {
        this.loader.hide();
        // console.log("err", err)
        this.error = err.message;
        // console.log("this.error", this.error)
    });
    // if (!this.loginForm.value.email)
    // {
    //   this.utility.presentAlert("Please enter Email!");
    //   return;            
    // }
    // else {

      
    //Check if Fingerprint or Face  is available
  //   this.faio.isAvailable()
  //   .then(result => {
  //     console.log("result is available", result);
  //     if(result === "finger" || result === "face"){
  //       //Fingerprint or Face Auth is available
  //       console.log("Fingerprint or Face Exist!")
  //       this.faio.show({
  //         clientId: 'NihinDemoBioAuthApp',
  //         clientSecret: 'nihinBioAuthDemo', //Only necessary for Android
  //         disableBackup: true, //Only for Android(optional)
  //         localizedFallbackTitle: 'Use Pin', //Only for iOS
  //         localizedReason: 'Please Authenticate' //Only for iOS
  //       })
  //       .then((result: any) => {
  //         console.log("result is show", result);
  //         if(result == "Success"){
  //         //Fingerprint/Face was successfully verified            
  //         //Go to dashboard
  //         this.setAndGet.Email = this.loginForm.value.email;
  //         console.log("this.setAndGet.Email", this.setAndGet.Email);
          // this.navCtrl.setRoot("NewsFeedPage");

  //         }
  //         else {
  //         //Fingerprint/Face was not successfully verified                      
  //           this.utility.presentAlert(result);
  //           console.log(result);
  //         }
  //       })
  //       .catch((error: any) => {
  //         //Fingerprint/Face was not successfully verified          
  //         this.utility.presentAlert(error);
  //         console.log(error);
  //       });
  //     }
  //     else {
  //       //Fingerprint or Face Auth is not available        
  //       this.utility.presentAlert("Fingerprint/Face Auth is not available on this device!");
  //       console.log("Fingerprint/Face Auth is not available on this device!")
  //     }
  //   })
    // }
  }

  forgotPassword() {
    console.log("forgot password");
    this.navCtrl.push("ForgotPasswordPage");
  }

  resetPassword() {
    console.log("reset password");
    this.navCtrl.push("ResetPasswordPage");
  }

  userRegistration() {
    console.log("user registration");
    this.navCtrl.push("RegisterPage");
  }

}
