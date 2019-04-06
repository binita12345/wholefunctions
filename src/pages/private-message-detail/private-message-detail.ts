import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64';
/**
 * Generated class for the PrivateMessageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-message-detail',
  templateUrl: 'private-message-detail.html',
})
export class PrivateMessageDetailPage {
	designationTitle: any;
  fullMessage: any;
  messageename: any;
  currentusername: any;
	currentuserdesign: any;
	saveFiles: any = [];
	getSplitbase64: any;
  extension: any;
	displayFile: any;
	fileData: any;
	filenameArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, private fileChooser: FileChooser, private filePicker: IOSFilePicker,
    private filePath: FilePath, private file: File, private base64: Base64, private alertCtrl: AlertController) {
  	this.designationTitle = 'Employee of the Month';
  	this.messageename = 'Ryan';
    this.fullMessage = 'Congratulation - you are nominated as Employee of the Month September.Therefore,you and all other nominees are invited for breakfast with our GM. \n Attached you can find your invitation.Please let me know if you can come.';
    this.currentusername = 'R. Perkins';
  	this.currentuserdesign = 'Head Waiter';

  	this.filenameArray = [{'File_Name': 'invitationEotM.pdf'}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateMessageDetailPage');
  }

  addImageORFile() {
  	console.log("add Image or file");
    if (this.plt.is('android')) {
      console.log("add files or image in android");

      this.fileChooser.open().then(uri => {
        console.log("file uri", uri);
        this.filePath.resolveNativePath(uri).then((filePathResult)=>{
          console.log("file filePathResult", filePathResult);
          var fileName = filePathResult.substr(filePathResult.lastIndexOf('/') + 1);
          console.log("android file fileName", fileName);

          this.displayFile = fileName;
          console.log("this.displayFile" +JSON.stringify(this.displayFile));
          this.filenameArray.push({'File_Name': this.displayFile})

          var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
          console.log("android file fileExtension", fileExtension);
          this.extension = fileExtension;

          let filePathurl : string = filePathResult;
          console.log("file uri filePathurl", filePathurl);

          this.base64.encodeFile(filePathurl).then((base64File: string) => {
            this.fileData = base64File;
            let splitbase64 = this.fileData.split(',');
            this.getSplitbase64 = splitbase64[1];
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
        this.filenameArray.push({'File_Name': currentName})
        this.file.readAsDataURL("file:///" + correctPath, currentName).then(result=>{                           
          console.log("ios file result", result);
        })
      });
    }
  }

  removeAttachedFile(file) {
  	console.log("remove attach file", file);
   	let alert = this.alertCtrl.create({
      title: 'Confirm delete selected file',
      message: 'Are you sure you want to permanently delete this file?',
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
              }
          }
      ]
    });
    alert.present();
  }

}
