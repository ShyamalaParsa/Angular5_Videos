import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from 'src/app/test/test.component';
import { TemplatereferenceComponent } from 'src/app/templatereference/templatereference.component';
import { StructuraldirectivesComponent } from 'src/app/structuraldirectives/structuraldirectives.component';
import { ParentComponent } from 'src/app/parent/parent.component';
import { PipesComponent } from 'src/app/pipes/pipes.component';

const routes: Routes = [
  {path:"EventBind",component:TestComponent},
  {path:"TemplateReferenceVar",component:TemplatereferenceComponent},
  {path:"StructuralDirective",component:StructuraldirectivesComponent},
  {path:"Parent",component:ParentComponent},
  {path:"Pipes",component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
