import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from './../../../services/film-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-film-info-component',
  templateUrl: './film-info-component.component.html',
  styleUrls: ['./film-info-component.component.css']
})
export class FilmInfoComponentComponent implements OnInit {

  public FilmInfo:any=[];
  constructor(private filmService: FilmServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.getFilmInfo(id);
    this.visitedMovie(id);
  }

  getFilmInfo(idFilm){
      this.filmService.getFilmInfos(idFilm).subscribe(filminfo=>{
          this.FilmInfo.push(filminfo);
  });

}

visitedMovie(id)
{
  console.log('Sent Id:'+id);
  let alreadyVisited:  boolean = false;
  if(localStorage.getItem('visitedFilms') === '' || localStorage.getItem('visitedFilms') == null )
  {
    let visited =[
      {id:id}
    ];
    localStorage.setItem('visitedFilms',JSON.stringify(visited));
  }
  else
  {
    let visited = JSON.parse(localStorage.getItem('visitedFilms'));
    for(let item of visited)
    {
      console.log(item);
      console.log('-----');
      console.log("Grabbed id: "+item.id);
      console.log(item.id === id);
      if(item.id === id)
      {

        alreadyVisited = true;
      }

    }
    if(alreadyVisited === false)
    {
      visited.push(
        {id:id}
      );
      localStorage.setItem('visitedFilms',JSON.stringify(visited));
    }
  }
}

}
