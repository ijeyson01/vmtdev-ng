import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
  //   throw new Error('Method not implemented.');
  // }

  canActivate(): boolean {
    if (/* your authentication condition */) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}