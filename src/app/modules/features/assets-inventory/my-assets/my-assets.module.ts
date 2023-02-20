import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAssetsRoutingModule } from './my-assets-routing.module';
import { MyAssetsComponent } from './my-assets.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { ListingModule } from 'src/app/shared/listing/listing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyAssetsComponent
  ],
  imports: [
    CommonModule,
    MyAssetsRoutingModule,
    CommonTableModule,
    ListingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FooterModule
  ]
})
export class MyAssetsModule { }
