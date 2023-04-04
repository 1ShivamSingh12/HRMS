import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASSETS_INVENTORY, ATTENDANCE, DIRECTORY, DSR, ENTREPRENEURSHIP, FOOD, FRESHER_TRAINING, HOME, LEAVE, MY_LINKS, MY_PROFILE, PROJECTS, RECRUITMENT, REFER_A_FRIEND,REVIEWS, TICKETS, TRAINING } from 'src/app/constants/routes';
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
      {
        path: ATTENDANCE.path,
        loadChildren: () =>
          import('./attendance/attendance.module').then((m) => m.AttendanceModule),
      },
      {
        path: LEAVE.path,
        loadChildren: () =>
          import('./leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: TICKETS.path,
        loadChildren: () =>
          import('./tickets/tickets.module').then((m) => m.TicketsModule),
      },
      {
        path: DSR.path,
        loadChildren: () =>
          import('./dsr/dsr.module').then((m) => m.DsrModule),
      },
      {
        path: PROJECTS.path,
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: FOOD.path,
        loadChildren: () =>
          import('./food/food.module').then((m) => m.FoodModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
