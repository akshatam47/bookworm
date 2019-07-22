import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  appTitle:string = 'MyApp';
  submitted=false;
  ngOnInit() {}
  profileForm = new FormGroup({
    firstname: new FormControl('',Validators.minLength(15)),
    lastname: new FormControl('',Validators.required),
    emailid: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    mobileno: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    houseno: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    pincode: new FormControl('',Validators.required),
    dateofbirth: new FormControl('',Validators.required),
  
  })
  

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.profileForm.invalid) {
      return;
  }
}
}