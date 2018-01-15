import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PassengerListPage } from '../pages/passenger-list/passenger-list';
import { PassengerHandlingPage } from '../pages/passenger-handling/passenger-handling';
import { ListOfFlightPage } from '../pages/list-of-flight/list-of-flight';
import { EscortPage } from '../pages/escort/escort';
import { PopUpPage } from '../pages/pop-up/pop-up';
import { FoodBeveragesPage } from '../pages/food-beverages/food-beverages';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { MeetingRoomPage } from '../pages/meeting-room/meeting-room';
import { PassengerDetailsPage } from '../pages/passenger-details/passenger-details';
import { LoginPage } from '../pages/login/login';

import { OneSignal } from '@ionic-native/onesignal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { HTTP} from '@ionic-native/http';
import { Device} from '@ionic-native/device';

@NgModule({
  declarations: [
    MyApp,
    PassengerListPage,
    PassengerHandlingPage,
    ListOfFlightPage,
    EscortPage,
    PopUpPage,
    FoodBeveragesPage,
    FacilitiesPage,
    MeetingRoomPage,
    PassengerDetailsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PassengerListPage,
    PassengerHandlingPage,
    ListOfFlightPage,
    EscortPage,
    PopUpPage,
    FoodBeveragesPage,
    FacilitiesPage,
    MeetingRoomPage,
    PassengerDetailsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    HTTP,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}