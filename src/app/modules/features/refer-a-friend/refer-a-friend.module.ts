import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferAFriendRoutingModule } from './refer-a-friend-routing.module';
import { ReferAFriendComponent } from './refer-a-friend.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';



@NgModule({
  declarations: [
    ReferAFriendComponent
  ],
  imports: [
    CommonModule,
    ReferAFriendRoutingModule,
    FooterModule
  ]
})
export class ReferAFriendModule { }
