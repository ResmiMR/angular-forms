import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-reactive',
  templateUrl: './reg-reactive.component.html',
  styleUrls: ['./reg-reactive.component.css']
})
export class RegReactiveComponent {
   contactForm :any;
  //   contactForm = new FormGroup({

  //   firstnamee: new FormControl('',[Validators.required, Validators.minLength(5)]),
  //   lastname: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl()
  // })

  constructor(private fb: FormBuilder){}
 
 ngOnInit(){
  this.contactForm  = this.fb.group({
    firstnamee :[''],
    lastname: [''],
    email: [''],
    gender: [''],
    isMarried: [''],
    country: [''],
  });
 }


  onSubmit() {
    console.log(this.contactForm.value);
  }
}
