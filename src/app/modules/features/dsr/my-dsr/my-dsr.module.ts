import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';


@NgModule({
  declarations: [
    MyDsrComponent
  ],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
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
    DropdownWithSearchModule,
    ReactiveFormsModule,
    FormsModule,
    FooterModule,
    NgxMaterialTimepickerModule,
    validationError
  ],
  providers:[DatePipe]
})
export class MyDsrModule { }
