import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { PersonComponent } from "../crud/person/person.component";

const routes: Routes = [
    { path: '', component: MenuComponent },
    {
        path: 'vmt-home',
        children: [
          {
            path: 'device',
            loadChildren: () => import('./../crud/crud.module').then( m => m.CrudModule )
          },
          {
            path: 'person', component: PersonComponent
          },
          {
            path: 'shop-cart',
            loadChildren: () => import('./../shopcart/shopcart.module').then( m => m.ShopcartModule )
          },
          {
            path: 'edit-product/:productid',
            loadChildren: () => import('./../product/product.module').then( m => m.ProductModule)
          },
        ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}