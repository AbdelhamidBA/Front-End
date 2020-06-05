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

  constructor(private authService:AuthService,private router:Router) {
    if(this.authService.currentUserValue !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit(): void {
  }



}
