import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOB_DETAILS } from 'src/app/constants/routes';
import { JobOpeningComponent } from './job-opening.component';

const routes: Routes = [
  {path:'',component:JobOpeningComponent},
  {
    path: JOB_DETAILS.path,
    loadChildren: () =>
      import('./view-job-details/view-job-details.module').then((m) => m.ViewJobDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOpeningRoutingModule { }
