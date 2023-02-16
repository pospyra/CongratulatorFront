import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LisrBirthdayService } from 'src/app/services/lisr-birthday.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  readonly form = this.fb.group({ 
    name :['', [Validators.required]],
    date :['', [Validators.required]],
    photo: [[]]
  })


  constructor(private service: LisrBirthdayService,
    private router: Router,
    private fb : FormBuilder, ){}

  ngOnInit(): void {
  }

onSubmit(){
    this.service.createPerson(this.form.get('name'), this.form.get('date'), this.form.get('photo')).subscribe(res=>{
    console.log(res);
    this.router.navigateByUrl('' );
  });
  }
}