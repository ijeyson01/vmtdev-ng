import { Component, ViewChild } from '@angular/core';
import { TableProductSelectedComponent } from '../table-product-selected/table-product-selected.component';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';
import { TableProductComponent } from '../table-product/table-product.component';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styles: ``
})
export class ProductCartComponent {

  @ViewChild(TableProductSelectedComponent) productSelected!: TableProductSelectedComponent;
  @ViewChild(TableProductComponent) productsStock!: TableProductComponent;

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

  quitProduct(product: ProductDetailI) {
    let productIdQuit = product.id;
    let productQuantity = product.stock;

    this.productsStock.listaproduct.map( productQuit => {
      if(productQuit.id == productIdQuit) {
        productQuit.stock++;
      }
    });

    this.productSelected.listProductSelected.map( productSelected => {
      if(productSelected.id == productIdQuit) {
        productSelected.stock --;
      }
    });

    let productQuitValidation = this.productSelected.listProductSelected.find(productSelectedQuit => productSelectedQuit.id === productIdQuit);
    if (productQuitValidation!.stock == 0){
      let indexDeleteProduct = this.productSelected.listProductSelected.indexOf(productQuitValidation!);
      this.productSelected.listProductSelected.splice(indexDeleteProduct, 1);
    }

  }

}
