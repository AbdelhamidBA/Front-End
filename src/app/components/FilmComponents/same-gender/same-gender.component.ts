import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FilmServiceService } from './../../../services/film-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-same-gender',
  templateUrl: './same-gender.component.html',
  styleUrls: ['./same-gender.component.css']
})
export class SameGenderComponent implements OnInit {

  noResultMessage = '';
  SameFilms :any=[];
  visited :any=[];
  mySub:any;

  constructor(private filmService :FilmServiceService,private router:Router,private route:ActivatedRoute) {
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
    this.sameGenderFilms();
  }

  sameGenderFilms() {
    let id= this.route.snapshot.paramMap.get('id');
    console.log("this id:"+id);
    this.filmService.getFilmsByGender(id).subscribe(results=>{
      for(let film of results)
      {
        this.SameFilms.push(film);
      }
    });
  }
  seeFilm(id) {
    this.router.navigate([`/${id}`]);
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
