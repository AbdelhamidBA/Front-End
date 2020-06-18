import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = '/api/admin/';
  constructor(private http: HttpClient) { }
  AddUser(Data: object): Observable<any>{
    return this.http.post(this.url + 'add', Data, httpOptions);
  }

  UpdateUser(dt: object, id_user: string): Observable<any>{
    return this.http.put(this.url + `${id_user}/upd`, dt, httpOptions);
  }

  AllUser(): Observable<any>{
    return this.http.get(this.url);
  }

  statistic(): Observable<any>{
    return this.http.get(this.url + '/user/statis');
  }

  DeleteUser(id_user: string): Observable<any>{
    return this.http.delete(this.url + `${id_user}/del`);
  }

}
