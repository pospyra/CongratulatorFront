import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AllBirthdayComponent } from './components/all-birthday/all-birthday.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AllBirthdayComponent,
    AddPersonComponent,
    EditPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
