import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePictureRoutingModule } from './profile-picture-routing.module';
import { ProfilePictureComponent } from './profile-picture.component';


@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    ProfilePictureRoutingModule
  ]
})
export class ProfilePictureModule { }
