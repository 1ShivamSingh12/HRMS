import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MyLeaveRoutingModule } from './my-leave-routing.module';
import { MyLeaveComponent } from './my-leave.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';

@NgModule({
  declarations: [MyLeaveComponent],
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
    DropdownWithSearchModule,
    CommonTableModule,
    FooterModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    validationError
  ],
  providers:[DatePipe]
})
export class MyLeaveModule {}
