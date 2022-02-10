import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { icons } from "../app/icons";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memory-game';

  NumWord:boolean;
  enterToTheSite:Boolean;
  GetChildData(data){
    debugger
    this.enterToTheSite=data;
console.log(data);
  }
  constructor(library: FaIconLibrary,private _router:Router) {
    
    //library.addIcons(...icons);
  }
  
  

  a(page:string)
  {
    this._router.navigate([page]);
  }
  changeNumWord(s:string)
  {
if(s=="Letters")
{
this.NumWord=true;
this._router.navigate(["sign"]);
}
else
{
this.NumWord=false;
this._router.navigate(["sign"]);}
  }
}
