import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../Service/expenses.service';

@Component({
  selector: 'app-monthlyexpenses',
  templateUrl: './monthlyexpenses.component.html',
  styleUrls: ['./monthlyexpenses.component.css']
})
export class MonthlyexpensesComponent implements OnInit {
public monthlyexpdata;
public expensetotaldata;
public expensetotaldata1;
  constructor(private _mnthService:ExpensesService) { }

  ngOnInit() {
    debugger;
    this._mnthService.getMonthlyExpenses().subscribe(resp =>{
      this.monthlyexpdata = resp;
      this.expensetotaldata = this.monthlyexpdata.January;
      this.expensetotaldata1 = this.monthlyexpdata.February;
      // this.expensetotaldata = this.monthlyexpdata.February;
      // for(var i=0;i<this.monthlyexpdata.length;i++){
      //   console.log(this.monthlyexpdata[i])
      // }
    })
  }

}
