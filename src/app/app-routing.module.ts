import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo3Component } from './vmtdev/authentication/authentication.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './common/shared/notfound/notfound.component';
import { PersonComponent } from './modules/crud/person/person.component';
import { MenuComponent } from './modules/menu/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'vmt-home', pathMatch: 'full' },
  {
    path: 'auth', component: Ejemplo3Component
  },
  {
    path: 'vmt-home',
    component: MenuComponent,
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
    loadComponent: () => import('./vmtdev/signup/signup.component').then( m => m.SignupComponent )
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
