import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import moment from 'moment';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import { Storage } from "@ionic/storage";
/**
 * Generated class for the CreateNewLostNFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-lost-n-found',
  templateUrl: 'create-new-lost-n-found.html',
})
export class CreateNewLostNFoundPage {
	getSplitbase64: any;
  extension: any;
  displayFile: any;
  fileData: any;
  error: any = '';
  lostitem: any;
  location: any;
	dob: any;
	time: any;
	description: any;
	owner: any;
	ownerroom: any;
	setDate: any;
  getLostData: any;
  userId: any;
  sessionId: any;
  itemId: any;
  photos: any = {};
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, private fileChooser: FileChooser, private filePicker: IOSFilePicker, 
  	private filePath: FilePath, private file: File, private base64: Base64, public viewCtrl: ViewController, private alertCtrl: AlertController, private _sanitizer: DomSanitizer,
    private loader: Loader, public serviceProvider: ServiceProvider, private storage: Storage) {
  	var dateNtime = moment();
    console.log("dateNtime", dateNtime);
    this.setDate = moment(dateNtime).format('YYYY-MM-DD hh:mm');
    console.log("this.setDate", this.setDate);
    let splitDate = this.setDate.split(' ');
    this.dob = splitDate[0];
    this.time = splitDate[1];

    this.getLostData = navParams.get('editLost');
    console.log("this.getLostData", this.getLostData);
    if(this.getLostData == undefined) {
      this.lostitem = '';
      this.location = '';
      this.description = '';
      this.dob = this.dob;
      this.itemId = '';
      this.owner = '';
      this.ownerroom = '';
    } else {
      this.lostitem = this.getLostData.item_name;
      this.location = this.getLostData.location;
      this.description = this.getLostData.description;
      this.dob = this.getLostData.date;
      this.itemId = this.getLostData.id;
      this.owner = this.getLostData.owner_name;
      this.ownerroom = this.getLostData.owner_room_number;
    }

    this.storage.get("userData").then(userData => {
      console.log("userData notes", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewLostNFoundPage');
  }

  addImageORFileToLost() {
    console.log("addImageORFileToLost");
    if (this.plt.is('android')) {
      console.log("add files or image in android");

      this.fileChooser.open().then(uri => {
        // console.log("file uri", uri);
        this.filePath.resolveNativePath(uri).then((filePathResult)=>{
          // console.log("file filePathResult", filePathResult);
          var fileName = filePathResult.substr(filePathResult.lastIndexOf('/') + 1);
          // console.log("android file fileName", fileName);

          this.displayFile = fileName;
          // console.log("this.displayFile" +JSON.stringify(this.displayFile));

          var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
          // console.log("android file fileExtension", fileExtension);
          this.extension = fileExtension;

          let filePathurl : string = filePathResult;
          // console.log("file uri filePathurl", filePathurl);

          this.base64.encodeFile(filePathurl).then((base64File: string) => {
            // console.log("file uri base64File", base64File);
            this.fileData = base64File;
            // console.log("file uri this.fileData", this.fileData);

            let splitbase64 = this.fileData.split(',');
            // console.log("add files in android splitbase64", splitbase64[1]);

            this.getSplitbase64 = splitbase64[1];
            this.photos = {'filestring': this.fileData, 'filetype': this.extension};
          }, (err) => {
            // this.loader.hide();
            console.log(err);
          });
        });
      }).catch(err => {
        console.log('Error', err);
      });
    } else if (this.plt.is('ios')) {
      console.log("add files or image in ios");
      this.filePicker.pickFile().then(uri => {
        // console.log("ios file uri" +uri);
        let correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
        // console.log("ios file correctPath", correctPath);
        let currentName = uri.substring(uri.lastIndexOf('/') + 1);
        // console.log("ios file currentName", currentName);
        let onlyfilename = currentName.split(".");
        // console.log("onlyfilename[0]" +onlyfilename[0]);
        let name = onlyfilename[0];
        // console.log("name" +name);
        let extension = onlyfilename[1];
        // console.log("extension" +extension);
        this.file.readAsDataURL("file:///" + correctPath, currentName).then(result=>{                           
          // console.log("ios file result", result);
          this.fileData = result;
          this.photos = {'filestring': this.fileData, 'filetype': this.extension};
        })
      });
    }
  }

  cancelNewLost() {
    console.log("cancelNewLost");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  createNewLost() {
    console.log("send new message");
    console.log("this.dob", this.dob);

    this.loader.show("Creating a new lost n found item...");
    let addlostObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "item_name": this.lostitem,
      "description": this.description,
      "location": this.location,
      "date": this.dob,
      "owner_name": this.owner,
      "owner_room_number": this.ownerroom,
      "time": this.time,
      "item_id": this.itemId,
      "photos": this.photos

    }
    console.log("addlostObj", addlostObj);
    if(addlostObj.item_name == '' || addlostObj.item_name == undefined || addlostObj.item_name == null) {
      this.loader.hide();
			this.error = 'please enter lost item name';
    } else if(addlostObj.location == '' || addlostObj.location == undefined || addlostObj.location == null) {
      this.loader.hide();
			this.error = 'please enter location';
    } else if(addlostObj.date == '' || addlostObj.date == undefined || addlostObj.date == null) {
      this.loader.hide();
			this.error = 'please enter date of birth';
    } else if(addlostObj.time == '' || addlostObj.time == undefined || addlostObj.time == null) {
      this.loader.hide();
			this.error = 'please enter time';
    } else if(addlostObj.description == '' || addlostObj.description == undefined || addlostObj.description == null) {
      this.loader.hide();
			this.error = 'please enter description';
    } else {
    	this.error = '';
      this.serviceProvider.addLostNFoundApi(addlostObj).then(data => {
        console.log("addLostNFoundApi" +JSON.stringify(data))
        if(data["success"] == 0){
          this.loader.hide();
          this.error = data["message"];
        } else if(data["success"] == 1) {
          this.loader.hide();
          this.error = '';
          let alert = this.alertCtrl.create({
            title: <any>this.htmlProperty(),
            subTitle: 'Your Lost Entry Added successfully.',
            cssClass: 'newsFeedAlertCss',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  this.navCtrl.push("LostnfoundPage");
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
