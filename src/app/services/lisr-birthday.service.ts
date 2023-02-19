import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LisrBirthday } from '../models/ListBirthday';

@Injectable({
  providedIn: 'root'
})
export class LisrBirthdayService {

  constructor(private _http : HttpClient) { }

  getListAll() : Observable<LisrBirthday[]>{
    return this._http.get<LisrBirthday[]>(`https://localhost:7228/getAll`)
  }

  getListNearest() : Observable<LisrBirthday[]>{
    return this._http.get<LisrBirthday[]>(`https://localhost:7228/nearestBirthday`)
  }
  
  public createPerson(name: any, date: any, photo: any ) : Observable<any>{
    return this._http.post(`https://localhost:7228/create?name=${name}&dateBrth=${date}`, photo);
  }

  public deletePerson(id: number): void{
    this._http.delete(`https://localhost:7228/delete/${id}`).subscribe();
  }

  updatePerson(id: any, name: any, date: any, photo: any): Observable<any>{
    return this._http.put<any>(`https://localhost:7228/update/${id}?name=${name}&dateBrth=${date}`, photo);
  }
}
