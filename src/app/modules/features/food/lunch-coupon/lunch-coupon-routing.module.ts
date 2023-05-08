import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunchCouponComponent } from './lunch-coupon.component';
import { PURCHASE_COUPON } from 'src/app/constants/routes';

const routes: Routes = [
  {path: '', component: LunchCouponComponent},
  {
    path: PURCHASE_COUPON.path,
    loadChildren: () =>
      import('./purchase-coupon/purchase-coupon.module').then((m) => m.PurchaseCouponModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunchCouponRoutingModule { }
