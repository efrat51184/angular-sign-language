import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';
import { User } from 'src/models/user';
import { UserDto } from 'src/models/UserDto';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private _router: Router, private loginService: LoginService) {
  }
  u:User
  ud:UserDto=new UserDto("","")

  @Output() enterToTheSite: EventEmitter<Boolean> = new EventEmitter<Boolean>();//boolean=false;
  flag: Boolean = false;
  ngOnInit(): void {
  }
  sendValues() {
    this.enterToTheSite.emit(this.flag)
  }
  loginNavigate(page: string) {
    
    if (page == "home")
      this.flag = true;
    this._router.navigate([page]);
  }
  signin(email:string,password:string) {
  
    this.ud.userEmail=email
    this.ud.userPassword=password
  this.loginService.getUser(this.ud).subscribe(data=>this.u=data, err=>alert("Enter Your Details Again"));
     sessionStorage.setItem('userToken',this.u.token);
     sessionStorage.setItem('userId',this.u.userId.toString());
   if(this.u!=null)
      this.loginNavigate("home");
  }
}
