import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from './../../../services/film-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-delete-film-component',
  templateUrl: './delete-film-component.component.html',
  styleUrls: ['./delete-film-component.component.css']
})
export class DeleteFilmComponentComponent implements OnInit {

  constructor(private filmService: FilmServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.deleteFilm(id);
  }

  deleteFilm(id){
      this.filmService.deleteFilm(id).subscribe(result=>{
          console.log(result.message);
          if(result.error ==false){
            this.router.navigate(['/']);
          }
          else{
            console.log(result.message);
          }

      });
  }


}
