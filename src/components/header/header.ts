import { Component, Input } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import moment from 'moment';
import { Storage } from "@ionic/storage";
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
	@Input() title: any;
  text: string;
  timeH: any;
  userId: any;
  sessionId: any;
  profilePic: any;
  constructor(public modalCtrl: ModalController, private storage: Storage, public navCtrl: NavController) {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';

    let todayDate = new Date();
    let time = moment(todayDate).format('hh:mm');
    // console.log('today default time is: ', time);
    this.timeH = time;
    this.storage.get("userData").then(userData => {
      // console.log("userData header", userData);
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.profilePic = userData.response.profile_picture;
    });
  }

  openProfileModal() {
    // console.log("open profile modal");
    // this.navCtrl.setRoot("LoginPage");
    let profileModal = this.modalCtrl.create("ProfileModalPage");
    profileModal.present();
    profileModal.onDidDismiss(data => {
      // console.log(data);
    });
  }

}
