import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteQualificationComponent } from './delete-qualification/delete-qualification.component';


@NgModule({
  declarations: [
    QualificationComponent,
    EditQualificationComponent,
    DeleteQualificationComponent
  ],
  imports: [
    CommonModule,
    QualificationRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FieldErrorModule,

    CommonTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    validationError,
    MatDialogModule
  ]
})
export class QualificationModule { }
