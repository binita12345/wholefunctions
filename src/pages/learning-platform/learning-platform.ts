import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LearningPlatformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning-platform',
  templateUrl: 'learning-platform.html',
})
export class LearningPlatformPage {
	learningplt: any;
	ifStudySelected: boolean = true;
	ifChallengesSelected: boolean = false;
	ifHCPointsSelected: boolean = false;
	platforms: any = [];
	platformLists: any;
	platformName: any;
  ifAllcurrent: boolean = true;
  ifAttending: boolean = false;
  allCurrentChallenges: any = [];
  challengeLists: any;
  attend: boolean = false;
  detailLists: any = [];
  coupanLists: any = [];
  coupanFnb: any = [];
  coupanSpa: any = [];
  coupanOthers: any = [];
  certiLists: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  	this.learningplt = 'study';
    this.learningpltChange(this.learningplt);
    this.platforms = [{'image': 'assets/imgs/mydepartment/fnb.jpg', 'name': 'F & B'},
    {'image': 'assets/imgs/mydepartment/housekeep.jpg', 'name': 'Houskeeping'},
    {'image': 'assets/imgs/mydepartment/frontoffice.jpg', 'name': 'Front Office'},
    {'image': 'assets/imgs/mydepartment/spa.jpg', 'name': 'SPA'},
    {'image': 'assets/imgs/mydepartment/general.jpg', 'name': 'General'},
    {'image': 'assets/imgs/mydepartment/it.jpg', 'name': 'IT'},
    {'image': 'assets/imgs/mydepartment/maintenance.jpg', 'name': 'Maintenance'}];

    this.platformLists = this.platforms;

    this.allCurrentChallenges = [{'chalId': '#1', 'chalName': 'Most 4 courses', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
    'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.'},
    {'chalId': '#2', 'chalName': 'Most 4 courses', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
    'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.'},
    {'chalId': '#3', 'chalName': 'Most 4 courses', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
    'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.'},
    {'chalId': '#4', 'chalName': 'Guest Preferences', 'by': 'Kitchen', 'duration': '3 weeks', 'points': '100',
    'particcpants': '4', 'description': 'The person who sells most 4 courses will get 100 HC Points.'}];

    this.challengeLists = this.allCurrentChallenges;

    this.detailLists = [{'name': 'Challenges', 'points': '480'}, {'name': 'TripAdvisor comments', 'points': '90'}, {'name': 'Extra Mile', 'points': '50'},
    {'name': 'Promotion', 'points': '150'}, {'name': 'Birthday', 'points': '100'}, {'name': 'Employee of the Month', 'points': '400'}];

    this.coupanLists = [{'fnb': [{'name': 'Cocktail', 'points': '100'}, {'name': '50 F&B voucher', 'points': '250'}, {'name': 'Wine Bottle <300', 'points': '300'},
    {'name': '4-Course Menu', 'points': '400'}, {'name': 'Champagne', 'points': '500'}]}, 
    {'spa': [{'name': 'Nail Polishing', 'points': '150'}, {'name': 'Eyebrow Plucking', 'points': '150'}, {'name': 'Neck Massage', 'points': '250'},
    {'name': 'Foot Massage', 'points': '250'}, {'name': 'Hot Stone Massage', 'points': '450'}, {'name': 'Fully Body Massage', 'points': '500'}]},
    {'others': [{'name': 'Hotel Cup', 'points': '50'}, {'name': 'Bathrobe', 'points': '100'}, {'name': 'Hotel Branded Umbrella', 'points': '100'},
    {'name': 'Bus Sightseeing Tour', 'points': '300'}, {'name': 'Free Night', 'points': '1000'}, {'name': 'Free Night for Family', 'points': '1500'}]}];

    this.certiLists = [{'certification': 'Red Wines', 'score': '93%', 'date': '17/09/2019'}, {'certification': 'Cheese', 'score': '89%', 'date': '30/08/2019'},
    {'certification': 'Telephone', 'score': '100%', 'date': '27/05/2019'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPlatformPage');
  }

  getAllcurrentChallenge() {
    this.ifAttending = true;
    this.ifAllcurrent = false;
  }

  getAttendingChallenge() {
    this.ifAttending = false;
    this.ifAllcurrent = true;
  }

  learningpltChange(learnPlt){
    if(learnPlt == "study"){
      console.log("study");
      this.ifStudySelected = true;
      this.ifChallengesSelected = false;
      this.ifHCPointsSelected = false;

    } else if(learnPlt == "challenges"){
      console.log("challenges");
      this.ifStudySelected = false;
      this.ifChallengesSelected = true;
      this.ifHCPointsSelected = false;

    } else if(learnPlt == "hcpoints"){
      console.log("hcpoints");
      this.ifStudySelected = false;
      this.ifChallengesSelected = false;
      this.ifHCPointsSelected = true;

    } else {}
  }

  onLearningPltChanged(event){
    console.log("event", event.value);
    this.learningpltChange(event.value);
  }

  filterItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.platformLists = this.platforms.filter((item) => {
          return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });
    } else if(val == ''){
      this.platformLists = this.platforms;
    }
  }

  toGotoPlatform(platform) {
  	console.log("toGotoPlatform", platform);
  	this.platformName = platform.name;
  	if(this.platformName == 'F & B') {
  		console.log("ifff");
  		this.navCtrl.push("StudyFNBPage");
  	} else {
  		console.log("else");
  	}
  }

  attendCurrentChallenge(currentChal) {
    console.log("attendCurrentChallenge", currentChal);
    this.attend = !this.attend;
    console.log("attendCurrentChallenge this.attend", this.attend);
  }

  stopAttendenceChallenge(currentChal) {
    console.log("stopAttendenceChallenge", currentChal);
    this.attend = !this.attend;
  }

  createChallenges() {
    console.log("createChallenges");
    this.navCtrl.push("CreateNewChallengePage");
  }

  deleteCurrentChallenge() {
    console.log("deleteCurrentChallenge");
    let alert = this.alertCtrl.create({
      title: 'Confirm delete selected Challenge',
      cssClass: 'breakageAlertCss',
      message: 'Are you sure you want to permanently delete this Challenge?',
      buttons: [
        {
            text: 'No',
            handler: () => {
                console.log('Cancel clicked');
            }
        },
        {
            text: 'Yes',
            handler: () => {
              console.log('ok clicked');
            }
        }
      ]
    });
    alert.present();
  }

}
