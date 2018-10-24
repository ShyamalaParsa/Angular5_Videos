import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/employeeservice.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  public employeelistData = [];
  constructor(private _empService:EmployeeserviceService) { }

  ngOnInit() {
   this._empService.getEmployees().subscribe(sam => this.employeelistData = sam);
  }

}
