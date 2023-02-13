import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterviewRoutingModule } from './my-interview-routing.module';
import { MyInterviewComponent } from './my-interview.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { ListingModule } from 'src/app/shared/listing/listing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    MyInterviewComponent
  ],
  imports: [
    CommonModule,
    MyInterviewRoutingModule,
    CommonTableModule,
    ListingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class MyInterviewModule { }
