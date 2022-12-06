import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-temp',
  templateUrl: './reg-temp.component.html',
  styleUrls: ['./reg-temp.component.css']
})
export class RegTempComponent {

  contact:any ;

  countryList: Country[] = [
   {id:1,name:'india'},
   {id:2,name:'uae'},
  ]

  onSubmit(contactForm:any) {
    console.log(contactForm.value);

   // alert(contactForm.controls.country.value);

    //alert(contactForm.controls["country"].value);
    
    //alert(this.contact.firstname);
  }
  ngOnInit() {
 
    // this.contact = {
    //    firstname: "",
    //    lastname: "",
    //    email: "",
    //    gender: "",
    //    isMarried: null,
    //    country: 1,
    //    address: {
    //      city: "Mumbai",
    //      street: "Perry Cross Rd",
    //      pincode: "400050"
    //    }
    //  };
  

  
   }
  
}

export interface Country{
  id:number,
  name:string
}
