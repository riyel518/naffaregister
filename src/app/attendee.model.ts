import {RegistrationFee} from './fees.model'
import {AttendeeGuest } from './guest.model'


export class ConferenceAttendee extends RegistrationFee {

    first_name: string;
    last_name: string;
    address1:string;
    city:string;
    state:string;
    zip:string;
    email:string;
    night_phone_a:string
    my_guest:AttendeeGuest[] = [];
    total_payments:number = 0.00;
    guest_total_payment:number = 0;
   

    constructor(){

       super();

    }

   public AddGuest(numArray:number){

        
        for(var i = 0; i <= numArray; i++){

                var person = new AttendeeGuest();

                this.my_guest[i] = person;

                

        }
        
             

   }
   
   public CalculateTotalPayment(){

   var subtotal = 0;
         
          for (var i = 0; i < this.my_guest.length; i++){

                 this.guest_total_payment = this.guest_total_payment + this.my_guest[i].GetTotalFee();
          } 

          subtotal = this.GetTotalFee() + this.guest_total_payment; 
          
          this.total_payments = subtotal + ( subtotal * 0.03);

   } 

   public clearPayments () {

            this.guest_total_payment = 0;
            this.total_payments = 0;

   }

}

