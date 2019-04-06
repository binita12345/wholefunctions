import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController, AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Storage } from "@ionic/storage";
import * as lodash from 'lodash';
import { Loader } from "../../providers/loader/loader";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the CreateNewPrivateMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-private-message',
  templateUrl: 'create-new-private-message.html',
})
export class CreateNewPrivateMessagePage {
  getSplitbase64: any;
  extension: any;
  displayFile: any;
  fileData: any;
  ifData: boolean = false;
  image: any;
  username: any;
  designation: any;
  name: any;
  id: any;
  usersArr: any = [];
  usersUniqArr: any = [];
  userId: any;
  sessionId: any;
  photos: any = [];
  message: any;
  headline: any;
  error: any = '';
  userString: any;
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public plt: Platform, private fileChooser: FileChooser, 
    private filePicker: IOSFilePicker, private filePath: FilePath, private file: File, private base64: Base64, public viewCtrl: ViewController,
    private alertCtrl: AlertController, private _sanitizer: DomSanitizer, private storage: Storage, private loader: Loader, public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewPrivateMessagePage');
    this.storage.get("userData").then(userData => {
      console.log("userData notes", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
    });
  }

  removeSelectedUser(id) {
    console.log("remove selected user");
    console.log("remove data selected", id);
    this.usersUniqArr = this.usersUniqArr.filter(item => item.id !== id);
    // console.log("this.usersUniqArr remove", this.usersUniqArr);
    console.log("remove this.usersUniqArr", this.usersUniqArr);
    Array.prototype.map.call(this.usersUniqArr, s => s.id).toString(); // "A,B,C"
    this.userString = Array.prototype.map.call(this.usersUniqArr, s => s.id).toString();
    if(this.usersUniqArr.length <= 0) {
      this.ifData = false;
    } else {
      this.ifData = true;
    }
  }

  createUserToSendMessage() {
  	console.log("create user to send message");
  	let searchUserModal = this.modalCtrl.create("SearchUserToMessagePage",{}, {showBackdrop:true, enableBackdropDismiss: true});
    searchUserModal.present();
    searchUserModal.onDidDismiss(data => {
      console.log("data selected", data);
      if(data == undefined) {
        this.ifData = false;
      } else {
        if(data.profile_picture !== '' || data.profile_picture !== null) {
          this.image = data.profile_picture;
        } else {
          this.image = '';
        }
        this.id = data.id;
        this.name = data.first_name + ' ' + data.last_name;
        console.log("this.name", this.name); 
        this.designation = data.current_position;
        this.ifData = true;
        this.usersArr.push({'image': this.image, 'id': this.id, 'name': this.name, 'position': this.designation});
        let uniqueArr = []; 
        uniqueArr = lodash.uniqWith(this.usersArr, lodash.isEqual);
        this.usersUniqArr = uniqueArr;
        console.log("data this.usersUniqArr", this.usersUniqArr);
        Array.prototype.map.call(this.usersUniqArr, s => s.id).toString(); // "A,B,C"
        this.userString = Array.prototype.map.call(this.usersUniqArr, s => s.id).toString();
      }
    });
  }

