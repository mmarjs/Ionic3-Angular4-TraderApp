import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Audio } from './audio';

@NgModule({
  declarations: [
    Audio,
  ],
  imports: [
    IonicPageModule.forChild(Audio),
  ],
  exports: [
    Audio
  ]
})
export class AudioModule {}
