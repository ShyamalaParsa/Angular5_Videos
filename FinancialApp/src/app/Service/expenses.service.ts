import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
// import { IExpense } from 'src/app/home/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  // private _url:string="/assets/data/mydata.json";

  constructor(private http:HttpClient) { }
  getExpesesData(){
    return this.http.get("https://api.myjson.com/bins/zsm5c");
  }
  getMonthlyExpenses(){
    return this.http.get("https://api.myjson.com/bins/s91ww");
  }
}
