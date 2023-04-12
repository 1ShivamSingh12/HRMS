import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetRoutingModule } from './request-asset-routing.module';
import { RequestAssetComponent } from './request-asset.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { MatDatepickerModule } from '@angular/material/datepicker';


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
    MatExpansionModule,
    FieldErrorModule,
    validationError,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class RequestAssetModule { }
