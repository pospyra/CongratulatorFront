import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListBirthdayService } from 'src/app/services/list-birthday.service';

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


  constructor(private service: ListBirthdayService,
    private router: Router,
    private fb : FormBuilder, ){}

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('photo')?.setValue(file);
  }}

onSubmit(){
   const formData = new FormData();
   const photos =  this.form.get('photo')?.value;
   formData.append('file', photos!);
    this.service.createPerson(this.form.get('name')?.value, this.form.get('date')?.value , formData).subscribe(res=>{
    console.log(res);
    this.router.navigateByUrl('' );
  });
  }
}
