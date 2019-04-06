import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

	notification: any;
	mutesounds: any;
	base64Image = 'assets/imgs/images.jpeg';
	image : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public platform: Platform, public actionSheetCtrl: ActionSheetController,
  	private loader: Loader, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  public onWeekDayChange(week): void {
      console.log('week', week);
  }

  editProfilePhoto() {
  	console.log("edit profile photo");
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
  	this.loader.show("loading captured image");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.image = imageData;
      console.log("take photo imagedata" +JSON.stringify(imageData));
      this.loader.hide();
      this.base64Image  = 'data:image/png;base64,' + imageData;
    }, (err) => {
      // Handle error
    })
  }
 
  openGallery() {
  	this.loader.show("loading gallary image");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true,
    }  
 
    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      this.image = imageData;
      console.log("gallary imagedata" +JSON.stringify(imageData));
      this.loader.hide();
      this.base64Image  = 'data:image/png;base64,' + imageData;
    }, (err) => {
       // Handle error
    })
  }

  cancelComment() {
  	this.viewCtrl.dismiss();
  }

  saveProfileChange() {
  	console.log("save profile changes");
  }

}
