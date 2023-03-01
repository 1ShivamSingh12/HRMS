import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AttendanceModule { }
