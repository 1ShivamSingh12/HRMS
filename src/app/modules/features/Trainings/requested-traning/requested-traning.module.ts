import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTraningRoutingModule } from './requested-traning-routing.module';
import { RequestedTraningComponent } from './requested-traning.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { ListingModule } from 'src/app/shared/listing/listing.module';


@NgModule({
  declarations: [
    RequestedTraningComponent
  ],
  imports: [
    CommonModule,
    RequestedTraningRoutingModule,
    CommonTableModule,
    ListingModule
  ]
})
export class RequestedTraningModule { }
