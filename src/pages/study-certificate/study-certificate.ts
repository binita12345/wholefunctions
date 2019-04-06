import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudyCertificatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-certificate',
  templateUrl: 'study-certificate.html',
})
export class StudyCertificatePage {
	getmenu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.getmenu = navParams.get('menuname');
  	console.log("this.getmenu", this.getmenu);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyCertificatePage');
  }

  closeTest() {
  	console.log("close test");
  	this.navCtrl.push("StudyDetailPage", {'menuname': this.getmenu});
  }

}
