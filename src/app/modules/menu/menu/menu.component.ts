import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  
  menuElements: any[] = [
    {
      label: 'Dispositivos',
      route: 'device'
    },
    {
      label: 'Personas',
      route: 'person'
    },
    {
      label: 'Carrito',
      route: 'shop-cart'
    }
  ]
}
