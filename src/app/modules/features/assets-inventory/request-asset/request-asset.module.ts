import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetRoutingModule } from './request-asset-routing.module';
import { RequestAssetComponent } from './request-asset.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { ListingModule } from 'src/app/shared/listing/listing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    RequestAssetComponent
  ],
  imports: [
    CommonModule,
    RequestAssetRoutingModule,
    CommonTableModule,
    ListingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule
  ]
})
export class RequestAssetModule { }
