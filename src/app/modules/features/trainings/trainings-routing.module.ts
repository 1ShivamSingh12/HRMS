import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_TRAININGS, ONGOING_TRAINING, REQUESTED_TRAINING, UPCOMING_TRAINING } from 'src/app/constants/routes';
import { TrainingsComponent } from './trainings.component';

const routes: Routes = [
  {path:'',component:TrainingsComponent},
  {
    path: UPCOMING_TRAINING.path,
    loadChildren: () =>
      import('./upcoming-training/upcoming-training.module').then((m) => m.UpcomingTrainingModule),
  },
  {
    path: ONGOING_TRAINING.path,
    loadChildren: () =>
      import('./ongoing-traning/ongoing-traning.module').then((m) => m.OngoingTraningModule),
  },
  {
    path: REQUESTED_TRAINING.path,
    loadChildren: () =>
      import('./requested-traning/requested-traning.module').then((m) => m.RequestedTraningModule),
  },
  {
    path: MY_TRAININGS.path,
    loadChildren: () =>
      import('./my-traning/my-traning.module').then((m) => m.MyTraningModule),
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }
