import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeaveRoutingModule } from './my-leave-routing.module';
import { MyLeaveComponent } from './my-leave.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyLeaveComponent
  ],
  imports: [
    CommonModule,
    MyLeaveRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    AngularEditorModule,
    HttpClientModule,

    CommonTableModule,
    FooterModule
  ]
})
export class MyLeaveModule { }
