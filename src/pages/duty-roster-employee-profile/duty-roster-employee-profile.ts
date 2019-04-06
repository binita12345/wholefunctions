import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DutyRosterEmployeeProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duty-roster-employee-profile',
  templateUrl: 'duty-roster-employee-profile.html',
})
export class DutyRosterEmployeeProfilePage {

	lastname: any;
	firstname: any;
	birthdate: any;
	position: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.lastname = 'Perkins'
		this.firstname = 'Ryan'
		this.birthdate = '05.04.1987'
		this.position = 'Head Writer'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DutyRosterEmployeeProfilePage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
