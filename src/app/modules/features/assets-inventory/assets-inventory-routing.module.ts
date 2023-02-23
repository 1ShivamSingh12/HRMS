import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ASSET_DECLARATION, MY_ASSETS, REQUEST_ASSET } from 'src/app/constants/routes';
import { AssetsInventoryComponent } from './assets-inventory.component';

const routes: Routes = [
  {path:'',component:AssetsInventoryComponent},
  {
    path: MY_ASSETS.path,
    loadChildren: () =>
      import('./my-assets/my-assets.module').then((m) => m.MyAssetsModule),
  },
  {
    path: REQUEST_ASSET.path,
    loadChildren: () =>
      import('./request-asset/request-asset.module').then((m) => m.RequestAssetModule),
  },
  {
    path: ASSET_DECLARATION.path,
    loadChildren: () =>
      import('./asset-declaration/asset-declaration.module').then((m) => m.AssetDeclarationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsInventoryRoutingModule { }
