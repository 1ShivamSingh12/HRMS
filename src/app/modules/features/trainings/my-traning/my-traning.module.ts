import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTraningRoutingModule } from './my-traning-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { MatIconModule } from '@angular/material/icon';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { TrainingRequestComponent } from './training-request/training-request.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';


@NgModule({
  declarations: [
    MyTrainingComponent,
    TrainingRequestComponent
  ],
  imports: [
    CommonModule,
    MyTraningRoutingModule,
    MatIconModule,
    absolutePipe,
    FooterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    DropdownWithSearchModule,
    FormsModule,
    ReactiveFormsModule,
    validationError
  ]
})
export class MyTraningModule { }
