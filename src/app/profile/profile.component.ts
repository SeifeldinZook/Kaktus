import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/authentication.service';

declare var $: any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private _Router:Router, public _AuthenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

}
