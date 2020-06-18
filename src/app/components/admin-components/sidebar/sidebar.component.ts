import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser = null;


  constructor(private authService:AuthService, private router:Router) {
   this.currentUser= this.authService.currentUserValue;
  }




  ngOnInit(): void {
  }

}
