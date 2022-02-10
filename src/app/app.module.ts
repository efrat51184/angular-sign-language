import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
// import { HomeComponent } from './general/home/home.component';
import { Route,RouterModule } from '@angular/router';
import { AboutComponent } from './general/about/about.component';
import { SignComponent } from './sign/sign.component';
import { BoardComponent } from './learning/board/board.component';
import { MemoryCardComponent } from './learning/memory-card/memory-card.component';
import { LoginComponent } from './logon/login/login.component';
import { RegisterComponent } from './logon/register/register.component';
import { LogonModule } from './logon/logon.module';
import { GeneralModule } from './general/general.module';

const APP_ROOT:Route[]=[
  {path:"",pathMatch:"full", redirectTo:"login"},
  // {path:"home", component:HomeComponent},
  {path:"sign",component:SignComponent},
  // {path:"register", component:RegisterComponent},
  // {path:"login", component:LoginComponent},
  {path:"about", component:AboutComponent},
  {path:"board", component:BoardComponent}]
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MemoryCardComponent,
    NavbarComponent,
    // LoginComponent,
    // RegisterComponent,
    // HomeComponent,
    AboutComponent,
    SignComponent
  ],
  imports: [
    RouterModule.forRoot( APP_ROOT),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    LogonModule,GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
