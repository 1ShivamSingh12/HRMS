import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FLOATING_LEAVE, MY_LEAVE } from 'src/app/constants/routes';
import { LeaveComponent } from './leave.component';

const routes: Routes = [
  {path:'',component:LeaveComponent},
  {
    path: MY_LEAVE.path,
    loadChildren: () =>
      import('./my-leave/my-leave.module').then((m) => m.MyLeaveModule),
  },

  {
    path: FLOATING_LEAVE.path,
    loadChildren: () =>
      import('./floating-leave/floating-leave.module').then((m) => m.FloatingLeaveModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
