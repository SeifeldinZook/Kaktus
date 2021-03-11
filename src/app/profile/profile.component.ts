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
  // public _opened: boolean = true;
  // sideBarOpened:boolean = true;
  
  // public _toggleSidebar() {
  //   this._opened = !this._opened;
  //   this.sideBarOpened = !this.sideBarOpened
  // }

  constructor(private _Router:Router, public _AuthenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

}
