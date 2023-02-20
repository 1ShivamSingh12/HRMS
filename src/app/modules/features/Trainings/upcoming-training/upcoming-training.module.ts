import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingRoutingModule } from './upcoming-training-routing.module';
import { UpcomingTrainingComponent } from './upcoming-training.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    UpcomingTrainingComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingRoutingModule,
    MatIconModule,
    FooterModule
  ]
})
export class UpcomingTrainingModule { }
