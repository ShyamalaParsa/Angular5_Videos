import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent implements OnInit {
public name="";
  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value);
  }

}
