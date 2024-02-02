import { Component, OnInit } from '@angular/core';
import { LisrBirthday } from 'src/app/models/ListBirthday';
import { ListBirthdayService } from 'src/app/services/list-birthday.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list$: Observable<LisrBirthday[]> =  this.service.getListNearest();
  constructor(private service: ListBirthdayService) { }

  ngOnInit(): void {
    this.service.getListNearest();
    }

    deletePerson(id: number){
      this.service.deletePerson(id).subscribe(()=>
      {
        this.list$ = this.service.getListAll();
        console.log('удалено');

      });
    }
  }

