import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingTraningRoutingModule } from './ongoing-traning-routing.module';
import { OngoingTraningComponent } from './ongoing-traning.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { AppendImagePathModule } from 'src/app/pipes/append-image-path/append-image-path/append-image-path.module';


@NgModule({
  declarations: [
    OngoingTraningComponent
  ],
  imports: [
    CommonModule,
    OngoingTraningRoutingModule,
    FooterModule,
    AppendImagePathModule
  ]
})
export class OngoingTraningModule { }
