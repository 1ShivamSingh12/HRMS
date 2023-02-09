import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLinksRoutingModule } from './my-links-routing.module';
import { MyLinksComponent } from './my-links.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';



@NgModule({
  declarations: [
    MyLinksComponent
  ],
  imports: [
    CommonModule,
    MyLinksRoutingModule,
    FooterModule
  ]
})
export class MyLinksModule { }
