import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Term } from '../term/term';
import { Login } from '../login/login';
import { Alerts } from '../alerts/alerts';
import { Audio } from '../audio/audio';
// import { SendEmailPage } from '../send-email/send-email';
import { Account } from '../account/account';
import { ContactUs } from '../contact-us/contact-us';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    goToScreen(status:string){
      switch(status){
        case 'home':
          break;
        case 'alert':
          this.navCtrl.setRoot(Alerts);
          break;
        case 'audio':
          this.navCtrl.setRoot(Audio);
          break;
        case 'send_email':
          // this.navCtrl.setRoot(SendEmailPage);
          break;
        case 'account_info':
          this.navCtrl.setRoot(Account);
          break;
        case 'contact_us':
          this.navCtrl.setRoot(ContactUs);
          break;
        case 'login':
          this.navCtrl.setRoot(Login);
          break;
      }
    }

}
