import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SavedGuard implements CanDeactivate<unknown> {

  observableBS: string = ''; // BehaviorSubject: Observable que puede contener 1 solo valor; 1
  observableRS: string = ''; // ReplaySubject: Observable que puede contener hasta 3 valores, 
                             // estbleciendo un historico de los valores del observable ['a', 'b', 'c']; obsevableRS(1) = 'a'; observable(2) = 'b'..

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return true;
  }
  
}
