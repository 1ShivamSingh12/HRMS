import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASSETS_INVENTORY, ASSET_DECLARATION, DIRECTORY, ENTREPRENEURSHIP, HOLIDAY_CALENDER, HOME, JOB_OPENING, MY_INTERVIEW, MY_PERFORMANCE, MY_PROFILE, REFERRAL_LIST, REQUEST_ASSET } from 'src/app/constants/routes';
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
          import('./refer-a-friend/job-opening/job-opening.module').then((m) => m.JobOpeningModule),
      },
      {
        path: REFERRAL_LIST.path,
        loadChildren: () =>
          import('./refer-a-friend/referral-list/referral-list.module').then((m) => m.ReferralListModule),
      },
      {
        path: MY_INTERVIEW.path,
        loadChildren: () =>
          import('./Recruitment/my-interview/my-interview.module').then((m) => m.MyInterviewModule),
      },
      {
        path: ASSETS_INVENTORY.path,
        loadChildren: () =>
          import('./assets-inventory/my-assets/my-assets.module').then((m) => m.MyAssetsModule),
      },
      {
        path: REQUEST_ASSET.path,
        loadChildren: () =>
          import('./assets-inventory/request-asset/request-asset.module').then((m) => m.RequestAssetModule),
      },
      {
        path: ASSET_DECLARATION.path,
        loadChildren: () =>
          import('./assets-inventory/asset-declaration/asset-declaration.module').then((m) => m.AssetDeclarationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
