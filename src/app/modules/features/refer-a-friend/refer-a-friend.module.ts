import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferAFriendRoutingModule } from './refer-a-friend-routing.module';
import { ReferAFriendComponent } from './refer-a-friend.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { StoreModule } from '@ngrx/store';
import { ReferAFriendReducer } from 'src/app/store/state.reducers';
import { REFER_A_FRIEND } from 'src/app/store/state.selector';



@NgModule({
  declarations: [
    ReferAFriendComponent
  ],
  imports: [
    CommonModule,
    ReferAFriendRoutingModule,
    FooterModule,
    StoreModule.forFeature(REFER_A_FRIEND, ReferAFriendReducer)

  ]
})
export class ReferAFriendModule { }
