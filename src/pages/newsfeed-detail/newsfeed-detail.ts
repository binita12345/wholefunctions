import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform, AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64';
import { Storage } from "@ionic/storage";
import { Loader } from "../../providers/loader/loader";
import { ServiceProvider } from '../../providers/service/service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the NewsfeedDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed-detail',
  templateUrl: 'newsfeed-detail.html',
})
export class NewsfeedDetailPage {
	userComments: any = [];
	currentusername: any;
	currentuserdesign: any;
	ifusercomments: boolean = false;
  title: any;
  slideImages: any = [];
  @ViewChild('slides') slides: Slides;
  designationTitle: any;
  fullMessage: any;
  getSplitbase64: any;
  extension: any;
  displayFile: any;
  fileData: any;
  postid: any;
  userId: any;
  sessionId: any;
  error: any = '';
  detail: any;
  disableComment: any;
  filenameArray: any = [];
  attachments: any = [];
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, private fileChooser: FileChooser, private filePicker: IOSFilePicker,
    private filePath: FilePath, private file: File, private base64: Base64, private storage: Storage, private loader: Loader, public serviceProvider: ServiceProvider,
    private alertCtrl: AlertController) {
  	
    this.title = navParams.get('title');
    this.postid = navParams.get('post_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsfeedDetailPage');
    this.storage.get("userData").then(userData => {
      // console.log("newsfeed entry userData", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.newsfeedDetail(this.userId, this.sessionId);
      this.getUserListOncomment();
    });
  }

  newsfeedDetail(userId, sessionId) {
    console.log("newsfeed detail");
    let nfdetail = {
      "user_id": userId,
      "session_id": sessionId,
      "post_id": this.postid
    }
    this.serviceProvider.singlefeedApi(nfdetail).then(data => {

        console.log("displayNewsfeedApi data" +JSON.stringify(data));

        if (data["success"] == 0) {
            this.loader.hide();
            this.error = data["message"];

            // this.alert.errorAlert(data["message"]);
        } else if (data["success"] == 1) {
            this.loader.hide();
            this.detail = data["response"];
            console.log("newsfeed this.detail" +JSON.stringify(this.detail));
            this.attachments = this.detail.photos; 
            for(let i in this.attachments) {
              console.log("this.attachments[i]", this.attachments[i]);
              console.log("this.attachments[i].file type", this.attachments[i].file_type);
              let filetype = this.attachments[i].file_type;
              var fileName = this.attachments[i].file_name.substr(this.attachments[i].file_name.lastIndexOf('/') + 1);
              console.log("file fileName", fileName);
              var newVal = fileName.substring(12, fileName.length);
              console.log("file newVal", newVal);
              if(filetype == "odt" || filetype == "pdf" || filetype == "xlsx" || filetype == "txt" || filetype == "docx") {
                this.filenameArray.push({'File_Name': newVal, 'File_Url': this.attachments[i].file_name});
                console.log("file this.filenameArray", this.filenameArray);
              } else if(filetype == "jpg" || filetype == "png" || filetype == "jpeg" || filetype == "mp4") {
                this.slideImages.push({'File_Name': this.attachments[i].file_name, 'File_Extension': filetype});
                console.log("newsfeed this.slideImages" +JSON.stringify(this.slideImages));
              } else{}
            }
            
            this.designationTitle = this.detail.current_position;
            this.fullMessage = this.detail.description;
            this.disableComment = this.detail.disable_comment;
             //  this.title = navParams.get('title');

        } else if (data["success"] == 2) {
            this.loader.hide();
            this.error = data["message"];
            // this.alert.errorAlert(data["message"]);

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
        }
    }, err => {
        // this.loader.hide();
        console.log("err", err)
    });
  }

  createComment() {
  	console.log("create comment");
  	this.ifusercomments = true;
  }

  cancelComment() {
  	console.log("cancel comment");
  	this.ifusercomments = false;
  }

  addImageToComment() {
  	console.log("add Image To comment");
    if (this.plt.is('android')) {
      // console.log("add files or image in android");

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
            // console.log("add files in android this.getSplitbase64", this.getSplitbase64);
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
        console.log("ios file uri" +uri);
        let correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
        console.log("ios file correctPath", correctPath);
        let currentName = uri.substring(uri.lastIndexOf('/') + 1);
        console.log("ios file currentName", currentName);
        this.file.readAsDataURL("file:///" + correctPath, currentName).then(result=>{                           
          console.log("ios file result", result);
        })
      });
    }
  }

  postComment() {
  	console.log("post comment");
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  getUserListOncomment() {
    let userListObj = {
      "user_id": this.userId,
      "session_id": this.sessionId
    }
    this.serviceProvider.userListApi(userListObj).then(data => {

        console.log("userListApi data" +JSON.stringify(data));

        if (data["success"] == 0) {
            // this.loader.hide();
            this.error = data["message"];

            // this.alert.errorAlert(data["message"]);
        } else if (data["success"] == 1) {
            // this.loader.hide();
            this.userComments = data["response"];
            console.log("this.userComments", this.userComments);
        } else if (data["success"] == 2) {
            // this.loader.hide();
            this.error = data["message"];
            // this.alert.errorAlert(data["message"]);

        } else if (data["success"] == 4) {
            // this.loader.hide();
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
          // this.loader.hide();
        }
    }, err => {
        // this.loader.hide();
        console.log("err", err)
    });
  }

  openfilesinbrowser(file) {
    console.log("open files", file);
    let URL = file.File_Url;
    let browserInst = new InAppBrowser();
    let browser = browserInst.create(URL, '_system', this.options)
  }

}
