import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LisrBirthday } from 'src/app/models/ListBirthday';
import { ListBirthdayService } from 'src/app/services/list-birthday.service';

@Component({
  selector: 'app-all-birthday',
  templateUrl: './all-birthday.component.html',
  styleUrls: ['./all-birthday.component.scss']
})
export class AllBirthdayComponent implements OnInit {

  list$: Observable<LisrBirthday[]> =  this.service.getListAll();
  constructor(private service: ListBirthdayService) { }

  ngOnInit(): void {
    this.service.getListAll();
    }

    deletePerson(id: number){
      this.service.deletePerson(id).subscribe( ()=>{
        console.log('удалено');
      });

    }
  }
