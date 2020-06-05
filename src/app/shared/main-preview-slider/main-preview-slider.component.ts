import { Router, NavigationEnd } from '@angular/router';
import { FilmServiceService } from './../../services/film-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-preview-slider',
  templateUrl: './main-preview-slider.component.html',
  styleUrls: ['./main-preview-slider.component.css']
})
export class MainPreviewSliderComponent implements OnInit {

  listoffilms: any = [];
  routerSubscription: any;
  constructor(private http:HttpClient,private service:FilmServiceService,private router:Router) { }

  ngOnInit(): void {
    this.RecentFilms();
  }

  RecentFilms(){

    let breaker = 0;
    this.service.getFilms().subscribe(films =>{

      for(let film of films)
      {
        if(breaker == 5)
        {
          break;
        }
        else
        {
          this.listoffilms.push(film);
          breaker += 1;
        }
      }
    },
    err=>{
      console.log("ERROR: "+err);
    });
  }

}
