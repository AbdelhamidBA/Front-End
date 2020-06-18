import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from './../../../services/film-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-film-component',
  templateUrl: './update-film-component.component.html',
  styleUrls: ['./update-film-component.component.css']
})
export class UpdateFilmComponentComponent implements OnInit {

  idFilm : any;
  op_result: string = '';
  FilmCover:any;
  public FilmInfo:any=[];
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

  updateForm = new FormGroup({
    film_name: new FormControl('', [Validators.required]),
    film_description: new FormControl('', [Validators.required]),
    film_duration: new FormControl('', [Validators.required]),
    film_gender: new FormControl('', [Validators.required]),
    film_show_date: new FormControl('', [Validators.required]),
    film_cover: new FormControl(null, [Validators.required])
  });

  film_id :string="";
  film_list: any =[];

  constructor(private filmService: FilmServiceService, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Allfilm();
    this.getFilmInfo(this.idFilm);

  }

  onReset(){
    this.updateForm.reset();
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


  getFilmInfo(idFilm){
    this.filmService.getFilmInfos(idFilm).subscribe(filminfo=>{
        this.FilmInfo.push(filminfo);
        this.updateForm.patchValue({
          film_name:this.FilmInfo[0].film_name,
          film_description:this.FilmInfo[0].film_description,
          film_duration:this.FilmInfo[0].film_duration,
          film_gender:this.FilmInfo[0].film_gender,
          film_show_date:this.FilmInfo[0].film_show_date,
          film_cover:this.FilmInfo[0].film_cover,
        });
        this.formname = this.FilmInfo[0].film_name;
        console.log(this.FilmInfo[0].film_show_date);
});
  }
  updateNewFilm()
  {

    const Data = {
      film_name: this.film_name,
      film_description: this.film_description,
      film_duration: this.film_duration,
      film_gender: this.film_gender,
      film_show_date: this.film_show_date,
      film_cover: this.film_cover,
    };
    console.log("IDFILM:"+this.idFilm);
    this.filmService.updateFilm(this.idFilm, Data).subscribe(result=>{
      console.log('1: '+result);
      console.log('2'+JSON.stringify(result));
      this.op_result = result.message;
      if(result.error === false)
      {
        this.toastr.success( this.op_result,'Update Operation',{
          timeOut:2000,
          progressBar:true
        });
      }
      else
      {
        this.toastr.error( this.op_result,'Update Operation',{
          timeOut:2000,
          progressBar:true
        });
      }
    });
  }


  UpdateFormContent(value: string)
  {
    if(value !== undefined || value !== null)
    {
      this.film_id=value;
      this.idFilm = value;
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
        }
      }
    }
}


  get film_name()
  {
    return this.updateForm.value.film_name;
  }
  get film_description()
  {
    return this.updateForm.value.film_description;
  }
  get film_gender()
  {
    return this.updateForm.value.film_gender;
  }
  get film_duration()
  {
    return this.updateForm.value.film_duration;
  }
  get film_show_date()
  {
    return this.updateForm.value.film_show_date;
  }
  get film_cover()
  {
    return this.updateForm.value.film_cover;
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

