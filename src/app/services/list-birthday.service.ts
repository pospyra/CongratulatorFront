import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LisrBirthday } from '../models/ListBirthday';
import { environment } from 'src/enviroments/enviroments.prod';

@Injectable({
  providedIn: 'root'
})
export class ListBirthdayService {

  baseUrl = `${environment.host}/ListBirthday`;

  constructor(private _http : HttpClient) { }

  getListAll() : Observable<LisrBirthday[]>{
    return this._http.get<LisrBirthday[]>(this.baseUrl)
  }

  getListNearest() : Observable<LisrBirthday[]>{
    return this._http.get<LisrBirthday[]>(`${this.baseUrl}/nearestBirthday`)
  }

  public createPerson(name: any, date: any, photo: any ) {
    return this._http.post(`${this.baseUrl}?name=${name}&dateBrth=${date}`, photo);
  }

  public deletePerson(id: number){
    return this._http.delete(`${this.baseUrl}/${id}`);
  }

  updatePerson(id: any, name: any, date: any, photo: any): Observable<any>{
    return this._http.put<any>(`${this.baseUrl}/${id}?name=${name}&dateBrth=${date}`, photo);
  }
}
