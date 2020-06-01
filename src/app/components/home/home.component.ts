import { FilmServiceService } from './../../services/film-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieslist = [];
  varClass = "slide-it";
  constructor(private service:FilmServiceService) {  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.MoviesList();
  }

  MoviesList(){
    let breaker = 0;
    this.movieslist = [];
    this.service.getFilms().subscribe(movies=>{
      for(let movie of movies)
      {
        if(breaker == 6)
        {
          break;
        }
        else
        {
          this.movieslist.push(movie);
          breaker+=1;
        }
      }
    });
  }

}
