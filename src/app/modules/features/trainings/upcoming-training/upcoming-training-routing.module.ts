import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VIEW_DETAILS_UPCOMING_TRAINING } from 'src/app/constants/routes';
import { UpcomingTrainingComponent } from './upcoming-training.component';

const routes: Routes = [
  {path:'',component:UpcomingTrainingComponent},
  {
    path: VIEW_DETAILS_UPCOMING_TRAINING.path,
    loadChildren: () =>
      import('./view-details/view-details.module').then((m) => m.ViewDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingTrainingRoutingModule { }
