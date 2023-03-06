import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isCheckout = false;
  cartProducts: Product[] = [];

  constructor(private productS: ProductService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.productS.selectedCartProducts$.subscribe(
      (data: Product[]) => {
        this.cartProducts = data;
      }, (error: HttpErrorResponse) => console.log(error.message)
    )
  }

  public getCartPrice(): number{
    let sum = 0;
    this.cartProducts.forEach((product) => sum += product.costo);
    return sum;
  }

}
