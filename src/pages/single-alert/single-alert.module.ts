import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleAlert } from './single-alert';

@NgModule({
  declarations: [
    SingleAlert,
  ],
  imports: [
    IonicPageModule.forChild(SingleAlert),
  ],
  exports: [
    SingleAlert
  ]
})
export class SingleAlertModule {}
