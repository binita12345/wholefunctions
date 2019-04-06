import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';
import { Base64 } from '@ionic-native/base64';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from "@ionic/storage";
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the CreateNewsfeedEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-newsfeed-entry',
  templateUrl: 'create-newsfeed-entry.html',
})
export class CreateNewsfeedEntryPage {
	checkboxes: any = [];
	ifIndividual: boolean = true;
	ifDepartment: boolean = false;
  getSplitbase64: any;
  extension: any;
  displayFile: any;
  fileData: any;
  userId: any;
  sessionId: any;
  message: any;
  department: any = '0';
  group: any = '1';
  headline: any;
  pin: any;
  important: any;
  disable_comment: any;
  post: string = "individual";
  photos: any = [];
  error: any = '';
  departments: any;
  groups: any;
  extensions: any = [];
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, private fileChooser: FileChooser, private filePicker: IOSFilePicker,
  	private chooser: Chooser, private filePath: FilePath, private file: File, private base64: Base64, public viewCtrl: ViewController,private alertCtrl: AlertController, 
    private _sanitizer: DomSanitizer, public serviceProvider: ServiceProvider, private storage: Storage, private loader: Loader) {
  	this.checkboxes = [{'val': 'Pin', 'isChecked': false}, {'val': 'Important', 'isChecked': false}, {'val': 'disable comments', 'isChecked': false}];
  	console.log("this.checkboxes", this.checkboxes);
    this.storage.get("userData").then(userData => {
      console.log("newsfeed entry userData", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getDepartments(this.userId, this.sessionId);
      this.getGroups(this.userId, this.sessionId);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewsfeedEntryPage');

  }

  getDepartments(userId, sessionId) {
    console.log("getAllDepartments");
    let allDepObj = {
      "user_id": userId,
      "session_id": sessionId
    }

    this.serviceProvider.allDepartmentApi(allDepObj).then(data => {
      console.log("allDepartmentApi" +JSON.stringify(data))
      if(data["success"] == 0){
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.departments = data["response"];
      } else if(data["success"] == 2) {
        this.error = data["message"];
      } else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  getGroups(userId, sessionId) {
    console.log("getGroups");
    let allGroupObj = {
      "user_id": userId,
      "session_id": sessionId
    }

    this.serviceProvider.allGroupsApi(allGroupObj).then(data => {
      console.log("allGroupsApi" +JSON.stringify(data))
      if(data["success"] == 0){
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.groups = data["response"];
      } else if(data["success"] == 2) {
        this.error = data["message"];
      } else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  createIndividual() {
  	console.log("create individual");
  	this.ifIndividual = false;
    this.ifDepartment = true;
    this.post = "department";
  }

  createDepartment() {
  	console.log("create department");
  	this.ifIndividual = true;
    this.ifDepartment = false;
    this.post = "individual";
  }

  addImageORFileToEntry() {
  	console.log("addImageORFileToEntry");

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

  public onDepartmentChange(department): void {
      console.log('department', department);
  }

  public onGroupChange(group): void {
      console.log('group', group);
  }

  cancelNewEntry() {
    console.log("cancel new entry");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  postNewEntry() {
    console.log("post new entry");
    this.loader.show("Creating Newsfeed Entry...");
    // console.log("this.checkboxes", this.checkboxes);
    for(let i in this.checkboxes) {
      // console.log("this.checkboxes[i]", this.checkboxes[i]);
      if(this.checkboxes[0].isChecked == true){
        this.pin = 1;
      } else {
        this.pin = 0;
      }
      // console.log("this.pin", this.pin);
      if(this.checkboxes[1].isChecked == true){
        this.important = 1;
      } else {
        this.important = 0;
      }
      // console.log("this.important", this.important);
      if(this.checkboxes[2].isChecked == true){
        this.disable_comment = 1;
      } else {
        this.disable_comment = 0;
      }
      // console.log("this.disable_comment", this.disable_comment);
    }

    let addNewsfeedObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "photos": this.photos,
      "message": this.message,
      "department": this.department,
      "group": this.group,
      "headline": this.headline,
      "pin": this.pin,
      "important": this.important,
      "disable_comment": this.disable_comment,
      "post_as": this.post
    }
    console.log("addNewsfeedObj", addNewsfeedObj);
    
    if(addNewsfeedObj.department == '' || addNewsfeedObj.department == undefined || addNewsfeedObj.department == null) {
      this.loader.hide();
      this.error = 'please select any department';
    } else if(addNewsfeedObj.group == '' || addNewsfeedObj.group == undefined || addNewsfeedObj.group == null) {
      this.loader.hide();
      this.error = 'please select any group';
    } else if(addNewsfeedObj.headline == '' || addNewsfeedObj.headline == undefined || addNewsfeedObj.headline == null) {
      this.loader.hide();
      this.error = 'please enter headline';
    } else if(addNewsfeedObj.message == '' || addNewsfeedObj.message == undefined || addNewsfeedObj.message == null) {
      this.loader.hide();
      this.error = 'please enter message';
    } else if(addNewsfeedObj.post_as == '' || addNewsfeedObj.post_as == undefined || addNewsfeedObj.post_as == null) {
      this.loader.hide();
      this.error = 'please select post';
    } else {
      this.serviceProvider.createNewsfeedApi(addNewsfeedObj).then(
        data => {
          console.log("createNewsfeedApi data" +JSON.stringify(data))
          if(data["success"] == 0){
            this.loader.hide();
            this.error = data["message"];
          } else if(data["success"] == 1) {
            this.loader.hide();
            let alert = this.alertCtrl.create({
              title: <any>this.htmlProperty(),
              subTitle: 'You created an entry.',
              message: 'Tap on a post for a detail view.',
              cssClass: 'newsFeedAlertCss',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.navCtrl.push("NewsFeedPage");
                  }
                }
              ]
            });
            alert.present();
            setTimeout(()=>{
                alert.dismiss();
            }, 4000);
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
        }
      );
    }
  }

}
