import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private location: Location) {}

  public _opened: boolean = true;
  public sideBarOpened:boolean = true;
  
  public _toggleSidebar() {
    this._opened = !this._opened;
    this.sideBarOpened = !this.sideBarOpened
  }

  isLoggedIn () {
    // console.log(this.router.url);
    // console.log(this.location.path());
    if (this.location.path() == "/profile") {
      return true;
    } else {
      return false;
    }
  }
}
