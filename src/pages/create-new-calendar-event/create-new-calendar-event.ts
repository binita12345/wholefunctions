import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Platform } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the CreateNewCalendarEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-calendar-event',
  templateUrl: 'create-new-calendar-event.html',
})
export class CreateNewCalendarEventPage {
	private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  userId: any;
  sessionId: any;
  startDate: any;
  startTime: any;
  endDate: any;
  endTime: any;
  headline: any;
  eventDesc: any;
  event: string = "personal";
  ifBusiness: boolean = true;
  ifPersonal: boolean = false;
  period: any;
  fileData: any;
  userLists: any = [];
  people: any;
  commaPeople: any;
  eventAsButton: any;
  error: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private _sanitizer: DomSanitizer, private alertCtrl: AlertController, 
    private storage: Storage, public serviceProvider: ServiceProvider, public plt: Platform, private fileChooser: FileChooser, private filePicker: IOSFilePicker, 
    private filePath: FilePath, private file: File, private base64: Base64, private loader: Loader) {
    this.eventAsButton = navParams.get("eventasbutton");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewCalendarEventPage');
    this.storage.get("userData").then(userData => {
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getPeopleList();
    });
  }

  cancelNewEvent() {
  	console.log("cancel new wishes");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  createBusiness() {
    console.log("create business");
    this.ifBusiness = false;
    this.ifPersonal = true;
    this.event = "business";
  }

  createPersonal() {
    console.log("create personal");
    this.ifBusiness = true;
    this.ifPersonal = false;
    this.event = "personal";
  }

  public onPeriodChange(period): void {
      console.log('period', period);
      this.period = period;
  }

  public onPeopleChange(people): void {
      console.log('people', people);
      this.people = people;
      console.log('this.people', this.people);
      var substr = this.people
      var commaList = '';

      var i;
      for (i = 0; i < substr.length; ++i) {
        commaList += ", " + substr[i];
      }
      this.commaPeople = commaList.substr(2, commaList.length);
      
      this.commaPeople = this.commaPeople.replace(/^[,\s]+|[,\s]+$/g, '');
      this.commaPeople = this.commaPeople.replace(/\s*,\s*/g, ',');
      console.log("commaPeople", this.commaPeople);
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

          let filePathurl : string = filePathResult;
          // console.log("file uri filePathurl", filePathurl);

          this.base64.encodeFile(filePathurl).then((base64File: string) => {
            // console.log("file uri base64File", base64File);
            this.fileData = base64File;
            console.log("this.fileData", this.fileData);
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
        
        this.file.readAsDataURL("file:///" + correctPath, currentName).then((base64File: string) =>{                           
          // console.log("ios file base64" +JSON.stringify(base64));
          this.fileData = base64File;
          
        })
      });
    }
  }

  getPeopleList() {
    let userListObj = {
      "user_id": this.userId,
      "session_id": this.sessionId
    }
    this.serviceProvider.userListApi(userListObj).then(data => {
        // console.log("userListApi data" +JSON.stringify(data));
        if (data["success"] == 0) {
            // this.alert.errorAlert(data["message"]);
        } else if (data["success"] == 1) {
            this.userLists = data["response"];
            // console.log("this.userLists", this.userLists);
        } else if (data["success"] == 2) {
            // this.error = data["message"];

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

  createNewEvent() {
    console.log("send new message");
    if(this.commaPeople == undefined) {
      this.commaPeople = '';
    }
    if(this.fileData == undefined) {
      this.fileData = '';
    }

    this.error = '';
    this.loader.show("Creating a new Event...");
    let newEventObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "start_date": this.startDate,
      "start_time": this.startTime,
      "end_date": this.endDate,
      "end_time": this.endTime,
      "event_type": this.event,
      "title": this.headline,
      "description": this.eventDesc,
      "event_periods": this.period,
      "invited_people": this.commaPeople,
      "document": this.fileData,
      "event_id": "",
      "event_as": this.eventAsButton
    }
    console.log("newEventObj", newEventObj);
    if(newEventObj.start_date == undefined) {
      this.loader.hide();
      this.error = 'please enter start date';
    } else if(newEventObj.end_date == undefined) {
      this.loader.hide();
      this.error = 'please enter end date';
    } else if(newEventObj.start_time == undefined) {
      this.loader.hide();
      this.error = 'please enter start time';
    } else if(newEventObj.end_time == undefined) {
      this.loader.hide();
      this.error = 'please enter end time';
    } else if(newEventObj.title == '' || newEventObj.title == undefined || newEventObj.title == null) {
      this.loader.hide();
      this.error = 'please enter event title';
    } else if(newEventObj.description == '' || newEventObj.description == undefined || newEventObj.description == null) {
      this.loader.hide();
      this.error = 'please enter event title';
    } else if(newEventObj.event_type == '' || newEventObj.event_type == undefined || newEventObj.event_type == null) {
      this.loader.hide();
      this.error = 'please select event type';
    } else if(newEventObj.event_periods == '' || newEventObj.event_periods == undefined || newEventObj.event_periods == null) {
      this.loader.hide();
      this.error = 'please select event period';
    } else {
      this.error = '';
      this.serviceProvider.addEventApi(newEventObj).then(data => {
        console.log("addEventApi" +JSON.stringify(data));
        if(data["success"] == 0){
          this.loader.hide();
          // this.noRecord = true;
          // this.error = data["message"];
        } else if(data["success"] == 1) {
          this.loader.hide();
          // this.viewCtrl.dismiss();
          let alert = this.alertCtrl.create({
              title: <any>this.htmlProperty(),
              message: 'Your Event created successfully.',
              cssClass: 'checkAlertCss',
          });
          alert.present();
          setTimeout(()=>{
              alert.dismiss();
              this.viewCtrl.dismiss();
          }, 2000);
        } else if(data["success"] == 2) {
          this.loader.hide();
          // this.noRecord = false;
          // this.error = data["message"];
        } else if(data['success'] == 4) {
          this.loader.hide();
          // this.error = '';
          // this.noRecord = false;
          let alert = this.alertCtrl.create({
            subTitle: data["message"],
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
        }else {
          this.loader.hide();
          this.error = '';
        }
      },
      err => {
        console.log("this.error" +JSON.stringify(err))
      });
    }
    
    
  }

}
