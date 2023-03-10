import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurshipRoutingModule } from './entrepreneurship-routing.module';
import { EntrepreneurshipComponent } from './entrepreneurship.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EntrepreneurshipComponent
  ],
  imports: [
    CommonModule,
    EntrepreneurshipRoutingModule,
    FooterModule,
    absolutePipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    AngularEditorModule,
    HttpClientModule
  ]
})
export class EntrepreneurshipModule { }
