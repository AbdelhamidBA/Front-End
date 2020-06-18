import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  isLoggedIn:boolean=false;
  isAdmin:boolean=false;

  constructor(private authService:AuthService,private router:Router) {
    if(this.authService.currentUserValue !== null) {
      this.isLoggedIn = true;
      if(this.authService.currentUserValue.role == "ROLE_ADMIN" ||
      this.authService.currentUserValue.role == "ROLE_USER_MANAGER" ||
      this.authService.currentUserValue.role == "ROLE_FILM_MANAGER" )
        {
          this.isAdmin = true;
        }

    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit(): void {
  }



}
