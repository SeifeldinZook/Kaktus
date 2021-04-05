import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _AuthenticationService: AuthenticationService, private _Router:Router) {}

  ngOnInit(){
  }

}
