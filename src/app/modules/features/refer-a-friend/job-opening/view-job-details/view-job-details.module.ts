import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewJobDetailsRoutingModule } from './view-job-details-routing.module';
import { ViewJobDetailsComponent } from './view-job-details.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';



@NgModule({
  declarations: [
    ViewJobDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewJobDetailsRoutingModule,
    FooterModule,
    absolutePipe
  ]
})
export class ViewJobDetailsModule { }
