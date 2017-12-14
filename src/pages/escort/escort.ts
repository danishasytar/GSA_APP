import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopUpPage } from '../pop-up/pop-up';
import { PassengerListPage } from '../passenger-list/passenger-list';
//import { EscortPage } from '../escort/escort';
import { FoodBeveragesPage } from '../food-beverages/food-beverages';
import { PassengerHandlingPage } from '../passenger-handling/passenger-handling';
import { ListOfFlightPage } from '../list-of-flight/list-of-flight';
import { FacilitiesPage } from '../facilities/facilities';
import { MeetingRoomPage } from '../meeting-room/meeting-room';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-escort',
  templateUrl: 'escort.html'
})
export class EscortPage {


  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {
  }

  presentAlert1() {
  let alert = this.alertCtrl.create({
    title: 'Passenger Details',
    subTitle: 'Renaka Ramachandran D0080',
    buttons: ['Confirm']
  });
  alert.present();

}
 
presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Escort',
    message: 'Escort Status',
    buttons: [
      {
        text: 'Decline',
        role: 'cancel',
        handler: () => {
          console.log('Decline clicked');
          this.navCtrl.push(PassengerListPage, {})
        }
      },
      {
        text: 'Start',
        handler: () => {
          console.log('Start clicked');
        }
      }
    ]
  });
  alert.present();



}
  goToPopUp(params){
    if (!params) params = {};
    this.navCtrl.push(PopUpPage);
  }goToPassengerList(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerListPage);
  }goToEscort(params){
    if (!params) params = {};
    this.navCtrl.push(EscortPage);
  }goToFoodBeverages(params){
    if (!params) params = {};
    this.navCtrl.push(FoodBeveragesPage);
  }goToPassengerHandling(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerHandlingPage);
  }goToListOfFlight(params){
    if (!params) params = {};
    this.navCtrl.push(ListOfFlightPage);
  }goToFacilities(params){
    if (!params) params = {};
    this.navCtrl.push(FacilitiesPage);
  }goToMeetingRoom(params){
    if (!params) params = {};
    this.navCtrl.push(MeetingRoomPage);
  }

}



