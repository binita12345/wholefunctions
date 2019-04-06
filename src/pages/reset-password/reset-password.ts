import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public changePasswordForm:FormGroup;
	error : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
  	this.changePasswordForm = formBuilder.group({  
        oldpassword: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        newpassword: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        confirmpassword: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  onChange(ev){
    console.log("ev", ev);
    if(this.changePasswordForm.value.newpassword != this.changePasswordForm.value.confirmpassword) {
      this.error = "Password Mismatch, Please enter the same Password as above.";
    } else {
    	this.error = '';
    }
  }

  changePassword() {
  	console.log("change password");
  	this.error = '';
  	if (this.changePasswordForm.value.oldpassword == '') {
      this.error = "Please enter your old password";
    } else if (this.changePasswordForm.value.newpassword == '') {
      this.error = "Please enter New Password";
    } else {
    	this.error = '';
    	if(this.changePasswordForm.value.newpassword != this.changePasswordForm.value.confirmpassword) {
	      this.error = "Password Mismatch, Please enter the same Password as above.";
	    }else {
	    	this.error = '';
	    	this.navCtrl.push("LoginPage");
	    }
    }
  }

}
