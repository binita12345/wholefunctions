import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StudyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-detail',
  templateUrl: 'study-detail.html',
})
export class StudyDetailPage {
	getmenu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.getmenu = navParams.get('menuname');
  	console.log("this.getmenu", this.getmenu);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyDetailPage');
  }

  gotoBackMenu() {
    console.log("gotoBackMenu");
    this.navCtrl.push("SubStudyMenuListPage", {'menuname': this.getmenu});
  }

  takeTest(menu) {
  	console.log("take test", menu);
  	this.navCtrl.push("StudyTestsPage", {'menuname': menu});
  }

}
