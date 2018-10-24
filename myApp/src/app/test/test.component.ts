import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{name}}  
            </h2>
            <h2 class="text-special" [class]="successClass">{{name}}</h2>
            <h2 [class.text-danger]="hasError">My Name</h2>
            <input [id]="myId" type="text" value="Ram">
            <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Ram">
            <h2 [ngClass]="messageClass">Class Binding</h2>
            <h4 [style.color]="'orange'">Style Binding1</h4>
            <h4 [style.color]="hasError?'red':'gray'">Style Binding2</h4>
            <h4 [ngStyle]="titleStyles">Style Binding3</h4>`,
  styles: [`
            .text-success{
              color:green;
            }
            .text-danger{
              color:red;
            }
            .text-special{
              font-style:italic;
            }
          `] 
})
export class TestComponent implements OnInit {
  public name = "Angular5";
  public myId = "testId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial =true;
  public messageClass = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public titleStyles = {
    color:"yellow",
    fontStyle:"italic",
    backgroundColor:"blue"
  }
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello " + this.name;
  }

}
