import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LisrBirthday } from 'src/app/models/ListBirthday';
import { LisrBirthdayService } from 'src/app/services/lisr-birthday.service';

@Component({
  selector: 'app-all-birthday',
  templateUrl: './all-birthday.component.html',
  styleUrls: ['./all-birthday.component.scss']
})
export class AllBirthdayComponent implements OnInit {

  list$: Observable<LisrBirthday[]> =  this.service.getListAll();
  constructor(private service: LisrBirthdayService) { }

  ngOnInit(): void {
    this.service.getListAll();
    }

    deletePerson(id: number){
      this.service.deletePerson(id);
      console.log('удалено');
    }
  
  }
