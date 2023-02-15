import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LisrBirthdayService {

  constructor(private _http : HttpClient) { }

  getListAll() : Observable<any>{
    return this._http.get<any>(`https://localhost:7228/getAll`)
  }
}
