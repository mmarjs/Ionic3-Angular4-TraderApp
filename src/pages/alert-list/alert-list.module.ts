import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertList } from './alert-list';

@NgModule({
  declarations: [
    AlertList,
  ],
  imports: [
    IonicPageModule.forChild(AlertList),
  ],
  exports: [
    AlertList
  ]
})
export class AlertListModule {}
