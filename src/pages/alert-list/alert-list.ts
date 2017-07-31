import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlertList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 import { Alerts } from '../alerts/alerts';
@IonicPage() 
@Component({
  selector: 'page-alert-list',
  templateUrl: 'alert-list.html',
})
export class AlertList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertList');
  }

  gotoBack(){
    this.navCtrl.setRoot(Alerts);
  }


}
