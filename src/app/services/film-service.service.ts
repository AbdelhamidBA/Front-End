import { Gender } from './../components/FilmComponents/add-film-component/add-film-component.component';
import { ListFilmComponentComponent, FilmFilter } from './../components/FilmComponents/list-film-component/list-film-component.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  private url = '/api/film/';
  constructor(private http: HttpClient) { }

  getFilms(): Observable<any> {
   return this.http.get(this.url);
  }

  getFilmsByGender(idFilm):Observable<any>
  {
    return this.http.get(this.url+`${idFilm}`+'/gender');
  }

  getFilmInfos(idFilm): Observable<any> {
    return this.http.get(this.url + `${idFilm}`);
  }
  getFilteredFilms(filter: FilmFilter): Observable<any> {
    let filterString = '';
    let filterURL = '/api/film';
    if (filter.film_name !== '') {
      filterString += 'film_name=' + filter.film_name;
    }
    if (filter.film_show_date != null) {
      filterString += (filterString === '') ? 'film_show_date=' + filter.film_show_date.toISOString()
      : '&film_show_date=' + filter.film_show_date.toISOString();
    }
    if (filter.film_gender !== '') {
      filterString += (filterString === '') ? 'film_gender=' + filter.film_gender
      : '&film_gender=' + filter.film_gender;
    }

    if (filterString !== '') {
      filterURL += '?' + filterString;
    }


    return this.http.get(filterURL);
  }

  addFilm(data: object): Observable<any>
  {
    return this.http.post(this.url + 'addFilm', data, httpOptions);
  }

  updateFilm(idFilm,data: object): Observable<any>
  {
    return this.http.put(this.url + `update/${idFilm}`, data , httpOptions);
  }

  deleteFilm(idFilm): Observable<any>
  {
    console.log("Hello from service");
    console.log(idFilm);
    return this.http.delete(this.url + `delete/${idFilm}`);
  }
  getRecommendation(idFilm): Observable<any>
  {
    console.log("ID:"+idFilm);
    return this.http.get(this.url + `recommendation/${idFilm}`);
  }

}
