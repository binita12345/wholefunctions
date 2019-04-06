import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
	public forgotPasswordForm:FormGroup;
  error : any = '';
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public serviceProvider: ServiceProvider, private loader: Loader,
    public alertCtrl: AlertController) {
  	this.forgotPasswordForm = formBuilder.group({  
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  onChange(ev){
    console.log("ev", ev);
    if(this.forgotPasswordForm.value.email.length > -1){
      this.error = '';
    }
  }

  goBack() {
    console.log("go back");
    this.navCtrl.push("LoginPage");
  }

  forgotPassword() {
  	console.log("forgot password");
  	this.error = '';
    this.loader.show('Please Wait');
    let frgtPwdObj = {
      'email' : this.forgotPasswordForm.value.email
    }

    if(this.forgotPasswordForm.value.email.length > 0){
      this.error = '';
      this.serviceProvider.forgotPasswordApi(frgtPwdObj).then(
        data => {
          console.log("ts forgot data" +JSON.stringify(data))
          if(data["success"] == 0){
            this.loader.hide();
            let alert = this.alertCtrl.create({
              title: 'Congratulations!',
              subTitle: data["message"],
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    console.log('ok clicked');
                    this.navCtrl.push("LoginPage");
                  }
                }
              ]
            });
            alert.present();
          } else if(data["success"] == 1) {
            this.loader.hide();
            let alert = this.alertCtrl.create({
              title: 'Congratulations!',
              subTitle: data["message"],
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    console.log('ok clicked');
                    this.navCtrl.push("LoginPage");
                  }
                }
              ]
            });
            alert.present();
          } else if(data["success"] == 2) {
            this.loader.hide();
            this.error = data["message"];
          } else {
            this.loader.hide();
            this.error = '';
          }
        },
        err => {
          this.loader.hide();
          console.log("this.error" +JSON.stringify(err))
        }
      );
    } else {
      this.error = 'please enter your valid email address';
    }
    
  }
}
