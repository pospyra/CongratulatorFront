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
  
  
}
