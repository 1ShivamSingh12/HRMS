import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LUNCH_COUPON, REQUEST_DINNER } from 'src/app/constants/routes';
import { FoodComponent } from './food.component';

const routes: Routes = [
  { path: '', component: FoodComponent },
  {
    path: LUNCH_COUPON.path,
    loadChildren: () =>
      import('./lunch-coupon/lunch-coupon.module').then(
        (m) => m.LunchCouponModule
      ),
  },
  {
    path: REQUEST_DINNER.path,
    loadChildren: () =>
      import('./dinner-request/dinner-request.module').then(
        (m) => m.DinnerRequestModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule { }
