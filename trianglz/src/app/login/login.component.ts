import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show: boolean;
  passwordState: string;
  // isLogin={'color': '#8139c2!important;'}

  constructor(private _Router:Router) {
    this.show = false;
    this.passwordState = 'Show'
  }

  loginFormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  showPassword() {
    this.show = !this.show;
    if (this.show) {
      this.passwordState = 'Hide'
    } else {
      this.passwordState = 'Show'
    }
  }

  ngOnInit(): void {
  }

}
