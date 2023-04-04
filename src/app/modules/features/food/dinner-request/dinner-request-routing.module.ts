import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinnerRequestComponent } from './dinner-request.component';

const routes: Routes = [
  {path:'',component:DinnerRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinnerRequestRoutingModule { }
