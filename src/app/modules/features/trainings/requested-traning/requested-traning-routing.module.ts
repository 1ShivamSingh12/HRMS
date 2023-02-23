import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestedTraningComponent } from './requested-traning.component';

const routes: Routes = [
  {path:'',component:RequestedTraningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestedTraningRoutingModule { }
