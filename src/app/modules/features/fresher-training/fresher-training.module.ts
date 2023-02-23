import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FresherTrainingRoutingModule } from './fresher-training-routing.module';
import { FresherTrainingComponent } from './fresher-training.component';


@NgModule({
  declarations: [
    FresherTrainingComponent
  ],
  imports: [
    CommonModule,
    FresherTrainingRoutingModule
  ]
})
export class FresherTrainingModule { }
