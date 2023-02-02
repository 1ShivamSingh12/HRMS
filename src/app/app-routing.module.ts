import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH, DASHBOARD } from './Constant/routes';
import { PageNotFoundComponent } from './Modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: AUTH.path, pathMatch: 'full' },
  {
    path: AUTH.path, loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: DASHBOARD.path, loadChildren: () => import('./Modules/features/features.module').then(m => m.FeaturesModule),
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
