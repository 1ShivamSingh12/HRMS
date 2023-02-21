import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentRoutingModule } from './policy-document-routing.module';
import { PolicyDocumentComponent } from './policy-document.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    PolicyDocumentComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentRoutingModule,
    CommonTableModule
  ]
})
export class PolicyDocumentModule { }
