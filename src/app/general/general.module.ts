import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
const APP_ROOT:Route[]=[
  {path:"",pathMatch:"full", redirectTo:"home"},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent}]
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
  ],
  exports :[HomeComponent]
})
export class GeneralModule { }
