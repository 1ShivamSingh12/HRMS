import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurshipRoutingModule } from './entrepreneurship-routing.module';
import { EntrepreneurshipComponent } from './entrepreneurship.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    EntrepreneurshipComponent
  ],
  imports: [
    CommonModule,
    EntrepreneurshipRoutingModule,
    FooterModule
  ]
})
export class EntrepreneurshipModule { }
