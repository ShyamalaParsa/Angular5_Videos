import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/Service/expenses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public expensedata:any;
public namesl:any;
  constructor(private _expService:ExpensesService,private _router:Router) { }

  ngOnInit() {
   this._expService.getExpesesData().subscribe(res =>{
      this.expensedata = res;
      console.log(this.expensedata);
      // console.log(this.expensedata[0].data);
      // for (var i=0;i<this.expensedata.length;i++) {
      //   console.log(this.expensedata[i]);
      //   for (var j=0;j<this.expensedata;j++) {
      //       this.namesl = this.expensedata[i].data[j];
      //       console.log(this.namesl);
      //   }
      // }
   })
  }
  onClick(monthId:number){
    this._router.navigate(['/expenses',monthId])
  }
}
