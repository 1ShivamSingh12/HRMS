import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PITCH, MY_PITCH } from 'src/app/constants/routes';
import { EntrepreneurshipComponent } from './entrepreneurship.component';

const routes: Routes = [
  {path:'',component:EntrepreneurshipComponent},
  {
    path: ADD_PITCH.path,
    loadChildren: () =>
      import('./add-pitch/add-pitch.module').then((m) => m.AddPitchModule),
  },
  {
    path: MY_PITCH.path,
    loadChildren: () =>
      import('./my-pitch/my-pitch.module').then((m) => m.MyPitchModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurshipRoutingModule { }
