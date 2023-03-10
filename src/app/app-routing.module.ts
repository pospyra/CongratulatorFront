import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AllBirthdayComponent } from './components/all-birthday/all-birthday.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'getAll', component: AllBirthdayComponent},
  {path: 'add', component: AddPersonComponent},
  {path: 'edit/:id', component: EditPersonComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
