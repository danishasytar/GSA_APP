import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PassengerHandlingPage } from '../passenger-handling/passenger-handling';
import { ListOfFlightPage } from '../list-of-flight/list-of-flight';
import { PassengerListPage } from '../passenger-list/passenger-list';
import { EscortPage } from '../escort/escort';
import { PopUpPage } from '../pop-up/pop-up';
import { FoodBeveragesPage } from '../food-beverages/food-beverages';
import { FacilitiesPage } from '../facilities/facilities';
import { MeetingRoomPage } from '../meeting-room/meeting-room';
import { HttpClient } from '@angular/common/http';
import { MenuController, LoadingController, AlertController } from 'ionic-angular';
//import { BaseurlProvider } from './../../providers/baseurl/baseurl';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
gsa = "";
flights;
gsaname;
flightnumber;

   constructor(public navCtrl: NavController, private http: HttpClient, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }
  goToPassengerHandling(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerHandlingPage);
  }goToListOfFlight(params){
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
  }goToFacilities(params){
    if (!params) params = {};
    this.navCtrl.push(FacilitiesPage);
  }goToMeetingRoom(params){
    if (!params) params = {};
    this.navCtrl.push(MeetingRoomPage);
  }


  // login(){
    
  //   if(this.gsa.toUpperCase() == "marfaranizah" ){
  //     this.navCtrl.setRoot(PassengerHandlingPage);
  //     window.localStorage.setItem('gsa', this.gsa);
  //   }
  //   else if (this.gsa.toUpperCase()== "nadhira") {
  //       this.navCtrl.setRoot(PassengerHandlingPage);
  //       console.log(this.gsa) 
  //            window.localStorage.setItem('gsa', this.gsa);  
  //   }
  //    else if (this.gsa.toUpperCase()== "rabiatul") {
  //       this.navCtrl.setRoot(PassengerHandlingPage);
  //       console.log(this.gsa) 
  //            window.localStorage.setItem('gsa', this.gsa);  
  //    }
  //   else{
  //     let alert = this.alertCtrl.create({
  //   title: 'Wrong Password',
  //   subTitle: 'Please Try Again',
  //   buttons: ['Dismiss']
  // });
  // alert.present();
  //   }
     

      //     login(){
        
      //   var flag = false
      //   for(var i=0;i<this.gsaname.length;i++){
      //     if(this.flightnumber.toUpperCase() == this.flights[i].flight_code){
      //       console.log("found")
      //       window.localStorage.setItem('flight_number', this.flightnumber.toUpperCase());
      //       this.navCtrl.setRoot(HomePage);
      //       flag = true;
      //       break;
      //     }
      //   }

      //   if(!flag) {
      //       let alert = this.alertCtrl.create({
      //         title: 'Flight Number Not Found',
      //         buttons: ['Dismiss']
      //       });
      //       alert.present();
      //   }
      // }

      login(){

         this.navCtrl.setRoot(PassengerHandlingPage);
    
         // if(this.flightnumber.toUpperCase() == "MH127" ){
         // this.navCtrl.setRoot(PassengerHandlingPage);
         // window.localStorage.setItem('flightnumber', this.flightnumber);
         // }
         // else if (this.flightnumber.toUpperCase()== "MH4") {
         // this.navCtrl.setRoot(PassengerHandlingPage);
         // console.log(this.flightnumber) 
         // window.localStorage.setItem('flightnumber', this.flightnumber);  
         // }
         // else{
         // let alert = this.alertCtrl.create({
         // title: 'Wrong Password  ',
         // subTitle: 'Please Try Again',
         // buttons: ['Dismiss']
         // });
         // alert.present();
         // }
     
     }
  }

