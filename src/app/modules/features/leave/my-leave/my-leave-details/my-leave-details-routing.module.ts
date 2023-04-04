import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLeaveDetailsComponent } from './my-leave-details.component';

const routes: Routes = [
  {path:'',component:MyLeaveDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLeaveDetailsRoutingModule { }
