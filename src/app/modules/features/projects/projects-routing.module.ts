import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { PROJECT_DETAIL } from 'src/app/constants/routes';

const routes: Routes = [
  {path:'',component:ProjectsComponent},
  {
    path: PROJECT_DETAIL.path,
    loadChildren: () =>
      import('./project-details/project-details.module').then((m) => m.ProjectDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
