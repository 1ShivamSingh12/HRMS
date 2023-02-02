import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FORGET_PASSWORD } from 'src/app/Constant/routes';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {path: '',component: AuthComponent},

  {path: FORGET_PASSWORD.path,loadChildren: () =>import('./forget-password/forget-password.module').then((m) => m.ForgetPasswordModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
