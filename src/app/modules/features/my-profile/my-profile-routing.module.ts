import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APPRAISAL, BASIC_INFORMATION, CHANGE_PASSWORD, PROFILE_PICTURE, QUALIFICATION, SHIFT } from 'src/app/constants/routes';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  {path:'',component:MyProfileComponent , children:[
    {path:'',redirectTo:BASIC_INFORMATION.path,pathMatch:'full'},
    {
      path: BASIC_INFORMATION.path,
      loadChildren: () =>
        import('./basic-information/basic-information.module').then((m) => m.BasicInformationModule),
    },
    {
      path: PROFILE_PICTURE.path,
      loadChildren: () =>
        import('./profile-picture/profile-picture.module').then((m) => m.ProfilePictureModule),
    },
    {
      path: QUALIFICATION.path,
      loadChildren: () =>
        import('./qualification/qualification.module').then((m) => m.QualificationModule),
    },
    {
      path: SHIFT.path,
      loadChildren: () =>
        import('./shift/shift.module').then((m) => m.ShiftModule),
    },
    {
      path: CHANGE_PASSWORD.path,
      loadChildren: () =>
        import('./change-password/change-password.module').then((m) => m.ChangePasswordModule),
    },
    {
      path: APPRAISAL.path,
      loadChildren: () =>
        import('./appraisal/appraisal.module').then((m) => m.AppraisalModule),
    },

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
