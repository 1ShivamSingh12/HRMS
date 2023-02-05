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



@NgModule({
  declarations: [
    MyProfileComponent,
    BasicInformationComponent,
    ProfilePictureComponent,
    QualificationComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MyProfileModule { }
