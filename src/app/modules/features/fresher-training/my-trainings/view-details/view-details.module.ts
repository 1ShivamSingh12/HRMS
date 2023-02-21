import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailsRoutingModule } from './view-details-routing.module';
import { ViewDetailsComponent } from './view-details.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { TrainingsDetailsComponent } from './trainings-details/trainings-details.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { SubTopicsComponent } from './sub-topics/sub-topics.component';
import { AttendenceComponent } from './attendence/attendence.component';


@NgModule({
  declarations: [
    ViewDetailsComponent,
    TrainingsDetailsComponent,
    SubTopicsComponent,
    AttendenceComponent
  ],
  imports: [
    CommonModule,
    ViewDetailsRoutingModule,
    MatButtonToggleModule,
    MatTabsModule,
    CommonTableModule,
    FooterModule

  ]
})
export class ViewDetailsModule { }
