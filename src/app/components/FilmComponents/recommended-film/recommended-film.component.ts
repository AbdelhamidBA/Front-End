import { Router } from '@angular/router';
import { FilmServiceService } from './../../../services/film-service.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-film',
  templateUrl: './recommended-film.component.html',
  styleUrls: ['./recommended-film.component.css']
})
export class RecommendedFilmComponent implements OnInit {
  noResultMessage = '';
  FilmsRecommended :any=[];
  currentUser= null;
  constructor(private authService:AuthService,private filmService:FilmServiceService) {
    this.currentUser=this.authService.currentUserValue;
    console.log(this.currentUser._id);
   }

  ngOnInit(): void {
    this.RecommendedFilms(this.currentUser._id);
  }

  RecommendedFilms(id)
  {
    this.filmService.getRecommendation(id).subscribe(result=>{
      for(let film of result)
      {
        this.FilmsRecommended.push(film);
      }
    },err=>{
      console.log("err:"+err);
    });
  }

}
