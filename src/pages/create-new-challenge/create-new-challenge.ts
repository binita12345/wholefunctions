import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Generated class for the CreateNewChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-challenge',
  templateUrl: 'create-new-challenge.html',
})
export class CreateNewChallengePage {
	title: any;
	description: any;
	points: any;
	duration: any;
  error: any = '';
	private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private alertCtrl: AlertController, 
  	private _sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewChallengePage');
  }

  public onDurationChange(duration): void {
      console.log('duration', duration);
  }
	cancelNewChallenge() {
    console.log("cancelNewLost");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  createNewChallenge() {
    console.log("send new message");
    if(this.title == '' || this.title == undefined || this.title == null) {
			this.error = 'please enter challenge title';
    } else if(this.description == '' || this.description == undefined || this.description == null) {
			this.error = 'please enter challenge description';
    } else if(this.points == '' || this.points == undefined || this.points == null) {
			this.error = 'please enter challenge points';
    } else if(this.duration == '' || this.duration == undefined || this.duration == null) {
			this.error = 'please select duration';
    } else {
    	this.error = '';
	    let alert = this.alertCtrl.create({
	    	title: <any>this.htmlProperty(),
		    subTitle: 'You created a new challenge',
		    cssClass: 'newsFeedAlertCss',
		  });
		  alert.present();
		  setTimeout(()=>{
	        alert.dismiss();
	    }, 2000);
    }
  }

}
