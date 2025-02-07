import { Component, EventEmitter, Output } from '@angular/core';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';

@Component({
  selector: 'app-table-product-selected',
  templateUrl: './table-product-selected.component.html',
  styles: ``
})
export class TableProductSelectedComponent {

  @Output() eventQuitProduct = new EventEmitter<ProductDetailI>();

  listProductSelected: ProductDetailI[] = [];

  quitProduct(product: ProductDetailI) {
    this.eventQuitProduct.emit(product);
  }
}
