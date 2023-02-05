import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME, MY_PROFILE } from 'src/app/constants/routes';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
