import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTraningRoutingModule } from './requested-traning-routing.module';
import { RequestedTraningComponent } from './requested-traning.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    RequestedTraningComponent
  ],
  imports: [
    CommonModule,
    RequestedTraningRoutingModule,
    CommonTableModule,
    FooterModule
  ]
})
export class RequestedTraningModule { }
