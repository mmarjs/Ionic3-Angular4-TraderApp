import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Audio page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class Audio {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Audio');
  }

  gotoMainMenu(){
    this.navCtrl.setRoot(HomePage);
  }

}
