import { FilmServiceService } from './../../services/film-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-preview-slider',
  templateUrl: './main-preview-slider.component.html',
  styleUrls: ['./main-preview-slider.component.css']
})
export class MainPreviewSliderComponent implements OnInit {

  listoffilms: any = [];
  constructor(private http:HttpClient,private service:FilmServiceService) { }

  ngOnInit(): void {
    this.RecentFilms();
  }


  RecentFilms(){
    let breaker = 0;
    console.log("Hello Main Preview");
    this.service.getFilms().subscribe(films =>{

      for(let film of films)
      {
        if(breaker == 5)
        {
          console.log("breeeeekkk");
          break;
        }
        else
        {
          console.log(breaker);
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
