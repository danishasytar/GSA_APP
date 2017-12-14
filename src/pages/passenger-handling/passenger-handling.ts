import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListOfFlightPage } from '../list-of-flight/list-of-flight';
import { PassengerListPage } from '../passenger-list/passenger-list';
import { EscortPage } from '../escort/escort';
import { PopUpPage } from '../pop-up/pop-up';
import { FoodBeveragesPage } from '../food-beverages/food-beverages';
//import { PassengerHandlingPage } from '../passenger-handling/passenger-handling';
import { FacilitiesPage } from '../facilities/facilities';
import { MeetingRoomPage } from '../meeting-room/meeting-room';

@Component({
  selector: 'page-passenger-handling',
  templateUrl: 'passenger-handling.html'
})
export class PassengerHandlingPage {

  constructor(public navCtrl: NavController) {
  }
  goToListOfFlight(params){
    if (!params) params = {};
    this.navCtrl.push(ListOfFlightPage);
  }goToPassengerList(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerListPage);
  }goToEscort(params){
    if (!params) params = {};
    this.navCtrl.push(EscortPage);
  }goToPopUp(params){
    if (!params) params = {};
    this.navCtrl.push(PopUpPage);
  }goToFoodBeverages(params){
    if (!params) params = {};
    this.navCtrl.push(FoodBeveragesPage);
  }goToPassengerHandling(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerHandlingPage);
  }goToFacilities(params){
    if (!params) params = {};
    this.navCtrl.push(FacilitiesPage);
  }goToMeetingRoom(params){
    if (!params) params = {};
    this.navCtrl.push(MeetingRoomPage);
  }
}
