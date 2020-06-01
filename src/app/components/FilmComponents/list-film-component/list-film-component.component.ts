import { NgxPaginationModule } from 'ngx-pagination';
import { FilmServiceService } from './../../../services/film-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-film-component',
  templateUrl: './list-film-component.component.html',
  styleUrls: ['./list-film-component.component.css']
})



export class ListFilmComponentComponent implements OnInit {

  listoffilms: any = [];
  p:any;
  operationMessage: string;
  filmFilter :FilmFilter ={
    film_name:'',
    film_show_date:null,
    film_gender:''
  }

  getListOfFilms()
  {
    this.listoffilms=[];
    this.filmService.getFilms().subscribe(films => {
      for (let film of films) {
        this.listoffilms.push(film);
      }
    });
  }

  getFilteredFilmList(filmFilter)
  {
    this.listoffilms=[];
    this.filmService.getFilteredFilms(filmFilter).subscribe(films => {
      this.listoffilms.push(films);
    });
  }

  constructor(private filmService: FilmServiceService) { }

  ngOnInit(): void {
    this.getListOfFilms();
  }


}

export interface FilmFilter
{
  film_name: string ;
  film_show_date: Date;
  film_gender: string;
}


