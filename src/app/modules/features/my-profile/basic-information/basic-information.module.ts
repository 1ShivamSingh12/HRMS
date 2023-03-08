import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    BasicInformationComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FieldErrorModule,
    validationError,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class BasicInformationModule { }
