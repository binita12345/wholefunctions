import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the CleaningPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cleaning-plan',
  templateUrl: 'cleaning-plan.html',
})
export class CleaningPlanPage {
	cleaning: any;
	cleaningArray: any = [];
	ifRestaurantSelected: boolean = true;
	ifBarSelected: boolean = false;
	days: any;
	weekDays: any =[];
	mergeDays: any =[];
	arr: any = [];
	startDate: any;
	endDate: any;
	daySplit: any;
	mergeDay: any;
	oneMinusDay: any;
	onePlusDay: any;
	dates: any;
	dayName: any;
  userId: any;
  sessionId: any;

  weeknumber: any;
  year: any;
  weekstart: any;
  noRecord: boolean = false;
  error: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, private alertCtrl: AlertController, private storage: Storage, 
    public serviceProvider: ServiceProvider) {
  	this.cleaning = 'restaurant';
    this.cleaningChange(this.cleaning);
   
    var elm = document.createElement('input')
    elm.type = 'week'
    elm.valueAsDate = new Date()
    var week = elm.value.split('W').pop()
    this.weeknumber = week;
    var currentYear = new Date().getFullYear();

    this.year = currentYear;
    var current = new Date();     // get current date    
    var weekstart = current.getDate() - current.getDay() +1;    
    this.weekstart = weekstart;
    var weekend = weekstart + 6;       // end day is the first day + 6 
    var monday = new Date(current.setDate(weekstart));  
    var sunday = new Date(current.setDate(weekend));
  	
		for (var i = 0; i <= 6; i++) {
		  this.days = moment(monday).add(i, 'days').format("MM/DD/YY");
		  this.dayName = moment(this.days).format('dddd');
		  this.weekDays.push({'day': this.days, 'name': this.dayName});
		}
		var arr = this.weekDays;
		this.arr = arr.filter((e, i) => i==0 || i==arr.length-1);
		this.startDate = this.arr[0].day;
		this.endDate = this.arr[1].day;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningPlanPage');
    this.storage.get("userData").then(userData => {
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.cleaningPlanData();
    });
  }

  cleaningPlanData() {
    console.log("cleaning plan data");
    let cleanPlanObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "week": this.weeknumber,
      "year": this.year
    }
    this.serviceProvider.displayCleaningPlanApi(cleanPlanObj).then(data => {
      console.log("displayCleaningPlanApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.noRecord = true;
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.noRecord = false;
        this.error = '';
        this.cleaningArray = data["response"];
      } else if(data["success"] == 2) {
        this.noRecord = false;
        this.error = data["message"];
      } else if(data['success'] == 4) {
        this.error = '';
        this.noRecord = false;
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
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

  convertDate(date) {
    var current = new Date(date);     // get current date   
    var weekstart = current.getDate() - current.getDay() +1;    
    this.weekstart = weekstart;
    var weekend = weekstart + 6;       // end day is the first day + 6 
    var monday = new Date(current.setDate(weekstart));  
    var sunday = new Date(current.setDate(weekend));
    this.weekDays = [];
    for (var i = 0; i <= 6; i++) {
      this.days = moment(monday).add(i, 'days').format("MM/DD/YY");
      this.dayName = moment(this.days).format('dddd');
      this.weekDays.push({'day': this.days, 'name': this.dayName});
    }
    var arr = this.weekDays;
    this.arr = arr.filter((e, i) => i==0 || i==arr.length-1);
    this.startDate = this.arr[0].day;
    this.endDate = this.arr[1].day;
  }

  decreaseDay() {
    if(this.weeknumber >= 1) {
      this.weeknumber = this.weeknumber-1;
    }
 		var now=moment(this.startDate, 'MM/DD/YY');
 		this.dates = moment(now).subtract(7, 'days');
		var decreasedDate = this.dates;
  	this.convertDate(decreasedDate);
    this.cleaningPlanData();
  }

  increaseDay() {
    if(this.weeknumber <= 52) {
      this.weeknumber = ++this.weeknumber;
    }
    
    console.log("this.weeknumber", this.weeknumber);
		var now=moment(this.startDate, 'MM/DD/YY');
		this.dates = moment(now).add(7, 'days');
   	var increasedDate = this.dates;
  	this.convertDate(increasedDate);
    this.cleaningPlanData();
  }

  cleaningChange(cleaningname){
    if(cleaningname == "restaurant"){
      this.ifRestaurantSelected = true;
      this.ifBarSelected = false;

    } else if(cleaningname == "bar"){
      this.ifRestaurantSelected = false;
      this.ifBarSelected = true;

    } else {}
  }

  onCleaningChanged(event){
    console.log("event", event.value);
    this.cleaningChange(event.value);
  }

  updateCleaningStatus(cleaning) {
    console.log("update grey cleaning plan status", cleaning);
    let updateCleanStatusObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "item_id": cleaning.id
    }
    this.serviceProvider.updateCleaningPlanApi(updateCleanStatusObj).then(data => {
      // console.log("updateCleaningPlanApi" +JSON.stringify(data));
      if(data["success"] == 0){
        this.noRecord = true;
        this.error = data["message"];
      } else if(data["success"] == 1) {
        this.noRecord = false;
        this.error = '';
        this.cleaningArray = data["response"];
      } else if(data["success"] == 2) {
        this.noRecord = false;
        this.error = data["message"];
      } else if(data['success'] == 4) {
        this.error = '';
        this.noRecord = false;
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
      }
    },
    err => {
      console.log("this.error" +JSON.stringify(err))
    });
  }

}
