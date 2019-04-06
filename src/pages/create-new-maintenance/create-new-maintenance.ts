import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ActionSheetController, Platform} from 'ionic-angular';
import moment from 'moment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import { Storage } from "@ionic/storage";
/**
 * Generated class for the CreateNewMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-maintenance',
  templateUrl: 'create-new-maintenance.html',
})
export class CreateNewMaintenancePage {
	setDate: any;
	dob: any;
	error: any = '';
	item: any;
	description: any;
	location: any;
	status: any;
	priority: any;
  image: any;
  base64Image: any;
  userId: any;
  sessionId: any;
  trustedImage: any;
	private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private alertCtrl: AlertController, 
  	private _sanitizer: DomSanitizer, public actionSheetCtrl: ActionSheetController, public plt: Platform, private camera: Camera, private loader: Loader, 
    public serviceProvider: ServiceProvider, private storage: Storage) {
  	var dateNtime = moment();
    console.log("dateNtime", dateNtime);
    this.dob = moment(dateNtime).format('YYYY-MM-DD');

    this.storage.get("userData").then(userData => {
      console.log("userData notes", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewMaintenancePage');
  }

  public onStatusChange(status): void {
      console.log('status', status);
  }

  public onPriorityChange(priority): void {
      console.log('priority', priority);
  }

  addImageToMaintenance() {
    console.log("add image to maintenance");
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.takephoto();
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.plt.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.openGallery();
          }
        },
      ]
    });
    actionSheet.present();
  }

  takephoto() {
    
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // If it's base64:

      this.image = imageData;
      console.log("take photo imagedata" +JSON.stringify(imageData));
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    })
  }
 
  openGallery() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    }  
 
    this.camera.getPicture(options).then((imageData) => {
      // this.loader.show("compressing Image...");
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      this.image = imageData;
      console.log("gallary imagedata" +JSON.stringify(imageData));
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
       // Handle error
    })
  }

  cancelNewMaintenance() {
    console.log("cancelNewLost");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  createNewMaintenance() {
    console.log("add new maintenance");
    this.loader.show("Creating a new maintenance item...");
    let addmaintenanceObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "item_name": this.item,
      "description": this.description,
      "location": this.location,
      "status": this.status,
      "priority": this.priority,
      "date": this.dob,
      "photos": this.base64Image
    }
    console.log("addmaintenanceObj", addmaintenanceObj);

    if(this.item == '' || this.item == undefined || this.item == null) {
      this.loader.hide();
			this.error = 'please enter item name';
    } else if(this.description == '' || this.description == undefined || this.description == null) {
      this.loader.hide();
			this.error = 'please enter description';
    } else if(this.location == '' || this.location == undefined || this.location == null) {
      this.loader.hide();
			this.error = 'please enter location';
    } else if(this.status == '' || this.status == undefined || this.status == null) {
      this.loader.hide();
			this.error = 'please enter status';
    } else if(this.priority == '' || this.priority == undefined || this.priority == null) {
      this.loader.hide();
			this.error = 'please enter priority';
    } else {
    	this.error = '';
      this.serviceProvider.addMaintenanceApi(addmaintenanceObj).then(data => {
        console.log("addMaintenanceApi" +JSON.stringify(data))
        if(data["success"] == 0){
          this.loader.hide();
          this.error = data["message"];
        } else if(data["success"] == 1) {
          this.loader.hide();
          this.error = '';
          let alert = this.alertCtrl.create({
            title: <any>this.htmlProperty(),
            subTitle: 'Your Maintenance Entry Added successfully.',
            cssClass: 'newsFeedAlertCss',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  this.navCtrl.push("MaintenancePage");
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
