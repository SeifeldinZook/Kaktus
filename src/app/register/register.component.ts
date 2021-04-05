import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show: boolean;
  passwordState: string;

  constructor(private _Router:Router) {
    this.show = false;
    this.passwordState = 'Show'
  }


  loginFormGroup = new FormGroup({
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    country_id: new FormControl(),
    password:new FormControl('',[Validators.required])
  })

  showPassword() {
    this.show = !this.show;
  }

  ngOnInit() {
    // $('.countrypicker').countrypicker();
  }

}
