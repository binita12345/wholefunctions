import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
/**
 * Generated class for the CreateNewWishesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-new-wishes',
  templateUrl: 'create-new-wishes.html',
})
export class CreateNewWishesPage {
	private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private _sanitizer: DomSanitizer, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNewWishesPage');
  }

  cancelNewWishes() {
  	console.log("cancel new wishes");
    this.viewCtrl.dismiss();
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  createNewWish() {
    console.log("send new message");
    this.viewCtrl.dismiss();
    let alert = this.alertCtrl.create({
        title: <any>this.htmlProperty(),
        message: 'Your Wish created successfully.',
        cssClass: 'checkAlertCss',
    });
    alert.present();
    setTimeout(()=>{
        alert.dismiss();
    }, 2000);
    
  }

}
