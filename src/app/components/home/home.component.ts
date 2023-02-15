import { Component, OnInit } from '@angular/core';
import { LisrBirthday } from 'src/app/models/ListBirthday';
import { LisrBirthdayService } from 'src/app/services/lisr-birthday.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list$: Observable<LisrBirthday[]> = this.service.getListAll();
  constructor(private service: LisrBirthdayService) { }

  ngOnInit(): void {
    this.service.getListAll();
    }

  GetList(){
    var list = this.service.getListAll().subscribe(res=>{
      console.log(res)});
        return list;
    }
  }


        //   this._auth.login(this.form.getRawValue()).subscribe(res=>{
        // console.log(res);
