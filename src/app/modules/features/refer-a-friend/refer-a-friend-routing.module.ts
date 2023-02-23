import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOB_OPENING, REFERRAL_LIST } from 'src/app/constants/routes';
import { ReferAFriendComponent } from './refer-a-friend.component';

const routes: Routes = [
  {path:"",component:ReferAFriendComponent},
  {
    path: JOB_OPENING.path,
    loadChildren: () =>
      import('./job-opening/job-opening.module').then((m) => m.JobOpeningModule),
  },
  {
    path: REFERRAL_LIST.path,
    loadChildren: () =>
      import('./referral-list/referral-list.module').then((m) => m.ReferralListModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferAFriendRoutingModule { }
