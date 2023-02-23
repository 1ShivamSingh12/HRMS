import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MY_INTERVIEW } from 'src/app/constants/routes';
import { RecruitmentComponent } from './recruitment.component';

const routes: Routes = [
  {path:'',component:RecruitmentComponent},
  {
    path:MY_INTERVIEW.path,
    loadChildren: () =>
      import('./my-interview/my-interview.module').then((m) => m.MyInterviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
