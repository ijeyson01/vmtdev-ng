import { Component, ViewChild } from '@angular/core';
import { TableProductSelectedComponent } from '../table-product-selected/table-product-selected.component';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';
import { TableProductComponent } from '../table-product/table-product.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartSummaryI } from '../../../interfaces/cartsummary.interface';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styles: ``
})
export class ProductCartComponent {

  @ViewChild(TableProductSelectedComponent) productSelected!: TableProductSelectedComponent;
  @ViewChild(TableProductComponent) productsStock!: TableProductComponent;
  @ViewChild(CartSummaryComponent) cartSumary!: CartSummaryComponent;

  discount: number = 0.01;
  cartSummaryValue: CartSummaryI = {
    subtotal: 0,
    iva: 0,
    subtotaliva: 0,
    totalDescuento: 0,
    totalPago: 0,
    valorDescuento: 0
  }

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
    this.cartSummaryValue = this.subtotalCalc(this.productSelected.listProductSelected);
    // this.cartSumary.valorDescuento = this.discount;
    // this.cartSumary.subtotal = subtotalValue;
    // this.cartSumary.iva = ivaValue;
    // this.cartSumary.subtotaliva = subtotalIvaValue;
    // this.cartSumary.totalDescuento = discountValue;
    // this.cartSumary.totalPago = totalValue;

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

    this.cartSummaryValue = this.subtotalCalc(this.productSelected.listProductSelected);
    // this.cartSumary.valorDescuento = this.discount;
    // let { subtotalValue, ivaValue, subtotalIvaValue, discountValue, totalValue } = this.subtotalCalc(this.productSelected.listProductSelected);
    // this.cartSumary.subtotal = subtotalValue;
    // this.cartSumary.iva = ivaValue;
    // this.cartSumary.subtotaliva = subtotalIvaValue;
    // this.cartSumary.totalDescuento = discountValue;
    // this.cartSumary.totalPago = totalValue;

  }

  subtotalCalc(productsSelectedList: ProductDetailI[]): CartSummaryI {
    let subtotal: number = 0;
    let iva: number = 0;
    let subtotaliva: number = 0;
    let totalDescuento: number = 0;
    let totalPago: number = 0
    if (productsSelectedList.length > 0) {
      productsSelectedList.forEach( product => {
        subtotal = subtotal + (product.price * product.stock);
      });
    }

    iva = subtotal * 0.15;
    subtotaliva = subtotal + iva;
    totalDescuento = subtotaliva * this.discount;
    totalPago = subtotaliva - totalDescuento;

    return { subtotal, 
      iva,
      subtotaliva,
      totalDescuento,
      totalPago,
      valorDescuento: this.discount
     };
  }

}
