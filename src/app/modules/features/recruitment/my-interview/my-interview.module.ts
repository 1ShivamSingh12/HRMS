import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterviewRoutingModule } from './my-interview-routing.module';
import { MyInterviewComponent } from './my-interview.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyInterviewComponent
  ],
  imports: [
    CommonModule,
    MyInterviewRoutingModule,
    CommonTableModule,

    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FooterModule
  ]
})
export class MyInterviewModule { }
