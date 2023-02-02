import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { LoginWithCredentialsComponent } from './login-with-credentials/login-with-credentials.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { absolutePipe } from 'src/app/Pipes/Absolute Path/absolute-path.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AuthComponent,
    LoginWithGoogleComponent,
    LoginWithCredentialsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    absolutePipe,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
