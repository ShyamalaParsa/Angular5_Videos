import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
public name="MyAppPipes";
public message="welcome to codevolution";
public person = {
  "firstname":"shyamala",
  "lastname":"latha",
  "gender":"female"
}
public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