  addImageORFileToPrivate() {
    console.log("addImageORFileToPrivate");

    if (this.plt.is('android')) {
      console.log("add files or image in android");

      this.fileChooser.open().then(uri => {
        // console.log("file uri", uri);
        this.filePath.resolveNativePath(uri).then((filePathResult)=>{
          console.log("file filePathResult", filePathResult);
          var fileName = filePathResult.substr(filePathResult.lastIndexOf('/') + 1);
          console.log("android file fileName", fileName);

          this.displayFile = fileName;
          console.log("this.displayFile" +JSON.stringify(this.displayFile));
          let onlyfilename = this.displayFile.split(".");
          // console.log("onlyfilename[0]" +onlyfilename[0]);
          let name = onlyfilename[0];
          var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
          console.log("android file fileExtension", fileExtension);
          this.extension = fileExtension;

          let filePathurl : string = filePathResult;
          // console.log("file uri filePathurl", filePathurl);

          this.base64.encodeFile(filePathurl).then((base64File: string) => {
            // console.log("file uri base64File", base64File);
            this.fileData = base64File;
            var newStringVal = this.fileData.replace(/ /g, "");
            // this.fileData = this.fileData.replace(/\s+/g, "");
            console.log("file uri this.fileData", this.fileData);

            let splitbase64 = this.fileData.split(',');
            // console.log("add files in android splitbase64", splitbase64[1]);
            this.getSplitbase64 = splitbase64[1];

            // console.log("add files in android this.getSplitbase64", this.getSplitbase64);
            // this.extensions.push({'extensions': this.extension})
            this.photos.push({'filename' : name, 'filestring': newStringVal, 'filetype': this.extension});
            console.log("file uri photos", this.photos);


          }, (err) => {
            console.log(err);
          });
        });
      }).catch(err => {
        console.log('Error', err);
      });
    } else if (this.plt.is('ios')) {
      console.log("add files or image in ios");
      this.filePicker.pickFile().then(uri => {
        console.log("ios file uri" +JSON.stringify(uri));
        let correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
        console.log("ios file correctPath" +JSON.stringify(correctPath));
        let currentName = uri.substring(uri.lastIndexOf('/') + 1);
        console.log("ios file currentName" +JSON.stringify(currentName));
        let onlyfilename = currentName.split(".");
        console.log("onlyfilename[0]" +onlyfilename[0]);
        let name = onlyfilename[0];
        console.log("name" +name);
        let extension = onlyfilename[1];
        console.log("extension" +extension);
        this.file.readAsDataURL("file:///" + correctPath, currentName).then((base64File: string) =>{                           
          // console.log("ios file base64" +JSON.stringify(base64));
          this.fileData = base64File;
          var newStringVal = this.fileData.replace(/ /g, "");
          console.log("ios file fileData" +this.fileData);
          this.photos.push({'filename' : name, 'filestring': newStringVal, 'filetype': extension});
          console.log("file uri photos", this.photos);
        })
      });
    }
  }

  cancelNewMessage() {
    console.log("cancel new message");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  saveNewMessage() {
    console.log("send new message");
    // this.loader.show("Sending Private Message...");

    let sendMsgObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "photos": this.photos,
      "senders": this.userString,
      "headline": this.headline,
      "message": this.message
    }
    console.log("sendMsgObj", sendMsgObj);
    // if(sendMsgObj.headline == '' || sendMsgObj.headline == undefined || sendMsgObj.headline == null) {
    //   this.loader.hide();
    //   this.error = 'please enter headline';
    // } else if(sendMsgObj.message == '' || sendMsgObj.message == undefined || sendMsgObj.message == null) {
    //   this.loader.hide();
    //   this.error = 'please enter message';
    // } else {
    //   this.serviceProvider.addPrivateMessageApi(sendMsgObj).then(
    //     data => {
    //       console.log("addPrivateMessageApi data" +JSON.stringify(data))
    //       if(data["success"] == 0){
    //         this.loader.hide();
    //         this.error = data["message"];
    //       } else if(data["success"] == 1) {
    //         this.loader.hide();
    //         let alert = this.alertCtrl.create({
    //             title: <any>this.htmlProperty(),
    //             message: 'Your message was send successfully.',
    //             cssClass: 'checkAlertCss',
    //         });
    //         alert.present();
    //         setTimeout(()=>{
    //             alert.dismiss();
    //         }, 3000);
    //       } else if(data["success"] == 2) {
    //         this.loader.hide();
    //         this.error = data["message"];
    //       } else if (data["success"] == 4) {
    //         this.loader.hide();
    //         let alert = this.alertCtrl.create({
    //           subTitle:data["message"],
    //           cssClass: 'newsFeedAlertCss',
    //           buttons: [
    //             {
    //               text: 'OK',
    //               handler: () => {
    //                 this.navCtrl.push("LoginPage");
    //               }
    //             }
    //           ]
    //         });
    //         alert.present();

    //       } else {
    //         this.loader.hide();
    //         this.error = '';
    //       }
    //     },
    //     err => {
    //       this.loader.hide();
    //       console.log("this.error" +JSON.stringify(err))
    //     }
    //   );
    // }
  }

}
