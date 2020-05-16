import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-components',
  templateUrl: './admin-components.component.html',
  styleUrls: ['./admin-components.component.css']
})
export class AdminComponentsComponent implements OnInit {
  SideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  SideBarToggler($event){
    this.SideBarOpen = !this.SideBarOpen;
  }

}
