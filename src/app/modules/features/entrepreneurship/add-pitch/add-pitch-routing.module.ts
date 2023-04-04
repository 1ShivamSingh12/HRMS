import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_PITCH } from 'src/app/constants/routes';
import { AddPitchComponent } from './add-pitch.component';

const routes: Routes = [
  {path:'',component:AddPitchComponent},
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
export class AddPitchRoutingModule { }
