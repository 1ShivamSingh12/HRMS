import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeaveDetailsRoutingModule } from './my-leave-details-routing.module';
import { MyLeaveDetailsComponent } from './my-leave-details.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    MyLeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    MyLeaveDetailsRoutingModule,
    MatIconModule,
    FooterModule,
    MatProgressBarModule

  ]
})
export class MyLeaveDetailsModule { }
