import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Term } from './term';

@NgModule({
  declarations: [
    Term,
  ],
  imports: [
    IonicPageModule.forChild(Term),
  ],
  exports: [
    Term
  ]
})
export class TermModule {}
