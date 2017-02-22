export class RegistrationFee {

conferenceFees:number;
galaFees: number;
vendorFees: number;
souvenirFees: number;
totalFee:number = 0.00;

constructor(){  

     this.conferenceFees = 0.00;
     this.galaFees = 0.00;
     this.vendorFees = 0.00;
     this.souvenirFees = 0.00;

}

public GetTotalFee():number {

   this.totalFee = this.conferenceFees + this.galaFees + this.vendorFees + this.souvenirFees;
       
   return this.totalFee    

}

public SetConferenceFee(c_fees:string){

        if (c_fees === "1"){

        this.conferenceFees = 55.00;

        }

        else if (c_fees === "2"){
 
            this.conferenceFees = 25.00;

        }

        else {
     
            this.conferenceFees = 0.00;

        }

        
}

public SetGalaFee(gala_fee:string){

       if (gala_fee === "1" ){

       this.galaFees = 50.00;

       }

       else if  (gala_fee === "2"){
       
        this.galaFees = 30.00;

       }

       else {
       
        this.galaFees = 0.00;

       }
}

public SetVendorFee(vendross:string){

    
     if (vendross === "1") {
   
    this.vendorFees = 75.00;

     }

     else{


         this.vendorFees = 0.00;
     }
}

public SetSouvenirFee(souvenirselect:string){

       if (souvenirselect === "1" ){

       this.souvenirFees = 150.00;

       }

       else if (souvenirselect === "2" ) {
       
        this.souvenirFees = 100.00;

       }

        else if (souvenirselect === "3" ) {
       
          this.souvenirFees = 75.00;

        }
       
        else {

          this.souvenirFees = 0.00;

        }

 }


public checkfeeclose(mycheck:boolean){

         
             if (mycheck){

             this.conferenceFees = 0;

             }



}


}