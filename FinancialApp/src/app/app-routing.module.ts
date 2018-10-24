import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MonthlyexpensesComponent } from './monthlyexpenses/monthlyexpenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';

const routes: Routes = [
  {path:"Dashboard",component:DashboardComponent},
  {path:"expenses/:name",component:MonthlyexpensesComponent},
  {path:"income",component:IncomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
