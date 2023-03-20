import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    MyDsrComponent
  ],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,FooterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonTableModule,
    AngularEditorModule,
    HttpClientModule,
    MatCheckboxModule
  ]
})
export class MyDsrModule { }
