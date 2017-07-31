import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Alerts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 import { HomePage } from '../home/home';
 import { AlertList } from '../alert-list/alert-list';
@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class Alerts {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alerts');
  }

  gotoMainMenu(){
    this.navCtrl.setRoot(HomePage);
  }

  goToScreen(status:string){
      switch(status){
        case 'audio':
          this.navCtrl.setRoot(AlertList);	
          break;
        case 'message':
          this.navCtrl.setRoot(AlertList);
          break;
        case 'offer':
          this.navCtrl.setRoot(AlertList);
          break;
      }
    }

}
