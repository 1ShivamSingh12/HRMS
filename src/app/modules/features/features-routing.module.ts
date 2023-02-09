import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIRECTORY, ENTREPRENEURSHIP, HOLIDAY_CALENDER, HOME, JOB_OPENING, MY_PERFORMANCE, MY_PROFILE } from 'src/app/constants/routes';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        redirectTo: HOME.path,
        pathMatch: 'full',
      },
      {
        path: HOME.path,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: MY_PROFILE.path,
        loadChildren: () =>
          import('./my-profile/my-profile.module').then((m) => m.MyProfileModule),
      },
      {
        path: DIRECTORY.path,
        loadChildren: () =>
          import('./directory/directory.module').then((m) => m.DirectoryModule),
      },
      {
        path: ENTREPRENEURSHIP.path,
        loadChildren: () =>
          import('./entrepreneurship/entrepreneurship.module').then((m) => m.EntrepreneurshipModule),
      },
      {
        path: HOLIDAY_CALENDER.path,
        loadChildren: () =>
          import('./my-links/my-links.module').then((m) => m.MyLinksModule),
      },
      {
        path: MY_PERFORMANCE.path,
        loadChildren: () =>
          import('./my-performance/my-performance.module').then((m) => m.MyPerformanceModule),
      },
      {
        path: JOB_OPENING.path,
        loadChildren: () =>
          import('./job-opening/job-opening.module').then((m) => m.JobOpeningModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
