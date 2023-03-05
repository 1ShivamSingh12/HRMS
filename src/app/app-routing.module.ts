import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH, DASHBOARD } from './constants/routes';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: AUTH.path, pathMatch: 'full'},
  {
    path: AUTH.path, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    // canActivate:[AuthGuard],
    path: DASHBOARD.path, loadChildren: () => import('./modules/features/features.module').then(m => m.FeaturesModule),
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
