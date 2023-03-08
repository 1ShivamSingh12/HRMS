import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    PunchLogComponent
  ],
  imports: [
    CommonModule,
    PunchLogRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FieldErrorModule,
    CommonTableModule
  ]
})
export class PunchLogModule { }
