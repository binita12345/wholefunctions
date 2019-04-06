import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class Alert {
  alert: any;
  private _htmlProperty: string = "<span name=\"checkmark\" style=\"display:inline-block;font-family:Ionicons;color:#02EA25;font-size:40px;padding-top:15px;\" class=\"icon icon-md ion-md-checkmark\"></span>";
  constructor(private alertCtrl: AlertController, private _sanitizer: DomSanitizer) {
    console.log('Hello Alert Provider');
  }

  public htmlProperty() {
    return this._sanitizer.bypassSecurityTrustHtml(this._htmlProperty);
  }

  successAlert(message) {
    this.alert = this.alertCtrl.create({ 
      title: <any>this.htmlProperty(),
      subTitle: message,
      cssClass: 'newsFeedAlertCss',
      buttons: ['OK'] 
    });
    this.alert.present();
  }

  successAlertHide() {
    this.alert.dismiss();
  }

  errorAlert(message) {
    this.alert = this.alertCtrl.create({ 
      subTitle: message,
      cssClass: 'checkAlertCss',
      buttons: ['OK'] 
    });
    this.alert.present();
  }

  errorAlertHide() {
    this.alert.dismiss();
  }

}
