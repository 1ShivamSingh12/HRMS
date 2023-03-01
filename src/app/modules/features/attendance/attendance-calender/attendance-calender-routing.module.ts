import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceCalenderComponent } from './attendance-calender.component';

const routes: Routes = [
  {path:'',component:AttendanceCalenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceCalenderRoutingModule { }
