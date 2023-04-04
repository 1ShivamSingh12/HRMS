import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_LEAVE_DETAILS } from 'src/app/constants/routes';
import { MyLeaveComponent } from './my-leave.component';

const routes: Routes = [
  {path:'',component:MyLeaveComponent},
  {
    path: `${MY_LEAVE_DETAILS.path}/:id`,
    loadChildren: () =>
      import('./my-leave-details/my-leave-details.module').then((m) => m.MyLeaveDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLeaveRoutingModule { }
