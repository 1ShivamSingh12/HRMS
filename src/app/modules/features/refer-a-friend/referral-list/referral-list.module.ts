import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralListRoutingModule } from './referral-list-routing.module';
import { ReferralListComponent } from './referral-list.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';




@NgModule({
  declarations: [
    ReferralListComponent
  ],
  imports: [
    CommonModule,
    ReferralListRoutingModule,
    CommonTableModule,

    FooterModule
  ]
})
export class ReferralListModule { }
