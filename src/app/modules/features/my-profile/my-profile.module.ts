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
import {MatSelectModule} from '@angular/material/select';
import { ShiftComponent } from './shift/shift.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ShiftModule } from './shift/shift.module';



@NgModule({
  declarations: [
    MyProfileComponent,
    BasicInformationComponent,
    ProfilePictureComponent,
    QualificationComponent,
    ChangePasswordComponent,
    AppraisalComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FooterModule,
    ShiftModule
  ]
})
export class MyProfileModule { }
