import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Term } from '../pages/term/term';
import { Alerts } from '../pages/alerts/alerts';
import { AlertList } from '../pages/alert-list/alert-list';
import { Audio } from '../pages/audio/audio';
import { Account } from '../pages/account/account';
import { ContactUs } from '../pages/contact-us/contact-us';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Term,
    Alerts,
    AlertList,
    Audio,
    Account,
    ContactUs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Term,
    Alerts,
    AlertList,
    Audio,
    Account,
    ContactUs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
