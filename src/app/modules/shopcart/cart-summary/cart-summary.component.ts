import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartSummaryI } from '../../../interfaces/cartsummary.interface';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styles: ``
})
export class CartSummaryComponent {
 
  @Input()
  cartSummary: CartSummaryI = {
    subtotal: 0,
    iva: 0,
    subtotaliva: 0,
    totalDescuento: 0,
    totalPago: 0,
    valorDescuento: 0
  };

}
