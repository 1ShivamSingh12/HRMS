import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningRoutingModule } from './job-opening-routing.module';
import { JobOpeningComponent } from './job-opening.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { jobDetailModule } from 'src/app/components/job-details/job-details.module';


@NgModule({
  declarations: [
    JobOpeningComponent
  ],
  imports: [
    CommonModule,
    JobOpeningRoutingModule,
    MatIconModule,
    FooterModule,
    jobDetailModule
  ]
})
export class JobOpeningModule { }
