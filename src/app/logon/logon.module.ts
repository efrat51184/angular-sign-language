import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
const APP_ROOT:Route[]=[
  {path:"",pathMatch:"full", redirectTo:"login"},
  {path:"app", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  ]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LogonModule { }
