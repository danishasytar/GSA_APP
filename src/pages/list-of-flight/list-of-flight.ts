import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PassengerListPage } from '../passenger-list/passenger-list';
import { EscortPage } from '../escort/escort';
import { PopUpPage } from '../pop-up/pop-up';
import { FoodBeveragesPage } from '../food-beverages/food-beverages';
import { PassengerHandlingPage } from '../passenger-handling/passenger-handling';
//import { ListOfFlightPage } from '../list-of-flight/list-of-flight';
import { FacilitiesPage } from '../facilities/facilities';
import { MeetingRoomPage } from '../meeting-room/meeting-room';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list-of-flight',
  templateUrl: 'list-of-flight.html'
})
export class ListOfFlightPage {
passenger;

  constructor(public navCtrl: NavController, private http: HttpClient ) {
  	this.getData();
  }
  goToPassengerList(params){
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

  getData(){
      
      var url = "https://unwilled-children.000webhostapp.com//api/passenger"
      this.http.get(url + '/api/passenger',{} )
           .subscribe(data => {
             console.log(data);
             this.passenger = data;
            
              
                          
            }, error => {
              console.log(error);})
          }
}
