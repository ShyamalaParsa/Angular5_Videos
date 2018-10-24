import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TemplatereferenceComponent,
    StructuraldirectivesComponent,
    ChildComponent,
    ParentComponent,
    PipesComponent,
    EmployeelistComponent,
    EmployeedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
