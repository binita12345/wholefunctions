import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Generated class for the StudyTestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-tests',
  templateUrl: 'study-tests.html',
})
export class StudyTestsPage {
	getmenu: any;
	isFirstQuestion: boolean = true;
	isSecondQuestion: boolean = false;
	isThirdQuestion: boolean = false;
	isForthQuestion: boolean = false;
	isFifthQuestion: boolean = false;
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private _sanitizer: DomSanitizer, private alertCtrl: AlertController) {
  	this.getmenu = navParams.get('menuname');
  	console.log("this.getmenu", this.getmenu);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyTestsPage');
  }

  cancelTest() {
  	console.log("cancel test");
  	this.viewCtrl.dismiss();
  }

  previosQuestion1() {
  	console.log("previous question1");
  	this.isFirstQuestion = true;
  	this.isSecondQuestion = false;
  	this.isThirdQuestion = false;
  	this.isForthQuestion = false;
  	this.isFifthQuestion = false;
  }
  previosQuestion2() {
  	console.log("previous question1");
  	this.isFirstQuestion = false;
  	this.isSecondQuestion = true;
  	this.isThirdQuestion = false;
  	this.isForthQuestion = false;
  	this.isFifthQuestion = false;
  }
  previosQuestion3() {
  	console.log("previous question1");
  	this.isFirstQuestion = false;
  	this.isSecondQuestion = false;
  	this.isThirdQuestion = true;
  	this.isForthQuestion = false;
  	this.isFifthQuestion = false;
  }
  previosQuestion4() {
  	console.log("previous question1");
  	this.isFirstQuestion = false;
  	this.isSecondQuestion = false;
  	this.isThirdQuestion = false;
  	this.isForthQuestion = true;
  	this.isFifthQuestion = false;
  }

  nextToSecondQuestion() {
  	console.log("next screen to second question");
  	this.isFirstQuestion = false;
  	this.isSecondQuestion = true;
  	this.isThirdQuestion = false;
  	this.isForthQuestion = false;
  	this.isFifthQuestion = false;
  }
	nextToThirdQuestion() {
		console.log("next screen to Third question");
		this.isFirstQuestion = false;
  	this.isSecondQuestion = false;
  	this.isThirdQuestion = true;
  	this.isForthQuestion = false;
  	this.isFifthQuestion = false;
	}
	nextToForthQuestion() {
		console.log("next screen to Forth question");
		this.isFirstQuestion = false;
  	this.isSecondQuestion = false;
  	this.isThirdQuestion = false;
  	this.isForthQuestion = true;
  	this.isFifthQuestion = false;
	}
	nextToFifthQuestion() {
		console.log("next screen to Fifth question");
		this.isFirstQuestion = false;
  	this.isSecondQuestion = false;
  	this.isThirdQuestion = false;
  	this.isForthQuestion = false;
  	this.isFifthQuestion = true;
	}

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }
	nextToDownloadCertificate() {
		console.log("next screen to DownloadCertificate");
		this.isFirstQuestion = false;
  	this.isSecondQuestion = false;
  	this.isThirdQuestion = false;
  	this.isForthQuestion = false;
  	this.isFifthQuestion = true;

    let alert = this.alertCtrl.create({
      title: <any>this.htmlProperty(),
      subTitle: 'You finished all the tests for Sauvignon Blanc.',
      cssClass: 'certificateAlertCss',
      buttons: [
        {
          text: 'DOWNLOAD CERTIFICATION',
          handler: () => {
            console.log('ok clicked');
            this.navCtrl.push("StudyCertificatePage", {'menuname': this.getmenu});
          }
        }
      ]
    });
    alert.present();
	}

}
