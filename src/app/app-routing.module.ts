import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './vmtdev/authentication/authentication.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './common/shared/notfound/notfound.component';
import { PersonComponent } from './modules/crud/person/person.component';
import { MenuComponent } from './modules/menu/menu/menu.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { LoginGuard } from './guards/login-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'vmt-home', pathMatch: 'full' },
  {
    path: 'auth', component: AuthenticationComponent, canActivate: [LoginGuard]
  },
  {
    path: 'vmt-home',
    component: MenuComponent,
    canLoad: [AuthGuard],
    children: [
      {
        path: 'device',
        loadChildren: () => import('./modules/crud/crud.module').then( m => m.CrudModule )
      },
      {
        path: 'person', component: PersonComponent
      },
      {
        path: 'shop-cart',
        loadChildren: () => import('./modules/shopcart/shopcart.module').then( m => m.ShopcartModule )
      },
      {
        path: 'edit-product/:productid',
        loadChildren: () => import('./modules/product/product.module').then( m => m.ProductModule)
      },
    ]
  },
  {
    path: 'authld',
    loadComponent: () => import('./vmtdev/signup/signup.component').then( m => m.SignupComponent ),
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
