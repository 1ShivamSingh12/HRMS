import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningRoutingModule } from './job-opening-routing.module';
import { JobOpeningComponent } from './job-opening.component';
import { MatIconModule } from '@angular/material/icon';
import { jobDetailModule } from 'src/app/shared/job-details/job-details.module';


@NgModule({
  declarations: [
    JobOpeningComponent
  ],
  imports: [
    CommonModule,
    JobOpeningRoutingModule,
    MatIconModule,
    jobDetailModule
  ]
})
export class JobOpeningModule { }
