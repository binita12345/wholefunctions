import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the CreateNewNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-note',
  templateUrl: 'create-new-note.html',
})
export class CreateNewNotePage {
	noteMessage: any;
	userId: any;
  sessionId: any;
  error: any = '';
  noteId: any;
	private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private _sanitizer: DomSanitizer, private alertCtrl: AlertController,
    private storage: Storage, public serviceProvider: ServiceProvider, private loader: Loader) {
    this.noteId = navParams.get('noteid');
    console.log("this.noteId", this.noteId);
    this.noteMessage = navParams.get('notemessage');
    console.log("this.noteMessage", this.noteMessage);
    if(this.noteId == undefined || this.noteId == null || this.noteId == '') {
      this.noteId = '';
    }
    this.storage.get("userData").then(userData => {
      console.log("userData notes", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewNotePage');
  }

  cancelNewNote() {
  	console.log("cancel new wishes");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  saveNewNote() {
    console.log("send new message");
    this.loader.show("Creating a new note...");
    let addnoteObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "message": this.noteMessage,
      "note_id": this.noteId
    }
    console.log("addnoteObj", addnoteObj);
    if(this.noteMessage == '' || this.noteMessage == undefined || this.noteMessage == null) {
      this.loader.hide();
			this.error = 'please give message to new note.';
    } else {
    	this.error = '';

      this.serviceProvider.addNotesApi(addnoteObj).then(data => {
        console.log("currentNotesApi" +JSON.stringify(data))
        if(data["success"] == 0){
          this.loader.hide();
          this.error = data["message"];
        } else if(data["success"] == 1) {
          this.loader.hide();
          this.error = '';
          let alert = this.alertCtrl.create({
            title: <any>this.htmlProperty(),
            subTitle: 'Your Note Added successfully.',
            cssClass: 'newsFeedAlertCss',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  this.navCtrl.push("NotesPage");
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
        console.log("this.error" +JSON.stringify(err))
      });
    }
  }

}
