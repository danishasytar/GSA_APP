import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PassengerListPage } from '../pages/passenger-list/passenger-list';
import { EscortPage } from '../pages/escort/escort';
import { PopUpPage } from '../pages/pop-up/pop-up';
import { FoodBeveragesPage } from '../pages/food-beverages/food-beverages';
import { PassengerHandlingPage } from '../pages/passenger-handling/passenger-handling';
import { ListOfFlightPage } from '../pages/list-of-flight/list-of-flight';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { MeetingRoomPage } from '../pages/meeting-room/meeting-room';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPassengerList(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PassengerListPage);
  }goToEscort(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EscortPage);
  }goToPopUp(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PopUpPage);
  }goToFoodBeverages(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FoodBeveragesPage);
  }goToPassengerHandling(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PassengerHandlingPage);
  }goToListOfFlight(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListOfFlightPage);
  }goToFacilities(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FacilitiesPage);
  }goToMeetingRoom(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MeetingRoomPage);
  }
}
