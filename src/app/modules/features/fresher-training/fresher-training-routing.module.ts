import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_TRAINING } from 'src/app/constants/routes';
import { FresherTrainingComponent } from './fresher-training.component';

const routes: Routes = [
  {path:'',component:FresherTrainingComponent},
  {
    path: MY_TRAINING.path,
    loadChildren: () =>
      import('./my-trainings/my-trainings.module').then((m) => m.MyTrainingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FresherTrainingRoutingModule { }
