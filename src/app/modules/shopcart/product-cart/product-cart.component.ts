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
    let productSelected = product.product;
    let productCategorySelected = product.category;
    let productPriceSelected = product.price;
    let productIdSelected = product.id;

    if(this.productSelected.listProductSelected.length > 0) {
      let productValidation = this.productSelected.listProductSelected.find( productInCart => productInCart.id == productIdSelected);
      if(productValidation) {
        this.productSelected.listProductSelected.map( productInCart => {
          if(productInCart.id == productValidation.id) {
            productInCart.stock++;
          }
        })
      } else {
        let newProduct: ProductDetailI = {
          id: productIdSelected,
          product: productSelected,
          category: productCategorySelected,
          price: productPriceSelected, 
          provider: '',
          stock: 1
        } 
        this.productSelected.listProductSelected.push(newProduct);
      }
    } else {
      let newProduct: ProductDetailI = {
        id: productIdSelected,
        product: productSelected,
        category: productCategorySelected,
        price: productPriceSelected, 
        provider: '',
        stock: 1
      } 
      this.productSelected.listProductSelected.push(newProduct);
    }
  }

}
