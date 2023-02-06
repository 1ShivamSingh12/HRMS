import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { LoginWithCredentialsComponent } from './login-with-credentials/login-with-credentials.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    LoginComponent,
    LoginWithGoogleComponent,
    LoginWithCredentialsComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    absolutePipe,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    validationError,
    FieldErrorModule,
    MatSnackBarModule,
IvyCarouselModule



  ]
})
export class LoginModule { }
