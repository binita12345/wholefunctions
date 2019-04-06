import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the DutyRosterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duty-roster',
  templateUrl: 'duty-roster.html',
})
export class DutyRosterPage {
	employeesArray: any =[];
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, public modalCtrl: ModalController) {

  	this.employeesArray = [{'name': 'Arias, Carla', 'td1': '05:30', 'td2': '05:30', 'td3': '', 'td4': '', 'td5': '07:30', 'td6': '07:00', 'td7': '06:00'},
  	{'name': 'Carten, Sean', 'td1': '07:00', 'td2': '07:00', 'td3': '05:30', 'td4': '05:30', 'td5': '', 'td6': '', 'td7': '07:30'},
  	{'name': 'Cullen, Danniella', 'td1': '08:00', 'td2': '', 'td3': '', 'td4': '08:00', 'td5': '08:00', 'td6': '08:00', 'td7': '08:00'},
  	{'name': 'Dikson, Ashlee', 'td1': '08:00', 'td2': '08:00', 'td3': '08:00', 'td4': '', 'td5': '', 'td6': '08:00', 'td7': '08:00'},
  	{'name': 'Ho, Yusef', 'td1': '', 'td2': '', 'td3': '', 'td4': '', 'td5': '', 'td6': '', 'td7': ''},
  	{'name': 'Marta, Rebecca', 'td1': '15:00', 'td2': '15:00', 'td3': '15:00', 'td4': '15:00', 'td5': '15:00', 'td6': '', 'td7': ''},
  	{'name': 'Oliver, Minnie', 'td1': '17:00', 'td2': '17:00', 'td3': '17:00', 'td4': '', 'td5': '', 'td6': '17:00', 'td7': '17:00'},
  	{'name': 'Perkins, Ryan', 'td1': '17:00', 'td2': '15:00', 'td3': '15:00', 'td4': 'GT', 'td5': 'GT', 'td6': '', 'td7': ''},
  	{'name': 'Schafer, Kim', 'td1': '17:00', 'td2': '', 'td3': '17:00', 'td4': '15:00', 'td5': '17:00', 'td6': '15:00', 'td7': ''}];

  	var currentDate = moment();
		var weekStart = currentDate.clone().startOf('day');
		var days = [];
		for (var i = 0; i <= 6; i++) {
		  this.days = moment(weekStart).add(i, 'days').format("DD.MM.YY");
		  console.log("this.days...1", this.days)
		  this.weekDays.push({'day': this.days});
		}
		console.log("this.weekDays...1", this.weekDays);
		var arr = this.weekDays;
		this.arr = arr.filter((e, i) => i==0 || i==arr.length-1);
		this.startDate = this.arr[0].day;
		this.endDate = this.arr[1].day;

		for (let i in this.weekDays) {
		  this.daySplit = this.weekDays[i].day.split('.');
		  this.mergeDay = this.daySplit[0] + '.' + this.daySplit[1];
		  this.mergeDays.push({'day': this.mergeDay});
		}
		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DutyRosterPage');
  }

  convertDate(date) {
  	var weekStart = moment(date).clone().startOf('day');
		var days = [];
		this.weekDays = [];
		for (var i = 0; i <= 6; i++) {
		  this.days = moment(weekStart).add(i, 'days').format("DD.MM.YY");
		  this.weekDays.push({'day': this.days});
		}
		var arr = this.weekDays;
		this.arr = arr.filter((e, i) => i==0 || i==arr.length-1);
		this.startDate = this.arr[0].day;
		this.endDate = this.arr[1].day;
		this.mergeDays = [];
		for (let i in this.weekDays) {
		  this.daySplit = this.weekDays[i].day.split('.');
		  this.mergeDay = this.daySplit[0] + '.' + this.daySplit[1];
		  this.mergeDays.push({'day': this.mergeDay});
		}
  }

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {
      console.log('Got date: ', date);
      var selectedDate = date;
	  	this.convertDate(selectedDate);
    }), ((err) => {
      console.log('Error occurred while getting date: ', err);
    });
  }

  decreaseDay() {
 		var now=moment(this.startDate, 'DD.MM.YY');
 		this.dates = moment(now).subtract(1, 'days');
		var decreasedDate = this.dates;
  	this.convertDate(decreasedDate);
  }

  increaseDay() {
		var now=moment(this.startDate, 'DD.MM.YY');
		this.dates = moment(now).add(1, 'days');
   	var increasedDate = this.dates;
  	this.convertDate(increasedDate);
  }

  createWishesDutyRoster() {
  	this.navCtrl.push("CreateNewWishesPage");
  }

  employeeProfile(employee) {
  	console.log("employee", employee);
  	let employeeModal = this.modalCtrl.create("DutyRosterEmployeeProfilePage",{}, {showBackdrop:true, enableBackdropDismiss: true});
    employeeModal.present();
    employeeModal.onDidDismiss(data => {
      console.log(data);
    });
  }

}
