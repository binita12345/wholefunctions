import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the AllocationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allocation-list',
  templateUrl: 'allocation-list.html',
})
export class AllocationListPage {
	setDate: any;
	employeesArray: any =[];
  staticAlloc: any = [];
  userId: any;
  sessionId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, private alertCtrl: AlertController, private storage: Storage, 
    public serviceProvider: ServiceProvider) {
  	var dateNtime = moment();
  	console.log("dateNtime", dateNtime);
  	this.setDate = moment(dateNtime).format('DD/MM/YYYY');
  	console.log("this.setDate", this.setDate);
  }

  showDatePicker() {
    console.log("show date");
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(date => {
      console.log('Got date: ', date);
      var selectedDate = date;
      console.log("selectedDate", selectedDate);
      this.setDate = moment(selectedDate).format('DD/MM/YYYY');
  		console.log("this.setDate", this.setDate);
      
    }), ((err) => {
      console.log('Error occurred while getting date: ', err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllocationListPage');
    this.storage.get("userData").then(userData => {
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      this.getAllocationList();
    });
  }

  getAllocationList() {
    console.log("get allocation list");
    let allocListObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
    }
    this.serviceProvider.allocationListApi(allocListObj).then(data => {
      console.log("allocationListApi" +JSON.stringify(data));
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        this.employeesArray = data["response"].tabledata;
        this.staticAlloc = data["response"].normaldata;
      } else if(data["success"] == 2) {
        // this.error = data["message"];
      } else if(data['success'] == 4) {
        // this.error = '';
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
