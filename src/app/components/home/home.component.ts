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
  list$: Observable<LisrBirthday[]> =  this.service.getListNearest();
  constructor(private service: LisrBirthdayService) { }

  ngOnInit(): void {
    this.service.getListNearest();
    }

    deletePerson(id: number){
      this.service.deletePerson(id);
      console.log('удалено');
    }
  }


        //   this._auth.login(this.form.getRawValue()).subscribe(res=>{
        // console.log(res);
