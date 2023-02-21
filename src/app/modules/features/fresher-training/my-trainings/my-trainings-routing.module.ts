import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VIEW_DETAILS } from 'src/app/constants/routes';
import { MyTrainingsComponent } from './my-trainings.component';

const routes: Routes = [
  {path:'',component:MyTrainingsComponent},
  {
    path: VIEW_DETAILS.path,
    loadChildren: () =>
      import('./view-details/view-details.module').then((m) => m.ViewDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrainingsRoutingModule { }
