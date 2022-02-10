import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/models/user";
import { UserDto } from "src/models/UserDto";
import { Word } from "src/models/word";
import { Task } from "src/models/task";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }


 
u:User=new User(1,"cc","ff","ff","ff",4,4,"ff")
  getUser(user:UserDto): Observable<User>
  {
 
    return this.http.post<User>("/api/user/login",user);
  }

}