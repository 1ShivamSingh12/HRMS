import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPitchRoutingModule } from './add-pitch-routing.module';
import { AddPitchComponent } from './add-pitch.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';


@NgModule({
  declarations: [
    AddPitchComponent
  ],
  imports: [
    CommonModule,
    AddPitchRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FooterModule,
    FieldErrorModule,
    AngularEditorModule,
    validationError,
    DropdownWithSearchModule
  ]
})
export class AddPitchModule { }
