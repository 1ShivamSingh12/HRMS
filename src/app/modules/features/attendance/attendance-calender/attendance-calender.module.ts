import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceCalenderRoutingModule } from './attendance-calender-routing.module';
import { AttendanceCalenderComponent } from './attendance-calender.component';


@NgModule({
  declarations: [
    AttendanceCalenderComponent
  ],
  imports: [
    CommonModule,
    AttendanceCalenderRoutingModule
  ]
})
export class AttendanceCalenderModule { }
