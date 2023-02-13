import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInterviewComponent } from './my-interview.component';

const routes: Routes = [
  {path:'',component:MyInterviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInterviewRoutingModule { }
