import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from './../../../services/film-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-film-component',
  templateUrl: './add-film-component.component.html',
  styleUrls: ['./add-film-component.component.css']
})
export class AddFilmComponentComponent implements OnInit {
  op_result: string = '';
  FilmCover:any;
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

  addForm = new FormGroup({
    film_name: new FormControl('', [Validators.required]),
    film_description: new FormControl('', [Validators.required]),
    film_duration: new FormControl('', [Validators.required]),
    film_gender: new FormControl('', [Validators.required]),
    film_show_date: new FormControl('', [Validators.required]),
    film_cover: new FormControl(null, [Validators.required])
  });

  filmModel: FilmModel = {
    film_name: '',
    film_cover: null,
    film_description: '',
    film_gender: '',
    film_show_date: null,
    film_duration: ''
  };

  films: FilmModel[] = [];



  constructor(private filmService: FilmServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }


  onReset(){
    this.addForm.reset();
  }

  addNewFilm()
  {
    this.filmModel.film_name=this.film_name;
    this.filmModel.film_description=this.film_description;
    this.filmModel.film_duration=this.film_duration;
    this.filmModel.film_show_date=this.film_show_date;
    this.filmModel.film_gender=this.film_gender;
    //this.filmModel.film_cover=this.FilmCover;




    this.filmService.addFilm(this.addForm.value).subscribe(result=>{
      console.log('1: '+result);
      console.log('2'+JSON.stringify(result));
      this.op_result = result.message;
      if(result.error === false)
      {
        this.toastr.success( this.op_result,'Add Operation',{
          timeOut:3000,
          progressBar:true
        });
      }
      else
      {
        this.toastr.error( this.op_result,'Add Operation',{
          timeOut:3000,
          progressBar:true
        });
      }

    });
  }


  get film_name()
  {
    return this.addForm.value.film_name;
  }
  get film_description()
  {
    return this.addForm.value.film_description;
  }
  get film_gender()
  {
    return this.addForm.value.film_gender;
  }
  get film_duration()
  {
    return this.addForm.value.film_duration;
  }
  get film_show_date()
  {
    return this.addForm.value.film_show_date;
  }
  get film_cover()
  {
    return this.addForm.value.film_cover;
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
