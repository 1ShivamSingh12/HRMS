import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DSR_EDIT, MY_DSR_DETAIL } from 'src/app/constants/routes';
import { MyDsrComponent } from './my-dsr.component';

const routes: Routes = [
  {path:'',component:MyDsrComponent},
  {
    path: `${MY_DSR_DETAIL.path}/:id`,
    loadChildren: () =>
      import('./my-dsr-detail/my-dsr-detail.module').then((m) => m.MyDsrDetailModule),
  },
  {
    path: DSR_EDIT.path,
    loadChildren: () =>
      import('./dsr-edit/dsr-edit.module').then((m) => m.DsrEditModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDsrRoutingModule { }
