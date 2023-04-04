import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrEditRoutingModule } from './dsr-edit-routing.module';
import { DsrEditComponent } from './dsr-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    DsrEditComponent
  ],
  imports: [
    CommonModule,
    DsrEditRoutingModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,FooterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonTableModule,
    AngularEditorModule,
    HttpClientModule,
    MatCheckboxModule,
    DropdownWithSearchModule
  ]
})
export class DsrEditModule { }
