import { Router } from '@angular/router';
import { CartProduct } from './../../models/CartProduct.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isCheckout = false;
  cartProducts: CartProduct[] = [];

  constructor(private productS: ProductService, private cartProductS: CartProductService,
     private router: Router) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartProductS.getCartProducts().subscribe(
      (data: CartProduct[]) => {
        this.cartProducts = data;
        this.cartProductS.setCartProducts(data);
      }, (error: HttpErrorResponse) => console.log(error.message)
    )
    /*this.cartProductS.selectedCartProducts$.subscribe(
      (data: CartProduct[]) => {
        this.cartProducts = data;
      }, (error: HttpErrorResponse) => console.log(error.message)
    )*/
  }

  getCartPrice(): number{
    let sum = 0;
    this.cartProducts.forEach((product) => sum += product.costo);
    return sum;
  }

  deleteCartProduct(cartProductId: number): void {
    if (confirm("Do you want to remove this item?") == true) {
      console.log(cartProductId);
      this.cartProductS.deleteCartProduct(cartProductId).subscribe(
        () => {
          console.log("removed...");
          this.getCartProducts();
        }, error => {
          console.log(error);
        }
      )
    }

  }

}
