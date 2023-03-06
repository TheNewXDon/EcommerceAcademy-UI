import { HeaderComponent } from './../header/header.component';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/Product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  prodotti!: Product[];
  cartProducts: Product[] = [];


  constructor(private productS: ProductService, private router: Router) { }

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
    this.productS.selectedCartProducts$.subscribe(
      (data: Product[]) => {
        console.log(data);
        this.cartProducts = data;
      }, (error: HttpErrorResponse) => console.log(error.message)
    )
  }

  addToCart(product: Product) {
    this.cartProducts.push(product);
    this.productS.setCartProducts(this.cartProducts);
    console.log(this.cartProducts, this.productS.selectedCartProducts$);
  }

}
