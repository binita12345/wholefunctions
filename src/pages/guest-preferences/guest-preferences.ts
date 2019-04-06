import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
/**
 * Generated class for the GuestPreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest-preferences',
  templateUrl: 'guest-preferences.html',
})
export class GuestPreferencesPage {
	visible: boolean = false;
	showPreferences: boolean = false;
	guestPreferences: any = [];
	countClick: any = 0;
	addpreference: boolean = false;
	preferenceTexts: any;
	error: any = '';
	prefrns: any;
	preferencesLists: any;
	private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private _sanitizer: DomSanitizer) {
  	this.guestPreferences = [{'prefId': '#113', 'prefName': 'Nico Willis', 'fNb': [{'name': 'likes still water'}, {'name': 'needs a lot of ice cubes for soft drinks'}, 
  	{'name': 'prefers his steak med well'}, {'name': 'has a tomato alergy'}, {'name': 'heats raisins'}], 'nighthotel': '22', 'nightbrand': '34', 'arrival': '29/08/19',
  	'departure': '09/09/19', 'otherinfo': "wife's name: Laura", 'complaints': [{'name': 'slow service in Restaurant (05/2017)'},
  	{'name': 'late check-in (07/2018)'}, {'name': 'unitdy SPA area (08/2018)'}]},
  	{'prefId': '#114', 'prefName': 'Fabienne Reimann', 'fNb': [{'name': 'needs a lot of ice cubes for soft drinks'}, 
  	{'name': 'prefers his steak med well'}, {'name': 'has a tomato alergy'}, {'name': 'heats raisins'}], 'nighthotel': '22', 'nightbrand': '34', 'arrival': '29/08/19',
  	'departure': '09/09/19', 'otherinfo': "wife's name: Laura", 'complaints': [{'name': 'slow service in Restaurant (05/2017)'},
  	{'name': 'late check-in (07/2018)'}, {'name': 'unitdy SPA area (08/2018)'}]},
  	{'prefId': '#115', 'prefName': 'Nico Willis', 'fNb': [{'name': 'likes still water'}, {'name': 'needs a lot of ice cubes for soft drinks'}, 
  	{'name': 'prefers his steak med well'}, {'name': 'has a tomato alergy'}, {'name': 'heats raisins'}], 'nighthotel': '22', 'nightbrand': '34', 'arrival': '29/08/19',
  	'departure': '09/09/19', 'otherinfo': "wife's name: Laura", 'complaints': [{'name': 'slow service in Restaurant (05/2017)'},
  	{'name': 'late check-in (07/2018)'}, {'name': 'unitdy SPA area (08/2018)'}]}];

  	this.preferencesLists = this.guestPreferences;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPreferencesPage');
  }

  filterItems(ev: any) {
    // Reset items back to all of the items
    console.log("ev.target.value" ,ev.target.value);
    let val = ev.target.value;

    if (val && val.trim() != '') {
      console.log("guestPreferences" ,this.guestPreferences);
      this.preferencesLists = this.guestPreferences.filter((item) => {
        console.log("get items item...", item);
          return ((item.prefId.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.prefName.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });

    } else if(val == '' || val == undefined){
      this.preferencesLists = this.guestPreferences;
    }
  }

  toggle(index) {
  	console.log("toggle icon", index);
  	this.visible = !this.visible;
  	this.showPreferences = !this.showPreferences;
  }

  verifyPreference(fAndB) {
  	console.log("verify preference", fAndB);
  	this.countClick = this.countClick + 1;
	 	console.log("verify this.countClick", this.countClick);
  }

  addPreferences() {
  	console.log("add preference");
  	this.addpreference = true;
  }

  public onPreferencesChange(preference): void {
      console.log('preference', preference);
      this.prefrns = preference;
      console.log('this.prefrns', this.prefrns);
  }

  cancelNewPreference() {
    console.log("cancel new Preference");
    this.addpreference = false;
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

	addNewPreference() {
    console.log("send new Preference");
    console.log("this.preferenceTexts", this.preferenceTexts);
    console.log("this.prefrns", this.prefrns);
    if(this.prefrns == '' || this.prefrns == undefined || this.prefrns == null) {
			this.error = 'please select any area';
    } else if(this.preferenceTexts == '' || this.preferenceTexts == undefined || this.preferenceTexts == null) {
    	this.error = 'please enter your preference data';
    } else {
    	this.error = '';
    	this.addpreference = false;
	    let alert = this.alertCtrl.create({
	        title: <any>this.htmlProperty(),
          cssClass: 'checkAlertCss',
	        message: 'Your Preference has been add successfully.'
	    });
	    alert.present();
    }
  }

}
