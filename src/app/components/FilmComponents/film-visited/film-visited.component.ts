import { Router, NavigationEnd } from '@angular/router';
import { FilmServiceService } from './../../../services/film-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-film-visited',
  templateUrl: './film-visited.component.html',
  styleUrls: ['./film-visited.component.css']
})
export class FilmVisitedComponent implements OnInit {
  noResultMessage = '';
  FilmsVisited :any=[];
  visited :any=[];
mySub:any;
  constructor(private filmService :FilmServiceService,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
      return false;
    };
    this.mySub = this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd)
      {
        this.router.navigated =false;
      }
    });
   }

  ngOnInit(): void {
    this.VisitedFilms();

  }

  VisitedFilms() {
    if (localStorage.getItem('visitedFilms') !== '' || localStorage.getItem('visitedFilms') != null) {
        this.visited= JSON.parse(localStorage.getItem('visitedFilms'));
        for(let film of this.visited) {
          this.filmService.getFilmInfos(film.id).subscribe(result=>{
              this.FilmsVisited.push(result);
          });
        }
        console.log('Visited Films:');
        console.log(this.FilmsVisited);
    } else {
        this.noResultMessage = 'No Visited Movie';
    }
  }
  seeFilm(id) {
      this.router.navigate([`/film/show/${id}`]);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.mySub)
    {
      this.mySub.unsubscribe();
    }
  }
}
