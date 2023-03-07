import { CartProductService } from './../../services/cart-product.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/Product.model';
import { Component, OnInit, NgModule } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { CartProduct } from 'src/app/models/CartProduct.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  products!: Product[];
  allProducts!: Product[];
  cartProducts: CartProduct[] = [];

  constructor(private productS: ProductService, private cartProductS: CartProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productS.selectedProducts$.subscribe(
      (data: Product[]) => {
        this.products = data;
      }, (error: HttpErrorResponse) => console.log(error.message)
     )
     this.getCartProducts();
  }

  getProducts() {
    this.productS.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.allProducts = data;
        this.productS.setProducts(data);
      }, (error: HttpErrorResponse) => console.log(error.message)
    )
  }

  getCartProducts() {
    this.cartProductS.selectedCartProducts$.subscribe(
      (data: CartProduct[]) => {
        this.cartProducts = data;
      }, (error: HttpErrorResponse) => console.log(error.message)
    )
  }

  public searchProducts(key:  string): void {
    console.log(key);
    const results: Product[] = [];
    for (const product of this.products) {
      if (product.nome.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.marca.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.descrizione.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        console.log("Product ", product);
        results.push(product);
      }
    }
    console.log("Results ", results);
    this.products = results;
    this.productS.setProducts(results);
    if (!key)
      this.getProducts();
  }

  public getCategory(key: string): void{
    const results: Product[] = [];
    for (const product of this.allProducts) {
      if (product.categoria == key) {
        results.push(product);
      }
    }
    console.log(key);
    console.log("Results ", results);
    this.products = results;
    this.productS.setProducts(results);
  }

  public getCartPrice(): number{
    let sum = 0;
    this.cartProducts.forEach((product) => sum += product.costo);
    return sum;
  }
}
