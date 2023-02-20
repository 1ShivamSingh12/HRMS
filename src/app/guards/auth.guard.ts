import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AUTH, HOME } from '../constants/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (sessionStorage.getItem('login') === 'True') {
      return true;
    } else {
      this.route.navigate([AUTH.fullurl]);
      return false;
    }
  }
}
