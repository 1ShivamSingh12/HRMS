import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDsrDetailRoutingModule } from './my-dsr-detail-routing.module';
import { MyDsrDetailComponent } from './my-dsr-detail.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyDsrDetailComponent
  ],
  imports: [
    CommonModule,
    MyDsrDetailRoutingModule,
    CommonTableModule,
    FooterModule
  ]
})
export class MyDsrDetailModule { }
