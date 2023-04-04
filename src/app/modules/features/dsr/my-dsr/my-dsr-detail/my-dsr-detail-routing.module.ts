import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDsrDetailComponent } from './my-dsr-detail.component';

const routes: Routes = [
  {path:'',component:MyDsrDetailComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDsrDetailRoutingModule { }
