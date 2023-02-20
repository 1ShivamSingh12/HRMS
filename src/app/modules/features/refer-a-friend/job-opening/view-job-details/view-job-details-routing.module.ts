import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewJobDetailsComponent } from './view-job-details.component';

const routes: Routes = [
  {path:'',component:ViewJobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewJobDetailsRoutingModule { }
