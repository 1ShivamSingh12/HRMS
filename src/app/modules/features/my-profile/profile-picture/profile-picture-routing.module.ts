import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePictureComponent } from './profile-picture.component';

const routes: Routes = [
  {path:'',component:ProfilePictureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePictureRoutingModule { }
