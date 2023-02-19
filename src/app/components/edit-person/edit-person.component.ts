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
    photo:[]
  })

  constructor(private service: LisrBirthdayService,
    private router: Router,
    private fb : FormBuilder,
    private activatedRoute: ActivatedRoute, ){}

    onSubmit(){
      this.service.updatePerson(this.formEdit.get('id')?.value ,this.formEdit.get('name')?.value,
      this.formEdit.get('date')?.value, this.formEdit.get('photo')?.value);
      this.router.navigateByUrl('' );
    }
}
