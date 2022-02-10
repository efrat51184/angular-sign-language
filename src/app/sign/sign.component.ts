import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor() { }
 @Input()
  flag:boolean;
  bNumbers:boolean=false;
  bLetters:boolean=false;
  signes=['a','b','c','d','e','f'];
  ngOnInit(): void {
  }
  openDropDownNumbers():void{
    if(this.bNumbers==true)
      this.bNumbers=false
    else{this.bNumbers=true}
    }
    openDropDownLetters():void{
      if(this.bLetters==true)
        this.bLetters=false
      else{this.bLetters=true}
      }
}
