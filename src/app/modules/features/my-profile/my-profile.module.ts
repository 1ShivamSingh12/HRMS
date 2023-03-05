import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QualificationComponent } from './qualification/qualification.component';
import { MatSelectModule } from '@angular/material/select';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ShiftModule } from './shift/shift.module';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { ListingModule } from 'src/app/shared/listing/listing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { EditQualificationComponent } from './qualification/edit-qualification/edit-qualification.component';

@NgModule({
  declarations: [
    MyProfileComponent,
    BasicInformationComponent,
    ProfilePictureComponent,
    QualificationComponent,
    ChangePasswordComponent,
    AppraisalComponent,
    EditQualificationComponent,
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FooterModule,
    ShiftModule,
    CommonTableModule,
    ListingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    FieldErrorModule,
    validationError,
  ],
})
export class MyProfileModule {}
