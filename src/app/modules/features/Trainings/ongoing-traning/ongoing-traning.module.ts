import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingTraningRoutingModule } from './ongoing-traning-routing.module';
import { OngoingTraningComponent } from './ongoing-traning.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    OngoingTraningComponent
  ],
  imports: [
    CommonModule,
    OngoingTraningRoutingModule,
    FooterModule
  ]
})
export class OngoingTraningModule { }
