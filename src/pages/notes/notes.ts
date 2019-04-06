import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
import moment from 'moment';
/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
	note: any;
	NotesArray: any = [];
	archiveArray: any = [];
	ifCurrentSelected: boolean = true;
	ifArchiveSelected: boolean = false;
  userId: any;
  sessionId: any;
  error: any = '';
  noteStatus: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public serviceProvider: ServiceProvider,private alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
    this.storage.get("userData").then(userData => {
      console.log("userData notes", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.note = 'current';
      this.noteChange(this.note);
      this.currentNotes();
    });
  }

  noteChange(notename){
    console.log("noteChange notename", notename);
    if(notename == "current"){
      console.log("current");
      this.ifCurrentSelected = true;
      this.ifArchiveSelected = false;
      this.currentNotes();
    } else if(notename == "archive"){
      console.log("archive");
      this.ifCurrentSelected = false;
      this.ifArchiveSelected = true;
      this.archiveNotes();

    } else {}
  }

  currentNotes() {
    console.log("current notes");
    this.error = '';
    let currentNoteObj = {
      "user_id": this.userId,
      "session_id":this.sessionId
    }
    this.serviceProvider.currentNotesApi(currentNoteObj).then(data => {
      console.log("currentNotesApi" +JSON.stringify(data))
      if(data["success"] == 0){
        this.error = data["message"];
        this.NotesArray = [];
        this.archiveNotes();
      } else if(data["success"] == 1) {
        this.error = '';
        this.NotesArray = data["response"];
        this.archiveNotes();
      } else if(data["success"] == 2) {
        this.error = data["message"];
        this.archiveNotes();
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log("current notes session expired");
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });

  }

  archiveNotes() {
    console.log("archive notes");
    this.error = '';
    let archiveNoteObj = {
      "user_id": this.userId,
      "session_id":this.sessionId
    }
    this.serviceProvider.archiveNotesApi(archiveNoteObj).then(data => {
      console.log("archiveNotesApi" +JSON.stringify(data))
      if(data["success"] == 0){
        this.error = data["message"];
        this.archiveArray = [];
      } else if(data["success"] == 1) {
        this.error = '';
        this.archiveArray = data["response"];
      } else if(data["success"] == 2) {
        this.error = data["message"];
      } else if(data['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle: data["message"],
          cssClass: 'newsFeedAlertCss',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log("archive notes session expired");
                this.navCtrl.push("LoginPage");
              }
            }
          ]
        });
        alert.present();
      }else {
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });

  }

  editCurrentNotes(currentnote) {
    console.log("editCurrentNotes currentnote", currentnote);
    console.log("currentnote id", currentnote.id);
    this.navCtrl.push("CreateNewNotePage", {'noteid': currentnote.id, 'notemessage': currentnote.notes});
  }

  onNotesChanged(event){
    console.log("event", event.value);
    this.noteChange(event.value);
  }

  refreshNote(archive) {
  	console.log("refresh notes", archive);
    this.noteStatus = "restore";
    let deleteNoteObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "status": this.noteStatus,
      "note_id": archive.id
    }
    
    this.serviceProvider.deleteNotesApi(deleteNoteObj).then((result) => {
      console.log("result restore DeleteApi" +JSON.stringify(result));
      if(result['success'] == 4) {
        let alert = this.alertCtrl.create({
          subTitle:result["message"],
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
      } else if(result['success'] == 1) {
        this.archiveNotes();
        let toastSuccess = this.toastCtrl.create({
            message: result["message"],
            duration: 3000,
            position: 'top',
            showCloseButton:true,
            closeButtonText:'X',
            cssClass: "toast-success",
          });
          toastSuccess.present();

      } else if(result['success'] == 2) {
        this.error = result["message"];
      } else if(result['success'] == 0) {
        this.error = result["message"];
      } else {

      }
    }, (err) => {
      console.log("err restore notesListApi" +JSON.stringify(err));
      // Error log
    });

            
  }

  removeNote(note) {
  	console.log("remove notes", note);
    this.noteStatus = "remove";
    let deleteNoteObj = {
      "user_id": this.userId,
      "session_id":this.sessionId,
      "status": this.noteStatus,
      "note_id": note.id
    }

    let alert = this.alertCtrl.create({
      title: 'Confirm delete selected Note',
      message: 'Are you sure you want to delete this Note?',
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
              console.log("deleteNoteObj", deleteNoteObj);
              this.serviceProvider.deleteNotesApi(deleteNoteObj).then((result) => {
                console.log("result documentDeleteApi" +JSON.stringify(result));
                if(result['success'] == 4) {
                  let alert = this.alertCtrl.create({
                    subTitle:result["message"],
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
                } else if(result['success'] == 1) {
                  this.currentNotes();
                  let toastSuccess = this.toastCtrl.create({
                      message: result["message"],
                      duration: 3000,
                      position: 'top',
                      showCloseButton:true,
                      closeButtonText:'X',
                      cssClass: "toast-success",
                    });
                    toastSuccess.present();

                } else if(result['success'] == 2) {
                  this.error = result["message"];
                } else if(result['success'] == 0) {
                  this.error = result["message"];
                } else {

                }
              }, (err) => {
                console.log("err notesListApi" +JSON.stringify(err));
                // Error log
              });

            }
        }
      ]
    });
    alert.present();
  }

  newNote() {
  	console.log("new note");
  	this.navCtrl.push("CreateNewNotePage");
  }

}
