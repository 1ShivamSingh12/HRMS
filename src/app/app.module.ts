import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HelpDialogComponent } from './shared/dialog/help-dialog/help-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Covid19Component } from './shared/dialog/covid19/covid19.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CarouselModule } from './shared/carousel/carousel.module';
import { FieldErrorModule } from './shared/field-error/field-error.module';
import { validationError } from './pipes/validation-error/valiadation-error.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HelpDialogComponent,
    Covid19Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CarouselModule,
    FieldErrorModule,
    validationError,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
