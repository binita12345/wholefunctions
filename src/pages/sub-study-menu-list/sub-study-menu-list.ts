import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubStudyMenuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-study-menu-list',
  templateUrl: 'sub-study-menu-list.html',
})
export class SubStudyMenuListPage {
	getmenu: any;
	substudyArray : any = [];
	substudyLists: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.getmenu = navParams.get('menuname');
  	console.log("this.getmenu", this.getmenu);

  	this.substudyArray = [{'image': 'assets/imgs/mydepartment/drink1.jpg', 'percent': '75', 'name': 'Chardonny', 'points': 90},
  	{'image': 'assets/imgs/mydepartment/drink2.jpg', 'percent': '90', 'name': 'Reisling', 'points': 85},
  	{'image': 'assets/imgs/mydepartment/drink3.jpg', 'percent': '100', 'name': 'Sauvignon Blanc', 'points': 120}];

  	this.substudyLists = this.substudyArray;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubStudyMenuListPage');
  }

  gotoBackMenu() {
    console.log("gotoBackMenu");
    this.navCtrl.push("StudyFNBPage", {'menuname': this.getmenu});
  }

  filterItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.substudyLists = this.substudyArray.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    } else if(val == ''){
      this.substudyLists = this.substudyArray;
    }
  }

  gotoMenuDetails(substudy) {
  	console.log("gotoMenuDetails", substudy);
  	this.navCtrl.push("StudyDetailPage", {'menuname': substudy.name})
  }

}
