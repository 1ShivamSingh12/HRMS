import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailsRoutingModule } from './view-details-routing.module';
import { ViewDetailsComponent } from './view-details.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { EnrollTrainingComponent } from './enroll-training/enroll-training.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ViewDetailsComponent,
    EnrollTrainingComponent
  ],
  imports: [
    CommonModule,
    ViewDetailsRoutingModule,
    FooterModule,
    absolutePipe,
    MatDialogModule
  ]
})
export class ViewDetailsModule { }
