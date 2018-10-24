import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() public data;

@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  sendEvent(){
    this.childEvent.emit("Child to Parent");
  }
}
