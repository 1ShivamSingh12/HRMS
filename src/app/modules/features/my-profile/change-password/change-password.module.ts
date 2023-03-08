import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';


@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FieldErrorModule,
    validationError,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChangePasswordModule { }
