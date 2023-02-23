import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASSETS_INVENTORY, ASSET_DECLARATION, DIRECTORY, DOCUMENTS, ENTREPRENEURSHIP, FRESHER_TRAINING, HOLIDAY_CALENDER, HOME, JOB_OPENING, MY_INTERVIEW, MY_LINKS, MY_PERFORMANCE, MY_PROFILE, MY_TRAINING, ONGOING_TRAINING, RECRUITMENT, REFERRAL_LIST, REFER_A_FRIEND, REQUESTED_TRAINING, REQUEST_ASSET, REVIEWS, TRAINING, UPCOMING_TRAINING } from 'src/app/constants/routes';
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
        path: REVIEWS.path,
        loadChildren: () =>
          import('./reviews/reviews.module').then((m) => m.ReviewsModule),
      },

      {
        path:REFER_A_FRIEND.path,
        loadChildren: () =>
          import('./refer-a-friend/refer-a-friend.module').then((m) => m.ReferAFriendModule),
      },

      {
        path:MY_LINKS.path,
        loadChildren: () =>
          import('./my-links/my-links.module').then((m) => m.MyLinksModule),
      },

      {
        path:TRAINING.path,
        loadChildren: () =>
          import('./trainings/trainings.module').then((m) => m.TrainingsModule),
      },
      {
        path: ASSETS_INVENTORY.path,
        loadChildren: () =>
          import('./assets-inventory/assets-inventory.module').then((m) => m.AssetsInventoryModule),
      },

      {
        path: RECRUITMENT.path,
        loadChildren: () =>
          import('./recruitment/recruitment.module').then((m) => m.RecruitmentModule),
      },

      {
        path: FRESHER_TRAINING.path,
        loadChildren: () =>
          import('./fresher-training/fresher-training.module').then((m) => m.FresherTrainingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
