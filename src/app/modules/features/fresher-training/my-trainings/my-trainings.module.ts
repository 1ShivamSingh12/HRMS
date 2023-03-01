import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    MyTrainingsComponent,
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    MatIconModule,
    FooterModule,
    MatDialogModule,
    MatRadioModule

  ]
})
export class MyTrainingsModule { }
