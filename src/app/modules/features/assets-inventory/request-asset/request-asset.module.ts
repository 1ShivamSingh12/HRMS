import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetRoutingModule } from './request-asset-routing.module';
import { RequestAssetComponent } from './request-asset.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    RequestAssetComponent
  ],
  imports: [
    CommonModule,
    RequestAssetRoutingModule,
    CommonTableModule,

    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownWithSearchModule,
    MatExpansionModule
  ]
})
export class RequestAssetModule { }
