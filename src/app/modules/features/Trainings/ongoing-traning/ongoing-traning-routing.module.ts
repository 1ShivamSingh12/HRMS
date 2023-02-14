import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoingTraningComponent } from './ongoing-traning.component';

const routes: Routes = [
  {path:'',component:OngoingTraningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngoingTraningRoutingModule { }
