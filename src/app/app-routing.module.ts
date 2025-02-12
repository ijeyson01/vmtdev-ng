import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo3Component } from './vmtdev/ejemplo3/ejemplo3.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './common/shared/notfound/notfound.component';
import { PersonComponent } from './modules/crud/person/person.component';

const routes: Routes = [
  { path: '', redirectTo: 'device', pathMatch: 'full' },
  {
    path: 'auth', component: Ejemplo3Component
  },
  {
    path: 'device',
    loadChildren: () => import('./modules/crud/crud.module').then( m => m.CrudModule )
  },
  {
    path: 'person', component: PersonComponent
  },
  {
    path: 'authld',
    loadComponent: () => import('./vmtdev/ejemplo2/ejemplo2.component').then( m => m.Ejemplo2Component )
  },
  {
    path: 'shop-cart',
    loadChildren: () => import('./modules/shopcart/shopcart.module').then( m => m.ShopcartModule )
  },
  {
    path: 'edit-product/:productid',
    loadChildren: () => import('./modules/product/product.module').then( m => m.ProductModule)
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
