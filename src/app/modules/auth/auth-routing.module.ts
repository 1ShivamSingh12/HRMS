import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FORGET_PASSWORD, LOGIN } from 'src/app/constants/routes';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '' , redirectTo : LOGIN.path , pathMatch : 'full'},

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: LOGIN.path,
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },

      {
        path: FORGET_PASSWORD.path,
        loadChildren: () =>
          import('./forget-password/forget-password.module').then(
            (m) => m.ForgetPasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
