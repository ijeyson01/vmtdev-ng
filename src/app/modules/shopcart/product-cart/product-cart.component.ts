import { Component, ViewChild } from '@angular/core';
import { TableProductSelectedComponent } from '../table-product-selected/table-product-selected.component';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styles: ``
})
export class ProductCartComponent {

  @ViewChild(TableProductSelectedComponent) productSelected!: TableProductSelectedComponent;

  aggProduct(product: ProductDetailI) {
    this.productSelected.listProductSelected.push(product);
  }

}
