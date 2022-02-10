import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
b:boolean=false;
ass:boolean=true;
// flag:boolean=false;
  constructor(private _router:Router) { }
  // @Input()
  // enterToTheSite:Boolean=true;
  ngOnInit(): void {
    
  }
  openDropDown()
  {
    if(this.b)
    this.b=false;
    else
    this.b=true;
  }
  a(page:string)
  {
    this._router.navigate([page]);
  }
}
