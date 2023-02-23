import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DOCUMENTS, HOLIDAY_CALENDER } from 'src/app/constants/routes';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [
  {path:'',component:MyLinksComponent},
  {
    path: HOLIDAY_CALENDER.path,
    loadChildren: () =>
      import('./calender/calender.module').then((m) => m.CalenderModule),
  },
  {
    path: DOCUMENTS.path,
    loadChildren: () =>
      import('./policy-document/policy-document.module').then((m) => m.PolicyDocumentModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinksRoutingModule { }
