import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import { Alert } from "../../providers/alert/alert";
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the RegisterPage page.
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
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	public signUpFrom: FormGroup;
	error: any = '';
  public deviceInfo: deviceInterface = {};
  base64Image: any = 'assets/imgs/camera.png';
  image: any;
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public serviceProvider: ServiceProvider, private device: Device,
    private alert: Alert, private loader: Loader, private storage: Storage, private alertCtrl: AlertController, private _sanitizer: DomSanitizer, public actionSheetCtrl: ActionSheetController,
    public platform: Platform, private camera: Camera) {
    this.deviceInfo.platform = this.device.platform;
    this.deviceInfo.token = this.device.uuid;
   
  	this.signUpFrom = formBuilder.group({
        firstname: ['', Validators.compose([Validators.required])],
        lastname: ['', Validators.compose([Validators.required])],
        dateofbirth: ['', Validators.compose([Validators.required])],
        position: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  choosePhoto() {
      console.log("choose photo option");
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Option',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Take photo',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
                    handler: () => {
                        this.takephoto();
                    }
                },
                {
                    text: 'Choose photo from Gallery',
                    icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
                    handler: () => {
                        this.openGallery();
                    }
                },
            ]
        });
        actionSheet.present();
    }

    takephoto() {
      console.log("choose photo option to take photo");
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.image = imageData;
            // console.log("take photo imagedata" +JSON.stringify(imageData));
            this.base64Image = 'data:image/png;base64,' + imageData;
            // this.photos.push(this.base64Image);
            // this.photos.reverse();
        }, (err) => {
            // Handle error
        })
    }

    openGallery() {
      console.log("choose photo option to select from gallary");
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            correctOrientation: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.image = imageData;
            // console.log("gallary imagedata" +JSON.stringify(imageData));
            this.base64Image = 'data:image/png;base64,' + imageData;
            // console.log("gallary base64Image" +this.base64Image);
        }, (err) => {
            // Handle error
        })
    }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  signupUser() {
  	console.log("signup user");
    this.error = '';
    this.loader.show("Creating your Account. Please Wait");
  
    let signupObj = {
      "first_name": this.signUpFrom.value.firstname,
      "last_name": this.signUpFrom.value.lastname,
      "email": this.signUpFrom.value.email,
      "current_position": this.signUpFrom.value.position,
      "password": this.signUpFrom.value.password,
      "deviceType": this.deviceInfo.platform,
      "deviceToken": this.deviceInfo.token,
      "profile_picture": this.base64Image,
      "date_of_birth": this.signUpFrom.value.dateofbirth,
      "experience": '',
      "language": ''
    };

      console.log("signupObj" +JSON.stringify(signupObj));

      window.localStorage.setItem('email', this.signUpFrom.value.email);
      window.localStorage.setItem('password', this.signUpFrom.value.password);

      this.serviceProvider.signupApi(signupObj).then((result) => {
        console.log("result signup" +JSON.stringify(result));
        // this.loader.hide();
        if(result["success"] == 0) {
          this.loader.hide();
          this.alert.errorAlert(result["message"]);

        } else if(result["success"] == 1) {
          this.loader.hide();
          let obj: any = result;
          console.log("obj signin" +JSON.stringify(obj));

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
                  this.navCtrl.push("LoginPage");
                }
              }
            ]
          });
          alert.present();
        } else if(result["success"] == 2) {
          this.loader.hide();
          this.alert.errorAlert(result["message"]);
          // this.alertFunction(result["message"]);
        } else {
          this.loader.hide();
        }
      }, (err) => {
        console.log("err signup" +JSON.stringify(err));
        // Error log
      });
    // }
  }

  backToLogin() {
    console.log("already have an account");
    this.navCtrl.push("LoginPage");
  }

}
