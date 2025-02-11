import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styles: ``
})
export class CartSummaryComponent {
  subtotal: number = 0;
  iva: number = this.subtotal * 0.15;
  subtotaliva: number = this.subtotal + this.iva;
  valorDescuento: number = 0;
  totalDescuento: number = this.subtotaliva * this.valorDescuento;
  totalPago: number = this.subtotaliva - this.totalDescuento;
}
