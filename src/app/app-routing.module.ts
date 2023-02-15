import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBirthdayComponent } from './components/all-birthday/all-birthday.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'getAll', component: AllBirthdayComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
