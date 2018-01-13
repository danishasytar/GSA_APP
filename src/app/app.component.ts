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

import { OneSignal } from '@ionic-native/onesignal';



import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(public oneSignal:OneSignal, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();




            if(platform.is('mobileweb')){
                console.log('on web')
            }
            else if(platform.is('android')){
                console.log('on android')
                this.initOneSignal();
            }
            else if(platform.is('ios')){
                console.log('on ios')
                this.initOneSignal();
            }
    });
  }








    initOneSignal(){
        this.oneSignal.startInit('b1cecf36-34a5-41e1-8727-d2ebfb477838', '849649430702');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
         // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        this.oneSignal.getIds().then(res=>{
            window.localStorage.setItem('player_id', res.userId)
            console.log(window.localStorage.getItem('player_id'));
        })

        this.oneSignal.endInit();
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
