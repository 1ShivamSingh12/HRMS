import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeaveRoutingModule } from './floating-leave-routing.module';
import { FloatingLeaveComponent } from './floating-leave.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    FloatingLeaveComponent
  ],
  imports: [
    CommonModule,
    FloatingLeaveRoutingModule,
    CommonTableModule,
    FooterModule
  ]
})
export class FloatingLeaveModule { }
