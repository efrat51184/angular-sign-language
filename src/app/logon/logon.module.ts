import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../general/home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const APP_ROOT:Route[]=[
  {path:"",pathMatch:"full", redirectTo:"login"},
  {path:"app", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  ]
@NgModule({
  declarations: [   LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,HttpClientModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent

  ]
})
export class LogonModule { }
