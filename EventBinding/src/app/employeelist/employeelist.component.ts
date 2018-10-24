import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/employeeservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employeelistData = [];
  constructor(private _empService:EmployeeserviceService) { }

  ngOnInit() {
    this._empService.getEmployees().subscribe(data=>this.employeelistData = data);
  }

}
