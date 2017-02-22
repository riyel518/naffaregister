import {Component, NgModule, Input} from '@angular/core';
import {RegistrationFee} from './fees.model';
import {AttendeeGuest } from './guest.model'
import {ConferenceAttendee} from './attendee.model'


@Component({
  selector: 'my-app',
  providers: [RegistrationFee],
  templateUrl: './rform.component.html',
  styleUrls: ['./mycss.component.css']
  
  
 

})
export class AppComponent  {  

galaselect:boolean;
cfee:boolean;
vendorselect:boolean;
sfee:boolean;

individualFee:String = "55.00";
youngFee:String = "25.00";
galaindividualfee:String = "50.00";
galastudentfee:String = "30.00";
earlyBirdMsg = "(Early Bird)";

interNum:number;
guestNumber:any;

conference_attendee:ConferenceAttendee = new ConferenceAttendee();

myfee:RegistrationFee = new RegistrationFee();


public calculatepayments(){

 
  this.conference_attendee.clearPayments ();
  this.conference_attendee.CalculateTotalPayment();



}


public interatemyNumber (){

    
    
    this.guestNumber = Array(this.interNum).fill(1);
    //console.log(this.interNum);
   this.conference_attendee.AddGuest(this.interNum);
   
          

           
}

public JSONConsole(){


    console.log(JSON.stringify(this.conference_attendee));



}
      
         

}