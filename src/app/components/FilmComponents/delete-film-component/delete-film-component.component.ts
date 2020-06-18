import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from './../../../services/film-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-delete-film-component',
  templateUrl: './delete-film-component.component.html',
  styleUrls: ['./delete-film-component.component.css']
})
export class DeleteFilmComponentComponent implements OnInit {

  updateForm = new FormGroup({
    film_name: new FormControl('', [Validators.required]),
    film_description: new FormControl('', [Validators.required]),
    film_duration: new FormControl('', [Validators.required]),
    film_gender: new FormControl('', [Validators.required]),
    film_show_date: new FormControl('', [Validators.required]),
    film_cover: new FormControl(null, [Validators.required])
  });
  id:any="" ;
  film_list: any =[];
  film_id :string="";
  op_result: string = '';
  formname :string;
  genders: Gender[] = [
    {value: '', viewValue: 'Select Film Gender'},
    {value: 'Action', viewValue: 'Action'},
    {value: 'Adventure', viewValue: 'Adventure'},
    {value: 'Animation', viewValue: 'Animation'},
    {value: 'Biography', viewValue: 'Biography'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Crime', viewValue: 'Crime'},
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'Music', viewValue: 'Music'},
    {value: 'Mystery', viewValue: 'Mystery'},
    {value: 'Romance', viewValue: 'Romance'},
    {value: 'Thriller', viewValue: 'Crime'},
    {value: 'War', viewValue: 'War'}
  ];


  constructor(private filmService: FilmServiceService,private route:ActivatedRoute,private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.Allfilm();
    this.updateForm.disable();
  }


  Allfilm(){
    this.filmService.getFilms().subscribe(films => {
      for(let film of films)
      {
        this.film_list.push(film);
      }
      console.log(this.film_list);
    });
  }


  onReset(){
    this.updateForm.reset();
  }



  UpdateFormContent(value: string)
  {
    if(value !== undefined || value !== null)
    {
      this.film_id=value;
      this.id=value;
      this.updateForm.enable();
      for(let user of this.film_list)
      {
        if(user['_id']===value)
        {
          this.updateForm.setValue({
            film_name: user['film_name'],
            film_description: user['film_description'],
            film_duration: user['film_duration'],
            film_gender: user['film_gender'],
            film_show_date: user['film_show_date'],
            film_cover: user['film_cover'],
          });
          this.updateForm.disable();
        }
      }
    }
}
  DeleteFilm(){
    console.log("ID:"+this.id);
    this.filmService.deleteFilm(this.id).subscribe(upd => {
      console.log(upd);
      this.op_result = upd.message;
      if (upd.error === false)
      {
        this.toastr.success( this.op_result, 'Delete User Operation', {
          timeOut: 3000,
          progressBar: true
        });
      }
      else
      {
        this.toastr.error( this.op_result, 'Delete User Operation', {
          timeOut: 3000,
          progressBar: true
        });
      }
    });
  }

}

export interface FilmModel {
    film_name: string;
    film_cover: File;
    film_description: string;
    film_gender: string;
    film_show_date: Date;
    film_duration: string;
  }
export interface Gender {
    value: string ;
    viewValue: string;
  }



