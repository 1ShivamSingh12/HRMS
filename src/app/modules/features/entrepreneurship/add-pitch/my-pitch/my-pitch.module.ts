import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPitchRoutingModule } from './my-pitch-routing.module';
import { MyPitchComponent } from './my-pitch.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyPitchComponent
  ],
  imports: [
    CommonModule,
    MyPitchRoutingModule,
    CommonTableModule,
    FooterModule
  ]
})
export class MyPitchModule { }
