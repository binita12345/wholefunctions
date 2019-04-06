import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Calendar } from '@ionic-native/calendar';
import { Base64 } from '@ionic-native/base64';
import { DatePicker } from '@ionic-native/date-picker';
import moment from 'moment';
import { Storage } from "@ionic/storage";
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  getdate: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;
  eventLists: any = [];
  displayFile: any;
  fileData: any;
  getSplitbase64: any;
  extension: any;
  getMonthYear: any;
  mergeName: any; 
  eventAsButton = "normal";
  userId: any;
  sessionId: any;
  formattedMonth: any;
  monthlyEventList: any;
  montheventList: any;
  startdaydate: any;
  enddaydate: any;
  selectedMonthEvent: any = [];
  norecords: boolean = false;
  eventDate: any;
  eventImg: boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, public plt: Platform, private fileChooser: FileChooser, 
    private filePicker: IOSFilePicker, private filePath: FilePath, private file: File, private base64: Base64, private datePicker: DatePicker, 
    private alertCtrl: AlertController, private storage: Storage, public serviceProvider: ServiceProvider) {
    // this.eventLists = [{'startEvent': '17:00', 'endEvent': '08:00', 'eventName': 'Beverage Inventory', 'description': ''},
    // {'startEvent': '14:00', 'endEvent': '14:30', 'eventName': 'Meeting Mr. Dow', 'description': 'talk about latest report'},
    // {'startEvent': '16:00', 'endEvent': '16:40', 'eventName': 'Requisition', 'description': ''},
    // {'startEvent': '18:00', 'endEvent': '04:00', 'eventName': 'Wedding', 'description': ''}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.storage.get("userData").then(userData => {
      this.userId = userData.response.user_id;
      this.sessionId = userData.response.sessionId;
      
      this.getdate = new Date();
      this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      this.getDaysOfMonth();
      this.getEventLists();
    });
  }
  
  getEventLists() {
    console.log("event lists");
    let eventListObj = {
      "user_id": this.userId,
      "session_id": this.sessionId,
      "month": this.currentMonth,
      "year": this.currentYear
    }
    console.log("eventListObj", eventListObj);
    this.serviceProvider.eventListApi(eventListObj).then(data => {
      console.log("eventListApi" +JSON.stringify(data));
      if(data["success"] == 0){
        // this.error = data["message"];
      } else if(data["success"] == 1) {
        this.eventLists = data["response"];
        console.log("this.eventLists", this.eventLists);
        console.log("this.daysInThisMonth j array", this.daysInThisMonth);

        for(let i in this.eventLists) {
          this.monthlyEventList = this.eventLists[i].events;
          console.log("this.monthlyEventList.....12..1.", this.monthlyEventList);
          // if(this.monthlyEventList.length >= 1) {
          //     this.eventImg = true;
          //     console.log("this.eventImg ifff", this.eventImg);
          //   } else {
          //     this.eventImg = false;
          //     console.log("this.eventImg else", this.eventImg);
          //   }
          this.eventDate = this.eventLists[i].date;
          console.log("this.eventDate", this.eventDate);
          // for(let day of this.daysInThisMonth) {
          //   console.log("day", day);
          this.daysInThisMonth.push({'eventdate': this.eventDate})
          // }
          console.log("this.monthlyEventList", this.monthlyEventList);
          if(this.startdaydate == this.eventDate || this.enddaydate == this.eventDate) {
            // console.log("this.monthlyEventList", this.monthlyEventList);
            this.selectedMonthEvent = this.monthlyEventList;
          }
        }


            
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

   getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    // console.log("this.daysInThisMonth", this.daysInThisMonth);
    this.daysInLastMonth = new Array();
    // console.log("this.daysInLastMonth", this.daysInLastMonth);
    this.daysInNextMonth = new Array();
    // console.log("this.daysInNextMonth", this.daysInNextMonth);

    this.currentMonth = this.monthNames[this.getdate.getMonth()];
    console.log("this.currentMonth", this.currentMonth);
    this.currentYear = this.getdate.getFullYear();
    console.log("this.currentYear", this.currentYear);

    if(this.getdate.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
      console.log("this.currentDate", this.currentDate);
    } else {
      this.currentDate = 999;
      // console.log("this.currentDate", this.currentDate);
    }

    var firstDayThisMonth = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 1).getDay();
    // console.log("firstDayThisMonth", firstDayThisMonth);

    var prevNumOfDays = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 0).getDate();
    // console.log("prevNumOfDays", prevNumOfDays);

    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
      // console.log("this.daysInLastMonth arry", this.daysInLastMonth);
    }

    var thisNumOfDays = new Date(this.getdate.getFullYear(), this.getdate.getMonth()+1, 0).getDate();
    // console.log("thisNumOfDays", thisNumOfDays);

    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
      
    }

    var lastDayThisMonth = new Date(this.getdate.getFullYear(), this.getdate.getMonth()+1, 0).getDay();
    // console.log("lastDayThisMonth", lastDayThisMonth);
    // var nextNumOfDays = new Date(this.getdate.getFullYear(), this.getdate.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
      // console.log("this.daysInNextMonth", this.daysInNextMonth);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    // console.log("totalDays", totalDays);

    var thisDate1 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+this.currentDate+" 00:00:00";
    this.startdaydate = moment(thisDate1).format('YYYY-MM-DD');
    console.log("this.startdaydate selected date", this.startdaydate);
    var thisDate2 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+this.currentDate+" 23:59:59";
    this.enddaydate = moment(thisDate2).format('YYYY-MM-DD');
    console.log("this.enddaydate selected date", this.enddaydate);

    this.getEventLists();
  }

  goToLastMonth() {
    this.getdate = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.getdate = new Date(this.getdate.getFullYear(), this.getdate.getMonth()+2, 0);
    this.getDaysOfMonth();
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
      // this.convertDate(selectedDate);
      this.getMonthYear = moment(selectedDate).format('LL');
      console.log("this.getMonthYear", this.getMonthYear);
      let splitMonth = this.getMonthYear.split(', ');
      let getyearName = splitMonth[1];
      let nameSplit = splitMonth[0].split(' ');
      this.currentMonth = nameSplit[0];
      console.log("this.currentMonth", this.currentMonth);
      this.currentYear = getyearName;
      console.log("this.currentYear", this.currentYear);
      
      this.getdate = new Date(this.currentYear, this.currentMonth);
      this.getDaysOfMonth();
      
    }), ((err) => {
      console.log('Error occurred while getting date: ', err);
    });
  }

  addEvent() {
    this.navCtrl.push("CreateNewCalendarEventPage", {'eventasbutton': this.eventAsButton});
  }

  editEvent() {
    this.navCtrl.push("CreateNewCalendarEventPage");
  }

  // loadEventThisMonth() {
  //   this.eventList = new Array();
  //   var startDate = new Date(this.getdate.getFullYear(), this.getdate.getMonth(), 1);
  //   var endDate = new Date(this.getdate.getFullYear(), this.getdate.getMonth()+1, 0);
  //   this.calendar.listEventsInRange(startDate, endDate).then(
  //     (msg) => {
  //       msg.forEach(item => {
  //         this.eventList.push(item);
  //       });
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // checkEvent(day) {
  //   var hasEvent = false;
  //   var thisDate1 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+day+" 00:00:00";
  //   var thisDate2 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+day+" 23:59:59";
  //   this.eventList.forEach(event => {
  //     if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
  //       hasEvent = true;
  //     }
  //   });
  //   return hasEvent;
  // }

  selectDate(day) {
    this.isSelected = false;
    // this.selectedEvent = new Array();
    // console.log("this.selectedEvent", this.selectedEvent);
    var thisDate1 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+day+" 00:00:00";
    this.startdaydate = moment(thisDate1).format('YYYY-MM-DD');
    console.log("this.startdaydate selected date", this.startdaydate);
    var thisDate2 = this.getdate.getFullYear()+"-"+(this.getdate.getMonth()+1)+"-"+day+" 23:59:59";
    this.enddaydate = moment(thisDate2).format('YYYY-MM-DD');
    console.log("this.enddaydate selected date", this.enddaydate);

    let currentMonth = (this.getdate.getMonth()+1);
    this.currentMonth = moment(currentMonth, 'MM').format('MMMM');
    console.log("this.currentMonth", this.currentMonth);
    this.currentYear = this.getdate.getFullYear();
    console.log("this.currentYear", this.currentYear);

    this.getEventLists();
    // this.eventList.forEach(event => {
    //   console.log("event selected date", event);
    //   if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
    //     this.isSelected = true;
    //     this.selectedEvent.push(event);
    //   }
    // });
  }

  openBEO() {
    console.log("open BEo");
    if (this.plt.is('android')) {
      console.log("add files or image in android");

      this.fileChooser.open().then(uri => {
        console.log("file uri", uri);
        this.filePath.resolveNativePath(uri).then((filePathResult)=>{
          console.log("file filePathResult", filePathResult);
          var fileName = filePathResult.substr(filePathResult.lastIndexOf('/') + 1);
          console.log("android file fileName", fileName);

          this.displayFile = fileName;
          console.log("this.displayFile" +JSON.stringify(this.displayFile));


          var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
          console.log("android file fileExtension", fileExtension);
          this.extension = fileExtension;

          let filePathurl : string = filePathResult;
          console.log("file uri filePathurl", filePathurl);

          this.base64.encodeFile(filePathurl).then((base64File: string) => {
            console.log("file uri base64File", base64File);
            this.fileData = base64File;
            console.log("file uri this.fileData", this.fileData);

            let splitbase64 = this.fileData.split(',');
            console.log("add files in android splitbase64", splitbase64[1]);
            this.getSplitbase64 = splitbase64[1];
            console.log("add files in android this.getSplitbase64", this.getSplitbase64);
          }, (err) => {
            console.log(err);
          });
        });
      }).catch(err => {
        console.log('Error', err);
      });
    } else if (this.plt.is('ios')) {
      console.log("add files or image in ios");
      this.filePicker.pickFile().then(uri => {
        console.log("ios file uri" +uri);
        let correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
        console.log("ios file correctPath", correctPath);
        let currentName = uri.substring(uri.lastIndexOf('/') + 1);
        console.log("ios file currentName", currentName);
        this.file.readAsDataURL("file:///" + correctPath, currentName).then(result=>{                           
          console.log("ios file result", result);
        })
      });
    }
  }

  trainingEvent() {
    this.eventAsButton = "training";
  }

}
