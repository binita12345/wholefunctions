import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the MyDepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-department',
  templateUrl: 'my-department.html',
})
export class MyDepartmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDepartmentPage');
  }

  toFandB() {
  	console.log("f and b section");
  	this.navCtrl.push("FAndBPage");
  }

  toRequisition() {
  	console.log("toRequisition section");
  	this.navCtrl.push("RequisitionPage");
  }

  toGuestPreferences() {
  	console.log("toGuestPreferences section");
  	this.navCtrl.push("GuestPreferencesPage");
  }

  toBreakage() {
  	console.log("toBreakage section");
  	this.navCtrl.push("BreakagePage");
  }

  toAllocationList() {
  	console.log("toAllocationList section");
  	this.navCtrl.push("AllocationListPage");
  }

  toCleaningPlan() {
  	console.log("toCleaningPlan section");
  	this.navCtrl.push("CleaningPlanPage");
  }

}
