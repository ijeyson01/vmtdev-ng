import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      let existsDataSession = localStorage.getItem('logged');
      if (!existsDataSession) {
        return true;
      } else {
        this.router.navigate(['vmt-home', 'device']);
        return false;
      }
  }
  
}
