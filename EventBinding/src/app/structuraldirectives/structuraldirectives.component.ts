import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
public displayName = true;
public color="green";
public colorsData = ["red","green","yellow","blue"]
  constructor() { }

  ngOnInit() {
  }

}
