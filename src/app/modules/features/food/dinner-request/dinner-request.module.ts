import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnerRequestRoutingModule } from './dinner-request-routing.module';
import { DinnerRequestComponent } from './dinner-request.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    DinnerRequestComponent
  ],
  imports: [
    CommonModule,
    DinnerRequestRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DropdownWithSearchModule,
    AngularEditorModule,
    HttpClientModule,
    FooterModule
  ]
})
export class DinnerRequestModule { }
