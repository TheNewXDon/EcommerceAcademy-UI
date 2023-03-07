import { HeaderComponent } from './../header/header.component';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/Product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CartProductService } from 'src/app/services/cart-product.service';
import { CartProduct } from 'src/app/models/CartProduct.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  prodotti!: Product[];
  cartProducts: CartProduct[] = [];


  constructor(private productS: ProductService, private cartProductS: CartProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProdotti();
    this.getCartProducts();
  }

  getProdotti() {
    /*this.productS.getProducts().subscribe(
      (data: Product[]) => {
      console.log("prodotti: ", data);
      this.prodotti = data;
    }, (error: HttpErrorResponse) => console.log("Errore nel caricamento prodotti")
    )
    */
   this.productS.selectedProducts$.subscribe(
    (data: Product[]) => {
      this.prodotti = data;
    }, (error: HttpErrorResponse) => console.log(error.message)
   )
  }
  getCartProducts() {
    this.cartProductS.selectedCartProducts$.subscribe(
      (data: CartProduct[]) => {
        console.log(data);
        this.cartProducts = data;
      }, (error: HttpErrorResponse) => console.log(error.message)
    )
  }

  addToCart(product: CartProduct) {
    /*this.cartProducts.push(product);
    this.productS.setCartProducts(this.cartProducts);
    console.log(this.cartProducts, this.productS.selectedCartProducts$);
    */
   this.cartProductS.saveCartProduct(product).subscribe(
    (data: CartProduct) => {
      this.cartProducts.push(data);
      this.cartProductS.setCartProducts(this.cartProducts);
      console.log(this.cartProducts, this.cartProductS.selectedCartProducts$);
    }
    )
  }

}
