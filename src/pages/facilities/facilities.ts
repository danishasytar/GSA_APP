import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeetingRoomPage } from '../meeting-room/meeting-room';
//import { FacilitiesPage } from '../facilities/facilities';
import { EscortPage } from '../escort/escort';
import { PopUpPage } from '../pop-up/pop-up';
import { PassengerListPage } from '../passenger-list/passenger-list';
import { FoodBeveragesPage } from '../food-beverages/food-beverages';
import { PassengerHandlingPage } from '../passenger-handling/passenger-handling';
import { ListOfFlightPage } from '../list-of-flight/list-of-flight';

@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html'
})
export class FacilitiesPage {

  constructor(public navCtrl: NavController) {
  }
  goToMeetingRoom(params){
    if (!params) params = {};
    this.navCtrl.push(MeetingRoomPage);
  }goToFacilities(params){
    if (!params) params = {};
    this.navCtrl.push(FacilitiesPage);
  }goToEscort(params){
    if (!params) params = {};
    this.navCtrl.push(EscortPage);
  }goToPopUp(params){
    if (!params) params = {};
    this.navCtrl.push(PopUpPage);
  }goToPassengerList(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerListPage);
  }goToFoodBeverages(params){
    if (!params) params = {};
    this.navCtrl.push(FoodBeveragesPage);
  }goToPassengerHandling(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerHandlingPage);
  }goToListOfFlight(params){
    if (!params) params = {};
    this.navCtrl.push(ListOfFlightPage);
  }
}
