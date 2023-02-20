import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LisrBirthdayService } from 'src/app/services/lisr-birthday.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent {
  readonly formEdit = this.fb.group({ 
    id: [this.activatedRoute.snapshot.params['id']],
    name :['', [Validators.required]],
    date :['', [Validators.required]],
    photo:[[]]
  })

  constructor(private service: LisrBirthdayService,
    private router: Router,
    private fb : FormBuilder,
    private activatedRoute: ActivatedRoute, ){}


    onFileChange(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.formEdit.get('photo')?.setValue(file);
    }}
  
  onSubmit(){
     const formData = new FormData();
     const photos =  this.formEdit.get('photo')?.value;
     formData.append('file', photos!);
      this.service.updatePerson(this.formEdit.get('id')?.value, this.formEdit.get('name')?.value, this.formEdit.get('date')?.value , formData).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('' );
    });
    }
}
