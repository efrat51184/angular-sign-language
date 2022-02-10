import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { icons } from "./icons";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memory-game';

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

}