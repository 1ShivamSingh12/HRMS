import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';

@NgModule({
  declarations: [
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FooterModule,
    CommonTableModule,

    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    FieldErrorModule,
    validationError,
    absolutePipe
  ],
})
export class MyProfileModule {}
